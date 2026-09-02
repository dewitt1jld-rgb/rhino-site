import type {
  TrainingLanguage,
} from "@/hooks/useTrainingLanguage";

type TrainingLanguageToggleProps = {
  language:
    TrainingLanguage;

  onChange:
    (
      language:
        TrainingLanguage
    ) => void;
};

export default function TrainingLanguageToggle({
  language,
  onChange,
}: TrainingLanguageToggleProps) {
  return (
    <>
      <div className="languageToggle">
        <button
          type="button"
          onClick={() =>
            onChange(
              "en"
            )
          }
          className={
            language ===
            "en"
              ? "active"
              : ""
          }
        >
          English
        </button>

        <button
          type="button"
          onClick={() =>
            onChange(
              "es"
            )
          }
          className={
            language ===
            "es"
              ? "active"
              : ""
          }
        >
          Español
        </button>
      </div>

      <style jsx>{`
        .languageToggle {
          display: inline-flex;
          align-items: center;
          padding: 4px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          flex-shrink: 0;
        }

        .languageToggle button {
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.72);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;

          transition:
            background 150ms ease,
            color 150ms ease;
        }

        .languageToggle button.active {
          background: #ffffff;
          color: #111827;
        }

        .languageToggle button:hover:not(.active) {
          color: #ffffff;
        }
      `}</style>
    </>
  );
}