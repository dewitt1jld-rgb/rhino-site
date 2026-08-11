import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function getClientIp(req: NextApiRequest) {
  const forwarded = req.headers["x-forwarded-for"];

  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }

  const realIp = req.headers["x-real-ip"];

  if (typeof realIp === "string") {
    return realIp;
  }

  return null;
}

function parseBrowser(userAgent: string) {
  if (/edg/i.test(userAgent)) return "Edge";
  if (/chrome|crios/i.test(userAgent)) return "Chrome";
  if (/firefox|fxios/i.test(userAgent)) return "Firefox";
  if (/safari/i.test(userAgent)) return "Safari";

  return "Unknown";
}

function parseOS(userAgent: string) {
  if (/windows/i.test(userAgent)) return "Windows";
  if (/iphone|ipad|ios/i.test(userAgent)) return "iOS";
  if (/android/i.test(userAgent)) return "Android";
  if (/macintosh|mac os x/i.test(userAgent)) return "macOS";
  if (/linux/i.test(userAgent)) return "Linux";

  return "Unknown";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "No auth token.",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);

  if (userError || !user) {
    return res.status(401).json({
      error: "Invalid user.",
    });
  }

  const {
    deviceId,
  }: {
    deviceId?: string;
  } = req.body || {};

  if (!deviceId) {
    return res.status(400).json({
      error: "Missing device ID.",
    });
  }

  const userAgent =
    req.headers["user-agent"] || "";
const ipAddress = getClientIp(req);

/*
-------------------------------------
APPROXIMATE LOCATION
-------------------------------------

Vercel provides general geographic information
based on the incoming request.

This is approximate only and is intended for
account-security / login-history purposes.
*/

const countryHeader =
  req.headers["x-vercel-ip-country"];

const regionHeader =
  req.headers["x-vercel-ip-country-region"];

const cityHeader =
  req.headers["x-vercel-ip-city"];

const country =
  typeof countryHeader === "string"
    ? countryHeader
    : null;

const region =
  typeof regionHeader === "string"
    ? regionHeader
    : null;

const city =
  typeof cityHeader === "string"
    ? decodeURIComponent(cityHeader)
    : null;

const browser =
  parseBrowser(userAgent);

  const operatingSystem =
    parseOS(userAgent);

  const now = new Date().toISOString();

  /*
  -------------------------------------
  UPDATE / CREATE DEVICE
  -------------------------------------
  */

  const {
    error: deviceError,
  } = await supabase
    .from("user_devices")
    .upsert(
      {
        user_id: user.id,
        device_id: deviceId,

ip_address:
  ipAddress,

country,
region,
city,

browser,

operating_system:
  operatingSystem,

        user_agent:
          userAgent,

        last_seen_at:
          now,
      },
      {
        onConflict:
          "user_id,device_id",
      }
    );

  if (deviceError) {
    console.error(
      "Device tracking error:",
      deviceError
    );
  }

  /*
  -------------------------------------
  RECORD LOGIN EVENT
  -------------------------------------
  */

  const {
    error: historyError,
  } = await supabase
    .from("user_login_history")
    .insert({
      user_id: user.id,
      device_id: deviceId,

ip_address:
  ipAddress,

country,
region,
city,

browser,

operating_system:
  operatingSystem,

      user_agent:
        userAgent,

      logged_in_at:
        now,
    });

  if (historyError) {
    console.error(
      "Login history error:",
      historyError
    );
  }

  return res.status(200).json({
    success: true,
  });
}