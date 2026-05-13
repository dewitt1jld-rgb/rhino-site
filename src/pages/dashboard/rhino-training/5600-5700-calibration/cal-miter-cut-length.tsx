import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-miter-cut-length/images/calibrate-miter-cut-length-o1-main-screen.png";

export default function CalMiterCutLengthPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Miter Cut Length</h1>
            <p>
              This screen has 3–4 different tabs depending on your machine model.
              Use the drop-down at the top and work through the tests in order,
              starting with test number 1.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Calibrate Miter Cut Length main screen" />

            <p className="helperText">
              Make sure the bevel and miter angles are already calibrated before
              running this test. Screens 2–3 work the same way as screen 1. You
              will measure the longest section of the cut each time. The only
              thing that changes is the angle of the cut.
            </p>
          </section>

          <section className="panel">
            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <div>
                  <h3>Enter Stock Length</h3>
                  <p>
                    Find a stock length that is 80&quot; or longer and enter that
                    length into the stock length field. I recommend running a part
                    that is at least 4&quot; deep and 2&quot; tall. Anything less
                    may be difficult to measure.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <div>
                  <h3>Enter Part Depth and Height</h3>
                  <p>
                    Enter the part depth and height on the right-hand side of the
                    screen. There is no need to select a part.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <div>
                  <h3>Set Cut Length</h3>
                  <p>
                    Change the cut length to <strong>10&quot;</strong>. I have
                    had issues with cut lengths between 5–7&quot;. 10&quot; is a
                    safe number.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <div>
                  <h3>Set Trim</h3>
                  <p>
                    Set the trim to whatever you want, with{" "}
                    <strong>.5&quot;</strong> being the minimum.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>
                <div>
                  <h3>Set Feed Rate</h3>
                  <p>
                    If your machine cannot do compound cuts, set the feed rate to{" "}
                    <strong>1&quot; per second</strong>. If your saw can do
                    compound cuts, I have found that cutting at{" "}
                    <strong>2–2.5&quot; per second</strong> gives the cleanest cut
                    and sound.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>
                <div>
                  <h3>Start the Test</h3>
                  <p>
                    Press start. The computer will prompt you to either use the
                    auto-loader or skip. From this point, let the machine run the
                    piece.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>
                <div>
                  <h3>Measure the Cut Piece</h3>
                  <p>
                    Grab the cut piece and measure it with calipers. Take a
                    measurement on each edge and enter the average. All values
                    should be very close to one another.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">8</div>
                <div>
                  <h3>Update the Test Value</h3>
                  <p>
                    Press the green button next to the finished{" "}
                    <strong>“measured length”</strong> field. The machine will
                    update whichever test you are currently running.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Move to the Next Test</h2>
            <p>
              Move on to test number 2 by using the drop-down at the top. Work
              through all tests on the screen using the same steps above. Each
              time, the piece should be 10&quot;. The angles may change, but the
              longest point of the piece should always be that 10&quot; mark.
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