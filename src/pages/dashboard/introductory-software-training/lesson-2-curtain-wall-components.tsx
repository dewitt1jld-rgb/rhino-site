import Link from "next/link";
import AcademyLessonLayout from "./AcademyLessonLayout";

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

export default function CurtainWallComponentsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="02"
      lessonTitle="Storefront vs. Curtain Wall"
      lessonDescription="Learn the basic differences between storefront and curtain wall systems and recognize how each system is commonly assembled."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>
      <h2>Curtain Wall Components</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Recognize shear blocks, curtain wall mullions,
        pressure plates, gaskets, and face caps.
      </div>

      <h3>Shear Blocks</h3>

      <div className="lessonText">
        <p>
          Another common method of connecting framing members is the{" "}
          <strong>shear-block system</strong>. This method is commonly found in
          curtain wall systems and adds a separate connection component between
          the vertical and horizontal members.
        </p>

        <p>
          The shear block is attached to the main vertical member. The
          horizontal member then fits over or around the shear block and is
          secured in place.
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
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/shearblock_alone.png"
          alt="Individual aluminum shear block"
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
          An individual shear block used to connect framing members.
        </figcaption>
      </figure>

      <h3>How Shear-Block Systems Fit Together</h3>

      <div className="lessonText">
        <p>
          These images show how a complete shear-block curtain wall assembly
          fits together. The system contains several individual components
          rather than relying only on screws driven directly into the ends of
          the horizontal members.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <figure
          style={{
            flex: "1 1 440px",
            maxWidth: "520px",
            minWidth: "320px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/shearblock_labeled.png"
            alt="Labeled shear-block curtain wall assembly"
            loading="lazy"
            style={{
              width: "100%",
              height: "320px",
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
            Labeled shear-block assembly.
          </figcaption>
        </figure>

        <figure
          style={{
            flex: "1 1 300px",
            maxWidth: "420px",
            minWidth: "280px",
            margin: 0,
            textAlign: "center",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/curtain_wall_exploded.png"
            alt="Exploded curtain wall assembly"
            loading="lazy"
            style={{
              width: "100%",
              height: "240px",
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
            Exploded curtain wall assembly.
          </figcaption>
        </figure>
      </div>

      <h3>The Main Mullion</h3>

      <div className="lessonText">
        <p>
          This profile is an example of a curtain wall{" "}
          <strong>main member</strong>, often called a{" "}
          <strong>mullion</strong>.
        </p>

        <p>
          It forms the primary structural portion of the curtain wall. Shear
          blocks, horizontal members, pressure plates, gaskets, and face caps
          are connected to or supported by this member.
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
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/curtain_wall_mullion.png"
          alt="Curtain wall mullion profile"
          loading="lazy"
          style={{
            width: "100%",
            height: "240px",
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
          A primary curtain wall mullion.
        </figcaption>
      </figure>

      <h3>Pressure Plates and Gaskets</h3>

      <div className="lessonText">
        <p>
          After the main curtain wall frame and glass have been installed, a{" "}
          <strong>pressure plate</strong> is fastened to the nose of the main
          framing member.
        </p>

        <p>
          The pressure plate applies controlled pressure against the glass and
          holds it securely within the framing system.
        </p>
      </div>

      <div className="calloutBox">
        <strong>Glass should not be pinched directly between metal.</strong>
        <p>
          A compatible glazing gasket should separate the glass from the metal
          components. Gasket types and applications vary by manufacturer and
          system.
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
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/perimeter_pressure_plate.png"
            alt="Perimeter curtain wall pressure plate"
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
            Perimeter pressure plate with a taller exterior leg.
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
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pressure_plate.png"
            alt="Standard curtain wall pressure plate"
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
            Standard pressure plate used on interior vertical and horizontal
            members.
          </figcaption>
        </figure>
      </div>

      <h3>Face Caps or Beauty Caps</h3>

      <div className="lessonText">
        <p>
          After the glass and pressure plates have been installed, an exterior
          cap is snapped over the pressure plate.
        </p>

        <p>
          This component hides the screws, pressure plate, and gaskets,
          creating a cleaner finished appearance. It is commonly called a{" "}
          <strong>face cap</strong> or <strong>beauty cap</strong>.
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
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/face_cap.png"
          alt="Curtain wall face cap profile"
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
          A curtain wall face cap used to cover the pressure plate.
        </figcaption>
      </figure>

      <h3>Learning from the System Vendor</h3>

      <div className="lessonText">
        <p>
          Metal manufacturers in the glass industry can be compared to vehicle
          manufacturers. Common commercial glazing manufacturers include
          Kawneer, Tubelite, EFCO, YKK AP, Oldcastle, and U.S. Aluminum.
        </p>

        <p>
          Most major vendors publish fabrication and installation instructions
          for each system they sell. Some documents may require a company
          account or login, so check with your employer before attempting to
          access restricted documents.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Optional Reference Material</p>
        <h3 style={{ marginTop: 0 }}>Kawneer 451 / 451T Component Details</h3>
        <p className="bodyText">
          Review this PDF for additional examples of common storefront
          components and how they fit together.
        </p>

        <a
          href="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/install%20instructions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="primary"
          style={{ display: "inline-block", marginTop: "12px" }}
        >
          Open Reference PDF →
        </a>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Lesson 02 Review</p>
        <div className="takeawayGrid">
          <div>
            <strong>Shear Blocks</strong>
            Connect horizontal curtain wall members to the primary mullions.
          </div>
          <div>
            <strong>Pressure Plates</strong>
            Hold the glass against the main framing system.
          </div>
          <div>
            <strong>Gaskets</strong>
            Separate the glass from metal and help seal the system.
          </div>
          <div>
            <strong>Face Caps</strong>
            Conceal the pressure plates, screws, and gaskets.
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-2-storefront-components"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-3-estimate-to-install"
          className="primary"
        >
          Continue to Lesson 3 →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
