export default function Pricing() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f3f4f6",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold", marginBottom: "20px" }}>
        Pricing
      </h1>

      <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
        Choose the plan that fits your training needs.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ padding: "20px", background: "white", borderRadius: "10px", width: "250px" }}>
          <h2>Basic</h2>
          <p>$29/month</p>
          <p>Access to core training content</p>
        </div>

        <div style={{ padding: "20px", background: "white", borderRadius: "10px", width: "250px" }}>
          <h2>Pro</h2>
          <p>$59/month</p>
          <p>Full access to all training and videos</p>
        </div>
      </div>
    </main>
  );
}