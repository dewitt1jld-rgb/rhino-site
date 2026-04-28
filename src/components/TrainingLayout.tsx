import { useState } from "react";
import TrainingSidebar from "@/components/TrainingSidebar";

type Props = {
  children: React.ReactNode;
};

export default function TrainingLayout({ children }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="layout">
      <div className="desktopSidebar">
        <TrainingSidebar />
      </div>

      <section className="content">
    <button
  type="button"
  className="mobileDrawerTab"
  onClick={() => setMobileMenuOpen(true)}
  aria-label="Open training menu"
>
  ☰
</button>

        {children}
      </section>

      {mobileMenuOpen && (
        <div className="mobileOverlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobileDrawer" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="closeButton"
              onClick={() => setMobileMenuOpen(false)}
            >
              × Close
            </button>

            <TrainingSidebar />
          </div>
        </div>
      )}

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 320px 1fr;
          background:
            radial-gradient(circle at top left, rgba(245, 158, 11, 0.08), transparent 32%),
            linear-gradient(135deg, #05070b 0%, #0d1118 45%, #05070b 100%);
          color: #ffffff;
        }

        .desktopSidebar {
          width: 320px;
        }

        .content {
          padding: 34px;
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
        }

      .mobileDrawerTab {
  display: none;
}

@media (max-width: 950px) {
  .mobileDrawerTab {
    display: flex;
    position: fixed;
    left: 0;
    top: 45%;
    z-index: 9998;

    width: 42px;
    height: 64px;

    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.18);
    border-left: none;
    border-radius: 0 14px 14px 0;

    background: rgba(245, 158, 11, 0.92);
    color: #111827;

    font-size: 22px;
    font-weight: 900;
    cursor: pointer;

    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.32);
  }
}

        .mobileOverlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.62);
          backdrop-filter: blur(4px);
        }

        .mobileDrawer {
          width: min(88vw, 360px);
          height: 100vh;
          background: #070a10;
          overflow-y: auto;
          box-shadow: 24px 0 60px rgba(0, 0, 0, 0.45);
        }

        .closeButton {
          position: sticky;
          top: 0;
          z-index: 2;
          width: 100%;
          border: none;
          background: rgba(245, 158, 11, 0.16);
          color: #ffffff;
          padding: 16px;
          font-size: 16px;
          font-weight: 900;
          text-align: left;
          cursor: pointer;
        }

        @media (max-width: 950px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .desktopSidebar {
            display: none;
          }

          .content {
            padding: 18px;
            max-width: 100%;
            overflow-x: hidden;
          }

      
        }
      `}</style>
    </main>
  );
}