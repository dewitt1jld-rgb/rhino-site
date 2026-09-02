import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibratePusherPage() {
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
          <h1>Calibrate Pusher</h1>

          <p>
            {isSpanish
              ? "Esta página explica cómo calibrar el Pusher Minimum Dimension y las calibraciones del Measuring Cylinder / Measuring Eye."
              : "This page explains how to calibrate the pusher minimum dimension and the measuring cylinder / measuring eye calibrations."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla principal de Pusher Calibration"
                : "Main Pusher Calibration Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta prueba se utiliza para encontrar el Minimum Dimension del pusher. Este valor ayuda a asegurar que las fabrications queden en la ubicación correcta."
                : "This test is used to find the minimum dimension of the pusher. This value helps make sure fabrications land in the correct spot."}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-pusher/images/calibrate-pusher.png"
            alt="Calibrate pusher main screen"
            tall
          />

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Esta prueba no se realiza con mucha frecuencia, pero es
                  importante cuando se procesan doors o Fab-only jobs. Si la
                  calibración del pusher está desviada{" "}
                  <strong>1/16&quot;</strong>, los door preps y Fab-only preps
                  también pueden quedar desviados <strong>1/16&quot;</strong>.
                </>
              ) : (
                <>
                  This test is not run very often, but it is important when
                  running doors or Fab-only jobs. If the pusher calibration is
                  off by 1/16&quot;, door preps and Fab-only preps can also be
                  off by 1/16&quot;.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pasos para Calibrate MIN/DIM"
                : "Calibrate MIN/DIM Steps"}
            </h2>

            <p>
              {isSpanish
                ? "Siga estos pasos para calibrar el Minimum Dimension del pusher."
                : "Follow these steps to calibrate the pusher minimum dimension."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <p>
                {isSpanish ? (
                  <>
                    Busque cualquier pieza de scrap en su taller. Siempre que
                    tenga más de <strong>24&quot;</strong> de largo, funcionará
                    para esta prueba.
                  </>
                ) : (
                  <>
                    Find any scrap piece in your shop. As long as it is longer
                    than <strong>24&quot;</strong>, it will work for this test.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <p>
                {isSpanish ? (
                  <>
                    En el campo{" "}
                    <strong>Enter expected cut length</strong>, ingrese{" "}
                    <strong>5 inches</strong>.
                  </>
                ) : (
                  <>
                    In the <strong>Enter expected cut length</strong> box, enter{" "}
                    <strong>5 inches</strong>.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <p>
                {isSpanish ? (
                  <>
                    Ingrese el <strong>Part Depth</strong> de la pieza y presione
                    el botón <strong>Position Pusher</strong>.
                  </>
                ) : (
                  <>
                    Enter the part depth of the piece and press the position
                    pusher button.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <p>
                {isSpanish ? (
                  <>
                    Introduzca la pieza desde el lado outfeed de la máquina hasta
                    que quede contra el pusher, luego presione el botón{" "}
                    <strong>S-Out Roller</strong>.
                  </>
                ) : (
                  <>
                    Push the part in from the outfeed side of the machine up
                    against the pusher, then press the{" "}
                    <strong>S-Out Roller</strong> button.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <p>
                {isSpanish ? (
                  <>
                    Asegúrese de que la pieza esté firmemente contra la back
                    fence y contra el pusher, luego presione el botón{" "}
                    <strong>Make Cut</strong>.
                  </>
                ) : (
                  <>
                    Make sure the piece is tight against the back fence and tight
                    against the pusher, then press the{" "}
                    <strong>Make Cut</strong> button.
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>

              <p>
                {isSpanish ? (
                  <>
                    Una vez terminado el corte, retire la pieza y mida la longitud
                    con calipers. Tome una medida en cada esquina y calcule el
                    promedio.
                    <strong className="redText">
                      {" "}
                      Todas las medidas deben estar dentro de .010&quot; del
                      mismo valor.
                    </strong>
                  </>
                ) : (
                  <>
                    Once the cut is finished, remove the part and measure the
                    length with calipers. Take measurements on each corner and
                    average them.
                    <strong className="redText">
                      {" "}
                      They should all be within .010&quot; of the same number.
                    </strong>
                  </>
                )}
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>

              <p>
                {isSpanish ? (
                  <>
                    Ingrese la longitud medida y presione{" "}
                    <strong>Adjust Min/Dim</strong>.
                  </>
                ) : (
                  <>
                    Enter the measured length and press{" "}
                    <strong>Adjust Min/Dim</strong>.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Repita estos pasos hasta que esté dentro de{" "}
                  <strong>+/- .005&quot;</strong> de la medida de{" "}
                  <strong>5&quot;</strong>.
                </>
              ) : (
                <>
                  Repeat the steps until you are within{" "}
                  <strong>+/- .005&quot;</strong> of the 5&quot; mark.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibrate Measuring Cylinder</h2>

            <p>
              {isSpanish ? (
                <>
                  Presione el botón verde <strong>Calibrate</strong>. La máquina
                  realizará la calibration automáticamente y le indicará cuando
                  haya terminado.
                </>
              ) : (
                <>
                  Press the green <strong>Calibrate</strong> button. The machine
                  will handle the calibration automatically and tell you when it
                  is complete.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Cuando presione Calibrate, el pusher entrará y hará contacto con el measuring pin. Dependiendo del modelo de la máquina, el measuring pin puede estar justo dentro de la máquina o justo afuera de la máquina en el lado infeed."
              : "When you press calibrate, the pusher will come in and bump against the measuring pin. Depending on the machine model, the measuring pin may be just inside the machine or just outside the machine on the infeed side."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Calibrate Measuring Eye</h2>

            <p>
              {isSpanish ? (
                <>
                  Presione el botón verde <strong>Calibrate</strong>. La máquina
                  realizará la calibration automáticamente y le indicará cuando
                  haya terminado.
                </>
              ) : (
                <>
                  Press the green <strong>Calibrate</strong> button. The machine
                  will handle the calibration automatically and tell you when it
                  is complete.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish ? (
              <>
                Cuando presione <strong>Calibrate</strong>, el pusher entrará y
                avanzará hasta cruzar el haz rojo del infeed photo eye. Luego
                retrocederá y le dará un nuevo calibration value para el photo
                eye. Presione <strong>OK</strong>, luego regrese a su job o
                ejecute otra calibration.
              </>
            ) : (
              <>
                When you press calibrate, the pusher will come in and move
                forward until it crosses the red beam of the infeed photo eye.
                It will then back up and give you a new calibration value for
                the photo eye. Press OK, then return to your job or run another
                calibration.
              </>
            )}
          </p>
        </section>

        <div className="completionBox">
          <h3>
            {isSpanish
              ? "Pusher Calibration completada"
              : "Pusher Calibration Complete"}
          </h3>

          <p>
            {isSpanish
              ? "Una vez que Min/Dim esté dentro de la tolerancia y la calibration del Measuring Cylinder o Measuring Eye haya terminado correctamente, la Pusher Calibration está completa."
              : "Once the Min/Dim is within tolerance and the measuring cylinder or measuring eye calibration has completed successfully, the pusher calibration is complete."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}