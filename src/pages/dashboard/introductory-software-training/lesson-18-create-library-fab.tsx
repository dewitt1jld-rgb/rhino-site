import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Library Fabrication Overview",
    href: "/dashboard/introductory-software-training/lesson-18-library-fab-overview",
  },
  {
    number: 2,
    title: "Creating a Library Fabrication",
    href: "/dashboard/introductory-software-training/lesson-18-create-library-fab",
  },
  {
    number: 3,
    title: "Formulas & Location References",
    href: "/dashboard/introductory-software-training/lesson-18-formulas-references",
  },
  {
    number: 4,
    title: "Build a Hardware Prep",
    href: "/dashboard/introductory-software-training/lesson-18-build-hardware-prep",
  },
];

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-01-main-screen.png",
  operations:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-02-opperations.png",
  cad: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-03-cad-butt-hinge.png",
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-05-data.png",
};

export default function LessonEighteenCreateLibraryFabPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
      lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 2 of 4
      </p>

      <h2>
        Creating a Library Fabrication
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Learn how to create a new Library Fabrication record and understand the
        basic information and machining operations that make up the saved prep.
      </div>

      <div className="lessonText">
        <p>
          Once you understand what a Library Fab is, the next step is learning
          how to create one. Feel free to build this test butt hinge along with the lesson. 
          Start a new prep and name it like the image below. We will break down what each option means. 
        </p>

        </div>

      <figure className="lessonFigure">
        <img
          src={img.main}
          alt="Fab Rules Library main screen"
        />

        <figcaption>
          The Fab Rules Library is where reusable fabrication records are
          created, stored, and managed.
        </figcaption>
      </figure>

      <h3>
        Start a New Fabrication
      </h3>

      <div className="lessonText">
        <p>
          To create a new Library Fabrication, begin from the{" "}
          <strong>Fab Rules Library</strong>.
        </p>

        <p>
          Use the white sheet icon in the upper-right area of the screen to begin
          a new fabrication record.
        </p>
      </div>

            <div className="lessonText">
        <p>
          As your Fab Rules Library grows, it can quickly contain a large number
          of hardware preparations.
        </p>

        <p>
          Use clear names and organize the fabrication so someone else can
          identify what hardware the prep belongs to without opening every
          operation.You can also use an underscore at the begining of the prep name to move it to the top of the list
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          A new Library Fab starts completly blank. 
        </strong>

        <p>
         This is one screen I recomend building from scratch and NOT 
          copying another fab unless you intentionally want some of those fabrications.
        </p>
      </div>

      <h3>
        Add the Machining Operations
      </h3>

      <div className="lessonText">
        <p>
          After creating the record, click the "operations" button to open a fab editor that looks very similar to the other screens we have worked with. 
        </p>


      </div>

<figure className="lessonFigure largeFigure">
  <img
    src={img.operations}
    alt="Library Fabrication operations screen"
  />

        <figcaption>
          Each operation defines a portion of the machining required for the
          saved preparation.
        </figcaption>
      </figure>

      <div className="sectionBox">
        <p className="sectionLabel">
          Common Information
        </p>

        <div className="fieldGrid">
          <div className="fieldCard">
            <strong>X Location</strong>

            <p>
              Controls the position of the operation forward and backwards from the back fence. 
            </p>
          </div>

          <div className="fieldCard">
            <strong>Y Location</strong>

            <p>
              Controls the side-to-side position of the operation relative to
              the Library Fab&apos;s "0" reference point. 
            </p>
          </div>

          <div className="fieldCard">
            <strong>Z Location</strong>

            <p>
              Controls the up and down position used by the machining
              operation.
            </p>
          </div>

          <div className="fieldCard">
            <strong>Operation Information</strong>

            <p>
              Defines the drill, router, depth, diameter, dimensions, or other
              machining values required for the operation.
            </p>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          X and Z should feel familiar those work the same as in other screens. 
        </strong>

        <p>
          Y is the value that behaves differently in Library Fabrications
          because the fabrication uses its own reference point. We will cover
          that in detail in the next step.
        </p>
      </div>

      <h3>
        Build the Prep From the Hardware Dimensions
      </h3>

      <div className="lessonText">
        <p>
          The easiest way to build a hardware prep is to work from the actual
          dimensions of the hardware or use of the manufacturer template.
        </p>

    
        <p>
          For this example I have drawn out a simplified butt hinge in autocad. 
          I will have examples later on using actual hardware but for now this lesson is to simply understand the concept. 
        </p>
      </div>

<div className="stackedImageGrid">
  <figure className="lessonFigure">
    <img
      src={img.cad}
      alt="Butt hinge CAD dimensions"
    />

    <figcaption>
      Hardware drawings or CAD dimensions give you the information needed
      to build the preparation.
    </figcaption>
  </figure>

  <figure className="lessonFigure largeDataFigure">
    <img
      src={img.data}
      alt="Library Fabrication data values"
    />

    <figcaption>
      Those dimensions are then translated into machining data inside the
      Library Fabrication.
    </figcaption>
  </figure>
</div>

      <h3>
        One Prep Can Contain Multiple Operations
      </h3>

      <div className="lessonText">
        <p>
          A Library Fabrication is not limited to a single drill hole or router
          operation.
        </p>

        <p>
          One saved library prep can contain every machining operation required for the
          complete piece of hardware. Keep in mind that if your machine may be limited to using one tool at a time. 
          If thats the case, do not make a prep that utelizes multiple tools on the same surface. 
        </p>
      </div>

<div className="exampleBox">
  <p className="sectionLabel">
    Example: Building a Butt Hinge Prep
  </p>

  <div className="lessonText">
    <p>
      The CAD image above does not show every fabrication value required to
      complete this prep, but it gives us enough information to understand the
      most important concept for this example:
      <strong> how the Y locations are built around a centerline.</strong>
    </p>

    <p>
      The rest of the fabrication information should already feel familiar at
      this point, so for this example we are going to focus almost entirely on
      the Y values.
    </p>
  </div>

  <div className="exampleList">
    <div>
      <span>1</span>

      <div>
        <h4>
          Create the Rectangular Hinge Pocket
        </h4>

        <p>
          Notice in the image above that there is a centerline running directly
          through the middle of the hinge preparation.
        </p>

        <p>
          We are going to treat that centerline as our imaginary
          <strong> Y = 0 location.</strong>
        </p>

        <p>
          Because the routed rectangle is centered directly on that 0
          centerline, its Y location is simply:
        </p>

        <div className="formulaValue">
          Y = 0
        </div>

        <p>
          This gives the entire preparation a central reference point that the
          remaining operations can be built around.
        </p>
      </div>
    </div>

    <div>
      <span>2</span>

      <div>
        <h4>
          Add the Four Drill Holes
        </h4>

        <p>
          Now look at the four drill holes surrounding the routed hinge pocket.
        </p>

        <p>
          Two of the drill holes are positioned on the positive side of our
          centerline, while the other two are positioned on the negative side.
        </p>

        <p>
          Those Y values are:
        </p>

        <div className="locationValues">
          <div>
            <strong>Positive Y</strong>
            <span>+3.000&quot;</span>
            <span>+3.500&quot;</span>
          </div>

          <div>
            <strong>Negative Y</strong>
            <span>-3.000&quot;</span>
            <span>-3.500&quot;</span>
          </div>
        </div>

        <p>
          Each one of these values is measured from the same imaginary
          <strong> Y = 0 centerline.</strong>
        </p>

        <p>
          The positive values move in one direction away from center, while the
          negative values move in the opposite direction.
        </p>

        <p>
          Instead of thinking of each drill hole as having a completely
          independent location, think of the entire hinge prep as being built
          around one central reference point.
        </p>
      </div>
    </div>
  </div>

  <div className="calloutBox">
    <strong>
      The entire prep moves together.
    </strong>

    <p>
      Later, when this Library Fab is applied to a door, you will give the prep
      a new location — for example, <strong>36&quot;</strong>.
    </p>

    <p>
      At that point, the prep replaces its original imaginary
      <strong> 0 location</strong> with the new
      <strong> 36&quot; location</strong>.
    </p>

    <p>
      The routed hinge pocket centers itself at 36&quot;. The positive drill
      holes move 3&quot; and 3.5&quot; upwards from that new center location, and
      the negative drill holes move -3&quot; and -3.5&quot; downwards by the same amount. 
    </p>
  </div>

  <div className="sectionBox">
    <p className="sectionLabel">
      Why This Matters
    </p>

    <h3>
      One Prep Can Be Reused at Multiple Locations
    </h3>

    <div className="lessonText">
      <p>
        This is the general idea behind Library Fabrications.
      </p>

      <p>
        Once the butt hinge prep has been built around its Y = 0 reference
        point, the same prep can be applied anywhere on the door without
        rebuilding every operation.
      </p>

      <p>
        For example, the same butt hinge prep could be applied at:
      </p>
    </div>

    <div className="hingeLocations">
      <div>
        <span>8&quot;</span>
        <p>
          The routed pocket centers at 8&quot;, and all four drill holes build
          themselves around that location.
        </p>
      </div>

      <div>
        <span>36&quot;</span>
        <p>
          The routed pocket centers at 36&quot;, and the same positive and
          negative offsets are reused.
        </p>
      </div>

      <div>
        <span>58&quot;</span>
        <p>
          The routed pocket centers at 58&quot;, and the entire prep builds
          itself around that new location.
        </p>
      </div>
    </div>

    <div className="calloutBox">
      <strong>
        Build the relationship once. Change the reference location later.
      </strong>

      <p>
        The individual operations do not need to be recreated every time the
        hinge moves. Their relationship to the centerline stays the same while
        the centerline itself moves to the new hinge location.
      </p>
    </div>
  </div>
</div>

      <h3>
        Naming and Organization Matter
      </h3>

      <div className="sectionBox">
        <p className="sectionLabel">
          Good Library Practices
        </p>

        <ul className="lessonList">
          <li>
            Use a clear hardware or preparation name.
          </li>

          <li>
            Keep related operations together inside the same Library Fab.
          </li>

          <li>
            Verify the dimensions before saving the preparation.
          </li>

          <li>
            Avoid creating duplicate Library Fabs when a correct preparation
            already exists.
          </li>

          <li>
            Review unfamiliar existing preparations before using them on a real
            job.
          </li>
        </ul>
      </div>

      <h3>
        Save the Fabrication
      </h3>

      <div className="lessonText">
        <p>
          Once the operations and dimensions are correct, save the Library
          Fabrication.
        </p>

        <p>
          The saved fabrication can now be selected later and applied to a door,
          stick, or other supported fabrication workflow.
        </p>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Saving the prep does not determine where it will be used.
        </strong>

        <p>
          At this point you have created the machining pattern itself. The next
          step is understanding how formulas and location references control
          where that preparation is positioned.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          Step 2 Review
        </p>

        <div className="reviewGrid">
          <div>
            <strong>1. Create</strong>
            <span>
              Start a new record in the Fab Rules Library.
            </span>
          </div>

          <div>
            <strong>2. Build</strong>
            <span>
              Add the machining operations required for the prep.
            </span>
          </div>

          <div>
            <strong>3. Verify</strong>
            <span>
              Confirm the dimensions and machining values.
            </span>
          </div>

          <div>
            <strong>4. Save</strong>
            <span>
              Store the completed prep for future use.
            </span>
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-library-fab-overview"
          className="secondary"
        >
          ← Previous: Overview
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-formulas-references"
          className="primary"
        >
          Next: Formulas &amp; References →
        </Link>
      </div>

      <style jsx>{`
        .lessonFigure {
          margin: 30px 0;
          text-align: center;
        }

        .lessonFigure img {
          display: block;
          width: 100%;
          max-width: 820px;
          height: auto;
          margin: 0 auto;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .lessonFigure figcaption {
          max-width: 760px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin: 22px 0 32px;
        }

        .imageGrid .lessonFigure {
          margin: 0;
        }

        .fieldGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .largeFigure {
  width: 140%;
  max-width: none;
  margin-left: -10%;
}

.largeFigure img {
  width: 120%;
  height: auto;
}


.stackedImageGrid {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 24px 0 34px;
}

.stackedImageGrid .lessonFigure {
  width: 100%;
  margin: 0;
}

.stackedImageGrid .lessonFigure img {
  display: block;
  width: 100%;
  height: auto;
}

/* Make the Library Fabrication data image larger */
.largeDataFigure {
  width: 120% !important;
  max-width: none;
  margin-left: -10% !important;
}

.largeDataFigure img {
  width: 100%;
  height: auto;
}

.exampleList {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 22px;
}

.exampleList > div {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 16px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.exampleList > div > span {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.14);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #f59e0b;
  font-weight: 900;
}

.exampleList h4 {
  margin: 0 0 12px;
  color: #ffffff;
  font-size: 18px;
}

.exampleList p {
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

.formulaValue {
  display: inline-block;
  margin: 4px 0 16px;
  padding: 10px 16px;
  border-radius: 10px;
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.28);
  color: #fbbf24;
  font-size: 18px;
  font-weight: 900;
}

.locationValues {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 14px 0 18px;
}

.locationValues > div {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.locationValues strong {
  color: #ffffff;
}

.locationValues span {
  color: #fbbf24;
  font-weight: 800;
}

.hingeLocations {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin: 20px 0 24px;
}

.hingeLocations > div {
  padding: 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hingeLocations > div > span {
  display: inline-block;
  margin-bottom: 8px;
  color: #f59e0b;
  font-size: 22px;
  font-weight: 900;
}

.hingeLocations p {
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.55;
}

@media (max-width: 700px) {
  .locationValues,
  .hingeLocations {
    grid-template-columns: 1fr;
  }

  .exampleList > div {
    grid-template-columns: 1fr;
  }
}
        .fieldCard {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .fieldCard strong {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
        }

        .fieldCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .exampleBox {
          margin: 24px 0 30px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          background: rgba(255, 255, 255, 0.035);
        }

        .exampleList {
          display: grid;
          gap: 12px;
          margin-top: 14px;
        }

        .exampleList > div {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .exampleList span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex: 0 0 30px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .exampleList p {
          margin: 3px 0 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
        }

        .lessonList {
          margin: 14px 0 0;
          padding-left: 22px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        .lessonList li + li {
          margin-top: 6px;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .reviewGrid > div {
          display: grid;
          gap: 6px;
          padding: 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid strong {
          color: #f59e0b;
        }

        .reviewGrid span {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.55;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 760px) {
          .imageGrid,
          .fieldGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}