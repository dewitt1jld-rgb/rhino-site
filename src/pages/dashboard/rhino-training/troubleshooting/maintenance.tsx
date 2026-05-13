import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const pdfUrl = "https://rhino-training-cdn.b-cdn.net/troubleshooting/maintenance/MAINTENANCE%20GUIDE.pdf";

export default function MaintenancePage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>
            <h1>Maintenance</h1>
            <p>
              Keeping the machine clean is one of the most important things you
              can do to prevent problems.
            </p>
          </section>

          <section className="panel center">
            <h2>I Cannot Stress This Enough</h2>
            <p className="helperText">
              Keeping the machine <strong>CLEAN</strong> will do ten times more
              than any other preventative maintenance. This means more than just
              blowing out chips. It means wiping down the walls and getting all
              dust and oil off the machine and components.
            </p>

            <a className="pdfButton" href={pdfUrl} download>
              <span className="pdfIcon">PDF</span>
              <span>Download Printable Maintenance Guide</span>
            </a>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Startup Safety Check</h2>
              <p>Frequency: Every shift or machine startup</p>
            </div>

            <ul className="checkList">
              <li>Walk around machine and verify no obstructions are inside machine or around moving parts</li>
              <li>Verify no safety hazards are present</li>
              <li>Verify nothing will interfere with autoloader or positioner</li>
              <li>Air supply turned ON</li>
              <li>Main power turned ON</li>
              <li>Computer powered ON</li>
              <li>RHINOFAB software started</li>
              <li>Machine ready for operation</li>
              <li>Check drill bits and router bits for chips or breakage</li>
              <li>Verify dust extractor operation and oil misting head position</li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Operational Maintenance</h2>
              <p>Perform during machine operation.</p>
            </div>

            <ul className="checkList">
              <li>Clean photo eyes using air gun</li>
              <li>Clean profile path from outfeed side during machine cycle</li>
              <li>Verify fabrication accuracy</li>
              <li>Inspect cut quality, hole quality, and product surface</li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Shutdown Maintenance</h2>
            </div>

            <ul className="checkList">
              <li>Clean debris from inside and outside machine</li>
              <li>Clean table surfaces</li>
              <li>Clean machine rails</li>
              <li>Close RHINOFAB program</li>
              <li>Shut down computer</li>
            </ul>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <h2>Weekly Maintenance</h2>
            </div>

            <ul className="checkList">
              <li>Check autoloader belt tension and cleat alignment</li>
              <li>Clean saw dust and debris</li>
              <li>Check hydraulic fluid levels on upcut saws</li>
              <li>Inspect saw blade and arbor tightness</li>
              <li>Clean infeed and outfeed photo eyes with alcohol wipes</li>
              <li>Wipe walls, windows, table, tool holders, and tool holder pins</li>
              <li>Inspect for fluid or air leaks</li>
            </ul>
          </section>

         <section className="panel">
  <div className="panelHeader">
    <h2>Level</h2>
  </div>

  <ul className="checkList">
    <li>
      Ensure that the infeed orange rollers are level with the bottom pads of
      the machine
    </li>
    <li>
      Ensure that the back fence of the rail is straight with the back fence of
      the machine
    </li>
    <li>
      Ensure that the outfeed orange rollers are level with the bottom pads of
      the machine
    </li>
  </ul>
</section>

<section className="completionBox">
  <h2>Annual Maintenance</h2>

  <ul className="checkList annualList">
    <li>Replace any non-working or worn parts</li>
  </ul>

  <p>
    Technicians are always available to do yearly checkups on the machine. If you
    would like to</p> <p>schedule a preventative maintenance check on the machine,
    please contact David Cole.
  </p>

  <p>
    We will cover everything listed above as well as provide insight on anything
    we see that may be out of the ordinary. </p> <p>This is also a great time to do
    retrainings and refreshers for machine operators.
  </p>

  <p>
    <strong>David Cole - (941) 276-947</strong>
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

          .pdfButton {
            margin: 34px auto 0;
            display: inline-flex;
            align-items: center;
            gap: 18px;
            padding: 18px 24px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.16);
            border: 1px solid rgba(245, 158, 11, 0.42);
            color: #ffffff;
            text-decoration: none;
            font-weight: 900;
            font-size: 1.1rem;
          }

          .pdfButton:hover {
            background: rgba(245, 158, 11, 0.26);
            transform: translateY(-2px);
          }

          .pdfIcon {
            background: #ef4444;
            color: #fff;
            padding: 10px 12px;
            border-radius: 10px;
            font-weight: 900;
            letter-spacing: 0.08em;
          }

          .checkList {
            margin: 0;
            padding-left: 0;
            list-style: none;
            display: grid;
            gap: 12px;
          }

          .checkList li {
            color: #d8e0ec;
            font-size: 1.05rem;
            line-height: 1.65;
            font-weight: 650;
          }

          .checkList li::before {
            content: "☐";
            color: #f59e0b;
            font-weight: 900;
            margin-right: 10px;
          }
            .annualList {
  margin-bottom: 24px;
}
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}