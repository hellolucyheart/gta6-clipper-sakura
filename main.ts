// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// It hands the gate the video address: it reads VIDEO.json from the repository
// root and writes it, unchanged, to /output/VIDEO.json, where the gate reads it.
// The video itself is the entry — the clip of GTA 6 Trailer 2 with the make.fun
// pitch — and nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outRoot = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const rawText = readFileSync(join(repoRoot, "VIDEO.json"), "utf8");
const parsed: unknown = JSON.parse(rawText);

if (typeof parsed !== "object" || parsed === null) {
  console.error("VIDEO.json must hold a JSON object");
  process.exit(1);
}

const videoUrl = (parsed as { url?: unknown }).url;
if (typeof videoUrl !== "string") {
  console.error("VIDEO.json must hold an object with a string url");
  process.exit(1);
}

const looksLikeYouTube =
  /^https:\/\/(www\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(videoUrl);
if (!looksLikeYouTube) {
  console.error(`VIDEO.json url is not a YouTube address: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(outRoot, { recursive: true });
writeFileSync(join(outRoot, "VIDEO.json"), rawText);
