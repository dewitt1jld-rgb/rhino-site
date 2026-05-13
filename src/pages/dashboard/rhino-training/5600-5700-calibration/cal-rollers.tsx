import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/calibrate-rollers/images/calibrate-rollers-01-main-screen.png";

export default function CalRollersPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Rollers</h1>
            <p>
              This screen looks more complicated than it actually is. Follow the
              instructions on the right-hand side of the screen and ignore the
              other numbers for now.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Calibrate Rollers main screen" />

            <p className="helperText">
              This specific test is only for 5000 series machines. There is
              another roller calibration screen for door machines that looks
              almost identical but works slightly differently.
            </p>
          </section>

          <section className="panel">
            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <div>
                  <h3>Get a Door for the Test</h3>
                  <p>
                    Any door will work for this test. A regular{" "}
                    <strong>3&apos; x 7&apos;</strong> door works great.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <div>
                  <h3>Enter Door Depth</h3>
                  <p>
                    Measure the depth of the door and enter it into the bottom
                    left-hand corner where it says{" "}
                    <strong>“Part Depth”</strong>.
                  </p>

                  <p>
                    This screen says depth, but it is actually asking for the
                    dimension most people would consider the width. Example:
                    36&quot; for a 3&apos; door.
                  </p>

                  <p>
                    Looking at the machine from the front, the orange motor
                    driven rollers are labeled from infeed to outfeed. Starting
                    with the roller in the middle of the conveyor tables:
                  </p>

                  <ul className="rollerList">
                    <li>Roller 1 = middle conveyor tables</li>
                    <li>Roller 2 = fab cabinet</li>
                    <li>Roller 3 = infeed side of saw cabinet</li>
                    <li>Roller 4 = outfeed side of saw cabinet</li>
                  </ul>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <div>
                  <h3>Position the Door</h3>
                  <p>
                    Place the door against the back fence of the machine and make
                    sure it is in front of rollers 1, 2, and 3.
                  </p>

                  <p>
                    If the pusher is in the way, go to the jog axis screen and
                    move the pusher out of the way.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <div>
                  <h3>Find Roller Tool Indexes</h3>
                  <p>
                    Press step 4: <strong>“Find Roller Tool Indexes”</strong>.
                    The machine will do one roller at a time and then pop up a
                    screen with the new values.
                  </p>

                  <p>Press OK and continue to step 5.</p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>
                <div>
                  <h3>Move the Door</h3>
                  <p>
                    Move the door so it is positioned in front of roller 4.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>
                <div>
                  <h3>Run Roller Tool Indexes Again</h3>
                  <p>
                    Press step 6: <strong>“Find Roller Tool Indexes”</strong>.
                    It will run that one roller and pop up another screen with
                    updated values.
                  </p>

                  <p>
                    Press OK and remove the door from inside the machine.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>
                <div>
                  <h3>Find Maximums</h3>
                  <p>
                    Once the door is removed, press{" "}
                    <strong>“Find Maximums”</strong>.
                  </p>

                  <p>
                    The rollers will move one at a time toward the back fence.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">8</div>
                <div>
                  <h3>Press Update</h3>
                  <p>
                    Press <strong>UPDATE</strong>. If you do not update, nothing
                    will save and the entire test will need to be run again.
                  </p>
                </div>
              </div>
            </div>
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

          .rollerList {
            margin: 18px 0 0;
            padding-left: 22px;
            color: #d8e0ec;
            line-height: 1.8;
            font-size: 1.02rem;
          }

          .rollerList li {
            margin-bottom: 6px;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}