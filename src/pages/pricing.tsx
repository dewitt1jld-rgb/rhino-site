import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type CheckoutPlan =
  | "annual"
  | "lifetime"
  | "support";

export default function Pricing() {
  const router = useRouter();

  const [loadingPlan, setLoadingPlan] =
    useState<CheckoutPlan | null>(null);

  const [agreed, setAgreed] =
    useState(false);

  const showNewSignupMessage =
    router.query.newSignup === "1";

  const showNoAccessMessage =
    router.query.noAccess === "1";

  const showCanceledMessage =
    router.query.canceled === "true";

  const handleCheckout = async (
    plan: CheckoutPlan
  ) => {
    try {
      setLoadingPlan(plan);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push(
          "/signup?returnTo=/pricing"
        );
        return;
      }

      if (!agreed) {
        alert(
          "You must agree to the Terms before continuing."
        );
        return;
      }

      const response =
        await fetch("/api/checkout", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${session.access_token}`,
          },

          body: JSON.stringify({
            plan,
          }),
        });

      /*
      --------------------------------------------------
      EXISTING CUSTOMER
      --------------------------------------------------
      */

      if (response.status === 409) {
        const data =
          await response.json();

        alert(
          data.error ||
            "Your company already has a Rhino Wrangler plan. Please contact support if you need to make changes."
        );

        return;
      }

      const data =
        await response.json();

      if (data.url) {
        window.location.href =
          data.url;

        return;
      }

      alert(
        data.error ||
          "Checkout could not be started. Please try again."
      );
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
      <main className="pageShell">
        <div className="contentWrap">

          {/* STATUS MESSAGES */}

          {showNewSignupMessage && (
            <div className="statusBanner successBanner">
              <strong>
                Account created successfully.
              </strong>{" "}
              Your account is ready. Choose
              the option that works best for
              your company.
            </div>
          )}

          {showNoAccessMessage && (
            <div className="statusBanner warningBanner">
              <strong>
                No active training access found.
              </strong>{" "}
              Choose a plan below to get
              started with Rhino Wrangler.
            </div>
          )}

          {showCanceledMessage && (
            <div className="statusBanner warningBanner">
              <strong>
                Checkout canceled.
              </strong>{" "}
              No payment was completed.
            </div>
          )}

          {/* HERO */}

          <section className="heroBlock">
            <div className="eyebrow">
              Company Plans
            </div>

            <h1 className="pageTitle">
              Choose Your Rhino Wrangler Plan
            </h1>

            <p className="pageText">
              Choose specialized support,
              combine support with the complete
              Rhino Wrangler training platform,
              or purchase lifetime access to the
              training platform with no recurring
              website fee.
            </p>
          </section>

          <div className="exploreWrap">
            <Link
              href="/"
              className="exploreButton"
            >
              ← Explore Platform
            </Link>
          </div>

          {/* PRICING CARDS */}

          <section className="pricingWrap">

            {/* SUPPORT ONLY */}

            <div className="planCard">
              <div className="planLabel">
                Support Only
              </div>

              <h2 className="planTitle">
                Specialized Phone Support
              </h2>

              <div className="price">
                $150
                <span>/ month</span>
              </div>

         <p className="billingText">
  Billed quarterly at{" "}
  <strong>$450 every 3 months</strong>
  <br />
  <strong>12-month minimum commitment</strong>
</p>

              <p className="planText">
                Direct specialized support for
                companies that need help with
                RhinoFab, Glazier Studio,
                PartnerPak, setup, fabrication,
                and troubleshooting.
              </p>

              <ul className="featureList">
                <li>
                  Specialized phone support
                </li>

                <li>
                  RhinoFab troubleshooting
                </li>

                <li>
                  Glazier Studio & PartnerPak
                  support
                </li>

                <li>
                  Fabrication troubleshooting
                </li>

                <li>
                  Machine setup guidance
                </li>

                <li>
                  Workflow and software questions
                </li>
              </ul>

              <div className="noSupportBox">
                <strong>
                  Training Platform Not Included
                </strong>

                <p>
                  This plan is for specialized
                  support only. Access to the
                  Rhino Wrangler training website
                  is not included.
                </p>
              </div>

              <button
                className="planButton secondaryButton"
                onClick={() =>
                  handleCheckout("support")
                }
                disabled={
                  !agreed ||
                  loadingPlan !== null
                }
              >
                {loadingPlan === "support"
                  ? "Loading..."
                  : "Choose Support Only"}
              </button>

         <p className="smallNote">
  12-month minimum commitment. $450 billed every
  3 months. After the initial 12-month commitment,
  service continues until canceled.
</p>
            </div>

            {/* SUPPORT + WEBSITE */}

            <div className="planCard featuredPlan">
              <div className="recommendedBadge">
                BEST VALUE
              </div>

              <div className="planLabel">
                Support + Website
              </div>

              <h2 className="planTitle">
                Complete Rhino Wrangler Access
              </h2>

              <div className="price">
                $200
                <span>/ month</span>
              </div>

           <p className="billingText">
  Billed quarterly at{" "}
  <strong>$600 every 3 months</strong>
  <br />
  <strong>12-month minimum commitment</strong>
</p>

              <p className="planText">
                Get the complete Rhino Wrangler
                training platform plus specialized
                ongoing technical support for your
                company.
              </p>

              <ul className="featureList">
                <li>
                  Full Rhino Wrangler training
                  platform
                </li>

                <li>
                  Specialized phone support
                </li>

                <li>
                  RhinoFab machine training
                </li>

                <li>
                  Glazier Studio & PartnerPak
                  training
                </li>

                <li>
                  Machine setup and calibration
                  guides
                </li>

                <li>
                  Troubleshooting reference pages
                </li>

                <li>
                  Full-length tutorial videos
                </li>

                <li>
                  Introductory software training
                  course
                </li>

                <li>
                  New training content and updates
                </li>

                <li>
                  Company employee accounts
                </li>
              </ul>

              <div className="supportBox">
                <strong>
                  Platform + Support Included
                </strong>

                <p>
                  This is the complete Rhino
                  Wrangler package: full training
                  access plus specialized technical
                  support.
                </p>
              </div>

              <button
                className="planButton featuredButton"
                onClick={() =>
                  handleCheckout("annual")
                }
                disabled={
                  !agreed ||
                  loadingPlan !== null
                }
              >
                {loadingPlan === "annual"
                  ? "Loading..."
                  : "Choose Support + Website"}
              </button>

     <p className="smallNote">
  12-month minimum commitment. $600 billed every
  3 months. After the initial 12-month commitment,
  service continues until canceled.
</p>
            </div>

            {/* WEBSITE ONLY */}

            <div className="planCard">
              <div className="planLabel">
                Website Only
              </div>

              <h2 className="planTitle">
                Lifetime Training Access
              </h2>

              <div className="price">
                $3,500
                <span>one time</span>
              </div>

              <p className="billingText">
                One payment. No recurring
                training-platform fee.
              </p>

              <p className="planText">
                Purchase lifetime access to the
                Rhino Wrangler training platform
                without an ongoing support
                contract.
              </p>

              <ul className="featureList">
                <li>
                  Lifetime Rhino Wrangler
                  platform access
                </li>

                <li>
                  RhinoFab machine training
                </li>

                <li>
                  Glazier Studio & PartnerPak
                  training
                </li>

                <li>
                  Machine setup and calibration
                  guides
                </li>

                <li>
                  Troubleshooting reference pages
                </li>

                <li>
                  Full-length tutorial videos
                </li>

                <li>
                  Introductory software training
                  course
                </li>

                <li>
                  New training content and updates
                </li>

                <li>
                  Company employee accounts
                </li>
              </ul>

              <div className="noSupportBox">
                <strong>
                  Specialized Support Not Included
                </strong>

                <p>
                  This option includes lifetime
                  access to the training platform.
                  Specialized phone support can be
                  added separately later.
                </p>
              </div>

              <button
                className="planButton secondaryButton"
                onClick={() =>
                  handleCheckout("lifetime")
                }
                disabled={
                  !agreed ||
                  loadingPlan !== null
                }
              >
                {loadingPlan === "lifetime"
                  ? "Loading..."
                  : "Purchase Lifetime Access"}
              </button>

              <p className="smallNote">
                One-time payment of $3,500.
              </p>
            </div>
          </section>

          {/* TERMS */}

          <section className="termsSection">
            <label className="termsCheck">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) =>
                  setAgreed(
                    e.target.checked
                  )
                }
              />

              <span>
                I agree to the{" "}
                <Link
                  href="/terms"
                  style={{
                    textDecoration:
                      "underline",
                  }}
                >
                  Terms of Service
                </Link>
              </span>
            </label>

            <p className="checkoutNote">
              Select the checkbox above before
              choosing a plan. Secure checkout is
              powered by Stripe.
            </p>
          </section>

          {/* DISCLAIMER */}

          <section className="disclaimerSection">
            <p>
              The Rhino Wrangler is an independent
              training and support platform and is
              not affiliated with, sponsored by,
              endorsed by, or operated by
              DeMichele Group. Payments to The
              Rhino Wrangler are for Rhino Wrangler
              services only and do not replace or
              apply toward any DeMichele Group
              software, machine, service,
              subscription, or other fees.
            </p>
          </section>
        </div>
      </main>

      <style jsx>{`
        .pageShell {
          min-height: 100vh;

          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.1),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #05070b 0%,
              #0d1118 45%,
              #05070b 100%
            );

          color: #ffffff;
          padding: 90px 24px;
        }

        .contentWrap {
          max-width: 1280px;
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
          background:
            rgba(34, 197, 94, 0.12);

          border:
            1px solid
            rgba(34, 197, 94, 0.35);
        }

        .warningBanner {
          background:
            rgba(245, 158, 11, 0.12);

          border:
            1px solid
            rgba(245, 158, 11, 0.35);
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
          max-width: 820px;
          margin: 18px auto 0;

          color:
            rgba(255, 255, 255, 0.82);

          font-size: 17px;
          line-height: 1.75;
        }

        .exploreWrap {
          display: flex;
          justify-content: center;
          margin: 28px 0 38px;
        }

        .exploreButton {
          padding: 10px 18px;
          border-radius: 12px;

          background:
            rgba(255, 255, 255, 0.08);

          color: #ffffff;

          border:
            1px solid
            rgba(255, 255, 255, 0.2);

          text-decoration: none;
          font-weight: 900;
        }

        /*
        -------------------------------
        THREE COLUMN PRICING
        -------------------------------
        */

        .pricingWrap {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;
          align-items: stretch;
        }

        .planCard {
          position: relative;

          display: flex;
          flex-direction: column;

          border-radius: 26px;
          padding: 30px;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.06),
              transparent 42%
            ),
            rgba(255, 255, 255, 0.045);

          border:
            1px solid
            rgba(255, 255, 255, 0.14);

          box-shadow:
            0 24px 70px
              rgba(0, 0, 0, 0.35),
            inset 0 1px 0
              rgba(255, 255, 255, 0.05);
        }

        .featuredPlan {
          border:
            1px solid
            rgba(245, 158, 11, 0.58);

          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.16),
              transparent 42%
            ),
            rgba(255, 255, 255, 0.055);
        }

        .recommendedBadge {
          position: absolute;
          top: -14px;
          right: 24px;

          padding: 7px 13px;

          border-radius: 999px;

          background: #f59e0b;
          color: #111827;

          font-size: 11px;
          font-weight: 950;

          letter-spacing: 0.08em;
        }

        .planLabel {
          display: inline-flex;
          align-self: flex-start;

          padding: 7px 12px;
          border-radius: 999px;

          background:
            rgba(245, 158, 11, 0.16);

          border:
            1px solid
            rgba(245, 158, 11, 0.35);

          color: #fbbf24;

          font-size: 13px;
          font-weight: 900;

          margin-bottom: 18px;
        }

        .planTitle {
          margin: 0;
          font-size: 27px;
          letter-spacing: -0.03em;
        }

        .price {
          margin-top: 22px;

          font-size: 46px;
          font-weight: 950;

          letter-spacing: 0.025em;
        }

        .price span {
          font-size: 16px;
          font-weight: 700;

          color:
            rgba(255, 255, 255, 0.68);

          margin-left: 6px;
        }

        .billingText {
          margin: 8px 0 0;

          color: #fbbf24;

          font-size: 14px;
          line-height: 1.5;
        }

        .planText {
          margin: 16px 0 22px;

          color:
            rgba(255, 255, 255, 0.78);

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
          color:
            rgba(255, 255, 255, 0.9);

          line-height: 1.5;
        }

        .featureList li::before {
          content: "✓";
          color: #4ade80;
          font-weight: 900;
          margin-right: 10px;
        }

        .supportBox,
        .noSupportBox {
          padding: 18px;
          border-radius: 16px;
          margin-top: auto;
          margin-bottom: 4px;
        }

        .supportBox {
          background:
            rgba(34, 197, 94, 0.08);

          border:
            1px solid
            rgba(34, 197, 94, 0.3);
        }

        .noSupportBox {
          background:
            rgba(255, 255, 255, 0.045);

          border:
            1px solid
            rgba(255, 255, 255, 0.14);
        }

        .supportBox strong {
          color: #4ade80;
        }

        .noSupportBox strong {
          color: #fbbf24;
        }

        .supportBox p,
        .noSupportBox p {
          margin: 8px 0 0;

          color:
            rgba(255, 255, 255, 0.72);

          font-size: 14px;
          line-height: 1.6;
        }

        .planButton {
          width: 100%;
          margin-top: 20px;

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
          border: none;
          background: #f59e0b;
          color: #111827;
        }

        .featuredButton:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }

        .secondaryButton {
          background:
            rgba(255, 255, 255, 0.08);

          color: #ffffff;

          border:
            1px solid
            rgba(255, 255, 255, 0.22);
        }

        .secondaryButton:hover {
          transform: translateY(-2px);

          background:
            rgba(255, 255, 255, 0.13);
        }

        .planButton:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .smallNote {
          margin: 14px 0 0;

          text-align: center;

          color:
            rgba(255, 255, 255, 0.58);

          font-size: 13px;
        }

        .termsSection {
          max-width: 700px;
          margin: 34px auto 0;
          padding: 22px;

          border-radius: 18px;

          background:
            rgba(255, 255, 255, 0.04);

          border:
            1px solid
            rgba(255, 255, 255, 0.12);
        }

        .termsCheck {
          display: flex;
          justify-content: center;
          gap: 10px;

          color:
            rgba(255, 255, 255, 0.82);

          line-height: 1.5;
        }

        .termsCheck input {
          margin-top: 4px;
        }

        .termsCheck a {
          color: #fbbf24;
        }

        .checkoutNote {
          margin: 10px 0 0;
          text-align: center;

          color:
            rgba(255, 255, 255, 0.55);

          font-size: 13px;
        }

        .disclaimerSection {
          max-width: 900px;
          margin: 28px auto 0;

          text-align: center;

          color:
            rgba(255, 255, 255, 0.48);

          font-size: 13px;
          line-height: 1.65;
        }

        @media (max-width: 1050px) {
          .pricingWrap {
            grid-template-columns: 1fr;
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
          }
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