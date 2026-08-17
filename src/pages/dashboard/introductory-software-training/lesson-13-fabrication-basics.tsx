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
  primary:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-01.png",

  secondary:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-02.png",

  fabStyle:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-03-drop-down-menu.png",

  keywords:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-04-key-words.png",

  glazingStyle:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-05-glazing-style.png",

  stopPosition:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-06-stop-position.png",
};

export default function LessonThirteenFabricationBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="13"
      lessonTitle="Understanding Fabrications"
      lessonDescription="Learn how fabrication screens are organized, why the same fields appear throughout Glazier Studio and PartnerPak, and how to determine which fabrication settings actually matter."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>

      <h2>Fabrication Screen Basics</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Learn how to read a fabrication screen and
        understand why the same options appear in many different areas of the
        program.
      </div>

      <div className="calloutBox">
        <strong>This is NOT a follow-along section.</strong>

        <p>
          Do not worry about creating or changing any fabrications yet.
        </p>

        <p>
          The goal of Lesson 13 is to teach you how fabrication screens work so
          that when we begin creating real fabrications in the next lessons, the
          fields and dropdowns already make sense.
        </p>
      </div>

      <h3>Why Fabrications Matter</h3>

      <div className="lessonText">
        <p>
          Fabrications are simply machining operations that need to happen to a
          part.
        </p>

        <p>
          That could mean drilling a hole, routing a circle, creating a slot,
          cutting a rectangle, countersinking a screw hole, or performing
          another machining operation.
        </p>

        <p>
          Once you understand the basic fabrication system, you will notice that
          the same principles repeat throughout the program.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">You Will See Fabrication Screens When Working With</p>

        <div className="takeawayGrid">
          <label>Weep Holes</label>
          <label>Anchor Holes</label>
          <label>Primary Fabrications</label>
          <label>Secondary Fabrications</label>
          <label>Metal Fabrication</label>
          <label>Door Fabrication</label>
          <label>Library Fabrications</label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>The important part:</strong>

        <p>
          These screens may be used for different purposes, but the basic
          fabrication language is the same.
        </p>

        <p>
          If you understand X, Y, Z, operation type, direction, tool, depth, and
          the major conditional settings, all of these screens become much
          easier to understand.
        </p>
      </div>

      <h3>Why Are There So Many Options?</h3>

      <div className="lessonText">
        <p>
          The first time you open a fabrication screen, it can be
          overwhelming. There are a lot of columns, dropdowns, numbers, and
          options.
        </p>

        <p>
          The good news is that you will not use every option on every
          fabrication.
        </p>

        <p>
          Some settings are used constantly. Others only apply to certain
          framing systems, certain machine models, or special fabrication
          conditions.
        </p>
      </div>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "36px",
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
      src={img.primary}
      alt="Primary fabrication rules screen"
      style={{
        width: "100%",
        maxWidth: "1200px",
        height: "auto",
        display: "block",
        margin: "0 auto",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,.12)",
      }}
    />

    <figcaption
      style={{
        marginTop: "12px",
        color: "rgba(255,255,255,.6)",
      }}
    >
      Primary Fabrications
    </figcaption>
  </figure>

  <figure
    style={{
      margin: 0,
      textAlign: "center",
    }}
  >
    <img
      src={img.secondary}
      alt="Secondary fabrication rules screen"
      style={{
        width: "100%",
        maxWidth: "1200px",
        height: "auto",
        display: "block",
        margin: "0 auto",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,.12)",
      }}
    />

    <figcaption
      style={{
        marginTop: "12px",
        color: "rgba(255,255,255,.6)",
      }}
    >
      Secondary Fabrications
    </figcaption>
  </figure>
</div>

      <div className="lessonText">
        <p>
          These two screens are being used for different types of
          fabrications, but notice how many of the columns are identical.
        </p>

        <p>
          That repetition is exactly why we are taking the time to understand
          fabrication fundamentals before building anything.
        </p>
      </div>

      <div
  style={{
    margin: "32px 0",
    padding: "22px 24px",
    borderRadius: "16px",
    background: "rgba(245, 158, 11, 0.08)",
    border: "1px solid rgba(245, 158, 11, 0.28)",
  }}
>
  <strong
    style={{
      display: "block",
      marginBottom: "10px",
      color: "#f59e0b",
      fontSize: "1.05rem",
    }}
  >
    TIP: Pull Up the Screen and Follow Along
  </strong>

  <p style={{ margin: "0 0 12px" }}>
    If you would like a visual reference while going through this lesson,
    navigate to the <strong>Catalog Parts</strong> screen and search for part{" "}
    <strong>FG-3103</strong>.
  </p>

  <p style={{ margin: "0 0 12px" }}>
    On the right-hand side of the screen, find{" "}
    <strong>Secondary Fabrications</strong> and click the small blue box to
    open the fabrication screen.
  </p>

  <p style={{ margin: 0 }}>
    <strong>DO NOT CHANGE ANYTHING ON THIS SCREEN.</strong> Any changes made
    here can affect live projects and fabrications. We are only opening this
    screen so you can see a real example while we explain what each column
    means and how it works.
  </p>
</div>

      <h3>Fab Style</h3>

      <div className="lessonText">
        <p>
          Fab Style helps tell the program what type of framing condition the
          fabrication belongs to.
        </p>

        <p>
          You may see options relating to screw spline, shear block, stick
          systems, or other framing types.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.fabStyle}
          alt="Fabrication style dropdown"
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

      <div className="lessonText">
        <p>
          Storefront systems commonly use screw spline connections while many
          curtain wall systems use shear block connections.
        </p>

        <p>
          You should not guess which one applies. Instead, look at the metal
          group you are currently using.
        </p>
      </div>

      <h3>Use the Metal Group to Understand the Frame</h3>

      <div className="lessonText">
        <p>
          One of the most useful habits you can develop is learning to use the
          Metal Group screen as a reference.
        </p>

        <p>
          The metal group tells you what kind of framing system you are working
          with and helps explain why certain fabrication rules are being used.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.keywords}
          alt="Metal group keywords"
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="lessonText">
        <p>
          Keywords can help identify whether a system is screw spline, shear
          block, inside glazed, outside glazed, impact, or another special
          condition.
        </p>

        <p>
          Before changing a fabrication, understand the metal group it belongs
          to.
        </p>
      </div>

      <h3>Glazing Style</h3>

      <div className="lessonText">
        <p>
          Glazing Style determines whether a fabrication applies to an inside
          glazed condition, an outside glazed condition, or all glazing
          conditions.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.glazingStyle}
          alt="Glazing style dropdown"
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

      <div className="lessonText">
        <p>
          Primary Fabrications frequently use <strong>ALL</strong>.
        </p>

        <p>
          Secondary Fabrications may use <strong>INSIDE</strong> or
          <strong> OUTSIDE</strong> when a fabrication should only happen under
          one specific glazing condition.
        </p>
      </div>

      <h3>Stop Position</h3>

      <div className="lessonText">
        <p>
          Stop Position adds another condition to determine when the fabrication
          should apply.
        </p>

        <p>
          Common selections include <strong>ALL</strong>,
          <strong> UP</strong>, and <strong>DOWN</strong>.
        </p>

        <p>
          Other selections such as impact, left, or right are more specialized.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.stopPosition}
          alt="Stop position dropdown"
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
        <strong>Remember Lesson 12?</strong>

        <p>
          This is why understanding inside glazed, outside glazed, stops up,
          and stops down mattered.
        </p>

        <p>
          We are now using those same metal-group conditions to decide when a
          fabrication should occur.
        </p>
      </div>

      <h3>Do Not Memorize Every Dropdown</h3>

      <div className="lessonText">
        <p>
          At this point, I do not expect you to memorize every option.
        </p>

        <p>
          I want you to understand that these dropdowns are usually
          <strong> conditions</strong>.
        </p>

        <p>
          They answer questions like:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>What type of framing system is this?</label>
          <label>Is it inside or outside glazed?</label>
          <label>Are the glass stops up or down?</label>
          <label>Should this fabrication happen in every condition?</label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>That is the real lesson.</strong>

        <p>
          Fabrication screens are not just random collections of settings.
        </p>

        <p>
          Many of the fields are simply telling the software
          <strong> when</strong> a fabrication should happen.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand that fabrication screens
            appear throughout the program.
          </label>

          <label>
            <input type="checkbox" /> I understand why the same fields repeat
            across different fabrication screens.
          </label>

          <label>
            <input type="checkbox" /> I understand the purpose of Fab Style.
          </label>

          <label>
            <input type="checkbox" /> I understand how the Metal Group helps me
            identify fabrication conditions.
          </label>

          <label>
            <input type="checkbox" /> I understand Glazing Style and Stop
            Position as conditions.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-12-metal-group-fabrication-options"
          className="secondary"
        >
          ← Previous Lesson
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-13-xyz"
          className="primary"
        >
          Next: Understanding X, Y & Z →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}