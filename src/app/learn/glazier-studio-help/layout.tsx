import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glazier Studio Help | GS Tutorials & Glass Shop Software Support",

  description:
    "Glazier Studio help, GS tutorials, project setup support, frame building help, metal groups, catalog parts, reports, drawings, and glass fabrication software training for glass shops.",

  alternates: {
    canonical: "https://therhinowrangler.com/learn/glazier-studio-help",
  },

  openGraph: {
    title: "Glazier Studio Help | GS Tutorials & Glass Shop Software Support",
    description:
      "Glazier Studio help resources, tutorials, written guides, video training, and software workflow support for glass fabrication teams.",
    url: "https://therhinowrangler.com/learn/glazier-studio-help",
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