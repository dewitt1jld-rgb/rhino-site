import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/home-axis/images/home-axis-01-main-screen.png",
};

export default function HomeAxisPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / All Rhino Machines</div>

        <section className="heroPanel">
          <h1>Home Axis</h1>
          <p>
            The Home Axis screen moves the machine motors back to their home
            positions so the machine knows where each axis is starting from.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Home Axis Screen</h2>
            <p>
              This screen may look different depending on the model machine you
              have, but the concept is the same.
            </p>
          </div>

          <TrainingImage src={images.main} alt="Home Axis main screen" tall />

          <p className="helperText">
            When you press <strong>Home</strong>, the machine will move all
            motors to their home position and begin homing the pusher.
          </p>

          <div className="callout info">
            <p>
              The exact motor list and axis layout may vary by machine model.
              Focus on the purpose of the screen: returning the machine axes to
              known home positions.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>5000 Series and High-Speed Spindle Note</h2>
            <p>
              Some machines begin an additional process immediately after homing.
            </p>
          </div>

          <div className="callout warning">
            <p>
              If you have a <strong>5000 series machine</strong> or any machine
              with <strong>high-speed spindles</strong>, it will immediately
              start a warm-up procedure after the machine homes.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Home Axis Complete</h2>
          <p>
            You now know that Home Axis is used to return machine motors to
            their starting positions and that some machines may begin a spindle
            warm-up immediately after homing.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}