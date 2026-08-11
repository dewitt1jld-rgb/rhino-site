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

export default function DownloadInstallPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Download, Install & Activate Software"
      lessonDescription="Get Glazier Studio and PartnerPak installed or updated before moving into frame training."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>

      <h2>Download and Install Software</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Download or update to the latest version of
        Glazier Studio and PartnerPak.
      </div>

      <p className="bodyText">
        Start by downloading and installing Glazier Studio. If your company
        uses PartnerPak, install or update PartnerPak as well. Watch the
        required videos below before moving forward.
      </p>

      <div className="tipBox" style={{ marginBottom: "28px" }}>
        <h3>Which Program Do I Need?</h3>

        <p>
          <strong>Glazier Studio</strong> and <strong>PartnerPak</strong> are
          functionally the same software. They share nearly all of the same tools,
          workflows, and features.
        </p>

        <p>
          The primary difference is the metal systems they support.
        </p>

        <ul>
          <li>
            <strong>Glazier Studio</strong> supports virtually every major storefront
            and curtain wall vendor except Kawneer (There is a way to get kawneer in GS. I will walk you through this later.)
          </li>

          <li>
            <strong>PartnerPak</strong> is designed specifically for
            <strong> Kawneer</strong> metal systems.
          </li>
        </ul>

        <p>
          <strong>
            If your company does not fabricate Kawneer systems, you most
            likely do not need to install PartnerPak.
          </strong>{" "}
          Glazier Studio alone will provide everything you need for the vast
          majority of projects.
        </p>
      </div>

      <h3 className="sectionTitle">Required Videos</h3>

      <div className="videoGrid">
        <div className="videoCard">
          <video
            controls
            preload="metadata"
            poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/thumbnails/glazier-install-thumb.png"
          >
            <source
              src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/glazier%20Studio%20full%20install%201080p%20with%20intro.mp4"
              type="video/mp4"
            />
          </video>

          <div className="videoInfo">
            <h4>Glazier Studio Installation</h4>
            <p>
              Learn how to download, install, and activate Glazier Studio.
            </p>
          </div>
        </div>

        <div className="videoCard">
          <video
            controls
            preload="metadata"
            poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/thumbnails/partnerpak-install-thumb.png"
          >
            <source
              src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/partnerpak%20install.mp4"
              type="video/mp4"
            />
          </video>

          <div className="videoInfo">
            <h4>PartnerPak Installation</h4>
            <p>
              Install PartnerPak if your company uses it with Glazier Studio.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox">
        <h3>Before You Continue</h3>

        <ul>
          <li>
            Please ensure Glazier Studio and PartnerPak are fully updated
          </li>

          <li>
            If your company is on a network and their current programs are out
            of date you will also have to match your program to their version
          </li>

          <li>
            To do this install the latest version of GS and PPAK and call the
            Demichele group to roll your device back to the correct version
          </li>

          <li>480-985-4926</li>
        </ul>
      </div>

      <div className="infoGrid">
        <div className="tipBox">
          <h3>Helpful Tip</h3>

          <p>
            If Windows protects your PC, click "more info" and then click
            "run anyway".
          </p>
        </div>

        <div className="warningBox">
          <h3>Important</h3>

          <p>
            If you have any issues during install please call the Demichele
            group for support. 480-985-4926
          </p>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training"
          className="secondary"
        >
          ← Course List
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-4-customer-number"
          className="primary"
        >
          Next →
        </Link>
      </div>

      <style jsx>{`
        .bodyText {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
        }

        .sectionTitle {
          margin-top: 34px;
          color: #fbbf24;
          font-size: 24px;
        }

        .videoGrid,
        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .videoCard {
          overflow: hidden;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        video {
          width: 100%;
          display: block;
          background: black;
        }

        .videoInfo {
          padding: 16px;
        }

        .videoInfo h4 {
          margin: 0 0 8px;
        }

        .videoInfo p,
        li,
        .tipBox p,
        .warningBox p {
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
        }

        li {
          margin-bottom: 10px;
        }

        .infoGrid {
          margin-top: 18px;
        }

        .tipBox,
        .warningBox {
          padding: 20px;
          border-radius: 16px;
        }

        .tipBox {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .warningBox {
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.26);
        }

        @media (max-width: 900px) {
          .videoGrid,
          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}