import Link from "next/link";
import AcademyLessonLayout from "../../../components/AcademyLessonLayout";

const steps = [
  {
    number: 1,
    title: "Why Build Your Own Metal Group?",
    href: "/dashboard/estimator-training/lesson-2",
  },
  {
    number: 2,
    title: "Understanding Metal Group Vocabulary",
    href: "/dashboard/estimator-training/lesson-2-metal-group-vocabulary",
  },
];

export default function EstimatorLessonTwoPage() {
  return (
    <AcademyLessonLayout
      lessonNumber="02"
      lessonTitle="Choosing Your Estimating Method"
      lessonDescription="Understand why building a project-specific metal group can save time between estimating and fabrication, and learn when a simpler estimating workflow may still make sense."
      currentStep={1}
      steps={steps}
    >
      <p className="academyEyebrow">Step 1 of 2</p>

      <h2>Why Build Your Own Metal Group?</h2>

      <div className="goalBox">
        <strong>Goal:</strong>{" "}
        Understand why spending a few extra minutes preparing the metal group
        during estimating can save significantly more time after the project is
        awarded.
      </div>

      <div className="lessonText">
        <p>
          Before we go any further, I want to make one thing very clear:
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Important</p>

        <h3>
          You can absolutely estimate accurately without building your own
          metal group.
        </h3>

        <p>
          Glazier Studio and PartnerPak can still be used to create an accurate
          estimate even if you select an existing metal group that is only
          reasonably close to the system you need.
        </p>

        <p>
          So why am I suggesting that you take the time to create a modified
          metal group before you begin building frames?
        </p>
      </div>

      <h3>Because the Estimate May Become the Real Job</h3>

      <div className="lessonText">
        <p>
          During estimating, it is very easy to think only about getting the bid
          completed.
        </p>

        <p>
          You find a metal group that is close enough, build the frames, run the
          reports, get your pricing, and send the proposal.
        </p>

        <p>
          If you lose the bid, that workflow may have worked perfectly fine.
        </p>

        <p>
          The problem begins when you <strong>win</strong>.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">The Question</p>

        <h3>
          What happens to the estimating project after you win the job?
        </h3>

        <p>
          If the metal group was never prepared correctly, someone now has to
          go back and turn that estimating project into something that can
          actually move toward fabrication.
        </p>
      </div>

      <h3>Option 1: Use a Standard Metal Group and Move On</h3>

      <div className="lessonText">
        <p>
          Let&apos;s say you choose a standard DeMichele Group metal group that
          is reasonably close to what the project requires.
        </p>

        <p>
          You do not make any modifications to it.
        </p>

        <p>
          You build your frames, complete the estimate, send the bid, and
          eventually win the project.
        </p>
      </div>

      <div className="workflowBox">
        <p className="sectionLabel">Option 1 Workflow</p>

        <div className="workflowStack">
          <div className="workflowItem">
            Choose a metal group that is close enough
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Build estimating frames
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Price the project
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem success">
            Win the bid
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem problem">
            Go back and verify every metal-group component
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem problem">
            Replace incorrect parts
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem problem">
            Create a project-specific metal group
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem problem">
            Change the existing frames to the new metal group
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem danger">
            Repair or rebuild frames that break during the change
          </div>
        </div>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">The Hidden Cost</p>

        <h3>
          You saved time during estimating, but you may have simply moved that
          work to someone else.
        </h3>

        <p>
          The estimator may have finished the bid faster, but the fabrication
          team now has to clean up the project before it can be used.
        </p>
      </div>

      <h3>Changing the Metal Group Later Can Create Problems</h3>

      <div className="lessonText">
        <p>
          Once the bid is awarded, the first step is often to verify all of the
          components associated with the framing system.
        </p>

        <p>
          Heads, sills, jambs, verticals, horizontals, stops, vinyl, optional
          metal, and other components may need to be changed.
        </p>

        <p>
          Because we do not want to modify the original DeMichele Group standard
          metal group, a new project-specific group eventually has to be
          created anyway.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          The project-specific metal group usually has to exist eventually.
        </strong>

        <p>
          The real decision is whether you create it during estimating or force
          someone to create it later.
        </p>
      </div>

      <div className="lessonText">
        <p>
          Once that new group exists, the existing frames need to be switched
          from the estimating metal group to the new project-specific group.
        </p>

        <p>
          That sounds simple, but changing metal groups on an existing frame can
          create problems.
        </p>

        <p>
          Different groups may contain different members, different component
          positions, or different settings.
        </p>

        <p>
          In some cases, changing the group can cause the frame to behave
          incorrectly or require enough cleanup that rebuilding the frame is
          easier.
        </p>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">Worst-Case Result</p>

        <h3>
          You estimated the project once, then essentially built it again after
          winning the job.
        </h3>
      </div>

      <h3>Option 2: Spend a Few Extra Minutes Up Front</h3>

      <div className="lessonText">
        <p>
          Now let&apos;s look at the alternative.
        </p>

        <p>
          Before building the estimating frames, spend approximately 10 extra
          minutes reviewing and preparing the metal group.
        </p>

        <p>
          Copy the closest standard metal group, give the copy a project-specific
          name, and verify the components that affect the job.
        </p>
      </div>

      <div className="workflowBox goodWorkflow">
        <p className="sectionLabel">Option 2 Workflow</p>

        <div className="workflowStack">
          <div className="workflowItem">
            Find the closest standard metal group
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Make a project-specific copy
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Verify the important components
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Build estimating frames using that group
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem">
            Price the project
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem success">
            Win the bid
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem success">
            Field measure and update final frame sizes
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem success">
            Add final fabrication information
          </div>

          <div className="workflowArrow">↓</div>

          <div className="workflowItem success">
            Continue the same project into fabrication
          </div>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">The Payoff</p>

        <h3>
          Ten extra minutes now can save 30 minutes or more later.
        </h3>

        <p>
          On one project, that may not sound dramatic.
        </p>

        <p>
          Across dozens of awarded projects, the savings can quickly turn into
          hours of duplicated work that never needed to happen.
        </p>
      </div>

      <h3>The Estimator and Fabricator Should Be Working Together</h3>

      <div className="lessonText">
        <p>
          This becomes even more important when the person estimating the
          project is not the same person who eventually sends the work to
          RhinoFab.
        </p>

        <p>
          If the estimator and fabrication team use completely different metal
          groups and completely different project structures, the two
          departments are essentially working against each other.
        </p>

        <p>
          The estimator builds a project.
        </p>

        <p>
          Then the fabrication team rebuilds it.
        </p>
      </div>

      <div className="comparisonGrid">
        <section className="badCard">
          <p className="sectionLabel">Disconnected Workflow</p>

          <h3>Build it twice</h3>

          <p>
            The estimator uses a temporary standard metal group and creates the
            estimating frames.
          </p>

          <p>
            After award, fabrication creates a new group and repairs or rebuilds
            the project.
          </p>

          <div className="result bad">
            Duplicate work
          </div>
        </section>

        <section className="goodCard">
          <p className="sectionLabel">Shared Workflow</p>

          <h3>Build it once, refine it later</h3>

          <p>
            The estimator prepares the project-specific group and builds the
            frames from it.
          </p>

          <p>
            Fabrication continues from the same group and same frames after the
            project is awarded.
          </p>

          <div className="result good">
            Shared work
          </div>
        </section>
      </div>

      <div className="calloutBox">
        <strong>
          The estimating department should be handing production a head start,
          not another project to rebuild.
        </strong>
      </div>

      <h3>What Happens When the Job Reaches Fabrication?</h3>

      <div className="lessonText">
        <p>
          Winning the bid does not mean the metal group is completely finished.
        </p>

        <p>
          Estimating and fabrication still have different priorities.
        </p>

        <p>
          During estimating, we mainly care about making sure the correct
          components and material are represented.
        </p>

        <p>
          Once the project moves toward RhinoFab, the fabrication team may need
          to add or verify additional fabrication information.
        </p>
      </div>

      <div className="fabricationGrid">
        <div>
          <strong>Weep Holes</strong>

          <p>
            Add the final weep-hole rules required by the framing system.
          </p>
        </div>

        <div>
          <strong>Anchor Holes</strong>

          <p>
            Add the anchoring fabrications required for the project.
          </p>
        </div>

        <div>
          <strong>Missing Fabrications</strong>

          <p>
            Add any remaining project-specific fabrication requirements.
          </p>
        </div>

        <div>
          <strong>Final Sizes</strong>

          <p>
            Update dimensions using approved drawings and field measurements.
          </p>
        </div>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">The Difference</p>

        <h3>
          Fabrication should be adding details — not rebuilding the foundation.
        </h3>

        <p>
          If the estimator already created the correct project-specific metal
          group, the fabrication team can add weeps, anchors, and remaining
          fabrication rules to that same group.
        </p>

        <p>
          The existing frames can then continue toward Metal Fabrication instead
          of being recreated from scratch.
        </p>
      </div>

      <h3>Why We Copy the Standard Metal Group</h3>

      <div className="lessonText">
        <p>
          Another important part of this workflow is protecting the standard
          metal groups provided by DeMichele Group.
        </p>

        <p>
          We do not want to modify a standard group directly just because one
          project requires different components or fabrications.
        </p>

        <p>
          Those standard groups may be used by many other projects.
        </p>
      </div>

      <div className="warningBox">
        <p className="sectionLabel">Rule</p>

        <h3>
          Do not turn a standard metal group into a project-specific group.
        </h3>

        <p>
          Make a copy and modify the copy.
        </p>
      </div>

      <div className="lessonText">
        <p>
          This gives the project its own working metal group that can safely be
          changed as the job develops.
        </p>

        <p>
          The estimator can begin the setup.
        </p>

        <p>
          The fabrication team can finish it.
        </p>
      </div>

      <h3>You Are Allowed to Choose the Simpler Workflow</h3>

      <div className="lessonText">
        <p>
          I also want to be realistic about this.
        </p>

        <p>
          Some companies may decide that they do not care about carrying the
          estimating project into fabrication.
        </p>

        <p>
          Maybe the estimating and fabrication departments are completely
          separate. Maybe your company prefers rebuilding production projects
          after award. Maybe the time required to prepare metal groups during
          estimating does not fit your workflow.
        </p>

        <p>
          That is okay.
        </p>
      </div>

      <div className="optionBox">
        <p className="sectionLabel">You Have Two Valid Options</p>

        <div className="optionGrid">
          <section>
            <span>Option 1</span>

            <h3>Estimate Quickly and Rebuild Later</h3>

            <p>
              Use a reasonably close metal group, complete the estimate, and
              accept that production may need to rebuild or heavily modify the
              project after award.
            </p>
          </section>

          <section>
            <span>Option 2</span>

            <h3>Prepare the Project Up Front</h3>

            <p>
              Spend a few extra minutes creating the project-specific metal
              group so the estimating work can continue directly into
              fabrication.
            </p>
          </section>
        </div>
      </div>

      <div className="criticalBox">
        <p className="sectionLabel">My Recommendation</p>

        <h3>
          If estimating and fabrication can share the same project, build it so
          they can both use it.
        </h3>

        <p>
          That small amount of extra preparation during estimating can prevent a
          large amount of duplicated work later.
        </p>
      </div>

      <h3>If You Choose Option 1</h3>

      <div className="lessonText">
        <p>
          If your company is comfortable using temporary estimating metal groups
          and rebuilding the production project later, you can skip the next
          several sections that focus on creating project-specific groups.
        </p>

        <p>
          You can still use the rest of the Estimator Training to learn frame
          building, labor, reports, bid recap, proposals, and the other
          estimating tools.
        </p>
      </div>

      <div className="calloutBox">
        <strong>
          This course is showing you the workflow I recommend — not pretending
          there is only one way to estimate.
        </strong>
      </div>

      <h3>If You Choose Option 2</h3>

      <div className="lessonText">
        <p>
          Continue into the next section.
        </p>

        <p>
          Before we start modifying metal groups, we need to understand the
          vocabulary used throughout the Metal Groups screen.
        </p>

        <p>
          Once those terms make sense, building a project-specific group becomes
          much easier.
        </p>
      </div>

      <div className="takeawayBox">
        <p className="sectionLabel">Section 1 Checkpoint</p>

        <div className="takeawayGrid">
          <label>
            <input type="checkbox" /> I understand that I can estimate without
            creating a custom metal group.
          </label>

          <label>
            <input type="checkbox" /> I understand why changing metal groups
            after award can create extra work.
          </label>

          <label>
            <input type="checkbox" /> I understand why standard DeMichele Group
            metal groups should not be modified directly.
          </label>

          <label>
            <input type="checkbox" /> I understand how a shared metal group can
            connect estimating and fabrication.
          </label>

          <label>
            <input type="checkbox" /> I understand that fabrication can add
            weeps, anchors, and final fabrication information later.
          </label>

          <label>
            <input type="checkbox" /> I have decided whether my company wants to
            build once and refine later or estimate quickly and rebuild later.
          </label>
        </div>
      </div>

      <div className="finalTakeaway">
        <p className="sectionLabel">The Big Idea</p>

        <h3>
          Ten minutes now can prevent thirty minutes of rebuilding later.
        </h3>

        <p>
          The goal is not to make estimating slower.
        </p>

        <p>
          The goal is to make the estimating work valuable after the bid is won.
        </p>

        <p>
          If the estimator and fabrication team can continue working from the
          same metal group and the same frames, the entire project becomes more
          efficient.
        </p>
      </div>

      <div className="navButtons">
        <Link
          href="/dashboard/estimator-training"
          className="secondary"
        >
          ← Back to Estimator Training
        </Link>

        <Link
          href="/dashboard/estimator-training/lesson-2-metal-group-vocabulary"
          className="primary"
        >
          Next: Metal Group Vocabulary →
        </Link>
      </div>

      <style jsx>{`
        .workflowBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .workflowStack {
          max-width: 620px;
          margin: 22px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .workflowItem {
          width: 100%;
          padding: 15px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.84);
          font-weight: 800;
          text-align: center;
        }

        .workflowItem.success {
          border-color: rgba(34, 197, 94, 0.28);
          background: rgba(34, 197, 94, 0.08);
          color: #86efac;
        }

        .workflowItem.problem {
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.08);
          color: #fbbf24;
        }

        .workflowItem.danger {
          border-color: rgba(239, 68, 68, 0.32);
          background: rgba(239, 68, 68, 0.08);
          color: #fca5a5;
        }

        .workflowArrow {
          color: #f59e0b;
          font-size: 24px;
          font-weight: 900;
          line-height: 1.35;
        }

        .warningBox,
        .criticalBox {
          margin: 30px 0;
          padding: 26px;
          border-radius: 18px;
        }

        .warningBox {
          border: 1px solid rgba(245, 158, 11, 0.34);
          background: rgba(245, 158, 11, 0.08);
        }

        .criticalBox {
          border: 1px solid rgba(239, 68, 68, 0.32);
          background: rgba(239, 68, 68, 0.065);
        }

        .warningBox h3,
        .criticalBox h3 {
          margin: 4px 0 12px;
          color: #ffffff;
          font-size: 23px;
        }

        .warningBox p:not(.sectionLabel),
        .criticalBox p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.7;
        }

        .warningBox p:not(.sectionLabel) + p,
        .criticalBox p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .comparisonGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 28px 0 34px;
        }

        .comparisonGrid section {
          padding: 24px;
          border-radius: 18px;
        }

        .badCard {
          border: 1px solid rgba(239, 68, 68, 0.25);
          background: rgba(239, 68, 68, 0.05);
        }

        .goodCard {
          border: 1px solid rgba(34, 197, 94, 0.25);
          background: rgba(34, 197, 94, 0.05);
        }

        .comparisonGrid h3 {
          margin: 4px 0 12px;
          color: #ffffff;
        }

        .comparisonGrid p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }

        .comparisonGrid p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        .result {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 10px;
          font-weight: 900;
        }

        .result.bad {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.24);
        }

        .result.good {
          color: #86efac;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.24);
        }

        .fabricationGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin: 24px 0 34px;
        }

        .fabricationGrid > div {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.035);
        }

        .fabricationGrid strong {
          display: block;
          margin-bottom: 6px;
          color: #f59e0b;
        }

        .fabricationGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.67);
          line-height: 1.6;
        }

        .optionBox {
          margin: 30px 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }

        .optionGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 18px;
        }

        .optionGrid section {
          padding: 22px;
          border: 1px solid rgba(245, 158, 11, 0.18);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.035);
        }

        .optionGrid span {
          display: inline-block;
          margin-bottom: 8px;
          color: #f59e0b;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .optionGrid h3 {
          margin: 0 0 10px;
          color: #ffffff;
        }

        .optionGrid p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.65;
        }

        .finalTakeaway {
          margin: 34px 0;
          padding: 28px;
          border: 1px solid rgba(245, 158, 11, 0.4);
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            rgba(245, 158, 11, 0.12),
            rgba(255, 255, 255, 0.025)
          );
        }

        .finalTakeaway h3 {
          margin: 4px 0 14px;
          color: #ffffff;
          font-size: 27px;
        }

        .finalTakeaway p:not(.sectionLabel) {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.75;
        }

        .finalTakeaway p:not(.sectionLabel) + p {
          margin-top: 12px;
        }

        @media (max-width: 760px) {
          .comparisonGrid,
          .fabricationGrid,
          .optionGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AcademyLessonLayout>
  );
}