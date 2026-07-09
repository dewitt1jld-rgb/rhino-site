type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is missing. Email not sent.");
    return;
  }

  const from =
    process.env.FROM_EMAIL || "The Rhino Wrangler <onboarding@resend.dev>";

  console.log("Sending email:", {
    from,
    to,
    subject,
  });


  const normalizedTo =
  typeof to === "string"
    ? to.split(",").map((email) => email.trim()).filter(Boolean)
    : to;

    
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: normalizedTo,
      subject,
      html,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    console.error("Email send failed:", response.status, responseText);
    return;
  }

  console.log("Email sent successfully:", responseText);
}