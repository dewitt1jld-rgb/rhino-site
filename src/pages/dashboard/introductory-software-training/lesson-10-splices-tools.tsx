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
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/short_cut_keys_page.png",
  subsill:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/bottom_right_settings.png",
};

const spliceVideo =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/set_splice_locations.mp4";

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
        <strong>For this lesson we are going to build a new frame and go over a few curtain wall tricks.</strong>
        <p>
          To start a new frame, save your current project and click the "new page" icon in the top right hand corner.
</p>
          <p>
          OR you can press the small red X on the frame builder and return to the main frame list. 
          From here click the new page icon and start filling out the information on the right using the image below. 
        </p>
      </div>
<h3>Need a Refresher?</h3>

<div className="lessonText">
  <p>
    If you need a refresher on creating a new frame, return to{" "}
    <strong>Lesson 7 - Create the Training Project</strong> and follow the
    same setup process before continuing.
  </p>

  <p>
    Use the settings shown below to create your new frame. Once your frame has
    been created, return to this lesson and continue with the curtain wall
    exercises.
  </p>
</div>

<figure
  style={{
    textAlign: "center",
    margin: "32px 0",
  }}
>
  <img
    src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/curtain_wall_settings.png"
    alt="Curtain wall training frame settings"
    style={{
      width: "700px",
      maxWidth: "100%",
      height: "auto",
      display: "block",
      margin: "0 auto",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,.12)",
    }}
  />

  <figcaption
    style={{
      marginTop: "10px",
      color: "rgba(255,255,255,.6)",
    }}
  >
    Use these settings to create the curtain wall training frame before
    continuing.
  </figcaption>
</figure>

<div className="calloutBox">
  <strong>Have all the setting entered?</strong>
  <p>
    Press "ADD FRAME" and continue on to adding splice locations. 
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
          Start by selecting the vertical members, and use
          the Set Splice Location command. This can be found under the Curtain wall settings tab. 
           The software can define up to three
          splice locations on a vertical stick and may also include splice gaps or face-cap offsets.
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
        <strong>Splice Settings:</strong>
        <p>
          For now, Leave all of the diffrent splice settings alone, feel free to look and see what the options are but for training we do not need to make any changes.  
        </p>
      </div>



      <div className="calloutBox">
        <strong>Training note:</strong>
        <p>
          Depending on the frame color, splice locations can be hard to see. By clicking on the member again you can see where the stick was split. 
        </p>
      </div>

      <h3>Useful Keyboard Shortcuts</h3>

      <figure className="fullWidthMedia">
        <img src={img.shortcutKeys} alt="Glazier Studio shortcut keys" />
        <figcaption>
          Review the available shortcut keys and practice the ones used most
          often in the frame editor.
        </figcaption>
      </figure>

      <div className="lessonText">
  <p>
    Watch the video below to see the most commonly used keyboard shortcuts in
    action. These shortcuts can significantly speed up frame editing once they
    become second nature.
  </p>
</div>

<video
  controls
  preload="metadata"
  style={{
    display: "block",
    width: "100%",
    maxWidth: "760px",
    margin: "28px auto",
    borderRadius: "16px",
    border: "1px solid rgba(245, 158, 11, 0.22)",
    background: "#000",
  }}
>
  <source
    src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/short_cut_keys.mp4"
    type="video/mp4"
  />
</video>

<div className="calloutBox">
  <strong>Practice these shortcuts as you watch.</strong>
  <p>
    For now, ignore the short cut keys that start with an "F". We will use those in later lessons. 
  </p>
</div>

      <h3>BOM - Bill of Materials</h3>

      <div className="lessonText">
        <p>
          Another usefull button is found in the bottom right hand corner of the program. 
        </p>

        <p>
          By clicking on BOM you can see all of the components getting picked up on this frame. 
          This is a great double check to make sure you arnt forgetting anything. 
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
          <label><input type="checkbox" /> I looked at the BOM and material list.</label>
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
