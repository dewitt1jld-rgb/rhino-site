import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const image01 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-01-main.png";

const image02 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-02-job-selection.png";

const image03 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-03-main-alt-screen.png";

const image04 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-04-save-changes.png";

const image05 =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/alternate-bid/images/alternate-bid-05-create.png";

export default function AlternateBidPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / All About Frames /
            Alternate Bid
          </div>

          <section className="heroPanel">
            <p className="eyebrow">All About Frames</p>
            <h1>Alternate Bid</h1>

            <p className="helperText">
              The Alternate Bid tool allows you to quickly duplicate a project
              into another vendor or metal group so pricing and system options
              can be compared without rebuilding the job from scratch.
            </p>
          </section>

          <section className="panel">
            <div className="twoColumn">
              <div>
                <div className="panelHeader">
                  <p className="eyebrow">What This Tool Does</p>
                  <h2>Quickly duplicate and modify projects</h2>
                </div>

                <p className="helperText">
                  This screen can be found on the left side of the program
                  underneath the All Projects section.
                </p>

                <p className="helperText">
                  While the main purpose is comparing vendor pricing, this tool
                  is also extremely useful for correcting projects that were
                  originally built with the wrong metal group.
                </p>
              </div>

              <div className="imageWrap">
                <img
                  src={image01}
                  alt="Alternate Bid menu location"
                />
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 1</p>
              <h2>Select the project</h2>
            </div>

            <div className="stepCard">
              <div className="stepNumber">1</div>

              <div>
                <p>
                  Start in the All Projects screen and select the project you
                  want to work with. Once the project is highlighted, click on
                  <strong> Alternate Bid</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 2</p>
              <h2>Create the alternate bid project</h2>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <div>
                <p>
                  The program will ask for a new project name and then open the
                  Alternate Bid editor screen.
                </p>

                <p>
                  Start by clicking on the first frame in the project tree.
                  You must click directly on the frame name. A checked box does
                  not automatically mean the frame is selected.
                </p>

                <div className="callout warning">
                  The frame name itself should highlight blue when properly
                  selected.
                </div>
              </div>
            </div>

            <div className="imageGrid">
              <img
  src={image02}
  alt="Frame selection tree"
  style={{
    maxWidth: "340px",
    margin: "0 auto",
    display: "block",
  }}
/>
              <img src={image03} alt="Alternate bid editor screen" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 3</p>
              <h2>Modify the frame settings</h2>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <div>
                <p>
                  Once the frame is selected and visible in the preview window,
                  use the editor on the right side to change the settings you
                  want.
                </p>

                <p>
                  Most of the time, the only changes needed are:
                </p>

                <ul className="bulletList">
                  <li>Vendor</li>
                  <li>Metal Group</li>
                </ul>

                <div className="callout info">
                  If you need to modify frame sizes or geometry, it is usually
                  better to do that inside the Frame Editor instead of Alternate
                  Bid.
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 4</p>
              <h2>Apply changes to the frame set</h2>
            </div>

            <div className="imageWrap small">
              <img
                src={image04}
                alt="Apply changes to all frames popup"
              />
            </div>

            <p className="helperText centerText">
              This popup asks whether you want the changes applied to all frames
              in the frame set.
            </p>

            <div className="callout info">
              Selecting YES automatically applies the same changes to the rest
              of the frames in the set. Selecting NO means every frame must be
              changed manually.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Step 5</p>
              <h2>Create the alternate bid</h2>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <div>
                <p>
                  After all frame changes are complete, click the green
                  <strong> Create Alternate Bid</strong> button at the bottom
                  of the screen.
                </p>
              </div>
            </div>

            <div className="imageWrap small">
              <img
                src={image05}
                alt="Create Alternate Bid button"
              />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Final Processing</p>
              <h2>Review the completed project</h2>
            </div>

            <p className="helperText">
              The screen may flash several times while the software re-saves
              every frame and applies the changes.
            </p>

            <p className="helperText">
              Depending on project size, you may receive several popup windows
              regarding stick replacements or project changes. In most cases the
              replacements are identical and can simply be accepted, but review
              them carefully if something looks different.
            </p>

            <div className="callout warning">
              Once the alternate bid finishes processing, perform a quick review
              of the frames and dimensions to verify nothing changed
              unintentionally.
            </div>
          </section>

          <section className="completionBox">
            <h2>Alternate Bid Complete</h2>

            <p>
              Your duplicated project should now appear in the All Projects
              list, ready for pricing comparison, vendor changes, or metal group
              corrections.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 28px;
            align-items: center;
          }

          .stepCard {
            display: grid;
            grid-template-columns: 58px 1fr;
            gap: 18px;
            padding: 22px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.2);
          }

          .stepNumber {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(245, 158, 11, 0.14);
            border: 1px solid rgba(245, 158, 11, 0.32);
            color: #f59e0b;
            font-weight: 950;
            font-size: 1.1rem;
          }

          .stepCard p {
            margin-top: 0;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.82);
          }

          .bulletList {
            margin-top: 12px;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.7;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .imageWrap img {
            width: 100%;
            max-width: 900px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.small img {
            max-width: 520px;
          }

          .imageGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 22px;
            margin-top: 24px;
          }

          .imageGrid img {
            width: 100%;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .centerText {
            text-align: center;
          }

          @media (max-width: 900px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }

            .stepCard {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}