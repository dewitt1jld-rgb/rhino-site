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

export default function LessonOneCadDrawingsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="01"
      lessonTitle="Glazing Fabrication Basics"
      lessonDescription="Learn the basic language, framing locations, and drawing concepts used throughout commercial glazing."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>CAD Details & Section Views</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand that two-dimensional elevations
        represent three-dimensional aluminum profiles and learn how detail
        callouts lead to section views.
      </div>

      <h3>Two-Dimensional Drawings Represent Physical Material</h3>

      <div className="lessonText">
        <p>
          The lines shown in a two-dimensional elevation represent aluminum
          members with real depth and shape. These members are extruded
          aluminum profiles that come in many sizes, depths, and
          configurations.
        </p>

        <p>
          Different systems may be selected for warm or cold climates, wet or
          dry environments, high-wind areas, government facilities, or
          impact-rated applications. Although the profiles vary, the basic
          location-based terminology generally remains the same.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/3d_view_of_frame.png"
          alt="Three-dimensional view of a commercial storefront frame"
          loading="lazy"
        />
        <figcaption>
          A three-dimensional representation of the storefront frame.
        </figcaption>
      </figure>

      <h3>Introduction to AutoCAD Details</h3>

      <div className="lessonText">
        <p>
          Each aluminum member has its own cross-sectional shape. AutoCAD
          allows detailers and fabricators to draw, isolate, inspect, and
          measure individual framing members and their related components.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/cad_detail_entire_frame.png"
          alt="AutoCAD elevation with detail callouts"
          loading="lazy"
        />
        <figcaption>
          A frame drawing containing numbered detail callouts.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The drawing above shows the complete frame and includes numbered
          detail callouts. Near the top of the image, Detail 1 is positioned
          over the head member. Finding Detail 1 on the corresponding detail
          sheet reveals a section view of that location.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/autocad_head_detail_all_parts.png"
          alt="Detailed AutoCAD section of the storefront head member"
          loading="lazy"
        />
        <figcaption>
          A section detail showing the head member and related components.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          CAD details can be difficult to understand when you are new to the
          industry. A single detail may show the aluminum profile along with
          glass stops, gaskets, fillers, shear blocks, fasteners, glass, and
          surrounding building conditions.
        </p>

        <p>
          A <strong>section cut</strong>, sometimes described as a side view,
          shows the profile shape you would see if you looked directly down the
          length of the aluminum member.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <video controls preload="metadata">
          <source
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/videos_head_member_issolated.mp4"
            type="video/mp4"
          />
          Your browser does not support the video element.
        </video>
        <figcaption>
          Video demonstration: isolating the head member from the complete CAD
          detail.
        </figcaption>
      </figure>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 01 Review</p>
        <div className="takeawayGrid">
          <div>
            <strong>Elevations</strong>
            Show the overall shape and layout of a frame.
          </div>
          <div>
            <strong>Detail Callouts</strong>
            Point to a specific condition shown elsewhere in the drawings.
          </div>
          <div>
            <strong>Section Views</strong>
            Reveal the cross-sectional profile and surrounding parts.
          </div>
          <div>
            <strong>Physical Profiles</strong>
            Every line represents real three-dimensional material.
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-1-vocabulary"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall"
          className="primary"
        >
          Continue to Lesson 2 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
