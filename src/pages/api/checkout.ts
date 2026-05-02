import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Missing auth token" });
    }

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(token);

    if (userError || !user) {
      return res.status(401).json({ error: "User not found" });
    }

    const { extraReceiptEmail } = req.body || {};

    const { data: existingAccess, error: accessCheckError } =
      await supabaseAdmin
        .from("member_access")
        .select("status, stripe_customer_id, stripe_subscription_id")
        .eq("profile_id", user.id)
        .maybeSingle();

    if (accessCheckError) {
      console.error("Failed to check existing member access:", accessCheckError);
      return res.status(500).json({ error: "Unable to verify account access." });
    }

    if (
      existingAccess?.stripe_customer_id ||
      existingAccess?.stripe_subscription_id
    ) {
      return res.status(409).json({
        error:
          "This account has already purchased initial access. Please use the billing portal or contact support.",
      });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin || "http://localhost:3000";

    const metadata = {
      profile_id: user.id,
      email: user.email || "",
      extra_receipt_email: extraReceiptEmail || "",
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_creation: "always",

      // Forces Stripe Checkout to use the logged-in account email.
      customer_email: user.email || undefined,

      payment_intent_data: {
        setup_future_usage: "off_session",

        // Stripe receipt goes to the logged-in account email.
        receipt_email: user.email || undefined,

        metadata,
      },

      line_items: [
        {
          price: process.env.STRIPE_INITIAL_PRICE_ID!,
          quantity: 1,
        },
      ],

      metadata,

      success_url: `${baseUrl}/welcome`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return res.status(500).json({ error: err.message });
  }
}