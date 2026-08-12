import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const systemSettingsImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-01-system-settings.png";

const orangeRollerImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/incorrect-part-length/images/incorrect-part-length-02-orange-roller.png";

export default function IncorrectPartLengthPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Incorrect Part Length
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Incorrect Part Lengths</h1>
            <p>
              Incorrect part lengths can be caused by two things on
              non-compound saws and three things on compound saws. Let&apos;s
              break them down.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Non-5000 Series / No Compound Cuts</h2>
              <p>
                The first thing to understand is saw kerf. Saw kerf is the
                thickness of the cut the saw blade creates when cutting through a
                part.
              </p>
            </div>

            <div className="callout warning">
              <h3>Before Adjusting Saw Kerf</h3>
              <p>
                If your cut sizes are consistently off by more than 1/16&quot;,
                do not adjust your kerf yet. You likely have another issue that
                should be fixed first.
              </p>
            </div>

            <p className="helperText">
              The best way to measure saw kerf is to cut halfway through a part
              and measure the gap created by the saw blade. Saw blade kerf and
              saw blade thickness are not exactly the same. They will be close,
              but vibration in the blade can make them slightly different.
            </p>

            <p className="helperText">
              In RhinoFab, saw kerf acts like a fudge factor to increase or
              decrease the finished stick length. If every part is consistently
              short by 1/32&quot;, increasing the saw kerf will increase all of
              the parts by that same amount.
            </p>
          </section>

          <section className="panel center">
            <img src={systemSettingsImage} alt="System settings saw kerf" />

            <div className="kerfGrid">
              <div>
                <h3>Increasing Saw Kerf</h3>
                <p>Increases part size</p>
              </div>

              <div>
                <h3>Decreasing Saw Kerf</h3>
                <p>Decreases part size</p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>If Fab Locations Are Wrong When Running Doors or Fab Only</h2>
            </div>

            <div className="callout danger">
              <h3>Do Not Re-Calibrate the Drills First</h3>
              <p>
                If your normal production parts are coming out correctly, but
                the Y locations are wrong when running Fab Only or doors, you
                likely have a pusher calibration issue. Run a MIN/DIM test.
              </p>
            </div>

            <p className="helperText">
              This is caused by the pusher instead of drill calibration because
              of how the software calculates hole placement. When running normal
              sticks, the drill position is calculated from the trim cut.
            </p>

            <p className="helperText">
              When running doors or Fab Only, the software no longer uses the
              saw. It bases the drill position off the pusher minimum position.
              If the pusher calibration is off, you will see that reflected in
              the Y value of your fabrications.
            </p>

            <p className="helperText">
              If the pusher minimum dimension is off, your trims may also be
              smaller or larger than the number you are telling the saw to cut
              off.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Inconsistent Cut Lengths</h2>
              <p>
                Inconsistent cut lengths usually come down to a coasting issue.
              </p>
            </div>

            <p className="helperText">
              The fastest way to test for coasting is to have a second person
              sit and put backward pressure on the stock length to make sure the
              piece never separates from the pusher.
            </p>

            <p className="helperText">
              The only time the piece and pusher should separate is when the
              pusher is inside the cabinet. The pusher should move the piece into
              position, the clamps should fire, and then the pusher should
              retract until the Fab or saw operations are complete.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Fix 1: Check Tension Rollers</h2>
            </div>

            <p className="helperText">
              Make sure the tension rollers are tight. These are the orange
              rollers that move horizontally to clamp the part.
            </p>

            <p className="helperText">
              On the top of each roller there is a silver nut that can be
              tightened by hand to increase the turning resistance. You should be
              able to turn the roller with two fingers, but not easily with one
              finger.
            </p>

            <p className="helperText">
              A good rule of thumb is a 7 out of 10, where 1 is free spinning
              and 10 does not move at all with two fingers.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Newer Machines With Air Driven Clutches</h2>
            </div>

            <p className="helperText">
              On newer machines, the manual clutches were replaced with
              automatic air driven clutches. The clutch pressure can be set in
              the Parts Library per part.
            </p>

            <p className="helperText">
              The setting works on a scale of 0–20. For light and flimsy parts,
              use 3–4. For standard size parts, use around 6–8. For heavy parts,
              use 8–15. Anything above 15 can completely cup the rollers.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>Fix 2: Roller Tensioner Set Screws</h2>
            </div>

            <p className="helperText">
              The second thing that can help eliminate coasting is the set screws
              installed in the first 10 horizontal rollers on the infeed side.
            </p>

            <p className="helperText">
              If your machine does not have these, contact DeMichele Group and
              ask them for the roller tensioner screws.
            </p>

         <img
  src={orangeRollerImage}
  alt="Orange roller tensioner screw"
  className="smallImage"
/>
          </section>
        </div>

        <section className="panel">
  <div className="panelHeader">
    <p className="eyebrow">5000 Series Machines</p>
    <h2>Incorrect Part Lengths on 5000, 5600 & 5700 Machines</h2>

    <p>
      Correcting part length on a 5000 Series machine is slightly different
      than on other RhinoFab machines because the saw rotates from one side of
      the saw cabinet to the other.
    </p>
  </div>

  <div className="callout warning">
    <h3>This Adjustment Is for 90° Cuts Only</h3>

    <p>
      Use this procedure when your 90° cut lengths are incorrect. If your 90°
      cuts are correct but your lengths become incorrect when cutting bevels or
      miters, the problem is different and should not be corrected using the
      procedure below.
    </p>
  </div>

  <p className="helperText">
    This procedure applies to the RhinoFab 5000, 5600, and 5700 machines.
  </p>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Why Saw Kerf Alone Is Not Enough</h2>
  </div>

  <p className="helperText">
    On these machines, the saw blade rotates inside the saw cabinet. Depending
    on which side of the machine the material is loaded from, the saw may cut
    on the left side of the cabinet or the right side of the cabinet.
  </p>

  <div className="loadDirectionGrid">
    <div className="directionCard">
      <h3>Material Loaded From the Left</h3>

      <p>
        The first cut is made on the <strong>left side</strong> of the saw
        cabinet. This first cut is considered the <strong>lead trim</strong>.
      </p>
<p></p>
      <p>
        After the lead trim, the saw rotates to the
        <strong> right side</strong> of the cabinet and should make the
        remainder of the cuts in that stock length from the right side.
      </p>
    </div>

    <div className="directionCard">
      <h3>Material Loaded From the Right</h3>

      <p>
        The first cut is made on the <strong>right side</strong> of the saw
        cabinet. This first cut is considered the <strong>lead trim</strong>.
      </p>
<p></p>
      <p>
        After the lead trim, the saw rotates to the
        <strong> left side</strong> of the cabinet and should make the
        remainder of the cuts in that stock length from the left side.
      </p>
    </div>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Saw Kerf vs. Saw Rotational Offset</h2>

    <p>
      Understanding which value controls which cuts is the key to correcting
      part lengths on these machines.
    </p>
  </div>

  <div className="kerfComparisonGrid">
    <div className="comparisonCard">
      <h3>Saw Kerf</h3>

      <p>
        Saw kerf affects the finished length of
        <strong> all pieces</strong> being cut from the stock length.
      </p>
    </div>
<p></p>
    <div className="comparisonCard rotational">
      <h3>Saw Rotational Offset</h3>

      <p>
        Saw rotational offset affects
        <strong> only the first finished piece</strong> from each stock length.
      </p>
    </div>
  </div>

  <div className="callout warning">
    <h3>Watch the First Piece</h3>

    <p>
      If you have a cut-length problem on a 5000 Series machine, compare the
      first finished piece from the stock length to all of the pieces that came
      after it.
    </p>

    <p>
      There is a good chance the first piece will measure differently from the
      remaining pieces.
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Example: First Piece Is 1/32&quot; Too Short</h2>
  </div>

  <p className="helperText">
    Let&apos;s say you run one stock length and produce five finished pieces.
    The first piece is 1/32&quot; too short, but pieces 2 through 5 are exactly
    the correct length.
  </p>

  <p className="helperText">
    In this situation, you do <strong>not</strong> want to correct the problem
    using saw kerf alone because your remaining pieces are already correct.
  </p>

<p>To fix the first piece we are going to adjust the "Saw Rotational Offset" value which can be found in system settings.</p>
<p></p>
<p>We only want to change this value by <strong>HALF</strong> the amount we are short/long by</p>

  <div className="callout danger">
    <h3>Only Adjust Half of the Error</h3>

    <p>
      The saw rotational value must be adjusted by
      <strong> half of the amount the first piece is off</strong>.
    </p>

    <p>
      If the first piece is 1/32&quot; too short, increase the existing saw
      rotational offset value by 1/64&quot;.
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Which Direction Do I Adjust?</h2>
  </div>

  <div className="kerfGrid">
    <div>
      <h3>Increase Saw Rotational Value</h3>
      <p>Increases the length of the first finished part</p>
    </div>

    <div>
      <h3>Decrease Saw Rotational Value</h3>
      <p>Decreases the length of the first finished part</p>
    </div>
  </div>

  <div className="callout warning">
    <h3>Remember the Half-Value Rule</h3>

    <p>
      Whatever amount the first piece is off, divide that measurement by two
      before adding or subtracting it from the existing saw rotational value.
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Where to Find the Saw Rotational Value</h2>
  </div>

  <p className="helperText">
    The saw rotational value is located in System Settings.
  </p>

  <div className="comingSoonBox">
    <strong>Image Coming Soon</strong>

    <p>
      A screenshot showing the exact System Settings location will be added in
      the next training update.
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <p className="eyebrow">Angled Cut Troubleshooting</p>
    <h2>Cut Length Issues With Bevels, Miters or Compounds</h2>

    <p>
      If your 90° cut lengths are correct but your parts become too long or too
      short when cutting bevels, miters, or compound angles, use the checks
      below.
    </p>
  </div>

  <div className="callout danger">
    <h3>Start With Miter Cut Length Calibration</h3>

    <p>
      Go to the Calibration screen and run the
      <strong> Calibrate Miter Cut Length</strong> procedure first.
    </p>

    <p>
      This calibration contains <strong>four dropdown selections</strong>, and
      each one tests or changes a different setting in the software.
      <strong> Run all four.</strong>
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Bevel Cut Lengths: Check Part Height</h2>
  </div>

  <p className="helperText">
    When cutting a bevel, the software uses the
    <strong> part height</strong> to calculate the projected long point of the
    stick.
  </p>

  <div className="callout warning">
    <h3>Part Height Must Be Accurate</h3>

    <p>
      If the part height stored in Parts Library is incorrect, the calculated
      cut length can also be incorrect.
    </p>
  </div>

  <p className="helperText">
    Use the calipers supplied with the machine and measure the actual part
    height as accurately as possible. Record the measurement to
    <strong> three decimal places</strong> and update the Height value for that
    part in Parts Library before testing the cut again.
  </p>

  <div className="measurementCard">
    <span className="measurementLabel">Bevel calculation uses</span>
    <strong>Part Height</strong>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Miter Cut Lengths: Check Part Depth</h2>
  </div>

  <p className="helperText">
    Miter cuts work the same way, except the important profile dimension is
    the <strong>part depth</strong>.
  </p>

  <p className="helperText">
    If the part depth stored in Parts Library is incorrect, the projected long
    point of the miter can also be calculated incorrectly, causing the finished
    part length to be wrong.
  </p>

  <div className="callout warning">
    <h3>Measure With Calipers</h3>

    <p>
      Measure the actual part depth with calipers and update the Depth value in
      Parts Library before running the part again.
    </p>
  </div>

  <div className="measurementCard">
    <span className="measurementLabel">Miter calculation uses</span>
    <strong>Part Depth</strong>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Compound Cut Lengths: Check Both Dimensions</h2>
  </div>

  <p className="helperText">
    Compound cuts combine a miter and a bevel, so the software needs both
    profile dimensions to calculate the projected long point correctly.
  </p>

  <div className="compoundGrid">
    <div className="compoundCard">
      <span>1</span>

      <div>
        <h3>Check Height</h3>
        <p>
          Measure and update the actual part height in Parts Library.
        </p>
      </div>
    </div>

    <div className="compoundCard">
      <span>2</span>

      <div>
        <h3>Check Depth</h3>
        <p>
          Measure and update the actual part depth in Parts Library.
        </p>
      </div>
    </div>
  </div>

  <div className="callout danger">
    <h3>Do Not Use a Tape Measure</h3>

    <p>
      Use calipers. A tape measure is not accurate enough for the profile
      dimensions used in these angled-cut calculations.
    </p>
  </div>
</section>

<section className="panel">
  <div className="panelHeader">
    <h2>Why Do Some Parts Still Come Out Correct?</h2>
  </div>

  <p className="helperText">
    When the software calculates an angled cut, it first calculates the long
    point of the finished stick and then works backward from that point.
  </p>

  <p className="helperText">
    Because of that, an incorrect Height or Depth value does not affect every
    angled cut in exactly the same way.
  </p>

  <div className="angleExplanationGrid">
    <div className="angleCard">
      <h3>Miters</h3>

      <p>
        If the miter places the long point of the stick directly against the
        back fence of the machine, the finished length can still come out
        correctly, assuming the machine calibration is good.
      </p>

      <p>
        When the long point is projected
        <strong> away from the back fence</strong>, the software must use the
        part depth to calculate that projected point. An incorrect Depth value
        can then affect the finished cut length.
      </p>
    </div>

    <div className="angleCard">
      <h3>Bevels</h3>

      <p>
        If the bevel places the long point on the
        <strong> bottom of the machine table</strong>, the finished length can
        still come out correctly, assuming calibration is good.
      </p>

      <p>
        When the angle places the long point
        <strong> above the table</strong>, the software must use the part
        height to calculate that projected point. An incorrect Height value can
        then affect the finished cut length.
      </p>
    </div>
  </div>

  <div className="callout warning">
    <h3>What About Compound Cuts?</h3>

    <p>
      Compound cuts use both Height and Depth. If both values are incorrect and
      the compound cut still comes out exactly right, that is more likely luck
      than proof that the dimensions are correct.
    </p>
  </div>
</section>



        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 24px;
          }

          .eyebrow {
            margin: 0 0 12px;
            color: #f59e0b;
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .center {
            text-align: center;
          }

          img {
            display: block;
            width: 100%;
            max-width: 900px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
            
          }
            .smallImage {
  max-width: 420px;
}

          .kerfGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 28px;
          }

          .kerfGrid div {
            padding: 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.08);
            border: 1px solid rgba(245, 158, 11, 0.26);
          }

          .kerfGrid h3 {
            margin: 0 0 10px;
            color: #f59e0b;
            font-size: 1.35rem;
          }

          .kerfGrid p {
            margin: 0;
            color: #d8e0ec;
            font-weight: 800;
          }

          @media (max-width: 800px) {
            .kerfGrid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}