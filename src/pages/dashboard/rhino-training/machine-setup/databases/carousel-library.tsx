import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CarouselLibraryPage() {
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
          <h1>Carousel Library</h1>

          <p>
            {isSpanish
              ? "La pantalla Carousel Library se utiliza para administrar las ubicaciones de las herramientas en máquinas equipadas con un robotic tool changer."
              : "The Carousel Library is used to manage tool locations for machines equipped with a robotic tool changer."}
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/carousel-library/images/carousel-library-01-main-screen.png"
            alt="Carousel Library screen"
            tall
          />

          <div className="callout warning">
            <p>
              {isSpanish
                ? "Si nunca ha visto esta pantalla, es probable que su máquina NO tenga un robot tool changer. Esta página solamente aplica a máquinas que utilizan un robotic tool system."
                : "If you have never seen this screen, your machine likely does NOT have a robot tool changer. This page only applies to machines that use a robotic tool system."}
            </p>
          </div>

          <div className="callout danger">
            <p>
              {isSpanish
                ? "Si el robot sufre un crash durante la operación, SIEMPRE verifique esta pantalla. Las herramientas pueden moverse accidentalmente y provocar que el robot recoja una herramienta incorrecta."
                : "If the robot crashes during operation, ALWAYS verify this screen. Tools can accidentally be moved and cause incorrect tool pickups."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo funciona"
                : "How It Works"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Esta pantalla mantiene un registro de la ubicación de cada herramienta dentro de la máquina. En la mayoría de los casos, solamente tendrá que configurar esto una vez."
              : "This screen keeps track of where each tool is located inside the machine. In most cases, you will only set this up once."}
          </p>

          <p>
            {isSpanish
              ? "Después de la configuración inicial, el software administra automáticamente las posiciones de las herramientas mientras el robot realiza tool changes."
              : "After setup, the software automatically manages tool positions as the robot performs tool changes."}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "Cada carousel slot (pin) debe tener asignada la herramienta correcta, y cada posición debe estar claramente identificada."
                : "Each carousel slot (pin) must be assigned the correct tool, and each position should be clearly labeled."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Grippers y posiciones"
                : "Grippers & Positions"}
            </h2>
          </div>

          <p>
            {isSpanish ? (
              <>
                La máquina utiliza dos robot grippers: <strong>Red</strong> y{" "}
                <strong>Blue</strong>.
              </>
            ) : (
              <>
                The machine uses two robot grippers: <strong>Red</strong> and{" "}
                <strong>Blue</strong>.
              </>
            )}
          </p>

          <p>
            {isSpanish ? (
              <>
                Cada gripper puede configurarse en una posición{" "}
                <strong>crossed</strong> o <strong>uncrossed</strong>,
                dependiendo de la orientación de las herramientas.
              </>
            ) : (
              <>
                Each gripper can be set to a <strong>crossed</strong> or{" "}
                <strong>uncrossed</strong> position depending on how tools are
                oriented.
              </>
            )}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? 'Utilice los botones "1–10" y "11–20" para girar el carousel y facilitar la visualización y la configuración.'
                : 'Use the "1–10" and "11–20" buttons to rotate the carousel for easier viewing and setup.'}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Reglas importantes"
                : "Important Rules"}
            </h2>
          </div>

          <ul className="list">
            <li>
              {isSpanish
                ? "Puede cargar hasta 19 drill bits al mismo tiempo"
                : "You can load up to 19 drill bits at one time"}
            </li>

            <li>
              {isSpanish
                ? "SIEMPRE debe dejar al menos un slot vacío para que el robot pueda colocar temporalmente una herramienta"
                : "You MUST always leave at least one slot empty for the robot to temporarily place tools"}
            </li>

            <li>
              {isSpanish
                ? "Cada slot debe coincidir con la ubicación física real de la herramienta"
                : "Every slot must match the actual physical tool location"}
            </li>
          </ul>

          <div className="callout warning">
            <p>
              {isSpanish
                ? "Si todos los slots están ocupados, el robot no podrá completar correctamente los tool changes."
                : "If all slots are filled, the robot will not be able to complete tool changes correctly."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Carousel Library completado"
              : "Carousel Library Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende cómo administrar las ubicaciones de las herramientas, configurar los grippers y operar de forma segura el robotic tool changer system."
              : "You now understand how to manage tool locations, configure grippers, and safely operate the robotic tool changer system."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}