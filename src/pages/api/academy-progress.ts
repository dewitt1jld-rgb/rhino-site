import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

type ProgressBody = {
  action?: "visit" | "complete";
  lessonNumber?: number;
  stepNumber?: number;
  page?: string;
};

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

  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return res.status(500).json({
        error: "Missing Supabase server configuration.",
      });
    }

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
    VERIFY USER
    --------------------------------------------------
    */

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Not authenticated.",
      });
    }

    const token = authHeader.replace(
      "Bearer ",
      ""
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return res.status(401).json({
        error: "Invalid user session.",
      });
    }

    /*
    --------------------------------------------------
    VALIDATE REQUEST
    --------------------------------------------------
    */

    const {
      action,
      lessonNumber,
      stepNumber,
      page,
    } = req.body as ProgressBody;

    if (
      action !== "visit" &&
      action !== "complete"
    ) {
      return res.status(400).json({
        error: "Invalid progress action.",
      });
    }

    if (
      !Number.isInteger(lessonNumber) ||
      !Number.isInteger(stepNumber) ||
      !lessonNumber ||
      !stepNumber
    ) {
      return res.status(400).json({
        error: "Invalid lesson or step number.",
      });
    }

    const now =
      new Date().toISOString();

    /*
    --------------------------------------------------
    USER OPENED A LESSON STEP
    --------------------------------------------------
    */

    if (action === "visit") {
      const {
        error: courseProgressError,
      } = await supabase
        .from("academy_course_progress")
        .upsert(
          {
            user_id: user.id,
            current_lesson: lessonNumber,
            current_step: stepNumber,
            last_page: page || null,
            updated_at: now,
          },
          {
            onConflict: "user_id",
          }
        );

      if (courseProgressError) {
        console.error(
          "Course progress error:",
          courseProgressError
        );

        return res.status(500).json({
          error:
            "Unable to save current course position.",
        });
      }

      return res.status(200).json({
        success: true,
        action: "visit",
      });
    }

    /*
    --------------------------------------------------
    USER COMPLETED A STEP
    --------------------------------------------------
    */

    if (action === "complete") {
      const {
        error: stepProgressError,
      } = await supabase
        .from("academy_progress")
        .upsert(
          {
            user_id: user.id,
            lesson_number: lessonNumber,
            step_number: stepNumber,
            completed: true,
            completed_at: now,
            updated_at: now,
          },
          {
            onConflict:
              "user_id,lesson_number,step_number",
          }
        );

      if (stepProgressError) {
        console.error(
          "Step progress error:",
          stepProgressError
        );

        return res.status(500).json({
          error:
            "Unable to save completed lesson step.",
        });
      }

      return res.status(200).json({
        success: true,
        action: "complete",
      });
    }
  } catch (error) {
    console.error(
      "Academy progress API error:",
      error
    );

    return res.status(500).json({
      error:
        "Unable to update training progress.",
    });
  }
}