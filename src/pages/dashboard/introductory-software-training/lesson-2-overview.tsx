import Link from "next/link";

export default function LessonTwoOverviewPage() {
  return (
    <main className="page">
      <aside className="sidebar">
        <Link href="/dashboard/introductory-software-training" className="back">
          ← Back to Course
        </Link>

        <p className="eyebrow">Lesson 02</p>
        <h1>Introduction to Glazier Studio & PartnerPak</h1>

        <p className="description">
          Learn what Glazier Studio and PartnerPak are used for before moving
          into projects, frames, reports, and fabrication.
        </p>

        <div className="stepList">
          <Link
            href="/dashboard/introductory-software-training/lesson-2-launch"
            className="step"
          >
            1. Launch the Software
          </Link>

          <div className="step active">2. Program Walkthrough</div>

          <Link
            href="/dashboard/introductory-software-training/lesson-2-workflow"
            className="step"
          >
            3. Big Picture Workflow
          </Link>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 2 of 3</p>
          <h2>Program Walkthrough</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Understand what Glazier Studio and PartnerPak
            are used for before and how it all ties together. 
          </div>

          <p className="bodyText">
            Glazier Studio and Partnerpak are identical in function. I will use Glazier Studio for the majority of the training but all buttons and layouts are identical between the twho programs. 
            The only diffrence between GS and PPAK is that PPAK hosts data for Kawneer while GS hosts data for all of the other vendors.  
          </p>

          <div className="sectionBox">
            <h3>Program Overview</h3>
            <p>
             This video covers a quick overview of the program, where screens are located and how the program functions on a basic level. 
            </p>

            <div className="placeholderBox">
              <span>Video Placeholder</span>
              
            </div>
          </div>

          <div className="sectionBox">
            <h3>What Glazier Studio & PartnerPak Are For</h3>
            <p>
              Glazier Studio / PartnerPak were originally designed as estimating software. they now do much more then that. 
              While still being great estimating tools they also work as the interface to send frames, doors and material 
              to RhinoFab equipment to be cut and fabricated. 
            </p>
          </div>

          
          <div className="featureGrid">
            <div className="featureBox">
              <h4>Projects & Frames</h4>
              <p>
                Projects keep job information organized so you can estimate,
                draw frames, review, and fabricate work from one central location.
              </p>
            </div>

             <div className="featureBox">
              <h4>Metal Groups</h4>
              <p>
                Metal groups are a compilation of parts that define the product system being used to create the
                frame.
              </p>
            </div>

            <div className="featureBox">
              <h4>Catalog Parts</h4>
              <p>
                Catalog parts are the individual components that make up the
                metal group and ultimately get used in the frame, such as heads, jambs, sills, mullions, and stops.
              </p>
            </div>

            <div className="featureBox">
              <h4>Reports</h4>
              <p>
                Reports turn project data into useful estimating, drawing,
                material, and purchase orders. 
              </p>
            </div>

            <div className="featureBox">
              <h4>Metal Fabrication</h4>
              <p>
                This screen is the final step before sending stock lengths out to a RhinoFab machine. 
              </p>
            </div>

              <div className="featureBox">
              <h4>Door fabrication</h4>
              <p>
                This screen is the final step before sending a door leaf out to a RhinoFab machine.
              </p>
            </div>
          </div>

          <div className="infoGrid">
            <div className="tipBox">
              <h3>Helpful Tip</h3>
              <p>
                Do not worry about understanding every button yet. The goal of
                this lesson is to understand the purpose of the software before
                learning the detailed steps.
              </p>
            </div>

            <div className="warningBox">
              <h3>Important</h3>
              <p>
                Avoid changing settings, databases, metal groups, or catalog
                parts until you understand how they affect the rest of the
                workflow.
              </p>
            </div>
          </div>

          <div className="navButtons">
            <Link
              href="/dashboard/introductory-software-training/lesson-2-launch"
              className="secondary"
            >
              ← Previous
            </Link>

            <Link
              href="/dashboard/introductory-software-training/lesson-2-workflow"
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

      .goalBox strong {
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
        color: rgba(255, 255, 255, 0.74);
        line-height: 1.55;
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

      .tipBox h3,
      .warningBox h3 {
        margin-top: 0;
      }

      .tipBox p,
      .warningBox p {
        color: rgba(255, 255, 255, 0.74);
        line-height: 1.55;
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