import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function PartsConsistentlyLongPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Resolution Guides
        </div>

        <section className="heroPanel">
          <h1>
            How to Fix Parts That Are Consistently Long
          </h1>

          <p>
            This resolution guide is currently being built.
          </p>
        </section>
      </TrainingLayout>

      <style jsx>{`
        .breadcrumb {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          margin-bottom: 18px;
        }

        .heroPanel {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.045);
          border-radius: 24px;
          padding: 28px;
          margin-bottom: 26px;
          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .heroPanel h1 {
          margin: 0 0 10px;
          font-size: 42px;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .heroPanel p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          font-size: 16px;
        }
      `}</style>
    </RequireActiveAccess>
  );
}