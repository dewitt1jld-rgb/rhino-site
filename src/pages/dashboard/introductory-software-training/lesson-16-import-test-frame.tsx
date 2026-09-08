import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Import Our Test Frame",
    href: "/dashboard/introductory-software-training/lesson-16-import-test-frame",
  },
  {
    number: 2,
    title: "Reports & Optimization",
    href: "/dashboard/introductory-software-training/lesson-16-reports-optimization",
  },
  {
    number: 3,
    title: "Identifying Missing Fabrications",
    href: "/dashboard/introductory-software-training/lesson-16-missing-fabrications",
  },
];

const img = {
  importProject:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/import_project.png",

  selectAllFrames:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/select_allframes.png",

  previewFrames:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/preview_frames.png",

  redX:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/red_x.png",
};

export default function LessonSixteenImportTestFramePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="16"
      lessonTitle="Importing & Reviewing Projects"
      lessonDescription="Import the test project into Metal Fabrication, review fabrication warnings, and verify the frame before moving into reports and optimization."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 3
      </p>

      <h2>
        Import Our Test Frame
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Import the test project we created earlier into Metal Fabrication,
        review the parts for fabrication warnings, and verify that the frame
        looks correct before continuing.
      </div>

      <div className="lessonText">
        <p>
          In this lesson, we are going to bring the test frame we created
          earlier into the <strong>Metal Fabrication</strong> screen.
        </p>

        <p>
          Make sure you are still in Metal Fabrication so you can follow along.
        </p>

        <p>
          Frames do not automatically appear in this screen. We first need to
          import the project and choose which frames we want Metal Fabrication
          to load.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          We are using the testing project from earlier in the course.
        </strong>

        <p>
          I may have more frames in my project than you do. That is completely
          fine. Just select every frame available in your testing project.
        </p>
      </div>

      <h3>
        Step 1: Click Import Project
      </h3>

      <div className="lessonText">
        <p>
          From the Metal Fabrication screen, click
          <strong> Import Project</strong>.
        </p>

        <p>
          This opens the frame-selection screen where you can choose which
          frames from the project you want to bring into Metal Fabrication.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.importProject}
          alt="Import Project button in Metal Fabrication"
        />

        <figcaption>
          Click Import Project to begin bringing your testing project into
          Metal Fabrication.
        </figcaption>
      </figure>

      <h3>
        Step 2: Select All Available Frames
      </h3>

      <div className="lessonText">
        <p>
          Select every frame available in the testing project.
        </p>

        <p>
          Again, your list may not look exactly like mine depending on what you
          built earlier in the course. The important thing is that you import
          all of the frames you created for this training project.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.selectAllFrames}
          alt="Selecting all frames to import into Metal Fabrication"
        />

        <figcaption>
          Select all of the frames available in your testing project before
          continuing.
        </figcaption>
      </figure>

      <h3>
        Step 3: Wait for the Project to Load
      </h3>

      <div className="lessonText">
        <p>
          After you select the frames, allow Metal Fabrication a moment to load
          all of the project data.
        </p>

        <p>
          Small projects may appear almost immediately. Larger jobs can take a
          little longer.
        </p>

        <p>
          If the import takes more than a few seconds, watch the lower-left
          corner of the screen for the green progress bar.
        </p>
      </div>

      <div className="processGrid">
        <div>
          <span>1</span>

          <strong>
            Import Project
          </strong>

          <p>
            Open the project-selection screen.
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>
            Select Frames
          </strong>

          <p>
            Choose every frame in the testing project.
          </p>
        </div>

        <div>
          <span>3</span>

          <strong>
            Let It Load
          </strong>

          <p>
            Wait for all of the sticks and fabrication data to appear.
          </p>
        </div>
      </div>

      <h3>
        Review the Imported Project
      </h3>

      <div className="lessonText">
        <p>
          Once the project has loaded, scroll through the parts and look for
          anything that stands out.
        </p>

        <p>
          Fabrication warnings are shown by highlighting a line item in one of
          several colors:
        </p>
      </div>

      <div className="warningGrid">
        <div className="warningCard orange">
          <strong>
            Orange
          </strong>

          <span>
            Multiple Tools
          </span>
        </div>

        <div className="warningCard red">
          <strong>
            Red
          </strong>

          <span>
            Missing Fabrications
          </span>
        </div>

        <div className="warningCard yellow">
          <strong>
            Yellow
          </strong>

          <span>
            Fab Y &gt; Length
          </span>
        </div>

        <div className="warningCard green">
          <strong>
            Green
          </strong>

          <span>
            Length &gt; Stock
          </span>
        </div>

        <div className="warningCard purple">
          <strong>
            Purple
          </strong>

          <span>
            Value Out of Range
          </span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          If you have followed along through the course, your project should
          normally look clean.
        </strong>

        <p>
          You should not see any warning colors throughout the test project,
          and everything should look ready to continue.
        </p>
      </div>

      <h3>
        What the Warning Colors Mean
      </h3>

      <div className="lessonText">
        <p>
          Even though our test frame should be clean, I want you to understand
          what each warning means before we move forward.
        </p>

        <p>
          These colors do not automatically mean something is wrong. They are
          telling you that the software found something you may want to review.
        </p>
      </div>

      <div className="errorList">
        <div>
          <span className="errorDot orangeDot" />

          <div>
            <h4>
              Multiple Tools — Orange
            </h4>

            <p>
              This can be completely acceptable if your machine is capable of
              performing automatic tool changes.
            </p>

            <p>
              If your machine does not have a tool changer, open
              <strong> Add Operations</strong> and review the tool list.
            </p>

            <p>
              On machines without a tool changer, you may only use one tool per
              pass.
            </p>

            <p>
              Depending on the situation, you can change the tooling so the
              operations use one bit, remove unnecessary fabrications, or
              change the direction to an <strong>X Fab</strong>.
            </p>

            <p>
              On machines without a tool changer, an X Fab represents a second
              fabrication-only pass of the part.
            </p>

            <div className="miniWarning">
              I would avoid creating an extra X Fab pass unless it is
              necessary.
            </div>
          </div>
        </div>

        <div>
          <span className="errorDot redDot" />

          <div>
            <h4>
              Missing Fabs — Red
            </h4>

            <p>
              Red normally means the software believes a fabrication that
              should exist is missing.
            </p>

            <p>
              This is commonly caused by horizontal members that are missing
              the correct secondary fabrication rules.
            </p>

            <p>
              We will go into secondary fabrications in much greater detail in
              Lesson 17.
            </p>
          </div>
        </div>

        <div>
          <span className="errorDot yellowDot" />

          <div>
            <h4>
              Fab Y &gt; Length
            </h4>

            <p>
              This means one of the fabrications is being positioned beyond
              the end of the stick.
            </p>

            <p>
              This can be caused by incorrect secondary fabrication data, but I
              see it more often when someone manually adds a fabrication and
              enters the wrong location.
            </p>

            <p>
              It is much less common on a normal imported project.
            </p>
          </div>
        </div>

        <div>
          <span className="errorDot greenDot" />

          <div>
            <h4>
              Length &gt; Stock
            </h4>

            <p>
              This means the required finished stick is longer than the
              available stock length.
            </p>

            <p>
              A common example is a tall curtain wall frame where splices were
              never added.
            </p>

            <p>
              My preferred fix is to return to the frame, add the required
              splices, and then re-import the project.
            </p>

            <p>
              You can also use <strong>Split Stick</strong> in the upper-right
              corner of Metal Fabrication.
            </p>
          </div>
        </div>

        <div>
          <span className="errorDot purpleDot" />

          <div>
            <h4>
              Value Out of Range
            </h4>

            <p>
              I do not see this warning very often.
            </p>

            <p>
              When it does appear, it is usually caused by fabrication data
              that places an operation outside of a valid machine range.
            </p>

            <p>
              Examples may include a Z location below the usable table area or
              an X Fab positioned behind the back fence.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Using Split Stick
      </h3>

      <div className="lessonText">
        <p>
          If you do encounter a <strong>Length &gt; Stock</strong> warning and
          you decide to split the member directly from Metal Fabrication, select
          the entire line by clicking the gray box to the left of the Part ID.
        </p>

        <p>
          Then click <strong>Split Stick</strong> in the upper-right corner.
        </p>

        <p>
          The program will ask where you want the stick divided.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          For normal frame construction, I still prefer fixing the frame itself
          and re-importing.
        </strong>

        <p>
          That keeps the project data consistent with what was actually built
          in Frame Builder.
        </p>
      </div>

      <h3>
        Double-Check the Project With Preview Frames
      </h3>

      <div className="lessonText">
        <p>
          Even if the project does not show any warning colors, we can perform
          one more visual check using <strong>Preview Frames</strong>.
        </p>

        <p>
          Click Preview Frames in the upper-right corner.
        </p>

        <p>
          This screen gives you a graphical view of the frame along with the
          associated Stick IDs.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.previewFrames}
          alt="Preview Frames screen showing the test project and stick IDs"
        />

        <figcaption>
          Preview Frames allows you to identify the members visually and match
          them to their Stick IDs.
        </figcaption>
      </figure>

      <h3>
        Preview Frames Also Shows Missing Fabrications
      </h3>

      <div className="lessonText">
        <p>
          Preview Frames becomes especially helpful when you are
          troubleshooting red missing-fabrication warnings.
        </p>

        <p>
          If the software believes a fabrication is missing, you can see a
          <strong> red X</strong> at the location where that fabrication is
          expected.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.redX}
          alt="Red X marks showing missing fabrications in Preview Frames"
        />

        <figcaption>
          Red X marks show the locations where Metal Fabrication believes
          fabrications are missing.
        </figcaption>
      </figure>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example: Missing Fabs on the Verticals
        </p>

        <div className="lessonText">
          <p>
            Imagine that our frame showed red X marks on the vertical members.
          </p>

          <p>
            It would be tempting to immediately open the vertical member and
            try to fix the problem there.
          </p>

          <p>
            But remember: horizontal members can pass secondary fabrications to
            the verticals.
          </p>

          <p>
            If the missing prep is supposed to come from a horizontal, we need
            to identify the horizontal Stick ID that controls that condition.
          </p>

          <p>
            In our hypothetical example, if Stick ID 15 is the horizontal
            responsible for those fabrications, that is where we would begin
            looking for the problem rather than editing the verticals
            themselves.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Do not worry if secondary fabrications still feel a little confusing.
        </strong>

        <p>
          Lesson 17 is dedicated to secondary fabrications, including how they
          are measured and how Metal Group keywords control them.
        </p>
      </div>

      <h3>
        Spend Some Time Exploring
      </h3>

      <div className="lessonText">
        <p>
          This is only a test frame, and we are not going to send it to the
          machine.
        </p>

        <p>
          That makes this a great time to click around and become more
          comfortable with Metal Fabrication.
        </p>

        <p>
          Try using Preview Frames to identify a specific vertical member.
          Then return to Metal Fabrication, locate that Stick ID, and open
          <strong> Add Operations</strong> to see the fabrications assigned to
          that stick.
        </p>

        <p>
          Use what you learned in Lesson 15 to explore the different columns,
          tabs, operations, and fabrication data.
        </p>
      </div>

      <div className="practiceBox">
        <p className="sectionLabel">
          Try This Before Continuing
        </p>

        <div className="practiceGrid">
          <div>
            <span>1</span>

            <p>
              Find a vertical member in Preview Frames.
            </p>
          </div>

          <div>
            <span>2</span>

            <p>
              Write down or remember its Stick ID.
            </p>
          </div>

          <div>
            <span>3</span>

            <p>
              Find the same Stick ID in Metal Fabrication.
            </p>
          </div>

          <div>
            <span>4</span>

            <p>
              Open Add Operations and review the fabrications on that stick.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Step 1 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Import the Project
            </strong>

            <p>
              Use Import Project and select every frame in the testing project.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Review the Parts
            </strong>

            <p>
              Scroll through the imported job and look for color-coded
              fabrication warnings.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Understand the Warning
            </strong>

            <p>
              Use the color code to determine what type of condition needs to
              be investigated.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Preview the Frame
            </strong>

            <p>
              Use Preview Frames to visually verify Stick IDs and locate any
              missing fabrications.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Your project is now imported and ready for the next step.
        </strong>

        <p>
          Next, we will use the imported project to learn how to run reports and
          optimize the material.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-15-metal-fab-tips"
          className="secondary"
        >
          ← Previous: Metal Fab Tips &amp; Tricks
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-16-reports-optimization"
          className="primary"
        >
          Next: Reports &amp; Optimization →
        </Link>
      </div>

      <style jsx>{`
        .lessonFigure {
          margin: 30px 0;
          text-align: center;
        }

        .lessonFigure img {
          display: block;
          width: 100%;
          max-width: 850px;
          height: auto;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .lessonFigure figcaption {
          max-width: 760px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .largeFigure img {
          max-width: 1000px;
        }

        .processGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .processGrid > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .processGrid > div > span,
        .practiceGrid > div > span,
        .reviewGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          margin-bottom: 10px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .processGrid strong {
          color: #ffffff;
        }

        .processGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .warningGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          margin: 22px 0 34px;
        }

        .warningCard {
          display: grid;
          gap: 6px;
          padding: 16px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .warningCard strong {
          font-size: 18px;
        }

        .warningCard span {
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .warningCard.orange strong {
          color: #fb923c;
        }

        .warningCard.red strong {
          color: #f87171;
        }

        .warningCard.yellow strong {
          color: #facc15;
        }

        .warningCard.green strong {
          color: #4ade80;
        }

        .warningCard.purple strong {
          color: #c084fc;
        }

        .errorList {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0 36px;
        }

        .errorList > div {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 16px;
          padding: 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .errorList h4 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .errorList p {
          margin: 0 0 11px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.62;
        }

        .errorDot {
          display: block;
          width: 14px;
          height: 14px;
          margin-top: 5px;
          border-radius: 999px;
        }

        .orangeDot {
          background: #fb923c;
        }

        .redDot {
          background: #f87171;
        }

        .yellowDot {
          background: #facc15;
        }

        .greenDot {
          background: #4ade80;
        }

        .purpleDot {
          background: #c084fc;
        }

        .miniWarning {
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: rgba(255, 255, 255, 0.78);
          font-weight: 700;
        }

        .exampleBox,
        .practiceBox {
          margin: 24px 0 32px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .practiceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .practiceGrid > div {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .practiceGrid > div > span {
          flex: 0 0 34px;
          margin-bottom: 0;
        }

        .practiceGrid p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.55;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 22px 0 32px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid > div > span {
          flex: 0 0 34px;
          margin-bottom: 0;
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .warningGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .processGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .warningGrid,
          .practiceGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}