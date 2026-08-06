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

const productionSteps = [
  {
    number: "06",
    title: "Field-Measure the Openings",
    description:
      "A representative from the glazing company visits the jobsite and measures the actual openings. These field dimensions are used to confirm the correct frame sizes, joint conditions, door openings, and surrounding construction.",
  },
  {
    number: "07",
    title: "Update and Verify the Project",
    description:
      "The frames in Glazier Studio or PartnerPak are updated using the verified field dimensions. The user checks that the correct metal systems, glass, doors, hardware, parts, and fabrication requirements have been assigned.",
  },
  {
    number: "08",
    title: "Send the Project for Fabrication",
    description:
      "After the project has been reviewed and approved for production, the frame information is sent to the RhinoFab system. The RhinoFab machine uses that data to cut and fabricate the aluminum members.",
  },
  {
    number: "09",
    title: "Assemble the Frames",
    description:
      "The fabricated members are labeled, organized, and assembled. Depending on the company and project, the frames may be assembled in the shop or shipped to the jobsite for field assembly.",
  },
  {
    number: "10",
    title: "Install and Complete the Project",
    description:
      "The completed frames, glass, doors, and related components are installed at the project site. Once installation, glazing, adjustment, and final inspection are complete, the project is finished.",
  },
];

export default function FabricateInstallPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="03"
      lessonTitle="From Estimate to Installation"
      lessonDescription="Follow a commercial glazing project from the first bid request through estimating, field verification, fabrication, assembly, and installation."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 2</p>
      <h2>Verify, Fabricate & Install</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand how the awarded project is
        field-measured, updated, verified, sent to RhinoFab, assembled, and
        installed.
      </div>

      <div className="lessonText">
        <p>
          After a project is awarded, the preliminary estimate becomes an
          active job. The next phase is focused on replacing estimated
          information with verified field information.
        </p>

        <p>
          The frames are checked carefully before production because the
          verified project contains the information that will be used to
          manufacture the finished frames.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Estimate first. Verify before fabrication.</strong>
        <p>
          Frames should not be released for fabrication until the project
          dimensions, materials, parts, and production requirements have been
          checked and approved.
        </p>
      </div>

      <h3>The Final Five Steps</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {productionSteps.map((step) => (
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

      <h3>From Software to the Shop</h3>

      <div className="lessonText">
        <p>
          Once the project has been verified, the framing information can be
          sent to the RhinoFab system for production.
        </p>

        <p>
          The RhinoFab machine uses the project data to cut the aluminum to the
          required lengths and perform programmed fabrication such as holes,
          slots, notches, and other machining operations.
        </p>

        <p>
          After fabrication, the members are organized and assembled into
          completed frames. Some companies assemble most frames in the shop,
          while others ship the fabricated members to the jobsite and assemble
          them in the field.
        </p>
      </div>

      <h3>Installation Completes the Workflow</h3>

      <div className="lessonText">
        <p>
          The frames are placed into the prepared openings, anchored, sealed,
          glazed, and adjusted as required.
        </p>

        <p>
          Once the frames, glass, doors, and hardware have been installed and
          the completed work has been inspected, the project is finished.
        </p>

        <p>
          The company then repeats the same process with the next project: bid,
          estimate, measure, verify, fabricate, assemble, and install.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 03 Review</p>

        <div className="takeawayGrid">
          <div>
            <strong>Field Verification</strong>
            Actual opening dimensions are measured after the project is
            awarded.
          </div>

          <div>
            <strong>Production Review</strong>
            The software project is updated and checked before fabrication.
          </div>

          <div>
            <strong>RhinoFab</strong>
            Verified project data is used to cut and fabricate the aluminum.
          </div>

          <div>
            <strong>Installation</strong>
            Assembly and field installation complete the project workflow.
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Module 01 complete.</strong>
        <p>
          The next lesson begins the Software Foundations module and shows how
          to download, install, activate, and prepare Glazier Studio and
          PartnerPak for use.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-3-estimate-to-install"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/download-install"
          className="primary"
        >
          Continue to Lesson 4 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
