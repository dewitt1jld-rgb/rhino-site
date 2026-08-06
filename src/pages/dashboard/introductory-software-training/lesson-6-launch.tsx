import Link from "next/link";

export default function LessonTwoLaunchPage() {
  return (
    <main className="page">
      <aside className="sidebar">
        <Link href="/dashboard/introductory-software-training" className="back">
          ← Back to Course
        </Link>

        <p className="eyebrow">Lesson 02</p>
        <h1>Introduction to Glazier Studio & PartnerPak</h1>

        <p className="description">
          Learn how to launch the programs, create shortcuts, and understand the
          big-picture purpose of Glazier Studio and PartnerPak.
        </p>

        <div className="stepList">
          <div className="step active">1. Launch the Software</div>
          <Link
            href="/dashboard/introductory-software-training/lesson-2-overview"
            className="step"
          >
            2. Program Walkthrough
          </Link>
          <Link
            href="/dashboard/introductory-software-training/lesson-2-workflow"
            className="step"
          >
            3. Order of Opperations
          </Link>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 1 of 3</p>
          <h2>Launch Glazier Studio & PartnerPak</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Learn how to find, launch, and create desktop
            shortcuts for Glazier Studio and PartnerPak.
          </div>

          <p className="bodyText">
            Before learning how to build projects and frames, you need to know
            how to open the software quickly. This section shows where Glazier
            Studio is installed, how to launch the program, and how to create a
            desktop shortcut.
          </p>

          <div className="sectionBox">
            <h3>Find the Program Folder</h3>

            <p>
              Open File Explorer and navigate to the Glazier Studio installation
              folder:
            </p>

            <div className="codeBox">
              <li>C:\Program Files (x86)\DeMichele Group\Glazier Studio</li>
              <li>C:\Program Files (x86)\DeMichele Group\PartnerPak studio</li>
            </div>

            <p>
              Inside this folder, look for the Glazier Studio or PartnerPak application icon.
            </p>
          </div>

          <div className="sectionBox">
            <h3>Create a Desktop Shortcut</h3>

            <ul>
              <li>Find the Glazier Studio application icon.</li>
              <li>Right-click the icon.</li>
              <li>Select Show more options</li>
              <li>Select <strong>Send to</strong>.</li>
              <li>Select <strong>Desktop create shortcut</strong>.</li>
              <li>Repeat the same process for PartnerPak if your company uses it.</li>
            </ul>

            <p>
              Creating a desktop shortcut makes it easier to launch the software
              throughout the day without searching through program folders. Alternitavly you may click the search bar at the bottom of the screen and search for either application. 
            </p>
          </div>

          <div className="sectionBox">
            <h3>Creating a shortcut</h3>

            <p>
              This video will cover how to create a desktop icon and pin the icon to your taskbar
            </p>

           <div className="videoCard">
  <video
    controls
    preload="metadata"
    poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-2/thumbnails/pin-to-taskbar-thumb.png"
  >
    <source
      src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-2/pin%20to%20taskbar.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>

  
</div>
          </div>

          <div className="sectionBox">
            <h3>What Glazier Studio Does</h3>

            <p>
              Glazier Studio is where projects and frames are created. It allows
              you to build frames, assign materials, review project information,
              and generate reports for estimating or fabrication.
            </p>

            <div className="featureGrid">
              <div className="featureBox">
                <h4>Build Frames</h4>
                <p>
                  Glazier Studio gives you the tools to draw and organize the
                  frames used in your project.
                </p>
              </div>

              <div className="featureBox">
                <h4>Use Metal Groups</h4>
                <p>
                  Metal groups help define the system or product line being used
                  to build the frame.
                </p>
              </div>

              <div className="featureBox">
                <h4>Use Catalog Parts</h4>
                <p>
                  Catalog parts are the individual components that make up the
                  frame, such as heads, jambs, sills, horizontals, and stops.
                </p>
              </div>

              <div className="featureBox">
                <h4>Run Reports</h4>
                <p>
                  Once a frame is built, you can create reports for estimating,
                  drawings, material review, or fabrication.
                </p>
              </div>
            </div>
          </div>

          <div className="sectionBox">
            <h3>The Big Picture</h3>

            <p>
              The goal of this course is to help you understand how the pieces
              fit together before going deep into each tool.
            </p>

            <div className="workflowBox">
               <span>Create Metal Groups</span>
              <span>→</span>
              <span>Build Frames</span>
              <span>→</span>
              <span>Run estimation Reports</span>
              <span>→</span>
              <span>Send to Fabrication</span>
            </div>

            <p>
              Later lessons will break each part of this workflow down step by
              step. For now, focus on understanding that Glazier Studio is the
              starting point for building project information, and PartnerPak
              helps move that information toward fabrication.
            </p>
          </div>

          <div className="infoGrid">
            

            <div className="warningBox">
              <h3>Important</h3>
              <p>
                If you are connected to the network you are currently working with live company wide projects. Do not delete or modify any company created metal groups or projects. These tutorials will never ask you to over-ride something created by another user in your company. 
              </p>
            </div>
          </div>

          <div className="navButtons">
            <Link
              href="/dashboard/introductory-software-training"
              className="secondary"
            >
              ← Course List
            </Link>

            <Link
              href="/dashboard/introductory-software-training/lesson-2-overview"
              className="primary"
            >
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
        .videoCard {
  margin-top: 22px;
  overflow: hidden;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.videoCard video {
  width: 100%;
  display: block;
  background: #000;
}

.videoInfo {
  padding: 18px 20px;
}

.videoInfo h4 {
  margin: 0 0 8px;
  font-size: 22px;
  color: #fbbf24;
  font-weight: 800;
}

.videoInfo p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  font-size: 16px;
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

      .bodyText,
      .sectionBox p {
        font-size: 18px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.78);
      }

      .sectionBox h3 {
        color: #fbbf24;
        margin-top: 0;
      }

      .codeBox {
        margin: 18px 0;
        padding: 18px;
        border-radius: 14px;
        background: rgba(0, 0, 0, 0.34);
        border: 1px solid rgba(245, 158, 11, 0.28);
        color: #fbbf24;
        font-family: Consolas, Monaco, monospace;
        font-weight: 800;
        overflow-x: auto;
      }

      .placeholderBox {
        margin-top: 18px;
        padding: 34px;
        border-radius: 18px;
        border: 1px dashed rgba(245, 158, 11, 0.4);
        background: rgba(245, 158, 11, 0.06);
      }

      .placeholderBox span {
        display: block;
        color: #fbbf24;
        font-weight: 900;
        margin-bottom: 6px;
      }

      .placeholderBox p {
        margin: 0;
        color: rgba(255, 255, 255, 0.68);
      }

      .featureGrid,
      .infoGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
        margin-top: 20px;
      }

      .featureBox {
        padding: 20px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .featureBox h4 {
        margin: 0 0 10px;
        color: #fbbf24;
      }

      .featureBox p {
        margin: 0;
        font-size: 16px;
      }

      .workflowBox {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 22px 0;
      }

      .workflowBox span {
        padding: 10px 13px;
        border-radius: 999px;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.28);
        color: #fbbf24;
        font-weight: 900;
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

        .featureGrid,
        .infoGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}