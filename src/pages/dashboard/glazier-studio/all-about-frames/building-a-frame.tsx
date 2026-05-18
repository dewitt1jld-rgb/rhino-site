import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  notInstalled:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-01-not-installed.png",
  mainScreen:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-02-main-screen.png",
  frameBuilder:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-03-frames-builder.png",
  selectProjects:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-04-select-projects.png",
  addFrameButton:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-05-add-frame-button.png",
  frameAdded:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-06-frame-added.png",
  addDoorLeft:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-07-add-door-left.png",
  addDoorRight:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-08-add-door-right.png",
  dloWidth:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-09-dlo-width.png",
  dloHeight:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-10-dlo-height.png",
  selectStick:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-11-select-a-stick.png",
  insertSticks:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-12-insert-sticks.png",
  editorToolbar:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-13-editor-toolbar.png",
  frameInfo:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-14-frame-info.png",
  shortcutKeys:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-23-short-cut-keys.png",
  subsill:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/images/frame-24-subsill.png",
};

const vid = {
  catalogSelection:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-01-vendor.mp4",
  reverseJoin:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-02-reverese-join.mp4",
  horizontalAlign:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-03-horizontal-stick-align.mp4",
  kneeWall:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-04-knee-wall.mp4",
  crippleHeader:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-05-cripple-door-header.mp4",
  spliceLocations:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/building-frames/videos/frame-video-06-set-splice-locations.mp4",
};

export default function BuildingAFramePage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / All About Frames /
            Building a Frame
          </div>

          <section className="heroPanel">
            <p className="eyebrow">All About Frames</p>
            <h1>Building a Frame</h1>
            <p className="helperText">
              This page walks through the general workflow for creating a frame
              in Glazier Studio or PartnerPak, including project setup, vendor
              selection, metal groups, frame options, DLO sizing, doors, stick
              edits, and common frame-building tools.
            </p>
          </section>

          <section className="callout info">
            PartnerPak and Glazier Studio work nearly the same way for this
            process. The main difference is that PartnerPak has fewer catalog
            and setup features, while Glazier Studio includes the full toolset.
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Before Building Frames</p>
              <h2>Start with a properly configured metal group</h2>
            </div>

            <p className="helperText">
              Building a frame is much easier when the project is set up
              correctly from the beginning. Before creating a large number of
              frames, make sure the metal group is customized for the project.
              This should include the correct design style, catalog parts, and
              undercuts.
            </p>

            <div className="callout warning">
              If the metal group is not correct, the frame may still build, but
              the parts, pricing, fabrication, and output may not match what you
              actually need.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">All Projects Screen</p>
              <h2>Understand the software layout first</h2>
            </div>

            <p className="helperText">
              The left side of the screen is where you will move between
              software areas. The center of the screen shows the frame, project
              data, and part information. The right side is where you will name
              projects, enter frame sizes, select metal groups, and access frame
              settings.
            </p>

            <div className="imageWrap">
              <img src={img.mainScreen} alt="Main Glazier Studio screen" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 1</p>
              <h2>Choose a vendor</h2>
            </div>

            <p className="helperText">
              In the top-right corner, select the vendor you are using for the
              current project. Open the vendor dropdown and choose the correct
              option.
            </p>

            <video className="videoFrame" controls src={vid.catalogSelection} />

            <div className="callout warning">
              If selecting a vendor produces a catalog error, the catalog may
              not be installed. Contact DeMichele Group support and request
              access to the needed catalog.
            </div>

            <div className="imageWrap small">
              <img src={img.notInstalled} alt="Catalog not installed message" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 2</p>
              <h2>Create the project</h2>
            </div>

            <p className="helperText">
              If there are no current projects in the center of the screen, use
              the project builder to start a new job. The only truly required
              field is the project name, but filling in additional fields helps
              keep the project organized.
            </p>

            <div className="imageWrap">
              <img src={img.frameBuilder} alt="Frame builder screen" />
            </div>

            <p className="helperText">
              After entering the project name, click the green Create Project
              button. The software will move you into the frame-building screen.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 3</p>
              <h2>Choose a metal group and frame settings</h2>
            </div>

            <p className="helperText">
              Selecting the correct metal group is one of the most important
              parts of building the project. The metal group controls the system,
              part behavior, and how closely the project matches your actual
              shop drawings.
            </p>

            <div className="imageWrap medium">
              <img src={img.selectProjects} alt="Project and frame selection" />
            </div>

            <div className="settingsGrid">
              <div>
                <h3>Frame Color</h3>
                <p>Choose the back member and face member color.</p>
              </div>
              <div>
                <h3>Glass Options</h3>
                <p>Select glass now or leave it as-is and update it later.</p>
              </div>
              <div>
                <h3>Frame Name</h3>
                <p>
                  Use clear names to organize phases, areas, elevations, or
                  frame sets.
                </p>
              </div>
              <div>
                <h3>Frame Shape</h3>
                <p>
                  Used for standard and non-standard frame shapes. Special
                  shapes are covered separately.
                </p>
              </div>
              <div>
                <h3>Include RO Dim</h3>
                <p>
                  Use this when shop drawings include rough opening dimensions.
                </p>
              </div>
              <div>
                <h3>Panels and Rows</h3>
                <p>
                  Panels are vertical bays. Rows are horizontal bays. Count the
                  glass openings to determine each value.
                </p>
              </div>
              <div>
                <h3>Width and Height</h3>
                <p>
                  Confirm whether you are entering rough opening or overall
                  frame dimensions.
                </p>
              </div>
              <div>
                <h3>Sealant Options</h3>
                <p>
                  Most of the time this stays as-is unless you are adjusting
                  caulking or sealant behavior.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 4</p>
              <h2>Add the frame</h2>
            </div>

            <p className="helperText">
              Once the settings are correct, click the green Add Frame button.
              The frame will build and the DLOs will usually be centered in the
              frame.
            </p>

            <div className="imageGrid two">
              <img
  src={img.addFrameButton}
  alt="Add frame button"
  style={{
    maxWidth: "120px",
    margin: "0 auto",
    display: "block",
  }}
/>
              <img src={img.frameAdded} alt="Frame added to project" />
            </div>

            <p className="helperText">
              From here, there are many ways to finish the frame, but a few
              habits help keep the process smoother and more predictable.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 5</p>
              <h2>Add doors first</h2>
            </div>

            <p className="helperText">
              If the frame has a door, place the door before doing the rest of
              the frame edits. Right-click the glass opening where the door
              belongs and choose the correct door type.
            </p>

      <div className="imageGrid two">
  <img
    src={img.addDoorLeft}
    alt="Door tools"
    style={{
      maxWidth: "280px",
      margin: "0 auto",
      display: "block",
    }}
  />

  <img
    src={img.addDoorRight}
    alt="Insert door menu"
    style={{
      maxWidth: "280px",
      margin: "0 auto",
      display: "block",
    }}
  />
</div>

            <div className="callout info">
              Doors can get complicated depending on what you need the software
              to do. Door-specific workflows should be handled on a dedicated
              door lesson page.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 6</p>
              <h2>Set DLO sizes</h2>
            </div>

            <p className="helperText">
              After doors, set the panel widths from left to right, then set the
              row heights from top to bottom. Click the glass opening, then edit
              the DLO size on the right side of the screen.
            </p>

            <div className="imageGrid two">
              <img src={img.dloWidth} alt="DLO width setting" />
              <img src={img.dloHeight} alt="DLO height setting" />
            </div>

            <div className="callout info">
              You can set both width and height from the selected glass opening.
              Press Enter after changing the width, then enter the height and
              press Enter again.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 7</p>
              <h2>Select sticks and adjust centerlines</h2>
            </div>

            <p className="helperText">
              To set a stick by centerline, click the stick and edit the center
              line location on the right side. Enter the correct location from
              the shop drawings and press Enter.
            </p>

            <div className="imageWrap">
              <img src={img.selectStick} alt="Selected stick centerline" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 8</p>
              <h2>Insert or delete sticks</h2>
            </div>

            <p className="helperText">
              To add a vertical or horizontal stick to a bay, click the bay and
              right-click to open the menu. Choose Insert Vertical or Insert
              Horizontal. To delete a stick, click it until it highlights green,
              then press Delete.
            </p>

      <div className="imageWrap small">
  <img
    src={img.insertSticks}
    alt="Insert stick menu"
    style={{
      maxWidth: "260px",
      margin: "0 auto",
      display: "block",
    }}
  />
</div>
</section>

<section className="panel">
  <div className="panelHeader">
    <p className="eyebrow">Advanced Frame Edits</p>
    <h2>Reverse joins, horizontals, knee walls, and headers</h2>
  </div>

  <div className="videoGrid">
    <div className="videoCard">
      <div className="videoText">
        <div className="videoStep">8</div>

        <div>
          <h3>Reverse Join</h3>

          <p>
            Sometimes engineers want certain sticks to run through the frame
            while others stop short for design or aesthetic reasons.
          </p>

          <p>
            You can normally control this through the design style in the metal
            group, but individual sticks can also be changed manually using
            Reverse Joinery.
          </p>

          <p>
            Click the stick closest to the edge you want reversed, right-click,
            and choose <strong>Reverse Joinery</strong>.
          </p>
        </div>
      </div>

      <video controls src={vid.reverseJoin} />
    </div>

    <div className="videoCard">
      <div className="videoText">
        <div className="videoStep">9</div>

        <div>
          <h3>Matching Horizontals</h3>

          <p>
            If a door exists in the frame, you may need all horizontals to line
            up with the door header.
          </p>

          <p>
            Click the stick already in the correct position, then click the
            remaining sticks that need to move.
          </p>

          <div className="callout info">
            Press ENTER twice on the keyboard after selecting the sticks.
          </div>
        </div>
      </div>

      <video controls src={vid.horizontalAlign} />
    </div>

    <div className="videoCard">
      <div className="videoText">
        <div className="videoStep">10</div>

        <div>
          <h3>Raising Knee Walls</h3>

          <p>
            This works similarly to matching horizontals, but is commonly used
            for door knee wall conditions.
          </p>

          <p>
            Select the correctly positioned stick first, then select the sticks
            that need to move into alignment.
          </p>

          <div className="callout info">
            Press ENTER twice after selecting the sticks.
          </div>
        </div>
      </div>

      <video controls src={vid.kneeWall} />
    </div>

    <div className="videoCard">
      <div className="videoText">
        <div className="videoStep">11</div>
   
        <div>
          <h3>Crippled Header</h3>

          <p>
            To create a crippled header across adjacent bays, first remove the
            horizontals on each side of the door header.
          </p>

          <p>
            Reverse Join both sides of the door header, then delete the
            verticals above the door.
          </p>

          <div className="callout warning">
            Use the DELETE key. Backspace will not work.
          </div>
        </div>
      </div>

      <video controls src={vid.crippleHeader} />
    </div>

    <div className="videoCard">
      <div className="videoText">
        <div className="videoStep">12</div>

        <div>
          <h3>Set Splice Locations</h3>

          <p>
            On taller frames requiring splices, open Curtain Wall Settings and
            select all verticals before opening the Curtain Wall tab.
          </p>

          <p>
            Choose Set Splice Location and define up to three splice locations.
            You can also configure splice gaps and face cap offsets.
          </p>
        </div>
      </div>

      <video controls src={vid.spliceLocations} />
    </div>
  </div>
</section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Editor Tools</p>
              <h2>Toolbar and frame information</h2>
            </div>

            <div className="imageGrid two">
              <img src={img.editorToolbar} alt="Editor toolbar" />
              <img src={img.frameInfo} alt="Frame information toolbar" />
            </div>

            <p className="helperText">
              The editor toolbar below the frame allows you to move, zoom, and
              inspect the frame. This is especially helpful when working with
              large frames.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Shortcut Keys</p>
              <h2>Useful keyboard shortcuts</h2>
            </div>

            <div className="imageWrap">
              <img src={img.shortcutKeys} alt="Glazier Studio shortcut keys" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Sill Channel Height</p>
              <h2>Changing sill channel height</h2>
            </div>

            <p className="helperText">
              Sill channel height cannot be changed directly in the frame
              editor. To change it, go to the catalog parts screen, find the
              sill channel, and adjust the dimension from the part itself.
            </p>

            <div className="imageWrap small">
              <img src={img.subsill} alt="Sill channel height example" />
            </div>
          </section>

          <section className="completionBox">
            <h2>Building a Frame Complete</h2>
            <p>
              Once the vendor, metal group, dimensions, doors, DLOs, sticks, and
              special conditions are correct, save the frame before moving on.
              Glazier Studio does not automatically save your work.
            </p>
          </section>
        </div>

        <style jsx>{`
          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 22px auto;
          }

          .imageWrap img,
          .imageGrid img {
            width: 100%;
            max-width: 1000px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.small img {
            max-width: 520px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          .imageGrid {
            display: grid;
            gap: 22px;
            margin: 24px 0;
          }

          .imageGrid.two {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: center;
          }

          .settingsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 24px;
          }

          .settingsGrid div {
            padding: 18px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.2);
          }
            .videoCard {
  display: grid;
  gap: 18px;
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(245, 158, 11, 0.18);
}

.videoText {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 16px;
  align-items: start;
}

.videoStep {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 158, 11, 0.14);
  border: 1px solid rgba(245, 158, 11, 0.32);
  color: #f59e0b;
  font-weight: 900;
  font-size: 1rem;
}

.videoText p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
}

          .settingsGrid h3,
          .videoGrid h3 {
            margin: 0 0 8px;
            color: #f59e0b;
            font-size: 1rem;
          }

          .settingsGrid p {
            margin: 0;
            color: rgba(255, 255, 255, 0.78);
            line-height: 1.55;
          }

          .videoFrame {
            display: block;
            width: 100%;
            max-width: 520px;
            margin: 24px auto;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .videoGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
            margin-top: 24px;
          }

          .videoGrid video {
            width: 100%;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          @media (max-width: 850px) {
            .imageGrid.two,
            .settingsGrid,
            .videoGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}