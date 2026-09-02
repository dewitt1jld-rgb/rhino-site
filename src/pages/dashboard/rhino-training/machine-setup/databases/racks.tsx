import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function RacksPage() {
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

        <section className="heroPanel">
          <h1>Racks</h1>

          <p>
            {isSpanish
              ? "La pantalla Racks se utiliza para organizar cómo su máquina almacena y clasifica tanto el stock material como los drops."
              : "The Racks screen is used to organize how your machine stores and categorizes both stock material and drops."}
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/racks/images/racks-01-main-screen.png"
            alt="Racks main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Esta pantalla normalmente viene configurada con dos racks: uno para stock inventory y otro para drop inventory."
              : "This screen typically comes preset with two racks — one for stock inventory and one for drop inventory."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo funcionan los Racks"
                : "How Racks Work"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "El propósito de esta pantalla es permitirle crear múltiples bins que representen cómo está organizado físicamente su taller."
              : "The purpose of this screen is to allow you to create multiple bins that represent how your shop is physically organized."}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "Puede organizar los racks por acabado, color, tipo de pieza o cualquier sistema que tenga sentido para su flujo de trabajo."
                : "You can organize racks by finish, color, part type, or any system that makes sense for your workflow."}
            </p>
          </div>

          <p>
            {isSpanish
              ? "Por ejemplo, puede crear un rack para material bronze y otro para material anodized. La máquina clasificará los drops en el rack correcto según su configuración."
              : "For example, you might create one rack for bronze material and another for anodized material. The machine will then sort drops into the correct rack based on your setup."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Control del tamaño de los drops"
                : "Drop Size Control"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Otra configuración importante en esta pantalla es el tamaño mínimo de los drops."
              : "Another important setting on this screen is the minimum drop size."}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish
                ? "Cualquier material cortado a una longitud menor que el valor mínimo NO se guardará como drop y, en su lugar, se considerará scrap."
                : "Any material cut shorter than the minimum value will NOT be saved as a drop and will instead be treated as scrap."}
            </p>
          </div>

          <p>
            {isSpanish ? (
              <>
                Este valor se controla mediante la columna{" "}
                <strong>MIN</strong> en la configuración de Racks.
              </>
            ) : (
              <>
                This value is controlled by the <strong>MIN</strong> column in
                the rack settings.
              </>
            )}
          </p>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Racks completado"
              : "Racks Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende cómo los racks organizan el material, cómo estructurar sus bins y cómo el tamaño mínimo de los drops determina qué material se guarda y cuál se descarta."
              : "You now understand how racks organize material, how to structure your bins, and how minimum drop size affects what gets saved or discarded."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}