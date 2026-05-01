import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* MAIN CONTENT */}
        <div style={{ flex: 1 }}>{children}</div>

        {/* GLOBAL FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #e5e5e5",
            padding: "20px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            © {new Date().getFullYear()} The Rhino Wrangler
          </div>

          <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:your@email.com">Contact</a>
          </div>
        </footer>
      </body>
    </html>
  );
}