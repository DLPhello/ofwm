/**
 * Detect real image bytes vs HTML/captcha bodies; tiny placeholders for failed downloads.
 */
import fs from "node:fs";
import path from "node:path";

/** 1×1 JPEG — decodes everywhere; scales with object-cover. */
const JPEG_PLACEHOLDER = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERFRTZCQUVChA9Kjc8P1/2wBDAQAREDExIaChMZFhcYGysjIyMrIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=",
  "base64"
);

/** 1×1 PNG transparent pixel. */
const PNG_PLACEHOLDER = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);

export function isLikelyImageBuffer(buf) {
  if (!buf || buf.length < 12) return false;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return true;
  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  )
    return true;
  const head6 = buf.slice(0, 6).toString("ascii");
  if (head6 === "GIF87a" || head6 === "GIF89a") return true;
  if (
    buf.slice(0, 4).toString("ascii") === "RIFF" &&
    buf.slice(8, 12).toString("ascii") === "WEBP"
  )
    return true;
  const text = buf.slice(0, 200).toString("utf8").trimStart().toLowerCase();
  if (text.startsWith("<svg") || text.startsWith("<?xml")) return true;
  if (text.startsWith("<!") || text.startsWith("<html")) return false;
  if (text.startsWith("<")) return false;
  return false;
}

function placeholderForPath(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return PNG_PLACEHOLDER;
  return JPEG_PLACEHOLDER;
}

/** Overwrite path with a valid image if current bytes are not a real image. */
export function replaceIfCorrupt(filePath) {
  const buf = fs.readFileSync(filePath);
  if (isLikelyImageBuffer(buf)) return false;
  fs.writeFileSync(filePath, placeholderForPath(filePath));
  return true;
}
