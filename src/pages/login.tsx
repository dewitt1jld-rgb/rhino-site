import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
      return;
    }

    const user = data.user;

    if (!user) {
      setLoading(false);
      setErrorMessage("User not found.");
      return;
    }

    // 🔍 Check member access
    const { data: access, error: accessError } = await supabase
      .from("member_access")
      .select("status")
      .eq("profile_id", user.id)
      .single();

    setLoading(false);

    if (accessError) {
      setErrorMessage("Could not verify access.");
      return;
    }

    if (access?.status === "active") {
      router.push("/dashboard");
    } else {
      router.push("/pricing?noAccess=1");
    }
  }

  return (
    <>
      <div className="pageShell">
        <div className="loginCard">
          <h1 className="title">Member Login</h1>

          <form onSubmit={handleLogin} className="form">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && <div className="error">{errorMessage}</div>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="footer">
              Don’t have an account?{" "}
              <Link href="/signup">Create one</Link>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .pageShell {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #05070c;
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

        .button {
          height: 48px;
          border-radius: 10px;
          border: none;
          background: white;
          color: black;
          font-weight: 700;
          cursor: pointer;
        }

        .error {
          color: #ff6b6b;
          font-size: 14px;
        }

        .footer {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          text-align: center;
        }

        a {
          color: white;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}