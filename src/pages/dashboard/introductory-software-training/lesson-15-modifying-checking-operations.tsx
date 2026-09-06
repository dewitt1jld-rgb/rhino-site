import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Metal Fab Basics",
    href: "/dashboard/introductory-software-training/lesson-15-metal-fabrication-basics",
  },
  {
    number: 2,
    title: "Modifying & Checking Operations",
    href: "/dashboard/introductory-software-training/lesson-15-modifying-checking-operations",
  },

];

const img = {
  colorGrid:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-10-color-grid.png",

  preview:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-13-preview.png",

  addOp:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-14-add-op.png",

  holePattern:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-15-hole-pattern.png",

  fabData:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-16-data.png",

  startPoint:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-17-start-point.png",
};

export default function LessonFifteenModifyingCheckingOperationsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="15"
      lessonTitle="Introduction to Metal Fabrication"
      lessonDescription="Learn how to navigate the Metal Fabrication screen, review fabrication data, identify problems, and make corrections before sending material to production."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 3
      </p>

      <h2>
        Modifying &amp; Checking Operations
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to identify possible fabrication problems, inspect the
        operations on an individual stick, and trace incorrect machining back
        to the place where it needs to be corrected.
      </div>

      <div className="lessonText">
        <p>
          Once a project has been imported into Metal Fabrication, your next
          job is to make sure the fabrications actually look correct before the
          job reaches the Rhino.
        </p>

        <p>
          Most of the time, the software will generate exactly what you expect.
          When something does look suspicious, Metal Fabrication gives you
          several tools to help determine what is happening.
        </p>

        <p>
          The two screens I use most often for troubleshooting are:
        </p>
      </div>

      <div className="toolGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Preview Frames
            </strong>

            <p>
              Best for locating missing fabrications and seeing where the
              software believes they should be.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Add Operations
            </strong>

            <p>
              Best for seeing the actual machining operations, tools,
              dimensions, and locations on an individual stick.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Fabrication Error Colors
      </h3>

      <div className="lessonText">
        <p>
          Metal Fabrication uses color-coded warnings to alert you when
          something may require attention.
        </p>

        <p>
          The important word here is <strong>may</strong>.
        </p>

        <p>
          Most of the time you will not see any warnings at all. Even when a
          color does appear, there may be a perfectly valid reason for it.
          Think of the colors as an alert telling you to investigate, not as
          proof that the job is wrong.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.colorGrid}
          alt="Color coded fabrication error guide"
        />

        <figcaption>
          The color guide helps identify the type of condition Metal
          Fabrication wants you to review.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          The color tells you where to start looking.
        </strong>

        <p>
          For red missing-fabrication warnings, I normally begin with Preview
          Frames. For the other warning colors, I usually open Add Operations
          and inspect the actual machining data on the stick.
        </p>
      </div>

      <h3>
        Red Lines: Start With Preview Frames
      </h3>

      <div className="lessonText">
        <p>
          When a stick is highlighted red, the software believes one or more
          expected fabrications are missing.
        </p>

        <p>
          I like to start with <strong>Preview Frames</strong> because it gives
          you a visual representation of where the software thinks those
          missing fabrications should be located.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.preview}
          alt="Preview Frames showing missing fabrications"
        />

        <figcaption>
          Preview Frames makes it easier to see which members and locations are
          associated with the missing fabrication warning.
        </figcaption>
      </figure>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example: Missing Horizontal Fabrications
        </p>

        <div className="lessonText">
          <p>
            In this example, the preview shows that the horizontal
            fabrications are missing.
          </p>

          <p>
            At first glance, you may think the problem is on the vertical
            members that are highlighted in red.
          </p>

          <p>
            However, the horizontal members are responsible for passing those
            secondary fabrications to the verticals.
          </p>

          <p>
            That means the real problem may actually be in the
            <strong> secondary fabrication rules on the horizontal member</strong>,
            even though the vertical stick is where the warning appears.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          A warning does not always point directly to the source of the problem.
        </strong>

        <p>
          Secondary fabrications can make troubleshooting confusing because the
          member showing the missing fabrication may not be the member that
          controls the rule.
        </p>
      </div>

      <h3>
        Open Add Operations
      </h3>

      <div className="lessonText">
        <p>
          For any other fabrication warning — or whenever you simply want to
          double-check what machining is assigned to a stick — open the
          <strong> Add Operations</strong> screen.
        </p>

        <p>
          Click the square button with the three dots for the stick you want to
          inspect.
        </p>
      </div>

      <figure className="lessonFigure mediumFigure">
        <img
          src={img.addOp}
          alt="Add Operations button"
        />

        <figcaption>
          Use Add Operations to inspect the individual fabrications assigned to
          the selected stick.
        </figcaption>
      </figure>

      <h3>
        Review the Actual Operations
      </h3>

      <div className="lessonText">
        <p>
          Once Add Operations is open, you can see the individual machining
          operations assigned to that part.
        </p>

        <p>
          This is where you can determine which drills, routes, or other
          operations are actually creating the warning.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.holePattern}
          alt="Fabrication hole pattern example"
        />

        <figcaption>
          Looking at the operation pattern helps you identify which group of
          holes or machining operations you are troubleshooting.
        </figcaption>
      </figure>

      <div className="twoImageGrid">
        <figure className="lessonFigure">
          <img
            src={img.fabData}
            alt="Fabrication operation data"
          />

          <figcaption>
            The operation data shows the tools and dimensions assigned to the
            selected stick.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.startPoint}
            alt="Start point information"
          />

          <figcaption>
            Start Point tells you which end of the stick enters the machine
            first.
          </figcaption>
        </figure>
      </div>

      <h3>
        Example: Multiple Tools
      </h3>

      <div className="lessonText">
        <p>
          One warning you may see is an orange line indicating
          <strong> multiple tools</strong>.
        </p>

        <p>
          If your machine is capable of automatically changing tools, this may
          be completely normal and you may not need to make any changes.
        </p>

        <p>
          If your machine cannot perform the required tool change, then you
          need to determine why some operations are using one tool while others
          are using another.
        </p>
      </div>

      <div className="exampleBox">
        <p className="sectionLabel">
          Tool Example
        </p>

        <div className="lessonText">
          <p>
            Imagine that most of the holes are using a
            <strong> D10-A</strong> drill, but a few of the operations are
            using a <strong>D12-A</strong>.
          </p>

          <p>
            The warning is telling us that more than one tool is being used on
            the same part.
          </p>

          <p>
            Our next job is to figure out which operations are using the
            different drill and what fabrication they belong to.
          </p>
        </div>
      </div>

      <h3>
        Use the Y Locations to Identify the Prep
      </h3>

      <div className="lessonText">
        <p>
          One useful troubleshooting trick is to organize or review the
          operations by their <strong>Y location</strong>.
        </p>

        <p>
          This helps show which operations are closest to or furthest from the
          lead edge of the part.
        </p>

        <p>
          Once you combine the Y locations with the Start Point information,
          you can often determine exactly which end of the frame the
          fabrication belongs to.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Reading the Start Point
        </p>

        <div className="stepFlow">
          <div>
            <span>1</span>

            <strong>
              Check Start Point
            </strong>

            <p>
              In this example, the Start Point is <strong>TOP</strong>.
            </p>
          </div>

          <div>
            <span>2</span>

            <strong>
              Identify the Lead Edge
            </strong>

            <p>
              The top or head of the vertical will enter the machine first and
              becomes the lead edge of the stick.
            </p>
          </div>

          <div>
            <span>3</span>

            <strong>
              Review the Y Locations
            </strong>

            <p>
              Operations located farthest from that lead edge will be near the
              opposite end of the part.
            </p>
          </div>

          <div>
            <span>4</span>

            <strong>
              Identify the Fabrication
            </strong>

            <p>
              If the suspicious holes are located near the bottom of the
              vertical, they are likely related to the sill condition.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Start Point + Y Location is one of the fastest ways to identify what
          you are looking at.
        </strong>

        <p>
          Instead of guessing which fabrication created a set of holes, use
          the direction the part enters the machine and the operation location
          to narrow it down.
        </p>
      </div>

      <h3>
        Trace the Problem Back to the Source
      </h3>

      <div className="lessonText">
        <p>
          In our example, the questionable holes belong to the sill
          preparation.
        </p>

        <p>
          Because the sill horizontal is passing that secondary fabrication to
          the vertical, we need to correct the rule on the
          <strong> sill horizontal</strong>, not on the vertical member where
          the warning appeared.
        </p>

        <p>
          From the Metal Fabrication screen, identify the sill horizontal
          product code. Then press <strong>F2</strong> to open the Catalog Part
          screen and navigate to the Secondary Fabrications tab.
        </p>

        <p>
          From there, you can determine why the preparation is pulling in with
          a D12-A drill instead of the D10-A drill you expected.
        </p>
      </div>

      <div className="troubleshootFlow">
        <div>
          <span>1</span>
          <strong>
            See the Warning
          </strong>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <span>2</span>
          <strong>
            Inspect Operations
          </strong>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <span>3</span>
          <strong>
            Identify the Prep
          </strong>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <span>4</span>
          <strong>
            Find the Source Member
          </strong>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <span>5</span>
          <strong>
            Correct the Rule
          </strong>
        </div>
      </div>

      <h3>
        You Can Modify Operations Even Without an Error
      </h3>

      <div className="lessonText">
        <p>
          The same process is useful even when Metal Fabrication is not showing
          an error.
        </p>

        <p>
          Your company may prefer a different drill size, tool, depth, or
          fabrication setup than the one currently being generated.
        </p>

        <p>
          You can use Add Operations to identify the fabrication, determine
          where it came from, and then go back to the source rule to make the
          change.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Do not think of Metal Fabrication as only an error screen.
        </strong>

        <p>
          It is also one of the best places to verify exactly what the Rhino is
          being asked to do before material reaches the machine.
        </p>
      </div>

      <h3>
        Step 2 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Read the Warning
            </strong>

            <p>
              Use the color as a clue that tells you what condition needs to
              be reviewed.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Use the Right Screen
            </strong>

            <p>
              Preview Frames is especially useful for red missing-fab warnings.
              Add Operations is better for inspecting individual machining
              operations.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Identify the Fabrication
            </strong>

            <p>
              Use operation data, Y locations, and Start Point information to
              determine what prep you are looking at.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Trace It Back
            </strong>

            <p>
              If the operation comes from a secondary fabrication, correct the
              rule on the member that is supplying the fabrication.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next we will cover several Metal Fabrication tips that do not fit
          into the normal workflow.
        </strong>

        <p>
          This includes outputting jobs, compound angles, angled drilling, and
          several other useful Metal Fabrication tools.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-15-metal-fabrication-basics"
          className="secondary"
        >
          ← Previous: Metal Fab Basics
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-16-import-test-frame"
          className="primary"
        >
          Next: Metal Fab Tips &amp; Tricks →
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

        .mediumFigure img {
          max-width: 600px;
        }

        .twoImageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 26px 0 34px;
        }

        .twoImageGrid .lessonFigure {
          margin: 0;
        }

        .toolGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .toolGrid > div {
          display: flex;
          gap: 14px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .toolGrid > div > span,
        .reviewGrid > div > span,
        .stepFlow > div > span,
        .troubleshootFlow > div:not(.arrow) > span {
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

        .toolGrid strong,
        .reviewGrid strong,
        .stepFlow strong,
        .troubleshootFlow strong {
          color: #ffffff;
        }

        .toolGrid p,
        .reviewGrid p,
        .stepFlow p {
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

        .stepFlow {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .stepFlow > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stepFlow > div > span {
          margin-bottom: 10px;
        }

        .troubleshootFlow {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            auto
            minmax(0, 1fr)
            auto
            minmax(0, 1fr)
            auto
            minmax(0, 1fr)
            auto
            minmax(0, 1fr);
          align-items: center;
          gap: 10px;
          margin: 26px 0 34px;
        }

        .troubleshootFlow > div:not(.arrow) {
          display: grid;
          justify-items: center;
          gap: 9px;
          padding: 16px 10px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .arrow {
          color: #f59e0b;
          font-size: 22px;
          font-weight: 900;
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

        @media (max-width: 900px) {
          .troubleshootFlow {
            grid-template-columns: 1fr;
          }

          .arrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 750px) {
          .toolGrid,
          .twoImageGrid,
          .stepFlow,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}