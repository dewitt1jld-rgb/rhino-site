import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/cal-pusher/images/calibrate-pusher-01-main-page.png";

export default function CalPusherPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Pusher</h1>
            <p>
              This test is used to find the MIN/DIM, or minimum dimension, of
              the pusher. This value is important when running doors or Fab Only
              because it helps make sure fabrications land in the correct spot.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Calibrate Pusher main screen" />

            <p className="helperText">
              If your pusher calibration is off by 1/16&quot;, your door preps
              and Fab Only preps will also be off by 1/16&quot;.
            </p>
          </section>

          <section className="panel">
            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <div>
                  <h3>Find a Scrap Piece</h3>
                  <p>
                    Find any scrap piece in your shop. As long as it is longer
                    than 24&quot;, it will work for this test.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <div>
                  <h3>Enter Expected Cut Length</h3>
                  <p>
                    In the <strong>“Enter expected cut length”</strong> box,
                    enter <strong>5 inches</strong>.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <div>
                  <h3>Enter Part Depth</h3>
                  <p>Enter the part depth of the piece.</p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <div>
                  <h3>Push Material Against the Pusher</h3>
                  <p>
                    Push the part in from the outfeed side of the machine up
                    against the pusher and press the{" "}
                    <strong>“S Out Roller”</strong> button.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>
                <div>
                  <h3>Confirm the Part Is Tight</h3>
                  <p>
                    Make sure the piece is tight against the back fence and tight
                    against the pusher. Then press the{" "}
                    <strong>“Make Cut”</strong> button.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>
                <div>
                  <h3>Measure the Finished Cut</h3>
                  <p>
                    Once the cut is finished, remove the part and measure the
                    length with calipers. Take a few measurements on each corner
                    of the part and average them.
                  </p>

                  <p className="dangerText">
                    They should all be within .010&quot; of the same number.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>
                <div>
                  <h3>Adjust Min/Dim</h3>
                  <p>
                    Enter the measured length and press{" "}
                    <strong>“Adjust Min/Dim”</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Repeat Until Correct</h2>
            <p>
              Repeat the cut and adjustment process until you are within{" "}
              <strong>+ or - .005&quot;</strong> of the 5&quot; mark.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Calibrate Measure Cylinder</h2>
              <p>
                Press the green <strong>“Calibrate”</strong> button. Everything
                will take care of itself and let you know when the calibration is
                done.
              </p>
            </div>

            <p className="helperText">
              When you press calibrate, the pusher will come in and bump against
              the measuring pin. Depending on the machine model, the measuring
              pin may be just inside the machine or just outside the machine on
              the infeed side.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Calibrate Measuring Eye</h2>
              <p>
                Press the green <strong>“Calibrate”</strong> button. Everything
                will take care of itself and let you know when the calibration is
                done.
              </p>
            </div>

            <p className="helperText">
              When you press calibrate, the pusher will move forward until it
              crosses the red beam of the infeed photo eye. It will then back up
              and give you a new calibration value for the photo eye. Say okay,
              then return to your job or run another calibration.
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

          .dangerText {
            margin-top: 12px !important;
            color: #ff4d4d !important;
            font-weight: 900 !important;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}