import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Create & Organize the Project",
    href: "/dashboard/estimator-training/lesson-4",
  },
  {
    number: 2,
    title: "Enter Estimating Frame Settings",
    href: "/dashboard/estimator-training/lesson-4-frame-settings",
  },
  {
    number: 3,
    title: "Build & Modify the Frame",
    href: "/dashboard/estimator-training/lesson-4-build-frame",
  },
  {
    number: 4,
    title: "Verify the Estimate",
    href: "/dashboard/estimator-training/lesson-4-verify",
  },
];

const img = {
  mainScreen:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-02-main-screen.png",

  frameBuilder:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_7/oldcastle_create_project_2.png",
};

export default function EstimatorLessonFourPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Building Frames for an Estimate"
      lessonDescription="Learn how to organize a project, build estimating frames efficiently, and enter enough information to produce useful pricing without overbuilding the job."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 4
      </p>

      <h2>
        Create & Organize the Project
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Create a clean estimating project and organize the frames in a way that
        is easy to understand during bidding and useful later if the project is
        awarded.
      </div>

      <div className="lessonText">
        <p>
          Before building any frames, start by organizing the project correctly.
        </p>

        <p>
          This may seem like a small detail, but a clean project structure can
          save a large amount of time later.
        </p>

        <p>
          Remember the goal we established in the previous lesson:
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Estimating Philosophy
        </p>

        <h3>
          Build the estimate so you can keep the project.
        </h3>

        <p>
          We want to create the project in a way that makes sense during
          estimating, but we also want it organized well enough that if the job
          is awarded, production can continue from the same project instead of
          starting over.
        </p>
      </div>

      <h3>
        Start With the Correct Catalog
      </h3>

      <div className="lessonText">
        <p>
          Before creating frames, confirm that you are working inside the
          correct manufacturer catalog.
        </p>

        <p>
          Glazier Studio and PartnerPak use different catalogs to organize the
          framing systems and parts available from different manufacturers.
        </p>

        <p>
          The project drawings or specifications should normally identify which
          system is being requested.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.mainScreen}
          alt="Main Glazier Studio project screen"
        />

        <figcaption>
          Confirm the correct catalog before creating the project and building
          frames.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Do not choose a catalog simply because it is already selected.
        </strong>

        <p>
          Verify the manufacturer and system against the bid documents first.
        </p>
      </div>

      <h3>
        Create the Project
      </h3>

      <div className="lessonText">
        <p>
          Create a new project and give it a name that clearly identifies the
          job.
        </p>

        <p>
          The exact naming format is up to your company, but it should be easy
          for another employee to understand what project they are looking at.
        </p>
      </div>

      <div className="exampleGrid">
        <section>
          <p className="sectionLabel">
            Poor Project Name
          </p>

          <h3>
            New Project
          </h3>

          <p>
            This does not tell anyone which customer, building, or bid the
            project belongs to.
          </p>
        </section>

        <section>
          <p className="sectionLabel">
            Better Project Name
          </p>

          <h3>
            Desert Ridge Medical Office
          </h3>

          <p>
            A clear project name makes the file much easier to identify later.
          </p>
        </section>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.frameBuilder}
          alt="Glazier Studio project creation screen"
          style={{
            width: "650px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            display: "block",
            margin: "0 auto",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.55)",
          }}
        >
          Create the project using a clear name that your company will
          recognize later.
        </figcaption>
      </figure>

      <h3>
        Think About How the Drawings Are Organized
      </h3>

      <div className="lessonText">
        <p>
          Once the project exists, look at how the architect, engineer, or
          customer has organized the elevations.
        </p>

        <p>
          Most projects already contain some form of naming structure.
        </p>

        <p>
          Frames may be identified by elevation, building side, room, opening,
          detail number, or another designation.
        </p>

        <p>
          When possible, use those same names inside Glazier Studio.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Match the project documents when it makes sense.
        </strong>

        <p>
          If the architectural drawings call a frame A-12, using A-12 inside
          Glazier Studio makes it much easier to compare the estimate back to
          the original drawings.
        </p>
      </div>

      <h3>
        Frame Set Name vs. Frame Name
      </h3>

      <div className="lessonText">
        <p>
          Two of the most useful organizational tools are the{" "}
          <strong>Frame Set Name</strong> and the{" "}
          <strong>Frame Name</strong>.
        </p>

        <p>
          These fields allow you to group related frames together while still
          giving each frame its own individual identity.
        </p>
      </div>

      <div className="organizationGrid">
        <section>
          <p className="sectionLabel">
            Frame Set Name
          </p>

          <h3>
            Group related frames
          </h3>

          <p>
            Use the Frame Set Name to organize frames by building elevation,
            area, phase, floor, interior/exterior location, or another logical
            grouping.
          </p>

          <div className="exampleLine">
            North Elevation
          </div>

          <div className="exampleLine">
            South Elevation
          </div>

          <div className="exampleLine">
            Interior Storefront
          </div>
        </section>

        <section>
          <p className="sectionLabel">
            Frame Name
          </p>

          <h3>
            Identify the individual frame
          </h3>

          <p>
            Use the Frame Name to match the individual frame designation shown
            on the architectural drawings, shop drawings, or bid documents.
          </p>

          <div className="exampleLine">
            A-12
          </div>

          <div className="exampleLine">
            SF-03
          </div>

          <div className="exampleLine">
            L-29
          </div>
        </section>
      </div>

      <div className="exampleProject">
        <p className="sectionLabel">
          Example Project Structure
        </p>

        <div className="projectRow">
          <span>
            Project
          </span>

          <strong>
            Desert Ridge Medical Office
          </strong>
        </div>

        <div className="projectRow">
          <span>
            Frame Set
          </span>

          <strong>
            North Elevation
          </strong>
        </div>

        <div className="projectRow">
          <span>
            Frame
          </span>

          <strong>
            A-12
          </strong>
        </div>

        <div className="projectRow">
          <span>
            Number Thus
          </span>

          <strong>
            6
          </strong>
        </div>
      </div>

      <h3>
        Number Thus Is Extremely Important for Estimating
      </h3>

      <div className="lessonText">
        <p>
          <strong>Number Thus</strong> tells Glazier Studio how many identical
          copies of the current frame are required.
        </p>

        <p>
          This is one of the most important fields in the estimating workflow.
        </p>

        <p>
          If a project contains 18 identical openings, you generally do not need
          to build the exact same frame 18 times.
        </p>

        <p>
          Build the frame once and enter the proper quantity into Number Thus.
        </p>
      </div>

      <div className="quantityExample">
        <div>
          <span>
            Frame Built
          </span>

          <strong>
            1
          </strong>
        </div>

        <div className="multiply">
          ×
        </div>

        <div>
          <span>
            Number Thus
          </span>

          <strong>
            18
          </strong>
        </div>

        <div className="equals">
          =
        </div>

        <div>
          <span>
            Frames Estimated
          </span>

          <strong>
            18
          </strong>
        </div>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">
          Estimating Warning
        </p>

        <h3>
          A perfect frame with the wrong quantity is still a bad estimate.
        </h3>

        <p>
          If the plans contain 12 identical frames and Number Thus is left at
          1, your estimate may only include material for one frame.
        </p>

        <p>
          That kind of mistake can have a much larger effect on the final price
          than a small dimensional difference inside the frame.
        </p>
      </div>

      <h3>
        Use One Frame When the Openings Are Truly Identical
      </h3>

      <div className="lessonText">
        <p>
          Number Thus works best when the openings really are the same.
        </p>

        <p>
          If two openings use different glass, hardware, dimensions, metal
          systems, door configurations, or other cost-changing conditions, they
          may need to be entered as separate frames.
        </p>

        <p>
          Do not combine different conditions simply because the elevations
          look similar.
        </p>
      </div>

      <div className="comparisonGrid">
        <section>
          <p className="sectionLabel">
            Good Use of Number Thus
          </p>

          <h3>
            12 identical storefront frames
          </h3>

          <p>
            Same dimensions, same framing system, same glass, same components,
            same conditions.
          </p>

          <div className="resultGood">
            Build 1 × Number Thus 12
          </div>
        </section>

        <section>
          <p className="sectionLabel">
            Better as Separate Frames
          </p>

          <h3>
            Similar frames with different requirements
          </h3>

          <p>
            One opening contains a door, another uses different glass, or one
            frame has additional members or reinforcement.
          </p>

          <div className="resultWarning">
            Build separately
          </div>
        </section>
      </div>

      <h3>
        Organization Helps When the Job Is Awarded
      </h3>

      <div className="lessonText">
        <p>
          During bidding, organizing the project makes the estimate easier to
          review.
        </p>

        <p>
          After the job is awarded, that organization becomes even more useful.
        </p>

        <p>
          Someone can open the project, compare the frame names against the
          drawings, update dimensions, refine the metal groups, add
          fabrications, and continue the project toward production.
        </p>
      </div>

      <div className="processBox">
        <p className="sectionLabel">
          Organize Once, Use It Throughout the Job
        </p>

        <div className="processFlow">
          <div>
            <span>1</span>

            <strong>
              Bid Documents
            </strong>

            <p>
              Review the elevations, frame names, quantities, and systems.
            </p>
          </div>

          <div>
            <span>2</span>

            <strong>
              Estimate
            </strong>

            <p>
              Build organized frame sets and frames inside Glazier Studio.
            </p>
          </div>

          <div>
            <span>3</span>

            <strong>
              Award
            </strong>

            <p>
              Continue using the same project if the company wins the job.
            </p>
          </div>

          <div>
            <span>4</span>

            <strong>
              Production
            </strong>

            <p>
              Refine the existing frames instead of recreating the project.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Do Not Overthink the Project Setup
      </h3>

      <div className="lessonText">
        <p>
          The project does not need an overly complicated naming structure.
        </p>

        <p>
          You simply want enough organization that you can quickly answer:
        </p>
      </div>

      <div className="questionGrid">
        <div>
          <strong>
            What project is this?
          </strong>
        </div>

        <div>
          <strong>
            Where is this frame located?
          </strong>
        </div>

        <div>
          <strong>
            Which frame on the drawings does this represent?
          </strong>
        </div>

        <div>
          <strong>
            How many of these frames exist?
          </strong>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          If another employee can answer those questions quickly, your project
          is probably organized well enough.
        </strong>
      </div>

      <h3>
        Before Moving On
      </h3>

      <div className="lessonText">
        <p>
          At this point, we should have a clean project, the correct catalog,
          and a plan for how the frames will be organized.
        </p>

        <p>
          In the next section, we will begin entering the actual frame settings
          used for estimating.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Checkpoint
        </p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I confirmed the correct manufacturer
            catalog.
          </label>

          <label>
            <input type="checkbox" /> My project has a clear and recognizable
            name.
          </label>

          <label>
            <input type="checkbox" /> I understand how I want to organize Frame
            Sets.
          </label>

          <label>
            <input type="checkbox" /> My Frame Names can be matched back to the
            project drawings.
          </label>

          <label>
            <input type="checkbox" /> I reviewed the quantity of each frame.
          </label>

          <label>
            <input type="checkbox" /> I understand when to use Number Thus and
            when similar frames should be separated.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-3-production"
          className="secondary"
        >
          ← Previous: Building Metal Groups
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-4-frame-settings"
          className="primary"
        >
          Next: Enter Estimating Frame Settings →
        </Link>
      </div>

      <style jsx>{`
        .exampleGrid,
        .organizationGrid,
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .exampleGrid section,
        .organizationGrid section,
        .comparisonGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .exampleGrid h3,
        .organizationGrid h3,
        .comparisonGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .exampleGrid p:not(.sectionLabel),
        .organizationGrid p:not(.sectionLabel),
        .comparisonGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .exampleLine {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.22);
          color: #ffffff;
          font-weight: 800;
        }

        .exampleProject {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .projectRow {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 18px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .projectRow:last-child {
          border-bottom: 0;
        }

        .projectRow span {
          color: rgba(255, 255, 255, 0.55);
          font-weight: 750;
        }

        .projectRow strong {
          color: #ffffff;
        }

        .quantityExample {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin: 30px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.22);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.06);
        }

        .quantityExample > div:not(.multiply):not(.equals) {
          min-width: 150px;
          padding: 17px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .quantityExample span {
          display: block;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .quantityExample strong {
          color: #f59e0b;
          font-size: 28px;
        }

        .multiply,
        .equals {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .warningBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(245, 158, 11, 0.38);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
        }

        .warningBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .warningBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .resultGood,
        .resultWarning {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          font-weight: 900;
        }

        .resultGood {
          color: #86efac;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .resultWarning {
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
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

        .questionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 30px;
        }

        .questionGrid > div {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .questionGrid strong {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .processFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .exampleGrid,
          .organizationGrid,
          .comparisonGrid,
          .questionGrid,
          .processFlow {
            grid-template-columns: 1fr;
          }

          .projectRow {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}