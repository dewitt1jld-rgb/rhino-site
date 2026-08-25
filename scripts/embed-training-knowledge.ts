import {
  loadEnvConfig,
} from "@next/env";

import {
  createClient,
} from "@supabase/supabase-js";

/*
--------------------------------------------------
RHINO WRANGLER EMBEDDING INDEXER
VERSION 1

DEFAULT = DRY RUN

Actual OpenAI calls + Supabase writes require:
  --write

This script:
- loads V2 knowledge chunks from Supabase
- finds chunks needing embeddings
- sends search_text to OpenAI
- creates 1024-dimension embeddings
- stores vectors in Supabase
- records model + embedded timestamp
- reports token usage and estimated cost

It DOES NOT:
- modify training pages
- modify rhino_knowledge
- generate chatbot answers
--------------------------------------------------
*/

loadEnvConfig(
  process.cwd()
);

/*
--------------------------------------------------
SETTINGS
--------------------------------------------------
*/

const EMBEDDING_MODEL =
  "text-embedding-3-small";

const EMBEDDING_DIMENSIONS =
  1024;

/*
Batching several chunks in one request is cheaper
and faster than making 532 individual HTTP calls.
*/

const BATCH_SIZE =
  50;

const WRITE_MODE =
  process.argv.includes(
    "--write"
  );

/*
Current text-embedding-3-small price:
$0.02 per 1,000,000 input tokens.

Used only for displaying an estimated cost.
Actual OpenAI billing is the source of truth.
*/

const COST_PER_MILLION_TOKENS =
  0.02;

/*
--------------------------------------------------
ENVIRONMENT
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

if (
  !SUPABASE_URL ||
  !SUPABASE_SERVICE_ROLE_KEY
) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local."
  );
}

if (
  WRITE_MODE &&
  !OPENAI_API_KEY
) {
  throw new Error(
    "Missing OPENAI_API_KEY in .env.local."
  );
}

/*
--------------------------------------------------
SUPABASE
--------------------------------------------------
*/

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

type KnowledgeChunk = {
  id: string;

  page_id: string;

  chunk_index: number;

  section_title: string;

  topic_title:
    string | null;

  search_text:
    string | null;

  content_hash:
    string;

  embedding:
    number[] | string | null;

  embedding_model:
    string | null;
};

type OpenAIEmbeddingResponse = {
  data: {
    embedding:
      number[];

    index:
      number;

    object:
      string;
  }[];

  model:
    string;

  usage: {
    prompt_tokens:
      number;

    total_tokens:
      number;
  };
};

/*
--------------------------------------------------
UTILITY
--------------------------------------------------
*/

function chunkArray<T>(
  items: T[],
  size: number
) {
  const batches:
    T[][] =
      [];

  for (
    let index =
      0;

    index <
    items.length;

    index +=
      size
  ) {
    batches.push(
      items.slice(
        index,
        index +
          size
      )
    );
  }

  return batches;
}

/*
--------------------------------------------------
LOAD KNOWLEDGE CHUNKS
--------------------------------------------------
*/

async function loadChunks() {
  const {
    data,
    error,
  } =
    await supabase
      .from(
        "rhino_knowledge_chunks"
      )
      .select(`
        id,
        page_id,
        chunk_index,
        section_title,
        topic_title,
        search_text,
        content_hash,
        embedding,
        embedding_model
      `)
      .eq(
        "is_active",
        true
      )
      .order(
        "page_id"
      )
      .order(
        "chunk_index"
      );

  if (
    error
  ) {
    throw error;
  }

  return (
    data ??
    []
  ) as KnowledgeChunk[];
}

/*
--------------------------------------------------
DETERMINE WHICH CHUNKS NEED EMBEDDINGS
--------------------------------------------------

For now we re-embed when:

- no embedding exists
- embedding_model is different

Later we can also keep a separate
embedding_content_hash if we want even finer
incremental control.
--------------------------------------------------
*/

function needsEmbedding(
  chunk:
    KnowledgeChunk
) {
  if (
    !chunk.search_text ||
    !chunk.search_text.trim()
  ) {
    return false;
  }

  if (
    !chunk.embedding
  ) {
    return true;
  }

  if (
    chunk.embedding_model !==
    EMBEDDING_MODEL
  ) {
    return true;
  }

  return false;
}

/*
--------------------------------------------------
CALL OPENAI EMBEDDINGS API
--------------------------------------------------
*/

async function createEmbeddings(
  inputs:
    string[]
) {
  if (
    !OPENAI_API_KEY
  ) {
    throw new Error(
      "OPENAI_API_KEY is not available."
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
              inputs,

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

  return (
    await response.json()
  ) as OpenAIEmbeddingResponse;
}

/*
--------------------------------------------------
STORE EMBEDDING
--------------------------------------------------
*/

async function saveEmbedding(
  chunkId:
    string,

  embedding:
    number[]
) {
  /*
  pgvector accepts vectors using its string form:

  [0.123,-0.456,...]
  */

  const vectorValue =
    `[${embedding.join(",")}]`;

  const {
    error,
  } =
    await supabase
      .from(
        "rhino_knowledge_chunks"
      )
      .update({
        embedding:
          vectorValue,

        embedding_model:
          EMBEDDING_MODEL,

        embedded_at:
          new Date()
            .toISOString(),
      })
      .eq(
        "id",
        chunkId
      );

  if (
    error
  ) {
    throw error;
  }
}

/*
--------------------------------------------------
MAIN
--------------------------------------------------
*/

async function main() {
  console.log("");
  console.log(
    "============================================"
  );

  console.log(
    "RHINO WRANGLER EMBEDDING INDEXER"
  );

  console.log(
    "VERSION 1"
  );

  console.log(
    "============================================"
  );

  console.log("");

  console.log(
    `Model: ${EMBEDDING_MODEL}`
  );

  console.log(
    `Dimensions: ${EMBEDDING_DIMENSIONS}`
  );

  console.log("");

  if (
    WRITE_MODE
  ) {
    console.log(
      "MODE: WRITE"
    );

    console.log(
      "OpenAI API calls and Supabase writes ARE enabled."
    );
  } else {
    console.log(
      "MODE: DRY RUN"
    );

    console.log(
      "No OpenAI API calls will be made."
    );

    console.log(
      "No Supabase records will be changed."
    );
  }

  console.log("");

  const chunks =
    await loadChunks();

  const missingSearchText =
    chunks.filter(
      (
        chunk
      ) =>
        !chunk.search_text ||
        !chunk.search_text.trim()
    );

  const chunksToEmbed =
    chunks.filter(
      needsEmbedding
    );

  const alreadyEmbedded =
    chunks.length -
    chunksToEmbed.length -
    missingSearchText.length;

  console.log(
    `Active chunks found: ${chunks.length}`
  );

  console.log(
    `Already embedded: ${alreadyEmbedded}`
  );

  console.log(
    `Need embeddings: ${chunksToEmbed.length}`
  );

  console.log(
    `Missing search_text: ${missingSearchText.length}`
  );

  console.log("");

  if (
    missingSearchText.length >
    0
  ) {
    console.log(
      "WARNING:"
    );

    console.log(
      "Some chunks have no search_text and will be skipped."
    );

    console.log("");
  }

  /*
  --------------------------------------------------
  DRY RUN STOPS HERE
  --------------------------------------------------
  */

  if (
    !WRITE_MODE
  ) {
    console.log(
      "DRY RUN COMPLETE."
    );

    console.log("");

    console.log(
      `Would embed ${chunksToEmbed.length} chunk(s).`
    );

    console.log("");

    console.log(
      "When ready, run:"
    );

    console.log("");

    console.log(
      "npx tsx scripts/embed-training-knowledge.ts --write"
    );

    console.log("");

    return;
  }

  if (
    chunksToEmbed.length ===
    0
  ) {
    console.log(
      "Everything is already embedded."
    );

    console.log("");

    return;
  }

  /*
  --------------------------------------------------
  CREATE BATCHES
  --------------------------------------------------
  */

  const batches =
    chunkArray(
      chunksToEmbed,
      BATCH_SIZE
    );

  let completed =
    0;

  let totalTokens =
    0;

  console.log(
    `Embedding in ${batches.length} batch(es)...`
  );

  console.log("");

  /*
  --------------------------------------------------
  PROCESS BATCHES
  --------------------------------------------------
  */

  for (
    let batchIndex =
      0;

    batchIndex <
    batches.length;

    batchIndex++
  ) {
    const batch =
      batches[
        batchIndex
      ];

    console.log(
      `Batch ${batchIndex + 1}/${batches.length}`
    );

    console.log(
      `  Sending ${batch.length} chunk(s) to OpenAI...`
    );

    const response =
      await createEmbeddings(
        batch.map(
          (
            chunk
          ) =>
            chunk.search_text!
        )
      );

    totalTokens +=
      response.usage
        ?.total_tokens ??
      0;

    /*
    OpenAI returns embeddings with indexes matching
    their original position in the input array.
    */

    const sortedEmbeddings =
      [...response.data]
        .sort(
          (
            a,
            b
          ) =>
            a.index -
            b.index
        );

    if (
      sortedEmbeddings.length !==
      batch.length
    ) {
      throw new Error(
        `Embedding count mismatch in batch ${batchIndex + 1}. Expected ${batch.length}, received ${sortedEmbeddings.length}.`
      );
    }

    console.log(
      "  Saving vectors to Supabase..."
    );

    for (
      let index =
        0;

      index <
      batch.length;

      index++
    ) {
      const chunk =
        batch[index];

      const embedding =
        sortedEmbeddings[
          index
        ].embedding;

      if (
        embedding.length !==
        EMBEDDING_DIMENSIONS
      ) {
        throw new Error(
          `Unexpected embedding length for chunk ${chunk.id}. Expected ${EMBEDDING_DIMENSIONS}, received ${embedding.length}.`
        );
      }

      await saveEmbedding(
        chunk.id,
        embedding
      );

      completed++;

      if (
        completed %
          25 ===
        0 ||
        completed ===
          chunksToEmbed.length
      ) {
        console.log(
          `  Progress: ${completed}/${chunksToEmbed.length}`
        );
      }
    }

    console.log(
      `  Batch complete.`
    );

    console.log("");
  }

  /*
  --------------------------------------------------
  COST ESTIMATE
  --------------------------------------------------
  */

  const estimatedCost =
    (
      totalTokens /
      1_000_000
    ) *
    COST_PER_MILLION_TOKENS;

  console.log(
    "============================================"
  );

  console.log(
    "EMBEDDING COMPLETE"
  );

  console.log(
    "============================================"
  );

  console.log("");

  console.log(
    `Chunks embedded: ${completed}`
  );

  console.log(
    `Input tokens used: ${totalTokens.toLocaleString()}`
  );

  console.log(
    `Estimated embedding cost: $${estimatedCost.toFixed(6)}`
  );

  console.log("");

  console.log(
    "The existing rhino_knowledge table was not modified."
  );

  console.log("");
}

/*
--------------------------------------------------
RUN
--------------------------------------------------
*/

main()
  .catch(
    (
      error
    ) => {
      console.error("");

      console.error(
        "EMBEDDING INDEXER FAILED"
      );

      console.error("");

      console.error(
        error
      );

      console.error("");

      process.exit(
        1
      );
    }
  );