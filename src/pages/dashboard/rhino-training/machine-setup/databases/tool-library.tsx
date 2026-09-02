import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

export default function ToolLibraryPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup / Databases"
          language={language}
          onLanguageChange={changeLanguage}
        />

        {/* HERO */}
        <section className="heroPanel">
          <h1>Tool Library</h1>

          <p>
            {isSpanish
              ? "Esta pantalla se utiliza para administrar todos los drill bits y tooling utilizados por la máquina."
              : "This screen is used to manage all drill bits and tooling used by the machine."}
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/tool-library/images/tool-library-01-main-screen.png"
            alt="Tool Library main screen"
            tall
          />

          <p
            className="helperText"
            style={{
              color: "#ff4d4d",
              fontWeight: 600,
            }}
          >
            {isSpanish
              ? "Esta pantalla debe tener todos los drill bits de DeMichele configurados con las profundidades y velocidades correctas. ¡Modifique esta pantalla bajo su propio riesgo!"
              : "This screen should have all of DeMichele’s drill bits set to the correct depths and speeds. Adjust this screen at your own risk!"}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Esta pantalla mantiene un registro de todos los bits que pueden utilizarse en la máquina. Debido a que los tool chucks tienen un hard stop set screw, la máquina utiliza la longitud del drill bit para determinar qué tan profundo debe perforar y así obtener resultados consistentes."
              : "This screen keeps track of all the bits that can be run through the machine. Because the tool chucks have a hard stop set screw, the machine uses the drill bit length to determine how deep to drill for consistent results."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Aquí también puede ver y ajustar drill feed rate, step rate y RPM."
              : "You can also view and adjust drill feed rate, step rate, and RPM here."}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Para aumentar la plunge speed de cualquier bit, actualice{" "}
                <strong>DRILL FEED.</strong>
              </>
            ) : (
              <>
                To increase the plunge speed of any bit, update the{" "}
                <strong>DRILL FEED.</strong>
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                Para aumentar la routing speed de un endmill bit, actualice{" "}
                <strong>STEP FEED.</strong>
              </>
            ) : (
              <>
                To increase the routing speed of an endmill bit, update the{" "}
                <strong>STEP FEED.</strong>
              </>
            )}
          </p>
        </section>

        {/* ADDING BITS */}
        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Agregar nuevos bits"
                : "Adding New Bits"}
            </h2>
          </div>

          <p>
            {isSpanish
              ? "Aquí es donde puede agregar sus propios drill bits. El método más fácil es copiar un bit existente y modificar los valores para que coincidan con su nueva herramienta."
              : "This is where you can add your own drill bits. The easiest method is to copy an existing bit and modify the values to match your new tool."}
          </p>

          <p>
            {isSpanish
              ? "Tenga en cuenta que el bit también debe agregarse en Glazier Studio o PartnerPak antes de que pueda utilizarse realmente en la máquina."
              : "Keep in mind: the bit must also be added into Glazier Studio or PartnerPak before it can actually be used on the machine."}
          </p>
        </section>

        {/* TYPES OF BITS */}
        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Tipos de bits"
                : "Types of Bits"}
            </h2>
          </div>

          <p>
            {isSpanish ? (
              <>
                <strong>Countersink:</strong> La mayoría de las máquinas vienen
                con tres countersinks estándar (CSD02-A, CSD02-B, CSD04-A).
              </>
            ) : (
              <>
                <strong>Countersink:</strong> Most machines come with three
                standard countersinks (CSD02-A, CSD02-B, CSD04-A).
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? 'La columna CTSK controla el diámetro final del countersink hole. Este valor se basa en el tamaño de la cabeza del tornillo. Una práctica común es agregar aproximadamente .010" para que el tornillo quede ligeramente por debajo de la superficie.'
              : 'The CTSK column controls the finished diameter of the countersink hole. This is based on the screw head size. A common practice is to add ~.010" so the screw sits slightly below the surface.'}
          </p>

          <p
            className="helperText"
            style={{
              color: "#f59e0b",
            }}
          >
            {isSpanish
              ? 'También puede utilizar countersinks para perforar agujeros estándar cambiando la operation a "drill" y configurando una depth. Esto evita tool changes, pero NO utilizará la columna CTSK al programarlo. (Use Drill operation)'
              : 'You can also use countersinks to drill standard holes by switching the operation to "drill" and setting a depth. This avoids tool changes, but you will NOT use the CTSK column when programming this. (Use Drill operation)'}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                <strong>Countersink Router:</strong> (CSR bits) Funcionan de
                manera similar a un countersink estándar, pero también permiten
                routing utilizando una pequeña punta endmill. Son extremadamente
                útiles para hinge preps y EPT cutouts.
              </>
            ) : (
              <>
                <strong>Countersink Router:</strong> (CSR bits) These function
                like a standard countersink but also allow routing using a small
                endmill tip. These are extremely useful for hinge preps and EPT
                cutouts.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                <strong>Drill Bits:</strong> Bits estándar de DeMichele
                utilizados solamente para drilling. Vienen en longitudes A y B
                (A = 2.66&quot;, B = 3.5&quot;). Los tamaños comienzan en D01 y
                continúan hacia arriba.
              </>
            ) : (
              <>
                <strong>Drill Bits:</strong> Standard drilling-only bits from
                DeMichele. These come in A and B lengths (A = 2.66&quot;, B =
                3.5&quot;). Sizes range from D01 upward.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish ? (
              <>
                <strong>Endmill Bits:</strong> Se utilizan para drilling Y
                routing. Siguen la misma lógica de tamaños que los drill bits.
                Por ejemplo, EM11 es más grande que EM08.
              </>
            ) : (
              <>
                <strong>Endmill Bits:</strong> Used for drilling AND routing.
                These follow the same sizing logic as drill bits. For example,
                EM11 is larger than EM08.
              </>
            )}
          </p>

          <p className="helperText">
            {isSpanish
              ? "Los endmills normalmente funcionan mejor a 36,000 RPM si su máquina lo permite. Si no, 18,000 RPM funciona bien con feed rates ajustados."
              : "Endmills typically run best at 36,000 RPM if your machine supports it. If not, 18,000 RPM works fine with adjusted feed rates."}
          </p>

          <p className="helperText">
            {isSpanish
              ? "El routing estándar incluye formas como rectangles, circles y slots. Cualquier forma más compleja debe programarse en AutoCAD e importarse."
              : "Standard routing includes shapes like rectangles, circles, and slots. Anything more complex must be programmed in AutoCAD and imported."}
          </p>
        </section>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}