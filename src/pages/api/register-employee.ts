import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const adminSupabase = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

type RegisterBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  companyName?: string;
  customerNumber?: string;
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

  const {
    firstName,
    lastName,
    email,
    password,
    companyName,
    customerNumber,
  } = req.body as RegisterBody;

  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !password ||
    !companyName?.trim() ||
    !customerNumber?.trim()
  ) {
    return res.status(400).json({
      error: "Please complete every field.",
    });
  }

  try {
    /*
      --------------------------------------------------
      1. FIND THE COMPANY
      --------------------------------------------------
    */

    const { data: company, error: companyError } =
      await adminSupabase
        .from("companies")
        .select(
          `
          id,
          company_name,
          customer_number,
          access_status,
          seat_limit
          `
        )
        .eq("customer_number", customerNumber.trim())
        .maybeSingle();

    if (companyError) {
      console.error("Company lookup error:", companyError);

      return res.status(500).json({
        error: "Unable to verify the company.",
      });
    }

    if (!company) {
      return res.status(400).json({
        error:
          "The customer number you entered could not be found.",
      });
    }

    /*
      --------------------------------------------------
      2. VERIFY COMPANY NAME
      --------------------------------------------------
    */

    const normalizeCompanyName = (value: string) =>
      value
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const enteredCompany =
      normalizeCompanyName(companyName.trim());

    const storedCompany =
      normalizeCompanyName(company.company_name);

    if (enteredCompany !== storedCompany) {
      return res.status(400).json({
        error:
          "The company name does not match the customer number.",
      });
    }

    /*
      --------------------------------------------------
      3. VERIFY COMPANY ACCESS
      --------------------------------------------------
    */

    if (company.access_status !== "active") {
      return res.status(403).json({
        error:
          "This company's Rhino Wrangler access is not currently active.",
      });
    }

    /*
      --------------------------------------------------
      4. COUNT ACTIVE SEATS
      --------------------------------------------------
    */

    const {
      count: activeSeatCount,
      error: seatError,
    } = await adminSupabase
      .from("profiles")
      .select("id", {
        count: "exact",
        head: true,
      })
      .eq("company_id", company.id)
      .eq("is_active", true);

    if (seatError) {
      console.error("Seat count error:", seatError);

      return res.status(500).json({
        error: "Unable to verify available seats.",
      });
    }

    const usedSeats = activeSeatCount ?? 0;

    if (usedSeats >= company.seat_limit) {
      return res.status(403).json({
        error: `${company.company_name} has reached its current user limit of ${company.seat_limit} seats. Please contact The Rhino Wrangler to increase the seat limit.`,
      });
    }

    /*
      --------------------------------------------------
      5. CREATE SUPABASE AUTH USER
      --------------------------------------------------
    */

    const {
      data: createdUser,
      error: createUserError,
    } = await adminSupabase.auth.admin.createUser({
      email: email.trim().toLowerCase(),
      password,
      email_confirm: true,
      user_metadata: {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        company_name: company.company_name,
      },
    });

    if (createUserError) {
      console.error(
        "Supabase user creation error:",
        createUserError
      );

      if (
        createUserError.message
          .toLowerCase()
          .includes("already")
      ) {
        return res.status(409).json({
          error:
            "An account already exists with this email address.",
        });
      }

      return res.status(400).json({
        error: createUserError.message,
      });
    }

    const userId = createdUser.user?.id;

    if (!userId) {
      return res.status(500).json({
        error:
          "The account was created but no user ID was returned.",
      });
    }

    /*
      --------------------------------------------------
      6. CREATE THE RHINO WRANGLER PROFILE
      --------------------------------------------------
    */

    const { error: profileError } =
      await adminSupabase
        .from("profiles")
        .insert({
          id: userId,

          first_name: firstName.trim(),
          last_name: lastName.trim(),

          email: email
            .trim()
            .toLowerCase(),

          company_name:
            company.company_name,

          company_id:
            company.id,

          role: "employee",

          is_active: true,

          last_active_at:
            new Date().toISOString(),
        });

    if (profileError) {
      console.error(
        "Profile creation error:",
        profileError
      );

      /*
        Remove the Auth user if the profile creation failed.
        This prevents us from leaving a half-created account.
      */

      await adminSupabase.auth.admin.deleteUser(
        userId
      );

      return res.status(500).json({
        error:
          "The user account could not be linked to the company.",
      });
    }

    /*
      --------------------------------------------------
      7. CREATE INITIAL ACADEMY POSITION
      --------------------------------------------------
    */

    await adminSupabase
      .from("academy_course_progress")
      .upsert({
        user_id: userId,

        current_lesson: 1,
        current_step: 1,

        last_page:
          "/dashboard/introductory-software-training",

        updated_at:
          new Date().toISOString(),
      });

    /*
      --------------------------------------------------
      SUCCESS
      --------------------------------------------------
    */

    return res.status(200).json({
      success: true,

      message:
        "Your Rhino Wrangler account has been created.",

      company: {
        name: company.company_name,
        customerNumber:
          company.customer_number,

        usedSeats:
          usedSeats + 1,

        seatLimit:
          company.seat_limit,
      },
    });
  } catch (error) {
    console.error(
      "Employee registration error:",
      error
    );

    return res.status(500).json({
      error:
        "Something went wrong while creating the account.",
    });
  }
}