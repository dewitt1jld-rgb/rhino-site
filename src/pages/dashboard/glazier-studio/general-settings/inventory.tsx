import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

export default function InventoryPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            Inventory
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>Inventory</h1>
            <p className="helperText">
              Inventory management in Glazier Studio and PartnerPak is designed
              to track stock lengths, drops, and material usage between the
              software and Rhino machines.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Inventory System</p>
              <h2>How Inventory Works</h2>
            </div>

            <div className="textCard">
              <p>
                Normally inventory is kept pretty separate between the software
                and the machine. The machine will keep track of drops but
                doesn&apos;t do a great job tracking exact stick quantities in
                house.
              </p>

              <p>
                With one of the latest updates the DeMichele Group added a
                feature to link the Rhino and Glazier Studio / PartnerPak. This
                allows inventory to be added into Glazier Studio and with it
                linked to the Rhino, the saw will subtract stock lengths as they
                are being ran through the machine.
              </p>

              <p>
                The system will also keep track of drops and update Glazier
                Studio / PartnerPak as those are produced.
              </p>
            </div>

            <div className="callout warning">
              To use this feature the DeMichele Group must link the Rhino and
              software via a server. This cannot simply be “turned on” in system
              settings.
            </div>

            <div className="textCard">
              <p>
                If you are interested in tracking inventory please contact the
                DeMichele Group at:
              </p>

              <h3 className="supportNumber">480-985-4926</h3>

              <p>
                They will help get the inventory and server connection fully
                configured.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>Inventory Complete</h2>
            <p>
              You now understand the basics of how inventory tracking integrates
              between Glazier Studio, PartnerPak and Rhino machines.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
            margin-bottom: 24px;
          }

          .textCard p {
            margin: 0 0 22px;
            color: rgba(255, 255, 255, 0.84);
            line-height: 1.8;
            font-size: 1rem;
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .supportNumber {
            color: #f59e0b;
            font-size: 2rem;
            text-align: center;
            margin: 20px 0;
            font-weight: 900;
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}