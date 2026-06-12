export default function DebugEnvPage() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Env Debug</h1>

      <p>
        NEXT_PUBLIC_SUPABASE_URL:{" "}
        {process.env.NEXT_PUBLIC_SUPABASE_URL ? "loaded" : "missing"}
      </p>

      <p>
        NEXT_PUBLIC_SUPABASE_ANON_KEY:{" "}
        {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "loaded" : "missing"}
      </p>
    </main>
  );
}