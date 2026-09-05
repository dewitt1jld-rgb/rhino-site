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
  cad: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_18/door_prep_butt_hinge_v2.png",

  onDoor:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-04-on-door.png",

  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-05-data.png",

  xyLoc:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-10-xy-loc.png",
};

export default function LessonEighteenBuildHardwarePrepPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
      lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={4}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 4 of 4
      </p>

      <h2>
        Build a Hardware Prep
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Put the previous sections together by building a complete hardware prep
        from a drawing, entering the machining operations, assigning location
        references, and verifying the finished Library Fab.
      </div>

      <div className="lessonText">
        <p>
          At this point you understand what a Library Fabrication is, how to
          create one, and how formulas and location references control where it
          is used.
        </p>

        <p>
          Now we will put those concepts together and walk through a complete
          hardware preparation.
        </p>

        <p>
          For this example, we will use a{" "}
          <strong>butt hinge preparation</strong>.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          The goal is not to memorize one hinge prep.
        </strong>

        <p>
          The goal is to understand the process so you can use the same method
          for locks, pivots, strikes, closers, exit devices, and other hardware.
        </p>
      </div>

      <h3>
        Step 1: Start With the Hardware Drawing
      </h3>

      <div className="lessonText">
        <p>
          Before entering anything into the software, begin with the hardware
          manufacturer&apos;s drawing, template, or CAD dimensions.
        </p>

        <p>
          Identify every feature that must be machined into the door or part.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.cad}
          alt="Butt hinge CAD dimensions used to create a Library Fabrication"
        />

        <figcaption>
          Use the hardware drawing to identify the routed pocket, mounting
          holes, dimensions, and reference locations required for the prep.
        </figcaption>
      </figure>

      <div className="sectionBox">
        <p className="sectionLabel">
          Before Opening the Fab Rules Library
        </p>

        <div className="checkGrid">
          <div>
            <span>1</span>

            <div>
              <strong>Identify the overall prep</strong>

              <p>
                Determine the size and shape of the hardware preparation.
              </p>
            </div>
          </div>

          <div>
            <span>2</span>

            <div>
              <strong>Locate the holes</strong>

              <p>
                Identify each drill or countersink location.
              </p>
            </div>
          </div>

          <div>
            <span>3</span>

            <div>
              <strong>Find the centerline</strong>

              <p>
                Decide where the Library Fab&apos;s reference point should be.
              </p>
            </div>
          </div>

          <div>
            <span>4</span>

            <div>
              <strong>Check machining depths</strong>

              <p>
                Verify router depths, drill depths, diameters, and other
                machining information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>
        Step 2: Choose the Reference Point
      </h3>

      <div className="lessonText">
        <p>
          Before entering the operations, establish a predictable reference
          point for the prep.
        </p>

        <p>
          For a symmetrical hinge preparation, the center of the hinge is a
          useful reference point.
        </p>

        <p>
          That center can be treated as{" "}
          <strong>Y = 0</strong>.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.xyLoc}
          alt="X and Y location reference for a hinge Library Fabrication"
        />

        <figcaption>
          Build the preparation around a consistent reference point so the
          complete machining pattern can later be moved as one unit.
        </figcaption>
      </figure>

      <div className="referenceBox">
        <div>
          <span>Negative</span>
          <strong>Y Values</strong>
        </div>

        <div className="centerReference">
          <span>Reference</span>
          <strong>Y = 0</strong>
        </div>

        <div>
          <span>Positive</span>
          <strong>Y Values</strong>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Build around the reference point.
        </strong>

        <p>
          Do not think of each hole as an unrelated coordinate. Think of all
          the operations as one machining pattern positioned around the
          Library Fab&apos;s zero point.
        </p>
      </div>

      <h3>
        Step 3: Create the Router Operation
      </h3>

      <div className="lessonText">
        <p>
          Begin by creating the main routed portion of the hardware prep.
        </p>

        <p>
          Enter the dimensions required to create the routed hinge pocket,
          including the location, size, and depth required by the hardware
          drawing.
        </p>
      </div>

      <div className="processBox">
        <p className="sectionLabel">
          Router Operation
        </p>

        <div className="processGrid">
          <div>
            <strong>Location</strong>
            <span>
              Position the routed area relative to the Library Fab reference
              point.
            </span>
          </div>

          <div>
            <strong>Width / Length</strong>
            <span>
              Match the hardware drawing or manufacturer template.
            </span>
          </div>

          <div>
            <strong>Depth</strong>
            <span>
              Enter the required machining depth for the hinge pocket.
            </span>
          </div>

          <div>
            <strong>Tool / Operation</strong>
            <span>
              Select the appropriate routing operation for the machine.
            </span>
          </div>
        </div>
      </div>

      <h3>
        Step 4: Add the Mounting Holes
      </h3>

      <div className="lessonText">
        <p>
          Next, create the drill operations required for the hinge mounting
          holes.
        </p>

        <p>
          Each hole should be positioned from the same reference point used for
          the router operation.
        </p>

        <p>
          Holes on one side of the centerline will typically use positive
          values while the matching holes on the other side use negative
          values.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.data}
          alt="Library Fabrication machining data for hardware prep"
        />

        <figcaption>
          Translate the hardware dimensions into the operation data required by
          the Library Fabrication.
        </figcaption>
      </figure>

      <div className="calloutBox warningCallout">
        <strong>
          Check every hole against the hardware drawing.
        </strong>

        <p>
          A prep may look correct at a glance while one hole is slightly
          misplaced. Verify each coordinate and dimension before saving the
          fabrication.
        </p>
      </div>

      <h3>
        Step 5: Decide Which Location References to Use
      </h3>

      <div className="lessonText">
        <p>
          Now decide whether the prep needs to move when it is applied to the
          door.
        </p>

        <p>
          A hinge preparation usually needs to appear at several different
          heights, even though the machining pattern itself stays the same.
        </p>

        <p>
          That makes a vertical location reference especially useful.
        </p>
      </div>

      <div className="referenceGrid">
        <div className="referenceCard">
          <p className="sectionLabel">
            Use Y Loc Ref.
          </p>

          <strong>
            Use when the prep changes height.
          </strong>

          <p>
            This is commonly useful for hinges because the same hinge prep may
            be placed at several vertical locations.
          </p>
        </div>

        <div className="referenceCard">
          <p className="sectionLabel">
            Use X Loc Ref.
          </p>

          <strong>
            Use when the prep changes horizontally.
          </strong>

          <p>
            This is useful when the hardware preparation may move left or right
            depending on the door or hardware configuration.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Only use the references the prep actually needs.
        </strong>

        <p>
          If the preparation only changes vertically, you may only need the Y
          location reference. If it can move in both directions, both
          references may be required.
        </p>
      </div>

      <h3>
        Step 6: Save the Library Fabrication
      </h3>

      <div className="lessonText">
        <p>
          Once all operations, dimensions, and references are entered, review
          the complete preparation and save the Library Fab.
        </p>

        <p>
          Use a clear name that identifies the hardware or preparation so it
          can easily be found later.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Final Review Before Saving
        </p>

        <ul className="lessonList">
          <li>
            Confirm the router dimensions.
          </li>

          <li>
            Confirm all drill locations.
          </li>

          <li>
            Verify positive and negative Y values.
          </li>

          <li>
            Confirm tool depths and machining settings.
          </li>

          <li>
            Verify any formulas being used.
          </li>

          <li>
            Confirm X Loc Ref. and Y Loc Ref. settings.
          </li>

          <li>
            Give the preparation a clear, recognizable name.
          </li>
        </ul>
      </div>

      <h3>
        Step 7: Apply the Prep to a Door
      </h3>

      <div className="lessonText">
        <p>
          Once saved, the Library Fab is ready to be used in a door fabrication
          workflow.
        </p>

        <p>
          Instead of rebuilding the hinge preparation for each location, you
          can select the saved Library Fab and position it where each hinge
          belongs.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.onDoor}
          alt="Saved butt hinge Library Fabrication positioned on a door"
        />

        <figcaption>
          The same saved hinge preparation can be applied to different
          locations without rebuilding the machining operations.
        </figcaption>
      </figure>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example Workflow
        </p>

        <div className="locationGrid">
          <div>
            <strong>Hinge 1</strong>
            <span>
              Apply the saved prep at the first required height.
            </span>
          </div>

          <div>
            <strong>Hinge 2</strong>
            <span>
              Apply the same prep at the second required height.
            </span>
          </div>

          <div>
            <strong>Hinge 3</strong>
            <span>
              Apply the same prep at the third required height.
            </span>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          This is the entire advantage of the Library Fab.
        </strong>

        <p>
          The hardware prep is built once. After that, you reuse the same
          machining pattern and only change the location where it is applied.
        </p>
      </div>

      <h3>
        Verify Before Fabricating
      </h3>

      <div className="lessonText">
        <p>
          Before sending a door or part to the machine, verify that the
          preparation is positioned correctly.
        </p>

        <p>
          Compare the calculated locations against the hardware schedule,
          manufacturer drawing, shop drawings, and actual door requirements.
        </p>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Never test a new hardware prep for the first time on expensive
          production material.
        </strong>

        <p>
          When possible, verify a newly created Library Fab on scrap or test
          material before relying on it for a live project.
        </p>
      </div>

      <h3>
        Lesson 18 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Build it once
            </strong>

            <p>
              Create all machining operations required for the hardware prep.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Establish a reference
            </strong>

            <p>
              Build the operations around a predictable zero point.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Add flexibility
            </strong>

            <p>
              Use formulas and location references where the prep needs to
              move.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Save and reuse
            </strong>

            <p>
              Apply the same saved hardware prep wherever it is needed.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">
          Lesson 18 Complete
        </p>

        <h3>
          You now understand Library Fabrications.
        </h3>

        <p>
          You should now understand how Library Fabs are created, how the
          machining operations are positioned, how formulas and location
          references work, and how a saved hardware preparation can be reused.
        </p>

        <p>
          In the next lesson, we will begin working with the actual door
          hardware and components that these preparations are built around.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-formulas-references"
          className="secondary"
        >
          ← Previous: Formulas &amp; References
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Complete Lesson 18 →
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

        .checkGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .checkGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .checkGrid > div > span {
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

        .checkGrid strong {
          color: #ffffff;
        }

        .checkGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .referenceBox {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 22px 0 32px;
        }

        .referenceBox > div {
          display: grid;
          gap: 4px;
          padding: 18px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .referenceBox span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .referenceBox strong {
          color: #ffffff;
        }

        .centerReference {
          background: rgba(245, 158, 11, 0.09) !important;
          border-color: rgba(245, 158, 11, 0.3) !important;
        }

        .centerReference strong {
          color: #f59e0b;
        }

        .processBox {
          margin: 24px 0 32px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          background: rgba(255, 255, 255, 0.035);
        }

        .processGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 14px;
        }

        .processGrid > div {
          display: grid;
          gap: 6px;
          padding: 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .processGrid strong {
          color: #f59e0b;
        }

        .processGrid span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .referenceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 32px;
        }

        .referenceCard {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .referenceCard > strong {
          display: block;
          margin-top: 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .referenceCard > p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.7);
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

        .exampleBox {
          margin: 24px 0 32px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 16px;
        }

        .locationGrid > div {
          display: grid;
          gap: 7px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .locationGrid strong {
          color: #f59e0b;
        }

        .locationGrid span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
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

        .completionBox {
          margin-top: 32px;
          border-color: rgba(34, 197, 94, 0.25);
          background: rgba(34, 197, 94, 0.05);
        }

        .completionBox h3 {
          margin: 8px 0 12px;
          color: #ffffff;
        }

        .completionBox p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 760px) {
          .checkGrid,
          .processGrid,
          .referenceGrid,
          .reviewGrid,
          .locationGrid {
            grid-template-columns: 1fr;
          }

          .referenceBox {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}