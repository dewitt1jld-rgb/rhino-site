import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "No auth",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);

  if (userError || !user) {
    return res.status(401).json({
      error: "No user",
    });
  }

  /*
  --------------------------------------------------
  1. CHECK COMPANY-BASED ACCESS SYSTEM
  --------------------------------------------------
  */

  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from("profiles")
    .select(`
      id,
      company_id,
      is_active,
      companies (
        id,
        company_name,
        customer_number,
        plan_type,
        platform_access,
        support_included,
        access_status,
        seat_limit,
        stripe_customer_id,
        platform_subscription_id,
        support_subscription_id
      )
    `)
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error(
      "Profile access lookup error:",
      profileError
    );
  }

  /*
  --------------------------------------------------
  COMPANY-BASED ACCOUNT
  --------------------------------------------------

  If the user belongs to a company,
  the company becomes the source of truth.
  */

  if (profile?.company_id) {
    const company = Array.isArray(profile.companies)
      ? profile.companies[0]
      : profile.companies;

    /*
    --------------------------------------------------
    USER ACCOUNT MUST BE ACTIVE
    --------------------------------------------------
    */

    if (profile.is_active === false) {
      return res.status(200).json({
        status: "inactive",
        hasAccess: false,
        source: "company",
        reason: "user_inactive",

        planType:
          company?.plan_type ?? null,

        platformAccess:
          company?.platform_access ?? false,

        supportIncluded:
          company?.support_included ?? false,

        stripeCustomerId:
          company?.stripe_customer_id ?? null,

        platformSubscriptionId:
          company?.platform_subscription_id ?? null,

        supportSubscriptionId:
          company?.support_subscription_id ?? null,

        company: company
          ? {
              id: company.id,
              name: company.company_name,
              customerNumber: company.customer_number,
              seatLimit: company.seat_limit,
              planType: company.plan_type,
              platformAccess: company.platform_access,
              supportIncluded: company.support_included,
            }
          : null,
      });
    }

    /*
    --------------------------------------------------
    ACTIVE TRAINING PLATFORM ACCESS
    --------------------------------------------------

    A company must have BOTH:

    access_status = active
    platform_access = true

    to enter the training platform.

    Examples:

    Support + Website:
    access_status = active
    platform_access = true
    support_included = true

    Lifetime Website:
    access_status = active
    platform_access = true
    support_included = false
    */

    if (
      company?.access_status === "active" &&
      company?.platform_access === true
    ) {
      return res.status(200).json({
        status: "active",
        hasAccess: true,
        source: "company",
        reason: "platform_active",

        planType:
          company.plan_type,

        platformAccess:
          true,

        supportIncluded:
          company.support_included === true,

        stripeCustomerId:
          company.stripe_customer_id,

        platformSubscriptionId:
          company.platform_subscription_id,

        supportSubscriptionId:
          company.support_subscription_id,

        company: {
          id: company.id,
          name: company.company_name,
          customerNumber: company.customer_number,
          seatLimit: company.seat_limit,
          planType: company.plan_type,
          platformAccess: company.platform_access,
          supportIncluded: company.support_included,
        },
      });
    }

    /*
    --------------------------------------------------
    SUPPORT ONLY
    --------------------------------------------------

    A Support Only company has an active paid
    relationship with Rhino Wrangler, but DOES NOT
    have access to the training platform.

    Example:

    plan_type = support
    access_status = active
    platform_access = false
    support_included = true
    */

    if (
      company?.access_status === "active" &&
      company?.platform_access !== true &&
      company?.support_included === true
    ) {
      return res.status(200).json({
        status: "support_only",
        hasAccess: false,
        source: "company",
        reason: "support_only",

        planType:
          company.plan_type,

        platformAccess:
          false,

        supportIncluded:
          true,

        stripeCustomerId:
          company.stripe_customer_id,

        platformSubscriptionId:
          company.platform_subscription_id,

        supportSubscriptionId:
          company.support_subscription_id,

        company: {
          id: company.id,
          name: company.company_name,
          customerNumber: company.customer_number,
          seatLimit: company.seat_limit,
          planType: company.plan_type,
          platformAccess: company.platform_access,
          supportIncluded: company.support_included,
        },
      });
    }

    /*
    --------------------------------------------------
    INACTIVE COMPANY
    --------------------------------------------------

    This includes:

    - no plan purchased
    - canceled platform subscription
    - failed platform payment
    - manually disabled company
    - expired/inactive entitlement
    */

    return res.status(200).json({
      status: "inactive",
      hasAccess: false,
      source: "company",
      reason: "company_inactive",

      planType:
        company?.plan_type ?? null,

      platformAccess:
        company?.platform_access ?? false,

      supportIncluded:
        company?.support_included ?? false,

      stripeCustomerId:
        company?.stripe_customer_id ?? null,

      platformSubscriptionId:
        company?.platform_subscription_id ?? null,

      supportSubscriptionId:
        company?.support_subscription_id ?? null,

      company: company
        ? {
            id: company.id,
            name: company.company_name,
            customerNumber: company.customer_number,
            seatLimit: company.seat_limit,
            planType: company.plan_type,
            platformAccess: company.platform_access,
            supportIncluded: company.support_included,
          }
        : null,
    });
  }

  /*
  --------------------------------------------------
  2. FALL BACK TO OLD MEMBER_ACCESS SYSTEM
  --------------------------------------------------

  Existing customers who have not yet been moved
  into the company-based structure continue working
  exactly as they do today.
  */

  const {
    data: memberAccess,
    error: memberAccessError,
  } = await supabase
    .from("member_access")
    .select(`
      status,
      stripe_customer_id,
      stripe_subscription_id
    `)
    .eq("profile_id", user.id)
    .maybeSingle();

  if (memberAccessError) {
    console.error(
      "Legacy member access lookup error:",
      memberAccessError
    );
  }

  const legacyHasAccess =
    memberAccess?.status === "active";

  return res.status(200).json({
    status:
      memberAccess?.status ?? "inactive",

    hasAccess:
      legacyHasAccess,

    source:
      "member_access",

    reason:
      legacyHasAccess
        ? "legacy_active"
        : "legacy_inactive",

    planType:
      null,

    platformAccess:
      legacyHasAccess,

    supportIncluded:
      false,

    stripeCustomerId:
      memberAccess?.stripe_customer_id ?? null,

    platformSubscriptionId:
      memberAccess?.stripe_subscription_id ?? null,

    supportSubscriptionId:
      null,

    company:
      null,
  });
}