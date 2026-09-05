import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Door Fabrication Overview",
    href: "/dashboard/introductory-software-training/lesson-20-door-fabrication-overview",
  },
  {
    number: 2,
    title: "Adding Hardware Preparations",
    href: "/dashboard/introductory-software-training/lesson-20-adding-hardware-preps",
  },
  {
    number: 3,
    title: "Reviewing & Verifying",
    href: "/dashboard/introductory-software-training/lesson-20-verifying-door-fabrications",
  },
  {
    number: 4,
    title: "Outputting Doors",
    href: "/dashboard/introductory-software-training/lesson-20-outputting-doors",
  },
];

const img = {
  output:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-10-output.png",
  series5000:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-11-5000series-dat.png",
};

export default function LessonTwentyOutputtingDoorsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="20"
      lessonTitle="Door Fabrication"
      lessonDescription="Use the Door Fabrication screen to create, position, verify, and output the preparations required for door hardware."
      currentStep={4}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 4 of 4
      </p>

      <h2>
        Outputting Doors
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Perform the final checks required before outputting a completed door
        fabrication and sending it to the Rhino.
      </div>

      <div className="lessonText">
        <p>
          Once the door has been fully reviewed and all hardware preparations
          have been verified, the final step is to output the door for
          fabrication.
        </p>

        <p>
          This is the point where the information created in Glazier Studio
          becomes a file the Rhino can use.
        </p>

        <p>
          Before clicking <strong>Output</strong>, take one final look at the
          door, the project, the machine orientation, and every hardware prep.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Output should be the final step, not the verification step.
        </strong>

        <p>
          By the time you click Output, the door should already have been
          completely reviewed.
        </p>
      </div>

      <h3>
        Final Door Check
      </h3>

      <div className="lessonText">
        <p>
          Before creating the output file, verify that the correct door is
          selected and that the fabrication matches the actual hardware
          requirements for that door.
        </p>
      </div>

      <div className="finalCheckGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Correct Project
            </strong>

            <p>
              Confirm you are working in the correct project before outputting
              the door.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Correct Door
            </strong>

            <p>
              Verify the correct door leaf is selected.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Correct Orientation
            </strong>

            <p>
              Make sure the door orientation matches the way it will be
              fabricated on the machine.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Correct Hardware Preps
            </strong>

            <p>
              Confirm all required machining is present and correctly located.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Make Sure the Rhino Is Ready
      </h3>

      <div className="lessonText">
        <p>
          Before outputting the job, make sure the Rhino is powered on and
          ready to receive the fabrication file.
        </p>

        <p>
          Also make sure you are using the correct output path for the machine
          you intend to run.
        </p>
      </div>

      <div className="machineReadyGrid">
        <div>
          <strong>
            Rhino Powered On
          </strong>

          <p>
            Make sure the machine is on and available before sending the job.
          </p>
        </div>

        <div>
          <strong>
            Correct Output Path
          </strong>

          <p>
            Verify the job is being sent to the correct machine location.
          </p>
        </div>

        <div>
          <strong>
            Correct Project
          </strong>

          <p>
            Double-check that the file you are outputting belongs to the job
            you intend to fabricate.
          </p>
        </div>

        <div>
          <strong>
            Door Fully Verified
          </strong>

          <p>
            Do not rely on the output process to catch fabrication mistakes.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Be careful when multiple machines or output locations are available.
        </strong>

        <p>
          Sending the correct door to the wrong output path can create confusion
          on the shop floor and may cause the wrong machine to receive the job.
        </p>
      </div>

      <h3>
        Click Output
      </h3>

      <div className="lessonText">
        <p>
          Once the project, door, fabrication, orientation, and output location
          have all been verified, click <strong>Output</strong>.
        </p>

        <p>
          The software will create the fabrication output required for the
          Rhino.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.output}
          alt="Output controls in Door Fabrication"
        />

        <figcaption>
          Use Output only after the door and all fabrication information have
          been fully verified.
        </figcaption>
      </figure>

      <div className="outputFlow">
        <div>
          <span>1</span>

          <strong>
            Verify
          </strong>

          <p>
            Check the door and hardware preps one final time.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>2</span>

          <strong>
            Confirm Machine
          </strong>

          <p>
            Make sure the Rhino is ready and the output location is correct.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <span>3</span>

          <strong>
            Output
          </strong>

          <p>
            Create the fabrication file for the machine.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Once the file is output, the software portion of the door preparation
          is complete.
        </strong>

        <p>
          The next step moves to the machine, where the operator will load the
          correct door and run the fabrication.
        </p>
      </div>

      <h3>
        Special Note for 5000 Series Machines
      </h3>

      <div className="lessonText">
        <p>
          If you are outputting doors for a <strong>5000 Series</strong> Rhino,
          make sure the output type is configured correctly for the machine.
        </p>

        <p>
          The 5000 Series uses the appropriate <strong>DAT</strong> output
          format.
        </p>

        <p>
          Once this has been configured correctly, the software will typically
          remember the setting. Even so, it is worth verifying when working on
          a machine for the first time or when troubleshooting output issues.
        </p>
      </div>

      <figure className="trainingFigure">
        <img
          src={img.series5000}
          alt="5000 Series DAT output setting"
        />

        <figcaption>
          Verify the proper DAT output configuration when working with a 5000
          Series Rhino.
        </figcaption>
      </figure>

      <div className="calloutBox warningCallout">
        <strong>
          The correct fabrication is only useful if the machine receives the
          correct file type.
        </strong>

        <p>
          If a 5000 Series machine is not receiving or recognizing the expected
          door output, verify the DAT output configuration.
        </p>
      </div>

      <h3>
        Do Not Skip the Final Verification
      </h3>

      <div className="lessonText">
        <p>
          Door hardware machining can be much less forgiving than many simple
          frame fabrications.
        </p>

        <p>
          A lock prep, hinge prep, exit device pattern, or other hardware
          preparation may contain several operations. If one of those
          operations is wrong, the finished door may no longer accept the
          intended hardware.
        </p>

        <p>
          Spend the extra few seconds reviewing the door before outputting it.
        </p>
      </div>

      <div className="verificationSequence">
        <div>
          <p className="sectionLabel">
            Check 1
          </p>

          <strong>
            Hardware
          </strong>

          <span>
            Is this the correct hardware for this door?
          </span>
        </div>

        <div>
          <p className="sectionLabel">
            Check 2
          </p>

          <strong>
            Prep
          </strong>

          <span>
            Is the correct Library Fab or machining pattern applied?
          </span>
        </div>

        <div>
          <p className="sectionLabel">
            Check 3
          </p>

          <strong>
            Location
          </strong>

          <span>
            Are all hardware locations correct?
          </span>
        </div>

        <div>
          <p className="sectionLabel">
            Check 4
          </p>

          <strong>
            Orientation
          </strong>

          <span>
            Is the machining on the correct face and side of the door?
          </span>
        </div>

        <div>
          <p className="sectionLabel">
            Check 5
          </p>

          <strong>
            Output
          </strong>

          <span>
            Is the file going to the correct machine?
          </span>
        </div>
      </div>

      <h3>
        Door Fabrication Workflow</h3>

      <div className="lessonText">
        <p>
          At this point, you have completed the full Door Fabrication workflow.
        </p>
      </div>

      <div className="fullWorkflow">
        <div>
          <span>01</span>

          <div>
            <strong>
              Import the Door
            </strong>

            <p>
              Bring the correct door into Door Fabrication from the project.
            </p>
          </div>
        </div>

        <div>
          <span>02</span>

          <div>
            <strong>
              Verify Orientation
            </strong>

            <p>
              Understand how the door is represented relative to the machine.
            </p>
          </div>
        </div>

        <div>
          <span>03</span>

          <div>
            <strong>
              Add Hardware Preps
            </strong>

            <p>
              Use Add Operation or Add Library Fabs as required.
            </p>
          </div>
        </div>

        <div>
          <span>04</span>

          <div>
            <strong>
              Position the Preps
            </strong>

            <p>
              Enter the correct locations, click ADD, and apply the
              fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>05</span>

          <div>
            <strong>
              Review the Data
            </strong>

            <p>
              Verify the operations and X, Y, Z information.
            </p>
          </div>
        </div>

        <div>
          <span>06</span>

          <div>
            <strong>
              Review Detail View
            </strong>

            <p>
              Use Draw Fabs to visually check the completed door.
            </p>
          </div>
        </div>

        <div>
          <span>07</span>

          <div>
            <strong>
              Final Verification
            </strong>

            <p>
              Confirm the hardware, location, orientation, and output path.
            </p>
          </div>
        </div>

        <div>
          <span>08</span>

          <div>
            <strong>
              Output
            </strong>

            <p>
              Send the completed fabrication to the Rhino.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox successCallout">
        <strong>
          The goal is not simply to make the software output a file.
        </strong>

        <p>
          The goal is to make sure the file describes the exact door you intend
          to manufacture.
        </p>
      </div>

      <h3>
        Lesson 20 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Import
            </strong>

            <p>
              Bring the correct doors into Door Fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Prepare
            </strong>

            <p>
              Add and position the required hardware preparations.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Verify
            </strong>

            <p>
              Check the X, Y, Z data, orientation, and Detail View.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Output
            </strong>

            <p>
              Send the verified door fabrication to the correct Rhino.
            </p>
          </div>
        </div>
      </div>

      <div className="sectionBox completionBox">
        <p className="sectionLabel">
          Lesson 20 Complete
        </p>

        <h3>
          You now know the Door Fabrication workflow.
        </h3>

        <p>
          You should now be able to bring doors into Door Fabrication, add
          reusable hardware preps, position those preps, verify the resulting
          machining, and output the completed door to the Rhino.
        </p>

        <p>
          In Lesson 21, we can move into{" "}
          <strong>Applying Hardware &amp; Door Packages</strong> and connect the
          hardware information back to complete entrances.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-20-verifying-door-fabrications"
          className="secondary"
        >
          ← Previous: Reviewing &amp; Verifying
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Complete Lesson 20 →
        </Link>
      </div>

      <style jsx>{`
        .trainingFigure {
          margin: 24px 0 34px;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trainingFigure img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 12px;
        }

        .trainingFigure figcaption {
          padding: 12px 4px 2px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          line-height: 1.55;
        }

        .finalCheckGrid,
        .machineReadyGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .finalCheckGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .finalCheckGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .finalCheckGrid strong {
          color: #ffffff;
        }

        .finalCheckGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .machineReadyGrid > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .machineReadyGrid strong {
          color: #f59e0b;
        }

        .machineReadyGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .outputFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .outputFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .outputFlow > div:not(.flowArrow) > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .outputFlow strong {
          color: #ffffff;
        }

        .outputFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .verificationSequence {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .verificationSequence > div {
          display: grid;
          gap: 7px;
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .verificationSequence strong {
          color: #ffffff;
        }

        .verificationSequence span {
          color: rgba(255, 255, 255, 0.66);
          line-height: 1.5;
          font-size: 14px;
        }

        .fullWorkflow {
          display: grid;
          gap: 10px;
          margin: 22px 0 32px;
        }

        .fullWorkflow > div {
          display: grid;
          grid-template-columns: 58px 1fr;
          align-items: start;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fullWorkflow > div > span {
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.05em;
          padding-top: 2px;
        }

        .fullWorkflow strong {
          color: #ffffff;
        }

        .fullWorkflow p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 22px 0 32px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .completionBox {
          margin-top: 32px;
          border-color: rgba(34, 197, 94, 0.25);
          background: rgba(34, 197, 94, 0.05);
        }

        .completionBox h3 {
          margin: 8px 0 12px;
          color: #ffffff;
        }

        .completionBox p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        .successCallout {
          border-color: rgba(34, 197, 94, 0.28);
          background: rgba(34, 197, 94, 0.06);
        }

        @media (max-width: 950px) {
          .verificationSequence {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 850px) {
          .outputFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }
        }

        @media (max-width: 700px) {
          .finalCheckGrid,
          .machineReadyGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .fullWorkflow > div {
            grid-template-columns: 1fr;
            gap: 6px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}