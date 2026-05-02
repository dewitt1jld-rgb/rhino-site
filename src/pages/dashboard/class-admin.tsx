import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Reservation = {
  id: string;
  student_name: string;
  student_email: string;
  company_name: string;
  status: string;
  created_at: string;
  amount_paid: number | null;
};

type TrainingClassWithReservations = {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  days: string | null;
  daily_time: string | null;
  start_time: string | null;
  end_time: string | null;
  timezone: string | null;
  instructor: string | null;
  seat_limit: number | null;
  seats_taken: number;
  seats_remaining: number;
  reservations: Reservation[];
};

export default function ClassAdminPage() {
  const [classes, setClasses] = useState<TrainingClassWithReservations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadClassReservations() {
    setLoading(true);
    setError("");

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      setError("You must be logged in as an admin to view this page.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/admin/class-reservations", {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Unable to load class reservations.");
      setLoading(false);
      return;
    }

    setClasses(data.classes || []);
    setLoading(false);
  }

  useEffect(() => {
    loadClassReservations();
  }, []);

  return (
    <main style={styles.page}>
      <div style={styles.header}>
        <div>
          <p style={styles.badge}>Admin</p>
          <h1 style={styles.title}>Class Reservations</h1>
          <p style={styles.subtitle}>
            View paid students, company names, class dates, and seat counts.
          </p>
        </div>

        <Link href="/dashboard/admin" style={styles.secondaryButton}>
          Back to Admin
        </Link>
      </div>

      {loading && <div style={styles.card}>Loading class reservations...</div>}

      {error && <div style={styles.errorBox}>{error}</div>}

      {!loading &&
        !error &&
        classes.map((trainingClass) => (
          <section key={trainingClass.id} style={styles.classCard}>
            <div style={styles.classHeader}>
              <div>
                <h2 style={styles.classTitle}>{trainingClass.title}</h2>
                <p style={styles.classMeta}>
                  {formatDate(trainingClass.start_date)} –{" "}
                  {formatDate(trainingClass.end_date)}
                </p>
                <p style={styles.classMeta}>
                  {trainingClass.days || "Schedule TBD"} ·{" "}
                  {trainingClass.start_time || "8:00 AM"} –{" "}
                  {trainingClass.end_time || "3:00 PM"} ·{" "}
                  {trainingClass.timezone || "Eastern Time"}
                </p>
              </div>

              <div style={styles.seatBox}>
                <strong>
                  {trainingClass.seats_taken} /{" "}
                  {trainingClass.seat_limit || 10}
                </strong>
                <span>Seats Filled</span>
              </div>
            </div>

            {trainingClass.reservations.length === 0 ? (
              <div style={styles.emptyBox}>No paid students yet.</div>
            ) : (
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Student</th>
                      <th style={styles.th}>Email</th>
                      <th style={styles.th}>Company</th>
                      <th style={styles.th}>Paid</th>
                      <th style={styles.th}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingClass.reservations.map((reservation) => (
                      <tr key={reservation.id}>
                        <td style={styles.td}>
                          {reservation.student_name || "—"}
                        </td>
                        <td style={styles.td}>
                          <a
                            href={`mailto:${reservation.student_email}`}
                            style={styles.emailLink}
                          >
                            {reservation.student_email}
                          </a>
                        </td>
                        <td style={styles.td}>
                          {reservation.company_name || "—"}
                        </td>
                        <td style={styles.td}>
                          {formatDateTime(reservation.created_at)}
                        </td>
                        <td style={styles.td}>
                          {formatMoney(reservation.amount_paid)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
    </main>
  );
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateTime(dateString: string) {
  return new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatMoney(amountCents: number | null) {
  if (!amountCents) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#111827",
    padding: "48px 20px 80px",
  },

  header: {
    maxWidth: "1200px",
    margin: "0 auto 28px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  badge: {
    display: "inline-block",
    margin: "0 0 10px",
    padding: "7px 12px",
    borderRadius: "999px",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    fontSize: "13px",
  },

  title: {
    margin: 0,
    fontSize: "42px",
    letterSpacing: "-0.04em",
  },

  subtitle: {
    margin: "10px 0 0",
    color: "#4b5563",
    fontSize: "17px",
  },

  secondaryButton: {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "white",
    border: "1px solid #e5e7eb",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 800,
  },

  card: {
    maxWidth: "1200px",
    margin: "0 auto",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "24px",
  },

  errorBox: {
    maxWidth: "1200px",
    margin: "0 auto",
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#991b1b",
    borderRadius: "20px",
    padding: "20px",
    fontWeight: 700,
  },

  classCard: {
    maxWidth: "1200px",
    margin: "0 auto 24px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "24px",
    padding: "26px",
    boxShadow: "0 16px 45px rgba(15, 23, 42, 0.06)",
  },

  classHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "flex-start",
    marginBottom: "22px",
    flexWrap: "wrap",
  },

  classTitle: {
    margin: "0 0 8px",
    fontSize: "26px",
    letterSpacing: "-0.03em",
  },

  classMeta: {
    margin: "5px 0",
    color: "#4b5563",
    fontWeight: 600,
  },

  seatBox: {
    minWidth: "130px",
    borderRadius: "18px",
    background: "#111827",
    color: "white",
    padding: "16px",
    textAlign: "center",
    display: "grid",
    gap: "4px",
  },

  emptyBox: {
    borderRadius: "16px",
    background: "#f9fafb",
    border: "1px dashed #d1d5db",
    padding: "18px",
    color: "#6b7280",
  },

  tableWrap: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "13px",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },

  td: {
    padding: "14px 12px",
    borderBottom: "1px solid #f3f4f6",
    verticalAlign: "top",
  },

  emailLink: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 700,
  },
};