import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: NextApiRequest) {
  const chunks: Buffer[] = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];

  if (!sig) {
    return res.status(400).send("Missing stripe-signature header");
  }

  let event: Stripe.Event;

  try {
    const rawBody = await buffer(req);

    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("Stripe webhook received:", event.type);

  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const customerId = invoice.customer as string;

    const { error } = await supabaseAdmin
      .from("member_access")
      .update({ status: "inactive" })
      .eq("stripe_customer_id", customerId);

    if (error) {
      console.error("Failed to deactivate member:", error);
    } else {
      console.log("Member access revoked due to failed payment");
    }

    return res.status(200).json({ received: true });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const profileId = session.metadata?.profile_id;

    if (!profileId) {
      console.error("Missing profile_id in checkout metadata");
      return res.status(200).json({ received: true });
    }

    const { data: existingAccess } = await supabaseAdmin
      .from("member_access")
      .select("stripe_subscription_id")
      .eq("profile_id", profileId)
      .maybeSingle();

    if (existingAccess?.stripe_subscription_id) {
      console.log("Subscription already exists for this user. Skipping duplicate.");
      return res.status(200).json({ received: true });
    }

    console.log("Checkout completed:", session.id);
    console.log("Customer:", session.customer);

    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent as string
      );

      const paymentMethodId = paymentIntent.payment_method as string;

      await stripe.customers.update(session.customer as string, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

      const subscription = await stripe.subscriptions.create({
        customer: session.customer as string,
        items: [
          {
            price: process.env.STRIPE_RENEWAL_PRICE_ID!,
          },
        ],
        default_payment_method: paymentMethodId,
      });

      const { error: accessError } = await supabaseAdmin
        .from("member_access")
        .upsert(
          {
            profile_id: profileId,
            status: "active",
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: subscription.id,
          },
          {
            onConflict: "profile_id",
          }
        );

      if (accessError) {
        console.error("Failed to update member access:", accessError);
      } else {
        console.log("Member access activated:", profileId);
      }

      console.log("Annual renewal subscription created:", subscription.id);
    } catch (error) {
      console.error("Failed to create renewal subscription:", error);
    }
  }

  return res.status(200).json({ received: true });
}