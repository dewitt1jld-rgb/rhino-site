export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f3f4f6",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px" }}>
        The Rhino Wrangler
      </h1>

      <p style={{ fontSize: "20px", color: "#555", marginBottom: "16px" }}>
        Professional CNC Training Platform
      </p>

      <p style={{ maxWidth: "500px", color: "#777" }}>
        Learn, troubleshoot, and master your machines with step-by-step guides and video tutorials.
      </p>
    </main>
  );
}
