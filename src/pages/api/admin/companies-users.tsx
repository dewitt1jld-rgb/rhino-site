import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@/lib/supabase";

type Device = {
  deviceId: string;
  ipAddress: string | null;
  country: string | null;
  region: string | null;
  city: string | null;
  browser: string | null;
  operatingSystem: string | null;
  lastSeenAt: string | null;
};

type CompanyUser = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  role: string;
  isActive: boolean;
  lastActiveAt: string | null;

  deviceCount: number;
  logins30Days: number;

  suspicious: boolean;

  latestDevice:
    | Device
    | null;
};

type Company = {
  id: string;

  companyName: string;
  customerNumber: string;

  accessStatus: string;

  seatLimit: number;
  usedSeats: number;
  availableSeats: number;

  users: CompanyUser[];
};

function formatDate(
  value: string | null
) {
  if (!value) {
    return "Never";
  }

  return new Date(
    value
  ).toLocaleString();
}

function getLocation(
  device: Device | null
) {
  if (!device) {
    return "No login data";
  }

  const parts = [
    device.city,
    device.region,
    device.country,
  ].filter(Boolean);

  if (!parts.length) {
    return "Unknown location";
  }

  return parts.join(", ");
}

export default function CompaniesUsersPage() {
  const router = useRouter();

  const [companies, setCompanies] =
    useState<Company[]>([]);

  const [
    expandedCompany,
    setExpandedCompany,
  ] = useState<string | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    loadCompanies();
  }, []);

  async function loadCompanies() {
    setLoading(true);
    setError("");

    const supabase =
      createClient();

    const {
      data: { session },
    } =
      await supabase.auth.getSession();

    if (!session) {
      router.replace("/login");
      return;
    }

    try {
      const response =
        await fetch(
          "/api/admin/companies-users",
          {
            headers: {
              Authorization:
                `Bearer ${session.access_token}`,
            },
          }
        );

      const result =
        await response.json();

      if (
        response.status === 401
      ) {
        router.replace("/login");
        return;
      }

      if (
        response.status === 403
      ) {
        router.replace("/dashboard");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to load companies."
        );
      }

      setCompanies(
        result.companies || []
      );
    } catch (error: any) {
      setError(
        error?.message ||
          "Unable to load companies."
      );
    } finally {
      setLoading(false);
    }
  }

  const totalUsers =
    companies.reduce(
      (total, company) =>
        total +
        company.usedSeats,
      0
    );

  const suspiciousUsers =
    companies.reduce(
      (total, company) =>
        total +
        company.users.filter(
          (user) =>
            user.suspicious
        ).length,
      0
    );

  if (loading) {
    return (
      <main className="adminPage">
        <div className="loadingCard">
          Loading company accounts...
        </div>

        <Styles />
      </main>
    );
  }

  return (
    <main className="adminPage">
      <section className="shell">
        <div className="topRow">
          <div>
            <p className="eyebrow">
              Rhino Wrangler Admin
            </p>

            <h1>
              Companies & Users
            </h1>

            <p className="lead">
              Review company access,
              seat usage, employees,
              devices, and recent login
              activity.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="backButton"
          >
            ← Dashboard
          </Link>
        </div>

        {error && (
          <div className="errorBox">
            {error}
          </div>
        )}

        <div className="statsGrid">
          <div className="statCard">
            <span>Companies</span>

            <strong>
              {companies.length}
            </strong>
          </div>

          <div className="statCard">
            <span>
              Active Users
            </span>

            <strong>
              {totalUsers}
            </strong>
          </div>

          <div className="statCard">
            <span>
              Device Warnings
            </span>

            <strong>
              {suspiciousUsers}
            </strong>
          </div>
        </div>

        <div className="companyList">
          {companies.map(
            (company) => {
              const expanded =
                expandedCompany ===
                company.id;

              return (
                <section
                  className="companyCard"
                  key={company.id}
                >
                  <button
                    className="companyHeader"
                    type="button"
                    onClick={() =>
                      setExpandedCompany(
                        expanded
                          ? null
                          : company.id
                      )
                    }
                  >
                    <div>
                      <div className="companyTitleRow">
                        <h2>
                          {
                            company.companyName
                          }
                        </h2>

                        <span
                          className={
                            company.accessStatus ===
                            "active"
                              ? "status active"
                              : "status inactive"
                          }
                        >
                          {
                            company.accessStatus
                          }
                        </span>
                      </div>

                      <p>
                        Customer #
                        {
                          company.customerNumber
                        }
                      </p>
                    </div>

                    <div className="companyMetrics">
                      <div>
                        <span>
                          Seats
                        </span>

                        <strong>
                          {
                            company.usedSeats
                          }{" "}
                          /{" "}
                          {
                            company.seatLimit
                          }
                        </strong>
                      </div>

                      <div>
                        <span>
                          Available
                        </span>

                        <strong>
                          {
                            company.availableSeats
                          }
                        </strong>
                      </div>

                      <div className="expandArrow">
                        {expanded
                          ? "↑"
                          : "↓"}
                      </div>
                    </div>
                  </button>

                  {expanded && (
                    <div className="usersSection">
                      <div className="usersHeading">
                        <h3>
                          Employees
                        </h3>

                        <span>
                          {
                            company.users
                              .length
                          }{" "}
                          accounts
                        </span>
                      </div>

                      {company.users
                        .length ===
                      0 ? (
                        <div className="emptyState">
                          No users are
                          currently connected
                          to this company.
                        </div>
                      ) : (
                        <div className="userList">
                          {company.users.map(
                            (user) => (
                              <div
                                className={
                                  user.suspicious
                                    ? "userCard suspicious"
                                    : "userCard"
                                }
                                key={
                                  user.id
                                }
                              >
                                <div className="userIdentity">
                                  <div className="avatar">
                                    {(
                                      user.firstName?.[0] ||
                                      "?"
                                    ).toUpperCase()}
                                  </div>

                                  <div>
                                    <h4>
                                      {
                                        user.firstName
                                      }{" "}
                                      {
                                        user.lastName
                                      }
                                    </h4>

                                    <p>
                                      {
                                        user.email
                                      }
                                    </p>

                                    <div className="badges">
                                      <span>
                                        {
                                          user.role
                                        }
                                      </span>

                                      <span
                                        className={
                                          user.isActive
                                            ? "userActive"
                                            : "userInactive"
                                        }
                                      >
                                        {user.isActive
                                          ? "Active"
                                          : "Disabled"}
                                      </span>

                                      {user.suspicious && (
                                        <span className="warningBadge">
                                          ⚠ Device
                                          Warning
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="userStats">
                                  <div>
                                    <span>
                                      Devices
                                    </span>

                                    <strong>
                                      {
                                        user.deviceCount
                                      }
                                    </strong>
                                  </div>

                                  <div>
                                    <span>
                                      Logins /
                                      30 Days
                                    </span>

                                    <strong>
                                      {
                                        user.logins30Days
                                      }
                                    </strong>
                                  </div>

                                  <div>
                                    <span>
                                      Location
                                    </span>

                                    <strong>
                                      {getLocation(
                                        user.latestDevice
                                      )}
                                    </strong>
                                  </div>

                                  <div>
                                    <span>
                                      Device
                                    </span>

                                    <strong>
                                      {user.latestDevice
                                        ? `${
                                            user
                                              .latestDevice
                                              .browser ||
                                            "Unknown"
                                          } / ${
                                            user
                                              .latestDevice
                                              .operatingSystem ||
                                            "Unknown"
                                          }`
                                        : "No data"}
                                    </strong>
                                  </div>

                                  <div>
                                    <span>
                                      Last Seen
                                    </span>

                                    <strong>
                                      {formatDate(
                                        user
                                          .latestDevice
                                          ?.lastSeenAt ||
                                          user.lastActiveAt
                                      )}
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </section>
              );
            }
          )}
        </div>
      </section>

      <Styles />
    </main>
  );
}

function Styles() {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      .adminPage {
        min-height: 100vh;
        padding: 48px 24px 80px;
        background:
          radial-gradient(
            circle at top left,
            rgba(245, 158, 11, 0.1),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            #05070b,
            #0d1118 50%,
            #05070b
          );
        color: white;
      }

      .shell {
        width: 100%;
        max-width: 1250px;
        margin: 0 auto;
      }

      .topRow {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
        margin-bottom: 32px;
      }

      .eyebrow {
        margin: 0 0 10px;
        color: #f59e0b;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        font-size: clamp(
          36px,
          5vw,
          52px
        );
      }

      .lead {
        max-width: 720px;
        margin-top: 14px;
        color: rgba(
          255,
          255,
          255,
          0.68
        );
        font-size: 17px;
        line-height: 1.7;
      }

      .backButton {
        padding: 12px 18px;
        border-radius: 12px;
        background: rgba(
          255,
          255,
          255,
          0.08
        );
        color: white;
        font-weight: 800;
        text-decoration: none;
        white-space: nowrap;
      }

      .statsGrid {
        display: grid;
        grid-template-columns:
          repeat(
            3,
            minmax(0, 1fr)
          );
        gap: 18px;
        margin-bottom: 30px;
      }

      .statCard {
        padding: 22px;
        border: 1px solid
          rgba(
            255,
            255,
            255,
            0.08
          );
        border-radius: 18px;
        background: rgba(
          15,
          23,
          42,
          0.8
        );
      }

      .statCard span {
        display: block;
        margin-bottom: 7px;
        color: rgba(
          255,
          255,
          255,
          0.55
        );
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
      }

      .statCard strong {
        font-size: 30px;
      }

      .companyList {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .companyCard {
        overflow: hidden;
        border: 1px solid
          rgba(
            255,
            255,
            255,
            0.09
          );
        border-radius: 20px;
        background: rgba(
          15,
          23,
          42,
          0.82
        );
      }

      .companyHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: center;
        padding: 24px;
        border: 0;
        background: transparent;
        color: white;
        text-align: left;
        cursor: pointer;
      }

      .companyHeader:hover {
        background: rgba(
          245,
          158,
          11,
          0.04
        );
      }

      .companyTitleRow {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .companyTitleRow h2 {
        margin: 0;
        font-size: 24px;
      }

      .companyHeader p {
        margin: 7px 0 0;
        color: rgba(
          255,
          255,
          255,
          0.55
        );
      }

      .status {
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 900;
        text-transform: uppercase;
      }

      .status.active {
        background: rgba(
          34,
          197,
          94,
          0.13
        );
        color: #86efac;
      }

      .status.inactive {
        background: rgba(
          239,
          68,
          68,
          0.13
        );
        color: #fecaca;
      }

      .companyMetrics {
        display: flex;
        align-items: center;
        gap: 30px;
      }

      .companyMetrics div:not(
          .expandArrow
        ) {
        text-align: right;
      }

      .companyMetrics span {
        display: block;
        color: rgba(
          255,
          255,
          255,
          0.5
        );
        font-size: 12px;
      }

      .companyMetrics strong {
        display: block;
        margin-top: 4px;
        font-size: 18px;
      }

      .expandArrow {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid
          rgba(
            245,
            158,
            11,
            0.3
          );
        border-radius: 10px;
        color: #f59e0b;
      }

      .usersSection {
        padding: 0 24px 24px;
        border-top: 1px solid
          rgba(
            255,
            255,
            255,
            0.07
          );
      }

      .usersHeading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0 16px;
      }

      .usersHeading h3 {
        margin: 0;
        color: #fbbf24;
      }

      .usersHeading span {
        color: rgba(
          255,
          255,
          255,
          0.5
        );
      }

      .userList {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .userCard {
        display: grid;
        grid-template-columns:
          minmax(250px, 1fr)
          minmax(0, 2fr);
        gap: 20px;
        padding: 18px;
        border: 1px solid
          rgba(
            255,
            255,
            255,
            0.07
          );
        border-radius: 16px;
        background: rgba(
          255,
          255,
          255,
          0.025
        );
      }

      .userCard.suspicious {
        border-color: rgba(
          239,
          68,
          68,
          0.35
        );
        background: rgba(
          239,
          68,
          68,
          0.05
        );
      }

      .userIdentity {
        display: flex;
        gap: 14px;
      }

      .avatar {
        width: 44px;
        height: 44px;
        flex: 0 0 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        background: rgba(
          245,
          158,
          11,
          0.14
        );
        color: #fbbf24;
        font-weight: 950;
      }

      .userIdentity h4 {
        margin: 0;
        font-size: 17px;
      }

      .userIdentity p {
        margin: 5px 0 9px;
        color: rgba(
          255,
          255,
          255,
          0.55
        );
      }

      .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .badges span {
        padding: 5px 8px;
        border-radius: 8px;
        background: rgba(
          255,
          255,
          255,
          0.06
        );
        color: rgba(
          255,
          255,
          255,
          0.66
        );
        font-size: 11px;
        font-weight: 800;
      }

      .badges .userActive {
        color: #86efac;
      }

      .badges .userInactive {
        color: #fecaca;
      }

      .badges .warningBadge {
        background: rgba(
          239,
          68,
          68,
          0.12
        );
        color: #fecaca;
      }

      .userStats {
        display: grid;
        grid-template-columns:
          repeat(
            5,
            minmax(0, 1fr)
          );
        gap: 12px;
        align-items: center;
      }

      .userStats span {
        display: block;
        margin-bottom: 5px;
        color: rgba(
          255,
          255,
          255,
          0.45
        );
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
      }

      .userStats strong {
        display: block;
        font-size: 13px;
        overflow-wrap: anywhere;
      }

      .emptyState,
      .loadingCard {
        padding: 28px;
        border-radius: 16px;
        background: rgba(
          255,
          255,
          255,
          0.04
        );
        color: rgba(
          255,
          255,
          255,
          0.65
        );
        text-align: center;
      }

      .loadingCard {
        max-width: 500px;
        margin: 100px auto;
      }

      .errorBox {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid
          rgba(
            239,
            68,
            68,
            0.25
          );
        border-radius: 12px;
        background: rgba(
          239,
          68,
          68,
          0.08
        );
        color: #fecaca;
      }

      @media (
        max-width: 1000px
      ) {
        .userCard {
          grid-template-columns:
            1fr;
        }

        .userStats {
          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );
        }
      }

      @media (
        max-width: 700px
      ) {
        .adminPage {
          padding: 28px 14px;
        }

        .topRow,
        .companyHeader {
          flex-direction: column;
          align-items: stretch;
        }

        .statsGrid {
          grid-template-columns: 1fr;
        }

        .companyMetrics {
          justify-content:
            space-between;
        }

        .companyMetrics
          div:not(
            .expandArrow
          ) {
          text-align: left;
        }

        .userStats {
          grid-template-columns:
            1fr;
        }
      }
    `}</style>
  );
}