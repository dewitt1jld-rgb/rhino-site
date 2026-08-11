import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Estimate & Win the Project",
    href: "/dashboard/introductory-software-training/lesson-3-estimate-to-install",
  },
  {
    number: 2,
    title: "Verify, Fabricate & Install",
    href: "/dashboard/introductory-software-training/lesson-3-fabricate-install",
  },
];

const estimatingSteps = [
  {
    number: "01",
    title: "A Project Is Released for Bid",
    description:
      "A general contractor, architect, building owner, or other customer requests pricing for the glazing portion of a project. The glazing company receives architectural drawings, specifications, elevations, and other bid documents.",
  },
  {
    number: "02",
    title: "Build the Frames in Glazier Studio or PartnerPak",
    description:
      "The software user reviews the elevation drawings and enters the required storefronts, curtain walls, doors, and other frames into the program. At this stage, the dimensions are typically based on the architectural bid drawings.",
  },
  {
    number: "03",
    title: "Estimate the Project",
    description:
      "Once the frames have been created, Glazier Studio or PartnerPak is used to calculate the materials, glass, doors, hardware, labor, and other costs associated with the project.",
  },
  {
    number: "04",
    title: "Prepare and Submit the Bid",
    description:
      "The estimator reviews the project totals and creates a bid summary. The completed proposal is then submitted to the company requesting the bid.",
  },
  {
    number: "05",
    title: "The Project Is Awarded",
    description:
      "If the glazing company wins the project, the preliminary estimate becomes an active job. The frames already created during estimating provide a starting point for the production process.",
  },
];

export default function EstimateToInstallLessonPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="03"
      lessonTitle="From Estimate to Installation"
      lessonDescription="Follow a commercial glazing project from the first bid request through estimating, field verification, fabrication, assembly, and installation."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 2</p>
      <h2>Estimate & Win the Project</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand how a glazing project begins, how
        frames are entered into Glazier Studio or PartnerPak, and how the
        completed estimate becomes a submitted bid.
      </div>

      <div className="lessonText">
        <p>
          A commercial glazing project usually begins long before aluminum is
          cut or glass is installed. It often starts when a general contractor,
          architect, building owner, or other customer asks a glazing company to
          submit a bid.
        </p>

        <p>
          From the perspective of a Glazier Studio or PartnerPak user, the same
          project may move through estimating, field verification, production,
          fabrication, assembly, and installation.
        </p>

        <p>
          The exact responsibilities vary from company to company, but the
          general workflow remains similar.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginTop: "28px",
          padding: "22px",
          border: "1px solid rgba(245, 158, 11, 0.22)",
          borderRadius: "18px",
          background: "rgba(245, 158, 11, 0.07)",
        }}
      >
        {["Bid Request", "Estimate", "Submit Bid", "Project Awarded"].map(
          (label, index, array) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  padding: "9px 13px",
                  borderRadius: "999px",
                  background: "rgba(15, 23, 42, 0.72)",
                  color: "#ffffff",
                  fontWeight: 850,
                }}
              >
                {label}
              </span>

              {index < array.length - 1 && (
                <span
                  style={{
                    color: "#f59e0b",
                    fontSize: "20px",
                    fontWeight: 950,
                  }}
                >
                  →
                </span>
              )}
            </div>
          )
        )}
      </div>

      <h3>The First Five Steps</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {estimatingSteps.map((step) => (
          <section
            key={step.number}
            style={{
              display: "grid",
              gridTemplateColumns: "auto minmax(0, 1fr)",
              gap: "20px",
              alignItems: "flex-start",
              padding: "23px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "18px",
              background: "rgba(5, 7, 11, 0.3)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "14px",
                background: "#f59e0b",
                color: "#111827",
                fontWeight: 950,
              }}
            >
              {step.number}
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#ffffff",
                  fontSize: "20px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255, 255, 255, 0.68)",
                  lineHeight: 1.68,
                }}
              >
                {step.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <h3>The Role of Glazier Studio and PartnerPak</h3>

      <div className="lessonText">
        <p>
          During the bidding phase, the frames entered into the software are
          commonly based on architectural drawings. Those drawings provide
          enough information to estimate the project, but they may not represent
          the exact conditions found at the jobsite.
        </p>

        <p>
          The estimate provides the starting point. If the project is awarded,
          the same frames can be updated and prepared for production instead of
          being rebuilt from the beginning.
        </p>
      </div>

      <div className="calloutBox">
        <strong>The estimating project is only the beginning.</strong>
        <p>
          The next step is to verify the actual field conditions and update the
          project before anything is released for fabrication.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-2-curtain-wall-components"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-3-fabricate-install"
          className="primary"
        >
          Next: Verify & Fabricate →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
