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

const horizontalVideo =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_9/align_door_header.mp4";

const kneeWallVideo =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_9/knee_wall.mp4";

export default function LessonNineAlignMembersPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="09"
      lessonTitle="Advanced Frame Edits"
      lessonDescription="Continue using the training project to practice reverse joinery, member alignment, knee-wall conditions, and crippled headers."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Align Horizontals & Knee Walls</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Use an existing correctly positioned member as a
        reference and align other horizontal members to it.
      </div>

      <h3>Matching Horizontals to a Door Header</h3>

      <div className="lessonText">
        <p>
          Frames containing a door often require nearby intermediate
          horizontals to align with the door header. Instead of entering each
          centerline manually, the software can use one correctly positioned
          member as the reference.
        </p>

        <p>
          Always select the member that is already in the correct location
          first. Then select each member that needs to move and press <strong>Enter</strong> twice.
          This is the third and fastest way to move horizontals into position.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Selection Order</p>
        <div className="takeawayGrid">
          <div>
            <strong>1</strong>
            Select the correctly positioned door header.
          </div>
          <div>
            <strong>2</strong>
            Select the horizontals that need to align.
          </div>
          <div>
            <strong>3</strong>
            Press Enter.
          </div>
          <div>
            <strong>4</strong>
            Press Enter a second time to complete the command.
          </div>
        </div>
      </div>

      <video
        controls
        preload="metadata"
        src={horizontalVideo}
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
        <strong>Press Enter twice.</strong>
        <p>
          The first Enter confirms the selected members. The second completes
          the alignment command.
        </p>
      </div>

      <h3>Practice the Horizontal Alignment</h3>

      <div className="lessonText">
        <p>
          Use the door header in your training frame as the reference. Select
          one or more nearby horizontals and align them to the header.
        </p>

        <p>
          When finished, visually confirm that the aligned members share the
          same centerline.
        </p>
      </div>

      <h3>Raising a Knee Wall</h3>

      <div className="lessonText">
        <p>
          A knee-wall condition requires the sill member to be raised up. 
          Start by clicking on the required sticks and enter a bottom of horizontal location. 
          For this practice you can set the to 25".
        </p>

       </div>

      <video
        controls
        preload="metadata"
        src={kneeWallVideo}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "760px",
          margin: "28px auto",
          borderRadius: "16px",
          border: "1px solid rgba(245, 158, 11, 0.22)",
        }}
      />

      <div className="takeawayBox">
        <p className="sectionLabel">Guided Practice</p>
        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I aligned the horizontals with the door header
          </label>
          <label>
            <input type="checkbox" /> I raised the sill members to create a knee wall condition
            move.
          </label>
       
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-9-reverse-joinery"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-9-crippled-header"
          className="primary"
        >
          Next: Crippled Header →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
