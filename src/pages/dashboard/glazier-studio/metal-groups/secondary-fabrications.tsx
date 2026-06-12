import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-01-main.png",
  data: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-02-data.png",
  shearBlock:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-03-shear-block.png",
  fabs: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-04-fabs.png",
  stamp:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-05-stamp.png",
  vertsFall:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/secondary-fabs/images/secondary-fabs-06-verts-fall.png",
};

export default function SecondaryFabricationsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Secondary Fabrications
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Secondary Fabrications</h1>
            <p className="helperText">
              Understanding transferred fabrication data and how the program
              applies fabrication locations to vertical members.
            </p>
          </section>

          <section className="panel">
            <div className="definitionRow">
              <h3>DEFINITION -</h3>

              <div className="textCard">
                <p>
                  Fabrications that are passed to another member. The most
                  typical example of this can be found by looking at your
                  vertical members in metal fabrication. All of the verticals
                  are receiving fabrications but the part itself does not carry
                  any information on how or where those fabs occur. That
                  information is all passed over from the Horizontal members
                  through the secondary fabrication screen
                </p>
              </div>
            </div>

            <div className="textCard spaced">
              <p>
                To change view or edit secondary fabrications you can get there
                two different ways.
              </p>

              <p>
                <strong>From anywhere in the program</strong> The first way is
                by navigating to the Metal Group tab and selecting the metal
                group you are using for the project. Then navigate to the
                Primary Metal Tab on the right hand side and find the part
                member that you would like to view the secondary fabrications
                of. Click on the part number and press F2 on your keyboard (If
                that doesn't work hold FN and then press F2). This will take
                you to the catalog parts screen and you can then click on the
                Secondary Fabrication tab.
              </p>

              <p className="centerText">OR</p>

              <p>
                From the Metal Fabrication screen simply click on the Horizontal
                part (or vertical in some cases) that should be carrying the
                secondary fabs and simply press F2 on your keyboard (If that
                doesn't work hold FN and then press F2). This will take you to
                the catalog parts screen and you can then click on the
                Secondary Fabrication tab.
              </p>

              <p className="warningText">
                Keep in mind that MOST of the secondary fabs in the program
                should be working and you may only need to tweak numbers a
                little bit if your need.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Secondary Fabrications</p>
              <h2>Secondary Fabrications on Horizontals</h2>
            </div>

            <div className="textCard">
              <p>
                These are the most common type of secondary fab as most of your
                frames will have the horizontals butting into a vertical. The
                horizontal then passes its fabs to the vertical stick based off
                of the BOH (Bottom Of Horizontal) position.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.main} alt="Secondary fabrication example" />
            </div>

            <div className="imageWrap medium">
              <img
                src={img.data}
                alt="Secondary fabrication data example"
              />
            </div>

            <div className="imageWrap medium">
              <img src={img.shearBlock} alt="Shear block fabrication" />
            </div>

            <div className="imageWrap medium">
              <img src={img.fabs} alt="Secondary fabrication data rows" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Understanding The Data</p>
              <h2>What Changes and Why</h2>
            </div>

            <div className="twoColumn">
              <div className="imageWrap small">
                <img src={img.stamp} alt="Custom stamp example" />
              </div>

              <div className="stackWrap">
                <div className="definitionRow">
                  <h3>Secondary Fabs Explained -</h3>

                  <div className="textCard">
                    <p>
                      When we are talking about secondary fabs the Vertical
                      member that is receiving the preps actually gets them from
                      another member much like an old fashioned time and date
                      stamp. Think of each horizontal part number as a custom
                      stamp. The sill member would leave an "imprint" on the
                      vertical with its exact shear block or screw spline hole
                      pattern. The horizontal would do the same thing in the
                      middle of the vertical and the head member would do the
                      same thing at the top of the vertical, each leaving its
                      own custom "stamp" of where the fabrications need to
                      happen. The program doesn't understand stamps though. It
                      only works in numbers. So in order for the program to read
                      the "stamp" of each horizontal hole location, each screw
                      spline or sheer block hole must have an X, Y, and Z
                      location.
                    </p>
                  </div>
                </div>

                <div className="definitionRow">
                  <h3>X Location -</h3>

                  <div className="textCard">
                    <p>
                      The X location does not change function. This works the
                      same throughout the entire program and is always pulled
                      from the back of the part to the center of the operation
                      you are trying to complete. In this case it would be a
                      sheer block or screw spline hole.
                    </p>

                    <p>
                      Please see my Fabrication Options screen for pictures and
                      explanations of how and why the X is pulled from the back
                      of the part.
                    </p>
                  </div>
                </div>

                <div className="definitionRow">
                  <h3>Y Location -</h3>

                  <div className="textCard">
                    <p>
                      The Y Location DOES change. This value is no longer going
                      to be just a straight value. We are going to use a formula
                      called BOH- (Bottom Of Horizontal + (#)). This is because
                      when you build a frame in the All Projects screen the
                      software recognizes the Bottom of Horizontal location on
                      all sticks. If we know the bottom of horizontal location
                      then we can tell it how much higher each drill hole is in
                      relation to the BOH. Please see the two examples above.
                      The screw spline part has two different hole locations,
                      One that is 0.5937" above BOH and another that is 1.8125"
                      above BOH. Each screw hole would get its own line item in
                      the secondary fabrication rules screen and The Y value
                      would read BOH+.5937 for one of the holes and BOH+1.8125
                      for the other hole. These two line items then create your
                      "stamp" so the machine knows exactly where to drill the
                      vertical member
                    </p>
                  </div>
                </div>

                <div className="definitionRow">
                  <h3>Z Location -</h3>

                  <div className="textCard">
                    <p>
                      The Z location also changes slightly. Because these
                      Fabrications are getting transferred to the vertical
                      stick, we need to know the height of the vertical member
                      so that it can be drilled correctly. You could put the
                      exact member height OR you could use another formula
                      called FW (Framing Width). This tells the program to go
                      look at the system width and use that value.
                    </p>

                    <p>
                      You may be asking how the program knows when to fabricate
                      the top of the stick VS the bottom of the stick when it is
                      a tubular intermediate vertical? The program is smart
                      enough to recognize when fabrication are on the left or
                      right side of the vertical and when the stick lays down to
                      go through the machine the fabrications will follow to
                      either be on the top of the part or the bottom of the
                      part. The software is also smart enough to relocate the Z
                      location automatically when the fabs are on the bottom and
                      at a location of 0.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Machine Orientation</p>
              <h2>How Verticals Fall to Run Through The Machine</h2>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.vertsFall}
                alt="How verticals fall through the machine"
              />
            </div>

            <div className="callout danger">
              <strong>
                This example assumes your machine is Right to Left
              </strong>
              <p>
                (If you have a Left to Right machine, The starting point will
                be opposite of what I say here)
              </p>
            </div>

            <div className="textCard spaced">
              <p>
                Lets take a simple frame. This view is from the Metal
                Fabrication Screen. I have a full page on how to navigate this
                screen and how to fully utilize it.
              </p>

              <p>
                Lets start with stick ID 1 which is your Left Jamb. The top of
                the stick will fall outwards and to the Left. That would mean
                the Head or TOP of the stick would be the leading side. if you
                look at stick 8 which is the Right Jamb it would fall outward
                and to the right making it so that the sill or BOTTOM would be
                the leading side. All of the intermediate verticals will fall
                left or right depending on the system BUT the software will make
                sure that they will get fabricated correctly as long as the
                machine gets loaded the correct way.
              </p>

              <p>
                Which brings me to the next point, how the machine will be
                loaded
              </p>

              <p>
                For the majority of machines, they will be loaded as if you were
                standing on the outside of the building looking in. You will
                load the piece with the glass pocket facing the operator or the
                tongue of the curtain wall also facing the operator. The only
                time this is different is if you have a 9000 series machine.
                950, 1150, 1350, and 5700 machines all get loaded as mentioned
                above.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>Secondary Fabrications Complete</h2>

            <p>
              You now understand how secondary fabrication data transfers from
              horizontal members into vertical members and how the machine uses
              X, Y, and Z values to correctly place fabrication locations.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
          }

          .textCard p {
            margin: 0 0 18px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.84);
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .definitionRow {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 24px;
            align-items: start;
            margin: 28px 0;
          }

          .definitionRow h3 {
            margin: 0;
            color: #f59e0b;
            font-size: 1.2rem;
            line-height: 1.4;
          }

          .warningText {
            color: #f87171 !important;
            font-weight: 700;
          }

          .centerText {
            text-align: center;
            font-weight: 800;
            color: #f59e0b;
          }

          .spaced {
            display: grid;
            gap: 20px;
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 28px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.42);
          }

          .imageWrap.small img {
            max-width: 320px;
          }

          .imageWrap.medium img {
            max-width: 780px;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 32px;
            align-items: start;
          }

          .stackWrap {
            display: grid;
            gap: 12px;
          }

          @media (max-width: 900px) {
            .definitionRow,
            .twoColumn {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}