"use client";

import Link from "next/link";

const resources = [
  {
    title: "RhinoFab Training",
    href: "/learn/rhinofab-training",
    description:
      "Machine setup, calibration, tooling, workflows, and RhinoFab training resources.",
  },
  {
    title: "RhinoFab Support",
    href: "/learn/rhinofab-support",
    description:
      "Support resources, tutorials, troubleshooting, and machine guidance.",
  },
  {
    title: "RhinoFab Troubleshooting",
    href: "/learn/rhinofab-troubleshooting",
    description:
      "Solutions for common RhinoFab production and machine issues.",
  },
  {
    title: "RhinoFab Machine Support",
    href: "/learn/rhinofab-machine-support",
    description:
      "Support for Rhino 900, 950, 5700, 9500, and 9600 machines.",
  },
  {
    title: "Glazier Studio Training",
    href: "/learn/glazier-studio-training",
    description:
      "Training for estimators, project managers, and fabrication teams.",
  },
  {
    title: "Glazier Studio Help",
    href: "/learn/glazier-studio-help",
    description:
      "Tutorials, guides, reports, drawings, and software workflows.",
  },
  {
    title: "PartnerPak Training",
    href: "/learn/partnerpak-training",
    description:
      "PartnerPak workflows, fabrication options, and training resources.",
  },
  {
    title: "PartnerPak Help",
    href: "/learn/partnerpak-help",
    description:
      "PartnerPak support, tutorials, and software help resources.",
  },
  {
    title: "CNC Glass Fabrication Training",
    href: "/learn/cnc-glass-fabrication-training",
    description:
      "Industry-focused training covering software, machinery, and workflows.",
  },
];

export default function LearnPage() {
  return (
    <main className="landingPage">
      <section className="hero">
        <p className="eyebrow">Learning Hub</p>

        <h1>Glass Fabrication Training & Support Resources</h1>

        <p className="lead">
          Browse RhinoFab training, troubleshooting, machine support,
          Glazier Studio training, PartnerPak help, tutorial videos,
          and CNC glass fabrication resources from The Rhino Wrangler.
        </p>
      </section>

      <section className="resourceGrid">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="resourceCard"
          >
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
          </Link>
        ))}
      </section>

      <style jsx global>{`
        .landingPage {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left,
              rgba(245,158,11,.12),
              transparent 35%),
            #050b14;
          color: white;
          padding: 80px 24px;
        }

        .hero,
        .resourceGrid {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero {
          margin-bottom: 50px;
        }

        .eyebrow {
          color: #f59e0b;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(2.8rem, 6vw, 5rem);
          margin: 16px 0;
          line-height: .95;
        }

        .lead {
          max-width: 800px;
          color: rgba(255,255,255,.75);
          line-height: 1.8;
          font-size: 1.15rem;
        }

        .resourceGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .resourceCard {
          display: block;
          text-decoration: none;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(245,158,11,.18);
          transition: all .2s ease;
        }

        .resourceCard:hover {
          transform: translateY(-4px);
          border-color: rgba(245,158,11,.45);
        }

        .resourceCard h2 {
          color: white;
          margin-bottom: 12px;
        }

        .resourceCard p {
          color: rgba(255,255,255,.72);
          line-height: 1.7;
        }
      `}</style>
    </main>
  );
}