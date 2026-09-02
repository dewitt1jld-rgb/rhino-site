import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function EStopsPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / E-Stops"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <div className="heroPanel">
            <div className="heroEyebrow">
              Troubleshooting
            </div>

            <h1>E-Stops</h1>

            <p className="heroText">
              {isSpanish
                ? "Esta página está más enfocada en máquinas antiguas que en máquinas nuevas, porque las máquinas modernas normalmente le indican exactamente cuál E-Stop está activado. Sin embargo, muchos de los conceptos y puntos de falla siguen siendo los mismos."
                : "This page is more dedicated to older machines than newer ones because modern machines will typically tell you exactly which E-stop is triggered. However, many of the concepts and failure points are still the same."}
            </p>
          </div>

          {/* MAIN E-STOPS */}
          <section className="panel">
            <div className="twoImageGrid">
              <div className="imageCard">
                <img
                  src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-01-saw-e-stop.png"
                  alt="Saw E-Stop"
                />

                <h3>Saw E-Stop</h3>
              </div>

              <div className="imageCard">
                <img
                  src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-02-door-e-stop.png"
                  alt="Door E-Stops"
                />

                <h3>Door E-Stops</h3>
              </div>
            </div>

            <div className="infoStack">
              <div className="callout info">
                <p>
                  {isSpanish
                    ? "Cada máquina tiene un E-Stop en cada access door. Las doors del lado Fab normalmente usan yellow magnetic pill sensors, mientras que las doors del lado Saw normalmente usan interlocks negros y rojos más grandes."
                    : "Every machine has an E-stop on each access door. Fab-side doors typically use yellow magnetic pill sensors while saw-side doors usually use larger black/red interlocks."}
                </p>

                <p>
                  {isSpanish
                    ? "Los Saw-Side Interlocks evitan que la door se abra hasta que la saw blade haya dejado de girar completamente."
                    : "The saw-side interlocks prevent the door from opening until the blade has completely stopped rotating."}
                </p>
              </div>

              <div className="callout warning">
                <p>
                  {isSpanish
                    ? "La presión de aire también está conectada al circuito de E-Stop."
                    : "Air pressure is also tied into the E-stop circuit."}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      La mayoría de las máquinas requieren un mínimo de
                      aproximadamente <strong>65 PSI</strong>. Si la presión
                      cae por debajo de ese nivel, la máquina entrará
                      automáticamente en E-Stop.
                    </>
                  ) : (
                    <>
                      Most machines require a minimum of roughly{" "}
                      <strong>65 PSI</strong>. If the pressure drops below that
                      threshold the machine will E-stop automatically.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish
                    ? "En las máquinas más nuevas, normalmente puede monitorear esto con el digital pressure gauge ubicado en el costado de la máquina o cerca del Air Manifold."
                    : "On newer machines you can usually monitor this through the digital pressure gauge located on the side of the machine or near the air manifold."}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Números verdes = buena presión.
                      <br />
                      Números rojos = baja presión.
                    </>
                  ) : (
                    <>
                      Green numbers = good pressure.
                      <br />
                      Red numbers = low pressure.
                    </>
                  )}
                </p>
              </div>

              <div className="callout danger">
                <p>
                  {isSpanish
                    ? "Otros E-Stops incluyen los botones grandes de emergencia rojos que se encuentran en el monitor y en el button box del rail. Si tiene una máquina antigua, no tendrá un E-Stop en el monitor. En su lugar tendrá un Pull Cable E-Stop que debe resetearse presionando el botón azul grande antes de intentar hacer Green Light."
                    : "Other E-stops include the large red emergency stop buttons found on the monitor and on the button box on the rail. If you have an old machine, you will not have an E-stop on the monitor. Instead, you will have a pull cable E-stop that must be reset by pressing the big blue button before trying to Green Light."}
                </p>
              </div>
            </div>
          </section>

          {/* PULL CABLE */}
          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Máquinas antiguas"
                    : "Older Machines"}
                </div>

                <h2>Pull Cable E-Stop</h2>
              </div>
            </div>

            <div className="centerImageWrap">
              <img
                className="mediumImage"
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-03-pull-chord.png"
                alt="Pull Cable E-Stop"
              />
            </div>

            <div className="callout info">
              <p>
                {isSpanish
                  ? "Si tiene problemas con el Pull Cable E-Stop, verifique que el red indicator pin esté centrado dentro del sight glass. Puede ajustar la tensión del pull cable para mover el pin hacia la izquierda o derecha hasta que quede correctamente alineado."
                  : "If you are having issues with the pull cable E-stop, verify that the red indicator pin is centered inside the sight glass. You can tension the pull cable to move the pin left or right until it lines up correctly."}
              </p>

              <p>
                {isSpanish
                  ? "También puede ser útil jalar el cable para activar el E-Stop y después presionar el botón azul. Esta es una buena verificación adicional si ya revisó todos los demás E-Stops y la máquina todavía no hace Green Light."
                  : "Sometimes pulling the cable to trigger the E-stop and then pressing the blue button is a good double check if all the other E-stops have been checked and the machine still will not Green Light."}
              </p>
            </div>
          </section>

          {/* FUN FACT */}
          <section className="panel">
            <div className="panelHeader centerHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Dato curioso"
                    : "Fun Fact"}
                </div>

                <h2>
                  {isSpanish
                    ? "Los Door Sensors son magnets"
                    : "Door Sensors Are Magnets"}
                </h2>
              </div>
            </div>

            <div className="callout warning">
              <p>
                {isSpanish
                  ? "Los yellow pill sensors de las doors literalmente son solamente magnetic switches."
                  : "The yellow pill sensors on the doors are literally just magnetic switches."}
              </p>

              <p>
                {isSpanish
                  ? "Haga con esa información lo que quiera..."
                  : "Do with that information what you will..."}
              </p>
            </div>

            <div className="centerImageWrap">
              <img
                className="smallImage"
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-04-magnets.png"
                alt="Magnets"
              />
            </div>

            <div className="completionBox">
              <h3>
                {isSpanish
                  ? "¡De nada!"
                  : "You're Welcome!!"}
              </h3>
            </div>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 28px;
          }

          .heroText {
            max-width: 950px;
          }

          .twoImageGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 28px;
            margin-top: 8px;
          }

          .imageCard {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }

          .imageCard img {
            width: 100%;
            max-width: 420px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .imageCard h3 {
            color: #f59e0b;
            font-size: 1.9rem;
            text-align: center;
            margin: 0;
          }

          .infoStack {
            display: grid;
            gap: 22px;
            margin-top: 32px;
          }

          .centerImageWrap {
            display: flex;
            justify-content: center;
            margin-top: 24px;
          }

          .mediumImage {
            width: 100%;
            max-width: 700px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .smallImage {
            width: 100%;
            max-width: 660px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .centerHeader {
            text-align: center;
            justify-content: center;
          }

          @media (max-width: 768px) {
            .imageCard h3 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}