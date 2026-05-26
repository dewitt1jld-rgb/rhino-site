import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-01-main-screen.png",
  importButton: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-02-import.png",
  selectJob: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-03-select-job.png",
  fabs: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-04-fabs.png",
  existing: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-05-existing.png",
  newName: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-06-new-name.png",
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-07-metal-fab-main.png",
  previewFrames: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-08-preview-frames.png",
  stickIds: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-09-stick-ids.png",
  colorGrid: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-10-color-grid.png",
  colorsInAction: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-11-colors-in-action.png",
  redX: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-12-red-x.png",
  preview: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-13-preview.png",
  addOp: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-14-add-op.png",
  holePattern: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-15-hole-pattern.png",
  fabData: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-16-data.png",
  startPoint: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-17-start-point.png",
  output: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-18-output.png",
  angles: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-19-angles.png",
  angleHelp: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-20-angle-help.png",
  angleScreen: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-21-angle-screen.png",
  rotational: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/metal-fabrication/images/metal-fabrication-21-rotational-drill.png",
};

export default function MetalFabricationPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Glazier Studio / All About Frames / Metal Fabrication
          </div>

          <section className="heroPanel">
            <p className="eyebrow">All About Frames</p>
            <h1>Metal Fabrication</h1>
            <p className="helperText">
              Understanding the Metal Fabrication screen, fabrication errors,
              outputting to the Rhino and manually troubleshooting fabrication
              issues.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>METAL FABRICATION</h2>
            </div>

            <div className="imageWrap">
              <img src={img.main} alt="Metal fabrication main screen" />
            </div>

            <div className="textCard">
              <p>
                I'm only showing a portion of this page as it is too large to
                include the whole thing. This is probably my favorite page in
                the software because there is so much info and so many options!
                I will break it down into sections and guide you through all the
                capabilities. For the sake of everyone reading this I will keep
                this page to the most typically used items. I will leave links
                to other pages for the less used items.
              </p>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.importButton} alt="Import project button" />
              </div>

              <div className="textCard">
                <h3>Lets start with the obvious, How to get jobs into this screen!</h3>

                <p>
                  To merge a job into this screen you must first have a frame
                  built in the projects screen. You can import that project by
                  clicking the button "Import Project". This will open a screen
                  that shows you all of your completed frames and you must
                  choose from that list which ones you want to import.
                </p>
              </div>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.selectJob} alt="Selecting jobs to import" />
              </div>

              <div className="textCard">
                <p>
                  This is in preparation to send to the rhino. Lets say you
                  have a large job and its divided up between East and West wall
                  frames. If you want to import only the East jobs, Click the
                  small plus button and select the frames you want to run on the
                  saw!
                </p>

                <p>
                  If you are importing the job for the first time you will not
                  see any pop ups, it will just pull in and be ready to review.
                  On larger jobs it may take a while to import all of the
                  frames. If you get impatient like me there is a little task
                  bar in the bottom left hand corner of the screen to show you
                  how far along it is.
                </p>
              </div>
            </div>

            <div className="imageGrid two">
              <img src={img.existing} alt="Existing fabrication job popup" />
              <img src={img.newName} alt="Rename fabrication job popup" />
            </div>

            <div className="textCard">
              <p>
                If you have already imported the job and you are Re-importing,
                you will see this message pop up, if you say yes it will just
                replace the existing job. If you say No it will give you the
                option to rename the job.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>THE DATA</h2>
            </div>

            <div className="imageWrap">
              <img src={img.data} alt="Metal fabrication data table" />
            </div>

            <div className="textCard">
              <p>
                All of the line items at the bottom of the page are the parts
                associated with the job you imported. Every part will get broken
                down into a line item and have a Part ID associated with it.
                Each column can be expanded to see the information better but
                the most useful info is located on the left side and the least
                useful info is located on the right side. I would argue that the
                columns between part ID and trailing angle B are very important.
                Everything else doesn't really matter at this point in the
                process.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>STICK ID'S</h2>
            </div>

            <div className="textCard">
              <p>
                Stick ID's or Part ID's (same thing) are automatically assigned
                by the program. You can see which part ID's are assigned to
                which stick by clicking the button "Preview Frame" in the top
                right corner of the screen.
              </p>
            </div>

            <div className="imageWrap small">
              <img src={img.previewFrames} alt="Preview frame button" />
            </div>

            <div className="twoColumn">
              <div className="imageWrap medium">
                <img src={img.stickIds} alt="Stick ID example" />
              </div>

              <div className="textCard">
                <p>
                  A screen similar to the one on the left will appear and show
                  you your frames and associated stick ID's. You can navigate
                  from one frame to the next at the bottom of the screen. Main
                  members are just labeled with numbers and face cap will be
                  labeled with the main member ID followed by an FC. PP for
                  pressure plate, SC for sill channel and HC for head channel.
                  This is a great way to see exactly what sticks are having
                  issues or are missing fabrications.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>FABRICATION ERRORS</h2>
            </div>

            <div className="imageWrap">
              <img src={img.colorGrid} alt="Color coded fabrication errors" />
            </div>

            <div className="textCard">
              <p>
                Each error is color coded by the respective colors above. MOST
                OF THE TIME, you wont see any of these issues and even if you
                do, there is usually a valid reason for why the fabrications
                aren't there. The colors are only to alert you that there may be
                a problem. To actually dig into it you will have to use two
                screens. First I recommend going to the Frame preview screen in
                the top right corner for Red lines (missing fabs). All other
                colors, go into the add operation tab to see the specific fabs
                on each stick. I will break down each one.
              </p>
            </div>

            <div className="twoColumn">
              <div className="imageWrap medium">
                <img src={img.preview} alt="Preview frames missing fabs" />
              </div>

              <div className="textCard">
                <h3>Preview Frames</h3>

                <p>
                  I like to use this screen for Red lined missing fabs because
                  it will tell me exactly where it thinks the missing fabs should
                  go. In this case I can see that it I am missing all of my
                  horizontal Fabrications. Because horizontals pass their fabs to
                  the vertical I know that the problem is actually on stick 6
                  and 9 even though stick 1,2,3 and 4 are the ones highlighted
                  in red. I would then navigate to the horizontal part and look
                  at the secondary fabrication rules. If you need help with that
                  please see my secondary fabs page.
                </p>
              </div>
            </div>

            <div className="imageWrap medium">
              <img src={img.addOp} alt="Add operation button" />
            </div>

            <div className="textCard">
              <h3>Add Operations</h3>

              <p>
                For any other color error message, or just simply to double
                check your fabs, Press the square with the 3 dots which is the
                "Add operations" button
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.holePattern} alt="Hole pattern example" />
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.fabData} alt="Fab operation data" />
              </div>

              <div className="imageWrap small">
                <img src={img.startPoint} alt="Start point information" />
              </div>
            </div>

            <div className="textCard">
              <p>
                This is a similar to a part you may see. In this example we
                were looking at an orange line which meant "multiple tools". If
                you have a machine that is capable of doing tool changes, you
                can completely ignore this! If not then we need to sort out why
                some fabs are using a D12-A and some are using a D10-A. Again
                secondary fabs can be deceiving because even though this error
                is on a vertical stick, we are going to go to the secondary
                fabrication data of the horizontal to fix it.
              </p>

              <p>
                If we take this a step further and organize by the Y Axis, We
                can see that the fabrications are the ones furthest away from
                the lead edge of the part.
              </p>

              <p>
                In the top right hand corner of "add operation" there is some
                information that will tell you how the piece is getting ran
                through the machine. The start point in this stick is TOP. That
                means that the top or head of the vertical is going to go
                through the machine first and that becomes our "0" point or lead
                edge. That means the holes that are located at 68" must be our
                sill preps.
              </p>

              <p>
                Now that we have all the info we need we can go to the sill
                horizontal product code, press F2 to go to the catalog part
                screen and then navigate to the secondary fabrications tab and
                see why the preps are pulling in with a D12-A drill bit instead
                of a D10-A.
              </p>

              <p>
                This exact same process works even if you just want to change
                the size of the drill bit. nothing has to be wrong for you to go
                make changes to better suit the needs of your company.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>OUTPUT TO SAW</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.output} alt="Output to saw screen" />
            </div>

            <div className="textCard">
              <p>
                Once you have reviewed the job including sizes, fabs,
                quantities and fixed any errors, You are now ready to output.
                This guide is assuming you machine is already linked to the
                rhino. If you need help linking the two, I will make another
                guide on that and post a link to the side. For now, Just make
                sure you have the correct job highlighted and select click
                output. If everything is linked correctly you should see a
                folder called "Rhino Merge" show up and all you have to do is
                click save. You will also have the option of re-naming the job
                before you click save if you want to do that as well. This is
                useful when you have 2-3 revisions in the same folder. I
                typically time stamp them or name it different so the operator
                knows what job to pick.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>STICK ANGLES / COMPOUND ANGLES</h2>
            </div>

            <div className="textCard">
              <p>
                For the most part, Glazier Studio and Partner Pak are going to
                generate the cut lengths and the angles of your sticks based off
                of the frame you build. The exception is COMPOUND ANGLES.
                Compound angles must be added manually through the metal
                fabrication screen. This is done by clicking the drop down on
                leading angle type and selecting MITER/BEVEL.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.angles} alt="Stick angle settings" />
            </div>

            <div className="textCard">
              <p>
                This screen shows the 4 different options of cuts available on
                some of our machines You can Miter, Bevel, straight cut (none),
                and compound cut (miter/bevel)
              </p>

              <p>
                If you need help with knowing which angle is which. There is a
                really nice guide located right next to the grid color code. It
                looks like this
              </p>
            </div>

            <div className="imageWrap small">
              <img src={img.angleHelp} alt="Angle help button" />
            </div>

            <div className="panelHeader">
              <h2>ANGLE HELP</h2>
            </div>

            <div className="imageWrap">
              <img src={img.angleScreen} alt="Angle help guide" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>ANGLED DRILLING</h2>
            </div>

            <div className="textCard">
              <p>
                Another item that must be manually applied are any drill holes
                that need to be drilled at an angle. If you create a Raked top
                frame in the program you may notice that the fabrications pull
                in but the depth column gets wiped out. This is because the
                program knows they must be drilled at an angle. you can go into
                the "add operation" of each part that requires these holes and
                add an RX or RY value. This is what will cause the drill to
                rotate in either direction. There is also a guide located in the
                same spot as the Angle help guide shown above.
              </p>
            </div>

            <div className="panelHeader">
              <h2>ROTATIONAL SPINDLE GUIDE</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.rotational} alt="Rotational spindle guide" />
            </div>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
            margin-top: 24px;
          }

          .textCard p {
            margin: 0 0 18px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.88);
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .textCard h3 {
            color: #f59e0b;
            margin-bottom: 12px;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            align-items: center;
            margin-top: 28px;
          }

          .imageGrid {
            display: grid;
            gap: 22px;
            margin-top: 28px;
          }

          .imageGrid.two {
            grid-template-columns: repeat(2, 1fr);
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 28px auto;
          }

          .imageWrap img,
          .imageGrid img {
            width: 100%;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.18);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
          }

          .imageWrap.small img {
            max-width: 420px;
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          @media (max-width: 900px) {
            .twoColumn,
            .imageGrid.two {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}