import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const mainScreen =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/192.168.42.1/images/failed-to-connect-01-main-screen.png";

const servicesImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/192.168.42.1/images/failed-to-connect-02-services.png";

const sqlImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/192.168.42.1/images/failed-to-connect-03-sql.png";

const propertiesImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/192.168.42.1/images/failed-to-connect-04-properties.png";

const autoImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/192.168.42.1/images/failed-to-connect-05-auto.png";

export default function FailedToConnectPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <section className="heroPanel">
            <p className="eyebrow">Troubleshooting</p>

            <h1>Failed to Connect to 192.168.42.1</h1>

            <p>
              This error usually happens when the RhinoFab software is opened
              too quickly after powering on the machine.
            </p>
          </section>

          <section className="panel center">
            <img src={mainScreen} alt="Failed to connect error message" 
            style={{
    maxWidth: "700px",
    width: "100%",
    margin: "24px auto 0",
    display: "block",
                }}/>

            <p className="helperText">
              Most of the time this can be fixed by pressing OK, exiting the
              software, and retrying again in about 2–3 minutes.
            </p>
          </section>

          <section className="callout warning">
            <h3>9600 / 9700 Machines</h3>

            <p>
              You MUST wait for a red light to appear on the machine before
              opening the software.
            </p>

            <p>
              If you attempt to open the software before the red light appears,
              you will get this message every time.
            </p>
          </section>

          <section className="completionBox">
            <h2>Permanent Fix</h2>

            <p>
              This issue is caused by a program on the RhinoFab computer called
              SQL.
            </p>

            <p>
              Follow the steps below to permanently fix the issue.
            </p>
          </section>

          <section className="panel">
            <div className="stepRow">
              <div className="stepNumber">1</div>

              <div className="stepContent">
                <h3>Open Windows Services</h3>

                <p>
                  On the Rhino computer, press the Windows key and open the
                  <strong> Services</strong> application.
                </p>

                <img src={servicesImage} alt="Windows services search" 
                   style={{
    maxWidth: "600px",
    width: "100%",
    margin: "24px auto 0",
    display: "block",
                }}/>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="stepRow">
              <div className="stepNumber">2</div>

              <div className="stepContent">
                <h3>Locate SQL Server</h3>

                <p>
                  Scroll through the services list until you find:
                </p>

                <p className="highlight">
                  SQL Server (SQLEXPRESS)
                </p>

                <img src={sqlImage} 
                alt="SQL Express service" 
                style={{
    maxWidth: "600px",
    width: "100%",
    margin: "24px auto 0",
    display: "block",
                }}
                />
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="stepRow">
              <div className="stepNumber">3</div>

              <div className="stepContent">
                <h3>Open Properties</h3>

                <p>
                  Right click on{" "}
                  <strong>SQL Server (SQLEXPRESS)</strong> and click{" "}
                  <strong>Properties</strong>.
                </p>

                <img
  src={propertiesImage}
  alt="SQL Express properties menu"
  style={{
    maxWidth: "500px",
    width: "100%",
    margin: "24px auto 0",
    display: "block",
  }}
/>
                
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="stepRow">
              <div className="stepNumber">4</div>

              <div className="stepContent">
                <h3>Change Startup Type</h3>

                <p>
                  Inside the properties screen, locate the{" "}
                  <strong>Startup Type</strong> dropdown.
                </p>

                <p>
                  Change the setting from{" "}
                  <strong>Automatic (Delayed Start)</strong> to{" "}
                  <strong>Automatic</strong>.
                </p>

                <img src={autoImage} alt="Automatic startup selection" 
                
                style={{
    maxWidth: "600px",
    width: "100%",
    margin: "24px auto 0",
    display: "block",
                }}/>
              </div>
            </div>
          </section>

          <section className="completionBox">
            <h2>Final Step</h2>

            <p>
              Press OK and exit the Services tab.
            </p>

            <p>
              This will cause the SQL service to start automatically and you
              should no longer see the 192.168.42.1 connection error.
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

          .panel img,
          .center img {
            display: block;
            width: 100%;
            max-width: 850px;
            height: auto;
            margin: 28px auto 0;
            border-radius: 14px;
          }

          .stepRow {
            display: flex;
            gap: 24px;
            align-items: flex-start;
          }

          .stepNumber {
            min-width: 70px;
            height: 70px;
            border-radius: 18px;
            background: rgba(245, 158, 11, 0.12);
            border: 1px solid rgba(245, 158, 11, 0.4);
            color: #f59e0b;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: 900;
          }

          .stepContent {
            flex: 1;
          }

          .stepContent h3 {
            margin-top: 0;
          }

          .highlight {
            color: #f59e0b;
            font-weight: 800;
            font-size: 18px;
          }

          @media (max-width: 768px) {
            .stepRow {
              flex-direction: column;
            }

            .stepNumber {
              width: 70px;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}