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
  formula:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-06-x-y-loc-formula.png",

  formulaDoors:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-07-x-y-loc-formula-doors.png",

  assembled:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-08-assembled-door-leaf.png",

  exploded:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-09-exploded-door-leaf.png",

  xyLoc:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-10-xy-loc.png",
};

export default function LessonEighteenFormulasReferencesPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="18"
lessonTitle="Library Fabrications"
      lessonDescription="Learn how reusable fabrication rules are created, saved, positioned, and reused for door hardware and other fabrication workflows."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">
        Step 3 of 4
      </p>

      <h2>
        Fab Rules Settings, Formulas &amp; Location References
      </h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Finish learning the important settings on the Fab Rules Library screen,
        understand when to use X and Y location references, and learn how
        formulas allow the same fabrication to work on different parts and
        doors.
      </div>

      <div className="calloutBox">
        <strong>
          The fabrication is already built. Now we are telling the software how
          that fabrication should be organized and how it is allowed to move.
        </strong>
      </div>

      <h3>
        The Remaining Library Fab Settings
      </h3>

      <div className="lessonText">
        <p>
          Near the bottom of the Fab Rules Library screen are several settings that
          are easy to overlook.
        </p>

        <p>
          The four settings we are going to focus on are:
        </p>
      </div>

      <div className="settingGrid">
        <div className="settingCard">
          <span>1</span>

          <div>
            <strong>
              Use Y Loc Ref.
            </strong>

            <p>
              Allows the saved preparation to be supplied with a different Y
              location when it is applied.
            </p>
          </div>
        </div>

        <div className="settingCard">
          <span>2</span>

          <div>
            <strong>
              Use X Loc Ref.
            </strong>

            <p>
              Allows the saved preparation to be supplied with a different X
              location when it is applied.
            </p>
          </div>
        </div>

        <div className="settingCard">
          <span>3</span>

          <div>
            <strong>
              Vendor
            </strong>

            <p>
              Organizes the preparation by the hardware manufacturer or vendor
              associated with the prep.
            </p>
          </div>
        </div>

        <div className="settingCard">
          <span>4</span>

          <div>
            <strong>
              Fab Type
            </strong>

            <p>
              Categorizes the preparation so it knows which side of the door to apply to. 
            </p>
          </div>
        </div>
      </div>

      <figure className="lessonFigure largeFigure">
        <img
          src={img.xyLoc}
          alt="Fab Rules Library location reference and organization settings"
        />

        <figcaption>
          These settings control how the saved Library Fab can be positioned
          and how it will be organized when you search for it later.
        </figcaption>
      </figure>

      <h3>
        Use Y Loc Ref.
      </h3>

      <div className="lessonText">
        <p>
          <strong>Use Y Loc Ref.</strong> should be checked when the Library Fab
          needs to be applied at different Y locations. When looking at a door, 
          the y location will move the prep closer or further away from the top of the door. 
          This is beacuse the door will lay down and run through the machine flat making the 
          top and bottom of the door the new Y direction. 
        </p>

        <p>
          Our butt hinge preparation is a perfect example.
        </p>

        <p>
          We built the hinge preparation once around its reference point, but
          the actual hinge may need to be placed at several different locations
          from the finished door or bottom of door. 
        </p>
      </div>

      <div className="exampleBox">
        <p className="sectionLabel">
          Butt Hinge Example
        </p>

        <div className="locationGrid">
          <div>
            <strong>
              8&quot;
            </strong>

            <span>
              First hinge location
            </span>
          </div>

          <div>
            <strong>
              36&quot;
            </strong>

            <span>
              Second hinge location
            </span>
          </div>

          <div>
            <strong>
              58&quot;
            </strong>

            <span>
              Third hinge location
            </span>
          </div>
        </div>

        <p>
          We do not need three separate hinge preparations. The same Library
          Fab can be used three times and supplied with a different location
          each time.
        </p>

        <p>
          Each time the reference location changes, all of the operations
          inside the preparation maintain the relationship we built in the
          previous step.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          For a hinge prep like this, Use Y Loc Ref. is what allows us to move
          the entire saved preparation to a new location.
        </strong>

        <p>
          The prep stays the same. Only its reference location changes.
        </p>
      </div>

      <h3>
        Use X Loc Ref.
      </h3>

      <div className="lessonText">
        <p>
          <strong>Use X Loc Ref.</strong> works on the same general principle,
          but it allows the Library Fab&apos;s X reference location to change
          when the prep is applied.
        </p>

        <p>
          This becomes useful when a preparation may need to be placed at
          different backset locations depending on the part, door style, or
          hardware configuration. (the X loc is rarely used. its a pretty safe bet to leave this unchecked.)
        </p>
      </div>

      <div className="referenceGrid">
        <div className="referenceCard">
          <p className="sectionLabel">
            Use Y Loc Ref.
          </p>

          <strong>
            Allow the Y values to change
          </strong>

          <p>
            Use this when the same preparation needs to be applied at different
            heights.
          </p>

          <span>
            Example: multiple hinge locations
          </span>
        </div>

        <div className="referenceCard">
          <p className="sectionLabel">
            Use X Loc Ref.
          </p>

          <strong>
            Allow the backset to change
          </strong>

          <p>
            Use this when the same preparation needs to be applied at diffrent backsets from the edge of the door. 
          </p>

          <span>
            Example: Nightlatch or lock cylindar (I prefer making a prep for each backset type rather then having to remember to change the X value.)
          </span>
        </div>
      </div>

      <div className="calloutBox">
        <strong>
          You can check both when necessary.
        </strong>

        <p>
          If a Library Fab may need a different X location and a different Y
          location when it is applied, both location reference options can be
          used.
        </p>
      </div>

      <h3>
        Setting the Vendor
      </h3>

      <div className="lessonText">
        <p>
          The <strong>Vendor</strong> setting is primarily used to keep your
          Library Fabs organized.
        </p>

        <p>
          When the prep belongs to a specific hardware manufacturer,
          type in the vendor associated with that hardware.
        </p>

        <p>
         This option is not a drop down menu. you can type whatever you want into this section. 
         I personally like to use this tab as a verified or testing box. that way I know which fabs have been tested and approved and which ones havn&apos;t..
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          Think ahead to the person applying the prep.
        </strong>

        <p>
          A Library Fab may make perfect sense to the person who created it,
          but months later another employee may need to find it. Correctly
          naming the prep and giving it a good description makes that search much easier.
        </p>
      </div>

      <h3>
        Setting the Fab Type
      </h3>

      <div className="lessonText">
        <p>
          <strong>Fab Type</strong> Tells the prep which side of the door to apply the prep on. 
        </p>

        <p>
         For example if you build a push/pull handel you should identify this prep 
         as a lock prep as it goes on the lock side of the door. You can also set the fab type inside the operations tab per each line item. 
        </p>

          </div>

      <div className="calloutBox warningCallout">
        <strong>
          Be consistent when creating Library Fabs.
        </strong>

        <p>
          Vendor and Fab Type are only useful if your company uses them
          consistently. A well-organized library becomes much easier to search
          as more hardware preparations are added over time.
        </p>
      </div>

      <h3>
        Why These Settings Matter Later
      </h3>

      <div className="lessonText">
        <p>
          Later, when you add Library Fabs to an actual door, the list may
          contain many different preparations.
        </p>

        <p>
          Vendor and Fab Type can be used to narrow that list, while the X and Y
          location references determine whether the selected preparation can be
          moved to the required location.
        </p>
      </div>

      <div className="settingPurposeGrid">
        <div>
          <p className="sectionLabel">
            Find It
          </p>

          <strong>
            Vendor
          </strong>

          <p>
            Narrow the list by hardware manufacturer or vendor.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Categorize It
          </p>

          <strong>
            Fab Type
          </strong>

          <p>
            Narrow the list by the type of fabrication.
          </p>
        </div>

        <div>
          <p className="sectionLabel">
            Position It
          </p>

          <strong>
            X / Y Loc Ref.
          </strong>

          <p>
            Allow the selected preparation to be positioned where it is needed.
          </p>
        </div>
      </div>

      <h3>
        Using Formulas
      </h3>

      <div className="lessonText">
        <p>
          Location references are useful when you want to supply a different
          location later.
        </p>

        <p>
          <strong>Formulas</strong> solve a different problem.
        </p>

        <p>
          A formula allows a Library Fab to calculate a value from information
          already available in the software instead of relying only on one
          fixed number.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.formula}
          alt="Library Fabrication formula reference"
        />

        <figcaption>
          Formula references allow fabrication values to react to information
          from the part instead of requiring one fixed dimension.
        </figcaption>
      </figure>

      <h3>
        Using FW and FD
      </h3>

      <div className="lessonText">
        <p>
          One useful formula reference is <strong>FW</strong> and <strong>FD</strong>.
        </p>

        <p>
          FW stand for Framing Width and FW stands Framing Depth. 
        </p>

        <p>
          When building a library prep for door frame you can use formulas like FW or FD rather then typing in the part height or depth. 
          This is usefull when you build a prep that applies to both 1.75" and 2" framing material. Rather then building a prep
          for both of the diffrent sizes you could simply make the Z location say FW and the prep will recognize the part parameters and auto adjust 
          to the diffrent part sizes. 
        </p>
      </div>

      <h3>
        Door Formula References
      </h3>

      <div className="lessonText">
        <p>
          Door preparations can also use formula references tied to dimensions
          from the door or opening.
        </p>

        <p>
          These references become useful when a preparation needs to react to
          information such as door width, door height, finished floor, or other
          door-opening dimensions.
        </p>
      </div>

      <figure className="lessonFigure">
        <img
          src={img.formulaDoors}
          alt="Door formula references for Library Fabrications"
        />

        <figcaption>
          Door formula references provide dimensions that can be used when a
          hardware prep needs to react to the size or configuration of a door.
        </figcaption>
      </figure>

      <div className="stackedFigures">
        <figure className="lessonFigure">
          <img
            src={img.assembled}
            alt="Assembled door leaf formula reference"
          />

          <figcaption>
            The assembled door reference shows dimensions as they relate to the
            completed entrance.
          </figcaption>
        </figure>

        <figure className="lessonFigure">
          <img
            src={img.exploded}
            alt="Exploded door leaf formula reference"
          />

          <figcaption>
            The exploded door reference provides additional dimensions that may
            be available when building door-related formulas.
          </figcaption>
        </figure>
      </div>

      <div className="calloutBox warningCallout">
        <strong>
         Do not worry about how to apply or use these formulas right now. 
        </strong>

        <p>
          I simply want you to see that they exist and understand that there are huundreds of diffrent ways to build preps and make them fit your needs. 
        </p>
      </div>

      <h3>
        Step 3 Review
      </h3>


      <div className="calloutBox">
        <strong>
          Your Library Fab now has both machining information and behavior.
        </strong>

        <p>
          The operations define what gets fabricated. Vendor and Fab Type make
          the prep easy to find. Location references and formulas determine how
          the prep can adapt when it is used.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-18-create-library-fab"
          className="secondary"
        >
          ← Previous: Creating a Library Fab
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-18-build-hardware-prep"
          className="primary"
        >
          Next: Build a Hardware Prep →
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

        .largeFigure img {
          max-width: 1000px;
        }

        .settingGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 32px;
        }

        .settingCard {
          display: flex;
          gap: 14px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .settingCard > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: #f59e0b;
          font-weight: 900;
        }

        .settingCard strong {
          color: #ffffff;
        }

        .settingCard p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .exampleBox {
          margin: 24px 0 32px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .exampleBox > p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
        }

        .locationGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 18px 0;
        }

        .locationGrid > div {
          display: grid;
          gap: 5px;
          padding: 16px;
          text-align: center;
          border-radius: 14px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .locationGrid strong {
          color: #f59e0b;
          font-size: 20px;
        }

        .locationGrid span {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
        }

        .referenceGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 24px 0 32px;
        }

        .referenceCard {
          padding: 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(245, 158, 11, 0.18);
        }

        .referenceCard > strong {
          display: block;
          margin-top: 10px;
          color: #ffffff;
          font-size: 18px;
        }

        .referenceCard > p:not(.sectionLabel) {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .referenceCard > span {
          display: inline-block;
          margin-top: 4px;
          color: #f59e0b;
          font-size: 14px;
          font-weight: 800;
        }

        .organizationFlow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 12px;
          margin: 24px 0 32px;
        }

        .organizationFlow > div:not(.flowArrow) {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .organizationFlow > div:not(.flowArrow) > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          margin-bottom: 12px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.14);
          color: #f59e0b;
          font-weight: 900;
        }

        .organizationFlow strong {
          color: #ffffff;
        }

        .organizationFlow p {
          margin: 7px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .flowArrow {
          align-self: center;
          color: #f59e0b;
          font-size: 26px;
          font-weight: 900;
        }

        .twoColumnGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .twoColumnGrid > div {
          padding: 20px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .twoColumnGrid strong {
          display: block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-size: 18px;
        }

        .twoColumnGrid p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .twoColumnGrid span {
          display: block;
          color: rgba(255, 255, 255, 0.52);
          font-size: 13px;
          font-weight: 800;
        }

        .settingPurposeGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .settingPurposeGrid > div {
          padding: 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .settingPurposeGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .settingPurposeGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.55;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .comparisonGrid > div {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comparisonGrid strong {
          display: block;
          margin: 8px 0;
          color: #ffffff;
        }

        .comparisonGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .stackedFigures {
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin: 26px 0 34px;
        }

        .stackedFigures .lessonFigure {
          margin: 0;
        }

        .reviewGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 22px 0 32px;
        }

        .reviewGrid > div {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reviewGrid > div > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
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
          margin: 6px 0 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .warningCallout {
          border-color: rgba(245, 158, 11, 0.35);
          background: rgba(245, 158, 11, 0.08);
        }

        @media (max-width: 850px) {
          .organizationFlow {
            grid-template-columns: 1fr;
          }

          .flowArrow {
            text-align: center;
            transform: rotate(90deg);
          }

          .settingPurposeGrid,
          .comparisonGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .settingGrid,
          .referenceGrid,
          .twoColumnGrid,
          .reviewGrid {
            grid-template-columns: 1fr;
          }

          .locationGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}