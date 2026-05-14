import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";

export default function EStopsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="heroPanel">
            <div className="heroEyebrow">Troubleshooting</div>
            <h1>E-Stops</h1>

            <p className="heroText">
              This page is more dedicated to older machines than newer ones
              because modern machines will typically tell you exactly which
              E-stop is triggered. However, many of the concepts and failure
              points are still the same.
            </p>
          </div>

          {/* MAIN E-STOPS */}
          <section className="panel">
            <div className="twoImageGrid">
              <div className="imageCard">
                <img
                  src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-01-saw-e-stop.png"
                  alt="Saw E-Stop"
                />
                <h3>Saw E-Stop</h3>
              </div>

              <div className="imageCard">
                <img
                  src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-02-door-e-stop.png"
                  alt="Door E-Stops"
                />
                <h3>Door E-Stops</h3>
              </div>
            </div>

            <div className="infoStack">
              <div className="callout info">
                <p>
                  Every machine has an E-stop on each access door. Fab-side
                  doors typically use yellow magnetic pill sensors while
                  saw-side doors usually use larger black/red interlocks.
                </p>

                <p>
                  The saw-side interlocks prevent the door from opening until
                  the blade has completely stopped rotating.
                </p>
              </div>

              <div className="callout warning">
                <p>
                  Air pressure is also tied into the E-stop circuit.
                </p>

                <p>
                  Most machines require a minimum of roughly <strong>65 PSI</strong>.
                  If the pressure drops below that threshold the machine will
                  E-stop automatically.
                </p>

                <p>
                  On newer machines you can usually monitor this through the
                  digital pressure gauge located on the side of the machine or
                  near the air manifold.
                </p>

                <p>
                  Green numbers = good pressure.
                  <br />
                  Red numbers = low pressure.
                </p>
              </div>

              <div className="callout danger">
                <p>
                  Other E-stops include the large red emergency stop buttons
                  found on the monitor and on the rail button boxThese can be 
                  found on the monitor and the button box on the rail. If you 
                  have an old machine, you will not have an e-stop on the monitor. 
                  instead you will have a pull cable e-stop that must be re-set by 
                  pressing the big blue button before trying to green light. .
                </p>

               
              </div>
            </div>
          </section>

          {/* PULL CHORD */}
          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">Older Machines</div>
                <h2>Pull Cable E-Stop</h2>
              </div>
            </div>

            <div className="centerImageWrap">
              <img
                className="mediumImage"
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-03-pull-chord.png"
                alt="Pull Cable E-Stop"
              />
            </div>

            <div className="callout info">
              <p>
                If you are having issues with the pull cable E-stop, verify that
                the red indicator pin is centered inside the sight glass, You can 
                tension the pull cable to move the pin left or right
                until it lines up correctly. </p>
                <p></p>
                <p>
                Also sometimes 
                pulling the cable to trigger the E-stop and pressing the blue button is a 
                good double check if all the other e-stops have been checked and the machine still wont green light.
              </p>

             
            </div>
          </section>

          {/* FUN FACT */}
          <section className="panel">
            <div className="panelHeader centerHeader">
              <div>
                <div className="sectionEyebrow">Fun Fact</div>
                <h2>Door Sensors Are Magnets</h2>
              </div>
            </div>

            <div className="callout warning">
              <p>
                The yellow pill sensors on the doors are literally just magnetic
                switches.
              </p>

              <p>
                Do with that information what you will...
              </p>
            </div>

            <div className="centerImageWrap">
              <img
                className="smallImage"
                src="https://rhino-training-cdn.b-cdn.net/troubleshooting/e-stops/images/e-stops-04-magnets.png"
                alt="Magnets"
              />
            </div>

            <div className="completionBox">
              <h3>You're Welcome!!</h3>
            </div>
          </section>
        </div>

        <style jsx>{`
          .pageWrap {
            display: grid;
            gap: 28px;
          }

          .heroText {
            max-width: 950px;
          }

          .twoImageGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 28px;
            margin-top: 8px;
          }

          .imageCard {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }

          .imageCard img {
            width: 100%;
            max-width: 420px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .imageCard h3 {
            color: #f59e0b;
            font-size: 1.9rem;
            text-align: center;
            margin: 0;
          }

          .infoStack {
            display: grid;
            gap: 22px;
            margin-top: 32px;
          }

          .centerImageWrap {
            display: flex;
            justify-content: center;
            margin-top: 24px;
          }

          .mediumImage {
            width: 100%;
            max-width: 700px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .smallImage {
            width: 100%;
            max-width: 660px;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.25);
          }

          .centerHeader {
            text-align: center;
            justify-content: center;
          }

          @media (max-width: 768px) {
            .imageCard h3 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}