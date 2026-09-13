import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

type LessonStep = {
  id: number;
  shortTitle: string;
  title: string;
};

const steps: LessonStep[] = [
  {
    id: 1,
    shortTitle: "What This Course Is",
    title: "What This Course Is — and Is Not",
  },
  {
    id: 2,
    shortTitle: "The Role of an Estimator",
    title: "The Role of an Estimator",
  },
];

export default function EstimatorLessonOnePage() {
  const [activeStep, setActiveStep] = useState(1);

  const currentStep =
    steps.find(
      (step) => step.id === activeStep
    ) || steps[0];

  function goToPreviousStep() {
    if (activeStep > 1) {
      setActiveStep(
        (current) => current - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function goToNextStep() {
    if (activeStep < steps.length) {
      setActiveStep(
        (current) => current + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Head>
        <title>
          Before You Start Estimating | The Rhino Wrangler
        </title>

        <meta
          name="description"
          content="Learn the purpose of estimator training and the role accurate estimating plays in Glazier Studio and PartnerPak."
        />
      </Head>

      <main className="lessonPage">
        <aside className="sidebar">
          <div className="sidebarInner">
            <Link
              href="/dashboard/estimator-training"
              className="backLink"
            >
              ← Back to Estimator Training
            </Link>

            <div className="lessonLabel">
              LESSON 01
            </div>

            <h1>
              Before You Start Estimating
            </h1>

            <p className="sidebarDescription">
              Understand the purpose of this course,
              what estimating software can and cannot
              do, and the responsibility of the
              estimator.
            </p>

            <div className="stepList">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setActiveStep(step.id);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className={
                    activeStep === step.id
                      ? "stepButton active"
                      : "stepButton"
                  }
                >
                  <div className="stepNumber">
                    {step.id}
                  </div>

                  <div className="stepText">
                    <span>
                      Section {step.id}
                    </span>

                    <strong>
                      {step.shortTitle}
                    </strong>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="content">
          <div className="contentInner">
            <div className="topBar">
              <div>
                <div className="sectionLabel">
                  SECTION {activeStep} OF {steps.length}
                </div>

                <h2>
                  {currentStep.title}
                </h2>
              </div>

              <div className="lessonProgress">
                <span>
                  Lesson Progress
                </span>

                <div className="progressTrack">
                  <div
                    className="progressFill"
                    style={{
                      width: `${
                        (activeStep /
                          steps.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {activeStep === 1 && (
              <SectionOne />
            )}

            {activeStep === 2 && (
              <SectionTwo />
            )}

            <div className="navigation">
              <button
                type="button"
                onClick={goToPreviousStep}
                disabled={activeStep === 1}
                className="navButton secondary"
              >
                ← Previous Section
              </button>

              {activeStep <
              steps.length ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="navButton primary"
                >
                  Next Section →
                </button>
              ) : (
                <Link
                  href="/dashboard/estimator-training"
                  className="navButton primary"
                >
                  Finish Lesson →
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .lessonPage {
          min-height: 100vh;
          display: grid;
          grid-template-columns:
            330px minmax(0, 1fr);
          background: #f5f6f8;
          color: #111827;
        }

        .sidebar {
          background: #0b1220;
          color: white;
          border-right: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .sidebarInner {
          position: sticky;
          top: 0;
          padding: 36px 26px;
        }

        :global(.backLink) {
          display: inline-block;
          margin-bottom: 36px;
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        :global(.backLink:hover) {
          color: #f59e0b;
        }

        .lessonLabel {
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .sidebar h1 {
          margin: 0;
          font-size: 27px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .sidebarDescription {
          margin: 14px 0 30px;
          color: #aeb7c5;
          font-size: 14px;
          line-height: 1.65;
        }

        .stepList {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stepButton {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 14px;
          border: 1px solid
            rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          background:
            rgba(255, 255, 255, 0.035);
          color: white;
          text-align: left;
          cursor: pointer;
          transition:
            background 0.15s ease,
            border-color 0.15s ease;
        }

        .stepButton:hover {
          background:
            rgba(255, 255, 255, 0.07);
        }

        .stepButton.active {
          border-color:
            rgba(245, 158, 11, 0.65);
          background:
            rgba(245, 158, 11, 0.12);
        }

        .stepNumber {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background:
            rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-weight: 900;
        }

        .stepButton.active
          .stepNumber {
          background: #f59e0b;
          color: #111827;
        }

        .stepText {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .stepText span {
          color: #8f9bad;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .stepText strong {
          color: #f3f4f6;
          font-size: 14px;
          line-height: 1.35;
        }

        .content {
          min-width: 0;
        }

        .contentInner {
          width: 100%;
          max-width: 950px;
          margin: 0 auto;
          padding: 58px 46px 80px;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          padding-bottom: 28px;
          margin-bottom: 34px;
          border-bottom: 1px solid #dfe3e8;
        }

        .sectionLabel {
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.13em;
        }

        .topBar h2 {
          margin: 0;
          font-size: clamp(
            32px,
            4vw,
            44px
          );
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .lessonProgress {
          flex: 0 0 180px;
        }

        .lessonProgress span {
          display: block;
          margin-bottom: 8px;
          color: #6b7280;
          font-size: 12px;
          font-weight: 800;
        }

        .progressTrack {
          height: 7px;
          border-radius: 999px;
          overflow: hidden;
          background: #e5e7eb;
        }

        .progressFill {
          height: 100%;
          border-radius: 999px;
          background: #f59e0b;
          transition: width 0.2s ease;
        }

        .navigation {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          margin-top: 46px;
          padding-top: 26px;
          border-top: 1px solid #dfe3e8;
        }

        .navButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          cursor: pointer;
        }

        .navButton.primary {
          border: 1px solid #f59e0b;
          background: #f59e0b;
          color: #111827;
        }

        .navButton.secondary {
          border: 1px solid #cfd5dc;
          background: white;
          color: #374151;
        }

        .navButton:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        @media (
          max-width: 900px
        ) {
          .lessonPage {
            grid-template-columns: 1fr;
          }

          .sidebarInner {
            position: static;
          }

          .stepList {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .contentInner {
            padding:
              40px 24px 70px;
          }
        }

        @media (
          max-width: 620px
        ) {
          .stepList {
            grid-template-columns: 1fr;
          }

          .topBar {
            align-items: flex-start;
            flex-direction: column;
          }

          .lessonProgress {
            width: 100%;
            flex: none;
          }

          .navigation {
            flex-direction: column;
          }

          .navButton {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

/*
--------------------------------------------------
SECTION 1
--------------------------------------------------
*/

function SectionOne() {
  return (
    <article className="article">
      <p className="lead">
        Before you begin estimating, it is important
        to understand exactly what this training is
        designed to teach — and what it is not.
      </p>

      <div className="warningBox">
        <div className="warningTitle">
          Important Pricing Disclaimer
        </div>

        <p>
          This course is <strong>not</strong> intended
          to teach you what to charge for a project,
          how to set your prices, what your labor rates
          should be, or what an average project should
          cost.
        </p>

        <p>
          Any pricing, labor rates, material costs,
          markups, or example numbers shown throughout
          these lessons are for demonstration purposes
          only.
        </p>

        <p>
          <strong>
            Do not use any example from this course as
            real-world pricing or as advice on what,
            when, or how much your company should charge.
          </strong>
        </p>
      </div>

      <h3>
        Every Company Is Different
      </h3>

      <p>
        Estimating is highly customizable. Two companies
        bidding the exact same project may use completely
        different procedures to arrive at their final
        price.
      </p>

      <p>
        Material costs, labor rates, waste factors,
        supplier agreements, overhead, markup strategies,
        installation methods, equipment, and internal
        procedures can all vary from one company to
        another.
      </p>

      <p>
        Because of that, this course will not attempt to
        tell you what those numbers should be.
      </p>

      <h3>
        What This Course Will Teach You
      </h3>

      <p>
        The purpose of this training is to help you
        understand how to use
        <strong> Glazier Studio and PartnerPak </strong>
        as estimating tools.
      </p>

      <p>
        You will learn how to take project information,
        enter it into the software, organize it properly,
        and use the program to quickly calculate and
        review project costs.
      </p>

      <div className="infoBox">
        <strong>
          The goal is not to tell you what your estimate
          should cost.
        </strong>

        <p>
          The goal is to show you how to configure and
          use the software so that it can produce useful
          estimating information based on your
          company&apos;s own numbers and procedures.
        </p>
      </div>

      <h3>
        Testing Is Required
      </h3>

      <p>
        Before trusting any final number produced by
        Glazier Studio or PartnerPak, your company should
        test and verify its estimating setup.
      </p>

      <p>
        Make sure your material costs, labor values,
        defaults, quantities, waste factors, and other
        settings are behaving the way you expect them to.
      </p>

      <div className="criticalBox">
        <strong>
          Do not assume that a number is correct simply
          because the software calculated it.
        </strong>

        <p>
          Testing must be performed on your end before
          relying on the software for real project
          pricing.
        </p>
      </div>

      <h3>
        Starting From Ground Zero
      </h3>

      <p>
        This course starts from the beginning and assumes
        that you may be completely new to estimating with
        Glazier Studio and PartnerPak.
      </p>

      <p>
        Because of that, some topics will overlap with
        concepts covered in the Glazier Studio /
        PartnerPak Foundations course.
      </p>

      <p>
        If you are already familiar with a topic, feel
        free to skip ahead. You do not need to complete
        every page in order if you already understand
        some of the fundamentals.
      </p>

      <ArticleStyles />
    </article>
  );
}

/*
--------------------------------------------------
SECTION 2
--------------------------------------------------
*/

function SectionTwo() {
  return (
    <article className="article">
      <p className="lead">
        Estimating is the process of taking a new project
        and converting the drawings, specifications, and
        available project information into an accurate
        bid.
      </p>

      <h3>
        What Is Estimating?
      </h3>

      <p>
        A new project may begin with architectural
        drawings, engineering drawings, elevations,
        schedules, specifications, written notes, and
        other information provided by the customer,
        architect, contractor, or project team.
      </p>

      <p>
        The estimator takes that information and
        determines what the company believes will be
        required to complete the work.
      </p>

      <p>
        That information is then converted into a bid in
        hopes that the company can win the project and
        perform the work successfully.
      </p>

      <div className="balanceBox">
        <div className="balanceItem">
          <span className="balanceIcon">
            ↓
          </span>

          <div>
            <strong>
              Estimate Too Low
            </strong>

            <p>
              The company may win the project but lose
              money while completing the work.
            </p>
          </div>
        </div>

        <div className="balanceItem">
          <span className="balanceIcon">
            ↑
          </span>

          <div>
            <strong>
              Estimate Too High
            </strong>

            <p>
              Another company may submit a more
              competitive bid and win the project.
            </p>
          </div>
        </div>
      </div>

      <p>
        This is why estimating can have such a large
        impact on a company. The estimator is constantly
        trying to create a price that is both competitive
        and complete.
      </p>

      <h3>
        You Will Not Always Have Perfect Information
      </h3>

      <p>
        At the time a project is being bid, many details
        may still be theoretical.
      </p>

      <p>
        Opening sizes may not have been field verified.
        Final hardware may not be selected. Details may
        still be changing. Some dimensions may be based
        entirely on architectural drawings rather than
        actual field conditions.
      </p>

      <p>
        In most cases, you are estimating the project
        based on the plans, drawings, specifications, and
        information available at the time the bid is
        submitted.
      </p>

      <div className="infoBox">
        <strong>
          Bid what is shown and specified.
        </strong>

        <p>
          If project requirements change later, those
          changes may be handled separately through
          revisions or change orders depending on your
          company&apos;s procedures and contract
          requirements.
        </p>
      </div>

      <h3>
        Read More Than the Elevations
      </h3>

      <p>
        One of the most important habits an estimator can
        develop is reviewing all of the information sent
        over for bidding.
      </p>

      <p>
        Do not assume that everything important will be
        shown directly on the elevation.
      </p>

      <p>
        Notes, specifications, schedules, detail pages,
        and written descriptions may contain requirements
        that dramatically change the cost of a project.
      </p>

      <div className="checkList">
        <div>
          ✓ Specific glass types
        </div>

        <div>
          ✓ Special hardware
        </div>

        <div>
          ✓ Different finishes
        </div>

        <div>
          ✓ Door requirements
        </div>

        <div>
          ✓ Structural requirements
        </div>

        <div>
          ✓ Accessories
        </div>

        <div>
          ✓ Sealants and consumables
        </div>

        <div>
          ✓ Special fabrication
        </div>

        <div>
          ✓ Installation requirements
        </div>

        <div>
          ✓ Other project-specific requirements
        </div>
      </div>

      <p>
        Missing even one of these items can cause a
        significant difference between your estimate and
        the actual cost of completing the project.
      </p>

      <h3>
        Speed Matters — But Accuracy Matters More
      </h3>

      <p>
        Glazier Studio and PartnerPak can greatly reduce
        the amount of time required to build an estimate.
        Once the system is configured properly, many
        calculations that would otherwise need to be done
        manually can be performed automatically.
      </p>

      <p>
        However, speed is only valuable when the
        information going into the system is accurate.
      </p>

      <div className="takeaway">
        <div className="takeawayLabel">
          KEY TAKEAWAY
        </div>

        <h4>
          The software is only as accurate as the
          information you put into it.
        </h4>

        <p>
          Glazier Studio and PartnerPak can make
          estimating much faster, but it is still the
          estimator&apos;s responsibility to review the
          drawings, understand the project requirements,
          verify the setup, and confirm the final numbers
          before submitting a bid.
        </p>
      </div>

      <p className="closing">
        Throughout the rest of this course, we will focus
        on creating a workflow that helps you build
        estimates quickly while reducing the chance that
        important project information is overlooked.
      </p>

      <ArticleStyles />
    </article>
  );
}

/*
--------------------------------------------------
SHARED ARTICLE STYLES
--------------------------------------------------
*/

function ArticleStyles() {
  return (
    <style jsx>{`
      .article {
        font-size: 17px;
        line-height: 1.8;
        color: #374151;
      }

      .lead {
        margin: 0 0 32px;
        color: #1f2937;
        font-size: 20px;
        line-height: 1.7;
      }

      h3 {
        margin: 38px 0 12px;
        color: #111827;
        font-size: 25px;
        line-height: 1.25;
        letter-spacing: -0.015em;
      }

      p {
        margin: 0 0 18px;
      }

      .warningBox,
      .infoBox,
      .criticalBox,
      .takeaway {
        margin: 28px 0;
        padding: 22px 24px;
        border-radius: 12px;
      }

      .warningBox {
        border: 1px solid #f0c76f;
        border-left: 5px solid #f59e0b;
        background: #fff9e9;
      }

      .warningTitle {
        margin-bottom: 10px;
        color: #945d00;
        font-size: 18px;
        font-weight: 900;
      }

      .warningBox p:last-child,
      .infoBox p:last-child,
      .criticalBox p:last-child,
      .takeaway p:last-child {
        margin-bottom: 0;
      }

      .infoBox {
        border: 1px solid #ccd7e4;
        border-left: 5px solid #64748b;
        background: #f7f9fc;
      }

      .criticalBox {
        border: 1px solid #e1b5b5;
        border-left: 5px solid #b42318;
        background: #fff5f5;
      }

      .criticalBox strong {
        color: #8f1d17;
      }

      .balanceBox {
        display: grid;
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin: 28px 0;
      }

      .balanceItem {
        display: flex;
        gap: 15px;
        padding: 20px;
        border: 1px solid #dfe3e8;
        border-radius: 12px;
        background: white;
      }

      .balanceIcon {
        flex: 0 0 38px;
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background: #0b1220;
        color: #f59e0b;
        font-size: 20px;
        font-weight: 900;
      }

      .balanceItem strong {
        display: block;
        margin-bottom: 6px;
        color: #111827;
        font-size: 16px;
      }

      .balanceItem p {
        margin: 0;
        color: #5f6978;
        font-size: 14px;
        line-height: 1.6;
      }

      .checkList {
        display: grid;
        grid-template-columns:
          repeat(2, minmax(0, 1fr));
        gap: 10px 20px;
        margin: 24px 0 28px;
        padding: 22px;
        border: 1px solid #dde2e8;
        border-radius: 12px;
        background: white;
      }

      .checkList div {
        color: #374151;
        font-size: 15px;
        font-weight: 700;
      }

      .takeaway {
        border: 1px solid
          rgba(245, 158, 11, 0.5);
        background: #0b1220;
        color: white;
      }

      .takeawayLabel {
        margin-bottom: 8px;
        color: #f59e0b;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.13em;
      }

      .takeaway h4 {
        margin: 0 0 12px;
        color: white;
        font-size: 24px;
        line-height: 1.3;
      }

      .takeaway p {
        color: #d4dae3;
      }

      .closing {
        margin-top: 30px;
        padding-top: 26px;
        border-top: 1px solid #dfe3e8;
        color: #1f2937;
        font-weight: 700;
      }

      @media (
        max-width: 700px
      ) {
        .article {
          font-size: 16px;
        }

        .lead {
          font-size: 18px;
        }

        .balanceBox,
        .checkList {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}