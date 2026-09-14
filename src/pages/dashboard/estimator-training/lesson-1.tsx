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

export default function EstimatorLessonOnePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="01"
      lessonTitle="Before You Start Estimating"
      lessonDescription="Understand what this course is designed to teach, what it is not designed to teach, and what must be verified before relying on estimating results."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 2
      </p>

      <h2>
        What This Course Is — and Is Not
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand the purpose of this training before using Glazier Studio or
        PartnerPak to build real estimates.
      </div>

      <div className="lessonText">
        <p>
          Before you begin estimating, it is important to understand exactly
          what this training is designed to teach — and what it is{" "}
          <strong>not</strong> designed to teach.
        </p>

        <p>
          Estimating can be extremely customizable. Every company has its own
          procedures, material costs, labor rates, supplier agreements,
          markups, waste factors, installation methods, overhead, and internal
          estimating practices.
        </p>

        <p>
          Because of that, there is no single pricing system that applies to
          every company or every project.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">
          Important Pricing Disclaimer
        </p>

        <h3>
          This is software training — not pricing advice.
        </h3>

        <p>
          This course is <strong>not</strong> intended to teach you what to
          charge for a project, what your labor rates should be, how much
          markup you should use, or what a particular project should cost.
        </p>

        <p>
          Any material costs, labor rates, markups, quantities, or pricing
          examples shown throughout this course are used only to demonstrate
          how the software works.
        </p>

        <p>
          <strong>
            Do not use any example shown in this training as real-world pricing
            or as advice on what, when, or how much your company should charge.
          </strong>
        </p>
      </div>

      <h3>
        Every Company Is Different
      </h3>

      <div className="lessonText">
        <p>
          Two companies can look at the exact same project and use very
          different estimating procedures.
        </p>

        <p>
          One company may purchase material at a different price, use a
          different labor rate, include different waste percentages, install
          the product differently, or use a completely different markup
          structure.
        </p>

        <p>
          Those differences are normal.
        </p>

        <p>
          The purpose of this course is not to replace your company&apos;s
          estimating procedures. Instead, it is designed to show you how to use{" "}
          <strong>Glazier Studio and PartnerPak</strong> to support those
          procedures.
        </p>
      </div>

      <div className="explanationGrid">
        <section className="explanationCard">
          <p className="sectionLabel">
            This Course Will Teach
          </p>

          <h3>
            How to use the software
          </h3>

          <p>
            Learn how to enter projects, build framing systems, add doors,
            configure labor, review costs, and generate estimating information.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">
            This Course Will Not Teach
          </p>

          <h3>
            What your company should charge
          </h3>

          <p>
            Pricing strategy, labor rates, markups, profit expectations, and
            final selling prices must be determined by your company.
          </p>
        </section>
      </div>

      <h3>
        What We Are Trying to Accomplish
      </h3>

      <div className="lessonText">
        <p>
          The goal of this training is to show you how to take information from
          a new project and enter it into Glazier Studio or PartnerPak in a way
          that allows the software to quickly calculate and organize estimating
          information.
        </p>

        <p>
          Once the software is configured correctly, it can dramatically
          reduce the amount of repetitive math and manual calculation required
          to estimate a project.
        </p>

        <p>
          However, the software can only calculate information based on the
          data and settings that have been entered into it.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          The software does not know whether your numbers are correct.
        </strong>

        <p>
          Glazier Studio and PartnerPak will calculate using the information
          they have been given. It is your responsibility to make sure that
          information accurately represents your company&apos;s estimating
          process.
        </p>
      </div>

      <h3>
        Testing Must Be Done Before Trusting Final Numbers
      </h3>

      <div className="lessonText">
        <p>
          Before your company begins relying on Glazier Studio or PartnerPak
          for real project pricing, the estimating setup must be tested.
        </p>

        <p>
          Material costs, labor values, quantities, defaults, waste factors,
          formulas, and other settings should all be checked against known
          examples.
        </p>

        <p>
          Do not assume that a number is correct simply because the software
          calculated it.
        </p>
      </div>

      <h3>
        This Course Starts From Ground Zero
      </h3>

      <div className="lessonText">
        <p>
          This estimating course begins with the basics and assumes that some
          users may be completely new to Glazier Studio and PartnerPak.
        </p>

        <p>
          Because of that, you will see some concepts that overlap with the
          Glazier Studio / PartnerPak Foundations course.
        </p>

        <p>
          If you already understand a topic, feel free to move past it.
          Experienced users do not need to work through every basic concept
          again.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          How to Use This Course
        </p>

        <div className="workflowGrid">
          <div className="workflowStep">
            <span>1</span>

            <div>
              <strong>Start With the Basics</strong>

              <p>
                New users can follow the course from beginning to end.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>2</span>

            <div>
              <strong>Skip What You Already Know</strong>

              <p>
                Experienced users can move directly to the estimating topics
                they need.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>3</span>

            <div>
              <strong>Build Your Own Setup</strong>

              <p>
                Enter the costs, labor rates, and procedures that apply to your
                company.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>4</span>

            <div>
              <strong>Test the Results</strong>

              <p>
                Verify the system before depending on it for real project
                pricing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="calloutBox finalCallout">
        <strong>
          Remember this throughout the course:
        </strong>

        <p>
          We are teaching you how to use the estimating tools. Your company is
          responsible for determining the numbers that go into those tools and
          verifying the numbers that come back out.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training"
          className="secondary"
        >
          ← Back to Estimator Training
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-1-role-of-estimator"
          className="primary"
        >
          Next: The Role of an Estimator →
        </Link>
      </div>

      <style jsx>{`
        .warningBox,
        .criticalBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.38);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.32);
          background: rgba(239, 68, 68, 0.07);
        }

        .warningBox h3,
        .criticalBox h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel),
        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.75;
        }

        .warningBox p:not(.sectionLabel) + p,
        .criticalBox p:not(.sectionLabel) + p {
          margin-top: 15px;
        }

        .explanationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 36px;
        }

        .explanationCard {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .explanationCard h3 {
          margin: 3px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .explanationCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .workflowGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .workflowStep {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .workflowStep > span {
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

        .workflowStep strong {
          color: #ffffff;
        }

        .workflowStep p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .finalCallout {
          margin-top: 34px;
        }

        @media (max-width: 760px) {
          .explanationGrid,
          .workflowGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}