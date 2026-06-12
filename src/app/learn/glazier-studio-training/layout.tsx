import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Glazier Studio Training | GS Tutorials & Glass Fabrication Workflows",

  description:
    "Professional Glazier Studio training including project setup, frame building, metal groups, catalog parts, reports, drawings, fabrication workflows, and GS tutorials for glass fabrication teams.",

  alternates: {
    canonical:
      "https://therhinowrangler.com/learn/glazier-studio-training",
  },

  openGraph: {
    title:
      "Glazier Studio Training | GS Tutorials & Glass Fabrication Workflows",
    description:
      "Learn Glazier Studio with structured training, written guides, tutorial videos, and live virtual classes.",
    url:
      "https://therhinowrangler.com/learn/glazier-studio-training",
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