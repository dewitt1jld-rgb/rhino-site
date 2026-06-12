"use client";

import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";

export default function PartnerPakTrainingPage() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "PartnerPak Training",
  description:
    "PartnerPak training and PPAK tutorials covering frame building, metal groups, catalog parts, doors, Library Fab, Fab Rules Library, reports, drawings, fabrication options, and glass fabrication workflows.",
  provider: {
    "@type": "Organization",
    name: "The Rhino Wrangler",
    url: "https://therhinowrangler.com",
  },
  url: "https://therhinowrangler.com/learn/partnerpak-training",
};
  return (
    <main className="landingPage">
      <SeoSchema data={schema} />
      <section className="hero">
        <p className="eyebrow">PartnerPak Training</p>
        <h1>PartnerPak Training for Glass Shops and Fabrication Teams</h1>
        <p className="lead">
          The Rhino Wrangler helps glass shops, fabrication teams, estimators,
          and operators learn PartnerPak, Partner Pak, and PPAK workflows with
          guided training pages, tutorial videos, and live virtual classes.
        </p>
        <p className="lead secondaryLead">
          Learn PartnerPak frame building, metal groups, catalog parts, doors,
          Library Fab, Fab Rules Library, fabrication options, reports,
          drawings, general settings, and the workflows that connect office
          setup to shop production.
        </p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>
          <Link href="/learn/glazier-studio-training" className="secondaryButton">
            View Glazier Studio Training
          </Link>
          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="machineStrip">
        {[
          "PartnerPak",
          "Partner Pak",
          "PPAK Tutorials",
          "Frame Building",
          "Metal Groups",
          "Catalog Parts",
          "Doors",
          "Library Fab",
          "Fab Rules Library",
          "Reports",
          "Drawings",
          "Fabrication Options",
        ].map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </section>

      <section className="contentGrid">
        <article>
          <h2>Learn PartnerPak workflows clearly</h2>
          <p>
            PartnerPak training helps teams understand the screens, settings,
            and fabrication workflows that affect how jobs are built, reviewed,
            and moved into production.
          </p>
        </article>

        <article>
          <h2>Built for fabrication teams</h2>
          <p>
            Training is written for real glass shop use, connecting PartnerPak
            setup, frame building, metal groups, catalog parts, fabrication
            options, reports, and shop output.
          </p>
        </article>

        <article>
          <h2>Videos and written guides</h2>
          <p>
            Members get searchable PartnerPak tutorials and quick training
            videos that make it easier to train new users, refresh experienced
            users, and reduce repeated questions.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">PartnerPak Topics</p>
          <h2>What PartnerPak training covers</h2>
        </div>

        <div className="topicGrid">
          {[
            "PartnerPak project workflows",
            "Frame building",
            "Metal groups",
            "Catalog parts",
            "Doors and Library Fab",
            "Fab Rules Library",
            "Applying Fab Rules",
            "Fabrication options",
            "Reports and drawings",
            "General settings",
            "Shop output",
            "Glazier Studio overlap",
          ].map((topic) => (
            <div className="topicCard" key={topic}>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="splitPanel">
        <div>
          <p className="eyebrow">PartnerPak + Glazier Studio</p>
          <h2>Training for the workflows that connect estimating to fabrication</h2>
          <p>
            PartnerPak and Glazier Studio workflows often overlap. Settings,
            metal groups, catalog parts, frame information, fabrication rules,
            reports, and drawings can all affect what happens later in the shop.
          </p>
          <p>
            The Rhino Wrangler organizes PartnerPak training around the way glass
            shops actually work, helping your team understand where information
            starts, how it changes, and how it impacts fabrication output.
          </p>
        </div>

        <div className="highlightBox">
          <h3>PartnerPak training helps teams:</h3>
          <ul>
            <li>Understand PartnerPak and Glazier Studio overlap</li>
            <li>Build stronger frame workflows</li>
            <li>Use metal groups and catalog parts correctly</li>
            <li>Apply Fab Rules Library concepts more consistently</li>
            <li>Reduce confusion before jobs reach production</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Learning Path</p>
          <h2>From setup to fabrication-ready information</h2>
        </div>

        <div className="processGrid">
          <article>
            <span className="stepNumber">01</span>
            <h3>Understand the setup</h3>
            <p>
              Learn how PartnerPak settings, metal groups, catalog parts,
              project information, and general setup affect the way jobs are
              built and managed.
            </p>
          </article>

          <article>
            <span className="stepNumber">02</span>
            <h3>Build the job correctly</h3>
            <p>
              Review frame building, doors, Library Fab, fabrication rules,
              applying Fab Rules Library, and the workflows that shape the job
              before production.
            </p>
          </article>

          <article>
            <span className="stepNumber">03</span>
            <h3>Review reports and fabrication</h3>
            <p>
              Understand reports, drawings, fabrication options, shop output,
              and the information your team needs before parts move to the shop
              floor.
            </p>
          </article>
        </div>
      </section>

      <section className="splitPanel reverse">
        <div className="highlightBox">
          <h3>Helpful for:</h3>
          <ul>
            <li>New PartnerPak users</li>
            <li>Experienced estimators</li>
            <li>Project managers</li>
            <li>Shop leaders</li>
            <li>Fabrication teams</li>
            <li>Companies training new hires</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">PPAK Tutorials</p>
          <h2>Searchable PartnerPak tutorials for new and experienced users</h2>
          <p>
            PartnerPak training works best when users can review procedures at
            the moment they need them. The Rhino Wrangler gives members a
            searchable place to find written guides and tutorial videos instead
            of relying only on memory, scattered notes, or one experienced
            person in the company.
          </p>
          <p>
            Whether your team calls it PartnerPak, Partner Pak, or PPAK, the
            goal is the same: make the software easier to understand, easier to
            teach, and easier to use consistently across your shop.
          </p>
        </div>
      </section>

      <section className="inlineCta">
        <p className="eyebrow">PartnerPak + Glazier Studio Training</p>
        <h2>Help your team understand what happens before fabrication.</h2>
        <p>
          Pair PartnerPak tutorials with Glazier Studio training, RhinoFab
          training, tutorial videos, and live virtual classes so your team can
          understand the full workflow from setup to shop production.
        </p>
        <Link href="/learn/glazier-studio-training" className="secondaryButton">
          View Glazier Studio Training
        </Link>
      </section>

      <section className="cta">
        <h2>Train your team before software mistakes become shop problems.</h2>
        <p>
          PartnerPak frame building, metal groups, catalog parts, Fab Rules
          Library, reports, drawings, and fabrication settings all affect how
          smoothly jobs move through your company.
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
        font-size: 1.18rem;
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
        max-width: 900px;
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
        transition:
          transform 0.18s ease,
          border-color 0.18s ease,
          background 0.18s ease;
      }

      .primaryButton:hover,
      .secondaryButton:hover {
        transform: translateY(-2px);
      }

      .primaryButton {
        color: #111827;
        background: #f59e0b;
        box-shadow: 0 18px 40px rgba(245, 158, 11, 0.18);
      }

      .secondaryButton {
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.05);
      }

      .secondaryButton:hover {
        border-color: rgba(245, 158, 11, 0.55);
        background: rgba(245, 158, 11, 0.08);
      }

      .machineStrip {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 16px;
      }

      .machineStrip span {
        border: 1px solid rgba(245, 158, 11, 0.24);
        background: rgba(255, 255, 255, 0.045);
        color: rgba(255, 255, 255, 0.82);
        border-radius: 999px;
        padding: 9px 12px;
        font-size: 0.9rem;
        font-weight: 800;
      }

      .contentGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin-top: 42px;
      }

      article,
      .cta,
      .panel,
      .splitPanel,
      .inlineCta,
      .highlightBox {
        background: rgba(255, 255, 255, 0.055);
        border: 1px solid rgba(245, 158, 11, 0.2);
        border-radius: 24px;
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
      }

      article {
        padding: 28px;
      }

      .panel,
      .splitPanel,
      .inlineCta {
        margin-top: 28px;
        padding: 34px;
      }

      .panelHeader {
        max-width: 780px;
        margin-bottom: 22px;
      }

      .topicGrid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }

      .topicCard {
        min-height: 84px;
        display: flex;
        align-items: center;
        border-radius: 18px;
        padding: 18px;
        color: rgba(255, 255, 255, 0.86);
        font-weight: 850;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.09);
      }

      .splitPanel {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 24px;
        align-items: center;
      }

      .splitPanel.reverse {
        grid-template-columns: 0.75fr 1.25fr;
      }

      .highlightBox {
        padding: 26px;
        background: rgba(245, 158, 11, 0.075);
      }

      ul {
        margin: 0;
        padding-left: 20px;
        color: rgba(255, 255, 255, 0.76);
        line-height: 1.8;
      }

      .processGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }

      .stepNumber {
        display: inline-flex;
        color: #f59e0b;
        font-weight: 950;
        margin-bottom: 16px;
        letter-spacing: 0.08em;
      }

      .inlineCta,
      .cta {
        text-align: center;
      }

      .inlineCta p,
      .cta p {
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta {
        max-width: 1120px;
        margin-top: 32px;
        padding: 38px;
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

      @media (max-width: 620px) {
        .landingPage {
          padding: 46px 16px;
        }

        .hero {
          padding-top: 32px;
        }

        .actions {
          flex-direction: column;
        }

        .primaryButton,
        .secondaryButton {
          width: 100%;
        }

        .panel,
        .splitPanel,
        .inlineCta,
        .cta,
        article {
          padding: 22px;
          border-radius: 20px;
        }
      }
    `}</style>
  );
}