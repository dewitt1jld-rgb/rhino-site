"use client";

import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";

export default function PartnerPakHelpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PartnerPak Help",
    description:
      "PartnerPak help, Partner Pak support, PPAK tutorials, frame building guidance, metal groups, catalog parts, doors, Library Fab, Fab Rules Library, reports, drawings, and fabrication workflow help for glass shops.",
    publisher: {
      "@type": "Organization",
      name: "The Rhino Wrangler",
      url: "https://therhinowrangler.com",
    },
    url: "https://therhinowrangler.com/learn/partnerpak-help",
  };

  return (
    <main className="landingPage">
      <SeoSchema data={schema} />

      <section className="hero">
        <p className="eyebrow">PartnerPak Help</p>
        <h1>PartnerPak Help for Glass Shops and Fabrication Teams</h1>
        <p className="lead">
          The Rhino Wrangler provides PartnerPak help for glass shops that need
          support with Partner Pak workflows, PPAK tutorials, frame building,
          metal groups, catalog parts, doors, Library Fab, Fab Rules Library,
          reports, drawings, and fabrication settings.
        </p>
        <p className="lead secondaryLead">
          Find PartnerPak tutorials, Partner Pak help, written guides, video
          training, and live virtual classes designed for estimators, project
          managers, fabricators, and shop teams.
        </p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>
          <Link href="/learn/partnerpak-training" className="secondaryButton">
            View PartnerPak Training
          </Link>
          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="machineStrip">
        {[
          "PartnerPak Help",
          "Partner Pak Help",
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
          <h2>Help for everyday PartnerPak questions</h2>
          <p>
            PartnerPak can affect project setup, frame information, fabrication
            rules, reports, drawings, and shop output. The Rhino Wrangler helps
            teams find answers faster.
          </p>
        </article>

        <article>
          <h2>Support for real fabrication workflows</h2>
          <p>
            Help content is organized around how glass shops actually use
            PartnerPak, from building frames and setting up rules to preparing
            fabrication information.
          </p>
        </article>

        <article>
          <h2>Searchable guides and videos</h2>
          <p>
            Members can review written PartnerPak guides and tutorial videos
            instead of relying only on memory, scattered notes, or one
            experienced user in the company.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Help Topics</p>
          <h2>PartnerPak help topics covered</h2>
        </div>

        <div className="topicGrid">
          {[
            "PartnerPak workflow help",
            "Partner Pak setup help",
            "Frame building help",
            "Metal groups",
            "Catalog parts",
            "Doors and Library Fab",
            "Fab Rules Library",
            "Applying Fab Rules",
            "Fabrication options",
            "Reports and drawings",
            "General settings",
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
          <p className="eyebrow">Software Help That Connects</p>
          <h2>Understand how PartnerPak decisions affect fabrication</h2>
          <p>
            Small software decisions can create big production problems.
            PartnerPak frame information, metal groups, catalog parts, doors,
            Fab Rules Library settings, reports, drawings, and fabrication
            options all affect how smoothly jobs move through the company.
          </p>
          <p>
            The Rhino Wrangler gives your team a place to review PartnerPak help
            content, understand what each screen affects, and learn how office
            setup connects to fabrication output.
          </p>
        </div>

        <div className="highlightBox">
          <h3>PartnerPak help resources can:</h3>
          <ul>
            <li>Reduce repeated software questions</li>
            <li>Improve setup and workflow consistency</li>
            <li>Help new users learn faster</li>
            <li>Connect office workflows to shop output</li>
            <li>Improve confidence across your team</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Help Process</p>
          <h2>From question to confident workflow</h2>
        </div>

        <div className="processGrid">
          <article>
            <span className="stepNumber">01</span>
            <h3>Find the workflow</h3>
            <p>
              Start with the area causing confusion: frame building, metal
              groups, catalog parts, doors, Library Fab, Fab Rules Library,
              reports, drawings, or fabrication output.
            </p>
          </article>

          <article>
            <span className="stepNumber">02</span>
            <h3>Review the guide or video</h3>
            <p>
              Use the related written guide or tutorial video to understand what
              the screen does, what settings matter, and how it affects the job.
            </p>
          </article>

          <article>
            <span className="stepNumber">03</span>
            <h3>Apply it consistently</h3>
            <p>
              Help your team repeat the same workflow across jobs so estimating,
              project management, and fabrication stay aligned.
            </p>
          </article>
        </div>
      </section>

      <section className="splitPanel reverse">
        <div className="highlightBox">
          <h3>Helpful for:</h3>
          <ul>
            <li>New PartnerPak users</li>
            <li>Estimators</li>
            <li>Project managers</li>
            <li>Shop managers</li>
            <li>Fabrication teams</li>
            <li>Companies training new employees</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">PPAK Help + Training</p>
          <h2>Help your team stop relying on tribal knowledge</h2>
          <p>
            Many shops depend on one or two experienced users to answer every
            PartnerPak question. That slows down the whole team and makes
            training harder.
          </p>
          <p>
            The Rhino Wrangler gives members a searchable training library with
            PartnerPak help, PPAK tutorials, written guides, and tutorial videos
            that users can review when they need them.
          </p>
        </div>
      </section>

      <section className="inlineCta">
        <p className="eyebrow">PartnerPak Help</p>
        <h2>Give your team a better place to find software answers.</h2>
        <p>
          Pair PartnerPak help with full PartnerPak training, Glazier Studio
          training, RhinoFab training, tutorial videos, and live virtual
          classes.
        </p>
        <Link href="/learn/partnerpak-training" className="secondaryButton">
          View PartnerPak Training
        </Link>
      </section>

      <section className="cta">
        <h2>Train your team before software mistakes become shop problems.</h2>
        <p>
          PartnerPak help resources can reduce confusion, improve consistency,
          and help your team move from setup to fabrication with fewer mistakes.
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