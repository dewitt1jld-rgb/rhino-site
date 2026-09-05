import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Library Fabrication Overview",
    href: "/dashboard/introductory-software-training/lesson-19-library-fab-overview",
  },
  {
    number: 2,
    title: "Creating a Library Fabrication",
    href: "/dashboard/introductory-software-training/lesson-19-create-library-fab",
  },
  {
    number: 3,
    title: "Formulas & Location References",
    href: "/dashboard/introductory-software-training/lesson-19-formulas-references",
  },
  {
    number: 4,
    title: "Build a Hardware Prep",
    href: "/dashboard/introductory-software-training/lesson-19-build-hardware-prep",
  },
];

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_18/library%20fab%20main%20screen.png",
  cad: "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_18/door_prep_butt_hinge.png",
  onDoor:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_18/98_99_rim_panic_2.png",
};

export default function LessonEighteenLibraryFabOverviewPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 4
      </p>

      <h2>
        Library Fabrication Overview
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand what a Library Fabrication is, why it is useful, and how it
        allows one hardware prep to be reused in multiple locations.
      </div>

      <div className="lessonText">
        <p>
          Up to this point, most of the fabrications you have worked with have
          been attached directly to a part, metal group, or assembly.
        </p>

        <p>
          <strong>
            Library Fabrications
          </strong>{" "}
          work a little differently. Instead of creating the same fabrication
          over and over again, you can build the fabrication once, save it in
          the{" "}
          <strong>
            Fab Rules Library
          </strong>
          , and then reuse it wherever it is needed.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.main}
          alt="Fab Rules Library main screen"
        />

        <figcaption>
          The Fab Rules Library stores reusable fabrication preparations that
          can later be applied to doors, sticks, and other fabrication
          workflows.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Think of a Library Fab as a reusable template.
        </strong>

        <p>
          You create the machining operations once, save them, and then tell
          the software where that fabrication should be located when you use
          it.
        </p>
      </div>

      <h3>
        Why Library Fabrications Are Useful
      </h3>

      <div className="lessonText">
        <p>
          Door hardware is one of the easiest ways to understand why Library
          Fabrications are so useful.
        </p>

        <p>
          Imagine a standard butt hinge. The shape of the hinge prep does not
          change just because the hinge is located higher or lower on the door.
          The holes, routing, dimensions, and machining operations remain the
          same.
        </p>

        <p>
          What changes is the{" "}
          <strong>location</strong>.
        </p>
      </div>

      <div className="explanationGrid">
        <section className="explanationCard">
          <p className="sectionLabel">
            Build It Once
          </p>

          <h3>
            Create the hardware prep
          </h3>

          <p>
            The actual machining operations for the hinge are created inside
            the Fab Rules Library.
          </p>

          <p>
            This may include routing, drilling, countersinking, or any other
            operations required for that hardware preparation.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">
            Save It
          </p>

          <h3>
            Store the prep in the library
          </h3>

          <p>
            Once the fabrication is built correctly, it can be saved and reused
            instead of rebuilding the same operations every time.
          </p>

          <p>
            Over time, this allows your company to build a library of commonly
            used hardware preparations.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">
            Position It
          </p>

          <h3>
            Tell the software where it belongs
          </h3>

          <p>
            When the Library Fab is applied, you can provide a different
            location without changing the fabrication itself.
          </p>

          <p>
            This is what allows the same hinge prep to be used at several
            different heights on the same door.
          </p>
        </section>

        <section className="explanationCard">
          <p className="sectionLabel">
            Reuse It
          </p>

          <h3>
            Apply it again later
          </h3>

          <p>
            The same saved preparation can be used again on future doors or
            other applicable fabrication workflows.
          </p>

          <p>
            This creates a much more consistent and repeatable fabrication
            process.
          </p>
        </section>
      </div>

      <h3>
        Example: Butt Hinge Prep / Panic Prep
      </h3>

      <div className="lessonText">
        <p>
          A butt hinge is a good example because one hinge preparation may need
          to appear several times on the same door while A Panic prep may be placed at diffrent heights or locations depending on door size or customer requirements.
        </p>

        <p>
          Instead of creating three separate hinge fabrications or multiple Panic preps at diffrent heights, you can create
          the hinge/Panic prep once and then apply that same Library Fab at any locations.
        </p>
      </div>

      <div className="imageGrid">
        <figure className="lessonFigure">
          <img
            src={img.cad}
            alt="Butt hinge fabrication dimensions"
          />

          <figcaption>
            The hardware preparation is first defined using the dimensions
            required to manufacture it.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.onDoor}
            alt="Butt hinge fabrication positioned on a door"
          />

          <figcaption>
            The saved preparation can then be positioned at the required
            location on the door.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox">
        <strong>
          The fabrication and the location are two different things.
        </strong>

        <p>
         When we build a library fab we build them around an imaginary 0 point. Lets use the butt hinge as an example here, 
         we would make 1 hinge based off a 0 point that we can later take and locate on the door or frame. Untill it is applied to a member this prep has no physical dimensions. 
         We will get into this in the next lesson.  

        </p>
      </div>

      <h3>
        Library Fabs Are Not Limited to Doors
      </h3>

      <div className="lessonText">
        <p>
          Although we are introducing Library Fabrications as part of the door
          section of this course, the Fab Rules Library is not limited to door
          hardware.
        </p>

        <p>
          Library Fabs can also be applied to sticks and other fabrication
          workflows whenever the same group of machining operations needs to be
          reused at different locations.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">
          The Basic Workflow
        </p>

        <div className="workflowGrid">
          <div className="workflowStep">
            <span>1</span>

            <div>
              <strong>Create</strong>
              <p>
                Build the fabrication operations.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>2</span>

            <div>
              <strong>Save</strong>
              <p>
                Store the prep in the Fab Rules Library.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>3</span>

            <div>
              <strong>Locate</strong>
              <p>
                Enter the position where the prep belongs.
              </p>
            </div>
          </div>

          <div className="workflowStep">
            <span>4</span>

            <div>
              <strong>Apply</strong>
              <p>
                Use the saved prep on the door or part.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>
        Existing Library Fabrications
      </h3>

      <div className="lessonText">
        <p>
          When you first open the{" "}
          <strong>
            Fab Rules Library
          </strong>
          , you may already find existing preparations that were created by
          someone else in your company or included in the database.
        </p>

        <p>
          Do not assume that an existing fabrication is automatically correct
          for your machine, hardware, or application.
        </p>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
          Review existing Library Fabs before using them.
        </strong>

        <p>
          Verify the fabrication operations, dimensions, formulas, and location
          references before using an unfamiliar preparation on a real job.
        </p>
      </div>

      <h3>
        What You Will Learn in This Lesson
      </h3>

      <div className="lessonText">
        <p>
          During the next three sections, we will move from understanding
          Library Fabrications to actually creating and using one.
        </p>
      </div>

      <div className="sectionBox">
        <div className="lessonRoadmap">
          <div>
            <strong>Step 2</strong>
            <span>
              Creating a Library Fabrication
            </span>
          </div>

          <div>
            <strong>Step 3</strong>
            <span>
              Formulas &amp; Location References
            </span>
          </div>

          <div>
            <strong>Step 4</strong>
            <span>
              Build a Hardware Prep
            </span>
          </div>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          For now, remember one idea:
        </strong>

        <p>
          A Library Fab allows you to build a fabrication once and reuse it
          without rebuilding the machining operations every time.
        </p>
      </div>

      <div className="navButtons">
<Link
  href="/dashboard/introductory-software-training/lesson-18-organizing-hardware"
  className="secondary"
>
  ← Previous: Door Hardware &amp; Components
</Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-create-library-fab"
          className="primary"
        >
          Next: Create a Library Fab →
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
          margin: 20px 0 32px;
        }

        .imageGrid .lessonFigure {
          margin: 0;
        }

        .explanationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 34px;
        }

        .explanationCard {
          padding: 22px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .explanationCard h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 20px;
        }

        .explanationCard p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .explanationCard p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .workflowGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .workflowStep {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .workflowStep > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .workflowStep strong {
          color: #ffffff;
        }

        .workflowStep p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .lessonRoadmap {
          display: grid;
          gap: 12px;
        }

        .lessonRoadmap > div {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 16px;
          align-items: center;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .lessonRoadmap strong {
          color: #f59e0b;
        }

        .lessonRoadmap span {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 750;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 760px) {
          .imageGrid,
          .explanationGrid,
          .workflowGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .lessonRoadmap > div {
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}