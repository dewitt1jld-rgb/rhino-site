import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function PartsLibraryPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>

        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        {/* HERO */}
        <section className="heroPanel">
          <h1>Parts Library</h1>
          <p>
            This screen is used to store and manage the default parameters for every part
            that runs through the machine.
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/parts-library/images/parts-library-01-main-page.png"
            alt="Parts library main screen"
            tall
          />

          <p className="helperText">
            This screen is designed to save the default parameters of each part. This includes
            trims, I-planes, part height and depth, saw speed, and measurement type.
          </p>
        </section>

        {/* DEFAULTS EXPLANATION */}
        <section className="panel">
          <div className="panelHeader">
            <h2>Understanding Defaults</h2>
          </div>

          <p>
            These are just the default values. Setting trims or dimensions here does not lock
            you into those numbers permanently.
          </p>

          <p>
            For example, if your lead and trail trims are set to 1" here but your material has
            1.5" die marks, you can still adjust that in the Fab Job screen and override it
            on the fly.
          </p>
        </section>

        {/* GENERAL USAGE */}
        <section className="panel">
          <div className="panelHeader">
            <h2>How This Screen Is Used</h2>
          </div>

          <p>
            This screen appears whenever a new part is introduced into the machine. If you’ve
            just received your saw, you’ll likely spend a lot of time here initially.
          </p>

          <p>
            It’s extremely important that all values are accurate—especially part height and
            part depth. On newer machines, motor-driven clamps rely on these values to properly
            hold the material.
          </p>

          <p>
            The bottom left area of this screen allows you to correct part images. If the part
            is shown incorrectly or needs to be rotated or mirrored so it appears on the correct
            side of the fence, this is where you fix it.
          </p>
        </section>

        {/* IMPORTANT NOTE */}
        <div className="completionBox">
          <h2>Important Note for RF9600 and RF9700</h2>

          <p>
            Part depth is extremely important on these machines. Because the machine flips
            fabrications to the back drill, incorrect depth will shift hole locations in the X direction.
          </p>

          <p>
            Be especially careful when running pocket filler for the first time. X locations
            are generated from the current part depth, so any changes require you to re-merge
            the job into the Fab Job screen.
          </p>

          <p>
            On door machines, make sure the <strong>"Use Eye to Measure"</strong> setting is enabled
            for all stock lengths. The photo eye measures stock length, while the measuring cylinder
            is used for doors.
          </p>
        </div>

      </TrainingLayout>
    </RequireActiveAccess>
  );
}