import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const customerImage =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/customer-and-vendor/images/customers-01.png";

const vendorImage =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/customer-and-vendor/images/vendors-02.png";

export default function CustomersAndVendorsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            Customers & Vendors
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>Customers & Vendors</h1>

            <p className="helperText">
              The Customers and Vendors sections allow you to save commonly used
              company information so it can quickly populate reports, proposals,
              purchase orders, and bid recap documents without repeatedly
              entering the same data manually.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Customers</p>
              <h2>Store customer information for reports</h2>
            </div>

            <p className="helperText">
              The Customers screen is mainly used to pre-enter customer names,
              addresses, and general project information so it can automatically
              populate documents later.
            </p>

            <div className="imageWrap">
              <img
                src={customerImage}
                alt="Customers database screen"
              />
            </div>

            <div className="callout info">
              You can create customer entries ahead of time so bid recaps and
              reports can be generated faster without manually typing customer
              information each time.
            </div>

            <p className="helperText">
              This is mostly an organizational tool that helps speed up office
              workflows and keeps reporting information more consistent across
              projects.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Vendors</p>
              <h2>Save supplier and vendor information</h2>
            </div>

            <p className="helperText">
              The Vendors section works very similarly to the Customers screen,
              but instead stores supplier and vendor information for proposals,
              purchase orders, and material workflows.
            </p>

            <div className="imageWrap">
              <img
                src={vendorImage}
                alt="Vendor database screen"
              />
            </div>

            <div className="callout warning">
              Keeping vendor information organized can help prevent mistakes
              when generating proposals or purchasing documents, especially when
              multiple vendors are being used on a project.
            </div>

            <p className="helperText">
              Most companies set these up once and only update them
              occasionally when contact information or vendor details change.
            </p>
          </section>

          <section className="completionBox">
            <h2>Customers & Vendors Complete</h2>

            <p>
              Once customer and vendor databases are populated, reports and
              project paperwork can be generated much faster with more
              consistent information throughout the project workflow.
            </p>
          </section>
        </div>

        <style jsx>{`
          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img {
            width: 100%;
            max-width: 1000px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}