import Link from "next/link";
import TrainingSidebar from "../../components/TrainingSidebar";
import RequireActiveAccess from "../../components/RequireActiveAccess";

export default function RhinoTrainingPage() {
  return (
    <>
      <RequireActiveAccess>
        <div className="pageShell">
          <TrainingSidebar />

          <main className="contentArea">
            <div className="contentInner">
              <div className="pageHeader">
                <div className="eyebrow">RhinoFab Knowledge Base</div>
                <h1 className="pageTitle">Rhino Training</h1>

                <p className="pageDescription">
                  This section contains detailed RhinoFab training pages covering
                  machine setup, Fab Job, manual cutting, calibration, databases,
                  troubleshooting, maintenance, and system settings.
                </p>

                <p className="pageDescription">
                  This area is not meant to be completed from beginning to end.
                  Use it as a searchable reference while working inside the
                  RhinoFab software or at the machine.
                </p>
              </div>

              <section className="heroPanel">
                <div className="heroText">
                  <h2 className="heroTitle">
                    Find the answer you need while working on the machine
                  </h2>

                  <p className="heroDescription">
                    The Rhino Wrangler works best when used alongside RhinoFab.
                    Keep the software or machine screen open, find the page that
                    matches what you are working on, then follow the instructions
                    step by step.
                  </p>

                  <div className="navigationCallout">
                    <div className="arrow">⬅</div>

                    <div>
                      <h2>Use the Navigation Menu on the Left</h2>

                      <p>
                        Browse the categories in the left-hand navigation menu
                        to find the RhinoFab training page you need. Each topic
                        is broken down into detailed instructions, screenshots,
                        videos, and reference material.
                      </p>

                      <p>
                        Use the search button at the top of the screen to
                        quickly find specific machine topics, troubleshooting
                        pages, videos, or software features.
                      </p>

                      <p>
                        Keep RhinoFab open while you work and use this site
                        alongside the software whenever you have questions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="callout info">
                <strong>Best results:</strong> Use this knowledge base in tandem
                with RhinoFab. When you have a question, open the matching Rhino
                Wrangler page and follow the instructions while the software or
                machine screen is open.
              </section>

              <section className="completionBox">
                <h2>Need help with something specific?</h2>
                <p>
                  Use the left navigation menu or the search bar at the top of
                  the page. This training library is built to help you quickly
                  find answers instead of reading every page in order.
                </p>
              </section>
            </div>
          </main>
        </div>
      </RequireActiveAccess>

      <style jsx>{`
        .pageShell {
          min-height: calc(100vh - 80px);
          display: flex;
          background:
            radial-gradient(circle at top right, rgba(245, 158, 11, 0.06), transparent 24%),
            linear-gradient(180deg, #090c12 0%, #06080d 100%);
        }

        .contentArea {
          flex: 1;
          min-width: 0;
        }

        .contentInner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 32px 60px;
        }

        .pageHeader {
          margin-bottom: 28px;
        }

        .eyebrow {
          color: #f59e0b;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pageTitle {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .pageDescription {
          margin: 0 0 14px;
          max-width: 900px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 1.04rem;
          line-height: 1.7;
        }

        .heroPanel {
          margin-bottom: 28px;
        }

        .heroText {
          border-radius: 24px;
          border: 1px solid rgba(245, 158, 11, 0.24);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.025) 100%
          );
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
          padding: 32px;
        }

        .heroTitle {
          margin: 0 0 18px;
          color: #f59e0b;
          font-size: clamp(1.7rem, 2.4vw, 2.5rem);
          line-height: 1.1;
          font-weight: 850;
        }

        .heroDescription {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.06rem;
          line-height: 1.75;
          max-width: 900px;
        }

        .navigationCallout {
          display: flex;
          align-items: center;
          gap: 36px;
          margin-top: 34px;
          padding: 42px;
          border-radius: 22px;
          background: rgba(245, 158, 11, 0.08);
          border: 2px solid rgba(245, 158, 11, 0.28);
        }

        .arrow {
          font-size: 110px;
          color: #f59e0b;
          font-weight: 900;
          flex-shrink: 0;
        }

        .navigationCallout h2 {
          margin: 0 0 18px;
          font-size: 42px;
          color: #f59e0b;
        }

        .navigationCallout p {
          margin: 0 0 18px;
          font-size: 20px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.82);
        }

        .callout,
        .completionBox {
          margin-top: 28px;
          padding: 24px;
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(245, 158, 11, 0.24);
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.7;
        }

        .callout strong {
          color: #fbbf24;
        }

        .completionBox h2 {
          margin: 0 0 12px;
          color: #f59e0b;
          font-size: 1.7rem;
        }

        .completionBox p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .pageShell {
            flex-direction: column;
          }

          .contentInner {
            padding: 24px 18px 46px;
          }

          .navigationCallout {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }

          .arrow {
            font-size: 72px;
          }

          .navigationCallout h2 {
            font-size: 32px;
          }

          .navigationCallout p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}