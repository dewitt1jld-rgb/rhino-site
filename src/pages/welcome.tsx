import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="page">
      <section className="card">
        <div className="badge">Access Activated</div>

        <h1>Welcome to The Rhino Wrangler</h1>

        <p className="lead">
          Your training access is active. You’re ready to start learning.
        </p>

        <p className="text">
          This platform is built to help your team train faster, troubleshoot
          smarter, and find machine information without digging through scattered
          notes, videos, or documents.
        </p>

        <div className="steps">
  <Link href="/dashboard">
    <div className="step">
      <span>1</span>
      <div>
        <strong>Start with the training dashboard</strong>
        <p>Explore the main training library and machine categories.</p>
      </div>
    </div>
  </Link>

  <button
    type="button"
    className="step"
    onClick={() => {
      window.location.href = "/dashboard?openSearch=1";
    }}
  >
    <span>2</span>
    <div>
      <strong>Use search when you need answers fast</strong>
      <p>Search technical topics, guides, setup steps, and references.</p>
    </div>
  </button>

  <Link href="/certificate">
    <div className="step">
      <span>3</span>
      <div>
        <strong>Train toward Rhino Wrangler Certification</strong>
        <p>
          Complete training modules as your team works toward becoming Rhino
          Wrangler Certified.
        </p>
      </div>
    </div>
  </Link>
</div>

        <div className="notice">
          <strong>Important:</strong>
          <span>
            The Rhino Wrangler is an independent training program and is not
            affiliated with, sponsored by, or endorsed by DeMichele Group.
          </span>
        </div>

        <div className="actions">
          <Link href="/dashboard" className="primaryButton">
            Start Training
          </Link>

          <Link href="/dashboard/billing" className="secondaryButton">
            Manage Billing
          </Link>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: calc(100vh - 180px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 22px;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.14), transparent 34%),
            linear-gradient(135deg, #f6f7f9 0%, #ffffff 50%, #eef0f4 100%);
        }

        .card {
          width: 100%;
          max-width: 860px;
          border-radius: 24px;
          padding: 46px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(17, 24, 39, 0.08);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.14);
        }

        .badge {
          display: inline-flex;
          margin-bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(22, 163, 74, 0.14);
          color: #166534;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          color: #111827;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .lead {
          margin: 18px 0 10px;
          color: #111827;
          font-size: 1.2rem;
          font-weight: 800;
        }

        .text {
          margin: 0;
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 700px;
        }

        .steps {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .step {
          display: flex;
          gap: 14px;
          padding: 18px;
          border-radius: 18px;
          background: #f8fafc;
          border: 1px solid rgba(17, 24, 39, 0.08);
          text-decoration: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            border-color 0.2s ease;
          font: inherit;
        }

        .step:hover {
          transform: translateY(-2px);
          border-color: rgba(245, 158, 11, 0.45);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.1);
        }

        .step span {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          background: #111827;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          flex: 0 0 auto;
        }

        .step strong {
          color: #111827;
          font-size: 1rem;
        }

        .step p {
          margin: 6px 0 0;
          color: #6b7280;
          line-height: 1.5;
        }

        .notice {
          margin-top: 24px;
          padding: 18px;
          border-radius: 18px;
          display: grid;
          gap: 6px;
          background: #111827;
          color: #ffffff;
          line-height: 1.55;
        }

        .notice span {
          color: rgba(255, 255, 255, 0.78);
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
          justify-content: center;
        }

        .primaryButton,
        .secondaryButton {
          min-width: 190px;
          border-radius: 14px;
          padding: 14px 18px;
          font-size: 1rem;
          font-weight: 900;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .primaryButton {
          background: #111827;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(17, 24, 39, 0.22);
        }

        .secondaryButton {
          background: #991b1b;
          color: #ffffff;
        }

        @media (max-width: 650px) {
          .page {
            padding: 36px 16px;
            align-items: flex-start;
          }

          .card {
            padding: 28px;
            border-radius: 20px;
          }

          .actions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}