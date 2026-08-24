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
  record: KnowledgeResult
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

  let score = 0;

  /*
  --------------------------------------------------
  EXACT KEYWORD PHRASE MATCH
  --------------------------------------------------
  */

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

  /*
  --------------------------------------------------
  MACHINE MODEL MATCH
  --------------------------------------------------
  */

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

  /*
  --------------------------------------------------
  TITLE / SECTION / CONTENT WORD MATCHES
  --------------------------------------------------
  */

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

  /*
  --------------------------------------------------
  IMPORTANT TROUBLESHOOTING PATTERNS
  --------------------------------------------------
  */

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
  PENALIZE CLEARLY UNRELATED RECORDS
  --------------------------------------------------
  */

  const questionHasMachine =
    /\b(5000|5600|5700)\b/.test(
      normalizedQuestion
    );

  if (
    questionHasMachine &&
    machineModels.length >
      0 &&
    !machineModels.some(
      (machine) =>
        normalizedQuestion.includes(
          machine
        )
    )
  ) {
    score -= 10;
  }

  return Math.max(
    score,
    0
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /*
  --------------------------------------------------
  ONLY ALLOW POST
  --------------------------------------------------
  */

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
    /*
    --------------------------------------------------
    VERIFY AUTHENTICATED USER
    --------------------------------------------------
    */

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

    /*
    --------------------------------------------------
    READ QUESTION
    --------------------------------------------------
    */

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

    /*
    --------------------------------------------------
    LOAD APPROVED KNOWLEDGE
    --------------------------------------------------
    */

    const {
      data,
      error,
    } =
      await supabaseAdmin
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
        );

    if (error) {
      console.error(
        "Rhino knowledge query failed:",
        error
      );

      return res
        .status(500)
        .json({
          error:
            "Unable to search the Rhino Wrangler knowledge base.",
        });
    }

    const records =
      (
        data ??
        []
      ) as KnowledgeResult[];

    /*
    --------------------------------------------------
    SCORE KNOWLEDGE RECORDS
    --------------------------------------------------
    */

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
                record
              ),
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

    /*
    --------------------------------------------------
    CONSERVATIVE CONFIDENCE
    --------------------------------------------------

    We intentionally require a relatively strong
    score before calling a match "high confidence."

    "Low" does NOT mean the assistant should answer.
    It means it may show related pages only.
    --------------------------------------------------
    */

    const topScore =
      topResults[0]
        ?.score ??
      0;

    const secondScore =
      topResults[1]
        ?.score ??
      0;

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

    /*
    --------------------------------------------------
    SAFETY DECISION
    --------------------------------------------------

    This tells our future conversational layer what
    it is ALLOWED to do.

    We are not generating any technical response yet.
    --------------------------------------------------
    */

    let recommendedBehavior:
      | "answer_with_sources"
      | "ask_clarifying_question"
      | "show_related_pages_only"
      | "no_answer" =
      "no_answer";

    if (
      confidence ===
      "high"
    ) {
      recommendedBehavior =
        "answer_with_sources";
    } else if (
      confidence ===
      "medium"
    ) {
      recommendedBehavior =
        "ask_clarifying_question";
    } else if (
      confidence ===
      "low"
    ) {
      recommendedBehavior =
        "show_related_pages_only";
    }

    /*
    --------------------------------------------------
    RETURN RETRIEVED SOURCES ONLY
    --------------------------------------------------
    */

    return res
      .status(200)
      .json({
        success: true,

        question,

        confidence,

        recommendedBehavior,

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