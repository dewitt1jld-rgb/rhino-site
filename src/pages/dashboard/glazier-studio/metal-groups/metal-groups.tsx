import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  main: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-01-main-screen.png",
  blackLine: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-02-black-line.png",
  optionalMetal: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-03-optional-metal.png",
  vinyl: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-04-vinyl.png",
  hardware: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-05-hardware.png",
  glazingStops: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-06-glazing-stops.png",
  designStyle: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-07-design-style.png",
  doorCheckboxes: "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/metal-group%26catalog-parts/metal-groups/images/metal-groups-08-door-option-check-boxes.png",
};

export default function MetalGroupsPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / Metal Groups /
            Metal Groups
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Metal Groups</p>
            <h1>Metal Groups</h1>
            <p className="helperText">
              Metal groups are the foundation of how Glazier Studio and
              PartnerPak build and fabricate frames.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Overview</p>
              <h2>Understanding metal groups</h2>
            </div>

            <div className="textCard">
              <p>
                Metal groups are collections of catalog parts that work together
                to create a frame. Every vendor may have hundreds of metal
                groups depending on the framing system.
              </p>

              <p>
                In most cases your shop drawings will specify which metal group
                should be used for the project.
              </p>

              <p>
                A good starting point is copying an existing metal group and
                creating a custom version for your project.
              </p>
            </div>

           <div className="imageWrap medium">
  <img
    src={img.main}
    alt="Metal group design screen"
    style={{ maxWidth: "500px", width: "100%" }}
  />
</div>

            <div className="callout info">
              Always check the highlighted fields before running fabrication on
              a project.
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Framing Components</p>
              <h2>Primary metal and optional metal</h2>
            </div>

            <div className="textCard">
              <h3>Primary Metal</h3>

              <p>
                This screen contains all primary framing members and is where
                formulas for primary fabrication are assigned.
              </p>

              <p>
                Carefully verify every part number matches the intended framing
                system before fabrication.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.blackLine} alt="Primary metal framing components" />
            </div>

            <div className="callout warning">
              For now, focus only on the columns to the left of the black line.
            </div>

            <div className="panelSpacer" />

            <div className="textCard">
              <h3>Optional Metal</h3>

              <p>
                Optional metal is used for accessory pieces and additional
                framing components that may not always be required.
              </p>

              <p>
                If your project does not use optional parts, leave these fields
                blank.
              </p>
            </div>

            <div className="imageWrap medium">
              <img src={img.optionalMetal} alt="Optional metal screen" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Vinyl & Hardware</p>
              <h2>Rubber, hardware and glazing stops</h2>
            </div>

            <div className="twoColumn">
              <div className="textCard">
                <h3>Vinyl</h3>

                <p>
                  This screen is used to select glazing rubber for the framing
                  system.
                </p>

                <p>
                  Curtain wall systems often provide many more vinyl options
                  depending on glass thickness.
                </p>
              </div>

              <div className="imageWrap small">
                <img src={img.vinyl} alt="Vinyl selection screen" />
              </div>
            </div>

            <div className="panelSpacer" />

            <div className="textCard">
              <h3>Hardware</h3>

              <p>
                Hardware quantities are controlled using frequencies such as
                per opening, per head, per sill, or per jamb.
              </p>

              <p>
                The software automatically calculates quantities based on the
                selected frequency.
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.hardware} alt="Hardware configuration screen" />
            </div>

            <div className="panelSpacer" />

            <div className="textCard">
              <h3>Specify Glazing Stops</h3>

              <p>
                This screen controls glazing stops being used in the frame as well as the undercuts and extensions.             
               Most people like a 1/32" undercut on stops but you can set it to whatever you want. 
              </p>

        

              <div className="callout info">
                Undercuts = positive numbers
                <br />
                Extensions = negative numbers
              </div>


                <p>
                This is another screen that you can ignore everything to the right of the black line. Ive only ever seen 1 system that calles out for weep holes in the stops.. 
              </p>
            </div>

            <div className="imageWrap">
              <img src={img.glazingStops} alt="Glazing stop screen" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Design Styles</p>
              <h2>Frame behavior and fabrication settings</h2>
            </div>

            <div className="textCard">
              <p>
           This is mostly used in curtain wall frames. The design style is what tells the frame how to do the joinery. 
           For example the default is "Verticals penetrate top and bottom". This means that the vertical back member 
           will penetrate all horizontals and the head and sill. Another option is to have "all horizontals penetrate all verticals". 
           In this case you would see all of the horizontals running through and the verticals being split. 
           If you have a frame that is a mix of two design styles you will have to choose one in the metal 
           group and then modify it per stick in the frame builder.
              </p>

           
            </div>

            <div className="imageWrap medium">
              <img src={img.designStyle} alt="Design style dropdown" />
            </div>

            <div className="textCard">
              <h3>Expansion Mullion Spacing</h3>

              <p>
               This tab allows you to dictate how far apart the expansion mullions are in a large frame. 
               If you do not want the program to automatically put expansion mullions into the frame you 
               can change this setting to "1000" and any frame under 1000" will not have an expansion mullion. 
              </p>

              <h3>Head and Sill Channel Max Length</h3>

              <p>
                These two tabs allow you to tell the program the max length of the sill and head channel. THE PROGRAM DEFAULT IS TYPICALLY 144". If you order full stock lengths for the sill / head channel you will need to change this setting to 289".
</p>
​
<p>
When the program does split the stick, the splice gap will de deducted off the total length of the stick to allow for a slight gap between each member. If you do not want a gap, simply zero out this number. 
</p>
​
<p>
The next two tabs are also very similar, These are the extensions on the sill / head channel. Most companies want the sill channel to extend 1/8" on either side of the frame which would be 1/4" overall. When entering this number make sure you type in the overall extension as it will get split in half and extend on both side of the frame automatically. 
              </p>

              <h3>Sill and Head Extensions</h3>

              <p>
                Enter total extension amounts. The software automatically splits
                the value evenly on both sides of the frame.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Door Options</p>
              <h2>Door settings and fabrication rules</h2>
            </div>

            <div className="imageWrap small">
              <img
                src={img.doorCheckboxes}
                alt="Door option check boxes"
                style={{ maxWidth: "700px", width: "100%" }}
              />
            </div>

            <div className="textCard">
              <h3>Door Option Check Boxes</h3>

              <p>
                These settings control how the sill and jambs behave around
                doors and entrances.
              </p>

              <p>
               the third option automatically flips the male and female verticals to the right of a door jamb so that you
               have a deep and shallow pocket in each bay. without this checked you may have to manually flip sticks or 
               understand that you may end up with two shallow pockets next to each other. 
              </p>

              <h3>Vertical and Horizontal Fab</h3>

              <p>
             These two tabs are where you would put any undercuts or extensions on the vertical or horizontal sticks. If you are using KAWNEER the default metal group has a 1/32&quot; undercut on all horizontals. If you do not want this you need to go into the horizontal Fab and zero out all of those settings!!!
              </p>

              <h3>Face Member Cutting Rules</h3>

              <p>
                Most systems use a 1/32&quot; undercut to help pressure plates
                and face caps clip together easier.
              </p>

              <h3>Default Glazing Depths</h3>

              <p>
                These are the default values that the entire frame uses. These values determine how glass sizes are calculated when
                building frames.
              </p>
            </div>
          </section>

          <section className="completionBox">
            <h2>Metal Groups Complete</h2>

            <p>
              You now understand the primary settings and configuration screens
              used to build custom framing systems in Glazier Studio and
              PartnerPak.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard {
            padding: 24px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
            margin-top: 22px;
          }

          .textCard p {
            margin: 0 0 18px;
            color: rgba(255, 255, 255, 0.84);
            line-height: 1.75;
          }

          .textCard p:last-child {
            margin-bottom: 0;
          }

          .textCard h3 {
            margin: 0 0 10px;
            color: #f59e0b;
          }

          .twoColumn {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            align-items: center;
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
            border: 1px solid rgba(245, 158, 11, 0.16);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.42);
          }

          .imageWrap.small img {
            max-width: 420px;
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .panelSpacer {
            height: 26px;
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