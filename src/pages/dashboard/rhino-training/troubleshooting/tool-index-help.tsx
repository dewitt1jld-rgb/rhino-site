import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const toolIndexImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/tool-index-help/images/tool-index-help-01.png";

export default function ToolIndexHelpPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Tool Index Help"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Troubleshooting
            </p>

            <h1>Tool Index Help</h1>

            <p>
              {isSpanish
                ? "Los valores Tool Index son la manera en que la máquina sabe dónde debe perforar. La pantalla Calibration es la forma más sencilla y segura para el usuario de actualizar estos valores."
                : "Tool Index values are how the machine knows where to drill. The calibration screen is the user-friendly way to update these values."}
            </p>
          </section>

          <section className="callout danger">
            <h3>
              {isSpanish
                ? "Tenga extrema precaución"
                : "Use Extreme Caution"}
            </h3>

            <p>
              {isSpanish
                ? "Lo que se muestra aquí no tiene safety checks, error messages ni botones para regresar. Si escribe un número incorrecto o mueve el axis equivocado, el Drill puede chocar contra la part durante la perforación."
                : "What I am showing here has no safety checks, no error messages, and no back buttons. If you mistype numbers or move the wrong axis, the drill can crash into the part when drilling."}
            </p>

            <p>
              {isSpanish
                ? "Ajuste los Tool Indexes directamente solamente bajo su propio riesgo. Hacer la Calibration utilizando las pantallas normales de Calibration es el método más seguro."
                : "Adjust tool indexes directly only at your own risk. Calibrating through the normal calibration screens is the safer method."}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo encontrar el valor Tool Index"
                  : "Finding the Tool Index Value"}
              </h2>

              <p>
                {isSpanish
                  ? "Vaya a Machine Setup y después abra Axis Parameters."
                  : "Navigate to Machine Setup, then open Axis Parameters."}
              </p>
            </div>

            <img
              src={toolIndexImage}
              alt="Axis parameter tool index screen"
            />

            <p className="helperText">
              {isSpanish ? (
                <>
                  El axis seleccionado se resaltará en verde. En la imagen de
                  arriba está seleccionado <strong>Top Fab X</strong>. El Tool
                  Index actual está configurado en <strong>.404&quot;</strong>.
                </>
              ) : (
                <>
                  The selected axis will highlight green. In the image above,
                  the Top Fab X axis is selected. The current tool index is set
                  to <strong>.404&quot;</strong>.
                </>
              )}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo mueve el Drill este número"
                  : "How the Number Moves the Drill"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Aumentar el valor Tool Index mueve el Drill alejándolo de su Home Position."
                : "Increasing the tool index number moves the drill away from its home position."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Disminuir el valor Tool Index mueve el Drill hacia su Home Position."
                : "Decreasing the tool index number moves the drill toward its home position."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Ejemplo"
                  : "Example"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Digamos que todas las ubicaciones <strong>Top X</strong> están
                  perforando <strong>1/32&quot;</strong> demasiado cerca de la
                  parte trasera de la part. Después de verificar que los datos
                  sean correctos, vaya a <strong>Axis Parameters</strong> y
                  aumente el Tool Index de <strong>Top Drill X</strong> por{" "}
                  <strong>1/32&quot;</strong>.
                </>
              ) : (
                <>
                  Let&apos;s say all top X locations are drilling 1/32&quot; too
                  close to the back of the part. After verifying the data is
                  correct, you would go to Axis Parameters and increase the Top
                  Drill X tool index by 1/32&quot;.
                </>
              )}
            </p>

            <div className="formulaBox">
              .404&quot; + .03125&quot; = .43525&quot;
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  <strong>.43525&quot;</strong> es el valor que ingresaría en el
                  Tool Index del axis <strong>Top Drill X</strong>.
                </>
              ) : (
                <>
                  <strong>.43525&quot;</strong> is the value you would enter
                  into the Top Drill X axis tool index.
                </>
              )}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo se mueve cada Axis"
                  : "How Each Axis Moves"}
              </h2>

              <p>
                {isSpanish
                  ? "Al aumentar el valor ocurre lo siguiente. Disminuirlo hace exactamente lo contrario."
                  : "Increasing does the following. Decreasing does the exact opposite."}
              </p>
            </div>

            <div className="axisGrid">
              <div className="axisCard">
                <h3>Top Drill</h3>

                <p>
                  <strong>X</strong> —{" "}
                  {isSpanish
                    ? "Se aleja de la parte trasera de la part"
                    : "Away from back of part"}
                </p>

                <p>
                  <strong>Y</strong> —{" "}
                  {isSpanish
                    ? "Se acerca al Lead Edge de la part"
                    : "Closer to lead edge of part"}
                </p>

                <p>
                  <strong>Z</strong> —{" "}
                  {isSpanish
                    ? "Entra más profundo en la part"
                    : "Deeper into part"}
                </p>
              </div>

              <div className="axisCard">
                <h3>Bottom Drill</h3>

                <p>
                  <strong>X</strong> —{" "}
                  {isSpanish
                    ? "Se aleja de la parte trasera de la part"
                    : "Away from back of part"}
                </p>

                <p>
                  <strong>Y</strong> —{" "}
                  {isSpanish
                    ? "Se acerca al Lead Edge de la part"
                    : "Closer to lead edge of part"}
                </p>

                <p>
                  <strong>Z</strong> —{" "}
                  {isSpanish
                    ? "Entra más profundo en la part"
                    : "Deeper into part"}
                </p>
              </div>

              <div className="axisCard">
                <h3>Front Drill</h3>

                <p>
                  <strong>X</strong> —{" "}
                  {isSpanish
                    ? "Entra más profundo en la part"
                    : "Deeper into part"}
                </p>

                <p>
                  <strong>Y</strong> —{" "}
                  {isSpanish
                    ? "Se acerca al Lead Edge de la part"
                    : "Closer to lead edge of part"}
                </p>

                <p>
                  <strong>Z</strong> —{" "}
                  {isSpanish
                    ? "Se aleja de la parte inferior de la part"
                    : "Farther away from bottom of part"}
                </p>
              </div>

              <div className="axisCard">
                <h3>Back Drill</h3>

                <p>
                  <strong>X</strong> —{" "}
                  {isSpanish
                    ? "Entra más profundo en la part"
                    : "Deeper into part"}
                </p>

                <p>
                  <strong>Y</strong> —{" "}
                  {isSpanish
                    ? "Se acerca al Lead Edge de la part"
                    : "Closer to lead edge of part"}
                </p>

                <p>
                  <strong>Z</strong> —{" "}
                  {isSpanish
                    ? "Se aleja de la parte inferior de la part"
                    : "Farther away from bottom of part"}
                </p>
              </div>
            </div>
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

          img {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }

          .formulaBox {
            margin: 28px auto;
            max-width: 520px;
            padding: 20px 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.12);
            border: 1px solid rgba(245, 158, 11, 0.34);
            color: #f59e0b;
            font-size: 1.8rem;
            font-weight: 900;
            text-align: center;
          }

          .axisGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .axisCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.24);
          }

          .axisCard h3 {
            margin: 0 0 16px;
            color: #f59e0b;
            font-size: 1.35rem;
          }

          .axisCard p {
            margin: 8px 0;
            color: #d8e0ec;
            line-height: 1.6;
          }

          @media (max-width: 800px) {
            .axisGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}