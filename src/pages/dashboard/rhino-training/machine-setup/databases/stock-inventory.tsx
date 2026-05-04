import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function StockInventoryPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>

        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        {/* HERO */}
        <section className="heroPanel">
          <h1>Stock Inventory</h1>
          <p>
            This screen is used to manage stock lengths and material finishes that the machine will pull from.
          </p>
        </section>

        {/* MAIN IMAGE */}
        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/stock-inventory/images/stock-inventory-01-main-screen.png"
            alt="Stock inventory main screen"
            tall
          />

          <p className="helperText">
            This is where you keep track of what stock lengths and finishes you want to use.
            Most of the time, you will simply run a standard 289" stock length with unlimited quantity.
          </p>
        </section>

        {/* WHEN TO USE */}
        <section className="panel">
          <div className="panelHeader">
            <h2>When You Actually Need This</h2>
          </div>

          <p>
            In most cases, you won’t need to adjust this screen at all.
          </p>

          <p>
            The only time you’ll need to make changes is when you purchase a specific quantity
            of custom-length material. When added here, the machine will prioritize those
            custom lengths before defaulting back to standard 289" stock.
          </p>
        </section>

        {/* AUTOMATIC BEHAVIOR */}
        <div className="completionBox">
          <h2>Automatic Behavior</h2>

          <p>
            This screen will automatically generate new line items as you run new parts.
          </p>

          <p>
            Your only job is to verify that the stock length is correct (typically 289")
            and press update if needed.
          </p>
        </div>

      </TrainingLayout>
    </RequireActiveAccess>
  );
}