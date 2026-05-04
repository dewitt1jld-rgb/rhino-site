import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function ChangeSawBladePage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / Machine Setup</div>

        <section className="heroPanel">
          <h1>Change Saw Blade</h1>
          <p>
            This page covers the basic process for changing the saw blade on
            non-5000 series Rhino machines.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Before You Begin</h2>
            <p>
              This screen does not do much beyond allowing the saw to drop down
              slightly. In most cases, you can change the saw blade from whatever
              screen you are already on.
            </p>
          </div>

          <div className="callout warning">
            <p>
              This page is for <strong>non-5000 series machines</strong>. The
              5000 series blade removal process is different because that screen
              actually moves the saw into position.
            </p>
          </div>

          <div className="callout danger">
            <p>
              Always make sure the machine is properly E-stopped before working
              around the saw blade.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Change Saw Blade Steps</h2>
            <p>
              Follow these steps carefully before removing and replacing the saw
              blade.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <div>
                <h3>E-stop the machine</h3>
                <p>
                  Make sure the machine is E-stopped. If you were able to open
                  the saw door, it should already be E-stopped. The saw door has
                  a 7-second timer, so after pressing another E-stop, wait about
                  7 seconds and the door should unlock.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <div>
                <h3>Grab the correct wrenches</h3>
                <p>
                  Get the two wrenches from the toolbox provided with the
                  machine. One should be a <strong>40mm wrench</strong> and the
                  other should be a <strong>27mm wrench</strong>.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <div>
                <h3>Remove the oiler and blue protective cover</h3>
                <p>
                  Remove the oiler from the blue protective cover. Then remove
                  the cover by taking out the two M8 bolts using an{" "}
                  <strong>M6 Allen</strong>. Once the bolts are out, rotate the
                  cover forward and remove it from the saw.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4</div>
              <div>
                <h3>Break the saw blade nut loose</h3>
                <p>
                  Pop the saw blade nut loose by spinning the outside nut in the
                  same direction the saw blade spins. Some saws may have reverse
                  thread nuts depending on the handing of the machine.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <div>
                <h3>Remove the disks and blade</h3>
                <p>
                  Remove the disks holding the saw blade and note which disk
                  goes on each side of the blade. They are different and their
                  positions matter.
                </p>

                <p>
                  Remove the old blade and carefully install the new blade. If
                  the new blade feels loose or slides on easier than the old
                  blade, check the center ring. If the reducer ring was removed
                  with the old blade, move it to the new blade.
                </p>

                <p>
                  The easiest way to install the ring is to lay the blade flat
                  and gently tap the ring into the center with a rubber mallet.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>
              <div>
                <h3>Reassemble and verify blade direction</h3>
                <p>
                  Put everything back together by reversing the steps. If
                  anything sounds bad or the blade does not spin evenly, stop and
                  repeat the process.
                </p>

                <p>
                  Remember: the saw blade cuts toward the back fence. The blade
                  must be loaded with the teeth facing the correct direction{" "}
                  <strong>every time</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="completionBox">
          <h2>Change Saw Blade Complete</h2>
          <p>
            You now know the basic process for safely replacing the saw blade,
            checking the reducer ring, reinstalling the disks, and verifying
            blade direction.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}