import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/home-axis/images/home-axis-01-main-screen.png",
};

export default function HomeAxisPage() {
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
          <h1>Home Axis</h1>

          <p>
            {isSpanish
              ? "La pantalla Home Axis mueve los motores de la máquina de regreso a sus Home Positions para que la máquina sepa desde dónde comienza cada axis."
              : "The Home Axis screen moves the machine motors back to their home positions so the machine knows where each axis is starting from."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Home Axis Screen</h2>

            <p>
              {isSpanish
                ? "Esta pantalla puede verse diferente dependiendo del modelo de máquina que tenga, pero el concepto es el mismo."
                : "This screen may look different depending on the model machine you have, but the concept is the same."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Home Axis main screen"
            tall
          />

          <p className="helperText">
            {isSpanish ? (
              <>
                Cuando presione <strong>Home</strong>, la máquina moverá todos
                los motores a sus Home Positions y comenzará el homing del
                pusher.
              </>
            ) : (
              <>
                When you press <strong>Home</strong>, the machine will move all
                motors to their home position and begin homing the pusher.
              </>
            )}
          </p>

          <div className="callout info">
            <p>
              {isSpanish
                ? "La lista exacta de motores y la distribución de los axes puede variar según el modelo de máquina. Concéntrese en el propósito de esta pantalla: regresar los machine axes a Home Positions conocidas."
                : "The exact motor list and axis layout may vary by machine model. Focus on the purpose of the screen: returning the machine axes to known home positions."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Nota para 5000 Series y High-Speed Spindles"
                : "5000 Series and High-Speed Spindle Note"}
            </h2>

            <p>
              {isSpanish
                ? "Algunas máquinas comienzan un proceso adicional inmediatamente después de completar Home."
                : "Some machines begin an additional process immediately after homing."}
            </p>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Si tiene una <strong>5000 Series machine</strong> o cualquier
                  máquina con <strong>High-Speed Spindles</strong>, comenzará
                  inmediatamente un warm-up procedure después de que la máquina
                  complete Home.
                </>
              ) : (
                <>
                  If you have a <strong>5000 series machine</strong> or any
                  machine with <strong>high-speed spindles</strong>, it will
                  immediately start a warm-up procedure after the machine homes.
                </>
              )}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Home Axis completado"
              : "Home Axis Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe que Home Axis se utiliza para regresar los motores de la máquina a sus posiciones iniciales y que algunas máquinas pueden comenzar inmediatamente un Spindle Warm-Up después de completar Home."
              : "You now know that Home Axis is used to return machine motors to their starting positions and that some machines may begin a spindle warm-up immediately after homing."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}