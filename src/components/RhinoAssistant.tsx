import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

export default function RhinoAssistant() {
  const [open, setOpen] = useState(false);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const nextId = useRef(1);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /*
  --------------------------------------------------
  OPEN CHAT
  --------------------------------------------------

  Every time the assistant is opened,
  disclaimer acceptance resets.

  This means the user must acknowledge
  the disclaimer every single session.
  --------------------------------------------------
  */

  function handleOpen() {
    setAcceptedDisclaimer(false);
    setMessages([]);
    setInput("");
    setOpen(true);
  }

  /*
  --------------------------------------------------
  CLOSE CHAT
  --------------------------------------------------
  */

  function handleClose() {
    setOpen(false);
    setAcceptedDisclaimer(false);
    setMessages([]);
    setInput("");
  }

  /*
  --------------------------------------------------
  ACCEPT DISCLAIMER
  --------------------------------------------------
  */

  function handleAcceptDisclaimer() {
    setAcceptedDisclaimer(true);

    setMessages([
      {
        id: nextId.current++,
        role: "assistant",
        text:
          "Hi! I’m the Rhino Wrangler Assistant. I’m designed to help guide you toward relevant Rhino Wrangler training material. I will avoid guessing when I’m not confident in an answer.",
      },
    ]);
  }

  /*
  --------------------------------------------------
  TEMPORARY MESSAGE HANDLER

  IMPORTANT:
  We are intentionally NOT generating technical
  answers yet.

  The knowledge search system will be connected
  in the next phase.

  Until then, this assistant refuses to make
  technical recommendations.
  --------------------------------------------------
  */

  function handleSend() {
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: Message = {
      id: nextId.current++,
      role: "user",
      text: trimmed,
    };

    const assistantMessage: Message = {
      id: nextId.current++,
      role: "assistant",
      text:
        "The Rhino Wrangler knowledge assistant is still being connected to the training library. I’m not going to guess at a technical answer. Once the knowledge system is enabled, I’ll search approved Rhino Wrangler material and either provide a sourced answer or point you toward the most relevant training pages.",
    };

    setMessages((current) => [
      ...current,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  }

  /*
  --------------------------------------------------
  ENTER TO SEND
  --------------------------------------------------
  */

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      handleSend();
    }
  }

  /*
  --------------------------------------------------
  AUTO SCROLL
  --------------------------------------------------
  */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <>
      {/* FLOATING CHAT BUTTON */}

      {!open && (
        <button
          type="button"
          className="assistantLauncher"
          onClick={handleOpen}
          aria-label="Ask The Rhino Wrangler"
        >
          <span className="launcherIcon">
            ?
          </span>

          <span className="launcherText">
            Ask The Rhino Wrangler
          </span>
        </button>
      )}

      {/* CHAT PANEL */}

      {open && (
        <div className="assistantPanel">
          <div className="assistantHeader">
            <div>
              <div className="assistantTitle">
                Rhino Wrangler Assistant
              </div>

              <div className="assistantSubtitle">
                Training & Troubleshooting Guide
              </div>
            </div>

            <button
              type="button"
              className="closeButton"
              onClick={handleClose}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          {!acceptedDisclaimer ? (
            /*
            --------------------------------------------------
            DISCLAIMER SCREEN
            --------------------------------------------------
            */

            <div className="disclaimerWrap">
              <div className="warningBadge">
                IMPORTANT
              </div>

              <h2>
                Rhino Wrangler Assistant Disclaimer
              </h2>

              <p>
                The Rhino Wrangler Assistant is designed to
                help guide you toward relevant training
                material, troubleshooting information, and
                possible areas to investigate.
              </p>

              <p>
                <strong>
                  The assistant can be wrong.
                </strong>{" "}
                Information provided by the assistant may be
                incomplete, incorrect, misunderstood, or
                outdated.
              </p>

              <p>
                Do not rely on the assistant as the sole
                source for machine adjustments, calibration
                changes, fabrication settings, software
                changes, or other actions that could damage
                equipment, tooling, glass, aluminum, or other
                material.
              </p>

              <p>
                Always verify technical recommendations
                against the linked Rhino Wrangler training
                material, applicable machine or software
                documentation, your own measurements, and
                established procedures before making changes.
              </p>

              <div className="importantBox">
                <strong>
                  How this assistant is intended to work
                </strong>

                <span>
                  The assistant is here to help you find and
                  understand information — not to replace
                  your judgment or blindly tell you what to
                  change.
                </span>

                <span>
                  If the assistant does not have enough
                  reliable information, it should say that it
                  is unsure and direct you to related training
                  pages instead of guessing.
                </span>
              </div>

              <label className="agreementRow">
                <input
                  type="checkbox"
                  id="assistantAgreement"
                />

                <span>
                  I understand that the Rhino Wrangler
                  Assistant can provide incorrect information
                  and that I am responsible for verifying
                  information before making technical changes.
                </span>
              </label>

              <button
                type="button"
                className="agreeButton"
                onClick={() => {
                  const checkbox =
                    document.getElementById(
                      "assistantAgreement"
                    ) as HTMLInputElement | null;

                  if (!checkbox?.checked) {
                    alert(
                      "Please acknowledge the disclaimer before using the Rhino Wrangler Assistant."
                    );

                    return;
                  }

                  handleAcceptDisclaimer();
                }}
              >
                I Understand — Open Assistant
              </button>
            </div>
          ) : (
            /*
            --------------------------------------------------
            CHAT SCREEN
            --------------------------------------------------
            */

            <div className="chatLayout">
              <div className="safetyNotice">
                <strong>
                  Verify before making changes.
                </strong>

                <span>
                  Technical answers should include Rhino
                  Wrangler source material. If the assistant
                  is unsure, it should say so instead of
                  guessing.
                </span>
              </div>

              <div className="messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`messageRow ${
                      message.role === "user"
                        ? "userRow"
                        : "assistantRow"
                    }`}
                  >
                    <div
                      className={`messageBubble ${
                        message.role === "user"
                          ? "userBubble"
                          : "assistantBubble"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              <div className="composer">
                <textarea
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a RhinoFab, Glazier Studio, PartnerPak, or training question..."
                  rows={3}
                />

                <button
                  type="button"
                  className="sendButton"
                  onClick={handleSend}
                  disabled={!input.trim()}
                >
                  Send
                </button>
              </div>

              <div className="composerNote">
                Enter sends • Shift + Enter adds a new line
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .assistantLauncher {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 5000;

          display: flex;
          align-items: center;
          gap: 10px;

          border: none;
          border-radius: 999px;

          padding: 12px 18px 12px 12px;

          background: #111827;
          color: #ffffff;

          box-shadow:
            0 18px 40px
            rgba(0, 0, 0, 0.28);

          cursor: pointer;

          font-weight: 900;
          font-size: 0.95rem;
        }

        .assistantLauncher:hover {
          transform: translateY(-2px);
        }

        .launcherIcon {
          width: 34px;
          height: 34px;

          border-radius: 999px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #f59e0b;
          color: #111827;

          font-weight: 950;
          font-size: 1.15rem;
        }

        .launcherText {
          white-space: nowrap;
        }

        .assistantPanel {
          position: fixed;

          right: 24px;
          bottom: 24px;

          z-index: 5000;

          width: min(
            460px,
            calc(100vw - 32px)
          );

          height: min(
            720px,
            calc(100vh - 48px)
          );

          display: flex;
          flex-direction: column;

          background: #ffffff;

          border:
            1px solid
            rgba(17, 24, 39, 0.12);

          border-radius: 22px;

          box-shadow:
            0 28px 70px
            rgba(0, 0, 0, 0.3);

          overflow: hidden;
        }

        .assistantHeader {
          min-height: 74px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 16px;

          padding: 16px 18px;

          background: #111827;
          color: #ffffff;
        }

        .assistantTitle {
          font-size: 1.05rem;
          font-weight: 950;
        }

        .assistantSubtitle {
          margin-top: 3px;

          color:
            rgba(255, 255, 255, 0.65);

          font-size: 0.76rem;

          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .closeButton {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          border-radius: 10px;

          background:
            rgba(255, 255, 255, 0.08);

          color: #ffffff;

          cursor: pointer;

          font-size: 1.6rem;
          line-height: 1;
        }

        .disclaimerWrap {
          overflow-y: auto;

          padding: 24px;

          color: #374151;

          line-height: 1.6;
        }

        .warningBadge {
          display: inline-flex;

          padding: 6px 10px;

          border-radius: 999px;

          background:
            rgba(220, 38, 38, 0.1);

          color: #991b1b;

          font-size: 0.72rem;
          font-weight: 950;

          letter-spacing: 0.08em;
        }

        h2 {
          margin:
            14px 0
            18px;

          color: #111827;

          font-size: 1.6rem;

          line-height: 1.15;
        }

        p {
          margin:
            0 0
            16px;
        }

        .importantBox {
          margin:
            20px 0;

          display: grid;

          gap: 10px;

          padding: 16px;

          border-radius: 16px;

          background: #111827;

          color:
            rgba(255, 255, 255, 0.8);
        }

        .importantBox strong {
          color: #ffffff;
        }

        .agreementRow {
          display: flex;
          align-items: flex-start;

          gap: 12px;

          padding: 14px;

          border-radius: 14px;

          background: #f3f4f6;

          color: #374151;

          cursor: pointer;

          font-size: 0.9rem;
        }

        .agreementRow input {
          margin-top: 4px;

          width: 18px;
          height: 18px;

          flex: 0 0 auto;
        }

        .agreeButton {
          width: 100%;

          margin-top: 18px;

          border: none;
          border-radius: 14px;

          padding: 14px 18px;

          background: #f59e0b;
          color: #111827;

          font-size: 0.95rem;
          font-weight: 950;

          cursor: pointer;
        }

        .chatLayout {
          min-height: 0;

          display: flex;
          flex: 1;

          flex-direction: column;
        }

        .safetyNotice {
          display: grid;

          gap: 4px;

          padding: 12px 16px;

          background: #fff7ed;

          border-bottom:
            1px solid
            #fed7aa;

          color: #9a3412;

          font-size: 0.78rem;

          line-height: 1.45;
        }

        .messages {
          min-height: 0;

          flex: 1;

          overflow-y: auto;

          padding: 18px;

          background: #f7f8fa;
        }

        .messageRow {
          display: flex;

          margin-bottom: 12px;
        }

        .userRow {
          justify-content: flex-end;
        }

        .assistantRow {
          justify-content: flex-start;
        }

        .messageBubble {
          max-width: 84%;

          padding: 12px 14px;

          border-radius: 16px;

          line-height: 1.5;

          font-size: 0.93rem;

          white-space: pre-wrap;
        }

        .assistantBubble {
          background: #ffffff;

          border:
            1px solid
            rgba(17, 24, 39, 0.08);

          color: #374151;
        }

        .userBubble {
          background: #111827;
          color: #ffffff;
        }

        .composer {
          display: flex;

          align-items: flex-end;

          gap: 10px;

          padding:
            14px 14px
            8px;

          background: #ffffff;

          border-top:
            1px solid
            #e5e7eb;
        }

        textarea {
          min-height: 54px;

          flex: 1;

          resize: none;

          border:
            1px solid
            #d1d5db;

          border-radius: 12px;

          padding: 12px;

          color: #111827;

          background: #ffffff;

          font: inherit;

          outline: none;
        }

        textarea:focus {
          border-color: #f59e0b;
        }

        .sendButton {
          border: none;

          border-radius: 12px;

          padding: 13px 18px;

          background: #f59e0b;
          color: #111827;

          font-weight: 950;

          cursor: pointer;
        }

        .sendButton:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .composerNote {
          padding:
            0 14px
            10px;

          background: #ffffff;

          color: #9ca3af;

          font-size: 0.7rem;
        }

        @media (
          max-width: 600px
        ) {
          .assistantLauncher {
            right: 14px;
            bottom: 14px;
          }

          .launcherText {
            display: none;
          }

          .assistantPanel {
            right: 8px;
            bottom: 8px;

            width:
              calc(
                100vw - 16px
              );

            height:
              calc(
                100vh - 16px
              );

            border-radius: 18px;
          }
        }
      `}</style>
    </>
  );
}