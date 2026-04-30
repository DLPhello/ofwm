/**
 * Reads content/extracted/portfolio.json + news.json, downloads images via curl,
 * writes lib/portfolio-data.json + lib/news-data.json.
 * Live origin often returns captcha HTML to bots — prefer: save assets with a browser
 * extension into downloaded_images/, then run: npm run sync-images
 * Run: node scripts/download-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { replaceIfCorrupt } from "./image-sniff.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const REFERER = "https://www.oatleywines.com.au/";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** WordPress hotlink protection: curl -e Referer works; Node fetch often gets 403. */
function download(url, destPath) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  execFileSync(
    "curl",
    [
      "-sL",
      "--fail",
      "-A",
      UA,
      "-e",
      REFERER,
      "-o",
      destPath,
      url,
    ],
    { stdio: "pipe" }
  );
}

function extFromUrl(url) {
  try {
    const p = new URL(url).pathname;
    const e = path.extname(p).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"].includes(e))
      return e;
  } catch {
    /* ignore */
  }
  return ".jpg";
}

function main() {
  const portfolioPath = path.join(root, "content", "extracted", "portfolio.json");
  const newsPath = path.join(root, "content", "extracted", "news.json");
  if (!fs.existsSync(portfolioPath)) {
    console.error("Run extract-from-archive.mjs first");
    process.exit(1);
  }

  const { brands, heroImageUrls } = JSON.parse(
    fs.readFileSync(portfolioPath, "utf8")
  );
  const heroDir = path.join(root, "public", "images", "hero");
  const brandDir = path.join(root, "public", "images", "brands");
  fs.mkdirSync(heroDir, { recursive: true });
  fs.mkdirSync(brandDir, { recursive: true });

  const localHeroes = [];
  for (let i = 0; i < heroImageUrls.length; i++) {
    const url = heroImageUrls[i];
    const ext = extFromUrl(url);
    const file = `hero-${i}${ext}`;
    const dest = path.join(heroDir, file);
    try {
      download(url, dest);
      if (replaceIfCorrupt(dest)) {
        console.warn("\nhero placeholder (body was not an image)", file);
      }
      localHeroes.push(`/images/hero/${file}`);
      process.stdout.write(".");
    } catch (e) {
      console.warn("\nhero skip", i, String(e.message || e));
      localHeroes.push(url);
    }
  }
  console.log("\nheroes done", localHeroes.length);

  const brandResults = brands.map((b) => {
    const ext = extFromUrl(b.imageUrl);
    const file = `${b.slug}${ext}`;
    const dest = path.join(brandDir, file);
    try {
      download(b.imageUrl, dest);
      if (replaceIfCorrupt(dest)) {
        console.warn("brand placeholder", b.slug);
      }
      return { ...b, image: `/images/brands/${file}` };
    } catch (e) {
      console.warn("brand skip", b.slug, String(e.message || e));
      return { ...b, image: b.imageUrl };
    }
  });

  const portfolioOut = {
    heroImages: localHeroes,
    brands: brandResults.map(({ slug, name, image, externalUrl }) => ({
      slug,
      name,
      image,
      externalUrl,
    })),
  };
  fs.writeFileSync(
    path.join(root, "lib", "portfolio-data.json"),
    JSON.stringify(portfolioOut, null, 2)
  );
  console.log("wrote lib/portfolio-data.json");

  let newsOut = { posts: [] };
  if (fs.existsSync(newsPath)) {
    const { posts } = JSON.parse(fs.readFileSync(newsPath, "utf8"));
    fs.mkdirSync(path.join(root, "public", "images", "news"), {
      recursive: true,
    });
    const mapped = posts.map((p) => {
      let image = p.imageUrl;
      if (p.imageUrl) {
        const ext = extFromUrl(p.imageUrl);
        const file = `news-${p.slug.slice(0, 60)}${ext}`.replace(/[^a-z0-9._-]/gi, "-");
        const dest = path.join(root, "public", "images", "news", file);
        try {
          download(p.imageUrl, dest);
          if (replaceIfCorrupt(dest)) {
            console.warn("news placeholder", p.slug);
          }
          image = `/images/news/${file}`;
        } catch {
          /* keep remote */
        }
      }
      return {
        slug: p.slug,
        title: p.title,
        date: p.date,
        excerpt: p.excerpt,
        image,
        sourceUrl: p.sourceUrl,
      };
    });
    newsOut = { posts: mapped };
  }
  fs.writeFileSync(
    path.join(root, "lib", "news-data.json"),
    JSON.stringify(newsOut, null, 2)
  );
  console.log("wrote lib/news-data.json", newsOut.posts.length);
}

try {
  main();
} catch (e) {
  console.error(e);
  process.exit(1);
}
