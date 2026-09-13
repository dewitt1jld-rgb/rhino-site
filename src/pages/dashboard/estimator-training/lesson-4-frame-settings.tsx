import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Create & Organize the Project",
    href: "/dashboard/estimator-training/lesson-4",
  },
  {
    number: 2,
    title: "Enter Estimating Frame Settings",
    href: "/dashboard/estimator-training/lesson-4-frame-settings",
  },
  {
    number: 3,
    title: "Build & Modify the Frame",
    href: "/dashboard/estimator-training/lesson-4-build-frame",
  },
  {
    number: 4,
    title: "Verify the Estimate",
    href: "/dashboard/estimator-training/lesson-4-verify",
  },
];

export default function EstimatorLessonFourFrameSettingsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Building Frames for an Estimate"
      lessonDescription="Learn how to organize a project, build estimating frames efficiently, and enter enough information to produce useful pricing without overbuilding the job."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 4</p>

      <h2>Enter Estimating Frame Settings</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Enter the frame information that affects material, quantity, and cost
        while avoiding unnecessary fabrication-level detail during the bid.
      </div>

      <div className="lessonText">
        <p>
          Once the project is organized, we can begin creating the actual frames
          that will be used in the estimate.
        </p>

        <p>
          This is where estimating and production begin to separate.
        </p>

        <p>
          When a project is being prepared for RhinoFab, dimensions and
          fabrication details eventually need to be extremely accurate.
        </p>

        <p>
          During estimating, our goal is different.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Estimating Rule</p>

        <h3>
          Get the frame as close as reasonably possible, but focus first on what
          changes the cost.
        </h3>

        <p>
          We want accurate overall dimensions, correct quantities, correct
          systems, and the correct number of framing members. Small differences
          in the exact location of an internal member may not materially change
          the framing cost.
        </p>
      </div>

      <h3>Start With the Correct Metal Group</h3>

      <div className="lessonText">
        <p>
          The first major setting is the <strong>Metal Group</strong>.
        </p>

        <p>
          Lesson 3 focused heavily on preparing the metal group because the
          frame will use that group to determine which parts and components are
          picked up.
        </p>

        <p>
          Before building the frame, make sure the metal group matches the
          framing system you intend to estimate.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          If the metal group is wrong, a beautifully drawn frame can still
          create a bad estimate.
        </strong>

        <p>
          Always verify the system before worrying about the exact geometry of
          the frame.
        </p>
      </div>

      <h3>Back Color and Face Color</h3>

      <div className="lessonText">
        <p>
          Review the <strong>Back Color</strong> and{" "}
          <strong>Face Color</strong> fields before building the frame.
        </p>

        <p>
          These settings may affect the material being priced, especially when
          the project contains different finishes.
        </p>
      </div>

      <div className="explanationGrid">
        <section>
          <p className="sectionLabel">Back Color</p>

          <h3>Main framing member finish</h3>

          <p>
            The Back Color generally represents the finish applied to the main
            framing member.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Face Color</p>

          <h3>Face member or cap finish</h3>

          <p>
            This is especially important for systems such as curtain wall that
            may use separate face members or cover caps.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          Different finishes can mean different pricing.
        </strong>

        <p>
          Do not leave a default color selected without checking the project
          requirements.
        </p>
      </div>

      <h3>Frame Set Name and Frame Name</h3>

      <div className="lessonText">
        <p>
          Use the organization you established in Section 1.
        </p>

        <p>
          The <strong>Frame Set Name</strong> groups related frames together,
          while the <strong>Frame Name</strong> identifies the individual
          opening.
        </p>

        <p>
          When possible, match these names to the project documents.
        </p>
      </div>

      <div className="exampleProject">
        <p className="sectionLabel">Example</p>

        <div className="projectRow">
          <span>Frame Set</span>
          <strong>North Elevation</strong>
        </div>

        <div className="projectRow">
          <span>Frame Name</span>
          <strong>A-12</strong>
        </div>
      </div>

      <h3>Frame Shape</h3>

      <div className="lessonText">
        <p>
          Select the frame shape that most closely represents the opening shown
          on the drawings.
        </p>

        <p>
          Rectangle will be the most common option, but sloped, stepped, or
          unusual frames should be represented correctly when their shape
          changes the amount or type of material being used.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Do not simplify a frame if the simplification changes the material.
        </strong>

        <p>
          Estimating allows us to be flexible with small dimensional details,
          but not with major conditions that change what must be purchased.
        </p>
      </div>

      <h3>Panels and Rows</h3>

      <div className="lessonText">
        <p>
          Panels and Rows establish the basic frame layout.
        </p>

        <p>
          Panels represent the vertical divisions across the frame. Rows
          represent the horizontal divisions from bottom to top.
        </p>

        <p>
          These values are extremely important during estimating because they
          determine how many vertical and horizontal framing members are
          created.
        </p>
      </div>

      <div className="comparisonGrid">
        <section>
          <p className="sectionLabel">4 Panels</p>

          <h3>More vertical divisions</h3>

          <p>
            Additional panels create additional framing members and can increase
            the material required.
          </p>
        </section>

        <section>
          <p className="sectionLabel">2 Rows</p>

          <h3>More horizontal divisions</h3>

          <p>
            Additional rows create intermediate horizontals and can change the
            amount of metal, stops, vinyl, and glass in the estimate.
          </p>
        </section>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Important</p>

        <h3>
          Missing a member is usually more important than being a few inches off.
        </h3>

        <p>
          If the project contains an intermediate horizontal, make sure that
          horizontal exists in the frame.
        </p>

        <p>
          Its exact final location can be refined later if the drawings are not
          clear during bidding.
        </p>
      </div>

      <h3>Width and Height</h3>

      <div className="lessonText">
        <p>
          Enter the overall width and height as accurately as the bid documents
          allow.
        </p>

        <p>
          Unlike the exact location of some internal members, overall dimensions
          can have a much larger effect on material quantities.
        </p>

        <p>
          Larger frames can require longer material, additional stock lengths,
          larger glass, reinforcement, or different fabrication conditions.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Good Estimating Habit</p>

        <h3>
          Be precise where precision affects the cost.
        </h3>

        <p>
          Overall frame width and height should be entered as accurately as
          reasonably possible. Internal member positions can sometimes be
          approximated when their exact location is unknown and does not change
          the material configuration.
        </p>
      </div>

      <h3>Exact Internal Dimensions Are Not Always Critical Yet</h3>

      <div className="lessonText">
        <p>
          Let&apos;s use an intermediate horizontal as an example.
        </p>

        <p>
          Suppose the drawings clearly show that the frame contains one
          intermediate horizontal, but the exact dimension is difficult to read.
        </p>

        <p>
          You believe the horizontal is somewhere around{" "}
          <strong>42 inches</strong> from the bottom of the frame, but it could
          actually be closer to <strong>46 inches</strong>.
        </p>

        <p>
          For estimating purposes, that four-inch difference may have little or
          no effect on the framing material cost.
        </p>
      </div>

      <div className="dimensionComparison">
        <section>
          <p className="sectionLabel">Option A</p>

          <div className="frameExample">
            <div className="frameTop" />
            <div className="frameVertical" />
            <div
              className="frameHorizontal"
              style={{ top: "46%" }}
            />
          </div>

          <strong>Horizontal at 42"</strong>

          <p>
            The frame contains one intermediate horizontal.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Option B</p>

          <div className="frameExample">
            <div className="frameTop" />
            <div className="frameVertical" />
            <div
              className="frameHorizontal"
              style={{ top: "54%" }}
            />
          </div>

          <strong>Horizontal at 46"</strong>

          <p>
            The frame still contains one intermediate horizontal.
          </p>
        </section>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">What the Estimate Sees</p>

        <h3>
          One intermediate horizontal is still one intermediate horizontal.
        </h3>

        <p>
          If moving the member a few inches does not change the amount or type
          of material required, that exact location may not materially affect
          the framing cost during the bid.
        </p>
      </div>

      <h3>But Missing the Horizontal Is Different</h3>

      <div className="lessonText">
        <p>
          Now imagine we build the same frame without the intermediate
          horizontal at all.
        </p>

        <p>
          That is no longer a small dimensional approximation.
        </p>

        <p>
          We may now be missing the horizontal member itself, glass stops,
          gaskets or vinyl, and other associated material.
        </p>
      </div>

      <div className="impactGrid">
        <section className="lowImpact">
          <p className="sectionLabel">Potentially Low Impact</p>

          <h3>Horizontal is a few inches off</h3>

          <p>
            The correct member still exists and the material configuration may
            remain nearly identical.
          </p>
        </section>

        <section className="highImpact">
          <p className="sectionLabel">Potentially High Impact</p>

          <h3>Horizontal is missing entirely</h3>

          <p>
            Material that should be included in the project may never be picked
            up by the estimate.
          </p>
        </section>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Core Principle</p>

        <h3>
          Approximate location can be acceptable. Missing components are not.
        </h3>

        <p>
          During estimating, prioritize the correct quantity and type of
          material first. Exact fabrication dimensions can be refined later
          when better information becomes available.
        </p>
      </div>

      <h3>When Dimensions Do Matter</h3>

      <div className="lessonText">
        <p>
          Do not take the previous example to mean that dimensions never matter
          during estimating.
        </p>

        <p>
          Dimensions absolutely matter when they change the quantity, size,
          stock length, glass area, reinforcement, hardware, or overall
          configuration of the frame.
        </p>
      </div>

      <div className="matterGrid">
        <div>
          <strong>Overall Width</strong>
          <p>
            Can change stock length requirements and total material quantity.
          </p>
        </div>

        <div>
          <strong>Overall Height</strong>
          <p>
            Can change mullion length, reinforcement, glass size, and material
            usage.
          </p>
        </div>

        <div>
          <strong>Large Glass Lites</strong>
          <p>
            Glass area and size can have a direct effect on project cost.
          </p>
        </div>

        <div>
          <strong>Doors</strong>
          <p>
            Door width, height, quantity, and configuration can significantly
            affect pricing.
          </p>
        </div>

        <div>
          <strong>Unusually Long Members</strong>
          <p>
            May require different stock lengths or special material.
          </p>
        </div>

        <div>
          <strong>Structural Conditions</strong>
          <p>
            Large spans may require reinforcement or a different framing
            system.
          </p>
        </div>
      </div>

      <h3>Number Thus</h3>

      <div className="lessonText">
        <p>
          Before creating the frame, verify the{" "}
          <strong>Number Thus</strong> value again.
        </p>

        <p>
          This represents the quantity of identical frames required by the
          project.
        </p>

        <p>
          From an estimating standpoint, this number can be more important than
          many of the dimensions inside the frame.
        </p>
      </div>

      <div className="quantityComparison">
        <section>
          <p className="sectionLabel">Frame Geometry</p>

          <h3>Horizontal is 4" off</h3>

          <div className="impactLabel low">
            Small or no material impact
          </div>
        </section>

        <section>
          <p className="sectionLabel">Frame Quantity</p>

          <h3>Number Thus says 1 instead of 12</h3>

          <div className="impactLabel high">
            Massive estimating impact
          </div>
        </section>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Remember This</p>

        <h3>
          Estimating accuracy is not always the same as drawing accuracy.
        </h3>

        <p>
          A horizontal being shown at 42 inches instead of 46 inches may make
          almost no difference to the framing cost.
        </p>

        <p>
          Missing eleven identical frames can destroy the estimate.
        </p>
      </div>

      <h3>Glazing Options</h3>

      <div className="lessonText">
        <p>
          Glazing settings also deserve attention because different glass types
          can have very different costs.
        </p>

        <p>
          You do not necessarily need to perfect every opening before the frame
          is created, because glass can be modified later.
        </p>

        <p>
          However, the estimate eventually needs to represent the major glass
          types shown on the project documents.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          The frame can be built first and individual glass openings adjusted
          afterward.
        </strong>

        <p>
          We will focus on efficient frame modification in the next section.
        </p>
      </div>

      <h3>Sealant Options</h3>

      <div className="lessonText">
        <p>
          Sealant settings can account for items such as interior caulking,
          exterior caulking, backer rod, and related material.
        </p>

        <p>
          Whether your company uses these calculations will depend on your
          estimating workflow.
        </p>

        <p>
          If those materials are expected to be included automatically, make
          sure the settings and calculations have been tested before relying on
          them.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Do not assume a default calculation is correct for your company.
        </strong>

        <p>
          Just like the other automated estimating features, verify the result
          before depending on it.
        </p>
      </div>

      <h3>Before You Add the Frame</h3>

      <div className="lessonText">
        <p>
          Before selecting Add Frame, perform a quick estimating review.
        </p>
      </div>

      <div className="reviewBox">
        <p className="sectionLabel">Frame Setup Review</p>

        <div className="reviewGrid">
          <label>
            <input type="checkbox" /> Correct metal group
          </label>

          <label>
            <input type="checkbox" /> Correct finish / colors
          </label>

          <label>
            <input type="checkbox" /> Useful Frame Set Name
          </label>

          <label>
            <input type="checkbox" /> Correct Frame Name
          </label>

          <label>
            <input type="checkbox" /> Correct basic frame shape
          </label>

          <label>
            <input type="checkbox" /> Correct panel count
          </label>

          <label>
            <input type="checkbox" /> Correct row count
          </label>

          <label>
            <input type="checkbox" /> Reasonable overall width
          </label>

          <label>
            <input type="checkbox" /> Reasonable overall height
          </label>

          <label>
            <input type="checkbox" /> Correct Number Thus
          </label>
        </div>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">Section 2 Takeaway</p>

        <h3>
          Build what affects the price.
        </h3>

        <p>
          During estimating, the frame should represent the material and
          configuration shown on the project documents.
        </p>

        <p>
          Be as accurate as reasonably possible, but do not spend unnecessary
          time chasing fabrication-level dimensions when those dimensions do not
          materially change the estimate.
        </p>

        <p>
          Correct systems, correct components, correct quantities, and correct
          major conditions come first.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-4"
          className="secondary"
        >
          ← Previous: Create & Organize the Project
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-4-build-frame"
          className="primary"
        >
          Next: Build & Modify the Frame →
        </Link>
      </div>

      <style jsx>{`
        .explanationGrid,
        .comparisonGrid,
        .dimensionComparison,
        .impactGrid,
        .quantityComparison {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .explanationGrid section,
        .comparisonGrid section,
        .dimensionComparison section,
        .impactGrid section,
        .quantityComparison section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .explanationGrid h3,
        .comparisonGrid h3,
        .impactGrid h3,
        .quantityComparison h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .explanationGrid p:not(.sectionLabel),
        .comparisonGrid p:not(.sectionLabel),
        .impactGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .exampleProject {
          margin: 26px 0 34px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .projectRow {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 16px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .projectRow:last-child {
          border-bottom: 0;
        }

        .projectRow span {
          color: rgba(255, 255, 255, 0.55);
          font-weight: 800;
        }

        .projectRow strong {
          color: #ffffff;
        }

        .warningBox,
        .criticalBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.38);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.34);
          background: rgba(239, 68, 68, 0.07);
        }

        .warningBox h3,
        .criticalBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel),
        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .warningBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .frameExample {
          position: relative;
          width: 170px;
          height: 220px;
          margin: 18px auto;
          border: 8px solid rgba(255, 255, 255, 0.8);
          border-radius: 3px;
        }

        .frameVertical {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 7px;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.8);
        }

        .frameHorizontal {
          position: absolute;
          left: 0;
          right: 0;
          height: 7px;
          background: #f59e0b;
        }

        .dimensionComparison section {
          text-align: center;
        }

        .dimensionComparison strong {
          display: block;
          color: #ffffff;
          font-size: 20px;
        }

        .dimensionComparison p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }

        .lowImpact {
          border-color: rgba(34, 197, 94, 0.25) !important;
          background: rgba(34, 197, 94, 0.06) !important;
        }

        .highImpact {
          border-color: rgba(239, 68, 68, 0.28) !important;
          background: rgba(239, 68, 68, 0.06) !important;
        }

        .matterGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .matterGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .matterGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .matterGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.6;
        }

        .impactLabel {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          font-weight: 900;
        }

        .impactLabel.low {
          color: #86efac;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .impactLabel.high {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.09);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .reviewBox {
          margin: 28px 0 34px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .reviewGrid label {
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: rgba(255, 255, 255, 0.74);
        }

        .reviewGrid input {
          margin-right: 8px;
        }

        .finalTakeaway {
          margin: 34px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(245, 158, 11, 0.12),
            rgba(255, 255, 255, 0.025)
          );
        }

        .finalTakeaway h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 27px;
        }

        .finalTakeaway p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.75;
        }

        .finalTakeaway p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        @media (max-width: 760px) {
          .explanationGrid,
          .comparisonGrid,
          .dimensionComparison,
          .impactGrid,
          .quantityComparison,
          .matterGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .projectRow {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}