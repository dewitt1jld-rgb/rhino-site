import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  tools:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/system-settings/system-set-01-tools.png",

  parameters:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/system-settings/system-set-02-parameters.png",
};

export default function SystemSettingsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            System Settings
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>System Settings</h1>

            <p className="helperText">
              Important system preferences and optimization settings inside
              Glazier Studio and PartnerPak.
            </p>
          </section>

          <section className="panel">
            <div className="twoColumn">
              <div className="imageWrap small">
                <img
                  src={img.tools}
                  alt="Tools options menu"
                />
              </div>

              <div className="textCard">
                <p>
                  The system settings tab can be found under the tools tab and
                  then by clicking on the options tab. Once you get to this
                  screen you can find all of the pricing, tool index screens and
                  labor defaults and general settings. In this page we will
                  focus on the general tab which is the "system settings".
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="imageWrap medium">
              <img
                src={img.parameters}
                alt="System settings parameters"
              />
            </div>

            <div className="textCard">
              <p>
                There are a bunch of personal preferences you can modify that I
                didn't highlight but the highlighted options are probably the
                most important that need to be checked.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Dimension Tolerance (1/32 OR 1/16)</h2>
            </div>

            <div className="textCard">
              <p>
                This allows you to set a default for all of the dimensions in
                the program. It will round all sticks to the closest 1/32" or
                1/16" of an inch. The Machine can hold .010 tolerance when
                cutting so this is not changing anything on the machine. Its
                just changing the default rounding number.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>
                Add To Stock Length For Optimization And
                <br />
                Trim Dimension For S/L Optimization
              </h2>
            </div>

            <div className="textCard">
              <p>
                In the program a lot of the default stock lengths come in at
                291. If the two settings above are set to 0", GS and PPAK will
                optimize off of a 291" stock length. The issue with that is
                that the programs do not account for the trims that the machine
                must take. So even though you will feed the machine a 290-291"
                it will take at least 1" trim on each side. This means the
                optimized stock length will be closer to 188-189".
              </p>

              <p>
                Most of the time you will leave the ADD TO STOCK LENGTH at 0.
                But the TRIM DIMENSION FOR STOCK LENGTH should be 2 or 3 inches
                if you want the optimization of the software to line up with
                the machine.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Round Or Roll To Box Quantity</h2>
            </div>

            <div className="textCard">
              <p>
                This keeps you from having to order 1739 screws... If you have
                round or roll to nearest box quantity checked, it will just
                give you the closest box quantity instead of giving you a random
                number of screws or setting blocks.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Display All Numbers In Decimal</h2>
            </div>

            <div className="textCard">
              <p>
                This is entirely up to personal preference. The program default
                is fractions but can be changed to decimals by checking this
                box.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Combine Patterns In Optimization</h2>
            </div>

            <div className="textCard">
              <p>
                If you have a bunch of frames that share the same parts and the
                same sizes, this check box will label all of those shared parts
                with the same stick ID to make assembly a little bit easier. It
                also cuts down a lot on the number of sheets you have in the
                fabrication reports.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Glazing Tolerance</h2>
            </div>

            <div className="textCard">
              <p>
                This is the same as dimension tolerance but for glass. It just
                keeps your glass sizes from being a random weird size.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Add For Angled Cuts</h2>
            </div>

            <div className="textCard spaced">
              <p>
                This setting is for people that do not have a saw capable of
                cutting at an angle. If you build a frame that requires miters
                or bevels those sticks CAN be cut on the rhino machine and be
                fabricated, you just need to cut them long so that you can
                manually cut the correct angle into the stick.
              </p>

              <p>
                Most people add 6" to the stick for angled cuts.
              </p>

              <p>
                This setting will only extend the stick when a miter or bevel
                is detected. Which means you must use the frame builder "change
                fabrications" screen to add the angles. Check out my Angled
                Cutting screen for help with this.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>System Settings Complete</h2>

            <p>
              You now understand the most important system settings that affect
              optimization, fabrication output, tolerances, and stock handling
              inside Glazier Studio and PartnerPak.
            </p>
          </section>
        </div>

        <style jsx>{`
          .twoColumn {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 28px;
            align-items: center;
          }

          .textCard {
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
            border-radius: 22px;
            padding: 28px;
          }

          .textCard p {
            margin: 0;
            line-height: 1.9;
            color: rgba(255, 255, 255, 0.84);
          }

          .spaced {
            display: grid;
            gap: 22px;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.45);
          }

          .imageWrap.small img {
            max-width: 260px;
          }

          .imageWrap.medium img {
            max-width: 720px;
          }

          @media (max-width: 900px) {
            .twoColumn {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}