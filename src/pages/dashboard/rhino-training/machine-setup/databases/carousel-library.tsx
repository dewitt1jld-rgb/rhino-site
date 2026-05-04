import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function CarouselLibraryPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        <section className="heroPanel">
          <h1>Carousel Library</h1>
          <p>
            The Carousel Library is used to manage tool locations for machines
            equipped with a robotic tool changer.
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/carousel-library/images/carousel-library-01-main-screen.png"
            alt="Carousel library screen"
            tall
          />

          <div className="callout warning">
            <p>
              If you have never seen this screen, your machine likely does NOT
              have a robot tool changer. This page only applies to machines that
              use a robotic tool system.
            </p>
          </div>

          <div className="callout danger">
            <p>
              If the robot crashes during operation, ALWAYS verify this screen.
              Tools can accidentally be moved and cause incorrect tool pickups.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How It Works</h2>
          </div>

          <p>
            This screen keeps track of where each tool is located inside the
            machine. In most cases, you will only set this up once.
          </p>

          <p>
            After setup, the software automatically manages tool positions as
            the robot performs tool changes.
          </p>

          <div className="callout info">
            <p>
              Each carousel slot (pin) must be assigned the correct tool, and
              each position should be clearly labeled.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Grippers & Positions</h2>
          </div>

          <p>
            The machine uses two robot grippers: <strong>Red</strong> and{" "}
            <strong>Blue</strong>.
          </p>

          <p>
            Each gripper can be set to a <strong>crossed</strong> or{" "}
            <strong>uncrossed</strong> position depending on how tools are
            oriented.
          </p>

          <div className="callout info">
            <p>
              Use the "1–10" and "11–20" buttons to rotate the carousel for
              easier viewing and setup.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Important Rules</h2>
          </div>

          <ul className="list">
            <li>You can load up to 19 drill bits at one time</li>
            <li>
              You MUST always leave at least one slot empty for the robot to
              temporarily place tools
            </li>
            <li>Every slot must match the actual physical tool location</li>
          </ul>

          <div className="callout warning">
            <p>
              If all slots are filled, the robot will not be able to complete
              tool changes correctly.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Carousel Library Complete</h2>
          <p>
            You now understand how to manage tool locations, configure grippers,
            and safely operate the robotic tool changer system.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}