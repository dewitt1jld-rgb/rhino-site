import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

type AccountType = "owner" | "employee";

export default function SignupPage() {
  const router = useRouter();

  const [accountType, setAccountType] = useState<AccountType>("owner");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [rhinoAccessCode, setRhinoAccessCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function changeAccountType(type: AccountType) {
    setAccountType(type);
    setErrorMessage("");
    setSuccessMessage("");
  }

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

    if (accountType === "employee" && !rhinoAccessCode.trim()) {
      setErrorMessage("Please enter your Rhino Access Code.");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter a password.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/register-employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountType,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          companyName: companyName.trim(),
          rhinoAccessCode:
            accountType === "employee"
              ? rhinoAccessCode.trim().toUpperCase()
              : undefined,
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const responseText = await response.text();

      let result: any = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          responseText || "The server returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to create your account."
        );
      }

if (accountType === "owner") {
  setSuccessMessage(
    "Your account has been created. Signing you in..."
  );

  const supabase = createClient();

  const { error: signInError } =
    await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

  if (signInError) {
    throw new Error(
      "Your account was created, but we could not sign you in automatically. Please log in manually."
    );
  }

  router.push("/pricing");

  return;
}

setSuccessMessage(
  `Account created successfully${
    result.company?.name
      ? ` and connected to ${result.company.name}`
      : ""
  }. Signing you in...`
);

const supabase = createClient();

const { error: signInError } =
  await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

if (signInError) {
  throw new Error(
    "Your account was created, but we could not sign you in automatically. Please log in manually."
  );
}

router.push("/dashboard");

return;
    } catch (error: any) {
      setErrorMessage(
        error?.message ||
          "Unable to create your account."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="pageShell">
        <div className="backgroundGlow glowOne" />
        <div className="backgroundGlow glowTwo" />

        <div className="signupCard">
          <div className="headerBlock">
            <div className="eyebrow">Create Your Account</div>

            <h1 className="pageTitle">
              Join The Rhino Wrangler
            </h1>

            <p className="pageText">
              Create your own Rhino Wrangler login. If your company is new,
              create the owner account first and purchase access after signing
              in. If your company already has access, join it using the Rhino
              Access Code provided by your company administrator.
            </p>
          </div>

          <div className="accountChoice">
            <button
              type="button"
              className={
                accountType === "owner"
                  ? "choiceButton active"
                  : "choiceButton"
              }
              onClick={() => changeAccountType("owner")}
            >
              <span className="choiceTitle">
                I&apos;m Purchasing for My Company
              </span>

              <span className="choiceText">
                Start a new company account. No Rhino Access Code is needed yet.
              </span>
            </button>

            <button
              type="button"
              className={
                accountType === "employee"
                  ? "choiceButton active"
                  : "choiceButton"
              }
              onClick={() => changeAccountType("employee")}
            >
              <span className="choiceTitle">
                My Company Already Has Access
              </span>

              <span className="choiceText">
                Join an existing company using its Rhino Access Code.
              </span>
            </button>
          </div>

          {accountType === "owner" ? (
            <div className="companyNotice ownerNotice">
              <strong>Starting a new company account</strong>

              <p>
                Create your login below. After signing in, you&apos;ll purchase
                Rhino Wrangler access. Once payment is complete, your company
                will receive a unique Rhino Access Code in the format
                <strong> RW-#####</strong> and a default limit of 7 users.
              </p>
            </div>
          ) : (
            <div className="companyNotice">
              <strong>Company access required</strong>

              <p>
                Your company must already have active Rhino Wrangler access.
                Ask your company administrator for the company name and
                Rhino Access Code associated with the account.
              </p>
            </div>
          )}

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
                  placeholder="John"
                  autoComplete="given-name"
                  required
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
                  placeholder="Doe"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="companyDivider">
              Company Information
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
                placeholder="Joe's Glass"
                autoComplete="organization"
                required
              />
            </div>

            {accountType === "employee" && (
              <div className="fieldGroup">
                <label htmlFor="rhinoAccessCode" className="label">
                  Rhino Access Code
                </label>

                <input
                  id="rhinoAccessCode"
                  type="text"
                  className="input codeInput"
                  value={rhinoAccessCode}
                  onChange={(e) =>
                    setRhinoAccessCode(e.target.value.toUpperCase())
                  }
                  placeholder="RW-12345"
                  autoComplete="off"
                  required
                />

                <div className="helperText">
                  This code was provided when your company purchased Rhino
                  Wrangler access.
                </div>
              </div>
            )}

            <div className="accountDivider">
              Your Login
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
                required
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
                  required
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
                  required
                />
              </div>
            </div>

            {errorMessage ? (
              <div className="message error">
                {errorMessage}
              </div>
            ) : null}

            {successMessage ? (
              <div className="message success">
                {successMessage}
              </div>
            ) : null}

            <button
              type="submit"
              className="primaryButton"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : accountType === "owner"
                  ? "Create Account & Continue"
                  : "Create Employee Account"}
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
            radial-gradient(
              circle at top right,
              rgba(88, 130, 255, 0.12),
              transparent 22%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(255, 255, 255, 0.05),
              transparent 18%
            ),
            linear-gradient(
              180deg,
              #070b12 0%,
              #05070c 100%
            );
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
          margin-bottom: 24px;
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

        .accountChoice {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 20px;
        }

        .choiceButton {
          padding: 18px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.035);
          color: white;
          text-align: left;
          cursor: pointer;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .choiceButton:hover {
          transform: translateY(-1px);
          border-color: rgba(245, 158, 11, 0.32);
        }

        .choiceButton.active {
          border-color: rgba(245, 158, 11, 0.7);
          background: rgba(245, 158, 11, 0.12);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.05);
        }

        .choiceTitle,
        .choiceText {
          display: block;
        }

        .choiceTitle {
          color: #ffffff;
          font-weight: 900;
          line-height: 1.35;
        }

        .choiceButton.active .choiceTitle {
          color: #fbbf24;
        }

        .choiceText {
          margin-top: 7px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .companyNotice {
          margin-bottom: 26px;
          padding: 18px 20px;
          border-radius: 16px;
          border: 1px solid rgba(245, 158, 11, 0.28);
          background: rgba(245, 158, 11, 0.08);
        }

        .ownerNotice {
          border-color: rgba(34, 197, 94, 0.25);
          background: rgba(34, 197, 94, 0.07);
        }

        .companyNotice strong {
          color: #fbbf24;
        }

        .ownerNotice > strong {
          color: #86efac;
        }

        .companyNotice > strong {
          display: block;
          margin-bottom: 6px;
          font-weight: 800;
        }

        .companyNotice p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
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
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .codeInput {
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
        }

        .input::placeholder {
          color: rgba(255, 255, 255, 0.34);
        }

        .input:focus {
          border-color: rgba(245, 158, 11, 0.55);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.06);
        }

        .companyDivider,
        .accountDivider {
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #f59e0b;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .helperText {
          margin-top: -2px;
          color: rgba(255, 255, 255, 0.48);
          font-size: 0.82rem;
          line-height: 1.5;
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
          background: #f59e0b;
          color: #111827;
          font-size: 1rem;
          font-weight: 900;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            opacity 0.2s ease;
        }

        .primaryButton:hover:not(:disabled) {
          transform: translateY(-1px);
          background: #fbbf24;
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
          color: #fbbf24;
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

          .accountChoice,
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