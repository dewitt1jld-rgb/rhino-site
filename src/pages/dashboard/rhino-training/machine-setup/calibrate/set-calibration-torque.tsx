import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function SetCalibrationTorquePage() {
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
          <h1>Set Calibration Torque</h1>

          <p>
            {isSpanish
              ? "Esta página explica la pantalla Torque Calibration y cuándo debe utilizarse. En la mayoría de los casos, esta calibration no necesita ejecutarse nuevamente a menos que Support lo recomiende."
              : "This page explains the torque calibration screen and when it should be used. In most cases, this calibration does not need to be rerun unless support recommends it."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla principal de Torque Calibration"
                : "Main Torque Calibration Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla está diseñada para encontrar la cantidad mínima de torque que necesita cada motor para llegar al final de su slide."
                : "This screen is designed to find the minimum amount of torque each motor needs to reach the end of its slide."}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/set-calibration-torque/images/set-calibration-torque-01-main-screen.png"
            alt="Set calibration torque screen"
            tall
          />

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "Úselo solamente cuando sea necesario"
                : "Use Only When Needed"}
            </h3>

            <p>
              {isSpanish
                ? "Normalmente no hay razón para volver a ejecutar esta calibration. Solamente recomendaría usar esta pantalla si DeMichele Group Support indica que sería beneficioso."
                : "There usually is not a reason to rerun this calibration. I would only suggest running this screen if DeMichele Group Support says it would be beneficial."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo funciona esta Calibration"
                : "How This Calibration Works"}
            </h2>

            <p>
              {isSpanish
                ? "La máquina verifica cuánto torque necesita el axis seleccionado para completar un full stroke."
                : "The machine checks how much torque is required for the selected axis to complete a full stroke."}
            </p>
          </div>

          <div className="callout info">
            <p>
              {isSpanish
                ? "Si tiene una máquina de la serie 5000, los torque values normalmente serán mucho más altos que en una máquina estándar."
                : "If you have a 5000 series machine, your torque values will usually be much higher than a standard machine."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <p>
                {isSpanish ? (
                  <>
                    Presione el axis que desea calibrar, como{" "}
                    <strong>Top</strong>, <strong>Bottom</strong> u otro axis
                    disponible.
                  </>
                ) : (
                  <>
                    Press the axis you want to calibrate, such as{" "}
                    <strong>Top</strong>, <strong>Bottom</strong>, or another
                    available axis.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <p>
                {isSpanish
                  ? "La máquina se moverá a una posición donde pueda realizar un full stroke en el Plunge Axis."
                  : "The machine will move to a position where it can perform a full stroke on the plunge axis."}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <p>
                {isSpanish ? (
                  <>
                    Cuando termine la prueba, el software preguntará si el slide
                    llegó al final de su stroke. Presione{" "}
                    <strong>Yes</strong> si lo hizo.
                  </>
                ) : (
                  <>
                    When the test is complete, the software will ask if the slide
                    reached the end of its stroke. Press <strong>Yes</strong> if
                    it did.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Si la prueba falla"
                : "If the Test Fails"}
            </h2>

            <p>
              {isSpanish
                ? "Una prueba de torque fallida debe manejarse con cuidado porque torque values incorrectos pueden hacer que la máquina funcione de manera incorrecta."
                : "A failed torque test should be handled carefully because incorrect torque values can cause the machine to behave incorrectly."}
            </p>
          </div>

          <div className="callout critical">
            <h3>
              {isSpanish
                ? "Llame a Support"
                : "Call Support"}
            </h3>

            <p>
              {isSpanish ? (
                <>
                  Si esta prueba indica que <strong>Find Torque</strong> falló y
                  muestra un número junto con un botón <strong>OK</strong>, llame
                  a Support. Eventualmente puede continuar haciendo clic a través
                  de los errores, pero esto puede configurar el torque value más
                  alto de lo que debería estar.
                </>
              ) : (
                <>
                  If this test says the find torque failed and gives you a number
                  with an OK button, call support. You can eventually click
                  through the errors, but it may set your torque value higher
                  than it should be.
                </>
              )}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>
            {isSpanish
              ? "Calibration completada"
              : "Calibration Complete"}
          </h3>

          <p>
            {isSpanish
              ? "Una vez que los torque values se hayan actualizado correctamente, la Torque Calibration estará completa. Solamente vuelva a ejecutar este proceso si Support lo recomienda."
              : "Once the torque values are updated successfully, the torque calibration is complete. Only rerun this process if support recommends it."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}