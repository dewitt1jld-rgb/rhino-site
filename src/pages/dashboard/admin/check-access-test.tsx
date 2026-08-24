import { useState } from "react";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

export default function CheckAccessTestPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function runTest() {
    setLoading(true);
    setResult(null);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        alert("Please log in first.");
        return;
      }

      const response = await fetch("/api/check-access", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const data = await response.json();

      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 24px",
        background: "#f5f7fb",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1>Check Access Test</h1>

        <button
          onClick={runTest}
          disabled={loading}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          {loading ? "Checking..." : "Run Check Access"}
        </button>

        {result && (
          <pre
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#111827",
              color: "#ffffff",
              borderRadius: "12px",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </main>
  );
}