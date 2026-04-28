import Link from "next/link";
import Navbar from "../components/Navbar";
import RequireActiveAccess from "../components/RequireActiveAccess";

export default function Dashboard() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#07111f",
          color: "white",
        }}
      >
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "760px",
            backgroundImage:
              "linear-gradient(rgba(7, 17, 31, 0.12), rgba(7, 17, 31, 0.25)), url('/smoke-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
            <RequireActiveAccess>
          <div style={heroOverlay}></div>

          <div
            style={{
              position: "relative",
              zIndex: 3,
              maxWidth: "1480px",
              margin: "0 auto",
              padding: "56px 32px 80px",
            }}
          >
            <div className="hero-grid">
              <div>
                <div style={badgeStyle}>MEMBER TRAINING PORTAL</div>

                <h1
                  style={{
                    fontSize: "58px",
                    lineHeight: 1.02,
                    fontWeight: 800,
                    margin: "18px 0 18px 0",
                    maxWidth: "680px",
                    letterSpacing: "-1.5px",
                  }}
                >
                  Built to help your team learn faster and work smarter
                </h1>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: "650px",
                    marginBottom: "24px",
                  }}
                >
                  Search our training library, jump into guided learning paths,
                  and access the tools your team needs to stay sharp, efficient,
                  and confident in the field.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  minHeight: "390px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={logoGlow}></div>

                <img
                  src="/rhino-logo.png"
                  alt="The Rhino Wrangler logo"
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 5,
                    opacity: 0.97,
                    mixBlendMode: "screen",
                    filter:
                      "drop-shadow(0 18px 55px rgba(255,255,255,0.20))",
                  }}
                />
              </div>
            </div>

            <div id="main-search" style={searchWrap}>
              <span style={searchIcon}>⌕</span>
              <input
                type="text"
                placeholder="Search training topics, videos, setup guides, troubleshooting, and workflows..."
                style={searchInput}
              />
            </div>

            <div className="cards-grid">
              <Link href="/dashboard/glazier-studio-partnerpak" className="card-link">
                <div className="dashboard-card">
                  <div style={cardNumberStyle}>01</div>
                  <h2 style={cardTitleStyle}>Glazier Studio & PartnerPak</h2>
                  <p style={cardTextStyle}>
                    Platform-specific training, workflow help, setup guidance, and
                    feature instruction in one place.
                  </p>
                </div>
              </Link>

              <Link href="/dashboard/tutorial-videos" className="card-link">
                <div className="dashboard-card">
                  <div style={cardNumberStyle}>02</div>
                  <h2 style={cardTitleStyle}>Tutorial Videos</h2>
                  <p style={cardTextStyle}>
                    Visual walkthroughs and hands-on video instruction for quick
                    learning and review.
                  </p>
                </div>
              </Link>

              <Link href="/dashboard/rhino-training" className="card-link">
                <div className="dashboard-card">
                  <div style={cardNumberStyle}>03</div>
                  <h2 style={cardTitleStyle}>Rhino Training</h2>
                  <p style={cardTextStyle}>
                    Learn Rhino tools, design processes, and practical production
                    workflows step by step.
                  </p>
                </div>
              </Link>

              <Link href="/dashboard/estimator-training" className="card-link">
                <div className="dashboard-card">
                  <div style={cardNumberStyle}>04</div>
                  <h2 style={cardTitleStyle}>Estimator Training</h2>
                  <p style={cardTextStyle}>
                    Build confidence in estimating, pricing workflows, and software
                    usage for accurate project prep.
                  </p>
                </div>
              </Link>

              <Link href="/dashboard/introductory-software-training" className="card-link">
                <div className="dashboard-card">
                  <div style={cardNumberStyle}>05</div>
                  <h2 style={cardTitleStyle}>Introductory Software Training</h2>
                  <p style={cardTextStyle}>
                    A clean starting point for new users who need foundational
                    lessons before moving deeper.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          </RequireActiveAccess>
        </section>
      </main>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: center;
          margin-bottom: 30px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .card-link {
          text-decoration: none;
        }

        .dashboard-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.92),
            rgba(255, 255, 255, 0.82)
          );
          padding: 20px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(14px);
          cursor: pointer;
          min-height: 220px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.28);
          border-color: rgba(147, 197, 253, 0.55);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.98),
            rgba(255, 255, 255, 0.88)
          );
        }

        .dashboard-card:active {
          transform: translateY(-3px);
        }

        @media (max-width: 1200px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

const heroOverlay = {
  position: "absolute" as const,
  inset: 0,
  background:
    "radial-gradient(circle at 68% 28%, rgba(255,255,255,0.16), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
  pointerEvents: "none" as const,
  zIndex: 1,
};

const badgeStyle = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: "12px",
  background: "rgba(59,130,246,0.14)",
  border: "1px solid rgba(147,197,253,0.24)",
  color: "#93c5fd",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.14em",
};

const pillStyle = {
  padding: "10px 16px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#e5e7eb",
  fontSize: "14px",
  fontWeight: 600,
  backdropFilter: "blur(10px)",
};

const searchWrap = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  maxWidth: "880px",
  margin: "0 auto 38px auto",
  background: "rgba(255,255,255,0.84)",
  border: "1px solid rgba(255,255,255,0.28)",
  boxShadow: "0 12px 40px rgba(0,0,0,0.22)",
  borderRadius: "18px",
  padding: "18px 22px",
  backdropFilter: "blur(18px)",
};

const searchIcon = {
  color: "#4b5563",
  fontSize: "28px",
  lineHeight: 1,
};

const searchInput = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  color: "#111827",
  fontSize: "16px",
};

const cardNumberStyle = {
  fontSize: "12px",
  fontWeight: 800,
  color: "#334a7d",
  letterSpacing: "0.16em",
  marginBottom: "14px",
};

const cardTitleStyle = {
  fontSize: "18px",
  fontWeight: 800,
  color: "#111827",
  marginBottom: "10px",
  lineHeight: 1.15,
};

const cardTextStyle = {
  fontSize: "14px",
  color: "#4b5563",
  lineHeight: 1.6,
};

const logoGlow = {
  position: "absolute" as const,
  width: "520px",
  height: "520px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 76%)",
  filter: "blur(32px)",
  zIndex: 2,
};