import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/jog-axis/images/jog-axis-01-main-screen.png",
  rollers:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/jog-axis/images/jog-axis-02-jog-rollers.png",
};

export default function JogAxisPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Jog Axis</h1>
          <p>
            Jog Axis allows you to move individual machine components one at a
            time. This is useful when you need to reposition a motor, move the
            pusher out of the way, home certain components, or manually move an
            axis to a specific location.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Jog Axis Screen</h2>
            <p>
              This screen is similar to the I/O screen because it allows you to
              control individual components, but Jog Axis focuses on moving
              machine axes and motors.
            </p>
          </div>

          <TrainingImage src={images.main} alt="Jog Axis main screen" tall />

          <p className="helperText">
            You can navigate to the motor or component you need to move and use
            the <strong>+</strong> and <strong>-</strong> buttons to slowly jog
            that motor in either direction.
          </p>

          <div className="callout info">
            <p>
              The <strong>Move To</strong> button lets you send an axis directly
              to a specific position instead of jogging it one small amount at a
              time.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Common Uses</h2>
            <p>
              Jog Axis is most useful when you need to manually position machine
              components.
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Move the Pusher</h3>
              <p>
                A common use is moving the pusher out of the way. For example,
                you can enter <strong>300&quot;</strong> and press{" "}
                <strong>Move To</strong> to send the pusher out of the machine
                or out of the way so you can move a stick.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Home the Pusher</h3>
              <p>
                You can use this screen to home the pusher when needed.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Jog Saw Angles</h3>
              <p>
                This screen can be used to jog saw angles to the desired
                position.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Jog Rollers</h3>
              <p>
                Motor-powered rollers can be jogged or moved to a specific
                position using the roller controls.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Tool Carousel</h3>
              <p>
                The tool carousel can also be jogged from this screen when
                needed.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Jog Rollers</h2>
            <p>
              The Rollers tab gives you control over the motor-driven rollers.
            </p>
          </div>

          <TrainingImage src={images.rollers} alt="Jog Rollers screen" tall />

          <p className="helperText">
            To move the motor-driven rollers, click the <strong>Rollers</strong>{" "}
            tab. You will see the same <strong>+</strong> and{" "}
            <strong>-</strong> buttons, along with a <strong>Move To</strong>{" "}
            button, allowing you to jog the rollers to the position you need.
          </p>
        </section>

        <div className="completionBox">
          <h2>Jog Axis Complete</h2>
          <p>
            You now know how Jog Axis is used to move individual motors,
            reposition the pusher, home components, jog saw angles, move rollers,
            and control the tool carousel.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}