import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import Link from "next/link";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-01-main-screen.png",
  operations:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-02-opperations.png",
  cad:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-03-cad-butt-hinge.png",
  onDoor:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-04-on-door.png",
  data:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/library-fab/images/library-fab-05-data.png",
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

export default function LibraryFabPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Doors & Library Fab /
            Library Fab
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Doors & Library Fab</p>
            <h1>Library Fab</h1>
            <p className="helperText">
              The Fab Rules Library lets you create and save reusable hardware
              preps so they can be applied later to doors, sticks, and other
              fabrication workflows.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Overview</p>
              <h2>What the Fab Rules Library is used for</h2>
            </div>

            <div className="textCard">
              <p>
                Fab Rules Library allows you to enter and save hardware preps
                into the program for future use. It also allows you to set the
                prep at different heights when applying it to a stick or a door.
              </p>
            </div>

            <div className="textCard">
              <p>
                In this example, we are using a butt hinge prep. You can build
                the hinge once, then apply it at three different locations on a
                door or frame.
              </p>
            </div>

            <div className="callout warning">
              When you open the Fab Rules Library, you may already see preps
              created in the system. Review them carefully before using them on
              a real job.
            </div>

         <div className="imageWrap medium">
  <img
    src={img.main}
    alt="Fab Rules Library main screen"
    style={{ maxWidth: "520px", width: "100%" }}
  />
</div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Create a New Prep</p>
              <h2>Start a new fabrication</h2>
            </div>

            <div className="textCard">
              <p>
                In the Fab Rules Library screen, click the white sheet icon in
                the top-left corner to create a new fabrication.
              </p>
            </div>

        <div className="imageWrap medium">
  <img
    src={img.operations}
    alt="Fab Rules Library operations screen"
    style={{ maxWidth: "1100px", width: "100%" }}
  />
</div>

            <div className="textCard">
              <p>
                The operations screen is very similar to the other fabrication
                screens in the program. If you need help understanding these
                fields, review the{" "}
                <Link href="/dashboard/glazier-studio/metal-groups/fabrication-options">
                  Fabrication Options
                </Link>{" "}
                page.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">X and Y Location</p>
              <h2>Understanding the zero point</h2>
            </div>

            <div className="textCard">
              <p>
                The X and Z dimensions work the same way you are already used
                to. The Y value behaves differently because the Fab Rules
                Library uses an imaginary zero point.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.cad} alt="Centerline Y dimension example" />
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>Centerline</h3>
                <p>
                  Any prep directly on the centerline receives a Y location of
                  0.
                </p>
              </div>

              <div className="infoCard">
                <h3>Right of Center</h3>
                <p>
                  Any prep to the right of the centerline receives a positive Y
                  value.
                </p>
              </div>

              <div className="infoCard">
                <h3>Left of Center</h3>
                <p>
                  Any prep to the left of the centerline receives a negative Y
                  value.
                </p>
              </div>
            </div>

            <div className="imageWrap medium">
              <img src={img.onDoor} alt="Butt hinge prep on door" />
            </div>

            <div className="textCard">
              <p>
                Based on the template shown above, this is how a 4.5&quot; butt
                hinge would be entered. The rectangle is centered at a Y
                location of 0, with two holes using positive Y values and two
                holes using negative Y values.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.data} alt="Butt hinge prep data" />
            </div>

            <div className="textCard">
              <p>
                The X location is pulled from the back fence of the machine.
                The Y location is relative to the zero point, which is typically
                the center of the prep. The Z value changes depending on the
                prep orientation.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Formula Reference</p>
              <h2>Formulas for framing material and doors</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.formula} alt="X and Z location formula reference" />
            </div>

            <div className="imageWrap medium">
              <img src={img.formulaDoors} alt="Door formula reference" />
            </div>

            <div className="textCard">
              <p>
                In the example, the formula FW is used so the prep can center
                itself on different sized framing members. This prevents having
                to manually change the Z location for every framing width.
              </p>
            </div>

            <div className="callout info">
              Formulas can often be adjusted using the same logic, even when the
              exact formula is not shown on the sheet.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Door Leaf Formulas</p>
              <h2>Assembled and exploded door leaf references</h2>
            </div>

            <div className="imageWrap">
              <img src={img.assembled} alt="Assembled door leaf formulas" />
            </div>

            <div className="imageWrap">
              <img src={img.exploded} alt="Exploded door leaf formulas" />
            </div>

            <div className="textCard">
              <p>
                Door leaf formulas are useful when the prep needs to be
                positioned based on finished floor, door width, door height, or
                door opening dimensions.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Reference Checkboxes</p>
              <h2>X and Y Loc Explained</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.xyLoc} alt="Use X and Y location reference options" />
            </div>

            <div className="definitionBlock">
              <h3>Use Y Loc Ref.</h3>
              <div className="textCard">
                <p>
                  Check this box when you want the prep to locate at a different
                  vertical position. For example, butt hinges at 19&quot;,
                  42&quot;, and 65&quot; from the bottom of the door would use
                  the Y location reference.
                </p>
              </div>
            </div>

            <div className="definitionBlock">
              <h3>Use X Loc Ref.</h3>
              <div className="textCard">
                <p>
                  Check this box when you want the prep to locate at a different
                  horizontal position. For example, a lock cylinder may always
                  be 42&quot; up but have a different horizontal offset depending
                  on door style.
                </p>
              </div>
            </div>

            <div className="definitionBlock">
              <h3>When to Check Both</h3>
              <div className="textCard">
                <p>
                  Check both boxes when the fabrication may need to move both
                  vertically and horizontally.
                </p>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Library Fab Complete</h2>
            <p>
              Once the prep is built correctly and the location references are
              understood, the same hardware prep can be reused throughout the
              software without rebuilding it from scratch each time.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.18);
            margin: 18px 0;
          }

          .textCard p {
            margin: 0;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.7;
          }

          .textCard a {
            color: #f59e0b;
            font-weight: 800;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img {
            width: 100%;
            max-width: 950px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .infoGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            margin-top: 24px;
          }

          .infoCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.18);
          }

          .infoCard h3 {
            margin: 0 0 10px;
            color: #f59e0b;
          }

          .infoCard p {
            margin: 0;
            color: rgba(255, 255, 255, 0.78);
            line-height: 1.65;
          }

          .definitionBlock {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 24px;
            align-items: start;
            margin-top: 26px;
          }

          .definitionBlock h3 {
            color: #f59e0b;
            margin: 18px 0 0;
          }

          @media (max-width: 850px) {
            .infoGrid,
            .definitionBlock {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}