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

            <div className="sectionGrid">
              <div className="miniCard">
                <span>01</span>
                <h3>Start with the Guided Course</h3>
                <p>
                  New to the software? Use Introductory Software Training first
                  for a structured walkthrough.
                </p>
              </div>

              <div className="miniCard">
                <span>02</span>
                <h3>Browse the Left Menu</h3>
                <p>
                  Use the sidebar to find topics like Metal Groups, Metal
                  Fabrication, Library Fab, Reports, and General Settings.
                </p>
              </div>

              <div className="miniCard">
                <span>03</span>
                <h3>Use Search</h3>
                <p>
                  Use the search button at the top of the screen to quickly find
                  specific topics, pages, videos, or features.
                </p>
              </div>

              <div className="miniCard">
                <span>04</span>
                <h3>Follow Cross-Connected Pages</h3>
                <p>
                  Many pages connect to related topics so you can understand how
                  different parts of the software work together.
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

          .sectionGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-top: 24px;
          }

          .miniCard {
            padding: 20px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.24);
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