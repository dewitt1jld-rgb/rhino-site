import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";
import { buildWelcomeEmail } from "@/lib/emails/welcomeEmail";

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

function formatAmount(amountTotal: number | null, currency: string | null) {
  if (!amountTotal || !currency) return "Unknown";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amountTotal / 100);
}

async function sendAdminSitePurchaseEmail({
  userEmail,
  extraReceiptEmail,
  amount,
  stripeSessionId,
}: {
  userEmail: string | undefined;
  extraReceiptEmail: string | undefined;
  amount: string;
  stripeSessionId: string;
}) {
  const adminEmails =
    process.env.ADMIN_NOTIFICATION_EMAILS ||
    process.env.ADMIN_EMAILS ||
    "dewittjld@gmail.com,landon@therhinowrangler.com";

  await sendEmail({
    to: adminEmails,
    subject: "New Rhino Wrangler Site Purchase",
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h1>New Site Access Purchase</h1>

        <p>A customer just purchased lifetime access to The Rhino Wrangler.</p>

        <p>
          <strong>Customer Email:</strong> ${userEmail || "Unknown"}<br />
          <strong>Extra Receipt Email:</strong> ${extraReceiptEmail || "None"}<br />
          <strong>Amount:</strong> ${amount}<br />
          <strong>Stripe Session:</strong> ${stripeSessionId}
        </p>

        <p>Member access should now be active.</p>
      </div>
    `,
  });
}

async function sendAdminClassPurchaseEmail({
  studentName,
  studentEmail,
  companyName,
  className,
  classDates,
  amount,
}: {
  studentName: string;
  studentEmail: string;
  companyName: string;
  className: string;
  classDates: string;
  amount: string;
}) {
  const adminEmails =
    process.env.ADMIN_NOTIFICATION_EMAILS ||
    process.env.ADMIN_EMAILS ||
    "dewittjld@gmail.com,landon@therhinowrangler.com";

  await sendEmail({
    to: adminEmails,
    subject: "New Rhino Wrangler Class Booking",
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h1>New Class Booking</h1>

        <p>A student just booked a live virtual class.</p>

        <p>
          <strong>Student:</strong> ${studentName || "Unknown"}<br />
          <strong>Email:</strong> ${studentEmail || "Unknown"}<br />
          <strong>Company:</strong> ${companyName || "Unknown"}<br />
          <strong>Class:</strong> ${className || "Unknown"}<br />
          <strong>Dates:</strong> ${classDates || "Unknown"}<br />
          <strong>Amount:</strong> ${amount}
        </p>
      </div>
    `,
  });
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

    if (session.metadata?.purchase_type === "virtual_class") {
      const metadata = session.metadata;
      const amount = formatAmount(session.amount_total, session.currency);

      const { error } = await supabaseAdmin.from("class_reservations").insert({
        class_id: metadata.class_id || null,
        stripe_session_id: session.id,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : null,
        class_name: metadata.class_name || "",
        class_dates: metadata.class_dates || "",
        class_timezone: metadata.class_timezone || "",
        student_name: metadata.student_name || "",
        student_email: metadata.student_email || "",
        company_name: metadata.company_name || "",
        amount_paid: session.amount_total,
        currency: session.currency,
        status: "paid",
      });

      if (error) {
        console.error("Error saving class reservation:", error);
        throw error;
      }

      await sendEmail({
        to: metadata.student_email || "",
        subject: "You're booked for Rhino Wrangler Certified",
        html: `
          <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
            <h1>You're booked!</h1>

            <p>Thank you for reserving your seat in:</p>

            <h2>Rhino Wrangler Certified: Complete Software Masterclass</h2>

            <p>
              <strong>Student:</strong> ${metadata.student_name || ""}<br />
              <strong>Company:</strong> ${metadata.company_name || ""}<br />
              <strong>Class Dates:</strong> ${metadata.class_dates || ""}<br />
              <strong>Class Time:</strong> 8:00 AM – 3:00 PM<br />
              <strong>Time Zone:</strong> ${
                metadata.class_timezone || "Eastern Time"
              }
            </p>

            <p>
              This is a 3-day live training experience covering workflows,
              troubleshooting, guided walkthroughs, and real-world operation.
            </p>

            <h3>What to have ready</h3>
            <ul>
              <li>Computer capable of running your software</li>
              <li>Stable internet connection</li>
              <li>Access to your systems</li>
              <li>Notebook or digital notes</li>
            </ul>

            <p>Webinar access details will be sent before class begins.</p>

            <p>
              Questions? Contact:
              <br />
              <a href="mailto:landon@therhinowrangler.com">
                landon@therhinowrangler.com
              </a>
            </p>

            <hr />

            <p style="font-size: 13px; color: #6b7280;">
              The Rhino Wrangler is an independent training program and is not affiliated
              with or endorsed by DeMichele Group.
            </p>
          </div>
        `,
      });

      await sendAdminClassPurchaseEmail({
        studentName: metadata.student_name || "",
        studentEmail: metadata.student_email || "",
        companyName: metadata.company_name || "",
        className: metadata.class_name || "",
        classDates: metadata.class_dates || "",
        amount,
      });

      return res.status(200).json({ received: true });
    }

    const profileId = session.metadata?.profile_id;
    const userEmail = session.metadata?.email;
    const extraReceiptEmail = session.metadata?.extra_receipt_email;
    const amount = formatAmount(session.amount_total, session.currency);

    if (!profileId) {
      console.error("Missing profile_id in checkout metadata");
      return res.status(200).json({ received: true });
    }

    if (!session.customer) {
      console.error("Missing Stripe customer on checkout session");
      return res.status(200).json({ received: true });
    }
try {
   // Save the customer's default payment method when one exists.
// Free checkouts (100% discount) won't have a payment_intent, and that's okay.
if (session.payment_intent) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    session.payment_intent as string
  );

  const paymentMethodId = paymentIntent.payment_method as string | null;

  if (paymentMethodId) {
    await stripe.customers.update(session.customer as string, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });
  }
}

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

      if (userEmail) {
        await sendEmail({
          to: userEmail,
          subject: "Welcome to The Rhino Wrangler",
          html: buildWelcomeEmail(userEmail),
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

      await sendAdminSitePurchaseEmail({
        userEmail,
        extraReceiptEmail,
        amount,
        stripeSessionId: session.id,
      });

      console.log("Member access activated:", profileId);
    } catch (error) {
      console.error("Failed during checkout completion handling:", error);
    }

    return res.status(200).json({ received: true });
  }

  return res.status(200).json({ received: true });
}