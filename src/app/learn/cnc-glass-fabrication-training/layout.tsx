import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CNC Glass Fabrication Training | RhinoFab, Glazier Studio & PartnerPak",

  description:
    "CNC glass fabrication training for shops using RhinoFab, Glazier Studio, PartnerPak, RhinoFab machines, fabrication software, troubleshooting guides, tutorial videos, and live virtual classes.",

  alternates: {
    canonical:
      "https://therhinowrangler.com/learn/cnc-glass-fabrication-training",
  },

  openGraph: {
    title:
      "CNC Glass Fabrication Training | RhinoFab, Glazier Studio & PartnerPak",
    description:
      "Training resources for CNC glass fabrication shops using RhinoFab machines, Glazier Studio, PartnerPak, tutorial videos, and support guides.",
    url:
      "https://therhinowrangler.com/learn/cnc-glass-fabrication-training",
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