import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(path.join(root, "index.html"), "utf8");
const data = await readFile(path.join(root, "js", "data.js"), "utf8");
const app = await readFile(path.join(root, "js", "app.js"), "utf8");
const css = await readFile(path.join(root, "css", "styles.css"), "utf8");
const failures = [];
const combined = html + data + app + css;

for (const [name, content] of [["index.html", html], ["data.js", data], ["app.js", app], ["styles.css", css]]) {
  if (/[Ââð]/.test(content)) failures.push(`${name} contains likely mojibake characters.`);
}
if (/href=["']#["']/.test(html)) failures.push("index.html contains a placeholder # link.");
if (/Keshav Uppal/i.test(html + data + app)) failures.push("Prohibited name appears in public source.");
if (/(4\+ years|100% client|fake analytics)/i.test(html + data)) failures.push("Unsupported marketing claim found.");
if (/github\.com\/darkhorsepig/i.test(combined)) failures.push("An old GitHub username remains in the public portfolio.");
for (const section of ["products", "meet", "projects", "automation", "wordpress", "operations", "experience", "contact"]) {
  if (!html.includes(`id="${section}"`)) failures.push(`Missing required section: ${section}`);
}
for (const filter of ["Featured", "Production Apps", "WordPress", "n8n Automation", "Web Development", "Full-Stack Systems", "UI/UX"]) {
  if (!app.includes(`"${filter}"`)) failures.push(`Missing required project filter: ${filter}`);
}

const assetReferences = new Set();
for (const content of [html, data, css]) {
  for (const match of content.matchAll(/(?:src=|href=|url\()["']?((?:assets|css|js)\/[^"')\s>]+)/g)) {
    assetReferences.add(match[1]);
  }
  for (const match of content.matchAll(/["']((?:assets|css|js)\/[^"']+)["']/g)) {
    assetReferences.add(match[1]);
  }
}
for (const reference of assetReferences) {
  try { await access(path.join(root, ...reference.split("/"))); }
  catch { failures.push(`Missing referenced file: ${reference}`); }
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const creativeFiles = await walk(path.join(root, "assets", "images", "creative"));
for (const file of creativeFiles) {
  const info = await stat(file);
  if (info.size > 600_000) failures.push(`Creative asset exceeds 600 KB: ${path.basename(file)}`);
}

const introAssets = [
  ["assets/videos/intro-video.mp4", 25_000_000],
  ["assets/images/intro-video-poster.webp", 500_000],
  ["assets/videos/intro-video-captions.vtt", 100_000]
];
for (const [relative, maximum] of introAssets) {
  try {
    const info = await stat(path.join(root, ...relative.split("/")));
    if (info.size > maximum) failures.push(`Intro asset exceeds ${Math.round(maximum / 1_000_000)} MB target: ${relative}`);
  } catch {
    failures.push(`Missing intro asset: ${relative}`);
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}
console.log(`Checks passed: ${assetReferences.size} local references verified, ${creativeFiles.length} creative assets inspected.`);
