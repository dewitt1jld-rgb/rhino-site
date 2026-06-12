import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PartnerPak Training | PPAK Tutorials & Fabrication Training",

  description:
    "PartnerPak training covering frame building, metal groups, catalog parts, doors, Library Fab, Fab Rules Library, reports, drawings, fabrication options, and PPAK tutorials for fabrication teams.",

  alternates: {
    canonical:
      "https://therhinowrangler.com/learn/partnerpak-training",
  },

  openGraph: {
    title:
      "PartnerPak Training | PPAK Tutorials & Fabrication Training",
    description:
      "Learn PartnerPak workflows with training guides, videos, and fabrication-focused tutorials.",
    url:
      "https://therhinowrangler.com/learn/partnerpak-training",
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