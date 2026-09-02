import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function CalibrateRobotPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup / Calibrate"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <div className="pageHeader">
          <h1 className="pageTitle">Calibrate Robot</h1>

          <p className="pageDescription">
            {isSpanish
              ? "Utilice esta página como referencia visual para Robot Drill Calibration. Esta guía está diseñada para ayudarle a comprender rápidamente la pantalla, seguir la secuencia correcta y resolver problemas de alineación mientras avanza por la página."
              : "Use this page as a visual reference for robot drill calibration. This guide is designed to help users quickly understand the screen, follow the correct sequence, and troubleshoot alignment issues as they work down the page."}
          </p>
        </div>

        <section className="heroSection">
          <div className="panel">
            <div className="panelHeader">
              <h2 className="panelTitle">
                {isSpanish
                  ? "Pantalla principal de Calibration"
                  : "Main Calibration Screen"}
              </h2>

              <p className="panelText">
                {isSpanish
                  ? "Comience observando la pantalla completa de Robot Calibration. Esta pantalla puede dividirse en cuatro secciones principales."
                  : "Start by viewing the full robot calibration screen. This screen can be understood in four main sections."}
              </p>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-01-main-screen.png"
              alt="Calibrate Robot main screen"
              tall
            />

            <p className="helperText">
              {isSpanish
                ? "Divida esta pantalla en cuatro secciones diferentes. Cada zona de color tiene una función diferente durante la calibration."
                : "View this screen in four different sections. Each color zone serves a different purpose during calibration."}
            </p>
          </div>
        </section>

        <section className="colorSection">
          <div className="colorGrid">
            <div className="colorCard yellow">
              <div className="colorLabel">Yellow</div>

              <h3 className="colorTitle">
                {isSpanish
                  ? "Área de selección"
                  : "Selection Area"}
              </h3>

              <p className="colorText">
                {isSpanish
                  ? "Utilice esta área para elegir lo que desea calibrar. Si desea calibrar el Top Drill, haga clic en la opción Preload correspondiente y la calibration comenzará desde allí. La sección de Gripper Color también se utilizará más adelante."
                  : "Use this area to choose what you want to calibrate. If you want to calibrate the top drill, click the related preload option and the calibration will begin from there. The gripper color section will also be used later."}
              </p>
            </div>

            <div className="colorCard blue">
              <div className="colorLabel">Blue</div>

              <h3 className="colorTitle">
                {isSpanish
                  ? "Ajustes Top / Back"
                  : "Top / Back Adjustments"}
              </h3>

              <p className="colorText">
                {isSpanish
                  ? "Esta es la sección que utilizará cuando trabaje con los Top y Back Drills. Los cambios X, Y y Z que realice aquí forman parte del proceso de calibration para esas posiciones de drill."
                  : "This is the section you will use when working with the top and back drills. The X, Y, and Z changes you make here are part of the calibration process for those drill positions."}
              </p>
            </div>

            <div className="colorCard green">
              <div className="colorLabel">Green</div>

              <h3 className="colorTitle">
                {isSpanish
                  ? "Ajustes Front / Bottom"
                  : "Front / Bottom Adjustments"}
              </h3>

              <p className="colorText">
                {isSpanish
                  ? "Esta sección se utiliza cuando se trabaja con los Front y Bottom Drills. No siempre será relevante, dependiendo del drill o posición que esté calibrando."
                  : "This section is used when working with the front and bottom drills. It is not always relevant, depending on which drill or position is currently being calibrated."}
              </p>
            </div>

            <div className="colorCard red">
              <div className="colorLabel">Red</div>

              <h3 className="colorTitle">
                {isSpanish
                  ? "Solamente confirmación visual"
                  : "Visual Confirmation Only"}
              </h3>

              <p className="colorText">
                {isSpanish
                  ? "Ignore completamente esta sección para realizar ajustes de calibration. No ayuda directamente con la calibration. Su función principal es confirmar que los Drill Chucks estén bloqueados."
                  : "Completely ignore this section for calibration adjustments. It does not help with calibration directly. Its main value is confirming that the drill chucks are locked."}
              </p>
            </div>
          </div>
        </section>

        <section className="contextBanner">
          <p>
            {isSpanish ? (
              <>
                En este ejemplo, la guía mostrará cómo calibrar el{" "}
                <strong>Back Drill</strong>. El mismo proceso general se aplica a
                los otros drills. El Carousel se calibra de manera un poco
                diferente y debe cubrirse en su propia página.
              </>
            ) : (
              <>
                In this example, this guide will walk through calibrating the{" "}
                <strong>back drill</strong>. The same general process applies to
                the other drills. The carousel calibrates a little differently
                and should be covered on its own page.
              </>
            )}
          </p>
        </section>

        <section className="stepSection">
          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">01</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Seleccione el Drill que desea calibrar"
                    : "Select the drill you want to calibrate"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      Haga clic en el botón del drill que desea calibrar. En este
                      ejemplo sería <strong>Preload Back</strong>. La pantalla se
                      actualizará y el drill seleccionado quedará resaltado en
                      amarillo, confirmando que seleccionó el correcto. Si
                      seleccionó el drill equivocado, cancele y seleccione el
                      correcto.
                    </>
                  ) : (
                    <>
                      Click the drill button you want to calibrate. In this
                      example, that would be <strong>Preload Back</strong>. The
                      screen will update so the selected drill is highlighted in
                      yellow, confirming that the correct drill was selected. If
                      the wrong drill is selected by mistake, cancel and choose
                      the correct one.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="stepMedia split">
              <div className="noteCard">
                <h3 className="noteTitle">
                  {isSpanish
                    ? "Qué cambió aquí"
                    : "What changed here"}
                </h3>

                <p className="noteText">
                  {isSpanish
                    ? "La sección verde desaparece porque no es relevante para esta calibration. Esta guía está trabajando con la sección Top/Back de la pantalla, no con el área Front/Bottom."
                    : "The green section disappears because it is not relevant in this calibration. This guide is working with the top/back portion of the screen, not the front/bottom area."}
                </p>
              </div>

              <div className="imageFrame">
                <TrainingImage
                  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-02-selection-area.png"
                  alt="Selection area of calibration screen"
                  tall
                />
              </div>
            </div>
          </div>

          <div className="stepCard compact">
            <div className="stepHeader compactHeader">
              <div className="stepNumber">02</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Confirme la selección"
                    : "Confirm the selection"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "Haga clic nuevamente en la misma opción Preload para confirmar que realmente desea calibrar ese drill."
                    : "Click the same preload option again to confirm that you really want to calibrate that drill."}
                </p>
              </div>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">03</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Retire todas las Tools de los Robot Grippers"
                    : "Unload all tools from the robot grippers"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      Después de confirmar, el software le pedirá que retire todas
                      las tools de los Robot Grippers. Ambos Robot Tool Chucks
                      deben estar vacíos para la calibration. Active el{" "}
                      <strong>E-stop</strong> de la máquina y retire cualquier
                      tool que se encuentre actualmente en los grippers
                      correspondientes. Si los grippers están vacíos, presione{" "}
                      <strong>OK</strong>.
                    </>
                  ) : (
                    <>
                      After confirming, the software will prompt you to unload
                      all tools from the robot grippers. Both robot tool chucks
                      must be empty for calibration. E-stop the machine and
                      remove any tools currently held in the relevant grippers.
                      If the grippers are empty, press OK.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="imageFrame">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-03-unload-tools-from-grippers.png"
                alt="Unload tools from grippers"
              />
            </div>
          </div>

          <div className="stepCard compact">
            <div className="stepHeader compactHeader">
              <div className="stepNumber">04</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "El Robot se mueve a Pre-Position"
                    : "Robot moves to pre-position"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "El Robot se moverá a una Pre-Position frente al Drill o Carousel Pin seleccionado para calibration."
                    : "The robot will move to a pre-position in front of the drill or carousel pin selected for calibration."}
                </p>
              </div>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">05</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Verifique si el Gripper está en posición"
                    : "Check if the gripper is in position"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      El Robot quedará frente al Tool Chuck listo para conectarse.
                      Si todo se ve bien y no necesita ajustes, seleccione{" "}
                      <strong>Yes</strong> y continúe. Si el Robot no parece estar
                      correctamente alineado, seleccione <strong>No</strong> para
                      poder hacer jog del drill hasta la posición correcta.
                    </>
                  ) : (
                    <>
                      The robot will now hover in front of the tool chuck ready
                      to connect. If everything looks good and no adjustment is
                      needed, choose <strong>Yes</strong> and continue. If the
                      robot does not look correctly aligned, choose{" "}
                      <strong>No</strong> so you can jog the drill into position.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="imageFrame">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-04-gripper-in-position.png"
                alt="Gripper positioned correctly"
              />
            </div>

            <div className="comparisonGrid">
              <div className="comparisonCard">
                <div className="imageFrame comparisonImage">
                  <TrainingImage
                    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-05-incorrect.png"
                    alt="Incorrect gripper position"
                  />
                </div>

                <h3 className="comparisonTitle bad">
                  {isSpanish
                    ? "Incorrecto"
                    : "Incorrect"}
                </h3>

                <p className="comparisonText">
                  {isSpanish
                    ? "No está centrado con la tool"
                    : "Not centered on tool"}
                </p>
              </div>

              <div className="comparisonCard">
                <div className="imageFrame comparisonImage">
                  <TrainingImage
                    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-06-correct.png"
                    alt="Correct gripper position"
                  />
                </div>

                <h3 className="comparisonTitle good">
                  {isSpanish
                    ? "Correcto"
                    : "Correct"}
                </h3>

                <p className="comparisonText">
                  {isSpanish
                    ? "Centrado con la tool"
                    : "Centered on tool"}
                </p>
              </div>
            </div>
          </div>

          <div className="calloutBlock warning">
            <div className="calloutLabel">
              {isSpanish
                ? "Si selecciona No"
                : "If you say No"}
            </div>

            <p className="calloutText">
              {isSpanish
                ? "Regresará a la pantalla de ajustes, donde podrá mover el drill en cualquier dirección para alinearlo con el Robot."
                : "You will be taken back to the adjustment screen where you can move the drill in any direction to match the robot."}
            </p>

            <p className="calloutText strong">
              {isSpanish
                ? "Usted está moviendo el drill para que coincida con la posición del Robot. El Robot no se mueve durante este paso de ajuste."
                : "You are moving the drill to match where the robot is. The robot does not move during this adjustment step."}
            </p>

            <p className="calloutText italic">
              {isSpanish
                ? "Piense en el Robot como una posición fija durante este proceso. Existe una manera de mover las posiciones del Robot, pero debe utilizarse solamente como último recurso. La razón se explica al final de esta página."
                : "Think of the robot as stationary during this process. There is a way to move the robot positions, but that should be treated as a last resort. I will explain why at the bottom of this page."}
            </p>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">06</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Ajuste la posición del Drill si es necesario"
                    : "Adjust the drill position if needed"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      Si el drill no está correctamente alineado, utilice los
                      controles X, Y y Z para mover el drill hasta que coincida
                      con el Robot. Por ejemplo, si el drill está demasiado hacia
                      la izquierda, utilice los controles de dirección Y para
                      moverlo hacia la derecha. Todos los movimientos se realizan
                      en incrementos de <strong>1/32&quot;</strong>.
                    </>
                  ) : (
                    <>
                      If the drill is not lined up correctly, use the X, Y, and Z
                      controls to move the drill to match the robot. For example,
                      if the drill is too far left, use the Y direction controls
                      to move the drill to the right. All movement happens in
                      1/32&quot; increments.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="imageFrame">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-08-snip-of-numbers.png"
                alt="Robot calibration screen"
              />
            </div>

            <div className="noteCard wideNote">
              <h3 className="noteTitle">
                {isSpanish
                  ? "Ejemplo"
                  : "Example"}
              </h3>

              <p className="noteText">
                {isSpanish ? (
                  <>
                    Si la imagen anterior muestra que el drill está demasiado
                    hacia la izquierda del gripper, continúe presionando{" "}
                    <strong>+</strong> en el axis correcto hasta que el drill
                    quede alineado con el Robot.
                  </>
                ) : (
                  <>
                    If the image above shows the drill too far left of the
                    gripper, keep pressing the <strong>+</strong> on the correct
                    axis until the drill is aligned with the robot.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="stepCard compact">
            <div className="stepHeader compactHeader">
              <div className="stepNumber">07</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Guarde los cambios"
                    : "Save your changes"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "Una vez realizados los ajustes, presione el botón Save ubicado en la parte inferior derecha de la pantalla."
                    : "Once the adjustments are made, press the save button in the bottom right area of the screen."}
                </p>
              </div>
            </div>

            <div className="imageFrame slimImage">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-09-home-save.png"
                alt="Saving calibration and homing"
              />
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">08</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Park el Robot y repita la verificación"
                    : "Park the robot and repeat the check"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      Incluso después de realizar los cambios, el Robot todavía
                      estará junto al Drill Head. Primero haga Park del Robot y
                      luego repita los pasos anteriores para verificar si la
                      alineación ahora es correcta. Para hacer Park del Back
                      Drill, asegúrese de que la máquina tenga una luz verde y
                      utilice el botón <strong>Park Back</strong>.
                    </>
                  ) : (
                    <>
                      Even after changes are made, the robot is still hovering
                      next to the drill head. Park the robot first, then repeat
                      the earlier steps to verify whether the alignment is now
                      correct. To park the back drill, make sure the machine has
                      a green light and use the Park Back button.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="imageFrame slimImage">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-10-preload-back.png"
                alt="Preloading tools back"
              />
            </div>

            <div className="calloutBlock success">
              <div className="calloutLabel">
                {isSpanish
                  ? "Repita el proceso"
                  : "Repeat loop"}
              </div>

              <p className="calloutText strong">
                {isSpanish
                  ? "Repita los pasos 1–4 y vuelva a ajustar si es necesario. Si todo se ve bien, presione Yes y continúe."
                  : "Repeat steps 1–4 and adjust again if necessary. If it looks good, press Yes and continue."}
              </p>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">09</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Confirmación para retirar la Tool"
                    : "Tool removal confirmation"}
                </h2>

                <p className="stepText">
                  {isSpanish ? (
                    <>
                      Después de presionar <strong>Yes</strong> en el mensaje
                      Gripper-in-Position, el Robot se moverá y sujetará la tool.
                      Después aparecerá un mensaje preguntando si desea retirar
                      el chuck del Back Spindle. Si selecciona{" "}
                      <strong>No</strong>, puede realizar más ajustes. Si
                      selecciona <strong>Yes</strong>, el Robot retirará el chuck
                      y continuará con el siguiente paso.
                    </>
                  ) : (
                    <>
                      After pressing Yes to the gripper-in-position prompt, the
                      robot will move and clamp the tool. You will then see a
                      message asking whether to pull the chuck out of the back
                      spindle. If you choose No, you can make more adjustments.
                      If you choose Yes, the robot removes the chuck and
                      continues to the next step.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="comparisonGrid">
              <div className="comparisonCard">
                <div className="imageFrame tallCompare">
                  <TrainingImage
                    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-11-robot-gripped.png"
                    alt="robot holding tool"
                  />
                </div>
              </div>

              <div className="comparisonCard">
                <div className="imageFrame tallCompare">
                  <TrainingImage
                    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-12-pull-chuck.png"
                    alt="remove chuck"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">10</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Confirmación para regresar la Tool"
                    : "Tool return confirmation"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "Nuevamente, seleccione Yes o No. No permite realizar ajustes adicionales. Yes coloca nuevamente la tool dentro del drill."
                    : "Again, choose Yes or No. No allows additional changes. Yes puts the tool back into the drill."}
                </p>

                <p className="stepText italic">
                  {isSpanish
                    ? "Este suele ser el punto donde los problemas de alineación se vuelven más evidentes. Observe cuidadosamente si hay roce, golpes o movimientos que no parezcan naturales cuando la tool vuelve a conectarse con el drill. Si el Robot Arm se mueve ligeramente hacia la izquierda al conectarse, el drill todavía está demasiado hacia la izquierda y debe ajustarse nuevamente."
                    : "This is often the point where alignment problems become most obvious. Watch carefully for rubbing, bumping, or motion that does not look natural as the tool reconnects with the drill. If the robot arm bumps slightly to the left, the drill is still too far left and should be adjusted again."}
                </p>
              </div>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">11</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Termine este Color y haga Park del Drill"
                    : "Finish this color and park the drill"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "Si todo se ve suave y correcto, la calibration de este color está completa. Recuerde que existen dos grippers, uno Red y uno Blue, y ambos deben calibrarse. Por ahora, haga Park del Top Drill y regrese el Robot a su Home Position."
                    : "If everything looks smooth and correct, this color calibration is complete. Remember that there are two grippers, one red and one blue, and both must be calibrated. For now, park the top drill and return the robot to its home position."}
                </p>
              </div>
            </div>

            <div className="imageFrame slimImage">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-15-park-back.png"
                alt="park drill"
              />
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">12</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Vuelva a cargar las Tools y repita con el otro Gripper"
                    : "Reload tools and repeat for the other gripper"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "El software le pedirá que vuelva a cargar en los Robot Grippers las tools que retiró anteriormente. Si va a ejecutar inmediatamente la siguiente calibration, confirme el mensaje y continúe."
                    : "The software will prompt you to load tools back into the robot grippers that were removed earlier. If you are immediately running the next calibration, acknowledge the message and continue."}
                </p>
              </div>
            </div>

            <div className="imageFrame">
              <TrainingImage
                src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-16-load-following-tools.png"
                alt="load following tools"
              />
            </div>
          </div>

          <div className="stepCard">
            <div className="stepHeader">
              <div className="stepNumber">13</div>

              <div>
                <h2 className="stepTitle">
                  {isSpanish
                    ? "Cambie el Gripper Color y repita"
                    : "Switch gripper color and repeat"}
                </h2>

                <p className="stepText">
                  {isSpanish
                    ? "Cambie el Tool Color del gripper y repita la misma calibration. Esto se hace cambiando el checkbox en la parte superior derecha de la pantalla. También verá un checkbox para Crossed y Uncrossed positions. Esa configuración es importante para el Carousel y puede cubrirse por separado."
                    : "Change the tool color for the gripper and repeat the same calibration again. This is done by toggling the checkbox in the top right of the screen. You will also notice a checkbox for crossed and uncrossed positions. That setting matters for the carousel and can be covered separately."}
                </p>
              </div>
            </div>

            <div className="stepMedia split">
              <div className="imageFrame">
                <TrainingImage
                  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-17-gripper-red-blue.png"
                  alt="crossed vs uncrossed"
                />
              </div>

              <div className="calloutBlock info">
                <div className="calloutLabel">
                  {isSpanish
                    ? "Expectativa importante"
                    : "Important expectation"}
                </div>

                <p className="calloutText">
                  {isSpanish
                    ? "Para completar una calibration completa, normalmente cada drill debe probarse en dos posiciones y el Carousel puede necesitar probarse en cuatro posiciones."
                    : "To complete a full calibration, each drill usually needs to be tested in two positions, and the carousel may need to be tested in four positions."}
                </p>

                <p className="calloutText strong">
                  {isSpanish
                    ? "En promedio, una calibration completa puede tomar aproximadamente dos horas. Tómese su tiempo y concéntrese en la precisión."
                    : "On average, a full calibration can take around two hours. Take your time and aim for accuracy."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="instructionSection">
          <div className="panel">
            <div className="panelHeader">
              <h2 className="panelTitle">
                {isSpanish
                  ? "Cómo puede cargarse / calibrarse cada Drill"
                  : "How Each Drill Can Be Loaded / Calibrated"}
              </h2>

              <p className="panelText">
                {isSpanish
                  ? "Utilice esta referencia para entender qué Gripper Position corresponde a cada Drill o ubicación del Carousel."
                  : "Use this reference to understand which gripper position applies to each drill or carousel location."}
              </p>
            </div>

            <div className="drillGrid">
              <div className="drillCard">
                <h3>Top Drill</h3>
                <p>Blue Crossed</p>
                <p>Red Crossed</p>
              </div>

              <div className="drillCard">
                <h3>Carousel</h3>
                <p>Blue Crossed</p>
                <p>Red Crossed</p>
                <p>Blue Uncrossed</p>
                <p>Red Uncrossed</p>
              </div>

              <div className="drillCard">
                <h3>Back Drill</h3>
                <p>Blue Crossed</p>
                <p>Red Crossed</p>
              </div>

              <div className="drillCard">
                <h3>Bottom Drill</h3>
                <p>Blue Uncrossed</p>
                <p>Red Uncrossed</p>
              </div>

              <div className="drillCard">
                <h3>Front Drill</h3>
                <p>Blue Uncrossed</p>
                <p>Red Uncrossed</p>
              </div>
            </div>

            <div className="tipBox">
              <h3>
                {isSpanish
                  ? "Consejo para Calibration"
                  : "Tip for Calibrating"}
              </h3>

              <p>
                {isSpanish
                  ? "En algunas máquinas, la Red Tool puede verse perfectamente alineada durante calibration mientras que la Blue Tool queda ligeramente desviada, o viceversa. Cuando esto suceda, divida la diferencia."
                  : "Some machines may appear perfect when calibrating the red tool, but slightly off when calibrating the blue tool, or the opposite. When this happens, split the difference."}
              </p>

              <p>
                {isSpanish
                  ? "Por ejemplo, si la Red Tool carga perfectamente pero la Blue Tool roza ligeramente el lado derecho al cargar, ajuste el drill ligeramente hacia la derecha para que la Blue Tool apenas toque el lado derecho y la Red Tool apenas toque el lado izquierdo mientras cargan."
                  : "For example, if the red tool loads perfectly but the blue tool rubs slightly on the right side as it loads, adjust the drill slightly to the right so the blue tool barely touches on the right side and the red tool barely touches on the left side as they load."}
              </p>
            </div>
          </div>
        </section>

        <section className="instructionSection">
          <div className="panel">
            <div className="panelHeader">
              <h2 className="panelTitle">Robot Load Tool</h2>

              <p className="panelText">
                {isSpanish
                  ? "Esta pantalla es útil para probar Tool Changes a velocidad completa y para cargar tools antes de calibration."
                  : "This screen is helpful for testing tool changes at full speed and loading tools before calibration."}
              </p>
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-18-robot-load-tool.png"
              alt="Robot load tool screen"
              tall
            />

            <p className="helperText">
              {isSpanish
                ? "Esta pantalla se encuentra en la parte inferior de la pantalla Carousel Library. Es útil para probar rápidamente Tool Changes y observar cómo funciona el Robot a velocidad completa."
                : "This screen can be found at the bottom of the Carousel Library screen. It is useful for quickly testing tool changes and seeing how the robot runs at full speed."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Haga clic en el dropdown y seleccione una tool que actualmente se encuentre en el Carousel. El Robot realizará el Tool Change. Puede repetir este proceso tantas veces como sea necesario."
                : "Click the dropdown and choose a tool currently located in the carousel. The robot will perform the tool change. You can repeat this as many times as needed."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Esta pantalla también es útil para cargar tools antes de calibration. Si no desea cambiar manualmente todas las tools, utilice esta pantalla y permita que el Robot realice los Tool Changes."
                : "This screen is also useful for loading tools before calibration. If you do not want to manually change out all the tools, use this screen and let the robot perform the tool changes."}
            </p>
          </div>
        </section>

        <section className="instructionSection">
          <div className="panel warningPanel">
            <div className="panelHeader">
              <h2 className="panelTitle">
                {isSpanish
                  ? "Mover la Robot Pickup Position"
                  : "Moving the Robot Pickup Position"}
              </h2>

              <p className="panelText">
                {isSpanish
                  ? "Esto debe tratarse como último recurso cuando la calibration normal no puede llevar el drill a la posición necesaria."
                  : "This should be treated as a last resort when normal calibration cannot get the drill to the position it needs."}
              </p>
            </div>

            <div className="warningBox">
              {isSpanish
                ? "Utilice Robot Offsets solamente cuando el drill no pueda moverse más en la dirección necesaria y la única opción sea ajustar ligeramente la posición del Robot."
                : "Only use Robot Offsets when the drill cannot move any farther in the needed direction and the only option is to slightly tweak the robot position itself."}
            </div>

            <TrainingImage
              src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-19-robot-offset-numbers.png"
              alt="Robot offset numbers screen"
              tall
            />

            <p className="helperText">
              {isSpanish ? (
                <>
                  En la esquina inferior derecha de la pantalla Robot Calibration,
                  seleccione <strong>Robot Offsets</strong>. Esto abrirá una
                  pantalla de passcode. Ingrese el passcode{" "}
                  <strong>111</strong>.
                </>
              ) : (
                <>
                  In the bottom right corner of the robot calibration screen,
                  select <strong>Robot Offsets</strong>. This will open a
                  passcode screen. Enter passcode <strong>111</strong>.
                </>
              )}
            </p>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Esta pantalla le permite realizar pequeños ajustes a las
                  posiciones del Robot. No ajuste más de{" "}
                  <strong>+/- 1/16&quot;</strong>. Si necesita superar esa
                  cantidad, comuníquese con Support porque probablemente existe
                  otro problema.
                </>
              ) : (
                <>
                  This screen allows you to tweak the robot positions. Do not
                  adjust more than plus or minus <strong>1/16&quot;</strong> of
                  an inch. If you need to go farther than that, contact support
                  because something is likely incorrect.
                </>
              )}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Ingrese la cantidad que desea ajustar el Robot cuando hace grip en cada Drill o Carousel. Puede utilizar un número negativo para moverlo en una dirección y un número positivo para moverlo en la otra."
                : "Type the amount you want to adjust the robot when gripping at each drill or carousel. You can use a negative number to move one direction and a positive number to move the other."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "En máquinas Right-to-Left, un número positivo debe mover el Robot hacia la izquierda y un número negativo debe moverlo hacia la derecha. En máquinas Left-to-Right, esta lógica se invierte."
                : "On right-to-left machines, a positive number should move the robot left and a negative number should move it right. On left-to-right machines, this logic is reversed."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Esto se utiliza comúnmente al ajustar la dimensión Z del Carousel. El Carousel es el único axis que no puede moverse hacia arriba/abajo o izquierda/derecha, por lo que puede ser necesario utilizar Robot Offsets para ajustarlo correctamente."
                : "This is commonly used when adjusting the Z dimension on the carousel. The carousel is the only axis that cannot move up/down or left/right, so robot offsets may be needed to dial it in."}
            </p>
          </div>
        </section>

        <section className="instructionSection">
          <div className="panel">
            <div className="panelHeader">
              <h2 className="panelTitle">
                {isSpanish
                  ? "Calibrating the Carousel"
                  : "Calibrating the Carousel"}
              </h2>

              <p className="panelText strongText">
                {isSpanish
                  ? "Si no está roto, no lo arregle."
                  : "If it isn't broke, don't fix it."}
              </p>
            </div>

            <p className="helperText">
              {isSpanish
                ? "Normalmente no es necesario volver a calibrar el Carousel. Recalibre el Carousel solamente cuando el Robot esté haciendo grip demasiado hacia la izquierda o derecha del chuck, lo que significa que la Rotation Calibration está desviada."
                : "The carousel should not normally need to be recalibrated. Only recalibrate the carousel when the robot is gripping too far to the left or right of the chuck, meaning the rotation calibration is off."}
            </p>

            <p className="helperText">
              {isSpanish
                ? "Si el Robot está centrado de izquierda a derecha pero está demasiado alto o bajo, esto puede corregirse utilizando Robot Offsets. Si el Robot está centrado pero demasiado lejos o demasiado cerca, también puede corregirse con Robot Offsets."
                : "If the robot is centered left and right but too high or too low, this can be fixed using the Robot Offset screen. If the robot is centered but too far away or too close, that can also be fixed with Robot Offsets."}
            </p>

            <div className="stepList">
              <div className="stepCard">
                <div className="stepNumber">1</div>

                <p>
                  {isSpanish
                    ? "Vaya a la pantalla Robot Calibration."
                    : "Navigate to the robot calibration screen."}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>

                <p>
                  {isSpanish ? (
                    <>
                      En la esquina inferior derecha, haga clic en el botón{" "}
                      <strong>Home Carousel</strong>.
                    </>
                  ) : (
                    <>
                      In the bottom right corner, click the{" "}
                      <strong>Home Carousel</strong> button.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>

                <p>
                  {isSpanish
                    ? "La pantalla le pedirá que retire Pin 5 del Carousel y lo coloque en la Homing Position."
                    : "The screen will prompt you to remove pin 5 from the carousel and place it in the homing position."}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>

                <p>
                  {isSpanish ? (
                    <>
                      Haga clic en <strong>OK</strong> cuando la pantalla indique
                      que se está moviendo a Position 5. Cuando se le indique,
                      retire la tool de Pin 5 y colóquela a un lado. Utilice una
                      llave Allen de <strong>5mm</strong> para retirar el tornillo
                      y el pin de la parte superior de Position 5.
                    </>
                  ) : (
                    <>
                      Click OK when the screen says it is moving to position 5.
                      When prompted, take the tool off pin 5 and set it aside. Use
                      a 5mm Allen wrench to remove the screw and pin from the top
                      of position 5.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">5</div>

                <p>
                  {isSpanish
                    ? "Coloque el pin y el tornillo en la Homing Position, ubicada en la parte inferior de la plate justo detrás de Pin 5."
                    : "Place the pin and screw into the homing position, which is located on the bottom side of the plate just behind pin 5."}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">6</div>

                <p>
                  {isSpanish ? (
                    <>
                      Presione <strong>OK</strong>. El Carousel girará lentamente
                      hasta que el Homing Pin haga contacto con el stopping block.
                      Después girará de regreso al centro y le pedirá que vuelva a
                      colocar Pin 5 y cualquier tool que estuviera instalada en
                      él.
                    </>
                  ) : (
                    <>
                      Press OK. The carousel will slowly rotate until the homing
                      pin bumps into the stopping block. It will then rotate back
                      to the middle and prompt you to replace pin 5 and any tool
                      that was on it.
                    </>
                  )}
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">7</div>

                <p>
                  {isSpanish
                    ? "Intente hacer Preload del Carousel nuevamente. Si el Robot todavía no lo recoge suavemente, todos los ajustes restantes deben realizarse utilizando la pantalla Robot Offsets."
                    : "Try to preload the carousel again. If the robot is still not picking it up smoothly, all remaining adjustments should be made using the Robot Offset screen."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}