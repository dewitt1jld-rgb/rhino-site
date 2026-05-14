import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const oldStyleImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-01-old-style.png";

const newStyleImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-02-new%20manifold.png";

const ioScreenImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-03-io-screen.png";

export default function AirManifoldPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Air Manifold
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Air Manifold</h1>
            <p>
              The air manifold controls machine operations that move with air,
              such as clamps and other pneumatic functions.
            </p>
          </section>

          <section className="panel">
            <div className="imageGrid">
              <div className="imageBlock">
                <img src={oldStyleImage} alt="Old style air manifold" />
                <h2>Old Style</h2>
                <p className="helperText">
                  These older style manifolds do not have built-in regulators.
                  That is why you see the inline regulators off to the side.
                  Each operation has two regulators: one to control the speed
                  in/down and one to control the speed out/up.
                </p>
              </div>

              <div className="imageBlock">
                <img src={newStyleImage} alt="New style air manifold" />
                <h2>New Style</h2>
                <p className="helperText">
                  These newer style manifolds have built-in regulators. Each
                  valve has a gold screw on the top and bottom side of the block.
                  Every operation has two regulators: one to control the speed
                  in/down and one to control the speed out/up.
                </p>
              </div>
            </div>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>How to Adjust</h2>
              <p>
                Start by going to Machine Setup and then opening the I/O Testing
                screen.
              </p>
            </div>

            <img src={ioScreenImage} alt="I/O testing screen" />

            <p className="helperText">
              Anything that moves off air can be fired from this screen. Click
              one of the clamp outputs, then use the keyboard space bar to fire
              and release that clamp repeatedly.
            </p>

            <p className="helperText">
              This makes regulating easier because you can take the keyboard with
              you, make small adjustments, and immediately test the movement.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Finding the Correct Valve</h2>
            </div>

            <p className="helperText">
              When you fire a clamp, both old and new style regulators have a
              light that will turn green or red. Use that light to identify
              exactly which valve needs to be adjusted.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Regulating the Speed</h2>
            </div>

            <p className="helperText">
              To slow the speed down, tighten the screw. To speed it up, loosen
              the screw.
            </p>

            <p className="helperText">
              One side of the regulator controls the speed when the operation is
              engaged, and the other side controls the speed when it is released.
              Not all machines are the same, so if one side does not adjust the
              direction you expected, switch to the opposite side and adjust that
              screw instead.
            </p>
          </section>

          <section className="callout warning">
            <h3>Adjust Slowly</h3>
            <p>
              Only adjust the regulators in small movements. If the horizontal
              clamps fire too hard and slam into the ends of the clamp shaft,
              they can become decoupled.
            </p>
          </section>

          <section className="completionBox">
            <h2>Take It Slow</h2>
            <p>
              This can be confusing at first. Make small adjustments, test after
              every change, and avoid making big turns on the regulator screws.
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

          .imageGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .imageBlock {
            text-align: center;
          }

          .imageBlock h2 {
            margin-top: 24px;
          }

          img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 14px;
            margin: 0 auto;
          }

          .center img {
            max-width: 950px;
            margin: 28px auto;
          }

          @media (max-width: 900px) {
            .imageGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}