import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const toolIndexImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/tool-index-help/images/tool-index-help-01.png";

export default function ToolIndexHelpPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Tool Index Help
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Tool Index Help</h1>
            <p>
              Tool Index values are how the machine knows where to drill. The
              calibration screen is the user-friendly way to update these
              values.
            </p>
          </section>

          <section className="callout danger">
            <h3>Use Extreme Caution</h3>
            <p>
              What I am showing here has no safety checks, no error messages,
              and no back buttons. If you mistype numbers or move the wrong
              axis, the drill can crash into the part when drilling.
            </p>
            <p>
              Adjust tool indexes directly only at your own risk. Calibrating
              through the normal calibration screens is the safer method.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>Finding the Tool Index Value</h2>
              <p>
                Navigate to Machine Setup, then open Axis Parameters.
              </p>
            </div>

            <img src={toolIndexImage} alt="Axis parameter tool index screen" />

            <p className="helperText">
              The selected axis will highlight green. In the image above, the
              Top Fab X axis is selected. The current tool index is set to{" "}
              <strong>.404&quot;</strong>.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>How the Number Moves the Drill</h2>
            </div>

            <p className="helperText">
              Increasing the tool index number moves the drill away from its home
              position.
            </p>

            <p className="helperText">
              Decreasing the tool index number moves the drill toward its home
              position.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Example</h2>
            </div>

            <p className="helperText">
              Let&apos;s say all top X locations are drilling 1/32&quot; too
              close to the back of the part. After verifying the data is correct,
              you would go to Axis Parameters and increase the Top Drill X tool
              index by 1/32&quot;.
            </p>

            <div className="formulaBox">
              .404&quot; + .03125&quot; = .43525&quot;
            </div>

            <p className="helperText">
              <strong>.43525&quot;</strong> is the value you would enter into
              the Top Drill X axis tool index.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>How Each Axis Moves</h2>
              <p>
                Increasing does the following. Decreasing does the exact
                opposite.
              </p>
            </div>

            <div className="axisGrid">
              <div className="axisCard">
                <h3>Top Drill</h3>
                <p><strong>X</strong> — Away from back of part</p>
                <p><strong>Y</strong> — Closer to lead edge of part</p>
                <p><strong>Z</strong> — Deeper into part</p>
              </div>

              <div className="axisCard">
                <h3>Bottom Drill</h3>
                <p><strong>X</strong> — Away from back of part</p>
                <p><strong>Y</strong> — Closer to lead edge of part</p>
                <p><strong>Z</strong> — Deeper into part</p>
              </div>

              <div className="axisCard">
                <h3>Front Drill</h3>
                <p><strong>X</strong> — Deeper into part</p>
                <p><strong>Y</strong> — Closer to lead edge of part</p>
                <p><strong>Z</strong> — Farther away from bottom of part</p>
              </div>

              <div className="axisCard">
                <h3>Back Drill</h3>
                <p><strong>X</strong> — Deeper into part</p>
                <p><strong>Y</strong> — Closer to lead edge of part</p>
                <p><strong>Z</strong> — Farther away from bottom of part</p>
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

          img {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }

          .formulaBox {
            margin: 28px auto;
            max-width: 520px;
            padding: 20px 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.12);
            border: 1px solid rgba(245, 158, 11, 0.34);
            color: #f59e0b;
            font-size: 1.8rem;
            font-weight: 900;
            text-align: center;
          }

          .axisGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .axisCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.24);
          }

          .axisCard h3 {
            margin: 0 0 16px;
            color: #f59e0b;
            font-size: 1.35rem;
          }

          .axisCard p {
            margin: 8px 0;
            color: #d8e0ec;
            line-height: 1.6;
          }

          @media (max-width: 800px) {
            .axisGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}