import Link from "next/link";

export default function DownloadInstallPage() {
  return (
    <main className="page">
      <aside className="sidebar">
        <Link href="/dashboard/introductory-software-training" className="back">
          ← Back to Course
        </Link>

        <p className="eyebrow">Lesson 01</p>
        <h1>Download, Install & Activate Software</h1>
        <p className="description">
          Get Glazier Studio and PartnerPak installed or updated before moving
          into frame training.
        </p>

        <div className="stepList">
          <div className="step active">1. Download and Install Software</div>
          <Link href="/dashboard/introductory-software-training/customer-number" className="step">
            2. Get Customer Number
          </Link>
          <Link href="/dashboard/introductory-software-training/connect-network" className="step">
            3. Connect to Your Network
          </Link>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 1 of 3</p>
          <h2>Download and Install Software</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Download or update to the latest version of
            Glazier Studio and PartnerPak.
          </div>

          <p className="bodyText">
            Start by downloading and installing Glazier Studio. If your company
            uses PartnerPak, install or update PartnerPak as well. Watch the
            required videos below before moving forward.
          </p>

          <h3 className="sectionTitle">Required Videos</h3>

          <div className="videoGrid">
            <div className="videoCard">
              <video
                controls
                preload="metadata"
                poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/thumbnails/glazier-install-thumb.png"
              >
                <source
                  src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/glazier%20Studio%20full%20install%201080p%20with%20intro.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="videoInfo">
                <h4>Glazier Studio Installation</h4>
                <p>Learn how to download, install, and activate Glazier Studio.</p>
              </div>
            </div>

            <div className="videoCard">
              <video
                controls
                preload="metadata"
                poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/thumbnails/partnerpak-install-thumb.png"
              >
                <source
                  src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/partnerpak%20install.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="videoInfo">
                <h4>PartnerPak Installation</h4>
                <p>Install PartnerPak if your company uses it with Glazier Studio.</p>
              </div>
            </div>
          </div>

          <div className="sectionBox">
            <h3>Before You Continue</h3>
            <ul>
              <li>Please ensure Glazier Studio and PartnerPak are fully updated</li>
              <li>If your company is on a network and their current programs are out of date you will also have to match your program to their version</li>
              <li>To do this install the latest version of GS and PPAK and call the Demichele group to roll your device back to the correct version</li>
              <li>480-985-4926</li>
            </ul>
          </div>

          <div className="infoGrid">
            <div className="tipBox">
              <h3>Helpful Tip</h3>
              <p>
                If Windows protects your PC, click "more info" and then click "run anyway".
              </p>
            </div>

            <div className="warningBox">
              <h3>Important</h3>
              <p>
                If you have any issues during install please call the Demichele group for support. 480-985-4926
              </p>
            </div>
          </div>

          <div className="navButtons">
            <Link href="/dashboard/introductory-software-training" className="secondary">
              ← Course List
            </Link>

            <Link href="/dashboard/introductory-software-training/customer-number" className="primary">
              Next →
            </Link>
          </div>
        </article>
      </section>

      <SharedStyles />
    </main>
  );
}

function SharedStyles() {
  return (
    <style jsx global>{`
      .page {
        min-height: 100vh;
        display: grid;
        grid-template-columns: 360px 1fr;
        background:
          radial-gradient(circle at top left, rgba(245, 158, 11, 0.1), transparent 34%),
          linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
        color: white;
      }

      .sidebar {
        min-height: 100vh;
        padding: 34px 24px;
        background: rgba(5, 7, 11, 0.72);
        border-right: 1px solid rgba(255, 255, 255, 0.08);
      }

      .back {
        display: inline-block;
        margin-bottom: 28px;
        color: #f59e0b;
        font-weight: 900;
        text-decoration: none;
      }

      .eyebrow {
        color: #f59e0b;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin: 0 0 10px;
      }

      h1 {
        margin: 0 0 14px;
        font-size: 30px;
        line-height: 1.1;
      }

      .description {
        color: rgba(255, 255, 255, 0.72);
        line-height: 1.65;
        margin-bottom: 28px;
      }

      .stepList {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .step {
        padding: 14px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: white;
        font-weight: 900;
        text-decoration: none;
      }

      .step.active {
        background: rgba(245, 158, 11, 0.14);
        border-color: rgba(245, 158, 11, 0.5);
        color: #fbbf24;
      }

      .stage {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px;
      }

      .card {
        width: 100%;
        max-width: 1040px;
        padding: 42px;
        border-radius: 24px;
        background: rgba(15, 23, 42, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      h2 {
        font-size: 42px;
        line-height: 1.08;
        margin: 0 0 18px;
      }

      .goalBox,
      .sectionBox {
        margin-top: 24px;
        padding: 22px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .goalBox {
        margin-top: 0;
        background: rgba(245, 158, 11, 0.12);
        border-color: rgba(245, 158, 11, 0.3);
      }

      .goalBox strong,
      .sectionTitle {
        color: #fbbf24;
      }

      .bodyText {
        font-size: 18px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.78);
      }

      .sectionTitle {
        margin-top: 34px;
        font-size: 24px;
      }

      .videoGrid,
      .infoGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }

      .videoCard {
        overflow: hidden;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      video {
        width: 100%;
        display: block;
        background: black;
      }

      .videoInfo {
        padding: 16px;
      }

      .videoInfo h4 {
        margin: 0 0 8px;
      }

      .videoInfo p,
      li,
      .tipBox p,
      .warningBox p {
        color: rgba(255, 255, 255, 0.74);
        line-height: 1.55;
      }

      li {
        margin-bottom: 10px;
      }

      .infoGrid {
        margin-top: 18px;
      }

      .tipBox,
      .warningBox {
        padding: 20px;
        border-radius: 16px;
      }

      .tipBox {
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.24);
      }

      .warningBox {
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.26);
      }

      .navButtons {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin-top: 42px;
      }

      .primary,
      .secondary {
        border-radius: 12px;
        padding: 14px 22px;
        font-weight: 900;
        text-decoration: none;
      }

      .primary {
        background: #f59e0b;
        color: #111827;
      }

      .secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
      }

      @media (max-width: 900px) {
        .page {
          grid-template-columns: 1fr;
        }

        .sidebar {
          min-height: auto;
          border-right: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stage {
          padding: 22px;
        }

        .card {
          padding: 26px;
        }

        h2 {
          font-size: 32px;
        }

        .videoGrid,
        .infoGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}