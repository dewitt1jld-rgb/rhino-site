import {
  useEffect,
  useState,
} from "react";

import {
  createClient,
} from "@supabase/supabase-js";

/*
--------------------------------------------------
SUPABASE CLIENT
--------------------------------------------------
*/

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/*
--------------------------------------------------
SOURCE
--------------------------------------------------
*/

type Source = {
  id: string;

  pageTitle: string;

  sectionTitle: string;

  topicTitle:
    string | null;

  sourceUrl: string;
};

/*
--------------------------------------------------
CHAT MESSAGE
--------------------------------------------------
*/

type ChatMessage = {
  role:
    | "user"
    | "assistant";

  content: string;
};

/*
--------------------------------------------------
RESOLVED MACHINE PROFILE
--------------------------------------------------

This mirrors the resolved machine object returned
by /api/check-access.

The fields are nullable because we intentionally
do not guess when a capability cannot be resolved.
--------------------------------------------------
*/

type ResolvedMachine = {
  companyMachineId:
    string | null;

  machineModelId:
    string | null;

  modelCode:
    string | null;

  baseModel:
    string | null;

  feedDirection:
    "left"
    | "right"
    | null;

  displayName:
    string | null;

  nickname:
    string | null;

  serialNumber:
    string | null;

  isPrimary:
    boolean;

  capabilitiesResolved:
    boolean;

  motorSize:
    string | null;

  slideSize:
    string | null;

  sawType:
    string | null;

  pieceLoadDirection:
    string | null;

  cut90:
    boolean | null;

  cutMiter:
    boolean | null;

  cutBevel:
    boolean | null;

  cutCompound:
    boolean | null;

  hasRotationalOffset:
    boolean | null;

  frontDrill:
    string | null;

  topDrill:
    string | null;

  bottomDrill:
    string | null;

  backDrill:
    string | null;

  drillAssemblyCount:
    number | null;

  drillConfiguration:
    string | null;

  hasRobot:
    boolean | null;

  hasStationaryToolChanger:
    boolean | null;

  hasRobotToolChanger:
    boolean | null;

  hasLinearEncoder:
    boolean | null;

  fluidCooledMotors:
    boolean | null;

  doorCapable:
    boolean | null;

  digitalHClampPressure:
    boolean | null;

  digitalClutchPressure:
    boolean | null;

  supportedForAI:
    boolean | null;

  overrides:
    Record<
      string,
      unknown
    >;
};

/*
--------------------------------------------------
CONVERSATION MACHINE
--------------------------------------------------

This is the machine context we send to the
Assistant.

It contains the full resolved machine profile
plus information about where the machine choice
came from.

company_default =
the machine came from the customer's account.

user_override =
the customer explicitly changed machines during
the conversation.
--------------------------------------------------
*/

type ConversationMachine =
  ResolvedMachine & {
    source:
      "company_default"
      | "user_override"
      | null;
  };

/*
--------------------------------------------------
CONVERSATION STATE
--------------------------------------------------
*/

type ConversationState = {
  machine:
    ConversationMachine | null;

  activeProblem:
    string | null;

  lastClarificationQuestion:
    string | null;
};

/*
--------------------------------------------------
ANSWER RESPONSE
--------------------------------------------------
*/

type AnswerResponse = {
  conversationState?:
    ConversationState;

  success: boolean;

  engine: string;

  model?: string;

  action:
    | "answer"
    | "clarify"
    | "no_answer";

  message: string;

  sources:
    Source[];

  retrieval: {
    confidence:
      string;

    recommendedBehavior:
      string;

    resultCount:
      number;

    topResults?: {
      sectionTitle:
        string;

      pageTitle:
        string;

      similarity:
        number;

      finalScore:
        number;
    }[];
  };

  usage: {
    embeddingTokens:
      number;

    modelInputTokens:
      number;

    modelOutputTokens:
      number;

    modelTotalTokens:
      number;

    estimatedModelCost:
      number;
  };
};

/*
--------------------------------------------------
CHECK ACCESS RESPONSE
--------------------------------------------------
*/

type CheckAccessResponse = {
  status:
    string;

  hasAccess:
    boolean;

  source:
    string;

  reason?:
    string;

  company?: {
    id:
      string;

    name:
      string;

    machines:
      ResolvedMachine[];

    primaryMachine:
      ResolvedMachine | null;
  } | null;

  error?:
    string;
};

/*
--------------------------------------------------
EMPTY CONVERSATION STATE
--------------------------------------------------
*/

function createEmptyConversationState():
  ConversationState {
  return {
    machine:
      null,

    activeProblem:
      null,

    lastClarificationQuestion:
      null,
  };
}

/*
--------------------------------------------------
PAGE
--------------------------------------------------
*/

export default function RhinoAssistantAnswerTest() {
  const [
    question,
    setQuestion,
  ] =
    useState(
      "My parts keep coming out different lengths."
    );

  const [
    conversation,
    setConversation,
  ] =
    useState<
      ChatMessage[]
    >([]);

  const [
    conversationState,
    setConversationState,
  ] =
    useState<ConversationState>(
      createEmptyConversationState()
    );

  /*
  --------------------------------------------------
  COMPANY / MACHINE LOADING STATE
  --------------------------------------------------
  */

  const [
    machineLoading,
    setMachineLoading,
  ] =
    useState(true);

  const [
    companyName,
    setCompanyName,
  ] =
    useState<
      string | null
    >(null);

  const [
    companyMachines,
    setCompanyMachines,
  ] =
    useState<
      ResolvedMachine[]
    >([]);

  const [
    machineLoadError,
    setMachineLoadError,
  ] =
    useState("");

  /*
  --------------------------------------------------
  ANSWER STATE
  --------------------------------------------------
  */

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  const [
    result,
    setResult,
  ] =
    useState<
      AnswerResponse | null
    >(null);

  const [
    error,
    setError,
  ] =
    useState("");

  /*
  --------------------------------------------------
  LOAD COMPANY MACHINE ON PAGE LOAD
  --------------------------------------------------

  The Assistant no longer assumes a hard-coded
  machine.

  We:

  1. Get the logged-in Supabase session
  2. Send the access token to /api/check-access
  3. Read company.primaryMachine
  4. Store the FULL resolved machine profile
     in conversation state
  --------------------------------------------------
  */

  useEffect(
    () => {
      loadCompanyMachine();
    },
    []
  );

  async function loadCompanyMachine() {
    setMachineLoading(
      true
    );

    setMachineLoadError(
      ""
    );

    try {
      /*
      ----------------------------------------------
      GET LOGGED-IN SESSION
      ----------------------------------------------
      */

      const {
        data: {
          session,
        },
        error:
          sessionError,
      } =
        await supabase.auth.getSession();

      if (
        sessionError
      ) {
        throw sessionError;
      }

      if (
        !session
      ) {
        throw new Error(
          "No active Supabase session was found."
        );
      }

      /*
      ----------------------------------------------
      CALL CHECK-ACCESS
      ----------------------------------------------
      */

      const response =
        await fetch(
          "/api/check-access",
          {
            method:
              "GET",

            headers: {
              Authorization:
                `Bearer ${session.access_token}`,
            },
          }
        );

      const data:
        CheckAccessResponse =
        await response.json();

      if (
        !response.ok
      ) {
        throw new Error(
          data?.error ||
            "Unable to load company access."
        );
      }

      /*
      ----------------------------------------------
      SAVE COMPANY INFORMATION
      ----------------------------------------------
      */

      setCompanyName(
        data.company
          ?.name ??
          null
      );

      setCompanyMachines(
        data.company
          ?.machines ??
          []
      );

      /*
      ----------------------------------------------
      PRIMARY MACHINE
      ----------------------------------------------

      Most companies have one machine.

      Their primary machine becomes the default
      machine for the conversation.

      We do NOT guess if no machine exists.
      ----------------------------------------------
      */

      const primaryMachine =
        data.company
          ?.primaryMachine ??
        null;

      if (
        !primaryMachine
      ) {
        setConversationState(
          createEmptyConversationState()
        );

        throw new Error(
          "This company does not have a primary machine configured."
        );
      }

      /*
      ----------------------------------------------
      STORE FULL RESOLVED PROFILE
      ----------------------------------------------
      */

      setConversationState({
        machine: {
          ...primaryMachine,

          source:
            "company_default",
        },

        activeProblem:
          null,

        lastClarificationQuestion:
          null,
      });
    } catch (
      err
    ) {
      console.error(
        "Machine profile load failed:",
        err
      );

      setMachineLoadError(
        err instanceof Error
          ? err.message
          : "Unable to load machine profile."
      );
    } finally {
      setMachineLoading(
        false
      );
    }
  }

  /*
  --------------------------------------------------
  SEND QUESTION
  --------------------------------------------------
  */

  async function sendQuestion() {
    const trimmed =
      question.trim();

    if (
      !trimmed ||
      loading ||
      machineLoading
    ) {
      return;
    }

    if (
      !conversationState.machine
    ) {
      setError(
        "No machine profile is available for this conversation."
      );

      return;
    }

    setLoading(
      true
    );

    setError(
      ""
    );

    try {
      const response =
        await fetch(
          "/api/rhino-assistant/answer-v1",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                question:
                  trimmed,

                /*
                Full resolved machine profile.
                */

                machine:
                  conversationState.machine,

                /*
                Previous messages.
                */

                conversation,

                /*
                Persistent diagnostic state.
                */

                conversationState,
              }),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok
      ) {
        throw new Error(
          data?.error ||
            "Answer request failed."
        );
      }

      setResult(
        data
      );

      /*
      ----------------------------------------------
      ACCEPT UPDATED CONVERSATION STATE
      ----------------------------------------------

      answer-v1 can change the active machine later
      when the user explicitly identifies another
      machine.

      Example:

      Company default = 5500L

      User:
      "Actually I'm working on our 900R."

      The API can return a new machine with
      source = user_override.
      ----------------------------------------------
      */

      if (
        data.conversationState
      ) {
        setConversationState(
          data.conversationState
        );
      }

      setConversation(
        (
          current
        ) => [
          ...current,

          {
            role:
              "user",

            content:
              trimmed,
          },

          {
            role:
              "assistant",

            content:
              data.message,
          },
        ]
      );

      setQuestion(
        ""
      );
    } catch (
      err
    ) {
      console.error(
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Request failed."
      );
    } finally {
      setLoading(
        false
      );
    }
  }

  /*
  --------------------------------------------------
  RESET CONVERSATION
  --------------------------------------------------

  IMPORTANT:

  Reset no longer hard-codes 5500L.

  It clears the conversation and reloads the
  company's CURRENT primary machine through
  check-access.
  --------------------------------------------------
  */

  async function resetConversation() {
    setConversation(
      []
    );

    setResult(
      null
    );

    setQuestion(
      ""
    );

    setError(
      ""
    );

    setConversationState(
      createEmptyConversationState()
    );

    await loadCompanyMachine();
  }

  /*
  --------------------------------------------------
  PAGE
  --------------------------------------------------
  */

  return (
    <main
      style={{
        maxWidth:
          "1000px",

        margin:
          "0 auto",

        padding:
          "40px 20px",
      }}
    >
      <h1>
        Rhino Assistant Answer V1 Test
      </h1>

      <p>
        Search V3 + grounded AI response.
      </p>

      <div
        style={{
          marginTop:
            "24px",

          padding:
            "14px",

          background:
            "#fff7ed",

          border:
            "1px solid #fed7aa",

          borderRadius:
            "10px",
        }}
      >
        <strong>
          Testing only:
        </strong>{" "}
        This page is evaluating answer quality,
        clarification behavior, sources, API
        cost, and resolved machine context.
      </div>

      {/*
      ------------------------------------------------
      COMPANY MACHINE STATUS
      ------------------------------------------------
      */}

      <div
        style={{
          marginTop:
            "18px",

          padding:
            "14px",

          background:
            "#f3f4f6",

          borderRadius:
            "10px",

          border:
            "1px solid #d1d5db",
        }}
      >
        <strong>
          Machine Context:
        </strong>{" "}

        {machineLoading
          ? "Loading company machine..."
          : conversationState.machine
          ? `${conversationState.machine.displayName ?? conversationState.machine.modelCode ?? "Unknown machine"}`
          : "No machine loaded"}

        {companyName && (
          <>
            {" "}
            — {companyName}
          </>
        )}

        {conversationState.machine
          ?.source && (
          <>
            {" "}
            (
            {
              conversationState.machine
                .source
            }
            )
          </>
        )}
      </div>

      {machineLoadError && (
        <div
          style={{
            marginTop:
              "14px",

            color:
              "#b91c1c",

            fontWeight:
              700,
          }}
        >
          Machine load error:{" "}
          {
            machineLoadError
          }
        </div>
      )}

      {/*
      ------------------------------------------------
      COMPANY MACHINE DEBUG
      ------------------------------------------------
      */}

      {companyMachines.length >
        1 && (
        <div
          style={{
            marginTop:
              "12px",

            fontSize:
              "14px",

            color:
              "#4b5563",
          }}
        >
          Company has{" "}
          {
            companyMachines.length
          }{" "}
          active machines. The primary machine
          is being used as the conversation
          default.
        </div>
      )}

      {/*
      ------------------------------------------------
      CONVERSATION
      ------------------------------------------------
      */}

      {conversation.length >
        0 && (
        <div
          style={{
            display:
              "grid",

            gap:
              "12px",

            marginTop:
              "28px",
          }}
        >
          {conversation.map(
            (
              message,
              index
            ) => (
              <div
                key={
                  index
                }
                style={{
                  padding:
                    "14px",

                  borderRadius:
                    "12px",

                  background:
                    message.role ===
                    "user"
                      ? "#111827"
                      : "#f3f4f6",

                  color:
                    message.role ===
                    "user"
                      ? "#ffffff"
                      : "#111827",
                }}
              >
                <strong>
                  {message.role ===
                  "user"
                    ? "You"
                    : "Rhino Assistant"}
                </strong>

                <div
                  style={{
                    marginTop:
                      "6px",

                    whiteSpace:
                      "pre-wrap",
                  }}
                >
                  {
                    message.content
                  }
                </div>
              </div>
            )
          )}
        </div>
      )}

      {/*
      ------------------------------------------------
      QUESTION INPUT
      ------------------------------------------------
      */}

      <div
        style={{
          display:
            "grid",

          gap:
            "12px",

          marginTop:
            "28px",
        }}
      >
        <textarea
          value={
            question
          }
          onChange={(
            event
          ) =>
            setQuestion(
              event.target
                .value
            )
          }
          rows={
            4
          }
          placeholder="Ask a Rhino Wrangler question..."
          style={{
            width:
              "100%",

            padding:
              "14px",

            fontSize:
              "16px",
          }}
        />

        <div
          style={{
            display:
              "flex",

            gap:
              "10px",
          }}
        >
          <button
            type="button"
            onClick={
              sendQuestion
            }
            disabled={
              loading ||
              machineLoading ||
              !question.trim() ||
              !conversationState.machine
            }
            style={{
              padding:
                "12px 18px",

              fontWeight:
                800,

              cursor:
                "pointer",
            }}
          >
            {machineLoading
              ? "Loading Machine..."
              : loading
              ? "Thinking..."
              : "Ask Rhino Assistant"}
          </button>

          <button
            type="button"
            onClick={
              resetConversation
            }
            disabled={
              machineLoading
            }
          >
            Reset Conversation
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            marginTop:
              "20px",

            color:
              "red",
          }}
        >
          {error}
        </div>
      )}

      {/*
      ------------------------------------------------
      RESULT
      ------------------------------------------------
      */}

      {result && (
        <section
          style={{
            marginTop:
              "36px",
          }}
        >
          <h2>
            Latest Response
          </h2>

          <div
            style={{
              padding:
                "18px",

              border:
                "1px solid #ddd",

              borderRadius:
                "12px",
            }}
          >
            <div>
              <strong>
                Action:
              </strong>{" "}
              {
                result.action
              }
            </div>

            <div
              style={{
                marginTop:
                  "14px",

                whiteSpace:
                  "pre-wrap",

                fontSize:
                  "17px",

                lineHeight:
                  1.6,
              }}
            >
              {
                result.message
              }
            </div>

            {result.sources
              ?.length >
              0 && (
              <div
                style={{
                  marginTop:
                    "20px",
                }}
              >
                <strong>
                  Sources
                </strong>

                {result.sources.map(
                  (
                    source
                  ) => (
                    <div
                      key={
                        source.id
                      }
                      style={{
                        marginTop:
                          "8px",
                      }}
                    >
                      <a
                        href={
                          source.sourceUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {
                          source.pageTitle
                        }{" "}
                        —{" "}
                        {
                          source.sectionTitle
                        }
                      </a>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/*
          ------------------------------------------------
          CONVERSATION STATE DEBUG
          ------------------------------------------------
          */}

          <h2
            style={{
              marginTop:
                "30px",
            }}
          >
            Conversation State
          </h2>

          <pre
            style={{
              padding:
                "16px",

              background:
                "#f3f4f6",

              overflowX:
                "auto",
            }}
          >
            {JSON.stringify(
              conversationState,
              null,
              2
            )}
          </pre>

          {/*
          ------------------------------------------------
          RETRIEVAL DEBUG
          ------------------------------------------------
          */}

          <h2
            style={{
              marginTop:
                "30px",
            }}
          >
            Retrieval Debug
          </h2>

          <pre
            style={{
              padding:
                "16px",

              background:
                "#f3f4f6",

              overflowX:
                "auto",
            }}
          >
            {JSON.stringify(
              result.retrieval,
              null,
              2
            )}
          </pre>

          {/*
          ------------------------------------------------
          API USAGE
          ------------------------------------------------
          */}

          <h2>
            API Usage
          </h2>

          <pre
            style={{
              padding:
                "16px",

              background:
                "#f3f4f6",

              overflowX:
                "auto",
            }}
          >
            {JSON.stringify(
              result.usage,
              null,
              2
            )}
          </pre>

          <div
            style={{
              marginTop:
                "10px",

              fontWeight:
                800,
            }}
          >
            Estimated model cost: $
            {
              result.usage
                .estimatedModelCost
                .toFixed(
                  6
                )
            }
          </div>
        </section>
      )}
    </main>
  );
}