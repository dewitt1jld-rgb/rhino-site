import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  fileMenu:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/file-tab/images/file-tab-01-main.png",
  restoreProject:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/file-tab/images/file-tab-02-deleted-projects.png",
  workstation:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/file-tab/images/file-tab-03-standalone.png",
  server:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/file-tab/images/file-tab-04-server.png",
};

export default function FileTabPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            File Tab
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>File Tab</h1>
            <p className="helperText">
              The File tab controls project importing, exporting, backups,
              restore functions, and switching between standalone and network
              database modes.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Main File Menu</p>
              <h2>Import / Export</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img
                  src={img.fileMenu}
                  alt="File menu dropdown"
                  style={{ maxWidth: "400px", width: "100%" }}
                />
              </div>

              <div className="stack">
                <div className="textCard">
                  <p>
                    The File tab is located in the top-left corner of the
                    program and can be accessed from almost every page in the
                    software.
                  </p>
                </div>

                <div className="textCard">
                  <p>
                    Import and Export are primarily used for sending projects to
                    coworkers or moving projects between standalone systems.
                  </p>
                </div>

                <div className="textCard">
                  <p>
                    To export a project, select the project first, open the File
                    tab, then click Export and choose where to save the file.
                  </p>
                </div>

                <div className="callout warning">
                  Version .72 of the software currently crashes during export on
                  some systems. This may be corrected in a future update.
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Import Shape Exchange</p>
              <h2>Special project exchange function</h2>
            </div>

            <div className="textCard">
              <p>
                Import Shape Exchange is only used by a small group of customers
                that structure projects differently than standard frame shops.
                Most users will never need this feature.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Restore Project</p>
              <h2>Recover archived jobs</h2>
            </div>

            <div className="textCard">
              <p>
                Restore Project allows archived jobs to be recovered later. This
                only works if the project was archived before deletion.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.restoreProject}
                alt="Restore archived project"
                style={{ maxWidth: "520px", width: "100%" }}
              />
            </div>

            <div className="callout danger">
              If the project was permanently deleted without being archived
              first, it can only be recovered from company backups.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Standalone vs Network</p>
              <h2>Understanding database setups</h2>
            </div>

            <div className="definitionBlock">
              <h3>Standalone</h3>

              <div className="textCard">
                <p>
                  Standalone mode means the software is installed on a single
                  computer and the projects, catalogs, and databases only exist
                  on that machine.
                </p>

                <p>
                  Other users cannot automatically see projects created on that
                  computer unless files are manually exported and shared.
                </p>
              </div>
            </div>

            <div className="definitionBlock">
              <h3>Network</h3>

              <div className="textCard">
                <p>
                  Network mode uses a server to host the Glazier Studio or
                  PartnerPak databases so multiple computers can access the same
                  projects, metal groups, and catalog parts.
                </p>

                <p>
                  This setup is strongly recommended for companies with more
                  than one employee using the software.
                </p>
              </div>
            </div>

            <div className="callout info">
              If multiple people will be using Glazier Studio or PartnerPak,
              moving to a network setup early will save a huge amount of
              confusion later.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Hardware Requirements</p>
              <h2>Workstation Requirements</h2>
            </div>

            <div className="textCard">
              <p>
                Most modern mid-range computers will easily run the software. If
                you are unsure, send these specs to your IT department.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.workstation}
                alt="Workstation requirements"
                style={{ maxWidth: "600px", width: "100%" }}
              />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Server Requirements</p>
              <h2>Recommended server hardware</h2>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.server}
                alt="Server requirements"
                style={{ maxWidth: "600px", width: "100%" }}
              />
            </div>

            <div className="textCard">
              <p>
                Additional information about networking, database hosting, and
                project sharing can also be found in the dedicated Server vs
                Standalone training section.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>File Tab Complete</h2>
            <p>
              You should now understand the primary functions of the File tab,
              how importing and exporting works, and the difference between
              standalone and network environments.
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
            margin: 0 0 14px;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.7;
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 36px;
            align-items: start;
          }

          .stack {
            display: flex;
            flex-direction: column;
            gap: 18px;
          }

          .definitionBlock {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 26px;
            align-items: start;
            margin-top: 26px;
          }

          .definitionBlock h3 {
            color: #f59e0b;
            margin-top: 18px;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 26px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 16px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
          }

          @media (max-width: 900px) {
            .twoColumn,
            .definitionBlock {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}