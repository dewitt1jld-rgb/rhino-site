import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/manual-cutting/images/manual-cutting-01-main-screen.png",
};

export default function ManualCuttingPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / All Rhino Machines</div>

        <section className="heroPanel">
          <h1>Manual Cutting</h1>
          <p>
            Manual Cutting lets you cut a stick to any length or quickly make
            repeated cuts when the piece does not require fabrications.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Manual Cutting Screen</h2>
            <p>
              This screen is used when you need to cut material to size without
              running a full Fab Job workflow.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Manual Cutting main screen"
            tall
          />

          <p className="helperText">
            Manual Cutting works great when the piece does not have any
            fabrications and you need to quickly cut a part to size.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How to Use Manual Cutting</h2>
            <p>
              Start in the upper-left section and work through the fields before
              pressing Start.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <div>
                <h3>Enter part dimensions</h3>
                <p>
                  Enter the part height and depth. If you have an upcut saw, you
                  also need to enter the saw height.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <div>
                <h3>Select saw height when needed</h3>
                <p>
                  For upcut saws, use <strong>1</strong> for low,{" "}
                  <strong>2</strong> for mid, and <strong>3</strong> for high.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <div>
                <h3>Enter stock length or drop length</h3>
                <p>
                  Fill in the stock length or the length of the drop you want to
                  use.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <div>
                <h3>Set the repeat quantity</h3>
                <p>
                  Tell the machine how many times you want to repeat the same
                  cut at the same length.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <div>
                <h3>Enter the cut length</h3>
                <p>
                  Enter the finished cut length you want the machine to make.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>
              <div>
                <h3>Select lead and trail angles</h3>
                <p>
                  Select the angles you want the piece to cut at. Some machines
                  only support 90-degree cuts, while others allow a wider angle
                  range.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>
              <div>
                <h3>Set lead and trail trim</h3>
                <p>
                  You can set both the lead trim and trail trim, but the trim
                  cannot be set to <strong>0</strong>. It must be at least{" "}
                  <strong>.25&quot;</strong>.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">8</div>
              <div>
                <h3>Press Start</h3>
                <p>
                  Once all information is entered correctly, press{" "}
                  <strong>Start</strong> to make the cut.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Angle Limitations</h2>
            <p>
              Machine type affects which angles are available from this screen.
            </p>
          </div>

          <div className="callout warning">
            <p>
              If you have a 900 or 950, you are only able to cut at{" "}
              <strong>90 degrees</strong>.
            </p>
          </div>

          <div className="callout info">
            <p>
              If you have another machine model, you can use the dropdown on the
              lead or trail angle and select any degree between{" "}
              <strong>45 degrees</strong> and <strong>135 degrees</strong>.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>5000 Series Note</h2>
            <p>
              Manual Cutting may not currently be available on certain 5000
              series machines.
            </p>
          </div>

          <div className="callout danger">
            <p>
              If you have a 5000 series machine, this page may be disabled on
              your machine. When DeMichele updates this feature and it works
              again, this training page should be updated.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Manual Cutting Complete</h2>
          <p>
            You now know how to enter dimensions, choose stock length, set cut
            length, adjust angles and trims, and start a manual cut.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}