import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export default function AccountInactivePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [justReturned, setJustReturned] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(false);

  useEffect(() => {
    if (router.query.portalReturn === "1") {
      setJustReturned(true);
      setCheckingAccess(true);
    }
  }, [router.query.portalReturn]);

  useEffect(() => {
    if (!justReturned) return;

    async function checkAccess() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const response = await fetch("/api/check-access", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const data = await response.json();

      if (data.status === "active") {
        window.location.href = "/dashboard";
      }
    }

    checkAccess();

    const interval = setInterval(checkAccess, 1500);

    return () => clearInterval(interval);
  }, [justReturned]);

  async function handleRestoreAccess() {
    try {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        alert("Please log in first.");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/customer-portal", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Unable to open billing portal.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert("No billing portal URL was returned.");
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong opening the billing portal.");
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="card">
        <div className="badge">
          {justReturned ? "Verifying Payment" : "Access Required"}
        </div>

        <h1>
          {justReturned ? "Checking Your Access..." : "Training Access Inactive"}
        </h1>

        <p className="lead">
          {justReturned
            ? "We’re verifying your payment and restoring your training access."
            : "Your Rhino Wrangler training access is currently inactive."}
        </p>

        <p className="text">
          {justReturned
            ? "This usually only takes a few seconds. If your payment was completed successfully, you will be redirected to your training dashboard automatically."
            : "This may be due to a failed payment, expired subscription, or account status change. To restore access, update your billing information and complete your renewal payment."}
        </p>

        {justReturned && checkingAccess && (
          <div className="checkingBox">
            <div className="spinner" />
            <span>Checking account status...</span>
          </div>
        )}

        {!justReturned && (
          <div className="notice">
            <strong>Existing customer?</strong>
            <span>
              Use the billing portal to update your payment method and complete
              your yearly renewal. You do not need to purchase initial access
              again.
            </span>
          </div>
        )}

        <div className="actions">
          {!justReturned && (
            <button
              type="button"
              onClick={handleRestoreAccess}
              disabled={loading}
              className="primaryButton"
            >
              {loading ? "Opening Billing Portal..." : "Restore Access"}
            </button>
          )}

          {justReturned && (
            <button
              type="button"
              onClick={() => (window.location.href = "/dashboard")}
              className="primaryButton"
            >
              Go to Dashboard
            </button>
          )}

          <a
            href="mailto:landon@therhinowrangler.com"
            className="secondaryButton"
          >
            Contact Support
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 180px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 22px;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 34%),
            linear-gradient(135deg, #f6f7f9 0%, #ffffff 50%, #eef0f4 100%);
        }

        .card {
          width: 100%;
          max-width: 760px;
          border-radius: 24px;
          padding: 44px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(17, 24, 39, 0.08);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.14);
          overflow: hidden;
        }

        .badge {
          display: inline-flex;
          margin-bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          color: #92400e;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #111827;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .lead {
          margin: 18px 0 10px;
          color: #111827;
          font-size: 1.15rem;
          font-weight: 800;
        }

        .text {
          margin: 0;
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 640px;
        }

        .notice {
          margin-top: 24px;
          padding: 18px;
          border-radius: 18px;
          display: grid;
          gap: 6px;
          background: #111827;
          color: #ffffff;
          line-height: 1.55;
        }

        .notice span {
          color: rgba(255, 255, 255, 0.78);
        }

        .checkingBox {
          margin-top: 26px;
          padding: 18px;
          border-radius: 18px;
          background: #111827;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          border: 3px solid rgba(255, 255, 255, 0.25);
          border-top-color: #f59e0b;
          animation: spin 0.8s linear infinite;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
          justify-content: center;
          align-items: center;
        }

        .primaryButton,
        .secondaryButton {
          min-width: 180px;
          border: none;
          border-radius: 14px;
          padding: 14px 18px;
          font-size: 1rem;
          font-weight: 900;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .primaryButton {
          background: #111827;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(17, 24, 39, 0.22);
        }

        .primaryButton:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .secondaryButton {
          background: #991b1b;
          color: #ffffff;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 650px) {
          .page {
            padding: 36px 16px;
            align-items: flex-start;
          }

          .card {
            padding: 28px;
            border-radius: 20px;
          }

          .actions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}