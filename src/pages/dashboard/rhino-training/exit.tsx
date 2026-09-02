import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function ExitPage() {
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
            breadcrumb="Rhino Training / Machine Setup"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              {isSpanish
                ? "Todas las máquinas Rhino"
                : "All Rhino Machines"}
            </p>

            <h1>Exit</h1>

            <p>
              {isSpanish
                ? "Haga clic en este botón para salir del software."
                : "Click this button to exit the software."}
            </p>
          </section>

          <section className="callout warning">
            <h3>
              {isSpanish
                ? "Nota"
                : "Note"}
            </h3>

            <p>
              {isSpanish
                ? "Asegúrese de que la máquina haya terminado de funcionar y que no haya operaciones activas en progreso antes de salir del software."
                : "Make sure the machine is finished running and no active operations are in progress before exiting the software."}
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
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}