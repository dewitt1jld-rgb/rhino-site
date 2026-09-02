import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function DropInventoryPage() {
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
          <h1>Drop Inventory</h1>

          <p>
            {isSpanish
              ? "Drop Inventory lleva un registro del material sobrante utilizable que puede usarse en trabajos futuros."
              : "Drop Inventory keeps track of usable drop material that can be pulled into future jobs."}
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/drop-inventory/images/drop-inventory-01-main-screen.png"
            alt="Drop Inventory main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "La máquina registra automáticamente los drops y los agrega a esta pantalla. A medida que los drops se utilizan, se eliminan automáticamente de la lista."
              : "The machine automatically tracks drops and adds them to this screen. As drops are used, they are automatically deleted from the list."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "A veces, mientras ejecuta un trabajo, puede ser necesario agregar o eliminar manualmente un drop dependiendo del material que realmente esté disponible."
              : "Sometimes while running a job, you may need to manually add or delete a drop depending on what material is actually available."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Agregar drops"
                : "Adding Drops"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Desde la pantalla pull stock de Fab Job, vaya a Drop Inventory. Verá la misma pantalla que se muestra arriba."
              : "From the Fab Job pull stock screen, go to Drop Inventory. You will see the same screen shown above."}
          </p>

          <p>
            {isSpanish ? (
              <>
                Presione <strong>Add</strong> y la máquina agregará una línea con
                la información correspondiente de la pieza, excepto la longitud.
              </>
            ) : (
              <>
                Press <strong>Add</strong> and the machine will add a line item
                with the relevant part information, except for the length.
              </>
            )}
          </p>

          <p>
            {isSpanish ? (
              <>
                Ingrese la longitud del drop y presione <strong>Update</strong>.
                La máquina regresará a la pantalla anterior, donde ahora debería
                ver el drop agregado a la lista de pull material.
              </>
            ) : (
              <>
                Type in the drop length and press <strong>Update</strong>. The
                machine will return you to the previous screen, where you should
                now see the drop added to the pull material list.
              </>
            )}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "Después de agregar un drop, debe volver a optimizar el trabajo antes de continuar."
                : "After adding a drop, you must re-optimize the job before continuing."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Eliminar drops"
                : "Deleting Drops"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Eliminar funciona de manera opuesta. Si el software le pide encontrar un drop que otra persona tomó, o simplemente no puede encontrarlo, abra Drop Inventory y seleccione ese drop."
              : "Deleting works the opposite way. If the software is asking you to find a drop that someone else took, or you simply cannot find it, open Drop Inventory and select that drop."}
          </p>

          <p>
            {isSpanish ? (
              <>
                Luego presione <strong>Delete</strong> en la pantalla o utilice
                la tecla delete del teclado.
              </>
            ) : (
              <>
                Then either press <strong>Delete</strong> on the screen or use
                the delete key on the keyboard.
              </>
            )}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Tamaño predeterminado de los drops"
                : "Drop Size Default"}
            </h2>
          </div>

          <p>
            {isSpanish ? (
              <>
                El software registra automáticamente los drops. De forma
                predeterminada, normalmente se considera un drop cualquier pieza
                mayor de <strong>60&quot;</strong>.
              </>
            ) : (
              <>
                Drops are automatically tracked by the software. By default, a
                drop is usually anything bigger than <strong>60&quot;</strong>.
              </>
            )}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Para cambiar el tamaño predeterminado de los drops, vaya a la
                  pantalla <strong>Racks</strong> y actualice el valor allí.
                </>
              ) : (
                <>
                  To change the default drop size, go to the{" "}
                  <strong>Racks</strong> screen and update the value there.
                </>
              )}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Drop Inventory completado"
              : "Drop Inventory Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe cómo se registran los drops, cómo agregar drops faltantes, cómo eliminar drops que no están disponibles y dónde cambiar el tamaño predeterminado de los drops."
              : "You now know how drops are tracked, how to add missing drops, how to delete unavailable drops, and where to change the default drop size."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}