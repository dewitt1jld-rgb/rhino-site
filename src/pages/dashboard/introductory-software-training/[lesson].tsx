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

        <div className="miniProgress">
          <div className="miniProgressTop">
            <span>Lesson Steps</span>
            <span>
              {hasSteps ? stepIndex + 1 : 0}/{steps.length}
            </span>
          </div>
          <div className="progressTrack">
            <div
              className="progressFill"
              style={{
                width: hasSteps
                  ? `${((stepIndex + 1) / steps.length) * 100}%`
                  : "0%",
              }}
            />
          </div>
        </div>

        <div className="stepList">
          {hasSteps ? (
            steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className={
                  index === stepIndex
                    ? "stepItem active"
                    : index < stepIndex
                    ? "stepItem complete"
                    : "stepItem"
                }
                onClick={() => setStepIndex(index)}
              >
                <span>{index < stepIndex ? "✓" : index + 1}</span>
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

            {currentStep.goal && (
              <div className="goalBox">
                <strong>Goal:</strong> {currentStep.goal}
              </div>
            )}

            <p className="bodyText">{currentStep.body}</p>

            {currentStep.videoUrl ? (
              <div className="videoBox">
                <video controls src={currentStep.videoUrl} />
              </div>
            ) : (
              <div className="placeholderBox">
                <span>Video Placeholder</span>
                <p>A training video can be added here later.</p>
              </div>
            )}

            {currentStep.checklist && currentStep.checklist.length > 0 && (
              <div className="sectionBox">
                <h3>Before You Continue</h3>
                <ul>
                  {currentStep.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="infoGrid">
              {currentStep.tip && (
                <div className="tipBox">
                  <h3>Helpful Tip</h3>
                  <p>{currentStep.tip}</p>
                </div>
              )}

              {currentStep.warning && (
                <div className="warningBox">
                  <h3>Important</h3>
                  <p>{currentStep.warning}</p>
                </div>
              )}
            </div>

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

        .miniProgress {
          margin-bottom: 24px;
          padding: 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .miniProgressTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.9rem;
          font-weight: 900;
        }

        .progressTrack {
          height: 8px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
        }

        .progressFill {
          height: 100%;
          border-radius: 999px;
          background: #f59e0b;
          transition: width 0.25s ease;
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

        .stepItem.complete span {
          background: rgba(34, 197, 94, 0.16);
          color: #22c55e;
        }

        .lessonStage {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }

        .stageCard {
          width: 100%;
          max-width: 960px;
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

        .goalBox {
          margin: 0 0 22px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.6;
        }

        .goalBox strong {
          color: #fbbf24;
        }

        .bodyText {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
          max-width: 820px;
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

        .placeholderBox {
          margin-top: 26px;
          padding: 34px;
          border-radius: 18px;
          border: 1px dashed rgba(245, 158, 11, 0.4);
          background: rgba(245, 158, 11, 0.06);
        }

        .placeholderBox span {
          display: block;
          color: #fbbf24;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .placeholderBox p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
        }

        .sectionBox {
          margin-top: 26px;
          padding: 24px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sectionBox h3,
        .tipBox h3,
        .warningBox h3 {
          margin: 0 0 12px;
          color: white;
          font-size: 20px;
        }

        .sectionBox ul {
          margin: 0;
          padding-left: 20px;
        }

        .sectionBox li {
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.55;
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 18px;
        }

        .tipBox,
        .warningBox {
          padding: 20px;
          border-radius: 16px;
          line-height: 1.6;
        }

        .tipBox {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .warningBox {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.26);
        }

        .tipBox p,
        .warningBox p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
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

          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}