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

type AccountType = "owner" | "employee";

type RegisterBody = {
  accountType?: AccountType;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  companyName?: string;
  rhinoAccessCode?: string;
  customerNumber?: string;
};

function normalizeCompanyName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

async function emailAlreadyExists(cleanEmail: string) {
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

  return Boolean(
    existingProfiles &&
      existingProfiles.length > 0
  );
}

async function createAuthUser({
  firstName,
  lastName,
  companyName,
  cleanEmail,
  password,
}: {
  firstName: string;
  lastName: string;
  companyName: string;
  cleanEmail: string;
  password: string;
}) {
  const {
    data: createdUser,
    error: createUserError,
  } =
    await adminSupabase.auth.admin.createUser(
      {
        email: cleanEmail,
        password,
        email_confirm: true,
        user_metadata: {
          first_name: firstName,
          last_name: lastName,
          company_name: companyName,
        },
      }
    );

  if (createUserError) {
    throw createUserError;
  }

  const userId =
    createdUser.user?.id;

  if (!userId) {
    throw new Error(
      "The account could not be created."
    );
  }

  return userId;
}

async function createInitialAcademyProgress(
  userId: string
) {
  const {
    error: progressError,
  } = await adminSupabase
    .from(
      "academy_course_progress"
    )
    .upsert(
      {
        user_id: userId,
        current_lesson: 1,
        current_step: 1,
        last_page:
          "/dashboard/introductory-software-training",
        updated_at:
          new Date().toISOString(),
      },
      {
        onConflict: "user_id",
      }
    );

  if (progressError) {
    console.error(
      "Academy progress creation error:",
      progressError
    );
  }
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
    accountType = "employee",
    firstName,
    lastName,
    email,
    password,
    companyName,
    rhinoAccessCode,
    customerNumber,
  } = req.body as RegisterBody;

  if (
    accountType !== "owner" &&
    accountType !== "employee"
  ) {
    return res.status(400).json({
      error:
        "Please select a valid account type.",
    });
  }

  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !password ||
    !companyName?.trim()
  ) {
    return res.status(400).json({
      error:
        "Please complete every required field.",
    });
  }

  const cleanFirstName =
    firstName.trim();

  const cleanLastName =
    lastName.trim();

  const cleanCompanyName =
    companyName.trim();

  const cleanEmail =
    email.trim().toLowerCase();

  const cleanRhinoAccessCode =
    (
      rhinoAccessCode ||
      customerNumber ||
      ""
    )
      .trim()
      .toUpperCase();

  if (
    accountType === "employee" &&
    !cleanRhinoAccessCode
  ) {
    return res.status(400).json({
      error:
        "Please enter your Rhino Access Code.",
    });
  }

  try {
    if (
      await emailAlreadyExists(
        cleanEmail
      )
    ) {
      return res.status(409).json({
        error:
          "An account already exists with this email address. Please sign in instead.",
      });
    }

    /*
    ==================================================
    NEW COMPANY OWNER
    ==================================================
    */

    if (accountType === "owner") {
      let userId: string | null =
        null;

      try {
        userId =
          await createAuthUser({
            firstName:
              cleanFirstName,
            lastName:
              cleanLastName,
            companyName:
              cleanCompanyName,
            cleanEmail,
            password,
          });

        const now =
          new Date().toISOString();

        const {
          data: updatedProfile,
          error: profileError,
        } = await adminSupabase
          .from("profiles")
          .update({
            first_name:
              cleanFirstName,
            last_name:
              cleanLastName,
            email:
              cleanEmail,
            company_name:
              cleanCompanyName,
            company_id: null,
            role: "user",
            is_active: true,
            last_active_at: now,
            updated_at: now,
          })
          .eq("id", userId)
          .select("id")
          .maybeSingle();

        if (
          profileError ||
          !updatedProfile
        ) {
          console.error(
            "Owner profile update error:",
            profileError
          );

          throw new Error(
            "The login was created, but the owner profile could not be prepared."
          );
        }

        await createInitialAcademyProgress(
          userId
        );

        return res.status(200).json({
          success: true,
          accountType: "owner",
          message:
            "Your account has been created. Sign in to continue to purchasing.",
          user: {
            id: userId,
            firstName:
              cleanFirstName,
            lastName:
              cleanLastName,
            email:
              cleanEmail,
          },
          company: {
            name:
              cleanCompanyName,
            rhinoAccessCode: null,
          },
        });
      } catch (error: any) {
        console.error(
          "Owner registration error:",
          error
        );

        if (userId) {
          await adminSupabase
            .auth
            .admin
            .deleteUser(userId);
        }

        if (
          error?.message
            ?.toLowerCase()
            .includes("already")
        ) {
          return res.status(409).json({
            error:
              "An account already exists with this email address.",
          });
        }

        return res.status(400).json({
          error:
            error?.message ||
            "Unable to create the owner account.",
        });
      }
    }

    /*
    ==================================================
    EXISTING COMPANY EMPLOYEE
    ==================================================
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
      .eq(
        "customer_number",
        cleanRhinoAccessCode
      )
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
          "The Rhino Access Code you entered could not be found.",
      });
    }

    const enteredCompany =
      normalizeCompanyName(
        cleanCompanyName
      );

    const actualCompany =
      normalizeCompanyName(
        company.company_name
      );

    if (
      enteredCompany !==
      actualCompany
    ) {
      return res.status(400).json({
        error:
          "The company name does not match the Rhino Access Code.",
      });
    }

    if (
      company.access_status !==
      "active"
    ) {
      return res.status(403).json({
        error:
          "This company's Rhino Wrangler access is not currently active.",
      });
    }

    const {
      count: activeSeatCount,
      error: seatError,
    } = await adminSupabase
      .from("profiles")
      .select("id", {
        count: "exact",
        head: true,
      })
      .eq(
        "company_id",
        company.id
      )
      .eq(
        "is_active",
        true
      );

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

    let userId:
      | string
      | null = null;

    try {
      userId =
        await createAuthUser({
          firstName:
            cleanFirstName,
          lastName:
            cleanLastName,
          companyName:
            company.company_name,
          cleanEmail,
          password,
        });
    } catch (
      createUserError: any
    ) {
      console.error(
        "Auth user creation error:",
        createUserError
      );

      if (
        createUserError?.message
          ?.toLowerCase()
          .includes("already")
      ) {
        return res.status(409).json({
          error:
            "An account already exists with this email address.",
        });
      }

      return res.status(400).json({
        error:
          createUserError?.message ||
          "Unable to create the account.",
      });
    }

    const now =
      new Date().toISOString();

    const {
      data: updatedProfile,
      error: profileError,
    } = await adminSupabase
      .from("profiles")
      .update({
        first_name:
          cleanFirstName,
        last_name:
          cleanLastName,
        email:
          cleanEmail,
        company_name:
          company.company_name,
        company_id:
          company.id,
        role:
          "employee",
        is_active:
          true,
        last_active_at:
          now,
        updated_at:
          now,
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

      await adminSupabase
        .auth
        .admin
        .deleteUser(userId);

      return res.status(500).json({
        error:
          "The login was created, but the employee profile could not be linked to the company.",
      });
    }

    await createInitialAcademyProgress(
      userId
    );

    return res.status(200).json({
      success: true,
      accountType: "employee",
      message:
        "Your Rhino Wrangler account has been created.",
      user: {
        id:
          userId,
        firstName:
          cleanFirstName,
        lastName:
          cleanLastName,
        email:
          cleanEmail,
      },
      company: {
        name:
          company.company_name,
        rhinoAccessCode:
          company.customer_number,
        usedSeats:
          usedSeats + 1,
        seatLimit:
          company.seat_limit,
      },
    });
  } catch (error) {
    console.error(
      "Registration error:",
      error
    );

    return res.status(500).json({
      error:
        "Something unexpected happened while creating the account.",
    });
  }
}