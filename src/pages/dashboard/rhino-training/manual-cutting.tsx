import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/manual-cutting/images/manual-cutting-01-main-screen.png",
};

export default function ManualCuttingPage() {
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
          <h1>Manual Cutting</h1>

          <p>
            {isSpanish
              ? "Manual Cutting le permite cortar un stick a cualquier longitud o realizar rápidamente cortes repetidos cuando la pieza no requiere fabrications."
              : "Manual Cutting lets you cut a stick to any length or quickly make repeated cuts when the piece does not require fabrications."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Manual Cutting Screen</h2>

            <p>
              {isSpanish
                ? "Esta pantalla se utiliza cuando necesita cortar material a una medida específica sin ejecutar todo el flujo de trabajo de Fab Job."
                : "This screen is used when you need to cut material to size without running a full Fab Job workflow."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Manual Cutting main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Manual Cutting funciona muy bien cuando la pieza no tiene fabrications y necesita cortar rápidamente una part a la medida correcta."
              : "Manual Cutting works great when the piece does not have any fabrications and you need to quickly cut a part to size."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Cómo usar Manual Cutting"
                : "How to Use Manual Cutting"}
            </h2>

            <p>
              {isSpanish
                ? "Comience en la sección superior izquierda y complete los campos antes de presionar Start."
                : "Start in the upper-left section and work through the fields before pressing Start."}
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Ingrese las dimensiones de la part"
                    : "Enter part dimensions"}
                </h3>

                <p>
                  {isSpanish
                    ? "Ingrese el Part Height y Part Depth. Si tiene una upcut saw, también deberá ingresar el Saw Height."
                    : "Enter the part height and depth. If you have an upcut saw, you also need to enter the saw height."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Seleccione Saw Height cuando sea necesario"
                    : "Select saw height when needed"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Para upcut saws, use <strong>1</strong> para Low,{" "}
                      <strong>2</strong> para Mid y <strong>3</strong> para High.
                    </>
                  ) : (
                    <>
                      For upcut saws, use <strong>1</strong> for low,{" "}
                      <strong>2</strong> for mid, and <strong>3</strong> for high.
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
                    ? "Ingrese Stock Length o Drop Length"
                    : "Enter stock length or drop length"}
                </h3>

                <p>
                  {isSpanish
                    ? "Ingrese el Stock Length o la longitud del drop que desea utilizar."
                    : "Fill in the stock length or the length of the drop you want to use."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Configure la Repeat Quantity"
                    : "Set the repeat quantity"}
                </h3>

                <p>
                  {isSpanish
                    ? "Indique a la máquina cuántas veces desea repetir el mismo corte a la misma longitud."
                    : "Tell the machine how many times you want to repeat the same cut at the same length."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Ingrese el Cut Length"
                    : "Enter the cut length"}
                </h3>

                <p>
                  {isSpanish
                    ? "Ingrese el Cut Length terminado que desea que la máquina produzca."
                    : "Enter the finished cut length you want the machine to make."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Seleccione Lead y Trail Angles"
                    : "Select lead and trail angles"}
                </h3>

                <p>
                  {isSpanish
                    ? "Seleccione los angles en los que desea cortar la pieza. Algunas máquinas solamente permiten cortes de 90 grados, mientras que otras permiten un rango de angles más amplio."
                    : "Select the angles you want the piece to cut at. Some machines only support 90-degree cuts, while others allow a wider angle range."}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">7</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Configure Lead Trim y Trail Trim"
                    : "Set lead and trail trim"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Puede configurar tanto <strong>Lead Trim</strong> como{" "}
                      <strong>Trail Trim</strong>, pero el trim no puede
                      configurarse en <strong>0</strong>. Debe ser por lo menos{" "}
                      <strong>.25&quot;</strong>.
                    </>
                  ) : (
                    <>
                      You can set both the lead trim and trail trim, but the trim
                      cannot be set to <strong>0</strong>. It must be at least{" "}
                      <strong>.25&quot;</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">8</div>

              <div>
                <h3>
                  {isSpanish
                    ? "Presione Start"
                    : "Press Start"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Una vez que toda la información esté ingresada
                      correctamente, presione <strong>Start</strong> para
                      realizar el corte.
                    </>
                  ) : (
                    <>
                      Once all information is entered correctly, press{" "}
                      <strong>Start</strong> to make the cut.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Limitaciones de Angle"
                : "Angle Limitations"}
            </h2>

            <p>
              {isSpanish
                ? "El tipo de máquina determina cuáles angles están disponibles desde esta pantalla."
                : "Machine type affects which angles are available from this screen."}
            </p>
          </div>

          <div className="callout warning">
            <p>
              {isSpanish ? (
                <>
                  Si tiene una <strong>900</strong> o <strong>950</strong>,
                  solamente puede cortar a <strong>90 grados</strong>.
                </>
              ) : (
                <>
                  If you have a 900 or 950, you are only able to cut at{" "}
                  <strong>90 degrees</strong>.
                </>
              )}
            </p>
          </div>

          <div className="callout info">
            <p>
              {isSpanish ? (
                <>
                  Si tiene otro modelo de máquina, puede utilizar el dropdown de
                  Lead Angle o Trail Angle y seleccionar cualquier valor entre{" "}
                  <strong>45 grados</strong> y <strong>135 grados</strong>.
                </>
              ) : (
                <>
                  If you have another machine model, you can use the dropdown on
                  the lead or trail angle and select any degree between{" "}
                  <strong>45 degrees</strong> and <strong>135 degrees</strong>.
                </>
              )}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>5000 Series Note</h2>

            <p>
              {isSpanish
                ? "Manual Cutting puede no estar disponible actualmente en ciertas máquinas de la serie 5000."
                : "Manual Cutting may not currently be available on certain 5000 series machines."}
            </p>
          </div>

          <div className="callout danger">
            <p>
              {isSpanish
                ? "Si tiene una máquina de la serie 5000, esta página puede estar deshabilitada en su máquina. Cuando DeMichele actualice esta función y vuelva a funcionar, esta página de capacitación deberá actualizarse."
                : "If you have a 5000 series machine, this page may be disabled on your machine. When DeMichele updates this feature and it works again, this training page should be updated."}
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Manual Cutting completado"
              : "Manual Cutting Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora sabe cómo ingresar dimensiones, seleccionar Stock Length, configurar Cut Length, ajustar angles y trims, e iniciar un manual cut."
              : "You now know how to enter dimensions, choose stock length, set cut length, adjust angles and trims, and start a manual cut."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}