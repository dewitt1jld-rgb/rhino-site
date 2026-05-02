import Link from "next/link";
import type { GetServerSideProps } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const MASTERCLASS_IMAGE_URL = "https://rhino-training-cdn.b-cdn.net/logo-content-media/images/RHINO%20WRANGLER%20MASTERCLASS%20CERTIFICATION.png";

type TrainingClass = {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  days: string | null;
  daily_time: string | null;
  timezone: string | null;
  instructor: string | null;
  price_cents: number | null;
  seat_limit: number | null;
  status: string | null;
  seats_taken: number;
  seats_remaining: number;
  start_time: string | null;
  end_time: string | null;
};

type ClassesPageProps = {
  classes: TrainingClass[];
};

export default function ClassesPage({ classes }: ClassesPageProps) {
  const [selectedClassId, setSelectedClassId] = useState(
    classes[0]?.id || ""
  );
  const [classPaymentStatus, setClassPaymentStatus] = useState<string | null>(
  null
);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  setClassPaymentStatus(params.get("classPayment"));
}, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedClass = classes.find((item) => item.id === selectedClassId);

  async function handleReserveSeat() {
    if (!selectedClassId) {
      alert("Please select a class.");
      return;
    }

    if (!name.trim() || !email.trim() || !companyName.trim()) {
      alert("Please enter your name, email, and company name.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/class-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          companyName: companyName.trim(),
          classId: selectedClassId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Checkout failed.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Something went wrong starting checkout.");
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
{classPaymentStatus === "success" && (
  <div style={styles.successBox}>
    <strong>Seat Reserved!</strong>
    <p>
      Your payment was successful and your class reservation has been received.
      A confirmation email will be sent shortly.
    </p>
  </div>
)}
      <section style={styles.hero}>
        <img
          src={MASTERCLASS_IMAGE_URL}
          alt="Rhino Wrangler Certified Masterclass"
          style={styles.masterclassImage}
        />

        <p style={styles.badge}>Virtual Live Training</p>

        <h1 style={styles.title}>
          Rhino Wrangler Certified:
          <br />
          Complete Software Masterclass
        </h1>

        <p style={styles.subtitle}>
          The deepest Rhino Wrangler training experience available — built to
          take users from beginner-level navigation to confident, advanced
          software operation.
        </p>

        <div style={styles.heroActions}>
          <a href="#upcoming" style={styles.primaryButton}>
            View Upcoming Classes
          </a>

          <Link href="/pricing" style={styles.secondaryButton}>
            Explore Platform Access
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What This Class Includes</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>4-Day Live Training</h3>
            <p style={styles.cardText}>
              A complete 24-hour training experience taught live over four class
              days.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Beginner to Advanced</h3>
            <p style={styles.cardText}>
              Built for all skill levels — from first-time users to experienced
              operators who want deeper mastery.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Guided Walkthroughs</h3>
            <p style={styles.cardText}>
              Students follow along through screens, workflows,
              troubleshooting, and real-world training examples.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Certification Path</h3>
            <p style={styles.cardText}>
              Completion of this masterclass is the training path toward becoming
              RHINO WRANGLER CERTIFIED.
            </p>
          </div>
        </div>
      </section>

      <section id="upcoming" style={styles.section}>
        <h2 style={styles.sectionTitle}>Upcoming Classes</h2>
        <p style={styles.sectionIntro}>
          Each class is limited to 10 seats to keep training personal and
          interactive.
        </p>

        {classes.length === 0 ? (
          <div style={styles.emptyBox}>
            <h3>No upcoming classes are currently available.</h3>
            <p>Please check back soon or contact The Rhino Wrangler.</p>
          </div>
        ) : (
          <div style={styles.classLayout}>
            <div style={styles.classList}>
              {classes.map((trainingClass) => {
                const isSelected = trainingClass.id === selectedClassId;
                const isSoldOut = trainingClass.seats_remaining <= 0;

                return (
                  <button
                    key={trainingClass.id}
                    type="button"
                    onClick={() => setSelectedClassId(trainingClass.id)}
                    style={{
                      ...styles.classOption,
                      ...(isSelected ? styles.classOptionSelected : {}),
                    }}
                  >
                    <div>
                      <p style={styles.classBadge}>
                        {isSoldOut ? "Sold Out" : "Open Registration"}
                      </p>
                      <h3 style={styles.classTitle}>
                        {trainingClass.title}
                      </h3>
                      <p style={styles.classDate}>
                        {formatDate(trainingClass.start_date)} –{" "}
                        {formatDate(trainingClass.end_date)}
                      </p>
                    </div>

                 <div
  style={{
    ...styles.seatPill,
    ...(getSeatStatus(trainingClass.seats_remaining).style || {}),
  }}
>
  {getSeatStatus(trainingClass.seats_remaining).text} ({trainingClass.seats_remaining})
</div>
                  </button>
                );
              })}
            </div>

            <div style={styles.priceBox}>
              <p style={styles.priceLabel}>Selected Class</p>

              {selectedClass && (
                <>
                  <h3 style={styles.selectedTitle}>
                    {selectedClass.title}
                  </h3>

                  <div style={styles.detailsGrid}>
                    <p>
                      <strong>Dates:</strong>{" "}
                      {formatDate(selectedClass.start_date)} –{" "}
                      {formatDate(selectedClass.end_date)}
                    </p>
                    <p>
                      <strong>Schedule:</strong>{" "}
                      {selectedClass.days || "TBD"}
                    </p>
                    <p>
  <strong>Daily Length:</strong>{" "}
  {selectedClass.daily_time || "6 hours per day"}
</p>

<p>
  <strong>Class Time:</strong>{" "}
  {selectedClass.start_time || "8:00 AM"} –{" "}
  {selectedClass.end_time || "3:00 PM"}
</p>

<p>
  <strong>Time Zone:</strong>{" "}
  {selectedClass.timezone || "Eastern Time"}
</p>
                    <p>
                      <strong>Instructor:</strong>{" "}
                      {selectedClass.instructor || "Landon Dewitt"}
                    </p>
                    <p>
                      <strong>Seats Remaining:</strong>{" "}
                      {selectedClass.seats_remaining} of{" "}
                      {selectedClass.seat_limit || 10}
                    </p>
                  </div>

                  <p style={styles.price}>
                    {formatPrice(selectedClass.price_cents || 200000)}
                  </p>

                  <div style={styles.form}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Full Name</label>
                      <input
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Example: John Smith"
                      />
                    </div>

                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Email Address</label>
                      <input
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Example: john@company.com"
                        type="email"
                      />
                    </div>

                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Company Name</label>
                      <input
                        style={styles.input}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Example: Rhino Glass"
                      />
                    </div>

                    <button
                      style={{
                        ...styles.reserveButton,
                        opacity:
                          loading || selectedClass.seats_remaining <= 0
                            ? 0.7
                            : 1,
                        cursor:
                          loading || selectedClass.seats_remaining <= 0
                            ? "not-allowed"
                            : "pointer",
                      }}
                      onClick={handleReserveSeat}
                      disabled={
                        loading || selectedClass.seats_remaining <= 0
                      }
                    >
                      {selectedClass.seats_remaining <= 0
                        ? "Class Sold Out"
                        : loading
                        ? "Opening Checkout..."
                        : "Reserve My Seat"}
                    </button>
                  </div>

                  <p style={styles.note}>
                    Your seat is not reserved until payment is completed.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      <section style={styles.policySection}>
        <h2 style={styles.sectionTitle}>Cancellation & Reschedule Policy</h2>

        <p style={styles.policyText}>
          Students may cancel or reschedule their reservation up to two weeks
          before class begins. If the class starts within two weeks, students
          must contact The Rhino Wrangler directly for reschedule options.
        </p>

        <p style={styles.policyText}>
          No refunds are given inside the two-week cutoff window. Reschedule
          availability is not guaranteed and may depend on future class openings.
        </p>
      </section>

      <section style={styles.disclaimer}>
        <p>
          The Rhino Wrangler is an independent training program. It is not
          affiliated with, sponsored by, or endorsed by DeMichele Group. Payments
          to The Rhino Wrangler do not replace or apply toward DeMichele
          software, machine, service, licensing, or subscription fees.
        </p>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<
  ClassesPageProps
> = async () => {
  const supabaseAdmin = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const today = new Date().toISOString().slice(0, 10);

  const { data: classes, error: classesError } = await supabaseAdmin
    .from("training_classes")
    .select("*")
    .eq("status", "open")
    .gte("end_date", today)
    .order("start_date", { ascending: true });

  if (classesError) {
    console.error("Error loading training classes:", classesError);
    return {
      props: {
        classes: [],
      },
    };
  }

  const classIds = (classes || []).map((item) => item.id);

  let reservations: { class_id: string | null }[] = [];

  if (classIds.length > 0) {
    const { data, error } = await supabaseAdmin
      .from("class_reservations")
      .select("class_id")
      .in("class_id", classIds)
      .eq("status", "paid");

    if (error) {
      console.error("Error loading reservations:", error);
    } else {
      reservations = data || [];
    }
  }

  const seatCounts = reservations.reduce<Record<string, number>>(
    (acc, reservation) => {
      if (!reservation.class_id) return acc;
      acc[reservation.class_id] = (acc[reservation.class_id] || 0) + 1;
      return acc;
    },
    {}
  );

  const classesWithSeats = (classes || []).map((trainingClass) => {
    const seatsTaken = seatCounts[trainingClass.id] || 0;
    const seatLimit = trainingClass.seat_limit || 10;

    return {
      ...trainingClass,
      seats_taken: seatsTaken,
      seats_remaining: Math.max(seatLimit - seatsTaken, 0),
    };
  });

  return {
    props: {
      classes: classesWithSeats,
    },
  };
};

function formatDate(dateString: string) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatPrice(priceCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}
function getSeatStatus(seatsRemaining: number) {
  if (seatsRemaining <= 0) {
    return {
      text: "Sold Out",
      style: {
        background: "#dc2626",
      },
    };
  }

  if (seatsRemaining <= 2) {
    return {
      text: "Almost Full",
      style: {
        background: "#ea580c",
      },
    };
  }

  if (seatsRemaining <= 5) {
    return {
      text: "Filling Fast",
      style: {
        background: "#d97706",
      },
    };
  }

  return {
    text: "Seats Available",
    style: {
      background: "#111827",
    },
  };
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #ffffff 45%, #f8fafc 100%)",
    color: "#111827",
    padding: "48px 20px 80px",
  },

  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
    padding: "48px 20px 72px",
    borderRadius: "28px",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
    color: "white",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.22)",
  },

  masterclassImage: {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "22px",
    margin: "0 auto 32px",
    display: "block",
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },

  badge: {
    display: "inline-block",
    margin: "0 0 18px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "14px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  title: {
    margin: 0,
    fontSize: "clamp(36px, 6vw, 68px)",
    lineHeight: 1.03,
    letterSpacing: "-0.05em",
  },

  subtitle: {
    maxWidth: "760px",
    margin: "24px auto 0",
    fontSize: "20px",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.82)",
  },

  heroActions: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "34px",
  },

  primaryButton: {
    padding: "14px 22px",
    borderRadius: "14px",
    background: "white",
    color: "#111827",
    fontWeight: 800,
    textDecoration: "none",
  },
  successBox: {
  maxWidth: "1100px",
  margin: "0 auto 28px",
  padding: "18px 22px",
  borderRadius: "18px",
  background: "#ecfdf5",
  border: "1px solid #a7f3d0",
  color: "#065f46",
  fontSize: "16px",
  lineHeight: 1.6,
},

  secondaryButton: {
    padding: "14px 22px",
    borderRadius: "14px",
    background: "rgba(255, 255, 255, 0.1)",
    color: "white",
    fontWeight: 800,
    textDecoration: "none",
    border: "1px solid rgba(255, 255, 255, 0.24)",
  },

  section: {
    maxWidth: "1100px",
    margin: "56px auto 0",
  },

  sectionTitle: {
    fontSize: "34px",
    margin: "0 0 14px",
    letterSpacing: "-0.03em",
  },

  sectionIntro: {
    maxWidth: "760px",
    fontSize: "18px",
    lineHeight: 1.7,
    color: "#4b5563",
    marginBottom: "26px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },

  card: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "24px",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.06)",
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: "20px",
  },

  cardText: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.65,
  },

  classLayout: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "24px",
  },

  classList: {
    display: "grid",
    gap: "16px",
  },

  classOption: {
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    alignItems: "center",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.06)",
    cursor: "pointer",
  },

  classOptionSelected: {
    border: "2px solid #111827",
    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.12)",
  },

  classBadge: {
    display: "inline-block",
    margin: "0 0 10px",
    padding: "7px 12px",
    borderRadius: "999px",
    background: "#eef2ff",
    color: "#3730a3",
    fontWeight: 800,
    fontSize: "13px",
  },

  classTitle: {
    margin: "0 0 8px",
    fontSize: "22px",
    letterSpacing: "-0.03em",
  },

  classDate: {
    margin: 0,
    color: "#4b5563",
    fontWeight: 700,
  },

  seatPill: {
    whiteSpace: "nowrap",
    borderRadius: "999px",
    padding: "9px 12px",
    background: "#111827",
    color: "white",
    fontSize: "13px",
    fontWeight: 900,
  },

  priceBox: {
    borderRadius: "22px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    padding: "24px",
    alignSelf: "start",
    position: "sticky",
    top: "20px",
  },

  priceLabel: {
    margin: 0,
    color: "#6b7280",
    fontWeight: 700,
  },

  selectedTitle: {
    margin: "8px 0 16px",
    fontSize: "22px",
    letterSpacing: "-0.03em",
  },

  detailsGrid: {
    display: "grid",
    gap: "4px",
    color: "#374151",
    lineHeight: 1.5,
    fontSize: "14px",
  },

  price: {
    margin: "18px 0",
    fontSize: "44px",
    fontWeight: 900,
    letterSpacing: "-0.05em",
  },

  form: {
    display: "grid",
    gap: "14px",
  },

  fieldGroup: {
    display: "grid",
    gap: "6px",
  },

  label: {
    fontSize: "13px",
    fontWeight: 800,
    color: "#374151",
  },

  input: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "13px 14px",
    fontSize: "15px",
    outline: "none",
  },

  reserveButton: {
    width: "100%",
    border: "none",
    borderRadius: "14px",
    padding: "15px 18px",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    fontSize: "16px",
  },

  note: {
    margin: "12px 0 0",
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: 1.5,
  },

  emptyBox: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.06)",
  },

  policySection: {
    maxWidth: "1100px",
    margin: "56px auto 0",
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "26px",
    padding: "28px",
  },

  policyText: {
    fontSize: "17px",
    lineHeight: 1.7,
    color: "#7c2d12",
  },

  disclaimer: {
    maxWidth: "1100px",
    margin: "36px auto 0",
    padding: "20px",
    borderRadius: "18px",
    background: "#f3f4f6",
    color: "#4b5563",
    fontSize: "14px",
    lineHeight: 1.65,
  },
};