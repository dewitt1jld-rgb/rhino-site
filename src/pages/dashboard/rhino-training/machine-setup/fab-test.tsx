import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/fab-test/images/fab-test-01-main-screen.png",
  pullFromJob:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/fab-test/images/fab-test-02-pull-from-job.png",
};

export default function FabTestPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Fab Test</h1>

          <p>
            {isSpanish
              ? "Fab Test le permite probar fabrications fuera de un job normal. Se utiliza principalmente para revisar drill depths, countersinks, plunges y ciertos movimientos de fabrication antes de ejecutar production material."
              : "Fab Test lets you test fabrications outside of a normal job. It is mainly useful for checking drill depths, countersinks, plunges, and certain fabrication movements before running production material."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla Fab Test"
                : "Fab Test Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla está diseñada para probar fabrications. Puede configurarla manualmente o importar fabrication data desde la pantalla Fab Job."
                : "This screen is designed for testing fabrications. You can manually set it up, or you can import fabrication data from the Fab Job screen."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Fab Test main screen"
            tall
          />

          <div className="callout danger">
            <h3>
              {isSpanish
                ? "Esta pantalla no utiliza el Pusher"
                : "This Screen Does Not Use the Pusher"}
            </h3>

            <p>
              {isSpanish
                ? "Cuando presiona Start en esta pantalla, el drill bajará directamente desde una posición preestablecida. No utilice esta pantalla con finished material. Es únicamente para pruebas."
                : "When you say start on this screen the drill will plunge straight down from a pre-set position. Do not use this screen for finished material. It is for testing only."}
            </p>
          </div>

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "No se utiliza para probar Hardware Placement"
                : "Not for Testing Hardware Placement"}
            </h3>

            <p>
              {isSpanish
                ? "Esta pantalla perfora donde sea que la pieza esté colocada debajo o frente al drill. No mide la pieza ni la mueve a una posición específica. Si necesita probar hardware prep placement, cree un mock-up job."
                : "This screen drills wherever the part is placed under or in front of the drill. It does not measure the piece or move it into position. If you need to test hardware prep placement, create a mock-up job instead."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Fab Test se utiliza mejor para probar depths o diagnosticar por qué un drill bit puede estar rompiéndose durante una fabrication específica."
              : "Fab Test is best used for testing depths or diagnosing why a drill bit may be breaking during a specific fabrication."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Configuración manual"
                : "Manual Setup"}
            </h2>

            <p>
              {isSpanish
                ? "Fab Test puede llenarse manualmente cuando desea probar una fabrication específica sin importar datos desde un job."
                : "Fab Test can be manually filled out when you want to test a specific fabrication without pulling data from a job."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Esta pantalla funciona de manera muy similar a la pantalla Metal Fabrication en Glazier Studio o PartnerPak. Comience indicándole a la máquina qué drill bit está cargado en el top drill."
              : "This screen works much like the metal fabrication screen in Glazier Studio or PartnerPak. Start by telling the machine what drill bit is loaded in the top drill."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Si tiene una máquina de la serie 5000, puede indicarle qué drill bit desea utilizar y el tool changer realizará el tool change automáticamente."
              : "If you have a 5000 series machine, you can tell it which drill bit you want to use and the tool changer will handle the tool change for you."}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "Utilice el dropdown y complete la columna del extremo izquierdo. Cada line item representa una fabrication. Debe proporcionar la ubicación X, Y y Z, además de la depth de cada fabrication."
                : "Use the dropdown and fill out the leftmost column. Each line item is a fabrication. You need to provide the X, Y, and Z location, as well as the depth for every fabrication."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Importar una Fabrication desde un Job"
                : "Pulling a Fabrication from a Job"}
            </h2>

            <p>
              {isSpanish
                ? "Una de las formas más útiles de utilizar Fab Test es importar una fabrication exacta desde un job existente."
                : "One of the most useful ways to use Fab Test is to import an exact fabrication from an existing job."}
            </p>
          </div>

          <TrainingImage
            src={images.pullFromJob}
            alt="Pull fabrication from job screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Dentro de la pantalla Fab Job, puede ver todas las parts y las fabrications asignadas a cada part. Navegue hasta la part que está causando problemas y seleccione la fabrication específica que desea probar."
              : "Inside the Fab Job screen, you can view all parts and the fabrications assigned to each part. Navigate to the part causing issues and select the specific fabrication you want to test."}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Una vez que la fabrication esté resaltada en azul, presione{" "}
                <strong>Run in Fab Test</strong>. Esto importa esa fabrication
                exacta a la pantalla Fab Test para que quede lista para
                ejecutarse.
              </>
            ) : (
              <>
                Once the fabrication is highlighted in blue, press{" "}
                <strong>Run in Fab Test</strong>. This imports that exact
                fabrication into the Fab Test screen so it is ready to run.
              </>
            )}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Después de importar la fabrication, solamente necesita cargar
                  material frente al drill y presionar <strong>Start</strong>.
                </>
              ) : (
                <>
                  All you need to do after importing the fabrication is load
                  material in front of the drill and press{" "}
                  <strong>Start</strong>.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Por qué Fab Test es útil"
                : "Why Fab Test Is Helpful"}
            </h2>

            <p>
              {isSpanish
                ? "Fab Test puede ayudarle a separar problemas de programming de problemas de machine o calibration."
                : "Fab Test can help you separate programming issues from machine or calibration issues."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Por ejemplo, si un countersink no está perforando con suficiente profundidad, lleve esa fabrication a Fab Test y ejecútela sobre una pieza de prueba. Si no está lo suficientemente profunda, aumente lentamente la depth hasta obtener el resultado correcto."
              : "For example, if a countersink is not drilling deep enough, bring that fabrication into Fab Test and run it on a test piece. If it is not deep enough, slowly increase the depth until the result is correct."}
          </p>

          <div className="callout danger">
            <p>
              {isSpanish
                ? "Esto no corrige automáticamente el problema. Solamente le ayuda a identificar qué tipo de problema está enfrentando."
                : "This does not automatically fix the issue. It only helps you identify what kind of issue you are dealing with."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Posible problema de Calibration o Tool Index"
                    : "Possible calibration or tool index issue"}
                </h3>

                <p>
                  {isSpanish
                    ? "Si la starting depth del job es diferente de la depth con la que obtiene un buen resultado en Fab Test, es posible que sea necesario ajustar la drill calibration o Tool Index por esa diferencia."
                    : "If the starting depth from the job is different from the depth you are happy with in Fab Test, the drill calibration or tool index may need to be adjusted by that difference."}
                </p>

                <p>
                  {isSpanish
                    ? "No ajuste los tool indexes directamente desde esta pantalla a menos que comprenda completamente lo que está cambiando."
                    : "Do not adjust tool indexes directly from this screen unless you fully understand what you are changing."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Posible problema de Programming"
                    : "Possible programming issue"}
                </h3>

                <p>
                  {isSpanish
                    ? "Compare los datos de la pantalla Fab Job con la pieza terminada. Si la máquina hizo exactamente lo que indicaba la pantalla, pero el hole todavía no está donde desea, probablemente el problema esté en el software/programming."
                    : "Compare the Fab Job screen data to the finished piece. If the machine did exactly what the screen said, but the hole is still not where you want it, the issue is likely in the software/programming."}
                </p>

                <p>
                  {isSpanish
                    ? "Si la saw o el drill no coincidieron con los datos mostrados en la pantalla, no modifique el software para compensar el problema. El problema está en la máquina y debe corregirse en la máquina."
                    : "If the saw or drill did not match the data on the screen, do not fudge the software to compensate. The issue is on the machine and should be fixed on the machine."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Fab Test completado"
              : "Fab Test Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende para qué se utiliza Fab Test, para qué no debe utilizarse, cómo configurarlo manualmente y cómo importar fabrication data desde un job para realizar pruebas."
              : "You now understand what Fab Test is used for, what it should not be used for, how to manually set it up, and how to import fabrication data from a job for testing."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}