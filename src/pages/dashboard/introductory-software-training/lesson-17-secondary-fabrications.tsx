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
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-01-main.png",

  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-02-data.png",

  shearBlock:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-03-shear-block.png",

  fabs: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-04-fabs.png",

  stamp:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-05-stamp.png",

  vertsFall:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-06-verts-fall.png",
};

export default function LessonSeventeenSecondaryFabricationsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="17"
      lessonTitle="Secondary Fabrications"
      lessonDescription="Learn how secondary fabrications pass machining information from one framing member to another, how to trace those relationships, and where the rules are stored."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>

      <h2>Intro to Secondary Fabrications</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand what a secondary fabrication is, which member creates the
        fabrication information, and which member ultimately receives the
        machining.
      </div>

      <div className="lessonText">
        <p>
          In Lesson 16, we learned how to identify a missing fabrication and
          trace the problem back to the member that was supposed to create it.
        </p>

        <p>
          Now we are going to look at <strong>why</strong> that happens.
        </p>

        <p>
          Secondary fabrications are one of the most important concepts to
          understand when troubleshooting Metal Fabrication.
        </p>
      </div>

      <div className="definitionBox">
        <p className="sectionLabel">Definition</p>

        <h3>What is a secondary fabrication?</h3>

        <p>
          A secondary fabrication is a fabrication that is{" "}
          <strong>passed from one framing member to another.</strong>
        </p>

        <p>
          The member receiving the machining does not necessarily contain the
          rules that created it.
        </p>
      </div>

      <h3>Primary Fabs vs. Secondary Fabs</h3>

      <div className="comparisonGrid">
        <div>
          <p className="sectionLabel">Primary Fabrication</p>

          <strong>Belongs to the member itself</strong>

          <p>
            These are fabrications that are directly associated with the
            member being machined.
          </p>

          <div className="examples">
            <span>Weep Holes</span>
            <span>Anchor Holes</span>
          </div>
        </div>

        <div className="secondaryCard">
          <p className="sectionLabel">Secondary Fabrication</p>

          <strong>Passes from one member to another</strong>

          <p>
            One member contains the fabrication rules, but another member
            actually receives the machining.
          </p>

          <div className="examples">
            <span>Screw Spline Holes</span>
            <span>Shear Block Holes</span>
          </div>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Big Idea</p>

        <h3>
          The vertical gets the holes, but the horizontal tells the program
          where those holes belong.
        </h3>

        <p>
          Once you understand that relationship, troubleshooting secondary
          fabrications becomes much easier.
        </p>
      </div>

      <h3>Look at a Typical Frame</h3>

      <div className="lessonText">
        <p>
          Most storefront and curtain wall frames contain horizontal members
          that connect into vertical members.
        </p>

        <p>
          The vertical needs holes so those connections can be assembled, but
          the vertical does not always know what those holes should look like.
        </p>

        <p>
          Instead, the horizontal member contains the secondary fabrication
          information and passes that information to the vertical.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.main}
          alt="Secondary fabrication rules associated with framing members"
        />

        <figcaption>
          Secondary fabrication rules define the machining that one member
          passes to another member.
        </figcaption>
      </figure>

      <div className="transferFlow">
        <div>
          <span>1</span>

          <strong>Horizontal Member</strong>

          <p>
            Contains the secondary fabrication rules.
          </p>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <span>2</span>

          <strong>Program Calculates Location</strong>

          <p>
            The software determines where the two framing members intersect.
          </p>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <span>3</span>

          <strong>Vertical Member</strong>

          <p>
            Receives the screw spline, shear block, or other required holes.
          </p>
        </div>
      </div>

      <h3>Think of Each Horizontal Like a Stamp</h3>

      <div className="lessonText">
        <p>
          One of the easiest ways to understand secondary fabrications is to
          imagine that every horizontal part number has its own custom stamp.
        </p>
      </div>

      <div className="stampSection">
        <figure className="stampFigure">
          <img
            src={img.stamp}
            alt="Stamp illustration used to explain secondary fabrications"
          />
        </figure>

        <div className="stampText">
          <p className="sectionLabel">Classroom Example</p>

          <h3>The Custom Stamp</h3>

          <p>
            Imagine that a sill member has a stamp containing its exact screw
            spline or shear block hole pattern.
          </p>

          <p>
            When that sill meets a vertical, it presses that pattern onto the
            vertical.
          </p>

          <p>
            An intermediate horizontal has its own stamp and leaves another
            pattern farther up the vertical.
          </p>

          <p>
            The head has another stamp and leaves its pattern near the top.
          </p>
        </div>
      </div>

      <div className="stampFlow">
        <div>
          <p className="sectionLabel">Sill</p>
          <strong>Custom Pattern A</strong>
          <p>Passes its holes near the bottom of the vertical.</p>
        </div>

        <div>
          <p className="sectionLabel">Intermediate</p>
          <strong>Custom Pattern B</strong>
          <p>Passes its holes through the middle of the vertical.</p>
        </div>

        <div>
          <p className="sectionLabel">Head</p>
          <strong>Custom Pattern C</strong>
          <p>Passes its holes near the top of the vertical.</p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>The software does not actually understand a "stamp."</strong>

        <p>
          It understands fabrication operations, dimensions, formulas, and
          locations. In Step 2, we will learn how the program converts that
          imaginary stamp into actual machining coordinates.
        </p>
      </div>

      <h3>What Does the Secondary Fabrication Rule Contain?</h3>

      <div className="lessonText">
        <p>
          The secondary fabrication screen contains the information needed to
          build that pattern.
        </p>

        <p>
          Each individual drill hole or machining operation can have its own
          line item.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.data}
          alt="Secondary fabrication data showing machining information"
        />

        <figcaption>
          The secondary fabrication data tells the software how to build the
          machining pattern that will eventually be passed to another member.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          A screw spline connection might require multiple holes. Each hole can
          appear as its own fabrication rule.
        </p>

        <p>
          Together, those rules create the full pattern that gets transferred
          to the vertical.
        </p>
      </div>

      <div className="imagePair">
        <figure className="lessonFigure">
          <img
            src={img.shearBlock}
            alt="Shear block fabrication example"
          />

          <figcaption>
            The physical connection determines the type of machining required.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.fabs}
            alt="Multiple secondary fabrication rules"
          />

          <figcaption>
            Multiple fabrication rows can work together to create one complete
            connection pattern.
          </figcaption>
        </figure>
      </div>

      <h3>Why Was the Vertical Red in Lesson 16?</h3>

      <div className="lessonText">
        <p>
          This brings us back to the missing fabrication problem from the
          previous lesson.
        </p>

        <p>
          Metal Fabrication showed the <strong>vertical</strong> in red because
          the vertical was missing holes.
        </p>

        <p>
          But the vertical was not necessarily the source of the problem.
        </p>

        <p>
          The horizontal member was supposed to pass those holes to the
          vertical.
        </p>
      </div>

      <div className="symptomSourceGrid">
        <div className="symptomCard">
          <p className="sectionLabel">Symptom</p>

          <strong>Vertical is missing holes</strong>

          <p>
            This is where Metal Fabrication shows the problem.
          </p>
        </div>

        <div className="sourceCard">
          <p className="sectionLabel">Source</p>

          <strong>Horizontal secondary fabrication rule</strong>

          <p>
            This may be where the correction actually needs to happen.
          </p>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Remember This</p>

        <h3>
          Follow the fabrication backward.
        </h3>

        <p>
          When a vertical has missing or incorrect screw spline or shear block
          holes, ask which horizontal member was supposed to pass those holes
          into the vertical.
        </p>
      </div>

      <h3>Where Do We Find Secondary Fabrications?</h3>

      <div className="lessonText">
        <p>
          There are two common ways to get to the Secondary Fabrications screen.
        </p>
      </div>

      <div className="navigationGrid">
        <div>
          <span>Option 1</span>

          <strong>From the Metal Group</strong>

          <ol>
            <li>Open the Metal Group being used for the project.</li>
            <li>Go to the Primary Metal area.</li>
            <li>Locate the member you want to inspect.</li>
            <li>Click the part number.</li>
            <li>
              Press <strong>F2</strong>.
            </li>
            <li>Open the Secondary Fabrication tab.</li>
          </ol>

          <p className="keyboardNote">
            If F2 does not work by itself, try holding FN and pressing F2.
          </p>
        </div>

        <div>
          <span>Option 2</span>

          <strong>From Metal Fabrication</strong>

          <ol>
            <li>Find the member you believe is passing the fabrication.</li>
            <li>Select the part.</li>
            <li>
              Press <strong>F2</strong>.
            </li>
            <li>Open the Secondary Fabrication tab.</li>
          </ol>

          <p className="keyboardNote">
            This is especially useful while troubleshooting because you can
            move directly from the problem job to the Catalog Parts screen.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>Do not start changing numbers yet.</strong>

        <p>
          Most secondary fabrications already work correctly. Often the
          correction is only a small change to an existing rule.
        </p>

        <p>
          Before changing anything, make sure you understand what the current
          rule is doing and why.
        </p>
      </div>

      <h3>Orientation Still Matters</h3>

      <div className="lessonText">
        <p>
          There is one more concept we need to keep in mind before we start
          measuring secondary fabrications: the vertical eventually has to run
          through the Rhino.
        </p>

        <p>
          That means the software has to understand which end of the member
          leads into the machine and which face of the member needs to be
          fabricated.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.vertsFall}
          alt="Vertical member orientation as members run through the machine"
        />

        <figcaption>
          Vertical members can fall in different directions depending on their
          position in the frame. Orientation determines how the resulting
          fabrication is presented to the machine.
        </figcaption>
      </figure>

      <div className="calloutBox warningCallout">
        <strong>
          The example above assumes a Right-to-Left machine.
        </strong>

        <p>
          A Left-to-Right machine will have the opposite starting relationship.
          We will spend more time on this when we measure the actual
          fabrications.
        </p>
      </div>

      <div className="lessonText">
        <p>
          For now, you do not need to memorize how every jamb or intermediate
          vertical falls.
        </p>

        <p>
          I simply want you to understand that the software has to account for
          orientation when it transfers a fabrication from a horizontal onto a
          vertical.
        </p>
      </div>

      <h3>Before Moving On</h3>

      <div className="knowledgeCheck">
        <div>
          <span>1</span>

          <div>
            <strong>Which member receives the holes?</strong>

            <p>
              In our most common examples, the vertical member receives the
              machining.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Which member contains the secondary fab rules?</strong>

            <p>
              Usually the horizontal member that connects into that vertical.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              If the vertical is red, is the vertical automatically the
              problem?
            </strong>

            <p>
              No. Trace the fabrication back to the member that was supposed to
              pass it.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>What is the "stamp" analogy?</strong>

            <p>
              Each horizontal carries its own machining pattern and transfers
              that pattern to the vertical where the members connect.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">Step 1 Complete</p>

        <h3>
          You now understand what secondary fabrications are doing.
        </h3>

        <p>
          Next, we will take that imaginary "stamp" and turn it into actual
          dimensions. We will look at X, Y, and Z locations, Bottom of
          Horizontal, framing width, and how to measure a secondary fabrication
          correctly.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-16-missing-fabrications"
          className="secondary"
        >
          ← Previous: Identifying Fabrication Problems
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-17-measuring-secondary-fabs"
          className="primary"
        >
          Next: How to Measure Secondary Fabs →
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

        .comparisonGrid,
        .symptomSourceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .comparisonGrid > div,
        .symptomSourceGrid > div {
          padding: 22px;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comparisonGrid strong,
        .symptomSourceGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .comparisonGrid p:not(.sectionLabel),
        .symptomSourceGrid p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .secondaryCard {
          border-color: rgba(245, 158, 11, 0.3) !important;
        }

        .examples {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .examples span {
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.22);
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
          font-weight: 700;
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
          line-height: 1.4;
        }

        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.65;
        }

        .transferFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 26px 0 36px;
        }

        .transferFlow > div:not(.flowArrow) {
          padding: 19px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .transferFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-bottom: 11px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .transferFlow strong {
          color: #ffffff;
        }

        .transferFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .stampSection {
          display: grid;
          grid-template-columns: 300px minmax(0, 1fr);
          gap: 30px;
          align-items: center;
          margin: 26px 0 30px;
        }

        .stampFigure {
          margin: 0;
        }

        .stampFigure img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .stampText {
          padding: 22px;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stampText h3 {
          margin: 8px 0 12px;
          color: #ffffff;
        }

        .stampText p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
        }

        .stampFlow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 20px 0 34px;
        }

        .stampFlow > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .stampFlow strong {
          color: #ffffff;
        }

        .stampFlow p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .imagePair {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: start;
          margin: 20px 0 34px;
        }

        .imagePair .lessonFigure {
          margin: 0;
        }

        .imagePair .lessonFigure img {
          max-width: none;
        }

        .symptomCard {
          border-color: rgba(239, 68, 68, 0.22) !important;
        }

        .sourceCard {
          border-color: rgba(34, 197, 94, 0.22) !important;
        }

        .navigationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .navigationGrid > div {
          padding: 22px;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .navigationGrid > div > span {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .navigationGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .navigationGrid ol {
          margin: 16px 0 0;
          padding-left: 22px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.85;
        }

        .keyboardNote {
          margin: 16px 0 0;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
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

        .knowledgeCheck strong {
          color: #ffffff;
        }

        .knowledgeCheck p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
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

        @media (max-width: 900px) {
          .transferFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }

          .stampSection {
            grid-template-columns: 1fr;
          }

          .stampFigure {
            max-width: 320px;
            margin: 0 auto;
          }
        }

        @media (max-width: 750px) {
          .comparisonGrid,
          .symptomSourceGrid,
          .stampFlow,
          .imagePair,
          .navigationGrid,
          .knowledgeCheck {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}