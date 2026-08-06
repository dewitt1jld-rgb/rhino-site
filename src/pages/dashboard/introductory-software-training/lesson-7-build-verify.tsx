import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Create the Training Project", href: "/dashboard/introductory-software-training/lesson-7-create-project" },
  { number: 2, title: "Enter the Frame Settings", href: "/dashboard/introductory-software-training/lesson-7-frame-settings" },
  { number: 3, title: "Build and Verify the Frame", href: "/dashboard/introductory-software-training/lesson-7-build-verify" },
];

const img = {
  addFrameButton: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-05-add-frame-button.png",
  frameAdded: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-06-frame-added.png",
  editorToolbar: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-13-editor-toolbar.png",
  frameInfo: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-14-frame-info.png",
};

export default function LessonSevenBuildVerifyPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="07"
      lessonTitle="Building Your First Frame"
      lessonDescription="Create a guided training project and build your first storefront frame using the same settings shown throughout the lesson."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Build and Verify the Frame</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Add the configured frame, inspect the completed
        result, and practice selecting openings and framing members.
      </div>

      <h3>Add the Frame</h3>
      <div className="lessonText">
        <p>
          Review the settings one final time. When everything matches, select
          the green <strong>Add Frame</strong> button.
        </p>
      </div>

      <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "28px" }}>
        <figure style={{ flex: "0 1 180px", margin: 0, textAlign: "center" }}>
          <img src={img.addFrameButton} alt="Add Frame button" style={{ display: "block", width: "100%", maxWidth: "120px", margin: "0 auto" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            Select Add Frame.
          </figcaption>
        </figure>

        <figure style={{ flex: "1 1 520px", maxWidth: "760px", margin: 0, textAlign: "center" }}>
          <img src={img.frameAdded} alt="Completed frame added to the project" style={{ display: "block", width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            The completed frame should contain four panels and two rows.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox">
        <strong>Your frame should contain eight glass openings.</strong>
        <p>
          Four panels multiplied by two rows creates eight primary openings.
          If yours does not match, return to Step 2.
        </p>
      </div>

      <h3>Practice Selecting Glass Openings</h3>
      <div className="lessonText">
        <p>
          Click several different glass openings and watch the information on
          the right side change. Do not edit any values yet.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Practice</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> Select the lower-left opening.</label>
          <label><input type="checkbox" /> Select the upper-right opening.</label>
          <label><input type="checkbox" /> Select a middle opening.</label>
          <label><input type="checkbox" /> Watch the right-side information change.</label>
        </div>
      </div>

      <h3>Practice Selecting Framing Members</h3>
      <div className="lessonText">
        <p>
          Select a head, sill, jamb, intermediate vertical, and intermediate
          horizontal. Each selected member should highlight.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Practice</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> Select the head.</label>
          <label><input type="checkbox" /> Select the sill.</label>
          <label><input type="checkbox" /> Select a jamb.</label>
          <label><input type="checkbox" /> Select an intermediate vertical.</label>
          <label><input type="checkbox" /> Select an intermediate horizontal.</label>
          <label><input type="checkbox" /> Confirm the selected stick highlights.</label>
        </div>
      </div>

      <h3>Editor and Frame Information Tools</h3>
      <div className="lessonText">
        <p>
          The editor toolbar helps you move, zoom, and inspect larger frames.
          The frame-information tools show information for the current project,
          frame, opening, or selected member.
        </p>
      </div>

      <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap", marginTop: "28px" }}>
        <figure style={{ flex: "1 1 360px", maxWidth: "470px", margin: 0, textAlign: "center" }}>
          <img src={img.editorToolbar} alt="Glazier Studio editor toolbar" style={{ width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>Frame editor toolbar.</figcaption>
        </figure>
        <figure style={{ flex: "1 1 360px", maxWidth: "470px", margin: 0, textAlign: "center" }}>
          <img src={img.frameInfo} alt="Glazier Studio frame information tools" style={{ width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>Frame information tools.</figcaption>
        </figure>
      </div>

      <h3>Save the Project</h3>
      <div className="calloutBox">
        <strong>Glazier Studio does not automatically save every change.</strong>
        <p>
          Save the project before leaving the frame. Continue using this same
          project in Lessons 8–10.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Independent Practice</p>
        <div className="takeawayGrid">
          <div><strong>Catalog</strong>Oldcastle</div>
          <div><strong>Metal Group</strong>FG-3000-T CS/SS/OG</div>
          <div><strong>Panels × Rows</strong>4 × 2</div>
          <div><strong>Frame Size</strong>180 inches × 115 inches</div>
        </div>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Lesson 07 Complete</p>
        <h3 style={{ marginTop: 0 }}>You built your first frame</h3>
        <div className="takeawayGrid">
          <div><strong>✓</strong>Create a training project</div>
          <div><strong>✓</strong>Select a catalog and metal group</div>
          <div><strong>✓</strong>Enter basic frame settings</div>
          <div><strong>✓</strong>Build and inspect a frame</div>
        </div>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training/lesson-7-frame-settings" className="secondary">
          ← Previous
        </Link>
        <Link href="/dashboard/introductory-software-training" className="primary">
          Return to Curriculum
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
