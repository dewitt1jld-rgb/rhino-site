import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-01-main-screen.png",
  design: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-02-door-group-design.png",
  saveDatabase: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-03-okay-cancel.png",
  naming: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-04-naming.png",
  entrances: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-05-entrances.png",
  handing: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-editor/images/door-editor-06-handing.png",
};

export default function DoorEditorPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Doors & Library Fab /
            Door Editor
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Doors & Library Fab</p>
            <h1>Door Editor</h1>

            <p className="helperText">
              Doors can feel confusing at first, but the Door Editor is
              designed to simplify the process and make it easier to create,
              organize, and fabricate standard door conditions.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Main Door Editor</p>
              <h2>Understanding the standard door editor screen</h2>
            </div>

            <div className="imageWrap">
              <img src={img.main} alt="Door editor main screen" />
            </div>

            <p className="helperText centerText">
              While every vendor is slightly different, the overall workflow and
              concept remain mostly the same across systems.
            </p>

            <div className="callout warning">
              Always add doors first when building a frame whenever possible.
            </div>

            <ul className="trainingList">
              <li>
                Most of the time, the software only truly cares about the
                overall door size and handing.
              </li>

              <li>
                Many fields inside the Door Editor are primarily graphical or
                organizational and do not directly affect fabrication.
              </li>

              <li>
                Different vendors organize doors differently. Some use standard
                entrances while others use custom sections.
              </li>

              <li>
                Adding hardware inside this screen usually does not add
                fabrication prep automatically. Fabrication prep still normally
                happens later through fabrication workflows.
              </li>

              <li>
                Standard door sizes are based on opening dimensions, not the
                exact physical door slab size.
              </li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Door Group Design</p>
              <h2>Important fields inside the door editor</h2>
            </div>

        <div className="imageWrap medium">
  <img
    src={img.design}
    alt="Door group design fields"
    style={{
      maxWidth: "420px",
      margin: "0 auto",
      display: "block",
    }}
  />
</div>

            <div className="callout info">
              This example is mainly intended for users ordering standard doors
              or using doors graphically inside the project rather than building
              custom fabricated doors directly from scratch.
            </div>

            <p className="helperText">
              PartnerPak primarily relies on the fields highlighted in yellow.
              Many of the remaining sections are optional depending on your
              workflow.
            </p>

            <p className="helperText italicText">
              Even if many sections appear blank, the software can still fully
              function as long as the required size and handing information is
              present.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Name / Description</p>
              <h2>Saving commonly used door configurations</h2>
            </div>

            <p className="helperText">
              The Name and Description fields are not technically required, but
              they become extremely helpful when repeatedly using the same door
              types throughout multiple projects.
            </p>

            <div className="twoColumn">
              <div>
                <p className="helperText">
                  In the lower-right corner of the screen there is a button
                  labeled <strong>Save To Database</strong>.
                </p>

                <div className="imageWrap tiny">
                  <img
                    src={img.saveDatabase}
                    alt="Save to database button"
                  />
                </div>

                <p className="helperText">
                  This allows you to save the current door setup so future doors
                  can be added quickly without manually entering every field
                  again.
                </p>
              </div>

              <div>
                <div className="imageWrap small">
                  <img
                    src={img.naming}
                    alt="Saved door naming example"
                  />
                </div>

                <p className="helperText">
                  After saving, the door preset will appear in the list on the
                  left side of the Door Editor for future use.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Door Type</p>
              <h2>Choosing the correct entrance type</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img
                  src={img.entrances}
                  alt="Entrance type dropdown"
                />
              </div>

              <div>
                <p className="helperText">
                  The Door Type field is normally based directly on the vendor’s
                  pricing catalog.
                </p>

                <p className="helperText">
                  When you open the dropdown, most options will display a short
                  description explaining the type of entrance system being used.
                </p>

                <div className="callout info">
                  If you only need a very basic standard door, most of the time
                  leaving the type at the default A1 option is sufficient.
                </div>
              </div>
            </div>

            <h3 className="subTitle">Door Height and Width</h3>

            <p className="helperText centerText">
              These dimensions represent the opening size — not the exact door
              slab size. The software automatically calculates the required
              clearances and gaps.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Handing</p>
              <h2>Understanding PartnerPak door handing</h2>
            </div>

            <p className="helperText centerText">
              In Glazier Studio and PartnerPak, handing is determined by looking
              at the hinge side of the door and whether it swings in or out.
            </p>

            <div className="imageWrap tiny">
              <img src={img.handing} alt="Door handing dropdown" />
            </div>

            <div className="handingGrid">
              <div className="handingCard">
                <strong>HRSO</strong>
                <span>Hinge Right Swing Out</span>
              </div>

              <div className="handingCard">
                <strong>HRSI</strong>
                <span>Hinge Right Swing In</span>
              </div>

              <div className="handingCard">
                <strong>HLSO</strong>
                <span>Hinge Left Swing Out</span>
              </div>

              <div className="handingCard">
                <strong>HLSI</strong>
                <span>Hinge Left Swing In</span>
              </div>

              <div className="handingCard">
                <strong>HRCHDA</strong>
                <span>Hinge Right Continuous Hinge Double Acting</span>
              </div>

              <div className="handingCard">
                <strong>HLCHDA</strong>
                <span>Hinge Left Continuous Hinge Double Acting</span>
              </div>
            </div>

            <div className="callout warning">
              The continuous hinge wording mostly affects graphical
              representation. Handing itself is what truly matters for most
              workflows.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Style & Door Numbers</p>
              <h2>Additional organizational fields</h2>
            </div>

            <h3 className="subTitle">Style</h3>

            <p className="helperText centerText">
              Door style usually controls the graphical appearance and member
              width representation.
            </p>

            <div className="styleGrid">
              <div className="styleCard">190 = Narrow</div>
              <div className="styleCard">350 = Medium</div>
              <div className="styleCard">500 = Wide</div>
            </div>

            <h3 className="subTitle">Door Number / Frame Number</h3>

            <p className="helperText">
              These fields are mostly organizational unless you are directly
              ordering doors or integrating tightly with vendor catalogs.
            </p>

            <p className="helperText">
              The biggest advantage of these fields is helping users quickly
              identify and locate doors later inside large projects.
            </p>
          </section>

          <section className="completionBox">
            <h2>Door Editor Complete</h2>

            <p>
              Once you understand door sizing, handing, entrance types, and
              saved presets, building and organizing doors inside Glazier Studio
              becomes dramatically easier.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
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
            max-width: 950px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.tiny img {
            max-width: 260px;
          }

          .imageWrap.small img {
            max-width: 420px;
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .trainingList {
            margin-top: 24px;
            padding-left: 24px;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.9;
            display: grid;
            gap: 16px;
          }

          .centerText {
            text-align: center;
          }

          .italicText {
            font-style: italic;
          }

          .subTitle {
            margin-top: 36px;
            margin-bottom: 18px;
            text-align: center;
          }

          .handingGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 18px;
            margin-top: 28px;
          }

          .handingCard {
            padding: 18px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .handingCard strong {
            color: #f59e0b;
            font-size: 1rem;
          }

          .handingCard span {
            color: rgba(255, 255, 255, 0.78);
            line-height: 1.6;
          }

          .styleGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-top: 20px;
          }

          .styleCard {
            padding: 20px;
            text-align: center;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
            font-weight: 700;
            color: #f59e0b;
          }

          @media (max-width: 900px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }

            .styleGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}