import type { NextApiRequest, NextApiResponse } from "next";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function toDateOnly(date: Date) {
  return date.toISOString().slice(0, 10);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const today = new Date();

  const reminderTargets = [
    {
      daysBefore: 14,
      column: "reminder_14_day_sent_at",
      label: "2 weeks",
      targetDate: toDateOnly(addDays(today, 14)),
    },
    {
      daysBefore: 7,
      column: "reminder_7_day_sent_at",
      label: "1 week",
      targetDate: toDateOnly(addDays(today, 7)),
    },
    {
      daysBefore: 3,
      column: "reminder_3_day_sent_at",
      label: "3 days",
      targetDate: toDateOnly(addDays(today, 3)),
    },
  ];

  const results = [];

  for (const reminder of reminderTargets) {
    const { data: reservations, error } = await supabaseAdmin
      .from("class_reservations")
      .select(
        `
        id,
        student_name,
        student_email,
        company_name,
        status,
        reminder_14_day_sent_at,
        reminder_7_day_sent_at,
        reminder_3_day_sent_at,
        training_classes (
          id,
          title,
          start_date,
          end_date,
          days,
          daily_time,
          start_time,
          end_time,
          timezone,
          instructor
        )
      `
      )
      .eq("status", "paid")
      .is(reminder.column, null)
      .eq("training_classes.start_date", reminder.targetDate);

    if (error) {
      console.error("Reminder lookup error:", error);
      results.push({ reminder: reminder.label, error: error.message });
      continue;
    }

    for (const reservation of reservations || []) {
      const trainingClass = Array.isArray(reservation.training_classes)
        ? reservation.training_classes[0]
        : reservation.training_classes;

      if (!trainingClass) continue;

      await sendEmail({
        to: reservation.student_email,
        subject: `Reminder: Rhino Wrangler Certified starts in ${reminder.label}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
            <h1>Your class starts in ${reminder.label}</h1>

            <p>Hi ${reservation.student_name || "there"},</p>

            <p>
              This is a reminder that your reserved seat for
              <strong>${trainingClass.title}</strong> is coming up.
            </p>

            <p>
              <strong>Company:</strong> ${reservation.company_name || ""}<br />
              <strong>Class Dates:</strong> ${trainingClass.start_date} to ${trainingClass.end_date}<br />
              <strong>Schedule:</strong> ${trainingClass.days || "Tuesday–Friday"}<br />
              <strong>Daily Length:</strong> ${trainingClass.daily_time || "6 hours per day"}<br />
              <strong>Class Time:</strong> ${trainingClass.start_time || "8:00 AM"} – ${trainingClass.end_time || "3:00 PM"}<br />
              <strong>Time Zone:</strong> ${trainingClass.timezone || "Eastern Time"}<br />
              <strong>Instructor:</strong> ${trainingClass.instructor || "Landon Dewitt"}
            </p>

            <h3>What to have ready</h3>
            <ul>
              <li>A reliable computer</li>
              <li>Stable internet connection</li>
              <li>Access to the software you will be training on</li>
              <li>Notebook or digital notes</li>
              <li>Questions from your team or workflow</li>
            </ul>

            <p>
              Webinar access details will be sent before class begins.
            </p>

            <p>
              Questions? Contact
              <a href="mailto:landon@therhinowrangler.com">landon@therhinowrangler.com</a>
            </p>

            <hr />

            <p style="font-size: 13px; color: #6b7280;">
              The Rhino Wrangler is an independent training program and is not affiliated
              with, sponsored by, or endorsed by DeMichele Group.
            </p>
          </div>
        `,
      });

      const { error: updateError } = await supabaseAdmin
        .from("class_reservations")
        .update({
          [reminder.column]: new Date().toISOString(),
        })
        .eq("id", reservation.id);

      if (updateError) {
        console.error("Reminder update error:", updateError);
      }

      results.push({
        reservationId: reservation.id,
        email: reservation.student_email,
        reminder: reminder.label,
      });
    }
  }

  return res.status(200).json({
    ok: true,
    sent: results,
  });
}