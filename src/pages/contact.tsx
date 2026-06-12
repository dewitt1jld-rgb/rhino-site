export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050b14",
        color: "white",
        padding: "80px 24px",
      }}
    >
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(245,158,11,0.25)",
          borderRadius: "24px",
          padding: "40px",
        }}
      >
        <p style={{ color: "#f59e0b", fontWeight: 800 }}>
          CONTACT THE RHINO WRANGLER
        </p>

        <h1 style={{ fontSize: "44px", marginBottom: "20px" }}>
          Need help?
        </h1>

        <p style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.78)" }}>
          If you need help with training access, virtual classes, RhinoFab,
          Glazier Studio, PartnerPak, or general support, reach out below.
        </p>

        <div style={{ marginTop: "32px", lineHeight: 1.9 }}>
          <p>
            <strong>Email:</strong> Landon@TheRhinoWrangler.com
          </p>

          <p>
            <strong>Phone:</strong> 480-340-1653
          </p>

          <p>
            <strong>Business:</strong> The Rhino Wrangler
          </p>
        </div>
      </section>
    </main>
  );
}