import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Launch the Software",
    href: "/dashboard/introductory-software-training/lesson-6-launch",
  },
  {
    number: 2,
    title: "Program Walkthrough",
    href: "/dashboard/introductory-software-training/lesson-6-overview",
  },
  {
    number: 3,
    title: "Order of Opperations",
    href: "/dashboard/introductory-software-training/lesson-6-workflow",
  },
];

export default function LessonSixWorkflowPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="06"
      lessonTitle="Understanding the Program Layout"
      lessonDescription="Understand the overall workflow before jumping into project creation, frame building, reports, and fabrication."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Order of Opperations</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand the general order of operations, where to start and what the end goal is.
      </div>

      <p className="bodyText">
        Before learning the detailed tools, it helps to understand the full
        workflow. You will not follow these same steps each time but this is a good basic start to understanding how the software works.
      </p>

      <div className="sectionBox">
        <h3>The Typical Workflow</h3>

        <p>
          Most jobs follow the same general path. You start with a Bid
          request, create a project, build the frames, review the materials,
          run reports, and then send the job toward fabrication.
        </p>

        <div className="workflowStack">
          <div className="workflowItem">Bid Request</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Create Project</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Build Frames</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Run Reports</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Win Bid</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Create correct metal groups</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Touch up project</div>
          <div className="workflowArrow">↓</div>
          <div className="workflowItem">Send to Metal Fabrication/RhinoFab</div>
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
              Frames are the curtain walls, storefronts, doors, and systems you
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
            <h4>metal fabrication</h4>
            <p>
              Is the final step before sending a project out to the RhinoFab saw to be cut and fabricated
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
        <h3>Lesson 6 Complete</h3>

        <p>
          You now have a basic understanding of what Glazier Studio and
          PartnerPak are used for. In Lesson 3, we will begin creating your
          first project and preparing to build your first frame.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-6-overview"
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

      <style jsx>{`
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

        .completeBox {
          margin-top: 24px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.28);
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

        .warningBox {
          padding: 20px;
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.26);
        }

        .warningBox h3 {
          margin-top: 0;
        }

        .warningBox p {
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .featureGrid,
          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}