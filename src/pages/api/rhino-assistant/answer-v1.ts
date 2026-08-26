import type {
  NextApiRequest,
  NextApiResponse,
} from "next";

/*
==================================================
RHINO WRANGLER ASSISTANT
ANSWER V1

PIPELINE:

1. Understand the latest message in conversation context
2. Rewrite ambiguous follow-ups into a standalone search query
3. Call Search V3
4. Retrieve approved Rhino Wrangler evidence
5. Send ONLY that evidence to the answer model
6. Require structured output
7. Validate cited source IDs
8. Report API token usage + estimated cost

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
For now the query rewriter uses the same model.

Because the rewrite response is extremely small,
the additional cost should remain tiny.

Later we can move this to an even cheaper model
without changing the rest of the architecture.
*/

const QUERY_REWRITE_MODEL =
  ANSWER_MODEL;

/*
Current pricing values used by the existing
test cost estimator.

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
  companyMachineId?:
    string | null;

  machineModelId?:
    string | null;

  modelCode?:
    string | null;

  baseModel?:
    string | null;

  feedDirection?:
    string | null;

  displayName?:
    string | null;

  nickname?:
    string | null;

  serialNumber?:
    string | null;

  isPrimary?:
    boolean | null;

  capabilitiesResolved?:
    boolean | null;

  motorSize?:
    string | null;

  slideSize?:
    string | null;

  sawType?:
    string | null;

  pieceLoadDirection?:
    string | null;

  cut90?:
    boolean | null;

  cutMiter?:
    boolean | null;

  cutBevel?:
    boolean | null;

  cutCompound?:
    boolean | null;

  hasRotationalOffset?:
    boolean | null;

  frontDrill?:
    string | null;

  topDrill?:
    string | null;

  bottomDrill?:
    string | null;

  backDrill?:
    string | null;

  drillAssemblyCount?:
    number | null;

  drillConfiguration?:
    string | null;

  hasRobot?:
    boolean | null;

  hasStationaryToolChanger?:
    boolean | null;

  hasRobotToolChanger?:
    boolean | null;

  hasLinearEncoder?:
    boolean | null;

  fluidCooledMotors?:
    boolean | null;

  doorCapable?:
    boolean | null;

  digitalHClampPressure?:
    boolean | null;

  digitalClutchPressure?:
    boolean | null;

  supportedForAI?:
    boolean | null;

  source?:
    string | null;
};

type ConversationMessage = {
  role:
    | "user"
    | "assistant";

  content:
    string;
};

type RetrievalResult = {
  id:
    string;

  pageId:
    string;

  chunkIndex:
    number;

  pageTitle:
    string;

  category:
    string;

  subcategory:
    string | null;

  topicTitle:
    string | null;

  sectionTitle:
    string;

  content:
    string;

  sourceSections:
    string[];

  sourceUrl:
    string;

  machineScope:
    string;

  machineModels:
    string[];

  riskLevel:
    string;

  similarity:
    number;

  lexicalScore:
    number;

  phraseScore:
    number;

  machineScore:
    number;

  categoryScore:
    number;

  finalScore:
    number;

  matchedTerms:
    string[];

  matchedPatterns:
    string[];

  machineReason:
    string | null;
};

type SearchResponse = {
  success:
    boolean;

  engine:
    string;

  question:
    string;

  machineContext: {
    modelCode:
      string | null;

    baseModel:
      string | null;

    feedDirection:
      string | null;
  };

  confidence:
    | "high"
    | "medium"
    | "low"
    | "none";

  recommendedBehavior:
    | "answer_with_sources"
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

type QueryRewritePayload = {
  searchQuery:
    string;
};

type QueryRewriteResult = {
  searchQuery:
    string;

  usedRewrite:
    boolean;

  usage:
    any;

  model:
    string | null;

  fallbackReason:
    string | null;
};

/*
==================================================
CALL SEARCH V3
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
MACHINE CONTEXT

This gives the answer model the actual resolved
machine capabilities.

This is especially important for Resolution Guides.

Example:

5500L:
digitalHClampPressure = true
digitalClutchPressure = true

The answer model can therefore select the digital
instructions rather than dumping both branches.
==================================================
*/

function buildMachineContext(
  machine:
    MachineContext
) {
  return `
Model Code: ${machine.modelCode ?? "unknown"}
Base Model: ${machine.baseModel ?? "unknown"}
Feed Direction: ${machine.feedDirection ?? "unknown"}
Display Name: ${machine.displayName ?? "unknown"}

Capabilities Resolved: ${machine.capabilitiesResolved ?? "unknown"}

Saw Type: ${machine.sawType ?? "unknown"}
Piece Load Direction: ${machine.pieceLoadDirection ?? "unknown"}

90 Degree Cuts: ${machine.cut90 ?? "unknown"}
Miter Cuts: ${machine.cutMiter ?? "unknown"}
Bevel Cuts: ${machine.cutBevel ?? "unknown"}
Compound Cuts: ${machine.cutCompound ?? "unknown"}

Rotational Offset: ${machine.hasRotationalOffset ?? "unknown"}

Front Drill: ${machine.frontDrill ?? "unknown"}
Top Drill: ${machine.topDrill ?? "unknown"}
Bottom Drill: ${machine.bottomDrill ?? "unknown"}
Back Drill: ${machine.backDrill ?? "unknown"}

Has Robot: ${machine.hasRobot ?? "unknown"}
Stationary Tool Changer: ${machine.hasStationaryToolChanger ?? "unknown"}
Robot Tool Changer: ${machine.hasRobotToolChanger ?? "unknown"}

Linear Encoder: ${machine.hasLinearEncoder ?? "unknown"}
Fluid Cooled Motors: ${machine.fluidCooledMotors ?? "unknown"}
Door Capable: ${machine.doorCapable ?? "unknown"}

Digital H-Clamp Pressure: ${machine.digitalHClampPressure ?? "unknown"}
Digital Clutch Pressure: ${machine.digitalClutchPressure ?? "unknown"}
`.trim();
}

/*
==================================================
CONVERSATION HISTORY

Keep enough history for multi-turn troubleshooting
without sending the entire lifetime of the chat.
==================================================
*/

function buildConversationHistory(
  messages:
    ConversationMessage[]
) {
  return messages
    .slice(
      -8
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
FALLBACK CONTEXTUAL SEARCH QUERY

This is the V1 method we already know works well
for straightforward follow-up answers.

It intentionally uses CUSTOMER messages only.

If the AI query-rewrite step ever fails, we fall
back to this instead of breaking retrieval.
==================================================
*/

function buildContextualSearchQuery(
  question:
    string,

  conversation:
    ConversationMessage[],

  machine:
    MachineContext
) {
  const recentUserMessages =
    conversation
      .filter(
        (
          message
        ) =>
          message.role ===
          "user"
      )
      .slice(
        -5
      )
      .map(
        (
          message
        ) =>
          message.content.trim()
      )
      .filter(
        Boolean
      );

  const parts =
    [
      machine.modelCode
        ? `Machine: ${machine.modelCode}.`
        : "",

      ...recentUserMessages,

      question,
    ]
      .filter(
        Boolean
      );

  return parts.join(
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
QUERY REWRITER

PURPOSE:

Convert conversational follow-ups into standalone
retrieval queries.

Example:

Conversation:
Assistant:
"Apply backward pressure to test for coasting."

Customer:
"What do I do if that test works?"

Bad search query:
"What do I do if that test works?"

Good search query:
"How to permanently correct material coasting
causing inconsistent cut lengths after the
backward-pressure test confirms coasting."

IMPORTANT:

The rewriter DOES NOT answer the customer.

Assistant messages may be used to understand what
phrases like "that test" or "that setting" refer to,
but assistant technical claims are NOT treated as
verified Rhino Wrangler knowledge.

Search V3 still decides what evidence exists.
==================================================
*/

async function rewriteSearchQuery(
  question:
    string,

  conversation:
    ConversationMessage[],

  machine:
    MachineContext
): Promise<QueryRewriteResult> {
  const fallbackQuery =
    buildContextualSearchQuery(
      question,
      conversation,
      machine
    );

  /*
  No rewrite is necessary on the very first turn.

  The initial customer question is already a
  standalone query.
  */

  if (
    conversation.length ===
    0
  ) {
    return {
      searchQuery:
        fallbackQuery,

      usedRewrite:
        false,

      usage:
        null,

      model:
        null,

      fallbackReason:
        "first_turn",
    };
  }

  if (!OPENAI_API_KEY) {
    return {
      searchQuery:
        fallbackQuery,

      usedRewrite:
        false,

      usage:
        null,

      model:
        null,

      fallbackReason:
        "missing_openai_key",
    };
  }

  try {
    const history =
      conversation
        .slice(
          -10
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

    const machineContext =
      buildMachineContext(
        machine
      );

    const instructions =
`You are a search-query rewriting component for the Rhino Wrangler technical support system.

YOUR ONLY JOB:

Rewrite the customer's latest message into ONE standalone search query that preserves the meaning of the current troubleshooting conversation.

DO NOT answer the customer's question.

DO NOT provide troubleshooting advice.

DO NOT decide what the cause or fix is.

DO NOT invent any technical fact.

RULES:

1. Preserve facts explicitly stated by the CUSTOMER.

2. Use recent ASSISTANT messages only to resolve conversational references such as:
- "that test"
- "that setting"
- "it"
- "that"
- "there"
- "what you just said"
- "if that works"
- "what do I do next"

3. Assistant technical statements are conversational context only. They are NOT verified facts.

4. If the customer explicitly confirms the result of a test, preserve that result.

5. If the customer asks a hypothetical question such as "what if that test works?", preserve that it is hypothetical.

6. Include the active machine model when it helps retrieval.

7. Include important established troubleshooting facts from the conversation, such as:
- cut type
- consistent versus varying
- short versus long
- measured error
- test being discussed
- setting being discussed
- symptom being diagnosed

8. Do not add facts that were never stated.

9. Do not add procedures, values, settings, or diagnoses merely because they seem likely.

10. Keep the search query concise. Usually 1-4 sentences.

11. The result must be written as a technical search query, not as a response to the customer.

EXAMPLE:

Conversation:
USER: My parts keep coming out different lengths.
ASSISTANT: Are they consistently off or varying?
USER: They vary.
ASSISTANT: Apply backward pressure to the stock to test for coasting.
USER: What do I do if that test works?

Good rewritten query:
"Inconsistent cut lengths vary from part to part. The discussed diagnostic test is applying backward pressure to keep the stock against the pusher. If that test makes the cut lengths consistent, what is the permanent corrective procedure for the suspected coasting problem?"`;

    const input =
`ACTIVE MACHINE:

${machineContext}

RECENT CONVERSATION:

${history}

LATEST CUSTOMER MESSAGE:

${question}

Rewrite the latest message as one standalone search query.`;

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
                QUERY_REWRITE_MODEL,

              instructions,

              input,

              reasoning: {
                effort:
                  "low",
              },

              max_output_tokens:
                180,

              store:
                false,

              text: {
                verbosity:
                  "low",

                format: {
                  type:
                    "json_schema",

                  name:
                    "rhino_search_query_rewrite",

                  strict:
                    true,

                  schema: {
                    type:
                      "object",

                    properties: {
                      searchQuery: {
                        type:
                          "string",
                      },
                    },

                    required: [
                      "searchQuery",
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
        `Query rewrite failed (${response.status}): ${JSON.stringify(body)}`
      );
    }

    const outputText =
      getOutputText(
        body
      );

    if (!outputText) {
      throw new Error(
        "Query rewriter returned no text."
      );
    }

    const parsed:
      QueryRewritePayload =
      JSON.parse(
        outputText
      );

    const rewritten =
      typeof parsed
        ?.searchQuery ===
        "string"
        ? parsed.searchQuery
            .trim()
        : "";

    if (!rewritten) {
      throw new Error(
        "Query rewriter returned an empty search query."
      );
    }

    return {
      searchQuery:
        rewritten,

      usedRewrite:
        true,

      usage:
        body?.usage ??
        null,

      model:
        body?.model ??
        QUERY_REWRITE_MODEL,

      fallbackReason:
        null,
    };
  } catch (
    error
  ) {
    /*
    IMPORTANT:

    Query rewriting is an enhancement.

    It should never be capable of taking the entire
    Assistant offline.

    If anything goes wrong, use the existing
    contextual query instead.
    */

    console.warn(
      "Rhino Assistant query rewrite failed. Falling back to contextual search:",
      error
    );

    return {
      searchQuery:
        fallbackQuery,

      usedRewrite:
        false,

      usage:
        null,

      model:
        null,

      fallbackReason:
        "rewrite_failed",
    };
  }
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

  const machineContext =
    buildMachineContext(
      machine
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

5. Never tell a user to "try" an undocumented adjustment.

6. Never invent:
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

7. The supplied MACHINE CONTEXT contains the customer's resolved machine capabilities.

Use those capabilities to eliminate instructions that clearly do not apply.

Example:
If Digital H-Clamp Pressure is true and the evidence contains both manual and digital H-clamp procedures, prefer the documented digital procedure.

8. Machine context does NOT independently prove a technical procedure is correct. The procedure must still be supported by RHINO WRANGLER EVIDENCE.

9. If the evidence is insufficient, say so clearly.

10. When a direct answer is supported and no additional diagnostic information is needed, explain it concisely and conservatively.

11. Do not mention retrieval scores or internal ranking logic to the customer.

12. Do not claim certainty merely because SEARCH CONFIDENCE is high. Search confidence only means the retrieval engine thinks it found relevant material.

13. Use only SOURCE_ID values supplied in the evidence when filling usedSourceIds.

14. If asking a clarification question, usedSourceIds may contain the sources that justify the possible interpretations.

15. If there is no supported answer or useful clarification, choose no_answer.


CONVERSATIONAL TROUBLESHOOTING RULES:

16. Troubleshoot conversationally, one diagnostic step at a time.

17. If more than one diagnostic path is still possible, ask EXACTLY ONE clarification question.

18. Never combine multiple diagnostic questions into the same response.

BAD:
"Are these 90° cuts, bevels/miters, or compounds, and are they consistently off or varying?"

GOOD:
"Are the incorrect cut lengths on 90° cuts, bevels/miters, or compound cuts?"

19. After asking a clarification question, STOP. Wait for the customer's next message.

20. Do not provide a possible fix, troubleshooting procedure, secondary question, explanation, or recommendation in the same response as a clarification question.

BAD:
"Are they consistently off or varying? If they vary, check whether the stock is separating from the pusher."

GOOD:
"Are they consistently off by the same amount, or do the lengths vary from part to part?"

21. Ask the clarification question that most efficiently separates the remaining documented troubleshooting paths.

22. Use RECENT CONVERSATION to determine what the customer has already told you. Do not ask for information they already provided.

23. Treat clear customer statements from the recent conversation as established facts unless the customer later corrects them.

24. When the customer answers a clarification question, continue narrowing the SAME problem instead of treating their response as an unrelated new question.

25. Only provide the troubleshooting procedure once the conversation contains enough supported information to select the appropriate documented path.

26. Keep clarification questions short and natural. Prefer one sentence.

27. Do not dump every possible cause onto the customer.

28. Machine capabilities should prevent unnecessary questions when those capabilities already answer them.

29. When action is "clarify", the message should normally contain ONLY the clarification question.


DIAGNOSTIC TEST VS PERMANENT FIX:

30. Clearly distinguish between a diagnostic test and a permanent corrective procedure.

31. If evidence describes a test only, do not present that test as the permanent repair.

32. If the customer asks what to do after a diagnostic test succeeds, use the supplied evidence to explain the documented permanent corrective procedure.

33. If a Resolution Guide is present in the evidence and applies to the customer's machine, prefer that guide for the corrective procedure.

34. When a Resolution Guide contains multiple machine-control branches, use MACHINE CONTEXT to select the branch that matches the customer's actual machine.

35. Do not unnecessarily dump both manual and digital procedures when the machine capabilities clearly establish which one applies.

36. If the proper repair contains multiple corrective areas, it is acceptable to explain the overall plan briefly and then guide the customer through the first documented adjustment.

Your job is to guide the customer toward verified Rhino Wrangler information through a natural troubleshooting conversation, not to sound confident or overwhelm them with every possible diagnostic path at once.

37. When giving a diagnostic test, explain only the test and what result the customer should report back. Do not dump the permanent corrective procedure unless the customer asks for it or reports that the test confirmed the problem.

Example:

GOOD:
"This points to a possible coasting issue. As a diagnostic test, have a second person apply backward pressure to the stock so it never separates from the pusher. If this works, let me know and I'll walk you through the potential permanent solutions."

38. When the customer asks to be walked through a repair step by step, give ONLY ONE actionable step at a time and then wait for the customer's reply.

BAD:
"1. Open Parts Library.
2. Find the part.
3. Change H-clamp pressure.
4. Change clutch pressure."

GOOD:
"From the main menu, open Databases and then Parts Library. Let me know when you're there."

39. If Digital H-Clamp Pressure is true, do not provide manual H-clamp adjustment instructions when a documented digital procedure is available.

40. If Digital Clutch Pressure is true, do not provide manual poly-clutch adjustment instructions or manual resistance guidance when a documented digital clutch-pressure procedure is available.

41. A manual poly-clutch resistance description such as '5 to 7 on a theoretical 1-to-10 scale' is NOT a machine setting. Never present it as a value the customer can enter into software.

42. When machine capabilities clearly establish the applicable control type, use only that branch of the Resolution Guide unless the customer specifically asks about another physical component.`;

  const input =
`CUSTOMER QUESTION:
${question}

RESOLVED MACHINE CONTEXT:

${machineContext}

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
TOKEN USAGE
==================================================
*/

function getTokenUsage(
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

  const totalTokens =
    Number(
      usage
        ?.total_tokens ??
        inputTokens +
          outputTokens
    );

  return {
    inputTokens,
    outputTokens,
    totalTokens,
  };
}

/*
==================================================
COST ESTIMATE
==================================================
*/

function calculateCostFromTokens(
  inputTokens:
    number,

  outputTokens:
    number
) {
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
    inputCost,
    outputCost,

    totalCost:
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

    /*
    Keep more history than before.

    Follow-up support conversations can easily need
    four or five exchanges before the actual problem
    has been isolated.
    */

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
              -10
            )
        : [];

    /*
    ------------------------------------------------
    STEP 1:
    BUILD A STANDALONE RETRIEVAL QUERY
    ------------------------------------------------

    First turn:
    use the customer's question directly.

    Follow-up:
    allow the query rewriter to resolve references
    such as "that test", "it", and "what next?"

    If rewriting fails:
    automatically fall back to the previous
    user-message contextual query.
    ------------------------------------------------
    */

    const rewrite =
      await rewriteSearchQuery(
        question,
        conversation,
        machine
      );

    /*
    ------------------------------------------------
    STEP 2:
    RETRIEVE RHINO WRANGLER KNOWLEDGE
    ------------------------------------------------
    */

    const search =
      await runSearchV3(
        req,
        rewrite.searchQuery,
        machine
      );

    /*
    Calculate rewrite usage now so even a no-answer
    response accurately reports the cost.
    */

    const rewriteUsage =
      getTokenUsage(
        rewrite.usage
      );

    const rewriteCost =
      calculateCostFromTokens(
        rewriteUsage.inputTokens,
        rewriteUsage.outputTokens
      );

    /*
    ------------------------------------------------
    STEP 3:
    ABSOLUTELY NO MATCH
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
            engine:
              search.engine,

            confidence:
              search.confidence,

            recommendedBehavior:
              search.recommendedBehavior,

            resultCount:
              search.resultCount,

            /*
            TEST DEBUGGING

            This lets us see exactly what Search V3
            searched after rewriting.
            */

            searchQuery:
              rewrite.searchQuery,

            queryRewriteUsed:
              rewrite.usedRewrite,

            queryRewriteFallbackReason:
              rewrite.fallbackReason,
          },

          usage: {
            embeddingTokens:
              search.embeddingUsage
                ?.tokens ??
              0,

            /*
            These existing fields now represent
            TOTAL model usage:
            rewrite + answer.

            In a no-answer case, only rewrite usage
            exists.
            */

            modelInputTokens:
              rewriteUsage.inputTokens,

            modelOutputTokens:
              rewriteUsage.outputTokens,

            modelTotalTokens:
              rewriteUsage.totalTokens,

            estimatedModelCost:
              rewriteCost.totalCost,

            /*
            Additional test/debug fields.
            */

            rewriteInputTokens:
              rewriteUsage.inputTokens,

            rewriteOutputTokens:
              rewriteUsage.outputTokens,

            answerInputTokens:
              0,

            answerOutputTokens:
              0,
          },
        });
    }

    /*
    ------------------------------------------------
    STEP 4:
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

    /*
    ------------------------------------------------
    COMBINED USAGE
    ------------------------------------------------
    */

    const answerUsage =
      getTokenUsage(
        generated.usage
      );

    const answerCost =
      calculateCostFromTokens(
        answerUsage.inputTokens,
        answerUsage.outputTokens
      );

    const totalModelInputTokens =
      rewriteUsage.inputTokens +
      answerUsage.inputTokens;

    const totalModelOutputTokens =
      rewriteUsage.outputTokens +
      answerUsage.outputTokens;

    const totalModelTokens =
      rewriteUsage.totalTokens +
      answerUsage.totalTokens;

    const totalModelCost =
      rewriteCost.totalCost +
      answerCost.totalCost;

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

          /*
          TEST DEBUGGING

          This is extremely useful while we're tuning
          conversational retrieval.

          We'll probably remove it from the production
          customer response later.
          */

          searchQuery:
            rewrite.searchQuery,

          queryRewriteUsed:
            rewrite.usedRewrite,

          queryRewriteModel:
            rewrite.model,

          queryRewriteFallbackReason:
            rewrite.fallbackReason,

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

          /*
          Preserve the fields the frontend already
          expects.

          These now represent TOTAL model usage.
          */

          modelInputTokens:
            totalModelInputTokens,

          modelOutputTokens:
            totalModelOutputTokens,

          modelTotalTokens:
            totalModelTokens,

          estimatedModelCost:
            totalModelCost,

          /*
          Additional debugging information.
          */

          rewriteInputTokens:
            rewriteUsage.inputTokens,

          rewriteOutputTokens:
            rewriteUsage.outputTokens,

          rewriteTotalTokens:
            rewriteUsage.totalTokens,

          answerInputTokens:
            answerUsage.inputTokens,

          answerOutputTokens:
            answerUsage.outputTokens,

          answerTotalTokens:
            answerUsage.totalTokens,

          estimatedRewriteCost:
            rewriteCost.totalCost,

          estimatedAnswerCost:
            answerCost.totalCost,
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