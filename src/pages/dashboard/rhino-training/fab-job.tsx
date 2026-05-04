import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-01-main-image.png",
  cutListInfo:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-02-cut-fab-ino-screen.png",
  selectPart:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-03-select-part-screen.png",
  loadTool:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-04-load-tool-screen.png",
  pullList:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-05-pull-list.png",
  finalFabJob:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-06-final-fab-job-screen.png",
  autoloaderPrompt:
    "https://rhino-training-cdn.b-cdn.net/rhino-training/fab-job/images/fab-job-07-load-aut-press-cont.png",
};

export default function FabJobPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="breadcrumb">Rhino Training / All Rhino Machines</div>

        <section className="heroPanel">
          <h1>Fab Job</h1>
          <p>
            The Fab Job workflow is where you select a cut list, review the job
            information, choose the part to fabricate, verify tools, pull stock,
            and finally start the job on the machine.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fab Job Screen</h2>
            <p>
              This is the main Fab Job screen where you select the job you want
              to run. Most buttons are self explanatory, but the bottom buttons
              are especially important.
            </p>
          </div>

          <TrainingImage src={images.main} alt="Fab Job main screen" tall />

          <div className="callout info">
            <p>
              Focus on the three bottom buttons: <strong>Merge List</strong>,{" "}
              <strong>Fabs Only</strong>, and <strong>Select List</strong>.
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Merge List</h3>
              <p>
                This is where you merge in new jobs that have been sent down
                from the office.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Fabs Only</h3>
              <p>
                This allows you to fabricate a pre-cut stick without making any
                cuts. This is useful when you only want fabrication operations.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Select List</h3>
              <p>
                After the job is highlighted in blue, press Select List to move
                to the next screen.
              </p>
            </div>
          </div>

          <p className="helperText">
            If Door Mode and Stick Mode are shown on your screen, you do not
            need to click those buttons to run a door or stick job. Simply choose
            the job and press <strong>Select List</strong>. If it is a door, the
            machine will automatically enter door mode and may prompt you to
            raise or lower the outfeed gate.
          </p>

          <div className="callout warning">
            <p>
              The <strong>Show Completed Orders</strong> checkbox controls
              whether completed orders appear in the list. If you delete a job
              from this screen, the only way to get it back is to re-merge it
              using <strong>Merge List</strong>.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Cut List Info</h2>
            <p>
              This screen can be extremely helpful when diagnosing problems, but
              most of the time you can skip it before running the job.
            </p>
          </div>

          <TrainingImage
            src={images.cutListInfo}
            alt="Cut List Info screen"
            tall
          />

          <p className="helperText">
            Usually, you do not need to select anything or make changes on this
            screen. Simply press <strong>Fab List</strong> to continue.
          </p>

          <p className="helperText">
            After the job has been run, this screen becomes more useful. Take
            the stick in question and look at the stick ID on the label. Find
            the matching stick ID in the list, then click the part name so it
            highlights in blue. The Fab Information section changes based on the
            selected part.
          </p>

          <div className="callout info">
            <h3>Programming Issue or Machine Issue?</h3>
            <p>
              If the physical part matches the data on the screen but is still
              incorrect, the issue is usually in the programming and should be
              fixed in Glazier Studio or PartnerPak. If the physical part does
              not match the screen data, the issue is usually on the machine and
              is most likely calibration-related.
            </p>
          </div>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Run in Fab Test</h3>
              <p>
                Transfers selected fabrication data to the Fab Test screen. This
                is useful for testing a set of fabrications on a trash stick
                before running finished material.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Print Tag</h3>
              <p>
                Prints a label for the selected line item.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Reset All Cut Qtys</h3>
              <p>
                Sets all cut quantities to zero so the entire list can be recut.
              </p>
            </div>
          </div>

          <div className="callout danger">
            <p>
              To recut one stick, find the correct stick ID and change the
              number in the <strong>Cut</strong> column from 1 to 0. The saw
              will then think that stick needs to be recut.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Select Part Screen</h2>
            <p>
              This screen is straightforward. Select the part you want to run and
              press Select.
            </p>
          </div>

          <TrainingImage
            src={images.selectPart}
            alt="Select Part screen"
            tall
          />

          <p className="helperText">
            You can run any piece in any order you want. You do not have to run
            parts in the order shown on the list.
          </p>

          <div className="buttonGrid">
            <div className="buttonInfo">
              <h3>Toggle Switches</h3>
              <p>
                You can toggle <strong>Use Drops</strong> and{" "}
                <strong>Deplete Drops</strong> on or off. Most users prefer to
                leave both on.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Print Batch Labels</h3>
              <p>
                Prints all labels associated with the selected part number.
              </p>
            </div>

            <div className="buttonInfo">
              <h3>Set Priority Frames</h3>
              <p>
                Changes the optimization order so specific frames come out of
                the machine first.
              </p>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Load Tool Screen</h2>
            <p>
              This screen shows which tools are required for the part you are
              about to run.
            </p>
          </div>

          <TrainingImage
            src={images.loadTool}
            alt="Load Tool screen"
            tall
          />

          <p className="helperText">
            If the screen is blank, there are no fabrications on that part. To
            continue past this screen, you must confirm each drill bit that will
            be used.
          </p>

          <p className="helperText">
            Before pressing OK, verify that the drill bit listed for each drill
            is actually loaded. If your machine has a tool changer, you do not
            need to manually change bits. Press OK, and the machine will notify
            you if any tools are missing.
          </p>

          <div className="callout warning">
            <h3>Drill Collisions</h3>
            <p>
              You can click <strong>Part Library</strong> if you need to change
              the part before running. The most common issue here is drill
              collisions, which are usually caused by missing information rather
              than a true physical collision.
            </p>
          </div>

          <div className="callout info">
            <h3>Machines with a Tool Changer</h3>
            <p>
              The <strong>Tool Rack Library</strong> or{" "}
              <strong>Carousel Library</strong> button lets you add or change
              bits without leaving the job.
            </p>
          </div>

          <p className="helperText">
            Once all drill collisions are cleared, I-Planes are added, and
            drills are confirmed, press <strong>Next</strong> in the bottom
            right corner to continue to the pull stock list.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Pull List</h2>
            <p>
              The Pull List tells you how many stock lengths and drops are
              needed to finish the selected cut list.
            </p>
          </div>

          <TrainingImage src={images.pullList} alt="Pull List screen" tall />

          <p className="helperText">
            In this example, the machine is telling the operator to pull an{" "}
            <strong>89.392&quot;</strong> drop from the drop rack and{" "}
            <strong>12</strong> pieces of <strong>289&quot;</strong> stock
            length.
          </p>

          <p className="helperText">
            If you do not want to use drops, toggle them off on the left side.
            The machine will re-optimize and may tell you to pull a different
            stock length.
          </p>

          <p className="helperText">
            If you have a drop that is not already added, press{" "}
            <strong>Drop Library</strong> on the left side and add the drop
            there.
          </p>

          <div className="callout info">
            <h3>Lead and Trail Trim</h3>
            <p>
              You can modify lead and trail trim cuts from this screen. For
              example, if dye marks are about 1.25&quot; into the material, set
              the trim to around 1.5&quot; to make sure they are removed.
            </p>
          </div>

          <p className="helperText">
            Once you are satisfied with the trims and stock needed, click{" "}
            <strong>Next</strong> to move to the final screen where you can
            start the job.
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Fab Job: Final Screen</h2>
            <p>
              This is the final screen before the machine begins running the
              selected job.
            </p>
          </div>

          <TrainingImage
            src={images.finalFabJob}
            alt="Final Fab Job screen"
            tall
          />

          <p className="helperText">
            The main function of this screen is to verify that everything looks
            correct and press <strong>Start</strong>. Once you press Start, the
            machine will prompt you to load the piece with the autoloader or
            give you the option to skip it.
          </p>

          <p className="helperText">
            In the top right corner, the pattern controls allow you to jump from
            stick to stick and view the different cut lengths coming out of each
            stock length. If you want to start on a certain pattern, navigate to
            it and press Start.
          </p>

          <div className="callout info">
            <p>
              The <strong>Select New Drop</strong> button takes you back to the
              Pull List if you need to use a different drop or realize you do
              not have the correct length.
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>Autoloader Prompt</h2>
            <p>
              After pressing Start, the machine may ask whether you want to use
              the autoloader.
            </p>
          </div>

          <TrainingImage
            src={images.autoloaderPrompt}
            alt="Autoloader prompt screen"
            tall
          />

          <p className="helperText">
            You can press <strong>OK</strong> to use the autoloader or press{" "}
            <strong>Skip</strong> to manually load the stick in front of the
            pusher.
          </p>

          <p className="helperText">
            If the stick is less than 72&quot;, the machine will automatically
            skip the conveyor and require you to load the piece by hand.
          </p>

          <p className="helperText">
            If you press OK, the machine handles everything from that point. If
            you press Skip, the pusher moves back and prompts you to load the
            stick in front of the pusher, then continue when ready.
          </p>
        </section>

        <div className="completionBox">
          <h2>Fab Job Complete</h2>
          <p>
            At this point, the operator has selected the job, reviewed the cut
            list, selected the part, confirmed tools, reviewed stock, and started
            the machine.
          </p>
        </div>

       
      </TrainingLayout>
    </RequireActiveAccess>
  );
}