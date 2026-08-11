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

const doorEditorVideo =
  "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_8/door%20fabrication%20screen.mp4";

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
        <strong>Goal:</strong> Open the frame from Lesson 7, add a door to the
        correct opening, and become familiar with the Door Editor before making
        additional frame changes.
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
          In the frame editor, locate the{" "}
          <strong>second lower glass opening from the left</strong>. This is
          where the training door will be placed.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_8/hinge_right_door.png"
          alt="Training door location"
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
          Select the lower row, second opening from the left.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Click the opening once so it is selected. Then right-click inside the
          same opening to display the available frame-editing commands.
        </p>

        <p>
          You can also use the door options on the left side of the screen to
          insert a double door, hinge-left door, or hinge-right door.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Training Door Location</p>

        <h3 style={{ marginTop: 0 }}>
          Lower row — second opening from the left
        </h3>

        <p className="bodyText">
          Confirm that the correct opening is selected before choosing a door
          type.
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
              color: "rgba(255,255,255,.6)",
            }}
          >
            Door options available from the left-side tools.
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
              color: "rgba(255,255,255,.6)",
            }}
          >
            Door options available from the right-click menu.
          </figcaption>
        </figure>
      </div>

      <h3>Insert the Training Door</h3>

      <div className="lessonText">
        <p>
          From the right-click menu, choose the{" "}
          <strong>Hinge Left Door</strong>. This will open the Door Editor
          screen.
        </p>
      </div>

      <h3>Understanding the Door Editor</h3>

      <div className="lessonText">
        <p>
          After selecting <strong>Hinge Left Door</strong>, the Door Editor
          opens. This is where the major settings related to the door are
          configured.
        </p>

        <p>
          At first glance, the Door Editor can feel overwhelming because it
          contains many different options and screens. Do not worry about
          memorizing every setting right now.
        </p>

        <p>
          The goal of this section is simply to become familiar with the layout,
          understand where the major settings are located, and successfully add
          the training door to the frame.
        </p>

        <p>
          Later in this course, we will return to the Door Editor and spend much
          more time on hardware, library fabrications, door preparations,
          custom preps, and complete door packages.
        </p>
      </div>

      <div className="goalBox">
        <strong>Door Editor Goal:</strong> Learn where the major Door Editor
        sections are located and successfully create the training door. You are
        not expected to understand every option yet.
      </div>

      <h3>Watch the Door Editor Overview</h3>

      <div className="lessonText">
        <p>
          Keep the Door Editor open on your own computer while watching the
          video below.
        </p>

        <p>
          Pause the video whenever necessary and click through the different
          screens yourself. The more comfortable you become navigating the Door
          Editor, the easier the later door-fabrication lessons will be.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "block",
          margin: "28px auto",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,.12)",
          background: "#000",
        }}
      >
        <source src={doorEditorVideo} type="video/mp4" />

        Your browser does not support the video element.
      </video>

      <div className="calloutBox">
        <strong>Practice along with the video.</strong>

        <p>
          As each Door Editor screen is discussed, open that same section in
          your own program. The objective is to learn where the settings live,
          not to memorize every possible option.
        </p>
      </div>

<h3>Door Handing Reference</h3>

<div className="calloutBox">
  <strong>Correction from the video:</strong>

  <p>
    I made a mistake in the video while explaining door handing. Use the table
    below as the correct reference for what each acronym stands for.
  </p>
</div>

<div
  style={{
    overflowX: "auto",
    marginTop: "24px",
  }}
>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: "14px",
      overflow: "hidden",
      background: "rgba(255,255,255,.035)",
    }}
  >
    <thead>
      <tr
        style={{
          background: "rgba(245,158,11,.12)",
        }}
      >
        <th
          style={{
            padding: "14px 16px",
            textAlign: "left",
            color: "#fbbf24",
            borderBottom: "1px solid rgba(255,255,255,.12)",
          }}
        >
          Acronym
        </th>

        <th
          style={{
            padding: "14px 16px",
            textAlign: "left",
            color: "#fbbf24",
            borderBottom: "1px solid rgba(255,255,255,.12)",
          }}
        >
          Meaning
        </th>
      </tr>
    </thead>

    <tbody>
      {[
        ["HRSO", "Hinge Right Swing Out"],
        ["HLSO", "Hinge Left Swing Out"],
        ["HRSI", "Hinge Right Swing In"],
        ["HLSI", "Hinge Left Swing In"],
        ["HRCHDA", "Hinge Right Center Hung Double Acting"],
        ["HLCHDA", "Hinge Left Center Hung Double Acting"],
      ].map(([acronym, meaning]) => (
        <tr key={acronym}>
          <td
            style={{
              padding: "14px 16px",
              fontWeight: 900,
              color: "#ffffff",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {acronym}
          </td>

          <td
            style={{
              padding: "14px 16px",
              color: "rgba(255,255,255,.76)",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {meaning}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      <h3>What You Should Recognize</h3>

      <div className="lessonText">
        <p>
          By the end of this section, you should at least recognize the major
          areas of the Door Editor and know that these settings are available
          when you need them.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Door Editor Overview</p>

        <ul
          style={{
            margin: "12px 0 0",
            paddingLeft: "22px",
            color: "rgba(255,255,255,.78)",
            lineHeight: "1.8",
          }}
        >
          <li>Door information and basic door settings</li>
          <li>Door size and configuration</li>
          <li>Door handing</li>
          <li>Additional door-related settings and screens</li>
        </ul>
      </div>

      <div className="calloutBox">
        <strong>Do not configure door hardware yet.</strong>

        <p>
          Door hardware, library fabrications, door preparations, and door frame preps 
          will be covered later in the course and in a completly diffrent screen.
        </p>

       </div>

      <h3>Return to the Frame</h3>

      <div className="lessonText">
        <p>
          Once the basic door settings have been entered, finish the Door Editor
          process and return to the frame.
        </p>

        <p>
          The original glass opening should now be replaced by a door package
          containing the door and the required surrounding framing members.
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
            <input type="checkbox" /> I selected Hinge Left Door.
          </label>

          <label>
            <input type="checkbox" /> I opened and reviewed the Door Editor.
          </label>

          <label>
            <input type="checkbox" /> I understand that doors are confusing and not to stress about it right now..
            
          </label>

          <label>
            <input type="checkbox" /> I understand that unless I am estimating, the most important part of a door is the size
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