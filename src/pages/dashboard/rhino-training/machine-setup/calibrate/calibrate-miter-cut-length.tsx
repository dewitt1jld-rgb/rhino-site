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
          margin-top: 18px;
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

        .callout.info {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.32);
        }

        .callout h3 {
          margin: 0 0 8px;
          color: #fbbf24;
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
          transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease;
        }

        .stepCard:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.075);
          border-color: rgba(255, 255, 255, 0.22);
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
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 10px 22px rgba(0, 0, 0, 0.22);
        }

        .stepCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 16px;
          line-height: 1.7;
        }

        .stepCard strong,
        .callout strong {
          color: #ffffff;
        }

        .completionBox {
          margin-top: 28px;
          padding: 22px;
          border-radius: 18px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          position: relative;
          overflow: hidden;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .completionBox::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top left,
            rgba(34, 197, 94, 0.18),
            transparent 38%
          );
          pointer-events: none;
        }

        .completionBox,
        .completionBox * {
          color: #ffffff !important;
          position: relative;
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