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
  formula:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-06-x-y-loc-formula.png",

  formulaDoors:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-07-x-y-loc-formula-doors.png",

  assembled:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-08-assembled-door-leaf.png",

  exploded:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-09-exploded-door-leaf.png",

  xyLoc:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-10-xy-loc.png",
};

export default function LessonEighteenFormulasReferencesPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
      lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 4
      </p>

      <h2>
        Formulas &amp; Location References
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand how Library Fabrications use X, Y, and Z locations,
        formulas, and location references to position the same saved
        fabrication in different locations.
      </div>

      <div className="lessonText">
        <p>
          Creating the machining operations is only one part of building a
          useful Library Fabrication.
        </p>

        <p>
          The next question is:
          <strong>
            {" "}where should the fabrication be located?
          </strong>
        </p>

        <p>
          This is where formulas and location references become important.
          They allow the same saved fabrication to move to different locations
          without rebuilding the machining operations.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Remember the difference:
        </strong>

        <p>
          The Library Fab defines what the machine needs to manufacture.
          Location references help determine where that fabrication belongs.
        </p>
      </div>

      <h3>
        Understanding X, Y, and Z
      </h3>

      <div className="lessonText">
        <p>
          X, Y, and Z are still used to position machining operations inside
          the Library Fabrication.
        </p>

        <p>
          X and Z should already be familiar from the other fabrication
          screens. The biggest difference to understand in the Fab Rules
          Library is how the <strong>Y location</strong> is referenced.
        </p>
      </div>

      <div className="axisGrid">
        <div className="axisCard">
          <span>X</span>

          <div>
            <strong>X Location</strong>

            <p>
              Positions the operation along the length of the part.
            </p>
          </div>
        </div>

        <div className="axisCard">
          <span>Y</span>

          <div>
            <strong>Y Location</strong>

            <p>
              Positions the operation relative to the Library Fab&apos;s
              imaginary center reference.
            </p>
          </div>
        </div>

        <div className="axisCard">
          <span>Z</span>

          <div>
            <strong>Z Location</strong>

            <p>
              Controls the position or depth of the operation based on the
              orientation of the preparation.
            </p>
          </div>
        </div>
      </div>

      <h3>
        The Y Location Uses an Imaginary Zero
      </h3>

      <div className="lessonText">
        <p>
          One of the most important concepts in Library Fabrications is the
          imaginary zero point used for the Y location.
        </p>

        <p>
          Think of the center of the hardware preparation as{" "}
          <strong>Y = 0</strong>.
        </p>

        <p>
          Features on one side of that centerline use positive Y values, while
          features on the opposite side use negative Y values.
        </p>
      </div>

      <div className="zeroBox">
        <div className="negativeSide">
          <strong>Negative Y</strong>
          <span>←</span>
        </div>

        <div className="zeroPoint">
          <strong>Y = 0</strong>
          <span>Prep Center</span>
        </div>

        <div className="positiveSide">
          <span>→</span>
          <strong>Positive Y</strong>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          The zero point belongs to the Library Fab.
        </strong>

        <p>
          You are building the machining pattern around a reference point.
          Later, that reference point can be positioned where the hardware
          belongs on the actual part.
        </p>
      </div>

      <h3>
        Example: 4.5-Inch Butt Hinge
      </h3>

      <div className="lessonText">
        <p>
          A butt hinge is a useful example because the preparation is centered
          around a predictable reference point.
        </p>

        <p>
          The routed rectangle can be centered around Y = 0. Mounting holes on
          one side of the centerline will have positive Y values, while the
          corresponding holes on the other side will have negative Y values.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.xyLoc}
          alt="Library Fabrication X and Y location example"
        />

        <figcaption>
          Library Fabrication operations can be positioned around the
          preparation&apos;s reference point using positive and negative
          location values.
        </figcaption>
      </figure>

      <div className="sectionBox">
        <p className="sectionLabel">
          Why This Matters
        </p>

        <div className="conceptGrid">
          <div>
            <strong>Build around zero</strong>

            <p>
              Create the preparation around a consistent reference point.
            </p>
          </div>

          <div>
            <strong>Move the reference</strong>

            <p>
              Position that reference point where the hardware belongs.
            </p>
          </div>

          <div>
            <strong>Keep the pattern</strong>

            <p>
              The machining operations stay together as one reusable prep.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Using Formulas
      </h3>

      <div className="lessonText">
        <p>
          Formulas allow a fabrication to react to the dimensions of the part
          it is being applied to.
        </p>

        <p>
          Instead of entering a fixed value that only works for one part size,
          a formula can calculate the required position from information
          available in the software.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.formula}
          alt="Library Fabrication X and Y location formula reference"
        />

        <figcaption>
          Formula references can be used when a fabrication needs to calculate
          its location instead of relying only on a fixed dimension.
        </figcaption>
      </figure>

      <h3>
        Using FW
      </h3>

      <div className="lessonText">
        <p>
          One useful formula reference is{" "}
          <strong>FW</strong>.
        </p>

        <p>
          FW can be used when a preparation needs to react to the width of the
          framing member instead of using one fixed location.
        </p>

        <p>
          This is especially useful when the same Library Fab may be applied to
          parts with different widths.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Why use a formula?
        </strong>

        <p>
          If a preparation needs to stay centered or maintain the same
          relationship to different framing widths, a formula can prevent you
          from manually changing the fabrication every time the part size
          changes.
        </p>
      </div>

      <h3>
        Door Formula References
      </h3>

      <div className="lessonText">
        <p>
          Doors introduce additional dimensions that can be useful when
          positioning hardware.
        </p>

        <p>
          Hardware locations may depend on dimensions such as the door width,
          door height, finished floor location, or other dimensions associated
          with the door opening.
        </p>

        <p>
          The available formula references allow you to build Library Fabs that
          can adapt when those dimensions change.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.formulaDoors}
          alt="Door formula references for Library Fabrications"
        />

        <figcaption>
          Door-related formula references can be used when the hardware
          location depends on dimensions from the door or opening.
        </figcaption>
      </figure>

      <div className="imageGrid">
        <figure className="lessonFigure">
          <img
            src={img.assembled}
            alt="Assembled door leaf formula reference"
          />

          <figcaption>
            The assembled door view helps explain how door dimensions relate to
            the finished entrance.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.exploded}
            alt="Exploded door leaf formula reference"
          />

          <figcaption>
            The exploded view provides another reference for understanding the
            dimensions available when building door-related formulas.
          </figcaption>
        </figure>
      </div>

      <h3>
        Use Y Loc Ref.
      </h3>

      <div className="lessonText">
        <p>
          Check <strong>Use Y Loc Ref.</strong> when the fabrication needs to
          be placed at different vertical locations when it is applied.
        </p>

        <p>
          Hinges are a good example.
        </p>

        <p>
          The actual hinge prep remains the same, but the hinge may need to be
          placed at several different heights on the door.
        </p>
      </div>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example
        </p>

        <p>
          Imagine the same hinge prep being applied at:
        </p>

        <div className="locationGrid">
          <div>
            <strong>19&quot;</strong>
            <span>from the bottom</span>
          </div>

          <div>
            <strong>42&quot;</strong>
            <span>from the bottom</span>
          </div>

          <div>
            <strong>65&quot;</strong>
            <span>from the bottom</span>
          </div>
        </div>

        <p>
          The machining pattern does not need to be rebuilt three times. The
          Y location reference allows the same preparation to be positioned at
          each required location.
        </p>
      </div>

      <h3>
        Use X Loc Ref.
      </h3>

      <div className="lessonText">
        <p>
          Check <strong>Use X Loc Ref.</strong> when the fabrication may need
          to move horizontally when it is applied.
        </p>

        <p>
          For example, a lock or cylinder preparation may remain at the same
          vertical height while its horizontal position changes depending on
          the door style or hardware configuration.
        </p>
      </div>

      <div className="referenceGrid">
        <div className="referenceCard">
          <p className="sectionLabel">
            Use Y Loc Ref.
          </p>

          <strong>
            Vertical position can change
          </strong>

          <p>
            Use this when the same preparation needs to appear at different
            heights.
          </p>

          <span>
            Example: hinge locations
          </span>
        </div>

        <div className="referenceCard">
          <p className="sectionLabel">
            Use X Loc Ref.
          </p>

          <strong>
            Horizontal position can change
          </strong>

          <p>
            Use this when the same preparation needs to move horizontally on
            the part.
          </p>

          <span>
            Example: lock or cylinder location
          </span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Sometimes you will use both.
        </strong>

        <p>
          If a fabrication may need to move both vertically and horizontally,
          both X and Y location references can be used.
        </p>
      </div>

      <h3>
        Fixed Dimensions vs. Location References
      </h3>

      <div className="sectionBox">
        <div className="comparisonGrid">
          <div>
            <p className="sectionLabel">
              Fixed Value
            </p>

            <strong>
              The position stays the same.
            </strong>

            <p>
              Use a fixed value when the operation&apos;s position should not
              change when the Library Fab is applied.
            </p>
          </div>

          <div>
            <p className="sectionLabel">
              Location Reference
            </p>

            <strong>
              The position can be supplied later.
            </strong>

            <p>
              Use a location reference when the same fabrication needs to be
              positioned differently depending on where it is used.
            </p>
          </div>

          <div>
            <p className="sectionLabel">
              Formula
            </p>

            <strong>
              The software calculates the position.
            </strong>

            <p>
              Use a formula when the location should react to dimensions from
              the part, framing member, door, or opening.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Verify formulas before using them on production material.
        </strong>

        <p>
          A formula can make a Library Fab extremely flexible, but an incorrect
          formula can also move a fabrication to the wrong location. Review the
          calculated dimensions before sending the part to the machine.
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
              Establish the prep
            </strong>

            <p>
              Build the machining pattern around a predictable reference point.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Understand Y = 0
            </strong>

            <p>
              Use positive and negative values to position operations around
              the preparation.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Use formulas when needed
            </strong>

            <p>
              Allow the preparation to react to changing part or door
              dimensions.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Choose location references
            </strong>

            <p>
              Use X Loc Ref. and Y Loc Ref. when the saved prep needs to move.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next, we will put everything together.
        </strong>

        <p>
          In Step 4, we will use these concepts to walk through building a
          complete hardware preparation from beginning to end.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-create-library-fab"
          className="secondary"
        >
          ← Previous: Creating a Library Fab
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-build-hardware-prep"
          className="primary"
        >
          Next: Build a Hardware Prep →
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
          margin: 22px 0 34px;
        }

        .imageGrid .lessonFigure {
          margin: 0;
        }

        .axisGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 32px;
        }

        .axisCard {
          display: flex;
          gap: 14px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .axisCard > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 18px;
          font-weight: 900;
        }

        .axisCard strong {
          color: #ffffff;
        }

        .axisCard p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .zeroBox {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 26px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .negativeSide,
        .positiveSide {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.72);
        }

        .negativeSide {
          justify-content: flex-end;
        }

        .positiveSide {
          justify-content: flex-start;
        }

        .negativeSide span,
        .positiveSide span {
          color: #f59e0b;
          font-size: 24px;
        }

        .zeroPoint {
          display: grid;
          gap: 4px;
          min-width: 110px;
          padding: 14px;
          text-align: center;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .zeroPoint strong {
          color: #f59e0b;
        }

        .zeroPoint span {
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .conceptGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .conceptGrid > div {
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .conceptGrid strong {
          color: #f59e0b;
        }

        .conceptGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .exampleBox {
          margin: 24px 0 32px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .exampleBox > p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
        }

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 18px 0;
        }

        .locationGrid > div {
          display: grid;
          gap: 5px;
          padding: 16px;
          text-align: center;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .locationGrid strong {
          color: #f59e0b;
          font-size: 20px;
        }

        .locationGrid span {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
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

        .referenceCard > span {
          display: inline-block;
          margin-top: 4px;
          color: #f59e0b;
          font-size: 14px;
          font-weight: 800;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .comparisonGrid > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comparisonGrid > div > strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .comparisonGrid > div > p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
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

        @media (max-width: 800px) {
          .axisGrid,
          .conceptGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }

          .imageGrid,
          .referenceGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .zeroBox {
            grid-template-columns: 1fr;
          }

          .negativeSide,
          .positiveSide {
            justify-content: center;
          }

          .locationGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}