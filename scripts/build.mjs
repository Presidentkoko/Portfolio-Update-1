import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const siteUrl = (process.env.SITE_URL || "https://presidentkoko.github.io/web-port").replace(/\/$/, "");
const date = new Date().toISOString().slice(0, 10);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const directory of ["assets", "css", "js"]) {
  await cp(path.join(root, directory), path.join(output, directory), { recursive: true });
}

for (const file of ["index.html", "404.html", "favicon.svg", "site.webmanifest", "robots.txt", "sitemap.xml"]) {
  const source = await readFile(path.join(root, file), "utf8");
  const rendered = source.replaceAll("__SITE_URL__", siteUrl).replaceAll("__BUILD_DATE__", date);
  await writeFile(path.join(output, file), rendered, "utf8");
}

console.log(`Built static portfolio in ${output}`);
console.log(`Canonical site URL: ${siteUrl}`);
