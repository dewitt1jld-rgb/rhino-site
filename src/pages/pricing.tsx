import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Pricing() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [extraReceiptEmail, setExtraReceiptEmail] = useState("");

  const showNewSignupMessage = router.query.newSignup === "1";
  const showNoAccessMessage = router.query.noAccess === "1";
  const showCanceledMessage = router.query.canceled === "true";

  const handleCheckout = async () => {
    if (!agreed) {
      alert("You must agree to the Terms before continuing.");
      return;
    }

    try {
      setLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          extraReceiptEmail: extraReceiptEmail.trim() || null,
        }),
      });

      if (response.status === 409) {
        alert(
          "You're already set up with Rhino Wrangler.\n\n" +
            "We'll take you to billing so you can manage or restore your access."
        );

        const portalRes = await fetch("/api/customer-portal", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        const portalData = await portalRes.json();

        if (portalData.url) {
          window.location.href = portalData.url;
          return;
        }

        alert(
          portalData.error ||
            "Unable to open billing portal. Please contact support."
        );

        return;
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert(data.error || "Checkout could not be started. Please try again.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="pageShell">
        <div className="contentWrap">
          {showNewSignupMessage && (
            <div className="statusBanner successBanner">
              <strong>Account created successfully.</strong> Your account is
              ready, but paid access is required to unlock the training platform.
            </div>
          )}

          {showNoAccessMessage && (
            <div className="statusBanner warningBanner">
              <strong>No active access found.</strong> Subscribe below to unlock
              the member training area.
            </div>
          )}

          {showCanceledMessage && (
            <div className="statusBanner warningBanner">
              <strong>Checkout canceled.</strong> No payment was completed.
            </div>
          )}

          <section className="heroBlock">
            <div className="eyebrow">Membership Access</div>
            <h1 className="pageTitle">Rhino Training Access</h1>
            <p className="pageText">
              Get full access to the Rhino training platform, machine setup
              guides, calibration walkthroughs, troubleshooting pages, and future
              training updates.
            </p>
          </section>

          <div className="exploreWrap">
            <Link href="/" className="exploreButton">
              ← Explore Platform
            </Link>
          </div>

          <section className="pricingWrap">
            <div className="planCard featuredPlan">
              <div className="planLabel">Full Access</div>

              <h2 className="planTitle">Training Platform Membership</h2>

              <div className="price">
                $1500<span> initial access</span>
              </div>

              <p className="planText">
                One setup payment gives your team access to the Rhino Wrangler
                training platform.
              </p>

              <ul className="featureList">
                <li>Full Rhino training library</li>
                <li>Machine setup and calibration guides</li>
                <li>Step-by-step technical reference pages</li>
                <li>Searchable training content</li>
                <li>New pages and updates as they are added</li>
              </ul>

              <p className="disclaimer">
                The Rhino Wrangler is an independent training program and is not
                affiliated with, sponsored by, or endorsed by DeMichele Group.
                Payments to The Rhino Wrangler are for Rhino Wrangler training
                only and do not replace or apply toward any DeMichele Group
                software, machine, service, or subscription fees.
              </p>

              <p className="disclaimer">
                By continuing, you agree to the{" "}
                <Link href="/terms">Terms of Service</Link>.
              </p>

              <label className="receiptField">
                <span>Additional receipt email optional</span>
                <input
                  type="email"
                  value={extraReceiptEmail}
                  onChange={(e) => setExtraReceiptEmail(e.target.value)}
                  placeholder="billing@example.com"
                />
              </label>

              <label className="termsCheck">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms">Terms of Service</Link> and understand
                  that The Rhino Wrangler is an independent training program not
                  affiliated with or endorsed by DeMichele Group.
                </span>
              </label>

              <button
                className="planButton featuredButton"
                onClick={handleCheckout}
                disabled={!agreed || loading}
              >
                {loading ? "Loading..." : "Start Training Access"}
              </button>

              <p className="smallNote">Secure checkout powered by Stripe.</p>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .pageShell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.1), transparent 34%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: #ffffff;
          padding: 90px 24px;
        }

        .contentWrap {
          max-width: 1120px;
          margin: 0 auto;
        }

        .statusBanner {
          padding: 16px 18px;
          border-radius: 16px;
          margin-bottom: 22px;
          line-height: 1.6;
          font-size: 15px;
        }

        .successBanner {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          color: #ffffff;
        }

        .warningBanner {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #ffffff;
        }

        .heroBlock {
          text-align: center;
          margin-bottom: 36px;
        }

        .eyebrow {
          color: #fbbf24;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .pageTitle {
          margin: 0;
          font-size: 48px;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }

        .pageText {
          max-width: 720px;
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.75;
        }

        .exploreWrap {
          display: flex;
          justify-content: center;
          margin: 28px 0;
        }

        .exploreButton {
          padding: 10px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .pricingWrap {
          display: flex;
          justify-content: center;
        }

        .planCard {
          width: 100%;
          max-width: 520px;
          border-radius: 26px;
          padding: 34px;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.16), transparent 42%),
            rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(245, 158, 11, 0.42);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .planLabel {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.16);
          border: 1px solid rgba(245, 158, 11, 0.35);
          color: #fbbf24;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .planTitle {
          margin: 0;
          font-size: 28px;
          letter-spacing: -0.03em;
        }

        .price {
          margin-top: 22px;
          font-size: 50px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .price span {
          font-size: 17px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.68);
          margin-left: 4px;
        }

        .planText {
          margin: 14px 0 22px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.7;
        }

        .featureList {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: grid;
          gap: 12px;
        }

        .featureList li {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }

        .featureList li::before {
          content: "✓";
          color: #4ade80;
          font-weight: 900;
          margin-right: 10px;
        }

        .disclaimer {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.55;
        }

        .disclaimer a,
        .termsCheck a {
          color: #fbbf24;
        }

        .receiptField {
          display: grid;
          gap: 8px;
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.78);
          font-weight: 800;
        }

        .receiptField input {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-size: 1rem;
        }

        .receiptField input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .termsCheck {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.5;
        }

        .termsCheck input {
          margin-top: 4px;
        }

        .planButton {
          width: 100%;
          margin-top: 20px;
          border: none;
          border-radius: 16px;
          padding: 15px 18px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          transition:
            transform 160ms ease,
            background 160ms ease,
            opacity 160ms ease;
        }

        .featuredButton {
          background: #f59e0b;
          color: #111827;
        }

        .featuredButton:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }

        .planButton:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .smallNote {
          margin: 14px 0 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .pageShell {
            padding: 64px 18px;
          }

          .pageTitle {
            font-size: 36px;
          }

          .planCard {
            padding: 24px;
          }

          .price {
            font-size: 42px;
          }
        }
      `}</style>
    </>
  );
}