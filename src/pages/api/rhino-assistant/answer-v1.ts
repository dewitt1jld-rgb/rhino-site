import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

/*
==================================================
RHINO WRANGLER ASSISTANT
ANSWER V1

This endpoint:

1. Calls Search V3
2. Retrieves approved Rhino Wrangler evidence
3. Sends ONLY that evidence to the answer model
4. Requires structured output
5. Validates cited source IDs
6. Reports API token usage + estimated cost

IMPORTANT:

This is still a TEST endpoint.

It does not yet:
- enforce company AI credits
- log conversations
- check support-contract status
- request callbacks
==================================================
*/

const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY;

const ANSWER_MODEL =
  "gpt-5.6-luna";

/*
Current standard pricing for GPT-5.6 Luna.

Used only to estimate usage cost.

Actual OpenAI billing remains the source of truth.
*/

const INPUT_COST_PER_MILLION =
  0.20;

const OUTPUT_COST_PER_MILLION =
  1.20;

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

type ConversationMessage = {
  role:
    | "user"
    | "assistant";

  content: string;
};

type RetrievalResult = {
  id: string;

  pageId: string;
  chunkIndex: number;

  pageTitle: string;
  category: string;
  subcategory: string | null;

  topicTitle: string | null;
  sectionTitle: string;

  content: string;

  sourceSections: string[];
  sourceUrl: string;

  machineScope: string;
  machineModels: string[];

  riskLevel: string;

  similarity: number;
  lexicalScore: number;
  phraseScore: number;
  machineScore: number;
  categoryScore: number;
  finalScore: number;

  matchedTerms: string[];
  matchedPatterns: string[];

  machineReason:
    string | null;
};

type SearchResponse = {
  success: boolean;

  engine: string;

  question: string;

  machineContext: {
    modelCode:
      string | null;

    baseModel:
      string | null;

    feedDirection:
      string | null;
  };

  confidence:
    "high"
    | "medium"
    | "low"
    | "none";

  recommendedBehavior:
    "answer_with_sources"
    | "ask_clarifying_question"
    | "show_related_pages_only"
    | "no_answer";

  embeddingUsage: {
    tokens:
      number | null;
  };

  candidateCount:
    number;

  resultCount:
    number;

  results:
    RetrievalResult[];
};

type GeneratedAnswer = {
  action:
    | "answer"
    | "clarify"
    | "no_answer";

  message:
    string;

  usedSourceIds:
    string[];
};

/*
==================================================
CALL SEARCH V3

For this first test version we call our own API route.

Later we should move the retrieval engine into a
shared server library so Search V3 and Answer V1
can call the same function directly.
==================================================
*/

async function runSearchV3(
  req:
    NextApiRequest,

  question:
    string,

  machine:
    MachineContext
): Promise<SearchResponse> {
  const host =
    req.headers.host;

  if (!host) {
    throw new Error(
      "Unable to determine application host."
    );
  }

  const forwardedProto =
    req.headers[
      "x-forwarded-proto"
    ];

  const protocol =
    typeof forwardedProto ===
    "string"
      ? forwardedProto
      : process.env.NODE_ENV ===
          "development"
        ? "http"
        : "https";

  const url =
    `${protocol}://${host}/api/rhino-assistant/search-v3`;

  const response =
    await fetch(
      url,
      {
        method:
          "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            question,
            machine,
          }),
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error ||
        "Search V3 failed."
    );
  }

  return data as SearchResponse;
}

/*
==================================================
FORMAT RETRIEVED EVIDENCE
==================================================
*/

function buildEvidence(
  results:
    RetrievalResult[]
) {
  return results
    .slice(
      0,
      6
    )
    .map(
      (
        result,
        index
      ) => {
        return `
SOURCE ${index + 1}

SOURCE_ID:
${result.id}

PAGE:
${result.pageTitle}

CATEGORY:
${result.category}

TOPIC:
${result.topicTitle ?? "(none)"}

SECTION:
${result.sectionTitle}

MACHINE_SCOPE:
${result.machineScope}

MACHINE_MODELS:
${JSON.stringify(
  result.machineModels
)}

RISK_LEVEL:
${result.riskLevel}

RETRIEVAL_SIMILARITY:
${result.similarity}

RETRIEVAL_FINAL_SCORE:
${result.finalScore}

CONTENT:
${result.content}

SOURCE_URL:
${result.sourceUrl}
`.trim();
      }
    )
    .join(
      "\n\n============================\n\n"
    );
}

/*
==================================================
CONVERSATION HISTORY

Keep this intentionally short.

We don't need to send a customer's entire chat
history on every request.
==================================================
*/

function buildConversationHistory(
  messages:
    ConversationMessage[]
) {
  return messages
    .slice(
      -6
    )
    .map(
      (
        message
      ) =>
        `${message.role.toUpperCase()}: ${message.content}`
    )
    .join(
      "\n"
    );
}

/*
==================================================
EXTRACT RESPONSE TEXT
==================================================
*/

function getOutputText(
  response:
    any
) {
  if (
    typeof response
      ?.output_text ===
    "string"
  ) {
    return response
      .output_text;
  }

  const pieces:
    string[] =
      [];

  for (
    const item
    of response?.output ??
    []
  ) {
    if (
      item?.type !==
      "message"
    ) {
      continue;
    }

    for (
      const part
      of item?.content ??
      []
    ) {
      if (
        part?.type ===
          "output_text" &&
        typeof part.text ===
          "string"
      ) {
        pieces.push(
          part.text
        );
      }
    }
  }

  return pieces.join(
    "\n"
  );
}

/*
==================================================
GENERATE GROUNDED RESPONSE
==================================================
*/

async function generateAnswer(
  question:
    string,

  machine:
    MachineContext,

  conversation:
    ConversationMessage[],

  search:
    SearchResponse
) {
  if (!OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY is missing."
    );
  }

  const evidence =
    buildEvidence(
      search.results
    );

  const history =
    buildConversationHistory(
      conversation
    );

  const instructions =
`You are the Rhino Wrangler Assistant.

You assist users with RhinoFab machines, Glazier Studio, PartnerPak, and Rhino Wrangler training material.

SAFETY AND GROUNDING RULES:

1. You may ONLY provide factual technical information that is explicitly supported by the RHINO WRANGLER EVIDENCE supplied in this request.

2. Never use outside knowledge, general industry knowledge, remembered training data, assumptions, or guesses to fill gaps.

3. A retrieved source being similar to the question does NOT prove it answers the question.

4. Never assume two technical terms mean the same thing merely because they sound related.

Example:
"hydraulic pressure" must not automatically be treated as "air driven clutch pressure."

5. If multiple plausible interpretations exist, ask a short clarifying question instead of choosing one.

6. If the user's description is broad enough that more than one documented cause could apply, ask for the specific information needed to distinguish them.

7. Do not tell a user to "try" an undocumented adjustment.

8. Never invent:
- settings
- measurements
- calibration values
- machine models
- feed directions
- procedures
- warnings
- menu locations
- causes
- fixes

9. Machine context is supporting information only. It does not prove that a retrieved procedure applies to that machine unless the evidence supports it.

10. If the evidence is insufficient, say so clearly.

11. When a direct answer is supported, explain it concisely and conservatively.

12. Do not mention retrieval scores or internal ranking logic to the customer.

13. Do not claim certainty merely because SEARCH CONFIDENCE is high. Search confidence only means the retrieval engine thinks it found relevant material.

14. Use only SOURCE_ID values supplied in the evidence when filling usedSourceIds.

15. If asking a clarification question, usedSourceIds may contain the sources that justify the possible interpretations.

16. If there is no supported answer or useful clarification, choose no_answer.

Your job is to guide the customer toward verified Rhino Wrangler information, not to sound confident.`;

  const input =
`CUSTOMER QUESTION:
${question}

MACHINE CONTEXT:
Model Code: ${machine.modelCode ?? "unknown"}
Base Model: ${machine.baseModel ?? "unknown"}
Feed Direction: ${machine.feedDirection ?? "unknown"}

SEARCH ENGINE ASSESSMENT:
Confidence: ${search.confidence}
Recommended Behavior: ${search.recommendedBehavior}

RECENT CONVERSATION:
${history || "(none)"}

RHINO WRANGLER EVIDENCE:

${evidence}

Respond according to the required structured schema.`;

  const response =
    await fetch(
      "https://api.openai.com/v1/responses",
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
              ANSWER_MODEL,

            instructions,

            input,

            reasoning: {
              effort:
                "low",
            },

            max_output_tokens:
              700,

            store:
              false,

            text: {
              verbosity:
                "low",

              format: {
                type:
                  "json_schema",

                name:
                  "rhino_assistant_answer",

                strict:
                  true,

                schema: {
                  type:
                    "object",

                  properties: {
                    action: {
                      type:
                        "string",

                      enum: [
                        "answer",
                        "clarify",
                        "no_answer",
                      ],
                    },

                    message: {
                      type:
                        "string",
                    },

                    usedSourceIds: {
                      type:
                        "array",

                      items: {
                        type:
                          "string",
                      },
                    },
                  },

                  required: [
                    "action",
                    "message",
                    "usedSourceIds",
                  ],

                  additionalProperties:
                    false,
                },
              },
            },
          }),
      }
    );

  const body =
    await response.json();

  if (!response.ok) {
    throw new Error(
      `OpenAI answer request failed (${response.status}): ${JSON.stringify(body)}`
    );
  }

  const outputText =
    getOutputText(
      body
    );

  if (!outputText) {
    throw new Error(
      "The answer model returned no text."
    );
  }

  let parsed:
    GeneratedAnswer;

  try {
    parsed =
      JSON.parse(
        outputText
      );
  } catch {
    throw new Error(
      `Unable to parse structured answer: ${outputText}`
    );
  }

  return {
    answer:
      parsed,

    usage:
      body?.usage ??
      null,

    responseId:
      body?.id ??
      null,

    model:
      body?.model ??
      ANSWER_MODEL,
  };
}

/*
==================================================
VALIDATE SOURCE IDS

Do not trust generated IDs blindly.

The model may only cite one of the chunks that was
actually retrieved.
==================================================
*/

function validateSources(
  answer:
    GeneratedAnswer,

  search:
    SearchResponse
) {
  const allowed =
    new Set(
      search.results.map(
        (
          result
        ) =>
          result.id
      )
    );

  const validIds =
    [
      ...new Set(
        answer
          .usedSourceIds
          .filter(
            (
              id
            ) =>
              allowed.has(
                id
              )
          )
      ),
    ];

  return search.results.filter(
    (
      result
    ) =>
      validIds.includes(
        result.id
      )
  );
}

/*
==================================================
COST ESTIMATE
==================================================
*/

function calculateCost(
  usage:
    any
) {
  const inputTokens =
    Number(
      usage
        ?.input_tokens ??
        0
    );

  const outputTokens =
    Number(
      usage
        ?.output_tokens ??
        0
    );

  const inputCost =
    (
      inputTokens /
      1_000_000
    ) *
    INPUT_COST_PER_MILLION;

  const outputCost =
    (
      outputTokens /
      1_000_000
    ) *
    OUTPUT_COST_PER_MILLION;

  return {
    inputTokens,

    outputTokens,

    totalTokens:
      Number(
        usage
          ?.total_tokens ??
          inputTokens +
            outputTokens
      ),

    estimatedInputCost:
      inputCost,

    estimatedOutputCost:
      outputCost,

    estimatedTotalCost:
      inputCost +
      outputCost,
  };
}

/*
==================================================
API HANDLER
==================================================
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

    if (!question) {
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

    const conversation:
      ConversationMessage[] =
      Array.isArray(
        req.body
          ?.conversation
      )
        ? req.body
            .conversation
            .filter(
              (
                message:
                  any
              ) =>
                (
                  message
                    ?.role ===
                    "user" ||
                  message
                    ?.role ===
                    "assistant"
                ) &&
                typeof message
                  ?.content ===
                  "string"
            )
            .slice(
              -6
            )
        : [];

    /*
    ------------------------------------------------
    STEP 1:
    RETRIEVE RHINO WRANGLER KNOWLEDGE
    ------------------------------------------------
    */

    const search =
      await runSearchV3(
        req,
        question,
        machine
      );

    /*
    ------------------------------------------------
    STEP 2:
    ABSOLUTELY NO MATCH

    Do not spend money asking an AI to explain
    that the search engine found nothing.
    ------------------------------------------------
    */

    if (
      search.recommendedBehavior ===
        "no_answer" ||
      search.results.length ===
        0
    ) {
      return res
        .status(
          200
        )
        .json({
          success:
            true,

          engine:
            "answer-v1",

          action:
            "no_answer",

          message:
            "I couldn't find reliable Rhino Wrangler information that answers that question. I don't want to guess.",

          sources:
            [],

          machineContext:
            search.machineContext,

          retrieval: {
            confidence:
              search.confidence,

            recommendedBehavior:
              search.recommendedBehavior,

            resultCount:
              search.resultCount,
          },

          usage: {
            embeddingTokens:
              search.embeddingUsage
                ?.tokens ??
              0,

            modelInputTokens:
              0,

            modelOutputTokens:
              0,

            modelTotalTokens:
              0,

            estimatedModelCost:
              0,
          },
        });
    }

    /*
    ------------------------------------------------
    STEP 3:
    GROUNDED ANSWER / CLARIFICATION
    ------------------------------------------------
    */

    const generated =
      await generateAnswer(
        question,
        machine,
        conversation,
        search
      );

    const sources =
      validateSources(
        generated.answer,
        search
      );

    const cost =
      calculateCost(
        generated.usage
      );

    /*
    If the model says "answer" but cites nothing,
    downgrade it.

    A technical answer needs evidence.
    */

    let action =
      generated.answer
        .action;

    let message =
      generated.answer
        .message;

    if (
      action ===
        "answer" &&
      sources.length ===
        0
    ) {
      action =
        "no_answer";

      message =
        "I found related Rhino Wrangler information, but I couldn't verify enough supporting material to give you a reliable technical answer.";
    }

    return res
      .status(
        200
      )
      .json({
        success:
          true,

        engine:
          "answer-v1",

        model:
          generated.model,

        action,

        message,

        machineContext:
          search.machineContext,

        sources:
          sources.map(
            (
              source
            ) => ({
              id:
                source.id,

              pageTitle:
                source.pageTitle,

              sectionTitle:
                source.sectionTitle,

              topicTitle:
                source.topicTitle,

              sourceUrl:
                source.sourceUrl,
            })
          ),

        retrieval: {
          engine:
            search.engine,

          confidence:
            search.confidence,

          recommendedBehavior:
            search.recommendedBehavior,

          resultCount:
            search.resultCount,

          topResults:
            search.results
              .slice(
                0,
                5
              )
              .map(
                (
                  result
                ) => ({
                  sectionTitle:
                    result.sectionTitle,

                  pageTitle:
                    result.pageTitle,

                  similarity:
                    result.similarity,

                  finalScore:
                    result.finalScore,
                })
              ),
        },

        usage: {
          embeddingTokens:
            search.embeddingUsage
              ?.tokens ??
            0,

          modelInputTokens:
            cost.inputTokens,

          modelOutputTokens:
            cost.outputTokens,

          modelTotalTokens:
            cost.totalTokens,

          estimatedModelCost:
            cost.estimatedTotalCost,
        },

        responseId:
          generated.responseId,
      });
  } catch (
    error
  ) {
    console.error(
      "Rhino Assistant Answer V1 error:",
      error
    );

    return res
      .status(
        500
      )
      .json({
        error:
          "Unable to generate a Rhino Wrangler response.",
      });
  }
}