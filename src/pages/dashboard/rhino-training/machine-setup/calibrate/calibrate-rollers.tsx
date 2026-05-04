import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function CalibrateRollersPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Calibrate
        </div>

        <section className="heroPanel">
          <h1>Calibrate Rollers</h1>
          <p>
            This page explains how to calibrate the roller positions using the
            roller calibration screen. The screen looks more complicated than it
            is — follow the instructions on the right-hand side and focus on the
            required steps.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Calibration Screen</h2>
            <p>
              Use this screen to set the roller tool indexes and maximum roller
              positions. For now, ignore the extra numbers and follow the step
              sequence on the right side of the window.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-rollers/images/calibrate-rollers-01-main-screen.png"
            alt="Calibrate rollers main screen"
            tall
          />

          <div className="callout info">
            <p>
              This screen says <strong>Door Depth</strong>, but it is asking for
              the dimension most people would consider the door width. It should be about 36"
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibration Steps</h2>
            <p>
              Follow these steps in order. The goal is to teach the machine
              where each roller position is located.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <p>
                Find a door long enough to sit in front of the{" "}
                <strong>first 3 rollers</strong>.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <p>
                Measure the depth of the door and enter that value in the bottom
                left corner where it says <strong>door Depth</strong>. This is
                the dimension most people would consider the width. should be about 36"
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <p>
                Place the door against the back fence of the machine and make
                sure it is in front of the frist 3 rollers. If the pusher is in the
                way, go to the Jog Axis screen and move the pusher out of the
                way.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <p>
                Press <strong>Find Roller Tool Indexes</strong>. The machine
                will run one roller at a time, then show a screen with the new
                values. Press OK and move to the next step.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <p>
                Once the door is removed, press{" "}
                <strong>Find Maximums</strong>. The rollers will move one at a
                time toward the back fence.
              </p>
            </div>

            <div className="stepCard criticalStep">
              <div className="stepNumber">6</div>
              <p>
                Press <strong>Update</strong>. If you do not update, nothing
                will save and the entire test will need to be run again.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Roller Number Reference</h2>
            <p>
              Looking at the machine from the front, label the orange
              motor-driven rollers from infeed to outfeed.
            </p>
          </div>

          <div className="referenceGrid">
            <div className="referenceCard">
              <h3>Roller 1</h3>
              <p>Middle of the infeed conveyor tables</p>
            </div>

            <div className="referenceCard">
              <h3>Roller 2</h3>
              <p>infeed side of Fab cabinet</p>
            </div>

            <div className="referenceCard">
              <h3>Roller 3</h3>
              <p>Infeed side of the saw cabinet</p>
            </div>

            <div className="referenceCard">
              <h3>Roller 4</h3>
              <p>Outfeed side of the saw cabinet</p>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h3>Calibration Complete</h3>
          <p>
            Once the roller indexes and maximums are found, press Update to save
            the values. The roller calibration is complete once the values are
            saved.
          </p>
        </div>
      </TrainingLayout>

      
    </RequireActiveAccess>
  );
}