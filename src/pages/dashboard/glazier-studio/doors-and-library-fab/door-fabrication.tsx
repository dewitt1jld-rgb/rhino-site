import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-01-main-screen.png",
  orientation: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-02-machine-orientation.png",
  saved: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-03-saved-fabrications.png",
  addOperation: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-04-add-opperation.png",
  addLibraryFab: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-05-add-library-fab.png",
  libraryFab: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-06-library-fab-screen.png",
  addingFabs: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-07-adding-fabs.png",
  fabScreen: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-08-fab-screen.png",
  detailView: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-09-detail-view.png",
  output: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-10-output.png",
  series5000: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/doors-and-library-fab/door-fab-screen/images/door-fabrication-11-5000series-dat.png",
};

export default function DoorFabricationPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Doors & Library Fab /
            Door Fabrication
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Doors & Library Fab</p>
            <h1>Door Fabrication</h1>

            <p className="helperText">
              The Door Fabrication screen works almost identically to Metal
              Fabrication except instead of processing frame members, it
              processes doors and door hardware preparations.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Main Screen</p>
              <h2>Importing doors into Door Fabrication</h2>
            </div>

            <div className="imageWrap">
              <img src={img.main} alt="Door fabrication main screen" />
            </div>

            <p className="helperText">
              To import doors, click the Import Project button near the top of
              the screen. This opens the frame selection window where you can
              choose which frames and doors to pull into Door Fabrication.
            </p>

            <div className="callout warning">
              Only the doors are imported into this screen. All frame members
              still go through normal Metal Fabrication.
            </div>

            <div className="callout danger">
              Avoid creating doors directly inside Door Fabrication unless you
              fully understand door sizing logic. It is usually far easier and
              safer to build the doors inside the Frame Builder first.
            </div>

            <p className="helperText centerText">
              A door is essentially just a rectangle. Most of the important
              information is the overall size, handing, and graphical style.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Machine Orientation</p>
              <h2>Verify the machine orientation before outputting</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap tiny">
                <img
                  src={img.orientation}
                  alt="Machine orientation dropdown"
                />
              </div>

              <div>
                <div className="callout info">
                  Make sure your machine orientation is set correctly before
                  outputting door fabrication files.
                </div>

                <p className="helperText">
                  This setting is normally found in the upper-right corner of
                  both the Door Fabrication and Metal Fabrication screens.
                </p>
              </div>
            </div>

            <div className="imageWrap">
              <img
                src={img.saved}
                alt="Saved fabrications and imported doors"
              />
            </div>

            <p className="helperText">
              After importing, each door appears as its own line item. Double
              doors are normally separated into individual entries because that
              is how the machine processes them.
            </p>

            <div className="callout warning">
              ALL hardware preps are added manually. There is no automatic
              hardware prep import from the Door Editor.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Adding Operations</p>
              <h2>Applying door hardware preparations</h2>
            </div>

            <div className="imageWrap small">
              <img
                src={img.addOperation}
                alt="Add operation button"
              />
            </div>

            <p className="helperText centerText">
              To apply hardware preparations, click the Add Operation button.
            </p>

            <div className="imageWrap">
              <img
                src={img.addLibraryFab}
                alt="Door fabrication operation screen"
              />
            </div>

            <p className="helperText">
              Doors initially appear blank because no hardware preps exist yet.
              Use the Add Library Fabs button in the lower-left corner to begin
              applying preparations.
            </p>

            <div className="imageWrap medium">
              <img
                src={img.libraryFab}
                alt="Library fab selection screen"
                  style={{ maxWidth: "600px" }}
              />
            </div>

            <p className="helperText">
              Select the hardware prep you want to apply using the dropdowns and
              filters. The filters can help narrow the list when hundreds of
              preparations exist.
            </p>

            <div className="callout info">
              Vendor and Fab Type filters are extremely helpful for narrowing
              large hardware prep libraries.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Applying Hardware Prep Locations</p>
              <h2>Positioning the hardware on the door</h2>
            </div>

        <div className="imageWrap">
  <img
    src={img.addingFabs}
    alt="Applying hardware prep locations"
    style={{ maxWidth: "700px" }}
  />
</div>

            <p className="helperText">
              Once a prep is selected, you must define where it will be located
              on the door. Many preps only require one location, while others
              may require multiple locations.
            </p>

            <p className="helperText">
              Most dimensions are entered from either the finished floor or from
              the bottom of the door depending on how the prep was designed.
            </p>

            <div className="callout danger">
              If you forget to press the ADD button after entering the
              dimensions, the prep may accidentally apply at the bottom of the
              door instead of the intended location.
            </div>

            <p className="helperText">
              After all prep locations are entered, click Apply to send the prep
              into the current door.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Reviewing the Fab Data</p>
              <h2>Checking the hardware prep output</h2>
            </div>

            <div className="imageWrap">
              <img
                src={img.fabScreen}
                alt="Door fabrication prep data"
              />
            </div>

            <p className="helperText">
              Once the prep has been applied, the fabrication table will display
              the associated operations and dimensional data.
            </p>

            <div className="callout info">
              If the dimensions in the table are correct, trust the fabrication
              data more than the graphical preview.
            </div>

            <p className="helperText">
              The graphics preview is helpful, but the actual X, Y, and Z values
              are what ultimately matter to the machine.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Detail View</p>
              <h2>Viewing a 3D representation of the prep</h2>
            </div>

            <div className="imageWrap">
              <img
                src={img.detailView}
                alt="Door fabrication detail view"
              />
            </div>

            <p className="helperText">
              Enabling Detail View and clicking Draw Fabs creates a much more
              realistic 3D representation of the hardware preparation.
            </p>

            <p className="helperText">
              This view is extremely helpful when verifying prep orientation,
              lock positions, and hinge alignment.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Outputting to the Machine</p>
              <h2>Sending the door fabrication files to the saw</h2>
            </div>

            <div className="imageWrap">
              <img
                src={img.output}
                alt="Door fabrication output screen"
                  style={{ maxWidth: "700px" }}
              />
            </div>

            <p className="helperText">
              Once all preps are complete, verify the correct project is
              selected and click Output.
            </p>

            <div className="callout warning">
              Make sure the saw is powered on and the correct file path is
              selected before outputting.
            </div>

            <h3 className="subTitle">5000 Series Machines</h3>

            <div className="imageWrap tiny">
              <img
                src={img.series5000}
                alt="5000 series DAT output file type"
              />
            </div>

            <p className="helperText centerText">
              If you are using a 5000 Series machine, ensure the correct DAT
              output type is selected before exporting the fabrication file.
            </p>

            <div className="callout info">
              Once configured correctly, the software will usually remember the
              selected file type for future outputs.
            </div>
          </section>

          <section className="completionBox">
            <h2>Door Fabrication Complete</h2>

            <p>
              Once the door preps are correctly configured and output files are
              generated properly, most future door fabrication jobs become
              extremely fast and repeatable.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 0.75fr 1.25fr;
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
            max-width: 1000px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.tiny img {
            max-width: 340px;
          }

          .imageWrap.small img {
            max-width: 700px;
          }

          .imageWrap.medium img {
            max-width: 820px;
          }

          .centerText {
            text-align: center;
          }

          .subTitle {
            margin-top: 36px;
            margin-bottom: 18px;
            text-align: center;
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