import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [loadingPortal, setLoadingPortal] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [cancelMessage, setCancelMessage] = useState("");

  /*
  --------------------------------------------------
  MANAGE BILLING
  --------------------------------------------------
  */

  async function handleManageBilling() {
    try {
      setLoadingPortal(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        alert("Please log in first.");
        setLoadingPortal(false);
        return;
      }

      const response = await fetch("/api/customer-portal", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to open the billing portal."
        );

        setLoadingPortal(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert("No billing portal URL was returned.");
      setLoadingPortal(false);
    } catch (error) {
      console.error(
        "Billing portal error:",
        error
      );

      alert(
        "Something went wrong while opening the billing portal."
      );

      setLoadingPortal(false);
    }
  }

  /*
  --------------------------------------------------
  REQUEST CANCELLATION
  --------------------------------------------------
  */

  async function handleRequestCancellation() {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to request cancellation?\n\n" +
          "If you are still inside your 12-month minimum commitment, " +
          "your subscription will remain active and continue billing " +
          "until the commitment has been completed."
      );

      if (!confirmed) {
        return;
      }

      setLoadingCancel(true);
      setCancelMessage("");

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        alert("Please log in first.");
        setLoadingCancel(false);
        return;
      }

      const response = await fetch(
        "/api/request-cancellation",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.error ||
            "Unable to request cancellation."
        );

        setLoadingCancel(false);
        return;
      }

      let message =
        data.message ||
        "Your cancellation request has been received.";

      /*
      --------------------------------------------------
      FORMAT SCHEDULED CANCELLATION DATE
      --------------------------------------------------
      */

      if (data.scheduledCancelDate) {
        const cancelDate = new Date(
          data.scheduledCancelDate
        );

        if (!Number.isNaN(cancelDate.getTime())) {
          const formattedDate =
            cancelDate.toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

          message +=
            ` Your subscription is scheduled to end on ${formattedDate}.`;
        }
      }

      setCancelMessage(message);
      setLoadingCancel(false);
    } catch (error) {
      console.error(
        "Cancellation request error:",
        error
      );

      alert(
        "Something went wrong while requesting cancellation."
      );

      setLoadingCancel(false);
    }
  }

  /*
  --------------------------------------------------
  PAGE
  --------------------------------------------------
  */

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050b14",
        color: "white",
        padding: "80px 24px",
      }}
    >
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(245,158,11,0.25)",
          borderRadius: "24px",
          padding: "40px",
        }}
      >
        {/* CONTACT */}

        <p
          style={{
            color: "#f59e0b",
            fontWeight: 800,
          }}
        >
          CONTACT THE RHINO WRANGLER
        </p>

        <h1
          style={{
            fontSize: "44px",
            marginBottom: "20px",
          }}
        >
          Need help?
        </h1>

        <p
          style={{
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          If you need help with training access, virtual classes, RhinoFab,
          Glazier Studio, PartnerPak, or general support, reach out below.
        </p>

        <div
          style={{
            marginTop: "32px",
            lineHeight: 1.9,
          }}
        >
          <p>
            <strong>Email:</strong>{" "}
            Landon@TheRhinoWrangler.com
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            480-340-1653
          </p>

          <p>
            <strong>Business:</strong>{" "}
            The Rhino Wrangler
          </p>
        </div>

        {/* SUBSCRIPTION & BILLING */}

        <div
          style={{
            marginTop: "42px",
            paddingTop: "34px",
            borderTop:
              "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              color: "#f59e0b",
              fontWeight: 800,
              marginBottom: "10px",
            }}
          >
            SUBSCRIPTION & BILLING
          </p>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            Manage your plan
          </h2>

          <p
            style={{
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Update your payment method, view your billing information,
            explore upgrade options, or request cancellation of your
            recurring Rhino Wrangler subscription.
          </p>

          {/* BUTTONS */}

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {/* MANAGE BILLING */}

            <button
              type="button"
              onClick={handleManageBilling}
              disabled={loadingPortal || loadingCancel}
              style={{
                border: "none",
                borderRadius: "12px",
                padding: "14px 20px",
                background: "#f59e0b",
                color: "#111827",
                fontWeight: 900,
                fontSize: "16px",
                cursor:
                  loadingPortal || loadingCancel
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  loadingPortal || loadingCancel
                    ? 0.6
                    : 1,
              }}
            >
              {loadingPortal
                ? "Opening Billing Portal..."
                : "Manage Billing"}
            </button>

            {/* UPGRADE */}

            <a
              href="/pricing"
              style={{
                borderRadius: "12px",
                padding: "14px 20px",
                background:
                  "rgba(255,255,255,0.08)",
                color: "#ffffff",
                border:
                  "1px solid rgba(255,255,255,0.18)",
                fontWeight: 900,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View Upgrade Options
            </a>

            {/* CANCEL */}

            <button
              type="button"
              onClick={handleRequestCancellation}
              disabled={loadingPortal || loadingCancel}
              style={{
                border:
                  "1px solid rgba(248,113,113,0.45)",
                borderRadius: "12px",
                padding: "14px 20px",
                background:
                  "rgba(127,29,29,0.35)",
                color: "#fecaca",
                fontWeight: 900,
                fontSize: "16px",
                cursor:
                  loadingPortal || loadingCancel
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  loadingPortal || loadingCancel
                    ? 0.6
                    : 1,
              }}
            >
              {loadingCancel
                ? "Requesting Cancellation..."
                : "Request Cancellation"}
            </button>
          </div>

          {/* COMMITMENT NOTICE */}

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              borderRadius: "14px",
              background:
                "rgba(245,158,11,0.08)",
              border:
                "1px solid rgba(245,158,11,0.18)",
              color:
                "rgba(255,255,255,0.78)",
              lineHeight: 1.6,
            }}
          >
            <strong
              style={{
                color: "#ffffff",
              }}
            >
              12-month minimum commitment
            </strong>

            <div
              style={{
                marginTop: "6px",
              }}
            >
              Recurring Support Only and Support + Website plans are billed
              every three months and require a 12-month minimum commitment.
              Cancellation requests made during the commitment period will
              take effect after the commitment has been completed.
            </div>
          </div>

          {/* CANCELLATION SUCCESS */}

          {cancelMessage && (
            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                borderRadius: "14px",
                background:
                  "rgba(34,197,94,0.12)",
                border:
                  "1px solid rgba(34,197,94,0.28)",
                color: "#dcfce7",
                lineHeight: 1.6,
              }}
            >
              <strong>
                Cancellation Scheduled
              </strong>

              <div
                style={{
                  marginTop: "6px",
                }}
              >
                {cancelMessage}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}