import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";

type RequireActiveAccessProps = {
  children: React.ReactNode;
};

export default function RequireActiveAccess({
  children,
}: RequireActiveAccessProps) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkAccess() {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!mounted) return;

      if (userError || !user) {
        router.replace("/login");
        return;
      }

      const { data: access, error: accessError } = await supabase
        .from("member_access")
        .select("status")
        .eq("profile_id", user.id)
        .single();

      if (!mounted) return;

      if (accessError || !access) {
        router.replace("/pricing?noAccess=1");
        return;
      }

      if (access.status !== "active") {
        router.replace("/pricing?noAccess=1");
        return;
      }

      setChecking(false);
    }

    checkAccess();

    return () => {
      mounted = false;
    };
  }, [router]);

  if (checking) {
    return (
      <>
        <div className="guardShell">
          <div className="guardCard">
            <div className="spinner" />
            <h2>Checking Access</h2>
            <p>Please wait while we verify your membership.</p>
          </div>
        </div>

        <style jsx>{`
          .guardShell {
            min-height: calc(100vh - 80px);
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, #070b12 0%, #05070c 100%);
            padding: 24px;
          }

          .guardCard {
            width: 100%;
            max-width: 420px;
            border-radius: 24px;
            padding: 32px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.04);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          }

          .spinner {
            width: 42px;
            height: 42px;
            margin: 0 auto 18px;
            border-radius: 999px;
            border: 3px solid rgba(255, 255, 255, 0.18);
            border-top-color: #ffffff;
            animation: spin 0.8s linear infinite;
          }

          h2 {
            margin: 0 0 10px;
            color: #ffffff;
            font-size: 1.4rem;
            font-weight: 800;
          }

          p {
            margin: 0;
            color: rgba(255, 255, 255, 0.7);
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