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

        .callout {
          margin-top: 20px;
          padding: 18px 20px;
          border-radius: 18px;
          line-height: 1.65;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .callout.info {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.32);
        }

        .callout.warning {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.32);
        }

        .callout p {
          margin: 0;
          color: rgba(255, 255, 255, 0.93);
          font-size: 16px;
          line-height: 1.7;
        }

        strong {
          color: #ffffff;
        }

        .redText {
          color: #f87171 !important;
          font-weight: 900;
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