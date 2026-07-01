import { useState } from "react";
import Link from "next/link";

export default function TransferAccessPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/transfer-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page">
      <div className="card">
        <div className="hero">
          <h1>Transfer Existing Training Access</h1>

          <p className="subtitle">
            Already purchased Rhino Wrangler training on our previous website?
          </p>

          <p>
            Welcome back! If you previously purchased Rhino Wrangler training
            before we launched our new platform, you do{" "}
            <strong>not need to purchase access again.</strong>
          </p>

          <p>
            Complete the form below and we'll verify your previous purchase and
            transfer your access to the new training portal as quickly as
            possible.
          </p>
        </div>

        {success && (
          <div className="successBox">
            <h2>✅ Request Received</h2>
            <p>
              Thank you! We've received your transfer request. We'll review your
              previous purchase and migrate your training access as quickly as
              possible.
            </p>
            <p>You'll receive an email once everything is ready.</p>
          </div>
        )}

        {error && <div className="errorBox">{error}</div>}

        {!success && (
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div>
                <label>First Name *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Last Name *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="full">
                <label>Email Used On Previous Website *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="full">
                <label>Company Name *</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="full">
                <label>Phone Number (Optional)</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="full">
                <label>Additional Notes (Optional)</label>
                <textarea
                  rows={5}
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="submitButton" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Transfer Request"}
            </button>
          </form>
        )}

        <div className="backLink">
          <Link href="/login">← Back to Login</Link>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background:
            radial-gradient(circle at top left, rgba(245,158,11,.08), transparent 30%),
            linear-gradient(135deg,#05070b 0%,#0d1118 45%,#05070b 100%);
          color: white;
        }

        .card {
          width: 100%;
          max-width: 900px;
          background: rgba(15,23,42,.82);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px;
          padding: 40px;
          backdrop-filter: blur(14px);
        }

        h1 {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #f59e0b;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero p {
          color: rgba(255,255,255,.75);
          line-height: 1.7;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .full {
          grid-column: span 2;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
        }

        input,
        textarea {
          width: 100%;
          background: #111827;
          color: white;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
          padding: 14px;
          font-size: 16px;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #f59e0b;
        }

        .submitButton {
          margin-top: 30px;
          background: #f59e0b;
          color: #111827;
          border: none;
          padding: 16px 28px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          transition: .2s;
        }

        .submitButton:hover {
          transform: translateY(-2px);
          background: #fbbf24;
        }

        .submitButton:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .successBox {
          margin-top: 34px;
          padding: 28px;
          border-radius: 16px;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
        }

        .successBox h2 {
          margin: 0 0 12px;
          color: #22c55e;
        }

        .successBox p {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.7;
        }

        .errorBox {
          margin-top: 24px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fecaca;
        }

        .backLink {
          margin-top: 30px;
        }

        .backLink a {
          color: #f59e0b;
          text-decoration: none;
          font-weight: 700;
        }

        @media(max-width:700px){
          .grid{
            grid-template-columns:1fr;
          }

          .full{
            grid-column:span 1;
          }

          .card{
            padding:24px;
          }

          h1{
            font-size:32px;
          }
        }
      `}</style>
    </main>
  );
}