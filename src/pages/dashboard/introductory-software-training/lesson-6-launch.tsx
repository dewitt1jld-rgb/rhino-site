import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Launch the Software",
    href: "/dashboard/introductory-software-training/lesson-6-launch",
  },
  {
    number: 2,
    title: "Program Walkthrough",
    href: "/dashboard/introductory-software-training/lesson-6-overview",
  },
  {
    number: 3,
    title: "Order of Opperations",
    href: "/dashboard/introductory-software-training/lesson-6-workflow",
  },
];

export default function LessonSixLaunchPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="06"
      lessonTitle="Understanding the Program Layout"
      lessonDescription="Learn how to launch the programs, create shortcuts, and understand the big-picture purpose of Glazier Studio and PartnerPak."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>

      <h2>Launch Glazier Studio & PartnerPak</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Learn how to find, launch, and create desktop
        shortcuts for Glazier Studio and PartnerPak.
      </div>

      <p className="bodyText">
        Before learning how to build projects and frames, you need to know
        how to open the software quickly. This section shows where Glazier
        Studio is installed, how to launch the program, and how to create a
        desktop shortcut.
      </p>

      <div className="sectionBox">
        <h3>Find the Program Folder</h3>

        <p>
          Open File Explorer and navigate to the Glazier Studio installation
          folder:
        </p>

        <div className="codeBox">
          <li>C:\Program Files (x86)\DeMichele Group\Glazier Studio</li>
          <li>C:\Program Files (x86)\DeMichele Group\PartnerPak studio</li>
        </div>

        <p>
          Inside this folder, look for the Glazier Studio or PartnerPak application icon.
        </p>
      </div>

      <div className="sectionBox">
        <h3>Create a Desktop Shortcut</h3>

        <ul>
          <li>Find the Glazier Studio application icon.</li>
          <li>Right-click the icon.</li>
          <li>Select Show more options</li>
          <li>Select <strong>Send to</strong>.</li>
          <li>Select <strong>Desktop create shortcut</strong>.</li>
          <li>Repeat the same process for PartnerPak if your company uses it.</li>
        </ul>

        <p>
          Creating a desktop shortcut makes it easier to launch the software
          throughout the day without searching through program folders. Alternitavly you may click the search bar at the bottom of the screen and search for either application.
        </p>
      </div>

      <div className="sectionBox">
        <h3>Creating a shortcut</h3>

        <p>
          This video will cover how to create a desktop icon and pin the icon to your taskbar
        </p>

        <div className="videoCard">
          <video
            controls
            preload="metadata"
            poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-2/thumbnails/pin-to-taskbar-thumb.png"
          >
            <source
              src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/intro-to-glazier-studios/lesson-2/pin%20to%20taskbar.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="sectionBox">
        <h3>What Glazier Studio Does</h3>

        <p>
          Glazier Studio is where projects and frames are created. It allows
          you to build frames, assign materials, review project information,
          and generate reports for estimating or fabrication.
        </p>

        <div className="featureGrid">
          <div className="featureBox">
            <h4>Build Frames</h4>
            <p>
              Glazier Studio gives you the tools to draw and organize the
              frames used in your project.
            </p>
          </div>

          <div className="featureBox">
            <h4>Use Metal Groups</h4>
            <p>
              Metal groups help define the system or product line being used
              to build the frame.
            </p>
          </div>

          <div className="featureBox">
            <h4>Use Catalog Parts</h4>
            <p>
              Catalog parts are the individual components that make up the
              frame, such as heads, jambs, sills, horizontals, and stops.
            </p>
          </div>

          <div className="featureBox">
            <h4>Run Reports</h4>
            <p>
              Once a frame is built, you can create reports for estimating,
              drawings, material review, or fabrication.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox">
        <h3>The Big Picture</h3>

        <p>
          The goal of this course is to help you understand how the pieces
          fit together before going deep into each tool.
        </p>

        <div className="workflowBox">
          <span>Create Metal Groups</span>
          <span>→</span>
          <span>Build Frames</span>
          <span>→</span>
          <span>Run estimation Reports</span>
          <span>→</span>
          <span>Send to Fabrication</span>
        </div>

        <p>
          Later lessons will break each part of this workflow down step by
          step. For now, focus on understanding that Glazier Studio is the
          starting point for building project information, and PartnerPak
          helps move that information toward fabrication.
        </p>
      </div>

      <div className="infoGrid">
        <div className="warningBox">
          <h3>Important</h3>
          <p>
            If you are connected to the network you are currently working with live company wide projects. Do not delete or modify any company created metal groups or projects. These tutorials will never ask you to over-ride something created by another user in your company.
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
          href="/dashboard/introductory-software-training/lesson-6-overview"
          className="primary"
        >
          Next →
        </Link>
      </div>

      <style jsx>{`
        .bodyText,
        .sectionBox p {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
        }

        .sectionBox h3 {
          color: #fbbf24;
          margin-top: 0;
        }

        .codeBox {
          margin: 18px 0;
          padding: 18px;
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.34);
          border: 1px solid rgba(245, 158, 11, 0.28);
          color: #fbbf24;
          font-family: Consolas, Monaco, monospace;
          font-weight: 800;
          overflow-x: auto;
        }

        .videoCard {
          margin-top: 22px;
          overflow: hidden;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .videoCard video {
          width: 100%;
          display: block;
          background: #000;
        }

        .featureGrid,
        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .featureBox {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featureBox h4 {
          margin: 0 0 10px;
          color: #fbbf24;
        }

        .featureBox p {
          margin: 0;
          font-size: 16px;
        }

        .workflowBox {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin: 22px 0;
        }

        .workflowBox span {
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.28);
          color: #fbbf24;
          font-weight: 900;
        }

        li,
        .warningBox p {
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
        }

        li {
          margin-bottom: 10px;
        }

        .warningBox {
          padding: 20px;
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.26);
        }

        @media (max-width: 900px) {
          .featureGrid,
          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}