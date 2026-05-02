import type { NextApiRequest, NextApiResponse } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing auth token." });
    }

    const token = authHeader.replace("Bearer ", "");

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(token);

    if (userError || !user?.email) {
      return res.status(401).json({ error: "Unauthorized." });
    }

    const adminEmails = getAdminEmails();

    if (!adminEmails.includes(user.email.toLowerCase())) {
      return res.status(403).json({ error: "Admin access required." });
    }

    const { data: classes, error: classesError } = await supabaseAdmin
      .from("training_classes")
      .select("*")
      .order("start_date", { ascending: true });

    if (classesError) {
      throw classesError;
    }

    const { data: reservations, error: reservationsError } =
      await supabaseAdmin
        .from("class_reservations")
        .select("*")
        .eq("status", "paid")
        .order("created_at", { ascending: false });

    if (reservationsError) {
      throw reservationsError;
    }

    const groupedClasses = (classes || []).map((trainingClass) => {
      const classReservations = (reservations || []).filter(
        (reservation) => reservation.class_id === trainingClass.id
      );

      return {
        ...trainingClass,
        reservations: classReservations,
        seats_taken: classReservations.length,
        seats_remaining: Math.max(
          (trainingClass.seat_limit || 10) - classReservations.length,
          0
        ),
      };
    });

    return res.status(200).json({
      classes: groupedClasses,
    });
  } catch (error) {
    console.error("Class admin API error:", error);
    return res.status(500).json({
      error: "Unable to load class reservations.",
    });
  }
}