import Link from "next/link";
import AcademyLessonLayout from "./AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Comparing the Systems",
    href: "/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall",
  },
  {
    number: 2,
    title: "Storefront Components",
    href: "/dashboard/introductory-software-training/lesson-2-storefront-components",
  },
  {
    number: 3,
    title: "Curtain Wall Components",
    href: "/dashboard/introductory-software-training/lesson-2-curtain-wall-components",
  },
];

export default function StorefrontCurtainWallLessonPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="02"
      lessonTitle="Storefront vs. Curtain Wall"
      lessonDescription="Learn the basic differences between storefront and curtain wall systems and recognize how each system is commonly assembled."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Comparing the Systems</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand the primary differences between
        storefront and curtain wall systems and recognize the basic difference
        between screw-spline and shear-block construction.
      </div>

      <div className="lessonText">
        <p>
          <strong>Storefront systems</strong> are typically used on the lower
          levels of commercial buildings, especially around entrances,
          offices, schools, and retail spaces. They are generally shallower,
          less expensive, and designed for smaller openings. Storefront framing
          is usually installed between floors and is not intended to span
          multiple stories.
        </p>

        <p>
          <strong>Curtain wall systems</strong> are designed for larger and
          taller exterior walls. They can span multiple floors and are generally
          deeper, stronger, and better equipped to handle wind pressure,
          building movement, and water drainage. Curtain wall systems commonly
          manage water through internal channels that direct it back to the
          exterior.
        </p>
      </div>

      <div className="calloutBox">
        <strong>An easy way to remember:</strong>
        <blockquote>
          Storefront fills an opening. Curtain wall covers a building.
        </blockquote>
      </div>

      <div className="takeawayGrid">
        <div>
          <strong>Storefront</strong>
          Common around entrances and retail spaces, usually installed between
          floors, and commonly assembled with screw-spline connections.
        </div>

        <div>
          <strong>Curtain Wall</strong>
          Common on larger façades, may span multiple floors, and commonly uses
          shear-block construction.
        </div>
      </div>

      <div className="lessonText" style={{ marginTop: "24px" }}>
        <p>
          Although the components and assembly methods differ, both systems
          provide structure for the glass, manage water, and must be installed
          according to specific manufacturer instructions.
        </p>

        <p>
          Both systems are designed so that water can move through the framing
          and weep back outside without entering the building.
        </p>
      </div>

      <h3>Screw-Spline vs. Shear-Block Construction</h3>

      <div className="lessonText">
        <p>
          The image below compares a <strong>screw-spline configuration</strong>{" "}
          with a <strong>shear-block configuration</strong>.
        </p>

        <p>
          Storefront material commonly uses screw-spline construction, while
          curtain wall systems commonly use shear blocks. These are not
          universal rules, but they are useful guidelines when first learning
          how to recognize each system.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_screwspline_vs_sheerblock.png"
          alt="Comparison of storefront screw-spline and shear-block assembly methods"
        />
        <figcaption>
          Comparison of screw-spline and shear-block frame assembly.
        </figcaption>
      </figure>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-1-cad-drawings"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-2-storefront-components"
          className="primary"
        >
          Next: Storefront Components →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
