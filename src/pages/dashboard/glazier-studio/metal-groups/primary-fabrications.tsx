import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/primary-fabrications/images/primary-fabs-01-main.png",
  primaryFab:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/primary-fabrications/images/primary-fabs-02-primary-fab.png",
  metalFabType:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/primary-fabrications/images/primary-fabs-03-metal-fab-type.png",
};

export default function PrimaryFabricationsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Primary Fabrications
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Primary Fabrications</h1>
            <p className="helperText">
              What is a Primary Fabrication??
            </p>
          </section>

          <section className="panel">
            <div className="definitionBlock">
              <h3>DEFINITION -</h3>
              <div className="textCard">
                <p>
                  Fabrications that are done to the part itself. These fabs ARE
                  NOT transferred to any other member and typically involve a
                  formula to locate the fabrications.
                </p>
              </div>
            </div>

            <div className="definitionBlock">
              <h3>EXAMPLES -</h3>
              <div className="textCard">
                <p>
                  Any anchor holes or weep holes would be considered primary
                  fabrications.
                </p>
              </div>
            </div>

            <div className="imageWrap medium">
              <img src={img.main} alt="Primary fabrication example" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Primary Fabrication Workflow</p>
              <h2>How to add primary fabrications.</h2>
            </div>

            <div className="textCard">
              <p>
                Primary fabrications require two parts. They require a “What”
                as in, what drill bit are we using and a “where” as in, where
                are the holes located down the length of the part. The “what”
                section is found under the part in Catalog parts, under a tab
                called primary fabrications rules. The “where” is located in
                the metal group under one of the for formula columns.
              </p>
            </div>

            <div className="stepBlock">
              <div className="imageWrap medium">
                <img src={img.primaryFab} alt="Primary fabrication rules tab" />
              </div>

              <div className="stepText">
                <h3>Step 1</h3>
                <div className="textCard">
                  <p>
                    To easily access Catalog Parts from the metal group, simply
                    click once on the part number you would like to view and
                    press the Function and F2 key on your keyboard. On the right
                    hand side of the screen you will see a bunch of options.
                    You are looking for "Primary Fabrication Rules".
                  </p>
                </div>
              </div>
            </div>

            <div className="stepOnly">
              <h3>Step 2</h3>
              <div className="textCard">
                <p>
                  Once inside the primary fabrication rules screen, you will
                  fill out the information from left to right. There are many
                  options to choose from under each drop down but to keep it
                  simple I will lay out the most commonly used choices in
                  another page titled Fabrication Options.
                </p>
              </div>
            </div>

            <div className="stepBlock reverse">
              <div className="stepText">
                <h3>Step 3</h3>
                <div className="textCard">
                  <p>
                    Make sure the metal fab type drop down has either “Weep” for
                    weep holes OR “end/Center” for anchor holes. The other
                    options work but are not for your standard primary fabs.
                    Please see my Fabrication options page for a better
                    description of each.
                  </p>
                </div>
              </div>

              <div className="imageWrap small">
                <img src={img.metalFabType} alt="Metal fab type dropdown" />
              </div>
            </div>

            <div className="stepOnly">
              <h3>Step 4</h3>
              <div className="textCard">
                <p>
                  Save those changes and go back to the metal group screen and
                  click on the primary metal tab of the metal group you are
                  working with. You will now need to enter a formula in the
                  appropriate column. If you need help with formulas please see
                  the Formula Builder Document.
                </p>
              </div>
            </div>

            <div className="stepOnly">
              <h3>Step 5</h3>
              <div className="textCard">
                <p>
                  Select your formula and insert it into the appropriate tab. (I
                  explain each tab in my Formula Builder page)
                </p>
              </div>
            </div>

            <div className="stepOnly">
              <h3>Step 6</h3>
              <div className="textCard">
                <p>
                  If you already have the frame built you DO NOT need to re-build
                  the frame or change anything at all. Simply go to the metal
                  fabrication tab and re-import the project. You can find
                  instructions on how to do this in my Metal Fabrication Screen
                </p>
              </div>
            </div>

            <div className="stepOnly">
              <h3>Step 7</h3>
              <div className="textCard">
                <p>
                  Check your work by viewing the Add Operations tab. If you need
                  help with this please view my Metal Fabrication Screen
                  document linked above) for a full guide on how to easily sort
                  your work and check fabrications.
                </p>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Primary Fabrications Complete</h2>
            <p>
              You now understand what primary fabrications are and the basic
              workflow for adding them through Catalog Parts, Primary
              Fabrication Rules, metal group formulas, and Metal Fabrication.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 22px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .textCard p {
            margin: 0;
            color: rgba(255, 255, 255, 0.84);
            line-height: 1.75;
          }

          .definitionBlock {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 24px;
            align-items: start;
            margin: 24px 0;
          }

          .definitionBlock h3,
          .stepOnly h3,
          .stepText h3 {
            color: #f59e0b;
            margin: 0;
            font-style: italic;
            font-size: 1.3rem;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 28px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 16px;
            border: 1px solid rgba(245, 158, 11, 0.18);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.4);
          }

          .imageWrap.small img {
            max-width: 420px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          .stepBlock {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            align-items: center;
            margin: 36px 0;
          }

          .stepBlock.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .stepText {
            display: grid;
            gap: 18px;
          }

          .stepOnly {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 24px;
            align-items: start;
            margin: 32px 0;
          }

          @media (max-width: 900px) {
            .definitionBlock,
            .stepBlock,
            .stepBlock.reverse,
            .stepOnly {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}