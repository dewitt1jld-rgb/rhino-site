import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/help-tab/images/help-tab-01-main.png",
  contact: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/help-tab/images/help-tab-02-contact.png",
  teamviewer: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/help-tab/images/help-tab-03-teamviewer.png",
  shortcut: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/help-tab/images/help-tab-04-short-cut.png",
};

export default function HelpTabPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            Help Tab
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>Help Tab</h1>
            <p className="helperText">
              The Help tab is where you will find support links, software
              resources, shortcut keys, tutorials, update information and links
              directly to the DeMichele Group support systems.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Help Menu</p>
              <h2>Main help options</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.main} alt="Help menu options" />
              </div>

              <div className="textCard">
                <p>
                  The Help tab can be used to contact support, launch TeamViewer,
                  download Glazier Studio updates, access the workbook, or view
                  shortcut keys and tutorials.
                </p>

                <p>
                  You can also access the DeMichele Group website directly from
                  this menu.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Support</p>
              <h2>Contact Us</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.contact} alt="Contact support window" />
              </div>

              <div className="textCard">
                <p>
                  This screen contains contact information for several of the
                  DeMichele Group support technicians and departments.
                </p>

                <div className="callout info">
                  <strong>Main Support:</strong>
                  <br />
                  480-985-4926
                  <br />
                  <br />
                  <strong>After Hours Support:</strong>
                  <br />
                  480-340-1653
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">TeamViewer</p>
              <h2>Studio Support - TeamViewer</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.teamviewer} alt="TeamViewer support screen" />
              </div>

              <div className="textCard">
                <p>
                  This tab launches TeamViewer so a DeMichele Group technician
                  can remotely connect to your computer for support.
                </p>

                <p>
                  Once TeamViewer opens, you will receive a session code and
                  your name will appear for the technician.
                </p>

                <p>
                  After the technician connects, click <strong>Yes</strong> to
                  allow access to your computer.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Downloads & Updates</p>
              <h2>Glazier Studio Downloads</h2>
            </div>

            <div className="textCard">
              <p>
                The Downloads option opens the DeMichele Group website where
                software updates and installation files can be downloaded.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Glazier Studio Image Update</h2>
            </div>

            <div className="textCard">
              <p>
                Image updates are downloaded from the DeMichele Group website
                and extracted into the vendor image folders inside the program.
              </p>

              <div className="callout warning">
                <strong>Typical Image File Path:</strong>
                <br />
                C:\Program Files (x86)\DeMichele
                Group\Glazier Studio\OLDCASTLE\DIES
              </div>

              <p>
                Each vendor usually has its own DIES folder where image updates
                are stored.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Glazier Studio Website</h2>
            </div>

            <div className="textCard">
              <p>
                The website contains downloads, support information, ordering
                portals, workbook resources and update summaries.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Workbook & Tutorials</p>
              <h2>Glazier Studio Workbook</h2>
            </div>

            <div className="textCard">
              <p>
                DeMichele Group offers training classes and workbook materials
                that help explain the fundamentals of building frames and
                understanding the software.
              </p>

              <p>
                Even though some information may become outdated over time, the
                workbook is still extremely useful for learning the basics of
                Glazier Studio and PartnerPak.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Shortcut Keys</h2>
            </div>

            <div className="imageWrap">
              <img src={img.shortcut} alt="Glazier Studio shortcut keys" />
            </div>

            <div className="textCard">
              <p>
                These shortcut keys are extremely useful while building frames
                and selecting multiple sticks or bays.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Tutorials</h2>
            </div>

            <div className="textCard">
              <p>
                The DeMichele Group website includes several tutorial videos
                covering basic program functions and workflows.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>What's New In The Latest Release</h2>
            </div>

            <div className="textCard">
              <p>
                This section provides a summary of the latest software updates,
                fixes and new features added to the program.
              </p>
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Register / Upgrade / Downgrade</h2>
            </div>

            <div className="textCard">
              <p>
                These buttons are mainly used when first registering the
                software or changing software versions.
              </p>

              <p>
                If you are running a RhinoFab machine, you typically want to
                stay on the highest supported Glazier Studio level for machine
                compatibility.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>Help Tab Complete</h2>
            <p>
              You now understand where to locate support resources, updates,
              tutorials, shortcut keys and remote support tools inside the Help
              tab.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 22px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .textCard p {
            margin: 0 0 18px;
            color: rgba(255, 255, 255, 0.84);
            line-height: 1.7;
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 30px;
            align-items: center;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 16px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.4);
          }

          .imageWrap.small img {
            max-width: 260px;
          }

          .callout {
            margin-top: 20px;
          }

          .panelSpacer {
            height: 32px;
          }

          @media (max-width: 900px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}