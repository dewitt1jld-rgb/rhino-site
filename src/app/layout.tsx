import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "The Rhino Wrangler",
    template: "%s | The Rhino Wrangler",
  },

  description:
    "Professional RhinoFab, Glazier Studio, PartnerPak, and estimating software training. Troubleshooting guides, video tutorials, virtual classes, and certification resources.",

  keywords: [
    "RhinoFab Training",
    "RhinoFab Troubleshooting",
    "Glazier Studio Training",
    "PartnerPak Training",
    "Estimator Training",
    "CNC Glass Fabrication",
    "Glass Fabrication Software",
    "Rhino Wrangler",
  ],

  metadataBase: new URL("https://therhinowrangler.com"),

  openGraph: {
    title: "The Rhino Wrangler",
    description:
      "Professional RhinoFab, Glazier Studio, PartnerPak, and estimating software training.",
    url: "https://therhinowrangler.com",
    siteName: "The Rhino Wrangler",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Rhino Wrangler",
    description:
      "Professional RhinoFab, Glazier Studio, PartnerPak, and estimating software training.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
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

     
        </footer>
      </body>
    </html>
  );
}