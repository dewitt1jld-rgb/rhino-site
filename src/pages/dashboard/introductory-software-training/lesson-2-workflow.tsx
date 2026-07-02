import Link from "next/link";

export default function LessonTwoWorkflowPage() {
  return (
    <main className="page">
      <aside className="sidebar">
        <Link href="/dashboard/introductory-software-training" className="back">
          ← Back to Course
        </Link>

        <p className="eyebrow">Lesson 02</p>
        <h1>Introduction to Glazier Studio & PartnerPak</h1>

        <p className="description">
          Understand the overall workflow before jumping into project creation,
          frame building, reports, and fabrication.
        </p>

        <div className="stepList">
          <Link
            href="/dashboard/introductory-software-training/lesson-2-launch"
            className="step"
          >
            1. Launch the Software
          </Link>

          <Link
            href="/dashboard/introductory-software-training/lesson-2-overview"
            className="step"
          >
            2. Program Walkthrough
          </Link>

          <div className="step active">3. Big Picture Workflow</div>
        </div>
      </aside>

      <section className="stage">
        <article className="card">
          <p className="eyebrow">Step 3 of 3</p>
          <h2>Big Picture Workflow</h2>

          <div className="goalBox">
            <strong>Goal:</strong> Understand how Glazier Studio and PartnerPak
            work together from project setup to estimating, reporting, and
            fabrication.
          </div>

          <p className="bodyText">
            Before learning the detailed tools, it helps to understand the full
            workflow. Glazier Studio is where you build and organize the project.
            PartnerPak helps move that information toward fabrication.
          </p>

          <div className="sectionBox">
            <h3>The Typical Workflow</h3>

            <p>
              Most jobs follow the same general path. You start with a customer
              request, create a project, build the frames, review the materials,
              run reports, and then send the job toward fabrication.
            </p>

            <div className="workflowStack">
              <div className="workflowItem">Customer Request</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Create Project</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Build Frames</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Apply Metal Groups</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Use Catalog Parts</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Run Reports</div>
              <div className="workflowArrow">↓</div>
              <div className="workflowItem">Send to Fabrication</div>
            </div>
          </div>

          <div className="sectionBox">
            <h3>How the Main Pieces Work Together</h3>

            <div className="featureGrid">
              <div className="featureBox">
                <h4>Projects</h4>
                <p>
                  A project holds the customer, job, frame, report, and
                  fabrication information in one organized place.
                </p>
              </div>

              <div className="featureBox">
                <h4>Frames</h4>
                <p>
                  Frames are the openings, storefronts, doors, and systems you
                  create inside the project.
                </p>
              </div>

              <div className="featureBox">
                <h4>Metal Groups</h4>
                <p>
                  Metal groups define the system being used. They control the
                  family of material that makes up the frame.
                </p>
              </div>

              <div className="featureBox">
                <h4>Catalog Parts</h4>
                <p>
                  Catalog parts are the individual pieces inside the system,
                  such as heads, jambs, sills, mullions, stops, and accessories.
                </p>
              </div>

              <div className="featureBox">
                <h4>Reports</h4>
                <p>
                  Reports turn the project and frame information into useful
                  output for estimating, material review, glass, drawings, and
                  fabrication.
                </p>
              </div>

              <div className="featureBox">
                <h4>PartnerPak</h4>
                <p>
                  PartnerPak helps prepare the project information for metal
                  fabrication and can send work toward the saw or RhinoFab
                  workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="sectionBox">
            <h3>From Frame to Fabrication</h3>

            <p>
              Once a frame is built, the software can do more than simply show
              the drawing. That frame can be used for estimating, reports, metal
              fabrication, and eventually machine output.
            </p>

            <div className="horizontalFlow">
              <span>Frame</span>
              <span>→</span>
              <span>Reports</span>
              <span>→</span>
              <span>Metal Fabrication</span>
              <span>→</span>
              <span>Saw / RhinoFab</span>
            </div>

            <p>
              You do not need to understand every part of this yet. The goal is
              to see the direction we are heading before we start building real
              projects in the next lessons.
            </p>
          </div>

          <div className="infoGrid">
            <div className="tipBox">
              <h3>Helpful Tip</h3>
              <p>
                Think of Glazier Studio as the project-building side and
                PartnerPak as part of the fabrication-preparation side. They
                work together, but they do not do the exact same job.
              </p>
            </div>

            <div className="warningBox">
              <h3>Important</h3>
              <p>
                Do not worry if terms like metal groups, catalog parts, reports,
                or fabrication do not fully make sense yet. Each one will be
                explained later in the course.
              </p>
            </div>
          </div>

          <div className="completeBox">
            <h3>Lesson 2 Complete</h3>
            <p>
              You now have a basic understanding of what Glazier Studio and
              PartnerPak are used for. In Lesson 3, we will begin creating your
              first project and preparing to build your first frame.
            </p>
          </div>

          <div className="navButtons">
            <Link
              href="/dashboard/introductory-software-training/lesson-2-overview"
              className="secondary"
            >
              ← Previous
            </Link>

            <Link
              href="/dashboard/introductory-software-training"
              className="primary"
            >
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

      .completeBox {
        background: rgba(34, 197, 94, 0.1);
        border-color: rgba(34, 197, 94, 0.28);
      }

      .goalBox strong {
        color: #fbbf24;
      }

      .bodyText,
      .sectionBox p,
      .completeBox p {
        font-size: 18px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.78);
      }

      .sectionBox h3,
      .completeBox h3 {
        color: #fbbf24;
        margin-top: 0;
      }

      .workflowStack {
        max-width: 420px;
        margin: 28px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .workflowItem {
        width: 100%;
        padding: 16px 18px;
        border-radius: 16px;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.28);
        color: #fbbf24;
        font-weight: 900;
        text-align: center;
      }

      .workflowArrow {
        color: #f59e0b;
        font-size: 26px;
        font-weight: 900;
        line-height: 1.4;
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

      .horizontalFlow {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 22px 0;
      }

      .horizontalFlow span {
        padding: 10px 13px;
        border-radius: 999px;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.28);
        color: #fbbf24;
        font-weight: 900;
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