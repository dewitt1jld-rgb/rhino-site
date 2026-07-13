import Link from "next/link";

const MASTERCLASS_IMAGE_URL =
  "https://rhino-training-cdn.b-cdn.net/logo-content-media/images/RHINO%20WRANGLER%20MASTERCLASS%20CERTIFICATION.png";

const CONTACT_EMAIL = "landon@therhinowrangler.com";

export default function ClassesPage() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <img
          src={MASTERCLASS_IMAGE_URL}
          alt="The Rhino Wrangler live online training"
          style={styles.masterclassImage}
        />

        <p style={styles.badge}>Custom Live Online Training</p>

        <h1 style={styles.title}>
          Live Training Built
          <br />
          Around Your Shop
        </h1>

        <p style={styles.subtitle}>
          Every fabrication shop operates differently. Rather than requiring
          your team to attend a fixed public class, Rhino Wrangler training can
          be scheduled around your employees, equipment, software, production
          schedule, and specific training needs.
        </p>

        <div style={styles.heroActions}>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Rhino Wrangler Training Request`}
            style={styles.primaryButton}
          >
            Request Training
          </a>

          <Link href="/pricing" style={styles.secondaryButton}>
            Explore Platform Access
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>Training Services</p>

        <h2 style={styles.sectionTitle}>
          Training for Your Software, Machines, and Team
        </h2>

        <p style={styles.sectionIntro}>
          Sessions can focus on a specific problem, provide complete software
          training, help onboard new employees, or improve the workflows your
          shop already uses.
        </p>

        <div style={styles.grid}>
          <article style={styles.card}>
            <h3 style={styles.cardTitle}>RhinoFab Training</h3>
            <p style={styles.cardText}>
              Learn machine operation, RhinoFab workflows, fabrication setup,
              maintenance procedures, calibration, troubleshooting, and
              production best practices.
            </p>
          </article>

          <article style={styles.card}>
            <h3 style={styles.cardTitle}>Glazier Studio Training</h3>
            <p style={styles.cardText}>
              Improve estimating, frame building, fabrication setup, catalog
              management, reports, drawings, and the day-to-day workflows your
              team uses.
            </p>
          </article>

          <article style={styles.card}>
            <h3 style={styles.cardTitle}>PartnerPak Training</h3>
            <p style={styles.cardText}>
              Get help with software configuration, databases, production
              workflows, fabrication information, job setup, and efficient
              program use.
            </p>
          </article>

          <article style={styles.card}>
            <h3 style={styles.cardTitle}>New Employee Onboarding</h3>
            <p style={styles.cardText}>
              Give new operators, estimators, programmers, and managers a
              structured introduction to the software and processes they need
              to perform their jobs.
            </p>
          </article>

          <article style={styles.card}>
            <h3 style={styles.cardTitle}>Troubleshooting Sessions</h3>
            <p style={styles.cardText}>
              Schedule focused training around a recurring machine issue,
              software problem, fabrication error, production bottleneck, or
              workflow that your team needs help solving.
            </p>
          </article>

          <article style={styles.card}>
            <h3 style={styles.cardTitle}>Advanced Workflow Training</h3>
            <p style={styles.cardText}>
              Help experienced employees deepen their understanding, improve
              efficiency, standardize procedures, and get more value from the
              software and equipment already in use.
            </p>
          </article>
        </div>
      </section>

      <section style={styles.darkSection}>
        <div style={styles.darkSectionHeader}>
          <p style={styles.darkEyebrow}>Flexible Formats</p>

          <h2 style={styles.darkSectionTitle}>
            Choose the Training Format That Fits Your Company
          </h2>

          <p style={styles.darkSectionIntro}>
            Training does not have to follow a preset schedule. Sessions can be
            built around the size of your team, your production demands, and
            the amount of material you want to cover.
          </p>
        </div>

        <div style={styles.darkGrid}>
          <article style={styles.darkCard}>
            <p style={styles.cardNumber}>01</p>
            <h3 style={styles.darkCardTitle}>One-on-One Training</h3>
            <p style={styles.darkCardText}>
              Personalized instruction for an individual operator, estimator,
              programmer, manager, or technician.
            </p>
          </article>

          <article style={styles.darkCard}>
            <p style={styles.cardNumber}>02</p>
            <h3 style={styles.darkCardTitle}>Small Team Sessions</h3>
            <p style={styles.darkCardText}>
              Interactive training for a department or small group of employees
              who share similar responsibilities.
            </p>
          </article>

          <article style={styles.darkCard}>
            <p style={styles.cardNumber}>03</p>
            <h3 style={styles.darkCardTitle}>Company-Wide Training</h3>
            <p style={styles.darkCardText}>
              Bring multiple departments together to improve communication,
              standardize processes, and build shared knowledge.
            </p>
          </article>

          <article style={styles.darkCard}>
            <p style={styles.cardNumber}>04</p>
            <h3 style={styles.darkCardTitle}>Multi-Day Training</h3>
            <p style={styles.darkCardText}>
              Complete training programs can be divided across multiple days or
              shorter sessions to reduce interruptions to production.
            </p>
          </article>
        </div>
      </section>

      <section style={styles.section}>
        <p style={styles.eyebrow}>The Process</p>

        <h2 style={styles.sectionTitle}>How Scheduling Works</h2>

        <p style={styles.sectionIntro}>
          The first step is a simple conversation about your company, your
          employees, and what you want the training to accomplish.
        </p>

        <div style={styles.processList}>
          <article style={styles.processItem}>
            <div style={styles.processNumber}>1</div>

            <div>
              <h3 style={styles.processTitle}>Contact The Rhino Wrangler</h3>
              <p style={styles.processText}>
                Send an email or use the contact form to describe your company
                and the training you are interested in.
              </p>
            </div>
          </article>

          <article style={styles.processItem}>
            <div style={styles.processNumber}>2</div>

            <div>
              <h3 style={styles.processTitle}>Discuss Your Needs</h3>
              <p style={styles.processText}>
                We will discuss your software, machines, team experience,
                current challenges, goals, and preferred training format.
              </p>
            </div>
          </article>

          <article style={styles.processItem}>
            <div style={styles.processNumber}>3</div>

            <div>
              <h3 style={styles.processTitle}>Build a Training Plan</h3>
              <p style={styles.processText}>
                I will recommend the topics, format, session length, and number
                of sessions that best fit your needs.
              </p>
            </div>
          </article>

          <article style={styles.processItem}>
            <div style={styles.processNumber}>4</div>

            <div>
              <h3 style={styles.processTitle}>Choose Dates and Times</h3>
              <p style={styles.processText}>
                Training is scheduled around your availability and production
                schedule instead of requiring your company to attend a preset
                public class.
              </p>
            </div>
          </article>

          <article style={styles.processItem}>
            <div style={styles.processNumber}>5</div>

            <div>
              <h3 style={styles.processTitle}>Attend Live Online Training</h3>
              <p style={styles.processText}>
                Your team attends an interactive online session with guided
                demonstrations, explanations, questions, and real-world
                examples.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section style={styles.benefitSection}>
        <div style={styles.benefitCopy}>
          <p style={styles.eyebrow}>Why Custom Training?</p>

          <h2 style={styles.sectionTitle}>
            Spend Time on What Your Employees Actually Need
          </h2>

          <p style={styles.sectionIntro}>
            Custom training avoids spending hours on unrelated material. Your
            sessions can focus on the software, equipment, employees, and
            production issues that matter most to your shop.
          </p>
        </div>

        <div style={styles.benefitGrid}>
          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Focus on your specific software and equipment.</span>
          </div>

          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Ask questions throughout the entire session.</span>
          </div>

          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Use examples based on your shop and workflows.</span>
          </div>

          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Train beginners and experienced employees.</span>
          </div>

          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Schedule sessions around production demands.</span>
          </div>

          <div style={styles.benefitItem}>
            <span style={styles.checkmark}>✓</span>
            <span>Receive live instruction without travel expenses.</span>
          </div>
        </div>
      </section>

      <section style={styles.prepareSection}>
        <p style={styles.eyebrow}>Before You Contact Me</p>

        <h2 style={styles.sectionTitle}>Information That Helps Me Plan</h2>

        <p style={styles.sectionIntro}>
          You do not need to have everything figured out before reaching out.
          However, including the following information helps me understand your
          needs and recommend the right training plan.
        </p>

        <div style={styles.prepareGrid}>
          <div style={styles.prepareItem}>Company name and location</div>
          <div style={styles.prepareItem}>Software your team currently uses</div>
          <div style={styles.prepareItem}>RhinoFab machine models</div>
          <div style={styles.prepareItem}>Number of employees attending</div>
          <div style={styles.prepareItem}>Employee experience levels</div>
          <div style={styles.prepareItem}>Topics or problems to cover</div>
          <div style={styles.prepareItem}>Preferred dates or timeframe</div>
          <div style={styles.prepareItem}>Desired session length</div>
        </div>
      </section>

      <section style={styles.contactSection}>
        <p style={styles.contactEyebrow}>Request Training</p>

        <h2 style={styles.contactTitle}>
          Ready to Discuss Training for Your Team?
        </h2>

        <p style={styles.contactText}>
          Email is the fastest way to get started. Send a brief description of
          your company, software, equipment, employees, and the topics you would
          like to cover. I will respond so we can discuss the best training
          format and scheduling options.
        </p>

        <div style={styles.contactActions}>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Rhino Wrangler Training Request`}
            style={styles.contactPrimaryButton}
          >
            Email Landon
          </a>

          <Link href="/contact" style={styles.contactSecondaryButton}>
            Use the Contact Form
          </Link>
        </div>

        <p style={styles.contactEmail}>{CONTACT_EMAIL}</p>
      </section>

      <section style={styles.faqSection}>
        <p style={styles.eyebrow}>Frequently Asked Questions</p>

        <h2 style={styles.sectionTitle}>Common Training Questions</h2>

        <div style={styles.faqGrid}>
          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>How much does training cost?</h3>
            <p style={styles.faqText}>
              Pricing depends on the topics, number of employees, session
              length, preparation required, and whether training is completed
              in one session or across multiple days.
            </p>
          </article>

          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>How long are the sessions?</h3>
            <p style={styles.faqText}>
              Sessions can be structured as focused short meetings, half-day
              training, full-day training, or multi-day programs depending on
              your goals.
            </p>
          </article>

          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>
              Can several employees attend together?
            </h3>
            <p style={styles.faqText}>
              Yes. Training can be provided to one person, a department, or a
              larger company group.
            </p>
          </article>

          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>
              Can training cover a specific problem?
            </h3>
            <p style={styles.faqText}>
              Yes. Training can focus on one machine issue, software workflow,
              recurring production problem, or troubleshooting topic.
            </p>
          </article>

          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>
              Can training be divided across multiple days?
            </h3>
            <p style={styles.faqText}>
              Yes. Larger training programs can be divided into shorter
              sessions to reduce production interruptions and give employees
              time to practice.
            </p>
          </article>

          <article style={styles.faqItem}>
            <h3 style={styles.faqTitle}>What platform is used?</h3>
            <p style={styles.faqText}>
              Live sessions can be conducted using a suitable online meeting
              platform with screen sharing, demonstrations, discussion, and
              questions.
            </p>
          </article>
        </div>
      </section>

      <section style={styles.disclaimer}>
        <p>
          The Rhino Wrangler is an independent training and consulting
          platform. It is not affiliated with, sponsored by, operated by, or
          endorsed by DeMichele Group. Payments to The Rhino Wrangler do not
          replace or apply toward software, machine, service, licensing, or
          subscription fees charged by other companies.
        </p>
      </section>
    </main>
  );
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
    background: "rgba(245, 158, 11, 0.16)",
    border: "1px solid rgba(245, 158, 11, 0.46)",
    color: "#fbbf24",
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  title: {
    margin: 0,
    fontSize: "clamp(38px, 6vw, 68px)",
    lineHeight: 1.03,
    letterSpacing: "-0.05em",
  },

  subtitle: {
    maxWidth: "790px",
    margin: "24px auto 0",
    fontSize: "20px",
    lineHeight: 1.65,
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
    padding: "15px 24px",
    borderRadius: "14px",
    background: "#f59e0b",
    color: "#111827",
    fontWeight: 900,
    textDecoration: "none",
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
    margin: "64px auto 0",
  },

  eyebrow: {
    margin: "0 0 10px",
    color: "#d97706",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  sectionTitle: {
    fontSize: "clamp(30px, 4vw, 42px)",
    margin: "0 0 14px",
    letterSpacing: "-0.035em",
    lineHeight: 1.1,
  },

  sectionIntro: {
    maxWidth: "790px",
    fontSize: "18px",
    lineHeight: 1.75,
    color: "#4b5563",
    margin: "0 0 30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px",
  },

  card: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 14px 40px rgba(15, 23, 42, 0.06)",
  },

  cardTitle: {
    margin: "0 0 11px",
    fontSize: "21px",
    letterSpacing: "-0.025em",
  },

  cardText: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
  },

  darkSection: {
    maxWidth: "1100px",
    margin: "64px auto 0",
    padding: "38px",
    borderRadius: "28px",
    background:
      "linear-gradient(135deg, #111827 0%, #1f2937 55%, #111827 100%)",
    boxShadow: "0 22px 60px rgba(15, 23, 42, 0.2)",
  },

  darkSectionHeader: {
    maxWidth: "790px",
    marginBottom: "28px",
  },

  darkEyebrow: {
    margin: "0 0 10px",
    color: "#f59e0b",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  darkSectionTitle: {
    margin: "0 0 14px",
    color: "white",
    fontSize: "clamp(30px, 4vw, 42px)",
    lineHeight: 1.1,
    letterSpacing: "-0.035em",
  },

  darkSectionIntro: {
    margin: 0,
    color: "#d1d5db",
    fontSize: "18px",
    lineHeight: 1.7,
  },

  darkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "16px",
  },

  darkCard: {
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "20px",
    padding: "23px",
  },

  cardNumber: {
    margin: "0 0 14px",
    color: "#f59e0b",
    fontSize: "14px",
    fontWeight: 900,
  },

  darkCardTitle: {
    margin: "0 0 10px",
    color: "white",
    fontSize: "20px",
  },

  darkCardText: {
    margin: 0,
    color: "#d1d5db",
    lineHeight: 1.65,
  },

  processList: {
    display: "grid",
    gap: "16px",
  },

  processItem: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    padding: "23px",
    boxShadow: "0 12px 34px rgba(15, 23, 42, 0.05)",
  },

  processNumber: {
    flex: "0 0 44px",
    height: "44px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f59e0b",
    color: "#111827",
    fontWeight: 900,
    fontSize: "18px",
  },

  processTitle: {
    margin: "1px 0 8px",
    fontSize: "20px",
  },

  processText: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
  },

  benefitSection: {
    maxWidth: "1100px",
    margin: "64px auto 0",
    padding: "34px",
    borderRadius: "26px",
    background: "#fffbeb",
    border: "1px solid #fde68a",
  },

  benefitCopy: {
    maxWidth: "790px",
  },

  benefitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "14px",
  },

  benefitItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.72)",
    borderRadius: "16px",
    color: "#374151",
    fontWeight: 700,
    lineHeight: 1.55,
  },

  checkmark: {
    color: "#d97706",
    fontWeight: 900,
  },

  prepareSection: {
    maxWidth: "1100px",
    margin: "64px auto 0",
  },

  prepareGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "13px",
  },

  prepareItem: {
    padding: "17px 18px",
    borderRadius: "16px",
    background: "white",
    border: "1px solid #e5e7eb",
    color: "#374151",
    fontWeight: 750,
    boxShadow: "0 10px 26px rgba(15, 23, 42, 0.04)",
  },

  contactSection: {
    maxWidth: "1100px",
    margin: "64px auto 0",
    padding: "44px 28px",
    borderRadius: "28px",
    textAlign: "center",
    background:
      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 55%, #f59e0b 100%)",
    color: "#111827",
    boxShadow: "0 20px 55px rgba(217, 119, 6, 0.22)",
  },

  contactEyebrow: {
    margin: "0 0 10px",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  contactTitle: {
    maxWidth: "760px",
    margin: "0 auto",
    fontSize: "clamp(32px, 5vw, 48px)",
    lineHeight: 1.08,
    letterSpacing: "-0.04em",
  },

  contactText: {
    maxWidth: "770px",
    margin: "20px auto 0",
    fontSize: "18px",
    lineHeight: 1.7,
  },

  contactActions: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "28px",
  },

  contactPrimaryButton: {
    padding: "15px 24px",
    borderRadius: "14px",
    background: "#111827",
    color: "white",
    fontWeight: 900,
    textDecoration: "none",
  },

  contactSecondaryButton: {
    padding: "14px 22px",
    borderRadius: "14px",
    background: "rgba(255, 255, 255, 0.58)",
    color: "#111827",
    fontWeight: 900,
    textDecoration: "none",
    border: "1px solid rgba(17, 24, 39, 0.18)",
  },

  contactEmail: {
    margin: "20px 0 0",
    fontWeight: 900,
  },

  faqSection: {
    maxWidth: "1100px",
    margin: "64px auto 0",
  },

  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "16px",
  },

  faqItem: {
    padding: "23px",
    borderRadius: "20px",
    background: "white",
    border: "1px solid #e5e7eb",
    boxShadow: "0 12px 34px rgba(15, 23, 42, 0.05)",
  },

  faqTitle: {
    margin: "0 0 10px",
    fontSize: "19px",
  },

  faqText: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
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