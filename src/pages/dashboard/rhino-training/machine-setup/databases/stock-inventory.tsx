import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function StockInventoryPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup / Databases"
          language={language}
          onLanguageChange={changeLanguage}
        />

        {/* HERO */}
        <section className="heroPanel">
          <h1>Stock Inventory</h1>

          <p>
            {isSpanish
              ? "Esta pantalla se utiliza para administrar los stock lengths y los material finishes que utilizará la máquina."
              : "This screen is used to manage stock lengths and material finishes that the machine will pull from."}
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/stock-inventory/images/stock-inventory-01-main-screen.png"
            alt="Stock Inventory main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? 'Aquí es donde lleva un registro de los stock lengths y finishes que desea utilizar. La mayoría de las veces, simplemente utilizará un stock length estándar de 289" con cantidad ilimitada.'
              : 'This is where you keep track of what stock lengths and finishes you want to use. Most of the time, you will simply run a standard 289" stock length with unlimited quantity.'}
          </p>
        </section>

        {/* WHEN TO USE */}
        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cuándo necesita usar esta pantalla"
                : "When You Actually Need This"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "En la mayoría de los casos, no necesitará hacer ningún ajuste en esta pantalla."
              : "In most cases, you won’t need to adjust this screen at all."}
          </p>

          <p>
            {isSpanish
              ? 'Solo necesitará hacer cambios cuando compre una cantidad específica de material con custom lengths. Cuando se agregan aquí, la máquina dará prioridad a esos custom lengths antes de volver al stock estándar de 289".'
              : 'The only time you’ll need to make changes is when you purchase a specific quantity of custom-length material. When added here, the machine will prioritize those custom lengths before defaulting back to standard 289" stock.'}
          </p>
        </section>

        {/* AUTOMATIC BEHAVIOR */}
        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Comportamiento automático"
              : "Automatic Behavior"}
          </h2>

          <p>
            {isSpanish
              ? "Esta pantalla generará automáticamente nuevos line items a medida que ejecute nuevas parts."
              : "This screen will automatically generate new line items as you run new parts."}
          </p>

          <p>
            {isSpanish ? (
              <>
                Su único trabajo es verificar que el stock length sea correcto
                (normalmente <strong>289&quot;</strong>) y presionar{" "}
                <strong>Update</strong> si es necesario.
              </>
            ) : (
              <>
                Your only job is to verify that the stock length is correct
                (typically <strong>289&quot;</strong>) and press{" "}
                <strong>Update</strong> if needed.
              </>
            )}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}