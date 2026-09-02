import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const capImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-01-cap.png";

const rollerImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-02-back-fence-roller.png";

const sawSideImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-03-back-fence-roller-saw-side.png";

const leftSideImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/backfence-rollers/images/backfence-rollers-04-back-fence-roller-left-side.png";

export default function BackFenceRollersPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Back Fence Rollers"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Back Fence Rollers</h1>

            <p>
              {isSpanish
                ? "Cada par de semanas, revise que cada Back Fence Roller esté bien apretado y que gire correctamente."
                : "Every couple of weeks, check that each back fence roller is tightened down and rolling correctly."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Qué revisar"
                  : "What to Check"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Los rollers deben girar, pero no deben tener juego. Si puede mover los rollers hacia adelante y hacia atrás, se están aflojando y necesitan apretarse."
                : "The rollers should roll, but they should not wiggle. If you can wiggle the rollers back and forth, they are coming loose and need to be tightened."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si los rollers no giran en absoluto, retírelos de la máquina, quite el bolt y limpie todos los chips del interior del Back Fence Roller. Una vez limpio, vuelva a instalar el roller y debería girar normalmente."
                : "If the rollers do not roll at all, remove them from the machine, remove the bolt, and clean out all chips from inside the back fence roller. Once cleaned, reinstall the roller and it should spin normally."}
            </p>

            <div className="imageGrid">
              <img
                src={capImage}
                alt="Back fence roller cap"
              />

              <img
                src={rollerImage}
                alt="Back fence roller installed"
              />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cómo acceder a los Roller Bolts"
                  : "Accessing the Roller Bolts"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Puede acceder a los bolts dentro de los rollers usando una razor blade o un destornillador pequeño para levantar la cap de cada roller."
                : "You can access the bolts inside the rollers by using a razor blade or small screwdriver to pry off the cap of each roller."}
            </p>

            <div className="callout info">
              <h3>Allen Size</h3>

              <p>
                {isSpanish ? (
                  <>
                    Las máquinas más antiguas normalmente usan un{" "}
                    <strong>6mm Allen</strong>. Las máquinas más nuevas
                    normalmente usan un <strong>8mm Allen</strong>.
                  </>
                ) : (
                  <>
                    Older machines usually use a <strong>6mm Allen</strong>.
                    Newer machines usually use an{" "}
                    <strong>8mm Allen</strong>.
                  </>
                )}
              </p>
            </div>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Dónde revisar"
                  : "Where to Check"}
              </h2>

              <p>
                {isSpanish
                  ? "Los Back Fence Rollers recorren ambos lados de los Fab y Saw Cabinets."
                  : "Back fence rollers run across both sides of the Fab and Saw cabinets."}
              </p>
            </div>

            <div className="imageGrid">
              <img
                src={sawSideImage}
                alt="Back fence rollers on saw side"
              />

              <img
                src={leftSideImage}
                alt="Back fence rollers on left side"
              />
            </div>

            <p className="helperText">
              {isSpanish
                ? "Si tiene una máquina más nueva, los Back Fence Rollers también continúan a lo largo del infeed rail. Estos también deben revisarse cada par de semanas."
                : "If you have a newer machine, the back fence rollers also continue down the infeed rail. These should also be checked every couple of weeks."}
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
            align-items: center;
            margin-top: 28px;
          }

          img {
            display: block;
            width: 100%;
            max-width: 700px;
            height: auto;
            margin: 0 auto;
            border-radius: 14px;
          }

          @media (max-width: 800px) {
            .imageGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}