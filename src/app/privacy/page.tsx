"use client";


export default function PrivacyPolicyPage() {
  return (
    <main className="privacyPage">
      <section className="privacyCard">
        <p className="eyebrow">The Rhino Wrangler</p>
        <h1>Privacy Policy</h1>
        <p className="updated">Last Updated: June 2026</p>

        <p>
          The Rhino Wrangler respects your privacy and is committed to protecting
          your personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you create an account, purchase access, register for a class, or
          use the platform, we may collect:
        </p>

        <ul>
          <li>Name</li>
          <li>Company name</li>
          <li>Email address</li>
          <li>Account information</li>
          <li>Subscription and payment status</li>
          <li>Training progress and usage information</li>
        </ul>

        <p>
          Payment information is processed securely through Stripe. The Rhino
          Wrangler does not store credit card numbers or full payment details.
        </p>

        <h2>How We Use Information</h2>
        <p>We use collected information to:</p>

        <ul>
          <li>Provide access to training content</li>
          <li>Manage subscriptions and billing</li>
          <li>Deliver customer support</li>
          <li>Communicate important account information</li>
          <li>Improve platform content and functionality</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          The Rhino Wrangler utilizes third-party providers to operate portions
          of the platform, including:
        </p>

        <ul>
          <li>Stripe for payment processing</li>
          <li>Supabase for authentication and account management</li>
          <li>Vercel for website hosting</li>
          <li>Bunny.net for media delivery and video hosting</li>
        </ul>

        <p>
          These providers may process information necessary to perform their
          services.
        </p>

        <h2>Data Security</h2>
        <p>
          Reasonable measures are taken to protect user information from
          unauthorized access, disclosure, or misuse. However, no online service
          can guarantee absolute security.
        </p>

        <h2>Cookies and Session Data</h2>
        <p>
          The platform may use cookies, authentication tokens, and similar
          technologies to maintain login sessions, improve performance, and
          enhance user experience.
        </p>

        <h2>Account Deletion Requests</h2>
        <p>
          Users may request account deletion by contacting The Rhino Wrangler.
          Certain information may be retained when required for legal, tax,
          accounting, or operational purposes.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Continued use of the
          platform after changes are posted constitutes acceptance of the revised
          policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions regarding this Privacy Policy may be directed to:
          <br />
          <a href="mailto:Landon@therhinowrangler.com">
            Landon@therhinowrangler.com
          </a>
        </p>

        <p>The Rhino Wrangler</p>
      </section>

      <style jsx>{`
        .privacyPage {
          min-height: 100vh;
          background: radial-gradient(
              circle at top,
              rgba(245, 158, 11, 0.12),
              transparent 32%
            ),
            #050b14;
          color: white;
          padding: 80px 24px;
        }

        .privacyCard {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 26px;
          padding: 44px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
        }

        .eyebrow {
          color: #f59e0b;
          font-size: 0.82rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 12px;
        }

        h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1;
          margin: 0 0 10px;
        }

        .updated {
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 34px;
        }

        h2 {
          color: #f59e0b;
          font-size: 1.25rem;
          margin-top: 34px;
          margin-bottom: 12px;
        }

        p,
        li {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.75;
          font-size: 1rem;
        }

        ul {
          margin: 12px 0 22px;
          padding-left: 22px;
        }

        a {
          color: #f59e0b;
          font-weight: 800;
        }

        @media (max-width: 640px) {
          .privacyPage {
            padding: 48px 16px;
          }

          .privacyCard {
            padding: 28px;
          }
        }
      `}</style>
    </main>
  );
}