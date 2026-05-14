import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img1 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-01-colllet-left.png";
const img2 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-02-drill-center.png";
const img3 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-03-tool-holder.png";
const img4 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-04-tool-holder-in-clamp.png";
const img5 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-05-tool-holder-head.png";
const img6 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-06-collet.png";
const img7 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-07-set-screw.png";
const img8 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-08-no-rubber.png";
const img9 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-09-incorrect-1.png";
const img10 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-10-incorrect-2.png";
const img11 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-11-correct.png";
const img12 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-12-3mm.png";
const img13 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-13-gold-ring.png";
const img14 =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/images/loading-tool-bits-14-wrench.png";

const videoUrl =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/loading-drill-bits/video/loading-drill-bit-01-video.mp4";

export default function LoadingDrillBitsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Rhino Training / Troubleshooting / Loading Drill Bits
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Loading Drill Bits</h1>
            <p>
              While each machine may use different sized drill bits, collets,
              and tool holders, the loading process is generally the same.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>1. Get the Drill Bit, Collet, and Tool Holder</h2>
              <p>
                Every time you load a tool, you need all three items. The Rhino
                load tool screen will tell you exactly what tool and collet are
                required.
              </p>
            </div>

            <div className="threeImageGrid">
              <div className="imageCard">
                <h3>Collets</h3>
                <img src={img1} alt="Collet" />
              </div>

              <div className="imageCard">
                <h3>Tool</h3>
                <img src={img2} alt="Drill bit" />
              </div>

              <div className="imageCard">
                <h3>Tool Holders</h3>
                <img src={img3} alt="Tool holder" />
              </div>
            </div>

            <p className="helperText">
              The collets have the size printed on the top face. If they have
              been used a lot, the print can wear off and become difficult to
              see.
            </p>
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>2. Load the Tool Holder Into the Stationary Base</h2>
              <p>
                All machines come with a base that keeps the tool holder from
                spinning. These may be installed on the toolbox or outfeed rail,
                but they all do the same thing.
              </p>
            </div>

            <img src={img4} alt="Tool holder loaded into stationary base" />
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>3. Fit the Collet Into the Tool Holder Head</h2>
            </div>

            <div className="imageGrid">
              <img src={img5} alt="Tool holder head" />
              <img src={img6} alt="Collet close up" />
            </div>

            <p className="helperText">
              Each tool holder head has a small half-moon shape carved inside
              it. Snap the collet in at a slight angle away from the moon, then
              snap it toward the moon shape.
            </p>

            <p className="helperText">
              After the collet is snapped in, start hand-threading it onto the
              base of the tool holder. Do not tighten it more than a couple
              turns yet because the drill bit still needs to load into the
              collet.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>4. Put the Drill Bit Into the Collet</h2>
            </div>

            <div className="splitLayout">
              <img src={img7} alt="Tool holder set screw" />

              <div>
                <p className="helperText">
                  Each tool holder has a set screw in the base. These set screws
                  are preset at a specific height and need to stay where they
                  are.
                </p>

                <div className="callout danger">
                  <h3>Do Not Mess With These Set Screws</h3>
                  <p>
                    Changing this height will throw off calibrations. Push the
                    drill bit as low as it can go. Do not try to pull the bit up
                    to make it longer.In the video below you will see that I take 
                    and push the drill bit as low as it can go. There is no need to 
                    measure anything and definitely DO NOT try to pull the drill bit 
                    up to "make it longer". The machine knows the exact length of 
                    every bit, If you "make it longer" the drill will still move to 
                    the same position and still crash into the tongue of the curtain wall.
 <p></p>
(trust me, I've done it.)
                  </p>
                </div>
              </div>
            </div>

            <div className="videoWrap">
              <video src={videoUrl} controls />
            </div>
          </section>

          <section className="callout warning">
            <h3>Remove the Green Protective Coating</h3>
            <p>
              Drill bits often come with a green protective coating. Remove it
              before loading the bit. It can prevent the drill bit from dropping
              down and bottoming out on the depth set screw.
            </p>
          </section>

          <section className="panel center">
            <img className="smallImage" src={img8} alt="Do not load drill bit with protective coating" />
          </section>

          <section className="panel center">
            <div className="panelHeader">
              <h2>5. Tighten It More Than You Think</h2>
              <p>
                Make sure the tool holder is tightened completely. End mills can
                slip out of the collet if they are not tightened all the way.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>6. Loading It Into the Drill</h2>
            </div>

            <div className="correctGrid">
              <div>
                <div className="imageGrid overlapGrid">
                  <img src={img9} alt="Incorrect drill bit loading example 1" />
                  <img src={img10} alt="Incorrect drill bit loading example 2" />
                </div>
                <h3 className="badLabel">Incorrect</h3>
              </div>

              <div>
                <img src={img11} alt="Correct drill bit loading orientation" />
                <h3 className="goodLabel">Correct</h3>
              </div>
            </div>

            <p className="helperText">
              The tool holder will only load one way. The small hole needs to
              face the same direction as the hole in the gold ring on the drill.
              If the collet has a large circle, or two circles side by side, it
              is upside down and needs to be rotated 180 degrees.
            </p>
          </section>

          <section className="panel">
            <div className="imageGrid">
              <img src={img12} alt="Allen wrench loading tool holder" />
              <img src={img13} alt="Gold ring hole close up" />
            </div>

            <p className="helperText">
              When loading the tool holder into the drill, the 2.5mm or 3mm
              Allen wrench needs to be removed from the drill first. Slide the
              tool holder fully back into the drill, then the Allen wrench will
              drop through the gold ring and into a small set screw.
            </p>

            <div className="callout warning">
              <h3>Do Not Over-Tighten</h3>
              <p>
                These do not need to be extremely tight. Use two fingers on the
                handle. Once you feel the tool flex, that is tight enough.
              </p>
            </div>
          </section>

          <section className="panel center">
            <img className="smallImage" src={img14} alt="Allen wrench" />

            <p className="helperText">
              If the Allen wrench slips or does not seem to bite into the set
              screw, check the end of the Allen wrench. If the edges are rounded
              out, replace it.
            </p>

            <p className="helperText">
              900s and 1100s use a 2.5mm Allen. 950s, 1150s, 1350s, and most
              other machines ending in 50 use a 3mm Allen.
            </p>
          </section>
        </div>

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

          .imageGrid,
          .threeImageGrid,
          .correctGrid,
          .splitLayout {
            display: grid;
            gap: 28px;
            align-items: center;
          }

          .imageGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .threeImageGrid {
            grid-template-columns: repeat(3, 1fr);
          }

          .correctGrid,
          .splitLayout {
            grid-template-columns: repeat(2, 1fr);
          }

          img {
            display: block;
            width: 100%;
            max-width: 850px;
            height: auto;
            margin: 0 auto;
            border-radius: 14px;
          }

          .imageCard {
            text-align: center;
          }

          .imageCard h3,
          .goodLabel,
          .badLabel {
            color: #f59e0b;
            font-size: 1.8rem;
            margin: 0 0 18px;
            text-align: center;
          }

          .goodLabel {
            color: #22c55e;
            margin-top: 18px;
          }

          .badLabel {
            color: #ef4444;
            margin-top: 18px;
          }

          .smallImage {
            max-width: 460px;
          }

          .videoWrap {
            margin: 30px auto 0;
            max-width: 520px;
            border-radius: 18px;
            overflow: hidden;
            border: 1px solid rgba(245, 158, 11, 0.28);
            background: #000;
          }

          .videoWrap video {
            width: 100%;
            display: block;
          }

          @media (max-width: 900px) {
            .imageGrid,
            .threeImageGrid,
            .correctGrid,
            .splitLayout {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}