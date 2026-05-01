import type { AppProps } from "next/app";
import Link from "next/link";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <footer
        style={{
          borderTop: "1px solid #e5e5e5",
          padding: "20px",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#666",
          background: "#ffffff",
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
    </>
  );
}