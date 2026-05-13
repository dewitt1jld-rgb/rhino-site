import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-01-main-screen.png";

const screwsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-02-screws.png";

const arrowsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-03-arrows.png";

export default function RollerCleatAlignmentPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Roller Cleat Alignment</h1>
            <p>
              If the auto-loader belts are slipping, the fix is usually pretty
              simple. This page explains how to realign the cleats when they do
              not line up with the part.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Auto-loader roller cleat alignment" />

            <p className="helperText">
              When loading material, check whether a couple of cleats are out of
              position compared to the part. If they are, follow the process
              below to shift the belts back into alignment.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>How the Belts Are Driven</h2>
              <p>
                All of the auto-loader belts are driven by the motor on the back
                side of the rail.
              </p>
            </div>

            <p className="helperText">
              The motor turns the steel shafts connected to each belt through
              large coupling blocks. Each coupling block has two bolts, one on
              each side.
            </p>

            <img src={screwsImage} alt="Auto-loader coupling block screws" />

            <p className="helperText">
              When machines are installed, the bolts are positioned as straight
              and accessible as possible. If you cannot access the screws, have
              someone press the <strong>ADVANCE</strong> button a few times until
              the bolts rotate into view.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>Disengage the Correct Coupler</h2>
            </div>

            <img src={arrowsImage} alt="Coupler bolts marked with arrows" />

            <p className="helperText">
              This motor moves everything. The goal of shifting the belts back
              into place is to disengage the belt section from this motor so the
              belts can move freely.
            </p>

            <p className="helperText">
              Most of the time, the belts shift in sections. For example, four
              belts may be perfectly aligned while three belts are off by a few
              inches. Go to the first table that is off and work on those
              couplers.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Which Coupler to Loosen</h2>
            </div>

            <p className="helperText">
              Viewing this from the back of the machine, if the incorrect belts
              are on the left side of the motor, loosen the coupler block to the
              right of the belts you want to rotate.
            </p>

            <p className="helperText">
              If the incorrect belts are on the right side of the motor, loosen
              the coupler block to the left of the belts you want to rotate.
            </p>
          </section>

          <section className="completionBox">
            <h2>Best Alignment Method</h2>
            <p>
              The easiest way to get all the belts aligned is to take a
              289&quot; extrusion and line it up with the good belts.
            </p>

            <p>
              Once the incorrect belts are broken free from the motor, rotate
              them until they align with the extrusion. Then tighten the bolts so
              the belts re-engage with the motor.
            </p>
          </section>

          <section className="callout warning">
            <h3>Older Machines</h3>
            <p>
              On older machines, these couplers can be rusty and you may have to
              loosen a few bolts to get anything to move. Using some WD-40 can
              also help.
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

          .center img,
          .panel img {
            display: block;
            max-width: 850px;
            width: 100%;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}