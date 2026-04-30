/**
 * Copy images from downloaded_images/ (Chrome extension saves) → public/images/
 * and refresh lib/portfolio-data.json + lib/news-data.json paths/extensions.
 *
 * Run: node scripts/sync-downloaded-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "downloaded_images");
const portfolioPath = path.join(root, "content", "extracted", "portfolio.json");
const newsPath = path.join(root, "content", "extracted", "news.json");

/** URL basename (decoded) → actual filename on disk when Chrome/extension renamed. */
const MANUAL_ALIASES = {
  "Eden_Road_Logo.jpg": "Eden-Road.jpg",
  "Henkell-Logo_2019.png": "HENKELL-AMJ-MAY-e1726572415168.png",
  "MateusRose_BP-1.jpg": "mateusrose.jpg",
  "Philip-Shaw.jpg": "brand_tiles_phillip-shaw.jpg",
  "brand_tiles_pike.jpg":
    "Pikes-Eastside-Shiraz--Photo-Credit_-Wine-Australia-website-.jpg",
  "Growers3.1-scaled.jpg": "Growers3-1-scaled.jpg",
  "Pikes-Eastside-Shiraz.-Photo-Credit_-Wine-Australia-website-tile.jpg":
    "Pikes-Eastside-Shiraz--Photo-Credit_-Wine-Australia-website-.jpg",
  "La-Chablisienne_Chablis-France_LOGO_7753BlackC_Plan-de-travail-1-copie.jpg":
    "La-Chablisienne_Chablis-France_LOGO_7753BlackC_Plan-de-trava.jpg",
  "Cape-Mentelle-Lifestyle-6_high.width-1920x-prop.jpg":
    "Cape-Mentelle-Lifestyle-6_high-width-1920x-prop.jpg",
  "hentley-farm2.jpg": "Hentley-Farm-006-Wine-Bottles.jpg",
};

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

function basenameFromUrl(url) {
  try {
    const p = new URL(url).pathname;
    return decodeURIComponent(path.basename(p));
  } catch {
    return "";
  }
}

function extFromUrl(url) {
  try {
    const e = path.extname(new URL(url).pathname).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(e)) return e;
  } catch {
    /* ignore */
  }
  return ".jpg";
}

function buildIndex() {
  if (!fs.existsSync(srcDir)) {
    console.error("Missing folder:", srcDir);
    process.exit(1);
  }
  const lowerToActual = new Map();
  for (const name of fs.readdirSync(srcDir)) {
    const full = path.join(srcDir, name);
    if (!fs.statSync(full).isFile() || !IMAGE_EXT.test(name)) continue;
    lowerToActual.set(name.toLowerCase(), name);
  }
  return lowerToActual;
}

function resolveSourceFile(basename, lowerToActual) {
  if (!basename) return null;
  const alias = MANUAL_ALIASES[basename];
  const tryNames = [
    alias,
    basename,
    basename.replace(/@/g, "-"),
    basename.replace(/_/g, "-"),
    basename.replace(/@/g, "-").replace(/_/g, "-"),
  ].filter(Boolean);
  for (const n of tryNames) {
    const hit = lowerToActual.get(n.toLowerCase());
    if (hit) return hit;
  }
  return null;
}

function copySrcToDest(srcName, destPath) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(path.join(srcDir, srcName), destPath);
}

function newsFileBase(slug, ext) {
  return `news-${slug.slice(0, 60)}${ext}`.replace(/[^a-z0-9._-]/gi, "-");
}

function main() {
  const lowerToActual = buildIndex();
  const portfolio = JSON.parse(fs.readFileSync(portfolioPath, "utf8"));
  const { brands, heroImageUrls } = portfolio;
  const heroDir = path.join(root, "public", "images", "hero");
  const brandDir = path.join(root, "public", "images", "brands");

  const heroImages = [];
  const missing = [];

  for (let i = 0; i < heroImageUrls.length; i++) {
    const url = heroImageUrls[i];
    const base = basenameFromUrl(url);
    const src = resolveSourceFile(base, lowerToActual);
    if (!src) {
      missing.push(`hero[${i}] ${base}`);
      heroImages.push(url);
      continue;
    }
    const ext = path.extname(src).toLowerCase() || ".jpg";
    const destName = `hero-${i}${ext}`;
    copySrcToDest(src, path.join(heroDir, destName));
    heroImages.push(`/images/hero/${destName}`);
  }

  const brandOut = brands.map((b) => {
    const base = basenameFromUrl(b.imageUrl);
    const src = resolveSourceFile(base, lowerToActual);
    if (!src) {
      missing.push(`brand ${b.slug} ← ${base}`);
      return {
        slug: b.slug,
        name: b.name,
        image: b.imageUrl,
        externalUrl: b.externalUrl,
      };
    }
    const ext = path.extname(src).toLowerCase() || ".jpg";
    const destName = `${b.slug}${ext}`;
    copySrcToDest(src, path.join(brandDir, destName));
    return {
      slug: b.slug,
      name: b.name,
      image: `/images/brands/${destName}`,
      externalUrl: b.externalUrl,
    };
  });

  fs.writeFileSync(
    path.join(root, "lib", "portfolio-data.json"),
    JSON.stringify({ heroImages, brands: brandOut }, null, 2)
  );
  console.log("wrote lib/portfolio-data.json");

  let newsOut = { posts: [] };
  if (fs.existsSync(newsPath)) {
    const newsDir = path.join(root, "public", "images", "news");
    const { posts } = JSON.parse(fs.readFileSync(newsPath, "utf8"));
    newsOut.posts = posts.map((p) => {
      const basePost = {
        slug: p.slug,
        title: p.title,
        date: p.date,
        excerpt: p.excerpt,
        sourceUrl: p.sourceUrl,
      };
      if (!p.imageUrl) return { ...basePost };
      const base = basenameFromUrl(p.imageUrl);
      const src = resolveSourceFile(base, lowerToActual);
      if (!src) {
        missing.push(`news ${p.slug} ← ${base}`);
        return { ...basePost, image: p.imageUrl };
      }
      const ext = path.extname(src).toLowerCase() || ".jpg";
      const file = newsFileBase(p.slug, ext);
      copySrcToDest(src, path.join(newsDir, file));
      return { ...basePost, image: `/images/news/${file}` };
    });
  }

  fs.writeFileSync(
    path.join(root, "lib", "news-data.json"),
    JSON.stringify(newsOut, null, 2)
  );
  console.log("wrote lib/news-data.json", newsOut.posts.length, "posts");

  /** Remove stale hero-*, brand, news files no longer referenced (e.g. wrong ext after sync). */
  function prune(dir, basenames) {
    if (!fs.existsSync(dir)) return;
    const keep = new Set(basenames);
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (!fs.statSync(full).isFile()) continue;
      if (!keep.has(f)) fs.unlinkSync(full);
    }
  }

  prune(
    heroDir,
    heroImages.filter((h) => h.startsWith("/")).map((h) => path.basename(h))
  );
  prune(
    brandDir,
    brandOut
      .filter((b) => b.image.startsWith("/"))
      .map((b) => path.basename(b.image))
  );
  prune(
    path.join(root, "public", "images", "news"),
    newsOut.posts
      .filter((p) => p.image && p.image.startsWith("/"))
      .map((p) => path.basename(p.image))
  );

  if (missing.length) {
    console.warn(
      "\nNot found in downloaded_images/ (using remote URL in JSON for those; add files or aliases):\n" +
        missing.slice(0, 40).join("\n") +
        (missing.length > 40 ? `\n… +${missing.length - 40} more` : "")
    );
  } else {
    console.log("All referenced images resolved.");
  }
}

main();
