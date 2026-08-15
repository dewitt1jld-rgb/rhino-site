import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { randomInt } from "crypto";
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
    chunks.push(
      typeof chunk === "string"
        ? Buffer.from(chunk)
        : chunk
    );
  }

  return Buffer.concat(chunks);
}

function formatAmount(
  amountTotal: number | null,
  currency: string | null
) {
  if (!amountTotal || !currency) {
    return "Unknown";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amountTotal / 100);
}

/*
--------------------------------------------------
RHINO ACCESS CODE
--------------------------------------------------
*/

async function generateUniqueRhinoAccessCode() {
  for (
    let attempt = 0;
    attempt < 25;
    attempt++
  ) {
    const numericPart = randomInt(
      0,
      100000
    )
      .toString()
      .padStart(5, "0");

    const code = `RW-${numericPart}`;

    const {
      data,
      error,
    } = await supabaseAdmin
      .from("companies")
      .select("id")
      .eq("customer_number", code)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return code;
    }
  }

  throw new Error(
    "Unable to generate a unique Rhino Access Code."
  );
}

/*
--------------------------------------------------
CREATE / UPDATE COMPANY
--------------------------------------------------
*/

async function ensureCompanyForPurchase({
  profileId,
  companyName,
  planType,
  supportIncluded,
}: {
  profileId: string;
  companyName?: string | null;
  planType: "annual" | "lifetime";
  supportIncluded: boolean;
}) {
  const {
    data: profile,
    error: profileError,
  } = await supabaseAdmin
    .from("profiles")
    .select(`
      id,
      company_id,
      company_name
    `)
    .eq("id", profileId)
    .maybeSingle();

  if (profileError) {
    throw profileError;
  }

  if (!profile) {
    throw new Error(
      "Purchaser profile could not be found."
    );
  }

  /*
    If this profile is already connected
    to a company, reuse that company.
  */

  if (profile.company_id) {
    const {
      data: existingCompany,
      error: existingCompanyError,
    } = await supabaseAdmin
      .from("companies")
      .select(`
        id,
        company_name,
        customer_number,
        seat_limit,
        access_status,
        plan_type,
        support_included
      `)
      .eq("id", profile.company_id)
      .single();

    if (existingCompanyError) {
      throw existingCompanyError;
    }

    const {
      error: companyUpdateError,
    } = await supabaseAdmin
      .from("companies")
      .update({
        access_status: "active",
        plan_type: planType,
        support_included:
          supportIncluded,
      })
      .eq("id", existingCompany.id);

    if (companyUpdateError) {
      throw companyUpdateError;
    }

    return {
      ...existingCompany,
      access_status: "active",
      plan_type: planType,
      support_included:
        supportIncluded,
    };
  }

  const cleanCompanyName =
    companyName?.trim() ||
    profile.company_name?.trim();

  if (!cleanCompanyName) {
    throw new Error(
      "Company name is missing from the purchaser profile and Stripe metadata."
    );
  }

  const rhinoAccessCode =
    await generateUniqueRhinoAccessCode();

  const {
    data: company,
    error: companyError,
  } = await supabaseAdmin
    .from("companies")
    .insert({
      company_name: cleanCompanyName,
      customer_number: rhinoAccessCode,
      seat_limit: 7,
      access_status: "active",
      plan_type: planType,
      support_included:
        supportIncluded,
    })
    .select(`
      id,
      company_name,
      customer_number,
      seat_limit,
      access_status,
      plan_type,
      support_included
    `)
    .single();

  if (companyError) {
    throw companyError;
  }

  const {
    error: profileUpdateError,
  } = await supabaseAdmin
    .from("profiles")
    .update({
      company_id: company.id,
      company_name: cleanCompanyName,
      role: "company_admin",
      is_active: true,
    })
    .eq("id", profileId);

  if (profileUpdateError) {
    await supabaseAdmin
      .from("companies")
      .delete()
      .eq("id", company.id);

    throw profileUpdateError;
  }

  return company;
}

/*
--------------------------------------------------
ADMIN SITE PURCHASE EMAIL
--------------------------------------------------
*/

async function sendAdminSitePurchaseEmail({
  userEmail,
  extraReceiptEmail,
  amount,
  stripeSessionId,
  firstName,
  lastName,
  companyName,
  stripeCustomerId,
  rhinoAccessCode,
  planType,
  supportIncluded,
}: {
  userEmail?: string | null;
  extraReceiptEmail?: string | null;
  amount?: string;
  stripeSessionId?: string;
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  stripeCustomerId?: string | null;
  rhinoAccessCode?: string | null;
  planType?: string | null;
  supportIncluded?: boolean;
}) {
  const adminEmails =
    process.env.ADMIN_EMAILS ||
    process.env.ADMIN_EMAIL ||
    "";

  if (!adminEmails) {
    console.error(
      "Admin purchase email skipped: ADMIN_EMAILS / ADMIN_EMAIL is missing."
    );

    return;
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.therhinowrangler.com";

  const environment =
    siteUrl.includes("testing")
      ? "Testing"
      : "Production";

  const planLabel =
    planType === "annual"
      ? "Annual Membership"
      : "Lifetime Access";

  await sendEmail({
    to: adminEmails,

    subject:
      `New Rhino Wrangler ${planLabel} Purchase`,

    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h1>New Rhino Wrangler Purchase</h1>

        <p>
          A customer just purchased
          <strong>${planLabel}</strong>.
        </p>

        <h2>Customer Information</h2>

        <p>
          <strong>First Name:</strong>
          ${firstName || "Unknown"}<br />

          <strong>Last Name:</strong>
          ${lastName || "Unknown"}<br />

          <strong>Company:</strong>
          ${companyName || "Unknown"}<br />

          <strong>Login Email:</strong>
          ${userEmail || "Unknown"}<br />

          <strong>Extra Receipt Email:</strong>
          ${extraReceiptEmail || "None"}
        </p>

        <h2>Purchase Information</h2>

        <p>
          <strong>Plan:</strong>
          ${planLabel}<br />

          <strong>Support Included:</strong>
          ${supportIncluded ? "Yes" : "No"}<br />

          <strong>Amount:</strong>
          ${amount || "Unknown"}<br />

          <strong>Environment:</strong>
          ${environment}<br />

          <strong>Stripe Customer ID:</strong>
          ${stripeCustomerId || "Unknown"}<br />

          <strong>Stripe Session:</strong>
          ${stripeSessionId || "Unknown"}<br />

          <strong>Rhino Access Code:</strong>
          ${rhinoAccessCode || "Unknown"}
        </p>

        <p>
          <strong>Status:</strong>
          Member access should now be active.
        </p>
      </div>
    `,
  });
}

/*
--------------------------------------------------
ADMIN CLASS PURCHASE EMAIL
--------------------------------------------------
*/

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

    subject:
      "New Rhino Wrangler Class Booking",

    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h1>New Class Booking</h1>

        <p>
          A student just booked a live virtual class.
        </p>

        <p>
          <strong>Student:</strong>
          ${studentName || "Unknown"}<br />

          <strong>Email:</strong>
          ${studentEmail || "Unknown"}<br />

          <strong>Company:</strong>
          ${companyName || "Unknown"}<br />

          <strong>Class:</strong>
          ${className || "Unknown"}<br />

          <strong>Dates:</strong>
          ${classDates || "Unknown"}<br />

          <strong>Amount:</strong>
          ${amount}
        </p>
      </div>
    `,
  });
}

/*
--------------------------------------------------
MAIN WEBHOOK HANDLER
--------------------------------------------------
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .send("Method Not Allowed");
  }

  const sig =
    req.headers["stripe-signature"];

  if (!sig) {
    return res
      .status(400)
      .send(
        "Missing stripe-signature header"
      );
  }

  let event: Stripe.Event;

  try {
    const rawBody =
      await buffer(req);

    event =
      stripe.webhooks.constructEvent(
        rawBody,
        sig,
        process.env
          .STRIPE_WEBHOOK_SECRET!
      );
  } catch (err: any) {
    console.error(
      "Webhook signature verification failed:",
      err.message
    );

    return res
      .status(400)
      .send(
        `Webhook Error: ${err.message}`
      );
  }

  console.log(
    "Stripe webhook received:",
    event.type
  );

  /*
  --------------------------------------------------
  ANNUAL SUBSCRIPTION PAYMENT FAILED
  --------------------------------------------------
  */

  if (
    event.type ===
    "invoice.payment_failed"
  ) {
    const invoice =
      event.data.object as Stripe.Invoice;

    const customerId =
      typeof invoice.customer === "string"
        ? invoice.customer
        : invoice.customer?.id;

    if (!customerId) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    /*
      Only deactivate customers whose
      company is on the annual plan.

      This prevents a lifetime purchaser
      from accidentally losing access
      because of an unrelated Stripe
      invoice.
    */

    const {
      data: memberRows,
      error: memberLookupError,
    } = await supabaseAdmin
      .from("member_access")
      .select(`
        profile_id,
        stripe_customer_id
      `)
      .eq(
        "stripe_customer_id",
        customerId
      );

    if (memberLookupError) {
      console.error(
        "Failed to find member for failed invoice:",
        memberLookupError
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    for (
      const member of memberRows || []
    ) {
      const {
        data: profile,
      } = await supabaseAdmin
        .from("profiles")
        .select("company_id")
        .eq(
          "id",
          member.profile_id
        )
        .maybeSingle();

      if (!profile?.company_id) {
        continue;
      }

      const {
        data: company,
      } = await supabaseAdmin
        .from("companies")
        .select(
          "plan_type"
        )
        .eq(
          "id",
          profile.company_id
        )
        .maybeSingle();

      if (
        company?.plan_type !==
        "annual"
      ) {
        continue;
      }

      await supabaseAdmin
        .from("member_access")
        .update({
          status: "inactive",
        })
        .eq(
          "profile_id",
          member.profile_id
        );

      await supabaseAdmin
        .from("companies")
        .update({
          access_status:
            "inactive",
          support_included:
            false,
        })
        .eq(
          "id",
          profile.company_id
        );
    }

    const customer =
      await stripe.customers.retrieve(
        customerId
      );

    const customerEmail =
      !customer.deleted &&
      customer.email
        ? customer.email
        : null;

    if (customerEmail) {
      await sendEmail({
        to: customerEmail,

        subject:
          "Action Required: Rhino Wrangler Training Access Paused",

        html: `
          <h1>Training Access Paused</h1>

          <p>
            Your Rhino Wrangler annual membership
            payment could not be completed.
          </p>

          <p>
            Your training access has been paused
            until the billing issue is corrected.
          </p>

          <p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/account-inactive">
              Restore Access
            </a>
          </p>

          <p>
            If you need help, contact us at
            ${
              process.env
                .SUPPORT_EMAIL ||
              "landon@therhinowrangler.com"
            }.
          </p>
        `,
      });
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  /*
  --------------------------------------------------
  ANNUAL SUBSCRIPTION PAYMENT SUCCESS
  --------------------------------------------------
  */

  if (
    event.type ===
    "invoice.payment_succeeded"
  ) {
    const invoice =
      event.data.object as Stripe.Invoice;

    const customerId =
      typeof invoice.customer === "string"
        ? invoice.customer
        : invoice.customer?.id;

    if (!customerId) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const {
      data: memberRows,
    } = await supabaseAdmin
      .from("member_access")
      .select("profile_id")
      .eq(
        "stripe_customer_id",
        customerId
      );

    for (
      const member of memberRows || []
    ) {
      const {
        data: profile,
      } = await supabaseAdmin
        .from("profiles")
        .select("company_id")
        .eq(
          "id",
          member.profile_id
        )
        .maybeSingle();

      if (!profile?.company_id) {
        continue;
      }

      const {
        data: company,
      } = await supabaseAdmin
        .from("companies")
        .select("plan_type")
        .eq(
          "id",
          profile.company_id
        )
        .maybeSingle();

      if (
        company?.plan_type !==
        "annual"
      ) {
        continue;
      }

      await supabaseAdmin
        .from("member_access")
        .update({
          status: "active",
        })
        .eq(
          "profile_id",
          member.profile_id
        );

      await supabaseAdmin
        .from("companies")
        .update({
          access_status:
            "active",
          support_included:
            true,
        })
        .eq(
          "id",
          profile.company_id
        );
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  /*
  --------------------------------------------------
  ANNUAL SUBSCRIPTION CANCELLED
  --------------------------------------------------
  */

  if (
    event.type ===
    "customer.subscription.deleted"
  ) {
    const subscription =
      event.data.object as Stripe.Subscription;

    const customerId =
      typeof subscription.customer ===
      "string"
        ? subscription.customer
        : subscription.customer.id;

    const profileId =
      subscription.metadata
        ?.profile_id;

    if (profileId) {
      await supabaseAdmin
        .from("member_access")
        .update({
          status: "inactive",
        })
        .eq(
          "profile_id",
          profileId
        );

      const {
        data: profile,
      } = await supabaseAdmin
        .from("profiles")
        .select("company_id")
        .eq(
          "id",
          profileId
        )
        .maybeSingle();

      if (profile?.company_id) {
        await supabaseAdmin
          .from("companies")
          .update({
            access_status:
              "inactive",
            support_included:
              false,
          })
          .eq(
            "id",
            profile.company_id
          );
      }
    } else {
      await supabaseAdmin
        .from("member_access")
        .update({
          status: "inactive",
        })
        .eq(
          "stripe_customer_id",
          customerId
        );
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  /*
  --------------------------------------------------
  CHECKOUT COMPLETED
  --------------------------------------------------
  */

  if (
    event.type ===
    "checkout.session.completed"
  ) {
    const session =
      event.data.object as Stripe.Checkout.Session;

    /*
    --------------------------------------------------
    LIVE CLASS PURCHASE
    --------------------------------------------------
    */

    if (
      session.metadata
        ?.purchase_type ===
      "virtual_class"
    ) {
      const metadata =
        session.metadata;

      const amount =
        formatAmount(
          session.amount_total,
          session.currency
        );

      const {
        error,
      } = await supabaseAdmin
        .from(
          "class_reservations"
        )
        .insert({
          class_id:
            metadata.class_id ||
            null,

          stripe_session_id:
            session.id,

          stripe_payment_intent_id:
            typeof session.payment_intent ===
            "string"
              ? session.payment_intent
              : null,

          class_name:
            metadata.class_name ||
            "",

          class_dates:
            metadata.class_dates ||
            "",

          class_timezone:
            metadata.class_timezone ||
            "",

          student_name:
            metadata.student_name ||
            "",

          student_email:
            metadata.student_email ||
            "",

          company_name:
            metadata.company_name ||
            "",

          amount_paid:
            session.amount_total,

          currency:
            session.currency,

          status: "paid",
        });

      if (error) {
        console.error(
          "Error saving class reservation:",
          error
        );

        throw error;
      }

      await sendEmail({
        to:
          metadata.student_email ||
          "",

        subject:
          "You're booked for Rhino Wrangler Certified",

        html: `
          <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
            <h1>You're booked!</h1>

            <p>
              Thank you for reserving your seat in:
            </p>

            <h2>
              Rhino Wrangler Certified:
              Complete Software Masterclass
            </h2>

            <p>
              <strong>Student:</strong>
              ${metadata.student_name || ""}
              <br />

              <strong>Company:</strong>
              ${metadata.company_name || ""}
              <br />

              <strong>Class Dates:</strong>
              ${metadata.class_dates || ""}
              <br />

              <strong>Class Time:</strong>
              8:00 AM – 3:00 PM
              <br />

              <strong>Time Zone:</strong>
              ${
                metadata.class_timezone ||
                "Eastern Time"
              }
            </p>

            <p>
              Questions? Contact:
              <br />

              <a href="mailto:landon@therhinowrangler.com">
                landon@therhinowrangler.com
              </a>
            </p>

            <hr />

            <p style="font-size: 13px; color: #6b7280;">
              The Rhino Wrangler is an
              independent training program
              and is not affiliated with or
              endorsed by DeMichele Group.
            </p>
          </div>
        `,
      });

      await sendAdminClassPurchaseEmail({
        studentName:
          metadata.student_name ||
          "",

        studentEmail:
          metadata.student_email ||
          "",

        companyName:
          metadata.company_name ||
          "",

        className:
          metadata.class_name ||
          "",

        classDates:
          metadata.class_dates ||
          "",

        amount,
      });

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    /*
    --------------------------------------------------
    SITE PURCHASE
    --------------------------------------------------
    */

    const metadata =
      (session.metadata ??
        {}) as {
        profile_id?: string;
        email?: string;
        extra_receipt_email?: string;
        first_name?: string;
        last_name?: string;
        company_name?: string;
        plan?: string;
        support_included?: string;
      };

    const profileId =
      metadata.profile_id;

    const userEmail =
      metadata.email;

    const extraReceiptEmail =
      metadata.extra_receipt_email;

    const amount =
      formatAmount(
        session.amount_total,
        session.currency
      );

    if (!profileId) {
      console.error(
        "Missing profile_id in checkout metadata"
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    if (!session.customer) {
      console.error(
        "Missing Stripe customer on checkout session"
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    /*
    --------------------------------------------------
    VERIFY PURCHASE PLAN
    --------------------------------------------------
    */

    const plan =
      metadata.plan;

    if (
      plan !== "annual" &&
      plan !== "lifetime"
    ) {
      console.error(
        "Invalid or missing plan metadata:",
        plan
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const isAnnual =
      plan === "annual";

    const supportIncluded =
      isAnnual;

    const stripeCustomerId =
      typeof session.customer ===
      "string"
        ? session.customer
        : session.customer.id;

    const stripeSubscriptionId =
      isAnnual &&
      typeof session.subscription ===
        "string"
        ? session.subscription
        : null;

    try {
      /*
      --------------------------------------------------
      LIFETIME PAYMENT METHOD
      --------------------------------------------------

      Only applies to one-time payments.
      */

      if (
        !isAnnual &&
        session.payment_intent
      ) {
        const paymentIntent =
          await stripe.paymentIntents.retrieve(
            session.payment_intent as string
          );

        const paymentMethodId =
          typeof paymentIntent.payment_method ===
          "string"
            ? paymentIntent.payment_method
            : paymentIntent
                .payment_method
                ?.id || null;

        if (paymentMethodId) {
          await stripe.customers.update(
            stripeCustomerId,
            {
              invoice_settings: {
                default_payment_method:
                  paymentMethodId,
              },
            }
          );
        }
      }

      /*
      --------------------------------------------------
      MEMBER ACCESS
      --------------------------------------------------
      */

      const {
        data: updatedRows,
        error: updateError,
      } = await supabaseAdmin
        .from("member_access")
        .update({
          status: "active",
          stripe_customer_id:
            stripeCustomerId,

          stripe_subscription_id:
            stripeSubscriptionId,
        })
        .eq(
          "profile_id",
          profileId
        )
        .select("profile_id");

      if (updateError) {
        console.error(
          "Failed to update member access:",
          updateError
        );

        return res
          .status(200)
          .json({
            received: true,
          });
      }

      if (
        !updatedRows ||
        updatedRows.length === 0
      ) {
        const {
          error: insertError,
        } = await supabaseAdmin
          .from("member_access")
          .insert({
            profile_id:
              profileId,

            status: "active",

            stripe_customer_id:
              stripeCustomerId,

            stripe_subscription_id:
              stripeSubscriptionId,
          });

        if (insertError) {
          console.error(
            "Failed to insert member access:",
            insertError
          );

          return res
            .status(200)
            .json({
              received: true,
            });
        }
      }

      /*
      --------------------------------------------------
      CREATE / ACTIVATE COMPANY
      --------------------------------------------------
      */

      const company =
        await ensureCompanyForPurchase({
          profileId,

          companyName:
            metadata.company_name,

          planType:
            plan,

          supportIncluded,
        });

      const rhinoAccessCode =
        company.customer_number;

      console.log(
        "Company access ready:",
        {
          profileId,
          companyId:
            company.id,

          companyName:
            company.company_name,

          rhinoAccessCode,

          seatLimit:
            company.seat_limit,

          planType:
            company.plan_type,

          supportIncluded:
            company.support_included,
        }
      );

      /*
      --------------------------------------------------
      CUSTOMER WELCOME EMAIL
      --------------------------------------------------
      */

      if (userEmail) {
        await sendEmail({
          to: userEmail,

          subject:
            "Welcome to The Rhino Wrangler",

          html: buildWelcomeEmail(
            userEmail,
            rhinoAccessCode,
            company.company_name
          ),
        });
      }

      /*
      --------------------------------------------------
      EXTRA RECEIPT EMAIL
      --------------------------------------------------
      */

      if (extraReceiptEmail) {
        await sendEmail({
          to:
            extraReceiptEmail,

          subject:
            "Rhino Wrangler Training Access Receipt",

          html: `
            <h1>
              Rhino Wrangler Training Access
            </h1>

            <p>
              This is a receipt notification
              for a Rhino Wrangler training
              access purchase.
            </p>

            <p>
              Account email:
              ${userEmail || "N/A"}
            </p>

            <p>
              Plan:
              ${
                isAnnual
                  ? "Annual Membership"
                  : "Lifetime Access"
              }
            </p>

            <p>
              Rhino Access Code:
              ${rhinoAccessCode}
            </p>

            <p>
              If you have questions, contact
              landon@therhinowrangler.com.
            </p>
          `,
        });
      }

      /*
      --------------------------------------------------
      ADMIN PURCHASE EMAIL
      --------------------------------------------------
      */

      await sendAdminSitePurchaseEmail({
        userEmail,
        extraReceiptEmail,
        amount,

        stripeSessionId:
          session.id,

        firstName:
          metadata.first_name,

        lastName:
          metadata.last_name,

        companyName:
          metadata.company_name,

        stripeCustomerId,

        rhinoAccessCode,

        planType:
          plan,

        supportIncluded,
      });

      console.log(
        "Member access activated:",
        {
          profileId,
          plan,
          stripeCustomerId,
          stripeSubscriptionId,
        }
      );
    } catch (error) {
      console.error(
        "Failed during checkout completion handling:",
        error
      );
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  return res
    .status(200)
    .json({
      received: true,
    });
}