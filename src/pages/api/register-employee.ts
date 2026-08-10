import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const adminSupabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

type RegisterBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  companyName?: string;
  customerNumber?: string;
};

function normalizeCompanyName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
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

  const {
    firstName,
    lastName,
    email,
    password,
    companyName,
    customerNumber,
  } = req.body as RegisterBody;

  /*
  ---------------------------------------
  BASIC VALIDATION
  ---------------------------------------
  */

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

  const cleanEmail = email.trim().toLowerCase();
  const cleanCustomerNumber = customerNumber.trim();

  try {
    /*
    ---------------------------------------
    1. FIND COMPANY
    ---------------------------------------
    */

    const {
      data: company,
      error: companyError,
    } = await adminSupabase
      .from("companies")
      .select(`
        id,
        company_name,
        customer_number,
        access_status,
        seat_limit
      `)
      .eq("customer_number", cleanCustomerNumber)
      .maybeSingle();

    if (companyError) {
      console.error(
        "Company lookup error:",
        companyError
      );

      return res.status(500).json({
        error:
          "We could not verify your company information.",
      });
    }

    if (!company) {
      return res.status(400).json({
        error:
          "The customer number you entered could not be found.",
      });
    }

    /*
    ---------------------------------------
    2. CHECK COMPANY NAME
    ---------------------------------------
    */

    const enteredCompany =
      normalizeCompanyName(
        companyName.trim()
      );

    const actualCompany =
      normalizeCompanyName(
        company.company_name
      );

    if (enteredCompany !== actualCompany) {
      return res.status(400).json({
        error:
          "The company name does not match the customer number.",
      });
    }

    /*
    ---------------------------------------
    3. CHECK COMPANY ACCESS
    ---------------------------------------
    */

    if (company.access_status !== "active") {
      return res.status(403).json({
        error:
          "This company's Rhino Wrangler access is not currently active.",
      });
    }

    /*
    ---------------------------------------
    4. CHECK CURRENT SEAT USAGE
    ---------------------------------------
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
      console.error(
        "Seat count error:",
        seatError
      );

      return res.status(500).json({
        error:
          "We could not verify the company's available seats.",
      });
    }

    const usedSeats =
      activeSeatCount ?? 0;

    if (
      usedSeats >=
      company.seat_limit
    ) {
      return res.status(403).json({
        error:
          `${company.company_name} has reached its current ${company.seat_limit}-user limit. Please contact The Rhino Wrangler to increase the company seat limit.`,
      });
    }

    /*
    ---------------------------------------
    5. CHECK FOR EXISTING AUTH USER
    ---------------------------------------
    */

    const {
      data: existingProfiles,
      error: existingProfileError,
    } = await adminSupabase
      .from("profiles")
      .select("id, email")
      .eq("email", cleanEmail)
      .limit(1);

    if (existingProfileError) {
      console.error(
        "Existing profile check error:",
        existingProfileError
      );
    }

    if (
      existingProfiles &&
      existingProfiles.length > 0
    ) {
      return res.status(409).json({
        error:
          "An account already exists with this email address. Please sign in instead.",
      });
    }

    /*
    ---------------------------------------
    6. CREATE SUPABASE AUTH USER
    ---------------------------------------
    */

    const {
      data: createdUser,
      error: createUserError,
    } =
      await adminSupabase.auth.admin.createUser(
        {
          email: cleanEmail,
          password,

          /*
            This marks the account confirmed immediately.
            No confirmation email is required.
          */
          email_confirm: true,

          user_metadata: {
            first_name:
              firstName.trim(),

            last_name:
              lastName.trim(),

            company_name:
              company.company_name,
          },
        }
      );

    if (createUserError) {
      console.error(
        "Auth user creation error:",
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
        error:
          createUserError.message,
      });
    }

    const userId =
      createdUser.user?.id;

    if (!userId) {
      return res.status(500).json({
        error:
          "The account could not be created.",
      });
    }

    /*
    ---------------------------------------
    7. UPDATE AUTO-CREATED PROFILE
    ---------------------------------------

    Your existing Supabase trigger creates
    the profiles row when auth.users is
    created.

    Therefore we UPDATE instead of INSERT.
    */

    const {
      data: updatedProfile,
      error: profileError,
    } = await adminSupabase
      .from("profiles")
      .update({
        first_name:
          firstName.trim(),

        last_name:
          lastName.trim(),

        email: cleanEmail,

        company_name:
          company.company_name,

        company_id:
          company.id,

        role:
          "employee",

        is_active:
          true,

        last_active_at:
          new Date().toISOString(),

        updated_at:
          new Date().toISOString(),
      })
      .eq("id", userId)
      .select("id")
      .maybeSingle();

    if (
      profileError ||
      !updatedProfile
    ) {
      console.error(
        "Profile update error:",
        profileError
      );

      /*
        Prevent a half-created account.
      */

      await adminSupabase
        .auth
        .admin
        .deleteUser(userId);

      return res.status(500).json({
        error:
          "The login was created, but the employee profile could not be linked to the company.",
      });
    }

    /*
    ---------------------------------------
    8. CREATE INITIAL ACADEMY PROGRESS
    ---------------------------------------
    */

    const {
      error: progressError,
    } = await adminSupabase
      .from(
        "academy_course_progress"
      )
      .upsert(
        {
          user_id:
            userId,

          current_lesson:
            1,

          current_step:
            1,

          last_page:
            "/dashboard/introductory-software-training",

          updated_at:
            new Date().toISOString(),
        },
        {
          onConflict:
            "user_id",
        }
      );

    if (progressError) {
      /*
        Don't destroy the account just
        because course progress failed.

        The user can still sign in and we
        can repair progress later.
      */

      console.error(
        "Academy progress creation error:",
        progressError
      );
    }

    /*
    ---------------------------------------
    SUCCESS
    ---------------------------------------
    */

    return res.status(200).json({
      success: true,

      message:
        "Your Rhino Wrangler account has been created.",

      user: {
        id: userId,
        firstName:
          firstName.trim(),

        lastName:
          lastName.trim(),

        email:
          cleanEmail,
      },

      company: {
        name:
          company.company_name,

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
        "Something unexpected happened while creating the account.",
    });
  }
}