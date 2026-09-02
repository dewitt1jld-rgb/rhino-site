import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/drill-collision-detected/images/drill-collision-detected-01-main-screen.png";

const partImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/drill-collision-detected/images/drill-collision-detected-02-part-image.png";

const partsLibrary =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/drill-collision-detected/images/drill-collision-detected-03-parts-library.png";

const iplaneFields =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/drill-collision-detected/images/drill-collision-detected-04-iplane-fields.png";

export default function DrillCollisionsPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Drill Collisions"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Drill Collisions</h1>

            <p>
              {isSpanish
                ? "La máquina realmente no detecta Drill Collisions. Detecta datos faltantes, normalmente relacionados con los valores de I-Plane."
                : "The machine does not actually detect drill collisions. It detects missing data, usually related to I-Plane values."}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Qué significa realmente este error"
                  : "What This Error Really Means"}
              </h2>

              <p>
                {isSpanish
                  ? "Los Drill Collisions normalmente son un problema con los datos de I-Plane más que una colisión real del drill."
                  : "Drill collisions are usually an issue with I-Plane data more than an actual drill collision."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Los I-Planes son la diferencia entre la drilling surface y el overall depth o height de la part."
                : "I-Planes are the difference between the drilling surface and the overall depth or height of the part."}
            </p>

            <img
              src={mainScreen}
              alt="Drill collision detected warning message"
              className="trainingImage smallImage"
            />
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo leer el Error Message"
                  : "Reading the Error Message"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "En la pantalla Load Tool, puede encontrarse con este error. El error le indica dos cosas: cuál drill tiene el problema y dónde está ocurriendo."
                : "In the Load Tool screen, you may come across this error. The error tells you two things: which drill has the issue and where the issue is happening."}
            </p>

            <p className="helperText">
              {isSpanish ? (
                <>
                  En el ejemplo de arriba, el problema está en el{" "}
                  <strong>Front Drill</strong> en una ubicación X de{" "}
                  <strong>5</strong>. Al observar la part, el Part Depth completo
                  es de <strong>6&quot;</strong>, pero el Part Profile solamente
                  mide <strong>5&quot;</strong>. Esa diferencia de{" "}
                  <strong>1&quot;</strong> es lo que llamamos un I-Plane.
                </>
              ) : (
                <>
                  In the example above, the issue is on the front drill at an X
                  location of 5. Looking at the part, the full part depth is
                  6&quot;, but the part profile is only 5&quot;. That 1&quot;
                  difference is what we call an I-Plane.
                </>
              )}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Por qué aparece el Collision"
                  : "Why the Collision Appears"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "La máquina no reconoce los pockets en el material. Considera la part como un rectángulo completo. Por eso, cuando perfora el frente de una pieza de Curtain Wall a cualquiera de los lados del tongue, el drill piensa que va a chocar con material que realmente no está allí."
                : "The machine does not recognize pockets in the material. It thinks of the part as a complete rectangle. So when you drill on the front of a curtain wall piece on either side of the tongue, the drill thinks it will collide with material that is not actually there."}
            </p>

            <img
              src={partImage}
              alt="Part drawing showing missing I-Plane space"
              className="trainingImage"
            />

            <p className="helperText">
              {isSpanish ? (
                <>
                  En este ejemplo, la máquina ve la part con un Part Depth de{" "}
                  <strong>6&quot;</strong>. Cuando perfora cerca de los puntos
                  rojos, no reconoce el espacio abierto a ninguno de los lados
                  del tongue. Por eso, cuando intenta perforar{" "}
                  <strong>1&quot;</strong> dentro de la part en una ubicación X
                  de <strong>5&quot;</strong>, la máquina piensa que el drill va
                  a golpear esa sección faltante de <strong>1&quot;</strong> de
                  material.
                </>
              ) : (
                <>
                  In this example, the machine sees the part as 6&quot; deep.
                  When drilling near the red dots, it does not know about the
                  open space on either side of the tongue. So when you try to
                  drill 1&quot; into the part at an X location of 5&quot;, it
                  thinks the drill will hit the missing 1&quot; of material.
                </>
              )}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo corregir el problema en Parts Library"
                  : "Fixing the Issue in Parts Library"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  La forma de evitar este problema es agregar un I-Plane. Desde
                  la pantalla <strong>Load Tool</strong>, haga clic en el botón{" "}
                  <strong>Parts Library</strong> en la parte inferior de la
                  pantalla.
                </>
              ) : (
                <>
                  The only way to avoid this is by adding an I-Plane. From the
                  Load Tool screen, click the <strong>Parts Library</strong>{" "}
                  button at the bottom of the screen.
                </>
              )}
            </p>

            <img
              src={partsLibrary}
              alt="Parts Library screen showing I-Plane columns"
              className="trainingImage"
            />
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo ingresar el valor de I-Plane"
                  : "Entering the I-Plane Value"}
              </h2>
            </div>

            <img
              src={iplaneFields}
              alt="I-Plane fields in Parts Library"
              className="trainingImage smallImage"
            />

            <p className="helperText">
              {isSpanish
                ? "En Parts Library, agregue un valor de I-Plane en una de las cuatro columnas de I-Plane: F-IPlane, T-IPlane, BT-IPlane o BK-IPlane."
                : "In the Parts Library, add an I-Plane value to one of the four I-Plane columns: F-IPlane, T-IPlane, BT-IPlane, or BK-IPlane."}
            </p>

            <p className="helperText">
              {isSpanish ? (
                <>
                  En este ejemplo estamos perforando con el{" "}
                  <strong>Front Drill</strong>, así que agregamos el valor en{" "}
                  <strong>F-IPlane</strong>. El Part Depth es{" "}
                  <strong>6&quot;</strong> y la drilling surface está a{" "}
                  <strong>5&quot;</strong>. Reste la drilling surface del Part
                  Depth:
                </>
              ) : (
                <>
                  In this example, we are drilling on the front drill, so we add
                  the value to <strong>F-IPlane</strong>. The part depth is
                  6&quot; and the drilling surface is 5&quot;. Take the part
                  depth minus the drilling surface:
                </>
              )}
            </p>

            <div className="formulaBox">
              6 - 5 = 1
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Esto nos da un Front I-Plane de{" "}
                  <strong>1&quot;</strong>.
                </>
              ) : (
                <>
                  That gives us a 1&quot; front I-Plane.
                </>
              )}
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

          .trainingImage {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }

          .smallImage {
            max-width: 650px;
          }

          .formulaBox {
            max-width: 340px;
            margin: 28px auto;
            padding: 18px 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.13);
            border: 1px solid rgba(245, 158, 11, 0.34);
            color: #f59e0b;
            font-size: 2rem;
            font-weight: 900;
            text-align: center;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}