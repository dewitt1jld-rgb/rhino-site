import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Catalog Part Basics", href: "/dashboard/introductory-software-training/lesson-11-catalog-part-basics" },
  { number: 2, title: "Create Your Own Catalog Part", href: "/dashboard/introductory-software-training/lesson-11-create-catalog-part" },
  { number: 3, title: "Assemblies", href: "/dashboard/introductory-software-training/lesson-11-assemblies" },
];

const img = {
  clickCopy: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/click_copy.png",
  copyOne: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/copy_1.png",
  itemsToChange: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/items_that_need_changed.png",
  designParameters: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/extrusion_design_parameters.png",
  extrusionPricing: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/extrusion_pricing.png",
};

export default function LessonElevenCreateCatalogPartPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="11"
      lessonTitle="Catalog Parts"
      lessonDescription="Learn how to create custom catalog parts safely by copying an existing part and changing only the information that actually needs to be updated."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Create Your Own Catalog Part</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Create a new extrusion, glass item, or hardware part without accidentally building a duplicate or missing important settings.
      </div>

      <div className="calloutBox">
        <strong>Before You Build Anything</strong>
        <p>
          Only create a new catalog part if the program does not already have the part you need. Search thoroughly before creating anything so you do not accidentally make a duplicate.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Rule #1: NEVER build a part from scratch.</strong>
        <p>
          Seriously — do not do it. There are too many small settings tied to how a part appears and behaves in different areas of the program. Copying an existing part is faster and much safer.
        </p>
      </div>

      <h3>Start With Something Similar</h3>
      <div className="lessonText">
        <p>
          If you want to make a new extrusion, copy another extrusion. If you want to make a piece of glass, copy another piece of glass. If you want to make hardware, copy another hardware item.
        </p>
        <p>
          The part does not need to be an exact match. The goal is simply to start from the correct type of item so the basic function and hidden settings are already in place.
        </p>
      </div>

      <h3>Copy the Base Part</h3>
      <figure className="fullWidthMedia">
        <img src={img.clickCopy} alt="Copy button on the Catalog Parts screen" />
        <figcaption>Highlight the base part and click the Copy button in the upper-right corner.</figcaption>
      </figure>

      <div className="lessonText">
        <p>
          After clicking Copy, the part name will change slightly and include <strong>Copy 1</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.copyOne} alt="Copied catalog part showing Copy 1" />
      </figure>

      <div className="lessonText">
        <p>
          Change the copied name to the correct part number you are creating. From this point forward, change only what you need to change.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.itemsToChange} alt="Catalog part fields that should be changed" />
        <figcaption>
          Yellow items should normally be updated. Primary and Secondary Fabs may also need attention depending on the part.
        </figcaption>
      </figure>

      <h3>Name & Description</h3>
      <div className="lessonText">
        <p>
          Update both the <strong>Name</strong> and <strong>Description</strong> fields so they match your new part.
        </p>
      </div>

      <h3>Function</h3>
      <div className="calloutBox">
        <strong>Do not force the Function field.</strong>
        <p>
          If you copied the correct type of base part, Function should already be correct. If it is not, stop and start over with a better base part instead of trying to change the Function manually.
        </p>
      </div>

      <h3>Custom Part</h3>
      <div className="lessonText">
        <p>
          Any time you create your own catalog part or metal group, check the <strong>Custom Part</strong> box.
        </p>
        <p>
          This helps protect your custom data from being replaced or changed during future DeMichele program updates. An original part name should also protect it, but checking Custom Part is a good habit.
        </p>
      </div>

      <h3>Extrusion Design Parameters</h3>
      <div className="lessonText">
        <p>Click the blue button with the three dots to open Extrusion Design Parameters.</p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.designParameters} alt="Extrusion Design Parameters screen" />
      </figure>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label><strong>Width:</strong> Usually the smaller profile dimension.</label>
          <label><strong>Depth:</strong> Usually the larger profile dimension.</label>
          <label><strong>Glass Bite:</strong> How far the glass sits into the metal pocket.</label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>Glass Bite is not always needed.</strong>
        <p>
          If the part is not used in a normal frame or does not receive glass, you can ignore this value.
        </p>
      </div>

      <h3>Extrusion Pricing</h3>
      <div className="lessonText">
        <p>
          Only modify Extrusion Pricing if you want the part to contribute cost information to estimates or bids. If you are creating the part only so it can be fabricated, you can skip this section.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.extrusionPricing} alt="Extrusion Pricing screen" />
        <figcaption>
          Pricing is organized by finish and entered as a cost per linear foot. The values shown in this training image are examples only.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>Example pricing is not real pricing.</strong>
        <p>Do not copy the dollar amounts from the training image. Enter the actual pricing your company uses.</p>
      </div>

      <h3>That&apos;s It</h3>
      <div className="lessonText">
        <p>
          Once the part name, description, custom setting, design parameters, and optional pricing are correct, the new part is ready to use.
        </p>
        <p>
          If you need automatic screw spline or shear block holes added to the part, that will require Primary or Secondary Fabrications. We will cover those in a later lesson.
        </p>
        <p>
          For now, the part can be added to a Metal Group or manually added to a cut list in Metal Fabrication.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> I found a similar base part.</label>
          <label><input type="checkbox" /> I copied the part instead of starting from scratch.</label>
          <label><input type="checkbox" /> I updated the name and description.</label>
          <label><input type="checkbox" /> I checked Custom Part.</label>
          <label><input type="checkbox" /> I reviewed Width, Depth, and Glass Bite.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training/lesson-11-catalog-part-basics" className="secondary">
          ← Previous
        </Link>
        <Link href="/dashboard/introductory-software-training/lesson-11-assemblies" className="primary">
          Next: Assemblies →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}