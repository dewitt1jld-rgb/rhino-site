"use client";

import Link from "next/link";

export default function RhinoFabTrainingPage() {
  return (
    <main className="landingPage">
      <section className="hero">
        <p className="eyebrow">RhinoFab Training</p>
        <h1>Glazier Studio Training for Glass Shops and Fabrication Teams</h1>
        <p className="lead">
          The Rhino Wrangler helps operators, fabricators, and shop teams learn
          RhinoFab workflows faster with guided training pages, tutorial videos,
          troubleshooting guides, and live virtual classes.
        </p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>
          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="contentGrid">
        <article>
          <h2>What RhinoFab training covers</h2>
          <p>
            RhinoFab training includes machine setup, calibration, saw and drill
            workflows, fab jobs, axis movement, tooling, maintenance, and common
            production problems that slow shops down.
          </p>
        </article>

        <article>
          <h2>Built for real shop use</h2>
          <p>
            Training is written for people working around the machine, not just
            software users. The goal is to help teams understand what to check,
            what to avoid, and how to recover when something does not work as
            expected.
          </p>
        </article>

        <article>
          <h2>Videos and written guides</h2>
          <p>
            Members get access to searchable written training pages and quick
            tutorial videos that make it easier to review procedures without
            waiting for someone else in the shop.
          </p>
        </article>
      </section>

      <section className="cta">
        <h2>Train your team before mistakes become expensive.</h2>
        <p>
          RhinoFab downtime, incorrect cuts, calibration issues, and operator
          confusion can cost far more than proper training.
        </p>
        <Link href="/pricing" className="primaryButton">
          View Training Options
        </Link>
      </section>

      <LandingStyles />
    </main>
  );
}

function LandingStyles() {
  return (
    <style jsx>{`
      .landingPage {
        min-height: 100vh;
        background: #050b14;
        color: white;
        padding: 80px 24px;
      }

      .hero,
      .cta,
      .contentGrid {
        max-width: 1120px;
        margin: 0 auto;
      }

      .hero {
        padding: 60px 0;
      }

      .eyebrow {
        color: #f59e0b;
        font-weight: 900;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h1 {
        font-size: clamp(2.6rem, 6vw, 5.5rem);
        line-height: 0.95;
        margin: 16px 0 24px;
        max-width: 980px;
      }

      .lead {
        font-size: 1.25rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.76);
        max-width: 820px;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 34px;
      }

      .primaryButton,
      .secondaryButton {
        text-decoration: none;
        font-weight: 900;
        border-radius: 14px;
        padding: 14px 18px;
      }

      .primaryButton {
        color: #111827;
        background: #f59e0b;
      }

      .secondaryButton {
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.05);
      }

      .contentGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin-top: 40px;
      }

      article,
      .cta {
        background: rgba(255, 255, 255, 0.055);
        border: 1px solid rgba(245, 158, 11, 0.2);
        border-radius: 24px;
        padding: 28px;
      }

      h2 {
        margin-top: 0;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.75);
        line-height: 1.7;
      }

      .cta {
        margin-top: 32px;
        text-align: center;
      }

      @media (max-width: 900px) {
        .contentGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}