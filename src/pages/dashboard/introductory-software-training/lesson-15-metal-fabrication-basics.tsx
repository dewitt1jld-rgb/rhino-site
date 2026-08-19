import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Metal Fabrication Basics",
    href: "/dashboard/introductory-software-training/lesson-15-metal-fabrication-basics",
  },
  {
    number: 2,
    title: "Fabrication Modifications",
    href: "/dashboard/introductory-software-training/lesson-15-fabrication-modifications",
  },
];

const img = {
  main:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-01-main-screen.png",

  importButton:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-02-import.png",

  selectJob:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-03-select-job.png",

  existing:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-05-existing.png",

  newName:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-06-new-name.png",

  data:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-07-metal-fab-main.png",

  previewFrames:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-08-preview-frames.png",

  stickIds:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-09-stick-ids.png",

    metalFab:
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_15/metal_fab.png",
};

export default function LessonFifteenMetalFabricationBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="15"
      lessonTitle="Introduction to Metal Fabrication"
      lessonDescription="Learn how to navigate the Metal Fabrication screen, understand how projects are imported, and identify the information used to prepare a job for fabrication."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 2</p>

      <h2>Metal Fabrication Basics</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Become familiar with the Metal Fabrication
        screen and understand how project frames are converted into individual
        parts ready for fabrication.
      </div>

      <div className="calloutBox">
        <strong>Save your work before continuing.</strong>

        <p>
          Go ahead and press <strong>OK</strong> and exit the Metal Group
          screens we have been working in.
        </p>

        <p>
          If Glazier Studio asks whether you want to save your changes, make
          sure you save everything we completed in the previous lessons.
        </p>
      </div>

      <div className="calloutBox">
        <strong>This section is only an introduction.</strong>

        <p>
          We are not going to make any changes to our training project in this
          section.
        </p>

        <p>
          For now, I just want you to understand how the Metal Fabrication
          screen is organized and what the major areas of the screen are used
          for.
        </p>

        <p>
          We will import and make changes to our frames in lesson 16.
        </p>
      </div>

      <h3>Open Metal Fabrication</h3>

      <div className="lessonText">
        <p>
          In Glazier Studio, look at the menu on the left-hand side of the
          program and find the tab labeled{" "}
          <strong>Metal Fabrication</strong>.
        </p>

        <p>
          Click that option to open the Metal Fabrication screen.
        </p>


<figure
  style={{
    textAlign: "center",
    margin: "32px 0",
  }}
>
  <img
    src={img.metalFab}
    alt="Metal Fabrication option in Glazier Studio"
    style={{
      width: "100%",
      maxWidth: "700px",
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
    Select Metal Fabrication from the left-hand menu to open the Metal
    Fabrication screen.
  </figcaption>
</figure>



      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.main}
          alt="Metal Fabrication main screen"
        />

        <figcaption>
          The Metal Fabrication screen contains the parts, dimensions,
          fabrications, angles, quantities, and other information used to
          prepare a project for production.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The image above only shows a portion of the Metal Fabrication screen.
          The full page contains a large amount of information and many
          different options.
        </p>

        <p>
          This is one of my favorite screens in the software because it gives
          you a huge amount of information about what is actually going to
          happen to each piece of metal.
        </p>

        <p>
          It can look overwhelming at first, but we are going to break it down
          into smaller pieces.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Think of Metal Fabrication as the final review screen.</strong>

        <p>
          The Frame Builder tells the program what the finished frame should
          look like.
        </p>

        <p>
          The Metal Fabrication screen takes that frame and breaks it down into
          the individual sticks that actually need to be cut and fabricated.
        </p>
      </div>

      <h3>How Do Projects Get Into Metal Fabrication?</h3>

      <div className="lessonText">
        <p>
          Before a project can appear in Metal Fabrication, you must first have
          one or more frames built in the Projects / Frame Builder section.
        </p>

        <p>
          Once those frames exist, you can bring them into Metal Fabrication by
          clicking <strong>Import Project</strong>.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.importButton}
          alt="Import Project button in Metal Fabrication"
          style={{
            width: "100%",
            maxWidth: "420px",
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
          Use Import Project to bring completed project frames into Metal
          Fabrication.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Clicking Import Project opens a list of the completed frames in your
          project.
        </p>

        <p>
          From that list, you can choose which frames you actually want to
          import.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.selectJob}
          alt="Selecting project frames to import into Metal Fabrication"
        />

        <figcaption>
          You do not always have to import every frame in a project.
        </figcaption>
      </figure>

      <h3>You Can Import Only Part of a Project</h3>

      <div className="lessonText">
        <p>
          This becomes useful on larger projects.
        </p>

        <p>
          For example, imagine a project is divided into{" "}
          <strong>East Wall</strong> and <strong>West Wall</strong> frames.
        </p>

        <p>
          If the shop only wants to fabricate the East Wall frames right now,
          you can select only those frames and import them into Metal
          Fabrication.
        </p>

        <p>
          Use the small plus button to select the frames you want included.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Large projects can take a little while to import.</strong>

        <p>
          If you get impatient waiting for the project to merge, look toward
          the bottom-left corner of the screen. There is a progress indicator
          that will show you how far along the import process is.
        </p>
      </div>

      <h3>Importing a Project for the First Time</h3>

      <div className="lessonText">
        <p>
          If this is the first time the project has been imported into Metal
          Fabrication, the program will normally bring the selected frames in
          without asking you any additional questions.
        </p>

        <p>
          Once the import is complete, the job is ready for you to begin
          reviewing.
        </p>
      </div>

      <h3>What Happens If the Job Was Already Imported?</h3>

      <div className="lessonText">
        <p>
          If you import a project that already exists in Metal Fabrication,
          Glazier Studio will recognize that the job name already exists.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          margin: "32px 0",
        }}
      >
        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.existing}
            alt="Existing Metal Fabrication project warning"
            style={{
              width: "100%",
              maxWidth: "850px",
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
            Glazier Studio warns you when the project has already been
            imported.
          </figcaption>
        </figure>

        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.newName}
            alt="Rename imported Metal Fabrication project"
            style={{
              width: "100%",
              maxWidth: "850px",
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
            You can also import the project again under a different name.
          </figcaption>
        </figure>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Re-Import Options</p>

        <div className="takeawayGrid">
          <label>
            <strong>YES</strong> — Replace the existing Metal Fabrication job
            with the newly imported data.
          </label>

          <label>
            <strong>NO</strong> — Keep the existing job and give the new import
            a different name.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>This becomes very useful when making revisions.</strong>

        <p>
          If you change a frame after it has already been imported, you can
          re-import the project and replace the old version.
        </p>

        <p>
          Or, if you want to keep both versions for comparison, give the new
          import a different name.
        </p>
      </div>

      <h3>Understanding the Data Grid</h3>

      <figure className="fullWidthMedia">
        <img
          src={img.data}
          alt="Metal Fabrication data grid"
        />

        <figcaption>
          Each line in the lower portion of Metal Fabrication represents an
          individual part from the imported project.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Once the project is imported, the frames are broken down into
          individual line items.
        </p>

        <p>
          Every stick or part in the project receives its own row and its own{" "}
          <strong>Part ID / Stick ID</strong>.
        </p>

        <p>
          The columns contain information about that individual part, including
          things such as the part number, dimensions, angles, fabrications, and
          other production information.
        </p>

        <p>
          You can expand the columns if you need more room to read the data.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Not every column is equally important.</strong>

        <p>
          Most of the information you will regularly use is toward the left
          side of the grid.
        </p>

        <p>
          For now, I want you to pay the most attention to the columns starting
          around <strong>Part ID</strong> and continuing through the stick-angle
          information.
        </p>

        <p>
          We will come back to specific columns when we begin modifying
          fabrications in the next section.
        </p>
      </div>

      <h3>Stick IDs / Part IDs</h3>

      <div className="lessonText">
        <p>
          <strong>Stick ID</strong> and <strong>Part ID</strong> are two terms
          you may hear used for the same thing.
        </p>

        <p>
          Glazier Studio automatically assigns these IDs when the project is
          processed.
        </p>

        <p>
          These IDs become extremely useful when you are trying to identify one
          specific piece of metal in a large project.
        </p>
      </div>

      <h3>Preview Frame</h3>

      <div className="lessonText">
        <p>
          To see which Stick ID belongs to which physical member in the frame,
          click <strong>Preview Frame</strong> near the upper-right area of the
          Metal Fabrication screen.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.previewFrames}
          alt="Preview Frame button"
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="lessonText">
        <p>
          This opens a visual preview of the frame with the Stick IDs displayed
          on the individual members.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.stickIds}
          alt="Frame preview showing Stick IDs"
        />

        <figcaption>
          Preview Frame connects the rows in the Metal Fabrication grid to the
          actual members in the frame.
        </figcaption>
      </figure>

      <h3>How the IDs Are Labeled</h3>

      <div className="lessonText">
        <p>
          Main framing members are generally identified using a simple number.
        </p>

        <p>
          Additional pieces connected to that main member may use the same
          number followed by an abbreviation.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>6</strong> — Main member / primary stick.
          </label>

          <label>
            <strong>6-FC</strong> — Face Cap associated with Stick 6.
          </label>

          <label>
            <strong>6-PP</strong> — Pressure Plate associated with Stick 6.
          </label>

          <label>
            <strong>6-SC</strong> — Sill Channel associated with Stick 6.
          </label>

          <label>
            <strong>6-HC</strong> — Head Channel associated with Stick 6.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          This is extremely useful when a fabrication is missing or appears to
          be on the wrong stick.
        </p>

        <p>
          Instead of guessing which row in the data grid represents the
          problematic piece, you can use Preview Frame to identify the exact
          Stick ID and then locate that same ID in the grid.
        </p>
      </div>

      <h3>The Basic Metal Fabrication Workflow</h3>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>1.</strong> Build the frame in the Projects screen.
          </label>

          <label>
            <strong>2.</strong> Open Metal Fabrication.
          </label>

          <label>
            <strong>3.</strong> Import the project or selected frames.
          </label>

          <label>
            <strong>4.</strong> Glazier Studio breaks the frames into individual
            parts.
          </label>

          <label>
            <strong>5.</strong> Review the parts, sizes, angles, quantities, and
            fabrications.
          </label>

          <label>
            <strong>6.</strong> Identify problems using the data grid and
            Preview Frame.
          </label>

          <label>
            <strong>7.</strong> Make any required corrections before sending the
            job to production.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Do not modify anything yet.</strong>

        <p>
          For this section, simply click around the Metal Fabrication screen,
          look through the imported-job controls, data grid, and Preview Frame
          screen so you understand where everything is located.
        </p>

        <p>
          In the next section, we will begin opening individual fabrication
          operations and making manual changes.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 15.1 Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I know where to open Metal Fabrication.
          </label>

          <label>
            <input type="checkbox" /> I understand how Import Project works.
          </label>

          <label>
            <input type="checkbox" /> I understand that individual frames can
            be selected during import.
          </label>

          <label>
            <input type="checkbox" /> I understand what happens when an existing
            job is re-imported.
          </label>

          <label>
            <input type="checkbox" /> I understand that every project member
            becomes an individual line item.
          </label>

          <label>
            <input type="checkbox" /> I understand Stick ID and Part ID refer to
            the individual members.
          </label>

          <label>
            <input type="checkbox" /> I know how to use Preview Frame to match a
            Stick ID to a physical member.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-14-create-weep-holes"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-15-fabrication-modifications"
          className="primary"
        >
          Next: Fabrication Modifications →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}