import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Create the Training Project", href: "/dashboard/introductory-software-training/lesson-7-create-project" },
  { number: 2, title: "Enter the Frame Settings", href: "/dashboard/introductory-software-training/lesson-7-frame-settings" },
  { number: 3, title: "Build and Verify the Frame", href: "/dashboard/introductory-software-training/lesson-7-build-verify" },
];

const requiredSettings = [
  ["Catalog", "Oldcastle"],
  ["Metal Group", "FG-3000-T CS/SS/OG"],
  ["Back Color", "Clear"],
  ["Face Color", "Clear"],
  ["Frame Set Name", "Frame Set 1"],
  ["Frame Name", "Frame 1"],
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
        <strong>Goal:</strong> Enter the exact metal-group, color, shape, panel,
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
          In the right-side Frame Information panel, expand
          <strong> Metal Group Options</strong> and enter the following values.
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

      <h3>Glazing Options</h3>
      <div className="lessonText">
        <p>
          Leave the glazing options at their current defaults. This exercise is
          focused on frame construction, not glass selection.
        </p>
      </div>

      <h3>Frame Parameters</h3>
      <div className="lessonText">
        <p>
          Expand <strong>Frame Parameters</strong> and enter each value below.
          Press Tab or click into the next field after each entry.
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

      <div className="calloutBox">
        <strong>Panels and rows describe glass openings.</strong>
        <p>
          Panels are counted left to right. Rows are counted bottom to top.
          Four panels and two rows create eight primary glass openings.
        </p>
      </div>

      <h3>Sealant Options</h3>
      <div className="lessonText">
        <p>
          Leave the sealant settings at their current defaults for this exercise.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Settings Check</p>
        <div className="takeawayGrid">
          {requiredSettings.map(([label, value]) => (
            <label key={label}>
              <input type="checkbox" /> {label}: <strong>{value}</strong>
            </label>
          ))}
        </div>
      </div>

      <div className="calloutBox">
        <strong>Stop here if anything does not match.</strong>
        <p>
          A different panel count, row count, size, catalog, or metal group will
          create a different result.
        </p>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training/lesson-7-create-project" className="secondary">
          ← Previous
        </Link>
        <Link href="/dashboard/introductory-software-training/lesson-7-build-verify" className="primary">
          Next: Build the Frame →
        </Link>
      </div>

      <style jsx>{`
        .settingsTable {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 14px;
        }
        .settingsRow {
          display: grid;
          grid-template-columns: minmax(160px, .8fr) minmax(0, 1.2fr);
          gap: 16px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
        }
        .settingsRow:last-child { border-bottom: 0; }
        .settingsRow strong { color: rgba(255,255,255,.72); }
        .settingsRow span { color: white; font-weight: 850; }
        @media (max-width: 560px) {
          .settingsRow { grid-template-columns: 1fr; gap: 5px; }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}
