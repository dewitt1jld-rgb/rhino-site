import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

type AccessResponse = {
  status: string;
  hasAccess: boolean;
  source?: string;
  reason?: string;

  planType?: string | null;
  platformAccess?: boolean;
  supportIncluded?: boolean;

  stripeCustomerId?: string | null;
  platformSubscriptionId?: string | null;
  supportSubscriptionId?: string | null;

  company?: {
    id: string;
    name: string;
    customerNumber: string;
    seatLimit: number;
    planType?: string | null;
    platformAccess?: boolean;
    supportIncluded?: boolean;
  } | null;
};

export default function AccountInactivePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [justReturned, setJustReturned] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(false);

  const [access, setAccess] =
    useState<AccessResponse | null>(null);

  const [loadingAccess, setLoadingAccess] =
    useState(true);

  const isSupportOnly =
    access?.status === "support_only" ||
    (
      access?.supportIncluded === true &&
      access?.platformAccess !== true
    );

  const hasStripeCustomer =
    !!access?.stripeCustomerId;

  /*
  --------------------------------------------------
  PORTAL RETURN
  --------------------------------------------------
  */

  useEffect(() => {
    if (router.query.portalReturn === "1") {
      setJustReturned(true);
      setCheckingAccess(true);
    }
  }, [router.query.portalReturn]);

  /*
  --------------------------------------------------
  LOAD CURRENT ACCESS
  --------------------------------------------------
  */

  useEffect(() => {
    async function loadAccessRecord() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          setLoadingAccess(false);
          return;
        }

        const response = await fetch(
          "/api/check-access",
          {
            headers: {
              Authorization:
                `Bearer ${session.access_token}`,
            },
          }
        );

        const data =
          await response.json();

        if (
          data.status === "active" &&
          data.hasAccess === true
        ) {
          window.location.href =
            "/dashboard";

          return;
        }

        setAccess(data);
      } catch (error) {
        console.error(
          "Unable to load account access:",
          error
        );
      } finally {
        setLoadingAccess(false);
      }
    }

    loadAccessRecord();
  }, []);

  /*
  --------------------------------------------------
  CHECK ACCESS AFTER BILLING PORTAL
  --------------------------------------------------
  */

  useEffect(() => {
    if (!justReturned) return;

    async function checkAccess() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const response = await fetch(
        "/api/check-access",
        {
          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

      const data =
        await response.json();

      setAccess(data);

      if (
        data.status === "active" &&
        data.hasAccess === true
      ) {
        window.location.href =
          "/dashboard";
      }
    }

    checkAccess();

    const interval =
      setInterval(
        checkAccess,
        1500
      );

    return () =>
      clearInterval(interval);
  }, [justReturned]);

  /*
  --------------------------------------------------
  BILLING PORTAL
  --------------------------------------------------
  */

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

      const response = await fetch(
        "/api/customer-portal",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to open billing portal."
        );

        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href =
          data.url;

        return;
      }

      alert(
        "No billing portal URL was returned."
      );

      setLoading(false);
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong opening the billing portal."
      );

      setLoading(false);
    }
  }

  /*
  --------------------------------------------------
  UPGRADE SUPPORT ONLY
  --------------------------------------------------
  */

  async function handleSupportUpgrade() {
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

      const confirmed =
        window.confirm(
          "Upgrade to Support + Website for $600 every 3 months? Your existing Support Only subscription will be upgraded rather than creating a second subscription."
        );

      if (!confirmed) {
        setLoading(false);
        return;
      }

      const response = await fetch(
        "/api/upgrade-support-plan",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to upgrade your plan."
        );

        setLoading(false);
        return;
      }

      window.location.href =
        "/dashboard";
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while upgrading your plan."
      );

      setLoading(false);
    }
  }

  /*
  --------------------------------------------------
  PAGE COPY
  --------------------------------------------------
  */

  const badgeText =
    justReturned
      ? "Verifying Payment"
      : isSupportOnly
        ? "Support Plan Active"
        : "Access Required";

  const pageTitle =
    justReturned
      ? "Checking Your Access..."
      : isSupportOnly
        ? "Training Platform Not Included"
        : "Training Access Inactive";

  const leadText =
    justReturned
      ? "We’re verifying your payment and restoring your training access."
      : isSupportOnly
        ? "Your Rhino Wrangler Support Only plan is currently active."
        : "Your Rhino Wrangler training access is currently inactive.";

  const bodyText =
    justReturned
      ? "This usually only takes a few seconds. If your payment was completed successfully, you will be redirected to your training dashboard automatically."
      : isSupportOnly
        ? "Your current plan includes specialized Rhino Wrangler support, but it does not include access to the training platform. If you would like access to the website, you can upgrade your plan at any time."
        : hasStripeCustomer
          ? "This may be due to a failed payment, expired subscription, or account status change. To restore access, update your billing information and complete your renewal payment."
          : "Your account has been created, but training access has not been purchased yet. Complete your initial purchase to activate your account.";

  return (
    <main className="page">
      <section className="card">

        <div
          className={
            isSupportOnly
              ? "badge supportBadge"
              : "badge"
          }
        >
          {badgeText}
        </div>

        <h1>
          {pageTitle}
        </h1>

        <p className="lead">
          {leadText}
        </p>

        <p className="text">
          {bodyText}
        </p>

        {justReturned &&
          checkingAccess && (
            <div className="checkingBox">
              <div className="spinner" />

              <span>
                Checking account status...
              </span>
            </div>
          )}

        {!justReturned &&
          !loadingAccess &&
          isSupportOnly && (
            <div className="notice supportNotice">
              <strong>
                Want Training Platform Access?
              </strong>

              <span>
                Upgrade to the
                <strong>
                  {" "}Support + Website{" "}
                </strong>
                plan to keep your specialized
                support and add full access to
                The Rhino Wrangler training
                platform.
              </span>

              <span>
                Your existing Support Only
                subscription will be upgraded
                rather than creating a second
                recurring subscription.
              </span>
            </div>
          )}

        {!justReturned &&
          !loadingAccess &&
          !isSupportOnly &&
          hasStripeCustomer && (
            <div className="notice">
              <strong>
                Existing customer?
              </strong>

              <span>
                Use the billing portal to update
                your payment method or resolve
                your subscription status.
              </span>
            </div>
          )}

        {!justReturned &&
          !loadingAccess &&
          !isSupportOnly &&
          !hasStripeCustomer && (
            <div className="notice">
              <strong>
                Ready to purchase?
              </strong>

              <span>
                Your account has been created,
                but training access has not been
                purchased yet. Choose a plan to
                activate training access.
              </span>
            </div>
          )}

        <div className="actions">

          {!justReturned &&
            loadingAccess && (
              <button
                type="button"
                disabled
                className="primaryButton"
              >
                Checking Account...
              </button>
            )}

          {!justReturned &&
            !loadingAccess &&
            isSupportOnly && (
              <>
                <button
                  type="button"
                  onClick={
                    handleSupportUpgrade
                  }
                  disabled={loading}
                  className="primaryButton upgradeButton"
                >
                  {loading
                    ? "Upgrading Plan..."
                    : "Upgrade to Support + Website"}
                </button>

                <button
                  type="button"
                  onClick={
                    handleRestoreAccess
                  }
                  disabled={loading}
                  className="billingButton"
                >
                  {loading
                    ? "Opening Billing Portal..."
                    : "Manage Support Plan"}
                </button>
              </>
            )}

          {!justReturned &&
            !loadingAccess &&
            !isSupportOnly &&
            hasStripeCustomer && (
              <button
                type="button"
                onClick={
                  handleRestoreAccess
                }
                disabled={loading}
                className="primaryButton"
              >
                {loading
                  ? "Opening Billing Portal..."
                  : "Restore Access"}
              </button>
            )}

          {!justReturned &&
            !loadingAccess &&
            !isSupportOnly &&
            !hasStripeCustomer && (
              <a
                href="/pricing"
                className="primaryButton"
              >
                View Plans
              </a>
            )}

          {justReturned && (
            <button
              type="button"
              onClick={() =>
                (
                  window.location.href =
                    "/dashboard"
                )
              }
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
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.12),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #f6f7f9 0%,
              #ffffff 50%,
              #eef0f4 100%
            );
        }

        .card {
          width: 100%;
          max-width: 760px;

          border-radius: 24px;

          padding: 44px;

          background:
            rgba(255, 255, 255, 0.96);

          border:
            1px solid
            rgba(17, 24, 39, 0.08);

          box-shadow:
            0 24px 70px
            rgba(15, 23, 42, 0.14);

          overflow: hidden;
        }

        .badge {
          display: inline-flex;

          margin-bottom: 18px;

          padding: 8px 12px;

          border-radius: 999px;

          background:
            rgba(245, 158, 11, 0.14);

          color: #92400e;

          font-size: 0.78rem;

          font-weight: 900;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .supportBadge {
          background:
            rgba(34, 197, 94, 0.12);

          color: #166534;
        }

        h1 {
          margin: 0;

          color: #111827;

          font-size:
            clamp(
              2rem,
              4vw,
              3.2rem
            );

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

          gap: 8px;

          background: #111827;

          color: #ffffff;

          line-height: 1.55;
        }

        .notice span {
          color:
            rgba(
              255,
              255,
              255,
              0.78
            );
        }

        .supportNotice {
          background:
            linear-gradient(
              135deg,
              #111827 0%,
              #16251c 100%
            );

          border:
            1px solid
            rgba(
              34,
              197,
              94,
              0.28
            );
        }

        .supportNotice strong {
          color: #ffffff;
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

          border:
            3px solid
            rgba(
              255,
              255,
              255,
              0.25
            );

          border-top-color: #f59e0b;

          animation:
            spin 0.8s
            linear infinite;
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
        .secondaryButton,
        .billingButton {
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

          box-shadow:
            0 14px 30px
            rgba(
              17,
              24,
              39,
              0.22
            );
        }

        .upgradeButton {
          background: #f59e0b;

          color: #111827;
        }

        .billingButton {
          background: #374151;

          color: #ffffff;
        }

        .primaryButton:disabled,
        .billingButton:disabled {
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
          .secondaryButton,
          .billingButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}