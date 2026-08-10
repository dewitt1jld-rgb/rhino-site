import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Add a Door",
    href: "/dashboard/introductory-software-training/lesson-8-add-door",
  },
  {
    number: 2,
    title: "Set DLO Sizes",
    href: "/dashboard/introductory-software-training/lesson-8-dlo-sizes",
  },
  {
    number: 3,
    title: "Insert, Delete & Move Members",
    href: "/dashboard/introductory-software-training/lesson-8-member-edits",
  },
];

const img = {
  selectStick:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_8/select_a_vert.png",
  insertSticks:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-12-insert-sticks.png",
};

export default function LessonEightMemberEditsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="08"
      lessonTitle="Modifying Frames & Members"
      lessonDescription="Continue working in the Lesson 7 training project by adding a door, changing DLO sizes, and modifying framing members."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Insert, Delete & Move Members</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Select individual sticks, change a member
        centerline, insert new vertical and horizontal members, and delete an
        unwanted stick.
      </div>

      <h3>Select a Stick</h3>

      <div className="lessonText">
        <p>
          Click directly on a framing member and it should highlight green. The right-side
          information panel should change from opening information to member
          information.
        </p>

        <p>
          Practice selecting a vertical, de-selecting all members, then click on a horizontal before changing any
          values.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.selectStick} alt="Selected framing member centerline" />
        <figcaption>
          Select a member to view and edit its centerline information.
        </figcaption>
      </figure>

      <h3>Adjust a Centerline</h3>

      <div className="lessonText">
        <p>
          Select one intermediate vertical. Locate the centerline field in the
          right-side panel.
        </p>

        <p>
          Enter a new centerline location and press <strong>Enter</strong>.
          Watch the member move while the overall frame size remains unchanged.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Sometimes a stick will be stuck in place due to too many restraints.</strong>
        <p>
          To solve this issue you can select a stick, right click on the selected stick and choose
          the option that says <strong>FREE STICK</strong>. This removes the constraints on the stick so it can then be moved. 
        </p>
      </div>

      <h3>Insert a Vertical Member</h3>

      <div className="lessonText">
        <p>
          Select a glass opening where you want to add another vertical. Right-
          click inside the selected opening and choose{" "}
          <strong>Insert Vertical</strong>.
        </p>

        <p>
          The software will split the selected opening into two openings and
          place a new vertical member between them.
        </p>
      </div>

      <figure
        style={{
          maxWidth: "320px",
          margin: "28px auto 0",
          textAlign: "center",
        }}
      >
        <img
          src={img.insertSticks}
          alt="Insert vertical or horizontal menu"
          style={{
            width: "100%",
            maxWidth: "260px",
            borderRadius: "16px",
          }}
        />
        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.55)",
          }}
        >
          Use the right-click menu to insert a vertical or horizontal.
        </figcaption>
      </figure>

      <h3>Insert a Horizontal Member</h3>

      <div className="lessonText">
        <p>
          Select another glass opening, right-click, and choose{" "}
          <strong>Insert Horizontal</strong>.
        </p>

        <p>
          The selected opening will split into an upper and lower opening.
          Practice selecting the new horizontal after it is created.
        </p>
      </div>

      <h3>Delete a Member</h3>

      <div className="lessonText">
        <p>
          Select one of the sticks you inserted and it should highlight green. Press the{" "}
          <strong>Delete</strong> key on the keyboard.
        </p>

        <p>
          The two openings separated by that member should merge back into one
          opening.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Use the Delete key, not Backspace.</strong>
        <p>
          Backspace does not perform the same command inside the frame editor.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Guided Practice</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> Select and move an intermediate vertical.
          </label>

          <label>
            <input type="checkbox" /> select one stick and choose "free stick"
          </label>

          <label>
            <input type="checkbox" /> Insert one vertical into an opening.
          </label>

          <label>
            <input type="checkbox" /> Insert one horizontal into an opening.
          </label>

          <label>
            <input type="checkbox" /> Delete one inserted member.
          </label>

          <label>
            <input type="checkbox" /> Save the project after completing the
            edits.
          </label>
        </div>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Lesson 08 Complete</p>
        <h3 style={{ marginTop: 0 }}>You can now modify a basic frame</h3>

        <div className="takeawayGrid">
          <div>
            <strong>✓</strong>
            Add a basic door
          </div>

          <div>
            <strong>✓</strong>
            Change DLO widths and heights
          </div>

          <div>
            <strong>✓</strong>
            Move members by centerline
          </div>

          <div>
            <strong>✓</strong>
            Insert and delete sticks
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-8-dlo-sizes"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-9-reverse-joinery"
          className="primary"
        >
          Continue to lesson 9
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
