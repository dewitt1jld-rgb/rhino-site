import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const pdfUrl =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/maintenance/MAINTENANCE%20GUIDE.pdf";

export default function MaintenancePage() {
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
            breadcrumb="Rhino Training / Troubleshooting / Maintenance"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Maintenance</h1>

            <p>
              {isSpanish
                ? "Mantener la máquina limpia es una de las cosas más importantes que puede hacer para prevenir problemas."
                : "Keeping the machine clean is one of the most important things you can do to prevent problems."}
            </p>
          </section>

          <section className="panel center">
            <h2>
              {isSpanish
                ? "No puedo enfatizar esto lo suficiente"
                : "I Cannot Stress This Enough"}
            </h2>

            <p className="helperText">
              {isSpanish ? (
                <>
                  Mantener la máquina <strong>LIMPIA</strong> hará diez veces más
                  que cualquier otro Preventative Maintenance. Esto significa
                  más que simplemente soplar los chips. También significa
                  limpiar las paredes y eliminar todo el polvo y aceite de la
                  máquina y sus componentes.
                </>
              ) : (
                <>
                  Keeping the machine <strong>CLEAN</strong> will do ten times
                  more than any other preventative maintenance. This means more
                  than just blowing out chips. It means wiping down the walls
                  and getting all dust and oil off the machine and components.
                </>
              )}
            </p>

            <a
              className="pdfButton"
              href={pdfUrl}
              download
            >
              <span className="pdfIcon">
                PDF
              </span>

              <span>
                {isSpanish
                  ? "Descargar Maintenance Guide imprimible"
                  : "Download Printable Maintenance Guide"}
              </span>
            </a>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Startup Safety Check"
                  : "Startup Safety Check"}
              </h2>

              <p>
                {isSpanish
                  ? "Frecuencia: Cada turno o cada vez que se encienda la máquina"
                  : "Frequency: Every shift or machine startup"}
              </p>
            </div>

            <ul className="checkList">
              <li>
                {isSpanish
                  ? "Camine alrededor de la máquina y verifique que no haya obstrucciones dentro de la máquina o alrededor de las partes móviles"
                  : "Walk around machine and verify no obstructions are inside machine or around moving parts"}
              </li>

              <li>
                {isSpanish
                  ? "Verifique que no haya riesgos de seguridad"
                  : "Verify no safety hazards are present"}
              </li>

              <li>
                {isSpanish
                  ? "Verifique que nada interfiera con el Autoloader o Positioner"
                  : "Verify nothing will interfere with autoloader or positioner"}
              </li>

              <li>
                {isSpanish
                  ? "Air Supply encendido"
                  : "Air supply turned ON"}
              </li>

              <li>
                {isSpanish
                  ? "Main Power encendido"
                  : "Main power turned ON"}
              </li>

              <li>
                {isSpanish
                  ? "Computadora encendida"
                  : "Computer powered ON"}
              </li>

              <li>
                {isSpanish
                  ? "Software RHINOFAB iniciado"
                  : "RHINOFAB software started"}
              </li>

              <li>
                {isSpanish
                  ? "Máquina lista para operar"
                  : "Machine ready for operation"}
              </li>

              <li>
                {isSpanish
                  ? "Revise los Drill Bits y Router Bits para detectar chips, desgaste o roturas"
                  : "Check drill bits and router bits for chips or breakage"}
              </li>

              <li>
                {isSpanish
                  ? "Verifique el funcionamiento del Dust Extractor y la posición del Oil Misting Head"
                  : "Verify dust extractor operation and oil misting head position"}
              </li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Operational Maintenance"
                  : "Operational Maintenance"}
              </h2>

              <p>
                {isSpanish
                  ? "Realice estas tareas mientras la máquina está en operación."
                  : "Perform during machine operation."}
              </p>
            </div>

            <ul className="checkList">
              <li>
                {isSpanish
                  ? "Limpie los Photo Eyes usando la Air Gun"
                  : "Clean photo eyes using air gun"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie el Profile Path desde el lado outfeed durante el ciclo de la máquina"
                  : "Clean profile path from outfeed side during machine cycle"}
              </li>

              <li>
                {isSpanish
                  ? "Verifique la precisión de las fabrications"
                  : "Verify fabrication accuracy"}
              </li>

              <li>
                {isSpanish
                  ? "Inspeccione Cut Quality, Hole Quality y la superficie del producto"
                  : "Inspect cut quality, hole quality, and product surface"}
              </li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Shutdown Maintenance"
                  : "Shutdown Maintenance"}
              </h2>
            </div>

            <ul className="checkList">
              <li>
                {isSpanish
                  ? "Limpie los residuos del interior y exterior de la máquina"
                  : "Clean debris from inside and outside machine"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie las Table Surfaces"
                  : "Clean table surfaces"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie los Machine Rails"
                  : "Clean machine rails"}
              </li>

              <li>
                {isSpanish
                  ? "Cierre el programa RHINOFAB"
                  : "Close RHINOFAB program"}
              </li>

              <li>
                {isSpanish
                  ? "Apague la computadora"
                  : "Shut down computer"}
              </li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Weekly Maintenance"
                  : "Weekly Maintenance"}
              </h2>
            </div>

            <ul className="checkList">
              <li>
                {isSpanish
                  ? "Revise la tensión del Autoloader Belt y la alineación de los cleats"
                  : "Check autoloader belt tension and cleat alignment"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie Saw Dust y residuos"
                  : "Clean saw dust and debris"}
              </li>

              <li>
                {isSpanish
                  ? "Revise los niveles de Hydraulic Fluid en las Upcut Saws"
                  : "Check hydraulic fluid levels on upcut saws"}
              </li>

              <li>
                {isSpanish
                  ? "Inspeccione la Saw Blade y verifique que el arbor esté apretado"
                  : "Inspect saw blade and arbor tightness"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie los Photo Eyes de infeed y outfeed con alcohol wipes"
                  : "Clean infeed and outfeed photo eyes with alcohol wipes"}
              </li>

              <li>
                {isSpanish
                  ? "Limpie las paredes, ventanas, table, Tool Holders y Tool Holder Pins"
                  : "Wipe walls, windows, table, tool holders, and tool holder pins"}
              </li>

              <li>
                {isSpanish
                  ? "Inspeccione la máquina para detectar fugas de fluidos o aire"
                  : "Inspect for fluid or air leaks"}
              </li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                {isSpanish
                  ? "Nivelación"
                  : "Level"}
              </h2>
            </div>

            <ul className="checkList">
              <li>
                {isSpanish
                  ? "Asegúrese de que los orange rollers del infeed estén nivelados con los bottom pads de la máquina"
                  : "Ensure that the infeed orange rollers are level with the bottom pads of the machine"}
              </li>

              <li>
                {isSpanish
                  ? "Asegúrese de que el Back Fence del rail esté recto y alineado con el Back Fence de la máquina"
                  : "Ensure that the back fence of the rail is straight with the back fence of the machine"}
              </li>

              <li>
                {isSpanish
                  ? "Asegúrese de que los orange rollers del outfeed estén nivelados con los bottom pads de la máquina"
                  : "Ensure that the outfeed orange rollers are level with the bottom pads of the machine"}
              </li>
            </ul>
          </section>

          <section className="completionBox">
            <h2>
              {isSpanish
                ? "Annual Maintenance"
                : "Annual Maintenance"}
            </h2>

            <ul className="checkList annualList">
              <li>
                {isSpanish
                  ? "Reemplace cualquier parte que no funcione o que esté desgastada"
                  : "Replace any non-working or worn parts"}
              </li>
            </ul>

            <p>
              {isSpanish
                ? "Siempre hay técnicos disponibles para realizar revisiones anuales de la máquina. Si desea programar un Preventative Maintenance Check, comuníquese con David Cole."
                : "Technicians are always available to do yearly checkups on the machine. If you would like to schedule a preventative maintenance check on the machine, please contact David Cole."}
            </p>

            <p>
              {isSpanish
                ? "Revisaremos todo lo mencionado anteriormente y también proporcionaremos información sobre cualquier cosa que observemos que pueda estar fuera de lo normal."
                : "We will cover everything listed above as well as provide insight on anything we see that may be out of the ordinary."}
            </p>

            <p>
              {isSpanish
                ? "También es un excelente momento para realizar retrainings y refreshers para los Machine Operators."
                : "This is also a great time to do retrainings and refreshers for machine operators."}
            </p>

            <p>
              <strong>
                David Cole - (941) 276-947
              </strong>
            </p>
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

          .pdfButton {
            margin: 34px auto 0;
            display: inline-flex;
            align-items: center;
            gap: 18px;
            padding: 18px 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.16);
            border: 1px solid rgba(245, 158, 11, 0.42);
            color: #ffffff;
            text-decoration: none;
            font-weight: 900;
            font-size: 1.1rem;
          }

          .pdfButton:hover {
            background: rgba(245, 158, 11, 0.26);
            transform: translateY(-2px);
          }

          .pdfIcon {
            background: #ef4444;
            color: #fff;
            padding: 10px 12px;
            border-radius: 10px;
            font-weight: 900;
            letter-spacing: 0.08em;
          }

          .checkList {
            margin: 0;
            padding-left: 0;
            list-style: none;
            display: grid;
            gap: 12px;
          }

          .checkList li {
            color: #d8e0ec;
            font-size: 1.05rem;
            line-height: 1.65;
            font-weight: 650;
          }

          .checkList li::before {
            content: "☐";
            color: #f59e0b;
            font-weight: 900;
            margin-right: 10px;
          }

          .annualList {
            margin-bottom: 24px;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}