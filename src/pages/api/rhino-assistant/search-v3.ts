import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

import {
  createClient,
} from "@supabase/supabase-js";

/*
==================================================
RHINO WRANGLER ASSISTANT
SEARCH V3

HYBRID RETRIEVAL

Signals:
1. Semantic similarity
2. Lexical / symptom overlap
3. Machine applicability
4. Category relevance
5. Phrase-pattern matching

IMPORTANT:
Machine context and lexical matches may RERANK
semantic candidates, but they do not independently
create an answer.
==================================================
*/

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY;

const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY;

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
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

/*
==================================================
TYPES
==================================================
*/

type MachineContext = {
  modelCode?: string | null;
  baseModel?: string | null;
  feedDirection?: string | null;
};

type VectorResult = {
  id: string;
  page_id: string;
  chunk_index: number;

  page_title: string;
  category: string;
  subcategory: string | null;
  source_url: string;

  section_title: string;
  topic_title: string | null;

  content: string;
  search_text: string | null;

  source_sections: string[];

  machine_models: string[];

  machine_scope:
    | "not_applicable"
    | "all"
    | "specific"
    | "unknown";

  risk_level:
    | "normal"
    | "caution"
    | "high";

  similarity: number;
};

type HybridResult =
  VectorResult & {
    lexicalScore: number;
    phraseScore: number;
    machineScore: number;
    categoryScore: number;

    finalScore: number;

    matchedTerms: string[];
    matchedPatterns: string[];

    machineReason: string | null;
  };

/*
==================================================
NORMALIZATION
==================================================
*/

function normalize(
  value: unknown
) {
  if (
    typeof value !==
    "string"
  ) {
    return "";
  }

  return value
    .toLowerCase()
    .replace(
      /[^a-z0-9\s]/g,
      " "
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

/*
==================================================
TOKENIZATION
==================================================
*/

const STOP_WORDS =
  new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "but",
    "by",
    "do",
    "does",
    "for",
    "from",
    "get",
    "have",
    "how",
    "i",
    "in",
    "is",
    "it",
    "keep",
    "me",
    "my",
    "of",
    "on",
    "or",
    "should",
    "the",
    "this",
    "to",
    "what",
    "when",
    "where",
    "why",
    "with",
  ]);

function tokenize(
  value: string
) {
  return normalize(
    value
  )
    .split(" ")
    .filter(
      (
        token
      ) =>
        token.length >= 2 &&
        !STOP_WORDS.has(
          token
        )
    );
}

/*
==================================================
LIGHT TERMINOLOGY NORMALIZATION

These are intentionally generic shop-language
equivalents.

We are NOT creating technical answers here.

We are simply helping retrieval understand that
customers may use different words for the same
physical object.
==================================================
*/

const TERM_GROUPS =
  [
    [
      "piece",
      "part",
      "bar",
      "stick",
      "extrusion",
      "material",
    ],

    [
      "short",
      "undersize",
      "small",
    ],

    [
      "long",
      "oversize",
      "large",
    ],

    [
      "first",
      "initial",
    ],

    [
      "remaining",
      "rest",
      "others",
      "other",
    ],

    [
      "correct",
      "right",
      "good",
      "accurate",
    ],

    [
      "pressure",
      "force",
    ],

    [
      "clutch",
      "clamp",
      "grabber",
      "roller",
    ],

    [
      "hole",
      "drill",
      "drilling",
      "fabrication",
      "fab",
    ],
  ];

function expandTerms(
  tokens: string[]
) {
  const expanded =
    new Set(
      tokens
    );

  for (
    const token
    of tokens
  ) {
    for (
      const group
      of TERM_GROUPS
    ) {
      if (
        group.includes(
          token
        )
      ) {
        for (
          const related
          of group
        ) {
          expanded.add(
            related
          );
        }
      }
    }
  }

  return [
    ...expanded,
  ];
}

/*
==================================================
QUESTION EMBEDDING
==================================================
*/

async function createQuestionEmbedding(
  question: string
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
        method: "POST",

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
==================================================
VECTOR SEARCH

Retrieve a wider candidate pool than V2 because
the hybrid ranker may promote a lower semantic
candidate that has much stronger symptom overlap.
==================================================
*/

async function vectorSearch(
  embedding: number[]
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

        match_count:
          40,

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
==================================================
LEXICAL SCORE
==================================================
*/

function calculateLexicalScore(
  question: string,
  result: VectorResult
) {
  const questionTokens =
    tokenize(
      question
    );

  const expanded =
    expandTerms(
      questionTokens
    );

  const searchable =
    normalize(
      [
        result.page_title,
        result.section_title,
        result.topic_title,
        result.search_text,
        result.content,
      ]
        .filter(Boolean)
        .join(" ")
    );

  const matchedTerms =
    expanded.filter(
      (
        term
      ) =>
        searchable.includes(
          term
        )
    );

  /*
  Don't allow giant synonym groups to produce an
  unlimited score.

  Lexical evidence is a supporting signal.
  */

  const uniqueMatches =
    [
      ...new Set(
        matchedTerms
      ),
    ];

  const lexicalScore =
    Math.min(
      uniqueMatches.length *
        0.012,
      0.12
    );

  return {
    lexicalScore,
    matchedTerms:
      uniqueMatches,
  };
}

/*
==================================================
SYMPTOM PATTERNS

These are NOT answers.

They represent combinations of symptoms that are
much more informative than isolated words.

Example:

"first bar is short, rest are right"

contains the same diagnostic structure as:

"first piece is short, remaining pieces correct"
==================================================
*/

function calculatePhraseScore(
  question: string,
  result: VectorResult
) {
  const q =
    normalize(
      question
    );

  const r =
    normalize(
      [
        result.section_title,
        result.topic_title,
        result.content,
      ]
        .filter(Boolean)
        .join(" ")
    );

  const matchedPatterns:
    string[] =
      [];

  let score =
    0;

  /*
  --------------------------------------------------
  MACHINE TROUBLESHOOTING PATTERNS

  These diagnostic symptom patterns only apply to
  RhinoFab knowledge.

  This prevents Glazier Studio pages containing
  words like:

  "stick"
  "first"
  "short"
  "remaining"

  from receiving machine-troubleshooting bonuses.
  --------------------------------------------------
  */

  const isRhinoFab =
    normalize(
      result.category
    ) ===
    "rhinofab";

  if (
    isRhinoFab
  ) {
    /*
    --------------------------------------------------
    FIRST ITEM DIFFERENT / OTHERS CORRECT
    --------------------------------------------------
    */

    const questionHasFirst =
      /\b(first|initial)\b/.test(
        q
      );

    const questionHasWrongLength =
      /\b(short|long|undersize|oversize|small|large)\b/.test(
        q
      );

    const questionHasOthersCorrect =
      /\b(rest|others|other|remaining)\b/.test(
        q
      ) &&
      /\b(right|correct|good|accurate)\b/.test(
        q
      );

    const resultHasFirst =
      /\bfirst\b/.test(
        r
      );

    const resultHasWrongLength =
      /\b(short|long|incorrect|error)\b/.test(
        r
      );

    const resultHasOthersCorrect =
      /\b(remaining|pieces 2|pieces 2 through 5|remaining pieces)\b/.test(
        r
      ) &&
      /\b(correct|right)\b/.test(
        r
      );

    if (
      questionHasFirst &&
      questionHasWrongLength &&
      questionHasOthersCorrect &&
      resultHasFirst &&
      resultHasWrongLength &&
      resultHasOthersCorrect
    ) {
      score +=
        0.16;

      matchedPatterns.push(
        "first-item-error-others-correct"
      );
    }

    /*
    --------------------------------------------------
    INCONSISTENT LENGTHS
    --------------------------------------------------
    */

    const questionHasVariableLengths =
      (
        /\bdifferent lengths\b/.test(
          q
        ) ||
        /\binconsistent\b/.test(
          q
        )
      );

    const resultHasVariableLengths =
      (
        /\binconsistent cut lengths\b/.test(
          r
        ) ||
        /\bdifferent lengths\b/.test(
          r
        )
      );

    if (
      questionHasVariableLengths &&
      resultHasVariableLengths
    ) {
      score +=
        0.10;

      matchedPatterns.push(
        "inconsistent-lengths"
      );
    }

    /*
    --------------------------------------------------
    PRESSURE TERMINOLOGY
    --------------------------------------------------

    Still deliberately weak.

    Pressure similarity can suggest a related topic,
    but it can never establish that two settings are
    actually the same thing.
    --------------------------------------------------
    */

    const questionHasPressure =
      /\bpressure\b/.test(
        q
      );

    const resultHasPressure =
      /\bpressure\b/.test(
        r
      );

    if (
      questionHasPressure &&
      resultHasPressure
    ) {
      score +=
        0.04;

      matchedPatterns.push(
        "pressure-related"
      );
    }
  }

  return {
    phraseScore:
      Math.min(
        score,
        0.20
      ),

    matchedPatterns,
  };
}

/*
==================================================
MACHINE SCORE
==================================================
*/

function calculateMachineScore(
  result: VectorResult,
  machine: MachineContext
) {
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

  let score =
    0;

  const reasons:
    string[] =
      [];

  if (
    result.machine_scope ===
    "all"
  ) {
    score +=
      0.015;

    reasons.push(
      "all machines"
    );
  }

  if (
    modelCode &&
    applicableModels.includes(
      modelCode
    )
  ) {
    score +=
      0.08;

    reasons.push(
      `exact model ${machine.modelCode}`
    );
  }

  if (
    baseModel &&
    applicableModels.includes(
      baseModel
    )
  ) {
    score +=
      0.05;

    reasons.push(
      `base model ${machine.baseModel}`
    );
  }

  const searchable =
    normalize(
      [
        result.section_title,
        result.topic_title,
        result.content,
      ]
        .filter(Boolean)
        .join(" ")
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
    score +=
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
    score +=
      0.03;

    reasons.push(
      "right-feed context"
    );
  }

  return {
    machineScore:
      Math.min(
        score,
        0.12
      ),

    machineReason:
      reasons.length
        ? reasons.join(
            ", "
          )
        : null,
  };
}

/*
==================================================
CATEGORY SCORE

If a machine context exists, a genuinely relevant
RhinoFab result can receive a tiny bonus over
software-training material.

This is intentionally tiny. We don't want a
RhinoFab page to beat a clearly better software
result merely because the customer owns a machine.
==================================================
*/

function calculateCategoryScore(
  result: VectorResult,
  machine: MachineContext
) {
  const hasMachine =
    Boolean(
      machine.modelCode ||
      machine.baseModel
    );

  if (
    hasMachine &&
    normalize(
      result.category
    ) ===
      "rhinofab"
  ) {
    return 0.015;
  }

  return 0;
}

/*
==================================================
HYBRID RANKING
==================================================
*/

function rankResult(
  question: string,
  result: VectorResult,
  machine: MachineContext
): HybridResult {
  const lexical =
    calculateLexicalScore(
      question,
      result
    );

  const phrase =
    calculatePhraseScore(
      question,
      result
    );

  const machineResult =
    calculateMachineScore(
      result,
      machine
    );

  const categoryScore =
    calculateCategoryScore(
      result,
      machine
    );

  /*
  Semantic similarity remains the foundation.

  Other signals can promote a candidate, but they
  cannot turn a terrible semantic result into a
  confident answer.
  */

  const finalScore =
    result.similarity +
    lexical.lexicalScore +
    phrase.phraseScore +
    machineResult.machineScore +
    categoryScore;

  return {
    ...result,

    lexicalScore:
      lexical.lexicalScore,

    phraseScore:
      phrase.phraseScore,

    machineScore:
      machineResult.machineScore,

    categoryScore,

    finalScore,

    matchedTerms:
      lexical.matchedTerms,

    matchedPatterns:
      phrase.matchedPatterns,

    machineReason:
      machineResult.machineReason,
  };
}

/*
==================================================
CONFIDENCE / SAFETY GATE

IMPORTANT:

finalScore is useful for ranking.

But confidence must still consider the underlying
semantic similarity.

A huge keyword boost must not make unrelated
material safe to answer from.
==================================================
*/

function determineConfidence(
  results: HybridResult[]
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

  const semantic =
    first.similarity;

  const final =
    first.finalScore;

  const gap =
    second
      ? final -
        second.finalScore
      : final;

  const strongPattern =
    first.phraseScore >=
    0.10;

  /*
  Strong semantic evidence.
  */

  if (
    semantic >=
      0.58 &&
    (
      final >=
        0.65 ||
      gap >=
        0.04
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
  Strong symptom structure can rescue a lower
  semantic score, but only when the semantic
  candidate is still reasonably related.
  */

  if (
    semantic >=
      0.34 &&
    strongPattern &&
    final >=
      0.60
  ) {
    return {
      confidence:
        "high",

      behavior:
        "answer_with_sources",
    };
  }

  /*
  Likely related concept / terminology.
  */

  if (
    semantic >=
      0.46 &&
    final >=
      0.52
  ) {
    return {
      confidence:
        "medium",

      behavior:
        "ask_clarifying_question",
    };
  }

  /*
  Related material only.
  */

  if (
    semantic >=
    0.38
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
==================================================
API
==================================================
*/

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
      .status(405)
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
        .status(400)
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
        .status(400)
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
    1. EMBED
    */

    const {
      embedding,
      usage,
    } =
      await createQuestionEmbedding(
        question
      );

    /*
    2. RETRIEVE SEMANTIC CANDIDATES
    */

    const vectorResults =
      await vectorSearch(
        embedding
      );

    /*
    3. HYBRID RERANK
    */

    const ranked =
      vectorResults
        .map(
          (
            result
          ) =>
            rankResult(
              question,
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

    const topResults =
      ranked.slice(
        0,
        8
      );

    /*
    4. CONFIDENCE
    */

    const confidence =
      determineConfidence(
        topResults
      );

    /*
    5. RESPONSE
    */

    return res
      .status(200)
      .json({
        success:
          true,

        engine:
          "hybrid-v3",

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

        candidateCount:
          vectorResults.length,

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

              lexicalScore:
                Number(
                  result.lexicalScore
                ),

              phraseScore:
                Number(
                  result.phraseScore
                ),

              machineScore:
                Number(
                  result.machineScore
                ),

              categoryScore:
                Number(
                  result.categoryScore
                ),

              finalScore:
                Number(
                  result.finalScore
                ),

              matchedTerms:
                result.matchedTerms,

              matchedPatterns:
                result.matchedPatterns,

              machineReason:
                result.machineReason,
            })
          ),
      });
  } catch (
    error
  ) {
    console.error(
      "Rhino Assistant Search V3 error:",
      error
    );

    return res
      .status(500)
      .json({
        error:
          "Unable to search Rhino Wrangler knowledge.",
      });
  }
}