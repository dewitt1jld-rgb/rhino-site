import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const videoUrl =
  "https://rhino-training-cdn.b-cdn.net/spindle-maintinance/video/spindle%20maintenance.mp4";

export default function SpindleMaintenancePage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Rhino Training</p>
            <h1>Spindle Maintenance</h1>
            <p>
              Proper spindle maintenance is extremely important for spindle life,
              tool retention, and overall machine performance.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Spindle Cleaning Video</h2>
              <p>
                Follow along with the walkthrough below for proper spindle
                cleaning and maintenance procedures.
              </p>
            </div>

            <div className="videoWrap">
              <iframe
                src={videoUrl}
                title="Spindle Maintenance Video"
                allowFullScreen
              />
            </div>
          </section>

          <section className="callout warning">
            <h3>Important</h3>
            <p>
              Dirty spindle tapers and tool holders can cause poor tool seating,
              vibration, premature wear, and spindle damage.
            </p>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 24px;
          }

          .eyebrow {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .videoWrap {
            position: relative;
            width: 100%;
            overflow: hidden;
            border-radius: 22px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            background: #000;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          }

          .videoWrap iframe {
            width: 100%;
            aspect-ratio: 16 / 9;
            border: none;
            display: block;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}