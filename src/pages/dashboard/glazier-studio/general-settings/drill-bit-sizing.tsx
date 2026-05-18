import RequireActiveAccess from "@/components/RequireActiveAccess";
import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";

const img = {
  drill01:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/drill-bit-sizing/images/drill-bit-01.png",
  drill02:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/drill-bit-sizing/images/drill-bit-02.png",
  drill03:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/drill-bit-sizing/images/drill-bit-03.png",
};

export default function DrillBitSizingPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Glazier Studio & PartnerPak / General Settings / Drill Bit Sizing
          </div>

          <section className="heroPanel">
            <div className="eyebrow">GENERAL SETTINGS</div>

            <h1>Drill Bit Sizing</h1>

            <p className="helperText">
              Understanding drill and router bit sizing is extremely important
              when replacing tooling or troubleshooting fabrication issues.
              Anything highlighted in yellow is typically included with your
              machine from DeMichele Group.
            </p>
              <div className="callout info">
              Most fabrication issues caused by tooling come from using the
              incorrect diameter, drill length, or router profile. Always verify
              the exact tooling number before replacing a bit.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="eyebrow">TOOLING OVERVIEW</div>
                <h2>Counter-Sink Bits</h2>
              </div>
            </div>

          
            <div className="imageWrap">
              <img
                src={img.drill01}
                alt="Factory drill bit sizing chart"
              />
            </div>

            <p className="helperText centeredText">
              The highlighted tooling shown above is commonly included with the
              machine package. Additional drill bits and specialty tooling can
              typically be purchased directly through DeMichele Group.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="eyebrow">DRILL BITS</div>
                <h2>Standard Drill Sizes</h2>
              </div>
            </div>

            <p className="helperText">
              These drill sizes are used throughout various fabrication rules,
              screw spline operations, shear block preps, and general machining
              operations. Matching the correct diameter to the fabrication data
              is critical.
            </p>

            <div className="imageWrap">
              <img
                src={img.drill02}
                alt="Standard drill size reference"
              />
            </div>

          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="eyebrow">ROUTER BITS</div>
                <h2>Router Tooling Sizes</h2>
              </div>
            </div>

            <p className="helperText">
              Router tooling is commonly used for hinge preps, door hardware,
              strike machining, and specialty fabrication operations. These bits
              have different cut depths and profiles than standard drills.
            </p>

            <div className="imageWrap">
              <img
                src={img.drill03}
                alt="Router bit sizing chart"
              />
            </div>

            <div className="callout danger">
              Never assume two router bits are interchangeable simply because
              the diameter appears similar. Always verify the exact tool length,
              cut depth, and routing dimensions before fabrication.
            </div>
          </section>

          <section className="completionBox">
            <h2>Tooling Setup Complete</h2>

            <p>
              Use this guide for a better understanding of the common drill and
              router tooling sizes used throughout RhinoFab, Glazier Studio, and
              PartnerPak fabrication workflows.
            </p>
          </section>
        </div>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}