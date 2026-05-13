import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageStyles from "@/components/TrainingPageStyles";
export default function PhotoEyeAdjustmentPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
            

      <div className="breadcrumb">
        Rhino Training / Troubleshooting / Photo Eye Adjustment
      </div>

      <section className="heroPanel">
        <h1>Photo Eye Adjustment</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
      <img
  src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-image-left.png"
  alt="Photo Eye Left"
/>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 4",
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-image-right.png"
              alt="Photo Eye Right"
                         />
          </div>
        </div>

        <p
          style={{
            marginTop: "30px",
            textAlign: "center",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          These photo eyes are what tells the machine when the part enters and
          exits the machine. If either of them get blocked the machine will not
          be able to measure the stock length or not be able to tell when the
          piece is removed and makes you click an okay button each time saying
          that the part has been removed.
        </p>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h2>Adjusting the Sensitivity</h2>
        </div>

        <p>
          Each photo eye has a yellow dial on the top or side of the eye. This
          dial can be used to strengthen or weaken the sensitivity of the eye.
          Sometimes the eye is turned up so high that it senses the front of the
          machine, sometimes it is turned down so low that it cannot even reach
          the part.
        </p>

        <p>
          More often than not, the sensitivity is fine but the eye is super
          dirty so it thinks it is seeing things that are not there.
        </p>

        <div className="callout warning">
          <h3>Cleaning Tip</h3>

          <p>
            Take a paper towel with some denatured alcohol to clean the lens of
            the eye.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "30px",
          }}
        >
          <img
            src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-io-testing.png"
            alt="I/O Testing Screen"
            
          />
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <h2>Using the I/O Testing Screen</h2>
        </div>

        <p>
          If you do need to adjust the sensitivity of the eye, it is much easier
          to use this screen to help you do it.
        </p>

        <p>
          From the home screen navigate to <strong>Machine Setup</strong> and
          then to <strong>I/O Testing</strong>. These buttons will light up when
          the eye is triggered and turn off when nothing is in front of it.
        </p>

        <p>
          Move the screen so you can see it while you make adjustments and use
          your hand to trigger the eye. Slowly increase the sensitivity until
          the photo eye is properly working.
        </p>

        <div className="callout danger">
          <h3>If the Inputs Stay On</h3>

          <p>
            If these buttons are constantly on, it either means the eye is dirty
            and needs to be cleaned or the sensitivity is turned up too high.
          </p>
        </div>
      </section>

      <section className="completionBox">
        <h2>Fun Fact</h2>

        <p>
          Older machines used to have 4 of these photo eyes. We used to utilize
          the middle two eyes but have since changed the software to only look
          at the first and last photo eye.
        </p>

        <p>
          Essentially you guys have two extra photo eyes that can be used as
          replacements if the infeed or outfeed eye ever go bad.
        </p>
      </section>
    </TrainingLayout>

    </RequireActiveAccess>
  );
}