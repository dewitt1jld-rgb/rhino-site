import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/images/calibrate-rotational-spindle-01-main-image.png",
  removeBlade:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/images/calibrate-rotational-spindle-02-please-remove-saw-blade.png",
  bevelNotice:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/images/calibrate-rotational-spindle-03-notice-how-bevel.png",
};

const videos = {
  removeBlade:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/videos/video-calibrate-rotational-spindle-01-please-remove-saw-blade.MOV",
  bevelRotation:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/videos/video-calibrate-rotational-spindle-02-cal-bevel-rotation.MOV",
  bevelDial:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/videos/video-calibrate-rotational-spindle-03-cal-bevel-dial-ind.MOV",
  miterRotation:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/videos/video-calibrate-rotational-spindle-04-cal-miter-rotation.MOV",
  miterDial:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/5000-series-calibration/videos/video-calibrate-rotational-spindle-05-cal-miter-dial-ind.MOV",
};

function VideoCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="videoCard">
      <div className="videoHeader">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

<div className="videoWrapper">
   <video
  controls
  style={{
    width: "100%",
    maxWidth: "600px",
    display: "block",
    margin: "0 auto",
    borderRadius: "16px",
    background: "#000",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
  }}
>
  <source src={src} />
</video>
      </div>
    </div>
  );
}

export default function CalRotationalSpindlesPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / 5600-5700 Calibration
        </div>

        <section className="heroPanel">
          <h1>Calibrate Rotational Spindles</h1>
          <p>
            This calibration uses a dial indicator to make sure the saw and
            drills rotate to the correct angle when cutting or drilling.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Main Calibration Screen</h2>
            <p>
              This screen is used to set the origin for the compound saw and
              compound drill rotations.
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Calibrate rotational spindle main screen"
            tall
          />

          <div className="callout danger">
            <p>
              If the saw has a loud back cut when retracting out of the part,
              rerun this calibration.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Step 1 — Find Origin</h2>
            <p>
              Start by selecting the spindle and saw rotation you want to
              calibrate, then click <strong>Find Origin</strong>.
            </p>
          </div>

        
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "12px"
  }}
>
  <div style={{ width: "100%", maxWidth: "700px" }}>
    <TrainingImage
      src={images.removeBlade}
      alt="Please remove saw blade prompt"
      tall
    />
  </div>
</div>




          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">1</div>
              <div>
                <h3>Click Find Origin</h3>
                <p>
                  The software will prompt you to remove the saw blade before
                  continuing.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2</div>
              <div>
                <h3>E-stop the machine and open the saw door</h3>
                <p>
                  Before reaching into the saw cabinet, make sure the machine is
                  properly E-stopped and safe to access.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3</div>
              <div>
                <h3>Remove the saw blade</h3>
                <p>
                  Remove the saw blade before continuing with the rotational
                  spindle calibration.
                </p>
              </div>
            </div>
          </div>

          <VideoCard
            title="Saw Blade Removal"
            description="Watch this before removing the saw blade for calibration."
            src={videos.removeBlade}
          />
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Bevel Calibration</h2>
            <p>
              Once the blade is removed, the screen will enable jogging so you
              can align the rotational saw to the correct origin.
            </p>
          </div>

          <TrainingImage
            src={images.bevelNotice}
            alt="Bevel rotational spindle calibration notice"
            tall
          />

          <div className="callout warning">
            <p>
              This example is shown for the compound saw bevel. The same test
              will also be done for the miter rotation and both drill rotations.
            </p>
          </div>

          <p className="helperText">
            Mount the dial indicator in the machine along the machined surface
            of the spindle. Place the dial indicator in the middle of the spindle
            and sweep the saw or drill to the end of the machined surface, about
            4 inches.
          </p>

          <div className="videoGrid">
            <VideoCard
              title="Bevel Rotation Movement"
              description="This video shows the screen movement during bevel rotation calibration."
              src={videos.bevelRotation}
            />

            <VideoCard
              title="Bevel Dial Indicator Setup"
              description="This video shows the dial indicator setup on the saw side."
              src={videos.bevelDial}
            />
          </div>

          <div className="callout info">
            <p>
              These two videos should be happening at the same time: one showing
              the software movement and the other showing the dial indicator on
              the machine.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Set Origin</h2>
            <p>
              Once the spindle is straight, remove the dial indicator and set
              the origin.
            </p>
          </div>

          <div className="stepList">
            <div className="stepCard">
              <div className="stepNumber">4</div>
              <div>
                <h3>Align the saw with the dial indicator</h3>
                <p>
                  Use the dial indicator to align the saw until the machined
                  surface reads straight.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5</div>
              <div>
                <h3>Remove the dial indicator</h3>
                <p>
                  Once the saw is straight, remove the dial indicator from the
                  saw before continuing.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">6</div>
              <div>
                <h3>Click Set Origin</h3>
                <p>
                  After the dial indicator is removed, click{" "}
                  <strong>Set Origin</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Miter Calibration</h2>
            <p>
              Repeat the same process for the miter calibration.
            </p>
          </div>

          <div className="videoGrid">
            <VideoCard
              title="Miter Rotation Movement"
              description="This video shows the software movement during miter rotation calibration."
              src={videos.miterRotation}
            />

            <VideoCard
              title="Miter Dial Indicator Setup"
              description="This video shows the dial indicator setup during miter calibration."
              src={videos.miterDial}
            />
          </div>

          <div className="callout warning">
            <p>
              Repeat steps 1–6 for the <strong>Miter</strong> calibration.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Compound Drill Calibration</h2>
            <p>
              The compound drill calibration follows the same general process.
            </p>
          </div>

          <div className="callout info">
            <p>
              Follow these same steps for the compound drill calibration. The
              only difference is that the process is done inside the drill
              cabinet instead of the saw cabinet. Everything else works the same
              way.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Rotational Spindle Calibration Complete</h2>
          <p>
            You now understand how to find origin, remove the blade, mount the
            dial indicator, align the spindle, set origin, and repeat the process
            for bevel, miter, and drill rotations.
          </p>
        </div>

        <style jsx>{`
          .videoGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 18px;
            margin-top: 24px;
          }

          .videoCard {
            background: rgba(2, 6, 23, 0.65);
            border: 1px solid rgba(148, 163, 184, 0.2);
            border-radius: 22px;
            padding: 16px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
          }

          .videoHeader {
            margin-bottom: 14px;
          }

          .videoHeader h3 {
            margin: 0 0 8px;
            color: #ffffff;
            font-size: 1.15rem;
          }

          .videoHeader p {
            margin: 0;
            color: #cbd5e1;
            line-height: 1.55;
          }
            .videoWrapper {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.trainingVideo {
  width: 80%;
  max-width: 200px;
  border-radius: 18px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.4);
}

          .trainingVideo {
            width: 100%;
            max-height: 400px;
            border-radius: 16px;
            background: #000000;
            display: block;
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}