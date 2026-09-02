import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibrateMiterCutLengthPage() {
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
          <h1>Calibrate Miter Cut Length</h1>

          <p>
            {isSpanish
              ? "Esta página explica cómo calibrar Miter Cut Length ejecutando cada test tab y midiendo la sección más larga de la pieza cortada."
              : "This page explains how to calibrate miter cut length by running each test tab and measuring the longest section of the cut part."}
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
                ? "Esta pantalla puede tener entre 3 y 4 tabs diferentes dependiendo del modelo de la máquina. Acceda a cada tab desde el dropdown en la parte superior y ejecute las pruebas en orden comenzando con Test 1."
                : "This screen may have 3–4 different tabs depending on the machine model. Access each tab from the dropdown at the top and run the tests in order starting with test 1."}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length/images/calibrate-saw-angle-01-miter-cut-length.png"
            alt="Calibrate miter cut length screen"
            tall
          />

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "Antes de comenzar"
                : "Before You Start"}
            </h3>

            <p>
              {isSpanish
                ? "Asegúrese de que los bevel y miter angles ya estén calibrados antes de ejecutar esta prueba. Si los angles ya están perfectos, no es necesario volver a calibrarlos."
                : "Make sure the bevel and miter angles are already calibrated before running this test. If the angles are already perfect, there is no need to recalibrate them."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "La primera pantalla se explica a continuación, pero las pantallas 2–4 funcionan de la misma manera. Cada pantalla cortará un angle diferente, pero siempre medirá la sección más larga de la pieza cortada. Solamente tendrá 3 tests a menos que su máquina pueda realizar compound cuts."
              : "The first screen is explained below, but screens 2–4 work the same way. Each screen will cut a different angle, but you will always measure the longest section of the cut part. You will only have 3 tests unless your machine can cut compound cuts."}
          </p>
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
                ? "Siga estos pasos cuidadosamente para la primera prueba y luego repita el mismo proceso para los test tabs restantes."
                : "Follow these steps carefully for the first test, then repeat the same process for the remaining test tabs."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <p>
                {isSpanish ? (
                  <>
                    Busque un stock length de{" "}
                    <strong>80&quot; o más largo</strong> e ingrese esa longitud
                    en el campo <strong>Stock Length</strong>. Recomiendo
                    utilizar una pieza de al menos <strong>4&quot; deep</strong>{" "}
                    y <strong>2&quot; tall</strong>. Cualquier pieza más pequeña
                    puede ser difícil de medir.
                  </>
                ) : (
                  <>
                    Find a stock length that is{" "}
                    <strong>80&quot; or longer</strong> and enter that length
                    into the stock length field. I recommend using a part that is
                    at least <strong>4&quot; deep</strong> and{" "}
                    <strong>2&quot; tall</strong>. Anything smaller may be
                    difficult to measure.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <p>
                {isSpanish ? (
                  <>
                    Ingrese <strong>Part Depth</strong> y{" "}
                    <strong>Part Height</strong> en el lado derecho de la
                    pantalla. No es necesario seleccionar una part.
                  </>
                ) : (
                  <>
                    Enter the <strong>part depth</strong> and{" "}
                    <strong>part height</strong> on the right-hand side of the
                    screen. There is no need to select a part.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <p>
                {isSpanish ? (
                  <>
                    Cambie <strong>Cut Length</strong> a{" "}
                    <strong>10&quot;</strong>. Cut lengths entre 5&quot;–7&quot;
                    pueden causar problemas algunas veces, por lo que 10&quot;
                    es un valor más seguro.
                  </>
                ) : (
                  <>
                    Change the cut length to <strong>10&quot;</strong>. Cut
                    lengths between 5&quot;–7&quot; can sometimes cause issues,
                    so 10&quot; is a safer number.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <p>
                {isSpanish ? (
                  <>
                    Configure <strong>Trim</strong> al valor que desee, siendo{" "}
                    <strong>0.5&quot;</strong> el mínimo.
                  </>
                ) : (
                  <>
                    Set the trim to whatever value you want, with{" "}
                    <strong>0.5&quot;</strong> being the minimum.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <p>
                {isSpanish ? (
                  <>
                    Si la máquina <strong>no puede</strong> realizar compound
                    cuts, configure <strong>Feed Rate</strong> en{" "}
                    <strong>1&quot; por segundo</strong>. Si la saw{" "}
                    <strong>sí puede</strong> realizar compound cuts, un Feed
                    Rate de aproximadamente <strong>2&quot; por segundo</strong>{" "}
                    normalmente produce el corte más limpio y el mejor sonido.
                  </>
                ) : (
                  <>
                    If the machine <strong>cannot</strong> do compound cuts, set
                    the feed rate to <strong>1&quot; per second</strong>. If the
                    saw <strong>can</strong> do compound cuts, a feed rate around{" "}
                    <strong>2&quot; per second</strong> usually gives the
                    cleanest cut and sound.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>

              <p>
                {isSpanish ? (
                  <>
                    Presione <strong>Start</strong>. La computadora le pedirá que
                    utilice el auto-loader o que lo omita. A partir de este
                    punto, deje que la máquina ejecute la pieza.
                  </>
                ) : (
                  <>
                    Press <strong>Start</strong>. The computer will prompt you to
                    either use the auto-loader or skip it. From this point, let
                    the machine run the piece.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>

              <p>
                {isSpanish
                  ? "Tome la pieza cortada y mídala con calipers. Puede medir cada borde e ingresar el promedio. Todos los valores deben estar muy cerca entre sí."
                  : "Grab the cut piece of material and measure it with calipers. It is okay to measure each edge and enter the average. All values should be very close to each other."}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">8</div>

              <p>
                {isSpanish ? (
                  <>
                    Presione el botón verde junto a{" "}
                    <strong>Measured Length</strong>. La máquina actualizará el
                    test que está ejecutando actualmente.
                  </>
                ) : (
                  <>
                    Press the green button next to the finished{" "}
                    <strong>measured length</strong>. The machine will update the
                    test you are currently running.
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
                ? "Continúe con los Tests restantes"
                : "Move Through the Remaining Tests"}
            </h2>

            <p>
              {isSpanish
                ? "Después de completar Test 1, continúe con Test 2, luego Test 3 y después Test 4 utilizando el dropdown en la parte superior de la pantalla."
                : "After completing test 1, move to test 2 then 3 then 4 using the dropdown at the top of the screen."}
            </p>
          </div>

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Complete cada test de la pantalla utilizando los mismos pasos
                  anteriores. Cada vez, la pieza debe medir{" "}
                  <strong>10&quot;</strong>. Los angles pueden cambiar, pero el
                  punto más largo de la pieza siempre debe coincidir con la
                  marca de <strong>10&quot;</strong>.
                </>
              ) : (
                <>
                  Work through every test in the screen using the same steps
                  above. Each time, the piece should measure{" "}
                  <strong>10&quot;</strong>. The angles may change, but the
                  longest point of the piece should always be that 10&quot; mark.
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
            {isSpanish ? (
              <>
                Una vez que cada test tab produzca consistentemente una longitud
                máxima de corte de <strong>10&quot;</strong>, la calibration de{" "}
                <strong>Miter Cut Length</strong> está completa.
              </>
            ) : (
              <>
                Once each test tab produces a consistent 10&quot; longest cut
                length, the miter cut length calibration is complete.
              </>
            )}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}