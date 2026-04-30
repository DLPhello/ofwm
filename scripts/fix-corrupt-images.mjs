/**
 * Walk public/images and replace HTML/captcha bodies saved as .jpg/.png with valid placeholders.
 * Run: node scripts/fix-corrupt-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { replaceIfCorrupt } from "./image-sniff.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesRoot = path.join(root, "public", "images");

const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full, out);
    else if (exts.has(path.extname(name.name).toLowerCase())) out.push(full);
  }
  return out;
}

let fixed = 0;
for (const file of walk(imagesRoot)) {
  if (replaceIfCorrupt(file)) {
    console.log("fixed", path.relative(root, file));
    fixed++;
  }
}
console.log(fixed ? `Done. Replaced ${fixed} file(s).` : "Done. No corrupt files found.");
