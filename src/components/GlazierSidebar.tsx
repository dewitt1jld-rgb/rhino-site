import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

type SidebarItem = {
  title: string;
  slug: string;
  children?: SidebarItem[];
};

const glazierMenu: SidebarItem[] = [
{
  title: "All About Frames",
  slug: "/dashboard/glazier-studio/all-about-frames",
  children: [
    {
      title: "Alternate Bid",
      slug: "/dashboard/glazier-studio/all-about-frames/alternate-bid",
    },

        {
      title: "Building a Frame",
      slug: "/dashboard/glazier-studio/all-about-frames/building-a-frame",
    },

    {
      title: "Glazier Studio App",
      slug: "/dashboard/glazier-studio/all-about-frames/glazier-studio-app",
   },
  ],
},
{
  title: "Doors & Library Fab",
  slug: "/dashboard/glazier-studio/doors-and-library-fab",
  children: [
     {
      title: "Door Editor",
      slug: "/dashboard/glazier-studio/doors-and-library-fab/door-editor",
    },
    {
  title: "Door Fabrication",
  slug: "/dashboard/glazier-studio/doors-and-library-fab/door-fabrication",
},

    {
  title: "Library Fabrication",
  slug: "/dashboard/glazier-studio/doors-and-library-fab/library-fab",
},


  ],
},
{
  title: "Estimating",
  slug: "/dashboard/glazier-studio/estimating",
  children: [
    {
      title: "Overview",
      slug: "/dashboard/glazier-studio/estimating/overview",
    },
  ],
},
{
  title: "General Settings",
  slug: "/dashboard/glazier-studio/general-settings",
  children: [
 {
  title: "CAD Setup",
  slug: "/dashboard/glazier-studio/general-settings/cad-setup",
},
{
  title: "Customers & Vendors",
  slug: "/dashboard/glazier-studio/general-settings/customers-and-vendors",
},
{
  title: "Drill Bit Sizing",
  slug: "/dashboard/glazier-studio/general-settings/drill-bit-sizing",
},

{
  title: "File Tab",
  slug: "/dashboard/glazier-studio/general-settings/file-tab",
},

{
  title: "Help Tab",
  slug: "/dashboard/glazier-studio/general-settings/help-tab",
},
  ],
},
{
  title: "Metal Groups",
  slug: "/dashboard/glazier-studio/metal-groups",
  children: [
    {
      title: "Assembly Data",
      slug: "/dashboard/glazier-studio/metal-groups/assembly-data",
    },
    {
  title: "Catalog Parts",
  slug: "/dashboard/glazier-studio/metal-groups/catalog-parts",
},
{
  title: "Fabrication Options",
  slug: "/dashboard/glazier-studio/metal-groups/fabrication-options",
},

{
  title: "Fab Formula Builder",
  slug: "/dashboard/glazier-studio/metal-groups/fab-formula-builder",
},
  ],
},
{
  title: "Out of Shape Frames",
  slug: "/dashboard/glazier-studio/out-of-shape-frames",
  children: [
    {
      title: "Overview",
      slug: "/dashboard/glazier-studio/out-of-shape-frames/overview",
    },
  ],
},
{
  title: "Reports and Drawings",
  slug: "/dashboard/glazier-studio/reports-and-drawings",
  children: [
 {
  title: "Glass Fabrication",
  slug: "/dashboard/glazier-studio/reports-and-drawings/glass-fabrication",
},
  ],
},

];

function collectOpenSlugs(items: SidebarItem[], pathname: string): string[] {
  const openSlugs = new Set<string>();

  function walk(itemList: SidebarItem[], parents: string[] = []) {
    for (const item of itemList) {
      const isMatch =
        pathname === item.slug || pathname.startsWith(`${item.slug}/`);

      if (isMatch) {
        parents.forEach((parentSlug) => openSlugs.add(parentSlug));
        openSlugs.add(item.slug);
      }

      if (item.children) {
        walk(item.children, [...parents, item.slug]);
      }
    }
  }

  walk(items);
  return Array.from(openSlugs);
}

type SidebarNodeProps = {
  item: SidebarItem;
  level: number;
  pathname: string;
  openItems: string[];
  toggleOpen: (slug: string) => void;
};

function SidebarNode({
  item,
  level,
  pathname,
  openItems,
  toggleOpen,
}: SidebarNodeProps) {
  const hasChildren = !!item.children?.length;
  const isOpen = openItems.includes(item.slug);
  const isActive =
    pathname === item.slug || pathname.startsWith(`${item.slug}/`);

    const linkStyle =
  level === 1
    ? { color: "#f59e0b", fontWeight: 900 }
    : { color: "rgba(255, 255, 255, 0.82)" };

const toggleStyle =
  level === 1
    ? { color: "#f59e0b" }
    : { color: "rgba(255, 255, 255, 0.82)" };

  return (
    <div className={`nodeWrap level-${level}`}>
      <div className={`nodeRow ${isActive ? "activeRow" : ""}`}>
        {hasChildren ? (
        <button
  type="button"
  className={`toggleButton ${isOpen ? "open" : ""}`}
  style={toggleStyle}
  onClick={() => toggleOpen(item.slug)}
>
            <span className="chevron">{isOpen ? "▾" : "▸"}</span>
          </button>
        ) : (
          <span className="toggleSpacer" />
        )}

        {hasChildren ? (
      <button
  type="button"
  className={`nodeLink nodeButton ${isActive ? "activeLink" : ""}`}
  style={linkStyle}
  onClick={() => toggleOpen(item.slug)}
>
            {item.title}
          </button>
        ) : (
      <Link
  href={item.slug}
  className={`nodeLink ${isActive ? "activeLink" : ""}`}
  style={linkStyle}
>
            {item.title}
          </Link>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="childrenWrap">
          {item.children!.map((child) => (
            <SidebarNode
              key={child.slug}
              item={child}
              level={level + 1}
              pathname={pathname}
              openItems={openItems}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GlazierSidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  const defaultOpen = useMemo(
    () => collectOpenSlugs(glazierMenu, pathname),
    [pathname]
  );

  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  useEffect(() => {
    setOpenItems((prev) => {
      const merged = new Set([...prev, ...defaultOpen]);
      return Array.from(merged);
    });
  }, [defaultOpen]);

  const toggleOpen = (slug: string) => {
    setOpenItems((prev) =>
      prev.includes(slug)
        ? prev.filter((itemSlug) => itemSlug !== slug)
        : [...prev, slug]
    );
  };

  return (
    <>
      <aside className="sidebar trainingSidebar">
        <div className="sidebarHeader">
          <h2 className="sidebarTitle">Glazier Studio</h2>
          <p className="sidebarSubtitle">PartnerPak Training</p>
        </div>

        <div className="sidebarTree">
          {glazierMenu.map((item) => (
            <SidebarNode
              key={item.slug}
              item={item}
              level={1}
              pathname={pathname}
              openItems={openItems}
              toggleOpen={toggleOpen}
            />
          ))}
        </div>
      </aside>

      <style jsx>{`
        .sidebar {
          width: 320px;
          min-width: 320px;
          height: calc(100vh - 80px);
          position: sticky;
          top: 80px;
          overflow-y: auto;
          background: linear-gradient(
            180deg,
            rgba(10, 12, 18, 0.96) 0%,
            rgba(6, 8, 12, 0.98) 100%
          );
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 18px 32px;
          color: #ffffff;
        }

        .sidebarHeader {
          padding: 0 8px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 18px;
        }

        .sidebarTitle {
          color: #ffffff;
          font-size: 1.65rem;
          font-weight: 900;
          margin: 0;
        }

        .sidebarSubtitle {
          color: #f59e0b;
          font-size: 0.85rem;
          font-weight: 800;
          margin: 8px 0 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .sidebarTree {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nodeRow {
          display: flex;
          align-items: center;
          min-height: 42px;
          border-radius: 12px;
        }

        .nodeRow:hover,
        .activeRow {
          background: rgba(255, 255, 255, 0.06);
        }

        .toggleButton,
        .toggleSpacer {
          width: 30px;
          height: 30px;
          margin-right: 2px;
          flex-shrink: 0;
        }

      .toggleButton {
  border: none;
  background: transparent;
  color: #f59e0b;
  cursor: pointer;
}

        .nodeLink {
          flex: 1;
          color: #ffffff;
          text-decoration: none;
          font-weight: 800;
          padding: 8px 10px;
          border-radius: 10px;
          line-height: 1.35;
          cursor: pointer;
        }

        .nodeButton {
          border: none;
          background: transparent;
          text-align: left;
          width: 100%;
        }

        .nodeLink:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .activeLink {
          color: #f59e0b;
          background: rgba(255, 255, 255, 0.12);
        }

        .childrenWrap {
          margin-left: 16px;
          padding-left: 8px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

    .level-1 .nodeLink {
  font-size: 1rem;
  font-weight: 900;
  color: #f59e0b;
}

        .level-2 .nodeLink {
          font-size: 0.94rem;
          font-weight: 650;
          color: rgba(255, 255, 255, 0.82);
        }

        .level-1 > .nodeRow .nodeLink {
  color: #f59e0b;
  font-weight: 900;
}

.level-1 > .nodeRow .toggleButton {
  color: #f59e0b;
}

.level-2 > .nodeRow .nodeLink {
  color: rgba(255, 255, 255, 0.82);
  font-weight: 600;
}

.level-2 > .nodeRow .activeLink {
  color: #ffffff;
  background: rgba(245, 158, 11, 0.16);
  box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.28);
}
      `}</style>
    </>
  );
}