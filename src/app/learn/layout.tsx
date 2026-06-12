import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Glass Fabrication Training & Support Resources | The Rhino Wrangler",

  description:
    "Browse RhinoFab training, RhinoFab support, Glazier Studio training, PartnerPak help, troubleshooting guides, tutorial videos, and CNC glass fabrication resources.",

  alternates: {
    canonical: "https://therhinowrangler.com/learn",
  },

  openGraph: {
    title:
      "Glass Fabrication Training & Support Resources | The Rhino Wrangler",
    description:
      "Training, support, troubleshooting, and help resources for RhinoFab, Glazier Studio, PartnerPak, and CNC glass fabrication.",
    url: "https://therhinowrangler.com/learn",
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