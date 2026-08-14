import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  { number: 1, title: "Catalog Part Basics", href: "/dashboard/introductory-software-training/lesson-11-catalog-part-basics" },
  { number: 2, title: "Create Your Own Catalog Part", href: "/dashboard/introductory-software-training/lesson-11-create-catalog-part" },
  { number: 3, title: "Assemblies", href: "/dashboard/introductory-software-training/lesson-11-assemblies" },
];

const img = {
  assemblyPart: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/assembly_part.png",
  cornerAssembly: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/corner_assembly.png",
  assemblyData: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/assembly_data_screen.png",
  cutRules: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_11/cut_rules.png",
};

export default function LessonElevenAssembliesPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="11"
      lessonTitle="Catalog Parts"
      lessonDescription="Learn what assemblies are, when they are useful, how Assembly Data works, and why fabrications can become more complicated when multiple parts are grouped together."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Assemblies</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand when an assembly is useful, how parts are added to Assembly Data, and the fabrication limitation you need to remember.
      </div>

      <div className="lessonText">
        <p>
          An assembly is a catalog item that picks up multiple physical parts at the same time.
        </p>
        <p>
          Assemblies are commonly used for two-piece head receptors, corner mullions, or parts that require additional gasketing or companion pieces.
        </p>
      </div>

      <div className="calloutBox">
        <strong>I am not a huge fan of assemblies.</strong>
        <p>
          They work well for picking up multiple parts, but they can make fabrication more complicated. The biggest reason is that only the first part in an assembly receives fabrications.
        </p>
      </div>

      <h3>How Assemblies Appear in Catalog Parts</h3>
      <figure className="fullWidthMedia">
        <img
  src={img.assemblyPart}
  alt="Assembly parts in Catalog Parts"
  style={{
    width: "50%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  }}
/>
        <figcaption>Assemblies commonly use an A/ prefix in the part name.</figcaption>
      </figure>

      <div className="lessonText">
        <p>
          The image above shows examples of assemblies in the Oldcastle catalog. Notice that the part names begin with <strong>A/</strong>. This identifies the catalog item as an assembly.
        </p>
        <p>
          Think of an assembly as two or more pieces that work together as one complete member.
        </p>
      </div>

      <h3>Why Would I Use One?</h3>
      <div className="lessonText">
        <p>
          In the next lesson, we will cover Metal Groups. Metal Groups can automatically pick up preset parts, but some positions only allow one line item.
        </p>
        <p>
          A good example is a two-piece head receptor. If the Metal Group only gives you one Head Receptor line, but the actual system requires two separate extrusions, an assembly allows both parts to be picked up from that one line.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Important fabrication limitation</strong>
        <p>
          Only the first part listed in an assembly will receive fabrications. The second, third, fourth, and any additional parts will not receive those fabs automatically.
        </p>
      </div>

      <h3>Two-Piece Corner Example</h3>
      <div className="lessonText">
        <p>
          Another common use is a two-piece corner member. I usually prefer to pick up one corner piece on one frame and the second piece on the adjoining frame, but sometimes that is not possible.
        </p>
        <p>
          In those cases, both pieces can be grouped together in an assembly.
        </p>
      </div>

      <figure className="fullWidthMedia">
                      <img
  src={img.cornerAssembly}
  alt="Two-piece corner assembly example"
  style={{
    width: "50%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  }}
/>
      </figure>

      <h3>Assembly Data</h3>
      <div className="lessonText">
        <p>
          The visible name of the assembly is only a description. Naming a part something like <strong>A/Part 1 + Part 2</strong> does not actually cause those two parts to be picked up.
        </p>
        <p>
          The section that controls the real parts is <strong>Assembly Data</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.assemblyData} alt="Assembly Data screen" />
      </figure>

      <div className="lessonText">
        <p>
          Enter the main member first, then add the second member on the next line. You can continue adding additional parts if the assembly requires them.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Order matters.</strong>
        <p>
          The first part in Assembly Data is the part that receives fabrications. Keep that in mind when deciding which member should be listed first.
        </p>
      </div>

      <h3>Cut Rules</h3>
      <div className="lessonText">
        <p>
          Assembly Data also includes a Cut Rules column. Cut Rules let you control whether an additional assembly member should be the same length, longer, or shorter than the first part.
        </p>
        <p>
          The default behavior is for the added part to match the length of the first part.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img src={img.cutRules} alt="Assembly cut rules dropdown" />
      </figure>

      <div className="lessonText">
        <p>
          There are several cut rules available. One of the most useful is <strong>Nominal Plus or Minus Excess</strong>.
        </p>
        <p>
          Nominal means the original part length. Excess is the amount you want added or removed.
        </p>
        <p>
          For example, if you specify a total 1/8&quot; undercut, the program applies 1/16&quot; to each end so the finished member is 1/8&quot; shorter overall.
        </p>
      </div>

      <h3>Creating Your Own Assembly</h3>
      <div className="lessonText">
        <p>The same rules from the previous section still apply. Do not start from scratch.</p>
        <p>
          Find the main base member, make a copy, update the name, description, Custom Part setting, and Extrusion Design Parameters, then add the original part and all required companion parts into Assembly Data.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>
        <div className="takeawayGrid">
          <label><input type="checkbox" /> I understand what an assembly does.</label>
          <label><input type="checkbox" /> I know why A/ parts are used.</label>
          <label><input type="checkbox" /> I understand that only the first part receives fabs.</label>
          <label><input type="checkbox" /> I reviewed Assembly Data.</label>
          <label><input type="checkbox" /> I reviewed Cut Rules.</label>
        </div>
      </div>

      <div className="navButtons">
        <Link href="/dashboard/introductory-software-training/lesson-11-create-catalog-part" className="secondary">
          ← Previous
        </Link>
        <Link href="/dashboard/introductory-software-training" className="primary">
          Finish Lesson 11 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}