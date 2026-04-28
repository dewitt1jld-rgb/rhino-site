import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!firstName.trim()) {
      setErrorMessage("Please enter your first name.");
      return;
    }

    if (!lastName.trim()) {
      setErrorMessage("Please enter your last name.");
      return;
    }

    if (!companyName.trim()) {
      setErrorMessage("Please enter your company name.");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          company_name: companyName.trim(),
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setSuccessMessage(
      "Account created successfully. A subscription is still required before training access is unlocked. Redirecting you to pricing now..."
    );

    setTimeout(() => {
      router.push("/pricing?newSignup=1");
    }, 1800);
  }

  return (
    <>
      <div className="pageShell">
        <div className="backgroundGlow glowOne" />
        <div className="backgroundGlow glowTwo" />

        <div className="signupCard">
          <div className="headerBlock">
            <div className="eyebrow">Create Your Account</div>
            <h1 className="pageTitle">Join The Rhino Wrangler</h1>
            <p className="pageText">
              Create your account below. Please note that creating an account does
              not automatically unlock training access. After signup, you will be
              redirected to pricing so you can review subscription options and
              preview available content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="formGrid">
            <div className="fieldRow twoCol">
              <div className="fieldGroup">
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Landon"
                  autoComplete="given-name"
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Dewitt"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="fieldGroup">
              <label htmlFor="companyName" className="label">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="input"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Sunfire Electrical"
                autoComplete="organization"
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="email" className="label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>

            <div className="fieldRow twoCol">
              <div className="fieldGroup">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="new-password"
                />
              </div>

              <div className="fieldGroup">
                <label htmlFor="confirmPassword" className="label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              </div>
            </div>

            {errorMessage ? <div className="message error">{errorMessage}</div> : null}
            {successMessage ? (
              <div className="message success">{successMessage}</div>
            ) : null}

            <button type="submit" className="primaryButton" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="footerText">
              Already have an account?{" "}
              <Link href="/login" className="inlineLink">
                Log in
              </Link>
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
          padding: 40px 18px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(88, 130, 255, 0.12), transparent 22%),
            radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.05), transparent 18%),
            linear-gradient(180deg, #070b12 0%, #05070c 100%);
        }

        .backgroundGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.35;
          pointer-events: none;
        }

        .glowOne {
          width: 260px;
          height: 260px;
          top: 80px;
          right: 80px;
          background: rgba(68, 110, 255, 0.22);
        }

        .glowTwo {
          width: 240px;
          height: 240px;
          left: 40px;
          bottom: 60px;
          background: rgba(255, 255, 255, 0.08);
        }

        .signupCard {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          border-radius: 28px;
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.045) 0%,
            rgba(255, 255, 255, 0.025) 100%
          );
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
          backdrop-filter: blur(14px);
        }

        .headerBlock {
          margin-bottom: 28px;
        }

        .eyebrow {
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pageTitle {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .pageText {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 680px;
        }

        .formGrid {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .fieldRow.twoCol {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .fieldGroup {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .label {
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .input {
          width: 100%;
          min-height: 54px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          padding: 0 16px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.34);
        }

        .input:focus {
          border-color: rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.05);
        }

        .message {
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 0.96rem;
          line-height: 1.6;
          font-weight: 600;
        }

        .message.error {
          color: #ffd8d8;
          background: rgba(255, 70, 70, 0.14);
          border: 1px solid rgba(255, 70, 70, 0.24);
        }

        .message.success {
          color: #e9ffe7;
          background: rgba(76, 175, 80, 0.14);
          border: 1px solid rgba(76, 175, 80, 0.24);
        }

        .primaryButton {
          min-height: 56px;
          border: none;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
        }

        .primaryButton:hover:not(:disabled) {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.16);
        }

        .primaryButton:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .footerText {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.96rem;
          text-align: center;
        }

        .inlineLink {
          color: #ffffff;
          font-weight: 800;
          text-decoration: none;
        }

        .inlineLink:hover {
          text-decoration: underline;
        }

        @media (max-width: 720px) {
          .signupCard {
            padding: 24px 18px;
            border-radius: 22px;
          }

          .fieldRow.twoCol {
            grid-template-columns: 1fr;
          }

          .pageShell {
            padding: 24px 14px;
          }
        }
      `}</style>
    </>
  );
}