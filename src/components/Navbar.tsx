import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Profile = {
  company_name: string | null;
  first_name: string | null;
};

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    async function loadUserProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setProfile(null);
        setLoadingUser(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("company_name, first_name")
        .eq("id", user.id)
        .single();

      setProfile(data ?? null);
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

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setMobileOpen(false);

  const isLoggedIn = !!profile;

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
            <div className="brandLogoWrap">
              <Image src="/logo-only1.png" alt="logo" width={100} height={100} />
            </div>

            <div className="brandBlock">
              <span className="brandTitle">The Rhino Wrangler</span>
              <span className="brandSub">Training Platform</span>
            </div>
          </Link>

          <nav className="desktopNav">
            <Link href="/" className={`navLink ${isActive("/") ? "active" : ""}`} style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>
              Home
            </Link>

            <Link href="/pricing" className={`navLink ${isActive("/pricing") ? "active" : ""}`} style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>
              Pricing
            </Link>

            <Link href="/dashboard" className={`navLink ${isActive("/dashboard") ? "active" : ""}`} style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>
              Training
            </Link>

            <Link href="/contact" className={`navLink ${isActive("/contact") ? "active" : ""}`} style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>
              Contact
            </Link>
          </nav>

          <Link
            href="/dashboard#main-search"
            className="searchButton"
            aria-label="Search training"
            title="Search training"
          >
            🔍
          </Link>

          <div className="desktopActions">
            {!loadingUser && !isLoggedIn && (
              <>
                <Link href="/login" className="loginButton" style={{ color: "#fff", fontWeight: 800 }}>
                  Member Login
                </Link>

                <Link href="/pricing" className="ctaButton" style={{ color: "#fff", fontWeight: 800 }}>
                  Get Access
                </Link>
              </>
            )}

            {!loadingUser && isLoggedIn && (
              <>
               <Link href="/dashboard" className="loginButton portalButton" style={{ color: "#fff", fontWeight: 800 }}>
                <div className="portalStack">
                <span className="portalCompany">
                  {profile?.company_name || profile?.first_name || "Account"}
                </span>
                <span className="portalSub">Training Portal</span>
                </div>
              </Link>

                <Link href="/contact" className="ctaButton" style={{ color: "#fff", fontWeight: 800 }}>
                  Request Online Training
                </Link>
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
          <Link href="/" className="mobileLink" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
            Home
          </Link>

          <Link href="/pricing" className="mobileLink" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
            Pricing
          </Link>

          <Link href="/dashboard" className="mobileLink" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
            Training
          </Link>

          <Link href="/contact" className="mobileLink" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
            Contact
          </Link>

          <Link
            href="/dashboard#main-search"
            className="searchButton mobileFull"
            onClick={closeMenu}
            aria-label="Search training"
            title="Search training"
          >
            🔍 Search Training
          </Link>

          <div className="mobileButtons">
            {!loadingUser && !isLoggedIn && (
              <>
                <Link href="/login" className="loginButton mobileFull" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
                  Member Login
                </Link>

                <Link href="/pricing" className="ctaButton mobileFull" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
                  Get Access
                </Link>
              </>
            )}

            {!loadingUser && isLoggedIn && (
              <>
                <Link href="/dashboard" className="loginButton mobileFull" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
                  {portalLabel}
                </Link>

                <Link href="/contact" className="ctaButton mobileFull" onClick={closeMenu} style={{ color: "#fff", fontWeight: 800 }}>
                  Request Online Training
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(8, 10, 14, 0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbarInner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 14px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
        }

        .brandLogoWrap {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-120px) translateY(25px);
        }

        .brandBlock {
          display: flex;
          flex-direction: column;
          line-height: 1.5;
          align-items: center;
          justify-content: center;
          transform: translateY(-50px);
        }

        .brandTitle {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .brandSub {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .searchButton {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.22s ease;
        }

        .searchButton:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.26);
          transform: translateY(-1px);
        }

        .desktopNav {
          display: flex;
          gap: 50px;
        }

        .navLink {
          padding: 10px 14px;
          font-size: 1.4rem;
          font-weight: 800;
          border-radius: 10px;
          text-decoration: none;
        }

        .navLink:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .desktopActions {
          display: flex;
          gap: 30px;
          transform: translateX(250px);
        }

        .loginButton,
        .ctaButton {
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          text-decoration: none;
          white-space: nowrap;
        }

        .loginButton:hover,
        .ctaButton:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .portalButton {
          max-width: 260px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .portalStack {
         display: flex;
         flex-direction: column;
         align-items: center;
        text-align: center;
         line-height: 1.2;
        }

        .portalCompany {
         color: #ffffff;
        font-size: 0.9rem;
        font-weight: 900;
        white-space: nowrap;
        }

        .portalSub {
         color: rgba(255, 255, 255, 0.7);
          font-size: 0.7rem;
         font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        }

        .menuButton {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menuButton span {
          width: 22px;
          height: 2px;
          background: white;
        }

        .mobileMenu {
          display: none;
          padding: 20px;
          background: rgba(8, 10, 14, 0.98);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobileMenu.show {
          display: block;
        }

        .mobileLink {
          display: block;
          padding: 12px 0;
          text-decoration: none;
        }

        .mobileButtons {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobileFull {
          width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 1050px) {
          .desktopNav,
          .desktopActions,
          .navbarInner > .searchButton {
            display: none;
          }

          .menuButton {
            display: flex;
          }

          .brandLogoWrap {
            transform: none;
            width: 70px;
            height: 70px;
          }

          .brandBlock {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}