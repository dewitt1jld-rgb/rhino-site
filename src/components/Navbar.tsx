import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";
import SearchModal from "@/components/SearchModal";

const supabase = createClient();

type Profile = {
  company_name: string | null;
  first_name: string | null;
};

export default function Navbar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [accessStatus, setAccessStatus] = useState<string | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
 

  const isLoggedIn = !!profile;
  const hasActiveAccess = accessStatus === "active";
  const isAdmin =
  userEmail?.trim().toLowerCase() === "landon@therhinowrangler.com";

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    async function loadUserProfile() {
      setLoadingUser(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserEmail(session?.user?.email || null);

      const user = session?.user;

      if (!user) {
        setProfile(null);
        setAccessStatus(null);
        setLoadingUser(false);
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("company_name, first_name")
        .eq("id", user.id)
        .single();

      const { data: accessData } = await supabase
        .from("member_access")
        .select("status")
        .eq("profile_id", user.id)
        .maybeSingle();

      setProfile(profileData ?? null);
      setAccessStatus(accessData?.status ?? null);
      setLoadingUser(false);
    }

    loadUserProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUserProfile();
    });

    return () => subscription.unsubscribe();
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setMobileOpen(false);

const portalLabel = (
  <div className="portalLabel">
    <div className="companyName">
      {profile?.company_name || profile?.first_name || ""}
    </div>
    <div className="portalSub">Dashboard</div>
  </div>
);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbarInner">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="brandLogoBox">
              <img
                src="https://rhino-training-cdn.b-cdn.net/logo-content-media/images/rhino-logo.png"
                alt="Rhino Wrangler logo"
                width={150}
                height={150}
              
              />
            </span>

            <span className="brandTextBox">
              <span className="brandTitle">The Rhino Wrangler</span>
              <span className="brandSub">Training Platform</span>
            </span>
          </Link>

          <div className="centerGroup">
            <nav className="desktopNav">
              {!hasActiveAccess && (
<Link
  href="/explore"
  className={`navLink stackedNavLink ${
    isActiveLink("/explore") ? "active" : ""
  }`}
>
  <span>Explore</span>
  <span>Platform</span>
</Link>
              )}

{!hasActiveAccess && (
  <Link
    href="/pricing"
    className={`navLink ${
      isActiveLink("/pricing") ? "active" : ""
    }`}
    style={{ fontSize: "1.5rem", fontWeight: 950 }}
  >
    Pricing
  </Link>
)}

{isLoggedIn && (
<Link
  href="/classes"
  className={`navLink ${isActiveLink("/classes") ? "active" : ""}`}
  style={{
    fontSize: "1.5rem",
    fontWeight: 950,
     display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 1.05,
  }}
>
  <span style={{ display: "block", color: "#f59e0b" }}>
    Virtual Class
  </span>

  <span style={{ display: "block", color: "#f59e0b" }}>
    Schedule
  </span>
</Link>
)}

              <Link
                href="/dashboard"
                className={`navLink ${
                  isActiveLink("/dashboard") ? "active" : ""
                }`}
                style={{ fontSize: "1.5rem", fontWeight: 950 }}
              >
                Training pages
              </Link>

              <Link
                href="/contact"
                className={`navLink ${
                  isActiveLink("/contact") ? "active" : ""
                }`}
                style={{ fontSize: "1.5rem", fontWeight: 950 }}
              >
                Contact
              </Link>

              {isAdmin && (
  <div className="adminDropdown">
    <button className="adminDropdownButton">
      Admin ▾
    </button>

    <div className="adminDropdownMenu">
      <Link href="/dashboard/admin" className="adminDropdownLink">
        Member Admin
      </Link>

      <Link href="/dashboard/class-admin" className="adminDropdownLink">
        Class Reservations
      </Link>
    </div>
  </div>
)}
              
                          </nav>

            <button
              onClick={() => setSearchOpen(true)}
              className="searchButton"
              aria-label="Search training"
              title="Search training"
            >
              🔍
            </button>

            
          </div>

          <div className="desktopActions">
            {!loadingUser && !isLoggedIn && (
              <>
                <Link href="/login" className="loginButton">
                  Member Login
                </Link>

              <Link href="/signup">
               Get Access
              </Link>
              </>
            )}

            {!loadingUser && isLoggedIn && (
              <>
                <Link href="/dashboard" className="loginButton portalButton">
                  <div className="portalStack">
                    <span className="portalCompany">
                      {profile?.company_name || profile?.first_name || "Account"}
                    </span>
                    <span className="portalSub">Dashboard</span>
                  </div>
                </Link>

               
                <button onClick={handleLogout} className="logoutBtn">
                  Logout
                </button>
              </>
            )}
          </div>

          <button
            className={`menuButton ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobileMenu ${mobileOpen ? "show" : ""}`}>
          {!hasActiveAccess && (
            <Link href="/" className="mobileLink" onClick={closeMenu}>
<span>Explore</span>
<span>Platform</span>            </Link>
          )}

{!hasActiveAccess && (
  <Link href="/pricing" className="mobileLink" onClick={closeMenu}>
    Pricing
  </Link>
)}

{isLoggedIn && (
  <Link href="/classes" className="mobileLink" onClick={closeMenu}>
    Virtual Classes
  </Link>
)}

          <Link href="/dashboard" className="mobileLink" onClick={closeMenu}>
            Digital Training
          </Link>

      <Link href="/contact">
  Contact
</Link>
          

          <button
            className="searchButton mobileFull"
            onClick={() => {
              closeMenu();
              setSearchOpen(true);
            }}
          >
            🔍 Search Training
          </button>

          <div className="mobileButtons">
            {!loadingUser && !hasActiveAccess && (
              <>
                <Link
                  href="/login"
                  className="loginButton mobileFull"
                  onClick={closeMenu}
                >
                  Member Login
                </Link>

                <Link
                  href="/pricing"
                  className="ctaButton mobileFull"
                  onClick={closeMenu}
                >
                  Get Access
                </Link>
              </>
            )}

            {!loadingUser && isLoggedIn && (
              <>
                <Link
                  href="/dashboard"
                  className="loginButton mobileFull"
                  onClick={closeMenu}
                >
                  {portalLabel}
                </Link>

              
                <button
                  onClick={handleLogout}
                  className="logoutBtn mobileFull"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #1f2329;
          color: #ffffff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbarInner {
          width: 100%;
          min-height: 86px;
          display: grid;
          grid-template-columns: minmax(320px, 1fr) auto minmax(320px, 1fr);
          align-items: center;
          gap: 24px;
          padding: 0 36px;
        }

        .brand {
          justify-self: start;
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          color: #ffffff;
          text-decoration: none;
          width: auto;
          max-width: 360px;
          height: 64px;
        }

        .brandLogoBox {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          transform: translateY(15px);
        }

        .brandTextBox {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          line-height: 1.05;
          flex: 0 0 auto;
        }

        .brandTitle {
          font-size: 1.35rem;
          font-weight: 950;
          letter-spacing: -0.03em;
          white-space: nowrap;
          transform: translate(20px, -35px);
        }

        .brandSub {
          margin-top: 6px;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          white-space: nowrap;
          transform: translate(40px, -35px);
        }

        .centerGroup {
          justify-self: center;
          display: flex;
          align-items: center;
          gap: 26px;
        }
          .adminDropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}
  .portalLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
}

.companyName {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
}

.portalSub {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f59e0b;
  text-align: center;
}

.adminDropdownButton {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 950;
  cursor: pointer;
  padding: 10px 4px;
}

.adminDropdownMenu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 220px;
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 8px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.32);
  z-index: 9999;
}

.adminDropdown:hover .adminDropdownMenu {
  display: grid;
}

.adminDropdownLink {
  color: white;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 10px;
  font-weight: 800;
  white-space: nowrap;
}

.adminDropdownLink:hover {
  background: rgba(255, 255, 255, 0.1);
}
.navLink {
  display: flex;
  flex-direction: column;
  align-items: center;   /* ✅ THIS keeps it centered */
  justify-content: center;
  text-align: center;
  line-height: 1.05;
}

.navMain {
  color: #ffffff;        /* top line stays white */
}

.navSubLine {
  color: #f59e0b;        /* bottom line gold */
}
     .desktopNav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(28px, 4vw, 72px);
}

.stackedNavLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.05;
  text-align: center;
  white-space: normal;
  font-size: 1.5rem;
  font-weight: 950;
}

        .navLink {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
          .stackedNavLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: normal;
  line-height: 1.05;
  gap: 2px;
  font-size: 1.5rem;
  font-weight: 950;
  text-align: center;
}

.stackedNavLink span {
  display: block;
}

        .navLink:hover,
        .navLink.active {
          color: #f59e0b;
        }

        .searchButton {
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .searchButton:hover {
          background: rgba(245, 158, 11, 0.18);
          border-color: rgba(245, 158, 11, 0.5);
        }

        .desktopActions {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .loginButton,
        .ctaButton {
          color: #ffffff;
          text-decoration: none;
          font-weight: 900;
          font-size: 1rem;
          white-space: nowrap;
        }

        .portalButton {
          text-align: center;
        }

        .portalStack {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }

        .portalCompany {
          font-weight: 950;
          font-size: 0.95rem;
        }

        .portalSub {
          margin-top: 4px;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
        }

        .logoutBtn {
          border: none;
          border-radius: 10px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-weight: 800;
          cursor: pointer;
        }

        .logoutBtn:hover {
          background: rgba(255, 255, 255, 0.14);
        }

        .menuButton {
          display: none;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .menuButton span {
          display: block;
          width: 26px;
          height: 3px;
          margin: 5px 0;
          background: #ffffff;
          border-radius: 999px;
        }

        .mobileMenu {
          display: none;
        }

        @media (max-width: 1250px) {
          .navbarInner {
            grid-template-columns: auto 1fr auto;
          }

          .centerGroup,
          .desktopActions {
            display: none;
          }

          .menuButton {
            display: block;
            justify-self: end;
          }

          .mobileMenu {
            display: none;
            padding: 18px 24px 24px;
            background: #1f2329;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .mobileMenu.show {
            display: grid;
            gap: 14px;
          }

          .mobileLink,
          .mobileFull {
            width: 100%;
            color: #ffffff;
            text-decoration: none;
            font-weight: 900;
            padding: 12px 0;
            text-align: left;
          }

          .mobileButtons {
            display: grid;
            gap: 12px;
            margin-top: 10px;
          }

          .searchButton.mobileFull {
            width: 100%;
            height: auto;
            padding: 12px;
            justify-content: flex-start;
          }
        }

        @media (max-width: 650px) {
          .navbarInner {
            min-height: 76px;
            padding: 0 16px;
          }

         .brand {
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 340px;
  flex-shrink: 0;
}

          .brandLogoBox img {
           width: 95px;
  height: auto;
  flex-shrink: 0;
}

          .brandTitle {
          display: flex;
  flex-direction: column;
  line-height: 1.05;
  white-space: nowrap;
}

          .brandSub {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </>
  );
}