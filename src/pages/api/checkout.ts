import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type CheckoutPlan = "lifetime";

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

    const token =
      req.headers.authorization?.replace("Bearer ", "");

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

    if (plan !== "lifetime") {
      return res.status(400).json({
        error:
          "Lifetime Access is the only purchase option currently available.",
      });
    }

    /*
    --------------------------------------------------
    FIND PROFILE / COMPANY
    --------------------------------------------------
    */

    const {
      data: profile,
      error: profileError,
    } = await supabaseAdmin
      .from("profiles")
      .select("id, company_id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error(
        "Failed to load profile:",
        profileError
      );

      return res.status(500).json({
        error: "Unable to verify your account.",
      });
    }

    let company:
      | {
          id: string;
          plan_type: string | null;
          platform_access: boolean;
          support_included: boolean;
          stripe_customer_id: string | null;
          platform_subscription_id: string | null;
          support_subscription_id: string | null;
        }
      | null = null;

    if (profile?.company_id) {
      const {
        data: companyData,
        error: companyError,
      } = await supabaseAdmin
        .from("companies")
        .select(`
          id,
          plan_type,
          platform_access,
          support_included,
          stripe_customer_id,
          platform_subscription_id,
          support_subscription_id
        `)
        .eq("id", profile.company_id)
        .maybeSingle();

      if (companyError) {
        console.error(
          "Failed to load company:",
          companyError
        );

        return res.status(500).json({
          error:
            "Unable to verify your company account.",
        });
      }

      company = companyData;
    }

    /*
    --------------------------------------------------
    EXISTING MEMBER ACCESS
    --------------------------------------------------
    */

    const {
      data: existingAccess,
      error: accessError,
    } = await supabaseAdmin
      .from("member_access")
      .select(`
        status,
        stripe_customer_id,
        stripe_subscription_id
      `)
      .eq("profile_id", user.id)
      .maybeSingle();

    if (accessError) {
      console.error(
        "Failed to load member access:",
        accessError
      );

      return res.status(500).json({
        error: "Unable to verify account access.",
      });
    }

    /*
    --------------------------------------------------
    PREVENT DUPLICATE PLATFORM PURCHASES
    --------------------------------------------------
    */

    const alreadyHasPlatform =
      company?.platform_access === true;

    if (alreadyHasPlatform) {
      return res.status(409).json({
        error:
          "Your company already has training platform access.",
      });
    }

    /*
    --------------------------------------------------
    STRIPE PRICE
    --------------------------------------------------
    */

    const priceId =
      process.env.STRIPE_LIFETIME_PRICE_ID;

    if (!priceId) {
      console.error(
        "Missing STRIPE_LIFETIME_PRICE_ID."
      );

      return res.status(500).json({
        error:
          "Lifetime Access is not configured correctly. Please contact us.",
      });
    }

    /*
    --------------------------------------------------
    EXISTING STRIPE CUSTOMER
    --------------------------------------------------
    */

    const existingCustomerId =
      company?.stripe_customer_id ||
      existingAccess?.stripe_customer_id ||
      null;

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

      plan: "lifetime",

      platform_access: "true",

      support_included: "false",
    };

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
    CREATE LIFETIME CHECKOUT
    --------------------------------------------------
    */

    const checkoutSession =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],

        mode: "payment",

        /*
        Reuse the existing Stripe Customer
        when possible.
        */

        ...(existingCustomerId
          ? {
              customer: existingCustomerId,
            }
          : {
              customer_email:
                user.email || undefined,

              customer_creation:
                "always" as const,
            }),

        allow_promotion_codes: true,

        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],

        metadata,

        payment_intent_data: {
          receipt_email:
            user.email || undefined,

          metadata,
        },

        success_url:
          `${baseUrl}/welcome?plan=lifetime`,

        cancel_url:
          `${baseUrl}/pricing?canceled=true`,
      });

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