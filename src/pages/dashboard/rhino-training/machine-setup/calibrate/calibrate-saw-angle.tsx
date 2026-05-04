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
      </TrainingLayout>
</RequireActiveAccess>
  );
}