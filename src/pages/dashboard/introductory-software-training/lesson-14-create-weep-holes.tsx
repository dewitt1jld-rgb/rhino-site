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
  autoCadMess:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/auto_cad_mess.png",

  data:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/data.png",

  downloadFg3000:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/download_fg-3000.png",

  fg3511Alone:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/fg-3511_alone.png",

  firstHalf:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/first_half.png",

  oldcastleWebsite:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/oldcastle_website.png",

  primaryFab:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/primary_fab.png",

  screwSplineLineItem:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/screwspline_line_item.png",

  secondHalf:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/second_half.png",

  sillComponents:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/sill_components.png",

  whereWeepHolesAreDrilled:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/where_weep_holes_are_drilled.png",

  xAndZDim:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/x_and_z_dim.png",

  xyzComplete:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_14/14.3/x%2Cy%2Cz_complete.png",
};

export default function LessonFourteenCreateWeepHolesPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="14"
      lessonTitle="Weep & Anchor Holes"
      lessonDescription="Use the formulas created in the previous section to define WHAT fabrication should occur at each anchor-hole and weep-hole location."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Setting Up Your Own Weep & Anchor Holes</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Use the fabrication knowledge from Lesson 13 and
        the formulas we created in Step 2 to define{" "}
        <strong>WHAT</strong> machining operation should happen at each weep
        and anchor-hole location.
      </div>

      <div className="calloutBox">
        <strong>Remember: WHERE vs. WHAT</strong>

        <p>
          In the previous section, we established the <strong>WHERE</strong>.
          Our formulas tell Glazier Studio where the anchor holes and weep holes
          belong along the length of the sill channel.
        </p>

        <p>
          Now we are going to establish the <strong>WHAT</strong>. This means
          telling the program what operation to perform, where the drill
          physically enters the profile, which tool to use, how deep to drill,
          and which formula group the fabrication belongs to.
        </p>

        <p>
          This information is entered on the <strong>part number itself</strong>.
          Since the fabrications are happening directly to the individual part,
          they are <strong>Primary Fabrications</strong>.
        </p>
      </div>

      <h3>Quick Metal Group Change</h3>

      <div className="lessonText">
        <p>
          Before we continue, we need to make one small change to our training
          metal group.
        </p>

        <p>
          Part <strong>FG-2169</strong> is an older sill channel and does not
          require weep holes.
        </p>

        <p>
          We need to change the sill channel to a part number that would require
          weeps.
        </p>

        <p>
          In the Primary Metal screen, click the dropdown on the{" "}
          <strong>Sill Channel</strong> product code and change the part to:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>FG-3511</strong>
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Once FG-3511 is selected, we can continue.</strong>
      </div>

      <h3>Jump Directly to the Catalog Part</h3>

      <div className="lessonText">
        <p>
          Stay inside the same metal group and the same{" "}
          <strong>Primary Metal</strong> screen.
        </p>

        <p>
          Click once on the sill channel part number{" "}
          <strong>FG-3511</strong>.
        </p>

        <p>
          Now we can use a shortcut we learned during the Catalog Parts lesson.
          With FG-3511 selected, press <strong>F2</strong> on your keyboard.
        </p>

        <p>
          If F2 does not work by itself, try{" "}
          <strong>FN + F2</strong>.
        </p>

        <p>
          This takes you directly to the Catalog Parts screen for the selected
          part number.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Why use F2?</strong>

        <p>
          The alternative is to save everything, exit the metal group, navigate
          to Catalog Parts, search for FG-3511, and then find the screen we
          need.
        </p>

        <p>
          That is way too much work. Just use <strong>F2</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.primaryFab}
          alt="FG-3511 Catalog Parts screen showing Primary Fabrications"
        />

        <figcaption>
          FG-3511 in Catalog Parts. We will be opening the Primary Fabrications
          screen.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          If you scroll down on this screen, you should also see an image of the
          part.
        </p>

        <p>
          Click the <strong>Primary Fabrications</strong> button, which is
          circled in red in the image above.
        </p>
      </div>

      <h3>What You May Find in Primary Fabrications</h3>

      <div className="lessonText">
        <p>
          A lot of the time, the Primary Fabrications screen will be blank.
        </p>

        <p>
          Sometimes there will already be one or more fabrications in the
          screen. When that happens, you need to understand the fabrication well
          enough to determine whether the existing information already works
          for what you need or whether those rows belong to something else.
        </p>

        <p>
          By the end of this lesson, you should be able to start making that
          distinction.
        </p>

        <p>
          For now, ignore the existing fabrications and start a new line item so
          you can follow along with the anchor-hole example.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Work on one fabrication at a time.</strong>

        <p>
          Just like when we built the <strong>WHERE</strong> formulas, do not
          try to fill out every fabrication at once.
        </p>

        <p>
          Pick one type of fabrication, completely work through that
          fabrication, and then move to the next one.
        </p>
      </div>

      <h3>We Only Need Two Fabrication Rows</h3>

      <div className="lessonText">
        <p>
          There is another important concept to understand before we start.
        </p>

        <p>
          We created <strong>two anchor-hole formulas</strong> and{" "}
          <strong>two weep-hole formulas</strong> in the previous section.
          However, we do <strong>not</strong> need four Primary Fabrication
          rows.
        </p>

        <p>
          We only need <strong>one fabrication for the anchor holes</strong>{" "}
          and <strong>one fabrication for the weep holes</strong>.
        </p>

        <p>
          Even though the anchor fabrication happens at both the end locations
          and the center locations, the direction, tool, X, Z, depth, and
          operation remain the same.
        </p>

        <p>
          The same applies to the weep holes.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>1 Anchor Fabrication Row</strong>
            <br />
            Used by both End Fab and Center Fab formulas.
          </label>

          <label>
            <strong>1 Weep Fabrication Row</strong>
            <br />
            Used by both Weep End and Weep Center formulas.
          </label>
        </div>
      </div>

      <h3>Let's Build the Anchor Hole Fabrication</h3>

      <div className="lessonText">
        <p>
          I always recommend starting on the left side of the fabrication screen
          and working your way across.
        </p>

        <p>
          Only skip a column if that column truly does not require a value for
          the operation you are creating.
        </p>

        <p>
          Below is what our completed anchor-hole fabrication will eventually
          look like. I broke the row into two images so the information is
          easier to read.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.firstHalf}
          alt="First half of completed anchor hole fabrication"
        />

        <figcaption>
          First half of the completed anchor-hole fabrication.
        </figcaption>
      </figure>

      <figure className="fullWidthMedia">
        <img
          src={img.secondHalf}
          alt="Second half of completed anchor hole fabrication"
        />

        <figcaption>
          Second half of the completed anchor-hole fabrication.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Need a fabrication refresher?</strong>

        <p>
          If any of these columns or dropdowns are unfamiliar, return to{" "}
          <strong>Lesson 13 — Understanding Fabrications</strong>. That lesson
          explains the major fabrication fields and how they work.
        </p>
      </div>

      <h3>Fab Type</h3>

      <div className="lessonText">
        <p>
          For <strong>Fab Type</strong>, choose{" "}
          <strong>Screw Spline</strong> because this is a screw-spline metal
          group.
        </p>

        <p>
          If you were unsure which option to choose, you could exit this screen,
          return to the Metal Group, and look at the{" "}
          <strong>Keywords</strong>.
        </p>

        <p>
          The Keywords can help identify whether the metal group is Screw
          Spline or Shear Block, Inside Glazed or Outside Glazed, and Stops Up
          or Stops Down.
        </p>
      </div>

      <h3>Glazing Style</h3>

      <div className="lessonText">
        <p>
          When creating a Primary Fabrication, you will typically choose{" "}
          <strong>ALL</strong> here because we want the fabrication to occur
          regardless of glazing style.
        </p>
      </div>

      <h3>Stop Position</h3>

      <div className="lessonText">
        <p>
          When creating a Primary Fabrication, you will also typically choose{" "}
          <strong>ALL</strong> for Stop Position because we want the
          fabrication to occur regardless of whether the system is Stops Up or
          Stops Down.
        </p>
      </div>

      <h3>Fab Operation</h3>

      <div className="lessonText">
        <p>
          The Fab Operation will depend on your company&apos;s preferences and
          the actual fastener being used.
        </p>

        <p>
          Most of the time, anchor holes are countersunk depending on the type
          of anchor bolt or screw being used.
        </p>

        <p>
          For this training exercise, follow along using a{" "}
          <strong>Countersink</strong> operation.
        </p>

        <p>
          On a real project, your company may simply use a standard drilled
          hole instead.
        </p>
      </div>

      <h3>X, Y & Z</h3>

      <div className="lessonText">
        <p>
          This is usually the hardest part of creating a fabrication because we
          need to know the exact starting location for the drill.
        </p>

        <p>
          Notice in the example that X and Z still need to be determined, while
          Y contains a large or seemingly random number.
        </p>

        <p>
          That is because the <strong>Y location is being controlled by the
          formulas we created earlier</strong>.
        </p>

        <p>
          The formulas are essentially more advanced Y locations.
        </p>

        <p>
          X and Z, however, still need to be determined from the actual profile.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Two ways to find X and Z:</strong>

        <p>
          <strong>1.</strong> Walk out to the shop, find the actual part, and
          physically measure it.
        </p>

        <p>
          <strong>2.</strong> Download a digital profile drawing and measure the
          extrusion using AutoCAD or another CAD/DWG program.
        </p>
      </div>

      <h3>Using AutoCAD to Find the Dimensions</h3>

      <div className="lessonText">
        <p>
          For this lesson, we are going to use AutoCAD to determine the
          dimensions we need.
        </p>

        <p>
          Start by going to the manufacturer&apos;s website and finding the
          metal system you are working with.
        </p>

        <p>
          For our Oldcastle example, the website is{" "}
          <strong>OBE.com</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.oldcastleWebsite}
          alt="Oldcastle BuildingEnvelope website"
        />

        <figcaption>
          Start at the manufacturer&apos;s website and locate the system you are
          working with.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          From the website, navigate to <strong>Products</strong>, then{" "}
          <strong>Storefront</strong>.
        </p>

        <p>
          Normally, we would locate the FG-3000 system because that is the metal
          group we started with.
        </p>

        <p>
          However, we changed the sill channel to FG-3511. That part belongs to
          a different system, so we need to find the{" "}
          <strong>Series 3000XT</strong> system to locate the sill-channel
          profile we are currently using.
        </p>

        <p>
          Once you find the Series 3000XT product page, scroll until you see the
          product download section and choose the <strong>CAD Details</strong>.
        </p>

        <p>
          Keep in mind that if you do not have a DWG viewer such as AutoCAD, you
          will not be able to open the DWG file.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.downloadFg3000}
          alt="Download CAD details for the Oldcastle system"
        />

        <figcaption>
          Locate and download the DWG/CAD detail for the system containing the
          part.
        </figcaption>
      </figure>

      <h3>Open the CAD File</h3>

      <div className="lessonText">
        <p>
          Once downloaded, open the DWG file.
        </p>

        <p>
          At first, the drawing may look a little messy because it contains many
          profiles, dimensions, and system details.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.autoCadMess}
          alt="Full AutoCAD file containing multiple storefront details"
        />

        <figcaption>
          A manufacturer CAD file can look overwhelming at first.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Start looking through the drawing for the sill channel we are using.
        </p>

        <p>
          The profile we need is part of the detail shown below.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.sillComponents}
          alt="CAD detail containing FG-3511 sill channel"
        />

        <figcaption>
          Locate the specific profile within the manufacturer CAD detail.
        </figcaption>
      </figure>

      <h3>Separate the Part From the Detail</h3>

      <div className="lessonText">
        <p>
          To make the drawing easier to work with, I like to pull the individual
          profile away from the rest of the CAD detail.
        </p>

        <p>
          Highlight the part and drag it into an empty area of the drawing so
          you can focus on the extrusion itself.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.fg3511Alone}
          alt="FG-3511 isolated from the CAD detail"
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

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          FG-3511 isolated so the profile can be measured more easily.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Training example only.</strong>

        <p>
          We are using these locations to learn the process. They may or may not
          be the correct fabrication locations for a real installation.
        </p>

        <p>
          Always verify with your company and the manufacturer&apos;s
          installation instructions before setting up fabrications for a real
          project.
        </p>
      </div>

      <h3>Find the Anchor-Hole Location</h3>

      <div className="lessonText">
        <p>
          Now we can determine where the weep holes and anchor holes should be
          located on the profile and begin pulling measurements.
        </p>

        <p>
          We will start with the anchor hole.
        </p>

        <p>
          Anchor holes would typically be drilled through the area around the
          large anchor bolt shown in the profile.
        </p>

        <p>
          For our training fabrication, we are going to use the{" "}
          <strong>Top Drill</strong> and create a countersunk hole.
        </p>

        <p>
          That means we need two important dimensions:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>X</strong> — measured from the back of the part forward to
            the drilling location.
          </label>

          <label>
            <strong>Z</strong> — measured from the bottom of the part upward to
            the drilling location.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          If you need help learning AutoCAD, I will eventually add a training
          course covering the basics. For now, there are plenty of good
          introductory videos available that can teach you the measurement
          tools.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.xAndZDim}
          alt="X and Z dimensions measured on FG-3511"
        />

        <figcaption>
          X is measured from the back of the profile forward. Z is measured from
          the bottom of the profile upward.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          From our measurements:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>X = 3.625&quot;</strong>
          </label>

          <label>
            <strong>Z = .125&quot;</strong>
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          We can now return to Glazier Studio and enter those dimensions into
          our Primary Fabrication row.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.xyzComplete}
          alt="Completed X Y and Z values for anchor hole fabrication"
        />

        <figcaption>
          X and Z now contain the physical drilling location. Y is controlled by
          our formulas.
        </figcaption>
      </figure>

      <h3>RX & RY</h3>

      <div className="lessonText">
        <p>
          Leave <strong>RX</strong> and <strong>RY</strong> blank for this
          operation because we want the drill to plunge straight into the
          material.
        </p>
      </div>

      <h3>Depth</h3>

      <div className="lessonText">
        <p>
          Set the depth to <strong>.375&quot;</strong>.
        </p>

        <p>
          The main situations where I would change this are when there is a
          second wall that we need to drill through, or a second wall that we
          specifically do not want to touch.
        </p>

        <p>
          For normal training purposes, <strong>.375&quot;</strong> is the
          standard depth I use.
        </p>
      </div>

      <h3>Limit</h3>

      <div className="lessonText">
        <p>
          The Limit field does not really affect this operation, but the program
          still requires a value greater than the Depth.
        </p>

        <p>
          I typically enter <strong>1&quot;</strong>.
        </p>
      </div>

      <h3>Direction</h3>

      <div className="lessonText">
        <p>
          Direction tells the machine which drill should perform the operation.
        </p>

        <p>
          In this case, we are using the top drill, so select:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>TOP</strong>
          </label>
        </div>
      </div>

      <h3>Tool</h3>

      <div className="lessonText">
        <p>
          Tool is where we tell the machine which physical tooling to use.
        </p>

        <p>
          This can be confusing until you get familiar with how Glazier Studio
          names and organizes its tooling.
        </p>

        <p>
          There are three major categories you will commonly work with:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>Drill Bits</strong>
          </label>

          <label>
            <strong>Endmill Bits</strong>
          </label>

          <label>
            <strong>Countersink Bits</strong>
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Since our fabrication is a countersunk anchor hole, we need to choose
          a countersink tool.
        </p>

        <p>
          For this example, choose <strong>CSD04-A</strong>.
        </p>

        <p>
          I know from experience that this tool works well for #12 or #14
          anchors.
        </p>

        <p>
          When you select the tool, notice that the{" "}
          <strong>Drill</strong> column automatically fills in.
        </p>

        <p>
          This is because Glazier Studio automatically pulls the diameter
          associated with that tool.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not manually change the Drill column.</strong>

        <p>
          If the Drill value is the wrong size, choose a different tool. The
          Drill column should reflect the tooling that you selected.
        </p>
      </div>

      <h3>CTSK</h3>

      <div className="lessonText">
        <p>
          Because we are performing a countersink operation, we need to enter a
          value in the <strong>CTSK</strong> column.
        </p>

        <p>
          On a real project, we would measure the head diameter of the anchor
          screw and typically add approximately <strong>.010&quot;</strong>.
        </p>

        <p>
          From experience, I know the default value of{" "}
          <strong>.438&quot;</strong> works well for this training example.
        </p>
      </div>

      <h3>Width, Height & Diameter</h3>

      <div className="lessonText">
        <p>
          We can ignore Width, Height, and Diameter because we are not creating a
          rectangular operation, slot, or routed circle.
        </p>
      </div>

      <h3>Metal Fab Type</h3>

      <div className="lessonText">
        <p>
          <strong>Metal Fab Type</strong> is how we connect this Primary
          Fabrication row back to the formulas we created earlier.
        </p>

        <p>
          For these fabrications, you will generally choose one of two groups:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>END/CENTER</strong>
            <br />
            Used for anchor-hole formulas.
          </label>

          <label>
            <strong>WEEP/WEEP CENTER</strong>
            <br />
            Used for weep-hole formulas.
          </label>
        </div>
      </div>

      <div className="lessonText">
        <p>
          Since this row is our anchor-hole fabrication, choose:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>END/CENTER</strong>
          </label>
        </div>
      </div>

      <h3>Custom Fab</h3>

      <div className="lessonText">
        <p>
          Finally, check <strong>Custom Fab</strong>.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Anchor-hole fabrication complete!</strong>

        <p>
          At this point, our anchor-hole Primary Fabrication is completely
          configured.
        </p>
      </div>

      <h3>Now Let's Look at the Weep Holes</h3>

      <div className="lessonText">
        <p>
          Instead of immediately creating another fabrication row, look at the
          three Primary Fabrication line items that were already on FG-3511.
        </p>

        <p>
          Notice that <strong>two of them are Shear Block</strong> and{" "}
          <strong>one is Screw Spline</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.screwSplineLineItem}
          alt="Existing screw spline and shear block fabrication rows"
        />

        <figcaption>
          Existing fabrication rows may belong to different metal-group
          conditions.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          We already know that our training metal group is a{" "}
          <strong>Screw Spline</strong> system.
        </p>

        <p>
          Because of that, we can automatically ignore the two Shear Block
          rows when evaluating the fabrication for this particular metal group.
        </p>
      </div>

      <div className="calloutBox">
        <strong>DO NOT DELETE the Shear Block fabrication rows.</strong>

        <p>
          Those rows may be used by completely different metal groups.
        </p>

        <p>
          Just because they do not apply to our current training group does not
          mean they are not being used somewhere else in the program.
        </p>
      </div>

      <h3>Verify the Existing Screw Spline Weep Fabrication</h3>

      <div className="lessonText">
        <p>
          Now look at the existing Screw Spline fabrication.
        </p>

        <p>
          Instead of automatically replacing it, we want to inspect the data and
          determine whether it already does what we need.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.whereWeepHolesAreDrilled}
          alt="Location where the weep holes are drilled on FG-3511"
        />

        <figcaption>
          Verify where the existing fabrication will physically drill the
          profile.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The existing X and Z values are very close to the values I measured in
          AutoCAD.
        </p>

        <p>
          That tells me that the hole is going to be drilled in the correct
          physical location on the profile.
        </p>

        <p>
          Next, I want to verify that the operation is using the correct drill,
          direction, and Metal Fab Type.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.data}
          alt="Existing screw spline weep fabrication data"
        />

        <figcaption>
          Review the existing fabrication row before deciding whether it can be
          reused.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Based on the information shown above, the hole is only being used when it is an 
          inside glazed stops down metal group. We want to change this to match our configuration.
          To do that change the glazing style and stop position to "ALL". 
          </p>

          <p>
          The holes is also being drilled from
          the <strong>Front</strong> using a <strong>5/16&quot; drill bit</strong> which is correct.
        </p>

        <p>
          It is also connected to the <strong>Weep</strong> formula group,
          which is exactly what we want.
        </p>

        <p>
          The Depth is a little deeper than the .375&quot; value we normally
          use, but it should not cause a problem in this particular case.
        </p>

        <p>
          You may also notice that the Y value is set to{" "}
          <strong>0</strong> instead of a large number such as 1000.
        </p>

        <p>
          That does not matter.
        </p>

        <p>
          Remember that the Y location gets overridden by the formulas we
          created earlier.
        </p>

        <p>
          You could enter almost any number into the Y field and the formula
          would determine the actual fabrication location.
        </p>

        <p>
          However, <strong>there must still be a value in the Y column</strong>.
          You cannot leave it blank.
        </p>
      </div>

      <div className="calloutBox">
        <strong>This is exactly why understanding fabrications matters.</strong>

        <p>
          Instead of blindly deleting an existing row and creating another one,
          you can now inspect the existing fabrication and determine whether it
          already works for your metal group.
        </p>
      </div>

      <h3>Weep & Anchor Fabrications Are Complete</h3>

      <div className="lessonText">
        <p>
          We verified that the existing Screw Spline weep fabrication already
          works for our training setup.
        </p>

        <p>
          We also created our own anchor-hole fabrication and tied it to the
          End/Center formulas created in the previous section.
        </p>

        <p>
          Our training metal group now contains both{" "}
          <strong>weep-hole</strong> and <strong>anchor-hole</strong>{" "}
          fabrications.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 14 Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I changed the sill channel from FG-2169
            to FG-3511.
          </label>

          <label>
            <input type="checkbox" /> I used F2 to jump directly from Primary
            Metal to the Catalog Part.
          </label>

          <label>
            <input type="checkbox" /> I opened the Primary Fabrications screen.
          </label>

          <label>
            <input type="checkbox" /> I created the anchor-hole fabrication.
          </label>

          <label>
            <input type="checkbox" /> I understand why Y does not control the
            actual location when a formula is being used.
          </label>

          <label>
            <input type="checkbox" /> I understand how X and Z were determined
            from the CAD profile.
          </label>

          <label>
            <input type="checkbox" /> I tied the anchor fabrication to
            END/CENTER.
          </label>

          <label>
            <input type="checkbox" /> I verified the existing Screw Spline weep
            fabrication instead of deleting it.
          </label>

          <label>
            <input type="checkbox" /> I understand why the existing Shear Block
            fabrication rows must not be deleted.
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>The WHERE and WHAT are now connected.</strong>

        <p>
          Our formulas determine where the fabrications should occur, and our
          Primary Fabrication rows determine what the machine should do at those
          locations.
        </p>

        <p>
          The next step is to test those locations in Metal Fabrication and make
          sure everything is being picked up correctly.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-14-fab-formula-builder"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Finish Lesson 14 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}