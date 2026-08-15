import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Metal Group Basics",
    href: "/dashboard/introductory-software-training/lesson-12-metal-group-basics",
  },
  {
    number: 2,
    title: "Building Your Own Metal Group",
    href: "/dashboard/introductory-software-training/lesson-12-build-metal-group",
  },
{
  number: 3,
  title: "Metal Group Fabrication Options",
  href: "/dashboard/introductory-software-training/lesson-12-metal-group-fabrication-options",
},
];

const img = {
  carrotSymbol:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/carrot_symbol.png",

  copyButton:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/copy_button.png",

  fg3000MetalGroup:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/fg_3000_metal_group.png",

  framingComponents:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/framing_components.png",

  metalGroupPartsSearch:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/metal_group_parts_search.png",

  primaryMetal:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/primary_metal.png",

  propertiesTab:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/properties_tab.png",

  topOfList:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/top_of_list.png",
};

export default function LessonTwelveBuildMetalGroupPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="12"
      lessonTitle="Understanding Metal Groups"
      lessonDescription="Learn how to safely copy an existing metal group, rename it, update framing components, remove unused parts, and understand the supporting component screens."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>Building Your Own Metal Group</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Learn how to create your own metal group by
        copying an existing system and changing only the components your project
        requires.
      </div>

      <div className="calloutBox">
        <strong>Rule #1: DO NOT build a metal group from scratch.</strong>

        <p>
          This follows the same fundamental rule we used when creating Catalog
          Parts. Building a metal group completely from scratch is way too much
          work and can easily result in missing settings that prevent the group
          from working correctly.
        </p>

        <p>
          Always start by finding an existing metal group that is similar to the
          system you are trying to build.
        </p>
      </div>

      <h3>Common Metal Group Abbreviations</h3>

      <div className="lessonText">
        <p>
          Before we start building anything, let&apos;s go over some common
          abbreviations you will see in metal group names.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>T</strong> — Thermal
          </label>

          <label>
            <strong>OG</strong> — Outside Glazed
          </label>

          <label>
            <strong>IG</strong> — Inside Glazed
          </label>

          <label>
            <strong>SS</strong> — Screw Spline
          </label>

          <label>
            <strong>SB</strong> — Shear Block
          </label>

          <label>
            <strong>ST</strong> — Stack System
          </label>

          <label>
            <strong>CS / CG</strong> — Center Set / Center Glazed
          </label>

          <label>
            <strong>FG</strong> — Front Glazed
          </label>

          <label>
            <strong>DRY</strong> — Uses Rubber / Vinyl
          </label>

          <label>
            <strong>WET</strong> — Uses Silicone
          </label>
        </div>
      </div>

      <h3>Choose a Metal Group to Copy</h3>

      <div className="lessonText">
        <p>
          We want to begin with a metal group that is already similar to the
          system we are trying to build.
        </p>

        <p>
          For this example, let&apos;s say our project uses Oldcastle metal,
          FG-3000 material, and an outside-glazed, stops-up configuration.
        </p>

        <p>
          Navigate to the matching FG-3000 metal group and click it once. The
          selected metal group should highlight blue.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.fg3000MetalGroup}
          alt="FG-3000 metal group selected"
        />

        <figcaption>
          Select the metal group that most closely matches the system you are
          building.
        </figcaption>
      </figure>

      <h3>Copy the Metal Group</h3>

      <div className="lessonText">
        <p>
          Once the correct metal group is selected, move to the right-hand side
          of the screen and click <strong>Copy</strong>.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.copyButton}
          alt="Copy button on Metal Groups screen"
          style={{
            width: "60%",
            maxWidth: "100%",
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
          Use Copy rather than modifying the original DeMichele metal group.
        </figcaption>
      </figure>

      <h3>Why Make a Copy Instead of Editing the Original?</h3>

      <div className="lessonText">
        <p>
          Even if the existing metal group looks correct at first glance, we
          may discover parts or settings that need to be changed as we compare
          it against the project drawings.
        </p>

        <p>
          I do not recommend modifying one of DeMichele&apos;s standard metal
          groups directly.
        </p>

        <p>
          I have seen cases where the Custom setting was not enabled and a
          future software update restored the metal group back to its original
          configuration.
        </p>

        <p>
          Creating your own copy lets you customize the system for your project
          and gives you a unique metal group that will not be replaced with the
          program&apos;s default version.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Always give your copied metal group a new, unique name.</strong>

        <p>
          This makes it easy to identify your custom version and helps prevent
          it from being confused with a default group.
        </p>
      </div>

      <h3>Name Your New Metal Group</h3>

      <div className="lessonText">
        <p>
          After clicking Copy, the name behaves exactly like it did in Catalog
          Parts. The software takes the original name and adds
          <strong> Copy 1</strong> to the end.
        </p>

        <p>
          Change that name to something that clearly identifies the group.
        </p>

        <p>
          I usually recommend combining the system name with the project name.
          For example:
        </p>
      </div>

      <div className="calloutBox">
        <strong>Example:</strong>

        <p>
          FG-3000 — Project Name
        </p>
      </div>

      <h3>Pro Tip: Use an Underscore</h3>

      <div className="lessonText">
        <p>
          If you place an underscore at the beginning of the metal group name,
          your custom groups will sort toward the top of the list.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Example:</strong>

        <p>
          _ Metal Group Name
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.topOfList}
          alt="Custom metal groups sorted at the top of the list"
        />

        <figcaption>
          Adding an underscore can make your custom groups easier to find.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Another naming tip:</strong>

        <p>
          If several employees create metal groups, consider adding employee or
          company initials to the name. This makes it easier to identify who
          created each group.
        </p>
      </div>

      <h3>Create the Training Metal Group</h3>

      <div className="lessonText">
        <p>
          For this lesson, name your copied metal group:
        </p>
      </div>

      <div className="calloutBox">
        <strong>Metal Group Name:</strong>

        <p>_ RHINO WRANGLER TEST DELETE AFTER</p>

        <strong>Description:</strong>

        <p>test metal group only</p>
      </div>

      <h3>Properties Tab</h3>

      <figure className="fullWidthMedia">
        <img
          src={img.propertiesTab}
          alt="Metal Group Properties tab"
        />
      </figure>

      <div className="lessonText">
        <p>
          For now, only change the items highlighted in yellow in the image
          above.
        </p>

        <p>
          Leave everything else alone.
        </p>

        <p>
          You may notice Keywords highlighted in blue. We will come back to
          Keywords later, but for this lesson I want you to ignore that setting.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not change settings just because they are there.</strong>

        <p>
          One of the best habits you can build in Glazier Studio is learning to
          change only what you actually need to change.
        </p>
      </div>

      <h3>Framing Components</h3>

      <div className="lessonText">
        <p>
          Framing Components is where most of the important metal group changes
          will happen.
        </p>

        <p>
          This is where we assign the actual catalog parts to each position in
          the frame.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.framingComponents}
          alt="Metal Group framing components section"
        />
      </figure>

      <div className="lessonText">
        <p>
          We will start with the first section and work our way down.
        </p>

        <p>
          Click the blue square with the three dots next to
          <strong> Primary Metal</strong>.
        </p>
      </div>

      <h3>Primary Metal</h3>

      <figure className="fullWidthMedia">
        <img
          src={img.primaryMetal}
          alt="Primary Metal component screen"
        />

        <figcaption>
          For this lesson, focus mainly on the component positions shown in the
          highlighted area.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Primary Metal contains the major components used in a storefront or
          curtain wall system.
        </p>

        <p>
          You should recognize a lot of the vocabulary from Lesson 1.
        </p>

        <p>
          Take a minute to read through the stick positions and make sure you
          can generally identify where each member would be located in a frame.
        </p>

        <p>
          If needed, go back to Lesson 1 for a refresher.
        </p>
      </div>

      <div className="calloutBox">
        <strong>For this lesson, we are practicing the process.</strong>

        <p>
          We do not have real project drawings to compare against yet, so I am
          not concerned with matching a specific system. I just want you to
          understand how parts are changed.
        </p>
      </div>

      <h3>Changing a Part</h3>

      <div className="lessonText">
        <p>
          To change a part, find the position you want to modify and click once
          on the current Product Code.
        </p>

        <p>
          A small dropdown arrow will appear.
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
        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.carrotSymbol}
            alt="Dropdown arrow beside metal group product code"
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
            Click the Product Code to reveal the dropdown.
          </figcaption>
        </figure>

        <figure
          style={{
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src={img.metalGroupPartsSearch}
            alt="Metal Group parts search dropdown"
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
            Scroll through the available parts or use the search field.
          </figcaption>
        </figure>
      </div>

      <div className="lessonText">
        <p>
          Once the dropdown opens, you can either scroll through the available
          parts or begin typing into the search field.
        </p>

        <p>
          Select any new part for this training exercise and notice that the new
          Product Code automatically fills into that position.
        </p>
      </div>

      <div className="calloutBox">
        <strong>After testing it, change the part back.</strong>

        <p>
          Use the Primary Metal image above if you need help remembering the
          original Product Code.
        </p>
      </div>

      <h3>Why Part Position Matters</h3>

      <div className="lessonText">
        <p>
          Only certain types of members should be used in certain framing
          positions.
        </p>

        <p>
          If you tried to place a glass stop or a hardware item into the
          <strong> Head</strong> position, for example, the frame would lose its
          integrity and may no longer build correctly in Frame Builder.
        </p>

        <p>
          A normal workflow is to go through these positions line by line and
          compare the parts in the metal group to the parts shown on your shop
          drawings.
        </p>

        <p>
          Any differences should be corrected here before you begin building
          frames.
        </p>
      </div>

      <h3>Removing a Part</h3>

      <div className="lessonText">
        <p>
          Let&apos;s say your shop drawings do not require a sill channel, but
          the metal group you copied already has a Product Code assigned to the
          Sill Channel position.
        </p>

        <p>
          You have two ways to remove it.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>Option 1:</strong> Click the Product Code and press
            <strong> Delete</strong> on your keyboard.
          </label>

          <label>
            <strong>Option 2:</strong> Open the Product Code dropdown and choose
            <strong> NULL PART</strong>.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Backspace does not work.</strong>

        <p>
          Use the <strong>Delete</strong> key if you want to clear the Product
          Code manually.
        </p>
      </div>

      <h3>Leave Unused Positions Blank</h3>

      <div className="lessonText">
        <p>
          You may notice that our storefront metal group still has positions
          available for things such as face caps and pressure plates.
        </p>

        <p>
          Storefront does not use those components, so those positions should
          remain blank or show <strong>NULL</strong>.
        </p>

        <p>
          If you enter a part into a position that the selected framing system
          does not use, the software may ignore it during frame creation.
        </p>

        <p>
          The same principle applies to curtain wall. Curtain wall systems do
          not typically use components such as sill channel or head channel.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Clean metal groups are easier to troubleshoot.</strong>

        <p>
          Delete or NULL out any component positions that your system does not
          actually use.
        </p>
      </div>

      <h3>Optional Metal</h3>

      <div className="lessonText">
        <p>
          Close Primary Metal and open <strong>Optional Metal</strong>.
        </p>

        <p>
          This screen contains components that are not used as frequently in a
          normal frame.
        </p>

        <p>
          Two of the more common items you may see here are glazing adapters and
          stiffeners.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>Glazing Adapters:</strong> Small pieces of metal that snap
            into a storefront member to reduce the glass pocket size.
          </label>

          <label>
            <strong>Stiffeners:</strong> Steel tubes installed inside certain
            curtain wall members to increase rigidity.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Glazing adapters are selected based on the glass thickness being
          installed.
        </p>

        <p>
          Stiffeners are commonly used in high-wind conditions, storm areas, or
          framing systems that require additional structural reinforcement.
        </p>
      </div>

      <h3>Vinyl</h3>

      <div className="lessonText">
        <p>
          Close Optional Metal and open <strong>Vinyl</strong>.
        </p>

        <p>
          This screen contains the different rubber and vinyl items that may be
          used throughout the project.
        </p>

        <p>
          This section matters mainly when Glazier Studio is being used for
          estimating or material ordering.
        </p>

        <p>
          If your main concern is fabrication, vinyl will not run through the
          RhinoFab saw, so you can generally ignore this section.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Estimating note:</strong>

        <p>
          Vinyl quantities and ordering will be covered in more detail in the
          Estimator training.
        </p>
      </div>

      <h3>Hardware</h3>

      <div className="lessonText">
        <p>
          Close Vinyl and open <strong>Hardware</strong>.
        </p>

        <p>
          The same basic idea applies here. If you are not using the program for
          estimating or material ordering, this section may not be important to
          your fabrication workflow.
        </p>

        <p>
          If you are using it for estimating, there are many frequency options
          that control when and how many pieces of hardware are picked up.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Feel free to explore the Frequency settings.</strong>

        <p>
          We will cover those options more thoroughly in the Estimator
          training.
        </p>
      </div>

      <h3>Specify Glazing Stops</h3>

      <div className="lessonText">
        <p>
          Close Hardware and open <strong>Specify Glazing Stops</strong>.
        </p>

        <p>
          These are the glass stops we discussed in the previous section.
        </p>

        <p>
          Depending on the framing system and shop drawings, you may need to
          specify stops at the sill, head, or intermediate horizontals.
        </p>

        <p>
          This particular group already picks up the required glass stop at the
          intermediate horizontals.
        </p>

        <p>
          Many companies also undercut glass stops slightly so they fit more
          easily into the finished frame opening.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Common example:</strong>

        <p>
          A company may undercut a glass stop by approximately
          <strong> 1/32&quot;</strong>. That adjustment would be specified on
          the glazing stop screen.
        </p>
      </div>

      <h3>Practice Before Moving On</h3>

      <div className="lessonText">
        <p>
          That is the end of this section.
        </p>

        <p>
          Take a few extra minutes and click through the areas we just covered.
          Since this is a test metal group that you created, you cannot hurt one
          of the program&apos;s original groups.
        </p>

        <p>
          Worst case, delete this test group and make another copy of the
          original FG-3000 group.
        </p>

        <p>
          The more familiar you become with where the different components are
          stored, the easier it will be when we begin working with a real project
          later in the training.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I copied an existing metal group instead
            of starting from scratch.
          </label>

          <label>
            <input type="checkbox" /> I renamed the copied group and added a
            description.
          </label>

          <label>
            <input type="checkbox" /> I opened Primary Metal.
          </label>

          <label>
            <input type="checkbox" /> I practiced changing a Product Code.
          </label>

          <label>
            <input type="checkbox" /> I practiced removing a part using Delete
            or NULL PART.
          </label>

          <label>
            <input type="checkbox" /> I reviewed Optional Metal, Vinyl,
            Hardware, and Glazing Stops.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-12-metal-group-basics"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-12-metal-group-fabrication-options"
          className="primary"
        >
          Next: Metal Group Properties →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}