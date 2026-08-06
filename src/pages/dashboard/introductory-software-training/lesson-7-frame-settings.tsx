import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Create the Training Project",
    href: "/dashboard/introductory-software-training/lesson-7-create-project",
  },
  {
    number: 2,
    title: "Enter the Frame Settings",
    href: "/dashboard/introductory-software-training/lesson-7-frame-settings",
  },
  {
    number: 3,
    title: "Build and Verify the Frame",
    href: "/dashboard/introductory-software-training/lesson-7-build-verify",
  },
];

const requiredSettings = [
  ["Catalog", "Oldcastle"],
  ["Metal Group", "FG-3000-T CS/SS/OG"],
  ["Back Color", "Clear"],
  ["Face Color", "Clear"],
  ["Frame Set Name", "North Wall"],
  ["Frame Name", "L-29"],
  ["Frame Shape", "Rectangle"],
  ["Include RO Dim", "Unchecked"],
  ["Panels", "4"],
  ["Rows", "2"],
  ["Number Thus", "1"],
  ["Width", '180"'],
  ["Height", '115"'],
];

export default function LessonSevenFrameSettingsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="07"
      lessonTitle="Building Your First Frame"
      lessonDescription="Create a guided training project and build your first storefront frame using the same settings shown throughout the lesson."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Enter the Frame Settings</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Enter the exact metal group, color, shape, panel,
        row, and dimensional settings required for the training frame.
      </div>

      <div className="calloutBox">
        <strong>Use the exact values shown below.</strong>
        <p>
          Lessons 8–10 will continue using this same frame, so the starting
          configuration needs to match.
        </p>
      </div>

      <h3>Metal Group Options</h3>

      <div className="lessonText">
        <p>
          In the right-side Frame Information panel, expand{" "}
          <strong>Metal Group Options</strong> and enter the values shown below.
        </p>
      </div>

      <div className="sectionBox">
        <div className="settingsTable">
          {requiredSettings.slice(0, 4).map(([label, value]) => (
            <div className="settingsRow" key={label}>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="explanationGrid">
        <section className="explanationCard">
          <p className="sectionLabel">Metal Group</p>
          <h3>What the metal group controls</h3>

          <p>
            For this training exercise, we are using a generic metal group that
            has already been configured.
          </p>

          <p>
            As you progress through the course, you will learn how to create,
            modify, and customize your own metal groups so they contain the
            correct parts, design styles, fabrication rules, and project
            settings.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Back Color</p>
          <h3>The color of the main member</h3>

          <p>
            The <strong>Back Color</strong> controls the color of the main
            framing member.
          </p>

          <p>
            The terms <strong>back member</strong> and{" "}
            <strong>back color</strong> are most commonly associated with the
            main member in a curtain wall system. Glazier Studio and PartnerPak
            also use this field to describe the color of the main mullion in a
            storefront system.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Face Color</p>
          <h3>Used primarily for curtain wall face members</h3>

          <p>
            Curtain wall systems commonly contain separate face members or face
            caps. Storefront systems generally do not.
          </p>

          <p>
            When using a storefront metal group, set the Face Color to match the
            Back Color. The Face Color may not be used by the storefront system,
            but keeping both colors consistent prevents unnecessary confusion.
          </p>
        </section>
      </div>

      <h3>Glazing Options</h3>

      <div className="lessonText">
        <p>
          Normally, I do not change the glazing settings while initially
          creating a frame.
        </p>

        <p>
          Glazing options can be changed quickly after the frame has already
          been built. Leave the current glazing selections unchanged for now.
          Later in the training, you will learn how to modify the glass directly
          inside the project.
        </p>
      </div>

      
      <h3>Frame Parameters</h3>

      <div className="lessonText">
        <p>
          Expand <strong>Frame Parameters</strong> and enter each value shown
          below. Press Tab or click into the next field after each entry.
        </p>
      </div>

      <div className="sectionBox">
        <div className="settingsTable">
          {requiredSettings.slice(4).map(([label, value]) => (
            <div className="settingsRow" key={label}>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="explanationGrid">
        <section className="explanationCard">
          <p className="sectionLabel">Frame Set Name</p>
          <h3>Group related frames together</h3>

          <p>
            The Frame Set Name allows you to organize multiple related frames
            under one group.
          </p>

          <p>
            For example, a project may contain three frames in a{" "}
            <strong>North Wall</strong> frame set and five frames in a{" "}
            <strong>South Wall</strong> frame set.
          </p>

          <p>
            Frame sets can also be used to separate interior frames from
            exterior frames, different project phases, building elevations, or
            other logical groups.
          </p>

          <p>
            Each time you create a new frame, you can keep the current frame set
            name or enter a different one.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Frame Name</p>
          <h3>Match the project drawings</h3>

          <p>
            The Frame Name should normally correspond directly with the frame
            designation shown on the shop drawings, architectural elevations,
            or bid documents received from the customer.
          </p>

          <p>
            For this exercise, the frame name <strong>L-29</strong> is simply a
            training designation.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Frame Shape</p>
          <h3>Select the basic frame geometry</h3>

          <p>
            Rectangle is the default and most common frame shape.
          </p>

          <p>
            Opening the dropdown will display several additional shapes. Later
            in the course, you will learn how to create angled, sloped,
            stepped, and other non-rectangular frames.
          </p>

          <p>
            For this lesson, select <strong>Rectangle</strong>.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Include RO Dim</p>
          <h3>Use rough-opening dimensions when required</h3>

          <p>
            <strong>RO</strong> means <strong>rough opening</strong>.
          </p>

          <p>
            This option is used when the shop drawings show a shim dimension or
            installation clearance around the entire frame.
          </p>

          <p>
            A later shop-drawing lesson will explain how to use this setting
            correctly. For now, leave it unchecked.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Panels</p>
          <h3>The number of vertical columns</h3>

          <p>
            Panels represent the number of vertical columns or bays in the
            frame.
          </p>

          <p>
            A setting of <strong>4</strong> creates four vertical panel
            locations across the width of the frame.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Rows</p>
          <h3>The number of horizontal rows</h3>

          <p>
            Rows represent the number of horizontal levels or bays in the
            frame.
          </p>

          <p>
            A setting of <strong>2</strong> creates two horizontal rows from the
            bottom of the frame to the top.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Number Thus</p>
          <h3>The quantity of identical frames</h3>

          <p>
            Number Thus tells the software how many identical copies of the
            current frame are required.
          </p>

          <p>
            For example, if a project contains 26 identical openings, you only
            need to build the frame once and set Number Thus to{" "}
            <strong>26</strong>.
          </p>

          <p>
            If the frame is unique and has no duplicates, set Number Thus to{" "}
            <strong>1</strong>.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">Width and Height</p>
          <h3>The overall frame dimensions</h3>

          <p>
            Width and Height define the overall size of the frame unless the
            project is using rough-opening dimensions.
          </p>

          <p>
            For this training frame, enter a width of <strong>180 inches</strong>{" "}
            and a height of <strong>115 inches</strong>.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>Panels and rows describe the frame layout.</strong>
        <p>
          Panels are counted from left to right. Rows are counted from bottom to
          top. Four panels and two rows create eight primary glass openings.
        </p>
      </div>

      <h3>Sealant Options</h3>

      <div className="lessonText">
        <p>
          Leave the sealant settings at their current defaults for this
          exercise.
        </p>

        <p>
          These settings control items such as interior and exterior caulking,
          backer rod, bead quantities, and related sealant calculations. They
          will be covered in greater detail later in the course.
        </p>
      </div>

      <h3>Verify Your Settings</h3>

      <div className="lessonText">
        <p>
          Before continuing, compare your screen with the reference image below.
          Every setting should match exactly.
        </p>

        <p>
          If even one value is different, your frame may build differently from
          the examples shown throughout the remainder of this lesson.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_7/frame_settings_check.png"
          alt="Reference frame settings"
          style={{
            width: "700px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "16px",
            display: "block",
            margin: "0 auto",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Use this reference to verify that every frame setting matches before
          proceeding.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Take a moment to double-check your work.</strong>
        <p>
          Verify the catalog, metal group, colors, glazing options, frame set,
          frame name, shape, dimensions, panel count, row count, Number Thus,
          and sealant settings before moving on.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Stop here if anything does not match.</strong>
        <p>
          A different panel count, row count, frame size, catalog, or metal
          group will create a different result.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-7-create-project"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-7-build-verify"
          className="primary"
        >
          Next: Build the Frame →
        </Link>
      </div>

      <style jsx>{`
        .settingsTable {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
        }

        .settingsRow {
          display: grid;
          grid-template-columns: minmax(160px, 0.8fr) minmax(0, 1.2fr);
          gap: 16px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.025);
        }

        .settingsRow:last-child {
          border-bottom: 0;
        }

        .settingsRow strong {
          color: rgba(255, 255, 255, 0.72);
        }

        .settingsRow span {
          color: white;
          font-weight: 850;
        }

        .explanationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .explanationCard {
          padding: 22px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .explanationCard h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 20px;
        }

        .explanationCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .explanationCard p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        @media (max-width: 760px) {
          .explanationGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .settingsRow {
            grid-template-columns: 1fr;
            gap: 5px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}