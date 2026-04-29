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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_creation: "always",

      payment_intent_data: {
        setup_future_usage: "off_session",
      },

      line_items: [
        {
          price: process.env.STRIPE_INITIAL_PRICE_ID!,
          quantity: 1,
        },
      ],

      metadata: {
        profile_id: user.id,
        email: user.email || "",
      },

      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/pricing?canceled=true`,
    });

    res.status(200).json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    res.status(500).json({ error: err.message });
  }
}