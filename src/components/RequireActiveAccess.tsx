import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/lib/supabase";

type RequireActiveAccessProps = {
  children: React.ReactNode;
};

type AccessResponse = {
  status?: string;
  hasAccess?: boolean;
  source?: "company" | "member_access";
  reason?: string;
  company?: {
    id: string;
    name: string;
    customerNumber: string;
    seatLimit: number;
  };
  error?: string;
};

export default function RequireActiveAccess({
  children,
}: RequireActiveAccessProps) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    let mounted = true;

    async function checkAccess() {
      /*
      ---------------------------------------
      1. GET CURRENT SUPABASE SESSION
      ---------------------------------------
      */

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (
        sessionError ||
        !session?.user ||
        !session.access_token
      ) {
        router.replace("/login");
        return;
      }

      /*
      ---------------------------------------
      2. ASK OUR SERVER TO CHECK ACCESS
      ---------------------------------------

      This is important.

      The browser no longer decides access
      by reading member_access directly.

      Our API checks:

      NEW USERS:
      profiles -> company -> access_status

      OLD USERS:
      member_access -> status
      */

      try {
        const response = await fetch("/api/check-access", {
          method: "GET",

          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!mounted) return;

        if (response.status === 401) {
          router.replace("/login");
          return;
        }

        const access: AccessResponse =
          await response.json();

        if (!response.ok) {
          console.error(
            "Access check failed:",
            access
          );

          router.replace(
            "/account-inactive?noAccess=1"
          );

          return;
        }

        /*
        ---------------------------------------
        3. GRANT OR DENY ACCESS
        ---------------------------------------
        */

        if (
          access.hasAccess === true ||
          access.status === "active"
        ) {
          setChecking(false);
          return;
        }

        router.replace(
          "/account-inactive?noAccess=1"
        );
      } catch (error) {
        console.error(
          "Access verification error:",
          error
        );

        if (!mounted) return;

        router.replace(
          "/account-inactive?noAccess=1"
        );
      }
    }

    checkAccess();

    return () => {
      mounted = false;
    };
  }, [router, supabase]);

  if (checking) {
    return (
      <>
        <div className="guardShell">
          <div className="guardCard">
            <div className="spinner" />

            <h2>Checking Access</h2>

            <p>
              Please wait while we verify your membership.
            </p>
          </div>
        </div>

        <style jsx>{`
          .guardShell {
            min-height: calc(100vh - 80px);
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              180deg,
              #070b12 0%,
              #05070c 100%
            );
            padding: 24px;
          }

          .guardCard {
            width: 100%;
            max-width: 420px;
            border-radius: 24px;
            padding: 32px;
            text-align: center;
            border: 1px solid
              rgba(255, 255, 255, 0.08);
            background: rgba(
              255,
              255,
              255,
              0.04
            );
            box-shadow: 0 20px 50px
              rgba(0, 0, 0, 0.3);
          }

          .spinner {
            width: 42px;
            height: 42px;
            margin: 0 auto 18px;
            border-radius: 999px;
            border: 3px solid
              rgba(255, 255, 255, 0.18);
            border-top-color: #ffffff;
            animation: spin 0.8s
              linear infinite;
          }

          h2 {
            margin: 0 0 10px;
            color: #ffffff;
            font-size: 1.4rem;
            font-weight: 800;
          }

          p {
            margin: 0;
            color: rgba(
              255,
              255,
              255,
              0.7
            );
            line-height: 1.7;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </>
    );
  }

  return <>{children}</>;
}