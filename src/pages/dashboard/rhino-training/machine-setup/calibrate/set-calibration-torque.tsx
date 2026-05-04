import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function SetCalibrationTorquePage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Calibrate
        </div>

        <section className="heroPanel">
          <h1>Set Calibration Torque</h1>
          <p>
            This page explains the torque calibration screen and when it should
            be used. In most cases, this calibration does not need to be rerun
            unless support recommends it.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Torque Calibration Screen</h2>
            <p>
              This screen is designed to find the minimum amount of torque each
              motor needs to reach the end of its slide.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/set-calibration-torque/images/set-calibration-torque-01-main-screen.png"
            alt="Set calibration torque screen"
            tall
          />

          <div className="callout warning">
            <h3>Use Only When Needed</h3>
            <p>
              There usually is not a reason to rerun this calibration. I would
              only suggest running this screen if DeMichele Group Support says it
              would be beneficial.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How This Calibration Works</h2>
            <p>
              The machine checks how much torque is required for the selected
              axis to complete a full stroke.
            </p>
          </div>

          <div className="callout info">
            <p>
              If you have a 5000 series machine, your torque values will usually
              be much higher than a standard machine.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <p>
                Press the axis you want to calibrate, such as{" "}
                <strong>Top</strong>, <strong>Bottom</strong>, or another
                available axis.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <p>
                The machine will move to a position where it can perform a full
                stroke on the plunge axis.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <p>
                When the test is complete, the software will ask if the slide
                reached the end of its stroke. Press <strong>Yes</strong> if it
                did.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>If the Test Fails</h2>
            <p>
              A failed torque test should be handled carefully because incorrect
              torque values can cause the machine to behave incorrectly.
            </p>
          </div>

          <div className="callout critical">
            <h3>Call Support</h3>
            <p>
              If this test says the find torque failed and gives you a number
              with an OK button, call support. You can eventually click through
              the errors, but it may set your torque value higher than it should
              be.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>Calibration Complete</h3>
          <p>
            Once the torque values are updated successfully, the torque
            calibration is complete. Only rerun this process if support
            recommends it.
          </p>
        </div>
      </TrainingLayout>


    </RequireActiveAccess>
  );
}