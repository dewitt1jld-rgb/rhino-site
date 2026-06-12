"use client";

import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";

export default function RhinoFabTroubleshootingPage() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "RhinoFab Troubleshooting",
  description:
    "RhinoFab troubleshooting guides for Rhino 5000, Rhino 5600, Rhino 5700, drill collisions, air manifold issues, coolant problems, photo eye alignment, failed machine connections, calibration problems, and production downtime.",
  publisher: {
    "@type": "Organization",
    name: "The Rhino Wrangler",
    url: "https://therhinowrangler.com",
  },
  url: "https://therhinowrangler.com/learn/rhinofab-troubleshooting",
};
  return (
    <main className="landingPage">
      <SeoSchema data={schema} />
      <section className="hero">
        <p className="eyebrow">RhinoFab Troubleshooting</p>
        <h1>RhinoFab Troubleshooting Guides for Real Production Problems</h1>
        <p className="lead">
          The Rhino Wrangler helps glass fabrication shops troubleshoot RhinoFab,
          Rhino Fab, and CNC RhinoFab problems faster with written guides,
          tutorial videos, and structured training built around real machine
          issues.
        </p>
        <p className="lead secondaryLead">
          Learn how to approach Rhino 5000 troubleshooting, Rhino 5600
          troubleshooting, Rhino 5700 troubleshooting, calibration problems,
          drill collisions, air manifold issues, coolant problems, photo eye
          alignment, failed machine connections, and other downtime-causing
          problems.
        </p>

        <div className="actions">
          <Link href="/pricing" className="primaryButton">
            Get Training Access
          </Link>
          <Link href="/learn/rhinofab-training" className="secondaryButton">
            View RhinoFab Training
          </Link>
          <Link href="/contact" className="secondaryButton">
            Contact The Rhino Wrangler
          </Link>
        </div>
      </section>

      <section className="machineStrip">
        {[
          "Rhino 5000",
          "Rhino 5600",
          "Rhino 5700",
          "Rhino 900",
          "Rhino 950",
          "Rhino 1100",
          "Rhino 1150",
          "Rhino 1250",
          "Rhino 1350",
          "Rhino 9500",
          "Rhino 9700",
          "CNC RhinoFab",
        ].map((machine) => (
          <span key={machine}>{machine}</span>
        ))}
      </section>

      <section className="contentGrid">
        <article>
          <h2>Troubleshoot production issues faster</h2>
          <p>
            RhinoFab problems can stop production quickly. Structured
            troubleshooting helps operators move from guessing to checking the
            right areas in the right order.
          </p>
        </article>

        <article>
          <h2>Built around real machine symptoms</h2>
          <p>
            These guides focus on the issues shops actually run into: incorrect
            part lengths, drill collisions, failed connections, coolant issues,
            E-stop faults, tool index errors, and calibration-related problems.
          </p>
        </article>

        <article>
          <h2>Written guides and tutorial videos</h2>
          <p>
            Members can review searchable troubleshooting pages and quick videos
            without waiting for another person in the shop to remember the fix.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Common RhinoFab Problems</p>
          <h2>RhinoFab troubleshooting topics covered</h2>
        </div>

        <div className="topicGrid">
          {[
            "Air manifold issues",
            "Drill collision detected",
            "Incorrect part lengths",
            "Photo eye alignment",
            "Saw and drill coolant problems",
            "E-stop faults",
            "Failed to connect to 192.168.42.1",
            "Tool index errors",
            "Backfence roller issues",
            "Loading drill bits",
            "Maintenance checks",
            "Calibration-related problems",
            "coasting and inaccuracy",
            "spindle & general Maintenance",
            "Material Scratching",
            "Full tutorial videos"

          ].map((topic) => (
            <div className="topicCard" key={topic}>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="splitPanel">
        <div>
          <p className="eyebrow">Downtime Costs Money</p>
          <h2>Why structured troubleshooting matters</h2>
          <p>
            When a RhinoFab machine is down, the cost is not just the machine
            sitting idle. Shops lose time searching for answers, remaking parts,
            interrupting experienced operators, delaying glass fabrication, and
            pushing production schedules behind.
          </p>
          <p>
            RhinoFab troubleshooting training gives your team a repeatable way
            to inspect the problem, understand likely causes, and know when to
            check software settings, tooling, calibration, sensors, air, coolant,
            or machine setup.
          </p>
        </div>

        <div className="highlightBox">
          <h3>Good troubleshooting helps teams:</h3>
          <ul>
            <li>Reduce unnecessary downtime</li>
            <li>Recover faster from common machine faults</li>
            <li>Avoid repeating the same operator mistakes</li>
            <li>Improve confidence around RhinoFab machines</li>
            <li>Keep production moving with fewer delays</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Troubleshooting Process</p>
          <h2>From symptom to solution</h2>
        </div>

        <div className="processGrid">
          <article>
            <span className="stepNumber">01</span>
            <h3>Identify the symptom</h3>
            <p>
              Start with what the machine is actually doing: wrong part length,
              failed connection, coolant not flowing, collision warning, sensor
              issue, or tooling problem.
            </p>
          </article>

          <article>
            <span className="stepNumber">02</span>
            <h3>Check the likely causes</h3>
            <p>
              Use the guide to narrow the problem to setup, calibration, air,
              coolant, tooling, photo eyes, machine communication, or operator
              workflow.
            </p>
          </article>

          <article>
            <span className="stepNumber">03</span>
            <h3>Fix and verify</h3>
            <p>
              After the issue is corrected, verify the result with a test part,
              machine movement, sensor response, coolant flow, or calibration
              check before returning to production.
            </p>
          </article>
        </div>
      </section>

      <section className="splitPanel reverse">
        <div className="highlightBox">
          <h3>Helpful for:</h3>
          <ul>
            <li>New RhinoFab operators</li>
            <li>Experienced fabricators</li>
            <li>Shop managers</li>
            <li>Maintenance teams</li>
            <li>Training new hires</li>
            <li>Refreshing forgotten procedures</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">For Real Glass Shops</p>
          <h2>Training that matches the problems shops actually face</h2>
          <p>
            The Rhino Wrangler is built for shops using RhinoFab equipment in
            real production environments. Whether your team is working with a
            Rhino 5000, Rhino 5600, Rhino 5700, Rhino 9500, Rhino 9700, or other
            RhinoFab machines, the goal is to make troubleshooting easier to
            understand and easier to repeat.
          </p>
          <p>
            Instead of relying only on memory or one experienced person, your
            team gets a place to review troubleshooting steps, machine concepts,
            calibration checks, and operator reminders.
          </p>
        </div>
      </section>

      <section className="inlineCta">
        <p className="eyebrow">RhinoFab Training + Troubleshooting</p>
        <h2>Give your team a better way to solve machine problems.</h2>
        <p>
          Pair troubleshooting guides with RhinoFab training pages, tutorial
          videos, and live virtual classes so your operators can understand both
          the process and the fix.
        </p>
        <Link href="/learn/rhinofab-training" className="secondaryButton">
          View RhinoFab Training
        </Link>
      </section>

      <section className="cta">
        <h2>Fix problems faster. Train your team before downtime gets expensive.</h2>
        <p>
          RhinoFab troubleshooting, calibration issues, machine faults, incorrect
          cuts, and operator confusion can cost far more than proper training.
        </p>
        <Link href="/pricing" className="primaryButton">
          View Training Options
        </Link>
      </section>

      <section className="panel">
  <div className="panelHeader">
    <p className="eyebrow">Related Resources</p>
    <h2>Continue Learning</h2>
  </div>

  <div className="topicGrid">
    <Link href="/learn/rhinofab-training" className="topicCard">
      RhinoFab Training
    </Link>

    <Link href="/learn/rhinofab-support" className="topicCard">
      RhinoFab Support
    </Link>

    <Link href="/learn/rhinofab-troubleshooting" className="topicCard">
      RhinoFab Troubleshooting
    </Link>

    <Link href="/learn/rhinofab-machine-support" className="topicCard">
      RhinoFab Machine Support
    </Link>

    <Link href="/learn/glazier-studio-training" className="topicCard">
      Glazier Studio Training
    </Link>

    <Link href="/learn/glazier-studio-help" className="topicCard">
      Glazier Studio Help
    </Link>

    <Link href="/learn/partnerpak-training" className="topicCard">
      PartnerPak Training
    </Link>

    <Link href="/learn/partnerpak-help" className="topicCard">
      PartnerPak Help
    </Link>
  </div>
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