import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Splices, Tools & Shortcuts",
    href: "/dashboard/introductory-software-training/lesson-10-splices-tools",
  },
  {
    number: 2,
    title: "Create an Alternate Bid",
    href: "/dashboard/introductory-software-training/lesson-10-alternate-bid",
  },
  {
    number: 3,
    title: "Changing Individual Components in a Frame",
    href: "/dashboard/introductory-software-training/lesson-10-individual-components",
  },
];

export default function LessonTenIndividualComponentsPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="10"
      lessonTitle="Mastering the Frame Builder"
      lessonDescription="Use advanced frame tools, alternate bidding, and individual component changes to gain more control over how frames are built."
      currentStep={3}
      steps={steps}
    >
      <p className="academyEyebrow">Step 3 of 3</p>

      <h2>Changing Individual Components in a Frame</h2>

      <div className="goalBox">
        <strong>Goal:</strong> Learn how to select an individual framing member,
        identify whether it contains one or two parts, and replace those parts
        without rebuilding the entire frame.
      </div>

      <div className="calloutBox">
        <strong>Return to the practice frame.</strong>

        <p>
          Open the training project you have been using throughout these lessons
          and open frame <strong>L-29</strong>.
        </p>
      </div>

      <h3>Select an Intermediate Vertical</h3>

      <div className="lessonText">
        <p>
          Click on one of the intermediate vertical members inside frame L-29.
          Once the stick is selected, notice how the information on the right
          side of the screen changes.
        </p>

        <p>
          This area shows the properties of the selected member and is where you
          can identify and replace the individual parts assigned to that stick.
        </p>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/stick_properties.png"
          alt="Stick properties for a selected intermediate vertical"
          style={{
            width: "700px",
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          The properties panel changes based on the member currently selected.
        </figcaption>
      </figure>

      <h3>Understanding Two-Piece Mullions</h3>

      <div className="lessonText">
        <p>
          Before changing an individual stick, make sure you have the correct
          member selected.
        </p>

        <p>
          Some verticals and horizontals are made from two separate aluminum
          pieces. When this happens, the software may show both a{" "}
          <strong>male</strong> part number and a <strong>female</strong> part
          number for the same visible mullion.
        </p>

        <p>
          You can also hover over the stick inside the frame. The program will
          display a profile preview that helps you understand what parts are
          currently assigned to that member.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "stretch",
          marginTop: "30px",
        }}
      >
        <figure
          style={{
            margin: 0,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/hover.png"
            alt="Profile preview shown when hovering over a framing member"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              objectFit: "contain",
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,.12)",
            }}
          />

          <figcaption
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,.6)",
            }}
          >
            Hover over the stick to preview the profile assigned to that member.
          </figcaption>
        </figure>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <figure
            style={{
              margin: 0,
              textAlign: "center",
            }}
          >
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/female.png"
              alt="Female mullion component"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,.12)",
              }}
            />

            <figcaption
              style={{
                marginTop: "10px",
                color: "rgba(255,255,255,.6)",
              }}
            >
              Female component.
            </figcaption>
          </figure>

          <figure
            style={{
              margin: 0,
              textAlign: "center",
            }}
          >
            <img
              src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/male.png"
              alt="Male mullion component"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,.12)",
              }}
            />

            <figcaption
              style={{
                marginTop: "10px",
                color: "rgba(255,255,255,.6)",
              }}
            >
              Male component.
            </figcaption>
          </figure>
        </div>
      </div>

      <h3>Male and Female Member Positions</h3>

      <div className="lessonText">
        <p>
          The terms male and female also describe where the individual parts are
          stored within the selected mullion. Use the table below as a quick
          reference.
        </p>
      </div>

      <div
        style={{
          overflowX: "auto",
          marginTop: "24px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.035)",
          }}
        >
          <thead>
            <tr
              style={{
                background: "rgba(245,158,11,.12)",
              }}
            >
              <th
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  color: "#fbbf24",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                }}
              >
                Member Type
              </th>

              <th
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  color: "#fbbf24",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                }}
              >
                Female Position
              </th>

              <th
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  color: "#fbbf24",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                }}
              >
                Male Position
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  padding: "14px 16px",
                  fontWeight: 900,
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                Vertical Sticks
              </td>

              <td
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                Right side
              </td>

              <td
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                Left side
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "14px 16px",
                  fontWeight: 900,
                }}
              >
                Horizontal Sticks
              </td>

              <td
                style={{
                  padding: "14px 16px",
                }}
              >
                Top
              </td>

              <td
                style={{
                  padding: "14px 16px",
                }}
              >
                Bottom
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          overflowX: "auto",
          marginTop: "24px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.035)",
          }}
        >
          <thead>
            <tr
              style={{
                background: "rgba(245,158,11,.12)",
              }}
            >
              <th
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  color: "#fbbf24",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                }}
              >
                Component
              </th>

              <th
                style={{
                  padding: "14px 16px",
                  textAlign: "left",
                  color: "#fbbf24",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                }}
              >
                How Glazier Studio / PartnerPak Uses It
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                style={{
                  padding: "14px 16px",
                  fontWeight: 900,
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                Female
              </td>

              <td
                style={{
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                The female position contains the default main member.
              </td>
            </tr>

            <tr>
              <td
                style={{
                  padding: "14px 16px",
                  fontWeight: 900,
                }}
              >
                Male
              </td>

              <td
                style={{
                  padding: "14px 16px",
                }}
              >
                The male position is either blank or contains the part number
                for the second member when the mullion uses two pieces.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="calloutBox">
        <strong>Simple way to remember it:</strong>

        <p>
          The <strong>female</strong> position is your main member. The{" "}
          <strong>male</strong> position is where the additional second member
          appears when the mullion requires one.
        </p>
      </div>

      <h3>Convert the Two-Piece Vertical to a Single Member</h3>

      <div className="lessonText">
        <p>
          In our training frame, the selected intermediate vertical currently
          contains two pieces.
        </p>

        <p>
          We want to replace that two-piece mullion with a single stick. To do
          that, we first need to remove the male component and then replace the
          female component with the part we want to use.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Step 1</p>
        <h3 style={{ marginTop: 0 }}>NULL Out the Male Vertical</h3>

        <div className="lessonText">
          <p>
            Navigate to the left-side options and make sure{" "}
            <strong>Male Vertical</strong> is selected.
          </p>

          <p>
            Open the <strong>Product Code</strong> dropdown and select{" "}
            <strong>NULL</strong>.
          </p>

          <p>
            Setting the male member to NULL tells the software that this side of
            the mullion should not contain a physical part.
          </p>
        </div>
      </div>

      <figure
        style={{
          textAlign: "center",
          margin: "32px 0",
        }}
      >
        <img
          src="https://rhino-training-cdn.b-cdn.net/zero_2_hero/lesson_10/null_part.png"
          alt="Selecting NULL for the male vertical"
          style={{
            width: "700px",
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        />

        <figcaption
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.6)",
          }}
        >
          Select NULL for the Male Vertical Product Code.
        </figcaption>
      </figure>

      <div className="sectionBox">
        <p className="sectionLabel">Step 2</p>
        <h3 style={{ marginTop: 0 }}>Replace the Female Mullion</h3>

        <div className="lessonText">
          <p>
            Now navigate to the <strong>Female Vertical</strong> settings.
          </p>

          <p>
            Open the Product Code dropdown and locate part number{" "}
            <strong>FG-3107</strong>.
          </p>

          <p>
            Select FG-3107 as the new female member.
          </p>
        </div>
      </div>

      <div className="calloutBox">
        <strong>IMPORTANT: Click Apply.</strong>

        <p>
          After selecting FG-3107, make sure you click{" "}
          <strong>Apply</strong>.
        </p>

        <p>
          If you change the part number and then click away from the screen
          without selecting Apply, the change will be lost.
        </p>
      </div>

      <h3>Verify the Change</h3>

      <div className="lessonText">
        <p>
          After applying the new part, click away from the member and then
          select the same vertical again.
        </p>

        <p>
          Confirm that the male component is now NULL and the female component
          shows <strong>FG-3107</strong>.
        </p>

        <p>
          You have now replaced a two-piece vertical mullion with a single
          framing member without rebuilding the frame.
        </p>
      </div>

      <div className="sectionBox">
        <p className="sectionLabel">Lesson 10 Complete</p>
        <h3 style={{ marginTop: 0 }}>
          You can now modify individual frame components
        </h3>

        <div className="takeawayGrid">
          <div>
            <strong>✓</strong>
            Identify male and female components
          </div>

          <div>
            <strong>✓</strong>
            Recognize two-piece mullions
          </div>

          <div>
            <strong>✓</strong>
            NULL out an unused component
          </div>

          <div>
            <strong>✓</strong>
            Replace an individual stick by part number
          </div>
        </div>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/introductory-software-training/lesson-10-alternate-bid"
          className="secondary"
        >
          ← Previous
        </Link>

        <Link
          href="/dashboard/introductory-software-training"
          className="primary"
        >
          Return to Curriculum
        </Link>
      </div>
    </AcademyLessonLayout>
  );
}