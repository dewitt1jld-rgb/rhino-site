import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import {
  createClient,
} from "@supabase/supabase-js";

/*
--------------------------------------------------
RHINO WRANGLER ASSISTANT
SEARCH V2

SEMANTIC RETRIEVAL ONLY

This endpoint:
- embeds the customer's question
- searches the 532 V2 knowledge chunks
- applies machine-context ranking
- returns evidence + confidence

This endpoint DOES NOT:
- generate AI answers
- change the current chatbot
- modify the old rhino_knowledge table
--------------------------------------------------
*/

const SUPABASE_URL =
  process.env
    .NEXT_PUBLIC_SUPABASE_URL;

const SUPABASE_SERVICE_ROLE_KEY =
  process.env
    .SUPABASE_SERVICE_ROLE_KEY;

const OPENAI_API_KEY =
  process.env
    .OPENAI_API_KEY;

const EMBEDDING_MODEL =
  "text-embedding-3-small";

const EMBEDDING_DIMENSIONS =
  1024;

if (
  !SUPABASE_URL ||
  !SUPABASE_SERVICE_ROLE_KEY
) {
  throw new Error(
    "Missing Supabase environment variables."
  );
}

const supabase =
  createClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession:
          false,

        autoRefreshToken:
          false,
      },
    }
  );

/*
--------------------------------------------------
TYPES
--------------------------------------------------
*/

type MachineContext = {
  modelCode?:
    string | null;

  baseModel?:
    string | null;

  feedDirection?:
    string | null;
};

type VectorResult = {
  id: string;
  page_id: string;
  chunk_index: number;

  page_title: string;
  category: string;
  subcategory:
    string | null;
  source_url: string;

  section_title: string;
  topic_title:
    string | null;

  content: string;
  search_text:
    string | null;

  source_sections:
    string[];

  machine_models:
    string[];

  machine_scope:
    "not_applicable"
    | "all"
    | "specific"
    | "unknown";

  risk_level:
    "normal"
    | "caution"
    | "high";

  similarity: number;
};

type RankedResult =
  VectorResult & {
    machineScore: number;
    finalScore: number;
    machineReason:
      string | null;
  };

/*
--------------------------------------------------
NORMALIZATION
--------------------------------------------------
*/

function normalize(
  value:
    unknown
) {
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value
    .trim()
    .toLowerCase();
}

/*
--------------------------------------------------
CREATE QUESTION EMBEDDING
--------------------------------------------------
*/

async function createQuestionEmbedding(
  question:
    string
) {
  if (
    !OPENAI_API_KEY
  ) {
    throw new Error(
      "OPENAI_API_KEY is missing."
    );
  }

  const response =
    await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method:
          "POST",

        headers: {
          Authorization:
            `Bearer ${OPENAI_API_KEY}`,

          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            model:
              EMBEDDING_MODEL,

            input:
              question,

            dimensions:
              EMBEDDING_DIMENSIONS,

            encoding_format:
              "float",
          }),
      }
    );

  if (
    !response.ok
  ) {
    const body =
      await response.text();

    throw new Error(
      `OpenAI embedding request failed (${response.status}): ${body}`
    );
  }

  const data =
    await response.json();

  const embedding =
    data?.data?.[0]
      ?.embedding;

  if (
    !Array.isArray(
      embedding
    ) ||
    embedding.length !==
      EMBEDDING_DIMENSIONS
  ) {
    throw new Error(
      "OpenAI returned an invalid question embedding."
    );
  }

  return {
    embedding,

    usage:
      data?.usage ??
      null,
  };
}

/*
--------------------------------------------------
VECTOR SEARCH
--------------------------------------------------
*/

async function vectorSearch(
  embedding:
    number[]
) {
  const vectorValue =
    `[${embedding.join(",")}]`;

  const {
    data,
    error,
  } =
    await supabase.rpc(
      "match_rhino_knowledge_chunks",
      {
        query_embedding:
          vectorValue,

        /*
        Retrieve more than we ultimately display.

        Machine context and confidence logic can
        rerank these candidates afterward.
        */
        match_count:
          20,

        /*
        Keep this fairly permissive during testing.
        Confidence logic will decide what is safe.
        */
        match_threshold:
          0.20,
      }
    );

  if (
    error
  ) {
    throw error;
  }

  return (
    data ??
    []
  ) as VectorResult[];
}

/*
--------------------------------------------------
MACHINE RANKING

Critical rule:

Machine context can RE-RANK semantically relevant
results.

It must never create topical relevance by itself.
--------------------------------------------------
*/

function rankForMachine(
  result:
    VectorResult,

  machine:
    MachineContext
): RankedResult {
  const modelCode =
    normalize(
      machine.modelCode
    );

  const baseModel =
    normalize(
      machine.baseModel
    );

  const feedDirection =
    normalize(
      machine.feedDirection
    );

  const applicableModels =
    (
      result.machine_models ??
      []
    ).map(
      normalize
    );

  let machineScore =
    0;

  const reasons:
    string[] =
      [];

  /*
  Software training isn't machine-specific.
  */

  if (
    result.machine_scope ===
    "not_applicable"
  ) {
    machineScore +=
      0;
  }

  /*
  Explicitly applies everywhere.
  */

  if (
    result.machine_scope ===
    "all"
  ) {
    machineScore +=
      0.02;

    reasons.push(
      "applies to all machines"
    );
  }

  /*
  Exact machine model.
  */

  if (
    modelCode &&
    applicableModels.includes(
      modelCode
    )
  ) {
    machineScore +=
      0.08;

    reasons.push(
      `exact model ${machine.modelCode}`
    );
  }

  /*
  Base model:
  5600L -> 5600
  */

  if (
    baseModel &&
    applicableModels.includes(
      baseModel
    )
  ) {
    machineScore +=
      0.05;

    reasons.push(
      `base model ${machine.baseModel}`
    );
  }

  /*
  Feed direction is currently inferred only from
  the stored knowledge text.

  Later we can add an explicit feed_direction field
  to knowledge metadata.
  */

  const searchable =
    normalize(
      [
        result.topic_title,
        result.section_title,
        result.content,
      ].join(
        " "
      )
    );

  if (
    feedDirection ===
      "left" &&
    (
      searchable.includes(
        "material loaded from the left"
      ) ||
      searchable.includes(
        "feed from the left"
      ) ||
      searchable.includes(
        "left feed"
      )
    )
  ) {
    machineScore +=
      0.03;

    reasons.push(
      "left-feed context"
    );
  }

  if (
    feedDirection ===
      "right" &&
    (
      searchable.includes(
        "material loaded from the right"
      ) ||
      searchable.includes(
        "feed from the right"
      ) ||
      searchable.includes(
        "right feed"
      )
    )
  ) {
    machineScore +=
      0.03;

    reasons.push(
      "right-feed context"
    );
  }

  /*
  IMPORTANT:

  Similarity stays dominant.
  Machine ranking is deliberately a small bonus.
  */

  const finalScore =
    result.similarity +
    machineScore;

  return {
    ...result,

    machineScore,

    finalScore,

    machineReason:
      reasons.length >
      0
        ? reasons.join(
            ", "
          )
        : null,
  };
}

/*
--------------------------------------------------
CONFIDENCE

These are intentionally conservative starting
thresholds.

We'll tune them with real Rhino questions.
--------------------------------------------------
*/

function determineConfidence(
  results:
    RankedResult[]
) {
  if (
    results.length ===
    0
  ) {
    return {
      confidence:
        "none",

      behavior:
        "no_answer",
    };
  }

  const first =
    results[0];

  const second =
    results[1];

  const top =
    first.finalScore;

  const semantic =
    first.similarity;

  const gap =
    second
      ? top -
        second.finalScore
      : top;

  /*
  Very strong semantic match.
  */

  if (
    semantic >=
      0.72 &&
    (
      gap >=
        0.025 ||
      semantic >=
        0.80
    )
  ) {
    return {
      confidence:
        "high",

      behavior:
        "answer_with_sources",
    };
  }

  /*
  Useful evidence exists, but do not confidently
  turn it into a technical recommendation yet.
  */

  if (
    semantic >=
    0.58
  ) {
    return {
      confidence:
        "medium",

      behavior:
        "ask_clarifying_question",
    };
  }

  /*
  Weak semantic similarity.

  We can show related pages but shouldn't claim
  they answer the question.
  */

  if (
    semantic >=
    0.40
  ) {
    return {
      confidence:
        "low",

      behavior:
        "show_related_pages_only",
    };
  }

  return {
    confidence:
      "none",

    behavior:
      "no_answer",
  };
}

/*
--------------------------------------------------
API HANDLER
--------------------------------------------------
*/

export default async function handler(
  req:
    NextApiRequest,

  res:
    NextApiResponse
) {
  if (
    req.method !==
    "POST"
  ) {
    res.setHeader(
      "Allow",
      "POST"
    );

    return res
      .status(
        405
      )
      .json({
        error:
          "Method not allowed.",
      });
  }

  try {
    const question =
      typeof req.body
        ?.question ===
        "string"
        ? req.body.question
            .trim()
        : "";

    if (
      !question
    ) {
      return res
        .status(
          400
        )
        .json({
          error:
            "Question is required.",
        });
    }

    if (
      question.length >
      3000
    ) {
      return res
        .status(
          400
        )
        .json({
          error:
            "Question is too long.",
        });
    }

    const machine:
      MachineContext =
      req.body?.machine ??
      {};

    /*
    --------------------------------------------------
    1. EMBED QUESTION
    --------------------------------------------------
    */

    const {
      embedding,
      usage,
    } =
      await createQuestionEmbedding(
        question
      );

    /*
    --------------------------------------------------
    2. SEMANTIC SEARCH
    --------------------------------------------------
    */

    const vectorResults =
      await vectorSearch(
        embedding
      );

    /*
    --------------------------------------------------
    3. MACHINE-AWARE RANKING
    --------------------------------------------------
    */

    const ranked =
      vectorResults
        .map(
          (
            result
          ) =>
            rankForMachine(
              result,
              machine
            )
        )
        .sort(
          (
            a,
            b
          ) =>
            b.finalScore -
            a.finalScore
        );

    /*
    Limit response size.
    */

    const topResults =
      ranked.slice(
        0,
        8
      );

    /*
    --------------------------------------------------
    4. CONFIDENCE
    --------------------------------------------------
    */

    const confidence =
      determineConfidence(
        topResults
      );

    /*
    --------------------------------------------------
    5. RETURN RETRIEVAL ONLY
    --------------------------------------------------
    */

    return res
      .status(
        200
      )
      .json({
        success:
          true,

        engine:
          "semantic-v2",

        question,

        machineContext: {
          modelCode:
            machine.modelCode ??
            null,

          baseModel:
            machine.baseModel ??
            null,

          feedDirection:
            machine.feedDirection ??
            null,
        },

        confidence:
          confidence.confidence,

        recommendedBehavior:
          confidence.behavior,

        embeddingUsage: {
          tokens:
            usage?.total_tokens ??
            null,
        },

        resultCount:
          topResults.length,

        results:
          topResults.map(
            (
              result
            ) => ({
              id:
                result.id,

              pageId:
                result.page_id,

              chunkIndex:
                result.chunk_index,

              pageTitle:
                result.page_title,

              category:
                result.category,

              subcategory:
                result.subcategory,

              topicTitle:
                result.topic_title,

              sectionTitle:
                result.section_title,

              content:
                result.content,

              sourceSections:
                result.source_sections,

              sourceUrl:
                result.source_url,

              machineScope:
                result.machine_scope,

              machineModels:
                result.machine_models,

              riskLevel:
                result.risk_level,

              similarity:
                Number(
                  result.similarity
                ),

              machineScore:
                Number(
                  result.machineScore
                ),

              finalScore:
                Number(
                  result.finalScore
                ),

              machineReason:
                result.machineReason,
            })
          ),
      });
  } catch (
    error
  ) {
    console.error(
      "Rhino Assistant Search V2 error:",
      error
    );

    return res
      .status(
        500
      )
      .json({
        error:
          "Unable to search Rhino Wrangler knowledge.",
      });
  }
}