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
  reportsOptimize:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/reports_optimize.png",

  reportsSelect:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/reports_select.png",

  reportsTabs:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/tabs_reports.png",

  optimizeReports:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/optimize_reports.png",

  optimizeTabs:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_16/optimize_tabs.png",
};

export default function LessonSixteenReportsOptimizationPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="16"
      lessonTitle="Importing & Reviewing Projects"
      lessonDescription="Import the test project into Metal Fabrication, review the job, run useful reports, and prepare the operator with the information needed before production."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>Reports &amp; Optimization</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn when to use the Reports and Optimize buttons, what each report
        provides, and which reports are most useful for the Rhino operator.
      </div>

      <div className="lessonText">
        <p>
          In this lesson, we are going to cover the
          <strong> Reports</strong> and <strong>Optimize</strong> buttons in
          Metal Fabrication.
        </p>

        <p>
          Neither of these options is required to send a job to the machine.
          They are extra tools that can be used alongside the job export to
          give the operator additional paperwork and job information.
        </p>

        <p>
          Depending on the report, this may include frame elevations, Stick
          IDs, fabrication data, cut information, material pull lists, and
          other useful production details.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.reportsOptimize}
          alt="Reports and Optimize buttons in Metal Fabrication"
        />

        <figcaption>
          Reports and Optimize are both optional tools used to generate
          additional production information.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          These reports support the machine workflow — they do not replace it.
        </strong>

        <p>
          You can still output a job to the Rhino without generating any of
          these reports.
        </p>
      </div>

      <h3>Start With Reports</h3>

      <div className="lessonText">
        <p>
          Make sure our testing project is selected, then click
          <strong> Reports</strong>.
        </p>

        <p>
          For training purposes, go ahead and select every report that is
          available so you can see what each one looks like.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.reportsSelect}
          alt="Selecting reports in Metal Fabrication"
        />

        <figcaption>
          Select all available reports so you can compare what each one
          provides.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Once the reports are selected, click
          <strong> View Reports</strong> in the upper-right corner.
        </p>

        <p>
          Give the program a moment to generate the reports. Once they are
          loaded, you can move between them using the report tabs in the
          lower-left corner.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.reportsTabs}
          alt="Report tabs in the lower left corner"
        />

        <figcaption>
          Use the tabs in the lower-left corner to move between the generated
          reports.
        </figcaption>
      </figure>

      <h3>Understanding the Reports</h3>

      <div className="reportList">
        <div>
          <span>1</span>

          <div>
            <h4>Stick Fabrication Summary</h4>

            <p>
              This report breaks down each stick and shows information such as
              its function, length, and fabrication data.
            </p>
          </div>
        </div>

        <div className="recommended">
          <span>2</span>

          <div>
            <div className="titleRow">
              <h4>Stick Reference Elevation</h4>
              <span className="recommendedTag">Recommended</span>
            </div>

            <p>
              This is the report I would normally print for the Rhino operator.
            </p>

            <p>
              It shows what the frame looks like and identifies where each
              Stick ID belongs in the elevation.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <h4>Stick Reference Elevation — Landscape</h4>

            <p>
              This is essentially the same report as the standard Stick
              Reference Elevation, but formatted on a landscape page.
            </p>

            <p>
              This format can work better for long runs of elevations.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <h4>Stick Reference Summary</h4>

            <p>
              This is essentially a detailed, non-optimized cut list.
            </p>

            <p>
              It labels each part and shows the required length for the
              material.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          The report I use most often here is Stick Reference Elevation.
        </strong>

        <p>
          It gives the operator a simple visual reference showing what the
          frame looks like and where the Stick IDs belong.
        </p>
      </div>

      <h3>Print or Save the Reports</h3>

      <div className="lessonText">
        <p>
          Take a few minutes to click through the different reports and become
          familiar with them.
        </p>

        <p>
          At the top of the report screen, you will also see options to
          <strong> print</strong> or <strong>save</strong> the reports.
        </p>

        <p>
          When you are finished reviewing them, click the red
          <strong> X</strong> to return to the main Reports screen.
        </p>

        <p>
          Then click the red X again to return to Metal Fabrication.
        </p>
      </div>

      <h3>Now Open Optimize</h3>

      <div className="lessonText">
        <p>
          Make sure the testing project is still selected, then click
          <strong> Optimize</strong>.
        </p>

        <p>
          The program will ask you a few questions before generating the
          optimization reports.
        </p>

        <p>
          For most normal jobs, you are going to answer
          <strong> No</strong> to these questions.
        </p>
      </div>

      <div className="questionList">
        <div>
          <p className="sectionLabel">
            Do you want to select the optimal stock length?
          </p>

          <h4>Usually: No</h4>

          <p>
            This option can be useful if you are running a very large project
            and want to perform a cost analysis to determine which custom stock
            length would give you the best material yield.
          </p>

          <p>
            If you are planning to run your normal stock lengths, such as
            289-inch or 31-foot material, I would normally answer
            <strong> No</strong>.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Allocate material from inventory?
          </p>

          <h4>Usually: No</h4>

          <p>
            Only select Yes if your company actively uses the inventory
            tracking system inside Glazier Studio or PartnerPak.
          </p>

          <p>
            This inventory is essentially a manually maintained list that must
            be updated as stock comes in and is used.
          </p>

          <p>
            It does not update in real time, and many customers do not use
            Glazier Studio or PartnerPak as their primary inventory tracking
            system.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          For the average job, you will normally answer No to the optimization
          setup questions.
        </strong>

        <p>
          The main thing we are after is the material and stock usage
          information generated at the end.
        </p>
      </div>

      <h3>Select the Optimization Reports</h3>

      <div className="lessonText">
        <p>
          Go ahead and select every available report so you can see what each
          one does.
        </p>

        <p>
          Then click <strong>View Reports</strong> in the upper-right corner.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.optimizeReports}
          alt="Selecting optimization reports"
        />

        <figcaption>
          Select all of the optimization reports for this training example.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Just like the standard Reports screen, the report tabs are located in
          the lower-left corner.
        </p>

        <p>
          Use those tabs to move between each optimization report.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.optimizeTabs}
          alt="Optimization report tabs"
        />

        <figcaption>
          Navigate between optimization reports using the tabs in the lower
          left.
        </figcaption>
      </figure>

      <h3>Understanding the Optimization Reports</h3>

      <div className="reportList">
        <div>
          <span>1</span>

          <div>
            <h4>Cut List</h4>

            <p>
              This gives you an optimized cut list that could theoretically be
              taken to a manual saw and used to cut the job.
            </p>

            <p>
              Keep in mind that the Rhino has its own optimizer, so this report
              may not perfectly match the order in which the machine actually
              processes the material.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <h4>Cutting Instructions</h4>

            <p>
              This is a more detailed report showing what should be cut from
              each pattern or stock length.
            </p>

            <p>
              Because the Rhino handles this process for you, I do not use
              this report very often.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <h4>Drop List</h4>

            <p>
              This is a list of the theoretical extra material you should have
              remaining after the job is complete.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <h4>Sheet Labels</h4>

            <p>
              This can be used if you want to print labels ahead of time using
              a standard printer.
            </p>

            <p>
              The Rhino normally prints its own labels, so most users do not
              need this report.
            </p>
          </div>
        </div>

        <div>
          <span>5</span>

          <div>
            <h4>Single Feed Labels</h4>

            <p>
              This is similar to Sheet Labels, but the labels are presented in
              a single list.
            </p>
          </div>
        </div>

        <div className="recommended">
          <span>6</span>

          <div>
            <div className="titleRow">
              <h4>Stock Length Usage</h4>
              <span className="recommendedTag">Main Report</span>
            </div>

            <p>
              This is the main reason I use the Optimize screen.
            </p>

            <p>
              Stock Length Usage gives you a material pull list showing how
              many sticks are required for the job.
            </p>

            <p>
              If you give the operator this report along with the Stick
              Reference Elevation, they should have the main paperwork needed
              to get organized before the saw is even turned on.
            </p>
          </div>
        </div>
      </div>

      <div className="keyPair">
        <div>
          <p className="sectionLabel">Report #1</p>

          <h4>Stick Reference Elevation</h4>

          <p>
            Shows the operator what the frame looks like and where each Stick
            ID belongs.
          </p>
        </div>

        <div>
          <p className="sectionLabel">Report #2</p>

          <h4>Stock Length Usage</h4>

          <p>
            Shows the operator how many sticks of material need to be pulled
            for the job.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          These are the two reports I would be most likely to hand to a Rhino
          operator.
        </strong>

        <p>
          One shows them the frame and Stick IDs. The other gives them the
          material pull list.
        </p>
      </div>

      <h3>Step 2 Review</h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>Reports Are Optional</strong>

            <p>
              You do not need to generate reports in order to output the job
              to the Rhino.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>Preview All Reports</strong>

            <p>
              While learning, select all of them so you understand what
              information each report provides.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>Use Stick Reference Elevation</strong>

            <p>
              This gives the operator a visual of the frame and identifies the
              Stick IDs.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>Use Stock Length Usage</strong>

            <p>
              This gives the operator a pull list showing how much material is
              required for the job.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          That is all you need for Reports and Optimization.
        </strong>

        <p>
          Next, we will look more closely at how to identify missing
          fabrications and determine where the problem is actually coming from.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-16-import-test-frame"
          className="secondary"
        >
          ← Previous: Import Our Test Frame
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-16-missing-fabrications"
          className="primary"
        >
          Next: Identifying Missing Fabrications →
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
          max-width: 760px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .reportList {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .reportList > div {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 14px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reportList > div > span,
        .reviewGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .reportList h4 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 18px;
        }

        .reportList p {
          margin: 0 0 10px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.62;
        }

        .recommended {
          border-color: rgba(245, 158, 11, 0.35) !important;
          background: rgba(245, 158, 11, 0.055) !important;
        }

        .titleRow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 8px;
        }

        .titleRow h4 {
          margin: 0;
        }

        .recommendedTag {
          display: inline-flex;
          align-items: center;
          padding: 4px 9px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.26);
          color: #f59e0b;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .questionList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .questionList > div {
          padding: 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .questionList h4 {
          margin: 6px 0 12px;
          color: #f59e0b;
          font-size: 20px;
        }

        .questionList p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.62;
        }

        .keyPair {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 26px 0 34px;
        }

        .keyPair > div {
          padding: 22px;
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.055);
          border: 1px solid rgba(245, 158, 11, 0.28);
        }

        .keyPair h4 {
          margin: 6px 0 10px;
          color: #ffffff;
          font-size: 20px;
        }

        .keyPair p {
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.62;
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
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        @media (max-width: 800px) {
          .questionList,
          .keyPair,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}