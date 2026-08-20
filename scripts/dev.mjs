import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".mp4": "video/mp4", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };

http.createServer(async (request, response) => {
  try {
    if (request.url === "/api/contact") {
      response.writeHead(503, { "Content-Type": "application/json" });
      return response.end(JSON.stringify({ message: "The local preview does not send email. Configure the Vercel environment to test delivery." }));
    }
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
    let file = path.resolve(root, relative);
    if (!file.startsWith(root)) throw new Error("Invalid path");
    const info = await stat(file);
    if (info.isDirectory()) file = path.join(file, "index.html");
    const content = await readFile(file);
    response.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream" });
    response.end(content);
  } catch {
    const content = await readFile(path.join(root, "404.html"));
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(content);
  }
}).listen(port, "127.0.0.1", () => console.log(`Portfolio preview: http://127.0.0.1:${port}`));
