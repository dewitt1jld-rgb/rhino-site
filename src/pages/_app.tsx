import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import RhinoAssistant from "../components/RhinoAssistant";

import "../styles/globals.css";

import Navbar from "../components/Navbar";
import RequireActiveAccess from "../components/RequireActiveAccess";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const router = useRouter();

  /*
  --------------------------------------------------
  PROTECTED ZERO TO HERO ROUTES
  --------------------------------------------------

  Every page inside:

  /dashboard/introductory-software-training/

  now requires active Rhino Wrangler
  training-platform access.

  This protects:
  - course home
  - lesson 1
  - lesson 2
  - every lesson page
  - every future page added under this route
  --------------------------------------------------
  */

  const isZeroToHeroRoute =
    router.pathname ===
      "/dashboard/introductory-software-training" ||
    router.pathname.startsWith(
      "/dashboard/introductory-software-training/"
    );

  const pageContent = (
    <Component {...pageProps} />
  );

  return (
    <>
      <Navbar />

      {isZeroToHeroRoute ? (
        <RequireActiveAccess>
          {pageContent}
        </RequireActiveAccess>
      ) : (
        pageContent
      )}

      <RhinoAssistant />

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
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          © {new Date().getFullYear()} The Rhino Wrangler
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/terms">
            Terms
          </Link>

          <Link href="/privacy">
            Privacy
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <a
            href="mailto:landon@therhinowrangler.com?subject=Rhino Wrangler Feedback"
          >
            Send Feedback
          </a>
        </div>
      </footer>
    </>
  );
}