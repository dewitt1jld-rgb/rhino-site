import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function ChangeSawBladePage() {
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
          <h1>Change Saw Blade</h1>

          <p>
            {isSpanish
              ? "Esta página cubre el proceso básico para cambiar la saw blade en máquinas Rhino que no pertenecen a la serie 5000."
              : "This page covers the basic process for changing the saw blade on non-5000 series Rhino machines."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Antes de comenzar"
                : "Before You Begin"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla no hace mucho más que permitir que la saw baje ligeramente. En la mayoría de los casos, puede cambiar la saw blade desde cualquier pantalla en la que ya se encuentre."
                : "This screen does not do much beyond allowing the saw to drop down slightly. In most cases, you can change the saw blade from whatever screen you are already on."}
            </p>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Esta página es para{" "}
                  <strong>non-5000 series machines</strong>. El proceso de
                  extracción de la blade en la serie 5000 es diferente porque
                  esa pantalla realmente mueve la saw a la posición correcta.
                </>
              ) : (
                <>
                  This page is for <strong>non-5000 series machines</strong>. The
                  5000 series blade removal process is different because that
                  screen actually moves the saw into position.
                </>
              )}
            </p>
          </div>

          <div className="callout danger">
            <p>
              {isSpanish
                ? "Asegúrese siempre de que la máquina esté correctamente E-stopped antes de trabajar alrededor de la saw blade."
                : "Always make sure the machine is properly E-stopped before working around the saw blade."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pasos para Change Saw Blade"
                : "Change Saw Blade Steps"}
            </h2>

            <p>
              {isSpanish
                ? "Siga estos pasos cuidadosamente antes de retirar y reemplazar la saw blade."
                : "Follow these steps carefully before removing and replacing the saw blade."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <div>
                <h3>
                  {isSpanish
                    ? "E-stop la máquina"
                    : "E-stop the machine"}
                </h3>

                <p>
                  {isSpanish
                    ? "Asegúrese de que la máquina esté E-stopped. Si pudo abrir la saw door, ya debería estar E-stopped. La saw door tiene un timer de 7 segundos, así que después de presionar otro E-stop, espere aproximadamente 7 segundos y la puerta debería desbloquearse."
                    : "Make sure the machine is E-stopped. If you were able to open the saw door, it should already be E-stopped. The saw door has a 7-second timer, so after pressing another E-stop, wait about 7 seconds and the door should unlock."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Tome las wrenches correctas"
                    : "Grab the correct wrenches"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Tome las dos wrenches de la toolbox proporcionada con la
                      máquina. Una debe ser una <strong>40mm wrench</strong> y la
                      otra una <strong>27mm wrench</strong>.
                    </>
                  ) : (
                    <>
                      Get the two wrenches from the toolbox provided with the
                      machine. One should be a <strong>40mm wrench</strong> and
                      the other should be a <strong>27mm wrench</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Retire el oiler y la blue protective cover"
                    : "Remove the oiler and blue protective cover"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Retire el oiler de la blue protective cover. Luego retire
                      la cover quitando los dos M8 bolts con un{" "}
                      <strong>M6 Allen</strong>. Una vez que los bolts estén
                      fuera, gire la cover hacia adelante y retírela de la saw.
                    </>
                  ) : (
                    <>
                      Remove the oiler from the blue protective cover. Then
                      remove the cover by taking out the two M8 bolts using an{" "}
                      <strong>M6 Allen</strong>. Once the bolts are out, rotate
                      the cover forward and remove it from the saw.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Afloje la saw blade nut"
                    : "Break the saw blade nut loose"}
                </h3>

                <p>
                  {isSpanish
                    ? "Afloje la saw blade nut girando la outside nut en la misma dirección en la que gira la saw blade. Algunas saws pueden tener reverse thread nuts dependiendo de la orientación de la máquina."
                    : "Pop the saw blade nut loose by spinning the outside nut in the same direction the saw blade spins. Some saws may have reverse thread nuts depending on the handing of the machine."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Retire los disks y la blade"
                    : "Remove the disks and blade"}
                </h3>

                <p>
                  {isSpanish
                    ? "Retire los disks que sujetan la saw blade y observe qué disk va a cada lado de la blade. Son diferentes y su posición es importante."
                    : "Remove the disks holding the saw blade and note which disk goes on each side of the blade. They are different and their positions matter."}
                </p>

                <p>
                  {isSpanish
                    ? "Retire la blade usada e instale cuidadosamente la nueva blade. Si la nueva blade se siente floja o se desliza más fácilmente que la anterior, revise el center ring. Si el reducer ring salió junto con la blade usada, colóquelo en la nueva blade."
                    : "Remove the old blade and carefully install the new blade. If the new blade feels loose or slides on easier than the old blade, check the center ring. If the reducer ring was removed with the old blade, move it to the new blade."}
                </p>

                <p>
                  {isSpanish
                    ? "La forma más fácil de instalar el ring es colocar la blade sobre una superficie plana y golpear suavemente el ring en el centro con un rubber mallet."
                    : "The easiest way to install the ring is to lay the blade flat and gently tap the ring into the center with a rubber mallet."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Vuelva a ensamblar y verifique la dirección de la blade"
                    : "Reassemble and verify blade direction"}
                </h3>

                <p>
                  {isSpanish
                    ? "Vuelva a montar todo invirtiendo los pasos anteriores. Si algo suena mal o la blade no gira de manera uniforme, deténgase y repita el proceso."
                    : "Put everything back together by reversing the steps. If anything sounds bad or the blade does not spin evenly, stop and repeat the process."}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Recuerde: la saw blade corta hacia la back fence. La blade
                      debe instalarse con los teeth orientados en la dirección
                      correcta <strong>cada vez</strong>.
                    </>
                  ) : (
                    <>
                      Remember: the saw blade cuts toward the back fence. The
                      blade must be loaded with the teeth facing the correct
                      direction <strong>every time</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Change Saw Blade completado"
              : "Change Saw Blade Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora conoce el proceso básico para reemplazar de forma segura la saw blade, revisar el reducer ring, reinstalar los disks y verificar la dirección de la blade."
              : "You now know the basic process for safely replacing the saw blade, checking the reducer ring, reinstalling the disks, and verifying blade direction."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}