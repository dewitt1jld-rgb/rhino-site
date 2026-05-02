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

  const isLoggedIn = !!profile;
  const hasActiveAccess = accessStatus === "active";

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

  const portalLabel = profile?.company_name
    ? `${profile.company_name} Training Portal`
    : profile?.first_name
    ? `${profile.first_name}'s Training Portal`
    : "Training Portal";

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbarInner">
          <Link href="/" className="brand" onClick={closeMenu}>
            <span className="brandLogoBox">
              <Image
                src="/logo-only1.png"
                alt="Rhino Wrangler logo"
                width={100}
                height={100}
                priority
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
                  href="/"
                  className={`navLink ${isActiveLink("/") ? "active" : ""}`}
                  style={{ fontSize: "1.5rem", fontWeight: 950 }}
                >
                  Explore Platform
                </Link>
              )}

             {!isLoggedIn && (
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
    className={`navLink ${
      isActiveLink("/classes") ? "active" : ""
    }`}
    style={{ fontSize: "1.5rem", fontWeight: 950 }}
  >
    Virtual Classes
  </Link>
)}

              <Link
                href="/dashboard"
                className={`navLink ${
                  isActiveLink("/dashboard") ? "active" : ""
                }`}
                style={{ fontSize: "1.5rem", fontWeight: 950 }}
              >
                Digital Training
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

                <Link href="/pricing" className="ctaButton">
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
                    <span className="portalSub">Training Portal</span>
                  </div>
                </Link>

                <Link href="/contact" className="ctaButton">
                  Request Online Training
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
              Explore Platform
            </Link>
          )}

        {!isLoggedIn && (
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

          <Link href="/contact" className="mobileLink" onClick={closeMenu}>
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
            {!loadingUser && !isLoggedIn && (
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

                <Link
                  href="/contact"
                  className="ctaButton mobileFull"
                  onClick={closeMenu}
                >
                  Request Online Training
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
          gap: 14px;
          color: #ffffff;
          text-decoration: none;
          width: auto;
          max-width: none;
        }

        .brandLogoBox {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          transform: translateY(3px);
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
        }

        .brandSub {
          margin-top: 6px;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          white-space: nowrap;
        }

        .centerGroup {
          justify-self: center;
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          gap: 38px;
        }

        .navLink {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
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
            gap: 10px;
          }

          .brandLogoBox img {
            width: 70px;
            height: 70px;
          }

          .brandTitle {
            font-size: 1rem;
          }

          .brandSub {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </>
  );
}