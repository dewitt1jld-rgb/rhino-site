import { useRouter } from "next/router";

export default function Pricing() {
  const router = useRouter();

  const showNewSignupMessage = router.query.newSignup === "1";
  const showNoAccessMessage = router.query.noAccess === "1";

  return (
    <>
      <main className="pageShell">
        <div className="contentWrap">
          {showNewSignupMessage && (
            <div className="statusBanner successBanner">
              <strong>Account created successfully.</strong> Your account is ready,
              but a paid subscription is still required to unlock the training
              platform. You can review your options below and preview the unlocked
              videos first.
            </div>
          )}

          {showNoAccessMessage && (
            <div className="statusBanner warningBanner">
              <strong>No active access found.</strong> Your account exists, but you
              do not currently have an active training subscription. Choose a plan
              below to unlock the member area.
            </div>
          )}

          <div className="heroBlock">
            <div className="eyebrow">Membership Access</div>
            <h1 className="pageTitle">Pricing</h1>
            <p className="pageText">
              Choose the plan that fits your training needs. You can also use this
              page to preview unlocked content before purchasing full access.
            </p>
          </div>

          <div className="pricingGrid">
            <div className="planCard">
              <div className="planLabel">Starter</div>
              <h2 className="planTitle">Basic</h2>
              <div className="price">$29<span>/month</span></div>
              <p className="planText">Access to core training content.</p>
              <ul className="featureList">
                <li>Core machine training</li>
                <li>Selected support pages</li>
                <li>Basic reference content</li>
              </ul>
              <button className="planButton">Choose Basic</button>
            </div>

            <div className="planCard featuredPlan">
              <div className="planLabel">Best Value</div>
              <h2 className="planTitle">Pro</h2>
              <div className="price">$59<span>/month</span></div>
              <p className="planText">Full access to all training and videos.</p>
              <ul className="featureList">
                <li>Full Rhino training library</li>
                <li>All videos and walkthroughs</li>
                <li>Reference pages and updates</li>
              </ul>
              <button className="planButton featuredButton">Choose Pro</button>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .pageShell {
          min-height: calc(100vh - 80px);
          background:
            radial-gradient(circle at top right, rgba(88, 130, 255, 0.1), transparent 22%),
            linear-gradient(180deg, #070b12 0%, #05070c 100%);
          padding: 40px 20px 60px;
        }

        .contentWrap {
          max-width: 1100px;
          margin: 0 auto;
        }

        .statusBanner {
          margin-bottom: 24px;
          padding: 18px 20px;
          border-radius: 16px;
          font-size: 1rem;
          line-height: 1.7;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .successBanner {
          background: rgba(76, 175, 80, 0.14);
          color: #e9ffe7;
          border-color: rgba(76, 175, 80, 0.28);
        }

        .warningBanner {
          background: rgba(255, 193, 7, 0.12);
          color: #fff4cf;
          border-color: rgba(255, 193, 7, 0.26);
        }

        .heroBlock {
          text-align: center;
          margin-bottom: 36px;
        }

        .eyebrow {
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pageTitle {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(2.3rem, 4vw, 3.6rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .pageText {
          margin: 0 auto;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 1.04rem;
          line-height: 1.8;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .planCard {
          border-radius: 24px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.045) 0%,
            rgba(255, 255, 255, 0.025) 100%
          );
          box-shadow: 0 22px 54px rgba(0, 0, 0, 0.28);
        }

        .featuredPlan {
          border-color: rgba(255, 255, 255, 0.16);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.035) 100%
          );
        }

        .planLabel {
          color: rgba(255, 255, 255, 0.56);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .planTitle {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 850;
        }

        .price {
          color: #ffffff;
          font-size: 2.6rem;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .price span {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.68);
          margin-left: 6px;
        }

        .planText {
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .featureList {
          margin: 0 0 24px;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.9;
        }

        .planButton {
          width: 100%;
          min-height: 52px;
          border: none;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .planButton:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.16);
        }

        .featuredButton {
          background: #ffffff;
          color: #05070c;
        }

        .featuredButton:hover {
          background: #f2f2f2;
        }

        @media (max-width: 820px) {
          .pricingGrid {
            grid-template-columns: 1fr;
          }

          .pageShell {
            padding: 28px 16px 44px;
          }
        }
      `}</style>
    </>
  );
}