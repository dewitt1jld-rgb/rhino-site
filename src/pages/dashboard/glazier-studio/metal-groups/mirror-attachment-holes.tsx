import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  holeLocation:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/mirror_attachment/452tcg010.png",
  catalogParts:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/mirror_attachment/catalog_parts_screen.png",
  fabricationData:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/mirror_attachment/data.png",
};

export default function MirrorAttachmentHolesPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups &
            Catalog Parts / Mirror Attachment Holes
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups & Catalog Parts</p>
            <h1>Mirror Attachment Holes</h1>
            <p className="helperText">
              Mirror attachment holes are used when two larger access holes
              need to be drilled into the back of a split vertical mullion so
              the installer can reach the screws that attach a horizontal
              member to the vertical stick.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">What They Are</p>
              <h2>Understanding mirror attachment holes</h2>
            </div>

            <div className="textCard">
              <p>
                On split vertical mullions, the screws that secure a horizontal
                member can be hidden behind the back portion of the vertical.
                Mirror attachment holes create larger access openings in the
                back of the vertical so those screws can be reached during
                assembly.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.holeLocation}
                alt="Mirror attachment hole locations on Kawneer 452TCG010"
              />
            </div>

            <div className="callout warning">
              This example uses Kawneer part 452TCG010. The same concept can be
              used on other split vertical members, but dimensions and tooling
              may be different.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Catalog Parts</p>
              <h2>Select the vertical stick</h2>
            </div>

            <div className="textCard">
              <p>
                To have the software pick up these holes automatically, start
                by adding a Primary Fabrication to the vertical stick. In this
                example, we will use Kawneer 452TCG010.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNumber">1</span>
              <div>
                <h3>Open Catalog Parts</h3>
                <p>
                  Navigate to the Catalog Parts screen and locate
                  <strong> 452TCG010</strong>. You can use the search feature
                  in the upper-right corner, which is circled in yellow in the
                  image below.
                </p>
              </div>
            </div>

            <div className="imageWrap large">
              <img
                src={img.catalogParts}
                alt="Catalog Parts screen showing 452TCG010 search and Primary Fabrications"
              />
            </div>

            <div className="stepCard">
              <span className="stepNumber">2</span>
              <div>
                <h3>Open Primary Fabrications</h3>
                <p>
                  With 452TCG010 selected, click
                  <strong> Primary Fabrications</strong>, highlighted in red in
                  the image above.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Primary Fabrication Setup</p>
              <h2>Enter the mirror attachment hole data</h2>
            </div>

            <div className="textCard">
              <p>
                On the Primary Fabrication screen, fill out the fabrication
                similar to the example below.
              </p>
            </div>

            <div className="callout info">
              If this screen is unfamiliar, review the Fabrication Options
              training page first. That page explains the fabrication and tool
              dropdowns used on this screen.
            </div>

            <div className="imageWrap large">
              <img
                src={img.fabricationData}
                alt="Primary fabrication data for mirror attachment holes"
              />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">X, Y & Z Values</p>
              <h2>Why X and Y look wrong — and why Z matters</h2>
            </div>

            <div className="valueGrid">
              <div className="valueCard muted">
                <h3>X Value</h3>
                <p>
                  You may notice an unusually large number in the X field. That
                  is intentional. The X value is not used when the fabrication
                  type is set to Mirror Attachment Holes.
                </p>
              </div>

              <div className="valueCard muted">
                <h3>Y Value</h3>
                <p>
                  The Y value is also ignored. The program pulls the X and Y
                  location from the horizontal members so the access holes line
                  up directly with the screw spline location of each
                  horizontal.
                </p>
              </div>

              <div className="valueCard important">
                <h3>Z Value</h3>
                <p>
                  The Z value is important. It tells the machine the drilling
                  height on the profile.
                </p>
                <p>
                  Because 452TCG010 runs face-down on the machine table, the
                  normal attachment holes are made with the bottom drill. The
                  mirror access holes are therefore made with the top drill.
                </p>
                <p>
                  For this example, the distance from the bottom of the part
                  while it is lying on the machine table to the drilling
                  surface is <strong>1.375&quot;</strong>.
                </p>
              </div>
            </div>

            <div className="callout danger">
              Do not treat the large X and Y values as real drilling
              coordinates. For Mirror Attachment Holes, the horizontal members
              determine the hole locations. The Z value still needs to be
              correct for the profile.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Tool Selection</p>
              <h2>Use a tool that can route the access hole</h2>
            </div>

            <div className="textCard">
              <p>
                Mirror attachment access holes are usually too large for a
                standard drill bit. Select a tool that can route a circular
                opening.
              </p>
            </div>

            <div className="toolGrid">
              <div className="toolCard">
                <h3>Recommended Tool Options</h3>
                <p>
                  Use either <strong>EM11-A</strong> or
                  <strong> EM14-A</strong>, depending on the tooling installed
                  in the machine.
                </p>
              </div>

              <div className="toolCard">
                <h3>Set the Correct Diameter</h3>
                <p>
                  Make sure the fabrication diameter matches the access opening
                  you want to create. A <strong>3/8&quot;</strong> hole may be too
                  small for the bit holder being used, so
                  <strong> 1/2&quot;</strong> may be a better option.
                </p>
              </div>
            </div>

            <div className="callout warning">
              Always confirm the actual cutter and bit-holder clearance before
              finalizing the hole diameter.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Final Settings</p>
              <h2>Select Mirror Attachment Holes</h2>
            </div>

            <div className="checklistGrid">
              <div className="checkCard">
                <span>1</span>
                <p>
                  Open the <strong>Metal Fab Type</strong> dropdown.
                </p>
              </div>

              <div className="checkCard">
                <span>2</span>
                <p>
                  Select <strong>Mirror Attachment Holes</strong>.
                </p>
              </div>

              <div className="checkCard">
                <span>3</span>
                <p>
                  Make sure <strong>Custom Fab</strong> is checked.
                </p>
              </div>

              <div className="checkCard">
                <span>4</span>
                <p>
                  Confirm the Z value, routing tool, and diameter are correct.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Test the Fabrication</p>
              <h2>Send a frame to Metal Fabrication</h2>
            </div>

            <div className="textCard">
              <p>
                Once the fabrication is saved, build a frame that uses
                452TCG010 and send the project into Metal Fabrication to verify
                the access holes are being generated correctly.
              </p>
            </div>

            <div className="callout info">
              If you already have a frame built, you do not need to rebuild
              anything. Go directly to Metal Fabrication and re-merge the
              project into that screen.
            </div>

            <div className="completionBox">
              <h2>Mirror Attachment Hole Summary</h2>
              <p>
                Mirror attachment holes allow the program to automatically
                create access openings in the back of split vertical mullions.
                The horizontal members determine the X and Y location, while
                the Z value, tool selection, diameter, Metal Fab Type, and
                Custom Fab setting control how the access hole is actually
                machined.
              </p>
            </div>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.18);
            margin: 20px 0;
          }

          .textCard p {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.82);
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 26px auto;
          }

          .imageWrap img {
            width: 100%;
            max-width: 950px;
            border-radius: 16px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .imageWrap.large img {
            max-width: 1050px;
          }

          .stepCard {
            display: flex;
            align-items: flex-start;
            gap: 18px;
            padding: 20px;
            margin-top: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .stepNumber {
            width: 38px;
            height: 38px;
            flex: 0 0 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: rgba(245, 158, 11, 0.14);
            color: #fbbf24;
            font-weight: 950;
          }

          .stepCard h3 {
            margin: 0 0 8px;
            color: #f59e0b;
          }

          .stepCard p {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.8);
          }

          .valueGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            margin-top: 24px;
          }

          .valueCard {
            padding: 22px;
            border-radius: 16px;
          }

          .valueCard.muted {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .valueCard.important {
            grid-column: 1 / -1;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.28);
          }

          .valueCard h3 {
            margin: 0 0 10px;
            color: #f59e0b;
          }

          .valueCard p {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.8);
          }

          .valueCard p + p {
            margin-top: 14px;
          }

          .toolGrid,
          .checklistGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            margin-top: 24px;
          }

          .toolCard,
          .checkCard {
            padding: 22px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.18);
          }

          .toolCard h3 {
            margin: 0 0 10px;
            color: #f59e0b;
          }

          .toolCard p {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.8);
          }

          .checkCard {
            display: flex;
            gap: 14px;
            align-items: flex-start;
          }

          .checkCard span {
            width: 32px;
            height: 32px;
            flex: 0 0 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: rgba(245, 158, 11, 0.14);
            color: #fbbf24;
            font-weight: 950;
          }

          .checkCard p {
            margin: 3px 0 0;
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 900px) {
            .valueGrid,
            .toolGrid,
            .checklistGrid {
              grid-template-columns: 1fr;
            }

            .valueCard.important {
              grid-column: auto;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}