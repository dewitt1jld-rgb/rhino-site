import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Download and Install Software",
    href: "/dashboard/introductory-software-training/lesson-4-download-install",
  },
  {
    number: 2,
    title: "Get Customer Number",
    href: "/dashboard/introductory-software-training/lesson-4-customer-number",
  },
  {
    number: 3,
    title: "Connect to Your Network",
    href: "/dashboard/introductory-software-training/lesson-4-connect-network",
  },
];

export default function ConnectNetworkPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Download, Install & Activate Software"
      lessonDescription="Get Glazier Studio and PartnerPak installed or updated before moving into frame training."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Connect to Your Network</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Connect to your company network so you can access
        active projects and shared company data.
      </div>

      <div className="lessonText">
        <p>
          This step is optional. Some shops need the computer connected to the
          company network so Glazier Studio or PartnerPak can access shared
          files, databases, projects, and fabrication resources.
        </p>
      </div>

      <div className="sectionBox">
        <h3>Step 1 - Open the Network Menu</h3>

        <div className="lessonText">
          <p>
            Inside <strong>Glazier Studio</strong> or{" "}
            <strong>PartnerPak</strong>, click <strong>File</strong> in the
            upper-left corner, then select <strong>Network</strong>.
          </p>
        </div>

        <figure
          style={{
            textAlign: "center",
            margin: "28px 0 0",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/file-network.png"
            alt="Open the Network Menu"
            style={{
              display: "block",
              width: "700px",
              maxWidth: "100%",
              height: "auto",
              margin: "0 auto",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          />
        </figure>
      </div>

      <div className="sectionBox">
        <h3>Step 2 - Log In to the Network</h3>

        <div className="lessonText">
          <p>
            A login window will appear. Go to another coworker's computer and
            ask them to open Glazier Studio or PartnerPak. When you see their
            server login screen, write down the <strong>Server Name</strong>{" "}
            they use.
          </p>

          <p>
            In most cases, that will be the same Server Name you should use on
            your computer.
          </p>

          <p>
            Your <strong>User ID</strong> will normally be your first name. This
            is the name that appears on projects you create.
          </p>
        </div>

        <figure
          style={{
            textAlign: "center",
            margin: "28px 0 0",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/network-login.png"
            alt="Network Login"
            style={{
              display: "block",
              width: "700px",
              maxWidth: "100%",
              height: "auto",
              margin: "0 auto",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          />
        </figure>
      </div>

      <div className="sectionBox">
        <h3>Before You Continue</h3>

        <ul>
          <li>Opened File → Network.</li>
          <li>Selected the correct Server Name.</li>
          <li>Selected your User ID.</li>
          <li>Can view and access company jobs and data.</li>
        </ul>
      </div>

      <div className="calloutBox">
        <strong>Helpful Tip</strong>

        <p>
          If you don't know which Server Name to use, open Glazier Studio or
          PartnerPak on another employee's computer and use the exact same
          Server Name shown there.
        </p>
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "22px",
          borderRadius: "18px",
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.28)",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#86efac",
          }}
        >
          Lesson 4 Complete
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "18px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.78)",
          }}
        >
          Glazier Studio and PartnerPak should now be installed or updated,
          activated with your customer number, and ready for the next lesson.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-4-customer-number"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Finish Lesson
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}