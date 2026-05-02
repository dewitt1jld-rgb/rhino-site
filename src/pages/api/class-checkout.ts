import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabaseAdmin = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, companyName, classId } = req.body;

    if (!name || !email || !companyName || !classId) {
      return res.status(400).json({
        error: "Name, email, company name, and class ID are required.",
      });
    }

    // 1. Get the selected class
    const { data: trainingClass, error: classError } = await supabaseAdmin
      .from("training_classes")
      .select("*")
      .eq("id", classId)
      .single();

    if (classError || !trainingClass) {
      console.error("Class lookup error:", classError);
      return res.status(404).json({ error: "Training class not found." });
    }

    if (trainingClass.status !== "open") {
      return res.status(400).json({
        error: "This class is not currently open for registration.",
      });
    }

    // 2. Count paid reservations for this exact class
    const { count, error: countError } = await supabaseAdmin
      .from("class_reservations")
      .select("id", { count: "exact", head: true })
      .eq("class_id", classId)
      .eq("status", "paid");

    if (countError) {
      console.error("Seat count error:", countError);
      return res.status(500).json({
        error: "Unable to check class availability.",
      });
    }

    const seatsTaken = count || 0;
    const seatLimit = trainingClass.seat_limit || 10;

    if (seatsTaken >= seatLimit) {
      return res.status(409).json({
        error: "This class is sold out.",
      });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // 3. Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price: process.env.STRIPE_CLASS_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/classes?classPayment=success`,
      cancel_url: `${baseUrl}/classes?classPayment=cancelled`,
      metadata: {
        purchase_type: "virtual_class",
        class_id: classId,
        class_name: trainingClass.title || "",
        class_dates: `${trainingClass.start_date} to ${trainingClass.end_date}`,
        class_timezone: trainingClass.timezone || "Eastern Time",
        student_name: name,
        student_email: email,
        company_name: companyName,
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Class checkout error:", error);
    return res.status(500).json({
      error: "Unable to start class checkout.",
    });
  }
}