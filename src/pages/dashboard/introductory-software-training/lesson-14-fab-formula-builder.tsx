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
  whereFormulasGo:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/where_formulas_go.png",

  anchorHolesEnd:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/anchor_holes_end.png",

  anchorHolesCenter:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/anchor_holes_center.png",

  weepHoleEnd:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/weep_hole_end.png",

  weepHoleCenter:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/weep_hole_center.png",

  fabFormulaMain:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-01-main.png",

  fabFormulaZoomed:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-02-zoomed-in.png",

  endWeep:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-03-end-weep.png",

  centerWeep:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-04-center-weep.png",

  fabFormulaAnchorEnd:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/fab_formula_anchor_end.png",

  whereToPutFormula:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/where_to_put-formula.png",

  anchorHoleCenterFormula:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/anchor_hole_center_formula.png",

  whereCenterAnchorGo:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/where_center_anchor_go.png",

  weepFormulaEnd:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/weep_formula_end.png",

  weepEndFormulaWhere:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/weep_end_formula_where.png",

  whereWeepCenterFormulaGoes:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/where_weep_center_formula_goes.png",

  weepCenterFormPrimaryMetal:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.2/weep_center_form_in_primary_metal.png",
};

export default function LessonFourteenFabFormulaBuilderPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="14"
      lessonTitle="Weep & Anchor Holes"
      lessonDescription="Learn where weep and anchor formulas are stored, how Fab Formula Builder works, and create the four formulas used in our training example."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Fab Formula Builder</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Build the formulas that determine{" "}
        <strong>WHERE</strong> our training weep holes and anchor holes will be
        located.
      </div>

      <div className="calloutBox">
        <strong>Remember the WHERE and WHAT?</strong>

        <p>
          In the last section, we separated a fabrication into two pieces.
        </p>

        <p>
          The formula controls <strong>WHERE</strong> the fabrication occurs.
          The individual catalog part will later tell the software{" "}
          <strong>WHAT</strong> machining operation should happen there.
        </p>

        <p>
          This entire section focuses on the <strong>WHERE</strong>.
        </p>
      </div>

      <h3>Where Do the Formulas Go?</h3>

      <div className="lessonText">
        <p>
          Start by selecting our training metal group:
        </p>

        <p>
          <strong>_RHINO WRANGLER TEST DELETE AFTER</strong>
        </p>

        <p>
          Then open the <strong>Primary Metal</strong> screen.
        </p>

        <p>
          This should look familiar because this is the same area where we
          changed the primary framing members in Lesson 12.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.whereFormulasGo}
          alt="Primary Metal screen showing anchor and weep formula columns"
        />

        <figcaption>
          Focus on the eight highlighted columns used for anchor and weep
          formulas.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          There are <strong>eight important columns</strong> highlighted in the
          image above.
        </p>

        <p>
          Four are used for anchor-hole formulas and four are used for
          weep-hole formulas.
        </p>

        <p>
          Notice that the columns work in pairs.
        </p>

        <p>
          One column enables the fabrication instruction, and the column beside
          it stores the actual formula.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Anchor Hole Columns</p>

        <div className="takeawayGrid">
          <label>
            <strong>End Fab Inst</strong> — turns on anchor holes near the ends
            of the stick.
          </label>

          <label>
            <strong>End Fab</strong> — stores the end-anchor formula.
          </label>

          <label>
            <strong>Center Fab Inst</strong> — turns on center anchor holes.
          </label>

          <label>
            <strong>Center Fab</strong> — stores the center-anchor formula.
          </label>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Weep Hole Columns</p>

        <div className="takeawayGrid">
          <label>
            <strong>Weep End Inst</strong> — turns on weep holes near the ends
            of the stick.
          </label>

          <label>
            <strong>Weep End</strong> — stores the end-weep formula.
          </label>

          <label>
            <strong>Weep Center Inst</strong> — turns on weep holes around
            center conditions such as intermediate verticals.
          </label>

          <label>
            <strong>Weep Center</strong> — stores the center-weep formula.
          </label>
        </div>
      </div>

<h3>What Each Formula Type Represents</h3>

<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "36px",
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
      src={img.anchorHolesEnd}
      alt="Anchor holes at the ends of a stick"
      style={{
        width: "100%",
        maxWidth: "1000px",
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
      Anchor holes located near the ends of a stick.
    </figcaption>
  </figure>

  <figure
    style={{
      margin: 0,
      textAlign: "center",
    }}
  >
    <img
      src={img.anchorHolesCenter}
      alt="Anchor holes in the center of a stick"
      style={{
        width: "100%",
        maxWidth: "1000px",
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
      Anchor holes located through the center portion of a stick.
    </figcaption>
  </figure>

  <figure
    style={{
      margin: 0,
      textAlign: "center",
    }}
  >
    <img
      src={img.weepHoleEnd}
      alt="Weep holes near the ends of a stick"
      style={{
        width: "100%",
        maxWidth: "1000px",
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
      Weep holes located near the ends of the stick.
    </figcaption>
  </figure>

  <figure
    style={{
      margin: 0,
      textAlign: "center",
    }}
  >
    <img
      src={img.weepHoleCenter}
      alt="Weep holes located around intermediate verticals"
      style={{
        width: "100%",
        maxWidth: "1000px",
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
      Center weep holes located in the middle of the stick.
    </figcaption>
  </figure>
</div>

      <div className="calloutBox">
        <strong>Example:</strong>

        <p>
          If we want an anchor hole near each end of the sill channel, we would
          check <strong>End Fab Inst</strong> and paste the formula into the
          blank <strong>End Fab</strong> field beside it.
        </p>
      </div>

      <h3>Opening Fab Formula Builder</h3>

      <div className="lessonText">
        <p>
          While you are inside the Primary Metal screen, press{" "}
          <strong>F10</strong> to open Fab Formula Builder.
        </p>

        <p>
          Some keyboards require you to hold <strong>FN</strong> and then press{" "}
          <strong>F10</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.fabFormulaMain}
          alt="Fab Formula Builder main screen"
        />
      </figure>

      <div className="lessonText">
        <p>
          The screen may initially look grayed out.
        </p>

        <p>
          That is normal. The available formula choices become active after you
          select the function you want to work with.
        </p>
      </div>

      <h3>Choose the Member Function First</h3>

      <div className="lessonText">
        <p>
          Start by telling Fab Formula Builder which type of framing member you
          are creating the formula for.
        </p>

        <p>
          Our training example uses a <strong>sill channel / sub-sill</strong>,
          so choose the function associated with that member.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.fabFormulaZoomed}
          alt="Fab Formula Builder function and formula selections"
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="calloutBox">
        <strong>Terminology note:</strong>

        <p>
          In these fabrication screens, the term <strong>Back Member</strong> 
          can refer broadly to framing members such as jambs, heads, sills,
          horizontals, and verticals.
        </p>
      </div>

      <h3>END / WEEP END vs. CENTER / WEEP CENTER</h3>

      <div className="lessonText">
        <p>
          Once the member function is selected, you need to decide whether you
          are creating an end formula or a center formula.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>END / WEEP END</strong> — formulas positioned relative to
            the ends of a stick.
          </label>

          <label>
            <strong>CENTER / WEEP CENTER</strong> — formulas used for repeated
            or center-related locations through the length of the stick.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Work on ONE formula at a time.</strong>

        <p>
          Do not try to create all four formulas at once.
        </p>

        <p>
          Decide which hole you are working on, identify the correct member,
          determine whether it is an end or center condition, build that one
          formula, paste it into Primary Metal, and then move to the next one.
        </p>
      </div>

      <h3>Common End / Weep End Formulas</h3>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.endWeep}
          alt="Fab Formula Builder end and weep end formula options"
          style={{
            width: "100%",
            maxWidth: "430px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <div>
            <strong>L=#</strong>
            <p>
              Places a fabrication a specified distance from each end of the
              stick.
            </p>
          </div>

          <div>
            <strong>L=W/#</strong>
            <p>
              Divides the length into equal sections and creates locations based
              on that division.
            </p>
          </div>

          <div>
            <strong>L=W/2+#</strong>
            <p>
              Uses the middle of the stick and then adds an offset.
            </p>
          </div>

          <div>
            <strong>IF L&gt;# THEN L=#</strong>
            <p>
              Applies an end fabrication only when the stick exceeds a specified
              minimum length.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>The end formula I use most often is L=#.</strong>

        <p>
          It is simple: take the length of the stick and place the fabrication a
          specified distance from each end.
        </p>
      </div>

      <h3>Formula 1: Anchor Holes 4&quot; From Each End</h3>

      <div className="lessonText">
        <p>
          Our first requirement from Lesson 14.1 was:
        </p>

        <p>
          <strong>Anchor holes = 4&quot; from each end.</strong>
        </p>

        <p>
          We already know three important things:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            The member is the <strong>sill channel</strong>.
          </label>

          <label>
            Anchor holes use <strong>End / Center formula columns</strong>.
          </label>

          <label>
            4&quot; from each end means we need an{" "}
            <strong>End</strong> formula.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Based on those conditions, choose the <strong>L=#</strong> formula and
          enter <strong>4&quot;</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.fabFormulaAnchorEnd}
          alt="Anchor end formula set to four inches"
        />

        <figcaption>
          Our end-anchor formula places an anchor hole 4&quot; from each end.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Once the formula is correct, click <strong>Copy to Clipboard</strong>
          and then close Fab Formula Builder.
        </p>
      </div>

      <h3>Paste the Formula Into Primary Metal</h3>

      <div className="lessonText">
        <p>
          Now we need to decide exactly where this formula belongs.
        </p>

        <p>
          We know it is for the <strong>sill channel</strong>, it is an{" "}
          <strong>anchor hole</strong>, and it is an{" "}
          <strong>end fabrication</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.whereToPutFormula}
          alt="Primary Metal location for end anchor formula"
        />
      </figure>

      <div className="lessonText">
        <p>
          Check the box labeled <strong>End Fab Inst</strong>.
        </p>

        <p>
          Click inside the blank formula field beside it and press{" "}
          <strong>CTRL + V</strong> to paste the formula.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Formula 1 is complete.</strong>

        <p>
          You have now told Glazier Studio where the end anchor holes should be
          located.
        </p>
      </div>

      <h3>Now Try the Remaining Formulas Yourself</h3>

      <div className="lessonText">
        <p>
          Before looking at the examples below, try building the remaining
          formulas on your own.
        </p>

        <p>
          You still need:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            Anchor holes every <strong>18&quot; on center</strong>.
          </label>

          <label>
            Weep holes <strong>6&quot; from each end</strong>.
          </label>

          <label>
            Weep holes <strong>4&quot; from each intermediate vertical</strong>.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Do not scroll down until you try them.</strong>

        <p>
          Use what you already know about the member function, End vs. Center,
          and the formula choices.
        </p>
      </div>

      <h3>Formula 2: Center Anchor Holes</h3>

      <div className="lessonText">
        <p>
          For our center anchor formula, we want holes spaced every{" "}
          <strong>18&quot; on center</strong>.
        </p>

        <p>
          This uses a center-style formula.
        </p>

        <p>
          In the example below, the minimum stick length is set to{" "}
          <strong>24&quot;</strong>.
        </p>

        <p>
          That means if the sill channel is shorter than 24&quot;, the program
          will not add the center anchor-hole pattern.
        </p>
      </div>

      <div className="calloutBox">
        <strong>The 24&quot; minimum is adjustable.</strong>

        <p>
          You can choose a different minimum based on the system requirements.
          For this exercise, use 24&quot; so our results match.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.anchorHoleCenterFormula}
          alt="Center anchor hole formula"
        />
      </figure>

      <figure className="fullWidthMedia">
        <img
          src={img.whereCenterAnchorGo}
          alt="Primary Metal location for center anchor formula"
        />
      </figure>

      <h3>Formula 3: Weep Holes 6&quot; From Each End</h3>

      <div className="lessonText">
        <p>
          Our end weep holes work almost exactly like the end anchor holes.
        </p>

        <p>
          The difference is that these are weeps, so we use the{" "}
          <strong>Weep End</strong> columns instead of End Fab columns when pasting our formula.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.weepFormulaEnd}
          alt="Weep end formula set to six inches"
        />
      </figure>

      <figure className="fullWidthMedia">
        <img
          src={img.weepEndFormulaWhere}
          alt="Primary Metal location for end weep formula"
        />
      </figure>

      <h3>Formula 4: Weeps Near Intermediate Verticals</h3>

      <div className="lessonText">
        <p>
          Our final formula is slightly more complicated.
        </p>

        <p>
          We want a weep hole located <strong>4&quot; away from each
          intermediate vertical</strong>.
        </p>

        <p>
          The important detail is that this formula references the{" "}
          <strong>center of the vertical</strong>, not the edge of the vertical.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Example:</strong>

        <p>
          If the vertical is 2&quot; wide, the centerline is 1&quot; away from
          either edge.
        </p>

        <p>
          If the installation instructions require the weep hole 4&quot; away
          from the edge of that vertical, our formula needs to account for the intermediate mullion width. 
        </p>

        <p>
          <strong>
            1&quot; to the edge + 4&quot; required spacing = 5&quot;
          </strong>
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.whereWeepCenterFormulaGoes}
          alt="Fab Formula Builder center weep formula"
        />
      </figure>

      <figure className="fullWidthMedia">
        <img
          src={img.weepCenterFormPrimaryMetal}
          alt="Primary Metal location for center weep formula"
        />
      </figure>

      <h3>The WHERE Is Complete</h3>

      <div className="lessonText">
        <p>
          At this point, all four formulas have been entered.
        </p>

        <p>
          Glazier Studio now understands <strong>WHERE</strong> our training
          anchor holes and weep holes belong.
        </p>

        <p>
          But the formulas do not yet tell the machine what type of hole to
          create, which direction to drill from, what tool to use, or how deep
          to drill.
        </p>

        <p>
          That is the <strong>WHAT</strong>.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Formula Check</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> End anchor = 4&quot; from each end.
          </label>

          <label>
            <input type="checkbox" /> Center anchor = 18&quot; on center.
          </label>

          <label>
            <input type="checkbox" /> End weep = 6&quot; from each end.
          </label>

          <label>
            <input type="checkbox" /> Center weep = 4&quot; from each
            intermediate vertical.
          </label>

          <label>
            <input type="checkbox" /> All four instruction boxes are enabled.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>The hard part is done.</strong>

        <p>
          We have established the locations. In the next section, we will go to
          the sill channel itself and tell the software exactly{" "}
          <strong>WHAT</strong> fabrication should happen at each one.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-14-weep-anchor-basics"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-14-create-weep-holes"
          className="primary"
        >
          Next: Set Up the Fabrications →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}