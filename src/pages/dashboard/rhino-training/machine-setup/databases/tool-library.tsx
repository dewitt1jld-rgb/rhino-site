import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function ToolLibraryPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>

        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        {/* HERO */}
        <section className="heroPanel">
          <h1>Tool Library</h1>
          <p>
            This screen is used to manage all drill bits and tooling used by the machine.
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/tool-library/images/tool-library-01-main-screen.png"
            alt="Tool library main screen"
            tall
          />

          <p className="helperText" style={{ color: "#ff4d4d", fontWeight: 600 }}>
            This screen should have all of Demichele’s drill bits set to the correct
            depths and speeds. Adjust this screen at your own risk!
          </p>

          <p className="helperText">
            This screen keeps track of all the bits that can be run through the machine.
            Because the tool chucks have a hard stop set screw, the machine uses the drill
            bit length to determine how deep to drill for consistent results.
          </p>

          <p className="helperText">
            You can also view and adjust drill feed rate, step rate, and RPM here. 
            </p>

            <p className="helperText">
            To increase the plunge speed of any bit, update the <strong>DRILL FEED.</strong> 
            </p>

            <p className="helperText">
            To increase the routing speed of an endmill bit, update the <strong>STEP FEED.</strong>
          </p>
        </section>

        {/* ADDING BITS */}
        <section className="panel">
          <div className="panelHeader">
            <h2>Adding New Bits</h2>
          </div>

          <p>
            This is where you can add your own drill bits. The easiest method is to copy
            an existing bit and modify the values to match your new tool.
          </p>

          <p>
            Keep in mind: the bit must also be added into Glazier Studio or PartnerPak
            before it can actually be used on the machine.
          </p>
        </section>

        {/* TYPES OF BITS */}
        <section className="panel">
          <div className="panelHeader">
            <h2>Types of Bits</h2>
          </div>

          <p>
            <strong>Countersink:</strong> 
            Most machines come with three standard countersinks (CSD02-A, CSD02-B, CSD04-A).
          </p>

          <p className="helperText">
            The CTSK column controls the finished diameter of the countersink hole.
            This is based on the screw head size. A common practice is to add ~.010"
            so the screw sits slightly below the surface.
          </p>

          <p style={{ color: "#f59e0b" }} className="helperText"> 
            You can also use countersinks to drill standard holes by switching the
            operation to "drill" and setting a depth. This avoids tool changes,
            but you will NOT use the CTSK column when programing this. (Use Drill operation)
          </p>

        <p className="helperText">
            <strong>Countersink Router:</strong> (CSR bits) These function like a standard
            countersink but also allow routing using a small endmill tip. These are extremely
            useful for hinge preps and EPT cutouts.
          </p>

      <p className="helperText">
            <strong>Drill Bits:</strong> Standard drilling-only bits from Demichele.
            These come in A and B lengths (A = 2.66", B = 3.5"). Sizes range from D01 upward.
          </p>

          <p className="helperText">
            <strong>Endmill Bits:</strong> Used for drilling AND routing. These follow the
            same sizing logic as drill bits. For example, EM11 is larger than EM08.
          </p>

          <p className="helperText">
            Endmills typically run best at 36,000 RPM if your machine supports it.
            If not, 18,000 RPM works fine with adjusted feed rates.
          </p>

          <p className="helperText">
            Standard routing includes shapes like rectangles, circles, and slots.
            Anything more complex must be programmed in AutoCAD and imported.
          </p>
        </section>

      </TrainingLayout>
    </RequireActiveAccess>
  );
}