import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function IOTestingPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>I/O Testing</h1>
          <p>
            This page explains the I/O Testing screen and how it can be used for
            basic troubleshooting of machine inputs and outputs.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main I/O Testing Screen</h2>
            <p>
              I/O stands for Inputs and Outputs. Depending on your machine, you
              may see more or fewer items on this screen.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/i-o-testing/images/i-o-testing-01-main-screen.png"
            alt="I/O Testing main screen"
            tall
          />
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Inputs vs Outputs</h2>
            <p>
              Understanding the difference between inputs and outputs makes this
              screen much easier to use.
            </p>
          </div>

          <div className="twoColumn">
            <div className="infoCard">
              <h3>Outputs</h3>
              <p>
                An output is something you press to make another thing happen.
                This is usually where you manually fire an item such as a
                vertical clamp or horizontal clamp.
              </p>
            </div>

            <div className="infoCard">
              <h3>Inputs</h3>
              <p>
                An input is something the machine reads from a button or sensor.
                Inputs are useful for checking items like photo eyes, doors,
                locks, and sensors.
              </p>
            </div>
          </div>

          <div className="callout info">
            <p>
              Most of the time, you will only need to use the output side. The
              output side lets you manually activate air-driven components that
              are normally fired automatically by the software.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Using I/O Testing for Troubleshooting</h2>
            <p>
              This screen is mainly used when trying to identify whether a
              specific component is working correctly.
            </p>
          </div>

          <p className="helperText">
            For example, if the H-Clamp saw out is not working well, you could
            come to this screen and manually fire that output back and forth to
            help identify or test the issue.
          </p>

          <p className="helperText">
            The input side can also show whether the infeed and outfeed photo
            eyes are working correctly. Place a piece of metal in front of the
            eye and check whether the input lights up on the screen.
          </p>

          <div className="callout warning">
            <h3>Troubleshooting Note</h3>
            <p>
              This page is a general overview. More detailed troubleshooting
              guides can be linked from this section later.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>I/O Testing Overview Complete</h3>
          <p>
            Use this screen to manually test outputs and verify inputs while
            troubleshooting machine behavior.
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

        .twoColumn {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .infoCard {
          padding: 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .infoCard h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 20px;
        }

        .infoCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
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

          .twoColumn {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}