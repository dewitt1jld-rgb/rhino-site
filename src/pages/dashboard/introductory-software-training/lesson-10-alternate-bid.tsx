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

const image01 =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/alternate_bid.png";

const image02 =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/L-29.png";

const image03 =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/frame_selection_alt_bid.png";

export default function LessonTenAlternateBidPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="10"
      lessonTitle="Mastering the Frame Builder"
      lessonDescription="Use advanced frame tools, set splice locations, review shortcuts, and create an alternate bid from the training project."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Create an Alternate Bid</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Use the current training Project to create
        a new project in oldcastle.
      </div>

      <h3>What the Alternate Bid Tool Does</h3>

      <div className="lessonText">
        <p>
          Alternate Bid quickly duplicates a project into another vendor or
          metal group. This allows pricing and system options to be compared
          without rebuilding the job from the beginning.
        </p>    
        
        <p>
          To get the the ALT BID screen, 
          save and close the current project and navigate back to the 
          software home page by pressing the small red X's on the frame and project screens. 
        </p>


      </div>

      <h3>Select the Training Project</h3>

      <div className="lessonText">
        <p>
          Return to the All Projects screen and select the project we created over the last few lessons. 
        </p>

        <p>
          Once the project is highlighted, select <strong>Alternate Bid</strong>.
          Enter the new project name shown below.
        </p>
      </div>

            <figure style={{ maxWidth: "720px", margin: "28px auto 0", textAlign: "center" }}>
        <img src={image01} alt="Alternate Bid menu location" style={{ width: "100%", borderRadius: "16px" }} />
        <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
          Alternate Bid is located beneath the All Projects area.
        </figcaption>
      </figure>


      <div className="sectionBox">
        <p className="sectionLabel">Alternate Project Name</p>
        <h3 style={{ marginTop: 0 }}>Lesson 10 Alternate Bid</h3>
      </div>


<figure
  style={{
    textAlign: "center",
    margin: "32px 0",
  }}
>
  <img
    src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/lesson_10_alt_bid.png"
    alt="Lesson 10 Alternate Bid project"
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


</figure>



      <h3>Select the Frame Correctly</h3>

      <div className="lessonText">
        <p>
          In the project tree, click directly on the first frame name. A checked
          box does not automatically mean the frame is selected.
        </p>

        <p>
          The frame name itself should highlight blue and the frame should
          appear in the preview window.
        </p>
      </div>

      <div className="calloutBox">
        <strong>The frame name must highlight blue.</strong>
        <p>
          Do not continue until the frame itself is selected and visible in the
          preview.
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
        <figure style={{ flex: "0 1 360px", margin: 0, textAlign: "center" }}>
          <img src={image02} alt="Alternate Bid frame selection tree" style={{ width: "100%", maxWidth: "340px", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            Click directly on the frame name.
          </figcaption>
        </figure>

        <figure style={{ flex: "1 1 520px", maxWidth: "720px", margin: 0, textAlign: "center" }}>
          <img src={image03} alt="Alternate Bid editor screen" style={{ width: "100%", borderRadius: "16px" }} />
          <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
            The selected frame appears in the Alternate Bid editor.
          </figcaption>
        </figure>
      </div>

      <h3>Choose the Alternate System</h3>

      <div className="lessonText">
        <p>
          Use the editor on the right to change the vendor and metal group.
          Leave the frame size and geometry unchanged.
        </p>

        <p>
          Choose an alternate metal vendor and metal group that are installed in your
          database. When doing alternate bids try not to mix storefront and curtain wall.
          If you started with a curtain wall frame, use alternate bid to tansition to a 
          diffrent curtain wall system in a diffrent vendor. 
        </p>

        <p>This is why we use the Frame Set name to divide curtain wall and storefront frames.</p>
      </div>

      <div className="calloutBox">
        <strong>How to change multiple frames at once.</strong>
        <p>
          If you make a change to a single frame and there are additional frames listed under that same frame set name,
          you will be prompted with the question below. Say yes and the program will automatically apply your changes across all of your frames in the frame set.
        </p>

             <p>
         Once you have changed the vendor and metal groups on the frames you wanted to change,
         press the "Create Alternate Bid" button at the bottom of the screen. 
        </p>

                     <p>
        It may ask you a few questions about certain framing members. 
        Click yes to any pop ups and, when finished, you should see your new alternate bid in the main projects list. 
        </p>
      </div>

      <figure
  style={{
    textAlign: "center",
    margin: "32px 0",
  }}
>
  <img
    src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/all_frames_in_frameset.png"
    alt="Lesson 10 Alternate Bid project"
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



 <h3>Why Change Metal Groups?</h3>

      <div className="lessonText">
        <p>
          At this point in the lessons we have not discussed the value of metal groups so this may be a bit confusing. 
          For now, just understand that alternate bid is a quick way to take an entire project built under Oldcastle and move it to 
          tubelite or any other metal vendor. The value of this will be more apparent as we continue on with the lessons. 
        </p>
        </div>

</figure>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> I found the Alt Bid  screen.</label>
          <label><input type="checkbox" /> I changed metal vendors .</label>
          <label><input type="checkbox" />I changed at least 1 frame to a diffrent metal group.</label>
          <label><input type="checkbox" /> I can see my new alt bid project in the main project screen.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-10-splices-tools"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-10-verify-alternate"
          className="primary"
        >
          Next: Process & Verify →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
