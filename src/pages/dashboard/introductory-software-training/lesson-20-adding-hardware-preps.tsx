import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Door Fabrication Overview",
    href: "/dashboard/introductory-software-training/lesson-20-door-fabrication-overview",
  },
  {
    number: 2,
    title: "Adding Hardware Preparations",
    href: "/dashboard/introductory-software-training/lesson-20-adding-hardware-preps",
  },
  {
    number: 3,
    title: "Reviewing & Verifying",
    href: "/dashboard/introductory-software-training/lesson-20-verifying-door-fabrications",
  },
  {
    number: 4,
    title: "Outputting Doors",
    href: "/dashboard/introductory-software-training/lesson-20-outputting-doors",
  },
];

const img = {
  addOperation:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-04-add-opperation.png",
  addLibraryFab:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-05-add-library-fab.png",
  libraryFab:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-06-library-fab-screen.png",
  addingFabs:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-07-adding-fabs.png",
};

export default function LessonTwentyAddingHardwarePrepsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="20"
      lessonTitle="Door Fabrication"
      lessonDescription="Use the Door Fabrication screen to create, position, verify, and output the preparations required for door hardware."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 4
      </p>

      <h2>
        Adding Hardware Preparations
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to add individual machining operations and reusable Library
        Fabs to a door, then position those preparations correctly before
        applying them.
      </div>

      <div className="lessonText">
        <p>
          Once the correct door is selected and its machine orientation has
          been verified, you can begin adding the machining required for the
          door hardware.
        </p>

        <p>
          Door Fabrication gives you two main ways to add machining:
          <strong> Add Operation</strong> and <strong>Add Library Fabs</strong>.
        </p>

        <p>
          Which one you use depends on whether you are creating individual
          machining operations or applying a reusable preparation that has
          already been built in the Fab Rules Library.
        </p>
      </div>

      <div className="methodGrid">
        <div>
          <p className="sectionLabel">
            Option 1
          </p>

          <h3>
            Add Operation
          </h3>

          <p>
            Add an individual machining operation directly to the selected
            door.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Option 2
          </p>

          <h3>
            Add Library Fabs
          </h3>

          <p>
            Select a reusable preparation from the Fab Rules Library and place
            it on the door.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          For common hardware, Library Fabs are usually the more efficient
          workflow.
        </strong>

        <p>
          If a verified prep already exists, you can reuse the full machining
          pattern instead of rebuilding every route and drill operation each
          time.
        </p>
      </div>

      <h3>
        Add Operation
      </h3>

      <div className="lessonText">
        <p>
          <strong>Add Operation</strong> allows you to add an individual
          fabrication operation directly to the door.
        </p>

        <p>
          This works similarly to the fabrication operations you have already
          seen in other areas of the software.
        </p>

        <p>
          This option is useful when you need to create a specific machining
          operation rather than applying a complete reusable hardware prep.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.addOperation}
          alt="Add Operation button in Door Fabrication"
        />

        <figcaption>
          Use Add Operation when you need to add an individual fabrication
          operation directly to the door.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Remember the difference:
        </strong>

        <p>
          <strong>Add Operation</strong> adds individual machining.{" "}
          <strong>Add Library Fabs</strong> applies a previously created group
          of machining operations.
        </p>
      </div>

      <h3>
        Add Library Fabs
      </h3>

      <div className="lessonText">
        <p>
          For hardware preparations that have already been created in the Fab
          Rules Library, use <strong>Add Library Fabs</strong>.
        </p>

        <p>
          This opens the Library Fab selection screen where you can find the
          correct hardware prep and then determine where it should be placed on
          the door.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.addLibraryFab}
          alt="Add Library Fabs button in Door Fabrication"
        />

        <figcaption>
          Select Add Library Fabs to open the reusable fabrication library.
        </figcaption>
      </figure>

      <h3>
        Find the Correct Preparation
      </h3>

      <div className="lessonText">
        <p>
          Once the Library Fab screen is open, locate the exact preparation
          required for the hardware on the door.
        </p>

        <p>
          Depending on how your library has been organized, you may be able to
          narrow the list using options such as <strong>Vendor</strong> and{" "}
          <strong>Fab Type</strong>.
        </p>

        <p>
          This is where the naming and organization discussed in Lesson 19
          becomes especially important.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.libraryFab}
          alt="Library Fab selection screen in Door Fabrication"
        />

        <figcaption>
          Use the Library Fab screen to locate the correct reusable hardware
          preparation.
        </figcaption>
      </figure>

      <div className="selectionGrid">
        <div>
          <strong>
            Vendor
          </strong>

          <p>
            Narrow the available preparations by manufacturer or vendor when
            that information has been organized in the library.
          </p>
        </div>

        <div>
          <strong>
            Fab Type
          </strong>

          <p>
            Narrow the list by the type of fabrication or hardware
            preparation.
          </p>
        </div>

        <div>
          <strong>
            Prep Name
          </strong>

          <p>
            Verify that the selected Library Fab matches the exact hardware you
            intend to install.
          </p>
        </div>

        <div>
          <strong>
            Saved Operations
          </strong>

          <p>
            Remember that one Library Fab may contain several machining
            operations grouped together.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Do not select a prep just because the name looks familiar.
        </strong>

        <p>
          Make sure it matches the correct manufacturer, model, and hardware
          requirements before applying it to the door.
        </p>
      </div>

      <h3>
        Decide Where the Prep Belongs
      </h3>

      <div className="lessonText">
        <p>
          After selecting the Library Fab, you need to tell Door Fabrication
          where that prep belongs on the door.
        </p>

        <p>
          Some hardware preparations only need one location. Others may need to
          be repeated at several locations.
        </p>

        <p>
          A hinge prep is a good example. You may use one saved hinge
          preparation but apply it at several different heights on the same
          door.
        </p>
      </div>

      <div className="locationExample">
        <div>
          <p className="sectionLabel">
            One Saved Prep
          </p>

          <strong>
            Hinge Preparation
          </strong>

          <p>
            The machining pattern is created once in the Library Fab.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Multiple Locations
          </p>

          <strong>
            Position 1 · Position 2 · Position 3
          </strong>

          <p>
            The same preparation can be positioned at multiple locations on
            the door.
          </p>
        </div>
      </div>

      <h3>
        Understand the Location Reference
      </h3>

      <div className="lessonText">
        <p>
          When entering the location, make sure you understand what the
          dimension is being measured from.
        </p>

        <p>
          Depending on the project and hardware, a location may be referenced
          from the bottom of the door, from finished floor, or from another
          defined reference.
        </p>

        <p>
          The number itself is only useful if you understand what that number
          is referenced from.
        </p>
      </div>

      <div className="referenceGrid">
        <div>
          <strong>
            Bottom of Door
          </strong>

          <p>
            A location may be entered relative to the physical bottom edge of
            the door.
          </p>
        </div>

        <div>
          <strong>
            Finished Floor
          </strong>

          <p>
            Hardware schedules may specify locations relative to finished
            floor.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Finished floor and bottom of door are not automatically the same
          reference.
        </strong>

        <p>
          Make sure you understand the dimension before entering the hardware
          location.
        </p>
      </div>

      <h3>
        Add Each Location
      </h3>

      <div className="lessonText">
        <p>
          After entering a location, make sure you actually add that location
          to the preparation before moving on.
        </p>

        <p>
          This is an important part of the workflow and one of the easier steps
          to miss.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.addingFabs}
          alt="Adding Library Fab locations in Door Fabrication"
        />

        <figcaption>
          Enter the required location and make sure it is added before
          applying the preparation.
        </figcaption>
      </figure>

      <div className="criticalBox">
        <p className="sectionLabel">
          Critical Step
        </p>

        <h3>
          Enter the location, then click ADD.
        </h3>

        <p>
          Do not assume that typing the dimension is enough. The location needs
          to be added before the preparation is applied.
        </p>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Forgetting ADD can place the preparation incorrectly.
        </strong>

        <p>
          If the location has not been properly added, the prep can end up at
          the bottom of the door instead of the intended hardware location.
        </p>
      </div>

      <h3>
        Repeated Hardware Preps
      </h3>

      <div className="lessonText">
        <p>
          If the same hardware preparation needs to appear several times, add
          each required location before applying the Library Fab.
        </p>

        <p>
          This lets one reusable preparation handle several identical hardware
          locations without rebuilding the machining.
        </p>
      </div>

      <div className="repeatFlow">
        <div>
          <span>1</span>

          <strong>
            Select the Library Fab
          </strong>

          <p>
            Choose the verified hardware preparation.
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>
            Enter Location
          </strong>

          <p>
            Enter the first required position.
          </p>
        </div>

        <div>
          <span>3</span>

          <strong>
            Click ADD
          </strong>

          <p>
            Add that location to the list.
          </p>
        </div>

        <div>
          <span>4</span>

          <strong>
            Repeat
          </strong>

          <p>
            Add any additional required locations.
          </p>
        </div>

        <div>
          <span>5</span>

          <strong>
            Apply
          </strong>

          <p>
            Apply the completed preparation to the door.
          </p>
        </div>
      </div>

      <h3>
        Apply the Fabrication
      </h3>

      <div className="lessonText">
        <p>
          Once the correct Library Fab has been selected and all required
          locations have been added, use <strong>Apply</strong> to place the
          fabrication onto the door.
        </p>

        <p>
          At that point, the machining operations from the Library Fab become
          part of the selected door&apos;s fabrication.
        </p>
      </div>

      <div className="applyFlow">
        <div>
          <strong>
            Select
          </strong>

          <span>
            Choose the correct Library Fab.
          </span>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <strong>
            Position
          </strong>

          <span>
            Enter and add each required location.
          </span>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <strong>
            Apply
          </strong>

          <span>
            Add the complete preparation to the door.
          </span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Applying the prep is not the final verification.
        </strong>

        <p>
          After the fabrication is added, you still need to review the actual
          operations and dimensions before the door is sent to the machine.
          That is what we will cover in Step 3.
        </p>
      </div>

      <h3>
        Hardware Prep Workflow
      </h3>

      <div className="workflowChecklist">
        <div>
          <span>01</span>

          <p>
            Select the correct door.
          </p>
        </div>

        <div>
          <span>02</span>

          <p>
            Verify the machine orientation.
          </p>
        </div>

        <div>
          <span>03</span>

          <p>
            Choose Add Operation or Add Library Fabs.
          </p>
        </div>

        <div>
          <span>04</span>

          <p>
            Select the exact hardware preparation.
          </p>
        </div>

        <div>
          <span>05</span>

          <p>
            Determine the correct hardware location.
          </p>
        </div>

        <div>
          <span>06</span>

          <p>
            Enter the location and click ADD.
          </p>
        </div>

        <div>
          <span>07</span>

          <p>
            Repeat for additional locations when necessary.
          </p>
        </div>

        <div>
          <span>08</span>

          <p>
            Click Apply.
          </p>
        </div>

        <div>
          <span>09</span>

          <p>
            Review the resulting fabrication before output.
          </p>
        </div>
      </div>

      <h3>
        Step 2 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Add Operation
            </strong>

            <p>
              Use it to add an individual machining operation directly to the
              door.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Add Library Fabs
            </strong>

            <p>
              Use it to apply a reusable hardware preparation.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Add every location
            </strong>

            <p>
              Enter the position and click ADD for every required placement.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Apply, then verify
            </strong>

            <p>
              The fabrication still needs to be reviewed after it has been
              applied.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next: verify what was actually added.
        </strong>

        <p>
          In Step 3, we will review the fabrication table, X/Y/Z information,
          graphical preview, <strong>Detail View</strong>, and{" "}
          <strong>Draw Fabs</strong> before allowing the door to move toward
          output.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-20-door-fabrication-overview"
          className="secondary"
        >
          ← Previous: Door Fabrication Overview
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-20-verifying-door-fabrications"
          className="primary"
        >
          Next: Reviewing &amp; Verifying →
        </Link>
      </div>

      <style jsx>{`
        .trainingFigure {
          margin: 24px 0 34px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trainingFigure img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
        }

        .trainingFigure figcaption {
          padding: 12px 4px 2px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          line-height: 1.55;
        }

        .methodGrid,
        .selectionGrid,
        .referenceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .methodGrid > div,
        .selectionGrid > div,
        .referenceGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .methodGrid h3 {
          margin: 8px 0 10px;
          color: #ffffff;
        }

        .methodGrid p:not(.sectionLabel),
        .selectionGrid p,
        .referenceGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .selectionGrid strong,
        .referenceGrid strong {
          color: #f59e0b;
        }

        .locationExample,
        .applyFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 24px 0 34px;
        }

        .locationExample > div:not(.flowArrow),
        .applyFlow > div:not(.flowArrow) {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .locationExample strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 19px;
        }

        .locationExample p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .applyFlow strong {
          display: block;
          margin-bottom: 6px;
          color: #ffffff;
        }

        .applyFlow span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .criticalBox {
          margin: 24px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
          border: 2px solid rgba(245, 158, 11, 0.38);
        }

        .criticalBox h3 {
          margin: 8px 0 10px;
          color: #ffffff;
          font-size: 23px;
        }

        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.65;
        }

        .repeatFlow {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .repeatFlow > div {
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .repeatFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .repeatFlow strong {
          color: #ffffff;
        }

        .repeatFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .workflowChecklist {
          display: grid;
          gap: 10px;
          margin: 22px 0 32px;
        }

        .workflowChecklist > div {
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: center;
          gap: 14px;
          padding: 15px 18px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .workflowChecklist span {
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .workflowChecklist p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 22px 0 32px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 950px) {
          .repeatFlow {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 800px) {
          .locationExample,
          .applyFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .methodGrid,
          .selectionGrid,
          .referenceGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}