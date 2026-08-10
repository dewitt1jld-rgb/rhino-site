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

export default function CustomerNumberPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="04"
      lessonTitle="Download, Install & Activate Software"
      lessonDescription="Get Glazier Studio and PartnerPak installed or updated before moving into frame training."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>Get Customer Number</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Locate and enter the customer number needed
        to activate Glazier Studio and PartnerPak.
      </div>

      <p className="bodyText">
        After installation, the software will ask for your company customer
        number. This number connects the software to your company account.
        If you do not know your customer number, contact the DeMichele Group
        by calling 480-985-4926.
      </p>

      <h3 className="sectionTitle">Where the Customer Number Goes</h3>

      <div className="imageGrid">
        <div className="imageCard">
          <h4>Glazier Studio</h4>

          <img
            src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/customer-number-gs.png"
            alt="Glazier Studio customer number screen"
          />
        </div>

        <div className="imageCard">
          <h4>PartnerPak</h4>

          <img
            src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-1/images/customer%20number%20ppak.png"
            alt="PartnerPak customer number screen"
          />
        </div>
      </div>

      <div className="sectionBox">
        <h3>Before You Continue</h3>

        <ul>
          <li>Locate your company customer number.</li>
          <li>Enter the customer number exactly as provided.</li>
          <li>Confirm the software accepts the number.</li>
        </ul>
      </div>

      <div className="infoGrid">
        <div className="tipBox">
          <h3>Helpful Tip</h3>

          <p>
            Keep the customer number somewhere safe for future installs,
            updates, or new computers.
          </p>
        </div>

        <div className="warningBox">
          <h3>Important</h3>

          <p>
            Do not use another company’s customer number. The software
            should be activated under your own company account.
          </p>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-4-download-install"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-4-connect-network"
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

        .imageGrid,
        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .imageCard {
          overflow: hidden;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .imageCard h4 {
          margin: 0;
          padding: 16px;
          color: #fbbf24;
          font-size: 18px;
        }

        .imageCard img {
          display: block;
          width: 100%;
          height: auto;
        }

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
          .imageGrid,
          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}