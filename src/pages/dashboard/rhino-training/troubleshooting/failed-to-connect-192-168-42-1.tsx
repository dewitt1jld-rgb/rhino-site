import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

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
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <TrainingPageHeader
            breadcrumb="Rhino Training / Troubleshooting / Failed to Connect to 192.168.42.1"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <p className="eyebrow">
              Troubleshooting
            </p>

            <h1>
              Failed to Connect to 192.168.42.1
            </h1>

            <p>
              {isSpanish
                ? "Este error normalmente ocurre cuando el software RhinoFab se abre demasiado rápido después de encender la máquina."
                : "This error usually happens when the RhinoFab software is opened too quickly after powering on the machine."}
            </p>
          </section>

          <section className="panel center">
            <img
              src={mainScreen}
              alt="Failed to connect error message"
              style={{
                maxWidth: "700px",
                width: "100%",
                margin: "24px auto 0",
                display: "block",
              }}
            />

            <p className="helperText">
              {isSpanish
                ? "La mayoría de las veces esto se puede corregir presionando OK, cerrando el software y volviendo a intentarlo después de aproximadamente 2–3 minutos."
                : "Most of the time this can be fixed by pressing OK, exiting the software, and retrying again in about 2–3 minutes."}
            </p>
          </section>

          <section className="callout warning">
            <h3>9600 / 9700 Machines</h3>

            <p>
              {isSpanish
                ? "DEBE esperar a que aparezca una luz roja en la máquina antes de abrir el software."
                : "You MUST wait for a red light to appear on the machine before opening the software."}
            </p>

            <p>
              {isSpanish
                ? "Si intenta abrir el software antes de que aparezca la luz roja, recibirá este mensaje cada vez."
                : "If you attempt to open the software before the red light appears, you will get this message every time."}
            </p>
          </section>

          <section className="completionBox">
            <h2>
              {isSpanish
                ? "Solución permanente"
                : "Permanent Fix"}
            </h2>

            <p>
              {isSpanish
                ? "Este problema es causado por un programa en la computadora RhinoFab llamado SQL."
                : "This issue is caused by a program on the RhinoFab computer called SQL."}
            </p>

            <p>
              {isSpanish
                ? "Siga los pasos a continuación para corregir el problema permanentemente."
                : "Follow the steps below to permanently fix the issue."}
            </p>
          </section>

          <section className="panel">
            <div className="stepRow">
              <div className="stepNumber">
                1
              </div>

              <div className="stepContent">
                <h3>
                  {isSpanish
                    ? "Abra Windows Services"
                    : "Open Windows Services"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      En la computadora Rhino, presione la tecla Windows y
                      abra la aplicación <strong>Services</strong>.
                    </>
                  ) : (
                    <>
                      On the Rhino computer, press the Windows key and open the
                      <strong> Services</strong> application.
                    </>
                  )}
                </p>

                <img
                  src={servicesImage}
                  alt="Windows services search"
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
              <div className="stepNumber">
                2
              </div>

              <div className="stepContent">
                <h3>
                  {isSpanish
                    ? "Localice SQL Server"
                    : "Locate SQL Server"}
                </h3>

                <p>
                  {isSpanish
                    ? "Desplácese por la lista de Services hasta encontrar:"
                    : "Scroll through the services list until you find:"}
                </p>

                <p className="highlight">
                  SQL Server (SQLEXPRESS)
                </p>

                <img
                  src={sqlImage}
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
              <div className="stepNumber">
                3
              </div>

              <div className="stepContent">
                <h3>
                  {isSpanish
                    ? "Abra Properties"
                    : "Open Properties"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Haga clic derecho en{" "}
                      <strong>SQL Server (SQLEXPRESS)</strong> y haga clic en{" "}
                      <strong>Properties</strong>.
                    </>
                  ) : (
                    <>
                      Right click on{" "}
                      <strong>SQL Server (SQLEXPRESS)</strong> and click{" "}
                      <strong>Properties</strong>.
                    </>
                  )}
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
              <div className="stepNumber">
                4
              </div>

              <div className="stepContent">
                <h3>
                  {isSpanish
                    ? "Cambie Startup Type"
                    : "Change Startup Type"}
                </h3>

                <p>
                  {isSpanish ? (
                    <>
                      Dentro de la pantalla Properties, localice el dropdown{" "}
                      <strong>Startup Type</strong>.
                    </>
                  ) : (
                    <>
                      Inside the properties screen, locate the{" "}
                      <strong>Startup Type</strong> dropdown.
                    </>
                  )}
                </p>

                <p>
                  {isSpanish ? (
                    <>
                      Cambie la configuración de{" "}
                      <strong>Automatic (Delayed Start)</strong> a{" "}
                      <strong>Automatic</strong>.
                    </>
                  ) : (
                    <>
                      Change the setting from{" "}
                      <strong>Automatic (Delayed Start)</strong> to{" "}
                      <strong>Automatic</strong>.
                    </>
                  )}
                </p>

                <img
                  src={autoImage}
                  alt="Automatic startup selection"
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

          <section className="completionBox">
            <h2>
              {isSpanish
                ? "Paso final"
                : "Final Step"}
            </h2>

            <p>
              {isSpanish
                ? "Presione OK y cierre la ventana de Services."
                : "Press OK and exit the Services tab."}
            </p>

            <p>
              {isSpanish
                ? "Esto hará que el servicio SQL se inicie automáticamente y ya no debería aparecer el error de conexión 192.168.42.1."
                : "This will cause the SQL service to start automatically and you should no longer see the 192.168.42.1 connection error."}
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