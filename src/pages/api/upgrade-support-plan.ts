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

    if (userError || !user) {
      return res.status(401).json({
        error: "User not found.",
      });
    }

    /*
    --------------------------------------------------
    FIND PROFILE
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
      .eq("id", user.id)
      .maybeSingle();

    if (
      profileError ||
      !profile?.company_id
    ) {
      console.error(
        "Upgrade profile error:",
        profileError
      );

      return res.status(400).json({
        error:
          "No company account was found.",
      });
    }

    /*
    --------------------------------------------------
    FIND COMPANY
    --------------------------------------------------
    */

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
        support_subscription_id
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
      console.error(
        "Upgrade company error:",
        companyError
      );

      return res.status(400).json({
        error:
          "Company account could not be found.",
      });
    }

    /*
    --------------------------------------------------
    VERIFY SUPPORT-ONLY PLAN
    --------------------------------------------------
    */

    if (
      company.support_included !==
        true ||
      company.platform_access === true
    ) {
      return res.status(409).json({
        error:
          "This company is not currently on the Support Only plan.",
      });
    }

    if (
      !company.support_subscription_id
    ) {
      return res.status(400).json({
        error:
          "No active support subscription was found. Please contact support.",
      });
    }

    /*
    --------------------------------------------------
    GET NEW STRIPE PRICE
    --------------------------------------------------
    */

    const newPriceId =
      process.env
        .STRIPE_ANNUAL_PRICE_ID;

    if (!newPriceId) {
      return res.status(500).json({
        error:
          "The Support + Website price is not configured.",
      });
    }

    /*
    --------------------------------------------------
    GET CURRENT STRIPE SUBSCRIPTION
    --------------------------------------------------
    */

    const subscription =
      await stripe.subscriptions.retrieve(
        company.support_subscription_id
      );

    if (
      !subscription.items.data.length
    ) {
      return res.status(400).json({
        error:
          "The Stripe subscription does not contain a subscription item.",
      });
    }

    const subscriptionItem =
      subscription.items.data[0];

    /*
    --------------------------------------------------
    UPGRADE EXISTING SUBSCRIPTION
    --------------------------------------------------

    We are NOT creating a new subscription.

    We replace the $450 quarterly Support
    price with the $600 quarterly
    Platform + Support price.

    Stripe will prorate the price
    difference for the remainder of
    the current billing period.
    --------------------------------------------------
    */

    const updatedSubscription =
      await stripe.subscriptions.update(
        subscription.id,
        {
          items: [
            {
              id:
                subscriptionItem.id,

              price:
                newPriceId,
            },
          ],

          proration_behavior:
            "create_prorations",

          metadata: {
            profile_id:
              user.id,

            email:
              user.email || "",

            company_name:
              company.company_name ||
              "",

            plan:
              "annual",

            platform_access:
              "true",

            support_included:
              "true",
          },
        }
      );

    /*
    --------------------------------------------------
    UPDATE COMPANY
    --------------------------------------------------
    */

    const {
      error:
        companyUpdateError,
    } = await supabaseAdmin
      .from("companies")
      .update({
        plan_type:
          "annual",

        platform_access:
          true,

        support_included:
          true,

        access_status:
          "active",

        platform_subscription_id:
          updatedSubscription.id,

        support_subscription_id:
          null,

        stripe_customer_id:
          typeof updatedSubscription.customer ===
          "string"
            ? updatedSubscription.customer
            : updatedSubscription
                .customer.id,
      })
      .eq(
        "id",
        company.id
      );

    if (
      companyUpdateError
    ) {
      console.error(
        "Company upgrade update failed:",
        companyUpdateError
      );

      return res.status(500).json({
        error:
          "Stripe was updated, but the company record could not be updated. Please contact support.",
      });
    }

    /*
    --------------------------------------------------
    UPDATE MEMBER ACCESS
    --------------------------------------------------
    */

    const {
      data:
        existingMemberAccess,
    } = await supabaseAdmin
      .from("member_access")
      .select("profile_id")
      .eq(
        "profile_id",
        user.id
      )
      .maybeSingle();

    const memberValues = {
      status:
        "active",

      stripe_customer_id:
        typeof updatedSubscription.customer ===
        "string"
          ? updatedSubscription.customer
          : updatedSubscription
              .customer.id,

      stripe_subscription_id:
        updatedSubscription.id,
    };

    if (
      existingMemberAccess
    ) {
      const {
        error:
          memberUpdateError,
      } = await supabaseAdmin
        .from("member_access")
        .update(
          memberValues
        )
        .eq(
          "profile_id",
          user.id
        );

      if (
        memberUpdateError
      ) {
        console.error(
          "Member access upgrade failed:",
          memberUpdateError
        );
      }
    } else {
      const {
        error:
          memberInsertError,
      } = await supabaseAdmin
        .from("member_access")
        .insert({
          profile_id:
            user.id,

          ...memberValues,
        });

      if (
        memberInsertError
      ) {
        console.error(
          "Member access insert failed:",
          memberInsertError
        );
      }
    }

    /*
    --------------------------------------------------
    SUCCESS
    --------------------------------------------------
    */

    return res.status(200).json({
      success: true,

      message:
        "Your Support + Website plan is now active.",

      subscriptionId:
        updatedSubscription.id,
    });
  } catch (error: any) {
    console.error(
      "Support plan upgrade error:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Unable to upgrade your plan.",
    });
  }
}