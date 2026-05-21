import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-01-main.png",
  zoomed:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-02-zoomed-in.png",
  endWeep:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-03-end-weep.png",
  centerWeep:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/fab-formula-builder/images/fab-formula-04-center-weep.png",
};

export default function FabFormulaBuilderPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups &
            Catalog Parts / Fab Formula Builder
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups & Catalog Parts</p>
            <h1>Fab Formula Builder</h1>
            <p className="helperText">
              The Fab Formula Builder is used to automatically place fabrication
              holes and operations based on part size, opening size, and system
              conditions.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Opening the Builder</p>
              <h2>How to access Fab Formula Builder</h2>
            </div>

            <div className="textCard">
              <p>
                In the Primary Metal screen of the metal group, press F10
                (sometimes FN + F10) to open the Fab Formula Builder.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.main}
                alt="Fab Formula Builder main screen"
              />
            </div>

            <div className="textCard">
              <p>
                The screen initially appears grayed out until a function is
                selected. Once you choose a fabrication type, the available
                formulas become active.
              </p>
            </div>

            <div className="callout danger">
              In RhinoFab, the term “back member” refers to any framing member
              including jambs, heads, sills, horizontals, and verticals.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Function Selection</p>
              <h2>END / WEEP and CENTER / WEEP CENTER</h2>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.zoomed}
                alt="Fab formula builder zoomed in"
                style={{ maxWidth: "700px", width: "100%" }}
              />
            </div>

            <div className="textCard">
              <p>
                After selecting a function, you can choose between END/WEEP END
                or CENTER/WEEP CENTER. These determine whether holes are placed
                from the ends of the stick or centered on the part.
              </p>
            </div>

            <div className="callout warning">
              Most systems require both end fabs and center fabs. Usually you
              will complete one operation first, then return and create the
              second.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">End / Weep Formulas</p>
              <h2>Common END/WEEP formulas</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img
                  src={img.endWeep}
                  alt="End and weep formulas"
                  style={{ maxWidth: "400px", width: "100%" }}
                />
              </div>

              <div className="stack">
                <div className="formulaCard">
                  <h3>L=#</h3>
                  <p>
                    Places a hole a specific distance from each end of the
                    stick.
                  </p>
                </div>

                <div className="formulaCard">
                  <h3>L=W/#</h3>
                  <p>
                    Divides the stick length by the entered number to create
                    midpoint or quarter-point spacing.
                  </p>
                </div>

                <div className="formulaCard">
                  <h3>L=W/2+#</h3>
                  <p>
                    Splits the stick in half and offsets the hole by the value
                    entered.
                  </p>
                </div>

                <div className="formulaCard">
                  <h3>IF L&gt;# THEN L=#</h3>
                  <p>
                    Adds a limitation so the formula only applies when the part
                    exceeds a specified length.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Center / Weep Center</p>
              <h2>Centerline based formulas</h2>
            </div>

      <div className="imageWrap medium">
  <img
    src={img.centerWeep}
    alt="Center and weep center formulas"
    style={{ maxWidth: "400px", width: "100%" }}
  />
</div>

            <div className="formulaGrid">
              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=# OC</h3>
                <p>
                  Places holes at evenly spaced intervals down the length of the
                  stick.
                </p>
              </div>

              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=L/2 OC</h3>
                <p>
                  Places a hole directly in the center of the part.
                </p>
              </div>

              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=CL-#</h3>
                <p>
                  Commonly used for sill channel and anchor hole patterns on
                  either side of the centerline.
                </p>
              </div>

              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=DLO</h3>
                <p>
                  Places holes in the center of each Daylight Opening.
                </p>
              </div>

              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=DLO/4</h3>
                <p>
                  Places three holes in the center of each DLO using quarter
                  point spacing.
                </p>
              </div>

              <div className="formulaCard">
                <h3>IF L&gt;# THEN Y=#OC+#</h3>
                <p>
                  Adds an offset to standard On-Center or DLO style formulas.
                </p>
              </div>
            </div>

            <div className="completionBox">
              <h2>Formula Builder Summary</h2>
              <p>
                Most formula logic in RhinoFab is simpler than it first appears.
                Once you understand the basics of the formual layout you can create almost any 
                hole pattern you need based off install instructions. 
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
            max-width: 850px;
          }

          .imageWrap.small img {
            max-width: 300px;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 32px;
            align-items: start;
          }

          .stack {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .formulaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
            margin-top: 30px;
          }

          .formulaCard {
            padding: 22px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.18);
          }

          .formulaCard h3 {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 1.1rem;
          }

          .formulaCard p {
            margin: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 900px) {
            .twoColumn,
            .formulaGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}