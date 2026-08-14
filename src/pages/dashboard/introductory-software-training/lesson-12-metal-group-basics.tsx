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
  fg3000:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/fg-3000.png",

  glassStopSnap:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/glass_stop_snap.png",

  headSnapIn:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/head_snap_in.png",

  mainScreen:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/main_screen.png",

  metalGroupGeneral:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/metal_group_general.png",

  outsideGlazedStopDown:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_down.png",

  outsideGlazedStopUp:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_up.png",
};

export default function LessonTwelveMetalGroupBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="12"
      lessonTitle="Understanding Metal Groups"
      lessonDescription="Learn what metal groups are, how they control the parts used in a frame, and how to identify common storefront configurations before modifying a metal group."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Metal Group Basics</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand what a metal group is, why choosing
        the correct metal group matters, and how to identify common storefront
        configurations before making any changes.
      </div>

      <div className="calloutBox">
        <strong>Metal groups are one of the most important parts of Glazier Studio.</strong>
        <p>
          This is probably one of the more intricate screens in the program.
          Your entire project is based around the metal group you choose. If
          there are incorrect parts or settings in the metal group, your frames
          will carry those bad parts and settings with them, creating more
          headaches later.
        </p>
      </div>

      <div className="calloutBox">
        <strong>TIP: Spend an extra 10–15 minutes reviewing the metal group before building a frame.</strong>
        <p>
          That small amount of time can save you hours of work later. This will
          make more sense as we get deeper into the lesson.
        </p>
      </div>

      <h3>Let's Begin</h3>

      <div className="lessonText">
        <p>
          This is what the Metal Groups screen looks like in general.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.mainScreen}
          alt="Glazier Studio Metal Groups main screen"
        />
        <figcaption>
          The main Metal Groups screen in Glazier Studio.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          This screen should look very familiar after working with Catalog
          Parts. The basic layout is very similar.
        </p>

        <p>
          The major difference is that the items displayed in the center of
          this screen are <strong>metal groups</strong> rather than individual
          catalog parts.
        </p>
      </div>

      <h3>What Is a Metal Group?</h3>

      <div className="lessonText">
        <p>
          A metal group is basically a group of organized parts that tells
          Glazier Studio which parts should be used in each position of a frame.
        </p>

        <p>
          Think back to our first lesson where we learned the terminology for
          the different stick positions in a frame.
        </p>

        <p>
          The metal group takes those positions and assigns a specific part
          number to each one based on the framing system and the manufacturer&apos;s
          design.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Think of it this way:</strong>
        <p>
          The frame tells Glazier Studio <em>where</em> a stick goes. The metal
          group tells Glazier Studio <em>which part number</em> should go there.
        </p>
      </div>

      <h3>Why Are There So Many Metal Groups?</h3>

      <div className="lessonText">
        <p>
          There are definitely a lot of options on this screen.
        </p>

        <p>
          These metal groups are based around specific vendors and their
          framing systems. You will find groups for storefront, curtain wall,
          and even less common systems such as veneer systems.
        </p>

        <p>
          You may also find many metal groups that appear almost identical but
          have small differences between them.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.fg3000}
          alt="FG-3000 metal group variations"
        />
        <figcaption>
          FG-3000 and the different metal group variations available for the
          system.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          In the image above, you can see that the default metal group is
          <strong> FG-3000</strong>, but there are around 20 variations of that
          group.
        </p>

        <p>
          Those variations could be as simple as different components,
          different fabrications, or a configuration designed for interior use
          instead of exterior use.
        </p>
      </div>

      <div className="calloutBox">
        <strong>The good news:</strong>
        <p>
          It is usually relatively easy to find a metal group that is close to
          what you need. Your shop drawings should typically specify the metal
          system being used and often identify the manufacturer and system
          series.
        </p>
      </div>

      <h3>Storefront vs. Curtain Wall Metal Groups</h3>

      <div className="lessonText">
        <p>
          Curtain wall is usually a little simpler when choosing a metal group
          because there are fewer configurations. Curtain wall does not use
          removable glass stops in the same way storefront does and is
          typically glazed from the exterior.
        </p>

        <p>
          Storefront has more possible configurations. It can be
          <strong> inside glazed</strong> or <strong>outside glazed</strong>,
          and the glass stops can be positioned above or below the intermediate
          horizontal.
        </p>

        <p>
          These distinctions are important because changing the way the system
          is glazed can also change the fabrications required on the parts.
        </p>
      </div>

      <h3>Inside Glazed vs. Outside Glazed</h3>

      <div className="lessonText">
        <p>
          Inside glazed and outside glazed are simply ways of describing which
          side of the installed frame the glass is loaded from.
        </p>

        <p>
          Imagine that all of the metal has already been assembled and
          installed in the building. You now arrive at the jobsite to install
          the glass.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Glazing Direction</p>

        <div className="takeawayGrid">
          <div>
            <strong>Outside Glazed</strong>
            <p>
              If the glass is installed into the frame from the exterior side
              of the building, the system is outside glazed.
            </p>
          </div>

          <div>
            <strong>Inside Glazed</strong>
            <p>
              If the glass must be carried inside the building and installed
              into the frame from the interior side, the system is inside
              glazed.
            </p>
          </div>
        </div>
      </div>

      <h3>Stops Up vs. Stops Down</h3>

      <div className="lessonText">
        <p>
          The next distinction we need to understand is
          <strong> stops up</strong> versus <strong>stops down</strong>.
        </p>

        <p>
          First, remember that the glass stop is the removable piece that snaps
          into the framing member and helps retain the glass.
        </p>

        <p>
          Glazier Studio determines whether a system is stops up or stops down
          by looking at the <strong>intermediate horizontal</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.outsideGlazedStopDown}
          alt="Outside glazed horizontal with glass stop down"
        />
        <figcaption>
          Outside glazed intermediate horizontal with the glass stop positioned
          below the horizontal — a stops down configuration.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The image above shows an outside glazed, stops down horizontal. Notice
          that the removable glass stop snaps into the
          <strong> bottom side</strong> of the intermediate horizontal.
        </p>

        <p>
          Glazier Studio considers this a <strong>stops down</strong> system.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.outsideGlazedStopUp}
          alt="Outside glazed horizontal with glass stop up"
        />
        <figcaption>
          Outside glazed intermediate horizontal with the glass stop positioned
          above the horizontal — a stops up configuration.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          This image shows an outside glazed, stops up horizontal.
        </p>

        <p>
          The glass stop is now located on the
          <strong> top side</strong> of the intermediate horizontal. Glazier
          Studio considers this a <strong>stops up</strong> system.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Important:</strong>
        <p>
          Always use an <strong>intermediate horizontal</strong> to determine
          whether a storefront system is stops up or stops down. Do not use the
          head or sill.
        </p>
      </div>

      <h3>Why We Do Not Use the Head or Sill</h3>

      <div className="lessonText">
        <p>
          The head and sill can be misleading because their glass stop
          locations are determined by their position in the frame.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.headSnapIn}
          alt="Outside glazed head member with glass stop"
          style={{
            width: "65%",
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
          Outside glazed head member with the glass stop located on the bottom
          side of the member.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          This is an outside glazed head member with a glass stop. Notice how
          the glass stop snaps into the <strong>bottom</strong> of the member.
        </p>

        <p>
          You can identify this as a head because it sits at the top of the
          frame and there is no glass pocket above it.
        </p>

        <p>
          Because of its position in the frame, the glass stop on a head is
          naturally located below the member. For that reason, we do not use
          the head to determine whether the metal group is stops up or stops
          down.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.glassStopSnap}
          alt="Outside glazed sill member with glass stop"
          style={{
            width: "65%",
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
          Outside glazed sill member with the glass stop located on the top
          side of the member.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          This is an outside glazed sill member with a glass stop. Notice how
          the glass stop snaps into the <strong>top</strong> of the member.
        </p>

        <p>
          You can identify this as a sill because it sits at the bottom of the
          frame and there is no glass pocket below the part.
        </p>

        <p>
          Because of its position in the frame, the glass stop on a sill is
          naturally located above the member. For that reason, we also do not
          use the sill to determine whether the metal group is stops up or stops
          down.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Easy rule to remember:</strong>
        <p>
          When determining <strong>stops up</strong> or
          <strong> stops down</strong>, look at an
          <strong> intermediate horizontal</strong>. Ignore the head and sill.
        </p>
      </div>

      <h3>Back to the Metal Groups Screen</h3>

      <div className="lessonText">
        <p>
          For this section, I mainly want you to understand the basics of how
          the Metal Groups screen operates. In the next section, we will start
          modifying and building our own metal group.
        </p>

        <p>
          For now, select any metal group from the list. The right-hand side of
          the screen will display the information associated with that
          individual group.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.metalGroupGeneral}
          alt="Metal Group general properties and settings"
        />
        <figcaption>
          The tabs and settings available for the selected metal group.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          These tabs are what we will modify when we begin creating our own
          metal group.
        </p>

        <p>
          A lot of the settings under the <strong>Properties</strong> tab will
          remain the same and will not need to be changed.
        </p>

        <p>
          Most of our changes will happen when we get into the
          <strong> Framing Components</strong> section. This is where we can
          change the individual sticks and part numbers assigned to the metal
          group.
        </p>

        <p>
          The lower section contains <strong>Fabrication Options</strong>. We
          will cover these settings in more detail in the upcoming sections.
          These options control some of the default ways the metal group reacts
          when a frame is built.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not make any changes yet.</strong>
        <p>
          For now, click through a few different metal groups and explore the
          tabs and settings. The goal is simply to become comfortable navigating
          the screen.
        </p>

        <p>
          In the next section, we will use what you just learned to begin
          building your own metal group.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I can explain what a metal group does.
          </label>

          <label>
            <input type="checkbox" /> I understand why multiple versions of the
            same metal system may exist.
          </label>

          <label>
            <input type="checkbox" /> I understand inside glazed vs. outside
            glazed.
          </label>

          <label>
            <input type="checkbox" /> I can identify stops up vs. stops down
            using an intermediate horizontal.
          </label>

          <label>
            <input type="checkbox" /> I explored several metal groups without
            changing any settings.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-11-assemblies"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-12-build-metal-group"
          className="primary"
        >
          Next: Build Your Own Metal Group →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}