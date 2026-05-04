import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function RacksPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        <section className="heroPanel">
          <h1>Racks</h1>
          <p>
            The Racks screen is used to organize how your machine stores and
            categorizes both stock material and drops.
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/racks/images/racks-01-main-screen.png"
            alt="Racks main screen"
            tall
          />

          <p className="helperText">
            This screen typically comes preset with two racks — one for stock
            inventory and one for drop inventory.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>How Racks Work</h2>
          </div>

          <p>
            The purpose of this screen is to allow you to create multiple bins
            that represent how your shop is physically organized.
          </p>

          <div className="callout info">
            <p>
              You can organize racks by finish, color, part type, or any system
              that makes sense for your workflow.
            </p>
          </div>

          <p>
            For example, you might create one rack for bronze material and
            another for anodized material. The machine will then sort drops into
            the correct rack based on your setup.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Drop Size Control</h2>
          </div>

          <p>
            Another important setting on this screen is the minimum drop size.
          </p>

          <div className="callout warning">
            <p>
              Any material cut shorter than the minimum value will NOT be saved
              as a drop and will instead be treated as scrap.
            </p>
          </div>

          <p>
            This value is controlled by the <strong>MIN</strong> column in the
            rack settings.
          </p>
        </section>

        <div className="completionBox">
          <h2>Racks Complete</h2>
          <p>
            You now understand how racks organize material, how to structure
            your bins, and how minimum drop size affects what gets saved or
            discarded.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}