import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function CalibrateMiterCutLengthPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Calibrate
        </div>

        <section className="heroPanel">
          <h1>Calibrate Miter Cut Length</h1>
          <p>
            This page explains how to calibrate miter cut length by running each
            test tab and measuring the longest section of the cut part.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Calibration Screen</h2>
            <p>
              This screen may have 3–4 different tabs depending on the machine
              model. Access each tab from the dropdown at the top and run the
              tests in order starting with test 1.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-01-miter-cut-length.png"
            alt="Calibrate miter cut length screen"
            tall
          />

          <div className="callout warning">
            <h3>Before You Start</h3>
            <p>
              Make sure the bevel and miter angles are already calibrated before
              running this test. If the angles are already perfect, there is no
              need to recalibrate them.
            </p>
          </div>

          <p className="helperText">
            The first screen is explained below, but screens 2–4 work the same
            way. Each screen chwill cut a diffrent angle, but you will always measure
            the longest section of the cut part. You will only have 3 tests unless your machine can cut compound cuts.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibration Steps</h2>
            <p>
              Follow these steps carefully for the first test, then repeat the
              same process for the remaining test tabs.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <p>
                Find a stock length that is <strong>80&quot; or longer</strong>{" "}
                and enter that length into the stock length field. I recommend
                using a part that is at least <strong>4&quot; deep</strong> and{" "}
                <strong>2&quot; tall</strong>. Anything smaller may be difficult
                to measure.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <p>
                Enter the <strong>part depth</strong> and{" "}
                <strong>part height</strong> on the right-hand side of the
                screen. There is no need to select a part.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <p>
                Change the cut length to <strong>10&quot;</strong>. Cut lengths
                between 5&quot;–7&quot; can sometimes cause issues, so 10&quot;
                is a safer number.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <p>
                Set the trim to whatever value you want, with{" "}
                <strong>0.5&quot;</strong> being the minimum.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <p>
                If the machine <strong>cannot</strong> do compound cuts, set the
                feed rate to <strong>1&quot; per second</strong>. If the saw{" "}
                <strong>can</strong> do compound cuts, a feed rate around{" "}
                <strong>2&quot; per second</strong> usually gives the
                cleanest cut and sound.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>
              <p>
                Press <strong>Start</strong>. The computer will prompt you to
                either use the auto-loader or skip it. From this point, let the
                machine run the piece.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>
              <p>
                Grab the cut piece of material and measure it with calipers. It
                is okay to measure each edge and enter the average. All values
                should be very close to each other.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">8</div>
              <p>
                Press the green button next to the finished{" "}
                <strong>measured length</strong>. The machine will update the
                test you are currently running.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Move Through the Remaining Tests</h2>
            <p>
              After completing test 1, move to test 2 then 3 then 4 using the dropdown at the
              top of the screen.
            </p>
          </div>

          <div className="callout info">
            <p>
              Work through every test in the screen using the same steps above.
              Each time, the piece should measure <strong>10&quot;</strong>. The
              angles may change, but the longest point of the piece should
              always be that 10&quot; mark.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>Calibration Complete</h3>
          <p>
            Once each test tab produces a consistent 10&quot; longest cut length,
            the miter cut length calibration is complete.
          </p>
        </div>
      </TrainingLayout>

         </RequireActiveAccess>
  );
}