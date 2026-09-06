import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Intro to Secondary Fabs",
    href: "/dashboard/introductory-software-training/lesson-17-secondary-fabrications",
  },
  {
    number: 2,
    title: "How to Measure Secondary Fabs",
    href: "/dashboard/introductory-software-training/lesson-17-measuring-secondary-fabs",
  },
  {
    number: 3,
    title: "Understanding Metal Group Keywords",
    href: "/dashboard/introductory-software-training/lesson-17-metal-group-keywords",
  },
];

const img = {
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-02-data.png",

  shearBlock:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-03-shear-block.png",

  fabs: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-04-fabs.png",

  vertsFall:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-06-verts-fall.png",
};

export default function LessonSeventeenMeasuringSecondaryFabsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="17"
      lessonTitle="Secondary Fabrications"
      lessonDescription="Learn how secondary fabrications pass machining information from one framing member to another, how to measure those relationships, and how the program uses formulas to place the resulting fabrication correctly."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>How to Measure Secondary Fabs</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how X, Y, and Z values are used to describe a secondary
        fabrication and how the program positions those operations relative to
        the horizontal member.
      </div>

      <div className="lessonText">
        <p>
          In Step 1, we compared a secondary fabrication to a custom stamp.
        </p>

        <p>
          The horizontal carries the pattern, and the vertical receives that
          pattern wherever the two members connect.
        </p>

        <p>
          Now we need to turn that idea into actual numbers the software can
          understand.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Big Question</p>

        <h3>
          How does the program know exactly where each hole belongs?
        </h3>

        <p>
          Every individual fabrication needs a location. The software uses X,
          Y, and Z values along with formulas and references to describe where
          that operation belongs.
        </p>
      </div>

      <h3>Start With the Pattern</h3>

      <div className="lessonText">
        <p>
          Let&apos;s use a screw spline or shear block connection as our
          example.
        </p>

        <p>
          A single connection may contain more than one drill hole.
        </p>

        <p>
          Each of those holes can have its own line item in the secondary
          fabrication rules.
        </p>
      </div>

      <div className="imagePair">
        <figure className="lessonFigure">
          <img
            src={img.shearBlock}
            alt="Shear block connection used as a secondary fabrication example"
          />

          <figcaption>
            The physical connection determines where the fabrication pattern
            needs to appear.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.fabs}
            alt="Secondary fabrication rows used to build the connection pattern"
          />

          <figcaption>
            Each row can represent an individual operation used to build the
            complete pattern.
          </figcaption>
        </figure>
      </div>

      <div className="lessonText">
        <p>
          Think of the complete connection as one pattern, but remember that
          the software may build that pattern one operation at a time.
        </p>
      </div>

      <h3>The Three Locations We Care About</h3>

      <div className="axisGrid">
        <div>
          <span>X</span>

          <strong>Where across the member?</strong>

          <p>
            X continues to work much like it does elsewhere in the program.
          </p>
        </div>

        <div>
          <span>Y</span>

          <strong>Where along the member?</strong>

          <p>
            Y is where secondary fabrications begin to work differently.
          </p>
        </div>

        <div>
          <span>Z</span>

          <strong>Where through the framing depth?</strong>

          <p>
            Z can use a framing reference so the same rule works across
            different systems.
          </p>
        </div>
      </div>

      <h3>X Location</h3>

      <div className="lessonText">
        <p>
          The <strong>X Location</strong> does not fundamentally change when we
          move into secondary fabrications.
        </p>

        <p>
          Just like other fabrication operations, X is measured from the back
          of the part to the center of the operation.
        </p>

        <p>
          In our screw spline or shear block example, that means X tells the
          software how far the hole is located from the back of the member.
        </p>
      </div>

      <div className="axisCallout">
        <span>X</span>

        <div>
          <strong>Think: back of part → center of operation</strong>

          <p>
            The same X-location concept you learned earlier still applies here.
          </p>
        </div>
      </div>

      <h3>Y Location Is Different</h3>

      <div className="lessonText">
        <p>
          The <strong>Y Location</strong> is where secondary fabrications become
          more interesting.
        </p>

        <p>
          We usually do not want to enter one fixed Y location for the
          fabrication.
        </p>

        <p>
          The same horizontal member might appear near the bottom of one frame,
          in the middle of another frame, or at a completely different height
          on a different project.
        </p>

        <p>
          So instead of telling the software one absolute location, we tell it
          where the fabrication belongs <strong>relative to the horizontal</strong>.
        </p>
      </div>

      <div className="definitionBox">
        <p className="sectionLabel">Key Reference</p>

        <h3>BOH = Bottom of Horizontal</h3>

        <p>
          The program knows the Bottom of Horizontal location when the frame is
          built.
        </p>

        <p>
          We can use that location as the starting point and then tell the
          software how far above that point each fabrication belongs.
        </p>
      </div>

      <div className="formulaFlow">
        <div>
          <p className="sectionLabel">Reference Point</p>

          <strong>BOH</strong>

          <p>Bottom of Horizontal</p>
        </div>

        <div className="flowArrow">+</div>

        <div>
          <p className="sectionLabel">Hole Offset</p>

          <strong>Measured Distance</strong>

          <p>Distance from BOH to the center of the drill hole</p>
        </div>

        <div className="flowArrow">=</div>

        <div>
          <p className="sectionLabel">Final Location</p>

          <strong>Secondary Fab Y</strong>

          <p>The location used when the pattern is transferred</p>
        </div>
      </div>

      <h3>Example: Two Screw Spline Holes</h3>

      <div className="lessonText">
        <p>
          Let&apos;s say one horizontal has two screw spline holes.
        </p>

        <p>
          One hole is located <strong>0.5937&quot;</strong> above the Bottom of
          Horizontal.
        </p>

        <p>
          The second hole is located <strong>1.8125&quot;</strong> above the
          Bottom of Horizontal.
        </p>
      </div>

      <div className="formulaExampleGrid">
        <div>
          <p className="sectionLabel">Hole 1</p>

          <strong>BOH + 0.5937</strong>

          <p>
            The first hole is positioned 0.5937&quot; above the Bottom of
            Horizontal.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Hole 2</p>

          <strong>BOH + 1.8125</strong>

          <p>
            The second hole is positioned 1.8125&quot; above the Bottom of
            Horizontal.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          This is how the software rebuilds the &quot;stamp.&quot;
        </strong>

        <p>
          Each hole has its own rule. Together, the rules create the entire
          pattern that gets passed from the horizontal to the vertical.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.data}
          alt="Secondary fabrication data showing location values and formulas"
        />

        <figcaption>
          Secondary fabrication rules use individual values and formulas to
          define the complete machining pattern.
        </figcaption>
      </figure>

      <h3>Why BOH Is So Useful</h3>

      <div className="lessonText">
        <p>
          Imagine that the same horizontal is used at three different heights
          in a frame.
        </p>

        <p>
          If we entered a fixed Y location, we would need a different rule for
          every possible horizontal height.
        </p>

        <p>
          By using <strong>BOH</strong>, the rule moves automatically with the
          horizontal.
        </p>
      </div>

      <div className="positionGrid">
        <div>
          <strong>Sill Location</strong>

          <p>
            BOH is near the bottom of the frame, so the secondary fab appears
            near the bottom of the vertical.
          </p>
        </div>

        <div>
          <strong>Intermediate Location</strong>

          <p>
            BOH moves upward, and the same secondary fab pattern moves with it.
          </p>
        </div>

        <div>
          <strong>Head Location</strong>

          <p>
            The pattern can be transferred near the top depending on the
            horizontal&apos;s position.
          </p>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Classroom Rule</p>

        <h3>
          Measure the fabrication from the horizontal, not from the finished
          vertical.
        </h3>

        <p>
          The secondary fabrication rule belongs to the horizontal, so we want
          to describe the hole pattern relative to that horizontal.
        </p>
      </div>

      <h3>Z Location</h3>

      <div className="lessonText">
        <p>
          The <strong>Z Location</strong> also changes slightly when we work
          with secondary fabrications.
        </p>

        <p>
          Because the machining is being transferred to another member, the
          program needs to understand the framing depth of the member receiving
          the fabrication.
        </p>

        <p>
          You could enter an exact framing depth, but that can make a rule less
          flexible.
        </p>

        <p>
          Instead, the program can use a formula called{" "}
          <strong>FW</strong>.
        </p>
      </div>

      <div className="definitionBox">
        <p className="sectionLabel">Key Formula</p>

        <h3>FW = Framing Width</h3>

        <p>
          FW tells the program to use the width of the framing system instead
          of requiring one fixed value.
        </p>

        <p>
          This can allow the same fabrication logic to work across different
          framing conditions without manually typing a new depth every time.
        </p>
      </div>

      <div className="axisCallout">
        <span>Z</span>

        <div>
          <strong>Think: how deep is the receiving member?</strong>

          <p>
            FW gives the program a framing-width reference it can use while
            positioning the fabrication.
          </p>
        </div>
      </div>

      <h3>Put X, Y, and Z Together</h3>

      <div className="xyzTable">
        <div className="xyzHeader">
          <strong>Value</strong>
          <strong>What It Tells the Program</strong>
          <strong>Typical Reference</strong>
        </div>

        <div>
          <strong>X</strong>
          <span>Where the hole is across the part</span>
          <span>Back of part to center of operation</span>
        </div>

        <div>
          <strong>Y</strong>
          <span>Where the hole belongs relative to the horizontal</span>
          <span>BOH + offset</span>
        </div>

        <div>
          <strong>Z</strong>
          <span>How the operation relates to framing depth</span>
          <span>FW or another appropriate depth value</span>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Once all three values are correct, the program has enough information
          to position the operation on the receiving member.
        </p>

        <p>
          Repeat that process for every hole in the pattern, and the software
          can reproduce the entire secondary fabrication.
        </p>
      </div>

      <h3>Orientation Still Matters</h3>

      <div className="lessonText">
        <p>
          There is one more piece to understand.
        </p>

        <p>
          The vertical member eventually has to lay down and travel through the
          Rhino.
        </p>

        <p>
          Depending on where that vertical sits in the frame, the head or sill
          end may become the lead edge when the part is loaded.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.vertsFall}
          alt="Diagram showing how different vertical members fall before running through the machine"
        />

        <figcaption>
          The software accounts for how the vertical falls and how the
          resulting fabrication needs to be positioned when the part is run
          through the machine.
        </figcaption>
      </figure>

      <div className="calloutBox warningCallout">
        <strong>
          This example assumes a Right-to-Left machine.
        </strong>

        <p>
          On a Left-to-Right machine, the starting relationship will be
          opposite.
        </p>
      </div>

      <h3>Left Jamb vs. Right Jamb</h3>

      <div className="orientationGrid">
        <div>
          <p className="sectionLabel">Left Jamb</p>

          <strong>Head can become the lead side</strong>

          <p>
            In the example shown, the top of the left jamb falls outward and
            becomes the leading side when the part is loaded.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Right Jamb</p>

          <strong>Sill can become the lead side</strong>

          <p>
            The opposite jamb can fall in the opposite direction, making the
            sill end the leading side.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Intermediate verticals may fall left or right depending on the
          system.
        </p>

        <p>
          As long as the rules and orientation are correct, the program can
          account for those differences and place the fabrication where it
          belongs.
        </p>
      </div>

      <h3>How the Machine Is Typically Loaded</h3>

      <div className="lessonText">
        <p>
          For most Rhino machines, the member is loaded as though you were
          standing outside the building looking in.
        </p>

        <p>
          The glass pocket, or the tongue of the curtain wall member, typically
          faces the operator.
        </p>

        <p>
          The 950, 1150, 1350, and 5700 machines use this general loading
          relationship.
        </p>

        <p>
          The 9000 Series is an exception and may use a different orientation.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          You do not need to memorize every orientation right now.
        </strong>

        <p>
          What matters is understanding that orientation affects how the
          software interprets the fabrication once it transfers onto the
          vertical.
        </p>
      </div>

      <h3>Classroom Example</h3>

      <div className="exampleBox">
        <p className="sectionLabel">Work Through the Logic</p>

        <p>
          Imagine an intermediate horizontal needs to place two screw spline
          holes into a vertical.
        </p>

        <div className="exampleSteps">
          <div>
            <span>1</span>

            <div>
              <strong>Measure X</strong>

              <p>
                Determine the distance from the back of the member to the
                center of each hole.
              </p>
            </div>
          </div>

          <div>
            <span>2</span>

            <div>
              <strong>Measure Y from BOH</strong>

              <p>
                Measure how far each hole is located above the Bottom of
                Horizontal.
              </p>
            </div>
          </div>

          <div>
            <span>3</span>

            <div>
              <strong>Determine Z</strong>

              <p>
                Use the required depth or a framing reference such as FW.
              </p>
            </div>
          </div>

          <div>
            <span>4</span>

            <div>
              <strong>Create Each Operation</strong>

              <p>
                Every hole receives its own secondary fabrication rule.
              </p>
            </div>
          </div>

          <div>
            <span>5</span>

            <div>
              <strong>Let the Program Transfer It</strong>

              <p>
                The software uses the frame location and orientation to place
                the pattern onto the vertical.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>Before Moving On</h3>

      <div className="knowledgeCheck">
        <div>
          <span>1</span>

          <div>
            <strong>What does BOH stand for?</strong>

            <p>Bottom of Horizontal.</p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Why use BOH instead of a fixed Y value?</strong>

            <p>
              Because the same horizontal can occur at different locations, and
              the fabrication needs to move with it.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>What does FW represent?</strong>

            <p>Framing Width.</p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Does one connection always equal one rule?</strong>

            <p>
              No. A connection can contain several holes, with each operation
              represented by its own rule.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">Step 2 Complete</p>

        <h3>
          You can now turn a secondary fabrication pattern into measurable
          locations.
        </h3>

        <p>
          In Step 3, we will look at the Metal Group keywords and formulas that
          allow these rules to react to different framing conditions instead of
          relying only on fixed numbers.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-17-secondary-fabrications"
          className="secondary"
        >
          ← Previous: Intro to Secondary Fabs
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-17-metal-group-keywords"
          className="primary"
        >
          Next: Understanding Metal Group Keywords →
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
          max-width: 850px;
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

        .largeFigure img {
          max-width: 1000px;
        }

        .imagePair {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 24px 0 34px;
          align-items: start;
        }

        .imagePair .lessonFigure {
          margin: 0;
        }

        .imagePair .lessonFigure img {
          max-width: none;
        }

        .criticalBox {
          margin: 26px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
          border: 2px solid rgba(245, 158, 11, 0.38);
        }

        .criticalBox h3 {
          margin: 8px 0 10px;
          color: #ffffff;
          font-size: 22px;
          line-height: 1.45;
        }

        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.65;
        }

        .axisGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .axisGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .axisGrid span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-bottom: 12px;
          border-radius: 12px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 20px;
          font-weight: 900;
        }

        .axisGrid strong {
          color: #ffffff;
        }

        .axisGrid p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .axisCallout {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 16px;
          align-items: center;
          margin: 24px 0 34px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .axisCallout > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 22px;
          font-weight: 900;
        }

        .axisCallout strong {
          color: #ffffff;
        }

        .axisCallout p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .definitionBox {
          margin: 26px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .definitionBox h3 {
          margin: 8px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .definitionBox p:not(.sectionLabel) {
          margin: 8px 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.65;
        }

        .formulaFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 14px;
          align-items: center;
          margin: 24px 0 34px;
        }

        .formulaFlow > div:not(.flowArrow) {
          padding: 19px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .formulaFlow strong {
          color: #ffffff;
          font-size: 18px;
        }

        .formulaFlow p:not(.sectionLabel) {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .formulaExampleGrid,
        .orientationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .formulaExampleGrid > div,
        .orientationGrid > div {
          padding: 21px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .formulaExampleGrid strong,
        .orientationGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .formulaExampleGrid p:not(.sectionLabel),
        .orientationGrid p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .positionGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .positionGrid > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .positionGrid strong {
          color: #ffffff;
        }

        .positionGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .xyzTable {
          margin: 24px 0 34px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .xyzTable > div {
          display: grid;
          grid-template-columns: 90px 1fr 1fr;
          gap: 14px;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
        }

        .xyzTable > div:last-child {
          border-bottom: 0;
        }

        .xyzHeader {
          background: rgba(245, 158, 11, 0.1) !important;
        }

        .xyzTable strong {
          color: #ffffff;
        }

        .xyzTable span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
        }

        .exampleBox {
          margin: 24px 0 34px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .exampleBox > p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
        }

        .exampleSteps {
          display: grid;
          gap: 11px;
          margin-top: 18px;
        }

        .exampleSteps > div {
          display: flex;
          gap: 14px;
          padding: 16px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .exampleSteps span,
        .knowledgeCheck > div > span {
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

        .exampleSteps strong,
        .knowledgeCheck strong {
          color: #ffffff;
        }

        .exampleSteps p,
        .knowledgeCheck p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .knowledgeCheck {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .knowledgeCheck > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
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

        @media (max-width: 900px) {
          .axisGrid,
          .positionGrid {
            grid-template-columns: 1fr;
          }

          .formulaFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
          }
        }

        @media (max-width: 750px) {
          .imagePair,
          .formulaExampleGrid,
          .orientationGrid,
          .knowledgeCheck {
            grid-template-columns: 1fr;
          }

          .xyzTable > div {
            grid-template-columns: 1fr;
          }

          .xyzHeader {
            display: none !important;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}