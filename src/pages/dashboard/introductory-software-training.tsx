import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Course Welcome",
    time: "5 min",
    description:
      "Start here for a simple overview of how this beginner course is organized and how to move through the training.",
    links: [
      { label: "Go to Training Dashboard", href: "/dashboard" },
    ],
  },
  {
    number: "02",
    title: "Glazier Studio Overview",
    time: "15 min",
    description:
      "Get familiar with the purpose of Glazier Studio and how it fits into the estimating, drawing, and fabrication workflow.",
    links: [
      { label: "Open Glazier Studio App", href: "/dashboard/glazier-studio/all-about-frames/glazier-studio-app" },
      { label: "Building Frames", href: "/dashboard/glazier-studio/all-about-frames/building-frames" },
    ],
  },
  {
    number: "03",
    title: "General Settings",
    time: "25 min",
    description:
      "Learn the settings that control how the software behaves before moving into more specific tools.",
    links: [
      { label: "CAD Setup", href: "/dashboard/glazier-studio/general-settings/cad-setup" },
      { label: "Customers & Vendors", href: "/dashboard/glazier-studio/general-settings/customers-vendors" },
      { label: "File Tab", href: "/dashboard/glazier-studio/general-settings/file-tab" },
    ],
  },
  {
    number: "04",
    title: "Metal Groups & Catalog Parts",
    time: "35 min",
    description:
      "Understand how metal groups, catalog parts, and fabrication options affect the way frames are built.",
    links: [
      { label: "Assembly Data", href: "/dashboard/glazier-studio/metal-groups/assembly-data" },
      { label: "Catalog Parts", href: "/dashboard/glazier-studio/metal-groups/catalog-parts" },
      { label: "Fabrication Options", href: "/dashboard/glazier-studio/metal-groups/fabrication-options" },
      { label: "Fab Formula Builder", href: "/dashboard/glazier-studio/metal-groups/fab-formula-builder" },
    ],
  },
  {
    number: "05",
    title: "Doors & Library Fab",
    time: "30 min",
    description:
      "Walk through the tools used for door editing, door fabrication, and library fabrication.",
    links: [
      { label: "Door Editor", href: "/dashboard/glazier-studio/doors-library-fab/door-editor" },
      { label: "Door Fab Screen", href: "/dashboard/glazier-studio/doors-library-fab/door-fab-screen" },
      { label: "Library Fab", href: "/dashboard/glazier-studio/doors-library-fab/library-fab" },
    ],
  },
  {
    number: "06",
    title: "Reports & Drawings",
    time: "20 min",
    description:
      "Learn where reports and drawings fit into the workflow and how fabrication information is reviewed.",
    links: [
      { label: "Glass Fabrication", href: "/dashboard/glazier-studio/reports-drawings/glass-fabrication" },
    ],
  },
  {
    number: "07",
    title: "PartnerPak Introduction",
    time: "20 min",
    description:
      "Begin connecting the Glazier Studio workflow to PartnerPak and fabrication output.",
    links: [
      { label: "Open PartnerPak Training", href: "/dashboard/partnerpak-training" },
    ],
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
          order, open the linked training pages, and build a strong foundation
          before moving into advanced workflows.
        </p>

        <div className="courseStats">
          <span>7 Lessons</span>
          <span>About 2.5 Hours</span>
          <span>Beginner Friendly</span>
        </div>
      </section>

      <section className="coursePanel">
        <div className="panelHeader">
          <div>
            <h2>Course Path</h2>
            <p>Follow these lessons from top to bottom.</p>
          </div>

          <Link href="/dashboard" className="dashboardLink">
            Back to Dashboard
          </Link>
        </div>

        <div className="lessonList">
          {lessons.map((lesson) => (
            <article key={lesson.number} className="lessonCard">
              <div className="lessonNumber">{lesson.number}</div>

              <div className="lessonBody">
                <div className="lessonTop">
                  <h3>{lesson.title}</h3>
                  <span>{lesson.time}</span>
                </div>

                <p>{lesson.description}</p>

                <div className="linkGrid">
                  {lesson.links.map((link) => (
                    <Link key={link.href} href={link.href} className="lessonLink">
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </article>
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

        .hero {
          max-width: 1000px;
          margin: 0 auto 34px;
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
          max-width: 1000px;
          margin: 0 auto;
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
        }

        .lessonTop span {
          color: #fbbf24;
          font-weight: 800;
          white-space: nowrap;
        }

        .lessonBody p {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
          margin: 10px 0 16px;
        }

        .linkGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .lessonLink {
          display: inline-block;
          padding: 10px 13px;
          border-radius: 10px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.28);
          color: #f59e0b;
          font-weight: 850;
          text-decoration: none;
        }

        .lessonLink:hover {
          background: rgba(245, 158, 11, 0.2);
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

          .panelHeader {
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