"use client";

import Link from "next/link";

export default function GlazierStudioTrainingPage() {
  return (
    <main className="landingPage">
      <section className="hero">
        <p className="eyebrow">Glazier Studio Training</p>

        <h1>Glazier Studio Training for Glass Shops and Fabrication Teams</h1>

        <p className="lead">
          The Rhino Wrangler helps glass shops, project managers, estimators,
          fabricators, and operators learn Glazier Studio workflows with guided
          training pages, GS tutorials, tutorial videos, and live virtual
          classes.
        </p>

        <p className="lead secondaryLead">
          Learn Glazier Studio project setup, frame building, metal groups,
          catalog parts, reports, drawings, fabrication workflows, and system
          settings with training designed specifically for glass fabrication
          companies.
        </p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>

          <Link
            href="/dashboard/tutorial-videos"
            className="secondaryButton"
          >
            View Tutorial Videos
          </Link>

          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="machineStrip">
        {[
          "Glazier Studio",
          "GS Tutorials",
          "Project Setup",
          "All About Frames",
          "Metal Groups",
          "Catalog Parts",
          "Doors",
          "Library Fab",
          "Reports",
          "Drawings",
          "Glass Fabrication",
          "General Settings",
        ].map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </section>

      <section className="contentGrid">
        <article>
          <h2>Learn the software your team uses every day</h2>
          <p>
            Glazier Studio training helps users understand project setup, frame
            building, metal groups, fabrication workflows, reports, drawings,
            and the settings that drive production.
          </p>
        </article>

        <article>
          <h2>Built for real glass fabrication workflows</h2>
          <p>
            Training is organized around how glass shops actually operate,
            helping teams connect office workflows to fabrication and production
            processes.
          </p>
        </article>

        <article>
          <h2>Videos and written guides</h2>
          <p>
            Members get searchable written tutorials and video training so users
            can quickly find answers without interrupting production.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Glazier Studio Topics</p>
          <h2>What Glazier Studio training covers</h2>
        </div>

        <div className="topicGrid">
          {[
            "Project Setup",
            "All About Frames",
            "Building Frames",
            "Out of Shape Frames",
            "Metal Groups",
            "Catalog Parts",
            "Doors & Library Fab",
            "Reports & Drawings",
            "Glass Fabrication",
            "General Settings",
            "File Tab",
            "System Configuration",
          ].map((topic) => (
            <div key={topic} className="topicCard">
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="splitPanel">
        <div>
          <p className="eyebrow">For Estimators and Fabricators</p>

          <h2>Training that connects office setup to shop production</h2>

          <p>
            Glazier Studio affects nearly every stage of a glass project. From
            project setup and frame creation to reports, drawings, and
            fabrication output, the software connects office workflows directly
            to shop performance.
          </p>

          <p>
            Understanding how these screens interact helps reduce mistakes,
            improve consistency, and create more efficient workflows throughout
            the company.
          </p>
        </div>

        <div className="highlightBox">
          <h3>Glazier Studio training helps teams:</h3>

          <ul>
            <li>Reduce project setup mistakes</li>
            <li>Build frames more efficiently</li>
            <li>Understand metal groups and catalog parts</li>
            <li>Improve fabrication output</li>
            <li>Train new users faster</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Learning Path</p>
          <h2>From project setup to fabrication output</h2>
        </div>

        <div className="processGrid">
          <article>
            <span className="stepNumber">01</span>

            <h3>Set up projects correctly</h3>

            <p>
              Learn how customers, vendors, settings, and project information
              affect downstream workflows.
            </p>
          </article>

          <article>
            <span className="stepNumber">02</span>

            <h3>Build and edit frames</h3>

            <p>
              Understand frame construction, metal groups, catalog parts, doors,
              and library fabrication workflows.
            </p>
          </article>

          <article>
            <span className="stepNumber">03</span>

            <h3>Generate reports and fabrication output</h3>

            <p>
              Review drawings, reports, glass fabrication information, and shop
              output before production begins.
            </p>
          </article>
        </div>
      </section>

      <section className="splitPanel reverse">
        <div className="highlightBox">
          <h3>Helpful for:</h3>

          <ul>
            <li>New Glazier Studio users</li>
            <li>Experienced estimators</li>
            <li>Project managers</li>
            <li>Shop managers</li>
            <li>Fabricators</li>
            <li>Companies training new employees</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Written Guides + Videos</p>

          <h2>Searchable GS tutorials when your team needs them</h2>

          <p>
            The Rhino Wrangler provides a centralized training library that
            makes it easier for teams to learn, review, and troubleshoot
            Glazier Studio workflows without relying on tribal knowledge.
          </p>

          <p>
            Whether users are brand new to the software or experienced
            professionals, searchable training content helps maintain
            consistency across the organization.
          </p>
        </div>
      </section>

      <section className="inlineCta">
        <p className="eyebrow">Glazier Studio + RhinoFab Training</p>

        <h2>Connect software knowledge with fabrication success.</h2>

        <p>
          Pair Glazier Studio training with RhinoFab training, troubleshooting
          guides, tutorial videos, and live virtual classes for a complete glass
          fabrication learning system.
        </p>

        <Link
          href="/dashboard/tutorial-videos"
          className="secondaryButton"
        >
          View Tutorial Videos
        </Link>
      </section>

      <section className="cta">
        <h2>Train your team before software mistakes become production problems.</h2>

        <p>
          Project setup, frame construction, reports, drawings, fabrication
          settings, and user workflows all impact the success of your glass
          fabrication operation.
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
    <style jsx global>{`
      .landingPage {
        min-height: 100vh;
        background:
          radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 34%),
          radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 32%),
          #050b14;
        color: white;
        padding: 80px 24px;
      }

      .hero,
      .cta,
      .contentGrid,
      .machineStrip,
      .panel,
      .splitPanel,
      .inlineCta {
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero {
        padding: 60px 0 36px;
      }

      .eyebrow {
        color: #f59e0b;
        font-weight: 900;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 14px;
      }

      h1 {
        font-size: clamp(2.6rem, 6vw, 5.5rem);
        line-height: 0.95;
        margin: 16px 0 24px;
        max-width: 1040px;
        letter-spacing: -0.06em;
      }

      h2 {
        margin: 0 0 14px;
        color: white;
        font-size: clamp(1.75rem, 3vw, 2.8rem);
        letter-spacing: -0.04em;
      }

      h3 {
        margin: 0 0 12px;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.75);
        line-height: 1.75;
      }

      .lead {
        font-size: 1.25rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.78);
        max-width: 860px;
      }

      .secondaryLead {
        margin-top: 14px;
        font-size: 1.05rem;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 34px;
      }

      .primaryButton,
      .secondaryButton {
        display: inline-flex;
        align-items: center;
        justify-content: center;
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
        border: 1px solid rgba(255,255,255,.22);
        background: rgba(255,255,255,.05);
      }

      .machineStrip {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 16px;
      }

      .machineStrip span {
        border: 1px solid rgba(245,158,11,.24);
        background: rgba(255,255,255,.045);
        border-radius: 999px;
        padding: 9px 12px;
      }

      .contentGrid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 18px;
        margin-top: 42px;
      }

      article,
      .panel,
      .splitPanel,
      .inlineCta,
      .cta,
      .highlightBox {
        background: rgba(255,255,255,.055);
        border: 1px solid rgba(245,158,11,.2);
        border-radius: 24px;
      }

      article {
        padding: 28px;
      }

      .panel,
      .splitPanel,
      .inlineCta,
      .cta {
        padding: 34px;
        margin-top: 28px;
      }

      .topicGrid {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        gap: 12px;
      }

      .topicCard {
        padding: 18px;
        border-radius: 18px;
        background: rgba(255,255,255,.045);
      }

      .splitPanel {
        display: grid;
        grid-template-columns: 1.25fr .75fr;
        gap: 24px;
      }

      .splitPanel.reverse {
        grid-template-columns: .75fr 1.25fr;
      }

      .highlightBox {
        padding: 26px;
      }

      .processGrid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 18px;
      }

      .stepNumber {
        color: #f59e0b;
        font-weight: 900;
      }

      .inlineCta,
      .cta {
        text-align: center;
      }

      @media (max-width: 980px) {
        .contentGrid,
        .processGrid,
        .topicGrid,
        .splitPanel,
        .splitPanel.reverse {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}