import fs from "fs";
import path from "path";
import crypto from "crypto";

import {
  Node,
  Project,
  SyntaxKind,
} from "ts-morph";

import {
  createClient,
  SupabaseClient,
} from "@supabase/supabase-js";

import {
  loadEnvConfig,
} from "@next/env";

/*
--------------------------------------------------
RHINO WRANGLER TRAINING INDEXER
VERSION 5 — SUPABASE INDEXING

DEFAULT MODE = DRY RUN

WRITE MODE REQUIRES:
  --write

This script:
- discovers approved training pages
- skips index.tsx
- skips Coming Soon pages
- extracts static training content
- respects H2 topic boundaries
- creates knowledge chunks
- builds contextual search_text
- hashes page/chunk content
- detects new / changed / unchanged pages
- upserts pages and chunks
- removes stale chunks

This script DOES NOT touch:
- public.rhino_knowledge
- the existing live assistant
- source TSX files
--------------------------------------------------
*/

/*
--------------------------------------------------
LOAD .env.local / Next environment
--------------------------------------------------
*/

loadEnvConfig(
  process.cwd()
);

/*
--------------------------------------------------
TYPES
--------------------------------------------------
*/

type TrainingRoot = {
  label: string;
  category: string;
  path: string;
};

type DiscoveredPage = {
  rootLabel: string;
  category: string;

  absolutePath: string;
  relativePath: string;

  fileName: string;

  subcategory:
    string | null;
};

type ExtractedSection = {
  sectionTitle: string;

  headingLevel:
    | 1
    | 2
    | 3
    | null;

  content: string;
};

type TopicGroup = {
  topicTitle: string;

  sections:
    ExtractedSection[];
};

type KnowledgeChunk = {
  chunkIndex: number;

  title: string;

  topicTitle: string;

  content: string;

  sourceSections:
    string[];

  characterCount: number;

  searchText: string;

  contentHash: string;

  machineScope:
    | "not_applicable"
    | "all"
    | "specific"
    | "unknown";
};

type ExtractedPage = {
  page:
    DiscoveredPage;

  title: string;

  sourceUrl: string;

  sections:
    ExtractedSection[];

  chunks:
    KnowledgeChunk[];

  fullText: string;

  totalCharacters:
    number;

  contentHash: string;

  skipped:
    boolean;

  skipReason:
    string | null;

  warnings:
    string[];

  info:
    string[];
};

type ExistingPageRow = {
  id: string;
  source_file: string;
  content_hash: string;
};

/*
--------------------------------------------------
PROJECT SETTINGS
--------------------------------------------------
*/

const PROJECT_ROOT =
  process.cwd();

/*
--------------------------------------------------
SOURCE URL BASE

You can eventually add:

KNOWLEDGE_SOURCE_BASE_URL=https://www.therhinowrangler.com

to .env.local.

For now it falls back to NEXT_PUBLIC_SITE_URL,
then to the testing site.
--------------------------------------------------
*/

const SOURCE_BASE_URL =
  (
    process.env
      .KNOWLEDGE_SOURCE_BASE_URL ||
    process.env
      .NEXT_PUBLIC_SITE_URL ||
    "https://www.therhinowranglertesting.com"
  ).replace(
    /\/+$/,
    ""
  );

/*
--------------------------------------------------
APPROVED TRAINING ROOTS
--------------------------------------------------
*/

const TRAINING_ROOTS:
  TrainingRoot[] = [
    {
      label:
        "RhinoFab",

      category:
        "RhinoFab",

      path:
        "src/pages/dashboard/rhino-training",
    },

    {
      label:
        "Glazier Studio",

      category:
        "Glazier Studio",

      path:
        "src/pages/dashboard/glazier-studio",
    },

    {
      label:
        "Introductory Software Training",

      category:
        "Introductory Software Training",

      path:
        "src/pages/dashboard/introductory-software-training",
    },
  ];

/*
--------------------------------------------------
IGNORED FILES
--------------------------------------------------
*/

const IGNORED_FILE_NAMES =
  new Set([
    "_app.tsx",
    "_document.tsx",
    "_error.tsx",
    "index.tsx",
  ]);

/*
--------------------------------------------------
VISIBLE JSX TAGS
--------------------------------------------------
*/

const TEXT_TAGS =
  new Set([
    "h1",
    "h2",
    "h3",
    "p",
    "li",
    "span",
  ]);

const HEADING_TAGS =
  new Set([
    "h1",
    "h2",
    "h3",
  ]);

/*
--------------------------------------------------
CHUNK SIZE SETTINGS
--------------------------------------------------
*/

const MIN_CHUNK_CHARACTERS =
  500;

const TARGET_CHUNK_CHARACTERS =
  1800;

const MAX_CHUNK_CHARACTERS =
  3200;

/*
--------------------------------------------------
COMMAND MODE

Default is always dry-run.

Only --write enables database writes.
--------------------------------------------------
*/

const WRITE_MODE =
  process.argv.includes(
    "--write"
  );

const DRY_RUN =
  !WRITE_MODE;

/*
--------------------------------------------------
HASH
--------------------------------------------------
*/

function createHash(
  value: string
) {
  return crypto
    .createHash(
      "sha256"
    )
    .update(
      value
    )
    .digest(
      "hex"
    );
}

/*
--------------------------------------------------
TEXT CLEANUP
--------------------------------------------------
*/

function normalizeWhitespace(
  value: string
) {
  return value
    .replace(
      /&quot;/g,
      '"'
    )
    .replace(
      /&amp;/g,
      "&"
    )
    .replace(
      /&lt;/g,
      "<"
    )
    .replace(
      /&gt;/g,
      ">"
    )
    .replace(
      /&#39;/g,
      "'"
    )
    .replace(
      /&apos;/g,
      "'"
    )
    .replace(
      /\s+/g,
      " "
    )
    .trim();
}

function slugToTitle(
  value: string
) {
  return value
    .replace(
      /\.tsx$/i,
      ""
    )
    .replace(
      /[-_]+/g,
      " "
    )
    .replace(
      /\b\w/g,
      (
        character
      ) =>
        character.toUpperCase()
    );
}

/*
--------------------------------------------------
FILE DISCOVERY
--------------------------------------------------
*/

function shouldIncludeFile(
  filePath: string
) {
  const fileName =
    path.basename(
      filePath
    );

  if (
    IGNORED_FILE_NAMES.has(
      fileName
    )
  ) {
    return false;
  }

  return fileName
    .toLowerCase()
    .endsWith(
      ".tsx"
    );
}

function findTsxFiles(
  directoryPath: string
): string[] {
  if (
    !fs.existsSync(
      directoryPath
    )
  ) {
    return [];
  }

  const entries =
    fs.readdirSync(
      directoryPath,
      {
        withFileTypes:
          true,
      }
    );

  const files:
    string[] =
      [];

  for (
    const entry
    of entries
  ) {
    const fullPath =
      path.join(
        directoryPath,
        entry.name
      );

    if (
      entry.isDirectory()
    ) {
      files.push(
        ...findTsxFiles(
          fullPath
        )
      );

      continue;
    }

    if (
      entry.isFile() &&
      shouldIncludeFile(
        fullPath
      )
    ) {
      files.push(
        fullPath
      );
    }
  }

  return files;
}

function getSubcategory(
  rootPath: string,
  filePath: string
) {
  const directory =
    path.dirname(
      filePath
    );

  const relativeDirectory =
    path.relative(
      rootPath,
      directory
    );

  if (
    !relativeDirectory ||
    relativeDirectory ===
      "."
  ) {
    return null;
  }

  return relativeDirectory
    .replace(
      /\\/g,
      "/"
    );
}

function discoverTrainingPages() {
  const discovered:
    DiscoveredPage[] =
      [];

  for (
    const root
    of TRAINING_ROOTS
  ) {
    const absoluteRoot =
      path.join(
        PROJECT_ROOT,
        root.path
      );

    const files =
      findTsxFiles(
        absoluteRoot
      );

    for (
      const filePath
      of files
    ) {
      discovered.push({
        rootLabel:
          root.label,

        category:
          root.category,

        absolutePath:
          filePath,

        relativePath:
          path
            .relative(
              PROJECT_ROOT,
              filePath
            )
            .replace(
              /\\/g,
              "/"
            ),

        fileName:
          path.basename(
            filePath
          ),

        subcategory:
          getSubcategory(
            absoluteRoot,
            filePath
          ),
      });
    }
  }

  return discovered;
}

/*
--------------------------------------------------
SOURCE URL

Pages Router:

src/pages/dashboard/foo.tsx

becomes:

/dashboard/foo
--------------------------------------------------
*/

function buildSourceUrl(
  relativePath: string
) {
  let route =
    relativePath
      .replace(
        /\\/g,
        "/"
      )
      .replace(
        /^src\/pages/,
        ""
      )
      .replace(
        /\.tsx$/i,
        ""
      );

  if (
    route.endsWith(
      "/index"
    )
  ) {
    route =
      route.slice(
        0,
        -6
      );
  }

  if (
    !route.startsWith(
      "/"
    )
  ) {
    route =
      `/${route}`;
  }

  return (
    SOURCE_BASE_URL +
    route
  );
}

/*
--------------------------------------------------
COMING SOON
--------------------------------------------------
*/

function isComingSoonPage(
  sourceText: string
) {
  return (
    sourceText.includes(
      "ComingSoonPage"
    ) &&
    (
      sourceText.includes(
        "<ComingSoonPage"
      ) ||
      sourceText.includes(
        '@/components/ComingSoonPage'
      )
    )
  );
}

function getComingSoonTitle(
  sourceText: string,
  fallback: string
) {
  const match =
    sourceText.match(
      /<ComingSoonPage[\s\S]*?title=["']([^"']+)["']/
    );

  if (
    match?.[1]
  ) {
    return normalizeWhitespace(
      match[1]
    );
  }

  return fallback;
}

/*
--------------------------------------------------
JSX HELPERS
--------------------------------------------------
*/

function getJsxTagName(
  node: Node
) {
  if (
    Node.isJsxElement(
      node
    )
  ) {
    return node
      .getOpeningElement()
      .getTagNameNode()
      .getText()
      .toLowerCase();
  }

  return null;
}

function extractTextFromNode(
  node: Node
) {
  const parts:
    string[] =
      [];

  node.forEachDescendant(
    (
      descendant
    ) => {
      if (
        Node.isJsxText(
          descendant
        )
      ) {
        const text =
          normalizeWhitespace(
            descendant.getText()
          );

        if (text) {
          parts.push(
            text
          );
        }

        return;
      }

      if (
        Node.isJsxExpression(
          descendant
        )
      ) {
        const expression =
          descendant.getExpression();

        if (!expression) {
          return;
        }

        if (
          Node.isStringLiteral(
            expression
          ) ||
          Node.isNoSubstitutionTemplateLiteral(
            expression
          )
        ) {
          const text =
            normalizeWhitespace(
              expression.getLiteralText()
            );

          if (text) {
            parts.push(
              text
            );
          }
        }
      }
    }
  );

  return normalizeWhitespace(
    parts.join(
      " "
    )
  );
}

/*
--------------------------------------------------
CHUNK FORMATTING
--------------------------------------------------
*/

function formatSectionForChunk(
  section:
    ExtractedSection
) {
  const parts:
    string[] =
      [];

  if (
    section.sectionTitle
  ) {
    parts.push(
      section.sectionTitle
    );
  }

  if (
    section.content
  ) {
    parts.push(
      section.content
    );
  }

  return parts
    .join(
      "\n"
    )
    .trim();
}

/*
--------------------------------------------------
H2 TOPIC GROUPS
--------------------------------------------------
*/

function buildTopicGroups(
  pageTitle: string,
  sections:
    ExtractedSection[]
) {
  const groups:
    TopicGroup[] =
      [];

  let current:
    TopicGroup | null =
      null;

  function flush() {
    if (
      current &&
      current.sections.length >
        0
    ) {
      groups.push(
        current
      );
    }

    current =
      null;
  }

  for (
    const section
    of sections
  ) {
    if (
      section.headingLevel ===
      1
    ) {
      if (!current) {
        current = {
          topicTitle:
            pageTitle,

          sections:
            [],
        };
      }

      current.sections.push(
        section
      );

      continue;
    }

    /*
    H2 = HARD TOPIC BOUNDARY
    */

    if (
      section.headingLevel ===
      2
    ) {
      flush();

      current = {
        topicTitle:
          section.sectionTitle,

        sections: [
          section,
        ],
      };

      continue;
    }

    if (!current) {
      current = {
        topicTitle:
          pageTitle,

        sections:
          [],
      };
    }

    current.sections.push(
      section
    );
  }

  flush();

  return groups;
}

/*
--------------------------------------------------
MACHINE SCOPE DEFAULT

We intentionally DO NOT infer actual machine models
from training prose yet.

Rhino technical content = unknown until approved.

Software content = machine does not apply.
--------------------------------------------------
*/

function getDefaultMachineScope(
  category: string
):
  | "not_applicable"
  | "unknown" {
  if (
    category ===
    "RhinoFab"
  ) {
    return "unknown";
  }

  return "not_applicable";
}

/*
--------------------------------------------------
BUILD SEARCH TEXT

This is used by future search / embeddings.

It intentionally repeats useful context.
--------------------------------------------------
*/

function buildSearchText(
  pageTitle: string,
  category: string,
  subcategory:
    string | null,
  topicTitle: string,
  chunkTitle: string,
  content: string
) {
  const parts =
    [
      `Page: ${pageTitle}`,
      `Category: ${category}`,
    ];

  if (
    subcategory
  ) {
    parts.push(
      `Subcategory: ${subcategory}`
    );
  }

  parts.push(
    `Topic: ${topicTitle}`
  );

  if (
    chunkTitle !==
    topicTitle
  ) {
    parts.push(
      `Section: ${chunkTitle}`
    );
  }

  parts.push(
    "",
    content
  );

  return parts.join(
    "\n"
  );
}

/*
--------------------------------------------------
SPLIT ONE H2 TOPIC
--------------------------------------------------
*/

function chunkTopicGroup(
  topic: TopicGroup,
  page:
    DiscoveredPage,
  pageTitle: string
) {
  const chunks:
    Omit<
      KnowledgeChunk,
      "chunkIndex"
    >[] =
      [];

  let currentSections:
    ExtractedSection[] =
      [];

  let currentCharacters =
    0;

  function flush() {
    if (
      currentSections.length ===
      0
    ) {
      return;
    }

    const content =
      currentSections
        .map(
          formatSectionForChunk
        )
        .filter(
          Boolean
        )
        .join(
          "\n\n"
        )
        .trim();

    if (!content) {
      currentSections =
        [];

      currentCharacters =
        0;

      return;
    }

    const firstMeaningful =
      currentSections.find(
        (
          section
        ) =>
          section.headingLevel ===
            2 ||
          section.headingLevel ===
            3
      );

    const title =
      firstMeaningful
        ?.sectionTitle ||
      topic.topicTitle ||
      pageTitle;

    const searchText =
      buildSearchText(
        pageTitle,
        page.category,
        page.subcategory,
        topic.topicTitle,
        title,
        content
      );

    chunks.push({
      title,

      topicTitle:
        topic.topicTitle,

      content,

      sourceSections:
        currentSections.map(
          (
            section
          ) =>
            section.sectionTitle
        ),

      characterCount:
        content.length,

      searchText,

      contentHash:
        createHash(
          JSON.stringify({
            title,
            topicTitle:
              topic.topicTitle,
            content,
            searchText,
          })
        ),

      machineScope:
        getDefaultMachineScope(
          page.category
        ),
    });

    currentSections =
      [];

    currentCharacters =
      0;
  }

  for (
    const section
    of topic.sections
  ) {
    const formatted =
      formatSectionForChunk(
        section
      );

    if (!formatted) {
      continue;
    }

    const sectionCharacters =
      formatted.length;

    if (
      sectionCharacters >=
      TARGET_CHUNK_CHARACTERS
    ) {
      flush();

      currentSections = [
        section,
      ];

      currentCharacters =
        sectionCharacters;

      flush();

      continue;
    }

    const projected =
      currentCharacters +
      sectionCharacters +
      2;

    if (
      currentSections.length >
        0 &&
      projected >
        MAX_CHUNK_CHARACTERS
    ) {
      flush();
    }

    currentSections.push(
      section
    );

    currentCharacters +=
      sectionCharacters +
      2;

    if (
      currentCharacters >=
      TARGET_CHUNK_CHARACTERS
    ) {
      flush();
    }
  }

  flush();

  /*
  Tiny-chunk merging is only allowed INSIDE
  this same H2 topic.
  */

  if (
    chunks.length >=
    2
  ) {
    const last =
      chunks[
        chunks.length -
          1
      ];

    const previous =
      chunks[
        chunks.length -
          2
      ];

    if (
      last.characterCount <
        MIN_CHUNK_CHARACTERS &&
      previous.characterCount +
        last.characterCount <
        MAX_CHUNK_CHARACTERS
    ) {
      previous.content =
        `${previous.content}\n\n${last.content}`;

      previous.sourceSections.push(
        ...last.sourceSections
      );

      previous.characterCount =
        previous.content.length;

      previous.searchText =
        buildSearchText(
          pageTitle,
          page.category,
          page.subcategory,
          previous.topicTitle,
          previous.title,
          previous.content
        );

      previous.contentHash =
        createHash(
          JSON.stringify({
            title:
              previous.title,

            topicTitle:
              previous.topicTitle,

            content:
              previous.content,

            searchText:
              previous.searchText,
          })
        );

      chunks.pop();
    }
  }

  return chunks;
}

/*
--------------------------------------------------
BUILD ALL CHUNKS
--------------------------------------------------
*/

function buildKnowledgeChunks(
  page:
    DiscoveredPage,
  pageTitle: string,
  sections:
    ExtractedSection[]
) {
  const topicGroups =
    buildTopicGroups(
      pageTitle,
      sections
    );

  const chunks:
    KnowledgeChunk[] =
      [];

  for (
    const topic
    of topicGroups
  ) {
    const topicChunks =
      chunkTopicGroup(
        topic,
        page,
        pageTitle
      );

    for (
      const chunk
      of topicChunks
    ) {
      chunks.push({
        ...chunk,

        chunkIndex:
          chunks.length,
      });
    }
  }

  return chunks;
}

/*
--------------------------------------------------
EXTRACT PAGE
--------------------------------------------------
*/

function extractPage(
  project: Project,
  page:
    DiscoveredPage
): ExtractedPage {
  const warnings:
    string[] =
      [];

  const info:
    string[] =
      [];

  const sourceText =
    fs.readFileSync(
      page.absolutePath,
      "utf8"
    );

  const fallbackTitle =
    slugToTitle(
      page.fileName
    );

  const sourceUrl =
    buildSourceUrl(
      page.relativePath
    );

  /*
  Coming Soon
  */

  if (
    isComingSoonPage(
      sourceText
    )
  ) {
    return {
      page,

      title:
        getComingSoonTitle(
          sourceText,
          fallbackTitle
        ),

      sourceUrl,

      sections:
        [],

      chunks:
        [],

      fullText:
        "",

      totalCharacters:
        0,

      contentHash:
        createHash(
          "coming-soon"
        ),

      skipped:
        true,

      skipReason:
        "Coming Soon page",

      warnings:
        [],

      info: [
        "Coming Soon placeholder detected.",
      ],
    };
  }

  /*
  Parse source
  */

  const sourceFile =
    project.addSourceFileAtPath(
      page.absolutePath
    );

  const jsxElements =
    sourceFile.getDescendantsOfKind(
      SyntaxKind.JsxElement
    );

  let pageTitle =
    "";

  const rawBlocks:
    {
      tag: string;
      text: string;
    }[] =
      [];

  for (
    const element
    of jsxElements
  ) {
    const tag =
      getJsxTagName(
        element
      );

    if (
      !tag ||
      !TEXT_TAGS.has(
        tag
      )
    ) {
      continue;
    }

    const text =
      extractTextFromNode(
        element
      );

    if (!text) {
      continue;
    }

    rawBlocks.push({
      tag,
      text,
    });

    if (
      tag ===
        "h1" &&
      !pageTitle
    ) {
      pageTitle =
        text;
    }
  }

  if (!pageTitle) {
    pageTitle =
      fallbackTitle;

    info.push(
      "No H1 found. Filename used as page title."
    );
  }

  /*
  Raw section building
  */

  const sections:
    ExtractedSection[] =
      [];

  let currentSection:
    ExtractedSection | null =
      null;

  function pushCurrentSection() {
    if (
      !currentSection
    ) {
      return;
    }

    currentSection.content =
      normalizeWhitespace(
        currentSection.content
      );

    if (
      currentSection.content
    ) {
      sections.push(
        currentSection
      );
    }

    currentSection =
      null;
  }

  for (
    const block
    of rawBlocks
  ) {
    if (
      HEADING_TAGS.has(
        block.tag
      )
    ) {
      pushCurrentSection();

      const headingLevel:
        1
        | 2
        | 3 =
        block.tag ===
          "h1"
          ? 1
          : block.tag ===
              "h2"
            ? 2
            : 3;

      currentSection = {
        sectionTitle:
          block.text,

        headingLevel,

        content:
          "",
      };

      continue;
    }

    if (
      !currentSection
    ) {
      currentSection = {
        sectionTitle:
          pageTitle,

        headingLevel:
          null,

        content:
          "",
      };
    }

    currentSection.content +=
      `${block.text}\n`;
  }

  pushCurrentSection();

  /*
  Remove exact duplicate sections
  */

  const cleanedSections:
    ExtractedSection[] =
      [];

  const sectionKeys =
    new Set<string>();

  for (
    const section
    of sections
  ) {
    const key =
      [
        section.headingLevel,
        section.sectionTitle
          .toLowerCase(),
        section.content
          .toLowerCase(),
      ].join(
        "|"
      );

    if (
      sectionKeys.has(
        key
      )
    ) {
      continue;
    }

    sectionKeys.add(
      key
    );

    cleanedSections.push(
      section
    );
  }

  const fullText =
    cleanedSections
      .map(
        (
          section
        ) =>
          `${section.sectionTitle}\n${section.content}`
      )
      .join(
        "\n\n"
      )
      .trim();

  const chunks =
    buildKnowledgeChunks(
      page,
      pageTitle,
      cleanedSections
    );

  /*
  Page hash is based on searchable knowledge,
  NOT CSS or unrelated TSX formatting.

  Changing styling alone will not force a reindex.
  */

  const contentHash =
    createHash(
      JSON.stringify({
        title:
          pageTitle,

        category:
          page.category,

        subcategory:
          page.subcategory,

        sourceUrl,

        chunks:
          chunks.map(
            (
              chunk
            ) => ({
              title:
                chunk.title,

              topicTitle:
                chunk.topicTitle,

              content:
                chunk.content,

              sourceSections:
                chunk.sourceSections,

              searchText:
                chunk.searchText,
            })
          ),
      })
    );

  /*
  Health checks
  */

  if (
    cleanedSections.length ===
    0
  ) {
    warnings.push(
      "No sections were extracted."
    );
  }

  if (
    fullText.length <
      100 &&
    cleanedSections.length >
      0
  ) {
    warnings.push(
      `Very little text extracted (${fullText.length} characters).`
    );
  }

  if (
    fullText.length >
      500 &&
    chunks.length ===
      0
  ) {
    warnings.push(
      "Meaningful text was extracted but no knowledge chunks were created."
    );
  }

  for (
    const chunk
    of chunks
  ) {
    if (
      chunk.characterCount >
      5000
    ) {
      warnings.push(
        `Chunk ${chunk.chunkIndex + 1} is unusually large (${chunk.characterCount} characters).`
      );
    }
  }

  return {
    page,

    title:
      pageTitle,

    sourceUrl,

    sections:
      cleanedSections,

    chunks,

    fullText,

    totalCharacters:
      fullText.length,

    contentHash,

    skipped:
      false,

    skipReason:
      null,

    warnings,

    info,
  };
}

/*
--------------------------------------------------
SUPABASE
--------------------------------------------------
*/

function getSupabaseClient() {
  const supabaseUrl =
    process.env
      .NEXT_PUBLIC_SUPABASE_URL;

  const serviceRoleKey =
    process.env
      .SUPABASE_SERVICE_ROLE_KEY;

  if (
    !supabaseUrl ||
    !serviceRoleKey
  ) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Check .env.local."
    );
  }

  return createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        persistSession:
          false,

        autoRefreshToken:
          false,
      },
    }
  );
}

/*
--------------------------------------------------
LOAD EXISTING PAGE INDEX
--------------------------------------------------
*/

async function loadExistingPages(
  supabase:
    SupabaseClient
) {
  const {
    data,
    error,
  } =
    await supabase
      .from(
        "rhino_knowledge_pages"
      )
      .select(`
        id,
        source_file,
        content_hash
      `);

  if (
    error
  ) {
    throw error;
  }

  const map =
    new Map<
      string,
      ExistingPageRow
    >();

  for (
    const row
    of data ??
    []
  ) {
    map.set(
      row.source_file,
      row as ExistingPageRow
    );
  }

  return map;
}

/*
--------------------------------------------------
UPSERT PAGE
--------------------------------------------------
*/

async function upsertPage(
  supabase:
    SupabaseClient,
  extracted:
    ExtractedPage
) {
  const {
    data,
    error,
  } =
    await supabase
      .from(
        "rhino_knowledge_pages"
      )
      .upsert(
        {
          source_file:
            extracted.page
              .relativePath,

          source_url:
            extracted.sourceUrl,

          title:
            extracted.title,

          category:
            extracted.page
              .category,

          subcategory:
            extracted.page
              .subcategory,

          content_hash:
            extracted.contentHash,

          is_active:
            true,

          last_indexed_at:
            new Date()
              .toISOString(),

          updated_at:
            new Date()
              .toISOString(),
        },
        {
          onConflict:
            "source_file",
        }
      )
      .select(
        "id"
      )
      .single();

  if (
    error
  ) {
    throw error;
  }

  return data.id as string;
}

/*
--------------------------------------------------
UPSERT CHUNKS
--------------------------------------------------
*/

async function writeChunks(
  supabase:
    SupabaseClient,
  pageId: string,
  extracted:
    ExtractedPage
) {
  if (
    extracted.chunks.length >
    0
  ) {
    const rows =
      extracted.chunks.map(
        (
          chunk
        ) => ({
          page_id:
            pageId,

          chunk_index:
            chunk.chunkIndex,

          section_title:
            chunk.title,

          topic_title:
            chunk.topicTitle,

          content:
            chunk.content,

          search_text:
            chunk.searchText,

          content_hash:
            chunk.contentHash,

          source_sections:
            chunk.sourceSections,

          /*
          These will be enhanced later.
          */

          keywords:
            [],

          machine_models:
            [],

          machine_scope:
            chunk.machineScope,

          risk_level:
            "normal",

          is_active:
            true,

          updated_at:
            new Date()
              .toISOString(),
        })
      );

    const {
      error,
    } =
      await supabase
        .from(
          "rhino_knowledge_chunks"
        )
        .upsert(
          rows,
          {
            onConflict:
              "page_id,chunk_index",
          }
        );

    if (
      error
    ) {
      throw error;
    }
  }

  /*
  --------------------------------------------------
  REMOVE STALE CHUNKS

  Example:

  Old version = chunks 0–8
  New version = chunks 0–5

  Delete 6–8.
  --------------------------------------------------
  */

  const {
    error:
      staleError,
  } =
    await supabase
      .from(
        "rhino_knowledge_chunks"
      )
      .delete()
      .eq(
        "page_id",
        pageId
      )
      .gte(
        "chunk_index",
        extracted.chunks.length
      );

  if (
    staleError
  ) {
    throw staleError;
  }
}

/*
--------------------------------------------------
INDEX STATUS
--------------------------------------------------
*/

function getPageStatus(
  extracted:
    ExtractedPage,
  existing:
    ExistingPageRow | undefined
) {
  if (
    extracted.skipped
  ) {
    return "SKIPPED";
  }

  if (!existing) {
    return "NEW";
  }

  if (
    existing.content_hash ===
    extracted.contentHash
  ) {
    return "UNCHANGED";
  }

  return "CHANGED";
}

/*
--------------------------------------------------
FULL INDEX
--------------------------------------------------
*/

async function runIndexer() {
  console.log("");
  console.log(
    "============================================"
  );
  console.log(
    "RHINO WRANGLER KNOWLEDGE INDEXER"
  );
  console.log(
    "VERSION 5"
  );
  console.log(
    "============================================"
  );
  console.log("");

  if (
    WRITE_MODE
  ) {
    console.log(
      "MODE: WRITE"
    );

    console.log(
      "Supabase changes ARE enabled."
    );
  } else {
    console.log(
      "MODE: DRY RUN"
    );

    console.log(
      "No database changes will be made."
    );
  }

  console.log("");
  console.log(
    `Source URL base: ${SOURCE_BASE_URL}`
  );
  console.log("");

  const pages =
    discoverTrainingPages();

  const project =
    new Project({
      skipAddingFilesFromTsConfig:
        true,
    });

  const extractedPages =
    pages.map(
      (
        page
      ) =>
        extractPage(
          project,
          page
        )
    );

  /*
  Refuse write if extraction warnings exist.
  */

  const warningPages =
    extractedPages.filter(
      (
        page
      ) =>
        !page.skipped &&
        page.warnings.length >
          0
    );

  if (
    WRITE_MODE &&
    warningPages.length >
      0
  ) {
    console.error(
      "WRITE ABORTED."
    );

    console.error(
      `${warningPages.length} page(s) have extraction warnings.`
    );

    console.error(
      "Run the health check and resolve them before writing."
    );

    process.exit(
      1
    );
  }

  /*
  Supabase is used even in dry-run so we can
  determine NEW / CHANGED / UNCHANGED.
  */

  const supabase =
    getSupabaseClient();

  const existingPages =
    await loadExistingPages(
      supabase
    );

  let newCount =
    0;

  let changedCount =
    0;

  let unchangedCount =
    0;

  let skippedCount =
    0;

  let chunksToWrite =
    0;

  for (
    const extracted
    of extractedPages
  ) {
    const existing =
      existingPages.get(
        extracted.page
          .relativePath
      );

    const status =
      getPageStatus(
        extracted,
        existing
      );

    if (
      status ===
      "SKIPPED"
    ) {
      skippedCount++;

      console.log(
        `[SKIPPED] ${extracted.page.relativePath}`
      );

      console.log(
        `          ${extracted.skipReason}`
      );

      continue;
    }

    if (
      status ===
      "UNCHANGED"
    ) {
      unchangedCount++;

      console.log(
        `[UNCHANGED] ${extracted.page.relativePath}`
      );

      continue;
    }

    if (
      status ===
      "NEW"
    ) {
      newCount++;
    }

    if (
      status ===
      "CHANGED"
    ) {
      changedCount++;
    }

    chunksToWrite +=
      extracted.chunks.length;

    console.log(
      `[${status}] ${extracted.page.relativePath}`
    );

    console.log(
      `        ${extracted.chunks.length} chunk(s)`
    );

    if (
      DRY_RUN
    ) {
      continue;
    }

    /*
    ACTUAL WRITE
    */

    const pageId =
      await upsertPage(
        supabase,
        extracted
      );

    await writeChunks(
      supabase,
      pageId,
      extracted
    );
  }

  /*
  --------------------------------------------------
  SUMMARY
  --------------------------------------------------
  */

  console.log("");
  console.log(
    "============================================"
  );
  console.log(
    "INDEX SUMMARY"
  );
  console.log(
    "============================================"
  );

  console.log("");

  console.log(
    `Route files discovered: ${extractedPages.length}`
  );

  console.log(
    `Coming Soon skipped: ${skippedCount}`
  );

  console.log(
    `New pages: ${newCount}`
  );

  console.log(
    `Changed pages: ${changedCount}`
  );

  console.log(
    `Unchanged pages: ${unchangedCount}`
  );

  console.log(
    `Chunks affected: ${chunksToWrite}`
  );

  console.log("");

  if (
    DRY_RUN
  ) {
    console.log(
      "DRY RUN COMPLETE."
    );

    console.log(
      "No Supabase records were changed."
    );

    console.log("");
    console.log(
      "If everything above looks correct, run:"
    );

    console.log("");

    console.log(
      "npx tsx scripts/index-training-pages.ts --write"
    );
  } else {
    console.log(
      "DATABASE INDEX COMPLETE."
    );

    console.log(
      "rhino_knowledge_pages and rhino_knowledge_chunks were updated."
    );

    console.log(
      "The existing rhino_knowledge table was NOT modified."
    );
  }

  console.log("");
}

/*
--------------------------------------------------
MAIN
--------------------------------------------------
*/

runIndexer()
  .catch(
    (
      error
    ) => {
      console.error("");
      console.error(
        "INDEXER FAILED"
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