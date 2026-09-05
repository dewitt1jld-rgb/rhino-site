import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Door Hardware Overview",
    href: "/dashboard/introductory-software-training/lesson-19-hardware-overview",
  },
  {
    number: 2,
    title: "Common Hardware Components",
    href: "/dashboard/introductory-software-training/lesson-19-common-hardware",
  },
  {
    number: 3,
    title: "Hardware Prep Requirements",
    href: "/dashboard/introductory-software-training/lesson-19-hardware-prep-requirements",
  },
  {
    number: 4,
    title: "Organizing Hardware",
    href: "/dashboard/introductory-software-training/lesson-19-organizing-hardware",
  },
];

export default function LessonNineteenHardwareOverviewPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="19"
      lessonTitle="Door Hardware & Components"
      lessonDescription="Learn how common door hardware is organized, what information matters for fabrication, and how hardware records connect to door preparations."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 4
      </p>

      <h2>
        Door Hardware Overview
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand the relationship between the physical hardware installed on
        a door, the information used to identify that hardware, and the
        fabrication preparations required to install it.
      </div>

      <div className="lessonText">
        <p>
          Door hardware can seem complicated at first because a single entrance
          may contain several different pieces of hardware, and each piece can
          require its own machining or preparation.
        </p>

        <p>
          Before working in the Door Fabrication screen, it is important to
          understand what the hardware actually is and what information matters
          when preparing a door for it.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Hardware and fabrication are related, but they are not the same thing.
        </strong>

        <p>
          The hardware is the physical component installed on the door. The
          fabrication prep is the machining required so that hardware can be
          installed correctly.
        </p>
      </div>

      <h3>
        Think in Three Layers
      </h3>

      <div className="layerGrid">
        <div className="layerCard">
          <span>1</span>

          <div>
            <p className="sectionLabel">
              Hardware
            </p>

            <h3>
              What gets installed
            </h3>

            <p>
              This is the actual physical component such as a hinge, lock,
              closer, strike, exit device, pull, or pivot.
            </p>
          </div>
        </div>

        <div className="layerCard">
          <span>2</span>

          <div>
            <p className="sectionLabel">
              Hardware Information
            </p>

            <h3>
              What identifies it
            </h3>

            <p>
              Manufacturer, model, size, handing, mounting requirements, and
              other information help determine exactly which hardware is being
              used.
            </p>
          </div>
        </div>

        <div className="layerCard">
          <span>3</span>

          <div>
            <p className="sectionLabel">
              Fabrication Prep
            </p>

            <h3>
              What must be machined
            </h3>

            <p>
              The fabrication prep contains the routing, drilling, countersink,
              hole locations, and other operations required to install the
              hardware.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Example: A Hinge
      </h3>

      <div className="lessonText">
        <p>
          A hinge is one of the easiest examples because the relationship
          between the hardware and the fabrication is easy to see.
        </p>

        <p>
          The <strong>hinge</strong> is the physical piece of hardware.
        </p>

        <p>
          The hinge&apos;s manufacturer, size, model, and dimensions identify
          which hinge is being used.
        </p>

        <p>
          The <strong>hinge prep</strong> is the actual machining required in
          the door or frame so the hinge can be installed.
        </p>
      </div>

      <div className="exampleFlow">
        <div>
          <p className="sectionLabel">
            Physical Hardware
          </p>

          <strong>
            Butt Hinge
          </strong>

          <p>
            The component that will eventually be installed on the entrance.
          </p>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Hardware Information
          </p>

          <strong>
            Size &amp; Specifications
          </strong>

          <p>
            The information needed to identify the correct hardware
            preparation.
          </p>
        </div>

        <div className="arrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Fabrication
          </p>

          <strong>
            Hinge Prep
          </strong>

          <p>
            The machining operations required so the hinge fits correctly.
          </p>
        </div>
      </div>

      <h3>
        One Door Can Have Many Hardware Items
      </h3>

      <div className="lessonText">
        <p>
          A typical commercial door may require several different types of
          hardware.
        </p>

        <p>
          Each item serves a different purpose, and many of them require their
          own preparation.
        </p>
      </div>

      <div className="hardwareGrid">
        <div className="hardwareCard">
          <strong>
            Hinges &amp; Pivots
          </strong>

          <p>
            Support the door and allow it to swing.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Locks
          </strong>

          <p>
            Secure the door and control latching or locking.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Cylinders
          </strong>

          <p>
            Provide the keyed portion of many locking systems.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Strikes
          </strong>

          <p>
            Receive the latch or locking component on the opposite side.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Closers
          </strong>

          <p>
            Control how the door closes after it is opened.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Exit Devices
          </strong>

          <p>
            Provide panic or push-bar operation for exiting through the door.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Pulls &amp; Handles
          </strong>

          <p>
            Give the user a way to manually pull or operate the door.
          </p>
        </div>

        <div className="hardwareCard">
          <strong>
            Other Components
          </strong>

          <p>
            Additional hardware may include thresholds, flush bolts, sweeps,
            stops, coordinators, and other entrance components.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Not every hardware item requires the same type of preparation.
        </strong>

        <p>
          Some hardware may need a routed pocket. Some may require drilled
          holes. Others may require several machining operations grouped
          together as one complete prep.
        </p>
      </div>

      <h3>
        The Hardware Schedule Is Your Starting Point
      </h3>

      <div className="lessonText">
        <p>
          On a real project, hardware information often comes from the hardware
          schedule, shop drawings, architectural plans, submittals, or
          manufacturer templates.
        </p>

        <p>
          Those documents tell you what hardware belongs on the door and give
          you the information needed to determine the correct preparation.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Information You May Need
        </p>

        <div className="infoGrid">
          <div>
            <strong>
              Manufacturer
            </strong>

            <p>
              Who makes the hardware.
            </p>
          </div>

          <div>
            <strong>
              Model / Series
            </strong>

            <p>
              The exact hardware family or product being used.
            </p>
          </div>

          <div>
            <strong>
              Hardware Size
            </strong>

            <p>
              Dimensions that may directly affect the fabrication prep.
            </p>
          </div>

          <div>
            <strong>
              Handing
            </strong>

            <p>
              Some hardware changes depending on door handing or orientation.
            </p>
          </div>

          <div>
            <strong>
              Mounting Location
            </strong>

            <p>
              The required position of the hardware on the door or entrance.
            </p>
          </div>

          <div>
            <strong>
              Manufacturer Template
            </strong>

            <p>
              The drawing used to determine the actual machining requirements.
            </p>
          </div>
        </div>
      </div>

      <h3>
        Hardware Does Not Automatically Mean Fabrication
      </h3>

      <div className="lessonText">
        <p>
          One important concept to understand is that knowing which hardware is
          being used does not automatically mean the machine knows what to cut.
        </p>

        <p>
          The fabrication preparation still needs to exist and be correctly
          applied.
        </p>

        <p>
          This is why the Library Fabrications from Lesson 18 are so important.
          They give you a reusable machining prep that can be selected when a
          particular piece of hardware is required.
        </p>
      </div>

      <div className="connectionBox">
        <p className="sectionLabel">
          How Lesson 18 Connects to Lesson 19
        </p>

        <div className="connectionFlow">
          <div>
            <strong>
              Hardware
            </strong>

            <span>
              Identify what is being installed.
            </span>
          </div>

          <div className="connectionArrow">
            →
          </div>

          <div>
            <strong>
              Library Fab
            </strong>

            <span>
              Select or create the correct prep.
            </span>
          </div>

          <div className="connectionArrow">
            →
          </div>

          <div>
            <strong>
              Door Fabrication
            </strong>

            <span>
              Apply the prep to the actual door.
            </span>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Never assume two similar pieces of hardware use the same prep.
        </strong>

        <p>
          Different manufacturers, models, or hardware sizes may require
          different machining. Always verify the actual hardware information
          and manufacturer template before choosing a fabrication.
        </p>
      </div>

      <h3>
        What This Lesson Will Cover
      </h3>

      <div className="lessonText">
        <p>
          During the next three sections, we will look more closely at the
          hardware itself and the information you need before moving into the
          Door Fabrication workflow.
        </p>
      </div>

      <div className="sectionBox">
        <div className="lessonRoadmap">
          <div>
            <strong>
              Step 2
            </strong>

            <span>
              Common Hardware Components
            </span>
          </div>

          <div>
            <strong>
              Step 3
            </strong>

            <span>
              Hardware Prep Requirements
            </span>
          </div>

          <div>
            <strong>
              Step 4
            </strong>

            <span>
              Organizing Hardware
            </span>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          For now, remember this relationship:
        </strong>

        <p>
          Hardware tells you what needs to be installed. The fabrication prep
          tells the machine what needs to be manufactured so that hardware can
          be installed.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-build-hardware-prep"
          className="secondary"
        >
          ← Previous: Lesson 18
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-19-common-hardware"
          className="primary"
        >
          Next: Common Hardware Components →
        </Link>
      </div>

      <style jsx>{`
        .layerGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .layerCard {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .layerCard > span {
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

        .layerCard h3 {
          margin: 6px 0 10px;
          color: #ffffff;
          font-size: 19px;
        }

        .layerCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .exampleFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .exampleFlow > div:not(.arrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .exampleFlow strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 18px;
        }

        .exampleFlow p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f59e0b;
          font-size: 28px;
          font-weight: 900;
        }

        .hardwareGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .hardwareCard {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hardwareCard strong {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
        }

        .hardwareCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .infoGrid > div {
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .infoGrid strong {
          color: #f59e0b;
        }

        .infoGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .connectionBox {
          margin: 24px 0 34px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .connectionFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin-top: 16px;
        }

        .connectionFlow > div:not(.connectionArrow) {
          display: grid;
          gap: 6px;
          padding: 16px;
          text-align: center;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.07);
          border: 1px solid rgba(245, 158, 11, 0.16);
        }

        .connectionFlow strong {
          color: #f59e0b;
        }

        .connectionFlow span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.5;
          font-size: 14px;
        }

        .connectionArrow {
          color: #f59e0b;
          font-size: 24px;
          font-weight: 900;
        }

        .lessonRoadmap {
          display: grid;
          gap: 12px;
        }

        .lessonRoadmap > div {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 16px;
          align-items: center;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .lessonRoadmap strong {
          color: #f59e0b;
        }

        .lessonRoadmap span {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 750;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 850px) {
          .layerGrid {
            grid-template-columns: 1fr;
          }

          .exampleFlow,
          .connectionFlow {
            grid-template-columns: 1fr;
          }

          .arrow,
          .connectionArrow {
            transform: rotate(90deg);
            min-height: 30px;
          }
        }

        @media (max-width: 700px) {
          .hardwareGrid,
          .infoGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .lessonRoadmap > div {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}