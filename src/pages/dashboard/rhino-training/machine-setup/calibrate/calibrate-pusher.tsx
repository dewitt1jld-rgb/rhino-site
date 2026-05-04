import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function CalibratePusherPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Calibrate
        </div>

        <section className="heroPanel">
          <h1>Calibrate Pusher</h1>
          <p>
            This page explains how to calibrate the pusher minimum dimension
            and the measuring cylinder / measuring eye calibrations.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Pusher Calibration Screen</h2>
            <p>
              This test is used to find the minimum dimension of the pusher.
              This value helps make sure fabrications land in the correct spot.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-pusher/images/calibrate-pusher.png"
            alt="Calibrate pusher main screen"
            tall
          />

          <div className="callout info">
            <p>
              This test is not run very often, but it is important when running
              doors or Fab-only jobs. If the pusher calibration is off by
              1/16&quot;, door preps and Fab-only preps can also be off by
              1/16&quot;.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibrate MIN/DIM Steps</h2>
            <p>
              Follow these steps to calibrate the pusher minimum dimension.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <p>
                Find any scrap piece in your shop. As long as it is longer than{" "}
                <strong>24&quot;</strong>, it will work for this test.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <p>
                In the <strong>Enter expected cut length</strong> box, enter{" "}
                <strong>5 inches</strong>.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <p>Enter the part depth of the piece and press the position pusher button.</p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <p>
                Push the part in from the outfeed side of the machine up against
                the pusher, then press the <strong>S-Out Roller</strong> button.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <p>
                Make sure the piece is tight against the back fence and tight
                against the pusher, then press the <strong>Make Cut</strong>{" "}
                button.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>
              <p>
                Once the cut is finished, remove the part and measure the length
                with calipers. Take measurements on each corner and average them.
                <strong className="redText">
                  {" "}
                  They should all be within .010&quot; of the same number.
                </strong>
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>
              <p>
                Enter the measured length and press{" "}
                <strong>Adjust Min/Dim</strong>.
              </p>
            </div>
          </div>

          <div className="callout warning">
            <p>
              Repeat the steps until you are within{" "}
              <strong>+/- .005&quot;</strong> of the 5&quot; mark.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibrate Measuring Cylinder</h2>
            <p>
              Press the green <strong>Calibrate</strong> button. The machine
              will handle the calibration automatically and tell you when it is
              complete.
            </p>
          </div>

          <p className="helperText">
            When you press calibrate, the pusher will come in and bump against
            the measuring pin. Depending on the machine model, the measuring pin
            may be just inside the machine or just outside the machine on the
            infeed side.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibrate Measuring Eye</h2>
            <p>
              Press the green <strong>Calibrate</strong> button. The machine
              will handle the calibration automatically and tell you when it is
              complete.
            </p>
          </div>

          <p className="helperText">
            When you press calibrate, the pusher will come in and move forward
            until it crosses the red beam of the infeed photo eye. It will then
            back up and give you a new calibration value for the photo eye.
            Press OK, then return to your job or run another calibration.
          </p>
        </section>

        <div className="completionBox">
          <h3>Pusher Calibration Complete</h3>
          <p>
            Once the Min/Dim is within tolerance and the measuring cylinder or
            measuring eye calibration has completed successfully, the pusher
            calibration is complete.
          </p>
        </div>
      </TrainingLayout>

      
    </RequireActiveAccess>
  );
}