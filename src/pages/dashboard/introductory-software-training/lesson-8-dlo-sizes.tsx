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
  dloWidth:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_8/dlo_bottom_right.png",
  dloHeight:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-10-dlo-height.png",
};

const dloPractice = [
  ["Left lower opening", '36" wide'],
  ["Door opening", "Leave at the door default"],
  ["Right-side lower openings", "Make both equal"],
  ["Upper row", "Keep all openings aligned"],
];

export default function LessonEightDloSizesPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="08"
      lessonTitle="Modifying Frames & Members"
      lessonDescription="Continue working in the Lesson 7 training project by adding a door, changing DLO sizes, and modifying framing members."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Set DLO Sizes</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Select glass openings and change their daylight
        opening width and height values in a controlled order.
      </div>

      <h3>What Is a DLO?</h3>

      <div className="lessonText">
        <p>
          <strong>DLO</strong> means <strong>daylight opening</strong>. It
          describes the visible opening where the glass is located between the
          surrounding framing members.
        </p>

        <p>
          Changing a DLO size moves the surrounding members while maintaining
          the overall frame dimensions.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Set widths first, then heights.</strong>
        <p>
          Work from left to right when setting panel widths. After widths are
          correct, work from bottom to top when setting row heights.
        </p>
      </div>

      <h3>Change a DLO Width</h3>

      <div className="lessonText">
        <p>
          Select the lower-left glass opening. Find the DLO width field in the
          right-side information panel.
        </p>

        <p>
          Enter <strong>36</strong> and press <strong>Enter</strong>. Watch the
          surrounding vertical member move as the opening updates.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.dloWidth} alt="DLO width setting in Glazier Studio" />
        <figcaption>
          Select the opening, enter the DLO width, and press Enter.
        </figcaption>
      </figure>

      <h3>Change a DLO Height</h3>

      <div className="lessonText">
        <p>
          With the opening still selected, locate the DLO height field. Enter
          the required height and press <strong>Enter</strong>.
        </p>

        <p>
          For this first exercise, set the lower row to <strong>84 inches</strong>.
          This creates a clear difference between the lower and upper openings
          and gives you practice changing a row height.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.dloHeight} alt="DLO height setting in Glazier Studio" />
        <figcaption>
          Enter the DLO height and press Enter to update the row.
        </figcaption>
      </figure>

      <h3>Practice the Remaining Openings</h3>

      <div className="lessonText">
        <p>
          Continue selecting openings and observe how the values change. The
          objective is to become comfortable identifying the selected opening
          and entering values without accidentally changing the overall frame
          size.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Practice Guide</p>

        <div className="settingsTable">
          {dloPractice.map(([location, instruction]) => (
            <div className="settingsRow" key={location}>
              <strong>{location}</strong>
              <span>{instruction}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="calloutBox">
        <strong>Press Enter after every value.</strong>
        <p>
          Clicking away without pressing Enter may leave the previous value in
          place or prevent the frame from updating.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I selected a glass opening before editing
            its DLO.
          </label>

          <label>
            <input type="checkbox" /> I changed the lower-left opening to 36
            inches wide.
          </label>

          <label>
            <input type="checkbox" /> I set the lower row to 84 inches high.
          </label>

          <label>
            <input type="checkbox" /> I pressed Enter after each change.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-8-add-door"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-8-member-edits"
          className="primary"
        >
          Next: Modify Members →
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
          grid-template-columns: minmax(180px, .9fr) minmax(0, 1.1fr);
          gap: 16px;
          padding: 13px 16px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.025);
        }

        .settingsRow:last-child {
          border-bottom: 0;
        }

        .settingsRow strong {
          color: rgba(255,255,255,.72);
        }

        .settingsRow span {
          color: white;
          font-weight: 850;
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
