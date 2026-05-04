import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

type Props = {
  title: string;
  breadcrumb?: string;
};

export default function ComingSoonPage({ title, breadcrumb }: Props) {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          {breadcrumb || "Rhino Training"}
        </div>

        <section className="heroPanel">
          <h1>{title}</h1>
          <p>This training page is currently being built.</p>
        </section>

        <section className="panel">
          <div className="comingSoonBox">
            <h2>🚧 Page Coming Soon</h2>
            <p>
              We’re currently working on this section to bring you detailed
              training and walkthroughs.
            </p>

            <p>
              Check back soon — this page will include full step-by-step
              instructions, visuals, and troubleshooting tips.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>More Content On The Way</h2>
          <p>
            New training content is being added regularly to improve your
            experience.
          </p>
        </div>

        <style jsx>{`
          .comingSoonBox {
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            background: linear-gradient(
              135deg,
              rgba(245, 158, 11, 0.15),
              rgba(245, 158, 11, 0.05)
            );
            border: 1px solid rgba(245, 158, 11, 0.3);
          }

          .comingSoonBox h2 {
            font-size: 1.8rem;
            margin-bottom: 16px;
          }

          .comingSoonBox p {
            opacity: 0.85;
            margin-bottom: 10px;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}