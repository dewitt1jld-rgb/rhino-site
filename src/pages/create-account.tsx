import {
  FormEvent,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function CreateAccountPage() {
  const router = useRouter();

  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    companyName,
    setCompanyName,
  ] = useState("");

  const [
    customerNumber,
    setCustomerNumber,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function handleSubmit(
    event: FormEvent
  ) {
    event.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/register-employee",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            firstName:
              firstName.trim(),

            lastName:
              lastName.trim(),

            email:
              email
                .trim()
                .toLowerCase(),

            password,

            companyName:
              companyName.trim(),

            customerNumber:
              customerNumber.trim(),
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to create account."
        );
      }

      setSuccess(
        `Account created successfully. You are now connected to ${result.company?.name || "your company"}.`
      );

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      setError(
        err?.message ||
          "Unable to create your account."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="shell">
        <div className="intro">
          <p className="eyebrow">
            Rhino Wrangler
          </p>

          <h1>
            Create Your Account
          </h1>

          <p>
            Create your own Rhino Wrangler
            login and connect it to your
            company's existing access.
          </p>
        </div>

        <div className="companyNote">
          <strong>
            Your company already owns access?
          </strong>

          <p>
            You do not need to purchase
            Rhino Wrangler again. Enter your
            company's name and customer
            number below. If the information
            matches an active company account
            and a seat is available, your new
            account will be connected
            automatically.
          </p>
        </div>

        <form
          className="card"
          onSubmit={handleSubmit}
        >
          <div className="nameGrid">
            <label>
              <span>
                First Name
              </span>

              <input
                type="text"
                value={firstName}
                onChange={(e) =>
                  setFirstName(
                    e.target.value
                  )
                }
                autoComplete="given-name"
                required
              />
            </label>

            <label>
              <span>
                Last Name
              </span>

              <input
                type="text"
                value={lastName}
                onChange={(e) =>
                  setLastName(
                    e.target.value
                  )
                }
                autoComplete="family-name"
                required
              />
            </label>
          </div>

          <label>
            <span>Email</span>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>

          <label>
            <span>Password</span>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              autoComplete="new-password"
              placeholder="Create a password"
              required
            />
          </label>

          <div className="divider">
            Company Access
          </div>

          <label>
            <span>
              Company Name
            </span>

            <input
              type="text"
              value={companyName}
              onChange={(e) =>
                setCompanyName(
                  e.target.value
                )
              }
              placeholder="Joe's Glass"
              required
            />
          </label>

          <label>
            <span>
              Customer Number
            </span>

            <input
              type="text"
              value={customerNumber}
              onChange={(e) =>
                setCustomerNumber(
                  e.target.value
                )
              }
              placeholder="06254"
              required
            />
          </label>

          <p className="helper">
            Your customer number is provided
            to your company when Rhino
            Wrangler access is purchased.
          </p>

          {error && (
            <div className="errorBox">
              {error}
            </div>
          )}

          {success && (
            <div className="successBox">
              {success}
            </div>
          )}

          <button
            type="submit"
            className="submitButton"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account →"}
          </button>

          <p className="loginText">
            Already have an account?{" "}
            <Link href="/login">
              Sign In
            </Link>
          </p>
        </form>
      </section>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          padding: 60px 20px;

          background:
            radial-gradient(
              circle at top left,
              rgba(
                245,
                158,
                11,
                0.12
              ),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #05070b 0%,
              #0d1118 45%,
              #05070b 100%
            );

          color: white;
        }

        .shell {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
        }

        .intro {
          margin-bottom: 26px;
        }

        .eyebrow {
          margin: 0 0 10px;

          color: #f59e0b;

          font-size: 14px;
          font-weight: 900;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }

        .intro h1 {
          margin: 0;

          font-size: clamp(
            38px,
            6vw,
            54px
          );

          line-height: 1.05;
        }

        .intro p:not(
            .eyebrow
          ) {
          margin-top: 16px;

          color: rgba(
            255,
            255,
            255,
            0.7
          );

          font-size: 18px;
          line-height: 1.7;
        }

        .companyNote {
          margin-bottom: 22px;

          padding: 20px;

          border: 1px solid
            rgba(
              245,
              158,
              11,
              0.28
            );

          border-radius: 18px;

          background: rgba(
            245,
            158,
            11,
            0.08
          );
        }

        .companyNote strong {
          color: #fbbf24;
        }

        .companyNote p {
          margin: 8px 0 0;

          color: rgba(
            255,
            255,
            255,
            0.72
          );

          line-height: 1.6;
        }

        .card {
          padding: 34px;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius: 24px;

          background: rgba(
            15,
            23,
            42,
            0.86
          );
        }

        .nameGrid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 16px;
        }

        label {
          display: block;

          margin-bottom: 18px;
        }

        label span {
          display: block;

          margin-bottom: 8px;

          color: rgba(
            255,
            255,
            255,
            0.82
          );

          font-size: 14px;
          font-weight: 850;
        }

        input {
          width: 100%;
          min-height: 50px;

          padding: 0 15px;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          border-radius: 12px;

          outline: none;

          background: rgba(
            5,
            7,
            11,
            0.72
          );

          color: white;

          font-size: 16px;
        }

        input:focus {
          border-color: rgba(
            245,
            158,
            11,
            0.7
          );

          box-shadow:
            0 0 0 3px
            rgba(
              245,
              158,
              11,
              0.08
            );
        }

        .divider {
          margin: 10px 0 22px;

          padding-top: 22px;

          border-top: 1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          color: #f59e0b;

          font-size: 13px;
          font-weight: 900;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .helper {
          margin:
            -6px 0 20px;

          color: rgba(
            255,
            255,
            255,
            0.5
          );

          font-size: 13px;
          line-height: 1.5;
        }

        .submitButton {
          width: 100%;
          min-height: 52px;

          border: none;
          border-radius: 12px;

          background: #f59e0b;
          color: #111827;

          font-size: 16px;
          font-weight: 950;

          cursor: pointer;
        }

        .submitButton:hover {
          background: #fbbf24;
        }

        .submitButton:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .errorBox,
        .successBox {
          margin-bottom: 18px;

          padding: 14px 16px;

          border-radius: 12px;

          line-height: 1.5;
        }

        .errorBox {
          border: 1px solid
            rgba(
              239,
              68,
              68,
              0.3
            );

          background: rgba(
            239,
            68,
            68,
            0.1
          );

          color: #fecaca;
        }

        .successBox {
          border: 1px solid
            rgba(
              34,
              197,
              94,
              0.3
            );

          background: rgba(
            34,
            197,
            94,
            0.1
          );

          color: #bbf7d0;
        }

        .loginText {
          margin:
            20px 0 0;

          color: rgba(
            255,
            255,
            255,
            0.56
          );

          text-align: center;
        }

        .loginText a {
          color: #fbbf24;
          font-weight: 900;
          text-decoration: none;
        }

        @media (
          max-width: 600px
        ) {
          .page {
            padding:
              36px 16px;
          }

          .card {
            padding: 24px;
          }

          .nameGrid {
            grid-template-columns:
              1fr;
          }
        }
      `}</style>
    </main>
  );
}