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

export default function EstimatorLessonFourVerifyPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Building Frames for an Estimate"
      lessonDescription="Learn how to organize a project, build estimating frames efficiently, and enter enough information to produce useful pricing without overbuilding the job."
      currentStep={4}
      steps={steps}
    >
      <p className="academyEyebrow">Step 4 of 4</p>

      <h2>Verify the Estimate</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Review the completed frame and confirm that the information affecting
        project cost is correct before trusting the estimate.
      </div>

      <div className="lessonText">
        <p>
          Building the frame is not the final step.
        </p>

        <p>
          Before we trust any pricing that comes from the project, we need to
          verify that the frame actually represents what we intended to estimate.
        </p>

        <p>
          A frame can look perfectly reasonable on the screen and still contain
          the wrong quantity, wrong metal group, missing members, incorrect
          glass, or other problems that affect cost.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Most Important Habit</p>

        <h3>
          Never trust the total until you understand what created it.
        </h3>

        <p>
          Glazier Studio can calculate quickly, but it can only calculate from
          the information you entered.
        </p>
      </div>

      <h3>Start With the Frame Structure</h3>

      <div className="lessonText">
        <p>
          Begin by comparing the completed frame against the drawings or bid
          documents.
        </p>

        <p>
          Do not worry yet about whether every internal dimension is
          fabrication-perfect.
        </p>

        <p>
          First verify that the major frame structure is correct.
        </p>
      </div>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <section>
            <strong>Correct overall shape</strong>
            <p>
              Confirm that the frame generally matches the shape shown on the
              project documents.
            </p>
          </section>
        </div>

        <div>
          <span>2</span>

          <section>
            <strong>Correct number of verticals</strong>
            <p>
              Make sure every major vertical division that affects material is
              represented.
            </p>
          </section>
        </div>

        <div>
          <span>3</span>

          <section>
            <strong>Correct number of horizontals</strong>
            <p>
              Verify that required intermediate horizontals are present even if
              their exact location is approximate.
            </p>
          </section>
        </div>

        <div>
          <span>4</span>

          <section>
            <strong>Correct doors and special openings</strong>
            <p>
              Door locations and other special conditions should be represented
              when they affect project cost.
            </p>
          </section>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          For estimating, structure comes before perfect geometry.
        </strong>

        <p>
          If the correct members and conditions exist in the frame, small
          internal dimensional differences can often be corrected later.
        </p>
      </div>

      <h3>Verify the Metal Group Again</h3>

      <div className="lessonText">
        <p>
          Before looking at the final cost, confirm that the frame is still
          using the intended metal group.
        </p>

        <p>
          The metal group determines which parts and components are associated
          with the frame, so this is one of the most important checks in the
          entire estimate.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Important</p>

        <h3>
          The right frame with the wrong metal group is still wrong.
        </h3>

        <p>
          A frame can visually look correct while the wrong system is quietly
          being used behind it.
        </p>
      </div>

      <h3>Verify Quantity</h3>

      <div className="lessonText">
        <p>
          Next, confirm the <strong>Number Thus</strong> value.
        </p>

        <p>
          Quantity mistakes can have a much larger impact on an estimate than
          small dimensional differences.
        </p>
      </div>

      <div className="quantityComparison">
        <section>
          <p className="sectionLabel">Minor Geometry Difference</p>

          <h3>Horizontal off by 4 inches</h3>

          <div className="impactLabel low">
            Often little or no material impact
          </div>
        </section>

        <section>
          <p className="sectionLabel">Quantity Error</p>

          <h3>12 frames entered as 1</h3>

          <div className="impactLabel high">
            Major estimating error
          </div>
        </section>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Estimating Accuracy</p>

        <h3>
          Correct quantity usually matters more than perfect drawing accuracy.
        </h3>

        <p>
          A horizontal being slightly out of position may not change the
          material being purchased.
        </p>

        <p>
          Missing eleven complete frames absolutely will.
        </p>
      </div>

      <h3>Look for Missing Members</h3>

      <div className="lessonText">
        <p>
          One of the easiest ways to understate an estimate is to leave a
          framing member out of the frame.
        </p>

        <p>
          Review the drawings and count the major members.
        </p>

        <p>
          If the elevation shows an intermediate horizontal, make sure the
          frame contains one.
        </p>

        <p>
          If the elevation shows an additional vertical, make sure it exists in
          the frame.
        </p>
      </div>

      <div className="memberGrid">
        <section>
          <p className="sectionLabel">Missing Horizontal</p>

          <h3>Potentially Missing</h3>

          <ul>
            <li>Horizontal metal</li>
            <li>Glass stops</li>
            <li>Vinyl / gaskets</li>
            <li>Related material</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">Missing Vertical</p>

          <h3>Potentially Missing</h3>

          <ul>
            <li>Vertical metal</li>
            <li>Related stops</li>
            <li>Vinyl / gaskets</li>
            <li>Reinforcement if required</li>
          </ul>
        </section>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Remember</p>

        <h3>
          Missing components are more dangerous than approximate locations.
        </h3>

        <p>
          During bidding, make sure the correct pieces exist first. Fine-tune
          their exact production location later.
        </p>
      </div>

      <h3>Review Overall Dimensions</h3>

      <div className="lessonText">
        <p>
          Overall frame width and height should still be reviewed carefully.
        </p>

        <p>
          These dimensions can change the amount of aluminum, stock lengths,
          glass area, reinforcement, and other cost-driving conditions.
        </p>

        <p>
          If you used an estimated or scaled dimension because the drawings
          were unclear, make sure you know that it is an assumption.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Approximate does not mean random.
        </strong>

        <p>
          Get as close as reasonably possible using the project information
          available to you.
        </p>
      </div>

      <h3>Check for Long or Unusual Members</h3>

      <div className="lessonText">
        <p>
          Some dimensional differences matter because they can change the stock
          length or material required.
        </p>

        <p>
          A frame with unusually tall jambs, long horizontals, large curtain
          wall mullions, or special structural conditions may require different
          material than a typical frame.
        </p>
      </div>

      <div className="attentionGrid">
        <div>
          <strong>Long verticals</strong>
          <p>
            May require longer stock lengths or special material.
          </p>
        </div>

        <div>
          <strong>Large spans</strong>
          <p>
            May require reinforcement or a heavier framing system.
          </p>
        </div>

        <div>
          <strong>Large glass openings</strong>
          <p>
            May affect glass cost and potentially structural requirements.
          </p>
        </div>

        <div>
          <strong>Non-standard shapes</strong>
          <p>
            Can change material usage compared with a simple rectangle.
          </p>
        </div>
      </div>

      <h3>Verify the Glass</h3>

      <div className="lessonText">
        <p>
          Once the framing structure looks reasonable, review the glass
          conditions.
        </p>

        <p>
          Different glass types can have dramatically different costs, so the
          estimate should eventually reflect the major glass requirements shown
          in the project documents.
        </p>

        <p>
          Make sure specialty glass is not accidentally being treated like
          standard glass.
        </p>
      </div>

      <div className="glassGrid">
        <section>
          <p className="sectionLabel">Things to Check</p>

          <ul>
            <li>Glass type</li>
            <li>Glass thickness</li>
            <li>Insulated vs. monolithic</li>
            <li>Tempered or laminated requirements</li>
            <li>Special coatings or colors</li>
            <li>Spandrel or specialty conditions</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">Estimator Mindset</p>

          <h3>
            Read the notes, not just the elevations.
          </h3>

          <p>
            Glass requirements are often buried in schedules, specifications,
            details, or general notes.
          </p>
        </section>
      </div>

      <h3>Verify Doors and Door Openings</h3>

      <div className="lessonText">
        <p>
          Doors can create large cost differences compared with standard
          storefront openings.
        </p>

        <p>
          If the frame contains doors, verify that the correct quantity and
          general configuration are represented.
        </p>

        <p>
          We will spend more time on door pricing in Lesson 5, but the frame
          itself still needs to identify where those door conditions exist.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Do not estimate a door opening as if it were simply another piece of
          glass.
        </strong>
      </div>

      <h3>Review Supporting Components</h3>

      <div className="lessonText">
        <p>
          Go back to the estimating components covered in Lesson 3 and ask
          whether this particular frame requires anything unusual.
        </p>
      </div>

      <div className="componentGrid">
        <div>
          <strong>Adapters</strong>
          <p>
            Are glazing adapters required for the specified glass thickness?
          </p>
        </div>

        <div>
          <strong>Stiffeners</strong>
          <p>
            Does this frame require structural reinforcement?
          </p>
        </div>

        <div>
          <strong>Vinyl / Gaskets</strong>
          <p>
            Is the correct glazing material associated with the system?
          </p>
        </div>

        <div>
          <strong>Hardware</strong>
          <p>
            Are automatically picked-up items being included at a reasonable
            quantity?
          </p>
        </div>

        <div>
          <strong>Glass Stops</strong>
          <p>
            Are required stops being included with the frame?
          </p>
        </div>

        <div>
          <strong>Finish</strong>
          <p>
            Are the correct colors or finishes being used?
          </p>
        </div>
      </div>

      <h3>Do a Sanity Check</h3>

      <div className="lessonText">
        <p>
          This is one of the most valuable habits an estimator can develop.
        </p>

        <p>
          Before accepting the software&apos;s answer, stop and ask whether the
          result makes sense.
        </p>
      </div>

      <div className="sanityBox">
        <p className="sectionLabel">Ask Yourself</p>

        <div className="questionGrid">
          <div>
            <strong>
              Does the amount of metal look reasonable for this frame?
            </strong>
          </div>

          <div>
            <strong>
              Does the quantity match the plans?
            </strong>
          </div>

          <div>
            <strong>
              Are there components I expected to see that are missing?
            </strong>
          </div>

          <div>
            <strong>
              Is anything being included that clearly should not be there?
            </strong>
          </div>

          <div>
            <strong>
              Are the glass and door conditions represented correctly?
            </strong>
          </div>

          <div>
            <strong>
              Does the result pass a basic common-sense check?
            </strong>
          </div>
        </div>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Do Not Skip This</p>

        <h3>
          If the number looks strange, investigate it.
        </h3>

        <p>
          Do not change the price just because the total feels wrong.
        </p>

        <p>
          Find out why it feels wrong. The problem may be a missing component,
          wrong quantity, incorrect metal group, wrong glass, or another setup
          issue.
        </p>
      </div>

      <h3>Verify a Known Example When Possible</h3>

      <div className="lessonText">
        <p>
          If your company is beginning to use Glazier Studio for estimating,
          one of the best ways to build confidence is to compare the software
          against a project whose material and costs are already known.
        </p>

        <p>
          Build a known frame, review what the software picks up, and compare it
          against what your company knows was actually required.
        </p>

        <p>
          This helps expose incorrect metal groups, missing components, bad
          frequencies, pricing problems, or other setup issues before they
          affect a real bid.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Required Before Trusting Automation</p>

        <h3>
          Test your company&apos;s setup.
        </h3>

        <p>
          Do not assume the software is accurate simply because it produced a
          total.
        </p>

        <p>
          Your company should verify the setup against known jobs, known
          material, or another trusted estimating method before depending on it
          for real-world pricing.
        </p>
      </div>

      <h3>Save the Project</h3>

      <div className="lessonText">
        <p>
          Once you are satisfied with the frame, save the project.
        </p>

        <p>
          Glazier Studio and PartnerPak do not automatically protect every
          change you make, so save regularly throughout the estimating process.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Save after major changes.
        </strong>

        <p>
          There is nothing fun about building a complicated estimating frame
          and then losing your work.
        </p>
      </div>

      <h3>What Matters Most?</h3>

      <div className="priorityBox">
        <p className="sectionLabel">Estimating Priority</p>

        <div className="priorityGrid">
          <section>
            <span>1</span>
            <strong>Correct Quantity</strong>
            <p>
              Make sure the project contains the correct number of frames.
            </p>
          </section>

          <section>
            <span>2</span>
            <strong>Correct System</strong>
            <p>
              Verify the catalog, metal group, and framing configuration.
            </p>
          </section>

          <section>
            <span>3</span>
            <strong>Correct Components</strong>
            <p>
              Make sure the material that affects cost is represented.
            </p>
          </section>

          <section>
            <span>4</span>
            <strong>Reasonable Dimensions</strong>
            <p>
              Get as close as possible where dimensions affect material or cost.
            </p>
          </section>

          <section>
            <span>5</span>
            <strong>Exact Production Details</strong>
            <p>
              Refine fabrication-level information later if the project is
              awarded.
            </p>
          </section>
        </div>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">Lesson 4 Takeaway</p>

        <h3>
          A useful estimate is not just a frame that looks right.
        </h3>

        <p>
          The frame must contain the correct systems, members, quantities,
          glass, and major cost-driving conditions.
        </p>

        <p>
          Be accurate where accuracy changes the cost. Do not waste estimating
          time chasing fabrication-level perfection when that detail can be
          refined later.
        </p>

        <p>
          Most importantly, verify what the software is doing before you trust
          the result.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Final Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I verified the frame structure against
            the project documents.
          </label>

          <label>
            <input type="checkbox" /> I confirmed the correct metal group.
          </label>

          <label>
            <input type="checkbox" /> I verified Number Thus and frame quantity.
          </label>

          <label>
            <input type="checkbox" /> I checked for missing verticals and
            horizontals.
          </label>

          <label>
            <input type="checkbox" /> I reviewed overall width and height.
          </label>

          <label>
            <input type="checkbox" /> I considered unusual lengths or
            structural conditions.
          </label>

          <label>
            <input type="checkbox" /> I reviewed major glass requirements.
          </label>

          <label>
            <input type="checkbox" /> I verified door conditions.
          </label>

          <label>
            <input type="checkbox" /> I reviewed supporting components that
            affect cost.
          </label>

          <label>
            <input type="checkbox" /> I performed a sanity check before trusting
            the estimate.
          </label>

          <label>
            <input type="checkbox" /> I understand that my company should test
            its estimating setup against known results.
          </label>

          <label>
            <input type="checkbox" /> I saved the project.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-4-build-frame"
          className="secondary"
        >
          ← Previous: Build & Modify the Frame
        </Link>

        <Link
          href="/dashboard/estimator-training"
          className="primary"
        >
          Finish Lesson 4 →
        </Link>
      </div>

      <style jsx>{`
        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 26px 0 34px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .reviewGrid span,
        .priorityGrid span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
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

        .quantityComparison,
        .memberGrid,
        .glassGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .quantityComparison section,
        .memberGrid section,
        .glassGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .quantityComparison h3,
        .memberGrid h3,
        .glassGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .memberGrid ul,
        .glassGrid ul {
          margin: 12px 0 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        .glassGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
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

        .warningBox p:not(.sectionLabel) + p,
        .criticalBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .attentionGrid,
        .componentGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .attentionGrid > div,
        .componentGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .attentionGrid strong,
        .componentGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .attentionGrid p,
        .componentGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.6;
        }

        .sanityBox,
        .priorityBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .questionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .questionGrid > div {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .questionGrid strong {
          color: #ffffff;
        }

        .priorityGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .priorityGrid section {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .priorityGrid span {
          margin-bottom: 12px;
        }

        .priorityGrid strong {
          display: block;
          color: #ffffff;
        }

        .priorityGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
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

        @media (max-width: 1050px) {
          .priorityGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .reviewGrid,
          .quantityComparison,
          .memberGrid,
          .glassGrid,
          .attentionGrid,
          .componentGrid,
          .questionGrid,
          .priorityGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}