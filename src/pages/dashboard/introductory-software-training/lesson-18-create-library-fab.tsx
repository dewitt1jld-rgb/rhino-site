import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Library Fabrication Overview",
    href: "/dashboard/introductory-software-training/lesson-18-library-fab-overview",
  },
  {
    number: 2,
    title: "Creating a Library Fabrication",
    href: "/dashboard/introductory-software-training/lesson-18-create-library-fab",
  },
  {
    number: 3,
    title: "Formulas & Location References",
    href: "/dashboard/introductory-software-training/lesson-18-formulas-references",
  },
  {
    number: 4,
    title: "Build a Hardware Prep",
    href: "/dashboard/introductory-software-training/lesson-18-build-hardware-prep",
  },
];

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-01-main-screen.png",
  operations:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-02-opperations.png",
  cad: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-03-cad-butt-hinge.png",
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-05-data.png",
};

export default function LessonEighteenCreateLibraryFabPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
      lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 4
      </p>

      <h2>
        Creating a Library Fabrication
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to create a new Library Fabrication record and understand the
        basic information and machining operations that make up the saved prep.
      </div>

      <div className="lessonText">
        <p>
          Once you understand what a Library Fab is, the next step is learning
          how to create one.
        </p>

        <p>
          A Library Fabrication is built from the same basic machining
          operations you have already seen in other fabrication screens. The
          difference is that the fabrication is saved as a reusable rule instead
          of being tied directly to one specific part.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.main}
          alt="Fab Rules Library main screen"
        />

        <figcaption>
          The Fab Rules Library is where reusable fabrication records are
          created, stored, and managed.
        </figcaption>
      </figure>

      <h3>
        Start a New Fabrication
      </h3>

      <div className="lessonText">
        <p>
          To create a new Library Fabrication, begin from the{" "}
          <strong>Fab Rules Library</strong>.
        </p>

        <p>
          Use the white sheet icon in the upper-left area of the screen to begin
          a new fabrication record.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          A new Library Fab starts as an empty record.
        </strong>

        <p>
          You will define what the preparation is, add the required machining
          operations, and then save it so it can be reused later.
        </p>
      </div>

      <h3>
        Add the Machining Operations
      </h3>

      <div className="lessonText">
        <p>
          After creating the record, add the operations required to manufacture
          the preparation.
        </p>

        <p>
          The operations screen works very similarly to the fabrication screens
          you have already used elsewhere in Glazier Studio.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.operations}
          alt="Library Fabrication operations screen"
        />

        <figcaption>
          Each operation defines a portion of the machining required for the
          saved preparation.
        </figcaption>
      </figure>

      <div className="sectionBox">
        <p className="sectionLabel">
          Common Information
        </p>

        <div className="fieldGrid">
          <div className="fieldCard">
            <strong>X Location</strong>

            <p>
              Controls the position of the operation along the length of the
              part.
            </p>
          </div>

          <div className="fieldCard">
            <strong>Y Location</strong>

            <p>
              Controls the side-to-side position of the operation relative to
              the Library Fab&apos;s reference point.
            </p>
          </div>

          <div className="fieldCard">
            <strong>Z Location</strong>

            <p>
              Controls the depth or orientation position used by the machining
              operation.
            </p>
          </div>

          <div className="fieldCard">
            <strong>Operation Information</strong>

            <p>
              Defines the drill, router, depth, diameter, dimensions, or other
              machining values required for the operation.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          X and Z should feel familiar.
        </strong>

        <p>
          Y is the value that behaves differently in Library Fabrications
          because the fabrication uses its own reference point. We will cover
          that in detail in the next step.
        </p>
      </div>

      <h3>
        Build the Prep From the Hardware Dimensions
      </h3>

      <div className="lessonText">
        <p>
          The easiest way to build a hardware prep is to work from the actual
          dimensions of the hardware or manufacturer template.
        </p>

        <p>
          For example, a butt hinge prep may include a routed rectangle along
          with several drilled or countersunk holes.
        </p>

        <p>
          Each of those features becomes one or more machining operations
          inside the Library Fabrication.
        </p>
      </div>

      <div className="imageGrid">
        <figure className="lessonFigure">
          <img
            src={img.cad}
            alt="Butt hinge CAD dimensions"
          />

          <figcaption>
            Hardware drawings or CAD dimensions give you the information needed
            to build the preparation.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.data}
            alt="Library Fabrication data values"
          />

          <figcaption>
            Those dimensions are then translated into machining data inside the
            Library Fabrication.
          </figcaption>
        </figure>
      </div>

      <h3>
        One Prep Can Contain Multiple Operations
      </h3>

      <div className="lessonText">
        <p>
          A Library Fabrication is not limited to a single drill hole or router
          operation.
        </p>

        <p>
          One saved prep can contain every machining operation required for the
          complete piece of hardware.
        </p>
      </div>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example: Butt Hinge Prep
        </p>

        <div className="exampleList">
          <div>
            <span>1</span>
            <p>
              Create the routed hinge pocket.
            </p>
          </div>

          <div>
            <span>2</span>
            <p>
              Add the required mounting holes.
            </p>
          </div>

          <div>
            <span>3</span>
            <p>
              Add any countersink or additional machining operations.
            </p>
          </div>

          <div>
            <span>4</span>
            <p>
              Save all of the operations together as one reusable Library Fab.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Build the complete hardware prep.
        </strong>

        <p>
          The goal is to create one saved Library Fab that contains everything
          the machine needs to manufacture that preparation correctly.
        </p>
      </div>

      <h3>
        Naming and Organization Matter
      </h3>

      <div className="lessonText">
        <p>
          As your Fab Rules Library grows, it can quickly contain a large number
          of hardware preparations.
        </p>

        <p>
          Use clear names and organize the fabrication so someone else can
          identify what hardware the prep belongs to without opening every
          operation.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Good Library Practices
        </p>

        <ul className="lessonList">
          <li>
            Use a clear hardware or preparation name.
          </li>

          <li>
            Keep related operations together inside the same Library Fab.
          </li>

          <li>
            Verify the dimensions before saving the preparation.
          </li>

          <li>
            Avoid creating duplicate Library Fabs when a correct preparation
            already exists.
          </li>

          <li>
            Review unfamiliar existing preparations before using them on a real
            job.
          </li>
        </ul>
      </div>

      <h3>
        Save the Fabrication
      </h3>

      <div className="lessonText">
        <p>
          Once the operations and dimensions are correct, save the Library
          Fabrication.
        </p>

        <p>
          The saved fabrication can now be selected later and applied to a door,
          stick, or other supported fabrication workflow.
        </p>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Saving the prep does not determine where it will be used.
        </strong>

        <p>
          At this point you have created the machining pattern itself. The next
          step is understanding how formulas and location references control
          where that preparation is positioned.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Step 2 Review
        </p>

        <div className="reviewGrid">
          <div>
            <strong>1. Create</strong>
            <span>
              Start a new record in the Fab Rules Library.
            </span>
          </div>

          <div>
            <strong>2. Build</strong>
            <span>
              Add the machining operations required for the prep.
            </span>
          </div>

          <div>
            <strong>3. Verify</strong>
            <span>
              Confirm the dimensions and machining values.
            </span>
          </div>

          <div>
            <strong>4. Save</strong>
            <span>
              Store the completed prep for future use.
            </span>
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-library-fab-overview"
          className="secondary"
        >
          ← Previous: Overview
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-formulas-references"
          className="primary"
        >
          Next: Formulas &amp; References →
        </Link>
      </div>

      <style jsx>{`
        .lessonFigure {
          margin: 30px 0;
          text-align: center;
        }

        .lessonFigure img {
          display: block;
          width: 100%;
          max-width: 820px;
          height: auto;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .lessonFigure figcaption {
          max-width: 760px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin: 22px 0 32px;
        }

        .imageGrid .lessonFigure {
          margin: 0;
        }

        .fieldGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .fieldCard {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fieldCard strong {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
        }

        .fieldCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .exampleBox {
          margin: 24px 0 30px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          background: rgba(255, 255, 255, 0.035);
        }

        .exampleList {
          display: grid;
          gap: 12px;
          margin-top: 14px;
        }

        .exampleList > div {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .exampleList span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .exampleList p {
          margin: 3px 0 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
        }

        .lessonList {
          margin: 14px 0 0;
          padding-left: 22px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        .lessonList li + li {
          margin-top: 6px;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .reviewGrid > div {
          display: grid;
          gap: 6px;
          padding: 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid strong {
          color: #f59e0b;
        }

        .reviewGrid span {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.55;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 760px) {
          .imageGrid,
          .fieldGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}