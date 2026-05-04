import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingImage from "@/components/TrainingImage";

export default function ReportsPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">
          Rhino Training / Machine Setup / Databases
        </div>

        <section className="heroPanel">
          <h1>Reports</h1>
          <p>
            Reports gives you detailed history about what has been run on the
            machine, including jobs, parts, fabrications, run time, and totals.
          </p>
        </section>

        <section className="panel">
          <TrainingImage
            src="https://rhino-training-cdn.b-cdn.net/rhino-training/databases/reports/images/reports-01-main-screen.png"
            alt="Reports main screen"
            tall
          />

          <p className="helperText">
            This screen will give you way more information than most users will
            ever need, but it can be helpful when tracking production history or
            reviewing what the machine has run.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>What Reports Tracks</h2>
          </div>

          <p>
            Reports keeps track of machine run time from when a job starts until
            the job ends.
          </p>

          <div className="callout warning">
            <p>
              Reports does <strong>not</strong> track load time or offload time.
              If you E-stop the machine, the timer pauses as well.
            </p>
          </div>

          <p>
            You can organize the report data by day, by job, or even by part.
            This can be useful when trying to understand what was actually run on
            the machine.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Exporting Reports</h2>
          </div>

          <p>
            Reports also includes an auto-export option for Excel. If you want
            to keep a record of what was run every day, you can have the machine
            automatically export an Excel file with the report data.
          </p>

          <div className="callout info">
            <p>
              The export can be sent to a specified location on your server at
              the end of each day.
            </p>
          </div>
        </section>

        <div className="completionBox">
          <h2>Reports Complete</h2>
          <p>
            You now understand what the Reports screen tracks, what it does not
            track, how to organize report data, and how Excel exporting can be
            used for daily production records.
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}