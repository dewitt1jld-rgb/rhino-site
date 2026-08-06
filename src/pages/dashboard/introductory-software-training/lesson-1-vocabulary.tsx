import Link from "next/link";
import type { ReactNode } from "react";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Industry Introduction",
    href: "/dashboard/introductory-software-training/lesson-1-glazing-basics",
  },
  {
    number: 2,
    title: "Framing Vocabulary",
    href: "/dashboard/introductory-software-training/lesson-1-vocabulary",
  },
  {
    number: 3,
    title: "CAD Details & Section Views",
    href: "/dashboard/introductory-software-training/lesson-1-cad-drawings",
  },
];

type VocabularyItemProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: ReactNode;
};

function VocabularyItem({
  title,
  imageUrl,
  imageAlt,
  children,
}: VocabularyItemProps) {
  return (
    <section className="sectionBox">
      <h3>{title}</h3>
      <div className="lessonText">{children}</div>
      <figure className="fullWidthMedia">
        <img src={imageUrl} alt={imageAlt} loading="lazy" />
        <figcaption>{title}</figcaption>
      </figure>
    </section>
  );
}

export default function LessonOneVocabularyPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="01"
      lessonTitle="Glazing Fabrication Basics"
      lessonDescription="Learn the basic language, framing locations, and drawing concepts used throughout commercial glazing."
      currentStep={2}
      steps={steps}
    >
      <p className="academyEyebrow">Step 2 of 3</p>
      <h2>Framing Vocabulary</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Identify the primary members of a commercial
        storefront and understand the names commonly used in shop
        conversations.
      </div>

      <div className="lessonText">
        <p>
          In everyday shop conversations, aluminum members are often referred
          to generally as <strong>sticks</strong>. Each stick still has a
          specific part number, profile, and purpose, but “stick” is the common
          generalized term.
        </p>
      </div>

      <blockquote>“That stick needs to be cut at 36 inches.”</blockquote>

      <div className="lessonText">
        <p>
          A new, uncut section from the manufacturer is commonly called a{" "}
          <strong>stock length</strong>. Stock lengths are often approximately
          289 inches, or about 24 feet, although the supplied length can vary by
          manufacturer and system.
        </p>
      </div>

      <VocabularyItem
        title="The Door Package"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_components.png"
        imageAlt="Door package components highlighted in green"
      >
        <p>
          A <strong>door package</strong> generally includes the door, the
          vertical members on the left and right sides, and the horizontal
          members above the door. These members may be different from the
          standard framing members used throughout the rest of the storefront.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Door Header"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_header.png"
        imageAlt="Door header highlighted in green"
      >
        <p>
          The horizontal framing member located directly above the door is
          called the <strong>door header</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Door Transom"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/door_transom.png"
        imageAlt="Glass transom above the door highlighted in green"
      >
        <p>
          The piece of glass located above a door is called a{" "}
          <strong>transom</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Transom Header"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/transom_header.png"
        imageAlt="Transom header highlighted in green"
      >
        <p>
          The uppermost horizontal framing member positioned above the transom
          glass is called the <strong>transom header</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Left Sidelight Jamb"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/left_sidelight_jamb.png"
        imageAlt="Left sidelight jamb highlighted in green"
      >
        <p>
          The vertical member immediately to the left of the door is typically
          called the <strong>left sidelight jamb</strong> when additional glass
          is located to the left of the entrance.
        </p>
        <p>
          If the door is directly against a wall on the left, the same member
          is generally called the <strong>left terminating jamb</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Right Sidelight Jamb"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/right_sidelight_jamb.png"
        imageAlt="Right sidelight jamb highlighted in green"
      >
        <p>
          With additional glass to the right of the door, this member is called
          the <strong>right sidelight jamb</strong>.
        </p>
        <p>
          If the door is directly against a wall on the right, it is generally
          called the <strong>right terminating jamb</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Head Members"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/frame_head_comp.png"
        imageAlt="Storefront head members highlighted in green"
      >
        <p>
          The uppermost horizontal members of the storefront are called{" "}
          <strong>head members</strong>, or simply the <strong>head</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Sill Members"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/sill_components.png"
        imageAlt="Storefront sill members highlighted in green"
      >
        <p>
          The horizontal members at the bottom of the frame are called{" "}
          <strong>sill members</strong>, or simply <strong>sills</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Intermediate Horizontals"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/intermediate_horizontals.png"
        imageAlt="Intermediate horizontal members highlighted in green"
      >
        <p>
          Horizontal members between the head and sill are called{" "}
          <strong>intermediate horizontals</strong>, often shortened to{" "}
          <strong>horizontals</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Left Jamb"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/left_jamb.png"
        imageAlt="Left jamb highlighted in green"
      >
        <p>
          The vertical member at the far-left side of the complete frame is the{" "}
          <strong>left jamb</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Right Jamb"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/right_jamb.png"
        imageAlt="Right jamb highlighted in green"
      >
        <p>
          The vertical member at the far-right side of the complete frame is the{" "}
          <strong>right jamb</strong>.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Intermediate Verticals"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/intermediate_verticals.png"
        imageAlt="Intermediate vertical members highlighted in green"
      >
        <p>
          Vertical members between the left and right jambs are called{" "}
          <strong>intermediate verticals</strong>, often shortened to{" "}
          <strong>verticals</strong>.
        </p>
        <p>
          Wider frames may also require an <strong>expansion mullion</strong>,
          which allows movement within larger openings.
        </p>
      </VocabularyItem>

      <VocabularyItem
        title="Sill Receptor, Sill Pan, or Sill Channel"
        imageUrl="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_1/sill_channel.png"
        imageAlt="Sill receptor beneath the storefront highlighted in green"
      >
        <p>
          Exterior storefront systems commonly use a{" "}
          <strong>sill receptor</strong>, also called a sill pan or sill
          channel. It sits beneath the frame and helps collect and direct water
          back to the exterior through weep paths.
        </p>
        <p>
          Some systems also use a head channel, head receptor, or head pan at
          the top of the frame for anchoring, movement, or structural
          requirements.
        </p>
      </VocabularyItem>

      <div className="takeawayBox">
        <p className="sectionLabel">Vocabulary Review</p>
        <div className="takeawayGrid">
          <div>
            <strong>Head and Sill</strong>
            The top and bottom horizontal members.
          </div>
          <div>
            <strong>Jambs</strong>
            The outermost vertical members.
          </div>
          <div>
            <strong>Horizontals</strong>
            Horizontal members between the head and sill.
          </div>
          <div>
            <strong>Verticals</strong>
            Vertical members between the jambs.
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-1-glazing-basics"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training/lesson-1-cad-drawings"
          className="primary"
        >
          Next: CAD Details →
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}
