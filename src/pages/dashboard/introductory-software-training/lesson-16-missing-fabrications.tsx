import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Import Our Test Frame",
    href: "/dashboard/introductory-software-training/lesson-16-import-test-frame",
  },
  {
    number: 2,
    title: "Reports & Optimization",
    href: "/dashboard/introductory-software-training/lesson-16-reports-optimization",
  },
  {
    number: 3,
    title: "Identifying Missing Fabrications",
    href: "/dashboard/introductory-software-training/lesson-16-missing-fabrications",
  },
];

const img = {
  missingFabs:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/missing_fabs_.png",

  addOperations:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/aaa.png",

  previewFrames:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/preview_frames.png",

  redX:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/red_x.png",
};

export default function LessonSixteenMissingFabricationsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="16"
      lessonTitle="Importing & Reviewing Projects"
      lessonDescription="Import the test project into Metal Fabrication, review fabrication warnings, and identify the source of missing or incorrectly positioned fabrications before making corrections."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 3
      </p>

      <h2>
        Identifying Fabrication Problems
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to identify where a fabrication problem is actually coming
        from before attempting to correct it.
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          This is not a follow-along lesson.
        </strong>

        <p>
          I intentionally changed my Metal Group to create the errors shown in
          this lesson.
        </p>

        <p>
          Do not make these changes to your own Metal Group. For now, simply
          follow along and learn how to identify the source of the problem.
        </p>
      </div>

      <div className="lessonText">
        <p>
          The two most common problems I see in Metal Fabrication are:
        </p>
      </div>

      <div className="issueGrid">
        <div>
          <span>01</span>

          <strong>
            Missing Fabrications
          </strong>

          <p>
            A fabrication that should have transferred to another member never
            appears.
          </p>
        </div>

        <div>
          <span>02</span>

          <strong>
            Fabrications in the Wrong Location
          </strong>

          <p>
            The fabrication exists, but its position, direction, or orientation
            is incorrect.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Lesson 17 will show you how to correct both of these problems.
        </p>

        <p>
          Before we can fix anything, however, we need to be able to identify
          what actually needs to be corrected.
        </p>
      </div>

      <h3>
        Identifying Missing Fabrications
      </h3>

      <div className="lessonText">
        <p>
          When we import a job into Metal Fabrication, we are hoping not to see
          any warning colors.
        </p>

        <p>
          Every once in a while, however, you may see red line items indicating
          that the software believes fabrications are missing.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.missingFabs}
          alt="Red line items indicating missing fabrications in Metal Fabrication"
        />

        <figcaption>
          Red line items indicate that Metal Fabrication believes one or more
          required fabrications are missing.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          These red lines often appear on vertical members.
        </p>

        <p>
          If you select one of those red line items and click{" "}
          <strong>Add Operation</strong>, you can see which fabrications are
          already present on that stick.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.addOperations}
          alt="Add Operation screen showing fabrications on a vertical stick"
        />

        <figcaption>
          The Add Operation screen helps us understand what fabrications are
          already present and gives us clues about what may be missing.
        </figcaption>
      </figure>

      <h3>
        Use the Clues on the Screen
      </h3>

      <div className="lessonText">
        <p>
          There are several important clues in the image above.
        </p>

        <p>
          First, notice that <strong>not all of the fabrications are missing</strong>.
          We already have two good sets of fabrications. Only one set is
          missing.
        </p>

        <p>
          To determine which set is missing, we need to understand how the part
          is running through the machine.
        </p>
      </div>

      <div className="clueGrid">
        <div>
          <span>1</span>

          <strong>
            Check Machine Orientation
          </strong>

          <p>
            The machine orientation tells us how the stick is loaded and which
            end feeds into the machine first.
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>
            Identify the Lead Edge
          </strong>

          <p>
            In this example, the stick is loaded from the right side of the
            machine, so the left edge feeds into the machine first.
          </p>
        </div>

        <div>
          <span>3</span>

          <strong>
            Check the Start Point
          </strong>

          <p>
            The Start Point tells us whether that lead edge represents the top
            or bottom of the stick.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          In this example, the Start Point is TOP.
        </strong>

        <p>
          That means the lead edge of the vertical represents the head end of
          the stick.
        </p>

        <p>
          Because the missing fabrications are located at that end, we know we
          are looking for the missing <strong>head preparations</strong>.
        </p>
      </div>

      <h3>
        Remember Primary vs. Secondary Fabrications
      </h3>

      <div className="fabTypeGrid">
        <div>
          <p className="sectionLabel">
            Primary Fabrications
          </p>

          <strong>
            Belong to the member itself
          </strong>

          <p>
            Examples include weep holes and anchor holes.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Secondary Fabrications
          </p>

          <strong>
            Pass from one member to another
          </strong>

          <p>
            Examples include screw spline holes and shear block holes.
          </p>
        </div>
      </div>

      <div className="lessonText">
        <p>
          In our example, the vertical member is missing the fabrication.
        </p>

        <p>
          But that does <strong>not</strong> automatically mean the vertical is
          the problem.
        </p>

        <p>
          Since these are secondary fabrications, the holes are being passed
          from another member.
        </p>

        <p>
          We already determined that the missing holes are head preps, so we can
          infer that the problem is most likely coming from the{" "}
          <strong>head member</strong>.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">
          Important
        </p>

        <h3>
          The member showing the error is not always the member causing the
          error.
        </h3>

        <p>
          Secondary fabrications are created by one member and passed to
          another. That means the correction often needs to happen somewhere
          other than the stick that is highlighted red.
        </p>
      </div>

      <h3>
        Use Preview Frames
      </h3>

      <div className="lessonText">
        <p>
          There is also a much easier way to visualize what is happening.
        </p>

        <p>
          Click <strong>Preview Frames</strong> in the upper-right corner of
          Metal Fabrication.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.previewFrames}
          alt="Preview Frames button and frame preview in Metal Fabrication"
        />

        <figcaption>
          Preview Frames allows you to see the frame, Stick IDs, and the
          locations where fabrications are expected.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Inside Preview Frames, missing fabrications are shown with{" "}
          <strong>red X marks</strong>.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.redX}
          alt="Red X marks showing missing fabrications around Stick ID 15"
        />

        <figcaption>
          The red X marks show exactly where Metal Fabrication believes
          fabrications are missing.
        </figcaption>
      </figure>

      <h3>
        Identify the Member Causing the Problem
      </h3>

      <div className="lessonText">
        <p>
          In this example, the red X marks appear on both sides of{" "}
          <strong>Stick ID 15</strong>.
        </p>

        <p>
          Stick ID 15 is the head member.
        </p>

        <p>
          Since the missing holes appear where that head connects to the
          verticals, we can infer that Stick ID 15 is not passing its screw
          spline holes to the vertical members correctly.
        </p>
      </div>

      <div className="diagnosisFlow">
        <div>
          <span>1</span>

          <strong>
            Red X Appears
          </strong>

          <p>
            Missing fabrication is visible on the vertical.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>2</span>

          <strong>
            Identify Connected Member
          </strong>

          <p>
            The missing holes are located where Stick ID 15 connects.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>3</span>

          <strong>
            Trace the Secondary Fab
          </strong>

          <p>
            Stick ID 15 should be passing those screw spline holes.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Now exit Preview Frames and look at Stick ID 15.
        </strong>

        <p>
          Notice something important: Stick ID 15 itself is{" "}
          <strong>not highlighted red</strong>.
        </p>

        <p>
          The vertical members show the symptom, but the head member is where
          the secondary fabrication problem originates.
        </p>
      </div>

      <div className="lessonText">
        <p>
          At this point, we have successfully identified the issue.
        </p>

        <p>
          We know which member is causing the problem and what type of
          fabrication needs to be corrected.
        </p>

        <p>
          Lesson 17 will show you how to actually fix it.
        </p>
      </div>

      <h3>
        What About Fabrications in the Wrong Location?
      </h3>

      <div className="lessonText">
        <p>
          Fabrications that are in the wrong location can be a little harder to
          identify.
        </p>

        <p>
          Most of the time, you discover this problem after a test frame has
          been run on the Rhino and the machine operator or frame assembly crew
          tells you that something does not line up.
        </p>

        <p>
          They may bring you a vertical stick and say the holes are
          misaligned, upside down, or otherwise incorrect.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">
          Do Not Stop at the Symptom
        </p>

        <h3>
          The problem may not be on the vertical stick.
        </h3>

        <p>
          Your job is to understand where those holes came from and which
          member created the fabrication.
        </p>
      </div>

      <h3>
        Example: Middle Holes Are Upside Down
      </h3>

      <div className="lessonText">
        <p>
          Imagine the crew tells you that the holes in the middle of a vertical
          member are upside down.
        </p>

        <p>
          They tell you that the system should have been configured for a
          stops-down condition instead of a stops-up condition and that the
          hole pattern needs to be flipped.
        </p>

        <p>
          It would be easy to look at the vertical stick and assume that is
          where you need to make the change.
        </p>

        <p>
          But you first need to ask:
        </p>
      </div>

      <div className="questionBox">
        <strong>
          Where did those middle holes come from?
        </strong>
      </div>

      <div className="lessonText">
        <p>
          The middle holes were created because the intermediate horizontal
          passes secondary fabrications into the vertical.
        </p>

        <p>
          That means the correction needs to be made in the{" "}
          <strong>secondary fabrications of the intermediate horizontal</strong>,
          not directly on the vertical member where the incorrect holes
          appeared.
        </p>
      </div>

      <div className="comparisonGrid">
        <div className="wrongCard">
          <p className="sectionLabel">
            What You See
          </p>

          <strong>
            Incorrect holes on a vertical
          </strong>

          <p>
            This is the symptom.
          </p>
        </div>

        <div className="correctCard">
          <p className="sectionLabel">
            What You Need to Find
          </p>

          <strong>
            The horizontal passing those holes
          </strong>

          <p>
            This is where the secondary fabrication needs to be investigated.
          </p>
        </div>
      </div>

      <h3>
        Identifying the Problem Is Most of the Battle
      </h3>

      <div className="lessonText">
        <p>
          I am stressing this because identifying the issue is often the hardest
          part of troubleshooting Metal Fabrication.
        </p>

        <p>
          You cannot fix an issue that you are unable to find.
        </p>

        <p>
          Missing fabrications and incorrectly positioned fabrications may
          require slightly different corrections, but the troubleshooting
          process starts the same way:
        </p>
      </div>

      <div className="identifySteps">
        <div>
          <span>1</span>

          <strong>
            Identify the Symptom
          </strong>

          <p>
            What fabrication is missing or incorrect?
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>
            Understand the Stick
          </strong>

          <p>
            Determine orientation, lead edge, and Start Point.
          </p>
        </div>

        <div>
          <span>3</span>

          <strong>
            Determine Where the Fab Came From
          </strong>

          <p>
            Decide whether it belongs to that member or was passed from another
            member.
          </p>
        </div>

        <div>
          <span>4</span>

          <strong>
            Find the Source Member
          </strong>

          <p>
            Use Preview Frames and Stick IDs to identify the member controlling
            the secondary fabrication.
          </p>
        </div>

        <div>
          <span>5</span>

          <strong>
            Then Make the Correction
          </strong>

          <p>
            Lesson 17 will show you how.
          </p>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">
          Lesson 16 Complete
        </p>

        <h3>
          You now know how to locate the source of common Metal Fabrication
          problems.
        </h3>

        <p>
          The next lesson moves into secondary fabrications and shows you how
          to correct the problems we identified here.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-16-reports-optimization"
          className="secondary"
        >
          ← Previous: Reports &amp; Optimization
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-17-secondary-fabrications"
          className="primary"
        >
          Next: Secondary Fabrications →
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

        .issueGrid,
        .fabTypeGrid,
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .issueGrid > div,
        .fabTypeGrid > div,
        .comparisonGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .issueGrid span {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .issueGrid strong,
        .fabTypeGrid strong,
        .comparisonGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .issueGrid p,
        .fabTypeGrid p:not(.sectionLabel),
        .comparisonGrid p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .clueGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .clueGrid > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .clueGrid span,
        .identifySteps span,
        .diagnosisFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-bottom: 10px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .clueGrid strong,
        .identifySteps strong,
        .diagnosisFlow strong {
          color: #ffffff;
        }

        .clueGrid p,
        .identifySteps p,
        .diagnosisFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
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
        }

        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.65;
        }

        .diagnosisFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .diagnosisFlow > div:not(.flowArrow) {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .questionBox {
          margin: 24px 0;
          padding: 24px;
          border-radius: 18px;
          text-align: center;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.28);
          color: #ffffff;
          font-size: 22px;
        }

        .wrongCard {
          border-color: rgba(239, 68, 68, 0.22) !important;
        }

        .correctCard {
          border-color: rgba(34, 197, 94, 0.22) !important;
        }

        .identifySteps {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .identifySteps > div {
          padding: 17px;
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

        @media (max-width: 950px) {
          .identifySteps {
            grid-template-columns: 1fr;
          }

          .clueGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 850px) {
          .diagnosisFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .issueGrid,
          .fabTypeGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}