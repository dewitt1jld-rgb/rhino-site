import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RhinoFab Training | Rhino 5000, 5600 & 5700 Training",

  description:
    "Professional RhinoFab training, Rhino 5000 training, Rhino 5600 training, Rhino 5700 training, calibration guides, troubleshooting, tutorial videos, and live virtual classes.",

  alternates: {
    canonical:
      "https://therhinowrangler.com/learn/rhinofab-training",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}