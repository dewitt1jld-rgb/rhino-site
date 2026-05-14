import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const systemSettingsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-01-system-settings.png";

const orangeRollerImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-02-orange-roller.png";

export default function IncorrectPartLengthPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Incorrect Part Length
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Incorrect Part Lengths</h1>
            <p>
              Incorrect part lengths can be caused by two things on
              non-compound saws and three things on compound saws. Let&apos;s
              break them down.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Non-5000 Series / No Compound Cuts</h2>
              <p>
                The first thing to understand is saw kerf. Saw kerf is the
                thickness of the cut the saw blade creates when cutting through a
                part.
              </p>
            </div>

            <div className="callout warning">
              <h3>Before Adjusting Saw Kerf</h3>
              <p>
                If your cut sizes are consistently off by more than 1/16&quot;,
                do not adjust your kerf yet. You likely have another issue that
                should be fixed first.
              </p>
            </div>

            <p className="helperText">
              The best way to measure saw kerf is to cut halfway through a part
              and measure the gap created by the saw blade. Saw blade kerf and
              saw blade thickness are not exactly the same. They will be close,
              but vibration in the blade can make them slightly different.
            </p>

            <p className="helperText">
              In RhinoFab, saw kerf acts like a fudge factor to increase or
              decrease the finished stick length. If every part is consistently
              short by 1/32&quot;, increasing the saw kerf will increase all of
              the parts by that same amount.
            </p>
          </section>

          <section className="panel center">
            <img src={systemSettingsImage} alt="System settings saw kerf" />

            <div className="kerfGrid">
              <div>
                <h3>Increasing Saw Kerf</h3>
                <p>Increases part size</p>
              </div>

              <div>
                <h3>Decreasing Saw Kerf</h3>
                <p>Decreases part size</p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>If Fab Locations Are Wrong When Running Doors or Fab Only</h2>
            </div>

            <div className="callout danger">
              <h3>Do Not Re-Calibrate the Drills First</h3>
              <p>
                If your normal production parts are coming out correctly, but
                the Y locations are wrong when running Fab Only or doors, you
                likely have a pusher calibration issue. Run a MIN/DIM test.
              </p>
            </div>

            <p className="helperText">
              This is caused by the pusher instead of drill calibration because
              of how the software calculates hole placement. When running normal
              sticks, the drill position is calculated from the trim cut.
            </p>

            <p className="helperText">
              When running doors or Fab Only, the software no longer uses the
              saw. It bases the drill position off the pusher minimum position.
              If the pusher calibration is off, you will see that reflected in
              the Y value of your fabrications.
            </p>

            <p className="helperText">
              If the pusher minimum dimension is off, your trims may also be
              smaller or larger than the number you are telling the saw to cut
              off.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Inconsistent Cut Lengths</h2>
              <p>
                Inconsistent cut lengths usually come down to a coasting issue.
              </p>
            </div>

            <p className="helperText">
              The fastest way to test for coasting is to have a second person
              sit and put backward pressure on the stock length to make sure the
              piece never separates from the pusher.
            </p>

            <p className="helperText">
              The only time the piece and pusher should separate is when the
              pusher is inside the cabinet. The pusher should move the piece into
              position, the clamps should fire, and then the pusher should
              retract until the Fab or saw operations are complete.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Fix 1: Check Tension Rollers</h2>
            </div>

            <p className="helperText">
              Make sure the tension rollers are tight. These are the orange
              rollers that move horizontally to clamp the part.
            </p>

            <p className="helperText">
              On the top of each roller there is a silver nut that can be
              tightened by hand to increase the turning resistance. You should be
              able to turn the roller with two fingers, but not easily with one
              finger.
            </p>

            <p className="helperText">
              A good rule of thumb is a 7 out of 10, where 1 is free spinning
              and 10 does not move at all with two fingers.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Newer Machines With Air Driven Clutches</h2>
            </div>

            <p className="helperText">
              On newer machines, the manual clutches were replaced with
              automatic air driven clutches. The clutch pressure can be set in
              the Parts Library per part.
            </p>

            <p className="helperText">
              The setting works on a scale of 0–20. For light and flimsy parts,
              use 3–4. For standard size parts, use around 6–8. For heavy parts,
              use 8–15. Anything above 15 can completely cup the rollers.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>Fix 2: Roller Tensioner Set Screws</h2>
            </div>

            <p className="helperText">
              The second thing that can help eliminate coasting is the set screws
              installed in the first 10 horizontal rollers on the infeed side.
            </p>

            <p className="helperText">
              If your machine does not have these, contact DeMichele Group and
              ask them for the roller tensioner screws.
            </p>

         <img
  src={orangeRollerImage}
  alt="Orange roller tensioner screw"
  className="smallImage"
/>
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

          img {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
            
          }
            .smallImage {
  max-width: 420px;
}

          .kerfGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 28px;
          }

          .kerfGrid div {
            padding: 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.26);
          }

          .kerfGrid h3 {
            margin: 0 0 10px;
            color: #f59e0b;
            font-size: 1.35rem;
          }

          .kerfGrid p {
            margin: 0;
            color: #d8e0ec;
            font-weight: 800;
          }

          @media (max-width: 800px) {
            .kerfGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}