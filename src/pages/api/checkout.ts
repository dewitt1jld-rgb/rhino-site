import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type CheckoutPlan = "annual" | "lifetime";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    /*
    --------------------------------------------------
    VERIFY USER
    --------------------------------------------------
    */

    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        error: "Missing auth token",
      });
    }

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(token);

    if (userError || !user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    /*
    --------------------------------------------------
    VERIFY PLAN
    --------------------------------------------------
    */

    const { plan } = req.body as {
      plan?: CheckoutPlan;
    };

    if (plan !== "annual" && plan !== "lifetime") {
      return res.status(400).json({
        error: "Please select a valid purchase plan.",
      });
    }

    const isAnnual = plan === "annual";

    /*
    --------------------------------------------------
    VERIFY STRIPE PRICE
    --------------------------------------------------
    */

    const priceId = isAnnual
      ? process.env.STRIPE_ANNUAL_PRICE_ID
      : process.env.STRIPE_LIFETIME_PRICE_ID;

    if (!priceId) {
      console.error(
        `Missing Stripe price ID for ${plan} plan.`
      );

      return res.status(500).json({
        error:
          "This purchase option is not configured correctly. Please contact support.",
      });
    }

    /*
    --------------------------------------------------
    CHECK EXISTING ACCESS
    --------------------------------------------------
    */

    const {
      data: existingAccess,
      error: accessCheckError,
    } = await supabaseAdmin
      .from("member_access")
      .select(
        "status, stripe_customer_id, stripe_subscription_id"
      )
      .eq("profile_id", user.id)
      .maybeSingle();

    if (accessCheckError) {
      console.error(
        "Failed to check existing member access:",
        accessCheckError
      );

      return res.status(500).json({
        error: "Unable to verify account access.",
      });
    }

    if (
      existingAccess?.stripe_customer_id ||
      existingAccess?.stripe_subscription_id
    ) {
      return res.status(409).json({
        error:
          "This account has already purchased access. Please contact support if you need to change plans.",
      });
    }

    /*
    --------------------------------------------------
    BASE URL
    --------------------------------------------------
    */

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      req.headers.origin ||
      "http://localhost:3000";

    /*
    --------------------------------------------------
    METADATA
    --------------------------------------------------
    */

    const metadata = {
      profile_id: user.id,
      email: user.email || "",
      first_name:
        user.user_metadata?.first_name || "",
      last_name:
        user.user_metadata?.last_name || "",
      company_name:
        user.user_metadata?.company_name || "",
      plan,
      support_included:
        isAnnual ? "true" : "false",
    };

    /*
    --------------------------------------------------
    CREATE STRIPE CHECKOUT SESSION
    --------------------------------------------------
    */

    const checkoutSession =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],

        mode: isAnnual
          ? "subscription"
          : "payment",

        customer_creation: isAnnual
          ? undefined
          : "always",

        customer_email:
          user.email || undefined,

        allow_promotion_codes: true,

        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],

        /*
        Metadata placed directly on the
        Checkout Session.

        Your checkout.session.completed
        webhook can read this.
        */

        metadata,

        /*
        ANNUAL SUBSCRIPTION

        Stripe creates a Subscription.
        Put the same metadata on it so
        subscription webhook events know
        which Rhino Wrangler account it
        belongs to.
        */

        ...(isAnnual
          ? {
              subscription_data: {
                metadata,
              },
            }
          : {
              /*
              LIFETIME PURCHASE

              Stripe creates a PaymentIntent.
              Store the same metadata there.
              */

              payment_intent_data: {
                receipt_email:
                  user.email || undefined,

                metadata,
              },
            }),

        success_url:
          `${baseUrl}/welcome?plan=${plan}`,

        cancel_url:
          `${baseUrl}/pricing?canceled=true`,
      });

    /*
    --------------------------------------------------
    SUCCESS
    --------------------------------------------------
    */

    return res.status(200).json({
      url: checkoutSession.url,
    });
  } catch (err: any) {
    console.error(
      "Stripe checkout error:",
      err
    );

    return res.status(500).json({
      error:
        err?.message ||
        "Unable to start checkout.",
    });
  }
}