import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/fab-frames/images/fab-frames-01-main-screen.png";

export default function FabFramesPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">All Rhino Machines</p>
            <h1>Fab Frames</h1>
            <p>
              Fab Frames allows you to split up jobs directly on the machine
              without needing to return to Glazier Studio or PartnerPak.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Fab Frames main screen" />

            <p className="helperText">
              I highly recommend sending the correct frames from the program in
              the first place whenever possible. However, Fab Frames is useful
              when you need to break a job into smaller sections directly at the
              machine.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>How Fab Frames Works</h2>
            </div>

            <p className="helperText">
              Select the full job on the left side of the screen, then choose the
              frames you want to run first.
            </p>

            <p className="helperText">
              The machine will ask you to give the new frame package a different
              name. Once you confirm the new name, RhinoFab will re-optimize the
              cuts because you are now running less material than the original
              job.
            </p>

            <p className="helperText">
              Fab Frames also keeps track of which parts were already cut and
              removes them from the original job so the same parts are not cut
              twice.
            </p>
          </section>

          <section className="callout warning">
            <h3>Recommended Workflow</h3>
            <p>
              Whenever possible, send separated frame packages directly from
              Glazier Studio or PartnerPak. Fab Frames is best used for quick
              adjustments or splitting jobs at the machine.
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

          .center {
            text-align: center;
          }

          .center img {
            margin: 0 auto;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}