import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function CalibratesawanglePage() {
  return (

<RequireActiveAccess>
  <TrainingLayout>

    <div className="breadcrumb">
      Rhino Training / Machine Setup / Calibrate
    </div>

        <section className="content">
          

          <section className="heroPanel">
            <h1>Calibrate Saw angle</h1>
            <p>
              This page explains how to calibrate the saw angle when the
              miter or bevel cut is not coming out correct.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Main Calibration Screen</h2>
              <p>
                This screen is designed as a second option for getting the two
                saw rotations straight. The concept is simple: when making a
                cut, the result should measure 90 degrees, or straight.
              </p>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-01-main-page.png"
              alt="Calibrate saw cut angle main screen"
              tall
            />

            <p className="helperText">
              I recommend using the dial indicator screen first to straighten
              the saw and drills, because it is a simple method once you
              understand how it works. If the dial indicator method is still
              confusing, check the dial indicator guide before using this page.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Understand Miter vs Bevel</h2>
              <p>
                Start with the compound saw checked, then select whichever type
                of cut needs to be calibrated.
              </p>
            </div>

            <div className="twoColumn">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-02-diffrent-angles-shown.png"
                alt="Different saw angles shown"
              />

              <div className="callout warning">
                <h3>Important</h3>
                <p>
                  This saw has two rotational axes. This means you can cut both
                  a bevel and a miter with the same blade, but if either the
                  miter or bevel is out of alignment, it can affect the other
                  cut.
                </p>
                <p>
                  I recommend calibrating both the miter and bevel every time
                  you think something is off.
                </p>
              </div>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-03-miter-vs-bevel.png"
              alt="Miter saw and bevel saw angle information"
              tall
            />
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Calibration Steps</h2>
              <p>
                Follow these steps carefully. Once the first angle is correct,
                switch to the other angle type and repeat the process.
              </p>
            </div>

            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <p>
                  Start with <strong>Compound Saw</strong> checked, then choose
                  whichever type of cut needs to be calibrated.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <p>
                  At the bottom of the screen, enter the correct{" "}
                  <strong>part height</strong> and <strong>part depth</strong>.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <p>
                  Enter the angle of the cut you want to make. I recommend using{" "}
                  <strong>45 degrees</strong> for both miter and bevel.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <p>
                  Push a piece all the way through the saw cabinet so all four
                  saw clamps are on the piece. There should be two vertical
                  clamps and two horizontal clamps.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>
                <p>
                  Press the button that says <strong>Make Cut At</strong>.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>
                <p>
                  Remove the piece and measure the correct angle.
                </p>
              </div>

              <div className="placeholderGrid">
                <div className="placeholderImage">
                  <span>Placeholder for miter measurement image</span>
                </div>

                <div className="placeholderImage">
                  <span>Placeholder for bevel measurement image</span>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>
                <p>
                  Enter the measured angle and press{" "}
                  <strong>Adjust Origin</strong>.
                </p>
              </div>
            </div>

            <div className="completionBox">
              <h3>Calibration Complete</h3>
              <p>
                Repeat the screen steps until you are satisfied with the cut.
                Once the cut is correct, switch to the other angle type and
                repeat the same process.
              </p>
            </div>
          </section>
        </section>

      <style jsx>{`
     

        .content {
  padding: 34px;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto; /* THIS centers it */
}

        .breadcrumb {
          color: rgba(255, 255, 255, 0.52);
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

        .heroPanel h1 {
          margin: 0 0 10px;
          font-size: 42px;
          letter-spacing: -0.04em;
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
        }

        .helperText {
          margin-top: 18px;
          max-width: 920px;
        }

        .twoColumn {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 22px;
          align-items: center;
          margin-bottom: 24px;
        }

        .callout {
          padding: 20px;
          border-radius: 18px;
          line-height: 1.65;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .callout.warning {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
        }

        .callout h3 {
          margin: 0 0 10px;
          color: #fca5a5;
          font-size: 20px;
        }

        .callout p {
          color: rgba(255, 255, 255, 0.92);
          margin: 0 0 12px;
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

        .stepCard strong {
          color: #ffffff;
        }

        .placeholderGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 12px 0;
        }

        .placeholderImage {
          min-height: 220px;
          border-radius: 20px;
          border: 1px dashed rgba(255, 255, 255, 0.28);
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
            rgba(255, 255, 255, 0.035);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 700;
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

        @media (max-width: 950px) {
          .page {
            grid-template-columns: 1fr;
          }

      
          .twoColumn,
          .placeholderGrid {
            grid-template-columns: 1fr;
          }

          .heroPanel h1 {
            font-size: 34px;
          }
        }

        @media (max-width: 650px) {
          .stepCard {
            grid-template-columns: 1fr;
          }
        }
          @media (max-width: 800px) {
  .twoColumn,
  .placeholderGrid,
  .comparisonGrid,
  .drillGrid {
    grid-template-columns: 1fr !important;
  }

  .heroPanel,
  .panel {
    padding: 20px;
    border-radius: 20px;
  }

  .heroPanel h1 {
    font-size: 32px;
  }

  .panelHeader h2,
  .panelTitle {
    font-size: 24px;
  }

  .stepCard {
    grid-template-columns: 1fr !important;
  }
}
      `}</style>

      </TrainingLayout>
</RequireActiveAccess>
  );
}