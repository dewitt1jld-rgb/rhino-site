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

const reverseJoinVideo =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-02-reverese-join.mp4";

export default function LessonNineReverseJoineryPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="09"
      lessonTitle="Advanced Frame Edits"
      lessonDescription="Continue using the training project to practice reverse joinery, member alignment, knee-wall conditions, and crippled headers."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Reverse Joinery</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand how member joinery controls which
        stick runs through an intersection and practice reversing one join
        manually.
      </div>

      <div className="calloutBox">
        <strong>Continue using the Lesson 7 Training Project.</strong>
        <p>
          Open the same frame you modified in Lesson 8. Save a copy before
          beginning so you can restore the original frame if needed.
        </p>
      </div>

      <h3>What Joinery Controls</h3>

      <div className="lessonText">
        <p>
          At every intersection, one member may run continuously through the
          frame while another member stops against it. This relationship is
          called <strong>joinery</strong>.
        </p>

        <p>
          A metal group normally controls the default joinery throughout a
          frame. However, individual intersections can be changed manually when
          a drawing, design condition, or aesthetic requirement calls for a
          different member to run through.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Training Exercise</p>
        <h3 style={{ marginTop: 0 }}>Reverse one horizontal-to-vertical join</h3>
        <p className="bodyText">
          Use an interior intersection that is easy to see. Do not reverse a
          perimeter jamb, head, sill, or door-package member during this first
          exercise.
        </p>
      </div>

      <h3>Perform the Edit</h3>

      <div className="lessonText">
        <p>
          Select the stick closest to the edge of the intersection you want to
          change. Confirm that the correct member highlights.
        </p>

        <p>
          Right-click the selected member and choose{" "}
          <strong>Reverse Joinery</strong>. Watch the intersection closely as
          the software changes which member runs through.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        src={reverseJoinVideo}
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
        <strong>Pause and compare the intersection.</strong>
        <p>
          The frame dimensions should remain unchanged. Only the relationship
          between the intersecting members should look different.
        </p>
      </div>

      <h3>Practice Reversing It Back</h3>

      <div className="lessonText">
        <p>
          Select the same member again and use Reverse Joinery a second time.
          Confirm that the intersection returns to its original condition.
        </p>

        <p>
          Reversing the same join twice is a useful way to understand the tool
          without permanently changing the training frame.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I selected an interior member.
          </label>
          <label>
            <input type="checkbox" /> I used Reverse Joinery once.
          </label>
          <label>
            <input type="checkbox" /> I confirmed the frame size did not change.
          </label>
          <label>
            <input type="checkbox" /> I reversed the join back to its original
            condition.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-8-member-edits"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-9-align-members"
          className="primary"
        >
          Next: Align Members →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
