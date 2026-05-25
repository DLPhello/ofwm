/**
 * Process hero images from downloaded_images/new_images → public/images/hero/
 * Run: node scripts/process-hero-images.mjs
 *
 * Spec (share with suppliers): 2560×1280 px (2:1), JPEG sRGB, ~150–450 KB after export.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "downloaded_images", "new_images");
const heroDir = path.join(root, "public", "images", "hero");
const portfolioDataPath = path.join(root, "lib", "portfolio-data.json");

const HERO_WIDTH = 2560;
const HERO_HEIGHT = 1280;
const JPEG_QUALITY = 85;

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Prefer lineup / style shots before detail crops when sorting filenames. */
function sortKey(name) {
  const n = name.toLowerCase();
  if (n.includes("style") || n.includes("signature")) return "0";
  if (n.startsWith("dsc")) return "1";
  return "2" + n;
}

async function main() {
  if (!fs.existsSync(srcDir)) {
    console.error("Missing folder:", srcDir);
    process.exit(1);
  }

  const files = fs
    .readdirSync(srcDir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => sortKey(a).localeCompare(sortKey(b)) || a.localeCompare(b));

  if (!files.length) {
    console.error("No images in", srcDir);
    process.exit(1);
  }

  fs.mkdirSync(heroDir, { recursive: true });

  const heroPaths = [];

  for (let i = 0; i < files.length; i++) {
    const src = path.join(srcDir, files[i]);
    const destName = `hero-${i}.jpg`;
    const dest = path.join(heroDir, destName);

    const meta = await sharp(src).metadata();
    await sharp(src)
      .rotate()
      .resize(HERO_WIDTH, HERO_HEIGHT, {
        fit: "cover",
        position: "centre",
        withoutEnlargement: false,
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(dest);

    const outStat = fs.statSync(dest);
    heroPaths.push(`/images/hero/${destName}`);
    console.log(
      `${files[i]} (${meta.width}×${meta.height}) → ${destName} (${Math.round(outStat.size / 1024)} KB)`
    );
  }

  const portfolio = JSON.parse(fs.readFileSync(portfolioDataPath, "utf8"));
  portfolio.heroImages = heroPaths;
  fs.writeFileSync(portfolioDataPath, JSON.stringify(portfolio, null, 2) + "\n");

  console.log("\nUpdated lib/portfolio-data.json:", heroPaths);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
