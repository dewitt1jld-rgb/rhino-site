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
  fabricationOptionsMain:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.3/fabrication_options_main.png",

  designStyle:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.3/design_style.png",

  deepVsShallow:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.3/deep_vs_shallow.png",

  flipMF:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.3/flip_m_f.png",
};

export default function LessonTwelveMetalGroupFabricationOptionsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="12"
      lessonTitle="Understanding Metal Groups"
      lessonDescription="Review the fabrication and frame-building options that control how a metal group behaves when frames are created."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Metal Group Fabrication Options</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand the optional metal group settings that
        control frame layout, splice behavior, extensions, undercuts, glazing
        depths, and several automatic frame-building rules.
      </div>

      <div className="lessonText">
        <p>
          This section covers some of the options that can be changed from one
          metal group to another.
        </p>

        <p>
          These settings can save you time by automatically controlling how the
          frame is built instead of requiring you to manually fix the same
          conditions after every frame is created.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.fabricationOptionsMain}
          alt="Metal Group Fabrication Options screen"
        />

        <figcaption>
          The Fabrication Options area contains several settings that control
          default frame behavior.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Important:</strong>

        <p>
          All of the settings in this section are optional. If you are unsure
          what one does, it is usually safer to leave the default value alone
          and come back to it later.
        </p>
      </div>

      <h3>Back Member & Face Member Design Style</h3>

      <div className="lessonText">
        <p>
          Back Member Design Style and Face Member Design Style control how the
          joints are arranged when a frame is first built.
        </p>

        <p>
          The default setup for most frames is for the
          <strong> vertical members to run through</strong> and the horizontals
          to stop into them.
        </p>

        <p>
          Sometimes an engineer or architect may prefer a different appearance.
          For example, they may want the head and sill to run continuously
          across the frame, or they may want the horizontals to run through
          instead of the verticals.
        </p>

        <p>
          Rather than building the frame and manually reversing every joint,
          you can choose the appropriate design style before the frame is
          created.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.designStyle}
          alt="Metal Group design style options"
        />

        <figcaption>
          Design Style controls which members run through by default when the
          frame is built.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Why this matters:</strong>

        <p>
          Choosing the correct design style can eliminate a lot of repetitive
          joint reversing later.
        </p>
      </div>

      <h3>PP Design Style</h3>

      <div className="lessonText">
        <p>
          PP Design Style is a newer setting that has been added within the last
          few years.
        </p>

        <p>
          Traditionally, the pressure plate design style followed the Back
          Member. You can now also choose to have it follow the Face Member
          instead.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Storefront Tip:</strong>

        <p>
          Storefront frames do not use Pressure Plates or Face Caps, so you can
          ignore the PP and FC design-style settings when working with a
          storefront metal group.
        </p>
      </div>

      <h3>Expansion Mullion Spacing</h3>

      <div className="lessonText">
        <p>
          Expansion Mullion Spacing determines how wide a frame can become
          before Glazier Studio automatically inserts an expansion mullion.
        </p>

        <p>
          An expansion mullion is typically a two-piece vertical that is
          slightly wider than a standard vertical and allows the framing system
          to accommodate expansion and contraction caused by temperature
          changes.
        </p>

        <p>
          Many vendor installation instructions call for an expansion mullion
          approximately every <strong>240&quot;</strong>, although this is not a
          universal rule.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>240&quot;</strong> — A common default spacing.
          </label>

          <label>
            <strong>1000&quot;</strong> — Can effectively prevent the software
            from automatically inserting an expansion mullion in normal frame
            sizes.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Some companies prefer to manually choose exactly where expansion
          mullions are placed instead of allowing the program to insert them
          automatically.
        </p>

        <p>
          For now, I recommend leaving the default around 240&quot; unless you
          have a specific reason to change it.
        </p>
      </div>

      <h3>Head / Sill Channel Max Length</h3>

      <div className="lessonText">
        <p>
          Head / Sill Channel Max Length determines the longest continuous
          channel the software will allow before inserting a splice.
        </p>

        <p>
          This usually comes down to the stock length your company orders.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>144&quot;</strong> — Allows approximately a 12-foot maximum
            channel before a splice.
          </label>

          <label>
            <strong>288&quot;</strong> — Allows approximately a 24-foot maximum
            channel before a splice.
          </label>
        </div>
      </div>

      <h3>Head / Sill Channel Splice Gap</h3>

      <div className="lessonText">
        <p>
          This setting controls the size of the gap between channel sections at
          a splice.
        </p>

        <p>
          Unless you have a specific reason to change it,
          <strong> 1/2&quot;</strong> is a fairly standard value.
        </p>
      </div>

      <h3>Sill Channel & Head Channel Extension</h3>

      <div className="lessonText">
        <p>
          Head and sill channels often extend slightly beyond the overall frame.
        </p>

        <p>
          A common setup is to extend the channel approximately
          <strong> 1/8&quot; on each side</strong> of the frame.
        </p>

        <p>
          This is accomplished by entering a total extension of
          <strong> 1/4&quot;</strong>. The program divides that total between
          the two ends of the channel.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Example:</strong>

        <p>
          A 1/4&quot; total extension results in approximately 1/8&quot; added
          to each end.
        </p>
      </div>

      <h3>Don&apos;t Cut Sill Channel at Door</h3>

      <div className="lessonText">
        <p>
          This option determines whether the sill channel is interrupted where
          a door opening occurs.
        </p>

        <p>
          If this box is checked, the software will allow the sill channel to
          continue underneath the door opening instead of cutting it at the
          jambs.
        </p>

        <p>
          You would then need to manually cut the channel later if the project
          requires it to be removed at the door.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Use this intentionally.</strong>

        <p>
          In most normal situations, you should understand why you want the
          channel to run through the door opening before enabling this option.
        </p>
      </div>

      <h3>Flip Verticals Right of a Door</h3>

      <div className="lessonText">
        <p>
          This setting automatically fixes a common glass-pocket problem that
          can occur beside a door.
        </p>

        <p>
          Door jambs commonly use a shallow pocket filler. A pocket filler is a
          flatter metal component that provides a glass pocket beside the door.
        </p>

        <p>
          Glass pockets generally come in shallow and deep configurations. You
          do not want two shallow pockets facing each other in the same glass
          opening.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.deepVsShallow}
          alt="Deep versus shallow glass pocket condition beside a door"
        />

        <figcaption>
          The circled vertical creates a shallow-to-shallow glass pocket
          condition.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The circled mullion in the image above is the problem. Both members
          create shallow pockets facing the same glass opening.
        </p>

        <p>
          To fix this manually, select the vertical and use
          <strong> Flip M/F Vertical</strong> so the male and female sides swap.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.flipMF}
          alt="Flip male and female vertical option"
        />

        <figcaption>
          Flipping M/F changes which side of the vertical receives the deep and
          shallow pocket.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          A standard vertical normally has a deep glass pocket, while the
          pocket filler beside the door creates the shallow pocket.
        </p>

        <p>
          Because the program follows its standard male/female positioning
          rules, the shallow pocket may end up facing another shallow pocket.
        </p>

        <p>
          You can fix that manually every time, or simply enable
          <strong> Flip Verticals Right of a Door</strong> in the metal group.
        </p>
      </div>

      <div className="calloutBox">
        <strong>This is a good automatic setting to use.</strong>

        <p>
          Enabling it means you do not have to remember to manually flip that
          vertical every time you add a door.
        </p>
      </div>

      <h3>Default Jamb & Vertical Splice PC</h3>

      <div className="lessonText">
        <p>
          These settings identify the default splice part numbers used for
          jambs and verticals.
        </p>

        <p>
          Most of the time I leave these values at their defaults unless the
          splice components need to be picked up specifically for pricing or
          ordering.
        </p>
      </div>

      <h3>Vertical Fab & Horizontal Fab</h3>

      <div className="lessonText">
        <p>
          Vertical Fab and Horizontal Fab allow you to add standard extensions
          or undercuts to vertical and horizontal members.
        </p>

        <p>
          Approximately 99% of the time, these lines should remain blank.
        </p>

        <p>
          One exception can be found in some newer Kawneer metal groups where
          the horizontal members are intentionally undercut by
          <strong> 1/32&quot;</strong> according to their installation
          instructions.
        </p>

        <p>
          Some customers prefer not to use that undercut. In that case, the
          value can be changed back to zero inside the Horizontal Fab settings.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Normal rule:</strong>

        <p>
          Leave Vertical Fab and Horizontal Fab blank unless the system
          specifically requires an extension or undercut.
        </p>
      </div>

      <h3>Face Member Cutting Rules</h3>

      <div className="lessonText">
        <p>
          Face Member Cutting Rules work similarly to Vertical Fab and
          Horizontal Fab, except they apply to Face Cap members.
        </p>

        <p>
          It is fairly common for a Face Cap to receive a slight undercut such
          as <strong>1/32&quot;</strong>.
        </p>
      </div>

      <h3>Default Glazing Depths</h3>

      <div className="lessonText">
        <p>
          Rather than calculating glazing depth from every individual member in
          the metal group, Glazier Studio includes a Default Glazing Depths
          section.
        </p>

        <p>
          These values allow the program to use consistent default glazing
          depths throughout the metal group.
        </p>

        <p>
          However, if you manually replace a member in an individual frame, the
          software can use that replacement part&apos;s own glass bite instead
          of the default values stored here.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Think of these as defaults, not permanent overrides.</strong>

        <p>
          The metal group provides the normal glazing depth, but individual
          parts can still influence the glass calculation when they are changed
          manually.
        </p>
      </div>

      <h3>That&apos;s It</h3>

      <div className="lessonText">
        <p>
          That covers the major Fabrication Options I want you to understand at
          this point in the training.
        </p>

        <p>
          Remember that all of these settings are
          <strong> optional</strong>.
        </p>

        <p>
          If you forget to change one of them, your frame will normally still
          build just fine. You may simply have to make an adjustment later.
        </p>

        <p>
          It is easier to review these settings before you begin building
          frames, but if you are unsure about an option, leave it at the default
          setting and come back to it once you better understand what the
          project requires.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Best practice:</strong>

        <p>
          Change only the settings you understand and actually need. Defaults
          are usually safer than guessing.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand Back Member and Face Member
            Design Style.
          </label>

          <label>
            <input type="checkbox" /> I understand Expansion Mullion Spacing.
          </label>

          <label>
            <input type="checkbox" /> I reviewed head and sill channel length,
            splice gap, and extension settings.
          </label>

          <label>
            <input type="checkbox" /> I understand why Flip Verticals Right of
            a Door can be useful.
          </label>

          <label>
            <input type="checkbox" /> I reviewed Vertical Fab, Horizontal Fab,
            and Face Member Cutting Rules.
          </label>

          <label>
            <input type="checkbox" /> I understand how Default Glazing Depths
            are used.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-12-build-metal-group"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Finish Lesson 12 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}