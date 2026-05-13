import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-tool-rack/images/calibrate-tool-rack-01-main-screen.png";

export default function CalToolRackPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Tool Rack</h1>
            <p>
              This screen calibrates the drill to the fixed tool rack locations.
              The racks do not move. You are shifting the drill positions so the
              tool places and removes smoothly.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Calibrate Tool Rack main screen" />

            <p className="helperText">
              Every tool rack has a different X, Y, and Z position for the
              drill. Choose the tool rack you want to work on, then adjust the
              drill position until placement and removal are smooth.
            </p>
          </section>

          <section className="panel">
            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <div>
                  <h3>Select the Tool Position</h3>
                  <p>
                    Click the tool position you want to calibrate. Positions{" "}
                    <strong>1–6</strong> are for the top drill and{" "}
                    <strong>7–10</strong> are for the bottom drill.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <div>
                  <h3>Start Calibration</h3>
                  <p>
                    Once you choose the rack position, press{" "}
                    <strong>“Start Top Calibration”</strong> or{" "}
                    <strong>“Start Bottom Calibration”</strong>, depending on
                    which rack position you chose.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <div>
                  <h3>Remove Any Tool From the Slot</h3>
                  <p>
                    The screen will prompt you to make sure there are no tools in
                    the current tool holder you are trying to use. If there is
                    one in that slot, open the door and set it aside for the
                    moment. You will need to put it back after calibration.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <div>
                  <h3>Jog and Align the Drill</h3>
                  <p>
                    The drill will move to the pre-position. You will click next
                    several times while it slowly works through placing the tool
                    in the empty slot. Every time you click next, the drill moves
                    slightly.
                  </p>
                  <p>
                    Between movements, adjust X, Y, and Z to move the drill
                    in/out, side to side, and up/down. Once it is lined up the
                    way you want, continue pressing next until the machine cycles
                    through the full placement and release of the tool.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>
                <div>
                  <h3>Save Before Leaving</h3>
                  <p>
                    Once the drill is aligned and you are happy with how it is
                    placing the tools, press <strong>SAVE</strong> before moving
                    to the next tool or leaving the screen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Repeat for Each Rack</h2>
            <p>
              Repeat steps 1–5 for each rack you want to calibrate.
            </p>
          </section>

          <section className="callout danger">
            <h3>Jogging Tip</h3>
            <p>
              Use the keyboard if you are trying to jog the motor in any
              direction. The touch screen is not as accurate as using the track
              pad and keyboard.
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

          .center img {
            margin: 0 auto;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}