import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-01-main-screen.png";

const screwsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-02-screws.png";

const arrowsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/roller-cleat-alignment/images/rolled-cleat-alignment-03-arrows.png";

export default function RollerCleatAlignmentPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Roller Cleat Alignment"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Roller Cleat Alignment</h1>

            <p>
              {isSpanish
                ? "Si los belts del Auto-Loader se están deslizando, la solución normalmente es bastante sencilla. Esta página explica cómo volver a alinear los cleats cuando ya no coinciden correctamente con la part."
                : "If the auto-loader belts are slipping, the fix is usually pretty simple. This page explains how to realign the cleats when they do not line up with the part."}
            </p>
          </section>

          <section className="panel center">
            <img
              src={mainScreen}
              alt="Auto-loader roller cleat alignment"
            />

            <p className="helperText">
              {isSpanish
                ? "Cuando cargue material, revise si algunos cleats están fuera de posición en comparación con la part. Si lo están, siga el proceso de abajo para mover los belts nuevamente a su alineación correcta."
                : "When loading material, check whether a couple of cleats are out of position compared to the part. If they are, follow the process below to shift the belts back into alignment."}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo funcionan los Belts"
                  : "How the Belts Are Driven"}
              </h2>

              <p>
                {isSpanish
                  ? "Todos los belts del Auto-Loader son impulsados por el motor ubicado en la parte trasera del rail."
                  : "All of the auto-loader belts are driven by the motor on the back side of the rail."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "El motor gira los steel shafts conectados a cada belt a través de grandes coupling blocks. Cada coupling block tiene dos bolts, uno en cada lado."
                : "The motor turns the steel shafts connected to each belt through large coupling blocks. Each coupling block has two bolts, one on each side."}
            </p>

            <img
              src={screwsImage}
              alt="Auto-loader coupling block screws"
            />

            <p className="helperText">
              {isSpanish ? (
                <>
                  Cuando se instalan las máquinas, los bolts se colocan lo más
                  rectos y accesibles posible. Si no puede acceder a los screws,
                  pida a otra persona que presione el botón{" "}
                  <strong>ADVANCE</strong> varias veces hasta que los bolts roten
                  a una posición donde pueda alcanzarlos.
                </>
              ) : (
                <>
                  When machines are installed, the bolts are positioned as
                  straight and accessible as possible. If you cannot access the
                  screws, have someone press the <strong>ADVANCE</strong> button
                  a few times until the bolts rotate into view.
                </>
              )}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Desconecte el Coupler correcto"
                  : "Disengage the Correct Coupler"}
              </h2>
            </div>

            <img
              src={arrowsImage}
              alt="Coupler bolts marked with arrows"
            />

            <p className="helperText">
              {isSpanish
                ? "Este motor mueve todo el sistema. Para volver a colocar los belts en su posición correcta, debe desconectar esa sección de belts del motor para que puedan moverse libremente."
                : "This motor moves everything. The goal of shifting the belts back into place is to disengage the belt section from this motor so the belts can move freely."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "La mayoría de las veces, los belts se desplazan por secciones. Por ejemplo, cuatro belts pueden estar perfectamente alineados mientras otros tres están desplazados varias pulgadas. Vaya a la primera table que esté fuera de alineación y trabaje con esos couplers."
                : "Most of the time, the belts shift in sections. For example, four belts may be perfectly aligned while three belts are off by a few inches. Go to the first table that is off and work on those couplers."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cuál Coupler debe aflojar"
                  : "Which Coupler to Loosen"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Viendo esto desde la parte trasera de la máquina, si los belts incorrectos están en el lado izquierdo del motor, afloje el Coupler Block que está a la derecha de los belts que quiere girar."
                : "Viewing this from the back of the machine, if the incorrect belts are on the left side of the motor, loosen the coupler block to the right of the belts you want to rotate."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si los belts incorrectos están en el lado derecho del motor, afloje el Coupler Block que está a la izquierda de los belts que quiere girar."
                : "If the incorrect belts are on the right side of the motor, loosen the coupler block to the left of the belts you want to rotate."}
            </p>
          </section>

          <section className="completionBox">
            <h2>
              {isSpanish
                ? "Mejor método para alinearlos"
                : "Best Alignment Method"}
            </h2>

            <p>
              {isSpanish ? (
                <>
                  La forma más fácil de alinear todos los belts es tomar una
                  extrusion de <strong>289&quot;</strong> y alinearla con los
                  belts que ya están correctos.
                </>
              ) : (
                <>
                  The easiest way to get all the belts aligned is to take a
                  289&quot; extrusion and line it up with the good belts.
                </>
              )}
            </p>

            <p>
              {isSpanish
                ? "Una vez que los belts incorrectos estén desconectados del motor, gírelos hasta que queden alineados con la extrusion. Después apriete nuevamente los bolts para que los belts vuelvan a engancharse con el motor."
                : "Once the incorrect belts are broken free from the motor, rotate them until they align with the extrusion. Then tighten the bolts so the belts re-engage with the motor."}
            </p>
          </section>

          <section className="callout warning">
            <h3>
              {isSpanish
                ? "Máquinas antiguas"
                : "Older Machines"}
            </h3>

            <p>
              {isSpanish
                ? "En máquinas antiguas, estos couplers pueden estar oxidados y quizá necesite aflojar varios bolts antes de que algo comience a moverse. También puede ayudar aplicar un poco de WD-40."
                : "On older machines, these couplers can be rusty and you may have to loosen a few bolts to get anything to move. Using some WD-40 can also help."}
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

          .center img,
          .panel img {
            display: block;
            max-width: 850px;
            width: 100%;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}