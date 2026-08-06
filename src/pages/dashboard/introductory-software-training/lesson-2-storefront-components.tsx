import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Comparing the Systems",
    href: "/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall",
  },
  {
    number: 2,
    title: "Storefront Components",
    href: "/dashboard/introductory-software-training/lesson-2-storefront-components",
  },
  {
    number: 3,
    title: "Curtain Wall Components",
    href: "/dashboard/introductory-software-training/lesson-2-curtain-wall-components",
  },
];

export default function StorefrontComponentsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="02"
      lessonTitle="Storefront vs. Curtain Wall"
      lessonDescription="Learn the basic differences between storefront and curtain wall systems and recognize how each system is commonly assembled."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Storefront Components</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Recognize screw-spline members, common storefront
        profiles, glass stops, and pocket fillers.
      </div>

      <h3>Recognizing Screw-Spline Members</h3>

      <div className="lessonText">
        <p>
          Screw-spline construction is commonly found in storefront systems.
          One of the easiest ways to recognize it is by looking for the{" "}
          <strong>screw races</strong> formed into the aluminum.
        </p>

        <p>
          Screw-spline sill, horizontal, and head members contain internal
          races that allow screws to pass through the vertical member and
          fasten directly into the end of the horizontal member.
        </p>

        <p>
          Hole patterns may vary depending on the framing profile, but the
          basic shape and assembly method remain similar.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <figure
          style={{
            flex: "1 1 360px",
            maxWidth: "470px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/screwspline_holes.png"
            alt="Screw-spline holes and internal screw races in storefront aluminum"
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "330px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Screw-spline holes used to fasten horizontal members to vertical
            members.
          </figcaption>
        </figure>

        <figure
          style={{
            flex: "1 1 360px",
            maxWidth: "470px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/screwspline_together.png"
            alt="Storefront screw-spline framing members assembled together"
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "330px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Screw-spline storefront members assembled together.
          </figcaption>
        </figure>
      </div>

      <h3>Examples of Common Storefront Members</h3>

      <div className="lessonText">
        <p>
          These are examples of primary storefront framing members. The exact
          shapes, dimensions, screw races, and glass pockets vary between
          manufacturers and metal systems.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <figure
          style={{
            flex: "1 1 320px",
            maxWidth: "420px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_1.png"
            alt="Example of a storefront aluminum framing profile"
            loading="lazy"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Example of a primary storefront framing member.
          </figcaption>
        </figure>

        <figure
          style={{
            flex: "1 1 320px",
            maxWidth: "420px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_2.png"
            alt="Second example of a storefront aluminum framing profile"
            loading="lazy"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Another example of a storefront framing profile.
          </figcaption>
        </figure>
      </div>

      <h3>Glass Stops</h3>

      <div className="lessonText">
        <p>
          A <strong>glass stop</strong> snaps into the framing member in front
          of the glass and helps prevent the glass from moving out of the
          frame.
        </p>

        <p>
          Glass stops are typically removable so that the glass can be
          installed, replaced, or serviced after the main frame has been
          assembled.
        </p>
      </div>

      <figure
        style={{
          maxWidth: "420px",
          margin: "30px auto 0",
          textAlign: "center",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/glass_stop.png"
          alt="Storefront glass stop profile"
          loading="lazy"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "contain",
            background: "#ffffff",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.1)",
          }}
        />
        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          A removable glass stop used to retain glass inside the frame.
        </figcaption>
      </figure>

      <h3>Pocket Fillers</h3>

      <div className="lessonText">
        <p>
          Some aluminum members contain an open pocket on one side. This pocket
          allows different components to be snapped into the framing member
          depending on how that member is being used.
        </p>

        <p>
          A flat pocket filler may be used at a jamb to close the unused
          pocket. A pocket filler containing a glass channel may be used at an
          intermediate vertical where glass is installed on both sides.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <figure
          style={{
            flex: "1 1 300px",
            maxWidth: "400px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pocket_filler_with_glass_stop.png"
            alt="Pocket filler containing a glass channel and glass stop"
            loading="lazy"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Pocket filler with an integrated glass channel.
          </figcaption>
        </figure>

        <figure
          style={{
            flex: "1 1 300px",
            maxWidth: "400px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pocket_filler.png"
            alt="Flat storefront pocket filler"
            loading="lazy"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          />
          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Flat pocket filler used to close an unused framing pocket.
          </figcaption>
        </figure>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-2-curtain-wall-components"
          className="primary"
        >
          Next: Curtain Wall Components →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
