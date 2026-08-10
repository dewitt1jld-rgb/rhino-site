import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    /*
    --------------------------------------------------
    VERIFY ENVIRONMENT VARIABLES
    --------------------------------------------------
    */

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      console.error(
        "Companies/users API missing Supabase environment variables.",
        {
          hasUrl: Boolean(supabaseUrl),
          hasServiceRoleKey: Boolean(serviceRoleKey),
        }
      );

      return res.status(500).json({
        error:
          "The server is missing required Supabase configuration.",
      });
    }

    /*
    --------------------------------------------------
    CREATE SERVER SUPABASE CLIENT
    --------------------------------------------------
    */

    const supabase = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    /*
    --------------------------------------------------
    VERIFY ADMIN
    --------------------------------------------------
    */

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Not authenticated.",
      });
    }

    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );

    const {
      data: { user },
      error: userError,
    } =
      await supabase.auth.getUser(
        token
      );

    if (
      userError ||
      !user?.email
    ) {
      console.error(
        "Admin user verification failed:",
        userError
      );

      return res.status(401).json({
        error: "Not authenticated.",
      });
    }

    const adminEmails =
      getAdminEmails();

    if (
      !adminEmails.includes(
        user.email.toLowerCase()
      )
    ) {
      return res.status(403).json({
        error:
          "Admin access required.",
      });
    }

    /*
    --------------------------------------------------
    LOAD COMPANIES
    --------------------------------------------------
    */

    const {
      data: companies,
      error: companyError,
    } = await supabase
      .from("companies")
      .select(`
        id,
        company_name,
        customer_number,
        access_status,
        seat_limit,
        created_at
      `)
      .order("company_name");

    if (companyError) {
      console.error(
        "Company query failed:",
        companyError
      );

      throw companyError;
    }

    /*
    --------------------------------------------------
    LOAD USERS
    --------------------------------------------------
    */

    const {
      data: profiles,
      error: profileError,
    } = await supabase
      .from("profiles")
      .select(`
        id,
        first_name,
        last_name,
        email,
        company_name,
        company_id,
        role,
        is_active,
        last_active_at,
        created_at
      `);

    if (profileError) {
      console.error(
        "Profiles query failed:",
        profileError
      );

      throw profileError;
    }

    /*
    --------------------------------------------------
    LOAD DEVICES
    --------------------------------------------------
    */

    const {
      data: devices,
      error: deviceError,
    } = await supabase
      .from("user_devices")
      .select(`
        user_id,
        device_id,
        ip_address,
        country,
        region,
        city,
        browser,
        operating_system,
        first_seen_at,
        last_seen_at
      `)
      .order(
        "last_seen_at",
        {
          ascending: false,
        }
      );

    if (deviceError) {
      console.error(
        "Devices query failed:",
        deviceError
      );

      throw deviceError;
    }

    /*
    --------------------------------------------------
    LOAD LOGINS FROM LAST 30 DAYS
    --------------------------------------------------
    */

    const thirtyDaysAgo =
      new Date(
        Date.now() -
          30 *
            24 *
            60 *
            60 *
            1000
      ).toISOString();

    const {
      data: recentLogins,
      error: loginError,
    } = await supabase
      .from(
        "user_login_history"
      )
      .select(`
        user_id,
        logged_in_at
      `)
      .gte(
        "logged_in_at",
        thirtyDaysAgo
      );

    if (loginError) {
      console.error(
        "Login history query failed:",
        loginError
      );

      throw loginError;
    }

    /*
    --------------------------------------------------
    BUILD DEVICE MAP
    --------------------------------------------------
    */

    const devicesByUser =
      new Map<string, any[]>();

    for (
      const device of
        devices || []
    ) {
      const current =
        devicesByUser.get(
          device.user_id
        ) || [];

      current.push(device);

      devicesByUser.set(
        device.user_id,
        current
      );
    }

    /*
    --------------------------------------------------
    BUILD LOGIN COUNT MAP
    --------------------------------------------------
    */

    const loginCountByUser =
      new Map<string, number>();

    for (
      const login of
        recentLogins || []
    ) {
      const current =
        loginCountByUser.get(
          login.user_id
        ) || 0;

      loginCountByUser.set(
        login.user_id,
        current + 1
      );
    }

    /*
    --------------------------------------------------
    BUILD COMPANY DATA
    --------------------------------------------------
    */

    const result =
      (companies || []).map(
        (company) => {
          const companyUsers =
            (profiles || [])
              .filter(
                (profile) =>
                  profile.company_id ===
                  company.id
              )
              .map(
                (profile) => {
                  const userDevices =
                    devicesByUser.get(
                      profile.id
                    ) || [];

                  const latestDevice =
                    userDevices[0] ||
                    null;

                  const deviceCount =
                    userDevices.length;

                  const logins30Days =
                    loginCountByUser.get(
                      profile.id
                    ) || 0;

                  return {
                    id:
                      profile.id,

                    firstName:
                      profile.first_name,

                    lastName:
                      profile.last_name,

                    email:
                      profile.email,

                    role:
                      profile.role,

                    isActive:
                      profile.is_active,

                    lastActiveAt:
                      profile.last_active_at,

                    deviceCount,

                    logins30Days,

                    /*
                      For now, flag 8+
                      known devices.
                    */
                    suspicious:
                      deviceCount >= 8,

                    latestDevice:
                      latestDevice
                        ? {
                            deviceId:
                              latestDevice.device_id,

                            ipAddress:
                              latestDevice.ip_address,

                            country:
                              latestDevice.country,

                            region:
                              latestDevice.region,

                            city:
                              latestDevice.city,

                            browser:
                              latestDevice.browser,

                            operatingSystem:
                              latestDevice.operating_system,

                            lastSeenAt:
                              latestDevice.last_seen_at,
                          }
                        : null,
                  };
                }
              );

          const usedSeats =
            companyUsers.filter(
              (user) =>
                user.isActive
            ).length;

          const seatLimit =
            Number(
              company.seat_limit
            ) || 0;

          return {
            id:
              company.id,

            companyName:
              company.company_name,

            customerNumber:
              company.customer_number,

            accessStatus:
              company.access_status,

            seatLimit,

            usedSeats,

            availableSeats:
              Math.max(
                seatLimit -
                  usedSeats,
                0
              ),

            users:
              companyUsers,
          };
        }
      );

    /*
    --------------------------------------------------
    SUCCESS
    --------------------------------------------------
    */

    return res.status(200).json({
      companies: result,
    });
  } catch (error: any) {
    console.error(
      "Companies/users API failed:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Unable to load company information.",
    });
  }
}