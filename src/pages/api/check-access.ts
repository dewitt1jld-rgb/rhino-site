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
  1. CHECK NEW COMPANY-BASED ACCESS SYSTEM
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
        seat_limit
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
      Employee account itself must still be active.
    */

    if (profile.is_active === false) {
      return res.status(200).json({
        status: "inactive",
        hasAccess: false,
        source: "company",
        reason: "user_inactive",
      });
    }

    /*
      Company must have active access.
    */

    if (company?.access_status === "active") {
      return res.status(200).json({
        status: "active",
        hasAccess: true,
        source: "company",

        company: {
          id: company.id,
          name: company.company_name,
          customerNumber: company.customer_number,
          seatLimit: company.seat_limit,
        },
      });
    }

    return res.status(200).json({
      status: "inactive",
      hasAccess: false,
      source: "company",
      reason: "company_inactive",
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