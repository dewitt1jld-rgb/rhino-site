import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  menu: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-01-menu.png",
  cadImages: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-02-cad-images.png",
  sectionCut: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-03-section-cut.png",
  cadExport: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-04-cad-export.png",
  cadParameters: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-05-cad-parameters.png",
  cad: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-06-cad.png",
  settings: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-07-settings.png",
  created: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/images/cad-setup-08-created-suc.png",
};

const video =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/cad-setup/videos/caad-setup-video-01.mp4";

export default function CadSetupPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            CAD Setup
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>CAD Setup</h1>
            <p className="helperText">
              This page explains the CAD-related areas inside Glazier Studio,
              including CAD details, CAD groups, section cut details, CAD export,
              CAD parameters, and where exported drawings are saved.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">All Things CAD</p>
              <h2>CAD Details and CAD Groups</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.menu} alt="CAD Details and CAD Groups menu" />
              </div>

              <div>
                <p className="helperText">
                  Under the Databases tab on the left side of the screen, you
                  may notice CAD Details and CAD Groups.
                </p>

                <p className="helperText">
                  These usually do not contain settings you need to add or
                  change. Clicking either option opens pages that show individual
                  CAD details and CAD groups that already exist in the system.
                </p>
              </div>
            </div>

            <div className="callout info">
              Think of these screens more like a reference library. They are
              already pre-set with existing information and generally are not
              where normal CAD setup changes are made.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Section Cut Details</p>
              <h2>Showing side profiles on frame drawings</h2>
            </div>

            <p className="helperText">
              You can turn on Section Cut Details to show the side profile of
              each stick in the frame. This does not work on every frame or
              every metal group, but it works on many standard ones.
            </p>

            <div className="imageWrap">
              <img src={img.cadImages} alt="CAD section cut details shown on drawing" />
            </div>

            <p className="helperText centerText">
              To enable this, go to the View tab in the top-left corner and
              click <strong>Section Cut Details</strong>.
            </p>

            <div className="imageWrap medium">
              <img src={img.sectionCut} alt="Section Cut Details menu option" />
            </div>

            <div className="callout warning">
              This setting is mainly for visual reference. You normally cannot
              pull dimensions from these profiles, and they should not be used
              as the source for fabrication setup.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">CAD Export</p>
              <h2>Sending a frame to CAD</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.cadExport} alt="CAD Export menu item" />
              </div>

              <p className="helperText">
                On the left side, the Reports section includes a CAD Export
                option. This is used to take a frame built inside Glazier Studio
                and send it to CAD for drafting or printing.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.cadParameters} alt="CAD export buttons and parameters" />
            </div>

            <p className="helperText">
              The Generate Drawings button exports the selected frames and
              creates a DWG file that can be opened in CAD.
            </p>

            <div className="callout info">
              The CAD Parameters button lets you adjust CAD settings for the
              current project export. To change default settings for all future
              projects, update the CAD settings through System Settings.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Default CAD Parameters</p>
              <h2>Changing the default CAD settings</h2>
            </div>

            <p className="helperText">
              To change the default CAD settings, open the Tools tab in the
              top-left corner and select Options. This opens the system settings
              screen.
            </p>

            <div className="imageWrap">
              <img src={img.settings} alt="System settings icons" />
            </div>

            <p className="helperText centerText">
              Select the CAD icon to modify the default CAD export settings.
            </p>

            <div className="imageWrap">
              <img src={img.cad} alt="CAD parameters settings screen" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Export Location</p>
              <h2>Where does the CAD export go?</h2>
            </div>

            <div className="imageWrap small">
              <img src={img.created} alt="CAD drawings created successfully message" />
            </div>

            <p className="helperText">
              After drawings are generated, Glazier Studio does not always ask
              where you want the files saved. If AutoCAD launch is enabled, the
              drawing may open automatically after a short delay.
            </p>

            <div className="callout warning">
              If AutoCAD launch is not enabled, exported files are usually saved
              under:
              <br />
              <br />
              <strong>
                C:\Program Files (x86)\DeMichele Group\Glazier Studio
              </strong>
            </div>

            <p className="helperText">
              Use the video below to see how to manually locate the exported
              CAD file.
            </p>

            <video className="videoFrame" controls src={video} />
          </section>

          <section className="completionBox">
            <h2>CAD Setup Complete</h2>
            <p>
              Once CAD details, section cut options, CAD export, and default
              CAD parameters are understood, you will have a better idea of how
              Glazier Studio creates and stores CAD drawing files.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 0.75fr 1.25fr;
            gap: 28px;
            align-items: center;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 22px auto;
          }

          .imageWrap img {
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
            max-width: 680px;
          }

          .centerText {
            text-align: center;
          }

          .videoFrame {
            display: block;
            width: 100%;
            max-width: 820px;
            margin: 26px auto 0;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.24);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          @media (max-width: 850px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}