import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibrateRollersPage() {
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
          <h1>Calibrate Rollers</h1>

          <p>
            {isSpanish
              ? "Esta página explica cómo calibrar las posiciones de los Rollers utilizando la pantalla Roller Calibration. La pantalla parece más complicada de lo que realmente es; siga las instrucciones del lado derecho y concéntrese en los pasos necesarios."
              : "This page explains how to calibrate the roller positions using the roller calibration screen. The screen looks more complicated than it is — follow the instructions on the right-hand side and focus on the required steps."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla principal de Calibration"
                : "Main Calibration Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Utilice esta pantalla para configurar los Roller Tool Indexes y las Maximum Roller Positions. Por ahora, ignore los números adicionales y siga la secuencia de pasos en el lado derecho de la ventana."
                : "Use this screen to set the roller tool indexes and maximum roller positions. For now, ignore the extra numbers and follow the step sequence on the right side of the window."}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-rollers/images/calibrate-rollers-01-main-screen.png"
            alt="Calibrate rollers main screen"
            tall
          />

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Esta pantalla dice <strong>Door Depth</strong>, pero está
                  pidiendo la dimensión que la mayoría de las personas
                  considerarían el ancho de la puerta. Debe ser aproximadamente{" "}
                  <strong>36&quot;</strong>.
                </>
              ) : (
                <>
                  This screen says <strong>Door Depth</strong>, but it is asking
                  for the dimension most people would consider the door width. It
                  should be about <strong>36&quot;</strong>.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pasos de Calibration"
                : "Calibration Steps"}
            </h2>

            <p>
              {isSpanish
                ? "Siga estos pasos en orden. El objetivo es enseñarle a la máquina dónde se encuentra cada Roller Position."
                : "Follow these steps in order. The goal is to teach the machine where each roller position is located."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <p>
                {isSpanish ? (
                  <>
                    Busque una door lo suficientemente larga como para quedar
                    frente a los <strong>primeros 3 Rollers</strong>.
                  </>
                ) : (
                  <>
                    Find a door long enough to sit in front of the{" "}
                    <strong>first 3 rollers</strong>.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <p>
                {isSpanish ? (
                  <>
                    Mida el depth de la door e ingrese ese valor en la esquina
                    inferior izquierda donde dice <strong>Door Depth</strong>.
                    Esta es la dimensión que la mayoría de las personas
                    considerarían el ancho. Debe ser aproximadamente{" "}
                    <strong>36&quot;</strong>.
                  </>
                ) : (
                  <>
                    Measure the depth of the door and enter that value in the
                    bottom left corner where it says{" "}
                    <strong>Door Depth</strong>. This is the dimension most
                    people would consider the width. It should be about{" "}
                    <strong>36&quot;</strong>.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <p>
                {isSpanish ? (
                  <>
                    Coloque la door contra la back fence de la máquina y
                    asegúrese de que esté frente a los primeros 3 Rollers. Si el
                    pusher está en el camino, vaya a la pantalla{" "}
                    <strong>Jog Axis</strong> y mueva el pusher fuera del camino.
                  </>
                ) : (
                  <>
                    Place the door against the back fence of the machine and make
                    sure it is in front of the first 3 rollers. If the pusher is
                    in the way, go to the Jog Axis screen and move the pusher out
                    of the way.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <p>
                {isSpanish ? (
                  <>
                    Presione <strong>Find Roller Tool Indexes</strong>. La
                    máquina ejecutará un Roller a la vez y luego mostrará una
                    pantalla con los nuevos valores. Presione{" "}
                    <strong>OK</strong> y continúe con el siguiente paso.
                  </>
                ) : (
                  <>
                    Press <strong>Find Roller Tool Indexes</strong>. The machine
                    will run one roller at a time, then show a screen with the
                    new values. Press OK and move to the next step.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <p>
                {isSpanish ? (
                  <>
                    Una vez retirada la door, presione{" "}
                    <strong>Find Maximums</strong>. Los Rollers se moverán uno a
                    la vez hacia la back fence.
                  </>
                ) : (
                  <>
                    Once the door is removed, press{" "}
                    <strong>Find Maximums</strong>. The rollers will move one at
                    a time toward the back fence.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard criticalStep">
              <div className="stepNumber">6</div>

              <p>
                {isSpanish ? (
                  <>
                    Presione <strong>Update</strong>. Si no presiona Update, no se
                    guardará nada y tendrá que ejecutar toda la prueba nuevamente.
                  </>
                ) : (
                  <>
                    Press <strong>Update</strong>. If you do not update, nothing
                    will save and the entire test will need to be run again.
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
                ? "Referencia de números de Rollers"
                : "Roller Number Reference"}
            </h2>

            <p>
              {isSpanish
                ? "Mirando la máquina desde el frente, identifique los orange motor-driven Rollers desde infeed hacia outfeed."
                : "Looking at the machine from the front, label the orange motor-driven rollers from infeed to outfeed."}
            </p>
          </div>

          <div className="referenceGrid">
            <div className="referenceCard">
              <h3>Roller 1</h3>

              <p>
                {isSpanish
                  ? "Centro de las infeed conveyor tables"
                  : "Middle of the infeed conveyor tables"}
              </p>
            </div>

            <div className="referenceCard">
              <h3>Roller 2</h3>

              <p>
                {isSpanish
                  ? "Lado infeed del Fab Cabinet"
                  : "Infeed side of Fab cabinet"}
              </p>
            </div>

            <div className="referenceCard">
              <h3>Roller 3</h3>

              <p>
                {isSpanish
                  ? "Lado infeed del Saw Cabinet"
                  : "Infeed side of the saw cabinet"}
              </p>
            </div>

            <div className="referenceCard">
              <h3>Roller 4</h3>

              <p>
                {isSpanish
                  ? "Lado outfeed del Saw Cabinet"
                  : "Outfeed side of the saw cabinet"}
              </p>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h3>
            {isSpanish
              ? "Calibration completada"
              : "Calibration Complete"}
          </h3>

          <p>
            {isSpanish ? (
              <>
                Una vez que se hayan encontrado los Roller Indexes y Maximums,
                presione <strong>Update</strong> para guardar los valores. La
                Roller Calibration estará completa una vez que los valores se
                hayan guardado.
              </>
            ) : (
              <>
                Once the roller indexes and maximums are found, press Update to
                save the values. The roller calibration is complete once the
                values are saved.
              </>
            )}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}