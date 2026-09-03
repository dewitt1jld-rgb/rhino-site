import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [loadingPortal, setLoadingPortal] =
    useState(false);

  /*
  --------------------------------------------------
  MANAGE EXISTING BILLING
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

      const response = await fetch(
        "/api/customer-portal",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${session.access_token}`,
          },
        }
      );

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

      alert(
        "No billing portal URL was returned."
      );

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
          background:
            "rgba(255,255,255,0.05)",
          border:
            "1px solid rgba(245,158,11,0.25)",
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
            color:
              "rgba(255,255,255,0.78)",
          }}
        >
          If you need help with training
          access, virtual classes, RhinoFab,
          Glazier Studio, PartnerPak, or
          general questions about The Rhino
          Wrangler, reach out below.
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

        {/* TRAINING ACCESS */}

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
            TRAINING ACCESS
          </p>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            Lifetime Training Access
          </h2>

          <p
            style={{
              lineHeight: 1.7,
              color:
                "rgba(255,255,255,0.72)",
            }}
          >
            New Rhino Wrangler training-platform
            access is sold as a one-time Lifetime
            Access purchase. There is no recurring
            training-platform subscription.
          </p>

          <div
            style={{
              marginTop: "24px",
            }}
          >
            <a
              href="/pricing"
              style={{
                borderRadius: "12px",
                padding: "14px 20px",
                background: "#f59e0b",
                color: "#111827",
                fontWeight: 900,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View Lifetime Access
            </a>
          </div>
        </div>

        {/* EXISTING BILLING */}

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
            EXISTING CUSTOMERS
          </p>

          <h2
            style={{
              fontSize: "28px",
              marginBottom: "12px",
            }}
          >
            Manage existing billing
          </h2>

          <p
            style={{
              lineHeight: 1.7,
              color:
                "rgba(255,255,255,0.72)",
            }}
          >
            If your company already has an
            existing recurring Rhino Wrangler
            agreement, you can use the billing
            portal to review your payment method
            and billing information.
          </p>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <button
              type="button"
              onClick={handleManageBilling}
              disabled={loadingPortal}
              style={{
                border: "none",
                borderRadius: "12px",
                padding: "14px 20px",
                background:
                  "rgba(255,255,255,0.08)",
                color: "#ffffff",
                borderColor:
                  "rgba(255,255,255,0.18)",
                borderStyle: "solid",
                borderWidth: "1px",
                fontWeight: 900,
                fontSize: "16px",
                cursor: loadingPortal
                  ? "not-allowed"
                  : "pointer",
                opacity: loadingPortal
                  ? 0.6
                  : 1,
              }}
            >
              {loadingPortal
                ? "Opening Billing Portal..."
                : "Manage Existing Billing"}
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              borderRadius: "14px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.1)",
              color:
                "rgba(255,255,255,0.68)",
              lineHeight: 1.6,
            }}
          >
            Existing recurring agreements are
            maintained for current customers.
            New recurring support contracts are
            not available for purchase through
            the website.
          </div>
        </div>
      </section>
    </main>
  );
}