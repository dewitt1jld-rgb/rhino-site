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
  previousHref="/dashboard/introductory-software-training/lesson-7-frame-settings"
  previousLabel="← Previous: Enter Frame Settings"
  nextHref="/dashboard/introductory-software-training/lesson-8-add-door"
  nextLabel="Lesson 8: Add a Door →"
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

<div className="calloutBox">
  <strong>Tip: Click outside the frame to clear your selections.</strong>

  <p>
    If you have multiple items selected and want to deselect everything at
    once, click in the blank white area outside of the frame.
  </p>

  <p>
    Clicking an opening again after it has already been selected can leave the
    frame looking visually inconsistent. Clicking outside the frame is the
    cleanest and most reliable way to clear all active selections.
  </p>
</div>

      <div className="takeawayBox">
        <p className="sectionLabel">Practice</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> Select the lower-left opening.</label>
          <label><input type="checkbox" /> Select the upper-right opening.</label>
          <label><input type="checkbox" /> De-select items by clicking outside the frame.</label>
          <label><input type="checkbox" /> Watch the right-side information change when items are selected.</label>
        </div>
      </div>

      <h3>Practice Selecting Framing Members</h3>
      <div className="lessonText">
        <p>
          Select a head, sill, jamb, intermediate vertical, and intermediate
          horizontal. Each selected member should highlight and youll notice the information on the right matches the stick you clicked on. 
        </p>
      </div>

      <div className="calloutBox">
  <strong>Tip: Click outside the frame to clear your selections.</strong>

  <p>
    If you have multiple items selected, the information on the right 
    will only portray the info for the first item you clicked. Before 
    selecting multiple diffrent members, click the blank white are outside of the frame to reset the items already selected. 
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
          <label><input type="checkbox" /> Notice the properties on the right change when selecting diffrent sticks.</label>
        </div>
      </div>

     <h3>Editor Toolbar</h3>

<div className="lessonText">
  <p>
    The editor toolbar helps you move, zoom, and inspect larger frames. These
    tools are especially helpful when the frame is too large to fit comfortably
    on the screen.
  </p>
</div>

<figure
  style={{
    maxWidth: "560px",
    margin: "28px auto 40px",
    textAlign: "center",
  }}
>
  <img
    src={img.editorToolbar}
    alt="Glazier Studio editor toolbar"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      display: "block",
      margin: "0 auto",
    }}
  />

  <figcaption
    style={{
      marginTop: "10px",
      color: "rgba(255,255,255,.55)",
    }}
  >
    The frame editor toolbar contains controls for selecting, focusing,
    orbiting, zooming, panning, and viewing frame information.
  </figcaption>
</figure>

<h3>Frame Information Toolbar</h3>

<div className="lessonText">
  <p>
    The Frame Information toolbar contains several important project and
    frame-management tools. Some of these buttons affect only the frame
    currently displayed, while others allow you to create, save, copy, or move
    between frames.
  </p>
</div>

<figure
  style={{
    maxWidth: "620px",
    margin: "28px auto",
    textAlign: "center",
  }}
>
  <img
    src={img.frameInfo}
    alt="Glazier Studio frame information toolbar"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      display: "block",
      margin: "0 auto",
    }}
  />

  <figcaption
    style={{
      marginTop: "10px",
      color: "rgba(255,255,255,.55)",
    }}
  >
    The Frame Information toolbar is used to create, save, copy, reset, and
    navigate between frames.
  </figcaption>
</figure>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    marginTop: "28px",
  }}
>
  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 1</p>
    <h3 style={{ marginTop: 0 }}>New Frame</h3>

    <div className="lessonText">
      <p>
        The first icon creates a new frame without requiring you to return to
        the main project screen.
      </p>

      <p>
        This is the quickest way to begin another frame while remaining inside
        the current project.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 2</p>
    <h3 style={{ marginTop: 0 }}>Save</h3>

    <div className="lessonText">
      <p>
        Glazier Studio and PartnerPak do not automatically save your frame
        progress.
      </p>

      <p>
        This icon is the primary way to save the project after building or
        modifying a frame. If you exit without saving, any unsaved changes may
        be lost.
      </p>
    </div>

    <div className="calloutBox">
      <strong>Save frequently.</strong>
      <p>
        Make a habit of selecting Save after every major frame change.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 3</p>
    <h3 style={{ marginTop: 0 }}>Copy Frame</h3>

    <div className="lessonText">
      <p>
        This option starts a new frame using the settings from the current
        frame.
      </p>

      <p>
        In practice, this tool is not always necessary because selecting New
        Frame generally leaves the previous frame settings in place. As a
        result, creating a new frame often works very similarly to copying the
        current one.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 4</p>
    <h3 style={{ marginTop: 0 }}>Screenshot</h3>

    <div className="lessonText">
      <p>
        This icon creates an image of the frame currently displayed in the
        editor.
      </p>

      <p>
        It can be useful when you need to capture the frame layout for review,
        documentation, training, or communication with another person.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 5</p>
    <h3 style={{ marginTop: 0 }}>Reset Panels and Rows</h3>

    <div className="lessonText">
      <p>
        This tool resets the frame back to the condition it was in when it was
        first created.
      </p>

      <p>
        It is useful when a frame has become too complicated, a member will not
        move correctly, or the editing process has reached a point where
        starting over is easier than continuing to troubleshoot the current
        condition.
      </p>
    </div>

    <div className="calloutBox">
      <strong>This will remove your frame edits.</strong>
      <p>
        Losing progress is never ideal, but sometimes resetting the frame is
        faster and cleaner than fighting a member that will not behave as
        expected.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icons 6 and 7</p>
    <h3 style={{ marginTop: 0 }}>Previous and Next Frame</h3>

    <div className="lessonText">
      <p>
        These arrows move backward and forward between frames in the current
        project.
      </p>

      <p>
        They only become useful when the project contains multiple frames.
      </p>
    </div>
  </section>

  <section className="sectionBox" style={{ marginTop: 0 }}>
    <p className="sectionLabel">Icon 8</p>
    <h3 style={{ marginTop: 0 }}>Help</h3>

    <div className="lessonText">
      <p>
        This icon doesn't work...
      </p>

      <p>
        This is exactly why I built the Rhino Wrangler Academy
      </p>
    </div>
  </section>
</div>

      <h3>Save the Project</h3>
      <div className="calloutBox">
        <strong>Glazier Studio does not automatically save every change.</strong>
        <p>
          Save the project before leaving the frame. Continue using this same
          project in Lessons 8–10.
        </p>
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


    </AcademyLessonLayout>
  );
}
