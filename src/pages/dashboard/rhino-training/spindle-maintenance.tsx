import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const videoUrl =
  "https://rhino-training-cdn.b-cdn.net/spindle-maintinance/video/spindle%20maintenance.mp4";

export default function SpindleMaintenancePage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <TrainingPageHeader
            breadcrumb="Rhino Training / All Rhino Machines"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Rhino Training
            </p>

            <h1>Spindle Maintenance</h1>

            <p>
              {isSpanish
                ? "El mantenimiento adecuado del spindle es extremadamente importante para la vida útil del spindle, la retención de tools y el rendimiento general de la máquina."
                : "Proper spindle maintenance is extremely important for spindle life, tool retention, and overall machine performance."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Video de limpieza del Spindle"
                  : "Spindle Cleaning Video"}
              </h2>

              <p>
                {isSpanish
                  ? "Siga el video a continuación para realizar correctamente los procedimientos de limpieza y mantenimiento del spindle."
                  : "Follow along with the walkthrough below for proper spindle cleaning and maintenance procedures."}
              </p>
            </div>

            <div className="videoWrap">
              <iframe
                src={videoUrl}
                title="Spindle Maintenance Video"
                allowFullScreen
              />
            </div>
          </section>

          <section className="callout warning">
            <h3>
              {isSpanish
                ? "Importante"
                : "Important"}
            </h3>

            <p>
              {isSpanish
                ? "Los Spindle Tapers y Tool Holders sucios pueden causar un mal asentamiento de la tool, vibración, desgaste prematuro y daños al spindle."
                : "Dirty spindle tapers and tool holders can cause poor tool seating, vibration, premature wear, and spindle damage."}
            </p>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 24px;
          }

          .eyebrow {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .videoWrap {
            position: relative;
            width: 100%;
            overflow: hidden;
            border-radius: 22px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            background: #000;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          }

          .videoWrap iframe {
            width: 100%;
            aspect-ratio: 16 / 9;
            border: none;
            display: block;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}