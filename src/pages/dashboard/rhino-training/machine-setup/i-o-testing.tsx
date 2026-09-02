import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function IOTestingPage() {
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
          <h1>I/O Testing</h1>

          <p>
            {isSpanish
              ? "Esta página explica la pantalla I/O Testing y cómo puede utilizarse para troubleshooting básico de los machine inputs y outputs."
              : "This page explains the I/O Testing screen and how it can be used for basic troubleshooting of machine inputs and outputs."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla principal de I/O Testing"
                : "Main I/O Testing Screen"}
            </h2>

            <p>
              {isSpanish
                ? "I/O significa Inputs y Outputs. Dependiendo de su máquina, puede ver más o menos elementos en esta pantalla."
                : "I/O stands for Inputs and Outputs. Depending on your machine, you may see more or fewer items on this screen."}
            </p>
          </div>

          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/i-o-testing/images/i-o-testing-01-main-screen.png"
            alt="I/O Testing main screen"
            tall
          />
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Inputs vs Outputs"
                : "Inputs vs Outputs"}
            </h2>

            <p>
              {isSpanish
                ? "Comprender la diferencia entre inputs y outputs hace que esta pantalla sea mucho más fácil de utilizar."
                : "Understanding the difference between inputs and outputs makes this screen much easier to use."}
            </p>
          </div>

          <div className="twoColumn">
            <div className="infoCard">
              <h3>Outputs</h3>

              <p>
                {isSpanish
                  ? "Un output es algo que usted activa para hacer que ocurra otra acción. Normalmente, aquí es donde puede activar manualmente un componente como un vertical clamp o horizontal clamp."
                  : "An output is something you press to make another thing happen. This is usually where you manually fire an item such as a vertical clamp or horizontal clamp."}
              </p>
            </div>

            <div className="infoCard">
              <h3>Inputs</h3>

              <p>
                {isSpanish
                  ? "Un input es una señal que la máquina recibe de un button o sensor. Los inputs son útiles para revisar elementos como photo eyes, doors, locks y sensors."
                  : "An input is something the machine reads from a button or sensor. Inputs are useful for checking items like photo eyes, doors, locks, and sensors."}
              </p>
            </div>
          </div>

          <div className="callout info">
            <p>
              {isSpanish
                ? "La mayoría de las veces, solamente necesitará utilizar el lado de Outputs. El lado de Outputs le permite activar manualmente componentes accionados por aire que normalmente son activados automáticamente por el software."
                : "Most of the time, you will only need to use the output side. The output side lets you manually activate air-driven components that are normally fired automatically by the software."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Usar I/O Testing para Troubleshooting"
                : "Using I/O Testing for Troubleshooting"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla se utiliza principalmente cuando intenta identificar si un componente específico está funcionando correctamente."
                : "This screen is mainly used when trying to identify whether a specific component is working correctly."}
            </p>
          </div>

          <p className="helperText">
            {isSpanish
              ? "Por ejemplo, si H-Clamp Saw Out no está funcionando correctamente, puede venir a esta pantalla y activar manualmente ese output hacia adelante y hacia atrás para ayudar a identificar o probar el problema."
              : "For example, if the H-Clamp saw out is not working well, you could come to this screen and manually fire that output back and forth to help identify or test the issue."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "El lado de Inputs también puede mostrar si los infeed y outfeed photo eyes están funcionando correctamente. Coloque una pieza de metal frente al photo eye y verifique si el input se activa en la pantalla."
              : "The input side can also show whether the infeed and outfeed photo eyes are working correctly. Place a piece of metal in front of the eye and check whether the input lights up on the screen."}
          </p>

          <div className="callout warning">
            <h3>
              {isSpanish
                ? "Nota de Troubleshooting"
                : "Troubleshooting Note"}
            </h3>

            <p>
              {isSpanish
                ? "Esta página es una descripción general. Más adelante se pueden vincular guías de troubleshooting más detalladas desde esta sección."
                : "This page is a general overview. More detailed troubleshooting guides can be linked from this section later."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h3>
            {isSpanish
              ? "Descripción general de I/O Testing completada"
              : "I/O Testing Overview Complete"}
          </h3>

          <p>
            {isSpanish
              ? "Utilice esta pantalla para probar outputs manualmente y verificar inputs mientras realiza troubleshooting del comportamiento de la máquina."
              : "Use this screen to manually test outputs and verify inputs while troubleshooting machine behavior."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}