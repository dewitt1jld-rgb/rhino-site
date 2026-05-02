import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Professional CNC Training Platform</div>

        <h1>Train faster. Troubleshoot smarter. Reduce downtime.</h1>

        <p className="heroText">
          The Rhino Wrangler is an independent training platform built to help
          teams learn machine workflows, setup steps, troubleshooting, and
          technical procedures through organized video-based training.
        </p>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "32px",
  }}
>
  <Link
    href="/pricing"
    style={{
      minWidth: "180px",
      borderRadius: "14px",
      padding: "14px 22px",
      background: "#f59e0b",
      color: "#111827",
      fontWeight: 900,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 18px 40px rgba(245, 158, 11, 0.25)",
    }}
  >
    Get Access
  </Link>


<Link
  href="/classes"
  style={{
    minWidth: "220px",
    borderRadius: "14px",
    padding: "14px 22px",
    background: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    fontWeight: 900,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  Virtual Live Training Classes
</Link>
</div>
      </section>

      <section className="section">
        <h2>What is The Rhino Wrangler?</h2>
        <p>
          The Rhino Wrangler is not just a website login. It is a structured
          training system designed to help operators, shop owners, and support
          teams quickly find the information they need without digging through
          scattered notes, old videos, or long manuals.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Step-by-step training</h3>
          <p>
            Clear training pages and videos built around real machine workflows,
            setup, calibration, operation, and troubleshooting.
          </p>
        </div>

        <div className="card">
          <h3>Searchable knowledge base</h3>
          <p>
            Quickly search for the exact topic, guide, or procedure your team
            needs when questions come up on the floor.
          </p>
        </div>

        <div className="card">
          <h3>Ongoing updates</h3>
          <p>
            New pages, videos, reference material, and training improvements can
            be added over time as the platform grows.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Preview what’s inside</h2>
        <p>
          Below are examples of the type of training content customers can expect
          inside the locked training portal.
        </p>

        <div className="videoGrid">
          <div className="videoCard">
            <div className="videoBox">▶</div>
            <h3>Machine Startup Basics</h3>
            <p>A sample overview of safe startup and first-step operation.</p>
          </div>

          <div className="videoCard">
            <div className="videoBox">▶</div>
            <h3>Calibration Walkthrough</h3>
            <p>A preview of step-by-step setup and calibration training.</p>
          </div>

          <div className="videoCard">
            <div className="videoBox">▶</div>
            <h3>Troubleshooting Example</h3>
            <p>A sample look at how issues are explained and solved.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Built for teams that need answers fast.</h2>
        <p>
          Give your operators a cleaner way to learn, review, and troubleshoot
          without relying only on memory or one-on-one training.
        </p>

        <div className="heroActions">
        <Link
  href="/pricing"
  style={{
    minWidth: "180px",
    borderRadius: "14px",
    padding: "14px 22px",
    background: "#f59e0b",
    color: "#111827",
    fontWeight: 900,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 18px 40px rgba(245, 158, 11, 0.25)",
  }}
>
  View Pricing
</Link>

                  </div>
      </section>

      <style jsx>{`
        .page {
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 32%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: #ffffff;
          min-height: 100vh;
          padding: 80px 24px;
        }

        .hero,
        .section,
        .cta {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero {
          padding: 80px 0 70px;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.16);
          color: #f59e0b;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        h1 {
          margin: 0 auto;
          max-width: 950px;
          font-size: clamp(2rem, 3vw, 3.75rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
        }

        .heroText {
          max-width: 760px;
          margin: 24px auto 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 1.18rem;
          line-height: 1.7;
        }

  .heroActions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.primaryButton,
.secondaryButton {
  min-width: 180px;
  border-radius: 14px;
  padding: 14px 22px;
  font-weight: 900;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.primaryButton {
  background: #f59e0b;
  color: #111827;
  box-shadow: 0 18px 40px rgba(245, 158, 11, 0.25);
}

.primaryButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 50px rgba(245, 158, 11, 0.35);
}

.secondaryButton {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.secondaryButton:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

       .section {
  padding: 80px 0;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

        h2 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.04em;
        }

        .section p {
  margin: 0 auto;
  text-align: center;
   font-size: 1.2rem;
  line-height: 1.8;
}

        .grid,
        .videoGrid {
          max-width: 1050px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card,
        .videoCard {
          border-radius: 22px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.18);
        }

        .pricingButton {
  background: #f59e0b;
  color: #111827;
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 900;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(245, 158, 11, 0.25);
  transition: all 0.2s ease;
}

.pricingButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(245, 158, 11, 0.35);
}
        .card h3,
        .videoCard h3 {
          margin: 0 0 10px;
          font-size: 1.2rem;
        }

        .card p,
        .videoCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.65;
        }

        .videoGrid {
          margin-top: 26px;
        }

        .videoBox {
          height: 170px;
          border-radius: 18px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at center, rgba(245, 158, 11, 0.22), transparent 35%),
            linear-gradient(135deg, #111827, #030712);
          border: 1px solid rgba(245, 158, 11, 0.22);
          color: #f59e0b;
          font-size: 3rem;
          font-weight: 900;
        }

        .cta {
          margin-top: 70px;
          padding: 48px;
          border-radius: 28px;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cta p {
          margin: 0 auto;
        }

        @media (max-width: 850px) {
          .grid,
          .videoGrid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 48px;
          }

          .cta {
            padding: 30px 22px;
          }
        }
      `}</style>
    </main>
  );
}