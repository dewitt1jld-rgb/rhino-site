import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Door Hardware Overview",
    href: "/dashboard/introductory-software-training/lesson-18-hardware-overview",
  },
  {
    number: 2,
    title: "Common Hardware Components",
    href: "/dashboard/introductory-software-training/lesson-18-common-hardware",
  },
  {
    number: 3,
    title: "Hardware Prep Requirements",
    href: "/dashboard/introductory-software-training/lesson-18-hardware-prep-requirements",
  },
  {
    number: 4,
    title: "Organizing Hardware",
    href: "/dashboard/introductory-software-training/lesson-18-organizing-hardware",
  },
];

const hardwareExamples = [
  {
    name: "Hinges & Pivots",
    purpose:
      "Support the door and allow it to swing while controlling the relationship between the door and frame.",
    prep:
      "May require routed pockets, drilled holes, countersinks, or pivot-specific machining depending on the hardware.",
    note:
      "Hinges are a useful training example because the same prep is often repeated at multiple vertical locations.",
  },
  {
    name: "Locks & Cylinders",
    purpose:
      "Secure the door and provide the locking or keyed portion of the entrance.",
    prep:
      "May require lock-body routing, cylinder holes, spindle holes, mounting holes, or related machining.",
    note:
      "Different lock families can require very different preparations even when they serve the same general purpose.",
  },
  {
    name: "Strikes",
    purpose:
      "Receive the latch, bolt, or locking component on the opposite side of the door.",
    prep:
      "Typically requires a correctly positioned pocket, opening, or drilled pattern in the frame or related member.",
    note:
      "Strike location must align with the corresponding lock or latch preparation.",
  },
  {
    name: "Closers",
    purpose:
      "Control the closing action of the door after it has been opened.",
    prep:
      "May require drilled and tapped mounting holes or other mounting preparation depending on the closer and arm configuration.",
    note:
      "Closer preparation can change depending on how the closer is mounted and which side of the entrance it is installed on.",
  },
  {
    name: "Exit Devices",
    purpose:
      "Allow occupants to unlatch and exit through the door using a push bar or panic device.",
    prep:
      "May require multiple drilling locations, mounting holes, lock-related machining, or other device-specific preparations.",
    note:
      "Exit devices often include several separate mounting points that must remain correctly related to one another.",
  },
  {
    name: "Pulls & Handles",
    purpose:
      "Provide a physical grip for opening or operating the door.",
    prep:
      "Usually requires accurately spaced drilled holes based on the pull or handle dimensions.",
    note:
      "Center-to-center dimensions are especially important when laying out pull and handle preparations.",
  },
  {
    name: "Flush Bolts",
    purpose:
      "Secure the inactive leaf of a pair of doors at the head, sill, or both.",
    prep:
      "May require routing or drilling in the door leaf and corresponding receiving locations in the frame or threshold area.",
    note:
      "Flush bolt preparation is commonly associated with paired-door configurations.",
  },
  {
    name: "Thresholds & Related Components",
    purpose:
      "Provide transition, sealing, support, or weather protection at the bottom of the entrance.",
    prep:
      "Some components require drilled mounting holes or coordination with other door and frame hardware.",
    note:
      "Not every threshold-related component requires CNC fabrication, but it still needs to be coordinated with the entrance.",
  },
];

export default function LessonNineteenCommonHardwarePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
      lessonTitle="Door Hardware & Components"
      lessonDescription="Learn how common door hardware is organized, what information matters for fabrication, and how hardware records connect to door preparations."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 4
      </p>

      <h2>
        Common Hardware Components
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Become familiar with the common hardware items used on commercial
        doors and understand the types of fabrication preparations they may
        require.
      </div>

      <div className="lessonText">
        <p>
          Commercial entrances can contain many different hardware components.
          Some are easy to recognize, while others may not be obvious until you
          begin reviewing the hardware schedule or manufacturer drawings.
        </p>

        <p>
          You do not need to memorize every hardware manufacturer or model.
          What matters first is learning to recognize the major hardware
          categories and understanding how each one can affect fabrication.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Hardware category first. Exact model second.
        </strong>

        <p>
          Start by identifying what type of hardware you are dealing with.
          Then use the manufacturer, model, and template to determine the
          exact prep.
        </p>
      </div>

      <h3>
        Common Door Hardware
      </h3>

      <div className="hardwareGrid">
        {hardwareExamples.map((hardware) => (
          <section
            key={hardware.name}
            className="hardwareCard"
          >
            <p className="sectionLabel">
              Hardware Type
            </p>

            <h3>
              {hardware.name}
            </h3>

            <div className="hardwareSection">
              <strong>
                What it does
              </strong>

              <p>
                {hardware.purpose}
              </p>
            </div>

            <div className="hardwareSection">
              <strong>
                Typical fabrication
              </strong>

              <p>
                {hardware.prep}
              </p>
            </div>

            <div className="hardwareNote">
              <strong>
                Watch for:
              </strong>{" "}
              {hardware.note}
            </div>
          </section>
        ))}
      </div>

      <h3>
        One Hardware Item May Require Several Operations
      </h3>

      <div className="lessonText">
        <p>
          A hardware prep does not necessarily mean one hole or one router
          operation.
        </p>

        <p>
          One piece of hardware may require several separate machining
          operations that all need to stay in the correct relationship to one
          another.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Example
        </p>

        <div className="operationFlow">
          <div>
            <span>1</span>

            <strong>
              Main Route
            </strong>

            <p>
              Create the primary pocket or opening for the hardware.
            </p>
          </div>

          <div>
            <span>2</span>

            <strong>
              Mounting Holes
            </strong>

            <p>
              Add the drilled locations required to fasten the hardware.
            </p>
          </div>

          <div>
            <span>3</span>

            <strong>
              Secondary Holes
            </strong>

            <p>
              Add cylinders, spindles, fasteners, or other related openings.
            </p>
          </div>

          <div>
            <span>4</span>

            <strong>
              Complete Prep
            </strong>

            <p>
              Keep the operations grouped together as one usable hardware
              preparation.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Think of the prep as a complete pattern.
        </strong>

        <p>
          Even when the prep contains several operations, those operations
          belong together because they all serve the same piece of hardware.
        </p>
      </div>

      <h3>
        Similar Hardware Does Not Always Mean Similar Machining
      </h3>

      <div className="lessonText">
        <p>
          Two hardware items can perform the same general job while using
          completely different mounting patterns or preparation dimensions.
        </p>

        <p>
          For example, two locks from different manufacturers may both be used
          as door locks, but their body dimensions, cylinder locations, and
          mounting holes may be different.
        </p>
      </div>

      <div className="comparisonGrid">
        <div>
          <p className="sectionLabel">
            Same Category
          </p>

          <strong>
            Lock A
          </strong>

          <p>
            Serves the same basic purpose as another lock.
          </p>
        </div>

        <div className="comparisonSymbol">
          ≠
        </div>

        <div>
          <p className="sectionLabel">
            Same Category
          </p>

          <strong>
            Lock B
          </strong>

          <p>
            May still require a completely different fabrication prep.
          </p>
        </div>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Never select a prep based only on the hardware category.
        </strong>

        <p>
          “Hinge,” “lock,” or “closer” is not enough information. Verify the
          exact hardware before choosing or creating the fabrication.
        </p>
      </div>

      <h3>
        Hardware on the Door vs. Hardware on the Frame
      </h3>

      <div className="lessonText">
        <p>
          Another important distinction is where the hardware preparation
          belongs.
        </p>

        <p>
          Some hardware is prepared directly into the door leaf. Other
          hardware requires preparation in the frame, header, jamb, threshold,
          or another entrance component.
        </p>
      </div>

      <div className="locationGrid">
        <div className="locationCard">
          <p className="sectionLabel">
            Door Leaf
          </p>

          <strong>
            Door-side preparations
          </strong>

          <p>
            Locks, cylinders, pulls, exit devices, hinges, pivots, and other
            hardware may require machining directly into the door.
          </p>
        </div>

        <div className="locationCard">
          <p className="sectionLabel">
            Frame
          </p>

          <strong>
            Frame-side preparations
          </strong>

          <p>
            Strikes, hinge locations, pivots, closer-related mounting, and
            other hardware may require preparation in framing members.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Always ask where the prep belongs.
        </strong>

        <p>
          Identifying the correct hardware is only half the job. You also need
          to know which part of the entrance actually receives the machining.
        </p>
      </div>

      <h3>
        Hardware Preps You Will Commonly Reuse
      </h3>

      <div className="lessonText">
        <p>
          Some hardware preparations are used repeatedly across many projects.
          These are excellent candidates for reusable Library Fabrications.
        </p>

        <p>
          Once a prep has been carefully built and verified, reusing it can
          improve consistency and reduce the amount of manual fabrication setup
          required on future jobs.
        </p>
      </div>

      <div className="reuseGrid">
        <div>
          <strong>
            Hinge Prep
          </strong>

          <span>
            Often repeated several times on one door.
          </span>
        </div>

        <div>
          <strong>
            Lock Prep
          </strong>

          <span>
            Common preparation tied to a specific lock family or model.
          </span>
        </div>

        <div>
          <strong>
            Strike Prep
          </strong>

          <span>
            Reusable when the same strike and frame configuration are used.
          </span>
        </div>

        <div>
          <strong>
            Pull Prep
          </strong>

          <span>
            Simple repeated drilling pattern when dimensions are consistent.
          </span>
        </div>
      </div>

      <h3>
        Additional Hardware Examples
      </h3>

      <div className="lessonText">
        <p>
          This section is intentionally left open so additional real-world
          hardware preparations can be added to the course over time.
        </p>

        <p>
          When possible, use actual hardware drawings or completed fabrication
          examples so students can see how the physical hardware turns into a
          machining pattern.
        </p>
      </div>

      <div className="additionalGrid">
        <div className="placeholderCard">
          <p className="sectionLabel">
            Additional Example 1
          </p>

          <h3>
            Add Hardware Prep Here
          </h3>

          <p>
            Add a real hardware example, manufacturer drawing, preparation
            screenshot, and a short explanation of the machining required.
          </p>
        </div>

        <div className="placeholderCard">
          <p className="sectionLabel">
            Additional Example 2
          </p>

          <h3>
            Add Hardware Prep Here
          </h3>

          <p>
            Use this space for another commonly used hardware prep from your
            normal fabrication workflow.
          </p>
        </div>

        <div className="placeholderCard">
          <p className="sectionLabel">
            Additional Example 3
          </p>

          <h3>
            Add Hardware Prep Here
          </h3>

          <p>
            This can be used for a more advanced or less common hardware
            preparation once you decide what example will be most useful.
          </p>
        </div>
      </div>

      <div className="calloutBox instructorCallout">
        <strong>
          Instructor Expansion Area
        </strong>

        <p>
          The three cards above are intentionally easy to replace later. We
          can add actual images, hardware names, dimensions, and preparation
          explanations without changing the rest of the lesson.
        </p>
      </div>

      <h3>
        Step 2 Review
      </h3>

      <div className="reviewGrid">
        <div>
          <span>1</span>

          <div>
            <strong>
              Identify the hardware type
            </strong>

            <p>
              Determine whether you are working with a hinge, lock, strike,
              closer, exit device, or another component.
            </p>
          </div>
        </div>

        <div>
          <span>2</span>

          <div>
            <strong>
              Identify the exact hardware
            </strong>

            <p>
              Verify manufacturer, model, size, and configuration.
            </p>
          </div>
        </div>

        <div>
          <span>3</span>

          <div>
            <strong>
              Determine the prep
            </strong>

            <p>
              Identify every machining operation required for installation.
            </p>
          </div>
        </div>

        <div>
          <span>4</span>

          <div>
            <strong>
              Determine where it belongs
            </strong>

            <p>
              Confirm whether the preparation belongs on the door, frame, or
              another entrance component.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          Next we will focus on the information required to build the prep
          correctly.
        </strong>

        <p>
          Step 3 will look at the drawings, dimensions, handing, mounting
          locations, and other information you should verify before creating
          or selecting a fabrication.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-19-hardware-overview"
          className="secondary"
        >
          ← Previous: Hardware Overview
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-19-hardware-prep-requirements"
          className="primary"
        >
          Next: Hardware Prep Requirements →
        </Link>
      </div>

      <style jsx>{`
        .hardwareGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .hardwareCard {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .hardwareCard h3 {
          margin: 7px 0 18px;
          color: #ffffff;
          font-size: 21px;
        }

        .hardwareSection {
          margin-top: 14px;
        }

        .hardwareSection strong {
          color: #f59e0b;
        }

        .hardwareSection p {
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .hardwareNote {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }

        .hardwareNote strong {
          color: #ffffff;
        }

        .operationFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .operationFlow > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .operationFlow span {
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

        .operationFlow strong {
          color: #ffffff;
        }

        .operationFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 24px 0 34px;
        }

        .comparisonGrid > div:not(.comparisonSymbol) {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .comparisonGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 19px;
        }

        .comparisonGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .comparisonSymbol {
          color: #f59e0b;
          font-size: 34px;
          font-weight: 900;
        }

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .locationCard {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .locationCard strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
          font-size: 19px;
        }

        .locationCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .reuseGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .reuseGrid > div {
          display: grid;
          gap: 6px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reuseGrid strong {
          color: #f59e0b;
        }

        .reuseGrid span {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .additionalGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 30px;
        }

        .placeholderCard {
          padding: 22px;
          min-height: 220px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px dashed rgba(245, 158, 11, 0.4);
        }

        .placeholderCard h3 {
          margin: 8px 0 12px;
          color: #ffffff;
          font-size: 19px;
        }

        .placeholderCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.65;
        }

        .instructorCallout {
          border-color: rgba(34, 197, 94, 0.28);
          background: rgba(34, 197, 94, 0.06);
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

        @media (max-width: 900px) {
          .operationFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .additionalGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .hardwareGrid,
          .locationGrid,
          .reuseGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .comparisonGrid {
            grid-template-columns: 1fr;
          }

          .comparisonSymbol {
            text-align: center;
          }

          .operationFlow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}