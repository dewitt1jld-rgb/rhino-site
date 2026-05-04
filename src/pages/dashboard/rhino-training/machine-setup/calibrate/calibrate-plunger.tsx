import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function CalibratePlungerPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Calibrate
        </div>

        <section className="heroPanel">
          <h1>Calibrate Plunger</h1>
          <p>
            This page explains the plunger setting and why it should normally be
            disabled if the machine has one.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Disable the Plunger</h2>
            <p>
              If your machine has a plunger, which is a small 1&quot; x 1&quot;
              square cube just behind the back fence in the fab cabinet, disable
              it.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-plunger/images/calibrate-plunger-01-main-screen.png"
            alt="System settings screen showing plunger setting"
            tall
          />

          <div className="callout warning">
            <h3>Recommended Setting</h3>
            <p>
              Navigate to System Settings from the machine home page and turn
              the plunger off. It was a good idea, but it did not function
              reliably and often caused more issues than it fixed.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>What the Plunger Was Designed To Do</h2>
            <p>
              The plunger was intended to kick out before fabrication and measure
              how far the part was from the back fence.
            </p>
          </div>

          <p className="helperText">
            If the part was bowed, the plunger was supposed to detect that
            distance and shift the fabrications by the amount it measured each
            time it tapped the part.
          </p>

          <p className="helperText">
            The idea was good, but the measurements were not accurate enough in
            practice. As a result, fabrications could be shifted for no useful
            reason.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Why This Matters</h2>
            <p>
              Inaccurate plunger measurements were one of the biggest reasons
              users saw inconsistent fabrications on the top and bottom of the
              part in the X direction.
            </p>
          </div>

          <div className="callout critical">
            <h3>Important</h3>
            <p>
              Unless support specifically tells you otherwise, leave the plunger
              disabled.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>Plunger Setup Complete</h3>
          <p>
            Once the Use Plunger option is turned off and the settings are
            updated, the plunger setup is complete.
          </p>
        </div>
      </TrainingLayout>

     
    </RequireActiveAccess>
  );
}