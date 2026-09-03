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

  paymentStatus?: string | null;
  paymentFailedAt?: string | null;
  paymentGraceEnd?: string | null;

  company?: {
    id: string;
    name: string;
    customerNumber: string;
    seatLimit: number;
    planType?: string | null;
    platformAccess?: boolean;
    supportIncluded?: boolean;

    paymentStatus?: string | null;
    paymentFailedAt?: string | null;
    paymentGraceEnd?: string | null;
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

  /*
  --------------------------------------------------
  NORMALIZE ACCESS VALUES
  --------------------------------------------------
  */

  const platformAccess =
    access?.company?.platformAccess ??
    access?.platformAccess ??
    false;

  const supportIncluded =
    access?.company?.supportIncluded ??
    access?.supportIncluded ??
    false;

  const paymentStatus =
    access?.company?.paymentStatus ??
    access?.paymentStatus ??
    null;

  const paymentGraceEnd =
    access?.company?.paymentGraceEnd ??
    access?.paymentGraceEnd ??
    null;

  /*
  --------------------------------------------------
  ACCOUNT STATES
  --------------------------------------------------
  */

  const isSupportOnly =
    access?.status === "support_only" ||
    (
      supportIncluded === true &&
      platformAccess !== true &&
      access?.reason !== "payment_grace_expired"
    );

  const isPaymentPastDue =
    access?.status === "payment_past_due" ||
    access?.reason === "payment_grace_expired";

  const isPaymentGrace =
    access?.status === "payment_grace" ||
    (
      paymentStatus === "past_due" &&
      access?.hasAccess === true
    );

  const hasStripeCustomer =
    !!access?.stripeCustomerId;

  /*
  --------------------------------------------------
  PORTAL RETURN
  --------------------------------------------------
  */

  useEffect(() => {
    if (
      router.query.portalReturn === "1"
    ) {
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
        } =
          await supabase.auth.getSession();

        if (!session) {
          setLoadingAccess(false);
          return;
        }

        const response =
          await fetch(
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

        /*
        --------------------------------------------------
        ACTIVE ACCESS
        --------------------------------------------------
        */

        if (
          data.hasAccess === true &&
          (
            data.status === "active" ||
            data.status === "payment_grace"
          )
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
      try {
        const {
          data: { session },
        } =
          await supabase.auth.getSession();

        if (!session) {
          setCheckingAccess(false);
          return;
        }

        const response =
          await fetch(
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
          data.hasAccess === true &&
          (
            data.status === "active" ||
            data.status === "payment_grace"
          )
        ) {
          window.location.href =
            "/dashboard";

          return;
        }

        setCheckingAccess(true);
      } catch (error) {
        console.error(
          "Unable to verify restored access:",
          error
        );
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
      } =
        await supabase.auth.getSession();

      if (!session) {
        alert(
          "Please log in first."
        );

        setLoading(false);
        return;
      }

      const response =
        await fetch(
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
  FORMAT GRACE DATE
  --------------------------------------------------
  */

  function formatGraceDate(
    value?: string | null
  ) {
    if (!value) {
      return null;
    }

    const date =
      new Date(value);

    if (
      Number.isNaN(
        date.getTime()
      )
    ) {
      return null;
    }

    return date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  }

  const formattedGraceEnd =
    formatGraceDate(
      paymentGraceEnd
    );

  /*
  --------------------------------------------------
  PAGE COPY
  --------------------------------------------------
  */

  const badgeText =
    justReturned
      ? "Verifying Payment"
      : isPaymentPastDue
        ? "Payment Required"
        : isPaymentGrace
          ? "Payment Grace Period"
          : isSupportOnly
            ? "Legacy Support Plan Active"
            : "Access Required";

  const pageTitle =
    justReturned
      ? "Checking Your Access..."
      : isPaymentPastDue
        ? "Payment Required"
        : isPaymentGrace
          ? "Payment Issue Detected"
          : isSupportOnly
            ? "Training Platform Not Included"
            : "Training Access Inactive";

  const leadText =
    justReturned
      ? "We’re verifying your payment and restoring your training access."
      : isPaymentPastDue
        ? "We were unable to process your latest subscription payment."
        : isPaymentGrace
          ? "Your latest subscription payment was unsuccessful."
          : isSupportOnly
            ? "Your existing Rhino Wrangler Support Only plan is currently active."
            : "Your Rhino Wrangler training access is currently inactive.";

  const bodyText =
    justReturned
      ? "This usually only takes a few seconds. If your payment was completed successfully, you will be redirected to your training dashboard automatically."
      : isPaymentPastDue
        ? "Your payment grace period has ended, so training access has been temporarily paused. Update your payment method and complete the outstanding payment to restore access."
        : isPaymentGrace
          ? formattedGraceEnd
            ? `Your account is still active during the payment grace period. Please update your payment method and resolve the outstanding payment before ${formattedGraceEnd} to avoid interruption of your training access.`
            : "Your account is still active during the payment grace period. Please update your payment method and resolve the outstanding payment to avoid interruption of your training access."
          : isSupportOnly
            ? "Your existing support plan does not include access to the Rhino Wrangler training platform. Lifetime Training Access is now sold separately as a one-time purchase."
            : hasStripeCustomer
              ? "Your training access is currently inactive. Use the billing portal below to review your existing billing information."
              : "Your account has been created, but training access has not been purchased yet. Purchase Lifetime Access to activate your account.";

  return (
    <main className="page">
      <section className="card">

        <div
          className={
            isSupportOnly
              ? "badge supportBadge"
              : isPaymentPastDue
                ? "badge paymentBadge"
                : isPaymentGrace
                  ? "badge warningBadge"
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

        {/*
        --------------------------------------------------
        PAYMENT REQUIRED NOTICE
        --------------------------------------------------
        */}

        {!justReturned &&
          !loadingAccess &&
          isPaymentPastDue && (
            <div className="notice paymentNotice">
              <strong>
                Payment Action Required
              </strong>

              <span>
                Your existing subscription is still associated with your
                account, but the most recent payment was not completed.
              </span>

              <span>
                Update your payment method and pay the outstanding invoice.
                Once Stripe confirms the payment, any applicable Rhino Wrangler
                access will be restored automatically.
              </span>
            </div>
          )}

        {/*
        --------------------------------------------------
        PAYMENT GRACE NOTICE
        --------------------------------------------------
        */}

        {!justReturned &&
          !loadingAccess &&
          isPaymentGrace && (
            <div className="notice graceNotice">
              <strong>
                Payment Grace Period Active
              </strong>

              <span>
                Your training access is still active while you resolve the
                failed payment.
              </span>

              {formattedGraceEnd && (
                <span>
                  Please resolve the payment before
                  <strong>
                    {" "}{formattedGraceEnd}
                  </strong>
                  {" "}to prevent your training access from being paused.
                </span>
              )}
            </div>
          )}

        {/*
        --------------------------------------------------
        LEGACY SUPPORT ONLY NOTICE
        --------------------------------------------------
        */}

        {!justReturned &&
          !loadingAccess &&
          isSupportOnly &&
          !isPaymentPastDue &&
          !isPaymentGrace && (
            <div className="notice supportNotice">
              <strong>
                Want Training Platform Access?
              </strong>

              <span>
                New training-platform purchases
                are available through
                <strong>
                  {" "}Lifetime Access{" "}
                </strong>
                only.
              </span>

              <span>
                Purchasing Lifetime Access will
                give your company permanent access
                to the Rhino Wrangler training
                platform. Your existing support
                plan can continue to be managed
                separately.
              </span>
            </div>
          )}

        {/*
        --------------------------------------------------
        EXISTING CUSTOMER NOTICE
        --------------------------------------------------
        */}

        {!justReturned &&
          !loadingAccess &&
          !isSupportOnly &&
          !isPaymentPastDue &&
          !isPaymentGrace &&
          hasStripeCustomer && (
            <div className="notice">
              <strong>
                Existing customer?
              </strong>

              <span>
                Use the billing portal to review
                your existing billing information.
              </span>

              <span>
                If your company does not currently
                have training-platform access,
                Lifetime Access can be purchased
                separately.
              </span>
            </div>
          )}

        {/*
        --------------------------------------------------
        NO PURCHASE NOTICE
        --------------------------------------------------
        */}

        {!justReturned &&
          !loadingAccess &&
          !isSupportOnly &&
          !isPaymentPastDue &&
          !isPaymentGrace &&
          !hasStripeCustomer && (
            <div className="notice">
              <strong>
                Ready to purchase?
              </strong>

              <span>
                Your account has been created,
                but training access has not been
                purchased yet. Purchase Lifetime
                Access to activate the training
                platform.
              </span>
            </div>
          )}

        <div className="actions">

          {/*
          --------------------------------------------------
          LOADING
          --------------------------------------------------
          */}

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

          {/*
          --------------------------------------------------
          PAYMENT REQUIRED
          --------------------------------------------------
          */}

          {!justReturned &&
            !loadingAccess &&
            isPaymentPastDue && (
              <button
                type="button"
                onClick={
                  handleRestoreAccess
                }
                disabled={loading}
                className="primaryButton paymentButton"
              >
                {loading
                  ? "Opening Billing Portal..."
                  : "Update Payment Method"}
              </button>
            )}

          {/*
          --------------------------------------------------
          PAYMENT GRACE
          --------------------------------------------------
          */}

          {!justReturned &&
            !loadingAccess &&
            isPaymentGrace && (
              <button
                type="button"
                onClick={
                  handleRestoreAccess
                }
                disabled={loading}
                className="primaryButton warningButton"
              >
                {loading
                  ? "Opening Billing Portal..."
                  : "Resolve Payment"}
              </button>
            )}

          {/*
          --------------------------------------------------
          LEGACY SUPPORT ONLY
          --------------------------------------------------
          */}

          {!justReturned &&
            !loadingAccess &&
            isSupportOnly &&
            !isPaymentPastDue &&
            !isPaymentGrace && (
              <>
                <a
                  href="/pricing"
                  className="primaryButton lifetimeButton"
                >
                  Purchase Lifetime Access
                </a>

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
                    : "Manage Existing Support Plan"}
                </button>
              </>
            )}

          {/*
          --------------------------------------------------
          NORMAL EXISTING CUSTOMER
          --------------------------------------------------
          */}

          {!justReturned &&
            !loadingAccess &&
            !isSupportOnly &&
            !isPaymentPastDue &&
            !isPaymentGrace &&
            hasStripeCustomer && (
              <>
                <a
                  href="/pricing"
                  className="primaryButton lifetimeButton"
                >
                  Purchase Lifetime Access
                </a>

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
                    : "Manage Existing Billing"}
                </button>
              </>
            )}

          {/*
          --------------------------------------------------
          NO PURCHASE
          --------------------------------------------------
          */}

          {!justReturned &&
            !loadingAccess &&
            !isSupportOnly &&
            !isPaymentPastDue &&
            !isPaymentGrace &&
            !hasStripeCustomer && (
              <a
                href="/pricing"
                className="primaryButton lifetimeButton"
              >
                Purchase Lifetime Access
              </a>
            )}

          {/*
          --------------------------------------------------
          RETURN FROM STRIPE
          --------------------------------------------------
          */}

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
            Contact Us
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

        .paymentBadge {
          background:
            rgba(220, 38, 38, 0.12);

          color: #991b1b;
        }

        .warningBadge {
          background:
            rgba(245, 158, 11, 0.16);

          color: #92400e;
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

        .paymentNotice {
          background:
            linear-gradient(
              135deg,
              #111827 0%,
              #321414 100%
            );

          border:
            1px solid
            rgba(
              220,
              38,
              38,
              0.3
            );
        }

        .graceNotice {
          background:
            linear-gradient(
              135deg,
              #111827 0%,
              #33240d 100%
            );

          border:
            1px solid
            rgba(
              245,
              158,
              11,
              0.3
            );
        }

        .supportNotice strong,
        .paymentNotice strong,
        .graceNotice strong {
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

        .lifetimeButton {
          background: #f59e0b;

          color: #111827;
        }

        .paymentButton {
          background: #b91c1c;

          color: #ffffff;
        }

        .warningButton {
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