import GlazierTrainingLayout from "@/components/GlazierTrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";

const appImage =
  "https://rhino-training-cdn.b-cdn.net/gs-ppak-training/all-about-frames/glazier-studio-app/images/glazier-studio-app-01.png";

export default function GlazierStudioAppPage() {
  return (
    <RequireActiveAccess>
      <GlazierTrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Glazier Studio & PartnerPak / All About Frames /
            Glazier Studio App
          </div>

          <section className="heroPanel">
            <p className="eyebrow">All About Frames</p>
            <h1>Glazier Studio App</h1>

            <p className="helperText">
              The Glazier Studio App was designed to allow field crews and job
              site personnel to access projects, review frame information, take
              notes, and request modifications directly from a phone or tablet.
            </p>
          </section>

          <section className="panel">
            <div className="imageWrap small">
              <img
                src={appImage}
                alt="Glazier Studio App menu"
              />
            </div>

            <p className="helperText centerText">
              The app tools are located underneath the Projects section inside
              Glazier Studio.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Original Purpose</p>
              <h2>Designed for field use</h2>
            </div>

            <p className="helperText">
              The app was intended to help field crews request modifications,
              record dimensions, and document job site conditions while working
              directly from a mobile device.
            </p>

            <p className="helperText">
              Users could pull up projects and frames created in Glazier Studio
              from a phone or tablet so they could review project information
              while physically on the job site.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Real World Experience</p>
              <h2>Mixed customer feedback</h2>
            </div>

            <p className="helperText">
              While the original idea behind the app was strong, many users
              reported limitations with functionality and usability in earlier
              versions.
            </p>

            <div className="callout info">
              There were multiple requests from customers for improvements and
              expanded functionality. The current state of the app may be
              different depending on newer updates and development changes.
            </div>

            <p className="helperText">
              Because development has changed over time, it is a good idea to
              speak directly with DeMichele Group regarding the current features
              and capabilities before purchasing.
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <p className="eyebrow">Licensing</p>
              <h2>Subscription required</h2>
            </div>

            <div className="callout warning">
              This is not a free app. You must contact DeMichele Group directly
              to purchase and activate the subscription.
            </div>

            <p className="helperText">
              Without purchasing and linking the app to the desktop version of
              Glazier Studio, the App Task Manager and App Project Builder tools
              shown in the image above will not function.
            </p>
          </section>

          <section className="completionBox">
            <h2>Glazier Studio App Overview Complete</h2>

            <p>
              Before investing in the mobile app workflow, verify the current
              feature set and compatibility with your existing Glazier Studio
              environment.
            </p>
          </section>
        </div>

        <style jsx>{`
          .imageWrap {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 18px;
          }

          .imageWrap img {
            width: 100%;
            max-width: 520px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.24);
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.38);
          }

          .centerText {
            text-align: center;
          }
        `}</style>
      </GlazierTrainingLayout>
    </RequireActiveAccess>
  );
}