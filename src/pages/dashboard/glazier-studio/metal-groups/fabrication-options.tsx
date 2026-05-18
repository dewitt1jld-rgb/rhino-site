import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  primary: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-01.png",
  secondary: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-02.png",
  fabStyle: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-03-drop-down-menu.png",
  keywords: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-04-key-words.png",
  glazingStyle: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-05-glazing-style.png",
  stopPosition: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-06-stop-position.png",
  fabOperations: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-07-fab-operations.png",
  xyz: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-08-x-y-z.png",
  cad: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-09-cad.png",
  screwSpline: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-10-screw-spline.png",
  centerlines: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-11-centerlilnes.png",
  subsill: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-12-subsill.png",
  angles: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-13-rotational-angles.png",
  direction: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-14-direction.png",
  metalFabType: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-15-metal-fab-type.png",
  formulaBox: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-16-formula-box.png",
  weepAnchor: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fabrication-options/images/fabrication-options-17-weep-and-anchor.png",
};

export default function FabricationOptionsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Fabrication Options
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Fabrication Options</h1>
            <p className="helperText">
              Fabrication screens include many dropdowns and fields that appear
              across Primary Fabrications, Secondary Fabrications, Fab Rules
              Library operations, and Metal Fabrication operations. This page
              breaks down what the common options mean and when they matter.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Overview</p>
              <h2>Why are there so many options?</h2>
            </div>

            <p className="helperText">
              Most fabrication options repeat across multiple screens. Some are
              used constantly, some only apply to special machine types, and
              others are rarely needed.
            </p>

            <div className="imageGrid two">
              <img src={img.primary} alt="Primary fabrication rules" />
              <img src={img.secondary} alt="Secondary fabrication rules" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Fab Style</p>
              <h2>Shear block, screw spline, stick, and type options</h2>
            </div>

            <div className="twoColumn">
       <div className="imageWrap small">
  <img
    src={img.fabStyle}
    alt="Fab style dropdown"
    style={{ maxWidth: "220px" }}
  />
</div>

              <div>
                <p className="helperText">
                  The Fab Style dropdown helps tell the software what type of
                  fabrication condition the operation belongs to.
                </p>

                <p className="helperText">
                  For most storefront systems, screw spline is usually the
                  correct choice. For curtain wall systems, shear block is often
                  the better choice.
                </p>

                <div className="callout warning">
                  If you are unsure, check the metal group keywords to identify
                  whether the system is screw spline, shear block, inside
                  glazed, outside glazed, or impact.
                </div>
              </div>
            </div>

         <div className="imageWrap medium">
  <img
    src={img.keywords}
    alt="Metal group keyword selection"
    style={{ maxWidth: "320px" }}
  />
</div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Glazing Style</p>
              <h2>Inside, outside, or all</h2>
            </div>

            <div className="twoColumn">
            <div className="imageWrap small">
    <img
      src={img.glazingStyle}
      alt="Glazing style dropdown"
      style={{ maxWidth: "180px" }}
    />
  </div>

              <div>
                <p className="helperText">
                  Glazing Style lets you control whether a fabrication applies
                  to inside glazed conditions, outside glazed conditions, or all
                  conditions.
                </p>

                <p className="helperText">
                  Primary fabrications often use ALL. Secondary fabrications may
                  use INSIDE or OUTSIDE when the operation should only happen in
                  one condition.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Stop Position</p>
              <h2>Controlling where stop-related fabrications apply</h2>
            </div>

            <div className="twoColumn">
           <div className="imageWrap small">
    <img
      src={img.stopPosition}
      alt="Stop position dropdown"
      style={{ maxWidth: "180px" }}
    />
  </div>

              <div>
                <p className="helperText">
                  Stop Position gives more control when multiple parts in the
                  same system may have glazing stops on different sides.
                </p>

                <p className="helperText">
                  Most normal cases use ALL, UP, or DOWN. Impact, left, and
                  right conditions are much more specialized.
                </p>

                <div className="callout info">
                  If the metal group does not have glazing stops, choosing ALL
                  is usually safest.
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Fab Operation</p>
              <h2>Circle, countersink, drill, rectangle, and slot</h2>
            </div>

            <div className="twoColumn">
        <div className="imageWrap small">
  <img
    src={img.fabOperations}
    alt="Fab operation dropdown"
    style={{ maxWidth: "180px" }}
  />
</div>

              <div>
                <p className="helperText">
                  Fab Operation defines the type of machining being performed.
                  Common supported operations include Circle, Countersink,
                  Drill, Rectangle, and Slot.
                </p>

                <div className="callout warning">
                  Operations highlighted in red may not be recognized by all
                  machines or may require special pattern files.
                </div>
              </div>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>Circle</h3>
                <p>Used for holes larger than the drill bit diameter.</p>
              </div>
              <div className="infoCard">
                <h3>Countersink</h3>
                <p>Used for screws that need to sit flush with the metal.</p>
              </div>
              <div className="infoCard">
                <h3>Drill</h3>
                <p>Used when the hole is the same size as the drill bit.</p>
              </div>
              <div className="infoCard">
                <h3>Rectangle</h3>
                <p>A milling operation requiring both height and width.</p>
              </div>
              <div className="infoCard">
                <h3>Slot</h3>
                <p>Similar to rectangle, but commonly used for slotted holes.</p>
              </div>
            </div>
          </section>

         <section className="panel">
  <div className="panelHeader">
    <p className="eyebrow">Location Values</p>
    <h2>X, Y, Z, RX, RY, Depth and Limit</h2>
  </div>

  <div className="imageWrap medium">
    <img
      src={img.xyz}
      alt="X Y Z fabrication fields"
      style={{ maxWidth: "420px" }}
    />
  </div>

  <div className="callout info">
    All columns MUST have data except for RX and RY. Data must be typed in manually. There is no
    dropdown option here.
  </div>

  <div className="definitionBlock">
    <h3>X Location</h3>
    <p>
      X is the dimension from the back of the part to the drilling surface.
      For example, if you wanted to drill a weep hole in a sill channel, you
      would measure from the back of the part to the first surface the drill
      bit would touch. In this example, X would be 4.5&quot;.
    </p>
  </div>

  <div className="imageWrap medium">
    <img src={img.cad} alt="X location CAD diagram" />
  </div>

  <div className="definitionBlock">
    <h3>Y Location</h3>
    <p>
      Y is the dimension from the lead edge of the part to the center of the
      operation. The Y location can be confusing because most of the time a
      formula is involved. The easiest way to explain it is to break it into
      three separate sections.
    </p>
  </div>

  <div className="definitionBlock">
    <h3>Y in Primary Fabrications</h3>
    <p>
      In primary fabrications, the Y value is usually not used. Primary
      fabrications rely on a complex formula that gets placed in the metal
      group primary fabrication screen and is tied to individual parts.

      Even though the Y box still requires an input, that value will not be
      used. You can enter any number, but you must type something into the
      field.
    </p>
  </div>

  <div className="definitionBlock">
    <h3>Y in Secondary Fabrications</h3>
    <p>
      In secondary fabrications, the Y value is found by measuring from the
      bottom of the horizontal to the center of the operation.
    </p>
  </div>

  <p className="helperText">
    The reason for this is because secondary fabrications transfer from one
    part to another. In most cases, this would be a horizontal passing over a
    shear block or screw spline hole pattern on a vertical. The software
    understands where the bottom of the horizontal is when the frame is built,
    so it uses that as the reference point.
  </p>

  <div className="imageWrap medium">
    <img src={img.screwSpline} alt="Screw spline X and Y diagram" />
  </div>

  <p className="helperText centerText">
    In this example, the X dimension would be 1&quot; and the Y dimension would be
    BOH + 1.8&quot;.
  </p>

  <div className="callout info">
    The confusing part is that you may feel like you are measuring Z instead of
    Y. Technically, you are measuring from the same direction you would use for
    Z, but because this fabrication transfers to a vertical stick, the software
    translates that value into a Y dimension.
  </div>

  <div className="definitionBlock">
    <h3>Y in Fab Rules Library</h3>
    <p>
      Fab Rules Library uses an imaginary zero point. Most of the time, this
      zero point is either the centerline or middle of the prep.
    </p>

    <ul className="trainingList">
      <li>
        Any prep that falls directly on the centerline receives a Y location of
        0.
      </li>
      <li>
        Any prep to the right of the centerline receives a positive number.
      </li>
      <li>
        Any prep to the left of the centerline receives a negative number.
      </li>
    </ul>
  </div>

  <div className="imageWrap medium">
    <img src={img.centerlines} alt="Centerline Y dimension diagram" />
  </div>

  <div className="definitionBlock">
    <h3>Z Location</h3>
    <p>
      Z is the dimension from the bottom of the part to the center of the
      drilling surface. If you are drilling on the bottom of a part, your Z
      dimension would be 0. If you are drilling on the top of a 2&quot; tall part,
      your Z dimension would be 2.
    </p>
</div>
<div>
    <p>
      If the operation is on a front or back drill, you may need to account for
      the center of the drill bit. For example, if drilling with the front drill
      requires the bit to come up .25&quot; to hit the center of the operation, then
      your Z dimension would be .25&quot;.
    </p>
  </div>

  <div className="imageWrap medium">
    <img src={img.subsill} alt="Z location diagram" />
  </div>

  <div className="definitionBlock">
    <h3>RX and RY</h3>
    <p>
      These values are only for machines with drills that can plunge at an
      angle. If your machine is not an RF5500 or RF5700, you can ignore these
      values and leave them blank.
    </p>
</div>
<div>
    <p>
      RX controls the drill angle in the left/right direction, while RY controls
      the drill angle forward and backward. The values work in both directions
      from -45 to +45, with 0 being straight.
    </p>
  </div>

  <div className="imageWrap medium">
    <img src={img.angles} alt="Rotational angle drill diagram" />
  </div>

  <div className="definitionBlock">
    <h3>Depth</h3>
    <p>
      Depth controls how deep the drill goes from the X, Y, and Z starting
      point. If you are not sure, .375&quot; is a good starting depth. Increase the
      number to go deeper and decrease it to go shallower.
    </p>
</div>
<div>
    <p>
      Keep in mind that standard drill bits may only have about 1.5&quot; of bit
      sticking out. If you need to drill deeper than that, you may need a longer
      drill bit.
    </p>
  </div>

  <div className="definitionBlock">
    <h3>Limit</h3>
    <p>
      Limit is the maximum safe depth a left-handed drill bit can drill without
      breaking. As long as you are using right-handed drill bits, this is not
      usually a concern.
    </p>
</div>
<div>
    <p>
      This is an older setting that is rarely used now, but Glazier Studio and
      PartnerPak still require a value in this column. I usually tell people to
      enter 1&quot; in the Limit field.
    </p>
  </div>

  <section className="completionBox">
    <h2>Location Values Complete</h2>
    <p>Happy drilling! Let’s move on to the next fabrication option.</p>
  </section>
</section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Direction</p>
              <h2>Choosing the drill direction</h2>
            </div>

            <div className="twoColumn">
         <div className="imageWrap small">
  <img
    src={img.direction}
    alt="Direction dropdown"
    style={{ maxWidth: "180px" }}
  />
</div>

              <div>
                <p className="helperText">
                  Direction tells the machine which drill or machining direction
                  to use. Most machines use Top, Bottom, and Front.
                </p>

                <p className="helperText">
                  X-Fabrication machines may use two tools on one stick.
                  Door-style machines may only need Top, Bottom, and Back
                  because the software flips certain logic during export.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Tool & Drill</p>
              <h2>How tooling connects to fabrication operations</h2>
            </div>

            <p className="helperText">
              Tool and Drill work together. When the Tool option is selected,
              the Drill column often updates automatically with the associated
              tool diameter.
            </p>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>Countersink</h3>
                <p>
                  Commonly begins with CSD and controls countersunk holes and
                  plunge depth.
                </p>
              </div>

              <div className="infoCard">
                <h3>Countersink Router</h3>
                <p>
                  A specialty bit that can drill and route, often used for
                  certain butt hinge preps.
                </p>
              </div>

              <div className="infoCard">
                <h3>Drill Bits</h3>
                <p>
                  Standard drill bits used for normal holes without milling
                  capability.
                </p>
              </div>

              <div className="infoCard">
                <h3>Endmill Bits</h3>
                <p>
                  Used for routing operations like rectangles, circles, slots,
                  and special shapes.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">CTSK, Width, Height and Diameter</p>
              <h2>Operation-specific sizing fields</h2>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>CTSK</h3>
                <p>
                  Finished countersink diameter. This is based on the screw head
                  diameter.
                </p>
              </div>

              <div className="infoCard">
                <h3>Width & Height</h3>
                <p>
                  Used for rectangles and slots. Width usually follows machine
                  Y, while height follows machine Z.
                </p>
              </div>

              <div className="infoCard">
                <h3>Diameter</h3>
                <p>
                  Used for circle operations larger than the milling bit
                  diameter.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Metal Fab Type</p>
              <h2>End/center, weep, fixed, and mirror options</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.metalFabType} alt="Metal fab type dropdown" />
              </div>

              <div>
                <p className="helperText">
                  Metal Fab Type controls special fabrication logic. Most users
                  mainly use END/CENTER and WEEP.
                </p>

                <p className="helperText">
                  Fixed functions are used when a fabrication should always be
                  placed in the same location on a stick. Mirror Attachment
                  Holes pull location data from current attachment hole logic.
                </p>
              </div>
            </div>

         <div className="imageGrid two">
  <img
    src={img.formulaBox}
    alt="Formula checkbox options"
    style={{ maxWidth: "400px", margin: "0 auto" }}
  />

  <img
    src={img.weepAnchor}
    alt="Weep and anchor formula options"
    style={{ maxWidth: "600px", margin: "0 auto" }}
  />
</div>
          </section>

          <section className="callout danger">
            <strong>Custom Fab reminder:</strong> Anytime you add or change a
            fabrication line item, make sure the Custom Fab checkbox is checked.
            This helps prevent your work from being wiped out during future
            updates.
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Advanced Fields</p>
              <h2>Everything to the right of Custom Fab</h2>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>Impact Position</h3>
                <p>
                  Secondary-fab-only limit used to apply fabrications to certain
                  impact-related parts.
                </p>
              </div>

              <div className="infoCard">
                <h3>Mating PC</h3>
                <p>
                  Secondary-fab-only condition used when the surrounding part
                  number affects whether a fab should apply.
                </p>
              </div>

              <div className="infoCard">
                <h3>Bottom Z LOC</h3>
                <p>
                  Used with mirror attachment holes when drilling from a bottom
                  Z reference.
                </p>
              </div>

              <div className="infoCard">
                <h3>Function</h3>
                <p>
                  Limits a fab to a certain stick position, such as head or sill.
                </p>
              </div>

              <div className="infoCard">
                <h3>Steps</h3>
                <p>
                  Allows multiple passes through a fabrication to reduce tool
                  damage and improve routing.
                </p>
              </div>

              <div className="infoCard">
                <h3>Pocket</h3>
                <p>
                  Used when material must be routed back and forth to clear an
                  entire webbing area.
                </p>
              </div>

              <div className="infoCard">
                <h3>Priority</h3>
                <p>
                  Sets the order when one fabrication must happen before another.
                </p>
              </div>
            </div>
          </section>

          <section className="callout info">
            <strong>Copy/Paste tip:</strong> Fabrication rows can often be
            copied and pasted between screens. Use Ctrl+C and Ctrl+V carefully,
            and make sure there are enough blank lines available before pasting.
          </section>

          <section className="completionBox">
            <h2>Fabrication Options Complete</h2>
            <p>
              Once these fields make sense, Primary Fabrications, Secondary
              Fabrications, Fab Rules Library operations, and Metal Fabrication
              setup become much easier to understand and troubleshoot.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: 30px;
            align-items: center;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img,
          .imageGrid img {
            width: 100%;
            max-width: 950px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.small img {
            max-width: 360px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          .imageGrid {
            display: grid;
            gap: 22px;
            margin-top: 28px;
          }

          .imageGrid.two {
            
          }

          .infoGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 18px;
            margin-top: 24px;
          }

          .infoCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .definitionBlock {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: start;
  margin: 30px 0;
}
  .trainingList {
  margin: 14px 0 0;
  padding-left: 22px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.trainingList li {
  margin-bottom: 10px;
}

.definitionBlock .trainingList {
  grid-column: 2;
  margin-top: -10px;
}

@media (max-width: 760px) {
  .definitionBlock .trainingList {
    grid-column: 1;
    margin-top: 0;
  }
}

.definitionBlock h3 {
  margin: 0;
  color: #f59e0b;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.definitionBlock p {
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.centerText {
  text-align: center;
}

@media (max-width: 760px) {
  .definitionBlock {
    grid-template-columns: 1fr;
  }
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

          @media (max-width: 900px) {
            .twoColumn,
            .imageGrid.two {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}