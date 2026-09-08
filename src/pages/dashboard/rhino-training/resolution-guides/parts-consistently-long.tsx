import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function PartsConsistentlyLongPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Resolution Guides / Parts Consistently Long
        </div>

        <section className="heroPanel">
          <p className="eyebrow">Resolution Guide 02</p>

          <h1>How to Fix Parts That Are Consistently Long</h1>

          <p>
            Use this guide when all finished parts are consistently longer
            than the programmed cut length by approximately the same amount.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Before Making an Adjustment</h2>
          </div>

          <div className="panelContent">
            <p className="helperText">
              There are two documented ways to correct parts that are
              consistently long.
            </p>

            <div className="methodGrid">
              <div className="methodCard recommended">
                <div className="methodLabel">Recommended</div>

                <h3>Run the Saw Kerf Calibration</h3>

                <p>
                  This is the procedurally correct method because the machine
                  uses the calibration screen to calculate and update the kerf.
                </p>
              </div>

              <div className="methodCard fast">
                <div className="methodLabel">Faster Method</div>

                <h3>Manually Adjust Saw Kerf</h3>

                <p>
                  This method is faster, but it bypasses the checks built into
                  the calibration procedure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>900 / 950 Saw Kerf Calibration</h2>

            <p>
              This procedure applies to 900L, 900R, 950L, and 950R machines.
            </p>
          </div>

          <div className="panelContent">
            <div className="machineList">
              <strong>Applies to:</strong> 900L, 900R, 950L, 950R
            </div>

            <h3 className="sectionTitle">
              Recommended Method — Calibrate Kerf
            </h3>

            <div className="stepList">
              <Step number={1}>
                Make sure the saw is empty and all material is clear from the
                machine.
              </Step>

              <Step number={2}>
                From the Home screen, navigate to the{" "}
                <strong>Machine Setup</strong> tab.
              </Step>

              <Step number={3}>
                Click the <strong>Calibrate</strong> tab.
              </Step>

              <Step number={4}>
                Open <strong>Calibrate Kerf</strong>.
              </Step>

              <Step number={5}>
                Get a scrap piece of metal that is at least{" "}
                <strong>48 inches long</strong> and enter its length into{" "}
                <strong>Stock Length</strong>.
              </Step>

              <Step number={6}>
                Set <strong>Cut Length</strong> to{" "}
                <strong>5 inches</strong>. This should normally be the default.
              </Step>

              <Step number={7}>
                Set <strong>Trim</strong> to <strong>0.5 inches</strong>. This
                should normally be the default.
              </Step>

              <Step number={8}>
                Make sure <strong>Saw Height</strong> is set to{" "}
                <strong>3</strong>.
              </Step>

              <Step number={9}>
                Press <strong>Start</strong> and load the material in front of
                the pusher.
              </Step>

              <Step number={10}>
                Press <strong>Continue</strong> and allow the machine to make
                the cuts.
              </Step>

              <Step number={11}>
                Remove the cut piece from the saw and measure it with calipers.
              </Step>

              <Step number={12}>
                Enter the measured value into <strong>Measured Length</strong>{" "}
                and press <strong>Update Kerf</strong>.
              </Step>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Other Saw Machines — Saw Kerf Calibration</h2>

            <p>
              These machines use the Calibrate Miter Cut Length screen to set
              the saw kerf.
            </p>
          </div>

          <div className="panelContent">
            <div className="machineList">
              <strong>Applies to:</strong> 1100L/R, 1150L/R, 1200L/R,
              1250L/R, 1350L/R, 5000L/R, 5500L/R, 5700L/R, 9600L/R,
              and 9700L/R
            </div>

            <div className="callout warning">
              <h3>9500 Machines</h3>

              <p>
                The 9500 is not included in this guide because it does not
                have a saw.
              </p>
            </div>

            <h3 className="sectionTitle">
              Recommended Method — Set Kerf
            </h3>

            <div className="stepList">
              <Step number={1}>
                Make sure the saw is empty and all material is clear from the
                machine.
              </Step>

              <Step number={2}>
                From the Home screen, navigate to the{" "}
                <strong>Machine Setup</strong> tab.
              </Step>

              <Step number={3}>
                Click the <strong>Calibrate</strong> tab.
              </Step>

              <Step number={4}>
                Open <strong>Calibrate Miter Cut Length</strong>.
              </Step>

              <Step number={5}>
                Open the test dropdown at the top of the screen. There are
                several tests available. Select <strong>Set Kerf</strong>.
              </Step>

              <Step number={6}>
                Get a scrap piece of metal that is at least{" "}
                <strong>48 inches long</strong> and enter its length into{" "}
                <strong>Stock Length</strong>.
              </Step>

              <Step number={7}>
                Set <strong>Cut Length</strong> to{" "}
                <strong>5 inches</strong>. This should normally be the default.
              </Step>

              <Step number={8}>
                Set <strong>Trim</strong> to <strong>0.5 inches</strong>. This
                should normally be the default.
              </Step>

              <Step number={9}>
                Make sure <strong>Saw Height</strong> is set to{" "}
                <strong>3</strong>.
              </Step>

              <Step number={10}>
                Press <strong>Start</strong> and load the material in front of
                the pusher.
              </Step>

              <Step number={11}>
                Press <strong>Continue</strong> and allow the machine to make
                the cuts.
              </Step>

              <Step number={12}>
                Remove the cut piece from the saw and measure it with calipers.
              </Step>

              <Step number={13}>
                Enter the measured value into <strong>Measured Length</strong>{" "}
                and press <strong>Update Kerf</strong>.
              </Step>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Faster Method — Manually Decrease Saw Kerf</h2>

            <p>
              This method skips the calibration screen and directly adjusts the
              existing Saw Kerf value.
            </p>
          </div>

          <div className="panelContent">
            <div className="callout warning">
              <h3>Important</h3>

              <p>
                The manual method is faster, but it does not include the checks
                built into the calibration procedure. Record the original Saw
                Kerf value before changing it.
              </p>
            </div>

            <div className="stepList">
              <Step number={1}>
                Make sure the saw is empty and all material is clear from the
                machine.
              </Step>

              <Step number={2}>
                From the Home screen, navigate to{" "}
                <strong>System Settings</strong>.
              </Step>

              <Step number={3}>
                Locate the <strong>Saw Kerf</strong> setting.
              </Step>

              <Step number={4}>
                Take a picture of or write down the current Saw Kerf value so
                you can return to it if necessary.
              </Step>

              <Step number={5}>
                Take the existing Saw Kerf value and{" "}
                <strong>
                  SUBTRACT the amount the finished parts are consistently long
                  by.
                </strong>
              </Step>

              <Step number={6}>
                Press <strong>Update Settings</strong> and run another test
                piece.
              </Step>
            </div>

            <div className="example">
              <strong>Example:</strong> If every finished part is consistently
              1/32&quot; long, decrease the existing Saw Kerf value by
              1/32&quot;.
            </div>
          </div>
        </section>

        <section className="panel completionPanel">
          <div className="completionBox">
            <h2>Verify the Correction</h2>

            <p>
              Run another test after updating the kerf and measure the finished
              pieces. Confirm that the cut lengths now match the programmed
              dimensions before returning the machine to normal production.
            </p>
          </div>
        </section>
      </TrainingLayout>

      <GuideStyles />
    </RequireActiveAccess>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="stepCard">
      <div className="stepNumber">{number}</div>
      <p>{children}</p>
    </div>
  );
}

function GuideStyles() {
  return (
    <style jsx global>{`
      .breadcrumb {
        color: rgba(255, 255, 255, 0.62);
        font-size: 13px;
        margin-bottom: 18px;
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

      .eyebrow {
        margin: 0 0 10px;
        color: #fbbf24;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .heroPanel h1 {
        margin: 0 0 12px;
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

      .panelHeader h2,
      .completionBox h2 {
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 26px;
        letter-spacing: -0.02em;
      }

      .panelContent {
        display: grid;
        gap: 16px;
      }

      .methodGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }

      .methodCard {
        padding: 20px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.14);
      }

      .methodCard.recommended {
        border-color: rgba(34, 197, 94, 0.35);
      }

      .methodCard.fast {
        border-color: rgba(245, 158, 11, 0.35);
      }

      .methodLabel {
        color: #fbbf24;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: 8px;
      }

      .methodCard h3,
      .sectionTitle {
        color: #ffffff;
      }

      .methodCard p {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.65;
      }

      .machineList {
        padding: 14px 16px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.92);
        line-height: 1.7;
      }

      .stepList {
        display: grid;
        gap: 14px;
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
        padding: 18px 20px;
        border-radius: 18px;
      }

      .callout.warning {
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.32);
      }

      .callout h3 {
        margin: 0 0 8px;
        color: #fbbf24;
      }

      .callout p {
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        line-height: 1.7;
      }

      .example {
        padding: 18px;
        border-radius: 16px;
        background: rgba(59, 130, 246, 0.12);
        border: 1px solid rgba(59, 130, 246, 0.3);
        color: #ffffff;
        line-height: 1.7;
      }

      .completionPanel {
        padding: 0;
        overflow: hidden;
      }

      .completionBox {
        padding: 24px;
        background: rgba(34, 197, 94, 0.12);
        border: 1px solid rgba(34, 197, 94, 0.35);
        border-radius: 24px;
      }

      .completionBox p {
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        line-height: 1.7;
      }

      @media (max-width: 800px) {
        .methodGrid {
          grid-template-columns: 1fr;
        }

        .heroPanel,
        .panel {
          padding: 20px;
          border-radius: 20px;
        }

        .heroPanel h1 {
          font-size: 32px;
        }

        .stepCard {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}