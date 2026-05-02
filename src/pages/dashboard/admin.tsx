import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type MemberAccess = {
  profile_id: string;
  status: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  profiles?: {
    email?: string;
    company_name?: string;
  };
};

export default function AdminDashboardPage() {
  const [members, setMembers] = useState<MemberAccess[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [sortBy, setSortBy] = useState<"company" | "email" | "status">("company");

  async function loadMembers() {
    setLoading(true);
    setError("");

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      setError("You must be logged in.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/admin/members", {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error || "Failed to load members.");
      setLoading(false);
      return;
    }

    setMembers(result.members || []);
    setLoading(false);
  }

  async function updateStatus(profile_id: string, status: "active" | "inactive") {
    const confirmChange = window.confirm(
      `Are you sure you want to set this user to ${status}?`
    );

    if (!confirmChange) return;

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("You must be logged in.");
      return;
    }

    const response = await fetch("/api/admin/members", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ profile_id, status }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Failed to update user.");
      return;
    }

    await loadMembers();
  }

  useEffect(() => {
    loadMembers();
  }, []);

  const filteredMembers = members
    .filter((member) => {
      const company = member.profiles?.company_name || "";
      const email = member.profiles?.email || "";
      const profileId = member.profile_id || "";
      const customerId = member.stripe_customer_id || "";
      const subscriptionId = member.stripe_subscription_id || "";

      const searchText = `${company} ${email} ${profileId} ${customerId} ${subscriptionId}`.toLowerCase();

      const matchesSearch = searchText.includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || member.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "company") {
        return (a.profiles?.company_name || "").localeCompare(
          b.profiles?.company_name || ""
        );
      }

      if (sortBy === "email") {
        return (a.profiles?.email || "").localeCompare(
          b.profiles?.email || ""
        );
      }

      return a.status.localeCompare(b.status);
    });

  return (
    <main style={{ padding: "40px", maxWidth: "1600px", margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>
      <p style={{ color: "#666" }}>Manage Rhino Wrangler member access.</p>

      {loading && <p>Loading members...</p>}

      {error && (
        <p style={{ color: "red", fontWeight: 700 }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "30px",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search company, email, ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                minWidth: "280px",
                fontSize: "0.95rem",
              }}
            />

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | "active" | "inactive")
              }
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "0.95rem",
              }}
            >
              <option value="all">All statuses</option>
              <option value="active">Active only</option>
              <option value="inactive">Inactive only</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "company" | "email" | "status")
              }
              style={{
                padding: "10px 12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "0.95rem",
              }}
            >
              <option value="company">Sort by company</option>
              <option value="email">Sort by email</option>
              <option value="status">Sort by status</option>
            </select>

            <span style={{ color: "#666", fontSize: "0.9rem" }}>
              Showing {filteredMembers.length} of {members.length}
            </span>
          </div>

          <div style={{ overflowX: "auto", marginTop: "10px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#fff",
              }}
            >
              <thead>
                <tr>
                  <th style={th}>Company</th>
                  <th style={th}>Email</th>
                  <th style={th}>Profile ID</th>
                  <th style={th}>Status</th>
                  <th style={th}>Stripe Customer</th>
                  <th style={th}>Stripe Subscription</th>
                  <th style={th}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.profile_id}>
                    <td style={td}>{member.profiles?.company_name || "—"}</td>
                    <td style={td}>{member.profiles?.email || "—"}</td>
                    <td style={td}>{member.profile_id}</td>
                    <td style={td}>
                      <span
                        style={{
                          padding: "6px 10px",
                          borderRadius: "999px",
                          fontWeight: 700,
                          background:
                            member.status === "active" ? "#dcfce7" : "#fee2e2",
                          color:
                            member.status === "active" ? "#166534" : "#991b1b",
                        }}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td style={td}>{member.stripe_customer_id || "—"}</td>
                    <td style={td}>{member.stripe_subscription_id || "—"}</td>
                    <td style={td}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => updateStatus(member.profile_id, "active")}
                          style={button}
                        >
                          Activate
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(member.profile_id, "inactive")
                          }
                          style={{ ...button, background: "#991b1b" }}
                        >
                          Deactivate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredMembers.length === 0 && (
              <p style={{ marginTop: "20px" }}>No matching members found.</p>
            )}
          </div>
        </>
      )}
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: "12px",
  fontSize: "0.9rem",
};

const td: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "12px",
  fontSize: "0.85rem",
  verticalAlign: "top",
};

const button: React.CSSProperties = {
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  background: "#111827",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};