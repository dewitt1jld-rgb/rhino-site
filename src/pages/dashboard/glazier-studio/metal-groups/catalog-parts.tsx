import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  menu: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-01-menu-1.png",
  copy: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-02-copy.png",
  partInfo: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-03-part-infos.png",
  extrusionOptions: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-04-extrusion-options.png",
  designParameters: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-05-design-parameters-v2.png",
  pricing: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/catalog-parts/images/catalog-parts-06-extrusion-pricing-v2.png",
};

export default function CatalogPartsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Catalog Parts
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Catalog Parts</h1>

            <p className="helperText">
              Catalog Parts is where you create, modify, and manage nearly every
              individual extrusion or component used throughout Glazier Studio.
              Understanding this screen is critical for advanced customization,
              fabrication control, assemblies, and part behavior.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Catalog Parts Menu</p>
              <h2>Accessing Catalog Parts</h2>
            </div>

            <div className="twoColumn">
            <div className="imageWrap small">
  <img
    src={img.menu}
    alt="Catalog parts menu"
    style={{
      maxWidth: "240px",
      margin: "0 auto",
      display: "block",
    }}
  />
</div>

              <div>
                <p className="helperText">
                  Catalog Parts can be found on the left-hand side menu inside
                  the project screen. If you are currently building a frame,
                  you may need to save and exit the frame editor before these
                  side menus become visible again.
                </p>

                <p className="helperText">
                  Many users access Catalog Parts directly from inside the
                  software using shortcut keys. If you click a part number once
                  and press <strong>F2</strong>, the software will usually open
                  that catalog part automatically.
                </p>

                <div className="callout info">
                  If the F2 shortcut does not work, try holding the FN key while
                  pressing F2 depending on your keyboard.
                </div>
              </div>
            </div>

            <p className="helperText">
              This screen is used to create new parts, modify existing parts,
              and create assemblies.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Creating / Modifying Parts</p>
              <h2>Never build a new part completely from scratch</h2>
            </div>

            <div className="callout danger">
              NEVER create a brand-new part from scratch unless absolutely
              necessary. There are too many hidden fields and settings that can
              easily be missed.
            </div>

            <p className="helperText">
              The safest workflow is usually to locate a similar existing part,
              copy it, and modify the copy instead of building a completely new
              part from nothing.
            </p>

            <p className="helperText">
              Even if the copied part is not identical, starting from a similar
              extrusion dramatically reduces setup mistakes and missing
              fabrication settings.
            </p>

            <div className="callout warning">
              If you are only modifying an existing part, you can skip the copy
              process and directly edit the part you want to change.
            </div>

            <div className="stepGrid">
              <div className="stepCard">
                <div className="stepNumber">1</div>

                <div>
                  <h3>Find a similar part</h3>

                  <p>
                    Search for an existing extrusion that is close to the one
                    you want to create.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>

                <div>
                  <h3>Copy the part</h3>

                  <p>
                    Select the part in blue and click the Copy button in the
                    upper-right corner.
                  </p>

                  <div className="imageWrap tiny">
                    <img src={img.copy} alt="Copy button" />
                  </div>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>

                <div>
                  <h3>Rename and modify the part</h3>

                  <p>
                    Change the part number and description on the right-hand
                    side of the screen.
                  </p>

                  <div className="imageWrap medium">
                    <img src={img.partInfo} alt="Catalog part information" />
                  </div>

                  <div className="callout info">
                    Most circled or highlighted fields can usually be ignored
                    unless you specifically know they are required for your
                    workflow.
                  </div>

                  <p className="helperText">
                    Anytime you modify or create a new part, verify that the
                    “custom part” checkbox is enabled so future updates do not
                    overwrite the part.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>

                <div>
                  <h3>Understand the extrusion tabs</h3>

                  <div className="imageWrap small">
                    <img
                      src={img.extrusionOptions}
                      alt="Extrusion options tabs"
                    />
                  </div>

                  <p className="helperText">
                    These tabs control nearly everything related to a specific
                    extrusion including dimensions, fabrication rules, pricing,
                    assemblies, inventory, and hardware replacements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Extrusion Design Parameters</p>
              <h2>Where the extrusion dimensions live</h2>
            </div>

            <div className="twoColumn">
              <div>
                <p className="helperText">
                  This screen contains the primary dimensions and sizing data
                  for the extrusion.
                </p>

                <p className="helperText">
                  In most situations, the only values commonly adjusted are:
                </p>

                <ul className="trainingList">
                  <li>Framing Width</li>
                  <li>Framing Depth</li>
                  <li>Glass Bite</li>
                </ul>

                <p className="helperText">
                  Framing Width controls the visible width of the extrusion when
                  viewed from the outside of the building.
                </p>

                <p className="helperText">
                  Glass Bite controls how far the glass inserts into the member
                  and directly affects overall glass sizing.
                </p>
              </div>

              <div className="imageWrap">
                <img
                  src={img.designParameters}
                  alt="Extrusion design parameters"
                />
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Extrusion Pricing</p>
              <h2>Understanding extrusion pricing tables</h2>
            </div>

            <div className="imageWrap">
              <img src={img.pricing} alt="Extrusion pricing screen" />
            </div>

            <p className="helperText">
              The Extrusion Pricing screen separates pricing by color and finish
              type. The price displayed here is typically the cost per foot
              rather than the total stick cost.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Additional Extrusion Tabs</p>
              <h2>What the remaining tabs do</h2>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>Extrusion Inventory</h3>

                <p>
                  Intended for inventory tracking and stock management. Many
                  shops do not actively use this feature.
                </p>
              </div>

              <div className="infoCard">
                <h3>Assembly Data</h3>

                <p>
                  Used for creating assemblies where multiple parts are grouped
                  together under one part number.
                </p>
              </div>

              <div className="infoCard">
                <h3>Primary Fabrication Rules</h3>

                <p>
                  Controls fabrications directly applied to the extrusion such
                  as holes, slots, notches, and machining operations.
                </p>
              </div>

              <div className="infoCard">
                <h3>Secondary Fabrication Rules</h3>

                <p>
                  Secondary fabrications are operations applied relative to
                  another part or based on surrounding conditions.
                </p>
              </div>

              <div className="infoCard">
                <h3>Hardware Replacements</h3>

                <p>
                  Allows hardware to automatically replace or attach to certain
                  parts without changing the metal group.
                </p>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Catalog Parts Complete</h2>

            <p>
              Understanding Catalog Parts is one of the biggest steps toward
              mastering advanced Glazier Studio workflows. Nearly every advanced
              customization inside the software connects back to this screen in
              some way.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: center;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 22px auto;
          }

          .imageWrap img {
            width: 100%;
            max-width: 950px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .imageWrap.tiny img {
            max-width: 240px;
          }

          .imageWrap.small img {
            max-width: 420px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          .stepGrid {
            display: grid;
            gap: 24px;
            margin-top: 26px;
          }

          .stepCard {
            display: grid;
            grid-template-columns: 60px 1fr;
            gap: 18px;
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .stepNumber {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(245, 158, 11, 0.12);
            border: 1px solid rgba(245, 158, 11, 0.32);
            color: #f59e0b;
            font-weight: 900;
            font-size: 1.1rem;
          }

          .trainingList {
            margin-top: 14px;
            padding-left: 20px;
            color: rgba(255, 255, 255, 0.82);
            line-height: 1.8;
          }

          .infoGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 22px;
          }

          .infoCard {
            padding: 22px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .infoCard h3 {
            margin-bottom: 10px;
          }

          .infoCard p {
            color: rgba(255, 255, 255, 0.78);
            line-height: 1.7;
          }

          @media (max-width: 900px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }

            .stepCard {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}