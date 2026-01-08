import fs from "node:fs";
import path from "node:path";

const ROOTS = ["src", "public"];
const SKIP_DIRS = new Set(["node_modules", ".next", "dist", "build", ".git"]);
const EXTS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".css",
  ".scss",
  ".mjs",
  ".cjs",
  ".json",
  ".svg",
]);

const REPLACEMENTS = [
  ["#655EFF", "#6467FF"],
  ["#5227FF", "#6467FF"],
  ["#22D3EE", "#43B2F9"],
  ["#38BDF8", "#43B2F9"],
  ["#A5B4FC", "#94A3B8"],
  ["#05010D", "#050714"],
  ["#0B0718", "#0B1526"],
  ["#7C3AED", "#6467FF"],
  ["#7c3aed", "#6467FF"],
  ["#A855F7", "#6467FF"],
  ["#a855f7", "#6467FF"],

  // rgba/rgb variants
  ["rgba(101, 94, 255", "rgba(100, 103, 255"],
  ["rgba(101,94,255", "rgba(100,103,255"],
  ["rgba(82, 39, 255", "rgba(100, 103, 255"],
  ["rgba(82,39,255", "rgba(100,103,255"],
  ["rgba(34, 211, 238", "rgba(67, 178, 249"],
  ["rgba(34,211,238", "rgba(67,178,249"],
  ["rgba(56, 189, 248", "rgba(67, 178, 249"],
  ["rgba(56,189,248", "rgba(67,178,249"],
  ["rgba(168, 85, 247", "rgba(100, 103, 255"],
  ["rgba(168,85,247", "rgba(100,103,255"],
  ["rgba(124, 58, 237", "rgba(100, 103, 255"],
  ["rgba(124,58,237", "rgba(100,103,255"],

  // dark background rgba variants
  ["rgba(5,1,13", "rgba(5,7,20"],
  ["rgba(11,7,24", "rgba(11,21,38"],
];

function walk(dir, out) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (SKIP_DIRS.has(ent.name)) continue;

    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full, out);
      continue;
    }

    const ext = path.extname(ent.name);
    if (!EXTS.has(ext)) continue;
    out.push(full);
  }
}

function replaceAll(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

const files = [];
for (const root of ROOTS) {
  if (fs.existsSync(root)) walk(root, files);
}

let modified = 0;
for (const f of files) {
  const before = fs.readFileSync(f, "utf8");
  const after = replaceAll(before);
  if (after !== before) {
    fs.writeFileSync(f, after, "utf8");
    modified++;
  }
}

console.log(`Scanned: ${files.length}`);
console.log(`Modified: ${modified}`);
