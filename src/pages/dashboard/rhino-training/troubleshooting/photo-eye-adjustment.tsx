import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function PhotoEyeAdjustmentPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Troubleshooting / Photo Eye Adjustment"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Photo Eye Adjustment</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-image-left.png"
                alt="Photo Eye Left"
              />
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              <img
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-image-right.png"
                alt="Photo Eye Right"
              />
            </div>
          </div>

          <p
            style={{
              marginTop: "30px",
              textAlign: "center",
              maxWidth: "1100px",
              marginInline: "auto",
            }}
          >
            {isSpanish
              ? "Estos Photo Eyes le indican a la máquina cuándo la part entra y sale de la máquina. Si alguno se bloquea, la máquina no podrá medir correctamente el Stock Length o no podrá detectar cuándo se retira la pieza, lo que puede hacer que aparezca un botón OK cada vez indicando que la part fue removida."
              : "These photo eyes are what tells the machine when the part enters and exits the machine. If either of them get blocked the machine will not be able to measure the stock length or not be able to tell when the piece is removed and makes you click an okay button each time saying that the part has been removed."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Ajustando la sensibilidad"
                : "Adjusting the Sensitivity"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Cada Photo Eye tiene un dial amarillo en la parte superior o lateral. Este dial puede utilizarse para aumentar o disminuir la sensibilidad del eye. A veces la sensibilidad está demasiado alta y el eye detecta la parte frontal de la máquina. Otras veces está demasiado baja y ni siquiera alcanza a detectar la part."
              : "Each photo eye has a yellow dial on the top or side of the eye. This dial can be used to strengthen or weaken the sensitivity of the eye. Sometimes the eye is turned up so high that it senses the front of the machine, sometimes it is turned down so low that it cannot even reach the part."}
          </p>

          <p>
            {isSpanish
              ? "La mayoría de las veces, la sensibilidad está bien pero el Photo Eye está muy sucio, haciendo que detecte cosas que realmente no están allí."
              : "More often than not, the sensitivity is fine but the eye is super dirty so it thinks it is seeing things that are not there."}
          </p>

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "Consejo de limpieza"
                : "Cleaning Tip"}
            </h3>

            <p>
              {isSpanish
                ? "Use una toalla de papel con un poco de alcohol desnaturalizado para limpiar el lens del Photo Eye."
                : "Take a paper towel with some denatured alcohol to clean the lens of the eye."}
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "20px",
              overflow: "hidden",
              marginTop: "30px",
            }}
          >
            <img
              src="https://rhino-training-cdn.b-cdn.net/troubleshooting/photo-eye-adjustment/images/photo-eye-adjustment-io-testing.png"
              alt="I/O Testing Screen"
            />
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Usando la pantalla I/O Testing"
                : "Using the I/O Testing Screen"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Si necesita ajustar la sensibilidad del Photo Eye, es mucho más fácil utilizar esta pantalla para ayudarle."
              : "If you do need to adjust the sensitivity of the eye, it is much easier to use this screen to help you do it."}
          </p>

          <p>
            {isSpanish ? (
              <>
                Desde la pantalla principal, vaya a{" "}
                <strong>Machine Setup</strong> y después a{" "}
                <strong>I/O Testing</strong>. Estos botones se encenderán cuando
                el Photo Eye esté activado y se apagarán cuando no haya nada
                frente al eye.
              </>
            ) : (
              <>
                From the home screen navigate to{" "}
                <strong>Machine Setup</strong> and then to{" "}
                <strong>I/O Testing</strong>. These buttons will light up when
                the eye is triggered and turn off when nothing is in front of
                it.
              </>
            )}
          </p>

          <p>
            {isSpanish
              ? "Mueva la pantalla de manera que pueda verla mientras hace los ajustes y use su mano para activar el Photo Eye. Aumente lentamente la sensibilidad hasta que el Photo Eye funcione correctamente."
              : "Move the screen so you can see it while you make adjustments and use your hand to trigger the eye. Slowly increase the sensitivity until the photo eye is properly working."}
          </p>

          <div className="callout danger">
            <h3>
              {isSpanish
                ? "Si los Inputs permanecen encendidos"
                : "If the Inputs Stay On"}
            </h3>

            <p>
              {isSpanish
                ? "Si estos botones permanecen encendidos constantemente, normalmente significa que el Photo Eye está sucio y necesita limpiarse, o que la sensibilidad está demasiado alta."
                : "If these buttons are constantly on, it either means the eye is dirty and needs to be cleaned or the sensitivity is turned up too high."}
            </p>
          </div>
        </section>

        <section className="completionBox">
          <h2>
            {isSpanish
              ? "Dato curioso"
              : "Fun Fact"}
          </h2>

          <p>
            {isSpanish
              ? "Las máquinas antiguas solían tener cuatro de estos Photo Eyes. Antes utilizábamos los dos eyes del centro, pero desde entonces el software fue cambiado para utilizar solamente el primer y el último Photo Eye."
              : "Older machines used to have 4 of these photo eyes. We used to utilize the middle two eyes but have since changed the software to only look at the first and last photo eye."}
          </p>

          <p>
            {isSpanish
              ? "Básicamente, tiene dos Photo Eyes adicionales que pueden utilizarse como reemplazos si el Infeed Photo Eye o el Outfeed Photo Eye llegan a fallar."
              : "Essentially you guys have two extra photo eyes that can be used as replacements if the infeed or outfeed eye ever go bad."}
          </p>
        </section>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}