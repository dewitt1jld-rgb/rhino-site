import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Create the Training Project", href: "/dashboard/introductory-software-training/lesson-7-create-project" },
  { number: 2, title: "Enter the Frame Settings", href: "/dashboard/introductory-software-training/lesson-7-frame-settings" },
  { number: 3, title: "Build and Verify the Frame", href: "/dashboard/introductory-software-training/lesson-7-build-verify" },
];

const img = {
  mainScreen: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-02-main-screen.png",
  frameBuilder: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-03-frames-builder.png",
  notInstalled: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-01-not-installed.png",
};

const vendorVideo =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-01-vendor.mp4";

export default function LessonSevenCreateProjectPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="07"
      lessonTitle="Building Your First Frame"
      lessonDescription="Create a guided training project and build your first storefront frame using the same settings shown throughout the lesson."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Create the Training Project</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Open Glazier Studio, select the correct catalog,
        and create the training project that will be used throughout Lessons 7–10.
      </div>

      <div className="calloutBox">
        <strong>Work inside your own copy of the program.</strong>
        <p>
          Keep Glazier Studio open beside this training page and complete each
          action before moving to the next step.
        </p>
      </div>

      <h3>Before Building Frames</h3>
      <div className="lessonText">
        <p>
          Normally, before building frames, I would configure a metal group so
          that the frame contains all of the components required for the project.
          Because this is training and metal-group configuration is a more
          advanced topic, we will skip that process for now and move directly
          into building a frame.
        </p>
        <p>
          Everyone will use the same catalog, metal group, colors, and frame
          dimensions so your screen can be compared directly with the examples.
        </p>
      </div>

      <h3>Open Glazier Studio</h3>
      <div className="lessonText">
        <p>
          Launch Glazier Studio and wait for the main screen to load. The left
          side moves between software areas, the center displays projects and
          frames, and the right side contains project and frame settings.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.mainScreen} alt="Main Glazier Studio screen" />
        <figcaption>The main Glazier Studio project screen.</figcaption>
      </figure>

      <h3>Select the Training Catalog</h3>
      <div className="lessonText">
        <p>
          Locate the <strong>Catalog</strong> dropdown near the top-right corner
          of the program. Open it and select <strong>Oldcastle</strong>.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Required Catalog</p>
        <h3 style={{ marginTop: 0 }}>Oldcastle</h3>
        <p className="bodyText">
          Do not continue until Oldcastle is visible in the Catalog field.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        src={vendorVideo}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "620px",
          margin: "28px auto",
          borderRadius: "16px",
          border: "1px solid rgba(245, 158, 11, 0.22)",
        }}
      />

      <div className="calloutBox">
        <strong>Catalog error?</strong>
        <p>
          If Oldcastle produces a catalog-not-installed message, contact
          DeMichele Group support or your company administrator before continuing.
        </p>
      </div>

      <figure style={{ maxWidth: "520px", margin: "28px auto 0", textAlign: "center" }}>
        <img
          src={img.notInstalled}
          alt="Catalog not installed message"
          style={{ display: "block", width: "100%", borderRadius: "16px" }}
        />
        <figcaption style={{ marginTop: "10px", color: "rgba(255,255,255,.55)" }}>
          Example of a catalog-not-installed message.
        </figcaption>
      </figure>

      <h3>Create the Training Project</h3>
      <div className="lessonText">
        <p>
          Start a new project and enter the project name exactly as shown below.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Project Name</p>
        <h3 style={{ marginTop: 0 }}>Lesson 7 Training Project</h3>
        <p className="bodyText">
          Additional fields may be completed if your company requires them, but
          the project name is the only field required for this exercise.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.frameBuilder} alt="Glazier Studio project builder" />
        <figcaption>
          Enter the project name, then select the green Create Project button.
        </figcaption>
      </figure>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> Glazier Studio is open.</label>
          <label><input type="checkbox" /> The selected catalog is Oldcastle.</label>
          <label><input type="checkbox" /> The project is named Lesson 7 Training Project.</label>
          <label><input type="checkbox" /> The project has been created successfully.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training" className="secondary">
          ← Course List
        </Link>
        <Link href="/dashboard/introductory-software-training/lesson-7-frame-settings" className="primary">
          Next: Enter Frame Settings →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
