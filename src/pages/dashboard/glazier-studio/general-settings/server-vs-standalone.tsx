import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const img = {
  workstation:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-01-workstation.png",

  server:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-02-server.png",

  chooseProject:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-03-choose-project.png",

  export:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-04-export.png",

  tools:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-05-tools-options.png",

  backup:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-06-backup.png",

  manager:
    "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/images/server-07-data-manager.png",
};

export default function ServerVsStandalonePage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / General Settings /
            Server VS Standalone
          </div>

          <section className="heroPanel">
            <p className="eyebrow">General Settings</p>
            <h1>Server VS Standalone</h1>

            <p className="helperText">
              Understanding the difference between standalone and network
              environments and how to transfer projects, catalog parts, metal
              groups, and fabrication data.
            </p>
          </section>

          <section className="panel">
            <div className="textCard spaced">
              <p>
                <strong>Standalone</strong> is essentially the way the program
                runs when not connected to a network. Glazier studio or
                Partner Pak is installed on 1 laptop and can only be accessed
                by the person physically using that laptop. If you have a
                second computer that also has GS or PPAK, this person would not
                be able to see any of the projects, metal groups, or catalog
                parts of the first laptop. For the two computers to communicate
                you would need to set up a server that can host the Databases
                of GS and PPAK.
              </p>

              <div className="callout warning">
                <strong>
                  IF YOU WILL HAVE MORE THEN 1 PERSON USING THESE PROGRAMS GET
                  A NETWORK SET UP AS SOON AS POSSIBLE.
                </strong>

                <p>
                  It will save a lot of headache and help everyone communicate
                  much better.
                </p>
              </div>

              <p>
                <strong>Network</strong> is when you have a Server that hosts
                the program so every computer connected to the network (Via WIFI
                or internet) Can all view the same projects, the same metal
                groups and the same parts. Anytime person 1 creates a project,
                Person 2 can instantly see the frames, and any custom parts
                that went along with that project. There are a few requirements
                for a server and even a standalone computer. I will post those
                below.
              </p>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Computer Requirements</p>
              <h2>Workstation Requirements</h2>
            </div>

            <div className="textCard">
              <p>
                If the information below doesn't make sense, Send this to your
                IT. If you don't have an IT, Any computer that costs more then
                $500 will meet these requirements.
              </p>
            </div>

            <div className="imageWrap medium">
              <img
                src={img.workstation}
                alt="Workstation requirements"
              />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Server Requirements</p>
              <h2>Server Requirements</h2>
            </div>

            <div className="imageWrap medium">
              <img src={img.server} alt="Server requirements" />
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Standalone Sharing</p>
              <h2>How To Share Projects In Standalone</h2>
            </div>

            <div className="textCard">
              <p>
                Even if you are standalone, Information can still be shared.
                It just takes a few more steps. Keep in mind that when we share
                a project in standalone we are assuming that the recipient has
                all of the correct catalog parts and the correct metal group.
                If they don't, These will need to be shared first.
              </p>
            </div>

            <div className="callout danger">
              <strong>
                This is actually not working right now... I need to ask the
                Demichele Group to fix it.
              </strong>
            </div>

            <div className="stepCard">
              <div className="stepNumber">1.</div>

              <div className="stepContent">
                <p>
                  Start by selecting the project you want to transfer. Ensure
                  that it is highlighted in blue
                </p>

                <div className="imageWrap medium">
                  <img
                    src={img.chooseProject}
                    alt="Choose project"
                  />
                </div>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2.</div>

              <div className="stepContent">
                <p>
                  Click on File in the top left hand corner and click EXPORT
                </p>

                <div className="imageWrap small">
                  <img src={img.export} alt="Export project" />
                </div>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3.</div>

              <div className="stepContent">
                <p>
                  Choose a location on your computer to save it to.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">4.</div>

              <div className="stepContent">
                <p>
                  Once the file has been saved to your computer you can then
                  take the project and email it, teams message it, or share it
                  on an existing server.
                </p>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">5.</div>

              <div className="stepContent">
                <p>
                  To import the file unto another computer you can go to the
                  same file tab and click IMPORT and select the file you were
                  sent. This will pull the project into the same screen as your
                  other jobs.
                </p>
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">
                Sharing Catalog Parts, Metal Groups, Fab Rules Library
              </p>

              <h2>Sharing Catalog Parts, Metal Groups, Fab Rules Library</h2>
            </div>

            <div className="stepCard">
              <div className="stepNumber">1.</div>

              <div className="stepContent">
                <p>
                  Click on TOOLS in the top left hand corner and then click on
                  OPTIONS
                </p>

                <div className="imageWrap small">
                  <img src={img.tools} alt="Tools options menu" />
                </div>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">2.</div>

              <div className="stepContent">
                <p>
                  You will now click on a button called BACK UP AND RESTORE.
                </p>

                <div className="imageWrap large">
                  <img src={img.backup} alt="Backup and restore" />
                </div>
              </div>
            </div>

            <div className="stepCard">
              <div className="stepNumber">3.</div>

              <div className="stepContent">
                <p>
                  It will then pop up a data manager screen. If you click the
                  drop down arrow you can choose from a long list of items that
                  can be exported or imported. Typically Catalog parts, Fab
                  rules Library and Metal groups are the three tabs I most
                  commonly see used. Simply click the tab you want to work with
                  and it will then pull up all of the available tabs to export.
                  Lets do metal groups and catalog parts for example.
                </p>

                <div className="imageWrap medium">
                  <img src={img.manager} alt="Data manager screen" />
                </div>
              </div>
            </div>

            <div className="videoWrap">
              <video controls preload="metadata">
                <source
                  src="https://rhino-training-cdn.b-cdn.net/gs-ppak-training/general-settings/server-standalone/video/server-01-sharing-files.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </section>

          <section className="completionBox">
            <h2>Server VS Standalone Complete</h2>

            <p>
              You now understand the difference between standalone and network
              setups, how to transfer projects manually, and how to share
              catalog parts, metal groups, and fabrication libraries between
              systems.
            </p>
          </section>
        </div>

        <style jsx>{`
          .textCard,
          .stepCard {
            background: rgba(255, 255, 255, 0.045);
            border: 1px solid rgba(245, 158, 11, 0.16);
            border-radius: 22px;
          }

          .textCard {
            padding: 28px;
          }

          .textCard p {
            margin: 0;
            line-height: 1.9;
            color: rgba(255, 255, 255, 0.84);
          }

          .spaced {
            display: grid;
            gap: 24px;
          }

          .stepCard {
            display: grid;
            grid-template-columns: 70px 1fr;
            gap: 20px;
            padding: 28px;
            margin-top: 24px;
          }

          .stepNumber {
            font-size: 2rem;
            font-weight: 900;
            color: #f59e0b;
            line-height: 1;
          }

          .stepContent p {
            margin: 0 0 20px;
            line-height: 1.9;
            color: rgba(255, 255, 255, 0.84);
          }

          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 24px auto;
          }

          .imageWrap img {
            width: 100%;
            border-radius: 18px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.45);
          }

          .imageWrap.small img {
            max-width: 320px;
          }

          .imageWrap.medium img {
            max-width: 760px;
          }

          .imageWrap.large img {
            max-width: 980px;
          }

          .videoWrap {
            margin-top: 32px;
            display: flex;
            justify-content: center;
          }

          .videoWrap video {
            width: 100%;
            max-width: 1000px;
            border-radius: 22px;
            border: 1px solid rgba(245, 158, 11, 0.2);
            background: #000;
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.45);
          }

          @media (max-width: 900px) {
            .stepCard {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}