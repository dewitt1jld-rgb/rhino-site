import { useState } from "react";
import Link from "next/link";

type Lesson = {
  number: string;
  title: string;
  time: string;
  status: "Available" | "In Production";
  description: string;
  href?: string;
};

type CourseModule = {
  number: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

const courseModules: CourseModule[] = [
  {
    number: "01",
    title: "Glass Industry Fundamentals",
    description:
      "Learn the terminology, materials, people, and processes that make up the commercial glass industry.",
    lessons: [
{
  number: "01",
  title: "Welcome to the Glass Industry",
  time: "30–45 min",
  status: "Available",
  description:
    "Learn the fundamental storefront framing terminology, recognize common components, and begin understanding how completed frames relate to Glazier Studio and CAD drawings.",
  href: "/dashboard/introductory-software-training/lesson-1-glazing-basics",
},
      {
        number: "02",
        title: "Glass, Aluminum & Industry Terminology",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn the common glass, aluminum, hardware, fabrication, and installation terms used throughout the course.",
      },
      {
        number: "03",
        title: "From Estimate to Installation",
        time: "Coming soon",
        status: "In Production",
        description:
          "Follow a typical project from estimating and ordering through fabrication, delivery, and final installation.",
      },
    ],
  },
  
  {
    number: "02",
    title: "Software Foundations",
    description:
      "Install the software, keep it updated, and become comfortable navigating the primary tools and screens.",
    lessons: [
      {
        number: "04",
        title: "Download, Install & Activate Software",
        time: "20–60 min",
        status: "Available",
        description:
          "Download Glazier Studio and PartnerPak, enter your customer number, activate the software, and confirm everything is ready.",
        href: "/dashboard/introductory-software-training/download-install",
      },
      {
        number: "05",
        title: "Updating the Program",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how to check for updates, install the latest program version, protect existing data, and confirm the update completed correctly.",
      },
      {
        number: "06",
        title: "Understanding the Program Layout",
        time: "15 min",
        status: "Available",
        description:
          "Open the program, understand the main layout, identify important tools, and learn the basic frame-building workflow.",
        href: "/dashboard/introductory-software-training/lesson-2-launch",
      },
    ],
  },
  {
    number: "03",
    title: "Frame Builder",
    description:
      "Create projects, build storefront frames, modify members, and work with increasingly complex openings.",
    lessons: [
      {
        number: "07",
        title: "Building Your First Frame",
        time: "Coming soon",
        status: "In Production",
        description:
          "Create a project and build a basic storefront frame while learning the core frame-building workflow.",
      },
      {
        number: "08",
        title: "Modifying Frames & Members",
        time: "Coming soon",
        status: "In Production",
        description:
          "Modify frame dimensions, replace members, add horizontals and verticals, and make common project changes.",
      },
      {
        number: "09",
        title: "Advanced Frames & Out-of-Square Openings",
        time: "Coming soon",
        status: "In Production",
        description:
          "Build angled, sloped, stepped, and out-of-square frames using advanced frame-building tools.",
      },
      {
        number: "10",
        title: "Mastering the Frame Builder",
        time: "Coming soon",
        status: "In Production",
        description:
          "Explore the Frame Builder menus, dropdowns, shortcuts, settings, and tools used to handle more complicated projects.",
      },
    ],
  },
  {
    number: "04",
    title: "Profiles & Components",
    description:
      "Understand how aluminum systems and individual parts are organized inside the software.",
    lessons: [
      {
        number: "11",
        title: "Understanding Metal Groups",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how metal groups organize storefront systems, assign profiles, control frame behavior, and support fabrication.",
      },
      {
        number: "12",
        title: "Working with Catalog Parts",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how catalog parts are created, organized, modified, and connected to the systems used throughout a project.",
      },
    ],
  },
  {
    number: "05",
    title: "Formulas & Hole Placement",
    description:
      "Create repeatable rules for weep holes, anchor holes, and other automatically positioned operations.",
    lessons: [
      {
        number: "13",
        title: "Weep Holes & Anchor Holes",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how weep holes and anchor holes are created, positioned, tested, and applied to the correct members.",
      },
      {
        number: "14",
        title: "Formula Builder Fundamentals",
        time: "Coming soon",
        status: "In Production",
        description:
          "Use variables, measurements, conditions, and formulas to control the placement of holes and fabrication operations.",
      },
    ],
  },
  {
    number: "06",
    title: "Metal Fabrication",
    description:
      "Build and apply the fabrication operations that prepare aluminum members for production.",
    lessons: [
      {
        number: "15",
        title: "Introduction to Metal Fabrication",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn the Metal Fabrication screen and create basic drills, slots, notches, saw cuts, and machining operations.",
      },
      {
        number: "16",
        title: "Advanced Metal Fabrication",
        time: "Coming soon",
        status: "In Production",
        description:
          "Create more advanced fabrication patterns using formulas, conditions, reference points, and multiple operations.",
      },
      {
        number: "17",
        title: "Secondary Fabrications",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how secondary fabrications differ from primary fabrications and how they are assigned to individual project members.",
      },
      {
        number: "18",
        title: "Fabrication Workflows & Best Practices",
        time: "Coming soon",
        status: "In Production",
        description:
          "Connect metal groups, catalog parts, assemblies, primary fabrications, and secondary fabrications into one complete workflow.",
      },
    ],
  },
  {
    number: "07",
    title: "Doors",
    description:
      "Configure door hardware, create door preparations, and apply complete entrance packages to projects.",
    lessons: [
      {
        number: "19",
        title: "Library Fabrications",
        time: "Coming soon",
        status: "In Production",
        description:
          "Learn how reusable fabrication records are created, organized, and prepared for use with door hardware and assemblies.",
      },
      {
        number: "20",
        title: "Door Hardware & Components",
        time: "Coming soon",
        status: "In Production",
        description:
          "Enter and organize locks, pivots, closers, exit devices, strikes, handles, and other common door hardware.",
      },
      {
        number: "21",
        title: "Door Fabrication",
        time: "Coming soon",
        status: "In Production",
        description:
          "Use the Door Fabrication screen to create and manage the preparations required for door hardware.",
      },
      {
        number: "22",
        title: "Applying Hardware & Door Packages",
        time: "Coming soon",
        status: "In Production",
        description:
          "Apply individual hardware items and complete door packages to doors, entrances, and regular door frames.",
      },
    ],
  },
  {
    number: "08",
    title: "Production",
    description:
      "Turn completed projects into the documents, reports, and settings required by the office and fabrication shop.",
    lessons: [
      {
        number: "23",
        title: "Reports & Production Documents",
        time: "Coming soon",
        status: "In Production",
        description:
          "Generate the material, fabrication, glass, door, label, and production reports used throughout a glass shop.",
      },
      {
        number: "24",
        title: "Program Settings & Configuration",
        time: "Coming soon",
        status: "In Production",
        description:
          "Review important program settings, databases, vendors, pricing options, preferences, and configuration tools.",
      },
    ],
  },
  {
    number: "09",
    title: "Certification",
    description:
      "Bring the entire course together by completing a realistic project from beginning to end.",
    lessons: [
      {
        number: "25",
        title: "Final Project & Rhino Wrangler Certification",
        time: "Coming soon",
        status: "In Production",
        description:
          "Complete a practical project covering frames, profiles, fabrication, doors, reports, and the complete production workflow.",
      },
    ],
  },
];

function LessonCard({ lesson }: { lesson: Lesson }) {
  const cardContent = (
    <>
      <div
        className={
          lesson.status === "Available"
            ? "lessonNumber"
            : "lessonNumber lessonNumberProduction"
        }
      >
        {lesson.number}
      </div>

      <div className="lessonBody">
        <div className="lessonTop">
          <div className="lessonInformation">
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
          </div>

          <div className="lessonMeta">
            <span
              className={
                lesson.status === "Available"
                  ? "status availableStatus"
                  : "status productionStatus"
              }
            >
              {lesson.status}
            </span>

            <span className="time">{lesson.time}</span>
          </div>
        </div>

        <div
          className={
            lesson.status === "Available"
              ? "enterLesson"
              : "enterLesson productionText"
          }
        >
          {lesson.status === "Available"
            ? "Enter Lesson →"
            : "Lesson Coming Soon"}
        </div>
      </div>
    </>
  );

  if (lesson.status === "Available" && lesson.href) {
    return (
      <Link href={lesson.href} className="lessonCard">
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="lessonCard disabled" aria-disabled="true">
      {cardContent}
    </article>
  );
}

export default function IntroductorySoftwareTrainingPage() {
  const [openModule, setOpenModule] = useState("02");

  const toggleModule = (moduleNumber: string) => {
    setOpenModule((currentModule) =>
      currentModule === moduleNumber ? "" : moduleNumber
    );
  };
  const lessonCount = courseModules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const availableLessonCount = courseModules.reduce(
    (total, module) =>
      total +
      module.lessons.filter((lesson) => lesson.status === "Available").length,
    0
  );

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Rhino Wrangler Academy</p>

        <h1>Glazier Studio / PartnerPak Foundations</h1>

        <p className="lead">
          A complete guided learning path designed to take a brand-new employee
          from industry fundamentals to real-world software proficiency. Work
          through each lesson in order and build practical skills along the way.
        </p>

        <div className="courseStats">
          <span>{lessonCount} Lessons</span>
          <span>{courseModules.length} Modules</span>
          <span>{availableLessonCount} Available Now</span>
          <span>Beginner Friendly</span>
          <span>Glazier Studio / PartnerPak</span>
        </div>
      </section>

      <section className="courseHeader">
        <div>
          <p className="sectionEyebrow">Zero to Hero Learning Path</p>
          <h2>Course Curriculum</h2>
          <p>
            Lessons marked In Production are visible so customers can follow
            the course roadmap as new training is released.
          </p>
        </div>

        <Link href="/dashboard" className="dashboardLink">
          Back to Dashboard
        </Link>
      </section>

  <section className="moduleList">
  {courseModules.map((module) => {
    const isOpen = openModule === module.number;

    const availableInModule = module.lessons.filter(
      (lesson) => lesson.status === "Available"
    ).length;

    return (
      <section
        className={`courseModule ${isOpen ? "moduleOpen" : ""}`}
        key={module.number}
      >
        <button
          type="button"
          className="moduleHeader"
          onClick={() => toggleModule(module.number)}
          aria-expanded={isOpen}
          aria-controls={`module-lessons-${module.number}`}
        >
          <div className="moduleNumber">Module {module.number}</div>

          <div className="moduleHeading">
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </div>

          <div className="moduleDetails">
            <div className="moduleCount">
              <span>
                {module.lessons.length}{" "}
                {module.lessons.length === 1 ? "Lesson" : "Lessons"}
              </span>

              {availableInModule > 0 && (
                <span className="moduleAvailable">
                  {availableInModule} Available
                </span>
              )}
            </div>

            <span className={`moduleArrow ${isOpen ? "open" : ""}`}>
              ↓
            </span>
          </div>
        </button>

        <div
          id={`module-lessons-${module.number}`}
          className={`moduleContent ${isOpen ? "open" : ""}`}
        >
          <div className="lessonList">
            {module.lessons.map((lesson) => (
              <LessonCard key={lesson.number} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>
    );
  })}
</section>

      <section className="courseNotice">
        <div className="noticeIcon">RW</div>

        <div>
          <h2>This course is actively growing.</h2>
          <p>
            New lessons, exercises, demonstrations, and certification materials
            will be added as they are completed. Available lessons can be opened
            immediately, while lessons marked In Production are still being
            developed.
          </p>
        </div>
      </section>

      <style jsx global>{`
        .page {
          min-height: 100vh;
          padding: 48px;
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.1),
              transparent 34%
            ),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: white;
        }

        .hero,
        .courseHeader,
        .moduleList,
        .courseNotice {
          width: 100%;
          max-width: 1050px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero {
          margin-bottom: 34px;
        }

        .eyebrow,
        .sectionEyebrow {
          color: #f59e0b;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .eyebrow {
          margin: 0 0 10px;
        }

        .sectionEyebrow {
          margin: 0 0 7px;
          font-size: 0.78rem;
        }

        .hero h1 {
          margin: 0 0 18px;
          font-size: clamp(36px, 5vw, 50px);
          line-height: 1.05;
        }

        .lead {
          max-width: 900px;
          margin: 0;
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
          border: 1px solid rgba(245, 158, 11, 0.32);
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.12);
          color: #fbbf24;
          font-weight: 800;
        }

        .courseHeader {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: center;
          margin-bottom: 34px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.78);
          backdrop-filter: blur(14px);
        }

        .courseHeader h2 {
          margin: 0 0 7px;
          font-size: 28px;
        }

        .courseHeader p:not(.sectionEyebrow) {
          max-width: 720px;
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }

        .dashboardLink {
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .dashboardLink:hover {
          color: #fbbf24;
        }

        .moduleList {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

.courseModule {
  scroll-margin-top: 120px;
  border: 1px solid rgba(245, 158, 11, 0.12);
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.4);
  overflow: hidden;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.courseModule.moduleOpen {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(15, 23, 42, 0.66);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.24),
    0 0 30px rgba(245, 158, 11, 0.05);
}

.moduleHeader {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 20px;
  align-items: center;
  padding: 24px;
  border: 0;
  background:
    linear-gradient(
      110deg,
      rgba(245, 158, 11, 0.1),
      rgba(15, 23, 42, 0.76) 38%
    );
  color: white;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.moduleHeader:hover {
  background:
    linear-gradient(
      110deg,
      rgba(245, 158, 11, 0.16),
      rgba(15, 23, 42, 0.9) 40%
    );
}

.moduleHeader:focus-visible {
  outline: 3px solid rgba(245, 158, 11, 0.72);
  outline-offset: -3px;
}

.moduleNumber {
  padding: 8px 12px;
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.12);
  color: #fbbf24;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.moduleHeading h2 {
  margin: 0 0 5px;
  font-size: 24px;
}

.moduleHeading p {
  margin: 0;
  color: rgba(255, 255, 255, 0.64);
  line-height: 1.55;
}

.moduleDetails {
  display: flex;
  align-items: center;
  gap: 18px;
}

.moduleCount {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.86rem;
  font-weight: 800;
  white-space: nowrap;
}

.moduleAvailable {
  color: #86efac;
  font-size: 0.78rem;
}

.moduleArrow {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(245, 158, 11, 0.26);
  border-radius: 12px;
  background: rgba(245, 158, 11, 0.08);
  color: #fbbf24;
  font-size: 20px;
  font-weight: 900;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}

.moduleArrow.open {
  transform: rotate(180deg);
  background: rgba(245, 158, 11, 0.16);
}

.moduleContent {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden;
  transition:
    grid-template-rows 0.3s ease,
    opacity 0.25s ease,
    visibility 0.25s ease;
}

.moduleContent.open {
  grid-template-rows: 1fr;
  opacity: 1;
  visibility: visible;
}

.moduleContent > .lessonList {
  min-height: 0;
  overflow: hidden;
}

.moduleContent.open > .lessonList {
  padding: 0 18px 18px;
}

        .lessonList {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lessonCard {
          display: grid;
          grid-template-columns: 80px minmax(0, 1fr);
          gap: 24px;
          align-items: center;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.82);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(14px);
          color: inherit;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        a.lessonCard:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 158, 11, 0.45);
          background: rgba(245, 158, 11, 0.07);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.35),
            0 0 30px rgba(245, 158, 11, 0.08);
        }

        .lessonCard.disabled {
          border-color: rgba(255, 255, 255, 0.07);
          background: rgba(15, 23, 42, 0.6);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
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

        .lessonNumberProduction {
          border: 1px solid rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .lessonBody {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .lessonTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .lessonInformation {
          min-width: 0;
        }

        .lessonTop h3 {
          margin: 0;
          color: white;
          font-size: 23px;
          line-height: 1.3;
        }

        .lessonTop p {
          max-width: 760px;
          margin: 12px 0 17px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.65;
        }

        .disabled .lessonTop h3 {
          color: rgba(255, 255, 255, 0.88);
        }

        .disabled .lessonTop p {
          color: rgba(255, 255, 255, 0.57);
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
          font-size: 0.82rem;
          font-weight: 900;
        }

        .availableStatus {
          border: 1px solid rgba(34, 197, 94, 0.36);
          background: rgba(34, 197, 94, 0.12);
          color: #86efac;
        }

        .productionStatus {
          border: 1px solid rgba(245, 158, 11, 0.28);
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .time {
          color: rgba(255, 255, 255, 0.66);
          font-size: 0.9rem;
          font-weight: 800;
        }

        .enterLesson {
          color: #fbbf24;
          font-weight: 900;
        }

        .productionText {
          color: rgba(255, 255, 255, 0.42);
        }

        .courseNotice {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 20px;
          align-items: center;
          margin-top: 40px;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.22);
          border-radius: 22px;
          background: rgba(245, 158, 11, 0.07);
        }

        .noticeIcon {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #f59e0b;
          color: #111827;
          font-weight: 950;
        }

        .courseNotice h2 {
          margin: 0 0 7px;
          font-size: 22px;
        }

        .courseNotice p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.65;
        }

        @media (max-width: 760px) {
          .page {
            padding: 30px 16px;
          }

          .courseHeader,
          .lessonTop {
            flex-direction: column;
            align-items: flex-start;
          }
.moduleHeader {
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 21px;
}

.moduleDetails {
  width: 100%;
  justify-content: space-between;
}

.moduleCount {
  align-items: flex-start;
  white-space: normal;
}

.moduleContent.open > .lessonList {
  padding: 0 12px 12px;
}
          .lessonCard {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 22px;
          }

          .lessonMeta {
            align-items: flex-start;
          }

          .courseNotice {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}