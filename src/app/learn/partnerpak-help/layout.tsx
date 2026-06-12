import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PartnerPak Help | Partner Pak Support & PPAK Tutorials",

  description:
    "PartnerPak help, Partner Pak support, PPAK tutorials, frame building help, metal groups, catalog parts, doors, Library Fab, Fab Rules Library, reports, drawings, and fabrication workflow support for glass shops.",

  alternates: {
    canonical: "https://therhinowrangler.com/learn/partnerpak-help",
  },

  openGraph: {
    title: "PartnerPak Help | Partner Pak Support & PPAK Tutorials",
    description:
      "PartnerPak help resources, PPAK tutorials, written guides, video training, and fabrication workflow support for glass fabrication teams.",
    url: "https://therhinowrangler.com/learn/partnerpak-help",
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