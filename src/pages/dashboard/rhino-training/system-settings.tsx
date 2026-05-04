import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-01-main-page.png",
  clampPositions:
    "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-02-clamp-positions.png",
  advancedSettings:
    "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-03-advanced-settings.png",
};

export default function SystemSettingsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / All Rhino Machines</div>

        <section className="heroPanel">
          <h1>System Settings</h1>
          <p>
            System Settings controls machine-specific values, operator
            preferences, software options, drop behavior, clamp positions, and
            advanced machine behavior.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>System Settings Screen</h2>
            <p>
              Most settings on this screen are either default values or are
              updated later by calibration. The highlighted settings are the main
              ones that usually come down to personal preference or workflow.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="System Settings main screen"
            tall
          />

          <div className="callout warning">
            <p>
              Do not randomly change machine dimensions or calibration-related
              values. Many of those numbers should only change through the
              correct calibration process or with support guidance.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Common Settings</h2>
            <p>
              These are the settings operators are most likely to review or
              adjust.
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Company Name</h3>
              <p>
                This is your company name. It prints on material stickers, so
                make sure it is spelled correctly.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Pre Drill Offset</h3>
              <p>
                The distance the drill retracts above the part when it is not
                drilling. The default is usually <strong>.25&quot;</strong>{" "}
                above the part. If material is badly bowed, you may want to
                increase this to <strong>.5&quot;</strong>.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Pre Saw Offset</h3>
              <p>
                The distance the saw retracts above the part when it is not
                cutting. The default is usually <strong>.5&quot;</strong> above
                the part.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Ask to Eject Drop</h3>
              <p>
                At the end of each piece, the software can ask whether you want
                to eject the drop. If you want drops to auto-eject without a
                prompt, turn this setting off.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Cleaning Sequence</h3>
              <p>
                This sequence can be turned on if your compressor and air lines
                can keep up with it. It fires blow-offs more often during the job
                to help keep debris off the pads.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Drop Tracking</h3>
              <p>
                Drop tracking should usually stay on. If you do not want the
                machine to label, print, or track drops, turn this setting off.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Cut Drops First</h3>
              <p>
                The default is to use drops first because they are usually easier
                to load before the autoloader is full. Turning this off cuts
                drops later, but optimization remains the same.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Deplete Drops</h3>
              <p>
                As drops are used, the software automatically deletes them from
                the drop library so they cannot be used again.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Remove Part After Each Cut</h3>
              <p>
                Usually only used when the outfeed photo eye is broken or not
                working correctly. The software will prompt after every cut and
                require OK before moving to the next piece.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Turn Off Drills When Cutting</h3>
              <p>
                Mainly used when the compressor cannot keep up with the machine.
                It turns the drills off while the saw is cutting and can help
                prevent running problems or E-stops.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Clamp Positions</h2>
            <p>
              Clamp Positions controls theoretical clamp timing and position
              values.
            </p>
          </div>

          <TrainingImage
            src={images.clampPositions}
            alt="Clamp Positions screen"
            tall
          />

          <div className="callout danger">
            <p>
              Do not actually measure these clamp values with a tape measure.
              The saw blade is treated as the 0&quot; point, and the clamp
              positions are theoretical values from that reference point.
            </p>
          </div>

          <p className="helperText">
            If a clamp is firing too soon or too late, this is the page that
            controls it. For example, if the vertical fab-in clamp is
            theoretically 43.495&quot; from the saw and you want it to fire a
            little sooner, you may adjust the value slightly.
          </p>

          <div className="callout warning">
            <p>
              Clamp positions typically work in <strong>1/2&quot;</strong>{" "}
              intervals. If you need to adjust more than about{" "}
              <strong>2&quot;</strong>, something is probably wrong and support
              should be contacted.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Advanced Settings</h2>
            <p>
              There usually is not much operators need to change in Advanced
              Settings, but a few options may be useful depending on workflow.
            </p>
          </div>

          <TrainingImage
            src={images.advancedSettings}
            alt="Advanced Settings screen"
            tall
          />

          <div className="callout info">
            <h3>Add Parts on Merge</h3>
            <p>
              One useful setting to enable is <strong>Add Parts on Merge</strong>.
              This allows the system to update all part profiles when new parts
              are merged instead of updating them one at a time as each piece is
              run.
            </p>
          </div>

          <div className="callout warning">
            <p>
              Only adjust advanced settings if you understand the machine
              behavior you are changing. When in doubt, contact support before
              changing values.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>System Settings Complete</h2>
          <p>
            You now know which system settings are generally preference-based,
            which settings affect drops and workflow, and which areas should be
            treated carefully because they influence machine behavior.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}