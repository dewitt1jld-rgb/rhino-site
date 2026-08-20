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

type PurchasePlan =
  | "annual"
  | "lifetime"
  | "support";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(
  readable: NextApiRequest
) {
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
  if (
    amountTotal === null ||
    !currency
  ) {
    return "Unknown";
  }

  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency:
        currency.toUpperCase(),
    }
  ).format(amountTotal / 100);
}

function getPlanLabel(
  plan?: string | null
) {
  if (plan === "annual") {
    return "Annual Membership";
  }

  if (plan === "support") {
    return "Specialized Phone Support";
  }

  return "Lifetime Access";
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
    const numericPart =
      randomInt(0, 100000)
        .toString()
        .padStart(5, "0");

    const code =
      `RW-${numericPart}`;

    const {
      data,
      error,
    } = await supabaseAdmin
      .from("companies")
      .select("id")
      .eq(
        "customer_number",
        code
      )
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
  stripeCustomerId,
  stripeSubscriptionId,
}: {
  profileId: string;
  companyName?: string | null;
  planType: PurchasePlan;
  stripeCustomerId: string;
  stripeSubscriptionId?: string | null;
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
    .eq(
      "id",
      profileId
    )
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
  --------------------------------------------------
  EXISTING COMPANY
  --------------------------------------------------
  */

  if (profile.company_id) {
    const {
      data: existingCompany,
      error: companyError,
    } = await supabaseAdmin
      .from("companies")
      .select(`
        id,
        company_name,
        customer_number,
        seat_limit,
        access_status,
        plan_type,
        platform_access,
        support_included,
        stripe_customer_id,
        platform_subscription_id,
        support_subscription_id
      `)
      .eq(
        "id",
        profile.company_id
      )
      .single();

    if (companyError) {
      throw companyError;
    }

    let nextPlanType =
      existingCompany.plan_type;

    let nextPlatformAccess =
      existingCompany.platform_access ===
      true;

    let nextSupportIncluded =
      existingCompany.support_included ===
      true;

    let nextPlatformSubscriptionId =
      existingCompany
        .platform_subscription_id;

    let nextSupportSubscriptionId =
      existingCompany
        .support_subscription_id;

    /*
    --------------------------------------------------
    ANNUAL
    --------------------------------------------------
    */

    if (planType === "annual") {
      nextPlanType = "annual";

      nextPlatformAccess = true;

      nextSupportIncluded = true;

      nextPlatformSubscriptionId =
        stripeSubscriptionId || null;
    }

    /*
    --------------------------------------------------
    LIFETIME
    --------------------------------------------------
    */

    if (planType === "lifetime") {
      nextPlanType = "lifetime";

      nextPlatformAccess = true;

      /*
        IMPORTANT:
        preserve an existing support
        subscription if the customer
        bought Support first.
      */

      nextPlatformSubscriptionId =
        null;
    }

    /*
    --------------------------------------------------
    SUPPORT
    --------------------------------------------------
    */

    if (planType === "support") {
      nextSupportIncluded = true;

      nextSupportSubscriptionId =
        stripeSubscriptionId || null;

      /*
        Lifetime + Support should remain
        classified as Lifetime.

        Support-only customers are
        classified as Support.
      */

      if (!nextPlatformAccess) {
        nextPlanType = "support";
      }
    }

    const nextAccessStatus =
      nextPlatformAccess ||
      nextSupportIncluded
        ? "active"
        : "inactive";

    const {
      data: updatedCompany,
      error: updateError,
    } = await supabaseAdmin
      .from("companies")
      .update({
        plan_type:
          nextPlanType,

        platform_access:
          nextPlatformAccess,

        support_included:
          nextSupportIncluded,

        access_status:
          nextAccessStatus,

        stripe_customer_id:
          stripeCustomerId,

        platform_subscription_id:
          nextPlatformSubscriptionId,

        support_subscription_id:
          nextSupportSubscriptionId,
      })
      .eq(
        "id",
        existingCompany.id
      )
      .select(`
        id,
        company_name,
        customer_number,
        seat_limit,
        access_status,
        plan_type,
        platform_access,
        support_included,
        stripe_customer_id,
        platform_subscription_id,
        support_subscription_id
      `)
      .single();

    if (updateError) {
      throw updateError;
    }

    return updatedCompany;
  }

  /*
  --------------------------------------------------
  NEW COMPANY
  --------------------------------------------------
  */

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

  const platformAccess =
    planType === "annual" ||
    planType === "lifetime";

  const supportIncluded =
    planType === "annual" ||
    planType === "support";

  const platformSubscriptionId =
    planType === "annual"
      ? stripeSubscriptionId || null
      : null;

  const supportSubscriptionId =
    planType === "support"
      ? stripeSubscriptionId || null
      : null;

  const {
    data: company,
    error: companyError,
  } = await supabaseAdmin
    .from("companies")
    .insert({
      company_name:
        cleanCompanyName,

      customer_number:
        rhinoAccessCode,

      seat_limit: 7,

      access_status:
        "active",

      plan_type:
        planType,

      platform_access:
        platformAccess,

      support_included:
        supportIncluded,

      stripe_customer_id:
        stripeCustomerId,

      platform_subscription_id:
        platformSubscriptionId,

      support_subscription_id:
        supportSubscriptionId,
    })
    .select(`
      id,
      company_name,
      customer_number,
      seat_limit,
      access_status,
      plan_type,
      platform_access,
      support_included,
      stripe_customer_id,
      platform_subscription_id,
      support_subscription_id
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
      company_id:
        company.id,

      company_name:
        cleanCompanyName,

      role:
        "company_admin",

      is_active:
        true,
    })
    .eq(
      "id",
      profileId
    );

  if (profileUpdateError) {
    await supabaseAdmin
      .from("companies")
      .delete()
      .eq(
        "id",
        company.id
      );

    throw profileUpdateError;
  }

  return company;
}

/*
--------------------------------------------------
SYNC MEMBER ACCESS
--------------------------------------------------
*/

async function syncMemberAccess({
  profileId,
  platformAccess,
  stripeCustomerId,
  platformSubscriptionId,
}: {
  profileId: string;
  platformAccess: boolean;
  stripeCustomerId: string;
  platformSubscriptionId?: string | null;
}) {
  const {
    data: existing,
    error: existingError,
  } = await supabaseAdmin
    .from("member_access")
    .select(`
      profile_id,
      stripe_subscription_id
    `)
    .eq(
      "profile_id",
      profileId
    )
    .maybeSingle();

  if (existingError) {
    throw existingError;
  }

  const values = {
    status:
      platformAccess
        ? "active"
        : "inactive",

    stripe_customer_id:
      stripeCustomerId,

    /*
      Support-only purchases must not
      overwrite a real platform
      subscription ID.
    */

    stripe_subscription_id:
      platformSubscriptionId ??
      existing?.stripe_subscription_id ??
      null,
  };

  if (existing) {
    const { error } =
      await supabaseAdmin
        .from("member_access")
        .update(values)
        .eq(
          "profile_id",
          profileId
        );

    if (error) {
      throw error;
    }

    return;
  }

  const { error } =
    await supabaseAdmin
      .from("member_access")
      .insert({
        profile_id:
          profileId,
        ...values,
      });

  if (error) {
    throw error;
  }
}

/*
--------------------------------------------------
GET COMPANY FROM PROFILE
--------------------------------------------------
*/

async function getCompanyForProfile(
  profileId: string
) {
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

  if (!profile?.company_id) {
    return null;
  }

  const {
    data: company,
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
    .eq(
      "id",
      profile.company_id
    )
    .maybeSingle();

  return company;
}

/*
--------------------------------------------------
SUBSCRIPTION ID FROM INVOICE
--------------------------------------------------
*/

function getSubscriptionIdFromInvoice(
  invoice: Stripe.Invoice
) {
  const anyInvoice =
    invoice as any;

  const directSubscription =
    anyInvoice.subscription;

  if (
    typeof directSubscription ===
    "string"
  ) {
    return directSubscription;
  }

  const parentSubscription =
    anyInvoice?.parent
      ?.subscription_details
      ?.subscription;

  if (
    typeof parentSubscription ===
    "string"
  ) {
    return parentSubscription;
  }

  if (
    parentSubscription?.id
  ) {
    return parentSubscription.id;
  }

  return null;
}

/*
--------------------------------------------------
ADMIN PURCHASE EMAIL
--------------------------------------------------
*/

async function sendAdminSitePurchaseEmail({
  userEmail,
  amount,
  stripeSessionId,
  firstName,
  lastName,
  companyName,
  stripeCustomerId,
  rhinoAccessCode,
  planType,
  platformAccess,
  supportIncluded,
}: {
  userEmail?: string | null;
  amount?: string;
  stripeSessionId?: string;
  firstName?: string | null;
  lastName?: string | null;
  companyName?: string | null;
  stripeCustomerId?: string | null;
  rhinoAccessCode?: string | null;
  planType?: string | null;
  platformAccess?: boolean;
  supportIncluded?: boolean;
}) {
  const adminEmails =
    process.env.ADMIN_EMAILS ||
    process.env.ADMIN_EMAIL ||
    "";

  if (!adminEmails) {
    return;
  }

  const planLabel =
    getPlanLabel(planType);

  await sendEmail({
    to: adminEmails,

    subject:
      `New Rhino Wrangler ${planLabel} Purchase`,

    html: `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
        <h1>New Rhino Wrangler Purchase</h1>

        <p>
          <strong>Plan:</strong>
          ${planLabel}
        </p>

        <p>
          <strong>First Name:</strong>
          ${firstName || "Unknown"}<br />

          <strong>Last Name:</strong>
          ${lastName || "Unknown"}<br />

          <strong>Company:</strong>
          ${companyName || "Unknown"}<br />

          <strong>Email:</strong>
          ${userEmail || "Unknown"}
        </p>

        <p>
          <strong>Amount:</strong>
          ${amount || "Unknown"}<br />

          <strong>Platform Access:</strong>
          ${platformAccess ? "Yes" : "No"}<br />

          <strong>Support:</strong>
          ${supportIncluded ? "Yes" : "No"}<br />

          <strong>Rhino Access Code:</strong>
          ${rhinoAccessCode || "Unknown"}<br />

          <strong>Stripe Customer:</strong>
          ${stripeCustomerId || "Unknown"}<br />

          <strong>Stripe Session:</strong>
          ${stripeSessionId || "Unknown"}
        </p>
      </div>
    `,
  });
}

/*
--------------------------------------------------
ADMIN CLASS EMAIL
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
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
        <h1>New Class Booking</h1>

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
MAIN HANDLER
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

  let event:
    Stripe.Event;

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
      "Webhook verification failed:",
      err.message
    );

    return res
      .status(400)
      .send(
        `Webhook Error: ${err.message}`
      );
  }

  console.log(
    "Stripe webhook:",
    event.type
  );

  /*
  --------------------------------------------------
  INVOICE PAYMENT SUCCEEDED / FAILED
  --------------------------------------------------
  */

  if (
    event.type ===
      "invoice.payment_succeeded" ||
    event.type ===
      "invoice.payment_failed"
  ) {
    const invoice =
      event.data.object as Stripe.Invoice;

    const subscriptionId =
      getSubscriptionIdFromInvoice(
        invoice
      );

    if (!subscriptionId) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const subscription =
      await stripe.subscriptions.retrieve(
        subscriptionId
      );

    const plan =
      subscription.metadata
        ?.plan as PurchasePlan | undefined;

    const profileId =
      subscription.metadata
        ?.profile_id;

    if (
      !profileId ||
      (plan !== "annual" &&
        plan !== "support")
    ) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const company =
      await getCompanyForProfile(
        profileId
      );

    if (!company) {
      /*
        checkout.session.completed may
        arrive shortly afterward and
        create the company.
      */

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const succeeded =
      event.type ===
      "invoice.payment_succeeded";

    /*
    --------------------------------------------------
    ANNUAL
    --------------------------------------------------
    */

    if (plan === "annual") {
      await supabaseAdmin
        .from("companies")
        .update({
          platform_access:
            succeeded,

          support_included:
            succeeded,

          access_status:
            succeeded
              ? "active"
              : "inactive",

          platform_subscription_id:
            subscriptionId,
        })
        .eq(
          "id",
          company.id
        );

      await syncMemberAccess({
        profileId,

        platformAccess:
          succeeded,

        stripeCustomerId:
          typeof subscription.customer ===
          "string"
            ? subscription.customer
            : subscription.customer.id,

        platformSubscriptionId:
          subscriptionId,
      });
    }

    /*
    --------------------------------------------------
    SUPPORT ONLY
    --------------------------------------------------
    */

    if (plan === "support") {
      const platformStillActive =
        company.platform_access ===
        true;

      await supabaseAdmin
        .from("companies")
        .update({
          support_included:
            succeeded,

          support_subscription_id:
            subscriptionId,

          access_status:
            platformStillActive ||
            succeeded
              ? "active"
              : "inactive",
        })
        .eq(
          "id",
          company.id
        );

      /*
        DO NOT activate/deactivate
        platform access because of
        a support payment.
      */
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  /*
  --------------------------------------------------
  SUBSCRIPTION CANCELLED
  --------------------------------------------------
  */

  if (
    event.type ===
    "customer.subscription.deleted"
  ) {
    const subscription =
      event.data.object as Stripe.Subscription;

    const plan =
      subscription.metadata
        ?.plan as PurchasePlan | undefined;

    const profileId =
      subscription.metadata
        ?.profile_id;

    if (!profileId) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const company =
      await getCompanyForProfile(
        profileId
      );

    if (!company) {
      return res
        .status(200)
        .json({
          received: true,
        });
    }

    /*
    --------------------------------------------------
    ANNUAL CANCELLED
    --------------------------------------------------
    */

    if (plan === "annual") {
      await supabaseAdmin
        .from("companies")
        .update({
          platform_access:
            false,

          support_included:
            false,

          access_status:
            "inactive",

          platform_subscription_id:
            null,
        })
        .eq(
          "id",
          company.id
        );

      await syncMemberAccess({
        profileId,

        platformAccess:
          false,

        stripeCustomerId:
          typeof subscription.customer ===
          "string"
            ? subscription.customer
            : subscription.customer.id,

        platformSubscriptionId:
          null,
      });
    }

    /*
    --------------------------------------------------
    SUPPORT CANCELLED
    --------------------------------------------------
    */

    if (plan === "support") {
      const stillHasPlatform =
        company.platform_access ===
        true;

      await supabaseAdmin
        .from("companies")
        .update({
          support_included:
            false,

          support_subscription_id:
            null,

          access_status:
            stillHasPlatform
              ? "active"
              : "inactive",
        })
        .eq(
          "id",
          company.id
        );

      /*
        Lifetime platform access
        remains completely untouched.
      */
    }

    return res
      .status(200)
      .json({
        received: true,
      });
  }

  /*
  --------------------------------------------------
  CHECKOUT COMPLETE
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
    CLASS PURCHASE
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

      const { error } =
        await supabaseAdmin
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

            status:
              "paid",
          });

      if (error) {
        throw error;
      }

      await sendEmail({
        to:
          metadata.student_email ||
          "",

        subject:
          "You're booked for Rhino Wrangler Certified",

        html: `
          <h1>You're booked!</h1>

          <p>
            Thank you for reserving your seat in
            Rhino Wrangler Certified.
          </p>

          <p>
            <strong>Student:</strong>
            ${metadata.student_name || ""}
            <br />

            <strong>Company:</strong>
            ${metadata.company_name || ""}
            <br />

            <strong>Dates:</strong>
            ${metadata.class_dates || ""}
          </p>
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
    NORMAL SITE PURCHASE
    --------------------------------------------------
    */

    const metadata =
      (session.metadata ??
        {}) as {
        profile_id?: string;
        email?: string;
        first_name?: string;
        last_name?: string;
        company_name?: string;
        plan?: PurchasePlan;
        platform_access?: string;
        support_included?: string;
      };

    const profileId =
      metadata.profile_id;

    const plan =
      metadata.plan;

    if (
      !profileId ||
      (plan !== "annual" &&
        plan !== "lifetime" &&
        plan !== "support")
    ) {
      console.error(
        "Missing or invalid purchase metadata."
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    if (!session.customer) {
      console.error(
        "Checkout completed without Stripe Customer."
      );

      return res
        .status(200)
        .json({
          received: true,
        });
    }

    const stripeCustomerId =
      typeof session.customer ===
      "string"
        ? session.customer
        : session.customer.id;

    const stripeSubscriptionId =
      typeof session.subscription ===
      "string"
        ? session.subscription
        : null;

    try {
      /*
      --------------------------------------------------
      LIFETIME PAYMENT METHOD
      --------------------------------------------------
      */

      if (
        plan === "lifetime" &&
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
      COMPANY ENTITLEMENTS
      --------------------------------------------------
      */

      const company =
        await ensureCompanyForPurchase({
          profileId,

          companyName:
            metadata.company_name,

          planType:
            plan,

          stripeCustomerId,

          stripeSubscriptionId,
        });

      /*
      --------------------------------------------------
      MEMBER ACCESS
      --------------------------------------------------
      */

      await syncMemberAccess({
        profileId,

        platformAccess:
          company.platform_access ===
          true,

        stripeCustomerId,

        platformSubscriptionId:
          company
            .platform_subscription_id,
      });

      const rhinoAccessCode =
        company.customer_number;

      /*
      --------------------------------------------------
      CUSTOMER EMAIL
      --------------------------------------------------
      */

      if (metadata.email) {
        if (
          company.platform_access
        ) {
          await sendEmail({
            to:
              metadata.email,

            subject:
              "Welcome to The Rhino Wrangler",

            html:
              buildWelcomeEmail(
                metadata.email,
                rhinoAccessCode,
                company.company_name
              ),
          });
        } else {
          /*
          --------------------------------------------------
          SUPPORT-ONLY EMAIL
          --------------------------------------------------
          */

          await sendEmail({
            to:
              metadata.email,

            subject:
              "Rhino Wrangler Specialized Phone Support",

            html: `
              <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.7;">
                <h1>
                  Your Rhino Wrangler Support Plan Is Active
                </h1>

                <p>
                  Thank you for purchasing Specialized Phone Support.
                </p>

                <p>
                  <strong>Company:</strong>
                  ${company.company_name}
                  <br />

                  <strong>Rhino Access Code:</strong>
                  ${rhinoAccessCode}
                </p>

                <p>
                  Your plan includes specialized RhinoFab,
                  Glazier Studio, PartnerPak, setup and
                  fabrication troubleshooting support.
                </p>

                <p>
                  <strong>
                    Training Platform access is not included
                    with the Support Only plan.
                  </strong>
                </p>

                <p>
                  Questions? Contact
                  landon@therhinowrangler.com.
                </p>
              </div>
            `,
          });
        }
      }

      /*
      --------------------------------------------------
      ADMIN EMAIL
      --------------------------------------------------
      */

      await sendAdminSitePurchaseEmail({
        userEmail:
          metadata.email,

        amount:
          formatAmount(
            session.amount_total,
            session.currency
          ),

        stripeSessionId:
          session.id,

        firstName:
          metadata.first_name,

        lastName:
          metadata.last_name,

        companyName:
          company.company_name,

        stripeCustomerId,

        rhinoAccessCode,

        planType:
          plan,

        platformAccess:
          company.platform_access,

        supportIncluded:
          company.support_included,
      });

      console.log(
        "Purchase processed:",
        {
          profileId,
          plan,
          platformAccess:
            company.platform_access,
          supportIncluded:
            company.support_included,
        }
      );
    } catch (error) {
      console.error(
        "Checkout processing failed:",
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