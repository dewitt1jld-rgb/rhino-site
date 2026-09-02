import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/axis-parameters/images/axis-parameters-01-main-screen.png",
};

export default function AxisParametersPage() {
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
          <h1>Axis Parameters</h1>

          <p>
            {isSpanish
              ? "Axis Parameters almacena las configuraciones de movimiento y posición de cada motor de la máquina."
              : "Axis Parameters stores the motion and position settings for each machine motor."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla Axis Parameters"
                : "Axis Parameters Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta página contiene configuraciones del motor como velocity, acceleration, torque, tolerance, position limits, calibration values y tool index values."
                : "This page contains motor settings such as velocity, acceleration, torque, tolerance, position limits, calibration values, and tool index values."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Axis Parameters main screen"
            tall
          />

          <div className="callout danger">
            <p>
              {isSpanish
                ? "La mayoría de los valores en esta pantalla no deben modificarse. Normalmente, estos valores están configurados con los valores predeterminados de funcionamiento, y cambiarlos puede provocar movimientos bruscos, un funcionamiento incorrecto o problemas con la máquina."
                : "Most numbers on this screen should not be changed. These values are normally set to default working values and changing them can cause jerky movement, poor motion, or machine issues."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "No modifique acceleration, move velocity, torque limits ni otros valores similares del motor a menos que alguien de DeMichele le indique específicamente qué debe cambiar."
              : "Leave acceleration, move velocity, torque limits, and similar motor values alone unless someone from DeMichele specifically tells you what to change."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "La única excepción"
                : "The One Exception"}
            </h2>

            <p>
              {isSpanish
                ? "La única configuración que puede ajustarse comúnmente en cada motor es el valor Tool Index."
                : "The only setting that may commonly be adjusted on each motor is the Tool Index value."}
            </p>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Si configura <strong>Tool Index</strong> incorrectamente, puede
                  provocar que los drills choquen contra la pieza. No modifique
                  este valor a menos que comprenda completamente cómo funcionan
                  los tool indexes.
                </>
              ) : (
                <>
                  If you set the <strong>Tool Index</strong> incorrectly, you can
                  crash the drills into the part. Do not move this value unless
                  you fully understand how tool indexes work.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Si desea una explicación completa de por qué puede ser necesario ajustar un valor Tool Index, revise el entrenamiento de Tool Index. La forma más segura de ajustar los tool indexes es mediante una drill calibration, ya que este proceso lo guía a través de la calibración y actualiza los valores de Tool Index por usted."
              : "If you want a full breakdown of why you may need to adjust a tool index value, review the Tool Index training. The safest way to adjust tool indexes is through a drill calibration because that process walks you through the calibration and updates the tool index values for you."}
          </p>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Axis Parameters completado"
              : "Axis Parameters Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe que, en general, los valores de Axis Parameters deben dejarse sin modificar y que Tool Index es la principal excepción, pero solamente cuando se maneja con cuidado."
              : "You now know that Axis Parameters should mostly be left alone, and that Tool Index is the main exception — but only when handled carefully."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}