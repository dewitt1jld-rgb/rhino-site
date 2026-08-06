import Link from "next/link";

type VocabularySectionProps = {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
};

function VocabularySection({
  title,
  description,
  imageUrl,
  imageAlt,
}: VocabularySectionProps) {
  return (
    <section className="vocabularySection">
      <div className="sectionHeading">
        <p className="sectionLabel">Framing Vocabulary</p>
        <h2>{title}</h2>
      </div>

      <div className="lessonText">{description}</div>

      <figure className="fullWidthMedia">
        <img src={imageUrl} alt={imageAlt} loading="lazy" />
        <figcaption>{title}</figcaption>
      </figure>
    </section>
  );
}

export default function LessonOneGlazingBasicsPage() {
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
            Module 01 <span>/</span> Lesson 01
          </div>
        </nav>

        <header className="hero">
          <p className="eyebrow">Glass Industry Fundamentals</p>

          <h1>Welcome to Glazing Fabrication Basics</h1>

          <p className="lead">
            Learn the fundamental vocabulary, framing components, drawing
            conventions, and industry concepts you need to begin following
            conversations in the commercial glazing industry.
          </p>

          <div className="lessonStats">
            <span>Module 01</span>
            <span>Lesson 01</span>
            <span>Beginner Friendly</span>
            <span>Section 1 of 3</span>
          </div>
        </header>

        <section className="learningObjectives">
          <div className="objectiveIcon">01</div>

          <div>
            <p className="sectionLabel">Learning Objectives</p>
            <h2>What you will learn</h2>

            <ul>
              <li>
                Recognize the primary framing members used in a commercial
                storefront.
              </li>
              <li>
                Understand common terms used when discussing aluminum framing.
              </li>
              <li>
                Identify the basic components surrounding a commercial door.
              </li>
              <li>
                Begin understanding how finished storefronts relate to Glazier
                Studio and AutoCAD drawings.
              </li>
              <li>
                Follow basic conversations between office, fabrication, and
                installation personnel.
              </li>
            </ul>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Course Introduction</p>
            <h2>Learning the language of commercial glazing</h2>
          </div>

          <div className="lessonText">
            <p>
              Welcome to <strong>Glazing Fabrication Basics</strong>. This
              module introduces the fundamentals of framing, glazing, and the
              terminology commonly used throughout the commercial glass
              industry.
            </p>

            <p>
              The goal is not to make you an expert in a single lesson. Instead,
              this lesson is designed to give you enough vocabulary and
              background knowledge to understand what storefront and curtain
              wall systems are and to begin following conversations inside a
              glass shop.
            </p>

            <p>
              The glazing industry often feels like it has its own language.
              Words such as <em>head</em>, <em>sill</em>, <em>jamb</em>,{" "}
              <em>transom</em>, and <em>mullion</em> may initially be
              unfamiliar. As you progress through this course, these terms will
              become a normal part of your daily vocabulary.
            </p>
          </div>

          <div className="threePartOverview">
            <div className="overviewCard">
              <span>Section 01</span>
              <h3>Vocabulary & Frame Locations</h3>
              <p>
                Learn the names and positions of the primary components used to
                build a storefront frame.
              </p>
            </div>

            <div className="overviewCard">
              <span>Section 02</span>
              <h3>Storefront vs. Curtain Wall</h3>
              <p>
                Understand the basic differences between two of the most common
                commercial glazing systems.
              </p>
            </div>

            <div className="overviewCard">
              <span>Section 03</span>
              <h3>CAD & Shop Drawings</h3>
              <p>
                Learn how drawings communicate dimensions, materials, details,
                and fabrication requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">A Finished Storefront</p>
            <h2>What you may see while driving around a city</h2>
          </div>

          <div className="lessonText">
            <p>
              The image below shows an example of a commercial frame you may
              see while driving around a city. Commercial buildings that use
              glass rely on aluminum framing members to hold the glass, create
              entrances, manage water, and meet structural requirements for the
              area where the system is installed.
            </p>

            <p>
              People in the industry often refer to individual aluminum members
              as <strong>sticks</strong>. Each stick has a specific shape, part
              number, purpose, and location within the completed frame.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/image_of_storefront.png"
              alt="Completed commercial storefront with a centered entrance door"
            />
            <figcaption>
              A completed commercial storefront and entrance system.
            </figcaption>
          </figure>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">The Project Workflow</p>
            <h2>Many people contribute to the finished product</h2>
          </div>

          <div className="lessonText">
            <p>
              The frame shown above is a finished project. Depending on your
              position, your responsibilities may involve one or several stages
              of the project.
            </p>
          </div>

          <div className="responsibilityGrid">
            <div>Measuring opening sizes</div>
            <div>Creating or reviewing shop drawings</div>
            <div>Building frames in Glazier Studio</div>
            <div>Programming projects in PartnerPak</div>
            <div>Operating a RhinoFab machine</div>
            <div>Hand-fabricating aluminum</div>
            <div>Assembling completed frames</div>
            <div>Installing frames in the field</div>
          </div>

          <div className="lessonText">
            <p>
              This introductory training is not intended to teach every
              fabrication or installation procedure. It will, however,
              introduce these subjects and help you understand the path a
              project follows from the initial opening measurements to the
              completed installation.
            </p>

            <p>
              To begin breaking down the frame, it has been recreated inside
              one of the programs used throughout this Academy:{" "}
              <strong>Glazier Studio</strong>.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/frame_in_glazier_studio.png"
              alt="Storefront frame recreated in Glazier Studio"
              loading="lazy"
            />
            <figcaption>
              The completed storefront recreated inside Glazier Studio.
            </figcaption>
          </figure>

          <div className="callout">
            <strong>For now, focus on terminology.</strong>
            <p>
              Later lessons will show you how to create projects and build
              frames yourself. During this lesson, follow along and become
              familiar with the names and locations of each component.
            </p>
          </div>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Common Shop Language</p>
            <h2>What does someone mean by “stick”?</h2>
          </div>

          <div className="lessonText">
            <p>
              The frame below will be used to teach vocabulary. It is an
              accurate digital representation of the finished storefront shown
              earlier. As each component is introduced, the applicable metal
              members are highlighted in green.
            </p>

            <p>
              In everyday shop conversations, aluminum members are often
              referred to generally as <strong>sticks</strong>. For example, if
              someone says:
            </p>
          </div>

          <blockquote>
            “That stick needs to be cut at 36 inches.”
          </blockquote>

          <div className="lessonText">
            <p>
              They mean that the applicable piece of aluminum needs to be cut
              to a length of 36 inches. Although every member has a specific
              part number and technical name, <em>stick</em> is the generalized
              industry term. "Sticks" from the manufacturer usually come in a finished size of 289 inches or about 24 feet. 
              This new uncut section is refered to as a <em>stock length</em>. 
            </p>
          </div>
        </section>

        <VocabularySection
          title="The Door Package"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_components.png"
          imageAlt="Door package components highlighted in green"
          description={
            <>
              <p>
                The highlighted area is commonly referred to as a{" "}
                <strong>door package</strong>. A door package generally includes
                the door, the vertical members on the left and right sides, and
                the horizontal members above the door.
              </p>

              <p>
                These members are often different from the standard framing
                members used throughout the rest of the storefront.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Door Header"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_header.png"
          imageAlt="Door header highlighted in green"
          description={
            <p>
              The horizontal framing member located directly above the door is
              called the <strong>door header</strong>.
            </p>
          }
        />

        <VocabularySection
          title="Door Transom"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_transom.png"
          imageAlt="Glass transom above the door highlighted in green"
          description={
            <p>
              The piece of glass located above a door is called a{" "}
              <strong>transom</strong>. Depending on the frame configuration, a
              transom may be located above a single door, a pair of doors, or an
              entire entrance.
            </p>
          }
        />

        <VocabularySection
          title="Transom Header"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/transom_header.png"
          imageAlt="Transom header highlighted in green"
          description={
            <p>
              The uppermost horizontal framing member positioned above the
              transom glass is called the <strong>transom header</strong>.
            </p>
          }
        />

        <VocabularySection
          title="Left Sidelight Jamb"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/left_sidelight_jamb.png"
          imageAlt="Left sidelight jamb highlighted in green"
          description={
            <>
              <p>
                The vertical member immediately to the left of the door is
                typically called the <strong>left sidelight jamb</strong> when
                additional glass is located to the left of the entrance.
              </p>

              <p>
                If the door were positioned directly against a wall on the left
                side, the same member would generally be referred to as the{" "}
                <strong>left terminating jamb</strong>.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Right Sidelight Jamb"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/right_sidelight_jamb.png"
          imageAlt="Right sidelight jamb highlighted in green"
          description={
            <>
              <p>
                The same naming convention applies to the member immediately to
                the right of the door. With additional glass to the right, it is
                called the <strong>right sidelight jamb</strong>.
              </p>

              <p>
                If the door were directly against a wall on that side, it would
                generally be called the{" "}
                <strong>right terminating jamb</strong>.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Head Members"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/frame_head_comp.png"
          imageAlt="Storefront head members highlighted in green"
          description={
            <>
              <p>
                The uppermost horizontal members of the storefront are called{" "}
                <strong>head members</strong>, or simply the{" "}
                <strong>head</strong>.
              </p>

              <p>
                It does not matter whether the frame contains one head member or
                many individual pieces. As long as the member is at the
                uppermost horizontal position and is not specifically the
                header above a door, it is generally considered a head member.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Sill Members"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/sill_components.png"
          imageAlt="Storefront sill members highlighted in green"
          description={
            <p>
              The horizontal members located at the bottom of the frame are
              called <strong>sill members</strong>, or simply{" "}
              <strong>sills</strong>.
            </p>
          }
        />

        <VocabularySection
          title="Intermediate Horizontals"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/intermediate_horizontals.png"
          imageAlt="Intermediate horizontal members highlighted in green"
          description={
            <>
              <p>
                Horizontal members located between the head and sill are called{" "}
                <strong>intermediate horizontals</strong>. In normal
                conversation, they are often shortened to{" "}
                <strong>horizontals</strong>.
              </p>

              <p>
                A frame may have one horizontal or many. Their position between
                the head and sill is what identifies them as intermediate
                horizontals.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Left Jamb"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/left_jamb.png"
          imageAlt="Left jamb highlighted in green"
          description={
            <p>
              The vertical member at the far-left side of the complete frame is
              called the <strong>left jamb</strong>.
            </p>
          }
        />

        <VocabularySection
          title="Right Jamb"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/right_jamb.png"
          imageAlt="Right jamb highlighted in green"
          description={
            <p>
              The vertical member at the far-right side of the complete frame
              is called the <strong>right jamb</strong>.
            </p>
          }
        />

        <VocabularySection
          title="Intermediate Verticals"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/intermediate_verticals.png"
          imageAlt="Intermediate vertical members highlighted in green"
          description={
            <>
              <p>
                Vertical members positioned between the left and right jambs
                are called <strong>intermediate verticals</strong>. They are
                often referred to simply as <strong>verticals</strong>.
              </p>

              <p>
                Wider frames may also require a special member known as an{" "}
                <strong>expansion mullion</strong>. It may take the place of one
                of the standard intermediate verticals and allows for movement
                within larger openings. It is not shown in this example, but
                become familiar with the term because it will appear in later
                lessons.
              </p>
            </>
          }
        />

        <VocabularySection
          title="Sill Receptor, Sill Pan, or Sill Channel"
          imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/sill_channel.png"
          imageAlt="Sill receptor beneath the storefront highlighted in green"
          description={
            <>
              <p>
                Storefront systems installed on the exterior of a building
                commonly require a component called a{" "}
                <strong>sill receptor</strong>. The terms{" "}
                <strong>sill pan</strong> and <strong>sill channel</strong> are
                also frequently used to describe this component.
              </p>

              <p>
                The sill receptor sits beneath the frame and helps collect and
                direct water back to the exterior through weep paths. The term{" "}
                <em>weep</em> will be explained in more detail later in the
                course.
              </p>

              <p>
                Interior frames are not exposed to rainwater and therefore may
                not require the same sill receptor arrangement.
              </p>

              <p>
                Some systems may also use a <strong>head channel</strong>,{" "}
                <strong>head receptor</strong>, or <strong>head pan</strong> at
                the top of the frame. Unlike the sill receptor, this component
                is generally associated with anchoring, movement, and
                structural requirements rather than water drainage.
              </p>
            </>
          }
        />

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Understanding the Physical Material</p>
            <h2>A two-dimensional drawing represents three-dimensional metal</h2>
          </div>

          <div className="lessonText">
            <p>
              The terminology covered so far identifies most of the primary
              framing locations. However, it is important to remember that the
              lines shown in a two-dimensional elevation represent aluminum
              members with real depth and shape.
            </p>

            <p>
              These members are typically extruded aluminum profiles that come
              in many shapes, sizes, depths, and configurations. Although
              different systems may produce a similar finished appearance,
              their internal construction may vary significantly.
            </p>

            <p>
              Different framing systems may be selected for warm or cold
              climates, wet or dry environments, high-wind areas, government
              facilities, or impact-rated applications. Regardless of the
              system selected, most of the basic location-based terminology
              remains the same.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/3d_view_of_frame.png"
              alt="Three-dimensional view of a commercial storefront frame"
              loading="lazy"
            />
            <figcaption>
              A three-dimensional representation of the storefront frame.
            </figcaption>
          </figure>
        </section>

        <section className="lessonSection">
          <div className="sectionHeading">
            <p className="sectionLabel">Introduction to CAD Details</p>
            <h2>Looking inside an individual framing member</h2>
          </div>

          <div className="lessonText">
            <p>
              Each aluminum member has its own cross-sectional shape. The next
              drawing represents only one of the many profiles that may be used
              at the head of a frame.
            </p>

            <p>
              The image comes from a computer-aided design program called{" "}
              <strong>AutoCAD</strong>. AutoCAD allows detailers and
              fabricators to draw, isolate, inspect, and measure individual
              framing members and their related components.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/cad_detail_entire_frame.png"
              alt="AutoCAD elevation with detail callouts"
              loading="lazy"
            />
            <figcaption>
              A frame drawing containing numbered detail callouts.
            </figcaption>
          </figure>

          <div className="lessonText">
            <p>
              The drawing above shows the basic shape of the complete frame and
              includes several detail callouts. Near the top of the image,{" "}
              <strong>Detail 1</strong> is positioned over the head member.
            </p>

            <p>
              When Detail 1 is located on the corresponding AutoCAD detail
              sheet, it may look similar to the drawing below.
            </p>
          </div>

          <figure className="fullWidthMedia">
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/autocad_head_detail_all_parts.png"
              alt="Detailed AutoCAD section of the storefront head member"
              loading="lazy"
            />
            <figcaption>
              A section detail showing the head member and related components.
            </figcaption>
          </figure>

          <div className="lessonText">
            <p>
              CAD details can be difficult to understand when you are first
              entering the industry. A single detail may show the aluminum
              profile along with glass stops, gaskets, fillers, shear blocks,
              fasteners, glass, and surrounding building conditions.
            </p>

            <p>
              These additional components will be covered throughout later
              lessons. For now, watch the video below to see the head member
              isolated from the rest of the drawing.
            </p>

            <p>
              This is a <strong>section cut</strong>, sometimes described as a
              side view. It shows the profile shape you would see if you looked
              directly down the length of the aluminum member.
            </p>
          </div>

          <figure className="fullWidthMedia videoFigure">
            <video controls preload="metadata">
              <source
                src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/videos_head_member_issolated.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>

            <figcaption>
              Video demonstration: isolating the head member from the complete
              CAD detail.
            </figcaption>
          </figure>
        </section>

        <section className="keyTakeaways">
          <p className="sectionLabel">Section Complete</p>
          <h2>Key takeaways</h2>

          <div className="takeawayGrid">
            <div>
              <strong>Sticks</strong>
              <p>
                A common general term used for individual pieces of aluminum
                framing.
              </p>
            </div>

            <div>
              <strong>Frame Locations</strong>
              <p>
                Head, sill, jamb, horizontal, and vertical describe where a
                member is located.
              </p>
            </div>

            <div>
              <strong>Door Components</strong>
              <p>
                Door packages use specialized headers, jambs, transoms, and
                hardware-related members.
              </p>
            </div>

            <div>
              <strong>Water Management</strong>
              <p>
                Exterior storefront systems commonly use sill receptors and
                weep paths.
              </p>
            </div>

            <div>
              <strong>Two-Dimensional Drawings</strong>
              <p>
                Every line in an elevation represents a physical,
                three-dimensional component.
              </p>
            </div>

            <div>
              <strong>CAD Details</strong>
              <p>
                Section details reveal the profile shapes and smaller parts
                hidden inside the finished frame.
              </p>
            </div>
          </div>
        </section>

        <section className="completionPanel">
          <div>
            <p className="sectionLabel">You reached the end of Section 1</p>
            <h2>Review the terminology before continuing</h2>
            <p>
              Take a few minutes to revisit any terms that still feel
              unfamiliar. The vocabulary introduced here will be used
              throughout every remaining module in the Academy.
            </p>
          </div>

          <div className="completionActions">
            <Link
              href="/dashboard/introductory-software-training"
              className="secondaryButton"
            >
              Return to Curriculum
            </Link>

            <Link
  href="/dashboard/introductory-software-training/lesson-2-storefront-curtain-wall"
  className="primaryButton"
>
  Continue to Lesson 2 →
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
        .completionPanel h2 {
          margin: 0;
          color: #ffffff;
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

        .lessonSection,
        .vocabularySection {
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

        .threePartOverview {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 27px;
        }

        .overviewCard {
          padding: 23px;
          border: 1px solid rgba(245, 158, 11, 0.19);
          border-radius: 18px;
          background: rgba(245, 158, 11, 0.06);
        }

        .overviewCard span {
          color: #f59e0b;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .overviewCard h3 {
          margin: 10px 0;
          font-size: 19px;
        }

        .overviewCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.64);
          line-height: 1.62;
        }

        .fullWidthMedia {
          width: 100%;
          margin: 28px 0 0;
        }

        .fullWidthMedia img,
        .fullWidthMedia video {
          display: block;
          width: 100%;
          height: auto;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          background: #05070b;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.34);
        }

        .fullWidthMedia img {
          object-fit: contain;
        }

        .fullWidthMedia figcaption {
          margin-top: 11px;
          color: rgba(255, 255, 255, 0.48);
          font-size: 0.88rem;
          line-height: 1.5;
          text-align: center;
        }

        .videoFigure video {
          max-height: 760px;
        }

        .responsibilityGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin: 24px 0;
        }

        .responsibilityGrid div {
          position: relative;
          padding: 15px 15px 15px 42px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.72);
          font-weight: 700;
        }

        .responsibilityGrid div::before {
          content: "✓";
          position: absolute;
          left: 16px;
          color: #f59e0b;
          font-weight: 950;
        }

        .callout {
          margin-top: 26px;
          padding: 22px;
          border-left: 4px solid #f59e0b;
          border-radius: 0 16px 16px 0;
          background: rgba(245, 158, 11, 0.08);
        }

        .callout strong {
          color: #fbbf24;
          font-size: 17px;
        }

        .callout p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.68;
        }

        blockquote {
          margin: 25px 0;
          padding: 26px 30px;
          border-left: 5px solid #f59e0b;
          border-radius: 0 18px 18px 0;
          background: rgba(245, 158, 11, 0.08);
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 850;
          line-height: 1.4;
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
        .disabledButton {
          padding: 13px 17px;
          border-radius: 13px;
          font-weight: 900;
          text-align: center;
        }

        .secondaryButton {
          border: 1px solid rgba(245, 158, 11, 0.4);
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          text-decoration: none;
        }

        .secondaryButton:hover {
          background: rgba(245, 158, 11, 0.17);
        }

        .disabledButton {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.38);
          cursor: not-allowed;
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
          .vocabularySection,
          .keyTakeaways,
          .completionPanel {
            padding: 25px;
          }

          .learningObjectives {
            grid-template-columns: 1fr;
            padding: 25px;
          }

          .threePartOverview,
          .responsibilityGrid,
          .takeawayGrid {
            grid-template-columns: 1fr;
          }

          .completionActions {
            width: 100%;
          }
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
          .vocabularySection,
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