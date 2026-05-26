import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-01-main-screen.png",
  projectTab: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-02-project-tab.png",
  frameInfo: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-03-frame-info.png",
  frameTab: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-04-frame-tab.png",
  toolMenu: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-05-tool-menu.png",
  insertPanels: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-06-insert-panels.png",
  notes: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-07-notes.png",
  addParts: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-08-add-parts.png",
  structural: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/menu-drop-downs/images/menu-drops-09-change-structural.png",
};

export default function MenuDropDownsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / All About Frames /
            Menu Drop Downs
          </div>

          <section className="heroPanel">
            <p className="eyebrow">All About Frames</p>
            <h1>Menu Drop Downs</h1>
            <p className="helperText">
              These menu drop downs are located in the top left corner of the
              frame builder and contain many commonly used tools and options.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Main Menu</p>
              <h2>Top menu navigation</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.main} alt="Top menu drop downs" />
            </div>

            <div className="textCard">
              <p>
                These drop down menus can be found in the top left hand corner
                of the frame builder screen. Many functions can also be accessed
                from the left side of the screen or by using shortcut keys.
              </p>

              <p>
                Most users rarely need to access these menus directly, but some
                functions such as splice locations or anchor points are easier
                to reach from the main menu tabs.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Project Tab</p>
              <h2>Project manager and saving</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.projectTab} alt="Project tab options" />
              </div>

              <div className="textCard">
                <p>
                  Clicking <strong>Project Manager</strong> returns you to the
                  main project list showing all frames in the project.
                </p>

                <p>
                  You can also exit the current frame by pressing the red X in
                  the top left corner of the frame builder.
                </p>

                <p>
                  Saving can be done using the save button in the upper corner
                  or by pressing the red X and confirming the save.
                </p>
              </div>
            </div>

            <div className="imageWrap small">
              <img src={img.frameInfo} alt="Frame info save button" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Frame Tab</p>
              <h2>Frame menu tools</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap medium">
                <img src={img.frameTab} alt="Frame tab dropdown" />
              </div>

              <div className="textCard">
                <h3>New</h3>
                <p>
                  Starts a brand new frame without leaving the frame editor.
                </p>

                <h3>Undo Last Change</h3>
                <p>
                  This can also be quickly accessed using the back arrow in the
                  upper left corner of the frame screen.
                </p>
              </div>
            </div>

            <div className="imageWrap small">
              <img src={img.toolMenu} alt="Undo button tool menu" />
            </div>

            <div className="textCard">
              <h3>Copy Frame</h3>
              <p>
                Creates an exact duplicate of the current frame including all
                settings and changes.
              </p>

              <h3>Copy and Reflect</h3>
              <p>
                Creates a duplicate and flips it 180 degrees.
              </p>

              <h3>Reflect Current</h3>
              <p>
                Flips the current frame 180 degrees without creating a copy.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Insert Utility Frame</p>
              <h2>Utility frame insertion</h2>
            </div>

            <div className="textCard">
              <p>
                To insert a utility frame, select an opening first and then use
                the Frame tab to insert the frame.
              </p>

              <p>
                The software will ask how many panels and rows you would like
                the utility frame to contain.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.insertPanels} alt="Insert utility frame example" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Notes</p>
              <h2>Frame notes</h2>
            </div>

            <div className="textCard">
              <p>
                Notes are attached by first selecting a piece of glass or a
                member, then choosing the NOTE option from the Frame tab.
              </p>

              <p>
                After entering the note, click the location where the note
                should point on the frame.
              </p>

              <div className="callout info">
                CLICK 1 IS IN RED
                <br />
                CLICK 2 IS IN GREEN
              </div>
            </div>

            <div className="imageWrap">
              <img src={img.notes} alt="Frame notes example" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Additional Features</p>
              <h2>Add Parts and Charges</h2>
            </div>

            <div className="textCard">
              <p>
                This tool is useful for adding extra parts or charges to a frame
                without affecting the actual fabrication data.
              </p>

              <p>
                Added parts will appear in reports and BOMs, but they will not
                generate fabrication instructions.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.addParts} alt="Add parts and charges window" />
            </div>

            <div className="panelSpacer" />

            <div className="panelHeader">
              <h2>Change Structural Parameters</h2>
            </div>

            <div className="textCard">
              <p>
                This screen is used to modify generic wind load and dead load
                values for the frame.
              </p>

              <p>
                These values do not qualify as engineered specifications and
                should be reviewed by a qualified engineer when required.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.structural}
                alt="Structural parameter settings"
              />
            </div>

            <div className="textCard">
              <h3>Import Laser Data</h3>
              <p>
                At the moment there is limited information available on this
                feature and additional details may be added later.
              </p>

              <h3>Load New Metal Group Data</h3>
              <p>
                This tool refreshes metal group data without manually reopening
                each frame individually.
              </p>

              <p>
                It is extremely useful when changes are made to metal groups on
                large projects.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>Menu Drop Downs Complete</h2>
            <p>
              You now understand the primary tools and options available through
              the Glazier Studio frame builder menu system.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 22px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
            margin-top: 22px;
          }

          .textCard p {
            margin: 0 0 18px;
            color: rgba(255, 255, 255, 0.84);
            line-height: 1.7;
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .textCard h3 {
            color: #f59e0b;
            margin: 0 0 10px;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            align-items: center;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 16px;
            border: 1px solid rgba(245, 158, 11, 0.18);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.4);
          }

          .imageWrap.small img {
            max-width: 320px;
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .panelSpacer {
            height: 28px;
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