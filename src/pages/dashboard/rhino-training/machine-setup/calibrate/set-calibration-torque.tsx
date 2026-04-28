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
        .panelHeader p {
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

        .callout.info {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.32);
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

        .stepList {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }

        .stepCard {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 18px;
          align-items: start;
          padding: 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .stepNumber {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-weight: 900;
          font-size: 18px;
        }

        .stepCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 16px;
          line-height: 1.7;
        }

        strong {
          color: #ffffff;
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

          .stepCard {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}