import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/jog-axis/images/jog-axis-01-main-screen.png",
  rollers:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/jog-axis/images/jog-axis-02-jog-rollers.png",
};

export default function JogAxisPage() {
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
          <h1>Jog Axis</h1>

          <p>
            {isSpanish
              ? "Jog Axis le permite mover componentes individuales de la máquina uno a la vez. Esto es útil cuando necesita reposicionar un motor, mover el pusher fuera del camino, hacer home a ciertos componentes o mover manualmente un axis a una ubicación específica."
              : "Jog Axis allows you to move individual machine components one at a time. This is useful when you need to reposition a motor, move the pusher out of the way, home certain components, or manually move an axis to a specific location."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla Jog Axis"
                : "Jog Axis Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla es similar a la pantalla I/O porque le permite controlar componentes individuales, pero Jog Axis se enfoca en mover los machine axes y motors."
                : "This screen is similar to the I/O screen because it allows you to control individual components, but Jog Axis focuses on moving machine axes and motors."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Jog Axis main screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                Puede navegar hasta el motor o componente que necesita mover y
                utilizar los botones <strong>+</strong> y <strong>-</strong> para
                hacer jog lentamente del motor en cualquier dirección.
              </>
            ) : (
              <>
                You can navigate to the motor or component you need to move and
                use the <strong>+</strong> and <strong>-</strong> buttons to
                slowly jog that motor in either direction.
              </>
            )}
          </p>

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  El botón <strong>Move To</strong> le permite enviar un axis
                  directamente a una posición específica en lugar de moverlo
                  poco a poco utilizando jog.
                </>
              ) : (
                <>
                  The <strong>Move To</strong> button lets you send an axis
                  directly to a specific position instead of jogging it one
                  small amount at a time.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Usos comunes"
                : "Common Uses"}
            </h2>

            <p>
              {isSpanish
                ? "Jog Axis es más útil cuando necesita posicionar manualmente componentes de la máquina."
                : "Jog Axis is most useful when you need to manually position machine components."}
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>
                {isSpanish
                  ? "Mover el Pusher"
                  : "Move the Pusher"}
              </h3>

              <p>
                {isSpanish ? (
                  <>
                    Un uso común es mover el pusher fuera del camino. Por
                    ejemplo, puede ingresar <strong>300&quot;</strong> y
                    presionar <strong>Move To</strong> para enviar el pusher
                    fuera de la máquina o fuera del camino para poder mover un
                    stick.
                  </>
                ) : (
                  <>
                    A common use is moving the pusher out of the way. For
                    example, you can enter <strong>300&quot;</strong> and press{" "}
                    <strong>Move To</strong> to send the pusher out of the
                    machine or out of the way so you can move a stick.
                  </>
                )}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>
                {isSpanish
                  ? "Home del Pusher"
                  : "Home the Pusher"}
              </h3>

              <p>
                {isSpanish
                  ? "Puede utilizar esta pantalla para hacer home al pusher cuando sea necesario."
                  : "You can use this screen to home the pusher when needed."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>
                {isSpanish
                  ? "Jog de Saw Angles"
                  : "Jog Saw Angles"}
              </h3>

              <p>
                {isSpanish
                  ? "Esta pantalla puede utilizarse para hacer jog de los saw angles hasta la posición deseada."
                  : "This screen can be used to jog saw angles to the desired position."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>
                {isSpanish
                  ? "Jog de Rollers"
                  : "Jog Rollers"}
              </h3>

              <p>
                {isSpanish
                  ? "Los motor-powered rollers pueden moverse mediante jog o enviarse a una posición específica utilizando los roller controls."
                  : "Motor-powered rollers can be jogged or moved to a specific position using the roller controls."}
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Tool Carousel</h3>

              <p>
                {isSpanish
                  ? "El Tool Carousel también puede moverse mediante jog desde esta pantalla cuando sea necesario."
                  : "The tool carousel can also be jogged from this screen when needed."}
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Jog Rollers</h2>

            <p>
              {isSpanish
                ? "La pestaña Rollers le permite controlar los motor-driven rollers."
                : "The Rollers tab gives you control over the motor-driven rollers."}
            </p>
          </div>

          <TrainingImage
            src={images.rollers}
            alt="Jog Rollers screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                Para mover los motor-driven rollers, haga clic en la pestaña{" "}
                <strong>Rollers</strong>. Verá los mismos botones{" "}
                <strong>+</strong> y <strong>-</strong>, junto con el botón{" "}
                <strong>Move To</strong>, lo que le permite hacer jog de los
                rollers hasta la posición que necesite.
              </>
            ) : (
              <>
                To move the motor-driven rollers, click the{" "}
                <strong>Rollers</strong> tab. You will see the same{" "}
                <strong>+</strong> and <strong>-</strong> buttons, along with a{" "}
                <strong>Move To</strong> button, allowing you to jog the rollers
                to the position you need.
              </>
            )}
          </p>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Jog Axis completado"
              : "Jog Axis Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe cómo se utiliza Jog Axis para mover motors individuales, reposicionar el pusher, hacer home a componentes, mover saw angles, mover rollers y controlar el Tool Carousel."
              : "You now know how Jog Axis is used to move individual motors, reposition the pusher, home components, jog saw angles, move rollers, and control the tool carousel."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}