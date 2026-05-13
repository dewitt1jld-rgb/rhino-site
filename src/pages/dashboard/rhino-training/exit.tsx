import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

export default function ExitPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">All Rhino Machines</p>
            <h1>Exit</h1>
            <p>Click this button to exit the software.</p>
          </section>

          <section className="callout warning">
            <h3>Note</h3>
            <p>
              Make sure the machine is finished running and no active operations
              are in progress before exiting the software.
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
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}