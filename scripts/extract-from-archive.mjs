/**
 * Parse _archive/html (curl snapshots) → content/extracted/*.json
 * Run: node scripts/extract-from-archive.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const archiveHtml = path.join(root, "_archive", "html");

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/&#8217;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function read(name) {
  return fs.readFileSync(path.join(archiveHtml, name), "utf8");
}

function extractBrands(html) {
  const re =
    /<a\s+href="([^"]*)"\s+target="_blank"\s+class="brand-logo[^"]*">\s*<img\s*\s*alt="([^"]*)"\s+src="([^"]*)"/g;
  const brands = [];
  const seen = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    const externalUrl = m[1] || "";
    const name = m[2].replace(/&#8217;/g, "'").replace(/&#038;/g, "&");
    const imageUrl = m[3];
    if (!imageUrl) continue;
    let slug = slugify(name);
    const base = slug;
    let n = 2;
    while (seen.has(slug)) {
      slug = `${base}-${n++}`;
    }
    seen.add(slug);
    brands.push({
      slug,
      name,
      imageUrl,
      externalUrl: externalUrl || undefined,
    });
  }
  return brands;
}

function extractHeroImages(html) {
  const start = html.indexOf('class="rotating-panel cycle-slideshow"');
  if (start === -1) return [];
  const block = html.slice(start, start + 12000);
  const imgs = [];
  const imgRe = /<img\s+src="(https:\/\/www\.oatleywines\.com\.au\/wp-content\/uploads\/[^"]+)"/g;
  let m;
  while ((m = imgRe.exec(block)) !== null) {
    if (!imgs.includes(m[1])) imgs.push(m[1]);
  }
  return imgs;
}

function decodeEntities(s) {
  return s
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractNews(html) {
  const parts = html.split('<article class="blog">');
  const posts = [];
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i].split("</article>")[0];
    const titleM = chunk.match(
      /<h3 class="sub-sub-heading">([\s\S]*?)<\/h3>/
    );
    const dateM = chunk.match(/<h5 class="post-date">([\s\S]*?)<\/h5>/);
    const imgM = chunk.match(
      /<div class="image-left-blog">\s*<img\s+src="([^"]*)"\s+alt="([^"]*)"/
    );
    const linkM = chunk.match(
      /class="button button__grey"\s+href="(https:\/\/www\.oatleywines\.com\.au\/news\/[^"]+)"/
    );
    if (!titleM || !linkM) continue;
    const title = decodeEntities(titleM[1]);
    const sourceUrl = linkM[1];
    const slug =
      sourceUrl.split("/news/")[1]?.replace(/\/$/, "") || slugify(title);
    const date = decodeEntities(dateM ? dateM[1] : "").replace(/\s+$/g, "");
    const imageUrl = imgM && imgM[1] ? imgM[1] : undefined;
    const textBit = chunk.split("</div>");
    let excerpt = "";
    for (const bit of textBit) {
      if (bit.includes("button button__grey")) break;
      const t = decodeEntities(bit);
      if (t.length > 40 && !t.includes("sub-sub-heading")) excerpt = t;
    }
    excerpt = excerpt.slice(0, 480).trim();
    posts.push({
      slug,
      title,
      date: date || undefined,
      excerpt: excerpt || undefined,
      imageUrl,
      sourceUrl,
    });
  }
  return posts;
}

function main() {
  if (!fs.existsSync(archiveHtml)) {
    console.error("Missing _archive/html");
    process.exit(1);
  }
  const index = read("index.html");
  const updates = read("updates.html");

  const brands = extractBrands(index);
  const heroImageUrls = extractHeroImages(index);
  const news = extractNews(updates);

  const outDir = path.join(root, "content", "extracted");
  fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(
    path.join(outDir, "portfolio.json"),
    JSON.stringify({ brands, heroImageUrls }, null, 2)
  );
  fs.writeFileSync(
    path.join(outDir, "news.json"),
    JSON.stringify({ posts: news }, null, 2)
  );

  console.log("brands:", brands.length, "heroes:", heroImageUrls.length, "news:", news.length);
}

main();
