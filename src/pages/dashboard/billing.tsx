import Link from "next/link";
import RequireActiveAccess from "@/components/RequireActiveAccess";

export default function BillingPage() {
  return (
    <RequireActiveAccess>
      <main className="pageShell">
        <section className="card">
          <div className="eyebrow">Account Billing</div>

          <h1>Billing & Cancellation</h1>

          <p>
            Your Rhino Training Access membership is active. If you need billing
            help, invoice support, or want to request cancellation, please contact
            us directly.
          </p>

          <div className="infoBox">
            <h2>Cancellation Policy</h2>
            <p>
              Cancellations are handled manually so we can confirm account
              details, training credits, and renewal status before closing access.
            </p>
          </div>

          <div className="actions">
            <a
              className="primaryButton"
              href="mailto:Landon@therhinowrangler.com?subject=Cancellation%20Request%20-%20Rhino%20Training%20Access"
            >
              Request Cancellation
            </a>

            <Link className="secondaryButton" href="/dashboard">
              Back to Dashboard
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .pageShell {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 34%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: #ffffff;
          padding: 24px;
        }

        .card {
          width: 100%;
          max-width: 720px;
          border-radius: 26px;
          padding: 34px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
        }

        .eyebrow {
          color: #fbbf24;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        h1 {
          margin: 0 0 14px;
          font-size: 40px;
          letter-spacing: -0.04em;
        }

        p {
          color: rgba(255, 255, 255, 0.84);
          line-height: 1.75;
          font-size: 16px;
        }

        .infoBox {
          margin-top: 24px;
          padding: 20px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.32);
        }

        .infoBox h2 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .actions {
          display: flex;
          gap: 14px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
          text-decoration: none;
          border-radius: 16px;
          padding: 14px 18px;
          font-weight: 900;
        }

        .primaryButton {
          background: #f59e0b;
          color: #111827;
        }

        .secondaryButton {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        @media (max-width: 700px) {
          .card {
            padding: 24px;
          }

          h1 {
            font-size: 32px;
          }

          .actions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            text-align: center;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}