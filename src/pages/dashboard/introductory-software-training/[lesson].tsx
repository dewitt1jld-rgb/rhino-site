import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { introSoftwareCourse } from "@/data/introSoftwareCourse";

export default function IntroSoftwareLessonPage() {
  const router = useRouter();
  const lessonSlug = router.query.lesson as string | undefined;

  const lesson = useMemo(
    () => introSoftwareCourse.lessons.find((item) => item.slug === lessonSlug),
    [lessonSlug]
  );

  const [stepIndex, setStepIndex] = useState(0);

  if (!lesson) {
    return (
      <main className="page">
        <div className="emptyCard">
          <h1>Lesson Not Found</h1>
          <Link href="/dashboard/introductory-software-training">
            Back to Course
          </Link>
        </div>

        <style jsx>{`
          .page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #05070b;
            color: white;
          }

          .emptyCard {
            padding: 32px;
            border-radius: 18px;
            background: rgba(15, 23, 42, 0.86);
          }

          a {
            color: #f59e0b;
            font-weight: 900;
          }
        `}</style>
      </main>
    );
  }

  const steps = lesson.steps || [];
  const currentStep = steps[stepIndex];
  const hasSteps = steps.length > 0;
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  return (
    <main className="page">
      <aside className="lessonSidebar">
        <Link href="/dashboard/introductory-software-training" className="back">
          ← Back to Course
        </Link>

        <p className="eyebrow">Lesson {lesson.number}</p>
        <h1>{lesson.title}</h1>
        <p className="lessonDescription">{lesson.description}</p>

        <div className="stepList">
          {hasSteps ? (
            steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className={index === stepIndex ? "stepItem active" : "stepItem"}
                onClick={() => setStepIndex(index)}
              >
                <span>{index + 1}</span>
                {step.title}
              </button>
            ))
          ) : (
            <p className="comingSoon">Steps coming soon.</p>
          )}
        </div>
      </aside>

      <section className="lessonStage">
        {hasSteps && currentStep ? (
          <article className="stageCard">
            <div className="stageTop">
              <p className="eyebrow">
                Step {stepIndex + 1} of {steps.length}
              </p>
              <span>{lesson.time}</span>
            </div>

            <h2>{currentStep.title}</h2>

            <p className="bodyText">{currentStep.body}</p>

            {currentStep.videoUrl && (
              <div className="videoBox">
                <video controls src={currentStep.videoUrl} />
              </div>
            )}

            {currentStep.documentUrl && (
              <a
                href={currentStep.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="documentLink"
              >
                Open Document →
              </a>
            )}

            <div className="navButtons">
              <button
                type="button"
                onClick={() => setStepIndex((current) => current - 1)}
                disabled={isFirstStep}
              >
                ← Previous
              </button>

              {!isLastStep ? (
                <button
                  type="button"
                  className="primary"
                  onClick={() => setStepIndex((current) => current + 1)}
                >
                  Next →
                </button>
              ) : (
                <Link
                  href="/dashboard/introductory-software-training"
                  className="completeButton"
                >
                  Finish Lesson
                </Link>
              )}
            </div>
          </article>
        ) : (
          <article className="stageCard">
            <p className="eyebrow">Coming Soon</p>
            <h2>{lesson.title}</h2>
            <p className="bodyText">
              This lesson has been added to the course path and will be built
              out next.
            </p>
          </article>
        )}
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 360px 1fr;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.1), transparent 34%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: white;
        }

        .lessonSidebar {
          min-height: 100vh;
          padding: 34px 24px;
          background: rgba(5, 7, 11, 0.72);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .back {
          display: inline-block;
          margin-bottom: 28px;
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .eyebrow {
          color: #f59e0b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 10px;
        }

        h1 {
          margin: 0 0 14px;
          font-size: 30px;
          line-height: 1.1;
        }

        .lessonDescription {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .stepList {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stepItem {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.045);
          color: rgba(255, 255, 255, 0.82);
          border-radius: 14px;
          padding: 13px;
          cursor: pointer;
          font-weight: 800;
        }

        .stepItem span {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 158, 11, 0.14);
          color: #fbbf24;
          flex-shrink: 0;
        }

        .stepItem.active {
          border-color: rgba(245, 158, 11, 0.48);
          background: rgba(245, 158, 11, 0.12);
          color: white;
        }

        .lessonStage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }

        .stageCard {
          width: 100%;
          max-width: 920px;
          min-height: 540px;
          padding: 42px;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .stageTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .stageTop span {
          color: #fbbf24;
          font-weight: 900;
        }

        h2 {
          font-size: 42px;
          line-height: 1.08;
          margin: 0 0 18px;
        }

        .bodyText {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
          max-width: 780px;
        }

        .videoBox {
          margin-top: 26px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: black;
        }

        video {
          width: 100%;
          display: block;
        }

        .documentLink {
          display: inline-block;
          margin-top: 22px;
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .navButtons {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 42px;
        }

        .navButtons button,
        .completeButton {
          border: none;
          border-radius: 12px;
          padding: 14px 22px;
          font-weight: 900;
          cursor: pointer;
          text-decoration: none;
        }

        .navButtons button {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .navButtons button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .navButtons .primary,
        .completeButton {
          background: #f59e0b;
          color: #111827;
        }

        .comingSoon {
          color: rgba(255, 255, 255, 0.65);
        }

        @media (max-width: 900px) {
          .page {
            grid-template-columns: 1fr;
          }

          .lessonSidebar {
            min-height: auto;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .lessonStage {
            padding: 22px;
          }

          .stageCard {
            min-height: auto;
            padding: 26px;
          }

          h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
}