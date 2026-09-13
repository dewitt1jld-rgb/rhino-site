import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Why Build Your Own Metal Group?",
    href: "/dashboard/estimator-training/lesson-2",
  },
  {
    number: 2,
    title: "Understanding Metal Group Vocabulary",
    href: "/dashboard/estimator-training/lesson-2-metal-group-vocabulary",
  },
];

const img = {
  mainScreen:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/main_screen.png",

  metalGroupGeneral:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/metal_group_general.png",

  framingComponents:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/framing_components.png",

  primaryMetal:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/primary_metal.png",

  fg3000:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/fg-3000.png",

  outsideGlazedStopDown:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_down.png",

  outsideGlazedStopUp:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_up.png",
};

export default function EstimatorLessonTwoVocabularyPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="02"
      lessonTitle="Choosing Your Estimating Method"
      lessonDescription="Understand why building a project-specific metal group can save time between estimating and fabrication, and learn the vocabulary used throughout the Metal Groups screen."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 2</p>

      <h2>Understanding Metal Group Vocabulary</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand the terminology used throughout the Metal Groups screen so
        you know what each section controls before we begin modifying anything.
      </div>

      <div className="lessonText">
        <p>
          Before we actually build a metal group, we need to understand the
          vocabulary used throughout the screen.
        </p>

        <p>
          Metal Groups can look complicated at first because there are a lot of
          tabs, component categories, abbreviations, and part positions.
        </p>

        <p>
          The good news is that most of the screen becomes much easier once you
          understand what each section is responsible for.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Think of It This Way</p>

        <h3>
          A metal group is an organized list of parts and rules for a framing
          system.
        </h3>

        <p>
          The frame tells Glazier Studio the shape and layout. The metal group
          tells Glazier Studio which parts belong in those frame positions.
        </p>
      </div>

      <h3>The Metal Groups Screen</h3>

      <div className="lessonText">
        <p>
          Open the Metal Groups screen and select any existing group.
        </p>

        <p>
          The center of the screen contains the available metal groups, while
          the right side displays the information associated with the selected
          group.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.mainScreen}
          alt="Glazier Studio Metal Groups main screen"
        />

        <figcaption>
          The Metal Groups screen contains the available framing systems and the
          settings associated with each group.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Do not make changes yet.</strong>

        <p>
          For this section, I only want you to understand what the different
          terms mean and where the information is stored.
        </p>
      </div>

      <h3>What Is a Metal Group?</h3>

      <div className="lessonText">
        <p>
          A metal group tells Glazier Studio which parts should be used in the
          different positions of a frame.
        </p>

        <p>
          For example, a metal group can define which part number should be used
          as the head, sill, jamb, intermediate vertical, intermediate
          horizontal, glass stop, and other associated components.
        </p>

        <p>
          Different manufacturers and framing systems use different parts, so
          the software contains many different metal groups.
        </p>
      </div>

      <div className="calloutBox">
        <strong>The frame gives the project its shape.</strong>

        <p>
          The metal group gives that frame its actual parts.
        </p>
      </div>

      <h3>Why Are There So Many Metal Groups?</h3>

      <div className="lessonText">
        <p>
          You will often see many versions of what appears to be the same
          framing system.
        </p>

        <p>
          Those variations may represent different glazing directions,
          fabrication methods, interior or exterior conditions, components, or
          other system differences.
        </p>
      </div>

      <figure
        style={{
          maxWidth: "480px",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <img
          src={img.fg3000}
          alt="FG-3000 metal group variations"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "16px",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.55)",
          }}
        >
          One framing system can have many different metal group variations.
        </figcaption>
      </figure>

      <div className="takeawayBox">
        <p className="sectionLabel">Important</p>

        <h3>
          Similar names do not always mean identical setups.
        </h3>

        <p>
          Always make sure you understand which version of the system you are
          starting with before creating your project-specific copy.
        </p>
      </div>

      <h3>Common Metal Group Abbreviations</h3>

      <div className="lessonText">
        <p>
          Metal group names often use abbreviations to describe how the system
          is built or glazed.
        </p>

        <p>
          You do not need to memorize every abbreviation immediately, but these
          are some of the most common ones you will encounter.
        </p>
      </div>

      <div className="abbreviationGrid">
        <div>
          <strong>T</strong>
          <span>Thermal</span>
        </div>

        <div>
          <strong>OG</strong>
          <span>Outside Glazed</span>
        </div>

        <div>
          <strong>IG</strong>
          <span>Inside Glazed</span>
        </div>

        <div>
          <strong>SS</strong>
          <span>Screw Spline</span>
        </div>

        <div>
          <strong>SB</strong>
          <span>Shear Block</span>
        </div>

        <div>
          <strong>ST</strong>
          <span>Stack System</span>
        </div>

        <div>
          <strong>CS / CG</strong>
          <span>Center Set / Center Glazed</span>
        </div>

        <div>
          <strong>FG</strong>
          <span>Front Glazed</span>
        </div>

        <div>
          <strong>DRY</strong>
          <span>Uses Rubber / Vinyl</span>
        </div>

        <div>
          <strong>WET</strong>
          <span>Uses Silicone</span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          These abbreviations are clues, not a substitute for checking the
          system.
        </strong>

        <p>
          Use the name to narrow down your options, then verify the actual
          components and configuration before using the group.
        </p>
      </div>

      <h3>Inside Glazed vs. Outside Glazed</h3>

      <div className="lessonText">
        <p>
          Glazing direction describes which side of the installed frame the
          glass is loaded from.
        </p>
      </div>

      <div className="definitionGrid">
        <section>
          <p className="sectionLabel">Outside Glazed</p>

          <h3>Glass is installed from the exterior</h3>

          <p>
            The glass is loaded into the installed frame from the outside of the
            building.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Inside Glazed</p>

          <h3>Glass is installed from the interior</h3>

          <p>
            The glass is carried inside the building and installed into the
            frame from the interior side.
          </p>
        </section>
      </div>

      <h3>Stops Up vs. Stops Down</h3>

      <div className="lessonText">
        <p>
          Storefront metal groups may also be described as{" "}
          <strong>stops up</strong> or <strong>stops down</strong>.
        </p>

        <p>
          This describes the location of the removable glass stop on the{" "}
          <strong>intermediate horizontal</strong>.
        </p>
      </div>

      <div className="imageGrid">
        <figure>
          <img
            src={img.outsideGlazedStopDown}
            alt="Outside glazed intermediate horizontal with stop down"
          />

          <figcaption>
            Stops down — the removable glass stop is located below the
            intermediate horizontal.
          </figcaption>
        </figure>

        <figure>
          <img
            src={img.outsideGlazedStopUp}
            alt="Outside glazed intermediate horizontal with stop up"
          />

          <figcaption>
            Stops up — the removable glass stop is located above the
            intermediate horizontal.
          </figcaption>
        </figure>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Important</p>

        <h3>
          Use the intermediate horizontal to determine stops up or stops down.
        </h3>

        <p>
          Do not use the head or sill. Their stop locations are affected by
          their position at the top or bottom of the frame and can be
          misleading.
        </p>
      </div>

      <h3>The Main Metal Group Sections</h3>

      <div className="lessonText">
        <p>
          Once you select a metal group, the right side of the screen contains
          the major areas we will work with.
        </p>
      </div>

      <figure
        style={{
          maxWidth: "500px",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <img
          src={img.metalGroupGeneral}
          alt="Metal Group general settings and sections"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: "16px",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.55)",
          }}
        >
          The major areas of the selected metal group.
        </figcaption>
      </figure>

      <div className="sectionMap">
        <section>
          <span>01</span>

          <div>
            <strong>Properties</strong>

            <p>
              General information and settings associated with the metal group.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>

          <div>
            <strong>Framing Components</strong>

            <p>
              The main area where the actual parts assigned to the framing
              system are stored.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>

          <div>
            <strong>Fabrication Options</strong>

            <p>
              Settings that control fabrication behavior and other production
              rules associated with the metal group.
            </p>
          </div>
        </section>
      </div>

      <h3>Properties</h3>

      <div className="lessonText">
        <p>
          The <strong>Properties</strong> area contains general information and
          settings for the selected metal group.
        </p>

        <p>
          Most of the time, we will start with an existing metal group that is
          already close to what we need, so many of these settings can remain
          unchanged.
        </p>

        <p>
          One of the best habits you can develop is to avoid changing settings
          simply because they exist.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Change only what the project requires.</strong>

        <p>
          Starting from a known working group and making limited changes is much
          safer than changing every available setting.
        </p>
      </div>

      <h3>Framing Components</h3>

      <div className="lessonText">
        <p>
          <strong>Framing Components</strong> is where most of our estimating
          work will happen.
        </p>

        <p>
          This section contains the different categories of parts that can be
          associated with the frame.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.framingComponents}
          alt="Metal Group framing components section"
        />

        <figcaption>
          Framing Components contains the part categories used by the metal
          group.
        </figcaption>
      </figure>

      <div className="componentOverview">
        <div>
          <strong>Primary Metal</strong>

          <p>
            The main aluminum members used to construct the frame.
          </p>
        </div>

        <div>
          <strong>Optional Metal</strong>

          <p>
            Additional metal components such as glazing adapters or stiffeners.
          </p>
        </div>

        <div>
          <strong>Vinyl</strong>

          <p>
            Rubber and vinyl components used throughout the glazing system.
          </p>
        </div>

        <div>
          <strong>Hardware</strong>

          <p>
            Hardware items that can be automatically picked up based on
            quantity or frequency rules.
          </p>
        </div>

        <div>
          <strong>Specify Glazing Stops</strong>

          <p>
            The glass-stop parts and related settings used throughout the
            frame.
          </p>
        </div>
      </div>

      <h3>Primary Metal</h3>

      <div className="lessonText">
        <p>
          <strong>Primary Metal</strong> contains the major framing members.
        </p>

        <p>
          This is where Glazier Studio is told which catalog part should be used
          for each major position in the frame.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.primaryMetal}
          alt="Primary Metal component positions"
        />

        <figcaption>
          Primary Metal assigns individual catalog parts to the major framing
          positions.
        </figcaption>
      </figure>

      <div className="positionGrid">
        <div>
          <strong>Head</strong>
          <p>The uppermost horizontal member.</p>
        </div>

        <div>
          <strong>Sill</strong>
          <p>The bottom horizontal member.</p>
        </div>

        <div>
          <strong>Left / Right Jamb</strong>
          <p>The outside vertical members of the frame.</p>
        </div>

        <div>
          <strong>Intermediate Vertical</strong>
          <p>Vertical members located between the jambs.</p>
        </div>

        <div>
          <strong>Intermediate Horizontal</strong>
          <p>Horizontal members located between the head and sill.</p>
        </div>

        <div>
          <strong>Other Positions</strong>
          <p>
            Depending on the system, additional primary-metal positions may
            also be available.
          </p>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Estimator Translation</p>

        <h3>
          Primary Metal is where we make sure the main sticks are correct.
        </h3>

        <p>
          When we build the metal group in Lesson 3, this is one of the first
          places we will compare against the project documents.
        </p>
      </div>

      <h3>Product Code</h3>

      <div className="lessonText">
        <p>
          Each component position contains a <strong>Product Code</strong>.
        </p>

        <p>
          The Product Code is the catalog part assigned to that position.
        </p>

        <p>
          For example, the Head position may point to one catalog part while the
          Sill position points to a completely different part.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Position tells the software where the part belongs.</strong>

        <p>
          Product Code tells the software which actual part to use there.
        </p>
      </div>

      <h3>NULL PART</h3>

      <div className="lessonText">
        <p>
          You may also see a position left blank or assigned to{" "}
          <strong>NULL PART</strong>.
        </p>

        <p>
          That means the selected framing system does not use a part in that
          position.
        </p>

        <p>
          For example, a system may not use a sill channel, face cap, pressure
          plate, or another component that exists as an available position.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Clean Metal Groups</p>

        <h3>
          Do not fill positions just because they are available.
        </h3>

        <p>
          If the framing system does not use that component, leave the position
          blank or NULL.
        </p>
      </div>

      <h3>Optional Metal</h3>

      <div className="lessonText">
        <p>
          <strong>Optional Metal</strong> contains additional metal components
          that may not be required in every frame.
        </p>

        <p>
          Two common examples are glazing adapters and stiffeners.
        </p>
      </div>

      <div className="definitionGrid">
        <section>
          <p className="sectionLabel">Glazing Adapter</p>

          <h3>Changes the glass pocket</h3>

          <p>
            A glazing adapter is a small metal component that can be added to a
            framing member to accommodate a different glass thickness.
          </p>
        </section>

        <section>
          <p className="sectionLabel">Stiffener</p>

          <h3>Adds reinforcement</h3>

          <p>
            Stiffeners are commonly used when a system requires additional
            structural rigidity or reinforcement.
          </p>
        </section>
      </div>

      <div className="calloutBox">
        <strong>Optional does not mean unimportant.</strong>

        <p>
          If the project requires one of these components, it needs to be
          represented in the estimate.
        </p>
      </div>

      <h3>Vinyl</h3>

      <div className="lessonText">
        <p>
          The <strong>Vinyl</strong> section contains the rubber and vinyl
          components used throughout the project.
        </p>

        <p>
          This section becomes especially important when Glazier Studio is being
          used for estimating or material ordering.
        </p>

        <p>
          Vinyl may not be something the RhinoFab saw cuts, but it is still
          something your company may have to purchase.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Estimator Mindset</p>

        <h3>
          The machine may not care about the vinyl. The estimate does.
        </h3>
      </div>

      <h3>Hardware</h3>

      <div className="lessonText">
        <p>
          The <strong>Hardware</strong> section allows hardware items to be
          associated with the framing system.
        </p>

        <p>
          Hardware can use frequency rules that determine when an item should
          be picked up and how many pieces should be included.
        </p>

        <p>
          We will not try to memorize every frequency option here.
        </p>

        <p>
          The important thing is to understand that hardware quantities can be
          automated, and those rules should be verified before trusting the
          estimate.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Automation Warning</p>

        <h3>
          Do not assume the default hardware quantity is correct.
        </h3>

        <p>
          Frequency settings can make the software very powerful, but they can
          also repeat an incorrect rule throughout an entire project.
        </p>
      </div>

      <h3>Specify Glazing Stops</h3>

      <div className="lessonText">
        <p>
          The <strong>Specify Glazing Stops</strong> section controls the glass
          stops associated with the framing system.
        </p>

        <p>
          Depending on the metal group and the framing configuration, stops may
          be associated with the sill, head, intermediate horizontals, or other
          positions.
        </p>

        <p>
          These pieces should not be ignored during estimating because they are
          physical material that may need to be purchased.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          If it goes into the finished frame and you have to buy it, we want the
          estimate to know about it.
        </strong>
      </div>

      <h3>Fabrication Options</h3>

      <div className="lessonText">
        <p>
          The lower portion of the Metal Groups screen contains{" "}
          <strong>Fabrication Options</strong>.
        </p>

        <p>
          These settings become much more important when the job moves toward
          production and RhinoFab.
        </p>

        <p>
          This is where rules related to fabrications can eventually be added or
          refined.
        </p>
      </div>

      <div className="comparisonGrid">
        <section>
          <p className="sectionLabel">During Estimating</p>

          <h3>Focus on the components</h3>

          <p>
            Make sure the metal group contains the parts and material that
            affect project cost.
          </p>
        </section>

        <section>
          <p className="sectionLabel">During Fabrication</p>

          <h3>Refine the fabrication rules</h3>

          <p>
            Add final weeps, anchors, missing fabrications, and other
            production-specific requirements.
          </p>
        </section>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">This Connects Back to Section 1</p>

        <h3>
          Estimating builds the foundation. Fabrication finishes it.
        </h3>

        <p>
          The estimator does not need to perfect every fabrication rule during
          the bid.
        </p>

        <p>
          But if the project-specific metal group already exists, the
          fabrication team can continue adding details instead of rebuilding
          everything from scratch.
        </p>
      </div>

      <h3>What Should an Estimator Care About Most?</h3>

      <div className="priorityGrid">
        <section>
          <span>1</span>

          <strong>Primary Metal</strong>

          <p>
            Are the main framing members correct?
          </p>
        </section>

        <section>
          <span>2</span>

          <strong>Optional Metal</strong>

          <p>
            Are required adapters, stiffeners, or other components included?
          </p>
        </section>

        <section>
          <span>3</span>

          <strong>Vinyl</strong>

          <p>
            Are the glazing materials that affect purchasing represented?
          </p>
        </section>

        <section>
          <span>4</span>

          <strong>Hardware</strong>

          <p>
            Are hardware rules and quantities reasonable?
          </p>
        </section>

        <section>
          <span>5</span>

          <strong>Glazing Stops</strong>

          <p>
            Are the required stops included?
          </p>
        </section>

        <section>
          <span>6</span>

          <strong>Fabrication Options</strong>

          <p>
            Understand where they live, but save final fabrication setup for
            later when appropriate.
          </p>
        </section>
      </div>

      <h3>Do Not Memorize Everything Yet</h3>

      <div className="lessonText">
        <p>
          At this point, I do not expect you to remember every position, every
          abbreviation, or every option in the Metal Groups screen.
        </p>

        <p>
          I want you to understand the structure.
        </p>
      </div>

      <div className="memoryBox">
        <div>
          <strong>Primary Metal</strong>
          <span>Main frame sticks</span>
        </div>

        <div>
          <strong>Optional Metal</strong>
          <span>Extra metal components</span>
        </div>

        <div>
          <strong>Vinyl</strong>
          <span>Rubber and glazing material</span>
        </div>

        <div>
          <strong>Hardware</strong>
          <span>Hardware and quantity rules</span>
        </div>

        <div>
          <strong>Glazing Stops</strong>
          <span>Removable stop material</span>
        </div>

        <div>
          <strong>Fabrication Options</strong>
          <span>Production rules added or refined later</span>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Big Picture</p>

        <h3>
          You do not need to understand every setting to understand the metal
          group.
        </h3>

        <p>
          Start by learning which section controls which type of material.
        </p>

        <p>
          In Lesson 3, we will use this vocabulary to actually create the
          project-specific metal group used for estimating.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 2 Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I can explain what a metal group does.
          </label>

          <label>
            <input type="checkbox" /> I understand why multiple versions of the
            same framing system may exist.
          </label>

          <label>
            <input type="checkbox" /> I recognize the common metal group
            abbreviations.
          </label>

          <label>
            <input type="checkbox" /> I understand inside glazed vs. outside
            glazed.
          </label>

          <label>
            <input type="checkbox" /> I know how to identify stops up vs. stops
            down.
          </label>

          <label>
            <input type="checkbox" /> I know what Primary Metal controls.
          </label>

          <label>
            <input type="checkbox" /> I understand Optional Metal.
          </label>

          <label>
            <input type="checkbox" /> I understand why Vinyl matters for
            estimating.
          </label>

          <label>
            <input type="checkbox" /> I understand that Hardware can use
            frequency rules.
          </label>

          <label>
            <input type="checkbox" /> I understand what Specify Glazing Stops
            controls.
          </label>

          <label>
            <input type="checkbox" /> I know where Fabrication Options fit into
            the workflow.
          </label>
        </div>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">Lesson 2 Complete</p>

        <h3>
          Now we know why we are building the metal group and what the screen is
          telling us.
        </h3>

        <p>
          In Lesson 3, we will put those two ideas together and actually build
          the metal group for estimating.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training/lesson-2"
          className="secondary"
        >
          ← Previous: Why Build Your Own Metal Group?
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-3"
          className="primary"
        >
          Next: Build the Metal Group →
        </Link>
      </div>

      <style jsx>{`
        .abbreviationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .abbreviationGrid > div {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 14px;
          align-items: center;
          padding: 15px 17px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
        }

        .abbreviationGrid strong {
          color: #f59e0b;
          font-size: 18px;
        }

        .abbreviationGrid span {
          color: rgba(255, 255, 255, 0.75);
        }

        .definitionGrid,
        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 34px;
        }

        .definitionGrid section,
        .comparisonGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .definitionGrid h3,
        .comparisonGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .definitionGrid p:not(.sectionLabel),
        .comparisonGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 30px 0 36px;
        }

        .imageGrid figure {
          margin: 0;
          text-align: center;
        }

        .imageGrid img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .imageGrid figcaption {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.56);
          line-height: 1.55;
        }

        .warningBox,
        .criticalBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.34);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.3);
          background: rgba(239, 68, 68, 0.06);
        }

        .warningBox h3,
        .criticalBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel),
        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.73);
          line-height: 1.7;
        }

        .warningBox p:not(.sectionLabel) + p,
        .criticalBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .sectionMap {
          display: grid;
          gap: 14px;
          margin: 26px 0 36px;
        }

        .sectionMap section {
          display: flex;
          gap: 16px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .sectionMap span,
        .priorityGrid span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
          font-size: 12px;
        }

        .sectionMap strong {
          color: #ffffff;
        }

        .sectionMap p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.66);
          line-height: 1.6;
        }

        .componentOverview,
        .positionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .componentOverview > div,
        .positionGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .componentOverview strong,
        .positionGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .componentOverview p,
        .positionGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.6;
        }

        .priorityGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 26px 0 36px;
        }

        .priorityGrid section {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .priorityGrid span {
          margin-bottom: 12px;
        }

        .priorityGrid strong {
          display: block;
          color: #ffffff;
        }

        .priorityGrid p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.64);
          line-height: 1.55;
        }

        .memoryBox {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0 34px;
        }

        .memoryBox > div {
          padding: 17px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
        }

        .memoryBox strong {
          display: block;
          color: #f59e0b;
        }

        .memoryBox span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.67);
        }

        .finalTakeaway {
          margin: 34px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(245, 158, 11, 0.12),
            rgba(255, 255, 255, 0.025)
          );
        }

        .finalTakeaway h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 27px;
        }

        .finalTakeaway p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.75;
        }

        @media (max-width: 900px) {
          .priorityGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .abbreviationGrid,
          .definitionGrid,
          .comparisonGrid,
          .imageGrid,
          .componentOverview,
          .positionGrid,
          .priorityGrid,
          .memoryBox {
            grid-template-columns: 1fr;
          }

          .abbreviationGrid > div {
            grid-template-columns: 70px 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}