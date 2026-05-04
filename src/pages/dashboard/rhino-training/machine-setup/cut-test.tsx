import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/cut-test/images/cut-test-01-main-screen.png",
};

export default function CutTestPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Cut Test</h1>
          <p>
            Cut Test is used to test a specific cut without using the pusher.
            It allows you to verify cut speed, angle accuracy, and setup before
            running real material.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Cut Test Screen</h2>
            <p>
              This screen is designed for testing — not for producing finished
              parts or cutting material to final length.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Cut Test main screen"
            tall
          />

          <div className="callout warning">
            <p>
              This screen is <strong>NOT</strong> for creating finished parts or
              getting material to a specific length. It is strictly for testing
              cuts.
            </p>
          </div>

          <p className="helperText">
            Cut Test is commonly used to verify cutting speed or test compound
            angles before running a real job.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How to Use Cut Test</h2>
            <p>
              Follow these steps to safely perform a test cut.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <div>
                <h3>Enter part dimensions</h3>
                <p>
                  Enter the part height and depth on the left side of the
                  screen. Also enter saw height if required.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <div>
                <h3>Set the angle</h3>
                <p>
                  Set the angle in the top-right section of the screen. If using
                  a compound saw, this is where you define the cut angle.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <div>
                <h3>Engage clamps</h3>
                <p>
                  Press the clamp buttons:
                  <br />
                  <strong>H-SAW-IN</strong>, <strong>H-SAW-OUT</strong>, and{" "}
                  <strong>V-SAW</strong>
                </p>
                <p>
                  These will fire the horizontal and vertical clamps before the
                  saw cuts, ensuring a solid clamp against the back fence.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <div>
                <h3>Make the cut</h3>
                <p>
                  Once everything is set correctly, press{" "}
                  <strong>Make Cut</strong> and the saw will begin the cut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>When to Use Cut Test</h2>
            <p>
              Cut Test is best used before running real jobs to verify setup.
            </p>
          </div>

          <div className="callout info">
            <p>
              Use this screen when:
              <br />• You want to test cut speed
              <br />• You need to verify an angle
              <br />• You are troubleshooting cut quality
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Cut Test Complete</h2>
          <p>
            You now understand how to safely test cuts, set angles, engage
            clamps, and verify machine performance before running production
            material.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}