import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, firstName, companyName } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.therhinowrangler.com";

    await sendEmail({
      to: email,
      subject: "Your Rhino Wrangler Account Was Created",
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h1>Welcome to The Rhino Wrangler</h1>

          <p>Hi ${firstName || "there"},</p>

          <p>Your Rhino Wrangler account has been created successfully.</p>

          <p>
            Training access is unlocked after purchasing lifetime access.
            Once payment is complete, your dashboard will activate automatically.
          </p>

          <p>
            <strong>Company:</strong> ${companyName || "N/A"}<br />
            <strong>Login Email:</strong> ${email}
          </p>

          <p>
            <a href="${siteUrl}/pricing" style="display:inline-block;background:#f59e0b;color:#111827;text-decoration:none;font-weight:bold;padding:12px 18px;border-radius:10px;">
              View Pricing
            </a>
          </p>

          <p>If you have questions, contact landon@therhinowrangler.com.</p>

          <p>Thank you,<br />The Rhino Wrangler</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Signup welcome email failed:", error);
    return res.status(500).json({ error: "Email failed" });
  }
}