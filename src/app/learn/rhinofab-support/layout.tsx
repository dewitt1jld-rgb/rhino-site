import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RhinoFab Support | Rhino Fab Machine Help & Training",

  description:
    "RhinoFab support for Rhino Fab machines, Rhino 5000, Rhino 5600, Rhino 5700, Rhino 900, Rhino 950, Rhino 9500, Rhino 9600, calibration, troubleshooting, and CNC glass fabrication teams.",

  alternates: {
    canonical: "https://therhinowrangler.com/learn/rhinofab-support",
  },

  openGraph: {
    title: "RhinoFab Support | Rhino Fab Machine Help & Training",
    description:
      "RhinoFab support resources for glass shops using RhinoFab machines, calibration workflows, troubleshooting guides, and CNC glass fabrication equipment.",
    url: "https://therhinowrangler.com/learn/rhinofab-support",
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