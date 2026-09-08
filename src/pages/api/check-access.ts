import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import {
  createClient,
} from "@supabase/supabase-js";

const supabase =
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authHeader =
    req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "No auth",
    });
  }

  const token =
    authHeader.replace(
      "Bearer ",
      ""
    );

  const {
    data: {
      user,
    },
    error:
      userError,
  } =
    await supabase.auth.getUser(
      token
    );

  if (
    userError ||
    !user
  ) {
    return res.status(401).json({
      error: "No user",
    });
  }

  /*
  --------------------------------------------------
  1. CHECK COMPANY-BASED ACCESS SYSTEM
  --------------------------------------------------
  */

  const {
    data:
      profile,
    error:
      profileError,
  } =
    await supabase
      .from(
        "profiles"
      )
      .select(`
        id,
        company_id,
        is_active,
        companies (
          id,
          company_name,
          customer_number,
          plan_type,
          platform_access,
          support_included,
          access_status,
          seat_limit,
          stripe_customer_id,
          platform_subscription_id,
          support_subscription_id,
          payment_status,
          payment_failed_at,
          payment_grace_end
        )
      `)
      .eq(
        "id",
        user.id
      )
      .maybeSingle();

  if (
    profileError
  ) {
    console.error(
      "Profile access lookup error:",
      profileError
    );
  }

  /*
  --------------------------------------------------
  COMPANY ACCESS IS SOURCE OF TRUTH
  --------------------------------------------------
  */

  if (
    profile?.company_id
  ) {
    const company =
      Array.isArray(
        profile.companies
      )
        ? profile.companies[0]
        : profile.companies;

    /*
    --------------------------------------------------
    LOAD COMPANY MACHINES
    --------------------------------------------------

    We still load the base machine identity here.

    The actual machine capabilities are resolved
    afterward through:

    get_resolved_machine_profile(...)
    --------------------------------------------------
    */

    const {
      data:
        companyMachineRows,
      error:
        machineError,
    } =
      await supabase
        .from(
          "company_machines"
        )
        .select(`
          id,
          machine_model_id,
          nickname,
          serial_number,
          is_primary,
          is_active,
          rhino_machine_models (
            id,
            model_code,
            base_model,
            feed_direction,
            display_name,
            is_active
          )
        `)
        .eq(
          "company_id",
          profile.company_id
        )
        .eq(
          "is_active",
          true
        );

    if (
      machineError
    ) {
      console.error(
        "Company machine lookup error:",
        machineError
      );
    }

    /*
    --------------------------------------------------
    RESOLVE MACHINE CAPABILITIES
    --------------------------------------------------

    For every physical company machine:

    1. Load normal model defaults
    2. Apply company-specific overrides
    3. Return one authoritative machine profile

    If capability resolution fails, we still return
    the machine identity but DO NOT invent any
    capabilities.
    --------------------------------------------------
    */

    const machines =
      await Promise.all(
        (
          companyMachineRows ??
          []
        ).map(
          async (
            row: any
          ) => {
            const machineModel =
              Array.isArray(
                row.rhino_machine_models
              )
                ? row.rhino_machine_models[0]
                : row.rhino_machine_models;

            /*
            Machine model relationship is missing.

            This should be unusual, but safely skip
            an invalid company-machine record rather
            than inventing model information.
            */

            if (
              !machineModel
            ) {
              console.error(
                "Company machine has no Rhino machine model:",
                row.id
              );

              return null;
            }

            /*
            ------------------------------------------
            RESOLVED PROFILE
            ------------------------------------------
            */

            const {
              data:
                resolvedProfile,
              error:
                resolvedProfileError,
            } =
              await supabase.rpc(
                "get_resolved_machine_profile",
                {
                  p_company_machine_id:
                    row.id,
                }
              );

            if (
              resolvedProfileError
            ) {
              console.error(
                "Failed to resolve machine profile:",
                row.id,
                resolvedProfileError
              );

              /*
              ----------------------------------------
              SAFE FALLBACK

              Machine identity is known.

              Capabilities are not.

              This is preferable to guessing.
              ----------------------------------------
              */

              return {
                companyMachineId:
                  row.id,

                machineModelId:
                  machineModel.id,

                modelCode:
                  machineModel.model_code,

                baseModel:
                  machineModel.base_model,

                feedDirection:
                  machineModel.feed_direction,

                displayName:
                  machineModel.display_name,

                nickname:
                  row.nickname,

                serialNumber:
                  row.serial_number,

                isPrimary:
                  row.is_primary,

                capabilitiesResolved:
                  false,

                motorSize:
                  null,

                slideSize:
                  null,

                sawType:
                  null,

                pieceLoadDirection:
                  null,

                cut90:
                  null,

                cutMiter:
                  null,

                cutBevel:
                  null,

                cutCompound:
                  null,

                hasRotationalOffset:
                  null,

                frontDrill:
                  null,

                topDrill:
                  null,

                bottomDrill:
                  null,

                backDrill:
                  null,

                drillAssemblyCount:
                  null,

                drillConfiguration:
                  null,

                hasRobot:
                  null,

                hasStationaryToolChanger:
                  null,

                hasRobotToolChanger:
                  null,

                hasLinearEncoder:
                  null,

                fluidCooledMotors:
                  null,

                doorCapable:
                  null,

                digitalHClampPressure:
                  null,

                digitalClutchPressure:
                  null,

                supportedForAI:
                  null,

                overrides:
                  {},
              };
            }

            /*
            ------------------------------------------
            SUCCESS

            resolvedProfile already contains:

            - identity
            - model defaults
            - company overrides
            - final resolved capabilities
            ------------------------------------------
            */

            return {
              ...resolvedProfile,

              capabilitiesResolved:
                true,
            };
          }
        )
      );

    /*
    Remove any invalid/null machine records.
    */

    const resolvedMachines =
      machines.filter(
        Boolean
      );

    /*
    --------------------------------------------------
    PRIMARY MACHINE
    --------------------------------------------------
    */

    const primaryMachine =
      resolvedMachines.find(
        (
          machine:
            any
        ) =>
          machine.isPrimary ===
          true
      ) ??
      null;

    /*
    --------------------------------------------------
    REUSABLE COMPANY RESPONSE
    --------------------------------------------------
    */

    const companyResponse =
      company
        ? {
            id:
              company.id,

            name:
              company.company_name,

            customerNumber:
              company.customer_number,

            seatLimit:
              company.seat_limit,

            planType:
              company.plan_type,

            platformAccess:
              company.platform_access,

            supportIncluded:
              company.support_included,

            paymentStatus:
              company.payment_status,

            paymentFailedAt:
              company.payment_failed_at,

            paymentGraceEnd:
              company.payment_grace_end,

            /*
            ------------------------------------------
            FULL RESOLVED MACHINE DATA
            ------------------------------------------
            */

            machines:
              resolvedMachines,

            primaryMachine,
          }
        : null;

    /*
    --------------------------------------------------
    USER ACCOUNT MUST BE ACTIVE
    --------------------------------------------------
    */

    if (
      profile.is_active ===
      false
    ) {
      return res
        .status(
          200
        )
        .json({
          status:
            "inactive",

          hasAccess:
            false,

          source:
            "company",

          reason:
            "user_inactive",

          company:
            companyResponse,
        });
    }

    /*
    --------------------------------------------------
    PAYMENT GRACE PERIOD
    --------------------------------------------------

    If a recurring payment has failed,
    customers retain access until the
    grace-period deadline.

    Once that deadline passes, training
    access is denied.
    --------------------------------------------------
    */

    if (
      company
        ?.payment_status ===
        "past_due" &&
      company
        ?.payment_grace_end
    ) {
      const now =
        new Date();

      const graceEnd =
        new Date(
          company
            .payment_grace_end
        );

      if (
        !Number.isNaN(
          graceEnd.getTime()
        )
      ) {
        /*
        --------------------------------------------------
        GRACE PERIOD EXPIRED
        --------------------------------------------------
        */

        if (
          now >=
          graceEnd
        ) {
          return res
            .status(
              200
            )
            .json({
              status:
                "payment_past_due",

              hasAccess:
                false,

              source:
                "company",

              reason:
                "payment_grace_expired",

              company:
                companyResponse,
            });
        }

        /*
        --------------------------------------------------
        STILL INSIDE GRACE PERIOD

        Continue to normal access rules below.
        --------------------------------------------------
        */
      }
    }

    /*
    --------------------------------------------------
    COMPANY HAS PLATFORM ACCESS
    --------------------------------------------------
    */

    if (
      company
        ?.access_status ===
        "active" &&
      company
        ?.platform_access ===
        true
    ) {
      return res
        .status(
          200
        )
        .json({
          status:
            company
              .payment_status ===
            "past_due"
              ? "payment_grace"
              : "active",

          hasAccess:
            true,

          source:
            "company",

          reason:
            company
              .payment_status ===
            "past_due"
              ? "payment_grace"
              : undefined,

          company:
            companyResponse,
        });
    }

    /*
    --------------------------------------------------
    SUPPORT-ONLY COMPANY
    --------------------------------------------------
    */

    if (
      company
        ?.access_status ===
        "active" &&
      company
        ?.platform_access !==
        true &&
      company
        ?.support_included ===
        true
    ) {
      return res
        .status(
          200
        )
        .json({
          status:
            "support_only",

          hasAccess:
            false,

          source:
            "company",

          reason:
            "support_only",

          company:
            companyResponse,
        });
    }

    /*
    --------------------------------------------------
    INACTIVE COMPANY
    --------------------------------------------------
    */

    return res
      .status(
        200
      )
      .json({
        status:
          "inactive",

        hasAccess:
          false,

        source:
          "company",

        reason:
          "company_inactive",

        company:
          companyResponse,
      });
  }

  /*
  --------------------------------------------------
  2. FALL BACK TO OLD MEMBER_ACCESS SYSTEM
  --------------------------------------------------
  */

  const {
    data:
      memberAccess,
    error:
      memberAccessError,
  } =
    await supabase
      .from(
        "member_access"
      )
      .select(
        "status"
      )
      .eq(
        "profile_id",
        user.id
      )
      .maybeSingle();

  if (
    memberAccessError
  ) {
    console.error(
      "Legacy member access lookup error:",
      memberAccessError
    );
  }

  return res
    .status(
      200
    )
    .json({
      status:
        memberAccess
          ?.status ??
        "inactive",

      hasAccess:
        memberAccess
          ?.status ===
        "active",

      source:
        "member_access",
    });
}