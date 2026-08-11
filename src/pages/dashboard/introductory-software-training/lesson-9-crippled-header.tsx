import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Reverse Joinery",
    href: "/dashboard/introductory-software-training/lesson-9-reverse-joinery",
  },
  {
    number: 2,
    title: "Align Horizontals & Knee Walls",
    href: "/dashboard/introductory-software-training/lesson-9-align-members",
  },
  {
    number: 3,
    title: "Build a Crippled Header",
    href: "/dashboard/introductory-software-training/lesson-9-crippled-header",
  },
];

const crippleHeaderVideo =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_9/Crippled_door_header.mp4";

export default function LessonNineCrippledHeaderPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="09"
      lessonTitle="Advanced Frame Edits"
      lessonDescription="Continue using the training project to practice reverse joinery, member alignment, knee-wall conditions, and crippled headers."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Build a Crippled Header</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Modify the frame so the door header extends
        across adjacent bays and remove the vertical members above the door.
      </div>

      <div className="calloutBox">
        <strong>Save a copy before beginning.</strong>
        <p>
          This exercise intentionally removes and changes members. Saving a
          copy gives you a clean version for Lesson 10.
        </p>
      </div>

      <h3>What Is a Crippled Header?</h3>

      <div className="lessonText">
        <p>
          A crippled header condition allows the door header to continue across
          adjacent bays rather than stopping at the door jambs.
        </p>

        <p>
          Creating this condition requires a specific sequence: remove the
          neighboring horizontals, reverse the door-header joins, and then
          delete the vertical members above the door.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Required Sequence</p>
        <div className="takeawayGrid">
          <div>
            <strong>1</strong>
            Remove the horizontal on the left side of the door header.
          </div>
          <div>
            <strong>2</strong>
            Remove the horizontal on the right side of the door header.
          </div>
          <div>
            <strong>3</strong>
            Reverse Joinery on both ends of the door header.
          </div>
          <div>
            <strong>4</strong>
            Delete the vertical members above the door.
          </div>
        </div>
      </div>

      <video
        controls
        preload="metadata"
        src={crippleHeaderVideo}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "760px",
          margin: "28px auto",
          borderRadius: "16px",
          border: "1px solid rgba(245, 158, 11, 0.22)",
        }}
      />

      <div className="calloutBox">
        <strong>Use the Delete key.</strong>
        <p>
          Backspace will not remove the selected member inside the frame
          editor.
        </p>
      </div>

      <h3>Inspect the Completed Condition</h3>

      <div className="lessonText">
        <p>
          Confirm that the header now runs continuously across the intended
          bays. Check that no unwanted vertical remains above the door.
        </p>

        <p>
          If you have a vertical stick above the door, you can select the Transom area and insert a vertical stick.
          It should automatically center itself in the bay. 
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I removed both neighboring horizontals.
          </label>
          <label>
            <input type="checkbox" /> I reversed both door-header joins.
          </label>
          <label>
            <input type="checkbox" /> I deleted the verticals above the door.
          </label>
          <label>
            <input type="checkbox" /> I added a vertical directly above the door. 
          </label>
        </div>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Lesson 09 Complete</p>
        <h3 style={{ marginTop: 0 }}>You can perform advanced frame edits</h3>
        <div className="takeawayGrid">
          <div>
            <strong>✓</strong>
            Reverse individual joins
          </div>
          <div>
            <strong>✓</strong>
            Align multiple horizontals
          </div>
          <div>
            <strong>✓</strong>
            Create knee-wall conditions
          </div>
          <div>
            <strong>✓</strong>
            Build a crippled header
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-9-align-members"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-10-splices-tools"
          className="primary"
        >
          Continue to Lesson 10 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
