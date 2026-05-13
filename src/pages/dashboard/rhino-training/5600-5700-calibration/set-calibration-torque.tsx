import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/set-calibration-troque/images/set-calibration-troque-01-main-screen.png";

export default function SetCalibrationTorquesPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Set Calibration Torques</h1>
            <p>
              This screen is designed to find the minimum amount of torque each
              motor needs to reach the end of its slide.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Set Calibration Torques screen" />

            <p className="helperText">
              There usually is not a reason to re-run this calibration. I would
              only suggest running this screen if DeMichele Group Support says it
              would be beneficial.
            </p>

            <p className="helperText">
              If you have a 5000 series machine, your torque values will usually
              be much higher than a standard machine.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>How to Run the Test</h2>
              <p>
                Press the axis you want to calibrate. The machine will move to a
                position where it can do a full stroke on the plunger axis.
              </p>
            </div>

            <p className="helperText">
              When the test is complete, it will ask if the slide reached the end
              of its stroke. Press <strong>YES</strong>.
            </p>
          </section>

          <section className="callout danger">
            <h3>If the Find Torque Test Fails</h3>
            <p>
              If the test fails and gives you a number with an OK button, call
              support. You can eventually click through the errors, but it may
              set your torque value higher than it should be.
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