export function buildWelcomeEmail(email: string) {
  const dashboardUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`
      : "https://www.therhinowranglertesting.com/dashboard";

  const contactUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/contact`
      : "https://www.therhinowranglertesting.com/contact";

  const privacyUrl =
    process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`
      : "https://www.therhinowranglertesting.com/privacy";

      const logoUrl =
  "https://rhino-training-cdn.b-cdn.net/logo-content-media/images/rhino-logo.png";

const portraitUrl =
  "https://rhino-training-cdn.b-cdn.net/logo-content-media/images/800%20px%20selfie.png";

  return `
    <!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#050b14;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#050b14;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#07111f;border:1px solid rgba(245,158,11,.28);border-radius:24px;overflow:hidden;">
            
            <tr>
              <td align="center" style="padding:34px 28px 18px;">
                <img src="${logoUrl}" alt="The Rhino Wrangler" style="max-width:180px;width:100%;height:auto;margin-bottom:22px;" />
                <p style="margin:0 0 10px;color:#f59e0b;font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;">
                  Welcome to The Rhino Wrangler
                </p>
                <h1 style="margin:0;font-size:34px;line-height:1.05;color:#ffffff;">
                  Your Training Access Is Active
                </h1>
                <p style="margin:18px auto 0;max-width:540px;color:rgba(255,255,255,.76);font-size:16px;line-height:1.7;">
                  Thank you for purchasing access to The Rhino Wrangler Training Platform.
                  Your account is now active and ready to use.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:10px 28px 0;">
                <div style="background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px;">
                  <h2 style="margin:0 0 14px;color:#ffffff;font-size:22px;">A Message From The Rhino Wrangler</h2>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="vertical-align:top;width:120px;padding-right:18px;">
                        <img src="${portraitUrl}" alt="Landon DeWitt" style="width:140px;height:140px;object-fit:cover;border-radius:18px;border:1px solid rgba(245,158,11,.35);" />
                      </td>
                      <td style="vertical-align:middle;width:160px;padding-right:24px;">
                        <p style="margin:0 0 14px;color:rgba(255,255,255,.76);font-size:15px;line-height:1.7;">
                          My name is Landon DeWitt, founder of The Rhino Wrangler.
                        </p>
                        <p style="margin:0 0 14px;color:rgba(255,255,255,.76);font-size:15px;line-height:1.7;">
                          For more than six years I worked directly in technical support for RhinoFab software and CNC fabrication systems.
                          During that time I helped hundreds of fabrication shops troubleshoot machines, train operators, configure software,
                          and solve production problems.
                        </p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:16px 0 0;color:rgba(255,255,255,.76);font-size:15px;line-height:1.7;">
                    After leaving technical support, I continued working in the glass industry as both an installation technician and field trainer.
                    I kept seeing the same challenge: shops needed practical training, faster answers, and a better way to onboard new employees.
                  </p>

                  <p style="margin:14px 0 0;color:rgba(255,255,255,.76);font-size:15px;line-height:1.7;">
                    The Rhino Wrangler was created to help solve that problem. My goal is simple:
                    help fabrication shops reduce downtime, train employees faster, and get the most value possible from their software and equipment.
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 28px 0;">
                <div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.28);border-radius:20px;padding:24px;">
                  <h2 style="margin:0 0 12px;color:#ffffff;font-size:22px;">Company-Wide Access</h2>
                  <p style="margin:0;color:rgba(255,255,255,.78);font-size:15px;line-height:1.7;">
                    Your Rhino Wrangler subscription is licensed to your company, not just one individual.
                    Feel free to share your login credentials with authorized employees, operators, estimators,
                    programmers, managers, and shop team members within your organization.
                  </p>
                  <p style="margin:16px 0 0;color:#ffffff;font-size:15px;line-height:1.7;">
                    <strong>Login Email:</strong> ${email}
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:28px;">
                <a href="${dashboardUrl}" style="display:inline-block;background:#f59e0b;color:#111827;text-decoration:none;font-weight:900;font-size:15px;padding:16px 24px;border-radius:14px;">
                  Access Your Training Dashboard
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:0 28px 22px;">
                <div style="background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:22px;">
                  <h2 style="margin:0 0 12px;color:#ffffff;font-size:20px;">Need Help?</h2>
                  <p style="margin:0;color:rgba(255,255,255,.75);font-size:15px;line-height:1.7;">
                    If you have questions, training requests, content suggestions, or need help with your account,
                    visit the contact page.
                  </p>
                  <p style="margin:14px 0 0;">
                    <a href="${contactUrl}" style="color:#f59e0b;font-weight:800;text-decoration:none;">Contact The Rhino Wrangler →</a>
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:0 28px 28px;">
                <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:22px;">
                  <p style="margin:0 0 10px;color:rgba(255,255,255,.62);font-size:13px;line-height:1.7;">
                    <strong style="color:#ffffff;">Billing Reminder:</strong>
                    Your initial access has been activated. Annual renewal is $750/year and will be billed automatically
                    using the payment method on file unless canceled beforehand.
                  </p>

                  <p style="margin:0 0 10px;color:rgba(255,255,255,.62);font-size:13px;line-height:1.7;">
                    <strong style="color:#ffffff;">Important Notice:</strong>
                    The Rhino Wrangler is an independent training and consulting platform.
                    The Rhino Wrangler is not affiliated with, endorsed by, sponsored by, or operated by DeMichele Group, Inc.
                    All product names, trademarks, and company names remain the property of their respective owners.
                  </p>

                  <p style="margin:0;color:rgba(255,255,255,.62);font-size:13px;line-height:1.7;">
                    View our privacy policy here:
                    <a href="${privacyUrl}" style="color:#f59e0b;text-decoration:none;">Privacy Policy</a>
                  </p>

                  <p style="margin:18px 0 0;color:rgba(255,255,255,.72);font-size:14px;line-height:1.7;">
                    Thank you again for your support,<br />
                    <strong style="color:#ffffff;">Landon DeWitt</strong><br />
                    The Rhino Wrangler
                  </p>

                  <p style="margin:18px 0 0;color:rgba(255,255,255,.58);font-size:13px;line-height:1.7;">
                    P.S. If there is a topic you would like to see added to the platform, send me a message.
                    Many of the best training pages and troubleshooting guides come directly from customer suggestions.
                  </p>
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

}