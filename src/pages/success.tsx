import Link from "next/link";

export default function SuccessPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#05070b", color: "#fff", padding: 24 }}>
      <div style={{ maxWidth: 620, textAlign: "center" }}>
        <h1>Payment Successful</h1>
        <p>Your Rhino Training access purchase was completed successfully.</p>
        <Link href="/dashboard" style={{ color: "#fbbf24", fontWeight: 800 }}>
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}