import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-01-main-page.png",
  clampPositions:
    "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-02-clamp-positions.png",
  advancedSettings:
    "https://rhino-training-cdn.b-cdn.net/system-settings/images/system-setings-03-advanced-settings.png",
};

export default function SystemSettingsPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / All Rhino Machines"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>System Settings</h1>

          <p>
            {isSpanish
              ? "System Settings controla valores específicos de la máquina, preferencias del operador, opciones del software, comportamiento de los drops, Clamp Positions y configuraciones avanzadas de la máquina."
              : "System Settings controls machine-specific values, operator preferences, software options, drop behavior, clamp positions, and advanced machine behavior."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>System Settings Screen</h2>

            <p>
              {isSpanish
                ? "La mayoría de los settings de esta pantalla son valores predeterminados o se actualizan posteriormente mediante calibration. Los settings destacados son los principales que normalmente dependen de la preferencia personal o del workflow."
                : "Most settings on this screen are either default values or are updated later by calibration. The highlighted settings are the main ones that usually come down to personal preference or workflow."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="System Settings main screen"
            tall
          />

          <div className="callout warning">
            <p>
              {isSpanish
                ? "No cambie al azar las dimensiones de la máquina ni los valores relacionados con calibration. Muchos de esos números solamente deben cambiar mediante el proceso correcto de calibration o con la guía de Support."
                : "Do not randomly change machine dimensions or calibration-related values. Many of those numbers should only change through the correct calibration process or with support guidance."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Settings comunes"
                : "Common Settings"}
            </h2>

            <p>
              {isSpanish
                ? "Estos son los settings que los operadores tienen más probabilidades de revisar o ajustar."
                : "These are the settings operators are most likely to review or adjust."}
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Company Name</h3>

              <p>
                {isSpanish
                  ? "Este es el nombre de su compañía. Se imprime en los material stickers, así que asegúrese de que esté escrito correctamente."
                  : "This is your company name. It prints on material stickers, so make sure it is spelled correctly."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Pre Drill Offset</h3>

              <p>
                {isSpanish ? (
                  <>
                    Esta es la distancia que el drill se retrae por encima de la
                    part cuando no está perforando. El valor predeterminado
                    normalmente es <strong>.25&quot;</strong> por encima de la
                    part. Si el material está muy arqueado, puede aumentar este
                    valor a <strong>.5&quot;</strong>.
                  </>
                ) : (
                  <>
                    The distance the drill retracts above the part when it is not
                    drilling. The default is usually <strong>.25&quot;</strong>{" "}
                    above the part. If material is badly bowed, you may want to
                    increase this to <strong>.5&quot;</strong>.
                  </>
                )}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Pre Saw Offset</h3>

              <p>
                {isSpanish ? (
                  <>
                    Esta es la distancia que la saw se retrae por encima de la
                    part cuando no está cortando. El valor predeterminado
                    normalmente es <strong>.5&quot;</strong> por encima de la
                    part.
                  </>
                ) : (
                  <>
                    The distance the saw retracts above the part when it is not
                    cutting. The default is usually <strong>.5&quot;</strong>{" "}
                    above the part.
                  </>
                )}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Ask to Eject Drop</h3>

              <p>
                {isSpanish
                  ? "Al final de cada pieza, el software puede preguntarle si desea ejectar el drop. Si quiere que los drops se ejecten automáticamente sin mostrar un prompt, desactive este setting."
                  : "At the end of each piece, the software can ask whether you want to eject the drop. If you want drops to auto-eject without a prompt, turn this setting off."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Cleaning Sequence</h3>

              <p>
                {isSpanish
                  ? "Esta sequence puede activarse si su compressor y las air lines pueden soportarla. Activa los blow-offs con mayor frecuencia durante el job para ayudar a mantener los pads libres de residuos."
                  : "This sequence can be turned on if your compressor and air lines can keep up with it. It fires blow-offs more often during the job to help keep debris off the pads."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Drop Tracking</h3>

              <p>
                {isSpanish
                  ? "Drop Tracking normalmente debe permanecer activado. Si no desea que la máquina etiquete, imprima o rastree drops, desactive este setting."
                  : "Drop tracking should usually stay on. If you do not want the machine to label, print, or track drops, turn this setting off."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Cut Drops First</h3>

              <p>
                {isSpanish
                  ? "El valor predeterminado es utilizar los drops primero porque normalmente son más fáciles de cargar antes de que el autoloader esté lleno. Si desactiva este setting, los drops se cortarán más tarde, pero la optimization permanecerá igual."
                  : "The default is to use drops first because they are usually easier to load before the autoloader is full. Turning this off cuts drops later, but optimization remains the same."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Deplete Drops</h3>

              <p>
                {isSpanish
                  ? "A medida que se utilizan los drops, el software los elimina automáticamente de Drop Library para que no puedan utilizarse nuevamente."
                  : "As drops are used, the software automatically deletes them from the drop library so they cannot be used again."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Remove Part After Each Cut</h3>

              <p>
                {isSpanish ? (
                  <>
                    Normalmente solamente se utiliza cuando el outfeed photo eye
                    está dañado o no funciona correctamente. El software mostrará
                    un prompt después de cada corte y requerirá{" "}
                    <strong>OK</strong> antes de avanzar a la siguiente pieza.
                  </>
                ) : (
                  <>
                    Usually only used when the outfeed photo eye is broken or not
                    working correctly. The software will prompt after every cut
                    and require OK before moving to the next piece.
                  </>
                )}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Turn Off Drills When Cutting</h3>

              <p>
                {isSpanish
                  ? "Se utiliza principalmente cuando el compressor no puede mantener el ritmo de la máquina. Apaga los drills mientras la saw está cortando y puede ayudar a evitar problemas de operación o E-stops."
                  : "Mainly used when the compressor cannot keep up with the machine. It turns the drills off while the saw is cutting and can help prevent running problems or E-stops."}
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Clamp Positions</h2>

            <p>
              {isSpanish
                ? "Clamp Positions controla los valores teóricos de timing y posición de los clamps."
                : "Clamp Positions controls theoretical clamp timing and position values."}
            </p>
          </div>

          <TrainingImage
            src={images.clampPositions}
            alt="Clamp Positions screen"
            tall
          />

          <div className="callout danger">
            <p>
              {isSpanish ? (
                <>
                  No mida físicamente estos clamp values con una cinta métrica.
                  La saw blade se considera el punto de{" "}
                  <strong>0&quot;</strong>, y las Clamp Positions son valores
                  teóricos medidos desde ese punto de referencia.
                </>
              ) : (
                <>
                  Do not actually measure these clamp values with a tape measure.
                  The saw blade is treated as the 0&quot; point, and the clamp
                  positions are theoretical values from that reference point.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish ? (
              <>
                Si un clamp se activa demasiado pronto o demasiado tarde, esta es
                la página que lo controla. Por ejemplo, si el{" "}
                <strong>Vertical Fab-In Clamp</strong> está teóricamente a{" "}
                <strong>43.495&quot;</strong> de la saw y desea que se active un
                poco antes, puede ajustar ligeramente ese valor.
              </>
            ) : (
              <>
                If a clamp is firing too soon or too late, this is the page that
                controls it. For example, if the vertical fab-in clamp is
                theoretically 43.495&quot; from the saw and you want it to fire
                a little sooner, you may adjust the value slightly.
              </>
            )}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Las Clamp Positions normalmente funcionan en incrementos de{" "}
                  <strong>1/2&quot;</strong>. Si necesita ajustar más de
                  aproximadamente <strong>2&quot;</strong>, probablemente hay
                  otro problema y debe contactar a Support.
                </>
              ) : (
                <>
                  Clamp positions typically work in <strong>1/2&quot;</strong>{" "}
                  intervals. If you need to adjust more than about{" "}
                  <strong>2&quot;</strong>, something is probably wrong and
                  support should be contacted.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Advanced Settings</h2>

            <p>
              {isSpanish
                ? "Normalmente no hay muchas cosas que los operadores necesiten cambiar en Advanced Settings, pero algunas opciones pueden ser útiles dependiendo del workflow."
                : "There usually is not much operators need to change in Advanced Settings, but a few options may be useful depending on workflow."}
            </p>
          </div>

          <TrainingImage
            src={images.advancedSettings}
            alt="Advanced Settings screen"
            tall
          />

          <div className="callout info">
            <h3>Add Parts on Merge</h3>

            <p>
              {isSpanish ? (
                <>
                  Un setting útil que puede activar es{" "}
                  <strong>Add Parts on Merge</strong>. Esto permite que el
                  sistema actualice todos los part profiles cuando se agregan
                  nuevas parts mediante Merge, en lugar de actualizarlas una por
                  una a medida que se ejecuta cada pieza.
                </>
              ) : (
                <>
                  One useful setting to enable is{" "}
                  <strong>Add Parts on Merge</strong>. This allows the system to
                  update all part profiles when new parts are merged instead of
                  updating them one at a time as each piece is run.
                </>
              )}
            </p>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish
                ? "Ajuste Advanced Settings solamente si entiende el comportamiento de la máquina que está cambiando. Si tiene dudas, contacte a Support antes de modificar cualquier valor."
                : "Only adjust advanced settings if you understand the machine behavior you are changing. When in doubt, contact support before changing values."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "System Settings completado"
              : "System Settings Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe cuáles System Settings normalmente dependen de preferencias personales, cuáles afectan los drops y el workflow, y qué áreas deben manejarse con cuidado porque influyen directamente en el comportamiento de la máquina."
              : "You now know which system settings are generally preference-based, which settings affect drops and workflow, and which areas should be treated carefully because they influence machine behavior."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}