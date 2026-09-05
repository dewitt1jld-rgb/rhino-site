import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Door Hardware Overview",
    href: "/dashboard/introductory-software-training/lesson-19-hardware-overview",
  },
  {
    number: 2,
    title: "Common Hardware Components",
    href: "/dashboard/introductory-software-training/lesson-19-common-hardware",
  },
  {
    number: 3,
    title: "Hardware Prep Requirements",
    href: "/dashboard/introductory-software-training/lesson-19-hardware-prep-requirements",
  },
  {
    number: 4,
    title: "Organizing Hardware",
    href: "/dashboard/introductory-software-training/lesson-19-organizing-hardware",
  },
];

export default function LessonNineteenOrganizingHardwarePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="19"
      lessonTitle="Door Hardware & Components"
      lessonDescription="Learn how common door hardware is organized, what information matters for fabrication, and how hardware records connect to door preparations."
      currentStep={4}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 4 of 4
      </p>

      <h2>
        Organizing Hardware
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to organize hardware information and fabrication preparations
        so the correct prep can be found, verified, and applied when you begin
        working with doors.
      </div>

      <div className="lessonText">
        <p>
          Once you begin working with several manufacturers, door types, and
          hardware families, organization becomes extremely important.
        </p>

        <p>
          A company may eventually have dozens or even hundreds of reusable
          hardware preparations. If they are named poorly or stored without a
          consistent system, finding the correct prep can become harder than
          creating it.
        </p>

        <p>
          Good organization helps reduce mistakes and makes it easier for
          another person to understand what a saved preparation was built for.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          A Library Fab should be understandable without opening every
          operation.
        </strong>

        <p>
          The name and organization should give the user enough information to
          identify the hardware before the prep is applied to production
          material.
        </p>
      </div>

      <h3>
        Start With the Hardware Schedule
      </h3>

      <div className="lessonText">
        <p>
          On a typical project, your hardware schedule or hardware information
          should be your starting point.
        </p>

        <p>
          Work through the hardware assigned to each entrance and identify the
          exact items that may require fabrication.
        </p>
      </div>

      <div className="workflowGrid">
        <div className="workflowCard">
          <span>1</span>

          <div>
            <strong>
              Review the Hardware
            </strong>

            <p>
              Determine what hardware has been specified for the entrance.
            </p>
          </div>
        </div>

        <div className="workflowCard">
          <span>2</span>

          <div>
            <strong>
              Identify the Exact Model
            </strong>

            <p>
              Verify manufacturer, series, size, handing, and configuration.
            </p>
          </div>
        </div>

        <div className="workflowCard">
          <span>3</span>

          <div>
            <strong>
              Find the Prep
            </strong>

            <p>
              Search for an existing Library Fab that matches the hardware.
            </p>
          </div>
        </div>

        <div className="workflowCard">
          <span>4</span>

          <div>
            <strong>
              Verify or Create
            </strong>

            <p>
              Confirm the existing prep is correct or create a new one if
              necessary.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Use Clear Naming
      </h3>

      <div className="lessonText">
        <p>
          A useful hardware prep name should tell the next user what the
          preparation belongs to.
        </p>

        <p>
          Avoid vague names such as <strong>LOCK</strong>,{" "}
          <strong>HINGE</strong>, or <strong>EXIT DEVICE</strong> when several
          different versions may exist.
        </p>

        <p>
          A more descriptive name can include the manufacturer, model, size, or
          another identifying detail that separates one prep from another.
        </p>
      </div>

      <div className="namingComparison">
        <div className="badExample">
          <p className="sectionLabel">
            Too General
          </p>

          <strong>
            LOCK
          </strong>

          <p>
            This does not identify the manufacturer, model, or actual
            preparation.
          </p>
        </div>

        <div className="comparisonArrow">
          →
        </div>

        <div className="goodExample">
          <p className="sectionLabel">
            Better
          </p>

          <strong>
            Manufacturer + Model + Prep
          </strong>

          <p>
            Gives the user enough information to understand what the saved
            fabrication was created for.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Pick a naming system and stay consistent.
        </strong>

        <p>
          The exact naming convention is less important than having a system
          everyone in the company understands and follows.
        </p>
      </div>

      <h3>
        A Simple Naming Structure
      </h3>

      <div className="sectionBox">
        <p className="sectionLabel">
          Example Naming Pattern
        </p>

        <div className="namingPattern">
          <div>
            <span>01</span>

            <strong>
              Manufacturer
            </strong>
          </div>

          <div className="plusSymbol">
            +
          </div>

          <div>
            <span>02</span>

            <strong>
              Model / Series
            </strong>
          </div>

          <div className="plusSymbol">
            +
          </div>

          <div>
            <span>03</span>

            <strong>
              Prep Type
            </strong>
          </div>

          <div className="plusSymbol">
            +
          </div>

          <div>
            <span>04</span>

            <strong>
              Size / Variation
            </strong>
          </div>
        </div>
      </div>

      <div className="lessonText">
        <p>
          You do not have to include every piece of information in every prep
          name.
        </p>

        <p>
          The goal is simply to include enough information to distinguish the
          prep from other similar hardware.
        </p>
      </div>

      <h3>
        Organize by Hardware Type
      </h3>

      <div className="lessonText">
        <p>
          Hardware can also be easier to manage when similar preparations are
          grouped together.
        </p>

        <p>
          Depending on how your company manages the Fab Rules Library, you may
          find it useful to think of the library in major hardware categories.
        </p>
      </div>

      <div className="categoryGrid">
        <div>
          <strong>
            Hinges &amp; Pivots
          </strong>

          <p>
            Reusable swing and support hardware preparations.
          </p>
        </div>

        <div>
          <strong>
            Locks &amp; Cylinders
          </strong>

          <p>
            Lock-body, cylinder, spindle, and related preparations.
          </p>
        </div>

        <div>
          <strong>
            Strikes
          </strong>

          <p>
            Frame-side latch and locking preparations.
          </p>
        </div>

        <div>
          <strong>
            Exit Devices
          </strong>

          <p>
            Panic hardware and related mounting patterns.
          </p>
        </div>

        <div>
          <strong>
            Closers
          </strong>

          <p>
            Closer and arm mounting preparations.
          </p>
        </div>

        <div>
          <strong>
            Pulls &amp; Handles
          </strong>

          <p>
            Reusable drilling patterns based on mounting dimensions.
          </p>
        </div>
      </div>

      <h3>
        Avoid Duplicate Preparations
      </h3>

      <div className="lessonText">
        <p>
          Before creating a new Library Fab, search the existing library.
        </p>

        <p>
          If the correct prep already exists, creating another copy can make
          the library harder to manage and create confusion about which version
          should be used.
        </p>
      </div>

      <div className="duplicateFlow">
        <div>
          <span>1</span>

          <strong>
            Search
          </strong>

          <p>
            Look for an existing prep for the hardware.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>2</span>

          <strong>
            Verify
          </strong>

          <p>
            Compare the saved prep against the manufacturer template.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>3</span>

          <strong>
            Reuse or Create
          </strong>

          <p>
            Reuse a verified prep or create a new one only when required.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Do not create a duplicate just because you do not recognize the
          existing name.
        </strong>

        <p>
          Open the existing prep and verify what it was built for before
          deciding whether another preparation is necessary.
        </p>
      </div>

      <h3>
        Keep Hardware and Preps Connected
      </h3>

      <div className="lessonText">
        <p>
          A useful hardware workflow keeps the hardware information and the
          corresponding fabrication prep easy to associate with one another.
        </p>

        <p>
          When someone sees a hardware item on the project, they should be able
          to determine which preparation belongs with it.
        </p>
      </div>

      <div className="connectionBox">
        <div>
          <p className="sectionLabel">
            Project Hardware
          </p>

          <strong>
            Exact Hardware Item
          </strong>

          <span>
            Manufacturer, model, size, and configuration.
          </span>
        </div>

        <div className="connectionArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Saved Preparation
          </p>

          <strong>
            Matching Library Fab
          </strong>

          <span>
            The machining pattern built for that hardware.
          </span>
        </div>

        <div className="connectionArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Door Fabrication
          </p>

          <strong>
            Apply the Prep
          </strong>

          <span>
            Position the verified preparation on the actual door.
          </span>
        </div>
      </div>

      <h3>
        Document Special Hardware
      </h3>

      <div className="lessonText">
        <p>
          Not every hardware prep will be common.
        </p>

        <p>
          If a preparation is unusual, custom, or easy to confuse with another
          version, make the name and documentation especially clear.
        </p>
      </div>

      <div className="specialGrid">
        <div>
          <strong>
            Custom Hardware
          </strong>

          <p>
            Clearly identify hardware that was created for one specific project
            or special condition.
          </p>
        </div>

        <div>
          <strong>
            Similar Variations
          </strong>

          <p>
            Make the difference obvious when two models look similar but use
            different preps.
          </p>
        </div>

        <div>
          <strong>
            Revised Hardware
          </strong>

          <p>
            If hardware changes, make sure users are not accidentally selecting
            an outdated preparation.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          The next person using the prep may not be the person who created it.
        </strong>

        <p>
          Organize the library so another trained user can identify the correct
          preparation without needing to know the history behind every saved
          record.
        </p>
      </div>

      <h3>
        Prepare the Hardware Before Door Fabrication
      </h3>

      <div className="lessonText">
        <p>
          Before opening the Door Fabrication screen, it is helpful to know
          which hardware preparations will be required for the doors you are
          about to process.
        </p>

        <p>
          This does not mean every prep must be created from scratch. It means
          the hardware should be identified and the required Library Fabs
          should be available and verified.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Before Door Fabrication
        </p>

        <div className="readyChecklist">
          <div>
            <span>✓</span>

            <p>
              Hardware schedule reviewed
            </p>
          </div>

          <div>
            <span>✓</span>

            <p>
              Manufacturers and models identified
            </p>
          </div>

          <div>
            <span>✓</span>

            <p>
              Manufacturer templates available
            </p>
          </div>

          <div>
            <span>✓</span>

            <p>
              Existing Library Fabs verified
            </p>
          </div>

          <div>
            <span>✓</span>

            <p>
              Missing preparations created
            </p>
          </div>

          <div>
            <span>✓</span>

            <p>
              Hardware locations understood
            </p>
          </div>
        </div>
      </div>

      <h3>
        Lesson 19 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Identify
            </strong>

            <p>
              Determine exactly what hardware belongs on the entrance.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Organize
            </strong>

            <p>
              Use clear, consistent names for reusable preparations.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Verify
            </strong>

            <p>
              Compare existing preps against the correct hardware information.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Prepare
            </strong>

            <p>
              Make sure the correct Library Fabs are ready before processing
              the doors.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">
          Lesson 19 Complete
        </p>

        <h3>
          You now have the hardware foundation.
        </h3>

        <p>
          You should now understand the major hardware categories, what
          information is required to determine a hardware prep, and how to keep
          those preparations organized for future use.
        </p>

        <p>
          In Lesson 20, we will move into the{" "}
          <strong>Door Fabrication</strong> screen and begin applying those
          preparations to actual doors.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-19-hardware-prep-requirements"
          className="secondary"
        >
          ← Previous: Hardware Prep Requirements
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Complete Lesson 19 →
        </Link>
      </div>

      <style jsx>{`
        .workflowGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .workflowCard {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .workflowCard > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .workflowCard strong {
          color: #ffffff;
        }

        .workflowCard p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .namingComparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 24px 0 34px;
        }

        .namingComparison > div:not(.comparisonArrow) {
          padding: 22px;
          border-radius: 18px;
        }

        .badExample {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.22);
        }

        .goodExample {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.22);
        }

        .namingComparison strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 19px;
        }

        .namingComparison p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .comparisonArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .namingPattern {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 12px;
        }

        .namingPattern > div:not(.plusSymbol) {
          display: grid;
          gap: 6px;
          padding: 17px;
          text-align: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .namingPattern span {
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .namingPattern strong {
          color: #ffffff;
        }

        .plusSymbol {
          color: #f59e0b;
          font-size: 20px;
          font-weight: 900;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .categoryGrid > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .categoryGrid strong {
          color: #f59e0b;
        }

        .categoryGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .duplicateFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .duplicateFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .duplicateFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .duplicateFlow strong {
          color: #ffffff;
        }

        .duplicateFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow,
        .connectionArrow {
          color: #f59e0b;
          font-size: 26px;
          font-weight: 900;
        }

        .connectionBox {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .connectionBox > div:not(.connectionArrow) {
          display: grid;
          gap: 6px;
          padding: 16px;
          text-align: center;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.16);
        }

        .connectionBox strong {
          color: #ffffff;
        }

        .connectionBox span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
          font-size: 14px;
        }

        .specialGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .specialGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .specialGrid strong {
          color: #f59e0b;
        }

        .specialGrid p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .readyChecklist {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .readyChecklist > div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .readyChecklist span {
          color: #f59e0b;
          font-weight: 900;
        }

        .readyChecklist p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
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
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
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

        @media (max-width: 900px) {
          .namingPattern {
            grid-template-columns: 1fr;
          }

          .plusSymbol {
            text-align: center;
          }

          .specialGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 800px) {
          .namingComparison,
          .duplicateFlow,
          .connectionBox {
            grid-template-columns: 1fr;
          }

          .comparisonArrow,
          .flowArrow,
          .connectionArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .workflowGrid,
          .categoryGrid,
          .readyChecklist,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}