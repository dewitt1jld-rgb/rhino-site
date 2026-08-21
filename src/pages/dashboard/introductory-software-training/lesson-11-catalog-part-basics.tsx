import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Catalog Part Basics", href: "/dashboard/introductory-software-training/lesson-11-catalog-part-basics" },
  { number: 2, title: "Create Your Own Catalog Part", href: "/dashboard/introductory-software-training/lesson-11-create-catalog-part" },
  { number: 3, title: "Assemblies", href: "/dashboard/introductory-software-training/lesson-11-assemblies" },
];

const img = {
  catalogParts: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/catalog%20_parts_main.png",
};

const f2Video = "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/f2_video.mp4";

export default function LessonElevenCatalogPartBasicsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="11"
      lessonTitle="Catalog Parts"
      lessonDescription="Learn how to navigate Catalog Parts, find vendor parts quickly, use F2 shortcuts, and understand how catalog parts are used throughout the program."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 3</p>
      <h2>Catalog Part Basics</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Learn how to open the Catalog Parts screen, find parts by vendor or search, and use the F2 shortcut to jump directly to a selected part.
      </div>

      <div className="lessonText">
        <p>
          The Catalog Parts screen is where Glazier Studio stores the parts used throughout the program. This includes extrusions, glass, hardware, vinyl, and other catalog items.
        </p>
        <p>
          You can open Catalog Parts from the main software menu on the left side under the <strong>Database</strong> section.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.catalogParts} alt="Catalog Parts screen showing catalog selection and search" />
        <figcaption>
          The Catalog Parts screen displays all items found in the currently selected vendor catalog.
        </figcaption>
      </figure>

      <h3>Choose the Correct Vendor Catalog</h3>

      <div className="lessonText">
        <p>
          The red-highlighted area in the image above shows the selected catalog. Every part shown in the main list belongs to that catalog.
        </p>
        <p>
          If you want to view parts from a different vendor, open the catalog dropdown and choose the vendor you want to search.
        </p>
        <p>
          The yellow-highlighted area is the search feature. Use it when you already know the part number or want to quickly narrow down a long catalog list.
        </p>
      </div>

      <h3>The Faster Way: Use F2</h3>

      <div className="lessonText">
        <p>
          Catalog Parts can also be opened directly from other screens. If you are working in Metal Groups, Metal Fabrication, or another screen where a part number is visible, select that part and press <strong>F2</strong>.
        </p>
        <p>
          The software will jump directly to that selected part in Catalog Parts.
        </p>
      </div>

      <video
        controls
        preload="metadata"
        src={f2Video}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "900px",
          margin: "28px auto",
          borderRadius: "16px",
          border: "1px solid rgba(245, 158, 11, 0.22)",
          background: "#000",
        }}
      />

      <div className="calloutBox">
        <strong>Helpful Tip</strong>
        <p>
          This is usually the fastest way to get to Catalog Parts. If you are already working with a part in Metal Groups or Metal Fabrication, pressing F2 is much faster than backing out of your current screen and navigating through the database menu.
        </p>
      </div>

      <div className="calloutBox">
        <strong>If F2 does not work</strong>
        <p>
          Some keyboards require the Function key. Select the part, hold <strong>FN</strong>, and then press <strong>F2</strong>.
        </p>
      </div>

      <h3>Catalog Parts Are More Than Extrusions</h3>

      <div className="lessonText">
        <p>
          Catalog Parts are not limited to aluminum extrusions. You can also create custom glass, hardware, vinyl, rubber, and other parts if the program does not already contain the item you need.
        </p>
        <p>
          In the next section, we will build a custom catalog part and go through the settings that actually matter. We will also practice the F2 hot key in the metal group screen. 
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> I opened the Catalog Parts screen.</label>
          <label><input type="checkbox" /> I changed vendor catalogs.</label>
          <label><input type="checkbox" /> I used the search feature.</label>
          <label><input type="checkbox" /> I saw how the F2 button works.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training/lesson-10-verify-alternate" className="secondary">
          ← Previous Lesson
        </Link>
        <Link href="/dashboard/introductory-software-training/lesson-11-create-catalog-part" className="primary">
          Next: Create a Catalog Part →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}