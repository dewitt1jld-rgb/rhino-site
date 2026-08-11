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

export default function LessonSixOverviewPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="06"
      lessonTitle="Understanding the Program Layout"
      lessonDescription="Learn what Glazier Studio and PartnerPak are used for before moving into projects, frames, reports, and fabrication."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>Program Walkthrough</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand what Glazier Studio and PartnerPak
        are used for before and how it all ties together.
      </div>

      <p className="bodyText">
        Glazier Studio and Partnerpak are identical in function. I will use Glazier Studio for the majority of the training but all buttons and layouts are identical between the twho programs.
        The only diffrence between GS and PPAK is that PPAK hosts data for Kawneer while GS hosts data for all of the other vendors.
      </p>

      <div className="sectionBox">
        <h3>Program Overview</h3>

        <p>
          This video covers a quick overview of the program, where screens are located and how the program functions on a basic level.
        </p>

        <div className="videoCard">
          <video
            controls
            preload="metadata"
            poster="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/glazierstudio-training/all-about-frames/thumbnails/general-overview.png"
          >
            <source
              src="https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/glazierstudio-training/all-about-frames/General%20Overview.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="videoInfo">
            <h4>General Program Overview</h4>

            <p>
              Please do not try to follow along with this video.
              The next lessons will begin an interactive guide for you to learn each of the steps mentioned in this video.
              For now try to understand the general flow of the program as by the end of theses lessons you will be able to
              navigate the entire program and understand what each button does.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox">
        <h3>What Glazier Studio & PartnerPak Are For</h3>

        <p>
          Glazier Studio / PartnerPak were originally designed as estimating software. They now do much more then that.
          While still being great estimating tools they also work as the interface to send frames, doors and material
          to RhinoFab equipment to be cut and fabricated.
        </p>
      </div>

      <div className="featureGrid">
        <div className="featureBox">
          <h4>Projects & Frames</h4>
          <p>
            Projects keep job information organized so you can estimate,
            draw frames, review, and fabricate work from one central location.
          </p>
        </div>

        <div className="featureBox">
          <h4>Metal Groups</h4>
          <p>
            Metal groups are a compilation of parts that define the product system being used to create the
            frame.
          </p>
        </div>

        <div className="featureBox">
          <h4>Catalog Parts</h4>
          <p>
            Catalog parts are the individual components that make up the
            metal group and ultimately get used in the frame, such as heads, jambs, sills, mullions, and stops.
          </p>
        </div>

        <div className="featureBox">
          <h4>Reports</h4>
          <p>
            Reports turn project data into useful estimating, drawing,
            material, and purchase orders.
          </p>
        </div>

        <div className="featureBox">
          <h4>Metal Fabrication</h4>
          <p>
            This screen is the final step before sending stock lengths out to a RhinoFab machine.
          </p>
        </div>

        <div className="featureBox">
          <h4>Door fabrication</h4>
          <p>
            This screen is the final step before sending a door leaf out to a RhinoFab machine.
          </p>
        </div>
      </div>

      <div className="infoGrid">
        <div className="tipBox">
          <h3>Helpful Tip</h3>

          <p>
            Do not worry about understanding every button yet. The goal of
            this lesson is to understand the purpose of the software before
            learning the detailed steps.
          </p>
        </div>

        <div className="warningBox">
          <h3>Important</h3>

          <p>
            Avoid changing settings, databases, metal groups, or catalog
            parts until you understand how they affect the rest of the
            workflow.
          </p>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-6-launch"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-6-workflow"
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

        .videoCard {
          margin-top: 20px;
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

        .videoInfo {
          padding: 18px;
        }

        .videoInfo h4 {
          margin: 0 0 8px;
          color: #fbbf24;
          font-size: 20px;
        }

        .videoInfo p {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
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
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
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

        .tipBox h3,
        .warningBox h3 {
          margin-top: 0;
        }

        .tipBox p,
        .warningBox p {
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.55;
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