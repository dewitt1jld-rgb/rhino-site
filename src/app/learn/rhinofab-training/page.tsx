"use client";

import Link from "next/link";
import SeoSchema from "@/components/SeoSchema";

export default function RhinoFabTrainingPage() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "RhinoFab Training",
  description:
    "Professional RhinoFab training for Rhino 5000, Rhino 5600, Rhino 5700, Rhino 9500, Rhino 9700, CNC RhinoFab machines, calibration workflows, troubleshooting, and glass fabrication shops.",
  provider: {
    "@type": "Organization",
    name: "The Rhino Wrangler",
    url: "https://therhinowrangler.com",
  },
  url: "https://therhinowrangler.com/learn/rhinofab-training",
};
  return (
    <main className="landingPage">
      <SeoSchema data={schema} />
      <section className="hero">
        <p className="eyebrow">RhinoFab Training</p>

        <h1>
          Professional RhinoFab Training for RhinoFab and CNC
          Glass Fabrication Shops
        </h1>

        <p className="lead">
          The Rhino Wrangler helps operators, fabricators, and shop teams learn
          RhinoFab workflows faster with guided training pages, tutorial videos,
          troubleshooting guides, and live virtual classes.
        </p>

        <p className="lead smallLead">
          Whether your shop runs a RhinoFab, Rhino Fab, Rhino 5000, Rhino 5600,
          Rhino 5700, Rhino 900, Rhino 950, Rhino 1100, Rhino 1150, Rhino 1250,
          Rhino 1350, Rhino 9500, Rhino 9700, or other CNC RhinoFab equipment,
          standardized training can reduce downtime and improve production.
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

      <section className="panel supportedPanel">
        <div className="panelHeader">
          <p className="eyebrow">Machine Coverage</p>
          <h2>Supported RhinoFab Machines</h2>
        </div>

        <p>
          The Rhino Wrangler training platform provides training resources,
          troubleshooting guides, video tutorials, and virtual classes for a
          wide range of RhinoFab fabrication equipment used in glass fabrication
          shops.
        </p>

        <div className="machineGrid">
          <div>Rhino 5000</div>
          <div>Rhino 5600</div>
          <div>Rhino 5700</div>
          <div>Rhino 900</div>
          <div>Rhino 950</div>
          <div>Rhino 1100</div>
          <div>Rhino 1150</div>
          <div>Rhino 1250</div>
          <div>Rhino 1350</div>
          <div>Rhino 9500</div>
          <div>Rhino 9700</div>
        </div>
      </section>

      <section className="contentGrid">
        <article>
          <p className="cardEyebrow">Training Topics</p>
          <h2>What RhinoFab training covers</h2>
          <p>
            RhinoFab training includes machine setup, calibration, saw and drill
            workflows, fab jobs, axis movement, tooling, maintenance, and common
            production problems that slow shops down.
          </p>
        </article>

        <article>
          <p className="cardEyebrow">Real Shop Use</p>
          <h2>Built for operators and fabricators</h2>
          <p>
            Training is written for people working around the machine, not just
            software users. The goal is to help teams understand what to check,
            what to avoid, and how to recover when something does not work as
            expected.
          </p>
        </article>

        <article>
          <p className="cardEyebrow">Video + Written Guides</p>
          <h2>Searchable training resources</h2>
          <p>
            Members get access to searchable written training pages and quick
            tutorial videos that make it easier to review procedures without
            waiting for someone else in the shop.
          </p>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Why It Matters</p>
          <h2>Why RhinoFab Training Matters</h2>
        </div>

        <div className="twoColumn">
          <div>
            <p>
              Proper RhinoFab training helps fabrication shops reduce downtime,
              improve cut accuracy, reduce material waste, and improve overall
              production efficiency.
            </p>

            <p>
              Many RhinoFab problems are not caused by major hardware failures.
              Instead, they are often caused by calibration drift, incorrect
              setup, maintenance issues, tooling problems, or workflow mistakes.
            </p>

            <p>
              A trained operator can often identify and correct these issues in
              minutes instead of losing hours of production time.
            </p>
          </div>

          <div className="highlightBox">
            <h3>Training helps reduce:</h3>
            <ul>
              <li>Incorrect part lengths</li>
              <li>Drill collisions</li>
              <li>Machine downtime</li>
              <li>Material waste</li>
              <li>Operator confusion</li>
              <li>Repeated troubleshooting calls</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Calibration</p>
          <h2>RhinoFab Calibration Training</h2>
        </div>

        <p>
          Calibration is one of the most important areas of RhinoFab operation.
          Proper calibration helps ensure accurate cut lengths, reliable drill
          locations, consistent fabrication results, and fewer production
          delays.
        </p>

        <div className="topicGrid">
          <div>Pusher Calibration</div>
          <div>Roller Calibration</div>
          <div>Saw Calibration</div>
          <div>Drill Calibration</div>
          <div>Rotational Spindle Calibration</div>
          <div>Miter Cut Length Calibration</div>
          <div>Tool Rack Calibration</div>
          <div>Calibration Torque Settings</div>
        </div>

        <p>
          The Rhino Wrangler training library includes guided calibration
          procedures with screenshots, written instructions, videos, and
          troubleshooting recommendations for RhinoFab machines.
        </p>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Troubleshooting</p>
          <h2>Common RhinoFab Problems</h2>
        </div>

        <p>
          RhinoFab troubleshooting is one of the most valuable parts of
          operator training. When a machine is down, operators need to know what
          to check, what symptoms mean, and how to safely narrow down the cause.
        </p>

        <div className="topicGrid">
          <div>Air Manifold Issues</div>
          <div>Drill Collisions</div>
          <div>Incorrect Part Lengths</div>
          <div>Photo Eye Alignment</div>
          <div>Coolant Problems</div>
          <div>Connection Failures</div>
          <div>E-Stop Faults</div>
          <div>Tool Index Errors</div>
          <div>Backfence Roller Issues</div>
          <div>Angled Cutting Problems</div>
          <div>Loading Drill Bits</div>
          <div>Maintenance Procedures</div>
        </div>

        <div className="inlineCta">
          <div>
            <h3>Looking for troubleshooting help?</h3>
            <p>
              Explore RhinoFab troubleshooting topics and learn how The Rhino
              Wrangler helps shops diagnose issues faster.
            </p>
          </div>

          <Link href="/learn/rhinofab-troubleshooting" className="secondaryButton">
            View Troubleshooting Page
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Training Format</p>
          <h2>Written Guides, Tutorial Videos, and Virtual Classes</h2>
        </div>

        <div className="contentGrid nestedGrid">
          <article>
            <h3>Written Training Pages</h3>
            <p>
              Step-by-step written pages help operators follow setup,
              calibration, troubleshooting, and production procedures in a
              consistent way.
            </p>
          </article>

          <article>
            <h3>Tutorial Videos</h3>
            <p>
              Quick videos give visual learners a faster way to understand
              RhinoFab workflows, machine screens, and common troubleshooting
              procedures.
            </p>
          </article>

          <article>
            <h3>Live Virtual Classes</h3>
            <p>
              Instructor-led virtual classes help teams ask questions, review
              workflows, and standardize training across multiple operators.
            </p>
          </article>
        </div>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <p className="eyebrow">Who It Helps</p>
          <h2>Who Should Use RhinoFab Training?</h2>
        </div>

        <div className="twoColumn">
          <div>
            <p>
              RhinoFab training is useful for new operators, experienced
              fabricators, shop leads, production managers, service teams, and
              anyone responsible for keeping fabrication moving.
            </p>

            <p>
              Even experienced operators benefit from a searchable training
              system because it gives the entire shop a shared reference point
              instead of relying on memory or tribal knowledge.
            </p>
          </div>

          <div className="highlightBox">
            <h3>Ideal for:</h3>
            <ul>
              <li>New RhinoFab operators</li>
              <li>Fabrication leads</li>
              <li>Shop managers</li>
              <li>Glaziers moving into fabrication</li>
              <li>Companies onboarding new employees</li>
              <li>Teams running multiple Rhino machines</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">Start Training</p>
        <h2>Train your team before mistakes become expensive.</h2>
        <p>
          RhinoFab downtime, incorrect cuts, calibration issues, and operator
          confusion can cost far more than proper training. The Rhino Wrangler
          gives your team a structured training system they can return to again
          and again.
        </p>

        <div className="actions centerActions">
          <Link href="/pricing" className="primaryButton">
            View Training Options
          </Link>

          <Link href="/dashboard/tutorial-videos" className="secondaryButton">
            View Tutorial Videos
          </Link>
        </div>
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
          radial-gradient(circle at 20% 0%, rgba(245, 158, 11, 0.14), transparent 32%),
          radial-gradient(circle at 90% 10%, rgba(59, 130, 246, 0.12), transparent 30%),
          #050b14;
        color: white;
        padding: 80px 24px;
      }

      .hero,
      .cta,
      .contentGrid,
      .panel {
        max-width: 1120px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero {
        padding: 60px 0 36px;
      }

      .eyebrow,
      .cardEyebrow {
        color: #f59e0b;
        font-weight: 900;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-size: 0.82rem;
        margin: 0 0 12px;
      }

      h1 {
        font-size: clamp(2.6rem, 6vw, 5.5rem);
        line-height: 0.95;
        margin: 16px 0 24px;
        max-width: 1050px;
        letter-spacing: -0.05em;
      }

      h2 {
        margin: 0 0 14px;
        color: white;
        font-size: clamp(1.8rem, 3vw, 2.6rem);
        line-height: 1.05;
      }

      h3 {
        color: white;
        margin: 0 0 12px;
      }

      p,
      li {
        color: rgba(255, 255, 255, 0.75);
        line-height: 1.75;
      }

      .lead {
        font-size: 1.25rem;
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.78);
        max-width: 860px;
      }

      .smallLead {
        font-size: 1.05rem;
        max-width: 980px;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 34px;
      }

      .centerActions {
        justify-content: center;
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
        box-shadow: 0 14px 35px rgba(245, 158, 11, 0.18);
      }

      .secondaryButton {
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.22);
        background: rgba(255, 255, 255, 0.05);
      }

      .primaryButton:hover,
      .secondaryButton:hover {
        transform: translateY(-2px);
      }

      .panel,
      article,
      .cta {
        background: rgba(255, 255, 255, 0.055);
        border: 1px solid rgba(245, 158, 11, 0.2);
        border-radius: 24px;
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
      }

      .panel {
        padding: 34px;
        margin-top: 28px;
      }

      .supportedPanel {
        margin-top: 10px;
      }

      .panelHeader {
        margin-bottom: 20px;
      }

      .contentGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin-top: 28px;
      }

      .nestedGrid {
        max-width: none;
        margin-top: 22px;
      }

      article {
        padding: 28px;
      }

      .machineGrid,
      .topicGrid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin: 24px 0;
      }

      .machineGrid div,
      .topicGrid div {
        border-radius: 14px;
        padding: 14px;
        text-align: center;
        font-weight: 900;
        color: white;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(245, 158, 11, 0.18);
      }

      .twoColumn {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 24px;
        align-items: start;
      }

      .highlightBox {
        border-radius: 20px;
        padding: 24px;
        background: rgba(245, 158, 11, 0.08);
        border: 1px solid rgba(245, 158, 11, 0.24);
      }

      .highlightBox ul {
        margin: 0;
        padding-left: 20px;
      }

      .inlineCta {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: center;
        margin-top: 28px;
        padding: 24px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.045);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .inlineCta p {
        margin-bottom: 0;
      }

      .cta {
        margin-top: 32px;
        padding: 38px;
        text-align: center;
      }

      .cta p {
        max-width: 780px;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width: 900px) {
        .contentGrid,
        .twoColumn {
          grid-template-columns: 1fr;
        }

        .machineGrid,
        .topicGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .inlineCta {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 560px) {
        .landingPage {
          padding: 48px 16px;
        }

        .panel,
        article,
        .cta {
          padding: 24px;
        }

        .machineGrid,
        .topicGrid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}