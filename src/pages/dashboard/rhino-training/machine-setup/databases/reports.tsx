import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function ReportsPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup / Databases"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Reports</h1>

          <p>
            {isSpanish
              ? "Reports le proporciona un historial detallado de lo que se ha ejecutado en la máquina, incluyendo jobs, parts, fabrications, run time y totals."
              : "Reports gives you detailed history about what has been run on the machine, including jobs, parts, fabrications, run time, and totals."}
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/reports/images/reports-01-main-screen.png"
            alt="Reports main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Esta pantalla proporciona mucha más información de la que la mayoría de los usuarios necesitarán, pero puede ser útil para revisar el historial de producción o verificar lo que la máquina ha ejecutado."
              : "This screen will give you way more information than most users will ever need, but it can be helpful when tracking production history or reviewing what the machine has run."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Qué registra Reports"
                : "What Reports Tracks"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Reports registra el machine run time desde el momento en que comienza un job hasta que el job termina."
              : "Reports keeps track of machine run time from when a job starts until the job ends."}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Reports <strong>no</strong> registra load time ni offload time.
                  Si activa un E-stop en la máquina, el timer también se pausa.
                </>
              ) : (
                <>
                  Reports does <strong>not</strong> track load time or offload
                  time. If you E-stop the machine, the timer pauses as well.
                </>
              )}
            </p>
          </div>

          <p>
            {isSpanish
              ? "Puede organizar los datos de Reports por día, por job o incluso por part. Esto puede ser útil cuando necesita entender qué se ejecutó realmente en la máquina."
              : "You can organize the report data by day, by job, or even by part. This can be useful when trying to understand what was actually run on the machine."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Exportar Reports"
                : "Exporting Reports"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Reports también incluye una opción de auto-export para Excel. Si desea mantener un registro de lo que se ejecutó cada día, puede configurar la máquina para exportar automáticamente un archivo de Excel con los datos de Reports."
              : "Reports also includes an auto-export option for Excel. If you want to keep a record of what was run every day, you can have the machine automatically export an Excel file with the report data."}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "El archivo exportado puede enviarse a una ubicación específica en su server al final de cada día."
                : "The export can be sent to a specified location on your server at the end of each day."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Reports completado"
              : "Reports Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende qué registra la pantalla Reports, qué información no registra, cómo organizar los datos y cómo utilizar la exportación a Excel para mantener registros diarios de producción."
              : "You now understand what the Reports screen tracks, what it does not track, how to organize report data, and how Excel exporting can be used for daily production records."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}