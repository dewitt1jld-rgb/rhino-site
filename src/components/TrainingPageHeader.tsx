import TrainingLanguageToggle from "@/components/TrainingLanguageToggle";

import type {
  TrainingLanguage,
} from "@/hooks/useTrainingLanguage";

type TrainingPageHeaderProps = {
  breadcrumb:
    string;

  language:
    TrainingLanguage;

  onLanguageChange:
    (
      language:
        TrainingLanguage
    ) => void;
};

export default function TrainingPageHeader({
  breadcrumb,
  language,
  onLanguageChange,
}: TrainingPageHeaderProps) {
  return (
    <>
      <div className="topRow">
        <div className="breadcrumb">
          {breadcrumb}
        </div>

        <TrainingLanguageToggle
          language={language}
          onChange={onLanguageChange}
        />
      </div>

      <style jsx>{`
        .topRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .breadcrumb {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .topRow {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}