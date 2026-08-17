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

      <h3>X Location</h3>

      <div className="lessonText">
        <p>
          X is the dimension from the <strong>back of the part</strong> to the
          drilling surface.
        </p>

        <p>
          Think about where the drill first contacts the profile.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.cad}
          alt="CAD example showing fabrication X location"
        />
      </figure>

      <div className="lessonText">
        <p>
          For example, if we wanted to drill a weep hole in a sill channel, we
          would measure from the back of the profile to the first surface the
          drill touches.
        </p>

        <p>
          In the example shown above, the X location would be
          <strong> 4.5&quot;</strong>.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Simple way to remember X:</strong>

        <p>
          X tells the machine how far away the drilling surface is from the
          back of the profile.
        </p>
      </div>

      <h3>Y Location</h3>

      <div className="lessonText">
        <p>
          Y normally describes where the operation occurs along the
          <strong> length of the stick</strong>.
        </p>

        <p>
          Unfortunately, Y is also the coordinate that causes the most
          confusion because the reference point changes depending on the type
          of fabrication.
        </p>

        <p>
          The easiest way to understand Y is to separate it into three
          situations.
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>Y in Primary Fabrications</label>
          <label>Y in Secondary Fabrications</label>
          <label>Y in Fab Rules Library</label>
        </div>
      </div>

      <h3>Y in Primary Fabrications</h3>

      <div className="lessonText">
        <p>
          In Primary Fabrications, the Y value entered directly into the
          fabrication row is usually not what actually positions the
          fabrication.
        </p>

        <p>
          Primary Fabrications commonly rely on a more complex formula tied to
          the Metal Group.
        </p>

        <p>
          Even though the Y field still requires something to be entered, that
          typed value may not actually be used.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Do not let the required Y box fool you.</strong>

        <p>
          A field can be required by the database even though another formula
          ultimately controls the actual fabrication location.
        </p>
      </div>

      <h3>Y in Secondary Fabrications</h3>

      <div className="lessonText">
        <p>
          Secondary Fabrications work differently.
        </p>

        <p>
          Their Y location is commonly measured from the
          <strong> bottom of the horizontal</strong> to the center of the
          operation.
        </p>

        <p>
          This happens because Secondary Fabrications transfer information from
          one member to another.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.screwSpline}
          alt="Screw spline fabrication X and Y example"
        />
      </figure>

      <div className="lessonText">
        <p>
          A common example is a horizontal crossing a vertical that contains a
          screw spline or shear block hole pattern.
        </p>

        <p>
          The software already knows where the bottom of that horizontal is
          located when the frame is built, so that becomes the reference used
          to transfer the fabrication.
        </p>

        <p>
          In the example above:
        </p>
      </div>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>X = 1&quot;</strong>
          </label>

          <label>
            <strong>Y = BOH + 1.8&quot;</strong>
          </label>
        </div>
      </div>

      <div className="calloutBox">
        <strong>This is where people get confused.</strong>

        <p>
          Visually, you may feel like you are measuring in the Z direction.
        </p>

        <p>
          But because the fabrication is being transferred onto a vertical
          member, the program translates that relationship into the fabrication
          Y coordinate.
        </p>
      </div>

      <h3>Y in Fab Rules Library</h3>

      <div className="lessonText">
        <p>
          Fab Rules Library uses an imaginary zero point.
        </p>

        <p>
          Most of the time, that zero point is the centerline or middle of the
          prep.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.centerlines}
          alt="Fabrication centerline locations"
        />
      </figure>

      <div className="takeawayBox">
        <div className="takeawayGrid">
          <label>
            <strong>Centerline:</strong> Y = 0
          </label>

          <label>
            <strong>Right of center:</strong> Positive Y
          </label>

          <label>
            <strong>Left of center:</strong> Negative Y
          </label>
        </div>
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
          Front or back drilling can require a different Z value because you
          may need to move vertically to reach the center of the drilling
          surface.
        </p>

        <p>
          For example, if the drill must move up .25&quot; to reach the center
          of the operation, Z would be <strong>.25&quot;</strong>.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Simple coordinate summary:</strong>

        <p>
          X helps locate the drilling surface across the profile.
        </p>

        <p>
          Y typically locates the operation along the length of the member.
        </p>

        <p>
          Z locates the drilling surface vertically from the bottom of the
          profile.
        </p>
      </div>

      <h3>RX & RY</h3>

      <div className="lessonText">
        <p>
          RX and RY are rotational values used on machines with drills capable
          of plunging at an angle.
        </p>

        <p>
          If your machine does not support angled drilling, these values can
          generally be left blank.
        </p>

        <p>
          RX controls rotation in one direction while RY controls rotation in
          the other.
        </p>

        <p>
          The values can move from negative angles through zero to positive
          angles, with <strong>0</strong> representing a straight plunge.
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
          For now, simply understand that they control drill angle rather than
          normal fabrication position.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand what X measures.
          </label>

          <label>
            <input type="checkbox" /> I understand why Y can behave differently.
          </label>

          <label>
            <input type="checkbox" /> I understand Primary Fabrication Y.
          </label>

          <label>
            <input type="checkbox" /> I understand Secondary Fabrication Y.
          </label>

          <label>
            <input type="checkbox" /> I understand Fab Rules Library centerline
            Y values.
          </label>

          <label>
            <input type="checkbox" /> I understand what Z measures.
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