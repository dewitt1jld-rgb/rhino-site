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

export default function LessonNineteenHardwarePrepRequirementsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="19"
      lessonTitle="Door Hardware & Components"
      lessonDescription="Learn how common door hardware is organized, what information matters for fabrication, and how hardware records connect to door preparations."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 4
      </p>

      <h2>
        Hardware Prep Requirements
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn what information should be verified before selecting, creating,
        or applying a hardware preparation.
      </div>

      <div className="lessonText">
        <p>
          Before you create or apply a hardware prep, you need to know exactly
          what you are preparing the door or frame for.
        </p>

        <p>
          A hardware name by itself is usually not enough. The exact
          manufacturer, model, dimensions, orientation, mounting location, and
          manufacturer template can all affect the fabrication.
        </p>

        <p>
          The more information you verify before fabrication, the less likely
          you are to discover a problem after the material has already been
          machined.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Do not start with the machine. Start with the hardware.
        </strong>

        <p>
          First determine exactly what is being installed and what preparation
          it requires. Then translate that information into the fabrication
          operations needed by the machine.
        </p>
      </div>

      <h3>
        The Basic Hardware Prep Checklist
      </h3>

      <div className="requirementGrid">
        <div className="requirementCard">
          <span>1</span>

          <div>
            <strong>
              Manufacturer
            </strong>

            <p>
              Identify who manufactures the hardware.
            </p>
          </div>
        </div>

        <div className="requirementCard">
          <span>2</span>

          <div>
            <strong>
              Model / Series
            </strong>

            <p>
              Confirm the exact product, model, or hardware family.
            </p>
          </div>
        </div>

        <div className="requirementCard">
          <span>3</span>

          <div>
            <strong>
              Hardware Size
            </strong>

            <p>
              Verify the dimensions and configuration of the actual hardware.
            </p>
          </div>
        </div>

        <div className="requirementCard">
          <span>4</span>

          <div>
            <strong>
              Handing / Orientation
            </strong>

            <p>
              Determine whether handing or installation orientation changes the
              prep.
            </p>
          </div>
        </div>

        <div className="requirementCard">
          <span>5</span>

          <div>
            <strong>
              Mounting Location
            </strong>

            <p>
              Determine exactly where the hardware belongs on the entrance.
            </p>
          </div>
        </div>

        <div className="requirementCard">
          <span>6</span>

          <div>
            <strong>
              Manufacturer Template
            </strong>

            <p>
              Use the hardware drawing or template to determine the actual
              machining requirements.
            </p>
          </div>
        </div>
      </div>

      <h3>
        1. Verify the Manufacturer
      </h3>

      <div className="lessonText">
        <p>
          Start by identifying the manufacturer of the hardware.
        </p>

        <p>
          Two pieces of hardware may look similar and perform the same job but
          still require different preparations.
        </p>

        <p>
          Manufacturer information helps narrow down which drawings, templates,
          and existing Library Fabs may actually apply.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Similar hardware is not necessarily interchangeable.
        </strong>

        <p>
          Never assume a prep created for one manufacturer will work for
          another manufacturer just because the hardware looks similar.
        </p>
      </div>

      <h3>
        2. Verify the Exact Model or Series
      </h3>

      <div className="lessonText">
        <p>
          Knowing the manufacturer is only the beginning. You also need the
          correct model, series, or hardware family.
        </p>

        <p>
          One manufacturer may offer several versions of the same general
          hardware type, and those versions can have different dimensions or
          mounting requirements.
        </p>
      </div>

      <div className="comparisonFlow">
        <div>
          <p className="sectionLabel">
            Too General
          </p>

          <strong>
            Exit Device
          </strong>

          <p>
            Tells you the category, but not necessarily which preparation is
            required.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Better
          </p>

          <strong>
            Manufacturer + Series
          </strong>

          <p>
            Narrows the hardware down to a specific product family.
          </p>
        </div>

        <div className="flowArrow">
          →
        </div>

        <div>
          <p className="sectionLabel">
            Best
          </p>

          <strong>
            Exact Hardware + Template
          </strong>

          <p>
            Gives you the information needed to verify the actual prep.
          </p>
        </div>
      </div>

      <h3>
        3. Check the Hardware Size
      </h3>

      <div className="lessonText">
        <p>
          Hardware size can directly affect the fabrication.
        </p>

        <p>
          A different hinge size, pull spacing, lock configuration, or other
          hardware dimension may require different hole locations, routing
          dimensions, or machining depths.
        </p>

        <p>
          Never assume that every size within the same hardware family uses the
          same prep.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Dimensions That May Matter
        </p>

        <div className="dimensionGrid">
          <div>
            <strong>
              Overall Size
            </strong>

            <span>
              Width, height, length, or body dimensions.
            </span>
          </div>

          <div>
            <strong>
              Hole Spacing
            </strong>

            <span>
              Distance between mounting holes or fasteners.
            </span>
          </div>

          <div>
            <strong>
              Center-to-Center
            </strong>

            <span>
              Commonly important for pulls and other mounting patterns.
            </span>
          </div>

          <div>
            <strong>
              Pocket Size
            </strong>

            <span>
              Length and width of routed or milled areas.
            </span>
          </div>

          <div>
            <strong>
              Depth
            </strong>

            <span>
              How deep the router, drill, or other operation must machine.
            </span>
          </div>

          <div>
            <strong>
              Offsets
            </strong>

            <span>
              Distances between hardware centerlines and other reference
              points.
            </span>
          </div>
        </div>
      </div>

      <h3>
        4. Check Handing and Orientation
      </h3>

      <div className="lessonText">
        <p>
          Some hardware preparations are affected by the handing or orientation
          of the door.
        </p>

        <p>
          A prep that is correct for one side of an entrance may need to be
          mirrored, repositioned, or otherwise changed for another
          configuration.
        </p>

        <p>
          This is especially important when the hardware is not symmetrical.
        </p>
      </div>

      <div className="orientationGrid">
        <div>
          <p className="sectionLabel">
            Ask
          </p>

          <strong>
            Which door leaf?
          </strong>

          <p>
            Confirm which door or leaf receives the hardware.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Ask
          </p>

          <strong>
            Which face or edge?
          </strong>

          <p>
            Determine which surface of the material receives the preparation.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Ask
          </p>

          <strong>
            Which direction?
          </strong>

          <p>
            Confirm whether the prep changes based on handing or orientation.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          A correct prep in the wrong orientation is still wrong.
        </strong>

        <p>
          Always verify the physical orientation of the door and the hardware
          before sending the part to fabrication.
        </p>
      </div>

      <h3>
        5. Determine the Mounting Location
      </h3>

      <div className="lessonText">
        <p>
          Once you know which hardware is being used, determine exactly where
          it belongs.
        </p>

        <p>
          Hardware locations may be measured from the bottom of the door, from
          finished floor, from the top of the door, from a centerline, or from
          another defined reference point.
        </p>

        <p>
          Do not mix reference points. Make sure you understand what the
          dimension is being measured from before entering it into the
          fabrication workflow.
        </p>
      </div>

      <div className="referenceGrid">
        <div>
          <strong>
            Finished Floor
          </strong>

          <p>
            Some hardware heights may be specified relative to the finished
            floor.
          </p>
        </div>

        <div>
          <strong>
            Bottom of Door
          </strong>

          <p>
            Some fabrication dimensions may be entered from the bottom edge of
            the actual door.
          </p>
        </div>

        <div>
          <strong>
            Door Centerline
          </strong>

          <p>
            Certain hardware or machining patterns may use a centerline as the
            reference.
          </p>
        </div>

        <div>
          <strong>
            Hardware Center
          </strong>

          <p>
            A reusable Library Fab may be built around the center of the
            hardware preparation.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Pay attention to finished floor vs. bottom of door.
        </strong>

        <p>
          Those two dimensions are not automatically the same. Make sure you
          understand the reference used by the hardware schedule, drawing, and
          fabrication screen.
        </p>
      </div>

      <h3>
        6. Get the Manufacturer Template
      </h3>

      <div className="lessonText">
        <p>
          The manufacturer template is one of the most useful pieces of
          information when creating a hardware prep.
        </p>

        <p>
          The template should show the dimensions required to install the
          hardware correctly. That information can then be translated into
          router operations, drill operations, holes, pockets, and other
          machining.
        </p>
      </div>

      <div className="templateFlow">
        <div>
          <span>1</span>

          <strong>
            Find the Template
          </strong>

          <p>
            Obtain the correct drawing for the exact hardware.
          </p>
        </div>

        <div>
          <span>2</span>

          <strong>
            Read the Dimensions
          </strong>

          <p>
            Identify the holes, pockets, depths, spacing, and reference
            dimensions.
          </p>
        </div>

        <div>
          <span>3</span>

          <strong>
            Build the Prep
          </strong>

          <p>
            Translate those dimensions into machining operations.
          </p>
        </div>

        <div>
          <span>4</span>

          <strong>
            Verify the Result
          </strong>

          <p>
            Compare the completed prep back against the manufacturer drawing.
          </p>
        </div>
      </div>

      <h3>
        Determine Which Part Gets Fabricated
      </h3>

      <div className="lessonText">
        <p>
          Hardware preparation is not always limited to the door leaf.
        </p>

        <p>
          Depending on the hardware, fabrication may be required on the door,
          jamb, header, threshold, or another entrance component.
        </p>

        <p>
          Some hardware requires preparation on more than one component.
        </p>
      </div>

      <div className="partGrid">
        <div>
          <strong>
            Door
          </strong>

          <span>
            Door leaf or door edge preparation.
          </span>
        </div>

        <div>
          <strong>
            Jamb
          </strong>

          <span>
            Frame-side preparation such as a strike or hinge location.
          </span>
        </div>

        <div>
          <strong>
            Header
          </strong>

          <span>
            Hardware mounted or received at the top of the entrance.
          </span>
        </div>

        <div>
          <strong>
            Threshold / Sill
          </strong>

          <span>
            Bottom hardware or receiving locations where applicable.
          </span>
        </div>
      </div>

      <h3>
        Separate Hardware Information From Machining Information
      </h3>

      <div className="lessonText">
        <p>
          It helps to separate two questions when reviewing hardware:
        </p>
      </div>

      <div className="questionGrid">
        <div>
          <p className="sectionLabel">
            Question 1
          </p>

          <h3>
            What hardware is being installed?
          </h3>

          <p>
            Manufacturer, model, size, handing, configuration, and location.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Question 2
          </p>

          <h3>
            What does the machine need to do?
          </h3>

          <p>
            Route, drill, countersink, cut, or perform the other operations
            required to create the preparation.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Hardware information gets translated into machining information.
        </strong>

        <p>
          The manufacturer drawing is the bridge between the physical hardware
          and the fabrication operations you create in the software.
        </p>
      </div>

      <h3>
        Verify an Existing Library Fab Before Using It
      </h3>

      <div className="lessonText">
        <p>
          If the required hardware prep already exists in the Fab Rules
          Library, you may not need to build it again.
        </p>

        <p>
          However, finding a Library Fab with a familiar name does not mean you
          should automatically trust it.
        </p>

        <p>
          Compare the saved fabrication against the hardware information and
          manufacturer template before using it on production material.
        </p>
      </div>

      <div className="verificationBox">
        <p className="sectionLabel">
          Existing Prep Verification
        </p>

        <div className="verificationGrid">
          <div>
            <span>✓</span>
            <p>
              Correct manufacturer
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              Correct model or series
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              Correct hardware size
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              Correct machining dimensions
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              Correct orientation
            </p>
          </div>

          <div>
            <span>✓</span>
            <p>
              Correct location-reference behavior
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          A saved prep can still be wrong.
        </strong>

        <p>
          Library Fabs may have been created for different hardware, changed
          over time, or entered incorrectly. Verify unfamiliar preparations
          before trusting them on a real job.
        </p>
      </div>

      <h3>
        Before You Fabricate
      </h3>

      <div className="finalChecklist">
        <div>
          <span>01</span>

          <p>
            I know the exact hardware manufacturer and model.
          </p>
        </div>

        <div>
          <span>02</span>

          <p>
            I have verified the correct manufacturer template.
          </p>
        </div>

        <div>
          <span>03</span>

          <p>
            I understand the hardware dimensions and required machining.
          </p>
        </div>

        <div>
          <span>04</span>

          <p>
            I know which part of the entrance receives the prep.
          </p>
        </div>

        <div>
          <span>05</span>

          <p>
            I have verified the handing and orientation.
          </p>
        </div>

        <div>
          <span>06</span>

          <p>
            I know where the hardware should be located and what that dimension
            is referenced from.
          </p>
        </div>

        <div>
          <span>07</span>

          <p>
            I have verified the selected or newly created fabrication against
            the hardware drawing.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          If you cannot answer these questions, you are not ready to fabricate
          the hardware prep.
        </strong>

        <p>
          Stop and get the missing information before sending the material to
          the machine.
        </p>
      </div>

      <h3>
        Step 3 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Identify
            </strong>

            <p>
              Confirm the exact manufacturer, model, size, and configuration.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Locate
            </strong>

            <p>
              Determine where the hardware belongs and what the location is
              measured from.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Translate
            </strong>

            <p>
              Convert the manufacturer template into the machining operations
              required for fabrication.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Verify
            </strong>

            <p>
              Compare the finished prep against the hardware information before
              using it.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next: organizing the hardware.
        </strong>

        <p>
          In Step 4, we will look at how keeping hardware information and
          preparations organized makes it easier to select the correct prep
          when you begin working with actual doors.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-19-common-hardware"
          className="secondary"
        >
          ← Previous: Common Hardware
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-19-organizing-hardware"
          className="primary"
        >
          Next: Organizing Hardware →
        </Link>
      </div>

      <style jsx>{`
        .requirementGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .requirementCard {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .requirementCard > span {
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

        .requirementCard strong {
          color: #ffffff;
        }

        .requirementCard p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .comparisonFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 14px;
          margin: 24px 0 34px;
        }

        .comparisonFlow > div:not(.flowArrow) {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .comparisonFlow strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .comparisonFlow p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          color: #f59e0b;
          font-size: 26px;
          font-weight: 900;
        }

        .dimensionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .dimensionGrid > div {
          display: grid;
          gap: 6px;
          padding: 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dimensionGrid strong {
          color: #f59e0b;
        }

        .dimensionGrid span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .orientationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 24px 0 34px;
        }

        .orientationGrid > div {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .orientationGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .orientationGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .referenceGrid,
        .partGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .referenceGrid > div,
        .partGrid > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .referenceGrid strong,
        .partGrid strong {
          color: #f59e0b;
        }

        .referenceGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .partGrid > div {
          display: grid;
          gap: 6px;
        }

        .partGrid span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .templateFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .templateFlow > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .templateFlow span {
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

        .templateFlow strong {
          color: #ffffff;
        }

        .templateFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .questionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .questionGrid > div {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .questionGrid h3 {
          margin: 8px 0 12px;
          color: #ffffff;
          font-size: 19px;
        }

        .questionGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .verificationBox {
          margin: 24px 0 34px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .verificationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .verificationGrid > div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .verificationGrid span {
          color: #f59e0b;
          font-weight: 900;
        }

        .verificationGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
        }

        .finalChecklist {
          display: grid;
          gap: 10px;
          margin: 22px 0 32px;
        }

        .finalChecklist > div {
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: center;
          gap: 14px;
          padding: 15px 18px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .finalChecklist span {
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.05em;
        }

        .finalChecklist p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
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

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 850px) {
          .comparisonFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }

          .orientationGrid,
          .templateFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .requirementGrid,
          .dimensionGrid,
          .referenceGrid,
          .partGrid,
          .questionGrid,
          .verificationGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .orientationGrid,
          .templateFlow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}