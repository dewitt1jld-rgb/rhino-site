import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Industry Introduction",
    href: "/dashboard/introductory-software-training/lesson-1-glazing-basics",
  },
  {
    number: 2,
    title: "Framing Vocabulary",
    href: "/dashboard/introductory-software-training/lesson-1-vocabulary",
  },
  {
    number: 3,
    title: "CAD Details & Section Views",
    href: "/dashboard/introductory-software-training/lesson-1-cad-drawings",
  },
];

export default function LessonOneGlazingBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="01"
      lessonTitle="Glazing Fabrication Basics"
      lessonDescription="Learn the basic language, framing locations, and drawing concepts used throughout commercial glazing."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Industry Introduction</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand what commercial glazing is, recognize
        the major stages of the work, and become familiar with the language used
        throughout the industry.
      </div>

      <div className="lessonText">
        <p>
          Welcome to <strong>Glazing Fabrication Basics</strong>. This lesson
          introduces the fundamentals of framing, glazing, and the terminology
          commonly used throughout the commercial glass industry.
        </p>

        <p>
          The goal is not to make you an expert in a single lesson. Instead,
          this lesson gives you enough background knowledge to begin following
          conversations inside a glass shop. The glazing industry often feels
          like it has its own language, but the terminology will become more
          natural as you progress through the Academy.
        </p>
      </div>

      <h3>A Finished Storefront</h3>

      <div className="lessonText">
        <p>
          The image below shows a commercial frame you may see while driving
          around a city. Commercial buildings that use glass rely on aluminum
          framing members to hold the glass, create entrances, manage water,
          and meet the structural requirements of the area where the system is
          installed.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/image_of_storefront.png"
          alt="Completed commercial storefront with a centered entrance door"
        />
        <figcaption>
          A completed commercial storefront and entrance system.
        </figcaption>
      </figure>

      <h3>Many People Contribute to the Finished Product</h3>

      <div className="lessonText">
        <p>
          Depending on your position, your responsibilities may involve one or
          several stages of a project.
        </p>
      </div>

      <div className="responsibilityGrid">
        <div>Measuring opening sizes</div>
        <div>Creating or reviewing shop drawings</div>
        <div>Building frames in Glazier Studio</div>
        <div>Programming projects in PartnerPak</div>
        <div>Operating a RhinoFab machine</div>
        <div>Hand-fabricating aluminum</div>
        <div>Assembling completed frames</div>
        <div>Installing frames in the field</div>
      </div>

      <div className="lessonText" style={{ marginTop: "24px" }}>
        <p>
          This introductory training is not intended to teach every fabrication
          or installation procedure. It will introduce these subjects and help
          you understand the path a project follows from the initial opening
          measurements to the completed installation.
        </p>

        <p>
          To begin breaking down the frame, it has been recreated inside one of
          the programs used throughout this Academy:{" "}
          <strong>Glazier Studio</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/frame_in_glazier_studio.png"
          alt="Storefront frame recreated in Glazier Studio"
          loading="lazy"
        />
        <figcaption>
          The completed storefront recreated inside Glazier Studio.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>For now, focus on the overall picture.</strong>
        <p>
          The next section breaks the frame into individual components and
          teaches the vocabulary used to describe each location.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training"
          className="secondary"
        >
          ← Course List
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-1-vocabulary"
          className="primary"
        >
          Next: Framing Vocabulary →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
