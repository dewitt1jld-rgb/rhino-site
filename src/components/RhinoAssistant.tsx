import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  createClient,
} from "@/lib/supabase";

const supabase =
  createClient();

type Machine = {
  companyMachineId: string;
  machineModelId: string;
  modelCode: string;
  baseModel: string | null;
  feedDirection:
    | "left"
    | "right"
    | null;
  displayName: string;
  nickname: string | null;
  serialNumber: string | null;
  isPrimary: boolean;
};

type SearchResult = {
  id: string;
  title: string;
  sectionTitle: string;
  category: string;
  subcategory: string | null;
  machineModels: string[];
  content: string;
  warnings: string | null;
  sourceUrl: string;
  riskLevel:
    | "normal"
    | "caution"
    | "high";
  score: number;
};

type SearchResponse = {
  success: boolean;

  question: string;

  machineContext?: {
    modelCode: string | null;
    baseModel: string | null;
    feedDirection: string | null;
  };

  matchType:
    | "direct"
    | "possible_terminology"
    | "ambiguous"
    | "none";

  confidence:
    | "high"
    | "medium"
    | "low"
    | "none";

  recommendedBehavior:
    | "answer_with_sources"
    | "confirm_terminology"
    | "ask_clarifying_question"
    | "show_related_pages_only"
    | "no_answer";

  terminologySuggestion?: {
    officialTerm: string;
    description: string | null;
    category: string | null;
    score: number;
  } | null;

  resultCount: number;

  results: SearchResult[];
};

type MessageSource = {
  title: string;
  sectionTitle: string;
  sourceUrl: string;
};

type Message = {
  id: number;

  role:
    | "user"
    | "assistant";

  text: string;

  warning?: string | null;

  sources?: MessageSource[];
};

type PendingTerminology = {
  originalQuestion: string;

  officialTerm: string;

  description: string | null;

  results: SearchResult[];
};

export default function RhinoAssistant() {
  const [
    open,
    setOpen,
  ] =
    useState(false);

  const [
    acceptedDisclaimer,
    setAcceptedDisclaimer,
  ] =
    useState(false);

  const [
    input,
    setInput,
  ] =
    useState("");

  const [
    messages,
    setMessages,
  ] =
    useState<Message[]>(
      []
    );

  const [
    machines,
    setMachines,
  ] =
    useState<Machine[]>(
      []
    );

  const [
    selectedMachine,
    setSelectedMachine,
  ] =
    useState<Machine | null>(
      null
    );

  const [
    loadingContext,
    setLoadingContext,
  ] =
    useState(false);

  const [
    sending,
    setSending,
  ] =
    useState(false);

  const [
    hasPlatformAccess,
    setHasPlatformAccess,
  ] =
    useState(false);

  const [
    pendingTerminology,
    setPendingTerminology,
  ] =
    useState<PendingTerminology | null>(
      null
    );

  const nextId =
    useRef(1);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  /*
  --------------------------------------------------
  ADD ASSISTANT MESSAGE
  --------------------------------------------------
  */

  function addAssistantMessage(
    text: string,
    options?: {
      warning?: string | null;

      sources?: MessageSource[];
    }
  ) {
    setMessages(
      (
        current
      ) => [
        ...current,

        {
          id:
            nextId.current++,

          role:
            "assistant",

          text,

          warning:
            options?.warning ??
            null,

          sources:
            options?.sources ??
            [],
        },
      ]
    );
  }

  /*
  --------------------------------------------------
  OPEN CHAT
  --------------------------------------------------

  Disclaimer acceptance resets every time.
  --------------------------------------------------
  */

  function handleOpen() {
    setAcceptedDisclaimer(
      false
    );

    setMessages(
      []
    );

    setInput(
      ""
    );

    setMachines(
      []
    );

    setSelectedMachine(
      null
    );

    setHasPlatformAccess(
      false
    );

    setPendingTerminology(
      null
    );

    setOpen(
      true
    );
  }

  /*
  --------------------------------------------------
  CLOSE CHAT
  --------------------------------------------------
  */

  function handleClose() {
    setOpen(
      false
    );

    setAcceptedDisclaimer(
      false
    );

    setMessages(
      []
    );

    setInput(
      ""
    );

    setMachines(
      []
    );

    setSelectedMachine(
      null
    );

    setPendingTerminology(
      null
    );
  }

  /*
  --------------------------------------------------
  LOAD COMPANY + MACHINE CONTEXT
  --------------------------------------------------
  */

  async function loadCompanyContext() {
    setLoadingContext(
      true
    );

    try {
      const {
        data: {
          session,
        },
      } =
        await supabase.auth.getSession();

      if (!session) {
        setHasPlatformAccess(
          false
        );

        addAssistantMessage(
          "Please log in before using the Rhino Wrangler Assistant."
        );

        return;
      }

      const response =
        await fetch(
          "/api/check-access",
          {
            headers: {
              Authorization:
                `Bearer ${session.access_token}`,
            },
          }
        );

      const data =
        await response.json();

      if (
        !response.ok
      ) {
        setHasPlatformAccess(
          false
        );

        addAssistantMessage(
          "I was unable to verify your Rhino Wrangler account. Please refresh the page or contact support."
        );

        return;
      }

      /*
      --------------------------------------------------
      PLATFORM ACCESS REQUIRED
      --------------------------------------------------
      */

      if (
        data?.hasAccess !==
        true
      ) {
        setHasPlatformAccess(
          false
        );

        addAssistantMessage(
          "The Rhino Wrangler Assistant is available with training-platform access. Your current account does not have active platform access."
        );

        return;
      }

      setHasPlatformAccess(
        true
      );

      const companyMachines =
        Array.isArray(
          data?.company
            ?.machines
        )
          ? data.company
              .machines
          : [];

      setMachines(
        companyMachines
      );

      /*
      --------------------------------------------------
      NO MACHINE SAVED
      --------------------------------------------------

      We will add the save-machine workflow next.

      For now, do not allow technical answers without
      machine context.
      --------------------------------------------------
      */

      if (
        companyMachines.length ===
        0
      ) {
        setSelectedMachine(
          null
        );

        addAssistantMessage(
          "Your company does not have a RhinoFab machine saved yet. Machine model and feed direction can change the correct troubleshooting procedure, so I don't want to guess. We need to add your machine before I provide technical guidance."
        );

        return;
      }

      /*
      --------------------------------------------------
      ONE MACHINE
      --------------------------------------------------
      */

      if (
        companyMachines.length ===
        1
      ) {
        const machine =
          companyMachines[0];

        setSelectedMachine(
          machine
        );

        addAssistantMessage(
          `Hi! I’m the Rhino Wrangler Assistant. I’m currently using ${machine.displayName} as your machine context. I’ll search approved Rhino Wrangler training material and avoid guessing when I’m not confident in an answer.`
        );

        return;
      }

      /*
      --------------------------------------------------
      MULTIPLE MACHINES
      --------------------------------------------------
      */

      const primaryMachine =
        companyMachines.find(
          (
            machine: Machine
          ) =>
            machine.isPrimary ===
            true
        );

      if (
        primaryMachine
      ) {
        setSelectedMachine(
          null
        );
      }

      addAssistantMessage(
        "Your company has more than one RhinoFab machine. Select the machine you're working on before asking a technical question."
      );
    } catch (
      error
    ) {
      console.error(
        "Unable to load Rhino Assistant company context:",
        error
      );

      addAssistantMessage(
        "I couldn't load your company or machine information. Please refresh the page and try again."
      );
    } finally {
      setLoadingContext(
        false
      );
    }
  }

  /*
  --------------------------------------------------
  ACCEPT DISCLAIMER
  --------------------------------------------------
  */

  async function handleAcceptDisclaimer() {
    setAcceptedDisclaimer(
      true
    );

    setMessages(
      []
    );

    await loadCompanyContext();
  }

  /*
  --------------------------------------------------
  MACHINE SELECTION
  --------------------------------------------------
  */

  function handleMachineSelection(
    machine: Machine
  ) {
    setSelectedMachine(
      machine
    );

    setPendingTerminology(
      null
    );

    addAssistantMessage(
      `Got it. I’ll use ${machine.displayName} for this conversation.`
    );
  }

  /*
  --------------------------------------------------
  CREATE UNIQUE SOURCE LIST
  --------------------------------------------------
  */

  function createSources(
    results: SearchResult[]
  ) {
    const seen =
      new Set<string>();

    const sources:
      MessageSource[] =
      [];

    for (
      const result
      of results
    ) {
      const key =
        `${result.sourceUrl}|${result.sectionTitle}`;

      if (
        seen.has(
          key
        )
      ) {
        continue;
      }

      seen.add(
        key
      );

      sources.push({
        title:
          result.title,

        sectionTitle:
          result.sectionTitle,

        sourceUrl:
          result.sourceUrl,
      });

      if (
        sources.length >=
        3
      ) {
        break;
      }
    }

    return sources;
  }

  /*
  --------------------------------------------------
  HANDLE SEARCH RESULT
  --------------------------------------------------

  IMPORTANT:

  This version does NOT use an LLM.

  It only presents approved Rhino Wrangler
  knowledge returned by our retrieval system.
  --------------------------------------------------
  */

  function handleSearchResponse(
    data: SearchResponse
  ) {
    const topResult =
      data.results?.[0];

    /*
    --------------------------------------------------
    DIRECT MATCH
    --------------------------------------------------
    */

    if (
      data.recommendedBehavior ===
        "answer_with_sources" &&
      topResult
    ) {
      addAssistantMessage(
        topResult.content,
        {
          warning:
            topResult.warnings,

          sources:
            createSources(
              data.results
            ),
        }
      );

      return;
    }

    /*
    --------------------------------------------------
    POSSIBLE TERMINOLOGY MATCH
    --------------------------------------------------
    */

    if (
      data.recommendedBehavior ===
        "confirm_terminology" &&
      data.terminologySuggestion
    ) {
      const suggestion =
        data.terminologySuggestion;

      setPendingTerminology({
        originalQuestion:
          data.question,

        officialTerm:
          suggestion.officialTerm,

        description:
          suggestion.description,

        results:
          data.results,
      });

      let message =
        `I couldn't confidently match the terminology in your question to a documented Rhino Wrangler procedure.\n\nI did find information about "${suggestion.officialTerm}".`;

      if (
        suggestion.description
      ) {
        message +=
          `\n\n${suggestion.description}`;
      }

      message +=
        "\n\nIs that what you're referring to?";

      addAssistantMessage(
        message
      );

      return;
    }

    /*
    --------------------------------------------------
    AMBIGUOUS / CLARIFY
    --------------------------------------------------
    */

    if (
      data.recommendedBehavior ===
        "ask_clarifying_question"
    ) {
      let message =
        "I found related Rhino Wrangler information, but I'm not confident enough to give you a technical procedure yet.";

      if (
        data.results.length >
        0
      ) {
        const topics =
          data.results
            .slice(
              0,
              3
            )
            .map(
              (
                result
              ) =>
                `• ${result.sectionTitle}`
            )
            .join(
              "\n"
            );

        message +=
          `\n\nThe closest topics I found are:\n${topics}`;
      }

      message +=
        "\n\nCan you give me a little more detail about what the machine is doing?";

      addAssistantMessage(
        message,
        {
          sources:
            createSources(
              data.results
            ),
        }
      );

      return;
    }

    /*
    --------------------------------------------------
    RELATED PAGES ONLY
    --------------------------------------------------
    */

    if (
      data.recommendedBehavior ===
        "show_related_pages_only"
    ) {
      addAssistantMessage(
        "I'm not confident enough to give you a technical answer based on the Rhino Wrangler information I found. I did find some potentially related training material below.",
        {
          sources:
            createSources(
              data.results
            ),
        }
      );

      return;
    }

    /*
    --------------------------------------------------
    NO ANSWER
    --------------------------------------------------
    */

    addAssistantMessage(
      "I'm not sure based on the Rhino Wrangler information currently available. I don't want to guess or recommend a technical change without reliable supporting material."
    );
  }

  /*
  --------------------------------------------------
  TERMINOLOGY CONFIRMATION
  --------------------------------------------------
  */

  function handleTerminologyYes() {
    if (
      !pendingTerminology
    ) {
      return;
    }

    const topResult =
      pendingTerminology
        .results?.[0];

    if (
      !topResult
    ) {
      addAssistantMessage(
        "Thanks for confirming. I still don't have enough documented Rhino Wrangler information to give you a reliable technical answer."
      );

      setPendingTerminology(
        null
      );

      return;
    }

    addAssistantMessage(
      `Thanks for confirming that you mean ${pendingTerminology.officialTerm}.\n\n${topResult.content}`,
      {
        warning:
          topResult.warnings,

        sources:
          createSources(
            pendingTerminology.results
          ),
      }
    );

    setPendingTerminology(
      null
    );
  }

  function handleTerminologyNo() {
    if (
      !pendingTerminology
    ) {
      return;
    }

    addAssistantMessage(
      "Got it. I won't assume those are the same thing. Please describe what you're referring to or what the machine is doing, and I'll search again."
    );

    setPendingTerminology(
      null
    );
  }

  /*
  --------------------------------------------------
  SEND QUESTION
  --------------------------------------------------
  */

  async function handleSend() {
    const trimmed =
      input.trim();

    if (
      !trimmed ||
      sending
    ) {
      return;
    }

    if (
      !hasPlatformAccess
    ) {
      addAssistantMessage(
        "Active training-platform access is required to use the Rhino Wrangler Assistant."
      );

      return;
    }

    /*
    --------------------------------------------------
    MACHINE CONTEXT REQUIRED
    --------------------------------------------------
    */

    if (
      !selectedMachine
    ) {
      if (
        machines.length >
        1
      ) {
        addAssistantMessage(
          "Please select which RhinoFab machine you're working on before asking a technical question."
        );
      } else {
        addAssistantMessage(
          "I don't have a machine saved for your company yet. I don't want to provide machine-specific troubleshooting without knowing which machine you're working on."
        );
      }

      return;
    }

    const userMessage:
      Message = {
        id:
          nextId.current++,

        role:
          "user",

        text:
          trimmed,
      };

    setMessages(
      (
        current
      ) => [
        ...current,
        userMessage,
      ]
    );

    setInput(
      ""
    );

    setPendingTerminology(
      null
    );

    setSending(
      true
    );

    try {
      const {
        data: {
          session,
        },
      } =
        await supabase.auth.getSession();

      if (
        !session
      ) {
        addAssistantMessage(
          "Your login session has expired. Please log in again."
        );

        return;
      }

      const response =
        await fetch(
          "/api/rhino-assistant/search",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${session.access_token}`,
            },

            body:
              JSON.stringify({
                question:
                  trimmed,

                machine: {
                  modelCode:
                    selectedMachine.modelCode,

                  baseModel:
                    selectedMachine.baseModel,

                  feedDirection:
                    selectedMachine.feedDirection,
                },
              }),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok
      ) {
        addAssistantMessage(
          data?.error ||
            "I wasn't able to search the Rhino Wrangler knowledge base."
        );

        return;
      }

      handleSearchResponse(
        data
      );
    } catch (
      error
    ) {
      console.error(
        "Rhino Assistant search failed:",
        error
      );

      addAssistantMessage(
        "Something went wrong while searching the Rhino Wrangler knowledge base. I didn't generate a technical answer."
      );
    } finally {
      setSending(
        false
      );
    }
  }

  /*
  --------------------------------------------------
  ENTER TO SEND
  --------------------------------------------------
  */

  function handleKeyDown(
    event:
      React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (
      event.key ===
        "Enter" &&
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

  useEffect(
    () => {
      messagesEndRef.current
        ?.scrollIntoView({
          behavior:
            "smooth",
        });
    },
    [
      messages,
      pendingTerminology,
    ]
  );

  return (
    <>
      {/* FLOATING CHAT BUTTON */}

      {!open && (
        <button
          type="button"
          className="assistantLauncher"
          onClick={
            handleOpen
          }
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

          {/* HEADER */}

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
              onClick={
                handleClose
              }
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          {!acceptedDisclaimer ? (
            /*
            --------------------------------------------------
            DISCLAIMER
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

                  if (
                    !checkbox
                      ?.checked
                  ) {
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
            CHAT
            --------------------------------------------------
            */

            <div className="chatLayout">

              {/* SAFETY BAR */}

              <div className="safetyNotice">
                <strong>
                  Verify before making changes.
                </strong>

                <span>
                  Technical information is based on Rhino
                  Wrangler training material. If the assistant
                  is unsure, it should say so instead of
                  guessing.
                </span>
              </div>

              {/* MACHINE CONTEXT */}

              {loadingContext && (
                <div className="machineBar">
                  Loading company machine information...
                </div>
              )}

              {!loadingContext &&
                selectedMachine && (
                  <div className="machineBar">
                    <div>
                      <span className="machineLabel">
                        CURRENT MACHINE
                      </span>

                      <strong>
                        {
                          selectedMachine.displayName
                        }
                      </strong>
                    </div>

                    {machines.length >
                      1 && (
                      <button
                        type="button"
                        className="changeMachineButton"
                        onClick={() =>
                          setSelectedMachine(
                            null
                          )
                        }
                      >
                        Change
                      </button>
                    )}
                  </div>
                )}

              {/* MULTIPLE MACHINE SELECTOR */}

              {!loadingContext &&
                machines.length >
                  1 &&
                !selectedMachine && (
                  <div className="machineSelector">
                    <strong>
                      Which machine are you working on?
                    </strong>

                    <div className="machineButtons">
                      {machines.map(
                        (
                          machine
                        ) => (
                          <button
                            type="button"
                            key={
                              machine.companyMachineId
                            }
                            onClick={() =>
                              handleMachineSelection(
                                machine
                              )
                            }
                            className="machineButton"
                          >
                            <span>
                              {
                                machine.displayName
                              }
                            </span>

                            {machine.nickname && (
                              <small>
                                {
                                  machine.nickname
                                }
                              </small>
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* MESSAGES */}

              <div className="messages">
                {messages.map(
                  (
                    message
                  ) => (
                    <div
                      key={
                        message.id
                      }
                      className={`messageRow ${
                        message.role ===
                        "user"
                          ? "userRow"
                          : "assistantRow"
                      }`}
                    >
                      <div
                        className={`messageBubble ${
                          message.role ===
                          "user"
                            ? "userBubble"
                            : "assistantBubble"
                        }`}
                      >
                        <div className="messageText">
                          {
                            message.text
                          }
                        </div>

                        {message.warning && (
                          <div className="answerWarning">
                            <strong>
                              Important
                            </strong>

                            <span>
                              {
                                message.warning
                              }
                            </span>
                          </div>
                        )}

                        {message.sources &&
                          message.sources.length >
                            0 && (
                            <div className="sourceList">
                              <strong>
                                Rhino Wrangler Sources
                              </strong>

                              {message.sources.map(
                                (
                                  source,
                                  index
                                ) => (
                                  <a
                                    key={`${source.sourceUrl}-${source.sectionTitle}-${index}`}
                                    href={
                                      source.sourceUrl
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {
                                      source.sectionTitle
                                    }
                                  </a>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                  )
                )}

                {/* TERMINOLOGY CONFIRMATION */}

                {pendingTerminology && (
                  <div className="terminologyActions">
                    <button
                      type="button"
                      className="yesButton"
                      onClick={
                        handleTerminologyYes
                      }
                    >
                      Yes — I mean{" "}
                      {
                        pendingTerminology.officialTerm
                      }
                    </button>

                    <button
                      type="button"
                      className="noButton"
                      onClick={
                        handleTerminologyNo
                      }
                    >
                      No — Something Else
                    </button>
                  </div>
                )}

                {sending && (
                  <div className="assistantThinking">
                    Searching Rhino Wrangler training material...
                  </div>
                )}

                <div
                  ref={
                    messagesEndRef
                  }
                />
              </div>

              {/* COMPOSER */}

              <div className="composer">
                <textarea
                  value={
                    input
                  }
                  onChange={(
                    event
                  ) =>
                    setInput(
                      event.target
                        .value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder={
                    !selectedMachine
                      ? "Select a machine before asking a technical question..."
                      : `Ask a question about ${selectedMachine.displayName}...`
                  }
                  rows={
                    3
                  }
                  disabled={
                    sending ||
                    loadingContext ||
                    !hasPlatformAccess ||
                    !selectedMachine ||
                    !!pendingTerminology
                  }
                />

                <button
                  type="button"
                  className="sendButton"
                  onClick={
                    handleSend
                  }
                  disabled={
                    sending ||
                    !input.trim() ||
                    !selectedMachine ||
                    !hasPlatformAccess ||
                    !!pendingTerminology
                  }
                >
                  {sending
                    ? "Searching..."
                    : "Send"}
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

          padding:
            12px 18px
            12px 12px;

          background:
            #111827;

          color:
            #ffffff;

          box-shadow:
            0 18px 40px
            rgba(
              0,
              0,
              0,
              0.28
            );

          cursor:
            pointer;

          font-weight:
            900;

          font-size:
            0.95rem;
        }

        .assistantLauncher:hover {
          transform:
            translateY(
              -2px
            );
        }

        .launcherIcon {
          width:
            34px;

          height:
            34px;

          border-radius:
            999px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            #f59e0b;

          color:
            #111827;

          font-weight:
            950;

          font-size:
            1.15rem;
        }

        .launcherText {
          white-space:
            nowrap;
        }

        .assistantPanel {
          position:
            fixed;

          right:
            24px;

          bottom:
            24px;

          z-index:
            5000;

          width:
            min(
              480px,
              calc(
                100vw - 32px
              )
            );

          height:
            min(
              760px,
              calc(
                100vh - 48px
              )
            );

          display:
            flex;

          flex-direction:
            column;

          background:
            #ffffff;

          border:
            1px solid
            rgba(
              17,
              24,
              39,
              0.12
            );

          border-radius:
            22px;

          box-shadow:
            0 28px 70px
            rgba(
              0,
              0,
              0,
              0.3
            );

          overflow:
            hidden;
        }

        .assistantHeader {
          min-height:
            74px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            16px;

          padding:
            16px 18px;

          background:
            #111827;

          color:
            #ffffff;
        }

        .assistantTitle {
          font-size:
            1.05rem;

          font-weight:
            950;
        }

        .assistantSubtitle {
          margin-top:
            3px;

          color:
            rgba(
              255,
              255,
              255,
              0.65
            );

          font-size:
            0.76rem;

          text-transform:
            uppercase;

          letter-spacing:
            0.08em;
        }

        .closeButton {
          width:
            38px;

          height:
            38px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            none;

          border-radius:
            10px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          color:
            #ffffff;

          cursor:
            pointer;

          font-size:
            1.6rem;

          line-height:
            1;
        }

        .disclaimerWrap {
          overflow-y:
            auto;

          padding:
            24px;

          color:
            #374151;

          line-height:
            1.6;
        }

        .warningBadge {
          display:
            inline-flex;

          padding:
            6px 10px;

          border-radius:
            999px;

          background:
            rgba(
              220,
              38,
              38,
              0.1
            );

          color:
            #991b1b;

          font-size:
            0.72rem;

          font-weight:
            950;

          letter-spacing:
            0.08em;
        }

        h2 {
          margin:
            14px 0
            18px;

          color:
            #111827;

          font-size:
            1.6rem;

          line-height:
            1.15;
        }

        p {
          margin:
            0 0
            16px;
        }

        .importantBox {
          margin:
            20px 0;

          display:
            grid;

          gap:
            10px;

          padding:
            16px;

          border-radius:
            16px;

          background:
            #111827;

          color:
            rgba(
              255,
              255,
              255,
              0.8
            );
        }

        .importantBox strong {
          color:
            #ffffff;
        }

        .agreementRow {
          display:
            flex;

          align-items:
            flex-start;

          gap:
            12px;

          padding:
            14px;

          border-radius:
            14px;

          background:
            #f3f4f6;

          color:
            #374151;

          cursor:
            pointer;

          font-size:
            0.9rem;
        }

        .agreementRow input {
          margin-top:
            4px;

          width:
            18px;

          height:
            18px;

          flex:
            0 0 auto;
        }

        .agreeButton {
          width:
            100%;

          margin-top:
            18px;

          border:
            none;

          border-radius:
            14px;

          padding:
            14px 18px;

          background:
            #f59e0b;

          color:
            #111827;

          font-size:
            0.95rem;

          font-weight:
            950;

          cursor:
            pointer;
        }

        .chatLayout {
          min-height:
            0;

          display:
            flex;

          flex:
            1;

          flex-direction:
            column;
        }

        .safetyNotice {
          display:
            grid;

          gap:
            4px;

          padding:
            12px 16px;

          background:
            #fff7ed;

          border-bottom:
            1px solid
            #fed7aa;

          color:
            #9a3412;

          font-size:
            0.78rem;

          line-height:
            1.45;
        }

        .machineBar {
          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            12px;

          padding:
            10px 16px;

          background:
            #eef2ff;

          border-bottom:
            1px solid
            #c7d2fe;

          color:
            #312e81;

          font-size:
            0.82rem;
        }

        .machineBar > div {
          display:
            grid;

          gap:
            2px;
        }

        .machineLabel {
          font-size:
            0.65rem;

          font-weight:
            900;

          letter-spacing:
            0.08em;

          color:
            #6366f1;
        }

        .changeMachineButton {
          border:
            none;

          border-radius:
            8px;

          padding:
            7px 10px;

          background:
            #ffffff;

          color:
            #312e81;

          font-weight:
            850;

          cursor:
            pointer;
        }

        .machineSelector {
          padding:
            14px 16px;

          background:
            #eef2ff;

          border-bottom:
            1px solid
            #c7d2fe;

          color:
            #312e81;
        }

        .machineButtons {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            8px;

          margin-top:
            10px;
        }

        .machineButton {
          display:
            grid;

          gap:
            3px;

          text-align:
            left;

          border:
            1px solid
            #c7d2fe;

          border-radius:
            10px;

          padding:
            10px;

          background:
            #ffffff;

          color:
            #312e81;

          cursor:
            pointer;

          font-weight:
            850;
        }

        .machineButton small {
          color:
            #6b7280;
        }

        .messages {
          min-height:
            0;

          flex:
            1;

          overflow-y:
            auto;

          padding:
            18px;

          background:
            #f7f8fa;
        }

        .messageRow {
          display:
            flex;

          margin-bottom:
            12px;
        }

        .userRow {
          justify-content:
            flex-end;
        }

        .assistantRow {
          justify-content:
            flex-start;
        }

        .messageBubble {
          max-width:
            88%;

          padding:
            12px 14px;

          border-radius:
            16px;

          line-height:
            1.5;

          font-size:
            0.93rem;

          white-space:
            pre-wrap;
        }

        .assistantBubble {
          background:
            #ffffff;

          border:
            1px solid
            rgba(
              17,
              24,
              39,
              0.08
            );

          color:
            #374151;
        }

        .userBubble {
          background:
            #111827;

          color:
            #ffffff;
        }

        .messageText {
          white-space:
            pre-wrap;
        }

        .answerWarning {
          display:
            grid;

          gap:
            5px;

          margin-top:
            12px;

          padding:
            10px;

          border-radius:
            10px;

          background:
            #fff7ed;

          border:
            1px solid
            #fed7aa;

          color:
            #9a3412;

          font-size:
            0.82rem;
        }

        .sourceList {
          display:
            grid;

          gap:
            7px;

          margin-top:
            14px;

          padding-top:
            12px;

          border-top:
            1px solid
            #e5e7eb;

          font-size:
            0.8rem;
        }

        .sourceList strong {
          color:
            #111827;
        }

        .sourceList a {
          color:
            #b45309;

          text-decoration:
            none;

          font-weight:
            800;
        }

        .sourceList a:hover {
          text-decoration:
            underline;
        }

        .terminologyActions {
          display:
            grid;

          gap:
            8px;

          margin:
            6px 0
            16px;
        }

        .yesButton,
        .noButton {
          border:
            none;

          border-radius:
            10px;

          padding:
            11px 12px;

          cursor:
            pointer;

          font-weight:
            900;

          text-align:
            left;
        }

        .yesButton {
          background:
            #f59e0b;

          color:
            #111827;
        }

        .noButton {
          background:
            #e5e7eb;

          color:
            #374151;
        }

        .assistantThinking {
          margin:
            6px 0
            12px;

          color:
            #6b7280;

          font-size:
            0.82rem;

          font-style:
            italic;
        }

        .composer {
          display:
            flex;

          align-items:
            flex-end;

          gap:
            10px;

          padding:
            14px 14px
            8px;

          background:
            #ffffff;

          border-top:
            1px solid
            #e5e7eb;
        }

        textarea {
          min-height:
            54px;

          flex:
            1;

          resize:
            none;

          border:
            1px solid
            #d1d5db;

          border-radius:
            12px;

          padding:
            12px;

          color:
            #111827;

          background:
            #ffffff;

          font:
            inherit;

          outline:
            none;
        }

        textarea:focus {
          border-color:
            #f59e0b;
        }

        textarea:disabled {
          background:
            #f3f4f6;

          cursor:
            not-allowed;
        }

        .sendButton {
          border:
            none;

          border-radius:
            12px;

          padding:
            13px 18px;

          background:
            #f59e0b;

          color:
            #111827;

          font-weight:
            950;

          cursor:
            pointer;
        }

        .sendButton:disabled {
          opacity:
            0.45;

          cursor:
            not-allowed;
        }

        .composerNote {
          padding:
            0 14px
            10px;

          background:
            #ffffff;

          color:
            #9ca3af;

          font-size:
            0.7rem;
        }

        @media (
          max-width:
            600px
        ) {
          .assistantLauncher {
            right:
              14px;

            bottom:
              14px;
          }

          .launcherText {
            display:
              none;
          }

          .assistantPanel {
            right:
              8px;

            bottom:
              8px;

            width:
              calc(
                100vw - 16px
              );

            height:
              calc(
                100vh - 16px
              );

            border-radius:
              18px;
          }

          .machineButtons {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>
    </>
  );
}