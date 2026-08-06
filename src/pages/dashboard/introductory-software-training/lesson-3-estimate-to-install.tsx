import Link from "next/link";

const workflowSteps = [
  {
    number: "01",
    title: "A Project Is Released for Bid",
    description:
      "A general contractor, architect, building owner, or other customer requests pricing for the glazing portion of a project. The glazing company receives architectural drawings, specifications, elevations, and other bid documents.",
  },
  {
    number: "02",
    title: "Build the Frames in Glazier Studio",
    description:
      "The Glazier Studio user reviews the elevation drawings and enters the required storefronts, curtain walls, doors, and other frames into the program. At this stage, the dimensions are typically based on the architectural bid drawings.",
  },
  {
    number: "03",
    title: "Estimate the Project",
    description:
      "Once the frames have been created, Glazier Studio is used to calculate the materials, glass, doors, hardware, labor, and other costs associated with the project.",
  },
  {
    number: "04",
    title: "Prepare and Submit the Bid",
    description:
      "The estimator reviews the project totals and creates a bid summary. The completed proposal is then submitted to the company requesting the bid.",
  },
  {
    number: "05",
    title: "The Project Is Awarded",
    description:
      "If the glazing company wins the project, the preliminary estimate becomes an active job. The frames already created during estimating provide a starting point for the production process.",
  },
  {
    number: "06",
    title: "Field-Measure the Openings",
    description:
      "A representative from the glazing company visits the jobsite and measures the actual openings. These field dimensions are used to confirm the correct frame sizes, joint conditions, door openings, and surrounding construction.",
  },
  {
    number: "07",
    title: "Update and Verify the Project",
    description:
      "The frames in Glazier Studio are updated using the verified field dimensions. The user checks that the correct metal systems, glass, doors, hardware, parts, and fabrication requirements have been assigned.",
  },
  {
    number: "08",
    title: "Send the Project for Fabrication",
    description:
      "After the project has been reviewed and approved for production, the frame information is sent to the RhinoFab system. The RhinoFab machine uses that data to cut and fabricate the aluminum members.",
  },
  {
    number: "09",
    title: "Assemble the Frames",
    description:
      "The fabricated members are labeled, organized, and assembled. Depending on the company and project, the frames may be assembled in the shop or shipped to the jobsite for field assembly.",
  },
  {
    number: "10",
    title: "Install and Complete the Project",
    description:
      "The completed frames, glass, doors, and related components are installed at the project site. Once installation, glazing, adjustment, and final inspection are complete, the project is finished.",
  },
];

export default function EstimateToInstallLessonPage() {
  return (
    <main className="page">
      <article className="lesson">
        <nav className="lessonNavigation" aria-label="Lesson navigation">
          <Link
            href="/dashboard/introductory-software-training"
            className="backLink"
          >
            ← Back to Course Curriculum
          </Link>

          <div className="lessonLocation">
            Module 01 <span>/</span> Lesson 03
          </div>
        </nav>

        <header className="hero">
          <p className="eyebrow">Glass Industry Fundamentals</p>

          <h1>From Estimate to Installation</h1>

          <p className="lead">
            Follow a typical commercial glazing project from the first bid
            request through estimating, field measurement, fabrication,
            assembly, and final installation.
          </p>

          <div className="lessonStats">
            <span>Module 01</span>
            <span>Lesson 03</span>
            <span>10–15 Minutes</span>
            <span>Project Workflow</span>
          </div>
        </header>

        <section className="learningObjectives">
          <div className="objectiveIcon">03</div>

          <div>
            <p className="sectionLabel">Learning Objectives</p>
            <h2>What you will learn</h2>

            <ul>
              <li>
                Understand how a commercial glazing project begins with a bid
                request.
              </li>
              <li>
                Recognize the role Glazier Studio plays during estimating and
                production.
              </li>
              <li>
                Understand why field measurements are required after a project
                is awarded.
              </li>
              <li>
                Follow the project from verified frame drawings to RhinoFab
                fabrication.
              </li>
              <li>
                Understand how fabrication, assembly, and installation complete
                the project.
              </li>
            </ul>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Project Overview</p>
            <h2>Every completed frame begins as an estimate</h2>
          </div>

          <div className="lessonText">
            <p>
              A commercial glazing project usually begins long before aluminum
              is cut or glass is installed. It often starts when a general
              contractor, architect, building owner, or other customer asks a
              glazing company to submit a bid.
            </p>

            <p>
              From the perspective of a Glazier Studio user, the same project
              may move through estimating, field verification, production,
              fabrication, assembly, and installation.
            </p>

            <p>
              The exact responsibilities may vary from company to company, but
              the general workflow remains similar.
            </p>
          </div>

          <div className="workflowSummary">
            <span>Bid Request</span>
            <span className="workflowArrow">→</span>
            <span>Estimate</span>
            <span className="workflowArrow">→</span>
            <span>Field Measure</span>
            <span className="workflowArrow">→</span>
            <span>Fabricate</span>
            <span className="workflowArrow">→</span>
            <span>Install</span>
          </div>
        </section>

        <section className="workflowSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Complete Workflow</p>
            <h2>The ten major steps</h2>
          </div>

          <div className="workflowList">
            {workflowSteps.map((step) => (
              <section className="workflowCard" key={step.number}>
                <div className="stepNumber">{step.number}</div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">The Role of Glazier Studio</p>
            <h2>The project is refined as better information becomes available</h2>
          </div>

          <div className="lessonText">
            <p>
              During the bidding phase, the frames entered into Glazier Studio
              are commonly based on architectural drawings. Those drawings
              provide enough information to estimate the project, but they may
              not represent the exact conditions found at the jobsite.
            </p>

            <p>
              After the project is awarded, the glazing company measures the
              actual openings. The Glazier Studio project is then updated so
              that the frame dimensions, parts, glass sizes, door openings, and
              fabrication information match the verified field conditions.
            </p>

            <p>
              This is an important distinction: the estimating project provides
              the starting point, while the verified production project
              contains the information used to manufacture the finished frames.
            </p>
          </div>

          <div className="importantCallout">
            <strong>Estimate first. Verify before fabrication.</strong>

            <p>
              Frames should not be released for fabrication until the project
              dimensions, materials, parts, and production requirements have
              been checked and approved.
            </p>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">From Software to the Shop</p>
            <h2>Sending the project to RhinoFab</h2>
          </div>

          <div className="lessonText">
            <p>
              Once the project has been verified, the framing information can be
              sent to the RhinoFab system for production.
            </p>

            <p>
              The RhinoFab machine uses the project data to cut the aluminum to
              the required lengths and perform programmed fabrication such as
              holes, slots, notches, and other machining operations.
            </p>

            <p>
              After fabrication, the members are organized and assembled into
              completed frames. Some companies assemble most frames in the shop,
              while others ship the fabricated members to the jobsite and
              assemble them in the field.
            </p>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Project Completion</p>
            <h2>Installation finishes the workflow</h2>
          </div>

          <div className="lessonText">
            <p>
              The final stage is installation. The frames are placed into the
              prepared openings, anchored, sealed, glazed, and adjusted as
              required.
            </p>

            <p>
              Once the frames, glass, doors, and hardware have been installed
              and the completed work has been inspected, the project is
              finished.
            </p>

            <p>
              The company then repeats the same process with the next project:
              bid, estimate, measure, verify, fabricate, assemble, and install.
            </p>
          </div>
        </section>

        <section className="keyTakeaways">
          <p className="sectionLabel">Lesson Review</p>
          <h2>Key takeaways</h2>

          <div className="takeawayGrid">
            <div>
              <strong>Bidding</strong>
              <p>
                Projects commonly begin when a glazing company receives
                drawings and is asked to submit pricing.
              </p>
            </div>

            <div>
              <strong>Estimating</strong>
              <p>
                Frames are entered into Glazier Studio so materials, labor, and
                project costs can be calculated.
              </p>
            </div>

            <div>
              <strong>Field Verification</strong>
              <p>
                Actual opening dimensions are measured after the project is
                awarded.
              </p>
            </div>

            <div>
              <strong>Production Review</strong>
              <p>
                The Glazier Studio project is updated and checked before
                fabrication begins.
              </p>
            </div>

            <div>
              <strong>RhinoFab</strong>
              <p>
                Verified project data is used to cut and fabricate the aluminum
                members.
              </p>
            </div>

            <div>
              <strong>Installation</strong>
              <p>
                Assembly and field installation complete the project workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="completionPanel">
          <div>
            <p className="sectionLabel">Module 01 Complete</p>
            <h2>You now understand the basic project workflow</h2>

            <p>
              The next lesson begins the Software Foundations module and will
              show you how to download, install, activate, and prepare Glazier
              Studio and PartnerPak for use.
            </p>
          </div>

          <div className="completionActions">
            <Link
              href="/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall"
              className="secondaryButton"
            >
              ← Previous Lesson
            </Link>

            <Link
              href="/dashboard/introductory-software-training/download-install"
              className="primaryButton"
            >
              Continue to Lesson 4 →
            </Link>
          </div>
        </section>
      </article>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 48px 24px 80px;
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.09),
              transparent 28%
            ),
            linear-gradient(135deg, #05070b 0%, #0d1118 48%, #05070b 100%);
          color: #ffffff;
        }

        .lesson {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        .lessonNavigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 34px;
        }

        .backLink {
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .backLink:hover {
          color: #fbbf24;
        }

        .lessonLocation {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .lessonLocation span {
          margin: 0 7px;
          color: #f59e0b;
        }

        .hero {
          margin-bottom: 34px;
          padding: 42px;
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 28px;
          background:
            linear-gradient(
              120deg,
              rgba(245, 158, 11, 0.12),
              rgba(15, 23, 42, 0.82) 38%
            );
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .eyebrow,
        .sectionLabel {
          margin: 0;
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .eyebrow {
          margin-bottom: 12px;
          font-size: 0.86rem;
        }

        .sectionLabel {
          margin-bottom: 8px;
          font-size: 0.76rem;
        }

        .hero h1 {
          max-width: 850px;
          margin: 0 0 18px;
          font-size: clamp(38px, 6vw, 58px);
          line-height: 1.03;
        }

        .lead {
          max-width: 850px;
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: 19px;
          line-height: 1.75;
        }

        .lessonStats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .lessonStats span {
          padding: 9px 13px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          font-size: 0.84rem;
          font-weight: 850;
        }

        .learningObjectives {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 24px;
          align-items: flex-start;
          margin-bottom: 34px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.78);
        }

        .objectiveIcon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          background: #f59e0b;
          color: #111827;
          font-size: 19px;
          font-weight: 950;
        }

        .learningObjectives h2,
        .sectionHeading h2,
        .keyTakeaways h2,
        .completionPanel h2 {
          margin: 0;
          color: #ffffff;
        }

        .learningObjectives h2 {
          margin-bottom: 15px;
          font-size: 27px;
        }

        .learningObjectives ul {
          margin: 0;
          padding-left: 21px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
        }

        .learningObjectives li + li {
          margin-top: 7px;
        }

        .lessonSection,
        .workflowSection {
          margin: 34px 0;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          background: rgba(15, 23, 42, 0.68);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
        }

        .sectionHeading {
          margin-bottom: 18px;
        }

        .sectionHeading h2 {
          font-size: clamp(27px, 4vw, 36px);
          line-height: 1.18;
        }

        .lessonText {
          color: rgba(255, 255, 255, 0.74);
          font-size: 17px;
          line-height: 1.82;
        }

        .lessonText p {
          margin: 0;
        }

        .lessonText p + p {
          margin-top: 17px;
        }

        .lessonText strong {
          color: #ffffff;
        }

        .workflowSummary {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
          padding: 22px;
          border: 1px solid rgba(245, 158, 11, 0.22);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.07);
        }

        .workflowSummary span:not(.workflowArrow) {
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.72);
          color: #ffffff;
          font-weight: 850;
        }

        .workflowArrow {
          color: #f59e0b;
          font-size: 20px;
          font-weight: 950;
        }

        .workflowList {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .workflowCard {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 20px;
          align-items: flex-start;
          padding: 23px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(5, 7, 11, 0.3);
        }

        .stepNumber {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #f59e0b;
          color: #111827;
          font-weight: 950;
        }

        .workflowCard h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }

        .workflowCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.68;
        }

        .importantCallout {
          margin-top: 25px;
          padding: 22px;
          border-left: 4px solid #f59e0b;
          border-radius: 0 16px 16px 0;
          background: rgba(245, 158, 11, 0.08);
        }

        .importantCallout strong {
          color: #fbbf24;
          font-size: 17px;
        }

        .importantCallout p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.68;
        }

        .keyTakeaways {
          margin-top: 40px;
          padding: 38px;
          border: 1px solid rgba(245, 158, 11, 0.24);
          border-radius: 26px;
          background:
            linear-gradient(
              120deg,
              rgba(245, 158, 11, 0.11),
              rgba(15, 23, 42, 0.8) 45%
            );
        }

        .keyTakeaways h2 {
          margin-bottom: 24px;
          font-size: 32px;
        }

        .takeawayGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .takeawayGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 17px;
          background: rgba(5, 7, 11, 0.3);
        }

        .takeawayGrid strong {
          color: #fbbf24;
          font-size: 17px;
        }

        .takeawayGrid p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.58;
        }

        .completionPanel {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: center;
          margin-top: 34px;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 26px;
          background: rgba(15, 23, 42, 0.76);
        }

        .completionPanel > div:first-child {
          max-width: 670px;
        }

        .completionPanel h2 {
          margin-bottom: 10px;
          font-size: 28px;
        }

        .completionPanel p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.68;
        }

        .completionActions {
          display: flex;
          flex-direction: column;
          gap: 11px;
          min-width: 215px;
        }

        .secondaryButton,
        .primaryButton {
          padding: 13px 17px;
          border-radius: 13px;
          font-weight: 900;
          text-align: center;
          text-decoration: none;
        }

        .secondaryButton {
          border: 1px solid rgba(245, 158, 11, 0.4);
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .secondaryButton:hover {
          background: rgba(245, 158, 11, 0.17);
        }

        .primaryButton {
          background: #f59e0b;
          color: #111827;
        }

        .primaryButton:hover {
          background: #fbbf24;
        }

        @media (max-width: 800px) {
          .page {
            padding: 28px 14px 60px;
          }

          .lessonNavigation,
          .completionPanel {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero,
          .lessonSection,
          .workflowSection,
          .keyTakeaways,
          .completionPanel {
            padding: 25px;
          }

          .learningObjectives {
            grid-template-columns: 1fr;
            padding: 25px;
          }

          .takeawayGrid {
            grid-template-columns: 1fr;
          }

          .completionActions {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .lessonLocation {
            font-size: 0.76rem;
          }

          .hero {
            padding: 23px;
          }

          .lessonSection,
          .workflowSection,
          .keyTakeaways,
          .completionPanel {
            padding: 21px;
            border-radius: 20px;
          }

          .workflowCard {
            grid-template-columns: 1fr;
          }

          .sectionHeading h2 {
            font-size: 27px;
          }
        }
      `}</style>
    </main>
  );
}