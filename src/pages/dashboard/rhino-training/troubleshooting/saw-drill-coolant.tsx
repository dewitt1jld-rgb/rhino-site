import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const leftImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-01-left.png";

const rightImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-02-right.png";

const colorCodeImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-03-color-code.png";

const sawAdjustmentImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-04-saw-adjustment.png";

const toolLibraryImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-05-tool-library.png";

export default function SawDrillCoolantPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Saw / Drill Coolant</h1>

            <p>
              Understanding and properly adjusting the UNIST coolant system for
              the drills and saw.
            </p>
          </section>

          <section className="panel center">
            <div className="imageGrid">
              <img src={leftImage} alt="UNIST coolant system left side" />
              <img src={rightImage} alt="UNIST coolant system right side" />
            </div>

            <p className="helperText">
              This is the UNIST pump system that the Rhino uses to distribute
              cutting fluid to the drills and saw.
            </p>

            <h3 className="warningText">ONLY USE MULTIDRAW 73</h3>
          </section>

          <section className="callout warning">
            <p>
              I do not work for DeMichele Group and you can buy parts wherever
              you want, but this is one thing I strongly recommend buying from
              them.
            </p>

            <p>
              This fluid evaporates cleanly and does not leave residue on the
              machine or parts. Cheaper oils can damage the machine over time.
            </p>
          </section>

          <section className="panel">
            <div className="splitLayout">
              <div>
                <img
                  src={colorCodeImage}
                  alt="Color coded coolant blocks"
                />
              </div>

              <div className="legendBox">
                <h3>Color Reference</h3>

                <ul>
                  <li>
                    <span className="legend top"></span>
                    TOP
                  </li>

                  <li>
                    <span className="legend bottom"></span>
                    BOTTOM
                  </li>

                  <li>
                    <span className="legend front"></span>
                    FRONT
                  </li>

                  <li>
                    <span className="legend saw"></span>
                    SAW
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="splitLayout reverse">
              <div>
                <img
                  src={sawAdjustmentImage}
                  alt="Saw oil adjustment dial"
                />
              </div>

              <div className="textColumn">
                <h2>Adjusting Saw Oil</h2>

                <p>
                  All drill oil settings are regulated in the software under
                  the Tool Library.
                </p>

                <p>
                  The saw oil is NOT regulated through the software.
                </p>

                <p>
                  To adjust the saw oil, go to:
                </p>

                <p className="highlight">
                  Machine Setup → I/O Testing
                </p>

                <p>
                  Fire the <strong>Oil Saw</strong> output and listen to how
                  fast the piston is firing.
                </p>

                <p>
                  The saw oil should pulse about 1–2 times per second.
                </p>

                <p>
                  If it is too slow or too fast, adjust the dial circled in
                  red.
                </p>

                <div className="dangerBox">
                  THE NUMBERS ON THE DIAL DO NOT MEAN ANYTHING.
                  <br />
                  Ignore the numbers completely and adjust based on the sound of
                  the piston firing.
                </div>
              </div>
            </div>
          </section>

          <section className="panel center">
            <h2>Regulating Drill Oil</h2>

            <img
              src={toolLibraryImage}
              alt="Tool library oil PPM settings"
            />

            <div className="oilInfo">
              <p>
                First navigate to the Databases tab and then open the Tool
                Library screen.
              </p>

              <p>
                Each tool can be set with a different oil parameter.
              </p>

              <p>
                Look at the column labeled <strong>OIL PPM</strong>.
              </p>

              <p>
                PPM stands for <strong>Pulses Per Minute</strong>.
              </p>

              <div className="ppmBox">
                <p>Drill bits are usually in the 10–20 PPM range.</p>
                <p>End mills are usually in the 40–60 PPM range.</p>
                <p>Countersinks are usually in the 20–40 PPM range.</p>
              </div>
            </div>
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

          .imageGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 28px;
          }

          .imageGrid img,
          .panel img {
            width: 100%;
            height: auto;
            border-radius: 14px;
            display: block;
          }

          .warningText {
            margin-top: 28px;
            color: #f59e0b;
            font-size: 32px;
            font-weight: 900;
          }

          .splitLayout {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 36px;
            align-items: center;
          }

          .splitLayout.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .legendBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .legendBox h3 {
            margin-bottom: 24px;
          }

          .legendBox ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 24px;
          }

          .legendBox li {
            display: flex;
            align-items: center;
            gap: 18px;
            font-size: 30px;
            font-weight: 900;
            letter-spacing: 0.04em;
          }

          .legend {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: inline-block;
          }

          .legend.top {
            background: #22c55e;
          }

          .legend.bottom {
            background: #ef4444;
          }

          .legend.front {
            background: #facc15;
          }

          .legend.saw {
            background: #38bdf8;
          }

          .textColumn h2 {
            margin-top: 0;
          }

          .highlight {
            color: #f59e0b;
            font-weight: 800;
            font-size: 20px;
          }

          .dangerBox {
            margin-top: 24px;
            padding: 20px;
            border-radius: 16px;
            border: 1px solid rgba(239, 68, 68, 0.35);
            background: rgba(239, 68, 68, 0.08);
            color: #fca5a5;
            font-weight: 800;
            line-height: 1.6;
          }

          .oilInfo {
            margin-top: 28px;
          }

          .ppmBox {
            margin-top: 24px;
            padding: 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          @media (max-width: 900px) {
            .imageGrid,
            .splitLayout,
            .splitLayout.reverse {
              grid-template-columns: 1fr;
            }

            .legendBox li {
              font-size: 22px;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}