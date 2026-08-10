import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

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

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");

    if (!email.trim() || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      /*
      --------------------------------------------------
      1. SIGN USER IN
      --------------------------------------------------
      */

      const {
        data,
        error,
      } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user || !data.session) {
        throw new Error("Unable to verify your login.");
      }

      /*
      --------------------------------------------------
      2. CHECK RHINO WRANGLER ACCESS
      --------------------------------------------------

      IMPORTANT:

      We no longer check member_access directly here.

      /api/check-access now handles BOTH systems:

      NEW USERS
      profile -> company -> access_status

      LEGACY USERS
      member_access -> status
      */

      const response = await fetch("/api/check-access", {
        method: "GET",

        headers: {
          Authorization: `Bearer ${data.session.access_token}`,
        },
      });

      const access: AccessResponse = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          await supabase.auth.signOut();

          throw new Error(
            "Your login could not be verified. Please try again."
          );
        }

        throw new Error(
          access.error || "Could not verify your account access."
        );
      }

      /*
      --------------------------------------------------
      3. ACTIVE ACCESS
      --------------------------------------------------
      */

      if (
        access.hasAccess === true ||
        access.status === "active"
      ) {
        router.push("/dashboard");
        return;
      }

      /*
      --------------------------------------------------
      4. NO ACTIVE ACCESS
      --------------------------------------------------
      */

      router.push("/pricing?noAccess=1");
    } catch (error: any) {
      setErrorMessage(
        error?.message || "Unable to log in."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="pageShell">
        <div className="contentWrap">
          <div className="migrationBanner">
            <h2>
              Already purchased training on our previous website?
            </h2>

            <p>
              If you purchased Rhino Wrangler training before the new
              platform launched, you do <strong>not</strong> need to
              purchase again. Submit a transfer request and we'll move
              your access over.
            </p>

            <Link
              href="/transfer-access"
              className="migrationButton"
            >
              <span
                style={{
                  color: "#f59e0b",
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Transfer My Existing Access
              </span>
            </Link>
          </div>

          <div className="loginCard">
            <h1 className="title">
              Member Login
            </h1>

            <form
              onSubmit={handleLogin}
              className="form"
            >
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
              />

              <input
                type="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
              />

              {errorMessage && (
                <div className="error">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="button"
                disabled={loading}
              >
                {loading
                  ? "Logging in..."
                  : "Login"}
              </button>

              <div className="footer">
                Don’t have an account?{" "}
                <Link href="/signup">
                  Create one
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pageShell {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at top left,
              rgba(245, 158, 11, 0.08),
              transparent 32%
            ),
            #05070c;
          padding: 60px 20px;
        }

        .contentWrap {
          width: 100%;
          max-width: 760px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .migrationBanner {
          width: 100%;
          padding: 28px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(245, 158, 11, 0.18),
            rgba(15, 23, 42, 0.88)
          );
          border: 1px solid rgba(245, 158, 11, 0.42);
          text-align: center;
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
        }

        .migrationBanner h2 {
          margin: 0 0 12px;
          color: #f59e0b;
          font-size: 1.65rem;
          font-weight: 900;
        }

        .migrationBanner p {
          margin: 0 auto 20px;
          max-width: 620px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          font-size: 1rem;
        }

        .migrationButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f59e0b;
          padding: 13px 22px;
          border-radius: 12px;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .migrationButton span {
          color: #111827 !important;
          font-weight: 900;
          text-decoration: none;
        }

        .migrationButton:hover {
          background: #fbbf24;
          transform: translateY(-2px);
        }

        .migrationButton:hover span {
          color: #111827 !important;
        }

        .loginCard {
          width: 100%;
          max-width: 420px;
          padding: 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .title {
          color: white;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .input {
          height: 48px;
          border-radius: 10px;
          border: none;
          padding: 0 14px;
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .input:focus {
          outline: 1px solid rgba(245, 158, 11, 0.55);
        }

        .button {
          height: 48px;
          border-radius: 10px;
          border: none;
          background: white;
          color: black;
          font-weight: 700;
          cursor: pointer;
        }

        .button:hover:not(:disabled) {
          background: #f59e0b;
        }

        .button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .error {
          padding: 12px 14px;
          border-radius: 10px;
          color: #ffd8d8;
          background: rgba(255, 70, 70, 0.12);
          border: 1px solid rgba(255, 70, 70, 0.22);
          font-size: 14px;
        }

        .footer {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          text-align: center;
        }

        .footer a {
          color: white;
          font-weight: 700;
        }

        @media (max-width: 700px) {
          .pageShell {
            padding: 32px 16px;
          }

          .migrationBanner {
            padding: 22px;
          }

          .migrationBanner h2 {
            font-size: 1.35rem;
          }

          .loginCard {
            padding: 26px;
          }
        }
      `}</style>
    </>
  );
}