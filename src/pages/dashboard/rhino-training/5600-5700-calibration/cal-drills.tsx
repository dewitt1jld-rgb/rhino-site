import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-drills/images/calibrate-drills-01-main-screen.png";

const xyzChart =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-drills/images/calibrate-drills-02-x-y-z.png";

const xyzPart =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-drills/images/calibrate-drills-03-x-y-z-on-a-part.png";

export default function CalDrillsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Drills</h1>
            <p>
              This page is easiest to understand in three sections: the middle
              setup section, the top “what you want the part to do” section, and
              the bottom “what the part actually did” measured values section.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Calibrate Drills main screen" />

            <p className="helperText">
              Start with the middle section. Information about the part will also
              be used in the top section. From left to right, fill out stock
              length, part height, part depth, trim, cut length, and repeat.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Middle Section Setup</h2>
            </div>

            <p className="helperText">
              For cut length, <strong>5&quot;</strong> typically works well. I
              also leave repeat at <strong>1</strong> because I want to make
              changes between each time I run the test.
            </p>

            <p className="helperText">
              Once the middle section is filled out, move to the top section.
              The top section is what you want the part to do. The bottom section
              is what the part actually did.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Top Section Drill Setup</h2>
            </div>

            <p className="helperText">
              Select the drill bit you want to use on each drill. I recommend
              using the <strong>D09-A</strong> because it makes measuring much
              easier on the lower section.
            </p>

            <p className="helperText">
              After choosing the drill bits, set the X, Y, and Z for each drill.
              On each surface, you want to drill 1&quot; away from the back fence
              or X, 1&quot; away from the lead edge or Y, and 1&quot; up from the
              table or Z.
            </p>

            <p className="helperText">
              The example below uses a perfect 4.5&quot; x 2&quot; tube with no
              tongue, pocket, or lips. Using a perfect tube makes calibration
              much easier because you do not have to line the drills up to a
              specific surface.
            </p>

            <img src={xyzChart} alt="Calibrate drill X Y Z values" />
          </section>

          <section className="panel">
            <div className="xyzGrid">
              <div><strong>TOP</strong></div>
              <div>X = 1</div>
              <div>Y = 1</div>
              <div>Z = 2</div>

              <div><strong>FRONT</strong></div>
              <div>X = 4.5</div>
              <div>Y = 1</div>
              <div>Z = 1</div>

              <div><strong>BOTTOM</strong></div>
              <div>X = 1</div>
              <div>Y = 1</div>
              <div>Z = 0</div>

              <div><strong>BACK</strong></div>
              <div>X = 0</div>
              <div>Y = 1</div>
              <div>Z = 1</div>
            </div>

            <p className="helperText">
              The front X is 4.5&quot; because the tube itself is 4.5&quot; and
              that is the first surface the front drill will hit. The top Z is
              2&quot; because the part height is 2&quot;. The bottom Z is 0&quot;
              because the bottom drill comes up from under the machine and the
              first surface it hits is the bottom of the part sitting on the
              table.
            </p>

            <p className="helperText">
              If you have a back drill, the concept is the same. The back X would
              be 0&quot; because that is the first surface the drill would hit.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Run the Test</h2>
            </div>

            <p className="helperText">
              Once all the information is filled out, press start and the machine
              will run the test. If tap is turned on, the machine will slowly
              reach out and touch the part without the drill bit spinning. This
              is normal. It is doing a pressure test to find where the part is
              sitting.
            </p>

            <p className="helperText">
              It will then drill a through hole and drill a dimple 1/2&quot; away
              from the hole.
            </p>
          </section>

          <section className="callout warning">
            <h3>Mark the Top Surface</h3>
            <p>
              If you are drilling on all four surfaces of the part, take a
              Sharpie and mark the top of the part before running the test. If
              you mix the drills up, restart the calibration without making any
              changes.
            </p>
          </section>

          <section className="panel center">
            <img src={xyzPart} alt="X Y Z drill holes shown on a part" />
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Measure the Finished Piece</h2>
            </div>

            <p className="helperText">
              With the finished piece in your hand, use the calipers provided
              with the machine and measure each required dimension. Keep the
              calipers perpendicular to the part and as straight as possible.
            </p>

            <p className="helperText">
              Measure to the edge of the through hole, not the center. It is very
              hard and inaccurate to guess where the center of the circle is. If
              you measure from the edge of the part to the edge of the hole, add
              half of the drill bit diameter. For a .201&quot; bit, half would be
              about .1&quot;.
            </p>
          </section>

          <section className="completionBox">
            <h2>Repeat for Each Surface</h2>
            <p>
              Repeat the same measuring steps for the remaining surfaces. For the
              top and bottom drills, Z is automatically calibrated when the
              machine taps the part, so you only measure X and Y. For the front
              and back drills, X is automatically calibrated, so you only measure
              Y and Z.
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
            margin: 24px auto 0;
          }

          .xyzGrid {
            display: grid;
            grid-template-columns: 1.1fr 1fr 1fr 1fr;
            gap: 18px;
            margin-bottom: 24px;
            padding: 22px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.28);
            color: #ffffff;
            font-size: 1.4rem;
            font-weight: 900;
            text-align: center;
          }

          @media (max-width: 800px) {
            .xyzGrid {
              grid-template-columns: 1fr;
              font-size: 1.15rem;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}