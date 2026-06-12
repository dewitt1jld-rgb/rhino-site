"use client";

import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";

export default function RhinoFabSupportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RhinoFab Support",
    description:
      "RhinoFab support resources for glass fabrication shops using RhinoFab, Rhino Fab, Rhino 5000, Rhino 5600, Rhino 5700, Rhino 900, Rhino 950, Rhino 9500, Rhino 9600, and CNC glass fabrication equipment.",
    publisher: {
      "@type": "Organization",
      name: "The Rhino Wrangler",
      url: "https://therhinowrangler.com",
    },
    url: "https://therhinowrangler.com/learn/rhinofab-support",
  };

  return (
    <main className="landingPage">
      <SeoSchema data={schema} />

      <section className="hero">
        <p className="eyebrow">CNC Glass Fabrication Training</p>
<h1>CNC Glass Fabrication Training for Modern Glass Shops</h1>
<p className="lead">
  The Rhino Wrangler helps glass fabrication shops train operators,
  estimators, project managers, and fabrication teams on CNC glass fabrication
  workflows, RhinoFab machines, Glazier Studio, PartnerPak, troubleshooting,
  and production support.
</p>
<p className="lead secondaryLead">
  Learn RhinoFab training, RhinoFab troubleshooting, RhinoFab machine support,
  Glazier Studio help, PartnerPak help, CNC machine workflows, fabrication
  software, calibration procedures, tutorial videos, and live virtual classes.
</p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>
          <Link href="/learn/rhinofab-troubleshooting" className="secondaryButton">
            View Troubleshooting Guides
          </Link>
          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="machineStrip">
        {[

  "CNC Glass Fabrication",
  "RhinoFab",
  "Rhino Fab",
  "Glazier Studio",
  "PartnerPak",
  "Partner Pak",
  "Rhino 900",
  "Rhino 950",
  "Rhino 5700",
  "Rhino 9500",
  "Rhino 9600",
  "Fabrication Training",

        ].map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </section>

      <section className="contentGrid">
        <article>
          <h2>Support for real production problems</h2>
          <p>
            RhinoFab issues can slow down an entire shop. The Rhino Wrangler
            helps teams understand what to check, what each issue may point to,
            and how to approach machine problems with a clear process.
          </p>
        </article>

        <article>
          <h2>Training plus troubleshooting</h2>
          <p>
            Support works best when operators understand both the machine and
            the workflow. Members get training pages, troubleshooting guides,
            and tutorial videos built around real RhinoFab shop use.
          </p>
        </article>

        <article>
          <h2>Built for glass fabrication teams</h2>
          <p>
            These resources are written for operators, fabricators, maintenance
            teams, shop managers, and companies training new RhinoFab users.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Support Topics</p>
          <h2>RhinoFab support areas covered</h2>
        </div>

        <div className="topicGrid">
          {[

  "RhinoFab machine training",
  "RhinoFab troubleshooting",
  "RhinoFab machine support",
  "Glazier Studio training",
  "Glazier Studio help",
  "PartnerPak training",
  "PartnerPak help",
  "CNC calibration workflows",
  "Saw and drill workflows",
  "Fabrication software",
  "Tutorial videos",
  "Live virtual classes",

          ].map((topic) => (
            <div className="topicCard" key={topic}>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="splitPanel">
        <div>
          <p className="eyebrow">Structured Support</p>
          <h2>Stop guessing and start checking the right things</h2>
          <p>
            When a RhinoFab machine is not cutting correctly, drilling
            correctly, connecting properly, or responding as expected, it is easy
            to lose time guessing. A structured support process helps your team
            narrow the problem faster.
          </p>
          <p>
            The Rhino Wrangler gives shops a place to review machine concepts,
            training procedures, calibration checks, troubleshooting paths, and
            operator reminders without relying only on memory or one experienced
            person in the shop.
          </p>
        </div>

        <div className="highlightBox">
          <h3>Support resources help teams:</h3>
          <ul>
            <li>Reduce avoidable downtime</li>
            <li>Improve operator confidence</li>
            <li>Train new users faster</li>
            <li>Repeat fixes more consistently</li>
            <li>Understand machine symptoms better</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Support Process</p>
          <h2>From problem to production</h2>
        </div>

        <div className="processGrid">
          <article>
            <span className="stepNumber">01</span>
            <h3>Identify the symptom</h3>
            <p>
              Start with what the RhinoFab is actually doing: wrong lengths,
              collision warnings, coolant failure, communication problems,
              sensor issues, tooling problems, or calibration drift.
            </p>
          </article>

          <article>
            <span className="stepNumber">02</span>
            <h3>Use the right guide</h3>
            <p>
              Find the related support page, tutorial video, or troubleshooting
              guide for the machine area involved: saw, drills, pusher,
              spindles, air, coolant, sensors, or software connection.
            </p>
          </article>

          <article>
            <span className="stepNumber">03</span>
            <h3>Verify before production</h3>
            <p>
              After making a correction, verify the result with a test movement,
              test cut, calibration check, coolant check, or sample part before
              returning to full production.
            </p>
          </article>
        </div>
      </section>

      <section className="splitPanel reverse">
        <div className="highlightBox">
          <h3>Helpful for:</h3>
          <ul>
            <li>RhinoFab operators</li>
            <li>Glass fabrication shops</li>
            <li>Maintenance teams</li>
            <li>Shop managers</li>
            <li>New employee training</li>
            <li>Teams without an in-house expert</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Machine Coverage</p>
          <h2>Support for multiple RhinoFab machine families</h2>
          <p>
            Shops may search for RhinoFab support, Rhino Fab support, Rhino 5700
            support, Rhino 900 support, Rhino 950 support, Rhino 9500 support,
            or Rhino 9600 support depending on the machine and naming they use.
          </p>
          <p>
            The Rhino Wrangler organizes training and troubleshooting around the
            workflows those teams care about most: setup, calibration, saw and
            drill operation, tooling, maintenance, machine communication, and
            production recovery.
          </p>
        </div>
      </section>

      <section className="inlineCta">
        <p className="eyebrow">Training + Support</p>
        <h2>Give your team a better place to find RhinoFab answers.</h2>
        <p>
          Pair RhinoFab support pages with troubleshooting guides, tutorial
          videos, written training, and live virtual classes so your shop has a
          repeatable resource for common machine and production issues.
        </p>
        <Link href="/learn/rhinofab-training" className="secondaryButton">
          View RhinoFab Training
        </Link>
      </section>

      <section className="cta">
        <h2>Support your team before downtime becomes expensive.</h2>
        <p>
          RhinoFab support, training, and troubleshooting resources help glass
          shops reduce confusion, improve consistency, and recover faster when
          machine problems interrupt production.
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