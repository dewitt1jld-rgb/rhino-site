import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Choose the Right Metal Group",
    href: "/dashboard/estimator-training/lesson-3",
  },
  {
    number: 2,
    title: "Build the Estimating Components",
    href: "/dashboard/estimator-training/lesson-3-components",
  },
  {
    number: 3,
    title: "Estimating Now, Fabrication Later",
    href: "/dashboard/estimator-training/lesson-3-production",
  },
];

const img = {
  fg3000:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/fg-3000.png",

  mainScreen:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/main_screen.png",

  outsideGlazedStopDown:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_down.png",

  outsideGlazedStopUp:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/outside_glazed_horz_stop_up.png",

  copyButton:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/copy_button.png",

  topOfList:
    "https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_12/12.2/top_of_list.png",
};

export default function EstimatorLessonThreePage() {
  return (
    <AcademyLessonLayout
      lessonNumber="03"
      lessonTitle="Building Metal Groups for Estimating"
      lessonDescription="Learn how to choose and prepare a metal group for estimating so the correct material and components are included without rebuilding the project later."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 1 of 3
      </p>

      <h2>
        Choose the Right Metal Group
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Choose the closest correct metal group for the project and create a
        project-specific copy that can be used throughout the estimating
        process.
      </div>

      <div className="lessonText">
        <p>
          Before we begin building frames for an estimate, we need to make sure
          we are starting with the right metal group.
        </p>

        <p>
          This is worth spending a little extra time on.
        </p>

        <p>
          The metal group determines which parts Glazier Studio uses throughout
          the frame. If we begin with the wrong system or incorrect components,
          those problems will follow us through the rest of the estimate.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          A few extra minutes here can save a lot of work later.
        </strong>

        <p>
          Our goal is to start with a metal group that is already as close as
          possible to the system shown on the project drawings.
        </p>
      </div>

      <h3>
        What Does the Metal Group Actually Control?
      </h3>

      <div className="lessonText">
        <p>
          A metal group is an organized collection of parts and settings that
          tells Glazier Studio which components belong in the different
          positions of a frame.
        </p>

        <p>
          Instead of selecting every head, sill, jamb, vertical, horizontal,
          glass stop, and other component every time you build a frame, the
          metal group gives Glazier Studio a set of rules to work from.
        </p>

        <p>
          When you build a frame, the program uses those rules to determine
          which parts should be picked up.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Think of It This Way
        </p>

        <h3>
          The frame provides the shape. The metal group provides the parts.
        </h3>

        <p>
          When the correct metal group is selected, Glazier Studio already
          knows which part numbers should normally be used for each position in
          the frame.
        </p>
      </div>

      <h3>
        Why This Matters for Estimating
      </h3>

      <div className="lessonText">
        <p>
          During estimating, we are trying to determine what material and
          components will be required if we win the project.
        </p>

        <p>
          That means the metal group has a direct effect on the material being
          picked up by the estimate.
        </p>

        <p>
          If the wrong head, sill, vertical, horizontal, glass stop, adapter,
          stiffener, vinyl, or other component is assigned to the metal group,
          the estimate can be affected.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          For estimating, we care about getting the right pieces into the
          project.
        </strong>

        <p>
          We are not trying to perfect every fabrication at this stage. Our
          first priority is making sure the system contains the correct
          components so the estimate has useful material information.
        </p>
      </div>

      <h3>
        Start With the Project Documents
      </h3>

      <div className="lessonText">
        <p>
          Before selecting a metal group, review the project drawings,
          specifications, schedules, and notes to determine which framing
          system is being requested.
        </p>

        <p>
          In many cases, the drawings or specifications will identify the
          manufacturer and system series directly.
        </p>

        <p>
          For example, you may see a specific storefront or curtain wall system
          called out in the architectural drawings or specifications.
        </p>
      </div>

      <div className="reviewBox">
        <p className="sectionLabel">
          Before Choosing a Metal Group
        </p>

        <div className="reviewGrid">
          <div>
            <span>1</span>

            <div>
              <strong>
                Manufacturer
              </strong>

              <p>
                Determine which manufacturer&apos;s framing system is being
                specified.
              </p>
            </div>
          </div>

          <div>
            <span>2</span>

            <div>
              <strong>
                System / Series
              </strong>

              <p>
                Identify the storefront, curtain wall, or other system series
                being used.
              </p>
            </div>
          </div>

          <div>
            <span>3</span>

            <div>
              <strong>
                Glazing Direction
              </strong>

              <p>
                Determine whether the system is inside glazed or outside
                glazed.
              </p>
            </div>
          </div>

          <div>
            <span>4</span>

            <div>
              <strong>
                Configuration
              </strong>

              <p>
                For storefront systems, determine whether the intermediate
                horizontal is stops up or stops down.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3>
        Find the Closest Existing Metal Group
      </h3>

      <div className="lessonText">
        <p>
          Once you understand what the project requires, open the Metal Groups
          screen and look for an existing group that closely matches the
          specified system.
        </p>

        <p>
          You may find several metal groups that appear to use the same basic
          system.
        </p>

        <p>
          That is normal.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.mainScreen}
          alt="Glazier Studio Metal Groups screen"
        />

        <figcaption>
          Use the Metal Groups screen to locate the system that most closely
          matches the project requirements.
        </figcaption>
      </figure>

      <div className="lessonText">
        <p>
          Metal groups are often separated by manufacturer, system, glazing
          direction, configuration, or other options.
        </p>

        <p>
          There may also be several variations of the same basic system because
          different versions contain different components or settings.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.fg3000}
          alt="FG-3000 metal group variations"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border:
              "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          A single framing system may have several metal group variations.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Do not assume the first matching system name is automatically the
          correct metal group.
        </strong>

        <p>
          Take a minute to compare the available variations against the project
          requirements before choosing your starting point.
        </p>
      </div>

      <h3>
        Storefront: Check the Glazing Configuration
      </h3>

      <div className="lessonText">
        <p>
          Storefront systems can have several configurations, so you should
          verify how the system is intended to be glazed.
        </p>

        <p>
          First determine whether the system is{" "}
          <strong>inside glazed</strong> or{" "}
          <strong>outside glazed</strong>.
        </p>

        <p>
          Then, when applicable, determine whether the intermediate horizontal
          is configured as <strong>stops up</strong> or{" "}
          <strong>stops down</strong>.
        </p>
      </div>

      <div className="configurationGrid">
        <section>
          <p className="sectionLabel">
            Inside vs. Outside Glazed
          </p>

          <h3>
            Which side receives the glass?
          </h3>

          <p>
            Imagine the frame has already been installed in the building. If
            the glass is installed from the exterior, it is outside glazed. If
            the glass is installed from the interior, it is inside glazed.
          </p>
        </section>

        <section>
          <p className="sectionLabel">
            Stops Up vs. Stops Down
          </p>

          <h3>
            Look at the intermediate horizontal.
          </h3>

          <p>
            If the removable glass stop is above the intermediate horizontal,
            it is stops up. If the stop is below the intermediate horizontal,
            it is stops down.
          </p>
        </section>
      </div>

      <div
        className="imageGrid"
      >
        <figure>
          <img
            src={img.outsideGlazedStopUp}
            alt="Outside glazed storefront horizontal with glass stop up"
          />

          <figcaption>
            Stops Up — the glass stop is above the intermediate horizontal.
          </figcaption>
        </figure>

        <figure>
          <img
            src={img.outsideGlazedStopDown}
            alt="Outside glazed storefront horizontal with glass stop down"
          />

          <figcaption>
            Stops Down — the glass stop is below the intermediate horizontal.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox">
        <strong>
          Always use an intermediate horizontal when identifying stops up or
          stops down.
        </strong>

        <p>
          Do not use the head or sill to make this determination. Their glass
          stop locations are naturally affected by where those members sit in
          the frame.
        </p>
      </div>

      <h3>
        Do Not Build the Metal Group From Scratch
      </h3>

      <div className="lessonText">
        <p>
          Once you find the closest metal group, use it as your starting point.
        </p>

        <p>
          In most situations, there is no reason to create an entire metal group
          from scratch.
        </p>

        <p>
          Existing groups already contain a large amount of information and
          settings that would otherwise need to be recreated manually.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">
          Important
        </p>

        <h3>
          Copy the closest group instead of starting over.
        </h3>

        <p>
          Building a metal group completely from scratch creates unnecessary
          work and increases the chance that an important part or setting will
          be missed.
        </p>
      </div>

      <h3>
        Copy the Existing Metal Group
      </h3>

      <div className="lessonText">
        <p>
          Select the metal group that most closely matches the project. Once it
          is highlighted, use the <strong>Copy</strong> button on the right-hand
          side of the screen.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src={img.copyButton}
          alt="Copy button on the Metal Groups screen"
          style={{
            width: "60%",
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border:
              "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Select the closest existing group and click Copy.
        </figcaption>
      </figure>

      <h3>
        Why Make a Project-Specific Copy?
      </h3>

      <div className="lessonText">
        <p>
          Even if the existing metal group looks correct at first, you may
          discover that the project uses a different part, accessory, vinyl,
          glass stop, stiffener, or other component.
        </p>

        <p>
          Creating a copy gives you a safe version that can be adjusted for the
          project without changing the program&apos;s original metal group.
        </p>

        <p>
          It also gives us something very valuable later if the company wins
          the job.
        </p>

        <p>
          Instead of rebuilding the project from the beginning, we can continue
          working with the same project-specific metal group and frames that
          were originally created during estimating.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Estimating Philosophy
        </p>

        <h3>
          Build it so you can keep it.
        </h3>

        <p>
          We do not need every fabrication completed while estimating, but we
          want the system, components, and frames organized well enough that
          they can continue into production if the project is awarded.
        </p>
      </div>

      <h3>
        Give the Copy a Clear Name
      </h3>

      <div className="lessonText">
        <p>
          After copying the metal group, rename it so there is no confusion
          between your project-specific group and the original.
        </p>

        <p>
          I recommend including the system name and something that identifies
          the project.
        </p>
      </div>

      <div className="exampleBox">
        <p className="sectionLabel">
          Example
        </p>

        <div className="exampleName">
          _FG-3000 - Smith Building
        </div>
      </div>

      <div className="lessonText">
        <p>
          Placing an underscore at the beginning of the name can also help move
          your custom metal groups toward the top of the list, making them
          easier to find.
        </p>
      </div>

      <figure className="fullWidthMedia">
        <img
          src={img.topOfList}
          alt="Custom metal groups sorted near the top of the Metal Groups list"
        />

        <figcaption>
          A consistent naming system makes project-specific metal groups easier
          to locate later.
        </figcaption>
      </figure>

      <div className="calloutBox">
        <strong>
          Use a naming convention that makes sense for your company.
        </strong>

        <p>
          The exact naming format is not important. What matters is that your
          employees can quickly identify which groups are custom and which
          project they belong to.
        </p>
      </div>

      <h3>
        Do Not Worry About Perfect Fabrications Yet
      </h3>

      <div className="lessonText">
        <p>
          At this point, we are preparing the metal group for estimating.
        </p>

        <p>
          We are not going to spend unnecessary time programming every anchor,
          weep hole, hardware preparation, or fabrication that may eventually
          be required by the RhinoFab.
        </p>

        <p>
          Remember that we may not even win this project.
        </p>

        <p>
          What we do want is a good foundation: the correct system, the correct
          configuration, and a project-specific metal group that we can now
          review for the components that affect our estimate.
        </p>
      </div>

      <div className="processBox">
        <p className="sectionLabel">
          Our Process
        </p>

        <div className="processFlow">
          <div>
            <span>1</span>
            <strong>
              Review the Plans
            </strong>
            <p>
              Identify the manufacturer, system, and configuration.
            </p>
          </div>

          <div>
            <span>2</span>
            <strong>
              Find the Closest Group
            </strong>
            <p>
              Start with an existing metal group that closely matches the
              project.
            </p>
          </div>

          <div>
            <span>3</span>
            <strong>
              Make a Copy
            </strong>
            <p>
              Protect the original and create a version specifically for this
              project.
            </p>
          </div>

          <div>
            <span>4</span>
            <strong>
              Name It Clearly
            </strong>
            <p>
              Make the custom group easy to identify throughout the life of the
              project.
            </p>
          </div>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">
          Checkpoint
        </p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I know which manufacturer is specified.
          </label>

          <label>
            <input type="checkbox" /> I know which framing system or series is
            being used.
          </label>

          <label>
            <input type="checkbox" /> I verified the glazing configuration.
          </label>

          <label>
            <input type="checkbox" /> I found the closest existing metal group.
          </label>

          <label>
            <input type="checkbox" /> I copied the existing group instead of
            starting from scratch.
          </label>

          <label>
            <input type="checkbox" /> I gave the copied group a clear,
            project-specific name.
          </label>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training"
          className="secondary"
        >
          ← Back to Estimator Training
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-3-components"
          className="primary"
        >
          Next: Build the Estimating Components →
        </Link>
      </div>

      <style jsx>{`
        .reviewBox,
        .processBox {
          margin: 32px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .reviewGrid span,
        .processFlow span {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .reviewGrid strong {
          color: #ffffff;
        }

        .reviewGrid p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .configurationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0 32px;
        }

        .configurationGrid section {
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
        }

        .configurationGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 21px;
        }

        .configurationGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .imageGrid figure {
          margin: 0;
          text-align: center;
        }

        .imageGrid img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .imageGrid figcaption {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .warningBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(245, 158, 11, 0.38);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.08);
        }

        .warningBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .exampleBox {
          margin: 24px 0;
          padding: 24px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 16px;
          background: rgba(245, 158, 11, 0.07);
        }

        .exampleName {
          margin-top: 10px;
          padding: 16px 18px;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.25);
          color: #ffffff;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .processFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .processFlow > div {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .processFlow span {
          margin-bottom: 13px;
        }

        .processFlow strong {
          display: block;
          color: #ffffff;
        }

        .processFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .processFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .reviewGrid,
          .configurationGrid,
          .imageGrid,
          .processFlow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}