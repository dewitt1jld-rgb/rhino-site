import {
  useState,
} from "react";

import {
  createClient,
} from "@/lib/supabase";

const supabase =
  createClient();

export default function RhinoAssistantTestPage() {
  const [
    question,
    setQuestion,
  ] =
    useState("");

  const [
    result,
    setResult,
  ] =
    useState<any>(
      null
    );

  const [
    loading,
    setLoading,
  ] =
    useState(false);

  async function testSearch() {
    setLoading(true);
    setResult(null);

    try {
      const {
        data: {
          session,
        },
      } =
        await supabase.auth.getSession();

      if (!session) {
        alert(
          "Please log in first."
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
                question,
              }),
          }
        );

      const data =
        await response.json();

      setResult(
        data
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
        minHeight:
          "100vh",

        padding:
          "60px 24px",

        background:
          "#f5f7fb",
      }}
    >
      <div
        style={{
          maxWidth:
            "900px",

          margin:
            "0 auto",
        }}
      >
        <h1>
          Rhino Assistant Search Test
        </h1>

        <p>
          This page tests retrieval only.
          It does not generate AI answers.
        </p>

        <textarea
          value={
            question
          }
          onChange={(
            event
          ) =>
            setQuestion(
              event
                .target
                .value
            )
          }
          rows={5}
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
          onClick={
            testSearch
          }
          disabled={
            loading ||
            !question.trim()
          }
          style={{
            marginTop:
              "12px",

            padding:
              "12px 20px",

            cursor:
              "pointer",
          }}
        >
          {loading
            ? "Searching..."
            : "Test Search"}
        </button>

        {result && (
          <pre
            style={{
              marginTop:
                "30px",

              padding:
                "20px",

              background:
                "#111827",

              color:
                "#ffffff",

              borderRadius:
                "12px",

              overflowX:
                "auto",

              whiteSpace:
                "pre-wrap",
            }}
          >
            {JSON.stringify(
              result,
              null,
              2
            )}
          </pre>
        )}
      </div>
    </main>
  );
}