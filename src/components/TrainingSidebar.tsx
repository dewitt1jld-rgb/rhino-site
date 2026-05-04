import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

type SidebarItem = {
  title: string;
  slug: string;
  children?: SidebarItem[];
};

const rhinoTrainingMenu: SidebarItem[] = [
  {
    title: "All Rhino Machines",
    slug: "/dashboard/rhino-training/all-rhino-machines",
    children: [
      {
        title: "Fab Job",
        slug: "/dashboard/rhino-training/fab-job",
      },
      {
        title: "Manual Cutting",
        slug: "/dashboard/rhino-training/manual-cutting",
      },
      {
        title: "System Settings",
        slug: "/dashboard/rhino-training/system-settings",
      },
      {
        title: "Home Axis",
        slug: "/dashboard/rhino-training/home-axis",
      },
      {
        title: "Fab Frames",
        slug: "/dashboard/rhino-training/fab-frames",
      },
      {
        title: "Exit",
        slug: "/dashboard/rhino-training/exit",
      },
    ],
  },
  {
    title: "Machine Setup",
    slug: "/dashboard/rhino-training/machine-setup/i-o-testing",
    children: [
      {
        title: "I/O Testing",
        slug: "/dashboard/rhino-training/machine-setup/i-o-testing",
      },
      {
        title: "Change Saw Blade",
        slug: "/dashboard/rhino-training/machine-setup/change-saw-blade",
      },
      {
        title: "Jog Axis",
        slug: "/dashboard/rhino-training/machine-setup/jog-axis",
      },
      {
        title: "Axis Parameters",
        slug: "/dashboard/rhino-training/machine-setup/axis-parameters",
      },
      {
        title: "Fab Test",
        slug: "/dashboard/rhino-training/machine-setup/fab-test",
      },
      {
        title: "Old Fab Test",
        slug: "/dashboard/rhino-training/machine-setup/old-fab-test",
      },
      {
        title: "Cut Test",
        slug: "/dashboard/rhino-training/machine-setup/cut-test",
      },
    ],
  },
  {
    title: "Calibrate",
    slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-pusher",
    children: [
      {
        title: "Calibrate Pusher",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-pusher",
      },
      {
        title: "Calibrate Plunger",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-plunger",
      },
      {
        title: "Calibrate Drills",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-drills",
      },
      {
        title: "Calibrate Saw",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-saw-angle",
      },
      {
        title: "Set Calibration Torque",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/set-calibration-torque",
      },
      {
        title: "Calibrate Miter Cut Length",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-miter-cut-length",
      },
      {
        title: "Calibrate Rollers",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-rollers",
      },
      {
        title: "Calibrate Robot",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-robot",
      },
      {
        title: "Calibrate Carousel",
        slug: "/dashboard/rhino-training/machine-setup/calibrate/calibrate-carousel",
      },
    ],
  },
  {
    title: "Databases",
    slug: "/dashboard/rhino-training/machine-setup/databases/parts-library",
    children: [
      {
        title: "Parts Library",
        slug: "/dashboard/rhino-training/machine-setup/databases/parts-library",
      },
      {
        title: "Tool Library",
        slug: "/dashboard/rhino-training/machine-setup/databases/tool-library",
      },
      {
        title: "Stock Inventory",
        slug: "/dashboard/rhino-training/machine-setup/databases/stock-inventory",
      },
      {
        title: "Chuck Library",
        slug: "/dashboard/rhino-training/machine-setup/databases/chuck-library",
      },
      {
        title: "Drop Inventory",
        slug: "/dashboard/rhino-training/machine-setup/databases/drop-inventory",
      },
      {
        title: "Reports",
        slug: "/dashboard/rhino-training/machine-setup/databases/reports",
      },
      {
        title: "Racks",
        slug: "/dashboard/rhino-training/machine-setup/databases/racks",
      },
      {
        title: "Carousel Library",
        slug: "/dashboard/rhino-training/machine-setup/databases/carousel-library",
      },
    ],
  },
  {
    title: "5600/5700 Calibration",
    slug: "/dashboard/rhino-training/5600-5700-calibration",
    children: [
      {
        title: "Cal. Rotational Spindles",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-rotational-spindles",
      },
      {
        title: "Cal. Saw Cut Angle",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-saw-cut-angle",
      },
      {
        title: "Cal. Pusher",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-pusher",
      },
      {
        title: "Cal. Miter Cut Length",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-miter-cut-length",
      },
      {
        title: "Cal. Tool Rack",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-tool-rack",
      },
      {
        title: "Set Calibration Torque",
        slug: "/dashboard/rhino-training/5600-5700-calibration/set-calibration-torque",
      },
      {
        title: "Cal. Drills",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-drills",
      },
      {
        title: "Cal. Rollers",
        slug: "/dashboard/rhino-training/5600-5700-calibration/cal-rollers",
      },
      {
        title: "How a Dial Ind. Works",
        slug: "/dashboard/rhino-training/5600-5700-calibration/how-a-dial-ind-works",
      },
    ],
  },
  {
    title: "Spindle Maintenance",
    slug: "/dashboard/rhino-training/spindle-maintenance",
  },
  {
    title: "Troubleshooting",
    slug: "/dashboard/rhino-training/troubleshooting",
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

  return (
    <div className={`nodeWrap level-${level}`}>
      <div className={`nodeRow ${isActive ? "activeRow" : ""}`}>
        {hasChildren ? (
          <button
            type="button"
            className={`toggleButton ${isOpen ? "open" : ""}`}
            onClick={() => toggleOpen(item.slug)}
            aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
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
            onClick={() => toggleOpen(item.slug)}
          >
            {item.title}
          </button>
        ) : (
          <Link
            href={item.slug}
            className={`nodeLink ${isActive ? "activeLink" : ""}`}
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

export default function TrainingSidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  const defaultOpen = useMemo(
    () => collectOpenSlugs(rhinoTrainingMenu, pathname),
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
          <h2 className="sidebarTitle">Rhino Training</h2>
        </div>

        <div className="sidebarTree">
          {rhinoTrainingMenu.map((item) => (
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
          font-size: 1.8rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
        }

        .sidebarTree {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nodeWrap {
          display: flex;
          flex-direction: column;
        }

        .nodeRow {
          display: flex;
          align-items: center;
          min-height: 42px;
          border-radius: 12px;
          transition: background 0.2s ease;
          cursor: pointer;
        }

        .nodeRow:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .activeRow {
          background: rgba(255, 255, 255, 0.07);
        }

        .toggleButton {
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 8px;
          margin-right: 2px;
          flex-shrink: 0;
        }

        .toggleButton:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .toggleSpacer {
          display: inline-block;
          width: 30px;
          height: 30px;
          margin-right: 2px;
          flex-shrink: 0;
        }

        .chevron {
          font-size: 0.95rem;
          line-height: 1;
        }

        .nodeLink {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          line-height: 1.35;
          padding: 8px 10px;
          border-radius: 10px;
          flex: 1;
          cursor: pointer;
        }

        .nodeButton {
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
        }

        .nodeLink:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .activeLink {
          background: rgba(255, 255, 255, 0.14);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        }

        .childrenWrap {
          margin-left: 16px;
          padding-left: 8px;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        .level-1 .nodeLink {
          font-size: 1rem;
          font-weight: 800;
        }

        .level-2 .nodeLink {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .level-3 .nodeLink {
          font-size: 0.91rem;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .sidebar {
            width: 280px;
            min-width: 280px;
          }
        }
      `}</style>
    </>
  );
}