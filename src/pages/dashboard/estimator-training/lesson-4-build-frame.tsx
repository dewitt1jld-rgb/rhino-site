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

const img = {
  addFrameButton:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-05-add-frame-button.png",

  frameAdded:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-06-frame-added.png",

  editorToolbar:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-13-editor-toolbar.png",

  frameInfo:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-14-frame-info.png",
};

export default function EstimatorLessonFourBuildFramePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Building Frames for an Estimate"
      lessonDescription="Learn how to organize a project, build estimating frames efficiently, and enter enough information to produce useful pricing without overbuilding the job."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 4</p>

      <h2>Build & Modify the Frame</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Build the frame efficiently, adjust it to match the bid documents, and
        focus your time on the conditions that actually affect material and
        pricing.
      </div>

      <div className="lessonText">
        <p>
          Now that the frame settings are entered, we can create the frame and
          begin modifying it to resemble the project drawings.
        </p>

        <p>
          The key word here is <strong>resemble</strong>.
        </p>

        <p>
          During estimating, we want the frame to represent the actual system,
          members, openings, doors, quantities, and major project conditions.
          We do not need every internal dimension to be fabrication-perfect.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Estimator Mindset</p>

        <h3>
          Reproduce the material configuration — not a perfect shop drawing.
        </h3>

        <p>
          If a condition changes what must be purchased, represent it. If a
          small dimensional difference does not change material or cost, do not
          spend excessive estimating time perfecting it.
        </p>
      </div>

      <h3>Add the Initial Frame</h3>

      <div className="lessonText">
        <p>
          Review your frame settings one last time and select the green{" "}
          <strong>Add Frame</strong> button.
        </p>

        <p>
          Glazier Studio will create the basic frame using the width, height,
          panel count, row count, metal group, and other settings you entered.
        </p>
      </div>

      <div className="buildImages">
        <figure className="smallFigure">
          <img
            src={img.addFrameButton}
            alt="Glazier Studio Add Frame button"
          />

          <figcaption>
            Select Add Frame after reviewing the estimating settings.
          </figcaption>
        </figure>

        <figure className="largeFigure">
          <img
            src={img.frameAdded}
            alt="Completed frame added inside Glazier Studio"
          />

          <figcaption>
            The initial frame gives you a starting structure that can now be
            modified to match the bid documents.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox">
        <strong>
          The initial frame does not have to be perfect.
        </strong>

        <p>
          Think of Panels and Rows as the quickest way to get close. Once the
          frame exists, you can add, remove, move, or modify members as needed.
        </p>
      </div>

      <h3>Compare the Frame Against the Drawings</h3>

      <div className="lessonText">
        <p>
          Once the frame has been created, place the project drawings beside
          Glazier Studio and compare the two.
        </p>

        <p>
          Start with the major structure rather than individual dimensions.
        </p>
      </div>

      <div className="compareGrid">
        <div>
          <span>1</span>

          <section>
            <strong>Overall shape</strong>

            <p>
              Does the basic frame shape resemble the elevation?
            </p>
          </section>
        </div>

        <div>
          <span>2</span>

          <section>
            <strong>Vertical divisions</strong>

            <p>
              Does the frame contain the correct number of jambs and
              intermediate verticals?
            </p>
          </section>
        </div>

        <div>
          <span>3</span>

          <section>
            <strong>Horizontal divisions</strong>

            <p>
              Are the required intermediate horizontals represented?
            </p>
          </section>
        </div>

        <div>
          <span>4</span>

          <section>
            <strong>Doors and special openings</strong>

            <p>
              Are major cost-changing conditions shown in the frame?
            </p>
          </section>
        </div>
      </div>

      <h3>Do Not Chase Every Dimension Immediately</h3>

      <div className="lessonText">
        <p>
          One of the easiest ways to waste time during estimating is trying to
          make every opening exactly match dimensions that may not even be
          finalized yet.
        </p>

        <p>
          Start by making sure the frame contains the correct members.
        </p>

        <p>
          Fine-tune dimensions only when those dimensions change material,
          glass, stock length, structural conditions, or another cost-driving
          item.
        </p>
      </div>

      <div className="priorityComparison">
        <section>
          <p className="sectionLabel">Higher Priority</p>

          <h3>Correct member count</h3>

          <ul>
            <li>Correct number of verticals</li>
            <li>Correct number of horizontals</li>
            <li>Correct door openings</li>
            <li>Correct frame quantity</li>
            <li>Correct framing system</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">Lower Priority During the Bid</p>

          <h3>Fabrication-level positioning</h3>

          <ul>
            <li>Horizontal at 42" versus 46"</li>
            <li>Minor lite-size differences</li>
            <li>Exact anchor locations</li>
            <li>Exact weep locations</li>
            <li>Final fabrication dimensions</li>
          </ul>
        </section>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Core Principle</p>

        <h3>
          Get the pieces into the frame first.
        </h3>

        <p>
          If the drawings show a horizontal, put a horizontal in the frame.
          If they show another vertical, add another vertical.
        </p>

        <p>
          The exact final location can be refined later if that location does
          not materially affect the bid.
        </p>
      </div>

      <h3>Selecting Openings and Members</h3>

      <div className="lessonText">
        <p>
          To modify a frame efficiently, get comfortable selecting individual
          glass openings and framing members.
        </p>

        <p>
          Clicking an opening or member changes the information displayed on the
          right side of the program.
        </p>

        <p>
          This is how you begin changing properties for specific pieces of the
          frame.
        </p>
      </div>

      <div className="practiceGrid">
        <section>
          <p className="sectionLabel">Practice Selecting Openings</p>

          <h3>Click different glass lites</h3>

          <p>
            Select several openings and watch the right-side information
            change.
          </p>

          <p>
            This becomes useful later when changing individual glass types or
            opening-specific conditions.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Practice Selecting Members</p>

          <h3>Click different sticks</h3>

          <p>
            Select a head, sill, jamb, intermediate vertical, and intermediate
            horizontal.
          </p>

          <p>
            Notice that the information on the right changes based on the
            selected member.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          Click in the blank area outside the frame to clear your selections.
        </strong>

        <p>
          This is the easiest way to make sure you are editing the piece you
          actually intend to change.
        </p>
      </div>

      <h3>Modify the Frame to Match the Bid</h3>

      <div className="lessonText">
        <p>
          Once you understand how to select the frame elements, begin adjusting
          the frame to match the project documents.
        </p>

        <p>
          The exact tools you use will depend on the condition, but the
          estimating approach remains the same.
        </p>
      </div>

      <div className="modifyGrid">
        <div>
          <strong>Add a Vertical</strong>

          <p>
            Use this when the drawings contain an additional vertical division
            that the original panel layout did not create.
          </p>
        </div>

        <div>
          <strong>Add a Horizontal</strong>

          <p>
            Add intermediate horizontals when they are shown on the elevation so
            the required material is represented.
          </p>
        </div>

        <div>
          <strong>Remove a Member</strong>

          <p>
            Delete members that the initial Panels or Rows settings created but
            the actual elevation does not use.
          </p>
        </div>

        <div>
          <strong>Move a Member</strong>

          <p>
            Adjust a vertical or horizontal when its approximate position
            matters to the frame layout or glass sizes.
          </p>
        </div>

        <div>
          <strong>Change an Opening</strong>

          <p>
            Modify individual openings when glass types or other conditions vary
            within the same frame.
          </p>
        </div>

        <div>
          <strong>Add a Door Condition</strong>

          <p>
            Identify door openings so they are not treated as ordinary glass
            openings in the estimate.
          </p>
        </div>
      </div>

      <h3>Panels and Rows Are a Starting Point</h3>

      <div className="lessonText">
        <p>
          Panels and Rows are extremely useful because they let you create a
          basic grid quickly.
        </p>

        <p>
          But real buildings are rarely made entirely of perfect, evenly spaced
          grids.
        </p>

        <p>
          Architectural elevations often include different bay widths, unequal
          lite sizes, doors, transoms, partial horizontals, and other
          conditions.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Efficient Workflow</p>

        <h3>
          Use Panels and Rows to get close, then edit the exceptions.
        </h3>

        <p>
          Do not manually create every member from scratch if the software can
          give you most of the frame automatically.
        </p>
      </div>

      <h3>Unequal Bays Are Fine</h3>

      <div className="lessonText">
        <p>
          Many frames will contain unequal bays.
        </p>

        <p>
          During estimating, move the intermediate verticals close enough to
          represent the frame shown on the drawings.
        </p>

        <p>
          If one bay is approximately 36 inches and the next is approximately
          48 inches, represent that general condition.
        </p>

        <p>
          You do not necessarily need to chase fractions of an inch unless they
          change the material or another important pricing condition.
        </p>
      </div>

      <div className="exampleGrid">
        <section>
          <p className="sectionLabel">Good Estimating Frame</p>

          <div className="simpleFrame">
            <div className="leftVertical" />
            <div className="middleVertical uneven" />
            <div className="rightVertical" />
            <div className="middleHorizontal" />
          </div>

          <h3>General configuration is represented</h3>

          <p>
            The frame contains the correct members and roughly represents the
            actual opening layout.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Problematic Frame</p>

          <div className="simpleFrame">
            <div className="leftVertical" />
            <div className="rightVertical" />
          </div>

          <h3>Important members are missing</h3>

          <p>
            Even if the overall dimensions are correct, missing framing members
            can cause the estimate to miss material.
          </p>
        </section>
      </div>

      <h3>Horizontals: Presence Before Position</h3>

      <div className="lessonText">
        <p>
          This is especially important with intermediate horizontals.
        </p>

        <p>
          If the drawing clearly shows a horizontal but its exact height is
          unclear, place it approximately where it belongs and keep moving.
        </p>

        <p>
          The important estimating question is first:
        </p>
      </div>

      <div className="questionBox">
        <span>?</span>

        <h3>
          Does this frame require an intermediate horizontal?
        </h3>
      </div>

      <div className="lessonText">
        <p>
          Once the answer is yes, put the member in the frame.
        </p>

        <p>
          Its exact fabrication location can be finalized later.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Presence before position.
        </strong>

        <p>
          During estimating, it is generally better to have the required member
          approximately positioned than to leave it out while searching for a
          perfect dimension.
        </p>
      </div>

      <h3>Doors Change the Estimate</h3>

      <div className="lessonText">
        <p>
          Doors should not be treated like ordinary glass openings.
        </p>

        <p>
          A door condition can change framing, door material, hardware,
          thresholds, closers, pivots, panic devices, glass, labor, and other
          costs.
        </p>

        <p>
          During this lesson, the important thing is to identify where the door
          exists in the frame.
        </p>

        <p>
          Lesson 5 will go deeper into building doors specifically for pricing.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Do Not Miss Door Openings</p>

        <h3>
          A door-sized hole in the elevation is not just another glass lite.
        </h3>

        <p>
          Make sure door conditions are identified before trusting the frame
          estimate.
        </p>
      </div>

      <h3>Copy Similar Frames</h3>

      <div className="lessonText">
        <p>
          Many projects contain frames that are similar but not completely
          identical.
        </p>

        <p>
          Instead of rebuilding each one from scratch, start with an existing
          frame and modify the differences.
        </p>
      </div>

      <div className="copyExample">
        <p className="sectionLabel">Example</p>

        <div className="copyFlow">
          <div>
            <strong>Frame A-10</strong>
            <span>4 bays + 1 horizontal</span>
          </div>

          <span className="arrow">→</span>

          <div>
            <strong>Copy / New Frame</strong>
            <span>Keep the existing layout</span>
          </div>

          <span className="arrow">→</span>

          <div>
            <strong>Frame A-11</strong>
            <span>Move one vertical + add door</span>
          </div>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Speed Matters</p>

        <h3>
          Do not rebuild information the software can reuse.
        </h3>

        <p>
          Starting from similar frames can dramatically reduce the amount of
          time required to build a large estimate.
        </p>
      </div>

      <h3>Use Number Thus for True Duplicates</h3>

      <div className="lessonText">
        <p>
          If multiple openings are actually identical, do not copy the same
          frame over and over.
        </p>

        <p>
          Use <strong>Number Thus</strong> instead.
        </p>
      </div>

      <div className="duplicateGrid">
        <section>
          <p className="sectionLabel">Identical Frames</p>

          <h3>Use Number Thus</h3>

          <p>
            Same size, system, glass, door configuration, and framing
            conditions.
          </p>

          <strong className="answer good">
            Build once × correct quantity
          </strong>
        </section>

        <section>
          <p className="sectionLabel">Similar But Different</p>

          <h3>Copy and modify</h3>

          <p>
            Use an existing frame as the starting point, then change the
            conditions that differ.
          </p>

          <strong className="answer caution">
            Separate frame
          </strong>
        </section>
      </div>

      <h3>Know When to Stop</h3>

      <div className="lessonText">
        <p>
          This is one of the harder skills for new estimators to learn.
        </p>

        <p>
          It is possible to spend an enormous amount of time making an
          estimating frame perfect.
        </p>

        <p>
          Eventually, that extra time stops improving the estimate.
        </p>
      </div>

      <div className="stopGrid">
        <section>
          <p className="sectionLabel">Keep Working If...</p>

          <ul>
            <li>A framing member is missing</li>
            <li>A door condition is missing</li>
            <li>The wrong system is being used</li>
            <li>Overall dimensions are significantly wrong</li>
            <li>Glass conditions change the pricing</li>
            <li>Quantity is incorrect</li>
            <li>The frame is missing a major cost-driving condition</li>
          </ul>
        </section>

        <section>
          <p className="sectionLabel">Consider Moving On If...</p>

          <ul>
            <li>A horizontal may be a few inches off</li>
            <li>Minor lite dimensions are approximate</li>
            <li>Final anchor locations are unknown</li>
            <li>Weep locations are not finalized</li>
            <li>Fabrication rules have not been completed</li>
            <li>The remaining differences do not change the bid</li>
          </ul>
        </section>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Estimator Discipline</p>

        <h3>
          Accuracy matters. Perfection has a cost too.
        </h3>

        <p>
          The goal is not to build a sloppy frame. The goal is to spend your
          estimating time where it improves the accuracy of the price.
        </p>
      </div>

      <h3>Use the Editor Toolbar When Needed</h3>

      <div className="lessonText">
        <p>
          Larger frames can become difficult to view or navigate.
        </p>

        <p>
          Use the editor toolbar to zoom, pan, focus, and inspect the frame as
          needed.
        </p>
      </div>

      <figure className="toolbarFigure">
        <img
          src={img.editorToolbar}
          alt="Glazier Studio editor toolbar"
        />

        <figcaption>
          Use the editor controls to make larger or more complicated frames
          easier to work with.
        </figcaption>
      </figure>

      <h3>Save Frequently</h3>

      <div className="lessonText">
        <p>
          Building estimates can involve a lot of frame changes.
        </p>

        <p>
          Glazier Studio and PartnerPak do not automatically save every change,
          so make saving part of your workflow.
        </p>
      </div>

      <figure className="toolbarFigure">
        <img
          src={img.frameInfo}
          alt="Glazier Studio frame information toolbar"
        />

        <figcaption>
          The Frame Information toolbar contains Save and other frame-management
          controls.
        </figcaption>
      </figure>

      <div className="warningBox">
        <p className="sectionLabel">Save Your Work</p>

        <h3>
          Save after major frame changes.
        </h3>

        <p>
          A large estimate may contain hours of frame-building work. Do not
          depend on the program to automatically preserve it.
        </p>
      </div>

      <h3>Before Moving to Verification</h3>

      <div className="lessonText">
        <p>
          At this stage, the frame should be close enough to the bid documents
          that we can begin verifying what the estimate is actually picking up.
        </p>

        <p>
          Do not worry if every internal measurement is not final.
        </p>

        <p>
          We are looking for a frame that accurately represents the major
          material and pricing conditions.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> The basic frame has been created.
          </label>

          <label>
            <input type="checkbox" /> The overall configuration resembles the
            project drawings.
          </label>

          <label>
            <input type="checkbox" /> Required intermediate verticals are
            represented.
          </label>

          <label>
            <input type="checkbox" /> Required intermediate horizontals are
            represented.
          </label>

          <label>
            <input type="checkbox" /> Door conditions have been identified.
          </label>

          <label>
            <input type="checkbox" /> Major glass differences are represented.
          </label>

          <label>
            <input type="checkbox" /> Identical frames use the correct Number
            Thus.
          </label>

          <label>
            <input type="checkbox" /> Similar frames were copied and modified
            where appropriate.
          </label>

          <label>
            <input type="checkbox" /> I did not waste time perfecting
            dimensions that do not affect the bid.
          </label>

          <label>
            <input type="checkbox" /> The project has been saved.
          </label>
        </div>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">Section 3 Takeaway</p>

        <h3>
          Build the condition, then refine the details.
        </h3>

        <p>
          Use the software to get the frame close quickly. Add the members,
          doors, openings, and major conditions that affect the estimate.
        </p>

        <p>
          Do not confuse fabrication-level precision with estimating accuracy.
        </p>

        <p>
          If the frame contains the correct material configuration, we can
          verify the estimate now and refine the exact production dimensions
          later.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-4-frame-settings"
          className="secondary"
        >
          ← Previous: Enter Estimating Frame Settings
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-4-verify"
          className="primary"
        >
          Next: Verify the Estimate →
        </Link>
      </div>

      <style jsx>{`
        .buildImages {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin: 28px 0 36px;
        }

        .buildImages figure {
          margin: 0;
          text-align: center;
        }

        .smallFigure {
          flex: 0 1 180px;
        }

        .smallFigure img {
          display: block;
          width: 100%;
          max-width: 120px;
          margin: 0 auto;
        }

        .largeFigure {
          flex: 1 1 520px;
          max-width: 760px;
        }

        .largeFigure img {
          display: block;
          width: 100%;
          border-radius: 16px;
        }

        .buildImages figcaption,
        .toolbarFigure figcaption {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.55;
        }

        .compareGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 26px 0 34px;
        }

        .compareGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .compareGrid span {
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

        .compareGrid strong {
          color: #ffffff;
        }

        .compareGrid p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .priorityComparison,
        .practiceGrid,
        .exampleGrid,
        .duplicateGrid,
        .stopGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .priorityComparison section,
        .practiceGrid section,
        .exampleGrid section,
        .duplicateGrid section,
        .stopGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .priorityComparison h3,
        .practiceGrid h3,
        .exampleGrid h3,
        .duplicateGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .priorityComparison ul,
        .stopGrid ul {
          margin: 12px 0 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        .practiceGrid p:not(.sectionLabel),
        .exampleGrid p:not(.sectionLabel),
        .duplicateGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .practiceGrid p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .criticalBox,
        .warningBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.34);
          background: rgba(239, 68, 68, 0.07);
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.38);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox h3,
        .warningBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .criticalBox p:not(.sectionLabel),
        .warningBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .criticalBox p:not(.sectionLabel) + p,
        .warningBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .modifyGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .modifyGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .modifyGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .modifyGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.6;
        }

        .simpleFrame {
          position: relative;
          height: 190px;
          margin: 20px auto;
          border: 7px solid rgba(255, 255, 255, 0.82);
          border-radius: 3px;
        }

        .leftVertical,
        .rightVertical,
        .middleVertical {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 7px;
          background: rgba(255, 255, 255, 0.82);
        }

        .leftVertical {
          left: 0;
        }

        .rightVertical {
          right: 0;
        }

        .middleVertical {
          left: 50%;
        }

        .middleVertical.uneven {
          left: 37%;
        }

        .middleHorizontal {
          position: absolute;
          left: 0;
          right: 0;
          top: 55%;
          height: 7px;
          background: #f59e0b;
        }

        .questionBox {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 26px 0;
          padding: 22px;
          border: 1px solid rgba(245, 158, 11, 0.24);
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.07);
        }

        .questionBox span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.13);
          border: 1px solid rgba(245, 158, 11, 0.3);
          font-size: 24px;
          font-weight: 900;
        }

        .questionBox h3 {
          margin: 0;
          color: #ffffff;
        }

        .copyExample {
          margin: 28px 0 34px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .copyFlow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .copyFlow > div {
          min-width: 180px;
          padding: 18px;
          text-align: center;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.035);
        }

        .copyFlow strong {
          display: block;
          color: #ffffff;
        }

        .copyFlow div span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.45;
        }

        .copyFlow .arrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .answer {
          display: block;
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
        }

        .answer.good {
          color: #86efac;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .answer.caution {
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.25);
        }

        .toolbarFigure {
          max-width: 620px;
          margin: 28px auto 40px;
          text-align: center;
        }

        .toolbarFigure img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          display: block;
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
          .compareGrid,
          .priorityComparison,
          .practiceGrid,
          .modifyGrid,
          .exampleGrid,
          .duplicateGrid,
          .stopGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}