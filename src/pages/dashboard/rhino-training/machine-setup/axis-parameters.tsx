import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/axis-parameters/images/axis-parameters-01-main-screen.png",
};

export default function AxisParametersPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Axis Parameters</h1>
          <p>
            Axis Parameters stores the motion and position settings for each
            machine motor.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Axis Parameters Screen</h2>
            <p>
              This page contains motor settings such as velocity, acceleration,
              torque, tolerance, position limits, calibration values, and tool
              index values.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Axis Parameters main screen"
            tall
          />

          <div className="callout danger">
            <p>
              Most numbers on this screen should not be changed. These values
              are normally set to default working values and changing them can
              cause jerky movement, poor motion, or machine issues.
            </p>
          </div>

          <p className="helperText">
            Leave acceleration, move velocity, torque limits, and similar motor
            values alone unless someone from DeMichele specifically tells you
            what to change.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>The One Exception</h2>
            <p>
              The only setting that may commonly be adjusted on each motor is
              the Tool Index value.
            </p>
          </div>

          <div className="callout warning">
            <p>
              If you set the <strong>Tool Index</strong> incorrectly, you can
              crash the drills into the part. Do not move this value unless you
              fully understand how tool indexes work.
            </p>
          </div>

          <p className="helperText">
            If you want a full breakdown of why you may need to adjust a tool
            index value, review the Tool Index training. The safest way to
            adjust tool indexes is through a drill calibration because that
            process walks you through the calibration and updates the tool index
            values for you.
          </p>
        </section>

        <div className="completionBox">
          <h2>Axis Parameters Complete</h2>
          <p>
            You now know that Axis Parameters should mostly be left alone, and
            that Tool Index is the main exception — but only when handled
            carefully.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}