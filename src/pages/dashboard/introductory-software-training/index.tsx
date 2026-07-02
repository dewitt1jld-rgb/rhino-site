import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Download, Install & Activate Software",
    time: "20 min",
    status: "Available",
    description:
      "Download or update Glazier Studio and PartnerPak, enter your customer number, and confirm the software is ready.",
    href: "/dashboard/introductory-software-training/download-install",
  },
  {
    number: "02",
    title: "Start Your First Frame",
    time: "Coming Soon",
    status: "Coming Soon",
    description:
      "Open the program, begin a new frame, and learn the basic frame-building workflow.",
    href: "#",
  },
];

export default function IntroductorySoftwareTrainingPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Beginner Course</p>
        <h1>Glazier Studio / PartnerPak Foundations</h1>
        <p className="lead">
          A guided training path for new users. Work through each lesson in
          order without jumping around the full training library.
        </p>

        <div className="courseStats">
          <span>Guided Course</span>
          <span>Beginner Friendly</span>
          <span>Glazier Studio / PartnerPak</span>
        </div>
      </section>

      <section className="courseHeader">
        <div>
          <h2>Course Lessons</h2>
          <p>Click a lesson to enter the isolated training screen.</p>
        </div>

        <Link href="/dashboard" className="dashboardLink">
          Back to Dashboard
        </Link>
      </section>

      <section className="lessonList">
        {lessons.map((lesson) => (
          <Link
            key={lesson.number}
            href={lesson.href}
            className={lesson.href === "#" ? "lessonCard disabled" : "lessonCard"}
          >
            <div className="lessonNumber">{lesson.number}</div>

            <div className="lessonBody">
              <div className="lessonTop">
                <div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                </div>

                <div className="lessonMeta">
                  <span className="status">{lesson.status}</span>
                  <span className="time">{lesson.time}</span>
                </div>
              </div>

              <div className="enterLesson">
                {lesson.href === "#" ? "Coming Soon" : "Enter Lesson →"}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 48px;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.1), transparent 34%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: white;
        }

        .hero,
        .courseHeader,
        .lessonList {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero {
          margin-bottom: 34px;
        }

        .eyebrow {
          color: #f59e0b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 46px;
          line-height: 1.05;
          margin: 0 0 18px;
        }

        .lead {
          max-width: 850px;
          font-size: 18px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.76);
        }

        .courseStats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .courseStats span {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.32);
          color: #fbbf24;
          font-weight: 800;
        }

        .courseHeader {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          margin-bottom: 24px;
          padding: 28px;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .courseHeader h2 {
          margin: 0 0 6px;
          font-size: 28px;
        }

        .courseHeader p {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
        }

        .dashboardLink {
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .lessonList {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .lessonCard {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          align-items: center;
          padding: 28px;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          text-decoration: none;
          color: inherit;
          transition: 0.25s ease;
        }

        .lessonCard:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 158, 11, 0.45);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.35),
            0 0 30px rgba(245, 158, 11, 0.08);
          background: rgba(245, 158, 11, 0.07);
        }

        .lessonCard.disabled {
          opacity: 0.78;
          cursor: default;
        }

        .lessonCard.disabled:hover {
          transform: none;
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: none;
          background: rgba(15, 23, 42, 0.82);
        }

        .lessonNumber {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #f59e0b;
          color: #111827;
          font-size: 20px;
          font-weight: 950;
        }

        .lessonBody {
          display: flex;
          flex-direction: column;
        }

        .lessonTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .lessonTop h3 {
          margin: 0;
          font-size: 24px;
          color: white;
        }

        .lessonTop p {
          margin: 14px 0 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.72);
        }

        .lessonMeta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          white-space: nowrap;
        }

        .status {
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.28);
          color: #fbbf24;
          font-weight: 900;
          font-size: 0.85rem;
        }

        .time {
          color: #fbbf24;
          font-weight: 900;
        }

        .enterLesson {
          color: #fbbf24;
          font-weight: 900;
        }

        @media (max-width: 700px) {
          .page {
            padding: 26px 16px;
          }

          h1 {
            font-size: 34px;
          }

          .courseHeader,
          .lessonTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .lessonCard {
            grid-template-columns: 1fr;
          }

          .lessonMeta {
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}