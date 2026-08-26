import {
  useState,
} from "react";

type SearchResult = {
  id: string;
  pageId: string;
  chunkIndex: number;

  pageTitle: string;
  category: string;
  subcategory: string | null;

  topicTitle: string | null;
  sectionTitle: string;

  content: string;

  sourceSections: string[];
  sourceUrl: string;

  machineScope: string;
  machineModels: string[];

  riskLevel: string;

  similarity: number;
  machineScore: number;
  finalScore: number;

  machineReason:
    string | null;
};

type SearchResponse = {
  success: boolean;

  engine: string;

  question: string;

  machineContext: {
    modelCode:
      string | null;

    baseModel:
      string | null;

    feedDirection:
      string | null;
  };

  confidence:
    string;

  recommendedBehavior:
    string;

  embeddingUsage: {
    tokens:
      number | null;
  };

  resultCount:
    number;

  results:
    SearchResult[];
};

export default function RhinoAssistantV2Test() {
  const [
    question,
    setQuestion,
  ] =
    useState(
      "My first piece is 1/32 short but every other piece is correct."
    );

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  const [
    result,
    setResult,
  ] =
    useState<SearchResponse | null>(
      null
    );

  const [
    error,
    setError,
  ] =
    useState("");

  async function runSearch() {
    setLoading(
      true
    );

    setError(
      ""
    );

    setResult(
      null
    );

    try {
const response =
  await fetch(
    "/api/rhino-assistant/search-v3",
    {
      method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                question,

                /*
                Hard-coded test context for now.

                This matches Star Glass.
                */
                machine: {
                  modelCode:
                    "5500L",

                  baseModel:
                    "5500",

                  feedDirection:
                    "left",
                },
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
            "Search failed."
        );
      }

      setResult(
        data
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
          : "Search failed."
      );
    } finally {
      setLoading(
        false
      );
    }
  }

  return (
    <main
      style={{
        maxWidth:
          "1100px",

        margin:
          "0 auto",

        padding:
          "40px 20px",
      }}
    >
      <h1>
        Rhino Assistant V2 Search Test
      </h1>

      <p>
        Semantic retrieval only.
        This page does not generate
        AI answers.
      </p>

      <div
        style={{
          display:
            "grid",

          gap:
            "12px",

          marginTop:
            "30px",
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
              event.target.value
            )
          }
          rows={
            4
          }
          style={{
            width:
              "100%",

            padding:
              "14px",

            fontSize:
              "16px",
          }}
        />

        <button
          type="button"
          onClick={
            runSearch
          }
          disabled={
            loading ||
            !question.trim()
          }
          style={{
            width:
              "fit-content",

            padding:
              "12px 18px",

            fontWeight:
              800,

            cursor:
              "pointer",
          }}
        >
          {loading
            ? "Searching..."
            : "Run Search V2"}
        </button>
      </div>

      {error && (
        <div
          style={{
            marginTop:
              "24px",

            color:
              "red",
          }}
        >
          {error}
        </div>
      )}

      {result && (
        <div
          style={{
            marginTop:
              "36px",
          }}
        >
          <h2>
            Search Summary
          </h2>

          <pre
            style={{
              padding:
                "16px",

              overflowX:
                "auto",

              background:
                "#f3f4f6",
            }}
          >
            {JSON.stringify(
              {
                engine:
                  result.engine,

                question:
                  result.question,

                machineContext:
                  result.machineContext,

                confidence:
                  result.confidence,

                recommendedBehavior:
                  result.recommendedBehavior,

                embeddingUsage:
                  result.embeddingUsage,

                resultCount:
                  result.resultCount,
              },
              null,
              2
            )}
          </pre>

          <h2>
            Results
          </h2>

          <div
            style={{
              display:
                "grid",

              gap:
                "18px",
            }}
          >
            {result.results.map(
              (
                item,
                index
              ) => (
                <article
                  key={
                    item.id
                  }
                  style={{
                    border:
                      "1px solid #ddd",

                    borderRadius:
                      "12px",

                    padding:
                      "18px",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "13px",

                      fontWeight:
                        900,

                      marginBottom:
                        "8px",
                    }}
                  >
                    RESULT{" "}
                    {index +
                      1}
                  </div>

                  <h3
                    style={{
                      margin:
                        "0 0 6px",
                    }}
                  >
                    {
                      item.sectionTitle
                    }
                  </h3>

                  <div
                    style={{
                      marginBottom:
                        "12px",

                      color:
                        "#666",
                    }}
                  >
                    Page:{" "}
                    {
                      item.pageTitle
                    }
                  </div>

                  <p>
                    {
                      item.content
                    }
                  </p>

                  <div
                    style={{
                      marginTop:
                        "14px",

                      fontFamily:
                        "monospace",

                      fontSize:
                        "13px",

                      lineHeight:
                        1.6,
                    }}
                  >
                    <div>
                      similarity:{" "}
                      {
                        item.similarity
                      }
                    </div>

                    <div>
                      machineScore:{" "}
                      {
                        item.machineScore
                      }
                    </div>

                    <div>
                      finalScore:{" "}
                      {
                        item.finalScore
                      }
                    </div>

                    <div>
                      machineReason:{" "}
                      {
                        item.machineReason ??
                        "(none)"
                      }
                    </div>

                    <div>
                      machineScope:{" "}
                      {
                        item.machineScope
                      }
                    </div>

                    <div>
                      machineModels:{" "}
                      {JSON.stringify(
                        item.machineModels
                      )}
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop:
                        "14px",
                    }}
                  >
                    <a
                      href={
                        item.sourceUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Rhino Wrangler Source
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      )}
    </main>
  );
}