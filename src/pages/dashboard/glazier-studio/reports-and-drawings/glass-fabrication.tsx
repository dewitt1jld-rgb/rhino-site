import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-01-main.png",
  import: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-02-import.png",
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-03-data.png",
  report1: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-04-report1.png",
  report2: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-05-report2.png",
  report3: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-06-report3.png",
  cadExport: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-07-cad-export.png",
  stockList: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-08-stock-list.png",
  reports: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-09-reports.png",
  navigation: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/reports-and-drawings/glass-fabrication/images/glass-fabrication-10-navigation.png",
};

export default function GlassFabricationPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Reports and Drawings /
            Glass Fabrication
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Reports and Drawings</p>
            <h1>Glass Fabrication</h1>
            <p className="helperText">
              The Glass Fabrication screen works similarly to Metal Fabrication,
              but it focuses on glass instead of frame members. It breaks each
              piece of glass down, provides glass sizes, and can help generate
              glass reports, CAD exports, and optimization reports.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Main Screen</p>
              <h2>Importing glass from a project</h2>
            </div>

        <div className="imageGrid two">
  <img
    src={img.main}
    alt="Glass Fabrication menu location"
    style={{ maxWidth: "260px", width: "100%", margin: "0 auto" }}
  />
              <img src={img.import} alt="Glass Fabrication import project screen" />
            </div>

            <div className="textCard">
              <p>
                To import glass, click <strong>Import Project</strong> and
                choose an entire project or selected frames. Only the glass
                items are pulled into this screen.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.data} alt="Glass Fabrication imported glass data" />
            </div>

            <div className="callout info">
              Once the project is imported, you can run reports, export to CAD,
              or optimize the glass for cutting.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Reports</p>
              <h2>Glass reference reports</h2>
            </div>

            <div className="textCard">
              <p>
                These reports can be printed, reviewed internally, or sent to a
                glass vendor depending on your workflow.
              </p>
            </div>

            <div className="reportGrid">
              <div>
                <h3>Glass Reference Elevations</h3>
                <img src={img.report1} alt="Glass reference elevations report" />
              </div>

              <div>
                <h3>Glass Reference Images</h3>
                <img src={img.report2} alt="Glass reference images report" />
              </div>

              <div className="wide">
                <h3>Glass Reference Summary</h3>
                <img src={img.report3} alt="Glass reference summary report" />
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Glass CAD Export</p>
              <h2>Exporting the glass layout to CAD</h2>
            </div>

            <div className="textCard">
              <p>
                The Glass CAD Export button automatically generates a CAD file
                showing the frame with the glass. This is almost identical to
                the normal CAD export on the main menu.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.cadExport} alt="Glass CAD export folder location" />
            </div>

            <div className="callout warning">
              Glazier Studio may not ask where to save the CAD export. In many
              cases, it saves automatically under:
              <br />
              <br />
              <strong>C:\Program Files (x86)\DeMichele Group\Glazier Studio</strong>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Optimize</p>
              <h2>Glass optimization reports</h2>
            </div>

            <div className="textCard">
              <p>
                Optimizing glass may ask whether you want to edit the stock list
                or add drops. This is useful when you already have glass in
                stock that can be used for the project.
              </p>
            </div>

            <div className="imageWrap small">
              <img src={img.stockList} alt="Edit stock list or add drops popup" />
            </div>

            <div className="textCard">
              <p>
                After that, choose which optimization reports you want to run.
                It is often easiest to select all reports first, then decide
                which report is useful while reviewing them.
              </p>
            </div>

         <div className="imageWrap medium">
  <img
    src={img.reports}
    alt="Glass optimization report options"
    style={{ maxWidth: "325px", width: "100%" }}
  />
</div>

            <div className="imageWrap">
              <img src={img.navigation} alt="Report navigation toolbar" />
            </div>

            <div className="callout info">
              The icons at the top of the report viewer can be used to export
              reports as PDFs, export to Excel, email files, or capture images.
            </div>
          </section>

          <section className="completionBox">
            <h2>Glass Fabrication Complete</h2>
            <p>
              Once glass is imported, you can review sizes, generate reports,
              export CAD files, and optimize glass for cutting or ordering.
            </p>
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
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.7;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img,
          .imageGrid img,
          .reportGrid img {
            width: 100%;
            max-width: 1000px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.small img {
            max-width: 380px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          .imageGrid {
            display: grid;
            gap: 24px;
            margin: 24px 0;
          }

          .imageGrid.two {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: center;
          }

          .reportGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 26px;
            margin-top: 24px;
          }

          .reportGrid h3 {
            text-align: center;
            color: #f59e0b;
            margin-bottom: 14px;
          }

          .reportGrid .wide {
            grid-column: 1 / -1;
          }

          .reportGrid .wide img {
            max-width: 850px;
            display: block;
            margin: 0 auto;
          }

          @media (max-width: 900px) {
            .imageGrid.two,
            .reportGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}