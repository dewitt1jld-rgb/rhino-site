import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "What Are Weep & Anchor Holes?",
    href: "/dashboard/introductory-software-training/lesson-14-weep-anchor-basics",
  },
  {
    number: 2,
    title: "Fab Formula Builder",
    href: "/dashboard/introductory-software-training/lesson-14-fab-formula-builder",
  },
  {
    number: 3,
    title: "Setting Up Your Own Weep Holes",
    href: "/dashboard/introductory-software-training/lesson-14-create-weep-holes",
  },
];

const img = {
  installInstructions:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/install-instructions.png",

  metalGroupSelect:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/metal_group_select.png",

  weepAndAnchor:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/wee-and-anchor.png",

  curtainWallWeep:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/weep-hole-curtainwall.png",

  storefrontWeep:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/weep-hole-storefront.png",
};

export default function LessonFourteenWeepAnchorBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="14"
      lessonTitle="Weep & Anchor Holes"
      lessonDescription="Learn what weep holes and anchor holes are, understand why they are primary fabrications, and prepare a training metal group for creating your own fabrication rules."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>What Are Weep & Anchor Holes?</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand the purpose of weep holes and anchor
        holes, recognize why they are considered Primary Fabrications, and
        prepare our Lesson 12 metal group for the fabrication exercises ahead.
      </div>

      <h3>What Is a Weep Hole?</h3>

      <div className="lessonText">
        <p>
          <strong>Weep holes</strong> are holes deliberately drilled into the
          metal to allow water to escape out of the framing system.
        </p>

        <p>
          One of the most important things to understand is that storefront and
          curtain wall systems are <strong>not waterproof</strong>.
        </p>

        <p>
          In fact, many framing systems are designed with the expectation that
          some water will enter the system. The metal is designed to manage that
          water, move it through the framing members, and eventually drain it
          back to the exterior.
        </p>

        <p>
          Without properly located weep holes, water can collect inside the
          framing system. As that water builds up, it can eventually find its
          way into the building.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Think of weep holes as drainage.</strong>
        <p>
          Their job is not to prevent water from entering the system. Their job
          is to give water a controlled path back out of the system.
        </p>
      </div>

      <h3>This Is What Weep Holes Look Like</h3>

      <div className="lessonText">
        <p>
          Weep holes can look slightly different depending on the framing
          system, but the purpose is the same: provide a controlled drainage
          path for water inside the system.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "24px",
          margin: "32px 0",
        }}
      >
        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.storefrontWeep}
            alt="Storefront weep hole example"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          />

          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Example of a weep hole in a storefront system.
          </figcaption>
        </figure>

        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.curtainWallWeep}
            alt="Curtain wall weep hole example"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          />

          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Example of a weep hole in a curtain wall system.
          </figcaption>
        </figure>
      </div>

      <h3>What Is an Anchor Hole?</h3>

      <div className="lessonText">
        <p>
          <strong>Anchor holes</strong> are also holes deliberately drilled
          into the material, but they serve a completely different purpose.
        </p>

        <p>
          Anchor holes allow the framing material to be fastened to the floor,
          structure, or other substrate using screws or other specified
          fasteners.
        </p>
      </div>

      <h3>This Is What Anchor Holes Look Like</h3>

      <div className="lessonText">
        <p>
          In the example below, you can see the difference between drainage
          holes and the larger holes used to anchor the framing system to the
          building.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.weepAndAnchor}
          alt="Weep hole and anchor hole example"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Example showing both weep-hole and anchor-hole locations.
        </figcaption>
      </figure>

      <div className="takeawayBox">
        <p className="sectionLabel">The Basic Difference</p>

        <div className="takeawayGrid">
          <label>
            <strong>Weep Hole:</strong> Allows water to drain from the framing
            system.
          </label>

          <label>
            <strong>Anchor Hole:</strong> Allows the framing system to be
            fastened to the building or substrate.
          </label>
        </div>
      </div>

      <h3>Where Do the Hole Locations Come From?</h3>

      <div className="lessonText">
        <p>
          Weep holes and anchor holes cannot simply be drilled wherever they
          happen to fit. Both need to occur in very specific locations.
        </p>

        <p>
          Every metal system has a set of installation instructions produced by
          the manufacturer. Those instructions tell the installer where the
          required weep holes, anchor holes, and other system-specific
          fabrications need to be located.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.installInstructions}
          alt="Manufacturer installation instructions showing weep hole information"
          style={{
            width: "100%",
            maxWidth: "850px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Example of how manufacturer installation instructions may identify
          required hole locations and sizes.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Installation instructions may point directly to the front or face of
          the sill channel and specify the diameter of the hole that needs to be
          drilled.
        </p>

        <p>
          There may also be notes or text explaining the required frequency,
          spacing, or location of those holes.
        </p>

        <p>
          That information is what you will eventually translate into the
          fabrication rules inside Glazier Studio.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Installation instructions control the real job.</strong>
        <p>
          Do not assume that weep-hole or anchor-hole locations from one metal
          system can be used on another. The locations, hole sizes, spacing, and
          requirements can change from system to system.
        </p>
      </div>

      <h3>Primary vs. Secondary Fabrications</h3>

      <div className="lessonText">
        <p>
          Before we start creating anything, we need to make one important
          distinction from Lesson 13: the difference between a{" "}
          <strong>Primary Fabrication</strong> and a{" "}
          <strong>Secondary Fabrication</strong>.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Primary Fabrications</p>

        <div className="lessonText">
          <p>
            Primary Fabrications are fabrications that belong to the individual
            part itself.
          </p>

          <p>
            <strong>Weep holes and anchor holes</strong> are two of the most
            common examples.
          </p>

          <p>
            There are other operations that may be created as Primary
            Fabrications, but weeps and anchors make up a large portion of what
            you will normally see here.
          </p>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Secondary Fabrications</p>

        <div className="lessonText">
          <p>
            Secondary Fabrications transfer fabrication information from one
            part to another.
          </p>

          <p>
            Think about a horizontal member containing screw spline holes. The
            horizontal intersects a vertical, and that hole pattern needs to be
            transferred onto the vertical so the two members can be assembled.
          </p>

          <p>
            Screw spline and shear block hole patterns are common examples of
            Secondary Fabrications.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>So where do weep and anchor holes belong?</strong>
        <p>
          Because the weep or anchor hole belongs directly to the individual
          part being fabricated, it is a{" "}
          <strong>Primary Fabrication</strong>.
        </p>
      </div>

      <h3>Let's Prepare Our Training Metal Group</h3>

      <div className="lessonText">
        <p>
          From this point forward, you can start following along inside Glazier
          Studio.
        </p>

        <p>
          We are going to return to the test metal group we created in Lesson
          12 and eventually add our own Primary Fabrications to it.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Don't have the Lesson 12 metal group?</strong>
        <p>
          If you deleted it or did not create it, return to Lesson 12 and make a
          new copy before continuing. We want to practice on our own test group
          instead of modifying a standard metal group.
        </p>
      </div>

      <div className="lessonText">
        <p>
          Navigate to the <strong>Metal Groups</strong> screen and select:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>_RHINO WRANGLER TEST DELETE AFTER</strong>
          </label>
        </div>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.metalGroupSelect}
          alt="Select the Rhino Wrangler test metal group"
          style={{
            width: "100%",
            maxWidth: "850px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Select the training metal group created during Lesson 12.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          With the metal group selected, go back into the{" "}
          <strong>Primary Metal</strong> screen.
        </p>

        <p>
          This is where part of our weep-hole and anchor-hole setup will
          eventually be connected.
        </p>
      </div>

      <h3>The "Where" and the "What"</h3>

      <div className="lessonText">
        <p>
          There are two pieces of information we need before Glazier Studio can
          create these holes correctly.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>WHERE:</strong> Where on the metal should the fabrication
            occur?
          </label>

          <label>
            <strong>WHAT:</strong> What fabrication should the machine perform
            at that location?
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          The <strong>WHERE</strong> portion is controlled by a formula.
        </p>

        <p>
          You can think of that formula as a more advanced version of the Y
          location we learned about in Lesson 13. Instead of always giving the
          software one fixed Y value, the formula can determine the correct
          locations based on the conditions of the part.
        </p>

        <p>
          The <strong>WHAT</strong> portion is established on the individual
          catalog part. This tells the program what machining operation should
          actually happen at the locations generated by the formula.
        </p>
      </div>

      <div className="calloutBox">
        <strong>We're going to build these separately.</strong>
        <p>
          In Step 2, we will use Fab Formula Builder to establish the{" "}
          <strong>WHERE</strong>.
        </p>

        <p>
          In Step 3, we will establish the <strong>WHAT</strong> on the
          individual part and put the two pieces together.
        </p>
      </div>

      <h3>Our Rhino Wrangler Training Example</h3>

      <div className="calloutBox">
        <strong>Training values only — do not use these on a real job.</strong>
        <p>
          The following locations are made-up values for this exercise. They
          may resemble real-world fabrication locations, but they should not be
          used for an actual project.
        </p>

        <p>
          Always use the manufacturer's installation instructions when
          configuring a real metal system.
        </p>
      </div>

      <div className="lessonText">
        <p>
          For our example, imagine that we are working with a standard exterior
          curtain wall system and need to create weep holes and anchor holes on
          the <strong>sill channel / sub-sill</strong>.
        </p>

        <p>
          On a real project, this is where we would stop and review the
          manufacturer's installation instructions. For training, we are going
          to use the following made-up requirements.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Weep Hole Locations</p>

        <div className="takeawayGrid">
          <label>
            <strong>6&quot;</strong> from each end
          </label>

          <label>
            <strong>4&quot;</strong> from intermediate verticals
          </label>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Anchor Hole Locations</p>

        <div className="takeawayGrid">
          <label>
            <strong>4&quot;</strong> from each end
          </label>

          <label>
            <strong>18&quot; on center</strong> down the length of the part
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Write these numbers down before continuing.</strong>
        <p>
          We are going to use these exact training locations when we build our
          formulas in the next section. They will not be repeated on the next
          page, so write them down or take a picture before continuing.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 14.1 Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand the purpose of a weep hole.
          </label>

          <label>
            <input type="checkbox" /> I understand the purpose of an anchor
            hole.
          </label>

          <label>
            <input type="checkbox" /> I understand the difference between
            Primary and Secondary Fabrications.
          </label>

          <label>
            <input type="checkbox" /> I selected my Rhino Wrangler test metal
            group.
          </label>

          <label>
            <input type="checkbox" /> I wrote down the training weep and anchor
            locations.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-13-fabrication-basics"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-14-fab-formula-builder"
          className="primary"
        >
          Next: Fab Formula Builder →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}