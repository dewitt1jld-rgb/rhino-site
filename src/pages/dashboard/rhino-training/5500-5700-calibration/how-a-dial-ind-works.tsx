import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const dialImage =
  "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/dial-indicator/images/dial-indicator.png";

export default function HowToUseADialIndicatorPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Calibration Helper Guide</p>
            <h1>How to Use a Dial Indicator</h1>
            <p>
              A dial indicator measures very small differences on a plunge axis.
              It helps you confirm that a part, saw, drill, or moving axis is
              straight.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>What the Reading Means</h2>
              <p>
                If you zero the dial indicator, the reading will increase as the
                pin is pushed inward. The goal is to understand whether the part
                is high, low, or straight compared to your zero point.
              </p>
            </div>
          </section>

          <section className="panel center">
            <p className="helperText">
              Assume the dotted line is straight. If the solid black line is the
              part you are measuring, the middle reading is zero, the low side is
              negative, and the high side is positive.
            </p>

            <div className="slopedDemo">
              <div className="dialBlock negative">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator negative reading" />
                  <span className="dialReading">-0.015</span>
                </div>
                <p className="label">Negative</p>
              </div>

              <div className="dialBlock normal">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator zero reading" />
                  <span className="dialReading">0</span>
                </div>
                <p className="label">Zero</p>
              </div>

              <div className="dialBlock positive">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator positive reading" />
                  <span className="dialReading">0.015</span>
                </div>
                <p className="label">Positive</p>
              </div>

              <div className="dottedLine" />
              <div className="solidLine" />
            </div>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>The Goal</h2>
              <p>
                You want the dial indicator to read as close to zero as possible
                across the full length of the part you are checking.
              </p>
            </div>

            <div className="straightDemo">
             <div className="dialBlock moveUp">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator zero reading" />
                  <span className="dialReading">0</span>
                </div>
                <p className="label">Zero</p>
              </div>

              <div className="dialBlock moveUp">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator zero reading" />
                  <span className="dialReading">0</span>
                </div>
                <p className="label">Zero</p>
              </div>

              <div className="dialBlock moveUp">
                <div className="dialWrap">
                  <img src={dialImage} alt="Dial indicator zero reading" />
                  <span className="dialReading">0</span>
                </div>
                <p className="label">Zero</p>
              </div>

              <div className="flatLine" />
            </div>
          </section>

          <section className="callout info">
            <h3>Real Machine Setup</h3>
            <p>
              These examples are only illustrations. In real life, the dial
              indicator should be fixed to a solid surface. Move the part across
              the dial indicator. The dial indicator itself should not move.
            </p>
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

          .negative {
  transform: translateY(-70px);
}

          .normal {
  transform: translateY(-90px);
}

          .positive {
  transform: translateY(-120px);
}

.moveUp {
  transform: translateY(-70px);
}


          .slopedDemo,
          .straightDemo {
            position: relative;
            min-height: 410px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: end;
            margin-top: 36px;
            overflow: hidden;
          }

          .dialBlock {
            position: relative;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dialWrap {
            position: relative;
            width: min(210px, 100%);
            transform: rotate(-45deg);
          }

          .dialWrap img {
            width: 100%;
            height: auto;
            box-shadow: none !important;
            border-radius: 0 !important;
          }

 .dialReading {
  position: absolute;
  left: 50%;
  top: 37%;
  transform: translate(-50%, -50%) rotate(45deg);
  min-width: 92px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.92);
  color: #000;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
  text-align: center;
  border-radius: 2px;
}

          .label {
            margin-top: 8px !important;
            color: #f59e0b !important;
            font-size: 26px !important;
            font-weight: 900 !important;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            transform: translateY(70px);
          }

          .dottedLine {
            position: absolute;
            left: 3%;
            right: 3%;
            bottom: 58px;
            border-top: 2px dashed rgba(255, 255, 255, 0.65);
            z-index: 1;
          }

          .solidLine {
            position: absolute;
            left: 3%;
            right: 3%;
            bottom: 52px;
            height: 18px;
            background: #05070b;
            transform: rotate(-4deg);
            transform-origin: left center;
            z-index: 2;
          }

          .flatLine {
            position: absolute;
            left: 3%;
            right: 3%;
            bottom: 52px;
            height: 16px;
            background: #05070b;
            z-index: 2;
          }

          .fixedSetup {
            min-height: 430px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
          }

          .sideDial {
            width: 260px;
            display: flex;
            justify-content: flex-end;
            transform: translateY(10px);
          }

          .rotateDial {
            transform: rotate(90deg);
            width: 220px;
          }

          .rotateDial .dialReading {
            transform: translate(-50%, -50%) rotate(-90deg);
          }

          .drillHead {
            width: 190px;
            height: 300px;
            background: #05070b;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .drillHead::after {
            content: "";
            position: absolute;
            bottom: -74px;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 74px;
            background: #05070b;
          }

          .drillHead span {
            color: white;
            font-size: 28px;
            letter-spacing: 0.1em;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
          }

          @media (max-width: 800px) {
            .slopedDemo,
            .straightDemo {
              grid-template-columns: 1fr;
              min-height: auto;
              gap: 34px;
            }

            .dottedLine,
            .solidLine,
            .flatLine {
              display: none;
            }

            .fixedSetup {
              flex-direction: column;
              min-height: auto;
            }

            .sideDial {
              justify-content: center;
              transform: none;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}