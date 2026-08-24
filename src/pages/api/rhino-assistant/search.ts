import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import {
  createClient,
} from "@supabase/supabase-js";

const supabaseAdmin =
  createClient(
    process.env
      .NEXT_PUBLIC_SUPABASE_URL!,

    process.env
      .SUPABASE_SERVICE_ROLE_KEY!
  );

type KnowledgeResult = {
  id: string;
  title: string;
  section_title: string;
  category: string;
  subcategory: string | null;
  machine_models: string[];
  keywords: string[];
  content: string;
  warnings: string | null;
  source_url: string;
  risk_level:
    | "normal"
    | "caution"
    | "high";
};

type TerminologyRecord = {
  id: string;
  official_term: string;
  aliases: string[];
  description: string | null;
  category: string | null;
};

type ScoredKnowledgeResult =
  KnowledgeResult & {
    score: number;
  };

function normalizeText(
  value: string
) {
  return value
    .toLowerCase()
    .replace(
      /[^a-z0-9./"-]+/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

function getQuestionWords(
  question: string
) {
  const ignoredWords =
    new Set([
      "the",
      "and",
      "for",
      "that",
      "this",
      "with",
      "from",
      "have",
      "has",
      "are",
      "was",
      "were",
      "what",
      "when",
      "where",
      "which",
      "why",
      "how",
      "can",
      "could",
      "would",
      "should",
      "does",
      "did",
      "into",
      "about",
      "your",
      "you",
      "our",
      "but",
      "not",
      "its",
      "too",
      "all",
      "out",
      "one",
      "two",
      "three",
      "four",
      "five",
    ]);

  return normalizeText(
    question
  )
    .split(" ")
    .filter(
      (word) =>
        word.length >
          2 &&
        !ignoredWords.has(
          word
        )
    );
}
function scoreRecord(
  question: string,
  record: KnowledgeResult,
  machine?: {
    modelCode?: string;
    baseModel?: string;
    feedDirection?: string;
  } | null
) {
  const normalizedQuestion =
    normalizeText(
      question
    );

  const questionWords =
    getQuestionWords(
      question
    );

  const title =
    normalizeText(
      record.title
    );

  const section =
    normalizeText(
      record.section_title
    );

  const category =
    normalizeText(
      record.category
    );

  const subcategory =
    normalizeText(
      record.subcategory ??
        ""
    );

  const content =
    normalizeText(
      record.content
    );

  const warnings =
    normalizeText(
      record.warnings ??
        ""
    );

  const keywords =
    (
      record.keywords ??
      []
    ).map(
      normalizeText
    );

  const machineModels =
    (
      record.machine_models ??
      []
    ).map(
      normalizeText
    );

    const selectedModelCode =
  normalizeText(
    machine?.modelCode ?? ""
  );

const selectedBaseModel =
  normalizeText(
    machine?.baseModel ?? ""
  );

const selectedFeedDirection =
  normalizeText(
    machine?.feedDirection ?? ""
  );

  let score = 0;

  for (
    const keyword
    of keywords
  ) {
    if (
      keyword &&
      normalizedQuestion.includes(
        keyword
      )
    ) {
      score += 18;
    }
  }

  for (
    const machine
    of machineModels
  ) {
    if (
      machine &&
      normalizedQuestion.includes(
        machine
      )
    ) {
      score += 22;
    }
  }

  for (
    const word
    of questionWords
  ) {
    if (
      title.includes(
        word
      )
    ) {
      score += 5;
    }

    if (
      section.includes(
        word
      )
    ) {
      score += 8;
    }

    if (
      category.includes(
        word
      )
    ) {
      score += 2;
    }

    if (
      subcategory.includes(
        word
      )
    ) {
      score += 3;
    }

    if (
      keywords.some(
        (
          keyword
        ) =>
          keyword.includes(
            word
          )
      )
    ) {
      score += 6;
    }

    if (
      content.includes(
        word
      )
    ) {
      score += 1;
    }

    if (
      warnings.includes(
        word
      )
    ) {
      score += 1;
    }
  }

  const firstPieceLanguage =
    normalizedQuestion.includes(
      "first piece"
    ) ||
    normalizedQuestion.includes(
      "first part"
    );

  const remainingPiecesCorrect =
    normalizedQuestion.includes(
      "other pieces"
    ) ||
    normalizedQuestion.includes(
      "rest are correct"
    ) ||
    normalizedQuestion.includes(
      "others are correct"
    ) ||
    normalizedQuestion.includes(
      "everything after"
    ) ||
    normalizedQuestion.includes(
      "next pieces"
    );

  if (
    firstPieceLanguage &&
    remainingPiecesCorrect &&
    section.includes(
      "first piece error"
    )
  ) {
    score += 35;
  }

  const inconsistentLanguage =
    normalizedQuestion.includes(
      "inconsistent"
    ) ||
    normalizedQuestion.includes(
      "random"
    ) ||
    normalizedQuestion.includes(
      "different lengths"
    ) ||
    normalizedQuestion.includes(
      "different every time"
    );

  if (
    inconsistentLanguage &&
    section.includes(
      "coasting"
    )
  ) {
    score += 30;
  }

  const fabOnlyLanguage =
    normalizedQuestion.includes(
      "fab only"
    ) ||
    normalizedQuestion.includes(
      "door"
    );

  const yLocationLanguage =
    normalizedQuestion.includes(
      "y location"
    ) ||
    normalizedQuestion.includes(
      "hole location"
    ) ||
    normalizedQuestion.includes(
      "drill location"
    );

  if (
    fabOnlyLanguage &&
    yLocationLanguage &&
    section.includes(
      "pusher calibration"
    )
  ) {
    score += 30;
  }

  const angledCutLanguage =
    normalizedQuestion.includes(
      "miter"
    ) ||
    normalizedQuestion.includes(
      "bevel"
    ) ||
    normalizedQuestion.includes(
      "compound"
    ) ||
    normalizedQuestion.includes(
      "angled"
    );

  const ninetyCorrectLanguage =
    normalizedQuestion.includes(
      "90"
    ) &&
    (
      normalizedQuestion.includes(
        "correct"
      ) ||
      normalizedQuestion.includes(
        "right"
      )
    );

  if (
    angledCutLanguage &&
    ninetyCorrectLanguage &&
    section.includes(
      "miter cut length calibration"
    )
  ) {
    score += 28;
  }

/*
--------------------------------------------------
MACHINE CONTEXT
--------------------------------------------------

IMPORTANT:

Machine context may strengthen an article that is
ALREADY relevant to the user's question.

Machine context must NEVER create relevance by itself.

Example:

"What hydraulic pressure should I use?"

should not retrieve an unrelated 5600 article simply
because the customer owns a 5600.
--------------------------------------------------
*/

const topicalScoreBeforeMachineContext =
  score;

/*
Only apply machine bonuses if the question already
matched this knowledge record on its own.
*/

if (
  topicalScoreBeforeMachineContext >=
  8
) {
  if (
    selectedModelCode &&
    machineModels.includes(
      selectedModelCode
    )
  ) {
    score += 40;
  }

  if (
    selectedBaseModel &&
    machineModels.includes(
      selectedBaseModel
    )
  ) {
    score += 25;
  }

  if (
    selectedBaseModel &&
    content.includes(
      selectedBaseModel
    )
  ) {
    score += 6;
  }

  if (
    selectedModelCode &&
    content.includes(
      selectedModelCode
    )
  ) {
    score += 8;
  }

  /*
  --------------------------------------------------
  FEED DIRECTION
  --------------------------------------------------
  */

  if (
    selectedFeedDirection ===
      "left" &&
    (
      section.includes(
        "left"
      ) ||
      content.includes(
        "left feed"
      ) ||
      content.includes(
        "feeds from the left"
      )
    )
  ) {
    score += 15;
  }

  if (
    selectedFeedDirection ===
      "right" &&
    (
      section.includes(
        "right"
      ) ||
      content.includes(
        "right feed"
      ) ||
      content.includes(
        "feeds from the right"
      )
    )
  ) {
    score += 15;
  }
}

function findTerminologyCandidates(
  question: string,
  terminology:
    TerminologyRecord[]
) {
  const normalizedQuestion =
    normalizeText(
      question
    );

  const questionWords =
    getQuestionWords(
      question
    );

  return terminology
    .map(
      (
        record
      ) => {
        const official =
          normalizeText(
            record.official_term
          );

        const aliases =
          (
            record.aliases ??
            []
          ).map(
            normalizeText
          );

        let score = 0;
        let exactAliasMatch =
          false;
        let exactOfficialMatch =
          false;

        if (
          normalizedQuestion.includes(
            official
          )
        ) {
          score += 40;
          exactOfficialMatch =
            true;
        }

        for (
          const alias
          of aliases
        ) {
          if (
            normalizedQuestion.includes(
              alias
            )
          ) {
            score += 35;
            exactAliasMatch =
              true;
          }
        }

        for (
          const word
          of questionWords
        ) {
          if (
            official.includes(
              word
            )
          ) {
            score += 6;
          }

          if (
            aliases.some(
              (
                alias
              ) =>
                alias.includes(
                  word
                )
            )
          ) {
            score += 5;
          }
        }

        return {
          ...record,
          score,
          exactAliasMatch,
          exactOfficialMatch,
        };
      }
    )
    .filter(
      (
        record
      ) =>
        record.score >
        0
    )
    .sort(
      (
        a,
        b
      ) =>
        b.score -
        a.score
    )
    .slice(
      0,
      3
    );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.method !==
    "POST"
  ) {
    return res
      .status(405)
      .json({
        error:
          "Method not allowed.",
      });
  }

  try {
    const token =
      req.headers.authorization
        ?.replace(
          "Bearer ",
          ""
        )
        .trim();

    if (!token) {
      return res
        .status(401)
        .json({
          error:
            "Authentication required.",
        });
    }

    const {
      data: {
        user,
      },
      error:
        userError,
    } =
      await supabaseAdmin.auth.getUser(
        token
      );

    if (
      userError ||
      !user
    ) {
      return res
        .status(401)
        .json({
          error:
            "Invalid session.",
        });
    }

    const question =
      String(
        req.body
          ?.question ??
          ""
      ).trim();

    if (
      question.length <
      3
    ) {
      return res
        .status(400)
        .json({
          error:
            "Please enter a question.",
        });
    }

    const machine =
  req.body?.machine ?? null;

const machineModelCode =
  String(
    machine?.modelCode ?? ""
  )
    .trim()
    .toLowerCase();

const machineBaseModel =
  String(
    machine?.baseModel ?? ""
  )
    .trim()
    .toLowerCase();

const machineFeedDirection =
  String(
    machine?.feedDirection ?? ""
  )
    .trim()
    .toLowerCase();

    const [
      knowledgeResponse,
      terminologyResponse,
    ] =
      await Promise.all([
        supabaseAdmin
          .from(
            "rhino_knowledge"
          )
          .select(`
            id,
            title,
            section_title,
            category,
            subcategory,
            machine_models,
            keywords,
            content,
            warnings,
            source_url,
            risk_level
          `)
          .eq(
            "is_active",
            true
          ),

        supabaseAdmin
          .from(
            "rhino_terminology"
          )
          .select(`
            id,
            official_term,
            aliases,
            description,
            category
          `)
          .eq(
            "is_active",
            true
          ),
      ]);

    if (
      knowledgeResponse.error
    ) {
      console.error(
        "Rhino knowledge query failed:",
        knowledgeResponse.error
      );

      return res
        .status(500)
        .json({
          error:
            "Unable to search the Rhino Wrangler knowledge base.",
        });
    }

    if (
      terminologyResponse.error
    ) {
      console.error(
        "Rhino terminology query failed:",
        terminologyResponse.error
      );

      return res
        .status(500)
        .json({
          error:
            "Unable to search Rhino Wrangler terminology.",
        });
    }

    const records =
      (
        knowledgeResponse.data ??
        []
      ) as KnowledgeResult[];

    const terminology =
      (
        terminologyResponse.data ??
        []
      ) as TerminologyRecord[];

    const scored:
      ScoredKnowledgeResult[] =
      records
        .map(
          (
            record
          ) => ({
            ...record,

            score:
              scoreRecord(
                question,
                record,
                  {
    modelCode:
      machineModelCode,

    baseModel:
      machineBaseModel,

    feedDirection:
      machineFeedDirection,
  }
)
              
          })
        )
        .filter(
          (
            record
          ) =>
            record.score >
            0
        )
        .sort(
          (
            a,
            b
          ) =>
            b.score -
            a.score
        );

    const topResults =
      scored.slice(
        0,
        5
      );

    const terminologyCandidates =
      findTerminologyCandidates(
        question,
        terminology
      );

    const topScore =
      topResults[0]
        ?.score ??
      0;

    const secondScore =
      topResults[1]
        ?.score ??
      0;

    const topTerminology =
      terminologyCandidates[0];

    let confidence:
      | "high"
      | "medium"
      | "low"
      | "none" =
      "none";

    if (
      topScore >=
        38 &&
      (
        secondScore ===
          0 ||
        topScore -
          secondScore >=
          8
      )
    ) {
      confidence =
        "high";
    } else if (
      topScore >=
      20
    ) {
      confidence =
        "medium";
    } else if (
      topScore >=
      8
    ) {
      confidence =
        "low";
    }

    let matchType:
      | "direct"
      | "possible_terminology"
      | "ambiguous"
      | "none" =
      "none";

    let recommendedBehavior:
      | "answer_with_sources"
      | "confirm_terminology"
      | "ask_clarifying_question"
      | "show_related_pages_only"
      | "no_answer" =
      "no_answer";

    /*
    --------------------------------------------------
    DIRECT DOCUMENTED MATCH
    --------------------------------------------------
    */

    if (
      confidence ===
      "high"
    ) {
      matchType =
        "direct";

      recommendedBehavior =
        "answer_with_sources";
    }

    /*
    --------------------------------------------------
    POSSIBLE TERMINOLOGY MATCH

    Only use this when we do NOT already have a
    strong direct knowledge match.
    --------------------------------------------------
    */

    else if (
      topTerminology &&
      topTerminology.score >=
        5
    ) {
      matchType =
        "possible_terminology";

      recommendedBehavior =
        "confirm_terminology";
    }

    /*
    --------------------------------------------------
    AMBIGUOUS KNOWLEDGE MATCH
    --------------------------------------------------
    */

    else if (
      confidence ===
      "medium"
    ) {
      matchType =
        "ambiguous";

      recommendedBehavior =
        "ask_clarifying_question";
    }

    /*
    --------------------------------------------------
    WEAK MATCH
    --------------------------------------------------
    */

    else if (
      confidence ===
      "low"
    ) {
      matchType =
        "ambiguous";

      recommendedBehavior =
        "show_related_pages_only";
    }

    return res
      .status(200)
      .json({
        success: true,

        question,

            machineContext: {
      modelCode:
        machineModelCode || null,

      baseModel:
        machineBaseModel || null,

      feedDirection:
        machineFeedDirection || null,
    },

        matchType,

        confidence,

        recommendedBehavior,

        terminologySuggestion:
          matchType ===
            "possible_terminology" &&
          topTerminology
            ? {
                officialTerm:
                  topTerminology
                    .official_term,

                description:
                  topTerminology
                    .description,

                category:
                  topTerminology
                    .category,

                score:
                  topTerminology
                    .score,
              }
            : null,

        resultCount:
          topResults.length,

        results:
          topResults.map(
            (
              result
            ) => ({
              id:
                result.id,

              title:
                result.title,

              sectionTitle:
                result.section_title,

              category:
                result.category,

              subcategory:
                result.subcategory,

              machineModels:
                result.machine_models,

              content:
                result.content,

              warnings:
                result.warnings,

              sourceUrl:
                result.source_url,

              riskLevel:
                result.risk_level,

              score:
                result.score,
            })
          ),
      });
  } catch (
    error: any
  ) {
    console.error(
      "Rhino Assistant search error:",
      error
    );

    return res
      .status(500)
      .json({
        error:
          error?.message ||
          "Unable to search the Rhino Wrangler knowledge base.",
      });
  }
}