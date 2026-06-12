import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Rhino 5700 Training & Support | Calibration, Troubleshooting & Tutorials",

  description:
    "Rhino 5700 training, Rhino 5700 support, calibration guides, troubleshooting help, tutorial videos, machine setup procedures, and CNC glass fabrication resources from The Rhino Wrangler.",

  alternates: {
    canonical: "https://therhinowrangler.com/learn/rhino-5700",
  },

  openGraph: {
    title:
      "Rhino 5700 Training & Support | Calibration, Troubleshooting & Tutorials",
    description:
      "Professional Rhino 5700 training, troubleshooting, calibration procedures, tutorial videos, and support resources.",
    url: "https://therhinowrangler.com/learn/rhino-5700",
    siteName: "The Rhino Wrangler",
    type: "website",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}