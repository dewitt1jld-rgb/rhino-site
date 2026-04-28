import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function CalibrateDrillsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup / Calibrate</div>

        <section className="heroPanel">
          <h1>Calibrate Drills</h1>
          <p>
            This page walks through how to properly calibrate drill positions.
            Understanding the relationship between the top, front, bottom, and back
            drills is key to getting accurate hole placement.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Calibration Screen</h2>
            <p>
              I like to view this page in three different sections. Each colored
              section represents a different part of the calibration process.
            </p>
          </div>

          <div className="panelContent">
            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-drills/images/calibrate-drills-01-main-screen.png"
              alt="Drill calibration main screen"
              tall
            />

            <p className="helperText">
              Start by filling out the middle section, shown in blue. This data is
              also used in the top section. Starting from the left side, enter the
              stock length, part height, part depth, trim, cut length, and repeat.
            </p>

            <p className="helperText">
              For cut length, 5&quot; typically works really well. I also usually leave
              repeat at 1 because I want to make changes between each time I run
              the test.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fill Out the Drill Setup</h2>
            <p>
              Once the middle section is filled out, start on the top section. The
              top section is what you want the part to do. The bottom section is
              what the part actually did.
            </p>
          </div>

          <div className="panelContent">
            <p className="helperText">
              Start by selecting the drill bit you want to use on each drill. I
              recommend using the D09-A because it makes measuring much easier in
              the lower section.
            </p>

            <p className="helperText">
              After choosing the drill bits, set the X, Y, and Z for each drill.
              On each surface, the drill should be 1&quot; away from the back fence or
              X, 1&quot; away from the lead edge or Y, and 1&quot; up on the table or Z.
            </p>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-drills/images/calibrate-drills-02-data.png"
              alt="Drill setup values"
            />

            <div className="drillGrid">
              <div className="drillCard">
                <h3>Top</h3>
                <p>X = 1</p>
                <p>Y = 1</p>
                <p>Z = 2</p>
              </div>

              <div className="drillCard">
                <h3>Front</h3>
                <p>X = 4.5</p>
                <p>Y = 1</p>
                <p>Z = 1</p>
              </div>

              <div className="drillCard">
                <h3>Bottom</h3>
                <p>X = 1</p>
                <p>Y = 1</p>
                <p>Z = 0</p>
              </div>

              <div className="drillCard">
                <h3>Back</h3>
                <p>X = 0</p>
                <p>Y = 1</p>
                <p>Z = 1</p>
              </div>
            </div>

            <p className="helperText">
              This example uses a perfect 4.5&quot; x 2&quot; tube with no tongue, pocket,
              or lips. A perfect tube makes calibration much easier because you do
              not have to line the drills up to a specific surface.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How the Values Work</h2>
            <p>
              These values are based on the first surface each drill contacts on a
              4.5&quot; x 2&quot; tube.
            </p>
          </div>

          <div className="panelContent">
            <p className="helperText">
              The front X is 4.5&quot; because the tube itself is 4.5&quot;, and that is
              the first surface the front drill hits. The top Z is 2&quot; because the
              part height is 2&quot;, and that is the first surface the drill hits when
              it comes down into the part.
            </p>

            <p className="helperText">
              The bottom Z is 0&quot; because when the bottom drill comes up from under
              the machine, the first surface it hits is the bottom of the part,
              which is sitting on the bottom of the table. If you have a back drill,
              the concept is the same: the back X is 0 because that is the first
              surface the drill hits.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Run the Test Cycle</h2>
            <p>
              Once all the information is filled out, run the test and let the
              machine create the drilled hole and dimple for measurement.
            </p>
          </div>

          <div className="panelContent">
            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <p>
                  Press <strong>Start</strong> and let the machine run. If the tap
                  function is turned on, the machine will slowly reach out and
                  touch the part without the drill bit spinning.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <p>
                  The machine will drill a through hole and create a dimple roughly
                  1/2&quot; away from the hole. This is normal and helps you measure
                  where the part is sitting.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <p>
                  After each drill has calibrated, the part will move over to the
                  saw. The machine will make a lead cut and then make the 5&quot; cut.
                </p>
              </div>
            </div>

            <div className="callout warning">
              <h3>Important</h3>
              <p>
                If you are drilling on all four surfaces of the part, mark the top
                of the part with a Sharpie before running the test. This helps you
                identify the correct surface after the part is cut off.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Measure the Results</h2>
            <p>
              Measure each required dimension carefully and enter the measured
              values back into the lower section of the screen.
            </p>
          </div>

          <div className="panelContent">
            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-drills/images/calibrate-drills-03-x-y-z.png"
              alt="Drill measurement example"
            />

            <p className="helperText">
              Measure from the edge of the part to the edge of the hole, not the
              center. It is difficult and inaccurate to guess where the center of
              the circle is.
            </p>

            <p className="helperText">
              This is why the D09-A drill is helpful. It has a diameter of .201&quot;.
              If you measure from the edge of the part to the edge of the hole, all
              you have to do is add half of the drill bit diameter. In this case,
              half of the drill bit diameter is roughly .1&quot;.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Adjust Each Drill Surface</h2>
            <p>
              Start with one drill surface, enter the measured values, and then
              repeat the same process for the remaining surfaces.
            </p>
          </div>

          <div className="panelContent">
            <p className="helperText">
              For the top drill, the Z is automatically calibrated when the machine
              taps the part. You only need to measure the X and Y. Measure from the
              back of the part to the edge of the hole for X, add .1&quot;, and enter
              that value into the lower section of the screen.
            </p>

            <p className="helperText">
              Then measure the Y from the lead edge of the part to the edge of the
              hole, add .1&quot;, and enter that value as well. Please use a calculator;
              it makes this much easier.
            </p>

            <p className="helperText">
              Repeat these same steps for the remaining surfaces. For the top and
              bottom drills, Z is automatically calibrated and you only measure X
              and Y. For the front and back drills, X is automatically calibrated,
              so you only measure Y and Z.
            </p>
          </div>
        </section>

        <section className="panel completionPanel">
          <div className="completionBox">
            <h3>Calibration Complete</h3>
            <p>
              Repeat the process for each drill surface. Adjust values as needed
              until all hole locations are consistent and accurate.
            </p>
          </div>
        </section>
      </TrainingLayout>

      <style jsx>{`
        .breadcrumb {
          color: rgba(255, 255, 255, 0.62);
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
          color: #ffffff;
          font-size: 26px;
          letter-spacing: -0.02em;
        }

        .panelContent {
          display: grid;
          gap: 16px;
        }

        .helperText {
          margin: 0;
          max-width: 940px;
        }

        .drillGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 4px;
        }

        .drillCard {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease;
        }

        .drillCard:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.075);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .drillCard h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 900;
        }

        .drillCard p {
          margin: 6px 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 15px;
          line-height: 1.5;
        }

        .stepList {
          display: grid;
          gap: 14px;
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

        .callout {
          padding: 18px 20px;
          border-radius: 18px;
          line-height: 1.65;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .callout.warning {
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.32);
        }

        .callout h3 {
          margin: 0 0 10px;
          color: #fbbf24;
          font-size: 20px;
          font-weight: 900;
        }

        .callout p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 16px;
          line-height: 1.7;
        }

        .completionPanel {
          padding: 0;
          overflow: hidden;
        }

        .completionBox {
          padding: 24px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          border-radius: 24px;
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

        @media (max-width: 800px) {
          .drillGrid {
            grid-template-columns: 1fr;
          }

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

          .stepCard {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </RequireActiveAccess>
  );
}
