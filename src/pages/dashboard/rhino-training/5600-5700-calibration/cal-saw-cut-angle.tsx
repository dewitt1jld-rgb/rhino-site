import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/angle-cut-length/images/calibrate-saw-cut-angle-01-main-screen.png";

const bevelVsMiter =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/angle-cut-length/images/calibrate-saw-cut-angle-02-bevel-vs-miter.png";

const programAngles =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/angle-cut-length/images/calibrate-saw-cut-angle-03-program-angles.png";

export default function CalSawCutAnglePage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroCard">
            <p className="eyebrow">5600 / 5700 Calibration</p>
            <h1>Calibrate Saw Cut Angle</h1>
            <p>
              This screen is designed as a second option for getting the two saw
              rotations straight. The concept is the same: when making a cut,
              the cut should be at the angle you commanded.
            </p>
          </section>

          <section className="card center">
            <img src={mainScreen} alt="Calibrate Saw Cut Angle main screen" />
            <p>
              I recommend using the dial indicator screen to straighten the saw
              and drills because it is a simple method once you understand how it
              works.
            </p>
          </section>

          <section className="card">
            <h2>Step 1: Select the Saw and Cut Type</h2>
            <p>
              Start with the <strong>Compound Saw</strong> checked, then select
              whichever type of cut needs to be calibrated.
            </p>

            <div className="twoCol">
              <img src={bevelVsMiter} alt="Bevel and miter saw cut example" />

              <div className="warningBox">
                This saw has two rotational axes. This means you can cut both a
                bevel and a miter with the same blade. If either the miter or
                bevel is out of alignment, it can affect the other cut. I
                recommend calibrating both the miter and bevel any time you think
                something is off.
              </div>
            </div>

            <img
              className="wideImage"
              src={programAngles}
              alt="Miter saw and bevel saw angle information"
            />
          </section>

          <section className="card">
            <h2>Step 2: Enter Part Height and Part Depth</h2>
            <p>
              At the bottom of the screen, make sure you enter the correct part
              height and part depth.
            </p>
          </section>

          <section className="card">
            <h2>Step 3: Enter the Cut Angle</h2>
            <p>
              Enter the angle of the cut you want to make. I recommend using{" "}
              <strong>45 degrees</strong> for both miter and bevel calibration.
            </p>
          </section>

          <section className="card">
            <h2>Step 4: Clamp the Material</h2>
            <p>
              Push a piece all the way through the saw cabinet so that all four
              saw clamps are on the piece. There should be two vertical clamps
              and two horizontal clamps.
            </p>
          </section>

          <section className="card">
            <h2>Step 5: Make the Cut</h2>
            <p>
              Press the button that says <strong>“Make Cut At”</strong>.
            </p>
          </section>

          <section className="card">
            <h2>Step 6: Measure the Angle</h2>
            <p>Remove the piece and measure the correct angle.</p>

            <div className="placeholderGrid">
              <div className="placeholderBox">Placeholder for miter picture</div>
              <div className="placeholderBox">Placeholder for bevel picture</div>
            </div>
          </section>

          <section className="card">
            <h2>Step 7: Adjust Origin</h2>
            <p>
              Enter the measured angle and press{" "}
              <strong>“Adjust Origin”</strong>.
            </p>
          </section>

          <section className="finalCard">
            <h2>Repeat Until the Cut Is Correct</h2>
            <p>
              Repeat steps 1–4 on the screen until you are satisfied with the
              cut. Once satisfied, switch to the other type of angle and repeat.
            </p>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 28px;
          }

          .heroCard,
          .card,
          .finalCard {
            border-radius: 22px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(245, 158, 11, 0.26);
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
          }

          .heroCard {
            text-align: center;
            background: linear-gradient(
              135deg,
              rgba(8, 12, 20, 0.96),
              rgba(24, 18, 8, 0.96)
            );
          }

          .eyebrow {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          h1 {
            margin: 0 0 18px;
            color: #ffffff;
            font-size: clamp(34px, 5vw, 58px);
            line-height: 1.05;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          h2 {
            margin: 0 0 14px;
            color: #f59e0b;
            font-size: clamp(24px, 3vw, 34px);
            line-height: 1.2;
          }

          p {
            margin: 0;
            color: rgba(255, 255, 255, 0.92);
            font-size: 20px;
            line-height: 1.55;
            font-weight: 650;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 16px 38px rgba(0, 0, 0, 0.35);
          }

          .center {
            text-align: center;
          }

          .center img {
            margin: 0 auto 24px;
          }

          .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: center;
            margin-top: 24px;
          }

          .warningBox {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 0, 0, 0.08);
            border: 1px solid rgba(255, 0, 0, 0.28);
            color: #ff4d4d;
            font-size: 21px;
            line-height: 1.5;
            font-weight: 800;
            text-align: center;
          }

          .wideImage {
            margin: 30px auto 0;
          }

          .placeholderGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 24px;
          }

          .placeholderBox {
            min-height: 170px;
            border-radius: 18px;
            border: 2px dashed rgba(245, 158, 11, 0.45);
            background: rgba(255, 255, 255, 0.04);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: rgba(255, 255, 255, 0.75);
            font-size: 20px;
            font-weight: 900;
            padding: 20px;
          }

          .finalCard {
            text-align: center;
            background: linear-gradient(
              135deg,
              rgba(245, 158, 11, 0.14),
              rgba(255, 255, 255, 0.05)
            );
          }

          @media (max-width: 800px) {
            .heroCard,
            .card,
            .finalCard {
              padding: 22px;
              border-radius: 18px;
            }

            .twoCol,
            .placeholderGrid {
              grid-template-columns: 1fr;
            }

            p,
            .warningBox {
              font-size: 18px;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}