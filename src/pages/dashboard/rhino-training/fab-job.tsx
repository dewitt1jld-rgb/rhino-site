import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-01-main-image.png",
  cutListInfo:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-02-cut-fab-ino-screen.png",
  selectPart:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-03-select-part-screen.png",
  loadTool:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-04-load-tool-screen.png",
  pullList:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-05-pull-list.png",
  finalFabJob:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-06-final-fab-job-screen.png",
  autoloaderPrompt:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-07-load-aut-press-cont.png",
};

export default function FabJobPage() {
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
          <h1>Fab Job</h1>

          <p>
            {isSpanish
              ? "El flujo de trabajo de Fab Job es donde seleccionará un Cut List, revisará la información del job, elegirá la part que desea fabricar, verificará las tools, preparará el stock y finalmente iniciará el job en la máquina."
              : "The Fab Job workflow is where you select a cut list, review the job information, choose the part to fabricate, verify tools, pull stock, and finally start the job on the machine."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fab Job Screen</h2>

            <p>
              {isSpanish
                ? "Esta es la pantalla principal de Fab Job donde seleccionará el job que desea ejecutar. La mayoría de los botones son fáciles de entender, pero los botones de la parte inferior son especialmente importantes."
                : "This is the main Fab Job screen where you select the job you want to run. Most buttons are self explanatory, but the bottom buttons are especially important."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Fab Job main screen"
            tall
          />

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Concéntrese en los tres botones de la parte inferior:{" "}
                  <strong>Merge List</strong>, <strong>Fabs Only</strong> y{" "}
                  <strong>Select List</strong>.
                </>
              ) : (
                <>
                  Focus on the three bottom buttons:{" "}
                  <strong>Merge List</strong>, <strong>Fabs Only</strong>, and{" "}
                  <strong>Select List</strong>.
                </>
              )}
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Merge List</h3>

              <p>
                {isSpanish
                  ? "Aquí es donde puede agregar nuevos jobs que se hayan enviado desde la oficina."
                  : "This is where you merge in new jobs that have been sent down from the office."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Fabs Only</h3>

              <p>
                {isSpanish
                  ? "Esto le permite realizar fabrications en un stick previamente cortado sin realizar ningún corte adicional. Es útil cuando solamente desea ejecutar operaciones de fabrication."
                  : "This allows you to fabricate a pre-cut stick without making any cuts. This is useful when you only want fabrication operations."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Select List</h3>

              <p>
                {isSpanish
                  ? "Después de que el job esté resaltado en azul, presione Select List para pasar a la siguiente pantalla."
                  : "After the job is highlighted in blue, press Select List to move to the next screen."}
              </p>
            </div>
          </div>

          <p className="helperText">
            {isSpanish ? (
              <>
                Si <strong>Door Mode</strong> y <strong>Stick Mode</strong>{" "}
                aparecen en su pantalla, no necesita presionar esos botones para
                ejecutar un door job o stick job. Simplemente seleccione el job y
                presione <strong>Select List</strong>. Si es una door, la máquina
                entrará automáticamente en Door Mode y puede pedirle que suba o
                baje el outfeed gate.
              </>
            ) : (
              <>
                If Door Mode and Stick Mode are shown on your screen, you do not
                need to click those buttons to run a door or stick job. Simply
                choose the job and press <strong>Select List</strong>. If it is a
                door, the machine will automatically enter door mode and may
                prompt you to raise or lower the outfeed gate.
              </>
            )}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  El checkbox <strong>Show Completed Orders</strong> controla si
                  los orders completados aparecen en la lista. Si elimina un job
                  desde esta pantalla, la única forma de recuperarlo es volver a
                  agregarlo utilizando <strong>Merge List</strong>.
                </>
              ) : (
                <>
                  The <strong>Show Completed Orders</strong> checkbox controls
                  whether completed orders appear in the list. If you delete a
                  job from this screen, the only way to get it back is to
                  re-merge it using <strong>Merge List</strong>.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Cut List Info</h2>

            <p>
              {isSpanish
                ? "Esta pantalla puede ser extremadamente útil para diagnosticar problemas, pero la mayoría de las veces puede omitirla antes de ejecutar el job."
                : "This screen can be extremely helpful when diagnosing problems, but most of the time you can skip it before running the job."}
            </p>
          </div>

          <TrainingImage
            src={images.cutListInfo}
            alt="Cut List Info screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                Normalmente no necesita seleccionar nada ni realizar cambios en
                esta pantalla. Simplemente presione <strong>Fab List</strong>{" "}
                para continuar.
              </>
            ) : (
              <>
                Usually, you do not need to select anything or make changes on
                this screen. Simply press <strong>Fab List</strong> to continue.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Después de ejecutar el job, esta pantalla se vuelve más útil. Tome el stick que desea revisar y busque el Stick ID en la etiqueta. Encuentre el mismo Stick ID en la lista y luego haga clic en el nombre de la part para resaltarla en azul. La sección Fab Information cambiará según la part seleccionada."
              : "After the job has been run, this screen becomes more useful. Take the stick in question and look at the stick ID on the label. Find the matching stick ID in the list, then click the part name so it highlights in blue. The Fab Information section changes based on the selected part."}
          </p>

          <div className="callout info">
            <h3>
              {isSpanish
                ? "¿Problema de Programming o problema de Machine?"
                : "Programming Issue or Machine Issue?"}
            </h3>

            <p>
              {isSpanish
                ? "Si la part física coincide con los datos mostrados en la pantalla pero todavía es incorrecta, normalmente el problema está en el programming y debe corregirse en Glazier Studio o PartnerPak. Si la part física no coincide con los datos de la pantalla, normalmente el problema está en la máquina y probablemente está relacionado con calibration."
                : "If the physical part matches the data on the screen but is still incorrect, the issue is usually in the programming and should be fixed in Glazier Studio or PartnerPak. If the physical part does not match the screen data, the issue is usually on the machine and is most likely calibration-related."}
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Run in Fab Test</h3>

              <p>
                {isSpanish
                  ? "Transfiere los datos de fabrication seleccionados a la pantalla Fab Test. Esto es útil para probar un grupo de fabrications en un trash stick antes de ejecutar material terminado."
                  : "Transfers selected fabrication data to the Fab Test screen. This is useful for testing a set of fabrications on a trash stick before running finished material."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Print Tag</h3>

              <p>
                {isSpanish
                  ? "Imprime una etiqueta para el line item seleccionado."
                  : "Prints a label for the selected line item."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Reset All Cut Qtys</h3>

              <p>
                {isSpanish
                  ? "Cambia todas las cut quantities a cero para que toda la lista pueda cortarse nuevamente."
                  : "Sets all cut quantities to zero so the entire list can be recut."}
              </p>
            </div>
          </div>

          <div className="callout danger">
            <p>
              {isSpanish ? (
                <>
                  Para volver a cortar un solo stick, encuentre el Stick ID
                  correcto y cambie el número en la columna{" "}
                  <strong>Cut</strong> de 1 a 0. La saw entonces considerará que
                  ese stick necesita volver a cortarse.
                </>
              ) : (
                <>
                  To recut one stick, find the correct stick ID and change the
                  number in the <strong>Cut</strong> column from 1 to 0. The saw
                  will then think that stick needs to be recut.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Select Part Screen</h2>

            <p>
              {isSpanish
                ? "Esta pantalla es sencilla. Seleccione la part que desea ejecutar y presione Select."
                : "This screen is straightforward. Select the part you want to run and press Select."}
            </p>
          </div>

          <TrainingImage
            src={images.selectPart}
            alt="Select Part screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Puede ejecutar cualquier pieza en el orden que desee. No tiene que ejecutar las parts en el orden mostrado en la lista."
              : "You can run any piece in any order you want. You do not have to run parts in the order shown on the list."}
          </p>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Toggle Switches</h3>

              <p>
                {isSpanish ? (
                  <>
                    Puede activar o desactivar <strong>Use Drops</strong> y{" "}
                    <strong>Deplete Drops</strong>. La mayoría de los usuarios
                    prefieren dejar ambos activados.
                  </>
                ) : (
                  <>
                    You can toggle <strong>Use Drops</strong> and{" "}
                    <strong>Deplete Drops</strong> on or off. Most users prefer
                    to leave both on.
                  </>
                )}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Print Batch Labels</h3>

              <p>
                {isSpanish
                  ? "Imprime todas las etiquetas asociadas con el Part Number seleccionado."
                  : "Prints all labels associated with the selected part number."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Set Priority Frames</h3>

              <p>
                {isSpanish
                  ? "Cambia el orden de optimization para que ciertos frames salgan primero de la máquina."
                  : "Changes the optimization order so specific frames come out of the machine first."}
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Load Tool Screen</h2>

            <p>
              {isSpanish
                ? "Esta pantalla muestra qué tools se necesitan para la part que está a punto de ejecutar."
                : "This screen shows which tools are required for the part you are about to run."}
            </p>
          </div>

          <TrainingImage
            src={images.loadTool}
            alt="Load Tool screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Si la pantalla está vacía, no hay fabrications en esa part. Para continuar después de esta pantalla, debe confirmar cada drill bit que se utilizará."
              : "If the screen is blank, there are no fabrications on that part. To continue past this screen, you must confirm each drill bit that will be used."}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Antes de presionar <strong>OK</strong>, verifique que el drill bit
                indicado para cada drill realmente esté instalado. Si su máquina
                tiene un Tool Changer, no necesita cambiar los bits manualmente.
                Presione <strong>OK</strong> y la máquina le avisará si falta
                alguna tool.
              </>
            ) : (
              <>
                Before pressing OK, verify that the drill bit listed for each
                drill is actually loaded. If your machine has a tool changer,
                you do not need to manually change bits. Press OK, and the
                machine will notify you if any tools are missing.
              </>
            )}
          </p>

          <div className="callout warning">
            <h3>Drill Collisions</h3>

            <p>
              {isSpanish ? (
                <>
                  Puede hacer clic en <strong>Part Library</strong> si necesita
                  cambiar la part antes de ejecutar el job. El problema más común
                  aquí son los Drill Collisions, que normalmente son causados por
                  información faltante en lugar de una colisión física real.
                </>
              ) : (
                <>
                  You can click <strong>Part Library</strong> if you need to
                  change the part before running. The most common issue here is
                  drill collisions, which are usually caused by missing
                  information rather than a true physical collision.
                </>
              )}
            </p>
          </div>

          <div className="callout info">
            <h3>
              {isSpanish
                ? "Máquinas con Tool Changer"
                : "Machines with a Tool Changer"}
            </h3>

            <p>
              {isSpanish ? (
                <>
                  El botón <strong>Tool Rack Library</strong> o{" "}
                  <strong>Carousel Library</strong> le permite agregar o cambiar
                  bits sin salir del job.
                </>
              ) : (
                <>
                  The <strong>Tool Rack Library</strong> or{" "}
                  <strong>Carousel Library</strong> button lets you add or change
                  bits without leaving the job.
                </>
              )}
            </p>
          </div>

          <p className="helperText">
            {isSpanish ? (
              <>
                Una vez que se hayan resuelto todos los Drill Collisions, se
                hayan agregado los I-Planes y se hayan confirmado los drills,
                presione <strong>Next</strong> en la esquina inferior derecha
                para continuar al Pull List.
              </>
            ) : (
              <>
                Once all drill collisions are cleared, I-Planes are added, and
                drills are confirmed, press <strong>Next</strong> in the bottom
                right corner to continue to the pull stock list.
              </>
            )}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Pull List</h2>

            <p>
              {isSpanish
                ? "El Pull List indica cuántos stock lengths y drops necesita para terminar el Cut List seleccionado."
                : "The Pull List tells you how many stock lengths and drops are needed to finish the selected cut list."}
            </p>
          </div>

          <TrainingImage
            src={images.pullList}
            alt="Pull List screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                En este ejemplo, la máquina le indica al operador que debe sacar
                un drop de <strong>89.392&quot;</strong> del Drop Rack y{" "}
                <strong>12</strong> piezas de stock de{" "}
                <strong>289&quot;</strong>.
              </>
            ) : (
              <>
                In this example, the machine is telling the operator to pull an{" "}
                <strong>89.392&quot;</strong> drop from the drop rack and{" "}
                <strong>12</strong> pieces of <strong>289&quot;</strong> stock
                length.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Si no desea utilizar drops, desactívelos en el lado izquierdo. La máquina volverá a optimizar el job y puede indicarle que prepare un stock length diferente."
              : "If you do not want to use drops, toggle them off on the left side. The machine will re-optimize and may tell you to pull a different stock length."}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Si tiene un drop que todavía no ha sido agregado, presione{" "}
                <strong>Drop Library</strong> en el lado izquierdo y agregue el
                drop allí.
              </>
            ) : (
              <>
                If you have a drop that is not already added, press{" "}
                <strong>Drop Library</strong> on the left side and add the drop
                there.
              </>
            )}
          </p>

          <div className="callout info">
            <h3>Lead and Trail Trim</h3>

            <p>
              {isSpanish
                ? "Puede modificar los Lead y Trail Trim Cuts desde esta pantalla. Por ejemplo, si las dye marks están aproximadamente 1.25&quot; dentro del material, configure el trim alrededor de 1.5&quot; para asegurarse de eliminarlas."
                : "You can modify lead and trail trim cuts from this screen. For example, if dye marks are about 1.25&quot; into the material, set the trim to around 1.5&quot; to make sure they are removed."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish ? (
              <>
                Una vez que esté satisfecho con los trims y el stock necesario,
                haga clic en <strong>Next</strong> para pasar a la pantalla final
                donde podrá iniciar el job.
              </>
            ) : (
              <>
                Once you are satisfied with the trims and stock needed, click{" "}
                <strong>Next</strong> to move to the final screen where you can
                start the job.
              </>
            )}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fab Job: Final Screen</h2>

            <p>
              {isSpanish
                ? "Esta es la pantalla final antes de que la máquina comience a ejecutar el job seleccionado."
                : "This is the final screen before the machine begins running the selected job."}
            </p>
          </div>

          <TrainingImage
            src={images.finalFabJob}
            alt="Final Fab Job screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                La función principal de esta pantalla es verificar que todo se vea
                correcto y presionar <strong>Start</strong>. Una vez que presione
                Start, la máquina le pedirá que cargue la pieza utilizando el
                autoloader o le dará la opción de omitirlo.
              </>
            ) : (
              <>
                The main function of this screen is to verify that everything
                looks correct and press <strong>Start</strong>. Once you press
                Start, the machine will prompt you to load the piece with the
                autoloader or give you the option to skip it.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? "En la esquina superior derecha, los Pattern Controls le permiten cambiar de stick a stick y ver los diferentes cut lengths que salen de cada stock length. Si desea comenzar con un pattern específico, navegue hasta ese pattern y presione Start."
              : "In the top right corner, the pattern controls allow you to jump from stick to stick and view the different cut lengths coming out of each stock length. If you want to start on a certain pattern, navigate to it and press Start."}
          </p>

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  El botón <strong>Select New Drop</strong> lo lleva de regreso
                  al Pull List si necesita utilizar un drop diferente o se da
                  cuenta de que no tiene la longitud correcta.
                </>
              ) : (
                <>
                  The <strong>Select New Drop</strong> button takes you back to
                  the Pull List if you need to use a different drop or realize
                  you do not have the correct length.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Autoloader Prompt</h2>

            <p>
              {isSpanish
                ? "Después de presionar Start, la máquina puede preguntarle si desea utilizar el autoloader."
                : "After pressing Start, the machine may ask whether you want to use the autoloader."}
            </p>
          </div>

          <TrainingImage
            src={images.autoloaderPrompt}
            alt="Autoloader prompt screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                Puede presionar <strong>OK</strong> para utilizar el autoloader o
                presionar <strong>Skip</strong> para cargar manualmente el stick
                frente al pusher.
              </>
            ) : (
              <>
                You can press <strong>OK</strong> to use the autoloader or press{" "}
                <strong>Skip</strong> to manually load the stick in front of the
                pusher.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Si el stick mide menos de <strong>72&quot;</strong>, la máquina
                omitirá automáticamente el conveyor y requerirá que cargue la
                pieza manualmente.
              </>
            ) : (
              <>
                If the stick is less than 72&quot;, the machine will
                automatically skip the conveyor and require you to load the
                piece by hand.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Si presiona OK, la máquina se encargará de todo a partir de ese punto. Si presiona Skip, el pusher se moverá hacia atrás y le pedirá que cargue el stick frente al pusher; después podrá continuar cuando esté listo."
              : "If you press OK, the machine handles everything from that point. If you press Skip, the pusher moves back and prompts you to load the stick in front of the pusher, then continue when ready."}
          </p>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Fab Job completado"
              : "Fab Job Complete"}
          </h2>

          <p>
            {isSpanish
              ? "En este punto, el operador ha seleccionado el job, revisado el Cut List, seleccionado la part, confirmado las tools, revisado el stock e iniciado la máquina."
              : "At this point, the operator has selected the job, reviewed the cut list, selected the part, confirmed tools, reviewed stock, and started the machine."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}