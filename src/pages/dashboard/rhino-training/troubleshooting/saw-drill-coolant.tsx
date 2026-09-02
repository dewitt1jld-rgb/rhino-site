import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const leftImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-01-left.png";

const rightImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-02-right.png";

const colorCodeImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-03-color-code.png";

const sawAdjustmentImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-04-saw-adjustment.png";

const toolLibraryImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/saw-drill-coolant/images/saw-drill-coolant-05-tool-library.png";

export default function SawDrillCoolantPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Saw / Drill Coolant"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Troubleshooting
            </p>

            <h1>Saw / Drill Coolant</h1>

            <p>
              {isSpanish
                ? "Cómo entender y ajustar correctamente el sistema de coolant UNIST para los Drills y la Saw."
                : "Understanding and properly adjusting the UNIST coolant system for the drills and saw."}
            </p>
          </section>

          <section className="panel center">
            <div className="imageGrid">
              <img
                src={leftImage}
                alt="UNIST coolant system left side"
              />

              <img
                src={rightImage}
                alt="UNIST coolant system right side"
              />
            </div>

            <p className="helperText">
              {isSpanish
                ? "Este es el sistema de pump UNIST que Rhino utiliza para distribuir cutting fluid a los Drills y la Saw."
                : "This is the UNIST pump system that the Rhino uses to distribute cutting fluid to the drills and saw."}
            </p>

            <h3 className="warningText">
              ONLY USE MULTIDRAW 73
            </h3>
          </section>

          <section className="callout warning">
            <p>
              {isSpanish
                ? "No trabajo para DeMichele Group y puede comprar parts donde quiera, pero esta es una de las cosas que recomiendo fuertemente comprar directamente con ellos."
                : "I do not work for DeMichele Group and you can buy parts wherever you want, but this is one thing I strongly recommend buying from them."}
            </p>

            <p>
              {isSpanish
                ? "Este fluid se evapora limpiamente y no deja residuos en la máquina ni en las parts. Los oils más baratos pueden dañar la máquina con el tiempo."
                : "This fluid evaporates cleanly and does not leave residue on the machine or parts. Cheaper oils can damage the machine over time."}
            </p>
          </section>

          <section className="panel">
            <div className="splitLayout">
              <div>
                <img
                  src={colorCodeImage}
                  alt="Color coded coolant blocks"
                />
              </div>

              <div className="legendBox">
                <h3>
                  {isSpanish
                    ? "Referencia de colores"
                    : "Color Reference"}
                </h3>

                <ul>
                  <li>
                    <span className="legend top"></span>
                    TOP
                  </li>

                  <li>
                    <span className="legend bottom"></span>
                    BOTTOM
                  </li>

                  <li>
                    <span className="legend front"></span>
                    FRONT
                  </li>

                  <li>
                    <span className="legend saw"></span>
                    SAW
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="splitLayout reverse">
              <div>
                <img
                  src={sawAdjustmentImage}
                  alt="Saw oil adjustment dial"
                />
              </div>

              <div className="textColumn">
                <h2>
                  {isSpanish
                    ? "Ajustando Saw Oil"
                    : "Adjusting Saw Oil"}
                </h2>

                <p>
                  {isSpanish
                    ? "Todas las configuraciones de Drill Oil se controlan dentro del software en Tool Library."
                    : "All drill oil settings are regulated in the software under the Tool Library."}
                </p>

                <p>
                  {isSpanish
                    ? "El Saw Oil NO se controla a través del software."
                    : "The saw oil is NOT regulated through the software."}
                </p>

                <p>
                  {isSpanish
                    ? "Para ajustar el Saw Oil, vaya a:"
                    : "To adjust the saw oil, go to:"}
                </p>

                <p className="highlight">
                  Machine Setup → I/O Testing
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Active el output <strong>Oil Saw</strong> y escuche qué tan
                      rápido está disparando el piston.
                    </>
                  ) : (
                    <>
                      Fire the <strong>Oil Saw</strong> output and listen to how
                      fast the piston is firing.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      El Saw Oil debe hacer aproximadamente{" "}
                      <strong>1–2 pulsos por segundo</strong>.
                    </>
                  ) : (
                    <>
                      The saw oil should pulse about 1–2 times per second.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish
                    ? "Si está demasiado lento o demasiado rápido, ajuste el dial marcado en rojo."
                    : "If it is too slow or too fast, adjust the dial circled in red."}
                </p>

                <div className="dangerBox">
                  {isSpanish ? (
                    <>
                      LOS NÚMEROS DEL DIAL NO SIGNIFICAN NADA.
                      <br />
                      Ignore completamente los números y haga el ajuste
                      basándose en el sonido del piston al disparar.
                    </>
                  ) : (
                    <>
                      THE NUMBERS ON THE DIAL DO NOT MEAN ANYTHING.
                      <br />
                      Ignore the numbers completely and adjust based on the
                      sound of the piston firing.
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="panel center">
            <h2>
              {isSpanish
                ? "Regulando Drill Oil"
                : "Regulating Drill Oil"}
            </h2>

            <img
              src={toolLibraryImage}
              alt="Tool library oil PPM settings"
            />

            <div className="oilInfo">
              <p>
                {isSpanish ? (
                  <>
                    Primero vaya al tab <strong>Databases</strong> y después abra
                    la pantalla <strong>Tool Library</strong>.
                  </>
                ) : (
                  <>
                    First navigate to the Databases tab and then open the Tool
                    Library screen.
                  </>
                )}
              </p>

              <p>
                {isSpanish
                  ? "Cada tool puede configurarse con un parámetro de oil diferente."
                  : "Each tool can be set with a different oil parameter."}
              </p>

              <p>
                {isSpanish ? (
                  <>
                    Busque la columna llamada <strong>OIL PPM</strong>.
                  </>
                ) : (
                  <>
                    Look at the column labeled <strong>OIL PPM</strong>.
                  </>
                )}
              </p>

              <p>
                {isSpanish ? (
                  <>
                    PPM significa <strong>Pulses Per Minute</strong>.
                  </>
                ) : (
                  <>
                    PPM stands for <strong>Pulses Per Minute</strong>.
                  </>
                )}
              </p>

              <div className="ppmBox">
                <p>
                  {isSpanish
                    ? "Los Drill Bits normalmente están en el rango de 10–20 PPM."
                    : "Drill bits are usually in the 10–20 PPM range."}
                </p>

                <p>
                  {isSpanish
                    ? "Los End Mills normalmente están en el rango de 40–60 PPM."
                    : "End mills are usually in the 40–60 PPM range."}
                </p>

                <p>
                  {isSpanish
                    ? "Los Countersinks normalmente están en el rango de 20–40 PPM."
                    : "Countersinks are usually in the 20–40 PPM range."}
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

          .imageGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 28px;
          }

          .imageGrid img,
          .panel img {
            width: 100%;
            height: auto;
            border-radius: 14px;
            display: block;
          }

          .warningText {
            margin-top: 28px;
            color: #f59e0b;
            font-size: 32px;
            font-weight: 900;
          }

          .splitLayout {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 36px;
            align-items: center;
          }

          .splitLayout.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .legendBox {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .legendBox h3 {
            margin-bottom: 24px;
          }

          .legendBox ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: grid;
            gap: 24px;
          }

          .legendBox li {
            display: flex;
            align-items: center;
            gap: 18px;
            font-size: 30px;
            font-weight: 900;
            letter-spacing: 0.04em;
          }

          .legend {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: inline-block;
          }

          .legend.top {
            background: #22c55e;
          }

          .legend.bottom {
            background: #ef4444;
          }

          .legend.front {
            background: #facc15;
          }

          .legend.saw {
            background: #38bdf8;
          }

          .textColumn h2 {
            margin-top: 0;
          }

          .highlight {
            color: #f59e0b;
            font-weight: 800;
            font-size: 20px;
          }

          .dangerBox {
            margin-top: 24px;
            padding: 20px;
            border-radius: 16px;
            border: 1px solid rgba(239, 68, 68, 0.35);
            background: rgba(239, 68, 68, 0.08);
            color: #fca5a5;
            font-weight: 800;
            line-height: 1.6;
          }

          .oilInfo {
            margin-top: 28px;
          }

          .ppmBox {
            margin-top: 24px;
            padding: 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          @media (max-width: 900px) {
            .imageGrid,
            .splitLayout,
            .splitLayout.reverse {
              grid-template-columns: 1fr;
            }

            .legendBox li {
              font-size: 22px;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}