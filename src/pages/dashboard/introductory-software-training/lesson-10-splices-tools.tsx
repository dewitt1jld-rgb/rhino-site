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

const img = {
  editorToolbar:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-13-editor-toolbar.png",
  frameInfo:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-14-frame-info.png",
  shortcutKeys:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-23-short-cut-keys.png",
  subsill:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-24-subsill.png",
};

const spliceVideo =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-06-set-splice-locations.mp4";

export default function LessonTenSplicesToolsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="10"
      lessonTitle="Mastering the Frame Builder"
      lessonDescription="Use advanced frame tools, set splice locations, review shortcuts, and create an alternate bid from the training project."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Splices, Tools & Shortcuts</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Set a splice location, review the editor tools,
        and understand where certain frame-related settings are controlled.
      </div>

      <div className="calloutBox">
        <strong>Use a clean copy of the Lesson 7 Training Project.</strong>
        <p>
          If Lesson 9 changed the frame significantly, reopen or duplicate the
          clean version you saved before the crippled-header exercise.
        </p>
      </div>

      <h3>Set Splice Locations</h3>

      <div className="lessonText">
        <p>
          Taller frames may require vertical splices because the required member
          length exceeds the available stock length or because the project
          drawings specify a field splice.
        </p>

        <p>
          Open the Curtain Wall settings, select the vertical members, and use
          the Set Splice Location command. The software can define up to three
          splice locations and may also include splice gaps or face-cap offsets.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        src={spliceVideo}
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
        <strong>Training note:</strong>
        <p>
          The 115-inch frame created in Lesson 7 may not require a real splice.
          This exercise is intended to teach where the tool is located and how
          the selection process works.
        </p>
      </div>

      <h3>Editor and Frame Information Tools</h3>

      <div className="lessonText">
        <p>
          The toolbar below the frame provides tools for moving, zooming,
          selecting, and inspecting the frame. The information tools display
          data for the current project, frame, opening, or selected member.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginTop: "28px",
        }}
      >
        <figure style={{ flex: "1 1 360px", maxWidth: "470px", margin: 0, textAlign: "center" }}>
          <img src={img.editorToolbar} alt="Glazier Studio editor toolbar" style={{ width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            Frame editor toolbar.
          </figcaption>
        </figure>

        <figure style={{ flex: "1 1 360px", maxWidth: "470px", margin: 0, textAlign: "center" }}>
          <img src={img.frameInfo} alt="Glazier Studio frame information tools" style={{ width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            Frame information tools.
          </figcaption>
        </figure>
      </div>

      <h3>Useful Keyboard Shortcuts</h3>

      <figure className="fullWidthMedia">
        <img src={img.shortcutKeys} alt="Glazier Studio shortcut keys" />
        <figcaption>
          Review the available shortcut keys and practice the ones used most
          often in the frame editor.
        </figcaption>
      </figure>

      <h3>Sill Channel Height</h3>

      <div className="lessonText">
        <p>
          Sill-channel height cannot be changed directly inside the frame
          editor. The value is controlled through the associated catalog part.
        </p>

        <p>
          To change it, open the Catalog Parts screen, locate the sill channel,
          and adjust the required dimension on the part itself.
        </p>
      </div>

      <figure style={{ maxWidth: "520px", margin: "28px auto 0", textAlign: "center" }}>
        <img src={img.subsill} alt="Sill channel height example" style={{ width: "100%", borderRadius: "16px" }} />
        <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
          Example of the sill-channel setting controlled through Catalog Parts.
        </figcaption>
      </figure>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> I located the splice settings.</label>
          <label><input type="checkbox" /> I reviewed the editor toolbar.</label>
          <label><input type="checkbox" /> I reviewed the shortcut-key list.</label>
          <label><input type="checkbox" /> I understand sill-channel height is controlled through Catalog Parts.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-9-crippled-header"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-10-alternate-bid"
          className="primary"
        >
          Next: Alternate Bid →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
