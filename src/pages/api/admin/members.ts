import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function isAdminEmail(email?: string | null) {
  const adminEmails = process.env.ADMIN_EMAILS?.split(",").map((e) =>
    e.trim().toLowerCase()
  );

  return !!email && !!adminEmails?.includes(email.toLowerCase());
}

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
  const user = await getUserFromRequest(req);

  if (!user || !isAdminEmail(user.email)) {
    return res.status(403).json({ error: "Not authorized" });
  }

  if (req.method === "GET") {
   const { data, error } = await supabaseAdmin
  .from("member_access")
  .select(`
    profile_id,
    status,
    stripe_customer_id,
    stripe_subscription_id,
    profiles (
      email,
      company_name
    )
  `);

    return res.status(200).json({ members: data });
  }

  if (req.method === "PATCH") {
    const { profile_id, status } = req.body;

    if (!profile_id || !status) {
      return res.status(400).json({ error: "Missing profile_id or status" });
    }

    if (!["active", "inactive"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const { error } = await supabaseAdmin
      .from("member_access")
      .update({ status })
      .eq("profile_id", profile_id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}