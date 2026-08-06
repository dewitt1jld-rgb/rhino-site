import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Splices, Tools & Shortcuts",
    href: "/dashboard/introductory-software-training/lesson-10-splices-tools",
  },
  {
    number: 2,
    title: "Create an Alternate Bid",
    href: "/dashboard/introductory-software-training/lesson-10-alternate-bid",
  },
  {
    number: 3,
    title: "Apply, Process & Verify",
    href: "/dashboard/introductory-software-training/lesson-10-verify-alternate",
  },
];

const image04 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-04-save-changes.png";

const image05 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-05-create.png";

export default function LessonTenVerifyAlternatePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="10"
      lessonTitle="Mastering the Frame Builder"
      lessonDescription="Use advanced frame tools, set splice locations, review shortcuts, and create an alternate bid from the training project."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Apply, Process & Verify</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Apply the alternate system to the frame set,
        create the duplicated project, and verify that no dimensions or geometry
        changed unintentionally.
      </div>

      <h3>Apply the Changes</h3>

      <div className="lessonText">
        <p>
          After changing the vendor or metal group, the software may ask whether
          the changes should be applied to every frame in the frame set.
        </p>

        <p>
          Select <strong>Yes</strong> when every frame in the set should use the
          same alternate system. Selecting No requires each frame to be changed
          manually.
        </p>
      </div>

      <figure style={{ maxWidth: "520px", margin: "28px auto 0", textAlign: "center" }}>
        <img src={image04} alt="Apply changes to all frames popup" style={{ width: "100%", borderRadius: "16px" }} />
        <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
          Choose whether the changes should apply to the entire frame set.
        </figcaption>
      </figure>

      <h3>Create the Alternate Bid</h3>

      <div className="lessonText">
        <p>
          After all required changes are complete, select the green{" "}
          <strong>Create Alternate Bid</strong> button at the bottom of the
          screen.
        </p>
      </div>

      <figure style={{ maxWidth: "520px", margin: "28px auto 0", textAlign: "center" }}>
        <img src={image05} alt="Create Alternate Bid button" style={{ width: "100%", borderRadius: "16px" }} />
        <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
          Create the duplicated project after all settings are complete.
        </figcaption>
      </figure>

      <h3>Allow the Project to Process</h3>

      <div className="lessonText">
        <p>
          The screen may flash several times while the software resaves every
          frame and applies the alternate system.
        </p>

        <p>
          Larger projects may display multiple replacement or project-change
          popups. Review each message before accepting it, especially if the
          replacement part looks different from the original.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not interrupt the processing.</strong>
        <p>
          Wait until the program returns to the project screen and the new
          project appears in the All Projects list.
        </p>
      </div>

      <h3>Verify the Alternate Project</h3>

      <div className="lessonText">
        <p>
          Open <strong>Lesson 10 Alternate Bid</strong> and compare it with the
          original Lesson 7 Training Project.
        </p>

        <p>
          Confirm that the frame width, height, panel count, row count, door
          location, and member layout remained unchanged.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Required Verification</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> Project name is Lesson 10 Alternate Bid.</label>
          <label><input type="checkbox" /> Width remains 180 inches.</label>
          <label><input type="checkbox" /> Height remains 115 inches.</label>
          <label><input type="checkbox" /> Panel and row layout matches the original.</label>
          <label><input type="checkbox" /> Door location matches the original.</label>
          <label><input type="checkbox" /> Vendor or metal group changed as intended.</label>
        </div>
      </div>

      <h3>Independent Challenge</h3>

      <div className="lessonText">
        <p>
          Create one additional alternate bid without reviewing the previous
          page. Use a different installed metal group and give the new project a
          clear name.
        </p>

        <p>
          When finished, compare the original and both alternate projects in the
          All Projects list.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Lesson 10 Complete</p>
        <h3 style={{ marginTop: 0 }}>You have completed the Frame Builder module</h3>
        <div className="takeawayGrid">
          <div><strong>✓</strong>Locate and configure splice tools</div>
          <div><strong>✓</strong>Use editor tools and shortcuts</div>
          <div><strong>✓</strong>Create an alternate project</div>
          <div><strong>✓</strong>Verify geometry after system changes</div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-10-alternate-bid"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Return to Curriculum
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
