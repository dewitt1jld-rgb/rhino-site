import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/fab-frames/images/fab-frames-01-main-screen.png";

export default function FabFramesPage() {
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

            <h1>Fab Frames</h1>

            <p>
              {isSpanish
                ? "Fab Frames le permite dividir jobs directamente en la máquina sin tener que regresar a Glazier Studio o PartnerPak."
                : "Fab Frames allows you to split up jobs directly on the machine without needing to return to Glazier Studio or PartnerPak."}
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Fab Frames main screen" />

            <p className="helperText">
              {isSpanish
                ? "Siempre que sea posible, recomiendo enviar desde el principio los frames correctos desde Glazier Studio o PartnerPak. Sin embargo, Fab Frames es útil cuando necesita dividir un job en secciones más pequeñas directamente en la máquina."
                : "I highly recommend sending the correct frames from the program in the first place whenever possible. However, Fab Frames is useful when you need to break a job into smaller sections directly at the machine."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo funciona Fab Frames"
                  : "How Fab Frames Works"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Seleccione el job completo en el lado izquierdo de la pantalla y luego elija los frames que desea ejecutar primero."
                : "Select the full job on the left side of the screen, then choose the frames you want to run first."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "La máquina le pedirá que asigne un nombre diferente al nuevo frame package. Una vez que confirme el nuevo nombre, RhinoFab volverá a optimizar los cuts porque ahora está ejecutando menos material que en el job original."
                : "The machine will ask you to give the new frame package a different name. Once you confirm the new name, RhinoFab will re-optimize the cuts because you are now running less material than the original job."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Fab Frames también lleva un registro de las parts que ya fueron cortadas y las elimina del job original para que las mismas parts no se corten dos veces."
                : "Fab Frames also keeps track of which parts were already cut and removes them from the original job so the same parts are not cut twice."}
            </p>
          </section>

          <section className="callout warning">
            <h3>
              {isSpanish
                ? "Flujo de trabajo recomendado"
                : "Recommended Workflow"}
            </h3>

            <p>
              {isSpanish
                ? "Siempre que sea posible, envíe los frame packages separados directamente desde Glazier Studio o PartnerPak. Fab Frames funciona mejor para ajustes rápidos o para dividir jobs directamente en la máquina."
                : "Whenever possible, send separated frame packages directly from Glazier Studio or PartnerPak. Fab Frames is best used for quick adjustments or splitting jobs at the machine."}
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

          .center {
            text-align: center;
          }

          .center img {
            margin: 0 auto;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}