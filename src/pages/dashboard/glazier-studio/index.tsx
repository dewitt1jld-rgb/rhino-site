import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

export default function GlazierStudioHomePage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Software Training</p>
            <h1>Glazier Studio & PartnerPak</h1>
            <p className="helperText">
              This training area is built to help users learn the estimating,
              frame building, metal group, door, Library Fab, reporting, and
              general setup workflows inside Glazier Studio and PartnerPak.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Training Structure</p>
              <h2>Learn the software in organized sections</h2>
            </div>

            <p className="helperText">
              Use the menu on the left to open each software training category.
              Each section will expand into individual lessons as the Glazier
              Studio and PartnerPak training library grows.
            </p>

            <div className="sectionGrid">
              <div className="miniCard">
                <span>01</span>
                <h3>Estimating</h3>
                <p>Build and manage estimates with a cleaner workflow.</p>
              </div>

              <div className="miniCard">
                <span>02</span>
                <h3>All About Frames</h3>
                <p>Understand frame setup, options, and project behavior.</p>
              </div>

              <div className="miniCard">
                <span>03</span>
                <h3>Out of Shape Frames</h3>
                <p>Learn special frame conditions and non-standard layouts.</p>
              </div>

              <div className="miniCard">
                <span>04</span>
                <h3>Metal Groups</h3>
                <p>Organize system data, pricing, and fabrication behavior.</p>
              </div>

              <div className="miniCard">
                <span>05</span>
                <h3>Doors & Library Fab</h3>
                <p>Work through door tools and Library Fab workflows.</p>
              </div>

              <div className="miniCard">
                <span>06</span>
                <h3>Reports and Drawings</h3>
                <p>Create reports, drawings, and documents users can trust.</p>
              </div>

              <div className="miniCard">
                <span>07</span>
                <h3>General Settings</h3>
                <p>Control software preferences and setup options.</p>
              </div>
            </div>
          </section>

          <section className="callout info">
            <strong>Training note:</strong> This section is only for Glazier
            Studio and PartnerPak software training. Rhino machine calibration,
            maintenance, and troubleshooting will stay inside Rhino Training.
          </section>

          <section className="completionBox">
            <h2>Start with the left menu</h2>
            <p>
              Open a category from the sidebar to begin. The current overview
              pages are placeholders and can be replaced with real lesson pages
              as we build the software training library.
            </p>
          </section>
        </div>

        <style jsx>{`
          .sectionGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 24px;
          }

          .miniCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.24);
          }

          .miniCard span {
            color: #f59e0b;
            font-size: 0.78rem;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .miniCard h3 {
            color: #ffffff;
            margin: 8px 0;
          }

          .miniCard p {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.55;
          }

          @media (max-width: 760px) {
            .sectionGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}