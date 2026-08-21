import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({
        error: "Method Not Allowed",
      });
  }

  try {
    /*
    --------------------------------------------------
    VERIFY USER
    --------------------------------------------------
    */

    const token =
      req.headers.authorization?.replace(
        "Bearer ",
        ""
      );

    if (!token) {
      return res.status(401).json({
        error: "Missing auth token.",
      });
    }

    const {
      data: { user },
      error: userError,
    } =
      await supabaseAdmin.auth.getUser(
        token
      );

    if (
      userError ||
      !user
    ) {
      return res.status(401).json({
        error: "User not found.",
      });
    }

    /*
    --------------------------------------------------
    FIND PROFILE + COMPANY
    --------------------------------------------------
    */

    const {
      data: profile,
      error: profileError,
    } = await supabaseAdmin
      .from("profiles")
      .select(`
        id,
        company_id
      `)
      .eq(
        "id",
        user.id
      )
      .maybeSingle();

    if (
      profileError ||
      !profile?.company_id
    ) {
      return res.status(400).json({
        error:
          "No company account was found.",
      });
    }

    const {
      data: company,
      error: companyError,
    } = await supabaseAdmin
      .from("companies")
      .select(`
        id,
        company_name,
        plan_type,
        platform_access,
        support_included,
        access_status,
        stripe_customer_id,
        platform_subscription_id,
        support_subscription_id,
        commitment_start_date,
        commitment_end_date,
        cancel_requested,
        cancel_requested_at
      `)
      .eq(
        "id",
        profile.company_id
      )
      .maybeSingle();

    if (
      companyError ||
      !company
    ) {
      return res.status(400).json({
        error:
          "Company account could not be found.",
      });
    }

    /*
    --------------------------------------------------
    FIND ACTIVE RECURRING SUBSCRIPTION
    --------------------------------------------------

    Support + Website:
    platform_subscription_id

    Support Only:
    support_subscription_id

    Lifetime-only customers have nothing
    recurring to cancel.
    --------------------------------------------------
    */

    const subscriptionId =
      company.platform_subscription_id ||
      company.support_subscription_id;

    if (!subscriptionId) {
      return res.status(400).json({
        error:
          "There is no active recurring subscription to cancel.",
      });
    }

    /*
    --------------------------------------------------
    REQUIRE COMMITMENT END DATE
    --------------------------------------------------
    */

    if (
      !company.commitment_end_date
    ) {
      return res.status(400).json({
        error:
          "This subscription does not have a commitment end date. Please contact support.",
      });
    }

    const commitmentEnd =
      new Date(
        company.commitment_end_date
      );

    if (
      Number.isNaN(
        commitmentEnd.getTime()
      )
    ) {
      return res.status(400).json({
        error:
          "The commitment end date is invalid. Please contact support.",
      });
    }

    const now =
      new Date();

    /*
    --------------------------------------------------
    DETERMINE CANCELLATION DATE
    --------------------------------------------------

    During the first year:
    cancel at commitment end.

    After the minimum commitment:
    cancel at end of current paid billing period.
    --------------------------------------------------
    */

    let scheduledCancelDate:
      Date;

    let cancellationType:
      "commitment_end" |
      "period_end";

    if (
      now <
      commitmentEnd
    ) {
      scheduledCancelDate =
        commitmentEnd;

      cancellationType =
        "commitment_end";
    } else {
      const subscription =
        await stripe.subscriptions.retrieve(
          subscriptionId
        );

      /*
        In newer Stripe versions the subscription
        item carries the billing-period end.
      */

      const currentPeriodEnd =
        subscription.items.data[0]
          ?.current_period_end;

      if (!currentPeriodEnd) {
        return res.status(400).json({
          error:
            "Unable to determine the current billing period end.",
        });
      }

      scheduledCancelDate =
        new Date(
          currentPeriodEnd *
          1000
        );

      cancellationType =
        "period_end";
    }

    /*
    --------------------------------------------------
    SCHEDULE STRIPE CANCELLATION
    --------------------------------------------------

    Stripe will continue billing normally until
    this future cancellation timestamp.
    --------------------------------------------------
    */

    const cancelAt =
      Math.floor(
        scheduledCancelDate.getTime() /
        1000
      );

    await stripe.subscriptions.update(
      subscriptionId,
      {
        cancel_at:
          cancelAt,

        proration_behavior:
          "none",

        metadata: {
          ...(
            (
              await stripe.subscriptions.retrieve(
                subscriptionId
              )
            ).metadata
          ),

          cancellation_requested:
            "true",

          cancellation_requested_at:
            now.toISOString(),

          scheduled_cancel_at:
            scheduledCancelDate.toISOString(),
        },
      }
    );

    /*
    --------------------------------------------------
    SAVE REQUEST IN SUPABASE
    --------------------------------------------------
    */

    const {
      error: updateError,
    } = await supabaseAdmin
      .from("companies")
      .update({
        cancel_requested:
          true,

        cancel_requested_at:
          now.toISOString(),
      })
      .eq(
        "id",
        company.id
      );

    if (updateError) {
      throw updateError;
    }

    /*
    --------------------------------------------------
    SUCCESS
    --------------------------------------------------
    */

    return res.status(200).json({
      success: true,

      cancellationType,

      scheduledCancelDate:
        scheduledCancelDate.toISOString(),

      message:
        cancellationType ===
        "commitment_end"
          ? "Your cancellation request has been received. Your subscription will remain active through the end of your 12-month commitment."
          : "Your cancellation request has been received. Your subscription will remain active through the end of your current billing period.",
    });
  } catch (error: any) {
    console.error(
      "Cancellation request error:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Unable to request cancellation.",
    });
  }
}