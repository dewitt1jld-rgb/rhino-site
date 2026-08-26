import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function InconsistentCutLengthsCoastingPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Resolution Guides / Inconsistent Cut Lengths
        </div>

        <section className="heroPanel">
          <p className="eyebrow">Resolution Guide 03</p>

          <h1>How to Fix Inconsistent Cut Lengths Caused by Coasting</h1>

          <p>
            Use this guide when finished parts are coming out at different
            lengths from one another and you suspect the material is coasting
            away from the pusher during positioning.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Phase 1 — Confirm the Problem</h2>

            <p>
              Before changing pressure or roller settings, first confirm that
              coasting is actually causing the inconsistent lengths.
            </p>
          </div>

          <div className="panelContent">
            <div className="callout warning">
              <h3>Diagnostic Test Only</h3>

              <p>
                The backward-pressure test below is only used to confirm whether
                coasting is causing the inconsistency. Do not treat manually
                holding the material as the permanent repair.
              </p>
            </div>

            <div className="stepList">
              <Step number={1}>
                On the next stock length, have a second person apply light
                backward pressure to the material while it feeds.
              </Step>

              <Step number={2}>
                The goal is simply to keep the stock from separating from the
                pusher while the machine positions the material.
              </Step>

              <Step number={3}>
                Run several test pieces while maintaining the light backward
                pressure.
              </Step>

              <Step number={4}>
                Measure the finished pieces and compare their lengths.
              </Step>

              <Step number={5}>
                If the lengths become consistent, you have confirmed that{" "}
                <strong>
                  coasting is causing the inconsistent cut lengths.
                </strong>
              </Step>

              <Step number={6}>
                The parts may still all be the wrong finished size after the
                inconsistency is corrected. That is a separate issue. This test
                is only determining whether coasting is causing the variation
                from part to part.
              </Step>

              <Step number={7}>
                Do not continue manually holding the material during normal
                production. The backward-pressure test is only used to verify
                that you are troubleshooting the correct problem.
              </Step>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Phase 2 — Correct the Coasting</h2>

            <p>
              Coasting happens when the material continues moving forward after
              the pusher has stopped. There are three main ways to reduce or
              eliminate this movement, and a combination of all three usually
              works best.
            </p>
          </div>

          <div className="panelContent">
            <div className="methodGrid">
              <div className="methodCard recommended">
                <div className="methodLabel">Correction 1</div>

                <h3>Increase H-Clamp Pressure</h3>

                <p>
                  The horizontal clamps need enough pressure to hold the
                  material securely once the pusher has positioned it.
                </p>
              </div>

              <div className="methodCard recommended">
                <div className="methodLabel">Correction 2</div>

                <h3>Increase Poly-Clutch Resistance</h3>

                <p>
                  The orange tension rollers should resist free spinning enough
                  to prevent the stock from continuing forward on its own.
                </p>
              </div>

              <div className="methodCard recommended">
                <div className="methodLabel">Correction 3</div>

                <h3>Slow the Infeed Lift Rollers</h3>

                <p>
                  The horizontal lift rollers should not spin so freely that
                  they allow the material to coast after the pusher stops.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              Machines Without Digital H-Clamp Pressure and Digital Clutch
              Pressure
            </h2>

            <p>
              Use this section when both H-clamp pressure and clutch resistance
              are adjusted manually on the machine.
            </p>
          </div>

          <div className="panelContent">
            <h3 className="sectionTitle">
              1. Manually Adjust H-Clamp Pressure
            </h3>

            <div className="stepList">
              <Step number={1}>
                Locate the H-clamp pressure gauge. It can usually be found just
                inside the machine.
              </Step>

              <Step number={2}>
                Adjust the H-clamp pressure between{" "}
                <strong>40 and 60 PSI</strong>.
              </Step>

              <Step number={3}>
                Around <strong>40 PSI</strong> works well for smaller, flimsy
                parts.
              </Step>

              <Step number={4}>
                Around <strong>60 PSI</strong> works well for larger,
                heavy-wall parts.
              </Step>

              <Step number={5}>
                Use your best judgment for material that falls between those
                two extremes.
              </Step>
            </div>

            <h3 className="sectionTitle">
              2. Manually Tension the Poly-Clutches
            </h3>

            <div className="stepList">
              <Step number={1}>
                Locate the orange poly-clutch tension rollers that rotate with
                the material.
              </Step>

              <Step number={2}>
                If the rollers are too loose, the material can coast forward
                after the pusher stops.
              </Step>

              <Step number={3}>
                If the rollers are too tight, they may stop rotating with the
                material and can become damaged.
              </Step>

              <Step number={4}>
                Use the top ring on the roller to tighten or loosen the
                resistance.
              </Step>

              <Step number={5}>
                On a scale from 1 to 10, aim for approximately{" "}
                <strong>5 to 7</strong> in resistance.
              </Step>

              <Step number={6}>
                On that scale, 1 represents nearly free spinning and 10
                represents a roller that is essentially stuck in place.
              </Step>
            </div>

            <h3 className="sectionTitle">
              3. Slow the Infeed Horizontal Lift Rollers
            </h3>

            <div className="stepList">
              <Step number={1}>
                Inspect the orange infeed rollers that lift and support the
                material.
              </Step>

              <Step number={2}>
                On newer machines, some of these rollers have tensioning blocks
                with a set screw that can be used to reduce how freely the
                roller spins.
              </Step>

              <Step number={3}>
                Adjust the roller resistance so the rollers still rotate with
                the material but do not continue free spinning excessively.
              </Step>

              <Step number={4}>
                If your machine does not have these tensioning blocks, contact
                DeMichele Group and ask for{" "}
                <strong>infeed roller tensioning blocks</strong> for the
                horizontal lift rollers.
              </Step>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              Machines With Digital H-Clamp Pressure and Digital Clutch
              Pressure
            </h2>

            <p>
              Use this section when the H-clamp pressure and clutch pressure
              are controlled through the software.
            </p>
          </div>

          <div className="panelContent">
            <h3 className="sectionTitle">
              1. Adjust Digital H-Clamp Pressure
            </h3>

            <div className="stepList">
              <Step number={1}>
                From the main menu, click the{" "}
                <strong>Databases</strong> tab.
              </Step>

              <Step number={2}>
                Open <strong>Parts Library</strong>.
              </Step>

              <Step number={3}>
                Search for the part you are currently running.
              </Step>

              <Step number={4}>
                Navigate across the part settings until you find the column
                labeled <strong>H-Clamp Pressure</strong>.
              </Step>

              <Step number={5}>
                Set the H-clamp pressure between{" "}
                <strong>40 and 60 PSI</strong>.
              </Step>

              <Step number={6}>
                Around <strong>40 PSI</strong> works well for small, flimsy
                parts.
              </Step>

              <Step number={7}>
                Around <strong>60 PSI</strong> works well for large,
                heavy-wall parts.
              </Step>

              <Step number={8}>
                Use your judgment for material that falls between those two
                extremes.
              </Step>
            </div>

            <h3 className="sectionTitle">
              2. Adjust Digital Clutch Pressure
            </h3>

            <div className="stepList">
              <Step number={1}>
                Stay in the same <strong>Parts Library</strong> screen.
              </Step>

              <Step number={2}>
                Locate the column labeled{" "}
                <strong>Clutch Pressure</strong>.
              </Step>

              <Step number={3}>
                Set the clutch pressure between{" "}
                <strong>5 and 12</strong>.
              </Step>

              <Step number={4}>
                A setting around <strong>5</strong> works well for small,
                flimsy parts.
              </Step>

              <Step number={5}>
                A setting around <strong>12</strong> works well for large,
                heavy-wall parts.
              </Step>

              <Step number={6}>
                Use your judgment for material that falls between those two
                extremes.
              </Step>
            </div>

            <div className="callout warning">
              <h3>Door Rollers Are Still Manual</h3>

              <p>
                Even on machines with digitally controlled clutch pressure, the
                orange door rollers are still manually adjusted. Use the top
                ring to tighten or loosen the roller. On a scale from 1 to 10,
                aim for approximately 5 to 7 in resistance.
              </p>
            </div>

            <h3 className="sectionTitle">
              3. Slow the Infeed Horizontal Lift Rollers
            </h3>

            <div className="stepList">
              <Step number={1}>
                Inspect the orange infeed rollers that lift and support the
                material.
              </Step>

              <Step number={2}>
                On newer machines, some of these rollers have tensioning blocks
                with a set screw that reduces how freely the roller spins.
              </Step>

              <Step number={3}>
                Adjust the resistance so the rollers still rotate with the
                material but do not continue spinning excessively after the
                material stops.
              </Step>

              <Step number={4}>
                If your machine does not have these blocks, contact DeMichele
                Group and ask for{" "}
                <strong>infeed roller tensioning blocks</strong> for the
                horizontal lift rollers.
              </Step>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Temporary Workaround</h2>

            <p>
              Use this only as a short-term measure when you need to finish a
              job before the proper roller-tensioning repair can be completed.
            </p>
          </div>

          <div className="panelContent">
            <div className="callout warning">
              <h3>Temporary Only</h3>

              <p>
                If the infeed rollers are free spinning and you need a
                short-term workaround, wedge cardboard under a few of the
                rollers to create additional resistance and reduce free
                spinning.
              </p>
            </div>

            <p className="helperText">
              This is not the preferred permanent repair. The proper solution
              is to correctly adjust the roller resistance or install the
              appropriate infeed roller tensioning blocks.
            </p>
          </div>
        </section>

        <section className="panel completionPanel">
          <div className="completionBox">
            <h2>Verify the Correction</h2>

            <p>
              Run several pieces again without anyone manually holding the
              stock. Measure the finished parts and confirm that the lengths
              are now consistent from piece to piece.
            </p>

            <p>
              If the pieces are now consistent but they are all consistently
              short, use Resolution Guide 01. If they are now consistent but
              they are all consistently long, use Resolution Guide 02.
            </p>
          </div>
        </section>
      </TrainingLayout>

      <GuideStyles />
    </RequireActiveAccess>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="stepCard">
      <div className="stepNumber">{number}</div>
      <p>{children}</p>
    </div>
  );
}

function GuideStyles() {
  return (
    <style jsx global>{`
      .breadcrumb {
        color: rgba(255, 255, 255, 0.62);
        font-size: 13px;
        margin-bottom: 18px;
      }

      .heroPanel,
      .panel {
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.045);
        border-radius: 24px;
        padding: 28px;
        margin-bottom: 26px;
        box-shadow:
          0 18px 45px rgba(0, 0, 0, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }

      .eyebrow {
        margin: 0 0 10px;
        color: #fbbf24;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .heroPanel h1 {
        margin: 0 0 12px;
        font-size: 42px;
        letter-spacing: -0.04em;
        color: #ffffff;
      }

      .heroPanel p,
      .panelHeader p,
      .helperText {
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.7;
        font-size: 16px;
      }

      .panelHeader {
        margin-bottom: 20px;
      }

      .panelHeader h2,
      .completionBox h2 {
        margin: 0 0 10px;
        color: #ffffff;
        font-size: 26px;
        letter-spacing: -0.02em;
      }

      .panelContent {
        display: grid;
        gap: 16px;
      }

      .methodGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .methodCard {
        padding: 20px;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.14);
      }

      .methodCard.recommended {
        border-color: rgba(34, 197, 94, 0.35);
      }

      .methodLabel {
        color: #fbbf24;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: 8px;
      }

      .methodCard h3,
      .sectionTitle {
        color: #ffffff;
      }

      .methodCard p {
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.65;
      }

      .sectionTitle {
        margin-top: 18px;
        margin-bottom: 4px;
        font-size: 22px;
      }

      .stepList {
        display: grid;
        gap: 14px;
      }

      .stepCard {
        display: grid;
        grid-template-columns: 56px 1fr;
        gap: 18px;
        align-items: start;
        padding: 20px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.14);
      }

      .stepNumber {
        width: 46px;
        height: 46px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
        font-weight: 900;
        font-size: 18px;
      }

      .stepCard p {
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        font-size: 16px;
        line-height: 1.7;
      }

      .callout {
        padding: 18px 20px;
        border-radius: 18px;
      }

      .callout.warning {
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.32);
      }

      .callout h3 {
        margin: 0 0 8px;
        color: #fbbf24;
      }

      .callout p {
        margin: 0;
        color: rgba(255, 255, 255, 0.92);
        line-height: 1.7;
      }

      .completionPanel {
        padding: 0;
        overflow: hidden;
      }

      .completionBox {
        padding: 24px;
        background: rgba(34, 197, 94, 0.12);
        border: 1px solid rgba(34, 197, 94, 0.35);
        border-radius: 24px;
      }

      .completionBox p {
        margin: 0 0 12px;
        color: rgba(255, 255, 255, 0.92);
        line-height: 1.7;
      }

      .completionBox p:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 900px) {
        .methodGrid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 800px) {
        .heroPanel,
        .panel {
          padding: 20px;
          border-radius: 20px;
        }

        .heroPanel h1 {
          font-size: 32px;
        }

        .stepCard {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  );
}