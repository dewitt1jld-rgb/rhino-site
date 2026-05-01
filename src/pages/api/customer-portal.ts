import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getUserFromRequest(req: NextApiRequest) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.replace("Bearer ", "");

  const {
    data: { user },
    error,
  } = await supabaseAdmin.auth.getUser(token);

  if (error || !user) {
    return null;
  }

  return user;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const user = await getUserFromRequest(req);

    if (!user) {
      return res.status(401).json({ error: "You must be logged in." });
    }

    const { data: access, error: accessError } = await supabaseAdmin
      .from("member_access")
      .select("stripe_customer_id")
      .eq("profile_id", user.id)
      .single();

    if (accessError || !access?.stripe_customer_id) {
      return res.status(404).json({
        error: "No Stripe customer found for this account.",
      });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: access.stripe_customer_id,
      return_url: `${baseUrl}/dashboard`,
    });

    return res.status(200).json({ url: portalSession.url });
  } catch (error: any) {
    console.error("Customer portal error:", error);

    return res.status(500).json({
      error: error.message || "Unable to open billing portal.",
    });
  }
}