import Link from "next/link";
import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

export default function GlazierStudioHomePage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Software Knowledge Base</p>
            <h1>Glazier Studio & PartnerPak</h1>

            <p className="helperText">
              This section contains 150+ detailed training pages covering
              Glazier Studio and PartnerPak. This area is not meant to be
              completed from beginning to end. Use it as a searchable reference
              while working inside the software.
            </p>

            <p className="helperText">
              If you are looking for a step-by-step walkthrough, start with the
              Introductory Software Training course.
            </p>

            <Link
              href="/dashboard/introductory-software-training"
              className="primaryButton"
            >
              New User? Start Here →
            </Link>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">How to Use This Site</p>
              <h2>Find the answer you need while working in the software</h2>
            </div>

            <p className="helperText">
              The Rhino Wrangler works best when used alongside Glazier Studio
              and PartnerPak. Keep the software open, find the page that matches
              what you are working on, then follow the instructions step by step.
            </p>

            <div className="navigationCallout">
  <div className="arrow">⬅</div>

  <div>
    <h2>Use the Navigation Menu on the Left</h2>

    <p>
      Browse the categories in the left-hand navigation menu to find the
      training page you need. Every topic has been broken down into detailed,
      step-by-step instructions, videos, and reference material.
    </p>

    <p>
  If you're new to Glazier Studio or PartnerPak, start with{" "}
  <Link
    href="/dashboard/introductory-software-training"
    className="introLink"
  >
    Introductory Software Training
  </Link>{" "}
  before exploring the knowledge base.
</p>

    <p>
      Keep Glazier Studio or PartnerPak open while you work and use this site
      alongside the software whenever you have questions.
    </p>
  </div>
</div>
          </section>

          <section className="callout info">
            <strong>Best results:</strong> Use this knowledge base in tandem
            with Glazier Studio or PartnerPak. When you have a question, open
            the matching Rhino Wrangler page and follow the instructions while
            the software is open.
          </section>

          <section className="completionBox">
            <h2>Need help with something specific?</h2>
            <p>
              Use the left navigation menu or the search bar at the top of the
              page. This training library is built to help you quickly find
              answers instead of reading every page in order.
            </p>
          </section>
        </div>

        <style jsx>{`
          .primaryButton {
            display: inline-block;
            margin-top: 24px;
            padding: 14px 22px;
            border-radius: 12px;
            background: #f59e0b;
            color: #111827;
            font-weight: 900;
            text-decoration: none;
          }

    .navigationCallout {
  display: flex;
  align-items: center;
  gap: 36px;

  margin-top: 34px;

  padding: 42px;

  border-radius: 22px;

  background: rgba(245, 158, 11, 0.08);

  border: 2px solid rgba(245, 158, 11, 0.28);
}

.arrow {
  font-size: 110px;
  color: #f59e0b;
  font-weight: 900;
  flex-shrink: 0;
}

.navigationCallout h2 {
  margin: 0 0 18px;
  font-size: 42px;
  color: #f59e0b;
}

.navigationCallout p {
  margin: 0 0 18px;
  font-size: 20px;
  line-height: 1.8;
  color: rgba(255,255,255,.82);
}

.navigationCallout strong {
  color: #fbbf24;
}

.introLink {
  color: #f59e0b;
  font-weight: 900;
  text-decoration: none;
  transition: color 0.2s ease;
}

.introLink:hover {
  color: #fbbf24;
  text-decoration: underline;
}
@media (max-width:760px) {
  .navigationCallout {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }

  .arrow {
    font-size: 72px;
  }

  .navigationCallout h2 {
    font-size: 32px;
  }

  .navigationCallout p {
    font-size: 18px;
  }
}

          .miniCard span {
            color: #f59e0b;
            font-size: 0.78rem;
            font-weight: 900;
            letter-spacing: 0.12em;
          }

          .miniCard h3 {
            color: #ffffff;
            margin: 8px 0;
          }

          .miniCard p {
            margin: 0;
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.55;
          }

          @media (max-width: 760px) {
            .sectionGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}