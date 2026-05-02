import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

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

    const customer = await stripe.customers.retrieve(customerId);

    const customerEmail =
      !customer.deleted && customer.email ? customer.email : null;

    const { error } = await supabaseAdmin
      .from("member_access")
      .update({ status: "inactive" })
      .eq("stripe_customer_id", customerId);

    if (error) {
      console.error("Failed to deactivate member:", error);
    } else {
      console.log("Member access revoked due to failed payment:", customerId);
    }

    if (customerEmail) {
      await sendEmail({
        to: customerEmail,
        subject: "Action Required: Rhino Wrangler Training Access Paused",
        html: `
          <h1>Training Access Paused</h1>
          <p>Your Rhino Wrangler training access has been paused because your renewal payment failed.</p>
          <p>To restore access, please log in and update your billing information:</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/account-inactive">Restore Access</a></p>
          <p>If you need help, contact us at ${
            process.env.SUPPORT_EMAIL || "landon@therhinowrangler.com"
          }.</p>
        `,
      });
    }

    return res.status(200).json({ received: true });
  }

  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const customerId = invoice.customer as string;

    const { error } = await supabaseAdmin
      .from("member_access")
      .update({ status: "active" })
      .eq("stripe_customer_id", customerId);

    if (error) {
      console.error("Failed to reactivate member:", error);
    } else {
      console.log(
        "Member access reactivated after successful payment:",
        customerId
      );
    }

    return res.status(200).json({ received: true });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const profileId = session.metadata?.profile_id;
    const userEmail = session.metadata?.email;
    const extraReceiptEmail = session.metadata?.extra_receipt_email;

    if (!profileId) {
      console.error("Missing profile_id in checkout metadata");
      return res.status(200).json({ received: true });
    }

    if (!session.customer) {
      console.error("Missing Stripe customer on checkout session");
      return res.status(200).json({ received: true });
    }

    if (!session.payment_intent) {
      console.error("Missing payment_intent on checkout session");
      return res.status(200).json({ received: true });
    }

    const { data: existingAccess } = await supabaseAdmin
      .from("member_access")
      .select("stripe_customer_id, stripe_subscription_id")
      .eq("profile_id", profileId)
      .maybeSingle();

    if (existingAccess?.stripe_customer_id || existingAccess?.stripe_subscription_id) {
      console.log(
        "Access already exists for this user. Skipping duplicate webhook work."
      );
      return res.status(200).json({ received: true });
    }

    console.log("Checkout completed:", session.id);
    console.log("Customer:", session.customer);

    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent as string
      );

      const paymentMethodId = paymentIntent.payment_method as string | null;

      if (!paymentMethodId) {
        console.error("Missing payment method on payment intent");
        return res.status(200).json({ received: true });
      }

      await stripe.customers.update(session.customer as string, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

      // First, immediately activate access and save the Stripe customer.
      // This prevents a schedule creation error from leaving the customer with no access.
      const { error: initialAccessError } = await supabaseAdmin
        .from("member_access")
        .upsert(
          {
            profile_id: profileId,
            status: "active",
            stripe_customer_id: session.customer as string,
          },
          {
            onConflict: "profile_id",
          }
        );

      if (initialAccessError) {
        console.error("Failed to activate member access:", initialAccessError);
        return res.status(200).json({ received: true });
      }

      const oneYearFromNow =
        Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60;

      const renewalSchedule = await stripe.subscriptionSchedules.create({
        customer: session.customer as string,
        start_date: oneYearFromNow,
        end_behavior: "release",
        default_settings: {
          default_payment_method: paymentMethodId,
        },
        metadata: {
          profile_id: profileId,
          email: userEmail || "",
          subscription_type: "annual_renewal",
        },
        phases: [
          {
            items: [
              {
                price: process.env.STRIPE_RENEWAL_PRICE_ID!,
                quantity: 1,
              },
            ],
          },
        ],
      });

      // For now we are storing the renewal schedule ID in stripe_subscription_id.
      // Later, we can add a separate stripe_schedule_id column if you want it cleaner.
      const { error: scheduleSaveError } = await supabaseAdmin
        .from("member_access")
        .update({
          stripe_subscription_id: renewalSchedule.id,
        })
        .eq("profile_id", profileId);

      if (scheduleSaveError) {
        console.error("Failed to save renewal schedule ID:", scheduleSaveError);
      } else {
        console.log("Annual renewal schedule created:", renewalSchedule.id);
      }

      if (userEmail) {
        await sendEmail({
          to: userEmail,
          subject: "Welcome to The Rhino Wrangler Training Platform",
          html: `
            <h1>Welcome to The Rhino Wrangler</h1>
            <p>Your training access is now active.</p>
            <p>You can log in and begin training here:</p>
            <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}/dashboard">Go to Training Dashboard</a></p>
            <p><strong>Important:</strong> The Rhino Wrangler is an independent training program and is not affiliated with, sponsored by, or endorsed by DeMichele Group.</p>
            <p>Payments to The Rhino Wrangler are for Rhino Wrangler training only and do not replace or apply toward any DeMichele Group software, machine, service, or subscription fees.</p>
          `,
        });
      }

      if (extraReceiptEmail) {
        await sendEmail({
          to: extraReceiptEmail,
          subject: "Rhino Wrangler Training Access Receipt",
          html: `
            <h1>Rhino Wrangler Training Access</h1>
            <p>This is a receipt notification for a Rhino Wrangler training access purchase.</p>
            <p>Account email: ${userEmail || "N/A"}</p>
            <p>Access is tied to the account email used to log in.</p>
            <p>If you have questions, contact landon@therhinowrangler.com.</p>
          `,
        });
      }

      console.log("Member access activated:", profileId);
    } catch (error) {
      console.error("Failed during checkout completion handling:", error);
    }

    return res.status(200).json({ received: true });
  }

  return res.status(200).json({ received: true });
}