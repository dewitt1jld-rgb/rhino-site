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

      <style jsx>{`
        .breadcrumb {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
          font-size: 14px;
        }

        .heroPanel,
        .panel {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.045);
          border-radius: 24px;
          padding: 28px;
          margin-bottom: 26px;
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .heroPanel h1 {
          margin: 0 0 10px;
          font-size: 42px;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .heroPanel p,
        .panelHeader p,
        .helperText {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          font-size: 16px;
        }

        .panelHeader {
          margin-bottom: 20px;
        }

        .panelHeader h2 {
          margin: 0 0 10px;
          font-size: 26px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .helperText {
          margin-top: 14px;
          max-width: 920px;
        }

        .callout {
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: 18px;
          line-height: 1.65;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .callout.warning {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.32);
        }

        .callout.critical {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.36);
        }

        .callout h3 {
          margin: 0 0 8px;
          color: #ffffff;
          font-size: 20px;
        }

        .callout p {
          margin: 0;
          color: rgba(255, 255, 255, 0.93);
          font-size: 16px;
          line-height: 1.7;
        }

        .completionBox {
          margin-top: 28px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
        }

        .completionBox,
        .completionBox * {
          color: #ffffff !important;
        }

        .completionBox h3 {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 900;
        }

        .completionBox p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 800px) {
          .heroPanel,
          .panel {
            padding: 20px;
            border-radius: 20px;
          }

          .heroPanel h1 {
            font-size: 32px;
          }

          .panelHeader h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}