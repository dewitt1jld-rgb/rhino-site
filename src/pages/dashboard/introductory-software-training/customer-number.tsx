import Link from "next/link";

export default function CustomerNumberPage() {
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
          <Link href="/dashboard/introductory-software-training/download-install" className="step">
            1. Download and Install Software
          </Link>
          <div className="step active">2. Get Customer Number</div>
          <Link href="/dashboard/introductory-software-training/connect-network" className="step">
            3. Connect to Your Network
          </Link>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 2 of 3</p>
          <h2>Get Customer Number</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Locate and enter the customer number needed
            to activate Glazier Studio and PartnerPak.
          </div>

          <p className="bodyText">
            After installation, the software will ask for your company customer
            number. This number connects the software to your company account.
            If you do not know your customer number, contact the DeMichele Group
            by calling 480-985-4926.
          </p>

          <h3 className="sectionTitle">Where the Customer Number Goes</h3>

          <div className="imageGrid">
            <div className="imageCard">
              <h4>Glazier Studio</h4>
              <img
                src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/customer-number-gs.png"
                alt="Glazier Studio customer number screen"
              />
            </div>

            <div className="imageCard">
              <h4>PartnerPak</h4>
              <img
                src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/customer%20number%20ppak.png"
                alt="PartnerPak customer number screen"
              />
            </div>
          </div>

          <div className="sectionBox">
            <h3>Before You Continue</h3>
            <ul>
              <li>Locate your company customer number.</li>
              <li>Enter the customer number exactly as provided.</li>
              <li>Confirm the software accepts the number.</li>
            </ul>
          </div>

          <div className="infoGrid">
            <div className="tipBox">
              <h3>Helpful Tip</h3>
              <p>
                Keep the customer number somewhere safe for future installs,
                updates, or new computers.
              </p>
            </div>

            <div className="warningBox">
              <h3>Important</h3>
              <p>
                Do not use another company’s customer number. The software
                should be activated under your own company account.
              </p>
            </div>
          </div>

          <div className="navButtons">
            <Link href="/dashboard/introductory-software-training/download-install" className="secondary">
              ← Previous
            </Link>

            <Link href="/dashboard/introductory-software-training/connect-network" className="primary">
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
    <style jsx>{`
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

      .imageGrid,
      .infoGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }

      .imageCard {
        overflow: hidden;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .imageCard h4 {
        margin: 0;
        padding: 16px;
        color: #fbbf24;
        font-size: 18px;
      }

      .imageCard img {
        display: block;
        width: 100%;
        height: auto;
      }

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

        .imageGrid,
        .infoGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}