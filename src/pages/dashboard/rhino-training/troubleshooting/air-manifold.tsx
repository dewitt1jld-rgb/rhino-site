import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const oldStyleImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-01-old-style.png";

const newStyleImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-02-new%20manifold.png";

const ioScreenImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/air-manifold/images/air-manifold-03-io-screen.png";

export default function AirManifoldPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Air Manifold"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Troubleshooting
            </p>

            <h1>Air Manifold</h1>

            <p>
              {isSpanish
                ? "El Air Manifold controla las operaciones de la máquina que funcionan con aire, como los clamps y otras funciones neumáticas."
                : "The air manifold controls machine operations that move with air, such as clamps and other pneumatic functions."}
            </p>
          </section>

          <section className="panel">
            <div className="imageGrid">
              <div className="imageBlock">
                <img
                  src={oldStyleImage}
                  alt="Old style air manifold"
                />

                <h2>Old Style</h2>

                <p className="helperText">
                  {isSpanish
                    ? "Estos Air Manifolds de estilo antiguo no tienen regulators integrados. Por eso puede ver los inline regulators a un lado. Cada operación tiene dos regulators: uno controla la velocidad de entrada/bajada y el otro controla la velocidad de salida/subida."
                    : "These older style manifolds do not have built-in regulators. That is why you see the inline regulators off to the side. Each operation has two regulators: one to control the speed in/down and one to control the speed out/up."}
                </p>
              </div>

              <div className="imageBlock">
                <img
                  src={newStyleImage}
                  alt="New style air manifold"
                />

                <h2>New Style</h2>

                <p className="helperText">
                  {isSpanish
                    ? "Estos Air Manifolds de estilo nuevo tienen regulators integrados. Cada valve tiene un tornillo dorado en la parte superior y otro en la parte inferior del block. Cada operación tiene dos regulators: uno controla la velocidad de entrada/bajada y el otro controla la velocidad de salida/subida."
                    : "These newer style manifolds have built-in regulators. Each valve has a gold screw on the top and bottom side of the block. Every operation has two regulators: one to control the speed in/down and one to control the speed out/up."}
                </p>
              </div>
            </div>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo ajustar"
                  : "How to Adjust"}
              </h2>

              <p>
                {isSpanish
                  ? "Comience entrando a Machine Setup y luego abra la pantalla I/O Testing."
                  : "Start by going to Machine Setup and then opening the I/O Testing screen."}
              </p>
            </div>

            <img
              src={ioScreenImage}
              alt="I/O testing screen"
            />

            <p className="helperText">
              {isSpanish
                ? "Cualquier operación que funcione con aire puede activarse desde esta pantalla. Haga clic en uno de los clamp outputs y luego use la barra espaciadora del teclado para activar y liberar ese clamp repetidamente."
                : "Anything that moves off air can be fired from this screen. Click one of the clamp outputs, then use the keyboard space bar to fire and release that clamp repeatedly."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Esto facilita el ajuste porque puede llevar el teclado con usted, hacer pequeños ajustes y probar inmediatamente el movimiento."
                : "This makes regulating easier because you can take the keyboard with you, make small adjustments, and immediately test the movement."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo encontrar la Valve correcta"
                  : "Finding the Correct Valve"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Cuando activa un clamp, tanto los regulators Old Style como New Style tienen una luz que se encenderá en verde o rojo. Use esa luz para identificar exactamente cuál valve necesita ajustar."
                : "When you fire a clamp, both old and new style regulators have a light that will turn green or red. Use that light to identify exactly which valve needs to be adjusted."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo regular la velocidad"
                  : "Regulating the Speed"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Para reducir la velocidad, apriete el tornillo. Para aumentar la velocidad, afloje el tornillo."
                : "To slow the speed down, tighten the screw. To speed it up, loosen the screw."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Un lado del regulator controla la velocidad cuando la operación se activa, y el otro lado controla la velocidad cuando se libera. No todas las máquinas son iguales, así que si un lado no ajusta la dirección que esperaba, cambie al lado opuesto y ajuste ese tornillo."
                : "One side of the regulator controls the speed when the operation is engaged, and the other side controls the speed when it is released. Not all machines are the same, so if one side does not adjust the direction you expected, switch to the opposite side and adjust that screw instead."}
            </p>
          </section>

          <section className="callout warning">
            <h3>
              {isSpanish
                ? "Haga los ajustes lentamente"
                : "Adjust Slowly"}
            </h3>

            <p>
              {isSpanish
                ? "Ajuste los regulators solamente con movimientos pequeños. Si los horizontal clamps se activan con demasiada fuerza y golpean los extremos del clamp shaft, pueden desacoplarse."
                : "Only adjust the regulators in small movements. If the horizontal clamps fire too hard and slam into the ends of the clamp shaft, they can become decoupled."}
            </p>
          </section>

          <section className="completionBox">
            <h2>
              {isSpanish
                ? "Tómelo con calma"
                : "Take It Slow"}
            </h2>

            <p>
              {isSpanish
                ? "Esto puede ser un poco confuso al principio. Haga pequeños ajustes, pruebe el movimiento después de cada cambio y evite hacer giros grandes en los tornillos de los regulators."
                : "This can be confusing at first. Make small adjustments, test after every change, and avoid making big turns on the regulator screws."}
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

          .imageGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .imageBlock {
            text-align: center;
          }

          .imageBlock h2 {
            margin-top: 24px;
          }

          img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 14px;
            margin: 0 auto;
          }

          .center img {
            max-width: 950px;
            margin: 28px auto;
          }

          @media (max-width: 900px) {
            .imageGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}