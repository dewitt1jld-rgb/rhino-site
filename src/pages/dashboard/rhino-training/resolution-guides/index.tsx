import Link from "next/link";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function ResolutionGuidesPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Resolution Guides
        </div>

        <section className="heroPanel">
          <p className="eyebrow">
            RhinoFab Troubleshooting
          </p>

          <h1>Resolution Guides</h1>

          <p>
            Resolution Guides are step-by-step troubleshooting procedures
            designed to help you correct specific RhinoFab problems after
            the cause of the problem has been identified.
          </p>

          <p>
            Each guide explains the recommended calibration procedure first.
            When applicable, a faster manual adjustment method is also
            included.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Cut Length Resolution Guides</h2>

            <p>
              Select the problem that best matches what your machine is doing.
            </p>
          </div>

          <div className="guideGrid">
            <Link
              href="/dashboard/rhino-training/resolution-guides/parts-consistently-short"
              className="guideCard"
            >
              <div className="guideNumber">
                Resolution Guide 01
              </div>

              <h3>
                Parts Are Consistently Short
              </h3>

              <p>
                Use this guide when all finished parts are consistently
                shorter than the programmed cut length by approximately
                the same amount.
              </p>

              <div className="openGuide">
                Open Resolution Guide →
              </div>
            </Link>

            <Link
              href="/dashboard/rhino-training/resolution-guides/parts-consistently-long"
              className="guideCard"
            >
              <div className="guideNumber">
                Resolution Guide 02
              </div>

              <h3>
                Parts Are Consistently Long
              </h3>

              <p>
                Use this guide when all finished parts are consistently
                longer than the programmed cut length by approximately
                the same amount.
              </p>

              <div className="openGuide">
                Open Resolution Guide →
              </div>
            </Link>
          </div>
        </section>
      </TrainingLayout>

      <style jsx>{`
        .breadcrumb {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          margin-bottom: 18px;
        }

        .heroPanel,
        .panel {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.045);
          border-radius: 24px;
          padding: 28px;
          margin-bottom: 26px;
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .eyebrow {
          margin: 0 0 10px;
          color: #fbbf24;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .heroPanel h1 {
          margin: 0 0 12px;
          font-size: 42px;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .heroPanel p,
        .panelHeader p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          font-size: 16px;
          max-width: 900px;
        }

        .heroPanel p {
          margin: 10px 0 0;
        }

        .panelHeader {
          margin-bottom: 20px;
        }

        .panelHeader h2 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 26px;
          letter-spacing: -0.02em;
        }

        .panelHeader p {
          margin: 0;
        }

        .guideGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .guideCard {
          display: block;
          padding: 22px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          text-decoration: none;
          transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease;
        }

        .guideCard:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.075);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .guideNumber {
          color: #fbbf24;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .guideCard h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 21px;
          font-weight: 900;
        }

        .guideCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          line-height: 1.65;
        }

        .openGuide {
          margin-top: 18px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
        }

        @media (max-width: 800px) {
          .guideGrid {
            grid-template-columns: 1fr;
          }

          .heroPanel,
          .panel {
            padding: 20px;
            border-radius: 20px;
          }

          .heroPanel h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}