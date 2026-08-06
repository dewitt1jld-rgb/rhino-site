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
  addDoorLeft:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-07-add-door-left.png",
  addDoorRight:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-08-add-door-right.png",
};

export default function LessonEightAddDoorPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="08"
      lessonTitle="Modifying Frames & Members"
      lessonDescription="Continue working in the Lesson 7 training project by adding a door, changing DLO sizes, and modifying framing members."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Add a Door</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Open the frame from Lesson 7 and add a door to
        the correct glass opening before making other frame changes.
      </div>

      <div className="calloutBox">
        <strong>Continue using your Lesson 7 Training Project.</strong>
        <p>
          Open the same project and frame you created in Lesson 7. Do not start
          a new project for this lesson.
        </p>
      </div>

      <h3>Why Doors Should Be Added Early</h3>

      <div className="lessonText">
        <p>
          When a frame includes a door, it is usually best to place the door
          before adjusting DLO sizes or making additional member changes.
        </p>

        <p>
          Adding the door first allows the software to create the required door
          jambs, header, transom condition, and related framing members before
          the surrounding openings are resized.
        </p>
      </div>

      <h3>Select the Door Opening</h3>

      <div className="lessonText">
        <p>
          In the frame editor, locate the <strong>second lower glass opening
          from the left</strong>. This is where the training door will be
          placed.
        </p>

        <p>
          Click the opening once so it is selected. Then right-click inside the
          same opening to display the available frame-editing commands.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Training Door Location</p>
        <h3 style={{ marginTop: 0 }}>Lower row — second opening from the left</h3>
        <p className="bodyText">
          Confirm the correct opening is selected before choosing a door type.
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
        <figure
          style={{
            flex: "1 1 300px",
            maxWidth: "420px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.addDoorLeft}
            alt="Door tools in Glazier Studio"
            style={{
              width: "100%",
              maxWidth: "280px",
              borderRadius: "16px",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.55)",
            }}
          >
            Select the target opening and open the door tools.
          </figcaption>
        </figure>

        <figure
          style={{
            flex: "1 1 300px",
            maxWidth: "420px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.addDoorRight}
            alt="Insert door menu in Glazier Studio"
            style={{
              width: "100%",
              maxWidth: "280px",
              borderRadius: "16px",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.55)",
            }}
          >
            Choose the required door from the insert-door menu.
          </figcaption>
        </figure>
      </div>

      <h3>Insert the Training Door</h3>

      <div className="lessonText">
        <p>
          From the right-click menu, choose the standard single-door option
          available in your software database.
        </p>

        <p>
          Door names may vary slightly between company databases. For this
          lesson, use a basic single door without adding custom hardware or
          advanced door-package settings.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not configure door hardware yet.</strong>
        <p>
          Door hardware, library fabrications, door preparations, and complete
          door packages will be covered later in the course.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I opened the Lesson 7 Training Project.
          </label>

          <label>
            <input type="checkbox" /> I selected the second lower opening from
            the left.
          </label>

          <label>
            <input type="checkbox" /> I inserted a basic single door.
          </label>

          <label>
            <input type="checkbox" /> The frame now shows door jambs and a door
            header.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-7-build-verify"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-8-dlo-sizes"
          className="primary"
        >
          Next: Set DLO Sizes →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
