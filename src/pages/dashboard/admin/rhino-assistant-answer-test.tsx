import {
  useState,
} from "react";

type Source = {
  id: string;

  pageTitle: string;

  sectionTitle: string;

  topicTitle:
    string | null;

  sourceUrl: string;
};

type ChatMessage = {
  role:
    | "user"
    | "assistant";

  content: string;
};

type AnswerResponse = {
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

  async function sendQuestion() {
    const trimmed =
      question.trim();

    if (
      !trimmed ||
      loading
    ) {
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

                machine: {
                  modelCode:
                    "5600L",

                  baseModel:
                    "5600",

                  feedDirection:
                    "left",
                },

                conversation,
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

  function resetConversation() {
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
  }

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
        clarification behavior, sources, and API
        cost.
      </div>

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
              !question.trim()
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
            {loading
              ? "Thinking..."
              : "Ask Rhino Assistant"}
          </button>

          <button
            type="button"
            onClick={
              resetConversation
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