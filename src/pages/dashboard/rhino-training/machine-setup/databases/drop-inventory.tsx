import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function DropInventoryPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        <section className="heroPanel">
          <h1>Drop Inventory</h1>
          <p>
            Drop Inventory keeps track of usable drop material that can be pulled
            into future jobs.
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/drop-inventory/images/drop-inventory-01-main-screen.png"
            alt="Drop Inventory main screen"
            tall
          />

          <p className="helperText">
            The machine automatically tracks drops and adds them to this screen.
            As drops are used, they are automatically deleted from the list.
          </p>

          <p className="helperText">
            Sometimes while running a job, you may need to manually add or delete
            a drop depending on what material is actually available.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Adding Drops</h2>
          </div>

          <p>
            From the Fab Job pull stock screen, go to Drop Inventory. You will
            see the same screen shown above.
          </p>

          <p>
            Press <strong>Add</strong> and the machine will add a line item with
            the relevant part information, except for the length.
          </p>

          <p>
            Type in the drop length and press <strong>Update</strong>. The
            machine will return you to the previous screen, where you should now
            see the drop added to the pull material list.
          </p>

          <div className="callout info">
            <p>
              After adding a drop, you must re-optimize the job before
              continuing.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Deleting Drops</h2>
          </div>

          <p>
            Deleting works the opposite way. If the software is asking you to
            find a drop that someone else took, or you simply cannot find it,
            open Drop Inventory and select that drop.
          </p>

          <p>
            Then either press <strong>Delete</strong> on the screen or use the
            delete key on the keyboard.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Drop Size Default</h2>
          </div>

          <p>
            Drops are automatically tracked by the software. By default, a drop
            is usually anything bigger than <strong>60&quot;</strong>.
          </p>

          <div className="callout warning">
            <p>
              To change the default drop size, go to the <strong>Racks</strong>{" "}
              screen and update the value there.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Drop Inventory Complete</h2>
          <p>
            You now know how drops are tracked, how to add missing drops, how to
            delete unavailable drops, and where to change the default drop size.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}