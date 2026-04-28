import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";

export default function CalibrateRobotPage() {
  return (
    <RequireActiveAccess>
      <TrainingLayout>
            <div className="pageHeader">
              <div className="breadcrumb">
                Rhino Training / Machine Setup / Calibrate
              </div>
              <h1 className="pageTitle">Calibrate Robot</h1>
              <p className="pageDescription">
                Use this page as a visual reference for robot drill calibration.
                This guide is designed to help users quickly understand the screen,
                follow the correct sequence, and troubleshoot alignment issues as
                they work down the page.
              </p>
            </div>

            <section className="heroSection">
              <div className="panel">
                <div className="panelHeader">
                  <h2 className="panelTitle">Main Calibration Screen</h2>
                  <p className="panelText">
                    Start by viewing the full robot calibration screen. This screen
                    can be understood in four main sections.
                  </p>
                </div>

                <TrainingImage
                 src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-01-main-screen.png"
                 alt="Calibrate Robot main screen"
                 tall
                  />

                <p className="helperText">
                  View this screen in four different sections. Each color zone
                  serves a different purpose during calibration.
                </p>
              </div>
            </section>

            <section className="colorSection">
              <div className="colorGrid">
                <div className="colorCard yellow">
                  <div className="colorLabel">Yellow</div>
                  <h3 className="colorTitle">Selection Area</h3>
                  <p className="colorText">
                    Use this area to choose what you want to calibrate. If you want
                    to calibrate the top drill, click the related preload option and
                    the calibration will begin from there. The gripper color section
                    will also be used later.
                  </p>
                </div>

                <div className="colorCard blue">
                  <div className="colorLabel">Blue</div>
                  <h3 className="colorTitle">Top / Back Adjustments</h3>
                  <p className="colorText">
                    This is the section you will use when working with the top and
                    back drills. The X, Y, and Z changes you make here are part of
                    the calibration process for those drill positions.
                  </p>
                </div>

                <div className="colorCard green">
                  <div className="colorLabel">Green</div>
                  <h3 className="colorTitle">Front / Bottom Adjustments</h3>
                  <p className="colorText">
                    This section is used when working with the front and bottom
                    drills. It is not always relevant, depending on which drill or
                    position is currently being calibrated.
                  </p>
                </div>

                <div className="colorCard red">
                  <div className="colorLabel">Red</div>
                  <h3 className="colorTitle">Visual Confirmation Only</h3>
                  <p className="colorText">
                    Completely ignore this section for calibration adjustments. It
                    does not help with calibration directly. Its main value is
                    confirming that the drill chucks are locked.
                  </p>
                </div>
              </div>
            </section>

            <section className="contextBanner">
              <p>
                In this example, this guide will walk through calibrating the{" "}
                <strong>back drill</strong>. The same general process applies to
                the other drills. The carousel calibrates a little differently and
                should be covered on its own page.
              </p>
            </section>

            <section className="stepSection">
              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">01</div>
                  <div>
                    <h2 className="stepTitle">Select the drill you want to calibrate</h2>
                    <p className="stepText">
                      Click the drill button you want to calibrate. In this example,
                      that would be <strong>Preload Back</strong>. The screen will
                      update so the selected drill is highlighted in yellow,
                      confirming that the correct drill was selected. If the wrong
                      drill is selected by mistake, cancel and choose the correct
                      one.
                    </p>
                  </div>
                </div>

                <div className="stepMedia split">
                  <div className="noteCard">
                    <h3 className="noteTitle">What changed here</h3>
                    <p className="noteText">
                      The green section disappears because it is not relevant in this
                      calibration. This guide is working with the top/back portion of
                      the screen, not the front/bottom area.
                    </p>
                  </div>

                  <div className="imageFrame">
                  <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-02-selection-area.png"
  alt="Selection area of calibration screen"
  tall
/>
                  </div>
                </div>
              </div>

              <div className="stepCard compact">
                <div className="stepHeader compactHeader">
                  <div className="stepNumber">02</div>
                  <div>
                    <h2 className="stepTitle">Confirm the selection</h2>
                    <p className="stepText">
                      Click the same preload option again to confirm that you really
                      want to calibrate that drill.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">03</div>
                  <div>
                    <h2 className="stepTitle">Unload all tools from the robot grippers</h2>
                    <p className="stepText">
                      After confirming, the software will prompt you to unload all
                      tools from the robot grippers. Both robot tool chucks must be
                      empty for calibration. E-stop the machine and remove any tools
                      currently held in the relevant grippers. If the grippers are
                      empty, press OK.
                    </p>
                  </div>
                </div>

                <div className="imageFrame">
             <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-03-unload-tools-from-grippers.png"
  alt="Unload tools from grippers"
/>
                </div>
              </div>

              <div className="stepCard compact">
                <div className="stepHeader compactHeader">
                  <div className="stepNumber">04</div>
                  <div>
                    <h2 className="stepTitle">Robot moves to pre-position</h2>
                    <p className="stepText">
                      The robot will move to a pre-position in front of the drill or
                      carousel pin selected for calibration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">05</div>
                  <div>
                    <h2 className="stepTitle">Check if the gripper is in position</h2>
                    <p className="stepText">
                      The robot will now hover in front of the tool chuck ready to
                      connect. If everything looks good and no adjustment is needed,
                      choose <strong>Yes</strong> and continue. If the robot does not
                      look correctly aligned, choose <strong>No</strong> so you can
                      jog the drill into position.
                    </p>
                  </div>
                </div>

                <div className="imageFrame">
                  <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-04-gripper-in-position.png"
  alt="Gripper positioned correctly"
/>
                </div>

                <div className="comparisonGrid">
                  <div className="comparisonCard">
                    <div className="imageFrame comparisonImage">
                       <TrainingImage
    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-05-incorrect.png"
    alt="Incorrect gripper position"
  />
                    </div>
                    <h3 className="comparisonTitle bad">Incorrect</h3>
                    <p className="comparisonText">Not centered on tool</p>
                  </div>

                  <div className="comparisonCard">
                    <div className="imageFrame comparisonImage">
                       <TrainingImage
    src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-06-correct.png"
    alt="Correct gripper position"
  />
                    </div>
                    <h3 className="comparisonTitle good">Correct</h3>
                    <p className="comparisonText">Centered on tool</p>
                  </div>
                </div>
              </div>

              <div className="calloutBlock warning">
                <div className="calloutLabel">If you say No</div>
                <p className="calloutText">
                  You will be taken back to the adjustment screen where you can move
                  the drill in any direction to match the robot.
                </p>
                <p className="calloutText strong">
                  You are moving the drill to match where the robot is. The robot
                  does not move during this adjustment step.
                </p>
                <p className="calloutText italic">
                  Think of the robot as stationary during this process. There is a way to move the robot positions, but that should be treated as a
                  last resort. I will explain why at the bottom of this page.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">06</div>
                  <div>
                    <h2 className="stepTitle">Adjust the drill position if needed</h2>
                    <p className="stepText">
                      If the drill is not lined up correctly, use the X, Y, and Z
                      controls to move the drill to match the robot. For example, if
                      the drill is too far left, use the Y direction controls to move
                      the drill to the right. All movement happens in 1/32&quot;
                      increments.
                    </p>
                  </div>
                </div>

                <div className="imageFrame">
                 <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-08-snip-of-numbers.png"
  alt="Robot calibration screen"
/>
                </div>

                <div className="noteCard wideNote">
                  <h3 className="noteTitle">Example</h3>
                  <p className="noteText">
                    If the image above shows the drill too far left of the
                    gripper, keep pressing the <strong>+</strong> on the correct axis
                    until the drill is aligned with the robot.
                  </p>
                </div>
              </div>

              <div className="stepCard compact">
                <div className="stepHeader compactHeader">
                  <div className="stepNumber">07</div>
                  <div>
                    <h2 className="stepTitle">Save your changes</h2>
                    <p className="stepText">
                      Once the adjustments are made, press the save button in the
                      bottom right area of the screen.
                    </p>
                  </div>
                </div>

                <div className="imageFrame slimImage">
                  <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-09-home-save.png"
  alt="Saving calibration and homing"
/>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">08</div>
                  <div>
                    <h2 className="stepTitle">Park the robot and repeat the check</h2>
                    <p className="stepText">
                      Even after changes are made, the robot is still hovering next
                      to the drill head. Park the robot first, then repeat the earlier
                      steps to verify whether the alignment is now correct. To park
                      the back drill, make sure the machine has a green light and use
                      the Park Back button.
                    </p>
                  </div>
                </div>

                <div className="imageFrame slimImage">
                 <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-10-preload-back.png"
  alt="Preloading tools back"
/>
                </div>

                <div className="calloutBlock success">
                  <div className="calloutLabel">Repeat loop</div>
                  <p className="calloutText strong">
                    Repeat steps 1–4 and adjust again if necessary. If it looks good,
                    press Yes and continue.
                  </p>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">09</div>
                  <div>
                    <h2 className="stepTitle">Tool removal confirmation</h2>
                    <p className="stepText">
                      After pressing Yes to the gripper-in-position prompt, the robot
                      will move and clamp the tool. You will then see a message asking
                      whether to pull the chuck out of the back spindle. If you choose
                      No, you can make more adjustments. If you choose Yes, the robot
                      removes the chuck and continues to the next step.
                    </p>
                  </div>
                </div>

                <div className="comparisonGrid">
                  <div className="comparisonCard">
                    <div className="imageFrame tallCompare">
                       <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-11-robot-gripped.png"
  alt="robot holding tool"
/>
                    </div>
                  </div>

                  <div className="comparisonCard">
                    <div className="imageFrame tallCompare">
                      <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-12-pull-chuck.png"
  alt="remove chuck"
/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">10</div>
                  <div>
                    <h2 className="stepTitle">Tool return confirmation</h2>
                    <p className="stepText">
                      Again, choose Yes or No. No allows additional changes. Yes puts
                      the tool back into the drill.
                    </p>
                    <p className="stepText italic">
                      This is often the point where alignment problems become most
                      obvious. Watch carefully for rubbing, bumping, or motion that
                      does not look natural as the tool reconnects with the drill.
                      If the robot arm bumps slightly to the left, the drill is still
                      too far left and should be adjusted again.
                    </p>
                  </div>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">11</div>
                  <div>
                    <h2 className="stepTitle">Finish this color and park the drill</h2>
                    <p className="stepText">
                      If everything looks smooth and correct, this color calibration
                      is complete. Remember that there are two grippers, one red and
                      one blue, and both must be calibrated. For now, park the top
                      drill and return the robot to its home position.
                    </p>
                  </div>
                </div>

                <div className="imageFrame slimImage">
                 <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-15-park-back.png"
  alt="park drill"
/>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">12</div>
                  <div>
                    <h2 className="stepTitle">Reload tools and repeat for the other gripper</h2>
                    <p className="stepText">
                      The software will prompt you to load tools back into the robot
                      grippers that were removed earlier. 
                      
                      If you are immediately
                      running the next calibration, acknowledge the message and
                      continue.
                    </p>
                  </div>
                </div>

                <div className="imageFrame">
                 <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-16-load-following-tools.png"
  alt="load following tools"
/>
                </div>
              </div>

              <div className="stepCard">
                <div className="stepHeader">
                  <div className="stepNumber">13</div>
                  <div>
                    <h2 className="stepTitle">Switch gripper color and repeat</h2>
                    <p className="stepText">
                      Change the tool color for the gripper and repeat the same
                      calibration again. This is done by toggling the checkbox in the
                      top right of the screen. You will also notice a checkbox for
                      crossed and uncrossed positions. That setting matters for the
                      carousel and can be covered separately.
                    </p>
                  </div>
                </div>

                <div className="stepMedia split">
                  <div className="imageFrame">
                    <TrainingImage
  src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-17-gripper-red-blue.png"
  alt="crossed vs uncrossed"
/>
                  </div>

                  <div className="calloutBlock info">
                    <div className="calloutLabel">Important expectation</div>
                    <p className="calloutText">
                      To complete a full calibration, each drill usually needs to be
                      tested in two positions, and the carousel may need to be tested
                      in four positions.
                    </p>
                    <p className="calloutText strong">
                      On average, a full calibration can take around two hours. Take
                      your time and aim for accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="instructionSection">
  <div className="panel">
    <div className="panelHeader">
      <h2 className="panelTitle">How Each Drill Can Be Loaded / Calibrated</h2>
      <p className="panelText">
        Use this reference to understand which gripper position applies to each drill or carousel location.
      </p>
    </div>

    <div className="drillGrid">
      <div className="drillCard">
        <h3>Top Drill</h3>
        <p>Blue Crossed</p>
        <p>Red Crossed</p>
      </div>

      <div className="drillCard">
        <h3>Carousel</h3>
        <p>Blue Crossed</p>
        <p>Red Crossed</p>
        <p>Blue Uncrossed</p>
        <p>Red Uncrossed</p>
      </div>

      <div className="drillCard">
        <h3>Back Drill</h3>
        <p>Blue Crossed</p>
        <p>Red Crossed</p>
      </div>

      <div className="drillCard">
        <h3>Bottom Drill</h3>
        <p>Blue Uncrossed</p>
        <p>Red Uncrossed</p>
      </div>

      <div className="drillCard">
        <h3>Front Drill</h3>
        <p>Blue Uncrossed</p>
        <p>Red Uncrossed</p>
      </div>
    </div>

    <div className="tipBox">
      <h3>Tip for Calibrating</h3>
      <p>
        Some machines may appear perfect when calibrating the red tool, but slightly off when
        calibrating the blue tool, or the opposite. When this happens, split the difference.
      </p>
      <p>
        For example, if the red tool loads perfectly but the blue tool rubs slightly on the
        right side as it loads, adjust the drill slightly to the right so the blue tool barely
        touches on the right side and the red tool barely touches on the left side as they load.
      </p>
    </div>
  </div>
</section>

            <section className="instructionSection">
  <div className="panel">
    <div className="panelHeader">
      <h2 className="panelTitle">Robot Load Tool</h2>
      <p className="panelText">
        This screen is helpful for testing tool changes at full speed and loading tools before calibration.
      </p>
    </div>

    <TrainingImage
      src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-18-robot-load-tool.png"
      alt="Robot load tool screen"
      tall
    />

    <p className="helperText">
      This screen can be found at the bottom of the Carousel Library screen. It is useful for quickly
      testing tool changes and seeing how the robot runs at full speed.
    </p>

    <p className="helperText">
      Click the dropdown and choose a tool currently located in the carousel. The robot will perform
      the tool change. You can repeat this as many times as needed.
    </p>

    <p className="helperText">
      This screen is also useful for loading tools before calibration. If you do not want to manually
      change out all the tools, use this screen and let the robot perform the tool changes.
    </p>
  </div>
</section>

            <section className="instructionSection">
  <div className="panel warningPanel">
    <div className="panelHeader">
      <h2 className="panelTitle">Moving the Robot Pickup Position</h2>
      <p className="panelText">
        This should be treated as a last resort when normal calibration cannot get the drill to the
        position it needs.
      </p>
    </div>

    <div className="warningBox">
      Only use Robot Offsets when the drill cannot move any farther in the needed direction and the
      only option is to slightly tweak the robot position itself.
    </div>

    <TrainingImage
      src="https://rhino-training-cdn.b-cdn.net/rhino-training/machine-setup/calibrate/calibrate-robot/images/calibrate-robot-19-robot-offset-numbers.png"
      alt="Robot offset numbers screen"
      tall
    />

    <p className="helperText">
      In the bottom right corner of the robot calibration screen, select <strong>Robot Offsets</strong>.
      This will open a passcode screen. Enter passcode <strong>111</strong>.
    </p>

    <p className="helperText">
      This screen allows you to tweak the robot positions. Do not adjust more than plus or minus
      <strong> 1/16&quot;</strong> of an inch. If you need to go farther than that, contact support
      because something is likely incorrect.
    </p>

    <p className="helperText">
      Type the amount you want to adjust the robot when gripping at each drill or carousel. You can
      use a negative number to move one direction and a positive number to move the other.
    </p>

    <p className="helperText">
      On right-to-left machines, a positive number should move the robot left and a negative number
      should move it right. On left-to-right machines, this logic is reversed.
    </p>

    <p className="helperText">
      This is commonly used when adjusting the Z dimension on the carousel. The carousel is the only
      axis that cannot move up/down or left/right, so robot offsets may be needed to dial it in.
    </p>
  </div>
</section>

            <section className="instructionSection">
  <div className="panel">
    <div className="panelHeader">
      <h2 className="panelTitle">Calibrating the Carousel</h2>
      <p className="panelText strongText">
        If it isn&apos;t broke, don&apos;t fix it.
      </p>
    </div>

    <p className="helperText">
      The carousel should not normally need to be recalibrated. Only recalibrate the carousel when
      the robot is gripping too far to the left or right of the chuck, meaning the rotation calibration
      is off.
    </p>

    <p className="helperText">
      If the robot is centered left and right but too high or too low, this can be fixed using the
      Robot Offset screen. If the robot is centered but too far away or too close, that can also be
      fixed with Robot Offsets.
    </p>

    <div className="stepList">
      <div className="stepCard">
        <div className="stepNumber">1</div>
        <p>Navigate to the robot calibration screen.</p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">2</div>
        <p>In the bottom right corner, click the <strong>Home Carousel</strong> button.</p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">3</div>
        <p>
          The screen will prompt you to remove pin 5 from the carousel and place it in the homing
          position.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">4</div>
        <p>
          Click OK when the screen says it is moving to position 5. When prompted, take the tool off
          pin 5 and set it aside. Use a 5mm Allen wrench to remove the screw and pin from the top of
          position 5.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">5</div>
        <p>
          Place the pin and screw into the homing position, which is located on the bottom side of
          the plate just behind pin 5.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">6</div>
        <p>
          Press OK. The carousel will slowly rotate until the homing pin bumps into the stopping
          block. It will then rotate back to the middle and prompt you to replace pin 5 and any tool
          that was on it.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">7</div>
        <p>
          Try to preload the carousel again. If the robot is still not picking it up smoothly, all
          remaining adjustments should be made using the Robot Offset screen.
        </p>
      </div>
    </div>
  </div>
</section>

        <style jsx>{`
        .pageHeader { margin-bottom: 28px; }
        .breadcrumb { color: rgba(255,255,255,0.52); font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
        .pageTitle { margin: 0 0 12px; color: #fff; font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1; font-weight: 900; letter-spacing: -0.03em; }
        .pageDescription { margin: 0; max-width: 860px; color: rgba(255,255,255,0.82); font-size: 1.02rem; line-height: 1.75; }
        .quickStart { margin-top: 22px; padding: 20px 22px; border-radius: 18px; background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.28); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 28px rgba(0,0,0,0.18); }
        .quickStart h3 { margin: 0 0 12px; color: #60a5fa; font-size: 1rem; font-weight: 800; }
        .quickStart ul { margin: 0; padding-left: 20px; }
        .quickStart li { margin: 8px 0; color: rgba(255,255,255,0.94); line-height: 1.45; }
        .heroSection, .stepSection { display: flex; flex-direction: column; gap: 24px; }
        .heroSection, .colorSection, .contextBanner, .stepSection, .instructionSection { width: 100%; max-width: 1180px; margin-left: auto; margin-right: auto; }
        .colorSection, .instructionSection { margin-top: 24px; margin-bottom: 24px; }
        .instructionSection { padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.08); scroll-margin-top: 110px; }
        .panel, .stepCard, .contextBanner, .calloutBlock { border: 1px solid rgba(255,255,255,0.1); background: linear-gradient(180deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.022) 100%); border-radius: 24px; box-shadow: 0 18px 46px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.04); }
        .panel { padding: 28px; }
        .panelHeader { margin-bottom: 18px; width: 100%; }
        .panelTitle { margin: 0 0 10px; color: #fff; font-size: 1.5rem; font-weight: 850; letter-spacing: -0.02em; }
        .panelText, .helperText { margin: 0; color: rgba(255,255,255,0.88); line-height: 1.75; }
        .helperText { margin-top: 16px; max-width: 920px; }
        .imageFrame { border-radius: 18px; overflow: hidden; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 18px 36px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.06); }
        .colorGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .colorCard { border-radius: 20px; padding: 22px; border: 1px solid rgba(255,255,255,0.08); background: linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.018) 100%); box-shadow: 0 14px 34px rgba(0,0,0,0.22); }
        .yellow { border-top: 4px solid #f1c94d; } .blue { border-top: 4px solid #3b82f6; } .green { border-top: 4px solid #22c55e; } .red { border-top: 4px solid #ef4444; }
        .colorLabel { color: rgba(255,255,255,0.62); font-size: 0.76rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
        .colorTitle { margin: 0 0 12px; color: #fff; font-size: 1.08rem; font-weight: 800; }
        .colorText { margin: 0; color: rgba(255,255,255,0.82); line-height: 1.7; }
        .contextBanner { padding: 24px 28px; margin-bottom: 24px; }
        .contextBanner p { margin: 0; color: #fff; font-size: 1.1rem; line-height: 1.8; text-align: center; }
        .stepCard { padding: 28px; transition: transform 160ms ease, border-color 160ms ease, background 160ms ease; }
        .stepCard:hover { transform: translateY(-2px); background: rgba(255,255,255,0.055); border-color: rgba(255,255,255,0.18); }
        .compact { padding-top: 22px; padding-bottom: 22px; }
        .stepHeader { display: grid; grid-template-columns: 92px 1fr; gap: 20px; align-items: start; margin-bottom: 22px; }
        .compactHeader { margin-bottom: 0; }
        .stepNumber { width: 72px; height: 72px; border-radius: 20px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); color: #fff; font-size: 1.25rem; font-weight: 900; letter-spacing: 0.06em; box-shadow: inset 0 1px 0 rgba(255,255,255,0.16), 0 10px 22px rgba(0,0,0,0.22); }
        .stepTitle { margin: 0 0 10px; color: #fff; font-size: 1.5rem; font-weight: 850; }
        .stepText { margin: 0 0 12px; color: rgba(255,255,255,0.88); line-height: 1.82; font-size: 1rem; }
        .italic { font-style: italic; }
        .stepMedia.split { display: grid; grid-template-columns: 0.42fr 0.58fr; gap: 22px; align-items: start; }
        .noteCard { border-radius: 18px; padding: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }
        .wideNote { margin-top: 18px; }
        .noteTitle { margin: 0 0 10px; color: #fff; font-size: 1rem; font-weight: 800; }
        .noteText { margin: 0; color: rgba(255,255,255,0.82); line-height: 1.75; }
        .comparisonGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; margin-top: 22px; }
        .comparisonCard { display: flex; flex-direction: column; gap: 14px; }
        .comparisonTitle { margin: 0; color: #fff; font-size: 1.5rem; font-weight: 900; text-align: center; }
        .comparisonText { margin: 0; color: rgba(255,255,255,0.82); text-align: center; font-size: 1rem; }
        .calloutBlock { padding: 24px 28px; }
        .calloutLabel { color: #fff; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
        .calloutText { margin: 0 0 10px; color: rgba(255,255,255,0.86); line-height: 1.8; font-size: 1rem; }
        .calloutText:last-child { margin-bottom: 0; }
        .calloutText.strong { color: #fff; font-weight: 800; }
        .calloutText.italic { font-style: italic; }
        .warning { border-left: 4px solid #f59e0b; } .success { border-left: 4px solid #22c55e; } .info { border-left: 4px solid #3b82f6; }
        .drillGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 22px; }
        .drillCard { border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.06); border-radius: 18px; padding: 18px; transition: transform 160ms ease, border-color 160ms ease, background 160ms ease; }
        .drillCard:hover { transform: translateY(-2px); background: rgba(255,255,255,0.075); border-color: rgba(255,255,255,0.22); }
        .drillCard h3 { margin: 0 0 12px; color: #fff; font-size: 18px; font-weight: 800; }
        .drillCard p { margin: 6px 0; color: rgba(255,255,255,0.86); font-size: 15px; line-height: 1.5; }
        .tipBox { margin-top: 22px; padding: 20px; border-radius: 18px; background: rgba(245,158,11,0.11); border: 1px solid rgba(245,158,11,0.28); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 28px rgba(0,0,0,0.18); }
        .tipBox h3 { margin: 0 0 10px; color: #fbbf24; }
        .tipBox p { color: rgba(255,255,255,0.9); line-height: 1.7; }
        .warningPanel { border-color: rgba(245,158,11,0.26); }
        .warningBox { margin: 18px 0; padding: 16px 18px; border-radius: 16px; background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.32); color: #fef3c7; line-height: 1.6; }
        .strongText { color: #fbbf24; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; }
        .stepList { display: grid; gap: 14px; margin-top: 22px; }
        .stepList .stepCard { display: grid; grid-template-columns: 56px 1fr; gap: 18px; align-items: start; padding: 20px; border-radius: 20px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); backdrop-filter: blur(6px); }
        .stepList .stepNumber { width: 46px; height: 46px; border-radius: 14px; font-size: 18px; }
        .stepList .stepCard p { margin: 0; color: rgba(255,255,255,0.9); font-size: 15px; line-height: 1.7; }
        .completionBox { margin-top: 30px; padding: 22px; border-radius: 18px; background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.35); box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 28px rgba(0,0,0,0.18); }
        .completionBox, .completionBox * { color: #fff !important; }
        .completionBox h3 { margin: 0 0 8px; font-size: 20px; font-weight: 900; }
        .completionBox p { margin: 0; font-size: 16px; line-height: 1.7; }
        @media (max-width: 1200px) { .colorGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .stepMedia.split { grid-template-columns: 1fr; } }
        @media (max-width: 900px) { .stepHeader { grid-template-columns: 1fr; } .stepNumber { width: 58px; height: 58px; border-radius: 16px; } }
        @media (max-width: 800px) { .drillGrid { grid-template-columns: 1fr; } }
        @media (max-width: 700px) { .colorGrid, .comparisonGrid { grid-template-columns: 1fr; } .panel, .stepCard, .contextBanner, .calloutBlock { padding-left: 18px; padding-right: 18px; } .pageTitle { font-size: 2.2rem; } .stepTitle { font-size: 1.5rem; } }
@media (max-width: 800px) {
  .twoColumn,
  .placeholderGrid,
  .comparisonGrid,
  .drillGrid {
    grid-template-columns: 1fr !important;
  }

  .heroPanel,
  .panel {
    padding: 20px;
    border-radius: 20px;
  }

  .heroPanel h1 {
    font-size: 32px;
  }

  .panelHeader h2,
  .panelTitle {
    font-size: 24px;
  }

  .stepCard {
    grid-template-columns: 1fr !important;
  }
}
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}
