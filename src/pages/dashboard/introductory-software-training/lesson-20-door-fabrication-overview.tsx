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
  main:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-01-main-screen.png",
  orientation:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-02-machine-orientation.png",
  saved:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-03-saved-fabrications.png",
};

export default function LessonTwentyDoorFabricationOverviewPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="20"
      lessonTitle="Door Fabrication"
      lessonDescription="Use the Door Fabrication screen to create, position, verify, and output the preparations required for door hardware."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 4
      </p>

      <h2>
        Door Fabrication Overview
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand the Door Fabrication screen, how doors are brought into the
        fabrication workflow, and what should be verified before adding
        hardware preparations.
      </div>

      <div className="lessonText">
        <p>
          Door Fabrication is where doors are prepared for the hardware that
          will eventually be installed on them.
        </p>

        <p>
          If you are already comfortable with Metal Fabrication, much of this
          screen should feel familiar. The overall fabrication process is very
          similar, but instead of processing normal frame members, Door
          Fabrication is specifically designed around doors and their hardware
          preparations.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Door Fabrication is very similar to Metal Fabrication.
        </strong>

        <p>
          Many of the fabrication concepts you have already learned still
          apply. The major difference is the type of material being processed
          and the hardware preparations that need to be added to the door.
        </p>
      </div>

      <h3>
        The Door Fabrication Screen
      </h3>

      <div className="lessonText">
        <p>
          The Door Fabrication screen gives you a workspace for selecting
          doors, adding hardware preparations, reviewing the resulting
          fabrication, and eventually outputting those doors for machining.
        </p>

        <p>
          Before adding any hardware preps, take a moment to understand which
          door you are working on and how that door is oriented for the
          machine.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.main}
          alt="Door Fabrication main screen"
        />

        <figcaption>
          Door Fabrication main screen
        </figcaption>
      </figure>

      <h3>
        Bring Doors in From the Project
      </h3>

      <div className="lessonText">
        <p>
          A normal Door Fabrication workflow begins by bringing doors in from
          the project.
        </p>

        <p>
          Use <strong>Import Project</strong> to open the frame selection and
          choose the project frames containing the doors you need to process.
        </p>

        <p>
          When those frames are imported into Door Fabrication, the doors are
          what you are working with here. The regular framing members are still
          processed through <strong>Metal Fabrication</strong>.
        </p>
      </div>

      <div className="processFlow">
        <div>
          <span>1</span>

          <strong>
            Build the Entrance
          </strong>

          <p>
            Create and size the entrance through the normal project and frame
            workflow.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>2</span>

          <strong>
            Import Project
          </strong>

          <p>
            Select the project frames containing the doors you want to
            fabricate.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>3</span>

          <strong>
            Process the Doors
          </strong>

          <p>
            Use Door Fabrication to add and position the required hardware
            preparations.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Door Fabrication does not replace Metal Fabrication.
        </strong>

        <p>
          Door Fabrication handles the doors. The surrounding frame members
          still belong in the normal Metal Fabrication workflow.
        </p>
      </div>

      <h3>
        Create and Size Doors Before Fabrication
      </h3>

      <div className="lessonText">
        <p>
          It is possible to create doors directly inside the Door Fabrication
          workflow, but this is generally not the easiest place to build the
          door from scratch.
        </p>

        <p>
          For most users, it is safer and easier to create the entrance and
          establish the correct door size before reaching this screen.
        </p>

        <p>
          The door itself is essentially a rectangular piece of material, but
          its dimensions, handing, and graphical style all matter when you
          begin positioning hardware preparations.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Recommended Workflow
        </p>

        <div className="recommendedFlow">
          <div>
            <strong>
              Frame Builder
            </strong>

            <span>
              Build the entrance and establish the door.
            </span>
          </div>

          <div>
            <strong>
              Verify the Door
            </strong>

            <span>
              Confirm size, handing, and project information.
            </span>
          </div>

          <div>
            <strong>
              Door Fabrication
            </strong>

            <span>
              Bring the completed door in and add its machining.
            </span>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Be careful creating doors directly in Door Fabrication.
        </strong>

        <p>
          Unless you fully understand how the door needs to be sized and
          represented, it is generally easier to build the entrance correctly
          first and then import the door.
        </p>
      </div>

      <h3>
        Each Door Becomes Its Own Line Item
      </h3>

      <div className="lessonText">
        <p>
          Once doors have been brought into the screen, each door is treated as
          its own fabrication item.
        </p>

        <p>
          This is especially important with pairs of doors. Even though two
          doors may belong to the same entrance, they are separate physical
          pieces and need to be reviewed individually.
        </p>

        <p>
          That means each leaf can have its own hardware, handing, orientation,
          and fabrication requirements.
        </p>
      </div>

      <div className="doorGrid">
        <div>
          <p className="sectionLabel">
            Single Door
          </p>

          <strong>
            One Door Leaf
          </strong>

          <p>
            Review the hardware and fabrication required for that individual
            door.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Pair of Doors
          </p>

          <strong>
            Two Separate Door Leaves
          </strong>

          <p>
            Each leaf is handled separately and may require different hardware
            preparations.
          </p>
        </div>
      </div>

      <h3>
        Understand What Is Already Saved
      </h3>

      <div className="lessonText">
        <p>
          As you work through Door Fabrication, you will be able to see the
          fabrications associated with the selected door.
        </p>

        <p>
          This gives you a way to review what has already been added before you
          begin making changes or adding additional hardware preparations.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.saved}
          alt="Saved fabrications in Door Fabrication"
        />

        <figcaption>
          Review the fabrications associated with the selected door before
          adding additional work.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Look before you add.
        </strong>

        <p>
          Before adding another hardware prep, review the door and the
          fabrications already associated with it. This helps prevent
          unnecessary or duplicate operations.
        </p>
      </div>

      <h3>
        Hardware Preps Are Added in Door Fabrication
      </h3>

      <div className="lessonText">
        <p>
          One of the most important concepts in this lesson is that the
          hardware preparations used for machining the door need to be added
          through the Door Fabrication workflow.
        </p>

        <p>
          Do not assume that because the door hardware has been identified
          elsewhere in the project, every machining operation will
          automatically appear here.
        </p>

        <p>
          You still need to make sure the correct fabrication preparations are
          applied to the door.
        </p>
      </div>

      <div className="connectionFlow">
        <div>
          <p className="sectionLabel">
            Lesson 19
          </p>

          <strong>
            Identify the Hardware
          </strong>

          <p>
            Determine what hardware belongs on the door.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Lesson 18
          </p>

          <strong>
            Library Fabrication
          </strong>

          <p>
            Have a verified reusable machining prep available.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Lesson 20
          </p>

          <strong>
            Door Fabrication
          </strong>

          <p>
            Apply and position the prep on the actual door.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Do not assume hardware preps are automatically applied.
        </strong>

        <p>
          Always review the actual Door Fabrication screen and verify that the
          machining required for the door has been added correctly.
        </p>
      </div>

      <h3>
        Check Machine Orientation
      </h3>

      <div className="lessonText">
        <p>
          Before you begin positioning hardware preparations, verify the
          machine orientation shown in the Door Fabrication screen.
        </p>

        <p>
          The orientation tells you how the door relates to the machine. This
          matters because the same hardware preparation can be physically wrong
          if it is placed on the wrong side, edge, or orientation of the door.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.orientation}
          alt="Machine orientation shown in Door Fabrication"
        />

        <figcaption>
          Verify the machine orientation before relying on fabrication
          locations.
        </figcaption>
      </figure>

      <div className="orientationChecklist">
        <div>
          <span>01</span>

          <div>
            <strong>
              Identify the Door
            </strong>

            <p>
              Make sure you are working with the correct door leaf.
            </p>
          </div>
        </div>

        <div>
          <span>02</span>

          <div>
            <strong>
              Check the Handing
            </strong>

            <p>
              Confirm the door configuration matches the entrance.
            </p>
          </div>
        </div>

        <div>
          <span>03</span>

          <div>
            <strong>
              Check Machine Orientation
            </strong>

            <p>
              Understand how the door will be positioned for fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>04</span>

          <div>
            <strong>
              Then Add the Hardware
            </strong>

            <p>
              Position the fabrication preparations only after the orientation
              makes sense.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Orientation is not something to check only at the end.
        </strong>

        <p>
          Check it before adding the hardware preparations, and verify it again
          before outputting the door.
        </p>
      </div>

      <h3>
        What You Are Building Toward
      </h3>

      <div className="lessonText">
        <p>
          By the time a door is ready to output, you should have the correct
          door selected, understand its orientation, and have every required
          hardware preparation correctly positioned.
        </p>

        <p>
          The next three steps will walk through that process.
        </p>
      </div>

      <div className="roadmapGrid">
        <div>
          <span>Step 2</span>

          <strong>
            Adding Hardware Preparations
          </strong>

          <p>
            Add individual operations and reusable Library Fabs to the door.
          </p>
        </div>

        <div>
          <span>Step 3</span>

          <strong>
            Reviewing &amp; Verifying
          </strong>

          <p>
            Review the machining, dimensions, orientation, and detailed door
            view.
          </p>
        </div>

        <div>
          <span>Step 4</span>

          <strong>
            Outputting Doors
          </strong>

          <p>
            Perform the final checks and send the completed door for
            fabrication.
          </p>
        </div>
      </div>

      <h3>
        Step 1 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Door Fabrication handles doors
            </strong>

            <p>
              Normal frame members continue through Metal Fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Import doors from the project
            </strong>

            <p>
              Build and size the entrance first whenever possible.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Treat each door separately
            </strong>

            <p>
              Each leaf can have different hardware and fabrication
              requirements.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Verify orientation first
            </strong>

            <p>
              Understand how the door relates to the machine before positioning
              hardware preps.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next: add the actual hardware preparations.
        </strong>

        <p>
          In Step 2, we will use <strong>Add Operation</strong> and{" "}
          <strong>Add Library Fabs</strong> to begin applying the machining
          required for the door hardware.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-19-organizing-hardware"
          className="secondary"
        >
          ← Previous: Lesson 19
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-20-adding-hardware-preps"
          className="primary"
        >
          Next: Adding Hardware Preparations →
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

        .processFlow,
        .connectionFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .processFlow > div:not(.flowArrow),
        .connectionFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .processFlow > div:not(.flowArrow) > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .processFlow strong,
        .connectionFlow strong {
          display: block;
          margin: 7px 0;
          color: #ffffff;
        }

        .processFlow p,
        .connectionFlow p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 26px;
          font-weight: 900;
        }

        .recommendedFlow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .recommendedFlow > div {
          display: grid;
          gap: 7px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .recommendedFlow strong {
          color: #f59e0b;
        }

        .recommendedFlow span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .doorGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .doorGrid > div {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .doorGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 19px;
        }

        .doorGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .orientationChecklist {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .orientationChecklist > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .orientationChecklist > div > span {
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          padding-top: 3px;
        }

        .orientationChecklist strong {
          color: #ffffff;
        }

        .orientationChecklist p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .roadmapGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .roadmapGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .roadmapGrid span {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .roadmapGrid strong {
          display: block;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .roadmapGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
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

        @media (max-width: 850px) {
          .processFlow,
          .connectionFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }

          .recommendedFlow,
          .roadmapGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .doorGrid,
          .orientationChecklist,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}