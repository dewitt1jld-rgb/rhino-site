import Link from "next/link";
import type { ReactNode } from "react";

type Step = {
  number: number;
  title: string;
  href: string;
};

type AcademyLessonLayoutProps = {
  lessonNumber: string;
  lessonTitle: string;
  lessonDescription: string;
  currentStep: number;
  steps: Step[];
  children: ReactNode;

  previousHref?: string;
  previousLabel?: string;
  nextHref?: string;
  nextLabel?: string;
};

export default function AcademyLessonLayout({
  lessonNumber,
  lessonTitle,
  lessonDescription,
  currentStep,
  steps,
  children,
  previousHref,
  previousLabel = "← Previous",
  nextHref,
  nextLabel = "Continue →",
}: AcademyLessonLayoutProps) {
  const showBottomNavigation = Boolean(previousHref || nextHref);

  return (
    <main className="academyPage">
      <aside className="academySidebar">
        <Link
          href="/dashboard/introductory-software-training"
          className="academyBack"
        >
          ← Back to Course
        </Link>

        <p className="academyEyebrow">Lesson {lessonNumber}</p>
        <h1>{lessonTitle}</h1>

        <p className="academyDescription">{lessonDescription}</p>

        <div className="academyStepList">
          {steps.map((step) =>
            step.number === currentStep ? (
              <div className="academyStep active" key={step.number}>
                {step.number}. {step.title}
              </div>
            ) : (
              <Link
                href={step.href}
                className="academyStep"
                key={step.number}
              >
                {step.number}. {step.title}
              </Link>
            )
          )}
        </div>
      </aside>

      <section className="academyStage">
        <article className="academyCard">
          {children}

          {showBottomNavigation && (
            <div className="academyBottomNavigation">
              <div className="academyPreviousArea">
                {previousHref && (
                  <Link href={previousHref} className="secondary">
                    {previousLabel}
                  </Link>
                )}
              </div>

              <div className="academyNextArea">
                {nextHref && (
                  <Link href={nextHref} className="primary">
                    {nextLabel}
                  </Link>
                )}
              </div>
            </div>
          )}
        </article>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .academyPage {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 360px minmax(0, 1fr);
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.1),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #05070b 0%,
              #0d1118 45%,
              #05070b 100%
            );
          color: white;
        }

        .academySidebar {
          min-height: 100vh;
          padding: 34px 24px;
          background: rgba(5, 7, 11, 0.72);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .academyBack {
          display: inline-block;
          margin-bottom: 28px;
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .academyBack:hover {
          color: #fbbf24;
        }

        .academyEyebrow,
        .sectionLabel {
          margin: 0 0 10px;
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .academySidebar h1 {
          margin: 0 0 14px;
          font-size: 30px;
          line-height: 1.1;
        }

        .academyDescription {
          margin-bottom: 28px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
        }

        .academyStepList {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .academyStep {
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.045);
          color: white;
          font-weight: 900;
          text-decoration: none;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .academyStep:hover {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
          transform: translateX(3px);
        }

        .academyStep.active {
          border-color: rgba(245, 158, 11, 0.5);
          background: rgba(245, 158, 11, 0.14);
          color: #fbbf24;
        }

        .academyStep.active:hover {
          transform: none;
        }

        .academyStage {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 48px;
        }

        .academyCard {
          width: 100%;
          max-width: 1040px;
          padding: 42px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.82);
        }

        .academyCard h2 {
          margin: 0 0 18px;
          font-size: clamp(32px, 5vw, 42px);
          line-height: 1.08;
        }

        .academyCard h3 {
          margin: 34px 0 14px;
          color: #fbbf24;
          font-size: 24px;
        }

        .goalBox,
        .sectionBox,
        .calloutBox,
        .takeawayBox {
          margin-top: 24px;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
        }

        .goalBox {
          margin-top: 0;
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.12);
        }

        .goalBox strong,
        .calloutBox strong {
          color: #fbbf24;
        }

        .bodyText,
        .lessonText {
          color: rgba(255, 255, 255, 0.78);
          font-size: 18px;
          line-height: 1.8;
        }

        .lessonText p {
          margin: 0;
        }

        .lessonText p + p {
          margin-top: 17px;
        }

        .fullWidthMedia {
          width: 100%;
          margin: 28px 0 0;
        }

        .fullWidthMedia img,
        .fullWidthMedia video {
          display: block;
          width: 100%;
          height: auto;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          background: #05070b;
        }

        .fullWidthMedia figcaption {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
        }

        .responsibilityGrid,
        .takeawayGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
        }

        .responsibilityGrid div,
        .takeawayGrid div {
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
        }

        .takeawayGrid strong {
          display: block;
          margin-bottom: 7px;
          color: #fbbf24;
        }

        blockquote {
          margin: 25px 0;
          padding: 24px 28px;
          border-left: 5px solid #f59e0b;
          border-radius: 0 16px 16px 0;
          background: rgba(245, 158, 11, 0.08);
          font-size: 24px;
          font-weight: 850;
          line-height: 1.4;
        }

        .navButtons,
        .academyBottomNavigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-top: 42px;
        }

        .academyBottomNavigation {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .academyPreviousArea,
        .academyNextArea {
          display: flex;
        }

        .academyNextArea {
          justify-content: flex-end;
          margin-left: auto;
        }

        .primary,
        .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 900;
          text-align: center;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .primary {
          background: #f59e0b;
          color: #111827;
        }

        .primary:hover {
          background: #fbbf24;
          transform: translateY(-2px);
        }

        .secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .academyPage {
            grid-template-columns: 1fr;
          }

          .academySidebar {
            min-height: auto;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .academyStage {
            padding: 22px;
          }

          .academyCard {
            padding: 26px;
          }

          .responsibilityGrid,
          .takeawayGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .navButtons,
          .academyBottomNavigation {
            flex-direction: column;
            align-items: stretch;
          }

          .academyPreviousArea,
          .academyNextArea {
            width: 100%;
          }

          .academyNextArea {
            margin-left: 0;
          }

          .academyPreviousArea a,
          .academyNextArea a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}