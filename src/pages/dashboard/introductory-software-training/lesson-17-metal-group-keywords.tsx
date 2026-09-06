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
};

export default function LessonSeventeenMetalGroupKeywordsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="17"
      lessonTitle="Secondary Fabrications"
      lessonDescription="Learn how secondary fabrications pass machining information from one framing member to another, how to measure those relationships, and how Metal Group keywords allow fabrication rules to react to different framing conditions."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Understanding Metal Group Keywords</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand why Metal Group fabrication rules use keywords and formulas
        instead of only fixed numbers, and learn how BOH and FW allow secondary
        fabrications to adapt to different frame conditions.
      </div>

      <div className="lessonText">
        <p>
          In Step 2, we learned how to measure a secondary fabrication using X,
          Y, and Z values.
        </p>

        <p>
          Now we need to understand one of the things that makes Metal Groups
          powerful:
        </p>

        <p>
          We do not always have to give the program one fixed number.
        </p>

        <p>
          Instead, we can use <strong>keywords and formulas</strong> that tell
          the program to calculate a value based on the frame being built.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Big Idea</p>

        <h3>
          A fixed number describes one condition. A keyword can describe many
          conditions.
        </h3>

        <p>
          Keywords allow the fabrication rule to react to the actual frame
          dimensions instead of forcing you to create a different rule for
          every possible situation.
        </p>
      </div>

      <h3>Fixed Values vs. Keywords</h3>

      <div className="comparisonGrid">
        <div className="fixedCard">
          <p className="sectionLabel">Fixed Value</p>

          <strong>Example: 6.000</strong>

          <p>
            The software uses exactly that number every time the rule is
            applied.
          </p>

          <p>
            This works well when the location should never change.
          </p>
        </div>

        <div className="keywordCard">
          <p className="sectionLabel">Keyword / Formula</p>

          <strong>Example: BOH + 0.5937</strong>

          <p>
            The software first determines the current Bottom of Horizontal,
            then adds the required offset.
          </p>

          <p>
            The final location can change automatically from frame to frame.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          This is why Metal Group rules can be reused across many projects.
        </strong>

        <p>
          The fabrication relationship stays the same even when the overall
          frame dimensions change.
        </p>
      </div>

      <h3>Keyword #1: BOH</h3>

      <div className="keywordDefinition">
        <span>BOH</span>

        <div>
          <p className="sectionLabel">Bottom of Horizontal</p>

          <h3>
            A reference to the location of the bottom of the horizontal member.
          </h3>

          <p>
            When the frame is built, the software already knows where the
            horizontal is located.
          </p>

          <p>
            BOH allows the secondary fabrication rule to use that location as
            its reference point.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          This is especially useful for screw spline and shear block holes.
        </p>

        <p>
          Instead of telling the program that a hole belongs at one fixed
          location on the vertical, we tell it how far that hole is located
          relative to the horizontal.
        </p>
      </div>

      <div className="formulaExample">
        <div>
          <p className="sectionLabel">Formula</p>

          <strong>BOH + 0.5937</strong>
        </div>

        <div className="equalsArrow">→</div>

        <div>
          <p className="sectionLabel">Meaning</p>

          <strong>
            0.5937&quot; above the Bottom of Horizontal
          </strong>
        </div>
      </div>

      <div className="lessonText">
        <p>
          If the horizontal moves higher in the frame, BOH moves with it.
        </p>

        <p>
          The 0.5937&quot; relationship stays the same, so the hole pattern
          moves with the horizontal automatically.
        </p>
      </div>

      <div className="positionExampleGrid">
        <div>
          <p className="sectionLabel">Frame A</p>

          <strong>BOH = 24&quot;</strong>

          <p>
            The program starts at 24&quot; and adds the fabrication offset.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Frame B</p>

          <strong>BOH = 48&quot;</strong>

          <p>
            The same rule now begins at 48&quot; without changing the Metal
            Group.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Frame C</p>

          <strong>BOH = 72&quot;</strong>

          <p>
            The pattern moves again while keeping the same relationship.
          </p>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Remember</p>

        <h3>
          BOH does not describe the hole itself.
        </h3>

        <p>
          BOH gives us the reference point. The number added to BOH tells us
          where the individual operation belongs relative to that point.
        </p>
      </div>

      <h3>Multiple Operations Can Use the Same Keyword</h3>

      <div className="lessonText">
        <p>
          A single connection often requires more than one fabrication.
        </p>

        <p>
          Each operation can use the same BOH reference but have a different
          offset.
        </p>
      </div>

      <div className="operationGrid">
        <div>
          <span>1</span>

          <strong>BOH + 0.5937</strong>

          <p>
            First hole in the connection pattern.
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>BOH + 1.8125</strong>

          <p>
            Second hole in the connection pattern.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Both holes move together because both are tied to the same Bottom of
          Horizontal reference.
        </p>

        <p>
          This is the numerical version of the &quot;stamp&quot; analogy from
          Step 1.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.data}
          alt="Secondary fabrication data using formulas and location values"
        />

        <figcaption>
          Secondary fabrication rules can combine references and offsets to
          create a reusable machining pattern.
        </figcaption>
      </figure>

      <h3>Keyword #2: FW</h3>

      <div className="keywordDefinition">
        <span>FW</span>

        <div>
          <p className="sectionLabel">Framing Width</p>

          <h3>
            A reference to the width of the framing system being used.
          </h3>

          <p>
            Instead of typing one exact framing depth into the fabrication
            rule, FW tells the program to look at the framing width for the
            current system.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          FW is especially useful when the same basic fabrication relationship
          may be used with more than one framing depth.
        </p>

        <p>
          If you hard-code one exact depth, the rule may only work correctly
          for that one condition.
        </p>

        <p>
          Using FW allows the program to reference the actual framing width
          instead.
        </p>
      </div>

      <div className="comparisonGrid">
        <div className="fixedCard">
          <p className="sectionLabel">Fixed Z</p>

          <strong>Exact Number</strong>

          <p>
            Works when the fabrication depth should always remain exactly the
            same.
          </p>
        </div>

        <div className="keywordCard">
          <p className="sectionLabel">FW</p>

          <strong>System-Based Value</strong>

          <p>
            Allows the fabrication rule to use the framing width associated
            with the current system.
          </p>
        </div>
      </div>

      <div className="axisSummary">
        <div>
          <span>Y</span>

          <div>
            <strong>BOH helps locate the fabrication vertically.</strong>

            <p>
              The fabrication follows the horizontal wherever that horizontal
              appears in the frame.
            </p>
          </div>
        </div>

        <div>
          <span>Z</span>

          <div>
            <strong>FW helps account for framing width.</strong>

            <p>
              The fabrication can reference the system instead of relying only
              on one hard-coded depth.
            </p>
          </div>
        </div>
      </div>

      <h3>Why This Matters When Troubleshooting</h3>

      <div className="lessonText">
        <p>
          Think back to the two problems we identified in Lesson 16:
        </p>
      </div>

      <div className="problemGrid">
        <div>
          <p className="sectionLabel">Problem 1</p>

          <strong>Fabrication Is Missing</strong>

          <p>
            The secondary fabrication rule may not be passing the required
            operation to the receiving member.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Problem 2</p>

          <strong>Fabrication Is in the Wrong Location</strong>

          <p>
            The rule may exist, but the formula, reference, offset, or
            orientation may need to be reviewed.
          </p>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Troubleshooting Rule</p>

        <h3>
          Do not immediately replace a keyword with a number.
        </h3>

        <p>
          First understand what the keyword is supposed to represent. The
          formula may already be correct and only need a small adjustment to
          the offset or another part of the rule.
        </p>
      </div>

      <h3>Read the Formula Like a Sentence</h3>

      <div className="lessonText">
        <p>
          A good way to make formulas less intimidating is to read them in
          plain English.
        </p>
      </div>

      <div className="sentenceGrid">
        <div>
          <p className="sectionLabel">Formula</p>

          <strong>BOH + 0.5937</strong>

          <p>
            Start at the Bottom of Horizontal and move 0.5937&quot; farther.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Keyword</p>

          <strong>FW</strong>

          <p>
            Use the framing width associated with this system.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          You do not need to memorize formulas as random letters.
        </strong>

        <p>
          Understand what each reference means and the rule becomes much easier
          to troubleshoot.
        </p>
      </div>

      <h3>Look at the Entire Pattern</h3>

      <div className="lessonText">
        <p>
          When you troubleshoot secondary fabrications, do not look at only one
          line item.
        </p>

        <p>
          Remember that several rows may work together to create one complete
          screw spline or shear block pattern.
        </p>
      </div>

      <div className="imagePair">
        <figure className="lessonFigure">
          <img
            src={img.shearBlock}
            alt="Shear block connection used to create a secondary fabrication pattern"
          />

          <figcaption>
            Start by understanding the physical connection you are trying to
            create.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.fabs}
            alt="Secondary fabrication rows that combine to create a machining pattern"
          />

          <figcaption>
            Then review all of the fabrication rows that work together to
            create that connection.
          </figcaption>
        </figure>
      </div>

      <h3>A Good Troubleshooting Process</h3>

      <div className="troubleshootingSteps">
        <div>
          <span>1</span>

          <div>
            <strong>Identify the Physical Problem</strong>

            <p>
              Which holes are missing, misplaced, or oriented incorrectly?
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Find the Source Member</strong>

            <p>
              Determine which horizontal is supposed to pass the secondary
              fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>Open the Secondary Fabrication Rules</strong>

            <p>
              Review the operations assigned to that member.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Read the Keywords</strong>

            <p>
              Understand what BOH, FW, and any offsets are trying to accomplish.
            </p>
          </div>
        </div>

        <div>
          <span>5</span>

          <div>
            <strong>Make the Smallest Necessary Correction</strong>

            <p>
              Avoid rebuilding working rules when only one value needs to be
              adjusted.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Most secondary fabrication rules should already be close.
        </strong>

        <p>
          In many cases, you are not creating a system from scratch. You are
          correcting or fine-tuning an existing Metal Group.
        </p>
      </div>

      <h3>Lesson 17 Review</h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>Secondary Fabs Transfer</strong>

            <p>
              One member contains the rules while another member receives the
              machining.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>BOH Controls the Relationship</strong>

            <p>
              Bottom of Horizontal gives the rule a moving reference point.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>FW References Framing Width</strong>

            <p>
              It allows the rule to react to the framing system instead of one
              fixed depth.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Several Rules Can Form One Pattern</strong>

            <p>
              Each individual operation may be one line item in the complete
              secondary fabrication.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">Lesson 17 Complete</p>

        <h3>
          You now understand how to identify and troubleshoot secondary
          fabrication relationships.
        </h3>

        <p>
          You have learned how secondary fabrications transfer between members,
          how X, Y, and Z values describe those operations, and how keywords
          such as BOH and FW allow the rules to adapt to the frame being built.
        </p>

        <p>
          From here, you should be able to approach a missing or incorrectly
          positioned fabrication by tracing it back to the source member,
          understanding the existing rule, and determining what actually needs
          to change.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-17-measuring-secondary-fabs"
          className="secondary"
        >
          ← Previous: How to Measure Secondary Fabs
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-hardware-overview"
          className="primary"
        >
          Next: Door Hardware &amp; Components →
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

        .comparisonGrid,
        .problemGrid,
        .sentenceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .comparisonGrid > div,
        .problemGrid > div,
        .sentenceGrid > div {
          padding: 21px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comparisonGrid strong,
        .problemGrid strong,
        .sentenceGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .comparisonGrid p:not(.sectionLabel),
        .problemGrid p:not(.sectionLabel),
        .sentenceGrid p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .fixedCard {
          border-color: rgba(255, 255, 255, 0.11) !important;
        }

        .keywordCard {
          border-color: rgba(245, 158, 11, 0.3) !important;
        }

        .keywordDefinition {
          display: grid;
          grid-template-columns: 100px minmax(0, 1fr);
          gap: 22px;
          align-items: center;
          margin: 26px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.22);
        }

        .keywordDefinition > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 82px;
          height: 82px;
          border-radius: 20px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 24px;
          font-weight: 900;
        }

        .keywordDefinition h3 {
          margin: 7px 0 10px;
          color: #ffffff;
          font-size: 20px;
        }

        .keywordDefinition p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .formulaExample {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 18px;
          align-items: center;
          margin: 24px 0 34px;
        }

        .formulaExample > div:not(.equalsArrow) {
          padding: 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .formulaExample strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .equalsArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .positionExampleGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .positionExampleGrid > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .positionExampleGrid strong {
          color: #ffffff;
        }

        .positionExampleGrid p:not(.sectionLabel) {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .operationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .operationGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .operationGrid span {
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

        .operationGrid strong {
          color: #ffffff;
        }

        .operationGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .axisSummary {
          display: grid;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .axisSummary > div {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 16px;
          align-items: center;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .axisSummary > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 21px;
          font-weight: 900;
        }

        .axisSummary strong {
          color: #ffffff;
        }

        .axisSummary p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
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

        .troubleshootingSteps {
          display: grid;
          gap: 11px;
          margin: 24px 0 34px;
        }

        .troubleshootingSteps > div {
          display: flex;
          gap: 14px;
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .troubleshootingSteps span,
        .reviewGrid > div > span {
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

        .troubleshootingSteps strong,
        .reviewGrid strong {
          color: #ffffff;
        }

        .troubleshootingSteps p,
        .reviewGrid p {
          margin: 6px 0 0;
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
          .positionExampleGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 750px) {
          .comparisonGrid,
          .problemGrid,
          .sentenceGrid,
          .operationGrid,
          .imagePair,
          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .formulaExample {
            grid-template-columns: 1fr;
          }

          .equalsArrow {
            text-align: center;
            transform: rotate(90deg);
          }

          .keywordDefinition {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}