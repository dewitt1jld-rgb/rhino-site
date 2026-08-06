import Link from "next/link";

export default function ConnectNetworkPage() {
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
          <Link href="/dashboard/introductory-software-training/customer-number" className="step">
            2. Get Customer Number
          </Link>
          <div className="step active">3. Connect to Your Network</div>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 3 of 3</p>
          <h2>Connect to Your Network</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Connect to company network to see active projects and data
          </div>

          <p className="bodyText">
            This step is optional. Some shops need the computer connected to the
            company network so Glazier Studio or PartnerPak can access shared
            files, databases, or fabrication resources.
          </p>

        
         <div className="sectionBox">
  <h3>Step 1 - Open the Network Menu</h3>

  <p>
    Inside <strong>Glazier Studio</strong> or <strong>PartnerPak</strong>,
    click <strong>File</strong> in the upper left corner, then select
    <strong> Network</strong>.
  </p>

  <div className="imageCard">
    <img
      src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/file-network.png"
      alt="Open the Network Menu"
    />
  </div>

  <h3 style={{ marginTop: "40px" }}>Step 2 - Login to the Network</h3>

  <p>
    A login window will appear. go to another coworkers computer and ask them to log into GS or PPAK. when you see the server login screen write down the
    <strong> Server Name</strong> they use as that will be the same Server Name you will use on your computer. 
    <p></p>
    Your <strong>User ID</strong> will normally be your first name. This is
    the name that appears on projects you create.
  </p>

  <div className="imageCard">
    <img
      src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/network-login.png"
      alt="Network Login"
    />
  </div>
</div>

<div className="sectionBox">
  <h3>Before You Continue</h3>

  <ul>
    <li>Opened File → Network.</li>
    <li>Selected the correct Server Name.</li>
    <li>Selected your User ID.</li>
    <li>Can view and access company jobs and data.</li>
  </ul>
</div>

<div className="infoGrid">
  <div className="tipBox">
    <h3>Helpful Tip</h3>

    <p>
      If you don't know which Server Name to use, open Glazier Studio or
      PartnerPak on another employee's computer and use the exact same
      Server Name shown there.
    </p>
  </div>


</div>

      
          <div className="completeBox">
            <h3>Lesson 1 Complete</h3>
            <p>
              Glazier Studio and PartnerPak should now be installed or updated,
              activated with your customer number, and ready for the next lesson.
            </p>
          </div>

          <div className="navButtons">
            <Link href="/dashboard/introductory-software-training/customer-number" className="secondary">
              ← Previous
            </Link>

            <Link href="/dashboard/introductory-software-training" className="primary">
              Finish Lesson
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
      .sectionBox,
      .optionalBox,
      .completeBox {
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

      .optionalBox {
        background: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.3);
      }

      .completeBox {
        background: rgba(34, 197, 94, 0.1);
        border-color: rgba(34, 197, 94, 0.28);
      }

      .goalBox strong {
        color: #fbbf24;
      }

      .bodyText,
      .optionalBox p,
      .completeBox p {
        font-size: 18px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.78);
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
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
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

.imageCard {
  margin-top: 20px;
  padding: 24px;
  border-radius: 18px;
  border: 1px solid rgba(245, 158, 11, 0.18);
  background: rgba(255, 255, 255, 0.03);

  display: flex;
  justify-content: center;
  align-items: center;
}

.imageCard img {
  display: block;
  width: auto;
  max-width: 700px;
  height: auto;
  border-radius: 10px;
}
.sectionBox h3 {
  color: #fbbf24;
  margin-bottom: 14px;
}

.sectionBox p {
  color: rgba(255,255,255,.78);
  line-height: 1.8;
  margin-bottom: 20px;
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

        .infoGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}