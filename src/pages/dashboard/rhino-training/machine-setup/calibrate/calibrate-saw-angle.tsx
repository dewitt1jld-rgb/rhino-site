import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibratesawanglePage() {
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

        <section className="content">
          <section className="heroPanel">
            <h1>Calibrate Saw Angle</h1>

            <p>
              {isSpanish
                ? "Esta página explica cómo calibrar el Saw Angle cuando un Miter Cut o Bevel Cut no está saliendo correctamente."
                : "This page explains how to calibrate the saw angle when the miter or bevel cut is not coming out correct."}
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
                  ? "Esta pantalla está diseñada como una segunda opción para alinear correctamente las dos rotaciones de la saw. El concepto es sencillo: al realizar un corte, el resultado debe medir 90 grados, o quedar completamente recto."
                  : "This screen is designed as a second option for getting the two saw rotations straight. The concept is simple: when making a cut, the result should measure 90 degrees, or straight."}
              </p>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-01-main-page.png"
              alt="Calibrate saw cut angle main screen"
              tall
            />

            <p className="helperText">
              {isSpanish
                ? "Recomiendo utilizar primero la pantalla Dial Indicator para alinear la saw y los drills, porque es un método sencillo una vez que entiende cómo funciona. Si el método Dial Indicator todavía resulta confuso, revise la guía de Dial Indicator antes de utilizar esta página."
                : "I recommend using the dial indicator screen first to straighten the saw and drills, because it is a simple method once you understand how it works. If the dial indicator method is still confusing, check the dial indicator guide before using this page."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Entienda Miter vs Bevel"
                  : "Understand Miter vs Bevel"}
              </h2>

              <p>
                {isSpanish ? (
                  <>
                    Comience con <strong>Compound Saw</strong> seleccionado y
                    luego elija el tipo de corte que necesita calibrar.
                  </>
                ) : (
                  <>
                    Start with the compound saw checked, then select whichever
                    type of cut needs to be calibrated.
                  </>
                )}
              </p>
            </div>

            <div className="twoColumn">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-02-diffrent-angles-shown.png"
                alt="Different saw angles shown"
              />

              <div className="callout warning">
                <h3>
                  {isSpanish
                    ? "Importante"
                    : "Important"}
                </h3>

                <p>
                  {isSpanish
                    ? "Esta saw tiene dos rotational axes. Esto significa que puede realizar tanto un Bevel Cut como un Miter Cut con la misma blade, pero si el Miter o Bevel está fuera de alineación, puede afectar el otro corte."
                    : "This saw has two rotational axes. This means you can cut both a bevel and a miter with the same blade, but if either the miter or bevel is out of alignment, it can affect the other cut."}
                </p>

                <p>
                  {isSpanish
                    ? "Recomiendo calibrar tanto el Miter como el Bevel cada vez que sospeche que algo está fuera de alineación."
                    : "I recommend calibrating both the miter and bevel every time you think something is off."}
                </p>
              </div>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-03-miter-vs-bevel.png"
              alt="Miter saw and bevel saw angle information"
              tall
            />
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
                  ? "Siga estos pasos cuidadosamente. Una vez que el primer angle esté correcto, cambie al otro tipo de angle y repita el proceso."
                  : "Follow these steps carefully. Once the first angle is correct, switch to the other angle type and repeat the process."}
              </p>
            </div>

            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>

                <p>
                  {isSpanish ? (
                    <>
                      Comience con <strong>Compound Saw</strong> seleccionado y
                      luego elija el tipo de corte que necesita calibrar.
                    </>
                  ) : (
                    <>
                      Start with <strong>Compound Saw</strong> checked, then
                      choose whichever type of cut needs to be calibrated.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>

                <p>
                  {isSpanish ? (
                    <>
                      En la parte inferior de la pantalla, ingrese los valores
                      correctos de <strong>Part Height</strong> y{" "}
                      <strong>Part Depth</strong>.
                    </>
                  ) : (
                    <>
                      At the bottom of the screen, enter the correct{" "}
                      <strong>part height</strong> and{" "}
                      <strong>part depth</strong>.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>

                <p>
                  {isSpanish ? (
                    <>
                      Ingrese el angle del corte que desea realizar. Recomiendo
                      utilizar <strong>45 grados</strong> tanto para Miter como
                      para Bevel.
                    </>
                  ) : (
                    <>
                      Enter the angle of the cut you want to make. I recommend
                      using <strong>45 degrees</strong> for both miter and bevel.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>

                <p>
                  {isSpanish
                    ? "Empuje una pieza completamente a través del Saw Cabinet para que los cuatro Saw Clamps estén sobre la pieza. Debe haber dos Vertical Clamps y dos Horizontal Clamps."
                    : "Push a piece all the way through the saw cabinet so all four saw clamps are on the piece. There should be two vertical clamps and two horizontal clamps."}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>

                <p>
                  {isSpanish ? (
                    <>
                      Presione el botón que dice{" "}
                      <strong>Make Cut At</strong>.
                    </>
                  ) : (
                    <>
                      Press the button that says{" "}
                      <strong>Make Cut At</strong>.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>

                <p>
                  {isSpanish
                    ? "Retire la pieza y mida el angle correspondiente."
                    : "Remove the piece and measure the correct angle."}
                </p>
              </div>

              <div className="placeholderGrid">
                <div className="placeholderImage">
                  <span>
                    {isSpanish
                      ? "Placeholder para imagen de medición Miter"
                      : "Placeholder for miter measurement image"}
                  </span>
                </div>

                <div className="placeholderImage">
                  <span>
                    {isSpanish
                      ? "Placeholder para imagen de medición Bevel"
                      : "Placeholder for bevel measurement image"}
                  </span>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>

                <p>
                  {isSpanish ? (
                    <>
                      Ingrese el angle medido y presione{" "}
                      <strong>Adjust Origin</strong>.
                    </>
                  ) : (
                    <>
                      Enter the measured angle and press{" "}
                      <strong>Adjust Origin</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="completionBox">
              <h3>
                {isSpanish
                  ? "Calibration completada"
                  : "Calibration Complete"}
              </h3>

              <p>
                {isSpanish
                  ? "Repita los pasos de esta pantalla hasta que esté satisfecho con el corte. Una vez que el corte sea correcto, cambie al otro tipo de angle y repita el mismo proceso."
                  : "Repeat the screen steps until you are satisfied with the cut. Once the cut is correct, switch to the other angle type and repeat the same process."}
              </p>
            </div>
          </section>
        </section>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}