import Link from "next/link";

type ImageSectionProps = {
  label?: string;
  title: string;
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  secondImageUrl?: string;
  secondImageAlt?: string;
  secondCaption?: string;
};

function ImageSection({
  label = "System Component",
  title,
  children,
  imageUrl,
  imageAlt,
  caption,
  secondImageUrl,
  secondImageAlt,
  secondCaption,
}: ImageSectionProps) {
  return (
    <section className="lessonSection">
      <div className="sectionHeading">
        <p className="sectionLabel">{label}</p>
        <h2>{title}</h2>
      </div>

      <div className="lessonText">{children}</div>

      {secondImageUrl ? (
        <div className="twoImageGrid">
          <figure className="gridMedia">
            <img src={imageUrl} alt={imageAlt} loading="lazy" />
            {caption && <figcaption>{caption}</figcaption>}
          </figure>

          <figure className="gridMedia">
            <img
              src={secondImageUrl}
              alt={secondImageAlt || ""}
              loading="lazy"
            />
            {secondCaption && <figcaption>{secondCaption}</figcaption>}
          </figure>
        </div>
      ) : (
        <figure className="fullWidthMedia">
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )}
    </section>
  );
}

export default function StorefrontCurtainWallLessonPage() {
  return (
    <main className="page">
      <article className="lesson">
        <nav className="lessonNavigation" aria-label="Lesson navigation">
          <Link
            href="/dashboard/introductory-software-training"
            className="backLink"
          >
            ← Back to Course Curriculum
          </Link>

          <div className="lessonLocation">
            Module 01 <span>/</span> Lesson 02
          </div>
        </nav>

        <header className="hero">
          <p className="eyebrow">Glass Industry Fundamentals</p>

          <h1>Storefront vs. Curtain Wall</h1>

          <p className="lead">
            Learn the basic differences between storefront and curtain wall
            systems, recognize their primary components, and understand how
            each system is commonly assembled.
          </p>

          <div className="lessonStats">
            <span>Module 01</span>
            <span>Lesson 02</span>
            <span>Beginner Friendly</span>
            <span>System Fundamentals</span>
          </div>
        </header>

        <section className="learningObjectives">
          <div className="objectiveIcon">02</div>

          <div>
            <p className="sectionLabel">Learning Objectives</p>
            <h2>What you will learn</h2>

            <ul>
              <li>
                Understand the basic difference between storefront and curtain
                wall systems.
              </li>
              <li>
                Recognize screw-spline and shear-block assembly methods.
              </li>
              <li>
                Identify common storefront components such as glass stops and
                pocket fillers.
              </li>
              <li>
                Identify common curtain wall components such as mullions,
                pressure plates, gaskets, and face caps.
              </li>
              <li>
                Understand where to locate manufacturer installation
                instructions for additional system-specific training.
              </li>
            </ul>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">System Overview</p>
            <h2>The basic difference</h2>
          </div>

          <div className="lessonText">
            <p>
              <strong>Storefront systems</strong> are typically used on the
              lower levels of commercial buildings, especially around
              entrances, offices, schools, and retail spaces. They are generally
              shallower, less expensive, and designed for smaller openings.
              Storefront framing is normally installed between floors and is
              not intended to span multiple stories.
            </p>

            <p>
              <strong>Curtain wall systems</strong> are designed for larger and
              taller exterior walls. They can span multiple floors and are
              generally deeper, stronger, and better equipped to handle wind
              pressure, building movement, and water drainage. Curtain wall
              systems commonly manage water through internal channels that
              direct it back to the exterior.
            </p>
          </div>

          <div className="memoryCallout">
            <p className="sectionLabel">An Easy Way to Remember</p>
            <blockquote>
              Storefront fills an opening. Curtain wall covers a building.
            </blockquote>
          </div>

          <div className="comparisonGrid">
            <div className="comparisonCard">
              <span>Storefront</span>
              <h3>Smaller, lower-level openings</h3>
              <ul>
                <li>Common around entrances and retail spaces</li>
                <li>Usually installed between floors</li>
                <li>Typically shallower framing</li>
                <li>Commonly uses screw-spline assembly</li>
                <li>Usually more economical</li>
              </ul>
            </div>

            <div className="comparisonCard">
              <span>Curtain Wall</span>
              <h3>Larger, multi-story façades</h3>
              <ul>
                <li>Common on large exterior glass walls</li>
                <li>May span multiple floors</li>
                <li>Typically deeper and stronger</li>
                <li>Commonly uses shear-block assembly</li>
                <li>Designed for greater structural performance</li>
              </ul>
            </div>
          </div>

          <div className="lessonText topSpacing">
            <p>
              Although the components and assembly methods differ, both systems
              provide structure for the glass, manage water, and must be
              installed according to very specific manufacturer instructions.
            </p>

            <p>
              Both systems are designed so that water can move through the
              framing and weep back outside without entering the building.
            </p>
          </div>
        </section>

        <ImageSection
          label="Storefront Assembly"
          title="Screw-Spline vs. Shear-Block Construction"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_screwspline_vs_sheerblock.png"
          imageAlt="Comparison of storefront screw-spline and shear-block assembly methods"
          caption="A comparison of screw-spline and shear-block frame assembly."
        >
          <p>
            This image shows how storefront framing components fit together. It
            also compares a <strong>screw-spline configuration</strong> with a{" "}
            <strong>shear-block configuration</strong>.
          </p>

          <p>
            Storefront material commonly uses screw-spline construction, while
            curtain wall systems commonly use shear blocks. These are not
            universal rules, but they are useful general guidelines when first
            learning to recognize the systems.
          </p>
        </ImageSection>

<section className="lessonSection">
  <div className="sectionHeading">
    <p className="sectionLabel">Storefront Assembly</p>
    <h2>Recognizing Screw-Spline Members</h2>
  </div>

  <div className="lessonText">
    <p>
      Screw-spline construction is commonly found in storefront systems. One
      of the easiest ways to recognize it is by looking for the{" "}
      <strong>screw races</strong> formed into the aluminum.
    </p>

    <p>
      Screw-spline sill, horizontal, and head members contain internal races
      that allow screws to pass through the vertical member and fasten directly
      into the end of the horizontal member.
    </p>

    <p>
      Hole patterns may vary depending on the framing profile, but the basic
      shape and assembly method remain similar.
    </p>
  </div>

  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      gap: "20px",
      width: "100%",
      marginTop: "28px",
    }}
  >
    <figure
      style={{
        flex: "1 1 0",
        width: "50%",
        minWidth: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 18px 44px rgba(0, 0, 0, 0.34)",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/screwspline_holes.png"
          alt="Screw-spline holes and internal screw races in storefront aluminum"
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <figcaption
        style={{
          marginTop: "11px",
          color: "rgba(255, 255, 255, 0.48)",
          fontSize: "0.88rem",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        Screw-spline holes used to fasten horizontal members to vertical
        members.
      </figcaption>
    </figure>

    <figure
      style={{
        flex: "1 1 0",
        width: "50%",
        minWidth: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 18px 44px rgba(0, 0, 0, 0.34)",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/screwspline_together.png"
          alt="Storefront screw-spline framing members assembled together"
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <figcaption
        style={{
          marginTop: "11px",
          color: "rgba(255, 255, 255, 0.48)",
          fontSize: "0.88rem",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        Screw-spline storefront members assembled together.
      </figcaption>
    </figure>
  </div>
</section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Storefront Profiles</p>
            <h2>Examples of common storefront members</h2>
          </div>

          <div className="lessonText">
            <p>
              The following images show several common storefront framing
              profiles. These would generally be considered primary framing
              members because they create the main structure of the frame.
            </p>

            <p>
              The exact shapes, dimensions, screw races, and glass pockets vary
              between manufacturers and metal systems.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_1.png"
              alt="Example of a storefront aluminum framing profile"
              loading="lazy"
            />
            <figcaption>
              Example of a primary storefront framing member.
            </figcaption>
          </figure>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/storefront_2.png"
              alt="Second example of a storefront aluminum framing profile"
              loading="lazy"
            />
            <figcaption>
              Another example of a storefront framing profile.
            </figcaption>
          </figure>
        </section>

        <ImageSection
          label="Storefront Component"
          title="Glass Stops"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/glass_stop.png"
          imageAlt="Storefront glass stop profile"
          caption="A removable glass stop used to retain glass inside the frame."
        >
          <p>
            This component is called a <strong>glass stop</strong>. The name is
            very literal: it snaps into the framing member in front of the glass
            and helps prevent the glass from moving out of the frame.
          </p>

          <p>
            Glass stops are typically removable so that the glass can be
            installed, replaced, or serviced after the main frame has been
            assembled.
          </p>
        </ImageSection>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Storefront Components</p>
            <h2>Pocket Fillers</h2>
          </div>

          <div className="lessonText">
            <p>
              Some aluminum members contain an open pocket on one side. This
              pocket allows different components to be snapped into the
              framing member depending on how that member is being used.
            </p>

            <p>
              These components are called <strong>pocket fillers</strong>. A
              flat pocket filler may be used at a left or right jamb to close
              the unused pocket. A pocket filler containing a glass channel may
              be used at an intermediate vertical where glass is installed on
              both sides.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pocket_filler_with_glass_stop.png"
              alt="Pocket filler containing a glass channel and glass stop"
              loading="lazy"
            />
            <figcaption>
              A pocket filler configured to receive glass.
            </figcaption>
          </figure>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pocket_filler.png"
              alt="Flat storefront pocket filler"
              loading="lazy"
            />
            <figcaption>
              A flat pocket filler used to close an unused framing pocket.
            </figcaption>
          </figure>
        </section>

        <ImageSection
          label="Curtain Wall Assembly"
          title="Shear Blocks"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/shearblock_alone.png"
          imageAlt="Individual aluminum shear block"
          caption="An individual shear block used to connect framing members."
        >
          <p>
            Another common method of connecting framing members is the{" "}
            <strong>shear-block system</strong>. This method is commonly found
            in curtain wall systems and adds a separate connection component
            between the vertical and horizontal members.
          </p>

          <p>
            The shear block is attached to the main vertical member. The
            horizontal member then fits over or around the shear block and is
            secured in place.
          </p>
        </ImageSection>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Curtain Wall Assembly</p>
            <h2>How shear-block systems fit together</h2>
          </div>

          <div className="lessonText">
            <p>
              The following images show how a complete shear-block curtain wall
              assembly fits together. Notice that the system contains several
              individual components rather than relying only on screws driven
              directly into the ends of the horizontal members.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/shearblock_labeled.png"
              alt="Labeled shear-block curtain wall assembly"
              loading="lazy"
            />
            <figcaption>
              A labeled shear-block assembly showing the relationship between
              the main framing members.
            </figcaption>
          </figure>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/curtain_wall_exploded.png"
              alt="Exploded view of a curtain wall system"
              loading="lazy"
            />
            <figcaption>
              An exploded view showing multiple curtain wall components.
            </figcaption>
          </figure>
        </section>

        <ImageSection
          label="Curtain Wall Component"
          title="The Main Mullion"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/curtain_wall_mullion.png"
          imageAlt="Curtain wall mullion profile"
          caption="A primary curtain wall mullion."
        >
          <p>
            This profile is an example of a curtain wall{" "}
            <strong>main member</strong>, often called a{" "}
            <strong>mullion</strong>.
          </p>

          <p>
            It is considered a main member because it forms the primary
            structural portion of the curtain wall. Shear blocks, horizontal
            members, pressure plates, gaskets, and face caps are connected to
            or supported by this member.
          </p>
        </ImageSection>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Curtain Wall Components</p>
            <h2>Pressure Plates</h2>
          </div>

          <div className="lessonText">
            <p>
              After the main curtain wall frame and glass have been installed,
              a component called a <strong>pressure plate</strong> is fastened
              to the nose of the main framing member.
            </p>

            <p>
              The primary purpose of the pressure plate is to apply controlled
              pressure against the glass and hold it securely within the
              framing system.
            </p>

            <p>
              Notice that gaskets, sometimes described informally as pieces of
              rubber, are installed between the metal components and the glass.
              These gaskets help protect the glass and create the required seal.
            </p>
          </div>

          <div className="warningCallout">
            <strong>Glass should not be pinched directly between metal.</strong>
            <p>
              A compatible glazing gasket should separate the glass from the
              metal components. Gasket types and applications vary by
              manufacturer and system.
            </p>
          </div>

          <div className="lessonText topSpacing">
            <p>
              The first image below shows a{" "}
              <strong>perimeter pressure plate</strong>. It contains a taller
              exterior leg and may be used around the exterior limits of the
              frame.
            </p>

            <p>
              The second image shows a standard pressure plate, which may be
              used on interior vertical and horizontal framing members.
            </p>

            <p>
              This course will not cover every gasket type. There are hundreds
              of gasket profiles, and each manufacturer may use different
              applications. For now, understand that the gasket protects the
              glass and helps seal the system.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/perimeter_pressure_plate.png"
              alt="Perimeter curtain wall pressure plate"
              loading="lazy"
            />
            <figcaption>
              A perimeter pressure plate with a taller exterior leg.
            </figcaption>
          </figure>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/pressure_plate.png"
              alt="Standard curtain wall pressure plate"
              loading="lazy"
            />
            <figcaption>
              A standard pressure plate used on curtain wall verticals and
              horizontals.
            </figcaption>
          </figure>
        </section>

        <ImageSection
          label="Curtain Wall Component"
          title="Face Caps or Beauty Caps"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/face_cap.png"
          imageAlt="Curtain wall face cap profile"
          caption="A curtain wall face cap used to cover the pressure plate."
        >
          <p>
            After the glass and pressure plates have been installed, an
            exterior cap is snapped over the pressure plate.
          </p>

          <p>
            This component hides the screws, pressure plate, and gaskets,
            creating a cleaner finished appearance. It is commonly called a{" "}
            <strong>face cap</strong> or <strong>beauty cap</strong>.
          </p>
        </ImageSection>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Scope of This Lesson</p>
            <h2>Understanding the parts, not mastering installation</h2>
          </div>

          <div className="lessonText">
            <p>
              This is about as far as this introductory lesson will go into the
              physical assembly of storefront and curtain wall systems.
            </p>

            <p>
              The objective is for you to recognize the relevant components and
              develop a general understanding of how each framing system fits
              together.
            </p>

            <p>
              Fabrication and assembly procedures can vary significantly from
              one shop to another. More importantly, installation requirements
              vary by manufacturer and by the specific framing system being
              used.
            </p>

            <p>
              Always follow the manufacturer&apos;s current installation
              instructions for the exact system being fabricated or installed.
            </p>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Metal Manufacturers</p>
            <h2>Learning from the system vendor</h2>
          </div>

          <div className="lessonText">
            <p>
              Metal manufacturers in the glass industry can be compared to
              vehicle manufacturers. The automotive industry has major brands
              such as Chevrolet, GMC, and Ford. The commercial glazing industry
              also has several major aluminum framing manufacturers.
            </p>

            <p>Common manufacturers include:</p>
          </div>

          <div className="vendorGrid">
            <div>Kawneer</div>
            <div>Tubelite</div>
            <div>EFCO</div>
            <div>YKK AP</div>
            <div>Oldcastle</div>
            <div>U.S. Aluminum</div>
          </div>

          <div className="lessonText">
            <p>
              Other manufacturers and regional suppliers are also available.
              Most major vendors publish fabrication and installation
              instructions for each system they sell.
            </p>

            <p>
              Some documents may require a company account or login. Check with
              your employer before creating an account or attempting to access
              restricted manufacturer documents.
            </p>
          </div>
        </section>

        <section className="downloadPanel">
          <div className="downloadIcon">PDF</div>

          <div className="downloadContent">
            <p className="sectionLabel">Optional Reference Material</p>
            <h2>Kawneer 451 / 451T Installation Details</h2>
            <p>
              Review this reference PDF for additional examples of common
              storefront components and how they fit together.
            </p>
          </div>

          <a
            href="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_2/install%20instructions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="downloadButton"
          >
            Open Reference PDF →
          </a>
        </section>

        <section className="keyTakeaways">
          <p className="sectionLabel">Lesson Review</p>
          <h2>Key takeaways</h2>

          <div className="takeawayGrid">
            <div>
              <strong>Storefront</strong>
              <p>
                Storefront usually fills smaller openings at lower levels of a
                building.
              </p>
            </div>

            <div>
              <strong>Curtain Wall</strong>
              <p>
                Curtain wall is designed for larger façades and may span
                multiple floors.
              </p>
            </div>

            <div>
              <strong>Screw-Spline</strong>
              <p>
                Screw-spline members use internal screw races to connect
                horizontal members to verticals.
              </p>
            </div>

            <div>
              <strong>Shear Blocks</strong>
              <p>
                Shear blocks are separate connection components commonly used
                in curtain wall construction.
              </p>
            </div>

            <div>
              <strong>Pressure Plates</strong>
              <p>
                Pressure plates hold curtain wall glass against the main
                framing members.
              </p>
            </div>

            <div>
              <strong>Face Caps</strong>
              <p>
                Face caps conceal pressure plates, screws, and gaskets after
                glazing is complete.
              </p>
            </div>
          </div>
        </section>

        <section className="completionPanel">
          <div>
            <p className="sectionLabel">Lesson 02 Complete</p>
            <h2>You now know the basic system differences</h2>
            <p>
              Review the component names and assembly methods before
              continuing. You do not need to memorize every profile, but you
              should be able to recognize the basic parts of storefront and
              curtain wall systems.
            </p>
          </div>

          <div className="completionActions">
            <Link
              href="/dashboard/introductory-software-training/lesson-1-glazing-basics"
              className="secondaryButton"
            >
              ← Previous Lesson
            </Link>

            <Link
              href="/dashboard/introductory-software-training"
              className="primaryButton"
            >
              Return to Curriculum
            </Link>
          </div>
        </section>
      </article>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 48px 24px 80px;
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.09),
              transparent 28%
            ),
            linear-gradient(135deg, #05070b 0%, #0d1118 48%, #05070b 100%);
          color: #ffffff;
        }

        .lesson {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        .lessonNavigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 34px;
        }

        .backLink {
          color: #f59e0b;
          font-weight: 900;
          text-decoration: none;
        }

        .backLink:hover {
          color: #fbbf24;
        }

        .lessonLocation {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .lessonLocation span {
          margin: 0 7px;
          color: #f59e0b;
        }

        .hero {
          margin-bottom: 34px;
          padding: 42px;
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 28px;
          background:
            linear-gradient(
              120deg,
              rgba(245, 158, 11, 0.12),
              rgba(15, 23, 42, 0.82) 38%
            );
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .eyebrow,
        .sectionLabel {
          margin: 0;
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .eyebrow {
          margin-bottom: 12px;
          font-size: 0.86rem;
        }

        .sectionLabel {
          margin-bottom: 8px;
          font-size: 0.76rem;
        }

        .hero h1 {
          max-width: 850px;
          margin: 0 0 18px;
          font-size: clamp(38px, 6vw, 58px);
          line-height: 1.03;
        }

        .lead {
          max-width: 850px;
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: 19px;
          line-height: 1.75;
        }

        .lessonStats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }

        .lessonStats span {
          padding: 9px 13px;
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          font-size: 0.84rem;
          font-weight: 850;
        }

        .learningObjectives {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 24px;
          align-items: flex-start;
          margin-bottom: 34px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.78);
        }

        .objectiveIcon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          background: #f59e0b;
          color: #111827;
          font-size: 19px;
          font-weight: 950;
        }

        .learningObjectives h2,
        .sectionHeading h2,
        .keyTakeaways h2,
        .completionPanel h2,
        .downloadPanel h2 {
          margin: 0;
          color: #ffffff;
        }

        .twoImageGrid {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 20px;
  align-items: start;
  margin-top: 28px;
}

.gridMedia {
  width: 100%;
  min-width: 0;
  margin: 0;
}

.gridMedia img {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.34);
}

.gridMedia figcaption {
  margin-top: 11px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.88rem;
  line-height: 1.5;
  text-align: center;
}

.twoImageGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;
  margin-top: 28px;
}

.gridMedia {
  width: 100%;
  min-width: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.gridMedia img {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.34);
}

.gridMedia figcaption {
  margin-top: 11px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.88rem;
  line-height: 1.5;
  text-align: center;
}

        .learningObjectives h2 {
          margin-bottom: 15px;
          font-size: 27px;
        }

        .learningObjectives ul {
          margin: 0;
          padding-left: 21px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.75;
        }

        .learningObjectives li + li {
          margin-top: 7px;
        }

        .lessonSection {
          margin: 34px 0;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          background: rgba(15, 23, 42, 0.68);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
        }

        .sectionHeading {
          margin-bottom: 18px;
        }

        .sectionHeading h2 {
          font-size: clamp(27px, 4vw, 36px);
          line-height: 1.18;
        }

        .lessonText {
          color: rgba(255, 255, 255, 0.74);
          font-size: 17px;
          line-height: 1.82;
        }

        .lessonText p {
          margin: 0;
        }

        .lessonText p + p {
          margin-top: 17px;
        }

        .lessonText strong {
          color: #ffffff;
        }

        .topSpacing {
          margin-top: 25px;
        }

        .memoryCallout {
          margin: 27px 0;
          padding: 26px;
          border: 1px solid rgba(245, 158, 11, 0.24);
          border-radius: 20px;
          background: rgba(245, 158, 11, 0.08);
        }

        blockquote {
          margin: 10px 0 0;
          color: #ffffff;
          font-size: clamp(23px, 4vw, 35px);
          font-weight: 900;
          line-height: 1.35;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 26px;
        }

        .comparisonCard {
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 19px;
          background: rgba(5, 7, 11, 0.35);
        }

        .comparisonCard span {
          color: #f59e0b;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .comparisonCard h3 {
          margin: 10px 0 15px;
          font-size: 21px;
        }

        .comparisonCard ul {
          margin: 0;
          padding-left: 20px;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.7;
        }

        .fullWidthMedia {
          width: 100%;
          margin: 28px 0 0;
        }

        .fullWidthMedia img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          background: #05070b;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.34);
        }

        .fullWidthMedia figcaption {
          margin-top: 11px;
          color: rgba(255, 255, 255, 0.48);
          font-size: 0.88rem;
          line-height: 1.5;
          text-align: center;
        }

        .mediaGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
  margin-top: 28px;
}

.mediaGrid .fullWidthMedia {
  margin-top: 0;
}

.twoImageGrid {
  grid-template-columns: 1fr;
}

.gridMedia img {
  height: auto;
}


        .warningCallout {
          margin-top: 25px;
          padding: 22px;
          border-left: 4px solid #f59e0b;
          border-radius: 0 16px 16px 0;
          background: rgba(245, 158, 11, 0.08);
        }

        .warningCallout strong {
          color: #fbbf24;
          font-size: 17px;
        }

        .warningCallout p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.68;
        }

        .vendorGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin: 24px 0;
        }

        .vendorGrid div {
          padding: 17px;
          border: 1px solid rgba(245, 158, 11, 0.19);
          border-radius: 15px;
          background: rgba(245, 158, 11, 0.06);
          color: #ffffff;
          font-weight: 850;
          text-align: center;
        }

        .downloadPanel {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          margin-top: 34px;
          padding: 30px;
          border: 1px solid rgba(245, 158, 11, 0.23);
          border-radius: 24px;
          background:
            linear-gradient(
              115deg,
              rgba(245, 158, 11, 0.11),
              rgba(15, 23, 42, 0.78) 44%
            );
        }

        .downloadIcon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          background: #f59e0b;
          color: #111827;
          font-weight: 950;
        }

        .downloadPanel h2 {
          margin-bottom: 8px;
          font-size: 25px;
        }

        .downloadPanel p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.65;
        }

        .downloadButton {
          padding: 13px 17px;
          border-radius: 13px;
          background: #f59e0b;
          color: #111827;
          font-weight: 950;
          text-decoration: none;
          white-space: nowrap;
        }

        .downloadButton:hover {
          background: #fbbf24;
        }

        .keyTakeaways {
          margin-top: 40px;
          padding: 38px;
          border: 1px solid rgba(245, 158, 11, 0.24);
          border-radius: 26px;
          background:
            linear-gradient(
              120deg,
              rgba(245, 158, 11, 0.11),
              rgba(15, 23, 42, 0.8) 45%
            );
        }

        .keyTakeaways h2 {
          margin-bottom: 24px;
          font-size: 32px;
        }

        .takeawayGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .takeawayGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 17px;
          background: rgba(5, 7, 11, 0.3);
        }

        .takeawayGrid strong {
          color: #fbbf24;
          font-size: 17px;
        }

        .takeawayGrid p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.58;
        }

        .completionPanel {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: center;
          margin-top: 34px;
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 26px;
          background: rgba(15, 23, 42, 0.76);
        }

        .completionPanel > div:first-child {
          max-width: 670px;
        }

        .completionPanel h2 {
          margin-bottom: 10px;
          font-size: 28px;
        }

        .completionPanel p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.68;
        }

        .completionActions {
          display: flex;
          flex-direction: column;
          gap: 11px;
          min-width: 205px;
        }

        .secondaryButton,
        .primaryButton {
          padding: 13px 17px;
          border-radius: 13px;
          font-weight: 900;
          text-align: center;
          text-decoration: none;
        }

        .secondaryButton {
          border: 1px solid rgba(245, 158, 11, 0.4);
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .secondaryButton:hover {
          background: rgba(245, 158, 11, 0.17);
        }

        .primaryButton {
          background: #f59e0b;
          color: #111827;
        }

        .primaryButton:hover {
          background: #fbbf24;
        }

        @media (max-width: 800px) {
          .page {
            padding: 28px 14px 60px;
          }

          .lessonNavigation,
          .completionPanel {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero,
          .lessonSection,
          .keyTakeaways,
          .completionPanel {
            padding: 25px;
          }

          .learningObjectives {
            grid-template-columns: 1fr;
            padding: 25px;
          }

          .comparisonGrid,
          .takeawayGrid,
          .vendorGrid {
            grid-template-columns: 1fr;
          }

          .downloadPanel {
            grid-template-columns: 1fr;
          }

          .downloadButton {
            text-align: center;
          }

          .completionActions {
            width: 100%;
          }
        }

        
.mediaGrid {
  grid-template-columns: 1fr;
}

        @media (max-width: 520px) {
          .lessonNavigation {
            gap: 12px;
          }

          .lessonLocation {
            font-size: 0.76rem;
          }

          .hero {
            padding: 23px;
          }

          .lessonSection,
          .keyTakeaways,
          .completionPanel {
            padding: 21px;
            border-radius: 20px;
          }

          .sectionHeading h2 {
            font-size: 27px;
          }
        }
      `}</style>
    </main>
  );
}