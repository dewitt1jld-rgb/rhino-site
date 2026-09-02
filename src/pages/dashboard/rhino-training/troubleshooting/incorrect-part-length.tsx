import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const systemSettingsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-01-system-settings.png";

const orangeRollerImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-02-orange-roller.png";

export default function IncorrectPartLengthPage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Incorrect Part Length"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Troubleshooting
            </p>

            <h1>Incorrect Part Lengths</h1>

            <p>
              {isSpanish
                ? "Los Part Lengths incorrectos pueden ser causados por dos cosas en máquinas sin Compound Saw y por tres cosas en máquinas con Compound Saw. Vamos a revisar cada una."
                : "Incorrect part lengths can be caused by two things on non-compound saws and three things on compound saws. Let's break them down."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                Non-5000 Series / No Compound Cuts
              </h2>

              <p>
                {isSpanish
                  ? "Lo primero que debe entender es Saw Kerf. Saw Kerf es el grosor del corte que crea la saw blade cuando corta una part."
                  : "The first thing to understand is saw kerf. Saw kerf is the thickness of the cut the saw blade creates when cutting through a part."}
              </p>
            </div>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Antes de ajustar Saw Kerf"
                  : "Before Adjusting Saw Kerf"}
              </h3>

              <p>
                {isSpanish ? (
                  <>
                    Si sus cut sizes están constantemente incorrectos por más de{" "}
                    <strong>1/16&quot;</strong>, todavía no ajuste Saw Kerf.
                    Probablemente tiene otro problema que debe corregirse
                    primero.
                  </>
                ) : (
                  <>
                    If your cut sizes are consistently off by more than
                    1/16&quot;, do not adjust your kerf yet. You likely have
                    another issue that should be fixed first.
                  </>
                )}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "La mejor manera de medir Saw Kerf es cortar solamente hasta la mitad de una part y medir el espacio creado por la saw blade. Saw Blade Kerf y Saw Blade Thickness no son exactamente iguales. Serán similares, pero la vibración de la blade puede hacer que sean ligeramente diferentes."
                : "The best way to measure saw kerf is to cut halfway through a part and measure the gap created by the saw blade. Saw blade kerf and saw blade thickness are not exactly the same. They will be close, but vibration in the blade can make them slightly different."}
            </p>

            <p className="helperText">
              {isSpanish ? (
                <>
                  En RhinoFab, Saw Kerf funciona como un pequeño factor de
                  ajuste para aumentar o disminuir el Finished Stick Length. Si
                  cada part está constantemente <strong>1/32&quot;</strong>{" "}
                  corta, aumentar Saw Kerf aumentará todas las parts por esa
                  misma cantidad.
                </>
              ) : (
                <>
                  In RhinoFab, saw kerf acts like a fudge factor to increase or
                  decrease the finished stick length. If every part is
                  consistently short by 1/32&quot;, increasing the saw kerf
                  will increase all of the parts by that same amount.
                </>
              )}
            </p>
          </section>

          <section className="panel center">
            <img
              src={systemSettingsImage}
              alt="System settings saw kerf"
            />

            <div className="kerfGrid">
              <div>
                <h3>Increasing Saw Kerf</h3>

                <p>
                  {isSpanish
                    ? "Aumenta el Part Size"
                    : "Increases part size"}
                </p>
              </div>

              <div>
                <h3>Decreasing Saw Kerf</h3>

                <p>
                  {isSpanish
                    ? "Disminuye el Part Size"
                    : "Decreases part size"}
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Si las Fab Locations son incorrectas al correr Doors o Fab Only"
                  : "If Fab Locations Are Wrong When Running Doors or Fab Only"}
              </h2>
            </div>

            <div className="callout danger">
              <h3>
                {isSpanish
                  ? "No vuelva a calibrar los Drills primero"
                  : "Do Not Re-Calibrate the Drills First"}
              </h3>

              <p>
                {isSpanish
                  ? "Si sus parts de producción normal salen correctamente, pero las ubicaciones Y son incorrectas cuando corre Fab Only o Doors, probablemente tiene un problema de Pusher Calibration. Ejecute un MIN/DIM test."
                  : "If your normal production parts are coming out correctly, but the Y locations are wrong when running Fab Only or doors, you likely have a pusher calibration issue. Run a MIN/DIM test."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Esto es causado por el Pusher en lugar de Drill Calibration debido a la manera en que el software calcula la ubicación de los holes. Cuando corre sticks normales, la posición del drill se calcula desde el Trim Cut."
                : "This is caused by the pusher instead of drill calibration because of how the software calculates hole placement. When running normal sticks, the drill position is calculated from the trim cut."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Cuando corre Doors o Fab Only, el software ya no utiliza la saw. La posición del drill se calcula desde la Pusher Minimum Position. Si la Pusher Calibration está incorrecta, verá ese error reflejado en el valor Y de sus fabrications."
                : "When running doors or Fab Only, the software no longer uses the saw. It bases the drill position off the pusher minimum position. If the pusher calibration is off, you will see that reflected in the Y value of your fabrications."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si la Pusher Minimum Dimension está incorrecta, sus trims también pueden quedar más pequeños o más grandes que el valor que le está indicando a la saw que corte."
                : "If the pusher minimum dimension is off, your trims may also be smaller or larger than the number you are telling the saw to cut off."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Cut Lengths inconsistentes"
                  : "Inconsistent Cut Lengths"}
              </h2>

              <p>
                {isSpanish
                  ? "Los Cut Lengths inconsistentes normalmente se deben a un problema de coasting."
                  : "Inconsistent cut lengths usually come down to a coasting issue."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "La forma más rápida de comprobar si existe coasting es pedirle a otra persona que aplique presión hacia atrás sobre el Stock Length para asegurarse de que la pieza nunca se separe del Pusher."
                : "The fastest way to test for coasting is to have a second person sit and put backward pressure on the stock length to make sure the piece never separates from the pusher."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "El único momento en que la pieza y el Pusher deben separarse es cuando el Pusher está dentro del cabinet. El Pusher debe mover la pieza a posición, los clamps deben activarse y después el Pusher debe retraerse hasta que las operaciones de Fab o Saw hayan terminado."
                : "The only time the piece and pusher should separate is when the pusher is inside the cabinet. The pusher should move the piece into position, the clamps should fire, and then the pusher should retract until the Fab or saw operations are complete."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Solución 1: Revise los Tension Rollers"
                  : "Fix 1: Check Tension Rollers"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Asegúrese de que los Tension Rollers estén ajustados correctamente. Estos son los rollers naranjas que se mueven horizontalmente para sujetar la part."
                : "Make sure the tension rollers are tight. These are the orange rollers that move horizontally to clamp the part."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "En la parte superior de cada roller hay una tuerca plateada que puede apretarse a mano para aumentar la resistencia al giro. Debe poder girar el roller con dos dedos, pero no fácilmente con un solo dedo."
                : "On the top of each roller there is a silver nut that can be tightened by hand to increase the turning resistance. You should be able to turn the roller with two fingers, but not easily with one finger."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Una buena referencia es aproximadamente 7 de 10, donde 1 significa que gira libremente y 10 significa que no puede moverlo con dos dedos."
                : "A good rule of thumb is a 7 out of 10, where 1 is free spinning and 10 does not move at all with two fingers."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Máquinas nuevas con Air Driven Clutches"
                  : "Newer Machines With Air Driven Clutches"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "En las máquinas más nuevas, los manual clutches fueron reemplazados por Automatic Air Driven Clutches. El Clutch Pressure puede configurarse individualmente para cada part dentro de Parts Library."
                : "On newer machines, the manual clutches were replaced with automatic air driven clutches. The clutch pressure can be set in the Parts Library per part."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "La configuración utiliza una escala de 0–20. Para parts ligeras y flexibles, use 3–4. Para parts de tamaño estándar, use aproximadamente 6–8. Para parts pesadas, use 8–15. Cualquier valor superior a 15 puede comprimir completamente los rollers."
                : "The setting works on a scale of 0–20. For light and flimsy parts, use 3–4. For standard size parts, use around 6–8. For heavy parts, use 8–15. Anything above 15 can completely cup the rollers."}
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Solución 2: Roller Tensioner Set Screws"
                  : "Fix 2: Roller Tensioner Set Screws"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "La segunda cosa que puede ayudar a eliminar el coasting son los Set Screws instalados en los primeros 10 Horizontal Rollers del lado infeed."
                : "The second thing that can help eliminate coasting is the set screws installed in the first 10 horizontal rollers on the infeed side."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si su máquina no tiene estos screws, comuníquese con DeMichele Group y solicite los Roller Tensioner Screws."
                : "If your machine does not have these, contact DeMichele Group and ask them for the roller tensioner screws."}
            </p>

            <img
              src={orangeRollerImage}
              alt="Orange roller tensioner screw"
              className="smallImage"
            />
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">
                5000 Series Machines
              </p>

              <h2>
                Incorrect Part Lengths on 5000, 5500 & 5700 Machines
              </h2>

              <p>
                {isSpanish
                  ? "Corregir el Part Length en una máquina de la serie 5000 es ligeramente diferente que en otras máquinas RhinoFab porque la saw gira de un lado del Saw Cabinet al otro."
                  : "Correcting part length on a 5000 Series machine is slightly different than on other RhinoFab machines because the saw rotates from one side of the saw cabinet to the other."}
              </p>
            </div>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Este ajuste es solamente para cortes de 90°"
                  : "This Adjustment Is for 90° Cuts Only"}
              </h3>

              <p>
                {isSpanish
                  ? "Use este procedimiento cuando sus Cut Lengths de 90° sean incorrectos. Si sus cortes de 90° son correctos pero los lengths se vuelven incorrectos al cortar Bevels o Miters, el problema es diferente y no debe corregirse utilizando el procedimiento de abajo."
                  : "Use this procedure when your 90° cut lengths are incorrect. If your 90° cuts are correct but your lengths become incorrect when cutting bevels or miters, the problem is different and should not be corrected using the procedure below."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Este procedimiento aplica a las máquinas RhinoFab 5000, 5500 y 5700."
                : "This procedure applies to the RhinoFab 5000, 5500, and 5700 machines."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Por qué Saw Kerf por sí solo no es suficiente"
                  : "Why Saw Kerf Alone Is Not Enough"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "En estas máquinas, la saw blade gira dentro del Saw Cabinet. Dependiendo del lado de la máquina desde donde se cargue el material, la saw puede cortar en el lado izquierdo o derecho del cabinet."
                : "On these machines, the saw blade rotates inside the saw cabinet. Depending on which side of the machine the material is loaded from, the saw may cut on the left side of the cabinet or the right side of the cabinet."}
            </p>

            <div className="loadDirectionGrid">
              <div className="directionCard">
                <h3>
                  {isSpanish
                    ? "Material cargado desde la izquierda"
                    : "Material Loaded From the Left"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      El primer corte se realiza en el{" "}
                      <strong>lado izquierdo</strong> del Saw Cabinet. Este
                      primer corte se considera el <strong>Lead Trim</strong>.
                    </>
                  ) : (
                    <>
                      The first cut is made on the <strong>left side</strong> of
                      the saw cabinet. This first cut is considered the{" "}
                      <strong>lead trim</strong>.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Después del Lead Trim, la saw gira al{" "}
                      <strong>lado derecho</strong> del cabinet y debe realizar
                      el resto de los cortes de ese Stock Length desde el lado
                      derecho.
                    </>
                  ) : (
                    <>
                      After the lead trim, the saw rotates to the{" "}
                      <strong>right side</strong> of the cabinet and should make
                      the remainder of the cuts in that stock length from the
                      right side.
                    </>
                  )}
                </p>
              </div>

              <div className="directionCard">
                <h3>
                  {isSpanish
                    ? "Material cargado desde la derecha"
                    : "Material Loaded From the Right"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      El primer corte se realiza en el{" "}
                      <strong>lado derecho</strong> del Saw Cabinet. Este primer
                      corte se considera el <strong>Lead Trim</strong>.
                    </>
                  ) : (
                    <>
                      The first cut is made on the <strong>right side</strong> of
                      the saw cabinet. This first cut is considered the{" "}
                      <strong>lead trim</strong>.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Después del Lead Trim, la saw gira al{" "}
                      <strong>lado izquierdo</strong> del cabinet y debe realizar
                      el resto de los cortes de ese Stock Length desde el lado
                      izquierdo.
                    </>
                  ) : (
                    <>
                      After the lead trim, the saw rotates to the{" "}
                      <strong>left side</strong> of the cabinet and should make
                      the remainder of the cuts in that stock length from the
                      left side.
                    </>
                  )}
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Saw Kerf vs. Saw Rotational Offset</h2>

              <p>
                {isSpanish
                  ? "Entender cuál valor controla cuáles cortes es la clave para corregir los Part Lengths en estas máquinas."
                  : "Understanding which value controls which cuts is the key to correcting part lengths on these machines."}
              </p>
            </div>

            <div className="kerfComparisonGrid">
              <div className="comparisonCard">
                <h3>Saw Kerf</h3>

                <p>
                  {isSpanish ? (
                    <>
                      Saw Kerf afecta el Finished Length de{" "}
                      <strong>todas las piezas</strong> que se cortan del Stock
                      Length.
                    </>
                  ) : (
                    <>
                      Saw kerf affects the finished length of{" "}
                      <strong>all pieces</strong> being cut from the stock
                      length.
                    </>
                  )}
                </p>
              </div>

              <div className="comparisonCard rotational">
                <h3>Saw Rotational Offset</h3>

                <p>
                  {isSpanish ? (
                    <>
                      Saw Rotational Offset afecta{" "}
                      <strong>solamente la primera pieza terminada</strong> de
                      cada Stock Length.
                    </>
                  ) : (
                    <>
                      Saw rotational offset affects{" "}
                      <strong>only the first finished piece</strong> from each
                      stock length.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Observe la primera pieza"
                  : "Watch the First Piece"}
              </h3>

              <p>
                {isSpanish
                  ? "Si tiene un problema de Cut Length en una máquina de la serie 5000, compare la primera pieza terminada del Stock Length con todas las piezas que salieron después."
                  : "If you have a cut-length problem on a 5000 Series machine, compare the first finished piece from the stock length to all of the pieces that came after it."}
              </p>

              <p>
                {isSpanish
                  ? "Existe una buena posibilidad de que la primera pieza mida diferente a las piezas restantes."
                  : "There is a good chance the first piece will measure differently from the remaining pieces."}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? 'Ejemplo: La primera pieza está 1/32" demasiado corta'
                  : 'Example: First Piece Is 1/32" Too Short'}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Digamos que corre un Stock Length y produce cinco piezas
                  terminadas. La primera pieza está{" "}
                  <strong>1/32&quot;</strong> demasiado corta, pero las piezas 2
                  a 5 tienen exactamente el length correcto.
                </>
              ) : (
                <>
                  Let&apos;s say you run one stock length and produce five
                  finished pieces. The first piece is 1/32&quot; too short, but
                  pieces 2 through 5 are exactly the correct length.
                </>
              )}
            </p>

            <p className="helperText">
              {isSpanish ? (
                <>
                  En esta situación, <strong>no</strong> debe corregir el
                  problema utilizando solamente Saw Kerf porque las piezas
                  restantes ya están correctas.
                </>
              ) : (
                <>
                  In this situation, you do <strong>not</strong> want to correct
                  the problem using saw kerf alone because your remaining pieces
                  are already correct.
                </>
              )}
            </p>

            <p>
              {isSpanish
                ? 'Para corregir la primera pieza, vamos a ajustar el valor "Saw Rotational Offset", que se encuentra en System Settings.'
                : 'To fix the first piece we are going to adjust the "Saw Rotational Offset" value which can be found in System Settings.'}
            </p>

            <p>
              {isSpanish ? (
                <>
                  Solamente queremos cambiar este valor por{" "}
                  <strong>LA MITAD</strong> de la cantidad que la pieza está
                  corta o larga.
                </>
              ) : (
                <>
                  We only want to change this value by <strong>HALF</strong> the
                  amount we are short/long by.
                </>
              )}
            </p>

            <div className="callout danger">
              <h3>
                {isSpanish
                  ? "Ajuste solamente la mitad del error"
                  : "Only Adjust Half of the Error"}
              </h3>

              <p>
                {isSpanish ? (
                  <>
                    El Saw Rotational Offset debe ajustarse por{" "}
                    <strong>
                      la mitad de la cantidad que la primera pieza está
                      incorrecta
                    </strong>
                    .
                  </>
                ) : (
                  <>
                    The saw rotational value must be adjusted by{" "}
                    <strong>
                      half of the amount the first piece is off
                    </strong>
                    .
                  </>
                )}
              </p>

              <p>
                {isSpanish ? (
                  <>
                    Si la primera pieza está <strong>1/32&quot;</strong>{" "}
                    demasiado corta, aumente el Saw Rotational Offset existente
                    por <strong>1/64&quot;</strong>.
                  </>
                ) : (
                  <>
                    If the first piece is 1/32&quot; too short, increase the
                    existing saw rotational offset value by 1/64&quot;.
                  </>
                )}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "¿En qué dirección debo ajustar?"
                  : "Which Direction Do I Adjust?"}
              </h2>
            </div>

            <div className="kerfGrid">
              <div>
                <h3>
                  Increase Saw Rotational Value
                </h3>

                <p>
                  {isSpanish
                    ? "Aumenta el length de la primera Finished Part"
                    : "Increases the length of the first finished part"}
                </p>
              </div>

              <div>
                <h3>
                  Decrease Saw Rotational Value
                </h3>

                <p>
                  {isSpanish
                    ? "Disminuye el length de la primera Finished Part"
                    : "Decreases the length of the first finished part"}
                </p>
              </div>
            </div>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Recuerde la regla de la mitad"
                  : "Remember the Half-Value Rule"}
              </h3>

              <p>
                {isSpanish
                  ? "Cualquiera que sea la cantidad que la primera pieza está incorrecta, divida esa medida entre dos antes de sumarla o restarla del Saw Rotational Offset existente."
                  : "Whatever amount the first piece is off, divide that measurement by two before adding or subtracting it from the existing saw rotational value."}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Dónde encontrar Saw Rotational Offset"
                  : "Where to Find the Saw Rotational Value"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "El valor Saw Rotational Offset se encuentra en System Settings."
                : "The saw rotational value is located in System Settings."}
            </p>

            <div className="comingSoonBox">
              <strong>
                {isSpanish
                  ? "Imagen próximamente"
                  : "Image Coming Soon"}
              </strong>

              <p>
                {isSpanish
                  ? "En la próxima actualización del entrenamiento se agregará una captura de pantalla mostrando la ubicación exacta dentro de System Settings."
                  : "A screenshot showing the exact System Settings location will be added in the next training update."}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">
                {isSpanish
                  ? "Troubleshooting de Angled Cuts"
                  : "Angled Cut Troubleshooting"}
              </p>

              <h2>
                {isSpanish
                  ? "Problemas de Cut Length con Bevels, Miters o Compounds"
                  : "Cut Length Issues With Bevels, Miters or Compounds"}
              </h2>

              <p>
                {isSpanish
                  ? "Si sus Cut Lengths de 90° son correctos pero sus parts quedan demasiado largas o demasiado cortas al cortar Bevels, Miters o Compound Angles, utilice las siguientes verificaciones."
                  : "If your 90° cut lengths are correct but your parts become too long or too short when cutting bevels, miters, or compound angles, use the checks below."}
              </p>
            </div>

            <div className="callout danger">
              <h3>
                {isSpanish
                  ? "Comience con Calibrate Miter Cut Length"
                  : "Start With Miter Cut Length Calibration"}
              </h3>

              <p>
                {isSpanish ? (
                  <>
                    Vaya a la pantalla Calibration y ejecute primero el
                    procedimiento{" "}
                    <strong>Calibrate Miter Cut Length</strong>.
                  </>
                ) : (
                  <>
                    Go to the Calibration screen and run the{" "}
                    <strong>Calibrate Miter Cut Length</strong> procedure first.
                  </>
                )}
              </p>

              <p>
                {isSpanish ? (
                  <>
                    Esta Calibration contiene{" "}
                    <strong>cuatro dropdown selections</strong>, y cada una
                    prueba o cambia una configuración diferente en el software.{" "}
                    <strong>Ejecute las cuatro.</strong>
                  </>
                ) : (
                  <>
                    This calibration contains{" "}
                    <strong>four dropdown selections</strong>, and each one
                    tests or changes a different setting in the software.{" "}
                    <strong>Run all four.</strong>
                  </>
                )}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Bevel Cut Lengths: Revise Part Height"
                  : "Bevel Cut Lengths: Check Part Height"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Al cortar un Bevel, el software utiliza{" "}
                  <strong>Part Height</strong> para calcular el projected long
                  point del stick.
                </>
              ) : (
                <>
                  When cutting a bevel, the software uses the{" "}
                  <strong>part height</strong> to calculate the projected long
                  point of the stick.
                </>
              )}
            </p>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Part Height debe ser exacto"
                  : "Part Height Must Be Accurate"}
              </h3>

              <p>
                {isSpanish
                  ? "Si el Part Height guardado en Parts Library es incorrecto, el Cut Length calculado también puede ser incorrecto."
                  : "If the part height stored in Parts Library is incorrect, the calculated cut length can also be incorrect."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Utilice los calipers incluidos con la máquina y mida el Part
                  Height real con la mayor precisión posible. Registre la medida
                  con <strong>tres decimales</strong> y actualice el valor{" "}
                  <strong>Height</strong> de esa part en Parts Library antes de
                  probar nuevamente el corte.
                </>
              ) : (
                <>
                  Use the calipers supplied with the machine and measure the
                  actual part height as accurately as possible. Record the
                  measurement to <strong>three decimal places</strong> and
                  update the Height value for that part in Parts Library before
                  testing the cut again.
                </>
              )}
            </p>

            <div className="measurementCard">
              <span className="measurementLabel">
                {isSpanish
                  ? "Bevel Calculation utiliza"
                  : "Bevel calculation uses"}
              </span>

              <strong>Part Height</strong>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Miter Cut Lengths: Revise Part Depth"
                  : "Miter Cut Lengths: Check Part Depth"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Los Miter Cuts funcionan de la misma manera, excepto que la
                  dimensión importante del profile es{" "}
                  <strong>Part Depth</strong>.
                </>
              ) : (
                <>
                  Miter cuts work the same way, except the important profile
                  dimension is the <strong>part depth</strong>.
                </>
              )}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si el Part Depth guardado en Parts Library es incorrecto, el projected long point del Miter también puede calcularse incorrectamente, haciendo que el Finished Part Length sea incorrecto."
                : "If the part depth stored in Parts Library is incorrect, the projected long point of the miter can also be calculated incorrectly, causing the finished part length to be wrong."}
            </p>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "Mida con Calipers"
                  : "Measure With Calipers"}
              </h3>

              <p>
                {isSpanish
                  ? "Mida el Part Depth real con calipers y actualice el valor Depth en Parts Library antes de volver a correr la part."
                  : "Measure the actual part depth with calipers and update the Depth value in Parts Library before running the part again."}
              </p>
            </div>

            <div className="measurementCard">
              <span className="measurementLabel">
                {isSpanish
                  ? "Miter Calculation utiliza"
                  : "Miter calculation uses"}
              </span>

              <strong>Part Depth</strong>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Compound Cut Lengths: Revise ambas dimensiones"
                  : "Compound Cut Lengths: Check Both Dimensions"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Los Compound Cuts combinan un Miter y un Bevel, por lo que el software necesita ambas dimensiones del profile para calcular correctamente el projected long point."
                : "Compound cuts combine a miter and a bevel, so the software needs both profile dimensions to calculate the projected long point correctly."}
            </p>

            <div className="compoundGrid">
              <div className="compoundCard">
                <span>1</span>

                <div>
                  <h3>
                    {isSpanish
                      ? "Revise Height"
                      : "Check Height"}
                  </h3>

                  <p>
                    {isSpanish
                      ? "Mida y actualice el Part Height real en Parts Library."
                      : "Measure and update the actual part height in Parts Library."}
                  </p>
                </div>
              </div>

              <div className="compoundCard">
                <span>2</span>

                <div>
                  <h3>
                    {isSpanish
                      ? "Revise Depth"
                      : "Check Depth"}
                  </h3>

                  <p>
                    {isSpanish
                      ? "Mida y actualice el Part Depth real en Parts Library."
                      : "Measure and update the actual part depth in Parts Library."}
                  </p>
                </div>
              </div>
            </div>

            <div className="callout danger">
              <h3>
                {isSpanish
                  ? "No utilice una Tape Measure"
                  : "Do Not Use a Tape Measure"}
              </h3>

              <p>
                {isSpanish
                  ? "Utilice calipers. Una tape measure no es lo suficientemente precisa para las dimensiones del profile utilizadas en estos cálculos de Angled Cuts."
                  : "Use calipers. A tape measure is not accurate enough for the profile dimensions used in these angled-cut calculations."}
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "¿Por qué algunas Parts todavía salen correctas?"
                  : "Why Do Some Parts Still Come Out Correct?"}
              </h2>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Cuando el software calcula un Angled Cut, primero calcula el long point del Finished Stick y después trabaja hacia atrás desde ese punto."
                : "When the software calculates an angled cut, it first calculates the long point of the finished stick and then works backward from that point."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Debido a esto, un valor incorrecto de Height o Depth no afecta todos los Angled Cuts exactamente de la misma manera."
                : "Because of that, an incorrect Height or Depth value does not affect every angled cut in exactly the same way."}
            </p>

            <div className="angleExplanationGrid">
              <div className="angleCard">
                <h3>Miters</h3>

                <p>
                  {isSpanish
                    ? "Si el Miter coloca el long point del stick directamente contra el Back Fence de la máquina, el Finished Length todavía puede salir correctamente, suponiendo que la Machine Calibration sea correcta."
                    : "If the miter places the long point of the stick directly against the back fence of the machine, the finished length can still come out correctly, assuming the machine calibration is good."}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Cuando el long point se proyecta{" "}
                      <strong>lejos del Back Fence</strong>, el software debe
                      utilizar Part Depth para calcular ese projected point. Un
                      valor incorrecto de Depth puede afectar el Finished Cut
                      Length.
                    </>
                  ) : (
                    <>
                      When the long point is projected{" "}
                      <strong>away from the back fence</strong>, the software
                      must use the part depth to calculate that projected point.
                      An incorrect Depth value can then affect the finished cut
                      length.
                    </>
                  )}
                </p>
              </div>

              <div className="angleCard">
                <h3>Bevels</h3>

                <p>
                  {isSpanish ? (
                    <>
                      Si el Bevel coloca el long point en la{" "}
                      <strong>parte inferior de la Machine Table</strong>, el
                      Finished Length todavía puede salir correctamente,
                      suponiendo que la Calibration sea correcta.
                    </>
                  ) : (
                    <>
                      If the bevel places the long point on the{" "}
                      <strong>bottom of the machine table</strong>, the finished
                      length can still come out correctly, assuming calibration
                      is good.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Cuando el angle coloca el long point{" "}
                      <strong>por encima de la table</strong>, el software debe
                      utilizar Part Height para calcular ese projected point. Un
                      valor incorrecto de Height puede afectar el Finished Cut
                      Length.
                    </>
                  ) : (
                    <>
                      When the angle places the long point{" "}
                      <strong>above the table</strong>, the software must use the
                      part height to calculate that projected point. An
                      incorrect Height value can then affect the finished cut
                      length.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="callout warning">
              <h3>
                {isSpanish
                  ? "¿Qué pasa con los Compound Cuts?"
                  : "What About Compound Cuts?"}
              </h3>

              <p>
                {isSpanish
                  ? "Los Compound Cuts utilizan tanto Height como Depth. Si ambos valores son incorrectos y el Compound Cut todavía sale exactamente correcto, probablemente se debe más a suerte que a una prueba de que las dimensiones sean correctas."
                  : "Compound cuts use both Height and Depth. If both values are incorrect and the compound cut still comes out exactly right, that is more likely luck than proof that the dimensions are correct."}
              </p>
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

          img {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }

          .smallImage {
            max-width: 420px;
          }

          .kerfGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 28px;
          }

          .kerfGrid div {
            padding: 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.26);
          }

          .kerfGrid h3 {
            margin: 0 0 10px;
            color: #f59e0b;
            font-size: 1.35rem;
          }

          .kerfGrid p {
            margin: 0;
            color: #d8e0ec;
            font-weight: 800;
          }

          @media (max-width: 800px) {
            .kerfGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}