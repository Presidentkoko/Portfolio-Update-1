import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".mp4": "video/mp4", ".vtt": "text/vtt; charset=utf-8", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };

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
    let info = await stat(file);
    if (info.isDirectory()) {
      file = path.join(file, "index.html");
      info = await stat(file);
    }
    const extension = path.extname(file).toLowerCase();
    const contentType = types[extension] || "application/octet-stream";
    if (extension === ".mp4" && request.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(request.headers.range);
      const start = match?.[1] ? Number(match[1]) : 0;
      const end = match?.[2] ? Math.min(Number(match[2]), info.size - 1) : info.size - 1;
      if (!match || start > end || start >= info.size) {
        response.writeHead(416, { "Content-Range": `bytes */${info.size}` });
        return response.end();
      }
      response.writeHead(206, {
        "Accept-Ranges": "bytes",
        "Content-Range": `bytes ${start}-${end}/${info.size}`,
        "Content-Length": end - start + 1,
        "Content-Type": contentType
      });
      createReadStream(file, { start, end }).pipe(response);
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, { "Accept-Ranges": extension === ".mp4" ? "bytes" : "none", "Content-Length": info.size, "Content-Type": contentType });
    response.end(content);
  } catch {
    const content = await readFile(path.join(root, "404.html"));
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(content);
  }
}).listen(port, "127.0.0.1", () => console.log(`Portfolio preview: http://127.0.0.1:${port}`));
