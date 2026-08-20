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
        access_status,
        platform_access,
        support_included,
        seat_limit,
        plan_type
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
    If the user belongs to a company,
    company access becomes the source of truth.
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
    COMPANY MUST HAVE PLATFORM ACCESS
    --------------------------------------------------

    access_status tells us whether the company
    currently has an active Rhino Wrangler plan.

    platform_access specifically determines whether
    this company is allowed into the training portal.

    Examples:

    Annual:
    access_status = active
    platform_access = true

    Lifetime:
    access_status = active
    platform_access = true

    Support Only:
    access_status = active
    platform_access = false
    */

    if (
      company?.access_status === "active" &&
      company?.platform_access === true
    ) {
      return res.status(200).json({
        status: "active",
        hasAccess: true,
        source: "company",

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
    SUPPORT-ONLY COMPANY
    --------------------------------------------------

    They have an active relationship with Rhino
    Wrangler, but do not have training-platform access.
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
    */

    return res.status(200).json({
      status: "inactive",
      hasAccess: false,
      source: "company",
      reason: "company_inactive",

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
  to the company-based structure continue working
  exactly as they do today.
  */

  const {
    data: memberAccess,
    error: memberAccessError,
  } = await supabase
    .from("member_access")
    .select("status")
    .eq("profile_id", user.id)
    .maybeSingle();

  if (memberAccessError) {
    console.error(
      "Legacy member access lookup error:",
      memberAccessError
    );
  }

  return res.status(200).json({
    status: memberAccess?.status ?? "inactive",
    hasAccess: memberAccess?.status === "active",
    source: "member_access",
  });
}