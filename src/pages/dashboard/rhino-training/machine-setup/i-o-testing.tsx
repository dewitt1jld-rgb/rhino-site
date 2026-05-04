import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

export default function IOTestingPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>I/O Testing</h1>
          <p>
            This page explains the I/O Testing screen and how it can be used for
            basic troubleshooting of machine inputs and outputs.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main I/O Testing Screen</h2>
            <p>
              I/O stands for Inputs and Outputs. Depending on your machine, you
              may see more or fewer items on this screen.
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/i-o-testing/images/i-o-testing-01-main-screen.png"
            alt="I/O Testing main screen"
            tall
          />
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Inputs vs Outputs</h2>
            <p>
              Understanding the difference between inputs and outputs makes this
              screen much easier to use.
            </p>
          </div>

          <div className="twoColumn">
            <div className="infoCard">
              <h3>Outputs</h3>
              <p>
                An output is something you press to make another thing happen.
                This is usually where you manually fire an item such as a
                vertical clamp or horizontal clamp.
              </p>
            </div>

            <div className="infoCard">
              <h3>Inputs</h3>
              <p>
                An input is something the machine reads from a button or sensor.
                Inputs are useful for checking items like photo eyes, doors,
                locks, and sensors.
              </p>
            </div>
          </div>

          <div className="callout info">
            <p>
              Most of the time, you will only need to use the output side. The
              output side lets you manually activate air-driven components that
              are normally fired automatically by the software.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Using I/O Testing for Troubleshooting</h2>
            <p>
              This screen is mainly used when trying to identify whether a
              specific component is working correctly.
            </p>
          </div>

          <p className="helperText">
            For example, if the H-Clamp saw out is not working well, you could
            come to this screen and manually fire that output back and forth to
            help identify or test the issue.
          </p>

          <p className="helperText">
            The input side can also show whether the infeed and outfeed photo
            eyes are working correctly. Place a piece of metal in front of the
            eye and check whether the input lights up on the screen.
          </p>

          <div className="callout warning">
            <h3>Troubleshooting Note</h3>
            <p>
              This page is a general overview. More detailed troubleshooting
              guides can be linked from this section later.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>I/O Testing Overview Complete</h3>
          <p>
            Use this screen to manually test outputs and verify inputs while
            troubleshooting machine behavior.
          </p>
        </div>
      </TrainingLayout>


    </RequireActiveAccess>
  );
}