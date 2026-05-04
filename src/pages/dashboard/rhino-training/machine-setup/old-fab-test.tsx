import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import Link from "next/link";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/old-fab-test/images/old-fab-test-01-main-screen.png",
};

export default function OldFabTestPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Old Fab Test</h1>
          <p>
            This is the original Fab Test screen. While still usable, it has
            largely been replaced by the newer Fab Test screen which is more
            powerful and easier to use.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Old Fab Test Screen</h2>
            <p>
              This screen was designed a long time ago and is not as user
              friendly as the newer version.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Old Fab Test main screen"
            tall
          />

          <p className="helperText">
            While you can still use this screen, it is strongly recommended to
            use the newer Fab Test screen whenever possible.
          </p>

          <div className="callout warning">
            <p>
              The new Fab Test screen has more capabilities, better workflow,
              and improved usability. This screen should mainly be used only if
              you are already familiar with it or working on older setups.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Recommendation</h2>
            <p>
              For most users, switching to the new Fab Test screen will improve
              speed and reduce confusion.
            </p>
          </div>

          <div className="callout info">
            <p>
              👉 Use the newer Fab Test screen instead for better performance and
              more features.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Link href="/dashboard/rhino-training/machine-setup/fab-test">
              Go to New Fab Test →
            </Link>
          </div>
        </section>

        <div className="completionBox">
          <h2>Old Fab Test Overview Complete</h2>
          <p>
            You now understand that this screen is outdated and when it may still
            be used, along with why the newer Fab Test screen is preferred.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}