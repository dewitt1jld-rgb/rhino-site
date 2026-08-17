import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Fabrication Screen Basics",
    href: "/dashboard/introductory-software-training/lesson-13-fabrication-basics",
  },
  {
    number: 2,
    title: "Understanding X, Y & Z",
    href: "/dashboard/introductory-software-training/lesson-13-xyz",
  },
  {
    number: 3,
    title: "Operations, Tools & Options",
    href: "/dashboard/introductory-software-training/lesson-13-fabrication-options",
  },
];

const img = {
  operations:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-07-fab-operations.png",

  direction:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-14-direction.png",

  metalFabType:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-15-metal-fab-type.png",

  formulaBox:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-16-formula-box.png",

  weepAnchor:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-17-weep-and-anchor.png",
};

export default function LessonThirteenFabricationOptionsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="13"
      lessonTitle="Understanding Fabrications"
      lessonDescription="Learn how fabrication operations, drill directions, tools, sizing fields, depth, and special fabrication types work together."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Operations, Tools & Fabrication Options</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand how the remaining fabrication fields
        describe what the machine should do after the fabrication location has
        been determined.
      </div>

      <div className="lessonText">
        <p>
          In the previous section, we learned where a fabrication goes.
        </p>

        <p>
          Now we need to tell the machine <strong>what to do</strong> when it
          gets there.
        </p>
      </div>

      <h3>Fab Operation</h3>

      <div className="lessonText">
        <p>
          Fab Operation describes the type of machining that needs to be
          performed.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.operations}
          alt="Fabrication operation dropdown"
          style={{
            width: "100%",
            maxWidth: "260px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>Drill</strong>
            <p>Used when the desired hole matches the drill bit diameter.</p>
          </div>

          <div>
            <strong>Circle</strong>
            <p>
              Commonly used when the desired hole is larger than the tool and
              must be routed.
            </p>
          </div>

          <div>
            <strong>Countersink</strong>
            <p>
              Used when the screw head needs to sit flush with the material.
            </p>
          </div>

          <div>
            <strong>Rectangle</strong>
            <p>
              A milling operation with both a width and height.
            </p>
          </div>

          <div>
            <strong>Slot</strong>
            <p>
              Similar to a rectangle but typically used to create a slotted
              hole.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Operation and tool must make sense together.</strong>

        <p>
          A normal drill bit can plunge straight into the material, but it
          cannot route sideways to create a larger circle or rectangle.
        </p>
      </div>

      <h3>Direction</h3>

      <div className="lessonText">
        <p>
          Direction tells the machine which side of the part the machining
          operation should come from.
        </p>

        <p>
          Common directions include Top, Bottom, Front, and Back depending on
          the machine.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.direction}
          alt="Fabrication direction dropdown"
          style={{
            width: "100%",
            maxWidth: "220px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="calloutBox">
        <strong>Think physically.</strong>

        <p>
          Imagine the extrusion sitting on the machine table and ask yourself:
          which drill needs to reach this surface?
        </p>
      </div>

      <h3>Tool & Drill</h3>

      <div className="lessonText">
        <p>
          Tool and Drill work together.
        </p>

        <p>
          When a Tool is selected, the Drill field may automatically populate
          with information associated with that tool.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>Standard Drill Bits</strong>
            <p>Used for normal drilled holes.</p>
          </div>

          <div>
            <strong>Countersink Tools</strong>
            <p>Used to create countersunk screw holes.</p>
          </div>

          <div>
            <strong>Endmills</strong>
            <p>
              Used when the tool needs to route circles, rectangles, slots, or
              other milled shapes.
            </p>
          </div>

          <div>
            <strong>Countersink Routers</strong>
            <p>
              Specialty tools capable of drilling and routing certain
              fabrication patterns.
            </p>
          </div>
        </div>
      </div>

      <h3>Depth</h3>

      <div className="lessonText">
        <p>
          Depth controls how far the tool travels into the material from the
          fabrication&apos;s starting position.
        </p>

        <p>
          If you are unsure while troubleshooting, .375&quot; can be a useful
          starting point for understanding the relationship.
        </p>

        <p>
          Increasing Depth makes the tool travel farther. Decreasing it makes
          the tool travel less.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Physical tool length still matters.</strong>

        <p>
          A software depth cannot make a drill bit physically longer. If the
          operation is deeper than the exposed cutting tool can reach, a
          different tool may be required.
        </p>
      </div>

      <h3>Limit</h3>

      <div className="lessonText">
        <p>
          Limit is an older field associated with maximum safe drilling depth,
          particularly for left-handed drilling applications.
        </p>

        <p>
          It is rarely something most current users need to actively adjust, but
          the program may still require a value.
        </p>

        <p>
          A value such as <strong>1&quot;</strong> is commonly entered when the
          field needs data and no special limit is being used.
        </p>
      </div>

      <h3>Operation-Specific Size Fields</h3>

      <div className="lessonText">
        <p>
          Some fields only matter when a specific operation is selected.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>CTSK</strong>
            <p>
              Controls the finished countersink diameter based on the screw
              head.
            </p>
          </div>

          <div>
            <strong>Width & Height</strong>
            <p>
              Used when routing rectangular or slotted operations.
            </p>
          </div>

          <div>
            <strong>Diameter</strong>
            <p>
              Used when routing a circle larger than the selected endmill.
            </p>
          </div>
        </div>
      </div>

      <h3>Metal Fab Type</h3>

      <div className="lessonText">
        <p>
          Metal Fab Type controls special fabrication logic.
        </p>

        <p>
          You will see options used for things such as end/center operations,
          weep holes, fixed locations, and mirror attachment holes.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.metalFabType}
          alt="Metal fabrication type dropdown"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="calloutBox">
        <strong>Do not worry about mastering Metal Fab Type yet.</strong>

        <p>
          Lesson 14 will use these settings when we build actual weep and anchor
          hole fabrications.
        </p>
      </div>

      <h3>Formula Options</h3>

      <div className="lessonText">
        <p>
          Some fabrication locations are not created from one fixed number.
        </p>

        <p>
          Instead, the program uses formulas that respond to the frame,
          surrounding members, or the location of the part.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "20px",
          margin: "30px 0",
        }}
      >
        <img
          src={img.formulaBox}
          alt="Fabrication formula checkbox options"
          style={{
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <img
          src={img.weepAnchor}
          alt="Weep and anchor fabrication formula settings"
          style={{
            width: "100%",
            maxWidth: "620px",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </div>

      <div className="lessonText">
        <p>
          You do not need to understand every formula yet.
        </p>

        <p>
          For now, understand why formulas exist: they allow fabrications to
          move automatically instead of forcing us to enter one fixed location
          that only works on one exact frame.
        </p>
      </div>

      <h3>Custom Fab</h3>

      <div className="calloutBox">
        <strong>Any time you create or modify your own fabrication, check Custom Fab.</strong>

        <p>
          This helps protect your custom fabrication data during future software
          updates.
        </p>
      </div>

      <h3>Advanced Fields</h3>

      <div className="lessonText">
        <p>
          There are several additional fields to the right side of fabrication
          screens.
        </p>

        <p>
          Most beginners will rarely use them, but you should understand what
          they are intended to control.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>Impact Position</strong>
            <p>
              Used in certain Secondary Fabrication and impact-related
              conditions.
            </p>
          </div>

          <div>
            <strong>Mating PC</strong>
            <p>
              Can limit a Secondary Fabrication based on the surrounding part.
            </p>
          </div>

          <div>
            <strong>Bottom Z LOC</strong>
            <p>
              Used in special conditions such as Mirror Attachment Holes.
            </p>
          </div>

          <div>
            <strong>Function</strong>
            <p>
              Can limit a fabrication to a certain member function such as a
              head or sill.
            </p>
          </div>

          <div>
            <strong>Steps</strong>
            <p>
              Allows a routing operation to be completed in multiple passes.
            </p>
          </div>

          <div>
            <strong>Pocket</strong>
            <p>
              Used when an area must be routed repeatedly to remove material
              across the full pocket.
            </p>
          </div>

          <div>
            <strong>Priority</strong>
            <p>
              Controls machining order when one fabrication needs to happen
              before another.
            </p>
          </div>
        </div>
      </div>

      <h3>The Big Picture</h3>

      <div className="lessonText">
        <p>
          When you look at a fabrication line, break it into three questions.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>1. When should it happen?</strong>
            <p>
              Fab Style, glazing condition, stop position, function, and other
              conditions.
            </p>
          </div>

          <div>
            <strong>2. Where should it happen?</strong>
            <p>X, Y, Z, formulas, and rotational values.</p>
          </div>

          <div>
            <strong>3. What should the machine do?</strong>
            <p>
              Operation, direction, tool, drill size, depth, width, height, and
              diameter.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>If you remember those three questions, fabrication screens become much less intimidating.</strong>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 13 Complete</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand how fabrication conditions
            determine when an operation occurs.
          </label>

          <label>
            <input type="checkbox" /> I understand how X, Y, and Z determine
            location.
          </label>

          <label>
            <input type="checkbox" /> I understand the difference between Drill,
            Circle, Rectangle, Slot, and Countersink.
          </label>

          <label>
            <input type="checkbox" /> I understand why Direction and Tool must
            match the physical machining operation.
          </label>

          <label>
            <input type="checkbox" /> I understand why formulas exist.
          </label>

          <label>
            <input type="checkbox" /> I am ready to build real fabrications.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-13-xyz"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Finish Lesson 13 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}