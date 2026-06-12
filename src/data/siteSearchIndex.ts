import { glazierMenu } from "@/components/GlazierSidebar";
import { RhinoTrainingMenu } from "@/components/TrainingSidebar";

type NavItem = {
  title: string;
  slug?: string;
  children?: NavItem[];
};

export type SiteSearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  tags: string[];
};

function flattenNavItems(
  items: NavItem[],
  category: string,
  parentTitles: string[] = []
): SiteSearchItem[] {
  return items.flatMap((item) => {
    const pathTitles = [...parentTitles, item.title];

const hasChildren = !!item.children?.length;

const current =
  item.slug && !hasChildren
    ? [
        {
          title: item.title,
          href: item.slug,
          category,
          description: pathTitles.join(" / "),
          tags: pathTitles.map((title) => title.toLowerCase()),
        },
      ]
    : [];


    const children = item.children
  ? flattenNavItems(item.children, category, pathTitles)
  : [];
    return [...current, ...children];
  });
}

export const siteSearchIndex: SiteSearchItem[] = [
  ...flattenNavItems(glazierMenu, "Glazier Studio & PartnerPak"),
  ...flattenNavItems(RhinoTrainingMenu, "Rhino Training"),
  {
    title: "Tutorial Videos",
    href: "/dashboard/tutorial-videos",
    category: "Tutorial Videos",
    description: "Searchable video library with quick training tutorials.",
    tags: ["videos", "tutorials", "training videos"],
  },
  {
    title: "Virtual Classes",
    href: "/pricing",
    category: "Virtual Classes",
    description: "Live Rhino Wrangler class schedule and enrollment.",
    tags: ["classes", "masterclass", "virtual training"],
  },
];