import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/cut-test/images/cut-test-01-main-screen.png",
};

export default function CutTestPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Cut Test</h1>

          <p>
            {isSpanish
              ? "Cut Test se utiliza para probar un corte específico sin utilizar el pusher. Le permite verificar cut speed, angle accuracy y la configuración antes de ejecutar material real."
              : "Cut Test is used to test a specific cut without using the pusher. It allows you to verify cut speed, angle accuracy, and setup before running real material."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla Cut Test"
                : "Cut Test Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla está diseñada para realizar pruebas, no para producir finished parts ni cortar material a una longitud final."
                : "This screen is designed for testing — not for producing finished parts or cutting material to final length."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Cut Test main screen"
            tall
          />

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Esta pantalla <strong>NO</strong> se utiliza para crear finished
                  parts ni para cortar material a una longitud específica. Se
                  utiliza únicamente para probar cuts.
                </>
              ) : (
                <>
                  This screen is <strong>NOT</strong> for creating finished parts
                  or getting material to a specific length. It is strictly for
                  testing cuts.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Cut Test se utiliza comúnmente para verificar cutting speed o probar compound angles antes de ejecutar un job real."
              : "Cut Test is commonly used to verify cutting speed or test compound angles before running a real job."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo usar Cut Test"
                : "How to Use Cut Test"}
            </h2>

            <p>
              {isSpanish
                ? "Siga estos pasos para realizar un test cut de forma segura."
                : "Follow these steps to safely perform a test cut."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Ingrese las dimensiones de la pieza"
                    : "Enter part dimensions"}
                </h3>

                <p>
                  {isSpanish
                    ? "Ingrese part height y part depth en el lado izquierdo de la pantalla. También ingrese saw height si es necesario."
                    : "Enter the part height and depth on the left side of the screen. Also enter saw height if required."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Configure el angle"
                    : "Set the angle"}
                </h3>

                <p>
                  {isSpanish
                    ? "Configure el angle en la sección superior derecha de la pantalla. Si está utilizando una compound saw, aquí es donde define el cut angle."
                    : "Set the angle in the top-right section of the screen. If using a compound saw, this is where you define the cut angle."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Active los clamps"
                    : "Engage clamps"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Presione los clamp buttons:
                      <br />
                      <strong>H-SAW-IN</strong>, <strong>H-SAW-OUT</strong> y{" "}
                      <strong>V-SAW</strong>
                    </>
                  ) : (
                    <>
                      Press the clamp buttons:
                      <br />
                      <strong>H-SAW-IN</strong>, <strong>H-SAW-OUT</strong>, and{" "}
                      <strong>V-SAW</strong>
                    </>
                  )}
                </p>

                <p>
                  {isSpanish
                    ? "Estos activarán los horizontal y vertical clamps antes de que la saw realice el corte, asegurando que el material quede firmemente sujeto contra la back fence."
                    : "These will fire the horizontal and vertical clamps before the saw cuts, ensuring a solid clamp against the back fence."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Realice el corte"
                    : "Make the cut"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Una vez que todo esté configurado correctamente, presione{" "}
                      <strong>Make Cut</strong> y la saw comenzará el corte.
                    </>
                  ) : (
                    <>
                      Once everything is set correctly, press{" "}
                      <strong>Make Cut</strong> and the saw will begin the cut.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cuándo usar Cut Test"
                : "When to Use Cut Test"}
            </h2>

            <p>
              {isSpanish
                ? "Cut Test se utiliza mejor antes de ejecutar jobs reales para verificar la configuración."
                : "Cut Test is best used before running real jobs to verify setup."}
            </p>
          </div>

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Utilice esta pantalla cuando:
                  <br />• Desee probar cut speed
                  <br />• Necesite verificar un angle
                  <br />• Esté troubleshooting cut quality
                </>
              ) : (
                <>
                  Use this screen when:
                  <br />• You want to test cut speed
                  <br />• You need to verify an angle
                  <br />• You are troubleshooting cut quality
                </>
              )}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Cut Test completado"
              : "Cut Test Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende cómo probar cuts de forma segura, configurar angles, activar clamps y verificar el rendimiento de la máquina antes de ejecutar production material."
              : "You now understand how to safely test cuts, set angles, engage clamps, and verify machine performance before running production material."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}