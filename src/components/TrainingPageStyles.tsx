export default function TrainingPageStyles() {
  return (
    <style jsx global>{`
      .breadcrumb {
        color: #93a4bd;
        font-size: 0.9rem;
        font-weight: 700;
        margin-bottom: 18px;
      }

      .heroPanel,
      .panel,
      .completionBox {
        background: rgba(17, 19, 24, 0.94);
        border: 1px solid rgba(148, 163, 184, 0.18);
        border-radius: 24px;
        padding: 28px;
        margin-bottom: 24px;
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
      }

      .heroPanel h1 {
        margin: 0 0 12px;
        color: #ffffff;
        font-size: clamp(2.2rem, 4vw, 4rem);
        line-height: 1;
        letter-spacing: -0.05em;
      }

      .heroPanel p,
      .panelHeader p,
      .helperText,
      .callout p,
      .completionBox p {
        color: #d8e0ec;
        font-size: 1.05rem;
        line-height: 1.75;
      }

      .panelHeader {
        margin-bottom: 22px;
      }

      .panelHeader h2,
      .completionBox h2 {
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 1.8rem;
        letter-spacing: -0.03em;
      }

      .helperText {
        margin: 22px 0 0;
      }

      .stepList {
        display: grid;
        gap: 14px;
        margin-top: 20px;
      }

      .stepCard {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: flex-start;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        padding: 18px;
      }

      .stepNumber {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 1.1rem;
      }

      .stepCard h3 {
        margin: 0 0 8px;
        color: #ffffff;
        font-size: 1.15rem;
      }

      .stepCard p {
        margin: 0;
        color: #cbd5e1;
        line-height: 1.65;
      }

      .buttonGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin: 24px 0;
      }

      .buttonInfo {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        padding: 18px;
      }

      .buttonInfo h3 {
        margin: 0 0 8px;
        color: #ffffff;
        font-size: 1.1rem;
      }

      .buttonInfo p {
        margin: 0;
        color: #cbd5e1;
        line-height: 1.6;
      }

      .callout {
        border-radius: 18px;
        padding: 18px 20px;
        margin: 24px 0;
      }

      .callout h3 {
        margin: 0 0 8px;
        color: #ffffff;
      }

      .callout p {
        margin: 0;
      }

      .callout.info {
        background: rgba(59, 130, 246, 0.13);
        border: 1px solid rgba(96, 165, 250, 0.3);
      }

      .callout.warning {
        background: rgba(245, 158, 11, 0.14);
        border: 1px solid rgba(251, 191, 36, 0.3);
      }

      .callout.danger {
        background: rgba(239, 68, 68, 0.14);
        border: 1px solid rgba(248, 113, 113, 0.32);
      }

      .completionBox {
        text-align: center;
        background: rgba(6, 40, 27, 0.9);
        border-color: rgba(34, 197, 94, 0.35);
      }

      @media (max-width: 800px) {
        .heroPanel,
        .panel,
        .completionBox {
          padding: 22px;
        }

        .buttonGrid {
          grid-template-columns: 1fr;
        }

        .stepCard {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}