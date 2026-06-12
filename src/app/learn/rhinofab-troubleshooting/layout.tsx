import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RhinoFab Troubleshooting | Rhino 5000, 5600 & 5700 Support Guides",

  description:
    "RhinoFab troubleshooting guides for Rhino 5000, Rhino 5600, Rhino 5700, drill collisions, air manifold issues, coolant problems, photo eye alignment, failed machine connections, calibration problems, and production downtime.",

  alternates: {
    canonical:
      "https://therhinowrangler.com/learn/rhinofab-troubleshooting",
  },

  openGraph: {
    title:
      "RhinoFab Troubleshooting | Rhino 5000, 5600 & 5700 Support Guides",
    description:
      "Troubleshoot RhinoFab machine problems with structured guides, videos, and training resources.",
    url:
      "https://therhinowrangler.com/learn/rhinofab-troubleshooting",
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