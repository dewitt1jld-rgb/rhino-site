type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
};

export async function sendEmail({
  to,
  subject,
  html,
}: SendEmailParams) {
  const apiKey =
    process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is missing. Email cannot be sent."
    );
  }

  const from =
    process.env.FROM_EMAIL ||
    "The Rhino Wrangler <onboarding@resend.dev>";

  const normalizedTo =
    typeof to === "string"
      ? to
          .split(",")
          .map((email) => email.trim())
          .filter(Boolean)
      : to;

  if (normalizedTo.length === 0) {
    throw new Error(
      "Email cannot be sent because no recipient address was provided."
    );
  }

  console.log("Sending email:", {
    from,
    to: normalizedTo,
    subject,
  });

  const response = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from,
        to: normalizedTo,
        subject,
        html,
      }),
    }
  );

  const responseText =
    await response.text();

  if (!response.ok) {
    throw new Error(
      `Resend failed with status ${response.status}: ${responseText}`
    );
  }

  console.log(
    "Email sent successfully:",
    responseText
  );

  return responseText;
}