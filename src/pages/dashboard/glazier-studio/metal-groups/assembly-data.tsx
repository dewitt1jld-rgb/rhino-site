import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const assemblyImage =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/assembly-data/assembly-parts-01.png";

const steps = [
  "Go to catalog parts and confirm every piece of your assembly already exists.",
  "Go to the main member in catalog parts and make a copy of it.",
  'Rename the copy using the assembly naming structure. Assemblies usually begin with “A/”.',
  "Keep the same naming structure as other assemblies so the part is easy to find later.",
  "Change the description to something that clearly explains what the assembly is.",
  "Go to the Assembly Data tab and enter the main member part number first.",
  "After the main member is added, add the rest of the sticks individually and set the quantity for each piece.",
  "Set cutting rules and restrictions for each stick when needed.",
  "If the assembly is larger in width or height than the main member, update the extrusion design parameters before saving.",
];

export default function AssemblyDataPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Assembly Data
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Assembly Data</h1>
            <p className="helperText">
              Assemblies are catalog parts that group multiple catalog items
              together. They usually follow a different naming structure, and
              “A/” is commonly used to identify an assembly.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Before You Start</p>
              <h2>Every assembly piece must already exist</h2>
            </div>

            <p className="helperText">
              Before creating an assembly, make sure each item you want to
              include is already created as its own independent catalog part.
              The easiest way to do this is to start with a list of the parts
              you want to put together, then use the catalog parts screen to
              look up and confirm each one exists.
            </p>

            <div className="callout warning">
              <strong>Important:</strong> Do not take the main member and start
              adding pieces directly to it. Make a copy first, then build the
              assembly from that copy. If you modify the original main part, it
              can affect every metal group that uses that part.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">From the Beginning</p>
              <h2>Assembly setup workflow</h2>
            </div>

            <div className="stepList">
              {steps.map((step, index) => (
                <div className="stepItem" key={step}>
                  <div className="stepNumber">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Assembly Data Example</p>
              <h2>Main member first, extra pieces after</h2>
            </div>

            <p className="helperText">
              The first line item in the Assembly Data screen must be the main
              member. If this is skipped or done out of order, the part may not
              receive fabrications from other sticks correctly.
            </p>

            <div className="imageWrap">
              <img
                src={assemblyImage}
                alt="Assembly Data screen example showing main member and extra assembly pieces"
              />
            </div>

            <p className="imageCaption">
              Example of an assembly where the main member is listed first and
              the extra pieces are listed after it.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Cutting Rules</p>
              <h2>Each stick can have its own rules</h2>
            </div>

            <p className="helperText">
              Each stick can have its own cutting rules and restrictions. You
              can use cutting rules to give certain sticks undercuts. The most
              common option is usually nominal minus excess, then define how
              much the excess should be.
            </p>

            <div className="callout info">
              There are several cutting rule options. Review the list if the
              normal rule does not work for your assembly. You can also set
              restrictions so pieces are only added when certain conditions are
              met.
            </div>
          </section>

          <section className="callout danger">
            <strong>Critical reminder:</strong> Assemblies pull fabrications
            from the main member of your stick. If you need to add formulas or
            fabrications to the main assembly part, do not add them through the
            assembly. Go directly to the main member in catalog parts and add
            the information there.
          </section>

          <section className="completionBox">
            <h2>Assembly Data Complete</h2>
            <p>
              Once the main member, extra pieces, quantities, cutting rules, and
              sizing parameters are correct, save the part. The assembly is then
              ready to use.
            </p>
          </section>
        </div>

        <style jsx>{`
          .stepList {
            display: grid;
            gap: 14px;
            margin-top: 22px;
          }

          .stepItem {
            display: grid;
            grid-template-columns: 54px 1fr;
            gap: 16px;
            align-items: start;
            padding: 18px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.22);
          }

          .stepNumber {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(245, 158, 11, 0.14);
            color: #f59e0b;
            font-weight: 950;
            font-size: 1.1rem;
            border: 1px solid rgba(245, 158, 11, 0.35);
          }

          .stepItem p {
            margin: 0;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.65;
          }

          .imageWrap {
            margin: 24px auto 12px;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .imageWrap img {
            width: 100%;
            max-width: 1000px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.24);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageCaption {
            text-align: center;
            margin: 14px auto 0;
            max-width: 780px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.55;
          }

          @media (max-width: 700px) {
            .stepItem {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}