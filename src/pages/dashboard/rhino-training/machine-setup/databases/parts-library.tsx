import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function PartsLibraryPage() {
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
          <h1>Parts Library</h1>

          <p>
            {isSpanish
              ? "Esta pantalla se utiliza para guardar y administrar los parámetros predeterminados de cada pieza que pasa por la máquina."
              : "This screen is used to store and manage the default parameters for every part that runs through the machine."}
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/parts-library/images/parts-library-01-main-page.png"
            alt="Parts Library main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Esta pantalla está diseñada para guardar los parámetros predeterminados de cada pieza. Esto incluye trims, I-planes, altura y profundidad de la pieza, velocidad de la sierra y tipo de medición."
              : "This screen is designed to save the default parameters of each part. This includes trims, I-planes, part height and depth, saw speed, and measurement type."}
          </p>
        </section>

        {/* DEFAULTS EXPLANATION */}
        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo funcionan los valores predeterminados"
                : "Understanding Defaults"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Estos son solamente los valores predeterminados. Configurar trims o dimensiones aquí no significa que esos valores queden bloqueados permanentemente."
              : "These are just the default values. Setting trims or dimensions here does not lock you into those numbers permanently."}
          </p>

          <p>
            {isSpanish
              ? 'Por ejemplo, si los lead y trail trims están configurados en 1" aquí, pero el material tiene marcas de dado de 1.5", todavía puede ajustar esos valores en la pantalla Fab Job y sobrescribirlos según sea necesario.'
              : 'For example, if your lead and trail trims are set to 1" here but your material has 1.5" die marks, you can still adjust that in the Fab Job screen and override it on the fly.'}
          </p>
        </section>

        {/* GENERAL USAGE */}
        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo se utiliza esta pantalla"
                : "How This Screen Is Used"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Esta pantalla se utiliza cada vez que se introduce una pieza nueva en la máquina. Si acaba de recibir su sierra, probablemente pasará bastante tiempo aquí al principio."
              : "This screen appears whenever a new part is introduced into the machine. If you’ve just received your saw, you’ll likely spend a lot of time here initially."}
          </p>

          <p>
            {isSpanish
              ? "Es extremadamente importante que todos los valores sean correctos, especialmente la altura y la profundidad de la pieza. En máquinas más nuevas, los clamps accionados por motor dependen de estos valores para sujetar correctamente el material."
              : "It’s extremely important that all values are accurate—especially part height and part depth. On newer machines, motor-driven clamps rely on these values to properly hold the material."}
          </p>

          <p>
            {isSpanish
              ? "El área inferior izquierda de esta pantalla permite corregir las imágenes de las piezas. Si una pieza aparece incorrectamente o necesita girarse o reflejarse para que aparezca en el lado correcto de la fence, aquí es donde se corrige."
              : "The bottom left area of this screen allows you to correct part images. If the part is shown incorrectly or needs to be rotated or mirrored so it appears on the correct side of the fence, this is where you fix it."}
          </p>
        </section>

        {/* IMPORTANT NOTE */}
        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Nota importante para RF9600 y RF9700"
              : "Important Note for RF9600 and RF9700"}
          </h2>

          <p>
            {isSpanish
              ? "La profundidad de la pieza es extremadamente importante en estas máquinas. Debido a que la máquina transfiere fabrications al back drill, una profundidad incorrecta desplazará la ubicación de los agujeros en la dirección X."
              : "Part depth is extremely important on these machines. Because the machine flips fabrications to the back drill, incorrect depth will shift hole locations in the X direction."}
          </p>

          <p>
            {isSpanish
              ? "Tenga especial cuidado cuando ejecute pocket filler por primera vez. Las ubicaciones X se generan utilizando la profundidad actual de la pieza, por lo que cualquier cambio requiere volver a hacer merge del trabajo en la pantalla Fab Job."
              : "Be especially careful when running pocket filler for the first time. X locations are generated from the current part depth, so any changes require you to re-merge the job into the Fab Job screen."}
          </p>

          <p>
            {isSpanish ? (
              <>
                En máquinas para puertas, asegúrese de que la opción{" "}
                <strong>"Use Eye to Measure"</strong>{" "}
                esté activada para todos los stock lengths. El photo eye mide la
                longitud del stock, mientras que el measuring cylinder se utiliza
                para las puertas.
              </>
            ) : (
              <>
                On door machines, make sure the{" "}
                <strong>"Use Eye to Measure"</strong>{" "}
                setting is enabled for all stock lengths. The photo eye measures
                stock length, while the measuring cylinder is used for doors.
              </>
            )}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}