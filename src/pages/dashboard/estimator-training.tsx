import Head from "next/head";
import Link from "next/link";

type Lesson = {
  number: number;
  title: string;
  description: string;
  sections: number;
  status: "Ready" | "In production";
  href: string;
};

const lessons: Lesson[] = [
  {
    number: 1,
    title: "Before You Start Estimating",
    description:
      "Understand the purpose of this course, what the software can and cannot decide for you, and the role of the estimator in building accurate project information.",
    sections: 2,
    status: "Ready",
    href: "/dashboard/estimator-training/lesson-1",
  },
  {
    number: 2,
    title: "Choosing Your Estimating Method",
    description:
      "Learn why project-specific metal groups can connect estimating and fabrication, compare the two workflow options, and understand the vocabulary used throughout the Metal Groups screen.",
    sections: 2,
    status: "Ready",
    href: "/dashboard/estimator-training/lesson-2",
  },
  {
    number: 3,
    title: "Building Metal Groups for Estimating",
    description:
      "Choose the correct starting metal group, verify the components that affect pricing, and prepare the project so fabrication can continue from the same work later.",
    sections: 3,
    status: "Ready",
    href: "/dashboard/estimator-training/lesson-3",
  },
  {
    number: 4,
    title: "Building Frames for an Estimate",
    description:
      "Create and organize the project, enter estimating frame settings, build and modify frames efficiently, and verify the conditions that actually affect material and pricing.",
    sections: 4,
    status: "Ready",
    href: "/dashboard/estimator-training/lesson-4",
  },
  {
    number: 5,
    title: "Building Doors for Pricing",
    description:
      "Add doors to an estimate and account for door material, glass, hardware, preparation, and other door-related costs.",
    sections: 3,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-5",
  },
  {
    number: 6,
    title: "Labor Rates & Labor Defaults",
    description:
      "Learn where labor rates are entered, how defaults are applied, and how to verify the labor calculations used in your estimate.",
    sections: 2,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-6",
  },
  {
    number: 7,
    title: "Reviewing Your Estimate & Bid Recap",
    description:
      "Use the Bid Recap to review material, glass, labor, totals, and other calculated values before relying on the final estimate.",
    sections: 4,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-7",
  },
  {
    number: 8,
    title: "Proposals & Purchase Orders",
    description:
      "Turn your estimate into usable documents and review proposals and purchase orders before they are sent.",
    sections: 2,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-8",
  },
  {
    number: 9,
    title: "Optimization & Estimating Settings",
    description:
      "Improve estimating speed and consistency by configuring useful defaults, settings, and repeatable workflows.",
    sections: 2,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-9",
  },
  {
    number: 10,
    title: "What the Software Doesn't Know",
    description:
      "Identify costs and job conditions that may not automatically appear in Glazier Studio or PartnerPak before submitting a bid.",
    sections: 2,
    status: "In production",
    href: "/dashboard/estimator-training/lesson-10",
  },
];

export default function EstimatorTrainingPage() {
  return (
    <>
      <Head>
        <title>Estimator Training | The Rhino Wrangler</title>
        <meta
          name="description"
          content="Glazier Studio and PartnerPak estimator training from The Rhino Wrangler."
        />
      </Head>

      <main className="page">
        <section className="hero">
          <div className="heroInner">
            <div className="eyebrow">
              ESTIMATOR TRAINING
            </div>

            <h1>
              Glazier Studio / PartnerPak
              <span> Estimator Training</span>
            </h1>

            <p className="heroText">
              Learn how to build, review, and organize estimates using Glazier
              Studio and PartnerPak. This course focuses on how the estimating
              tools work so you can adapt them to your company&apos;s own
              pricing and estimating process.
            </p>

            <div className="notice">
              <strong>Important:</strong> This course explains how to use the
              software for estimating. It does not provide recommended pricing,
              labor rates, markups, or instructions on what your company should
              charge for a project.
            </div>
          </div>
        </section>

        <section className="content">
          <div className="sectionIntro">
            <div className="eyebrow">
              10 LESSON COURSE
            </div>

            <h2>
              Estimating From Setup to Final Bid
            </h2>

            <p>
              This course starts from the ground up. If you already understand
              some of the basics, feel free to skip ahead to the lessons that
              are most useful to you.
            </p>
          </div>

          <div className="lessonGrid">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className="lessonCard"
              >
                <div className="lessonTop">
                  <div className="lessonNumber">
                    LESSON{" "}
                    {String(lesson.number).padStart(2, "0")}
                  </div>

                  <div
                    className={
                      lesson.status === "Ready"
                        ? "status ready"
                        : "status production"
                    }
                  >
                    {lesson.status}
                  </div>
                </div>

                <h3>
                  {lesson.title}
                </h3>

                <p className="lessonDescription">
                  {lesson.description}
                </p>

                <div className="lessonFooter">
                  <div className="sectionCount">
                    {lesson.sections}{" "}
                    {lesson.sections === 1
                      ? "Section"
                      : "Sections"}
                  </div>

                  {lesson.status === "Ready" ? (
                    <Link
                      href={lesson.href}
                      className="button"
                    >
                      Start Lesson
                      <span>→</span>
                    </Link>
                  ) : (
                    <div className="button disabled">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="workflowSection">
          <div className="workflowCard">
            <div className="eyebrow">
              COURSE FLOW
            </div>

            <h2>
              A Practical Estimating Workflow
            </h2>

            <div className="workflowGrid">
              <div className="workflowItem">
                <div className="workflowNumber">
                  1
                </div>

                <div>
                  <h3>Set Up</h3>

                  <p>
                    Choose your estimating method and prepare your metal groups,
                    labor rates, and defaults.
                  </p>
                </div>
              </div>

              <div className="workflowItem">
                <div className="workflowNumber">
                  2
                </div>

                <div>
                  <h3>Build</h3>

                  <p>
                    Build the frames, doors, quantities, materials, and project
                    information needed for the estimate.
                  </p>
                </div>
              </div>

              <div className="workflowItem">
                <div className="workflowNumber">
                  3
                </div>

                <div>
                  <h3>Review</h3>

                  <p>
                    Use the Bid Recap to verify the estimate instead of blindly
                    trusting the final total.
                  </p>
                </div>
              </div>

              <div className="workflowItem">
                <div className="workflowNumber">
                  4
                </div>

                <div>
                  <h3>Finalize</h3>

                  <p>
                    Create your proposal, prepare purchasing information, and
                    account for anything the software does not know about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f5f7;
          color: #111827;
        }

        .hero {
          padding: 64px 32px 70px;
          color: white;
          background:
            radial-gradient(
              circle at top right,
              rgba(245, 158, 11, 0.14),
              transparent 36%
            ),
            linear-gradient(
              135deg,
              #08111f 0%,
              #0b1422 55%,
              #111b2b 100%
            );
        }

        .heroInner,
        .content,
        .workflowSection {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .eyebrow {
          margin-bottom: 12px;
          color: #f59e0b;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        h1 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        h1 span {
          color: #f59e0b;
        }

        .heroText {
          max-width: 850px;
          margin: 22px 0 0;
          color: #d7dce3;
          font-size: 18px;
          line-height: 1.7;
        }

        .notice {
          max-width: 900px;
          margin-top: 30px;
          padding: 18px 20px;
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-left: 4px solid #f59e0b;
          border-radius: 10px;
          background: rgba(245, 158, 11, 0.08);
          color: #f3f4f6;
          line-height: 1.6;
        }

        .content {
          padding: 64px 32px;
        }

        .sectionIntro {
          max-width: 850px;
          margin-bottom: 34px;
        }

        .sectionIntro h2,
        .workflowCard h2 {
          margin: 0;
          font-size: 38px;
          letter-spacing: -0.025em;
        }

        .sectionIntro p {
          margin: 14px 0 0;
          color: #5d6674;
          font-size: 16px;
          line-height: 1.7;
        }

        .lessonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .lessonCard {
          display: flex;
          flex-direction: column;
          min-height: 280px;
          padding: 26px;
          border: 1px solid #dfe3e8;
          border-radius: 14px;
          background: white;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          transition: 0.18s ease;
        }

        .lessonCard:hover {
          transform: translateY(-3px);
          border-color: rgba(245, 158, 11, 0.5);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.09);
        }

        .lessonTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 22px;
        }

        .lessonNumber {
          color: #f59e0b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .status {
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
        }

        .production {
          color: #8a5600;
          background: #fff3d6;
          border: 1px solid #f4d691;
        }

        .ready {
          color: #126232;
          background: #eaf8ef;
          border: 1px solid #b9e3c7;
        }

        .lessonCard h3 {
          margin: 0;
          color: #111827;
          font-size: 23px;
          line-height: 1.25;
        }

        .lessonDescription {
          flex: 1;
          margin: 14px 0 24px;
          color: #5a6474;
          font-size: 15px;
          line-height: 1.7;
        }

        .lessonFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid #eceff3;
        }

        .sectionCount {
          color: #6b7280;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border-radius: 8px;
          background: #f59e0b;
          color: #111827;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
        }

        .disabled {
          background: #e5e7eb;
          color: #8a9099;
        }

        .workflowSection {
          padding: 0 32px 72px;
        }

        .workflowCard {
          padding: 42px;
          border: 1px solid #dfe3e8;
          border-radius: 16px;
          background: white;
        }

        .workflowGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .workflowItem {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          background: #f8f9fb;
        }

        .workflowNumber {
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #0d1726;
          color: #f59e0b;
          font-size: 18px;
          font-weight: 900;
        }

        .workflowItem h3 {
          margin: 1px 0 6px;
          font-size: 18px;
        }

        .workflowItem p {
          margin: 0;
          color: #5e6674;
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .lessonGrid,
          .workflowGrid {
            grid-template-columns: 1fr;
          }

          .hero,
          .content,
          .workflowSection {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 600px) {
          .lessonFooter {
            align-items: flex-start;
            flex-direction: column;
          }

          .button {
            width: 100%;
            justify-content: center;
          }

          .workflowCard {
            padding: 28px 20px;
          }

          .heroText {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}