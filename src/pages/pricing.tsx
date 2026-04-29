import { useRouter } from "next/router";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function Pricing() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const showNewSignupMessage = router.query.newSignup === "1";
  const showNoAccessMessage = router.query.noAccess === "1";
  const showCanceledMessage = router.query.canceled === "true";
  const supabase = createClient();

  const handleCheckout = async () => {
  try {
    setLoading(true);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/login");
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    alert(data.error || "Checkout could not be started. Please try again.");
  } catch (error) {
    console.error(error);
    alert("Something went wrong starting checkout.");
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
              <strong>Account created successfully.</strong> Your account is ready,
              but a paid subscription is required to unlock the training platform.
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

          <section className="pricingWrap">
            <div className="planCard featuredPlan">
              <div className="planLabel">Full Access</div>

              <h2 className="planTitle">Training Platform Membership</h2>

              <div className="price">
                $1500<span>/month</span>
              </div>

              <p className="planText">
                One simple subscription gives you access to the full training
                library.
              </p>

              <ul className="featureList">
                <li>Full Rhino training library</li>
                <li>Machine setup and calibration guides</li>
                <li>Step-by-step technical reference pages</li>
                <li>Searchable training content</li>
                <li>New pages and updates as they are added</li>
              </ul>

              <button
                className="planButton featuredButton"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Loading..." : "Start Training Access"}
              </button>

              <p className="smallNote">
                Secure checkout powered by Stripe.
              </p>
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

        .pricingWrap {
          display: flex;
          justify-content: center;
        }

        .planCard {
          width: 100%;
          max-width: 520px;
          border-radius: 26px;
          padding: 34px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow:
            0 24px 70px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .featuredPlan {
          border-color: rgba(245, 158, 11, 0.42);
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.16), transparent 42%),
            rgba(255, 255, 255, 0.055);
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

        .planButton {
          width: 100%;
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