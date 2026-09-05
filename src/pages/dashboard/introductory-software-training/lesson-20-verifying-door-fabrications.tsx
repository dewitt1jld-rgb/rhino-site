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
  fabScreen:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-08-fab-screen.png",
  detailView:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-09-detail-view.png",
};

export default function LessonTwentyVerifyingDoorFabricationsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="20"
      lessonTitle="Door Fabrication"
      lessonDescription="Use the Door Fabrication screen to create, position, verify, and output the preparations required for door hardware."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 4
      </p>

      <h2>
        Reviewing &amp; Verifying Door Fabrications
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to verify the operations, dimensions, orientation, and
        graphical representation of a fabricated door before it is sent to the
        machine.
      </div>

      <div className="lessonText">
        <p>
          After the hardware preparations have been added, the next step is to
          verify what the software is actually going to fabricate.
        </p>

        <p>
          Do not treat the graphical preview as the only source of truth. The
          fabrication table and the X, Y, and Z values give you the actual
          machining information that will be used.
        </p>

        <p>
          The goal of this step is to catch incorrect locations, wrong
          orientation, missing operations, or prep mistakes before the door is
          sent to the Rhino.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Verify the data, not just the picture.
        </strong>

        <p>
          The graphical preview is useful, but the actual X, Y, and Z values in
          the fabrication information are what you should trust when checking
          the prep.
        </p>
      </div>

      <h3>
        Review the Fabrication Table
      </h3>

      <div className="lessonText">
        <p>
          Once a Library Fab or individual operation has been applied, its
          machining operations appear in the fabrication area for the selected
          door.
        </p>

        <p>
          Review the listed operations and make sure the prep contains the
          machining you expected.
        </p>

        <p>
          If a hardware prep should contain several router or drill operations,
          make sure those operations are all present.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.fabScreen}
          alt="Door Fabrication screen showing applied fabrication operations"
        />

        <figcaption>
          Review the fabrication operations and dimensions associated with the
          selected door.
        </figcaption>
      </figure>

      <div className="verificationGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Correct Prep
            </strong>

            <p>
              Confirm the selected fabrication belongs to the intended
              hardware.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Correct Operations
            </strong>

            <p>
              Make sure the route, drill, and other expected operations are
              present.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Correct Location
            </strong>

            <p>
              Confirm the prep was placed at the intended location on the door.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Correct Orientation
            </strong>

            <p>
              Make sure the machining is on the correct face, edge, and side of
              the door.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Check X, Y, and Z
      </h3>

      <div className="lessonText">
        <p>
          The X, Y, and Z information is one of the most important things to
          review before fabrication.
        </p>

        <p>
          These values define where each machining operation is located
          relative to the door and the machine orientation.
        </p>

        <p>
          If the numbers are correct, but the graphical preview looks slightly
          unusual, the actual fabrication data is generally the more important
          information to trust.
        </p>
      </div>

      <div className="axisGrid">
        <div>
          <p className="sectionLabel">
            X
          </p>

          <strong>
            Horizontal Position
          </strong>

          <p>
            Verify the operation is positioned correctly across the door.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Y
          </p>

          <strong>
            Vertical Position
          </strong>

          <p>
            Verify the operation is at the correct hardware height or location.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Z
          </p>

          <strong>
            Depth / Surface Relationship
          </strong>

          <p>
            Confirm the operation is machining the correct depth and side of
            the material.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          A prep can look close and still be wrong.
        </strong>

        <p>
          Always confirm the numerical values against the hardware template,
          intended location, and machine orientation.
        </p>
      </div>

      <h3>
        Trust the Fabrication Data Over the Simple Preview
      </h3>

      <div className="lessonText">
        <p>
          The standard graphical preview is helpful for understanding the
          general location of the hardware, but it may not always represent
          every detail exactly the way you expect.
        </p>

        <p>
          If you have verified that the fabrication table contains the correct
          X, Y, and Z values, those numbers are more important than relying only
          on the simple graphic.
        </p>
      </div>

      <div className="comparisonGrid">
        <div>
          <p className="sectionLabel">
            Graphical Preview
          </p>

          <strong>
            Good for orientation
          </strong>

          <p>
            Use the drawing to quickly understand where the preparation appears
            on the door.
          </p>
        </div>

        <div className="comparisonSymbol">
          +
        </div>

        <div>
          <p className="sectionLabel">
            Fabrication Table
          </p>

          <strong>
            Good for actual dimensions
          </strong>

          <p>
            Use the X, Y, Z and operation values to verify what the machine will
            actually do.
          </p>
        </div>
      </div>

      <h3>
        Use Detail View
      </h3>

      <div className="lessonText">
        <p>
          The <strong>Detail View</strong> gives you a more realistic
          representation of the door and its applied fabrications.
        </p>

        <p>
          This is especially helpful when checking hardware orientation,
          lock-side locations, hinge relationships, and other preparations that
          are easier to understand visually in three dimensions.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.detailView}
          alt="Door Fabrication Detail View"
        />

        <figcaption>
          Detail View gives a more realistic representation of the door and its
          applied fabrications.
        </figcaption>
      </figure>

      <h3>
        Use Draw Fabs
      </h3>

      <div className="lessonText">
        <p>
          Within the detailed door view, use <strong>Draw Fabs</strong> to
          display the applied machining on the door.
        </p>

        <p>
          This gives you another visual check before output and can make it
          easier to catch a prep that has been placed on the wrong side or at
          the wrong location.
        </p>
      </div>

      <div className="detailBenefits">
        <div>
          <strong>
            Check Hinges
          </strong>

          <p>
            Verify the hinge preps line up where expected on the door.
          </p>
        </div>

        <div>
          <strong>
            Check Locks
          </strong>

          <p>
            Confirm lock and cylinder preparations are on the correct side.
          </p>
        </div>

        <div>
          <strong>
            Check Orientation
          </strong>

          <p>
            Make sure the door has not been mentally flipped or mirrored.
          </p>
        </div>

        <div>
          <strong>
            Check Multiple Preps
          </strong>

          <p>
            Verify several hardware preparations do not conflict with one
            another.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Use both the table and the detailed view.
        </strong>

        <p>
          The table helps verify exact machining data. Detail View helps verify
          that the finished door makes sense visually.
        </p>
      </div>

      <h3>
        Verify Repeated Preparations
      </h3>

      <div className="lessonText">
        <p>
          Hardware such as hinges may use the same Library Fab several times on
          one door.
        </p>

        <p>
          Make sure every intended location was added and that no extra
          locations were accidentally included.
        </p>
      </div>

      <div className="repeatChecklist">
        <div>
          <span>✓</span>

          <p>
            Correct number of repeated preps
          </p>
        </div>

        <div>
          <span>✓</span>

          <p>
            Correct vertical spacing
          </p>
        </div>

        <div>
          <span>✓</span>

          <p>
            Correct X position
          </p>
        </div>

        <div>
          <span>✓</span>

          <p>
            Correct side and orientation
          </p>
        </div>
      </div>

      <h3>
        Verify the Door Handing and Machine Orientation Again
      </h3>

      <div className="lessonText">
        <p>
          Before output, return to the overall door orientation and make sure
          the selected door is still being interpreted correctly.
        </p>

        <p>
          A perfectly built prep can still ruin a door if it is applied to the
          wrong side or interpreted backwards.
        </p>
      </div>

      <div className="orientationFlow">
        <div>
          <span>1</span>

          <strong>
            Door Handing
          </strong>

          <p>
            Confirm which way the door is intended to swing.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>2</span>

          <strong>
            Machine Orientation
          </strong>

          <p>
            Confirm how the door is represented relative to the machine.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>3</span>

          <strong>
            Fabrication Locations
          </strong>

          <p>
            Confirm each prep matches that orientation.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Do this verification before output — not after the door is cut.
        </strong>

        <p>
          Once the machine fabricates the material, an orientation mistake may
          require the door to be replaced.
        </p>
      </div>

      <h3>
        Compare Against the Hardware Information
      </h3>

      <div className="lessonText">
        <p>
          At this stage, compare the completed door fabrication back against
          the hardware information you started with.
        </p>

        <p>
          The software should now represent the actual machining needed to
          install that hardware.
        </p>
      </div>

      <div className="compareFlow">
        <div>
          <p className="sectionLabel">
            Hardware
          </p>

          <strong>
            Manufacturer Template
          </strong>

          <p>
            Shows what the physical hardware requires.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Library Fab
          </p>

          <strong>
            Saved Machining Pattern
          </strong>

          <p>
            Converts the template into reusable machining operations.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Door Fabrication
          </p>

          <strong>
            Positioned Prep
          </strong>

          <p>
            Places the machining in the correct location on the actual door.
          </p>
        </div>
      </div>

      <h3>
        Final Verification Checklist
      </h3>

      <div className="finalChecklist">
        <div>
          <span>01</span>

          <p>
            The correct door is selected.
          </p>
        </div>

        <div>
          <span>02</span>

          <p>
            Door handing and machine orientation are correct.
          </p>
        </div>

        <div>
          <span>03</span>

          <p>
            Every required hardware prep is present.
          </p>
        </div>

        <div>
          <span>04</span>

          <p>
            No duplicate or accidental preparations were added.
          </p>
        </div>

        <div>
          <span>05</span>

          <p>
            X, Y, and Z values match the intended fabrication.
          </p>
        </div>

        <div>
          <span>06</span>

          <p>
            Repeated preparations are at the correct locations.
          </p>
        </div>

        <div>
          <span>07</span>

          <p>
            Detail View and Draw Fabs look correct.
          </p>
        </div>

        <div>
          <span>08</span>

          <p>
            The finished fabrication matches the hardware information.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Only move to output when the door passes all of these checks.
        </strong>

        <p>
          Step 4 will cover the final output process and the last checks to make
          before sending the door to the Rhino.
        </p>
      </div>

      <h3>
        Step 3 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Check the fabrication table
            </strong>

            <p>
              Verify the actual operations and X, Y, Z information.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Use Detail View
            </strong>

            <p>
              Visually verify the door and hardware preparation orientation.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Use Draw Fabs
            </strong>

            <p>
              Display the applied machining and look for obvious placement
              issues.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Verify everything before output
            </strong>

            <p>
              Do not send the door to the machine until the data and orientation
              both make sense.
            </p>
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-20-adding-hardware-preps"
          className="secondary"
        >
          ← Previous: Adding Hardware Preparations
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-20-outputting-doors"
          className="primary"
        >
          Next: Outputting Doors →
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

        .verificationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .verificationGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .verificationGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .verificationGrid strong {
          color: #ffffff;
        }

        .verificationGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .axisGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .axisGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .axisGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .axisGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .comparisonGrid,
        .orientationFlow,
        .compareFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 24px 0 34px;
        }

        .compareFlow {
          grid-template-columns: 1fr auto 1fr auto 1fr;
        }

        .comparisonGrid > div:not(.comparisonSymbol),
        .orientationFlow > div:not(.flowArrow),
        .compareFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .comparisonGrid strong,
        .orientationFlow strong,
        .compareFlow strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .comparisonGrid p:not(.sectionLabel),
        .orientationFlow p,
        .compareFlow p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .comparisonSymbol,
        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .orientationFlow > div:not(.flowArrow) > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-bottom: 10px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .detailBenefits {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .detailBenefits > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .detailBenefits strong {
          color: #f59e0b;
        }

        .detailBenefits p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .repeatChecklist {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 22px 0 32px;
        }

        .repeatChecklist > div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .repeatChecklist span {
          color: #f59e0b;
          font-weight: 900;
        }

        .repeatChecklist p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
        }

        .finalChecklist {
          display: grid;
          gap: 10px;
          margin: 22px 0 32px;
        }

        .finalChecklist > div {
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: center;
          gap: 14px;
          padding: 15px 18px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .finalChecklist span {
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .finalChecklist p {
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

        @media (max-width: 850px) {
          .axisGrid {
            grid-template-columns: 1fr;
          }

          .comparisonGrid,
          .orientationFlow,
          .compareFlow {
            grid-template-columns: 1fr;
          }

          .comparisonSymbol,
          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .verificationGrid,
          .detailBenefits,
          .repeatChecklist,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}