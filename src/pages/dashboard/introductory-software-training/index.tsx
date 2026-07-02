import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Download, Install & Activate Software",
    time: "20 min",
    description:
      "Download or update Glazier Studio and PartnerPak, enter your customer number, and confirm the software is ready.",
    href: "/dashboard/introductory-software-training/download-install",
  },
  {
    number: "02",
    title: "Start Your First Frame",
    time: "Coming Soon",
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

      <section className="coursePanel">
        <div className="panelHeader">
          <div>
            <h2>Course Lessons</h2>
            <p>Click a lesson to enter the isolated training screen.</p>
          </div>

          <Link href="/dashboard" className="dashboardLink">
            Back to Dashboard
          </Link>
        </div>

        <div className="lessonList">
          {lessons.map((lesson) => (
            <Link key={lesson.number} href={lesson.href} className="lessonCard">
              <div className="lessonNumber">{lesson.number}</div>

              <div className="lessonBody">
                <div className="lessonTop">
                  <h3>{lesson.title}</h3>
                  <span>{lesson.time}</span>
                </div>

                <p>{lesson.description}</p>

                <div className="enterLesson">
                  {lesson.href === "#" ? "Coming Soon" : "Enter Lesson →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
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
        .coursePanel {
          max-width: 1000px;
          margin: 0 auto;
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

        .coursePanel {
          padding: 28px;
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
        }

        .panelHeader {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          margin-bottom: 24px;
        }

        .panelHeader h2 {
          margin: 0 0 6px;
          font-size: 28px;
        }

        .panelHeader p {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
        }

        .dashboardLink {
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .lessonList {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .lessonCard {
          display: grid;
          grid-template-columns: 76px 1fr;
          gap: 20px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
          color: inherit;
          transition: 0.2s ease;
        }

        .lessonCard:hover {
          border-color: rgba(245, 158, 11, 0.42);
          transform: translateY(-2px);
          background: rgba(245, 158, 11, 0.07);
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

        .lessonTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
        }

        .lessonTop h3 {
          margin: 0;
          font-size: 22px;
          color: white;
        }

        .lessonTop span,
        .enterLesson {
          color: #fbbf24;
          font-weight: 900;
        }

        .lessonBody p {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
          margin: 10px 0 16px;
        }

        @media (max-width: 700px) {
          .page {
            padding: 26px 16px;
          }

          h1 {
            font-size: 34px;
          }

          .coursePanel {
            padding: 20px;
          }

          .panelHeader,
          .lessonTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .lessonCard {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}