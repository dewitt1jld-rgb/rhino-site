import Link from "next/link";
import { useState } from "react";

const logoUrl =
  "https://rhino-training-cdn.b-cdn.net/logo-content-media/images/rhino-logo.png";



const previewVideos = [
  {
    title: "Machine Calibration",
    text: "A sample overview of calibration and operation.",
    url: "https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/3-intro-videos/rhino-intro.mp4",
  },
  {
    title: "GS & PPAK Guides",
    text: "A preview of step-by-step setup and training.",
    url: "https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/3-intro-videos/gs-intro2.mp4",
  },
  {
    title: "Tutorial Videos",
    text: "A sample look at video walkthroughs.",
    url: "https://rhino-training-cdn.b-cdn.net/Tutorial%20Videos/3-intro-videos/tutorial-videos-intro.mp4",
  },
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <main className="page">
      <section className="hero">
        <div className="heroGrid">
          <div className="logoSide">
            <img src={logoUrl} alt="Rhino Wrangler" className="heroLogo" />
          </div>

          <div className="textSide">
            <div className="badge">Professional CNC Training Platform</div>

            <div className="headlineStack">
              <h1 className="headlineLine line1">Train faster</h1>
              <h1 className="headlineLine line2">Reduce downtime</h1>
              <h1 className="headlineLine line3">Troubleshoot smarter</h1>
            </div>

            <p className="heroText">
              A clean, organized training platform built to help operators and shop teams quickly find the exact
              machine workflow, setup step, troubleshooting guide, or technical procedure they need.
            </p>

             </div>
             <div className="heroCTASection">

</div>
<div
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "40px",
  }}
>
  <Link
    href="/classes"
    style={{
      background: "linear-gradient(135deg, #f59e0b, #ffb020)",
      color: "#111827",
      padding: "18px 42px",
      borderRadius: "14px",
      fontWeight: "900",
      fontSize: "1.1rem",
      textDecoration: "none",
      boxShadow: "0 18px 45px rgba(245, 158, 11, 0.35)",
      display: "inline-block",
      transform: "translate(-150px, 20px)",
    }}
  >
    View Virtual Training Class Schedule
  </Link>
</div>
        </div>
        
      </section>

      <section className="section">
        <h2>What is The Rhino Wrangler?</h2>
        <p className="sectionText">
          The Rhino Wrangler is not just a website login. It is a structured training system designed to help
          operators, shop owners, and support teams quickly find the information they need without digging through
          scattered notes, old videos, or long manuals.
        </p>

        <div className="infoCards">
          <div className="card">
            <h3>Step-by-step training</h3>
            <p>
              Clear training pages and videos built around real machine workflows, setup, calibration, operation, and
              troubleshooting.
            </p>
          </div>

          <div className="card">
            <h3>Searchable knowledge base</h3>
            <p>
              Quickly search for the exact topic, guide, or procedure your team needs when questions come up on the
              floor.
            </p>
          </div>

          <div className="card">
            <h3>Ongoing updates</h3>
            <p>
              New pages, videos, reference material, and training improvements can be added over time as the platform
              grows.
            </p>
          </div>
        </div>
      </section>

      <section className="section previewSection">
        <h2>Preview what’s inside</h2>
        <p className="sectionText">
          Below are examples of the type of training content customers can expect inside the training portal. New content is added each month!
        </p>

        <div className="previewCards">
  {previewVideos.map((video) => (
    <button
      key={video.title}
      type="button"
      className="previewCard"
      onClick={() => setActiveVideo(video.url)}
    >
      <div className="videoBox">
        <div className="play">▶</div>
      </div>

      <h3>{video.title}</h3>
      <p>{video.text}</p>
    </button>
  ))}
</div>

{activeVideo && (
  <div className="videoModal" onClick={() => setActiveVideo(null)}>
    <div className="videoModalCard" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="closeVideo"
        onClick={() => setActiveVideo(null)}
      >
        ×
      </button>

      <video controls autoPlay className="modalVideo">
        <source src={activeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)}
      </section>

      <section className="ctaBox">
        <h2>Built for teams that need answers fast.</h2>
        <p>
          Give your operators a cleaner way to learn, review, and troubleshoot without relying only on memory or
          one-on-one training.
        </p>
       <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <Link
    href="/pricing"
    style={{
      background: "linear-gradient(135deg, #f59e0b, #ffb020)",
      color: "#111827",
      padding: "16px 36px",
      borderRadius: "12px",
      fontWeight: "900",
      fontSize: "1rem",
      textDecoration: "none",
      boxShadow: "0 12px 30px rgba(245, 158, 11, 0.35)",
      display: "inline-block",
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
      e.currentTarget.style.boxShadow =
        "0 18px 45px rgba(245, 158, 11, 0.5)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow =
        "0 12px 30px rgba(245, 158, 11, 0.35)";
    }}
  >
    View Pricing
  </Link>
</div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #070b12;
          color: #ffffff;
          overflow-x: hidden;
        }

        .hero {
          min-height: 760px;
          display: flex;
          align-items: center;
          padding: 10px 10px 10px;
       
        }

        .heroGrid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 10px;
          align-items: center;
        }

        .logoSide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .heroLogo {
          width: 78%;
          max-width: 650px;
          display: block;
          transform: translateY(7%);
        }

        .textSide {
          text-align: center;
          max-width: 950px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(245, 158, 11, 0.17);
          color: #f59e0b;
          font-size: 0.82rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 26px;
        }

        .headlineStack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: center;
          text-align: center;
        }

        .headlineLine {
          margin: 0;
          font-size: clamp(3.4rem, 5vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.07em;
          font-weight: 500;
          opacity: 0;
          transform: translateY(22px);
          animation: headlineRise 0.8s ease forwards;
        }

        .previewCard {
  cursor: pointer;
  text-align: left;
  border: 1px solid rgba(245, 158, 11, 0.2);
  background: rgba(255, 255, 255, 0.055);
  color: inherit;
  border-radius: 24px;
  padding: 24px;
  width: 100%;
}

.previewCard:hover {
  border-color: rgba(245, 158, 11, 0.45);
  transform: translateY(-2px);
}

.videoModal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.videoModalCard {
  position: relative;
  width: min(100%, 960px);
  background: #050b14;
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: 24px;
  padding: 18px;
}

.closeVideo {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: none;
  background: #f59e0b;
  color: #111827;
  font-size: 28px;
  font-weight: 900;
  cursor: pointer;
}

.modalVideo {
  width: 100%;
  border-radius: 16px;
  display: block;
}

        .line1 {
          animation-delay: 0.1s;
        }

        .line2 {
          animation-delay: 0.5s;
        }

        .line3 {
          animation-delay: 0.9s;
        }

        @keyframes headlineRise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heroText {
          margin: 32px auto 6px;
          max-width: 900px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 1.08rem;
          line-height: 1.7;
          font-weight: 700;
        }


        .section {
          padding: 70px 24px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .section h2,
        .ctaBox h2 {
          margin: 0;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 400;
          letter-spacing: -0.06em;
        }

        .sectionText {
          max-width: 900px;
          margin: 34px auto 0;
          font-size: 1.05rem;
          line-height: 1.75;
          font-weight: 800;
          color: #ffffff;
        }

        .infoCards {
          max-width: 1050px;
          margin: 88px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card,
        .previewCard,
        .ctaBox {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
        }

        .card {
          text-align: left;
          border-radius: 18px;
          padding: 28px 24px;
        }

        .card h3 {
          margin: 0 0 16px;
          font-size: 1.2rem;
        }

        .card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 1rem;
          line-height: 1.6;
        }

        .previewSection {
          padding-top: 78px;
        }

        .previewCards {
          max-width: 900px;
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .previewCard {
          border-radius: 18px;
          padding: 24px;
        }
  .primaryCTA {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background: linear-gradient(135deg, #f59e0b, #ffb020);
  color: #111827;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 900;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(245, 158, 11, 0.35);
  transition: all 0.25s ease;
}

      }
        .videoBox {
          height: 168px;
          border-radius: 16px;
          background: #0b1324;
          border: 1px solid rgba(245, 158, 11, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .play {
          color: #f59e0b;
          font-size: 3rem;
          filter: drop-shadow(0 0 22px rgba(245, 158, 11, 0.55));
        }

        .previewCard h3 {
          margin: 0 0 14px;
          font-size: 1.2rem;
        }
          .heroCTASection {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.primaryCTA {
  background: linear-gradient(135deg, #f59e0b, #ffb020);
  color: #111827;
  padding: 18px 42px;
  border-radius: 14px;
  font-weight: 900;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 18px 45px rgba(245, 158, 11, 0.35);
  transition: all 0.25s ease;
}

.primaryCTA:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 25px 60px rgba(245, 158, 11, 0.5);
}

        .previewCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .ctaBox {
          margin: 56px 24px 70px;
          border-radius: 26px;
          padding: 56px 24px;
          text-align: center;
        }

        .ctaBox p {
          margin: 48px auto 0;
          max-width: 900px;
          font-weight: 700;
        }

        .primaryButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          background: #f59e0b;
          color: #111827;
          padding: 16px 38px;
          border-radius: 12px;
          font-weight: 950;
          text-decoration: none;
          box-shadow: 0 18px 42px rgba(245, 158, 11, 0.25);
        }

        @media (max-width: 950px) {
          .hero {
            min-height: auto;
            padding: 50px 22px;
          }

          .heroGrid,
          .infoCards,
          .previewCards {
            grid-template-columns: 1fr;
          }

          .heroLogo {
            width: 70%;
            max-width: 420px;
          }

          .infoCards {
            margin-top: 42px;
          }
        }
      `}</style>
    </main>
  );
}