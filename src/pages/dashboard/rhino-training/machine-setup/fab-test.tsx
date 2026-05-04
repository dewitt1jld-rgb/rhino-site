import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/fab-test/images/fab-test-01-main-screen.png",
  pullFromJob:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/fab-test/images/fab-test-02-pull-from-job.png",
};

export default function FabTestPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Fab Test</h1>
          <p>
            Fab Test lets you test fabrications outside of a normal job. It is
            mainly useful for checking drill depths, countersinks, plunges, and
            certain fabrication movements before running production material.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fab Test Screen</h2>
            <p>
              This screen is designed for testing fabrications. You can manually
              set it up, or you can import fabrication data from the Fab Job
              screen.
            </p>
          </div>

          <TrainingImage src={images.main} alt="Fab Test main screen" tall />

          <div className="callout danger">
            <h3>This Screen Does Not Use the Pusher</h3>
            <p>
              When you say start on this screen the drill will plunge straight down from a pre-set
              position. Do not use this screen for finished material. It is for testing only 
            </p>
          </div>

          <div className="callout warning">
            <h3>Not for Testing Hardware Placement</h3>
            <p>
              This screen drills wherever the part is placed under or in front of
              the drill. It does not measure the piece or move it into position.
              If you need to test hardware prep placement, create a mock-up job
              instead.
            </p>
          </div>

          <p className="helperText">
            Fab Test is best used for testing depths or diagnosing why a drill
            bit may be breaking during a specific fabrication.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Manual Setup</h2>
            <p>
              Fab Test can be manually filled out when you want to test a
              specific fabrication without pulling data from a job.
            </p>
          </div>

          <p className="helperText">
            This screen works much like the metal fabrication screen in Glazier
            Studio or PartnerPak. Start by telling the machine what drill bit is
            loaded in the top drill.
          </p>

          <p className="helperText">
            If you have a 5000 series machine, you can tell it which drill bit
            you want to use and the tool changer will handle the tool change for
            you.
          </p>

          <div className="callout info">
            <p>
              Use the dropdown and fill out the leftmost column. Each line item
              is a fabrication. You need to provide the X, Y, and Z location, as
              well as the depth for every fabrication.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Pulling a Fabrication from a Job</h2>
            <p>
              One of the most useful ways to use Fab Test is to import an exact
              fabrication from an existing job.
            </p>
          </div>

          <TrainingImage
            src={images.pullFromJob}
            alt="Pull fabrication from job screen"
            tall
          />

          <p className="helperText">
            Inside the Fab Job screen, you can view all parts and the
            fabrications assigned to each part. Navigate to the part causing
            issues and select the specific fabrication you want to test.
          </p>

          <p className="helperText">
            Once the fabrication is highlighted in blue, press{" "}
            <strong>Run in Fab Test</strong>. This imports that exact
            fabrication into the Fab Test screen so it is ready to run.
          </p>

          <div className="callout warning">
            <p>
              All you need to do after importing the fabrication is load material
              in front of the drill and press <strong>Start</strong>.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Why Fab Test Is Helpful</h2>
            <p>
              Fab Test can help you separate programming issues from machine or
              calibration issues.
            </p>
          </div>

          <p className="helperText">
            For example, if a countersink is not drilling deep enough, bring
            that fabrication into Fab Test and run it on a test piece. If it is
            not deep enough, slowly increase the depth until the result is
            correct.
          </p>

          <div className="callout danger">
            <p>
              This does not automatically fix the issue. It only helps you
              identify what kind of issue you are dealing with.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <div>
                <h3>Possible calibration or tool index issue</h3>
                <p>
                  If the starting depth from the job is different from the depth
                  you are happy with in Fab Test, the drill calibration or tool
                  index may need to be adjusted by that difference.
                </p>
                <p>
                  Do not adjust tool indexes directly from this screen unless
                  you fully understand what you are changing.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <div>
                <h3>Possible programming issue</h3>
                <p>
                  Compare the Fab Job screen data to the finished piece. If the
                  machine did exactly what the screen said, but the hole is
                  still not where you want it, the issue is likely in the
                  software/programming.
                </p>
                <p>
                  If the saw or drill did not match the data on the screen, do
                  not fudge the software to compensate. The issue is on the
                  machine and should be fixed on the machine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h2>Fab Test Complete</h2>
          <p>
            You now understand what Fab Test is used for, what it should not be
            used for, how to manually set it up, and how to import fabrication
            data from a job for testing.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}