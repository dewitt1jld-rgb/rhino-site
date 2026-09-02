import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibratePlungerPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup / Calibrate"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Calibrate Plunger</h1>

          <p>
            {isSpanish
              ? "Esta página explica la configuración del Plunger y por qué normalmente debe estar desactivado si la máquina tiene uno."
              : "This page explains the plunger setting and why it should normally be disabled if the machine has one."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Desactive el Plunger"
                : "Disable the Plunger"}
            </h2>

            <p>
              {isSpanish ? (
                <>
                  Si su máquina tiene un Plunger, que es un pequeño bloque
                  cuadrado de <strong>1&quot; x 1&quot;</strong> ubicado justo
                  detrás de la back fence dentro del fab cabinet, desactívelo.
                </>
              ) : (
                <>
                  If your machine has a plunger, which is a small 1&quot; x
                  1&quot; square cube just behind the back fence in the fab
                  cabinet, disable it.
                </>
              )}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-plunger/images/calibrate-plunger-01-main-screen.png"
            alt="System settings screen showing plunger setting"
            tall
          />

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "Configuración recomendada"
                : "Recommended Setting"}
            </h3>

            <p>
              {isSpanish ? (
                <>
                  Desde la página principal de la máquina, vaya a{" "}
                  <strong>System Settings</strong> y desactive el{" "}
                  <strong>Plunger</strong>. Era una buena idea, pero no
                  funcionaba de manera confiable y con frecuencia causaba más
                  problemas de los que solucionaba.
                </>
              ) : (
                <>
                  Navigate to System Settings from the machine home page and turn
                  the plunger off. It was a good idea, but it did not function
                  reliably and often caused more issues than it fixed.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Para qué fue diseñado el Plunger"
                : "What the Plunger Was Designed To Do"}
            </h2>

            <p>
              {isSpanish
                ? "El Plunger fue diseñado para salir antes de realizar una fabrication y medir qué tan lejos estaba la pieza de la back fence."
                : "The plunger was intended to kick out before fabrication and measure how far the part was from the back fence."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Si la pieza estaba arqueada, el Plunger debía detectar esa distancia y desplazar las fabrications según la cantidad medida cada vez que tocaba la pieza."
              : "If the part was bowed, the plunger was supposed to detect that distance and shift the fabrications by the amount it measured each time it tapped the part."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "La idea era buena, pero en la práctica las mediciones no eran lo suficientemente precisas. Como resultado, las fabrications podían desplazarse sin ninguna razón útil."
              : "The idea was good, but the measurements were not accurate enough in practice. As a result, fabrications could be shifted for no useful reason."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Por qué esto es importante"
                : "Why This Matters"}
            </h2>

            <p>
              {isSpanish
                ? "Las mediciones incorrectas del Plunger fueron una de las principales razones por las que los usuarios veían fabrications inconsistentes en la parte superior e inferior de la pieza en la dirección X."
                : "Inaccurate plunger measurements were one of the biggest reasons users saw inconsistent fabrications on the top and bottom of the part in the X direction."}
            </p>
          </div>

          <div className="callout critical">
            <h3>
              {isSpanish
                ? "Importante"
                : "Important"}
            </h3>

            <p>
              {isSpanish
                ? "A menos que Support le indique específicamente lo contrario, mantenga el Plunger desactivado."
                : "Unless support specifically tells you otherwise, leave the plunger disabled."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>
            {isSpanish
              ? "Configuración del Plunger completada"
              : "Plunger Setup Complete"}
          </h3>

          <p>
            {isSpanish ? (
              <>
                Una vez que la opción <strong>Use Plunger</strong> esté
                desactivada y los settings hayan sido actualizados, la
                configuración del Plunger está completa.
              </>
            ) : (
              <>
                Once the Use Plunger option is turned off and the settings are
                updated, the plunger setup is complete.
              </>
            )}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}