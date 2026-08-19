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
  xyz:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-08-x-y-z.png",

  cad:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-09-cad.png",

  screwSpline:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-10-screw-spline.png",

  centerlines:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-11-centerlilnes.png",

  subsill:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-12-subsill.png",

  angles:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-13-rotational-angles.png",
};

export default function LessonThirteenXYZPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="13"
      lessonTitle="Understanding Fabrications"
      lessonDescription="Learn how X, Y, and Z locate a fabrication on a part and why Y behaves differently depending on the type of fabrication being created."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>

      <h2>Understanding X, Y & Z</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Understand how fabrication locations are
        described using X, Y, and Z coordinates.
      </div>

      <div className="calloutBox">
        <strong>This is one of the most important concepts in fabrication.</strong>

        <p>
          If you understand X, Y, and Z, troubleshooting a fabrication becomes
          dramatically easier.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <img
          src={img.xyz}
          alt="X Y and Z fabrication fields"
          style={{
            width: "100%",
            maxWidth: "520px",
            height: "auto",
            margin: "0 auto",
            display: "block",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />
      </figure>

      <div className="calloutBox">
        <strong>Important:</strong>

        <p>
          Most fabrication columns require a value. RX and RY are exceptions
          and may remain blank when they are not being used.
        </p>
      </div>

     
     
     
     <figure
  style={{
    textAlign: "center",
    margin: "32px 0 40px",
  }}
>
  <img
    src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_13/xyz.png"
    alt="X Y and Z fabrication location directions"
    style={{
      width: "100%",
      maxWidth: "650px",
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
    Every fabrication has an X, Y and Z location. Here is how those are pulled. 
  </figcaption>
</figure>
     
     
      <h3>X Location</h3>

      <div className="lessonText">
        <p>
          X is the dimension from the <strong>back of the part</strong> to the
          drilling surface.
        </p>

        <p>
          Think about where the drill first contacts the profile. The distance from that point to the back of the part is the X value regardless of what surface you are on. 
        </p>
      </div>



      <div className="calloutBox">
        <strong>Simple way to remember X:</strong>

        <p>
          X is measured Perpendicular to the back fence of the machine. 
        </p>
      </div>

      <h3>Y Location</h3>

      <div className="lessonText">
        <p>
          Y describes where the operation occurs along the
          <strong> length of the stick</strong>.
        </p>

        <p>
          To get a Y location, start at the lead edge of the stick and measure down to the center of the fabrication. 
        </p>

        <p>
          The easiest way to understand Y is start at the lead egde of the stick and move left or right accross the stick. 
        </p>
      </div>


     
      <h3>Z Location</h3>

      <div className="lessonText">
        <p>
          Z is the dimension from the <strong>bottom of the part</strong> to
          the center of the drilling surface.
        </p>

        <p>
          If you are drilling directly into the bottom of the part, Z may be
          <strong> 0</strong>.
        </p>

        <p>
          If you are drilling into the top of a profile that is 2&quot; tall,
          the Z location may be <strong>2&quot;</strong>.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.subsill}
          alt="Fabrication Z location example"
        />
      </figure>

      <div className="lessonText">


        <p>
          In the image above, the drill must move up .25&quot; to reach the center
          of the operation, the Z would be <strong>.25&quot;</strong> for this fabrication. 
        </p>
      </div>

      <div className="calloutBox">
        <strong>Simple coordinate summary:</strong>

        <p>
          X is measured from the back of the part forward
        </p>

        <p>
          Y is measured from the lead end of the stick down the length
        </p>

        <p>
          Z is measured from the bottom uf the part up
        </p>
      </div>

      <h3>RX & RY (5700, 5600 and 5000 series machines only) </h3>

      <div className="lessonText">
        <p>
          RX and RY are rotational values used on machines with drills capable
          of plunging at an angle.
        </p>

        <p>
          If your machine does not support angled drilling, these values should be left blank.
        </p>

        <p>
          RX controls rotation in one direction while RY controls rotation in
          the other.
        </p>


      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.angles}
          alt="Rotational fabrication angle example"
        />
      </figure>

      <div className="calloutBox">
        <strong>You do not need to memorize RX and RY yet.</strong>

        <p>
          For now, simply understand that they control the rotational drill. If you do not have a ratoational drill please ignore these fields. 
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand how X is measured
          </label>

          <label>
            <input type="checkbox" /> I understand how Y is measured.
          </label>

          <label>
            <input type="checkbox" /> I understand how Z is measured.
          </label>

          <label>
            <input type="checkbox" /> I understand the concept of RX and RY.
          </label>

     
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-13-fabrication-basics"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-13-fabrication-options"
          className="primary"
        >
          Next: Operations, Tools & Options →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}