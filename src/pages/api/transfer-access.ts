import type { NextApiRequest, NextApiResponse } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, company, phone, notes } = req.body;

    if (!firstName || !lastName || !email || !company) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const { error } = await supabaseAdmin.from("migration_requests").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      company_name: company,
      phone: phone || null,
      notes: notes || null,
      status: "Pending",
    });

    if (error) {
      console.error("Error saving migration request:", error);
      return res.status(500).json({
        error: "Could not save transfer request",
      });
    }

    const adminEmails =
      process.env.ADMIN_NOTIFICATION_EMAILS ||
      process.env.ADMIN_EMAILS ||
      "dewittjld@gmail.com";

    await sendEmail({
      to: adminEmails,
      subject: "New Rhino Wrangler Transfer Request",
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h1>New Transfer Access Request</h1>

          <p>An existing customer requested access to be transferred from the old Rhino Wrangler website.</p>

          <p>
            <strong>Name:</strong> ${firstName} ${lastName}<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Company:</strong> ${company}<br />
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Notes:</strong><br />
            ${notes || "No notes provided"}
          </p>

          <hr />

          <p style="font-size: 13px; color: #6b7280;">
            Review this request in Supabase under the migration_requests table.
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Transfer access request failed:", error);

    return res.status(500).json({
      error: "Unexpected server error",
    });
  }
}