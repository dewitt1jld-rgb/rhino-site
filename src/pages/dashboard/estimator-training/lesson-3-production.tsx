import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Choose the Right Metal Group",
    href: "/dashboard/estimator-training/lesson-3",
  },
  {
    number: 2,
    title: "Build the Estimating Components",
    href: "/dashboard/estimator-training/lesson-3-components",
  },
  {
    number: 3,
    title: "Estimating Now, Fabrication Later",
    href: "/dashboard/estimator-training/lesson-3-production",
  },
];

export default function EstimatorLessonThreeProductionPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="03"
      lessonTitle="Building Metal Groups for Estimating"
      lessonDescription="Learn how to choose and prepare a metal group for estimating so the correct material and components are included without rebuilding the project later."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 3
      </p>

      <h2>
        Estimating Now, Fabrication Later
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Build the estimating project accurately enough that it can continue
        into production later without wasting estimating time on details that
        are not yet needed.
      </div>

      <div className="lessonText">
        <p>
          At this point, we have selected the correct metal group and reviewed
          the components that affect the estimate.
        </p>

        <p>
          The next question is:
        </p>

        <p>
          <strong>
            How much work should we actually do before the job has even been
            awarded?
          </strong>
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          The Short Answer
        </p>

        <h3>
          Build enough now that you do not have to start over later.
        </h3>

        <p>
          During estimating, we want the project to contain the correct system,
          material, and major components. We do not need to spend unnecessary
          time making every part production-ready before we even know whether
          the company will win the job.
        </p>
      </div>

      <h3>
        Estimating and Production Have Different Priorities
      </h3>

      <div className="lessonText">
        <p>
          Estimating and fabrication use many of the same project files, but
          they are trying to accomplish different things.
        </p>

        <p>
          During estimating, we are primarily trying to determine what the
          project is likely to cost.
        </p>

        <p>
          During production, we need the project to be detailed enough that the
          material can actually be ordered, cut, fabricated, assembled, and
          installed.
        </p>
      </div>

      <div className="comparisonGrid">
        <section>
          <p className="sectionLabel">
            During Estimating
          </p>

          <h3>
            Focus on cost-driving information
          </h3>

          <ul>
            <li>Correct framing system</li>
            <li>Correct primary metal</li>
            <li>Required optional metal</li>
            <li>Vinyl and gaskets</li>
            <li>Hardware that affects pricing</li>
            <li>Glazing stops</li>
            <li>Glass types</li>
            <li>Frame quantities</li>
            <li>Door quantities and configurations</li>
            <li>Labor and other estimating inputs</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">
            During Production
          </p>

          <h3>
            Refine the project for fabrication
          </h3>

          <ul>
            <li>Final field dimensions</li>
            <li>Exact opening sizes</li>
            <li>Anchor locations</li>
            <li>Weep locations</li>
            <li>Final hardware prep</li>
            <li>Detailed fabrication rules</li>
            <li>Final part lengths</li>
            <li>Shop or field adjustments</li>
            <li>RhinoFab production requirements</li>
            <li>Final verification before release</li>
          </ul>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          Estimating does not require the project to be production-ready.
        </strong>

        <p>
          But a good estimating project should be production-friendly.
        </p>
      </div>

      <h3>
        What Does Production-Friendly Mean?
      </h3>

      <div className="lessonText">
        <p>
          Production-friendly means that the project has been built using the
          correct basic structure from the beginning.
        </p>

        <p>
          The correct metal group was chosen. The correct system was used. The
          major material is represented. Frames were built in a sensible way.
          Doors were entered correctly. The project is organized.
        </p>

        <p>
          When the job is awarded, you can continue working with that project
          instead of deleting it and rebuilding everything from scratch.
        </p>
      </div>

      <div className="processBox">
        <p className="sectionLabel">
          A Better Project Life Cycle
        </p>

        <div className="processFlow">
          <div>
            <span>1</span>

            <strong>
              Estimate
            </strong>

            <p>
              Build the project with the correct systems and components.
            </p>
          </div>

          <div>
            <span>2</span>

            <strong>
              Win the Job
            </strong>

            <p>
              Continue using the same project instead of starting over.
            </p>
          </div>

          <div>
            <span>3</span>

            <strong>
              Update
            </strong>

            <p>
              Replace theoretical dimensions with final field information and
              approved project details.
            </p>
          </div>

          <div>
            <span>4</span>

            <strong>
              Fabricate
            </strong>

            <p>
              Add final production details and prepare the job for RhinoFab.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Avoid the Throwaway Estimate
      </h3>

      <div className="lessonText">
        <p>
          One of the easiest ways to create extra work is to build a rough,
          temporary version of the job only for estimating.
        </p>

        <p>
          That may seem faster at first, but if the company wins the project,
          someone then has to recreate the frames using the correct systems,
          correct parts, and correct project structure.
        </p>

        <p>
          Now the same job has effectively been entered twice.
        </p>
      </div>

      <div className="workflowComparison">
        <section className="poorWorkflow">
          <p className="sectionLabel">
            Poor Workflow
          </p>

          <h3>
            Build it twice
          </h3>

          <div className="workflowSteps">
            <div>
              <span>1</span>
              <p>
                Build rough frames quickly just to get pricing.
              </p>
            </div>

            <div>
              <span>2</span>
              <p>
                Ignore parts or components that will eventually matter.
              </p>
            </div>

            <div>
              <span>3</span>
              <p>
                Win the project.
              </p>
            </div>

            <div>
              <span>4</span>
              <p>
                Delete or abandon the estimate and rebuild the job for
                fabrication.
              </p>
            </div>
          </div>
        </section>

        <section className="goodWorkflow">
          <p className="sectionLabel">
            Better Workflow
          </p>

          <h3>
            Build once, refine later
          </h3>

          <div className="workflowSteps">
            <div>
              <span>1</span>
              <p>
                Start with the correct metal group and system.
              </p>
            </div>

            <div>
              <span>2</span>
              <p>
                Include the components that affect pricing.
              </p>
            </div>

            <div>
              <span>3</span>
              <p>
                Win the project.
              </p>
            </div>

            <div>
              <span>4</span>
              <p>
                Update the existing job with final dimensions and fabrication
                requirements.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          The Principle
        </p>

        <h3>
          Do not build a disposable estimate.
        </h3>

        <p>
          Build an estimate that is accurate enough for pricing and organized
          well enough that it can become the starting point for the real job.
        </p>
      </div>

      <h3>
        Why We Do Not Perfect Fabrications During Estimating
      </h3>

      <div className="lessonText">
        <p>
          Fabrication can require a large amount of detail.
        </p>

        <p>
          Anchor holes, weep holes, hardware preparation, formulas, fabrication
          locations, and machine-specific requirements can all take time to
          configure and verify.
        </p>

        <p>
          During bidding, many of those details may not even be finalized yet.
        </p>

        <p>
          We may still be working from architectural drawings. Field
          measurements may not exist. Hardware may change. The project may be
          revised. And most importantly, the company may not win the job.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">
          Avoid Unnecessary Work
        </p>

        <h3>
          Do not spend production time on a project that is still only a bid.
        </h3>

        <p>
          Detailed fabrication work should generally be completed once the job
          is awarded and the project information is stable enough to justify
          the time.
        </p>
      </div>

      <h3>
        But Do Not Ignore Fabrication Completely
      </h3>

      <div className="lessonText">
        <p>
          There is an important difference between not completing fabrications
          and building the project in a way that makes future fabrication
          difficult.
        </p>

        <p>
          If you know that a certain system, component, or frame configuration
          will eventually require special treatment, keep that in mind while
          building the estimate.
        </p>

        <p>
          You do not necessarily need to program the fabrication yet, but you
          should avoid making choices that will force the entire frame to be
          rebuilt later.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Leave yourself a clean path forward.
        </strong>

        <p>
          The estimate should be simple enough to build quickly, but accurate
          enough that production can continue from it later.
        </p>
      </div>

      <h3>
        Update the Project After Award
      </h3>

      <div className="lessonText">
        <p>
          If your company wins the project, the estimating file becomes a
          valuable starting point.
        </p>

        <p>
          At that point, begin replacing assumptions and bid-stage information
          with final project information.
        </p>
      </div>

      <div className="updateGrid">
        <div>
          <strong>
            Dimensions
          </strong>

          <p>
            Replace estimated or architectural dimensions with verified field
            dimensions when available.
          </p>
        </div>

        <div>
          <strong>
            Systems
          </strong>

          <p>
            Confirm that the specified framing systems and approved
            substitutions match what was originally estimated.
          </p>
        </div>

        <div>
          <strong>
            Glass
          </strong>

          <p>
            Update glass types, thicknesses, coatings, and final approved
            selections.
          </p>
        </div>

        <div>
          <strong>
            Hardware
          </strong>

          <p>
            Confirm the final hardware schedule and any required preparations.
          </p>
        </div>

        <div>
          <strong>
            Fabrications
          </strong>

          <p>
            Add and verify anchors, weeps, hardware preparation, and other
            production operations.
          </p>
        </div>

        <div>
          <strong>
            Final Review
          </strong>

          <p>
            Verify every frame and component before releasing material or
            sending the project to RhinoFab.
          </p>
        </div>
      </div>

      <h3>
        Remember That Bid Information Can Change
      </h3>

      <div className="lessonText">
        <p>
          The project you estimate may not be identical to the project that is
          eventually built.
        </p>

        <p>
          Drawings can change. Dimensions can change. Glass can change.
          Hardware can change. Systems can be substituted.
        </p>

        <p>
          Do not assume that information entered during estimating is still
          correct just because the job was awarded.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">
          Always Reverify
        </p>

        <h3>
          Winning the job does not make the estimate production-ready.
        </h3>

        <p>
          Use the estimate as your starting point, then compare it against the
          current approved plans, specifications, field dimensions, and project
          requirements before releasing anything for fabrication.
        </p>
      </div>

      <h3>
        The Metal Group Should Save You Time Twice
      </h3>

      <div className="lessonText">
        <p>
          A properly prepared metal group should save time during estimating by
          automatically picking up the correct components.
        </p>

        <p>
          It should then save time again after the project is awarded because
          the same frames can continue into the production process.
        </p>

        <p>
          That is one of the biggest reasons we spent the extra time reviewing
          the metal group before building the project.
        </p>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">
          Lesson 3 Takeaway
        </p>

        <h3>
          Build for the estimate. Prepare for the job.
        </h3>

        <p>
          During estimating, focus on the components and information that
          affect cost. Do not waste time perfecting production details too
          early.
        </p>

        <p>
          At the same time, build the project correctly enough that if you win
          the job, you can continue refining the same frames instead of
          starting over.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Final Checkpoint
        </p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand the difference between an
            estimating-ready project and a production-ready project.
          </label>

          <label>
            <input type="checkbox" /> I included the components that affect the
            estimate.
          </label>

          <label>
            <input type="checkbox" /> I did not spend unnecessary time
            perfecting fabrication details during bidding.
          </label>

          <label>
            <input type="checkbox" /> I built the project in a way that can be
            refined later instead of rebuilt.
          </label>

          <label>
            <input type="checkbox" /> I understand that bid-stage dimensions
            and project information must be reverified after award.
          </label>

          <label>
            <input type="checkbox" /> I know the project still needs a full
            production review before material or fabrication is released.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-3-components"
          className="secondary"
        >
          ← Previous: Build the Estimating Components
        </Link>

        <Link
          href="/dashboard/estimator-training"
          className="primary"
        >
          Finish Lesson 3 →
        </Link>
      </div>

      <style jsx>{`
        .comparisonGrid,
        .workflowComparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .comparisonGrid section,
        .workflowComparison section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .comparisonGrid h3,
        .workflowComparison h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .comparisonGrid ul {
          margin: 12px 0 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.85;
        }

        .processBox {
          margin: 32px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .processFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .processFlow > div {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .processFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          margin-bottom: 13px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .processFlow strong {
          display: block;
          color: #ffffff;
        }

        .processFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .workflowSteps {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .workflowSteps > div {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .workflowSteps span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 30px;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          color: #ffffff;
          font-weight: 900;
        }

        .poorWorkflow .workflowSteps span {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }

        .goodWorkflow .workflowSteps span {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.32);
          color: #f59e0b;
        }

        .workflowSteps p {
          margin: 2px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .warningBox,
        .criticalBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.38);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.32);
          background: rgba(239, 68, 68, 0.07);
        }

        .warningBox h3,
        .criticalBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel),
        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .updateGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 26px 0 34px;
        }

        .updateGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .updateGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .updateGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .finalTakeaway {
          margin: 34px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 18px;
          background:
            linear-gradient(
              135deg,
              rgba(245, 158, 11, 0.12),
              rgba(255, 255, 255, 0.025)
            );
        }

        .finalTakeaway h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 27px;
          line-height: 1.3;
        }

        .finalTakeaway p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.75;
        }

        .finalTakeaway p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .processFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .comparisonGrid,
          .workflowComparison,
          .updateGrid,
          .processFlow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}