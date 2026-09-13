import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "What This Course Is — and Is Not",
    href: "/dashboard/estimator-training/lesson-1",
  },
  {
    number: 2,
    title: "The Role of an Estimator",
    href: "/dashboard/estimator-training/lesson-1-role-of-estimator",
  },
];

export default function EstimatorLessonOneRolePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="01"
      lessonTitle="Before You Start Estimating"
      lessonDescription="Understand what this course is designed to teach, what it is not designed to teach, and what must be verified before relying on estimating results."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 2
      </p>

      <h2>
        The Role of an Estimator
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand what an estimator is trying to accomplish and why reviewing
        project information carefully is so important.
      </div>

      <div className="lessonText">
        <p>
          Estimating is the process of taking a new project and converting the
          drawings, specifications, and available project information into an
          accurate bid.
        </p>

        <p>
          The goal is to determine what the company believes will be required
          to complete the work and turn that information into a price that can
          be submitted in hopes of winning the project.
        </p>
      </div>

      <h3>
        The Balance an Estimator Is Trying to Find
      </h3>

      <div className="comparisonGrid">
        <section className="comparisonCard">
          <p className="sectionLabel">
            Estimate Too Low
          </p>

          <h3>
            Winning the job is not always winning.
          </h3>

          <p>
            If important material, labor, equipment, or project requirements
            are missed, the company may win the project but lose money while
            completing it.
          </p>
        </section>

        <section className="comparisonCard">
          <p className="sectionLabel">
            Estimate Too High
          </p>

          <h3>
            The project may go somewhere else.
          </h3>

          <p>
            If your bid is significantly higher than competing bids, another
            company may win the project instead.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          The estimator is trying to create a bid that is both complete and
          competitive.
        </strong>

        <p>
          That requires understanding the project, identifying what is actually
          required, and making sure those requirements are represented in the
          estimate.
        </p>
      </div>

      <h3>
        You Will Not Always Have Perfect Information
      </h3>

      <div className="lessonText">
        <p>
          One of the challenges of estimating is that projects are often being
          priced before every detail is completely finalized.
        </p>

        <p>
          Opening sizes may not have been field measured yet. Some details may
          still be conceptual. Hardware may not be fully selected. Drawings may
          continue to change as the project develops.
        </p>

        <p>
          At the bidding stage, you are typically estimating from the plans,
          drawings, specifications, and other information available at that
          time.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Bid From the Information You Have
        </p>

        <div className="lessonText">
          <p>
            Your estimate should be based on the project requirements shown or
            specified when the bid is prepared.
          </p>

          <p>
            If the project changes later, those changes may be handled through
            revised pricing or change orders depending on your company&apos;s
            procedures and contract requirements.
          </p>
        </div>
      </div>

      <h3>
        Do Not Read Only the Elevations
      </h3>

      <div className="lessonText">
        <p>
          A common mistake when estimating is focusing only on the main
          elevations and overlooking information located elsewhere in the
          project documents.
        </p>

        <p>
          Specifications, schedules, general notes, detail pages, and written
          descriptions can contain requirements that dramatically change the
          cost of a project.
        </p>
      </div>

      <div className="requirementsGrid">
        <div>
          <strong>Glass</strong>
          <span>
            Specific glass types, thicknesses, coatings, or performance
            requirements.
          </span>
        </div>

        <div>
          <strong>Hardware</strong>
          <span>
            Special door hardware, closers, panic devices, locks, and other
            components.
          </span>
        </div>

        <div>
          <strong>Finishes</strong>
          <span>
            Different aluminum finishes or project-specific color
            requirements.
          </span>
        </div>

        <div>
          <strong>Doors</strong>
          <span>
            Door sizes, configurations, hardware requirements, and special
            preparations.
          </span>
        </div>

        <div>
          <strong>Fabrication</strong>
          <span>
            Special machining, reinforcing, anchors, or structural
            requirements.
          </span>
        </div>

        <div>
          <strong>Installation</strong>
          <span>
            Sealants, equipment, access requirements, lifts, or unusual field
            conditions.
          </span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          A small note on a drawing can create a large change in price.
        </strong>

        <p>
          This is why a good estimating process involves more than simply
          building the elevation in the software.
        </p>
      </div>

      <h3>
        Speed Matters — But Accuracy Matters More
      </h3>

      <div className="lessonText">
        <p>
          One of the biggest advantages of Glazier Studio and PartnerPak is the
          ability to automate calculations that would otherwise take a large
          amount of time to perform manually.
        </p>

        <p>
          Once your estimating system is configured properly, the software can
          make building estimates significantly faster.
        </p>

        <p>
          But producing an estimate quickly does not help if important
          information was missed.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Key Takeaway
        </p>

        <h3>
          The software is only as accurate as the information you put into it.
        </h3>

        <p>
          Glazier Studio and PartnerPak can make estimating much faster, but it
          is still the estimator&apos;s responsibility to review the drawings,
          understand the project requirements, verify the estimating setup, and
          confirm the final numbers before submitting a bid.
        </p>
      </div>

      <h3>
        Where We Go From Here
      </h3>

      <div className="lessonText">
        <p>
          Now that we understand the purpose of the course and the role of the
          estimator, we can begin looking at how Glazier Studio can actually be
          used to build an estimate.
        </p>

        <p>
          In the next lesson, we will look at two different ways companies can
          structure their estimating workflow using metal groups.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-1"
          className="secondary"
        >
          ← Previous: What This Course Is
        </Link>

        <Link
          href="/dashboard/estimator-training"
          className="primary"
        >
          Finish Lesson 1 →
        </Link>
      </div>

      <style jsx>{`
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .comparisonCard {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .comparisonCard h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .comparisonCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .requirementsGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .requirementsGrid > div {
          padding: 18px 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .requirementsGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .requirementsGrid span {
          display: block;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .takeawayBox {
          margin: 34px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.38);
          border-radius: 18px;
          background:
            linear-gradient(
              135deg,
              rgba(245, 158, 11, 0.1),
              rgba(255, 255, 255, 0.025)
            );
        }

        .takeawayBox h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 25px;
          line-height: 1.35;
        }

        .takeawayBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.75;
        }

        @media (max-width: 760px) {
          .comparisonGrid,
          .requirementsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}