import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const capImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-01-cap.png";

const rollerImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-02-back-fence-roller.png";

const sawSideImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-03-back-fence-roller-saw-side.png";

const leftSideImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-04-back-fence-roller-left-side.png";

export default function BackFenceRollersPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Back Fence Rollers
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Back Fence Rollers</h1>
            <p>
              Every couple of weeks, check that each back fence roller is
              tightened down and rolling correctly.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>What to Check</h2>
            </div>

            <p className="helperText">
              The rollers should roll, but they should not wiggle. If you can
              wiggle the rollers back and forth, they are coming loose and need
              to be tightened.
            </p>

            <p className="helperText">
              If the rollers do not roll at all, remove them from the machine,
              remove the bolt, and clean out all chips from inside the back fence
              roller. Once cleaned, reinstall the roller and it should spin
              normally.
            </p>

            <div className="imageGrid">
              <img src={capImage} alt="Back fence roller cap" />
              <img src={rollerImage} alt="Back fence roller installed" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Accessing the Roller Bolts</h2>
            </div>

            <p className="helperText">
              You can access the bolts inside the rollers by using a razor blade
              or small screwdriver to pry off the cap of each roller.
            </p>

            <div className="callout info">
              <h3>Allen Size</h3>
              <p>
                Older machines usually use a <strong>6mm Allen</strong>. Newer
                machines usually use an <strong>8mm Allen</strong>.
              </p>
            </div>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>Where to Check</h2>
              <p>
                Back fence rollers run across both sides of the Fab and Saw
                cabinets.
              </p>
            </div>

            <div className="imageGrid">
              <img
                src={sawSideImage}
                alt="Back fence rollers on saw side"
              />
              <img
                src={leftSideImage}
                alt="Back fence rollers on left side"
              />
            </div>

            <p className="helperText">
              If you have a newer machine, the back fence rollers also continue
              down the infeed rail. These should also be checked every couple of
              weeks.
            </p>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 24px;
          }

          .eyebrow {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .center {
            text-align: center;
          }

          .imageGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            align-items: center;
            margin-top: 28px;
          }

          img {
            display: block;
            width: 100%;
            max-width: 700px;
            height: auto;
            margin: 0 auto;
            border-radius: 14px;
          }

          @media (max-width: 800px) {
            .imageGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}