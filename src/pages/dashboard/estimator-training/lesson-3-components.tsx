import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Choose the Right Metal Group",
    href: "/dashboard/estimator-training/lesson-3",
  },
  {
    number: 2,
    title: "Build the Estimating Components",
    href: "/dashboard/estimator-training/lesson-3-components",
  },
  {
    number: 3,
    title: "Estimating Now, Fabrication Later",
    href: "/dashboard/estimator-training/lesson-3-production",
  },
];

const img = {
  framingComponents:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/framing_components.png",

  primaryMetal:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/primary_metal.png",

  carrotSymbol:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/carrot_symbol.png",

  metalGroupPartsSearch:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/metal_group_parts_search.png",
};

export default function EstimatorLessonThreeComponentsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="03"
      lessonTitle="Building Metal Groups for Estimating"
      lessonDescription="Learn how to choose and prepare a metal group for estimating so the correct material and components are included without rebuilding the project later."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 3
      </p>

      <h2>
        Build the Estimating Components
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Review the metal group component by component and make sure the parts
        that affect project cost are being included correctly.
      </div>

      <div className="lessonText">
        <p>
          Now that we have selected and copied the correct metal group, we can
          begin reviewing the actual components inside it.
        </p>

        <p>
          This is where the estimator needs to slow down and make sure the
          system is picking up the material the project will actually require.
        </p>

        <p>
          We are still not concerned with making every fabrication production
          ready.
        </p>

        <p>
          Our concern right now is much simpler:
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Estimating Priority
        </p>

        <h3>
          If we are going to buy it, we want the estimate to know about it.
        </h3>

        <p>
          Metal, adapters, stiffeners, vinyl, hardware, glass stops, and other
          components can all affect project cost. If the system requires one of
          those items, we want it represented in the metal group before we
          begin building the estimate.
        </p>
      </div>

      <h3>
        Start With Framing Components
      </h3>

      <div className="lessonText">
        <p>
          Most of the work for this section will happen under{" "}
          <strong>Framing Components</strong>.
        </p>

        <p>
          This is where Glazier Studio stores the actual components assigned to
          the different parts of the framing system.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.framingComponents}
          alt="Metal Group Framing Components section"
        />

        <figcaption>
          Framing Components contains the parts and supporting material that
          Glazier Studio can pick up when frames are built.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Work through the component categories one at a time.
        </strong>

        <p>
          Do not try to review everything at once. Start with Primary Metal,
          then continue through the supporting component sections.
        </p>
      </div>

      <h3>
        Primary Metal
      </h3>

      <div className="lessonText">
        <p>
          Primary Metal contains the major framing members used to physically
          build the frame.
        </p>

        <p>
          This typically includes positions such as the head, sill, jambs,
          intermediate verticals, intermediate horizontals, and other primary
          framing members.
        </p>

        <p>
          These are usually some of the most important items in the estimate
          because they represent the main aluminum material being purchased.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.primaryMetal}
          alt="Primary Metal component screen"
        />

        <figcaption>
          Review each framing position and verify that the assigned Product
          Code matches the system you intend to estimate.
        </figcaption>
      </figure>

      <div className="reviewBox">
        <p className="sectionLabel">
          Primary Metal Review
        </p>

        <div className="reviewGrid">
          <div>
            <span>1</span>

            <div>
              <strong>
                Identify the position
              </strong>

              <p>
                Determine whether you are reviewing a head, sill, jamb,
                horizontal, vertical, or another framing position.
              </p>
            </div>
          </div>

          <div>
            <span>2</span>

            <div>
              <strong>
                Check the Product Code
              </strong>

              <p>
                Compare the assigned part against the project drawings,
                manufacturer information, or the system you are trying to use.
              </p>
            </div>
          </div>

          <div>
            <span>3</span>

            <div>
              <strong>
                Correct anything that is wrong
              </strong>

              <p>
                If a position uses the wrong part, replace it before building
                frames.
              </p>
            </div>
          </div>

          <div>
            <span>4</span>

            <div>
              <strong>
                Remove anything that does not belong
              </strong>

              <p>
                If the system does not use that component, leave the position
                blank or set it to NULL.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>
        Changing a Product Code
      </h3>

      <div className="lessonText">
        <p>
          If a position contains the wrong part, click once on the existing
          Product Code.
        </p>

        <p>
          A small dropdown arrow will appear, allowing you to search for and
          select the correct catalog part.
        </p>
      </div>

      <div className="imageGrid">
        <figure>
          <img
            src={img.carrotSymbol}
            alt="Dropdown arrow beside a metal group Product Code"
          />

          <figcaption>
            Click the Product Code to reveal the dropdown control.
          </figcaption>
        </figure>

        <figure>
          <img
            src={img.metalGroupPartsSearch}
            alt="Metal Group Product Code search"
          />

          <figcaption>
            Search or scroll through the available parts and select the correct
            Product Code.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox">
        <strong>
          Do not change parts just because another option looks familiar.
        </strong>

        <p>
          Use the project drawings, system information, or your company&apos;s
          known configuration to determine which component actually belongs in
          that position.
        </p>
      </div>

      <h3>
        Remove Components the System Does Not Use
      </h3>

      <div className="lessonText">
        <p>
          A copied metal group may contain components that are not required for
          your project.
        </p>

        <p>
          If the system does not actually use that part, remove it rather than
          leaving extra material assigned to the group.
        </p>

        <p>
          Otherwise, you may accidentally include material in the estimate that
          will never be purchased.
        </p>
      </div>

      <div className="optionGrid">
        <section>
          <p className="sectionLabel">
            Option 1
          </p>

          <h3>
            Use Delete
          </h3>

          <p>
            Click the Product Code and press the{" "}
            <strong>Delete</strong> key on the keyboard to clear the part.
          </p>
        </section>

        <section>
          <p className="sectionLabel">
            Option 2
          </p>

          <h3>
            Select NULL PART
          </h3>

          <p>
            Open the Product Code dropdown and select{" "}
            <strong>NULL PART</strong>.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          Clean metal groups make cleaner estimates.
        </strong>

        <p>
          If a component does not belong in the system, remove it. Do not leave
          unused material in the metal group simply because it was already
          there.
        </p>
      </div>

      <h3>
        Optional Metal
      </h3>

      <div className="lessonText">
        <p>
          After reviewing Primary Metal, move into{" "}
          <strong>Optional Metal</strong>.
        </p>

        <p>
          These components may not appear in every frame, but they can still
          have a significant effect on the total cost of a project.
        </p>
      </div>

      <div className="componentGrid">
        <section>
          <p className="sectionLabel">
            Glazing Adapters
          </p>

          <h3>
            Small part, real cost
          </h3>

          <p>
            Glazing adapters are often used to reduce the glass pocket for
            different glass thicknesses.
          </p>

          <p>
            They may look insignificant compared with the primary framing, but
            a large project can require a substantial quantity of them.
          </p>
        </section>

        <section>
          <p className="sectionLabel">
            Stiffeners
          </p>

          <h3>
            Do not overlook reinforcement
          </h3>

          <p>
            Steel stiffeners may be required inside certain framing members for
            structural or wind-load requirements.
          </p>

          <p>
            If they are required by the project, they need to be represented in
            the estimate.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          Optional does not mean unimportant.
        </strong>

        <p>
          It simply means those parts are not required in every standard frame.
          If your project requires them, they still affect your cost.
        </p>
      </div>

      <h3>
        Vinyl and Gaskets
      </h3>

      <div className="lessonText">
        <p>
          Next, review the <strong>Vinyl</strong> section.
        </p>

        <p>
          This is one of the areas that becomes much more important when we are
          estimating.
        </p>

        <p>
          Vinyl and gaskets may never go through the RhinoFab, but they still
          have to be purchased for the project.
        </p>

        <p>
          Make sure the selected system is using the correct vinyl or gasket
          components for the glass and framing configuration being estimated.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Estimator Mindset
        </p>

        <h3>
          The machine may not care about vinyl. The estimate does.
        </h3>

        <p>
          When estimating, we are not only looking at what the RhinoFab will
          eventually cut or fabricate. We are trying to account for everything
          the company may need to purchase to complete the job.
        </p>
      </div>

      <h3>
        Hardware
      </h3>

      <div className="lessonText">
        <p>
          The <strong>Hardware</strong> section can also contain items that need
          to be included in the project estimate.
        </p>

        <p>
          Depending on how your company has configured the system, hardware can
          use different frequency rules to determine when and how many pieces
          should be picked up.
        </p>

        <p>
          You do not need to memorize every frequency option right now.
        </p>

        <p>
          For this lesson, the important thing is to recognize that hardware can
          be included automatically and that those rules need to be reviewed
          before they are trusted.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">
          Verify Before Trusting
        </p>

        <h3>
          Do not assume the default quantity is correct.
        </h3>

        <p>
          If a hardware item is being picked up automatically, test the rule and
          make sure the quantity makes sense for the type of frame you are
          building.
        </p>
      </div>

      <h3>
        Glazing Stops
      </h3>

      <div className="lessonText">
        <p>
          Glazing stops are another component that can be easy to overlook
          because they are small compared with the main framing members.
        </p>

        <p>
          However, they are still physical material and need to be included
          when the framing system requires them.
        </p>

        <p>
          Review the glazing stop positions and make sure the proper stop is
          assigned where needed.
        </p>

        <p>
          If the selected framing system does not use a stop in a particular
          position, leave that position blank.
        </p>
      </div>

      <div className="componentSummary">
        <p className="sectionLabel">
          Estimating Component Review
        </p>

        <div className="summaryGrid">
          <div>
            <strong>
              Primary Metal
            </strong>
            <span>
              Main framing members
            </span>
          </div>

          <div>
            <strong>
              Optional Metal
            </strong>
            <span>
              Adapters, stiffeners, and other supporting metal
            </span>
          </div>

          <div>
            <strong>
              Vinyl / Gaskets
            </strong>
            <span>
              Glazing material that may not be fabricated but still must be
              purchased
            </span>
          </div>

          <div>
            <strong>
              Hardware
            </strong>
            <span>
              Automatically picked-up project components and quantity rules
            </span>
          </div>

          <div>
            <strong>
              Glazing Stops
            </strong>
            <span>
              Removable stops required by the framing configuration
            </span>
          </div>

          <div>
            <strong>
              Unused Positions
            </strong>
            <span>
              Remove or NULL anything the system does not actually use
            </span>
          </div>
        </div>
      </div>

      <h3>
        Accuracy Comes Before Automation
      </h3>

      <div className="lessonText">
        <p>
          One of the biggest benefits of Glazier Studio is that it can
          automatically pick up large amounts of material as you build frames.
        </p>

        <p>
          But that automation is only helpful when the metal group is correct.
        </p>

        <p>
          If an incorrect part is assigned to the metal group, Glazier Studio
          can automatically pick up that incorrect part over and over again
          throughout the entire project.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Remember
        </p>

        <h3>
          Automation multiplies whatever you give it.
        </h3>

        <p>
          A correct metal group can save a huge amount of time. An incorrect
          metal group can repeat the same mistake across every frame in the
          project.
        </p>
      </div>

      <h3>
        Do Not Overbuild the Estimate
      </h3>

      <div className="lessonText">
        <p>
          At this stage, we are not trying to make the project ready to send to
          the RhinoFab.
        </p>

        <p>
          We do not need to spend estimating time perfecting every fabrication,
          anchor, weep hole, or hardware preparation.
        </p>

        <p>
          What we do want is enough accuracy that the major components and
          supporting material are accounted for.
        </p>
      </div>

      <div className="comparisonGrid">
        <section>
          <p className="sectionLabel">
            Focus On This Now
          </p>

          <h3>
            Material and components
          </h3>

          <ul>
            <li>Correct primary metal</li>
            <li>Required optional metal</li>
            <li>Vinyl and gaskets</li>
            <li>Hardware being picked up</li>
            <li>Correct glazing stops</li>
            <li>Removing unused parts</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">
            Refine This Later
          </p>

          <h3>
            Production details
          </h3>

          <ul>
            <li>Final fabrication locations</li>
            <li>Anchor holes</li>
            <li>Weep holes</li>
            <li>Detailed hardware preparation</li>
            <li>Final field dimensions</li>
            <li>Other RhinoFab production details</li>
          </ul>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          We want the estimate to be useful now and the project to be usable
          later.
        </strong>

        <p>
          That is the balance we are trying to create throughout this course.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Checkpoint
        </p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I reviewed each Primary Metal position.
          </label>

          <label>
            <input type="checkbox" /> I removed parts the system does not use.
          </label>

          <label>
            <input type="checkbox" /> I checked Optional Metal for required
            adapters or stiffeners.
          </label>

          <label>
            <input type="checkbox" /> I reviewed the Vinyl / Gasket section.
          </label>

          <label>
            <input type="checkbox" /> I reviewed Hardware and understand that
            quantity rules must be tested.
          </label>

          <label>
            <input type="checkbox" /> I checked the required Glazing Stops.
          </label>

          <label>
            <input type="checkbox" /> I understand that fabrication does not
            need to be perfected during estimating.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-3"
          className="secondary"
        >
          ← Previous: Choose the Right Metal Group
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-3-production"
          className="primary"
        >
          Next: Estimating Now, Fabrication Later →
        </Link>
      </div>

      <style jsx>{`
        .reviewBox,
        .componentSummary {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .reviewGrid span {
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

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 28px 0 34px;
        }

        .imageGrid figure {
          margin: 0;
          text-align: center;
        }

        .imageGrid img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .imageGrid figcaption {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.55;
        }

        .optionGrid,
        .componentGrid,
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .optionGrid section,
        .componentGrid section,
        .comparisonGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .optionGrid h3,
        .componentGrid h3,
        .comparisonGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .optionGrid p:not(.sectionLabel),
        .componentGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .componentGrid p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .warningBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(245, 158, 11, 0.38);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
        }

        .warningBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .summaryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .summaryGrid > div {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .summaryGrid strong {
          display: block;
          margin-bottom: 5px;
          color: #f59e0b;
        }

        .summaryGrid span {
          display: block;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .comparisonGrid ul {
          margin: 14px 0 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        @media (max-width: 760px) {
          .reviewGrid,
          .imageGrid,
          .optionGrid,
          .componentGrid,
          .summaryGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}