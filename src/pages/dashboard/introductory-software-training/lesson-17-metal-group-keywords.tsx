import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Intro to Secondary Fabs",
    href: "/dashboard/introductory-software-training/lesson-17-secondary-fabrications",
  },
  {
    number: 2,
    title: "How to Measure Secondary Fabs",
    href: "/dashboard/introductory-software-training/lesson-17-measuring-secondary-fabs",
  },
  {
    number: 3,
    title: "Understanding Metal Group Keywords",
    href: "/dashboard/introductory-software-training/lesson-17-metal-group-keywords",
  },
];

const img = {
  keywords:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/key_words.png",

  keywordsHighlighted:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/key_words_highlighted.png",

  screwSplineOutsideUp:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/screspline_outside_up.png",
};

export default function LessonSeventeenMetalGroupKeywordsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="17"
      lessonTitle="Secondary Fabrications"
      lessonDescription="Learn how secondary fabrications transfer between framing members, how they are measured, and how Metal Group Keywords determine which fabrication rules are applied to a project."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Understanding Metal Group Keywords</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand how Metal Group Keywords control which primary and
        secondary fabrication rules are actually applied when a project is
        imported into Metal Fabrication.
      </div>

      <div className="lessonText">
        <p>
          I&apos;m sure you&apos;ve noticed that when you open the Secondary
          Fabrications screen for a horizontal member, you may see a lot of
          fabrication line items.
        </p>

        <p>
          In some cases, you may see as many as{" "}
          <strong>10 different fabrication holes</strong>.
        </p>

        <p>
          The important thing to understand is that the program is not
          necessarily going to use all of them.
        </p>

        <p>
          Depending on the Metal Group you are using, only two or three of
          those fabrication rules may actually apply.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Big Question</p>

        <h3>
          If there are 10 fabrication rules available, how does the program
          know which ones to use?
        </h3>

        <p>
          That is where <strong>Metal Group Keywords</strong> come into play.
        </p>
      </div>

      <h3>Find the Metal Group Keywords</h3>

      <div className="lessonText">
        <p>
          Navigate back to the <strong>Metal Group</strong> screen and select
          the test Metal Group we created earlier in the course.
        </p>

        <p>
          Inside the Metal Group, you will see a section for{" "}
          <strong>Keywords</strong>.
        </p>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.keywords}
          alt="Metal Group screen showing the Keywords section"
        />

        <figcaption>
          The Keywords section contains information the program uses to
          determine which fabrication rules belong to this Metal Group.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Click the <strong>blue square with the three dots</strong> next to
          the Keywords section.
        </p>

        <p>
          You should see a screen similar to the one below.
        </p>
      </div>

<figure className="lessonFigure largeFigure">
  <img
    src={img.keywordsHighlighted}
    alt="Metal Group Keywords screen with important keywords highlighted"
    style={{
      width: "60%",
      height: "auto",
      display: "block",
      margin: "0 auto",
    }}
  />
</figure>

      <h3>The Three Keywords We Care About</h3>

      <div className="keywordGrid">
        <div>
          <span>01</span>

          <p className="sectionLabel">Glazing Style</p>

          <strong>Outside</strong>

          <p>
            This tells us the glazing style being used by this Metal Group.
          </p>
        </div>

        <div>
          <span>02</span>

          <p className="sectionLabel">Fab Style</p>

          <strong>Screw Spline</strong>

          <p>
            This tells us the fabrication or connection style being used.
          </p>
        </div>

        <div>
          <span>03</span>

          <p className="sectionLabel">Stop Position</p>

          <strong>Stops Up</strong>

          <p>
            This tells us the stop position associated with this Metal Group.
          </p>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Our Test Metal Group</p>

        <h3>
          Screw Spline + Outside Glazed + Stops Up
        </h3>

        <p>
          Those three characteristics tell the program which fabrication rules
          match the Metal Group we are currently using.
        </p>
      </div>

      <h3>Keywords Control Which Fabrications Get Used</h3>

      <div className="lessonText">
        <p>
          These Keywords directly correlate with the fabrications stored in
          Primary and Secondary Fabrications.
        </p>

        <p>
          If you build a{" "}
          <strong>Screw Spline, Outside Glazed, Stops Up</strong> Metal Group,
          the program looks for fabrication rules with those same
          designations.
        </p>

        <p>
          Those are the fabrication rules that get used when the frame is
          imported into Metal Fabrication.
        </p>
      </div>

      <div className="selectionFlow">
        <div>
          <p className="sectionLabel">Metal Group</p>

          <strong>Screw Spline</strong>
          <strong>Outside</strong>
          <strong>Stops Up</strong>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <p className="sectionLabel">Fabrication Rules</p>

          <strong>Find Matching Keywords</strong>

          <p>
            The program looks through the available fabrication rules.
          </p>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <p className="sectionLabel">Metal Fabrication</p>

          <strong>Matching Fabs Applied</strong>

          <p>
            The appropriate fabrication rules are applied to the project.
          </p>
        </div>
      </div>

      <figure className="lessonFigure extraLargeFigure">
        <img
          src={img.screwSplineOutsideUp}
          alt="Secondary fabrication rules matching Screw Spline Outside Stops Up keywords"
        />

        <figcaption>
          There may be many fabrication rules in the list, but the Metal Group
          Keywords tell us which rules apply to our current system.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Look closely at the image above.
        </p>

        <p>
          There are quite a few fabrications in this screen, but based on the
          Keywords from our Metal Group, we can determine that{" "}
          <strong>only the two matching line items are being used</strong>.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          This is why you should not start changing every fabrication you see.
        </strong>

        <p>
          First determine which fabrication rules your Metal Group is actually
          calling for.
        </p>
      </div>

      <h3>Now We Can Solve the Problems From Lesson 16</h3>

      <div className="lessonText">
        <p>
          At this point, Lessons 16 and 17 come together.
        </p>

        <p>
          In Lesson 16, we learned how to identify two common problems:
        </p>
      </div>

      <div className="problemGrid">
        <div>
          <span>01</span>

          <strong>Incorrect Fabrications</strong>

          <p>
            The holes exist, but the hole pattern or location is incorrect.
          </p>
        </div>

        <div>
          <span>02</span>

          <strong>Missing Fabrications</strong>

          <p>
            The fabrication rules needed by the Metal Group are missing
            entirely.
          </p>
        </div>
      </div>

      <h3>Fixing an Incorrect Hole Pattern or Location</h3>

      <div className="lessonText">
        <p>
          If the fabrication exists but the hole pattern or location is wrong,
          use the following process.
        </p>
      </div>

      <div className="workflowBox">
        <div>
          <span>1</span>

          <div>
            <strong>Identify the Problem</strong>

            <p>
              Determine what is wrong and identify the member that is passing
              the fabrications.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Open the Parts Library</strong>

            <p>
              Once you have found the correct member, click the part and press{" "}
              <strong>FN + F2</strong> to access the Parts Library.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>Open Secondary Fabrications</strong>

            <p>
              Navigate to the <strong>Secondary Fabrications</strong> screen
              for that part.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Find the Fabrications Being Used</strong>

            <p>
              Reference the Metal Group Keywords and locate the two or three
              line items your Metal Group is actually calling for.
            </p>
          </div>
        </div>

        <div>
          <span>5</span>

          <div>
            <strong>Determine What Needs to Change</strong>

            <p>
              Use AutoCAD or physically measure the part to determine which way
              the X or Y value needs to change.
            </p>
          </div>
        </div>

        <div>
          <span>6</span>

          <div>
            <strong>Make the Change and Save</strong>

            <p>
              Correct the required value and make sure you press{" "}
              <strong>Save</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Do Not Skip This</p>

        <h3>Make sure you press Save.</h3>

        <p>
          If you leave the screen without saving the change, the corrected
          fabrication rule will not be available when you re-import the
          project.
        </p>
      </div>

      <h3>Fixing Completely Missing Fabrications</h3>

      <div className="lessonText">
        <p>
          If the fabrication is completely missing, the troubleshooting process
          is almost identical.
        </p>

        <p>
          The difference is that instead of correcting an existing prep, you
          are going to <strong>build the missing fabrication rules</strong>.
        </p>
      </div>

      <div className="workflowBox">
        <div>
          <span>1</span>

          <div>
            <strong>Identify the Problem</strong>

            <p>
              Determine what is missing and identify the member that should be
              passing the fabrications.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Open the Parts Library</strong>

            <p>
              Click the correct member and press{" "}
              <strong>FN + F2</strong>.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>Open Secondary Fabrications</strong>

            <p>
              Navigate to the Secondary Fabrications screen for the part.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Create the Missing Fab Line Items</strong>

            <p>
              If the screen is empty or the required fabrications are missing,
              begin creating new fabrication line items by entering the
              required data into each column.
            </p>
          </div>
        </div>

        <div>
          <span>5</span>

          <div>
            <strong>Determine X, Y, and Z</strong>

            <p>
              Use AutoCAD or physically measure the part to determine the X, Y,
              and Z values.
            </p>

            <p className="workflowNote">
              Remember: the Y Location will use a{" "}
              <strong>BOH + value</strong> formula.
            </p>
          </div>
        </div>

        <div>
          <span>6</span>

          <div>
            <strong>Finish the Fab and Save</strong>

            <p>
              Complete the required fabrication data and make sure you press{" "}
              <strong>Save</strong>.
            </p>
          </div>
        </div>
      </div>

      <h3>Your Existing Project Is Not Fixed Yet</h3>

      <div className="lessonText">
        <p>
          There is one final step that is extremely important.
        </p>

        <p>
          Just because you changed the Secondary Fabrication rules does{" "}
          <strong>not</strong> mean the project that is already sitting in
          Metal Fabrication has been updated.
        </p>

        <p>
          That project was imported using the old fabrication data.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Important</p>

        <h3>You must re-import the project into the metal fabrication screen.</h3>

        <p>
          Re-importing the project causes the program to pull in the new
          fabrication rules you just created or corrected.
        </p>
      </div>

      <div className="reimportFlow">
        <div>
          <span>1</span>

          <strong>Correct the Rule</strong>

          <p>
            Change or create the secondary fabrication and save it.
          </p>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <span>2</span>

          <strong>Re-Import Project</strong>

          <p>
            Bring the project back into Metal Fabrication.
          </p>
        </div>

        <div className="flowArrow">→</div>

        <div>
          <span>3</span>

          <strong>New Data Is Applied</strong>

          <p>
            The project is rebuilt using the corrected fabrication rules.
          </p>
        </div>
      </div>

      <h3>Override or Create a New Project?</h3>

      <div className="lessonText">
        <p>
          When you re-import the project, you have a choice.
        </p>
      </div>

      <div className="choiceGrid">
        <div>
          <p className="sectionLabel">Option 1</p>

          <strong>Override the Existing Project</strong>

          <p>
            Replace the old Metal Fabrication project with the newly imported
            version.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Option 2</p>

          <strong>Change the Name</strong>

          <p>
            Import the corrected version under a different name so both
            versions can exist in Metal Fabrication.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>Keep track of which project is correct.</strong>

        <p>
          Keeping multiple versions can be useful while troubleshooting, but
          it can also get messy very quickly.
        </p>

        <p>
          Make sure you and the machine operator know which project contains
          the corrected fabrication data.
        </p>
      </div>

      <h3>The Complete Troubleshooting Process</h3>

      <div className="lessonText">
        <p>
          We have now connected everything from Lessons 16 and 17.
        </p>
      </div>

      <div className="finalFlow">
        <div>
          <span>1</span>
          <strong>Identify the Problem</strong>
          <p>Find the missing or incorrect fabrication.</p>
        </div>

        <div>
          <span>2</span>
          <strong>Trace the Source</strong>
          <p>Determine which member is passing the fabrication.</p>
        </div>

        <div>
          <span>3</span>
          <strong>Check Keywords</strong>
          <p>Determine which fabrication rules the Metal Group is using.</p>
        </div>

        <div>
          <span>4</span>
          <strong>Measure</strong>
          <p>Use AutoCAD or the physical part to determine the correct data.</p>
        </div>

        <div>
          <span>5</span>
          <strong>Correct or Create</strong>
          <p>Modify the existing rules or build the missing fabrication.</p>
        </div>

        <div>
          <span>6</span>
          <strong>Save</strong>
          <p>Save the corrected fabrication data.</p>
        </div>

        <div>
          <span>7</span>
          <strong>Re-Import</strong>
          <p>Import the project again so the new rules are applied.</p>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">Lesson 17 Complete</p>

        <h3>You now understand secondary fabrications.</h3>

        <p>
          You have learned how secondary fabrications pass from one member to
          another, how to measure them, how Metal Group Keywords determine
          which fabrication rules are used, and how to correct missing or
          incorrect fabrication data.
        </p>

        <p>
          Next, we will move away from frame and metal fabrication and begin
          learning about <strong>door hardware and Library Fabrications</strong>.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-17-measuring-secondary-fabs"
          className="secondary"
        >
          ← Previous: How to Measure Secondary Fabs
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-hardware-overview"
          className="primary"
        >
          Next: Door Hardware &amp; Components →
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
          max-width: 900px;
          height: auto;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .lessonFigure figcaption {
          max-width: 780px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .largeFigure img {
          max-width: 1000px;
        }

        .extraLargeFigure img {
          max-width: 1100px;
        }

        .criticalBox {
          margin: 26px 0 34px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
          border: 2px solid rgba(245, 158, 11, 0.38);
        }

        .criticalBox h3 {
          margin: 8px 0 10px;
          color: #ffffff;
          font-size: 22px;
          line-height: 1.45;
        }

        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.65;
        }

        .keywordGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .keywordGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .keywordGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
        }

        .keywordGrid strong {
          display: block;
          color: #ffffff;
          font-size: 19px;
        }

        .keywordGrid p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .selectionFlow,
        .reimportFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .selectionFlow > div:not(.flowArrow),
        .reimportFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .selectionFlow strong {
          display: block;
          margin: 4px 0;
          color: #ffffff;
        }

        .selectionFlow p:not(.sectionLabel),
        .reimportFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .reimportFlow > div:not(.flowArrow) > span {
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

        .reimportFlow strong {
          color: #ffffff;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .problemGrid,
        .choiceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .problemGrid > div,
        .choiceGrid > div {
          padding: 21px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .problemGrid > div > span {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 13px;
          font-weight: 900;
        }

        .problemGrid strong,
        .choiceGrid strong {
          display: block;
          color: #ffffff;
          font-size: 18px;
        }

        .problemGrid p,
        .choiceGrid p:not(.sectionLabel) {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .workflowBox {
          display: grid;
          gap: 11px;
          margin: 24px 0 36px;
        }

        .workflowBox > div {
          display: flex;
          gap: 15px;
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .workflowBox > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .workflowBox strong {
          color: #ffffff;
        }

        .workflowBox p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .workflowNote {
          color: #fbbf24 !important;
          font-weight: 700;
        }

        .finalFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .finalFlow > div {
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.16);
        }

        .finalFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-bottom: 10px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .finalFlow strong {
          color: #ffffff;
        }

        .finalFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
        }

        .completionBox {
          margin-top: 32px;
          border-color: rgba(34, 197, 94, 0.25);
          background: rgba(34, 197, 94, 0.05);
        }

        .completionBox h3 {
          margin: 8px 0 12px;
          color: #ffffff;
        }

        .completionBox p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 950px) {
          .finalFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .keywordGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 850px) {
          .selectionFlow,
          .reimportFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .problemGrid,
          .choiceGrid,
          .finalFlow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}