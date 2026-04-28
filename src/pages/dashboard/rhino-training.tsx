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
              <div className="eyebrow">Rhino Software Training</div>
              <h1 className="pageTitle">Rhino Training</h1>
              <p className="pageDescription">
                Select a topic from the sidebar to open a specific Rhino training
                page. This training area is designed to mirror the flow of the
                software so users can learn inside a familiar structure.
              </p>
            </div>

            <section className="heroPanel">
              <div className="heroText">
                <h2 className="heroTitle">Train the way your operators already think</h2>
                <p className="heroDescription">
                  The Rhino section is organized to follow the same menu logic as the
                  actual machine software. This makes it easier for users to find help
                  quickly, understand each screen, and move through training without
                  feeling lost.
                </p>

                <div className="heroButtons">
                  <Link
                    href="/dashboard/rhino-training/machine-setup"
                    className="primaryButton"
                  >
                    Open Machine Setup
                  </Link>

                  <Link
                    href="/dashboard/rhino-training/fab-job"
                    className="secondaryButton"
                  >
                    Open Fab Job
                  </Link>
                </div>
              </div>

              <div className="heroVisual">
                <div className="visualCard">
                  <div className="visualTopBar" />
                  <div className="visualBody">
                    <div className="visualSidebar">
                      <div className="visualSidebarItem active" />
                      <div className="visualSidebarItem" />
                      <div className="visualSidebarItem" />
                      <div className="visualSidebarItem" />
                    </div>

                    <div className="visualMain">
                      <div className="visualHeader" />
                      <div className="visualGrid">
                        <div className="visualBox large" />
                        <div className="visualBox" />
                        <div className="visualBox" />
                        <div className="visualBox" />
                        <div className="visualBox" />
                        <div className="visualBox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="sectionBlock">
              <div className="sectionHeader">
                <h2 className="sectionTitle">Suggested starting points</h2>
                <p className="sectionText">
                  These are a few of the main areas users are likely to visit first.
                </p>
              </div>

              <div className="cardGrid">
                <Link
                  href="/dashboard/rhino-training/machine-setup"
                  className="topicCard"
                >
                  <div className="topicLabel">Main Section</div>
                  <h3 className="topicTitle">Machine Setup</h3>
                  <p className="topicText">
                    Access calibration topics, jog controls, cut testing, and setup
                    procedures.
                  </p>
                </Link>

                <Link
                  href="/dashboard/rhino-training/manual-cutting"
                  className="topicCard"
                >
                  <div className="topicLabel">Main Section</div>
                  <h3 className="topicTitle">Manual Cutting</h3>
                  <p className="topicText">
                    Open operator guidance related to manual cut workflows and related
                    screens.
                  </p>
                </Link>

                <Link
                  href="/dashboard/rhino-training/databases"
                  className="topicCard"
                >
                  <div className="topicLabel">Main Section</div>
                  <h3 className="topicTitle">Databases</h3>
                  <p className="topicText">
                    Learn where database settings live and how they affect machine
                    behavior.
                  </p>
                </Link>

                <Link
                  href="/dashboard/rhino-training/system-settings"
                  className="topicCard"
                >
                  <div className="topicLabel">Main Section</div>
                  <h3 className="topicTitle">System Settings</h3>
                  <p className="topicText">
                    Review system-level settings and configuration pages used during
                    setup and troubleshooting.
                  </p>
                </Link>
              </div>
            </section>

            <section className="sectionBlock">
              <div className="sectionHeader">
                <h2 className="sectionTitle">How this section is designed</h2>
              </div>

              <div className="infoPanel">
                <div className="infoRow">
                  <div className="infoNumber">01</div>
                  <div className="infoContent">
                    <h3 className="infoTitle">Software-style organization</h3>
                    <p className="infoText">
                      The sidebar follows the same structure users already recognize
                      from the Rhino software menus.
                    </p>
                  </div>
                </div>

                <div className="infoRow">
                  <div className="infoNumber">02</div>
                  <div className="infoContent">
                    <h3 className="infoTitle">Expandable training tree</h3>
                    <p className="infoText">
                      Topics expand into subtopics, so large training libraries stay
                      organized without overwhelming the user.
                    </p>
                  </div>
                </div>

                <div className="infoRow">
                  <div className="infoNumber">03</div>
                  <div className="infoContent">
                    <h3 className="infoTitle">Built for screenshots and step-by-step help</h3>
                    <p className="infoText">
                      Individual training pages can use your software screenshots,
                      pictures, videos, and step instructions inside a consistent layout.
                    </p>
                  </div>
                </div>
              </div>
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
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.04), transparent 24%),
            linear-gradient(180deg, #090c12 0%, #06080d 100%);
        }

        .contentArea {
          flex: 1;
          min-width: 0;
        }

        .contentInner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 32px 32px 60px;
        }

        .pageHeader {
          margin-bottom: 28px;
        }

        .eyebrow {
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.78rem;
          font-weight: 800;
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
          margin: 0;
          max-width: 820px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 1.02rem;
          line-height: 1.7;
        }

        .heroPanel {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 24px;
          align-items: stretch;
          margin-bottom: 28px;
        }

        .heroText,
        .heroVisual {
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.025) 100%
          );
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
        }

        .heroText {
          padding: 32px;
        }

        .heroTitle {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(1.5rem, 2.3vw, 2.3rem);
          line-height: 1.1;
          font-weight: 850;
        }

        .heroDescription {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 1rem;
          line-height: 1.75;
          max-width: 680px;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }

        .primaryButton,
        .secondaryButton {
          min-height: 48px;
          padding: 0 18px;
          border-radius: 14px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.96rem;
          font-weight: 800;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .primaryButton {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .primaryButton:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.14);
        }

        .secondaryButton {
          color: rgba(255, 255, 255, 0.92);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .secondaryButton:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.05);
        }

        .heroVisual {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualCard {
          width: 100%;
          max-width: 560px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(180deg, #161b24 0%, #0e1219 100%);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        .visualTopBar {
          height: 46px;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .visualBody {
          display: flex;
          min-height: 320px;
        }

        .visualSidebar {
          width: 92px;
          padding: 16px 12px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(255, 255, 255, 0.02);
        }

        .visualSidebarItem {
          height: 34px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
        }

        .visualSidebarItem.active {
          background: rgba(255, 255, 255, 0.18);
        }

        .visualMain {
          flex: 1;
          padding: 18px;
        }

        .visualHeader {
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 16px;
        }

        .visualGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .visualBox {
          height: 88px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
        }

        .visualBox.large {
          grid-column: span 2;
          height: 124px;
        }

        .sectionBlock {
          margin-top: 28px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.035) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          padding: 28px;
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.22);
        }

        .sectionHeader {
          margin-bottom: 22px;
        }

        .sectionTitle {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 850;
        }

        .sectionText {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .topicCard {
          display: block;
          padding: 22px;
          border-radius: 18px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .topicCard:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.14);
        }

        .topicLabel {
          color: rgba(255, 255, 255, 0.54);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .topicTitle {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 800;
        }

        .topicText {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .infoPanel {
          display: grid;
          gap: 18px;
        }

        .infoRow {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 18px;
          align-items: start;
          padding: 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .infoNumber {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.06em;
        }

        .infoTitle {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .infoText {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        @media (max-width: 1200px) {
          .heroPanel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .pageShell {
            flex-direction: column;
          }

          .contentInner {
            padding: 24px 18px 46px;
          }
        }

        @media (max-width: 700px) {
          .cardGrid {
            grid-template-columns: 1fr;
          }

          .infoRow {
            grid-template-columns: 1fr;
          }

          .infoNumber {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </>
  );
}