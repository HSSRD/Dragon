// Génère un rendu web lisible de la documentation : site/index.html
// Usage : node tools/build-docs.mjs   puis ouvrir site/index.html dans un navigateur.
// Aucune dépendance npm : le Markdown est rendu dans le navigateur (marked, via CDN).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
  });
}

const files = ["README.md", "CLAUDE.md", ...walk(join(root, "docs")).map((p) => relative(root, p))]
  .map((p) => p.replaceAll("\\", "/"));

const pages = files.map((path) => {
  const md = readFileSync(join(root, path), "utf8");
  const title = (md.match(/^#\s+(.+)$/m) || [, path])[1].trim();
  return { path, title, md };
});

const data = JSON.stringify(pages).replaceAll("</", "<\\/");

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dragon — Documentation</title>
<script src="https://cdn.jsdelivr.net/npm/marked@12/marked.min.js"></script>
<style>
  :root { --bg:#fff; --fg:#1f2328; --muted:#656d76; --side:#f6f8fa; --border:#d0d7de; --accent:#0969da; --code:#f3f4f6; }
  @media (prefers-color-scheme: dark) {
    :root { --bg:#0d1117; --fg:#e6edf3; --muted:#8d96a0; --side:#161b22; --border:#30363d; --accent:#4493f8; --code:#1f2428; }
  }
  * { box-sizing: border-box; }
  body { margin:0; font:16px/1.6 -apple-system, "Segoe UI", Roboto, sans-serif; background:var(--bg); color:var(--fg); display:flex; }
  nav { width:300px; flex-shrink:0; height:100vh; position:sticky; top:0; overflow-y:auto; background:var(--side); border-right:1px solid var(--border); padding:16px 12px; }
  nav h1 { font-size:18px; margin:0 8px 12px; }
  nav input { width:100%; padding:6px 8px; margin-bottom:12px; border:1px solid var(--border); border-radius:6px; background:var(--bg); color:var(--fg); }
  nav .group { font-size:12px; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); margin:14px 8px 4px; }
  nav a { display:block; padding:4px 8px; border-radius:6px; color:var(--fg); text-decoration:none; font-size:14px; }
  nav a:hover { background:var(--border); }
  nav a.active { background:var(--accent); color:#fff; }
  main { flex:1; min-width:0; padding:32px 48px 80px; }
  article { max-width:900px; margin:0 auto; }
  .path { color:var(--muted); font-size:13px; font-family:monospace; margin-bottom:8px; }
  h1,h2,h3 { line-height:1.25; } h1,h2 { border-bottom:1px solid var(--border); padding-bottom:.3em; }
  a { color:var(--accent); }
  code { background:var(--code); padding:.15em .35em; border-radius:4px; font-size:.9em; }
  pre { background:var(--code); padding:12px 16px; border-radius:6px; overflow-x:auto; } pre code { padding:0; background:none; }
  table { border-collapse:collapse; display:block; overflow-x:auto; margin:16px 0; }
  th,td { border:1px solid var(--border); padding:6px 12px; vertical-align:top; }
  tr:nth-child(even) td { background:var(--side); }
  blockquote { margin:0; padding:0 1em; color:var(--muted); border-left:4px solid var(--border); }
  img { max-width:100%; }
  @media (max-width: 800px) { body { display:block; } nav { width:auto; height:auto; position:static; } main { padding:16px; } }
</style>
</head>
<body>
<nav>
  <h1>🐉 Dragon</h1>
  <input id="q" type="search" placeholder="Rechercher…">
  <div id="toc"></div>
</nav>
<main><article id="content"></article></main>
<script id="pages" type="application/json">${data}</script>
<script>
const pages = JSON.parse(document.getElementById("pages").textContent);
const byPath = Object.fromEntries(pages.map(p => [p.path, p]));

function groupOf(path) {
  if (!path.includes("/")) return "Projet";
  if (path.startsWith("docs/decisions/")) return "Décisions (ADR)";
  if (path.startsWith("docs/journal/")) return "Journal de bord";
  if (path.includes("/achats/")) return "Phase 1 — Achats";
  if (path.startsWith("docs/phase-1")) return "Phase 1 — Construction";
  return "Autres";
}

function resolve(from, href) {
  const parts = from.split("/").slice(0, -1);
  for (const seg of href.split("/")) {
    if (seg === "..") parts.pop(); else if (seg && seg !== ".") parts.push(seg);
  }
  return parts.join("/");
}

function renderToc(filter = "") {
  const f = filter.toLowerCase();
  const list = pages.filter(p => !f || p.title.toLowerCase().includes(f) || p.md.toLowerCase().includes(f));
  let html = "", last = null;
  for (const p of list) {
    const g = groupOf(p.path);
    if (g !== last) { html += '<div class="group">' + g + "</div>"; last = g; }
    html += '<a href="#' + p.path + '" data-path="' + p.path + '">' + p.title.replace(/</g, "&lt;") + "</a>";
  }
  document.getElementById("toc").innerHTML = html || '<div class="group">Aucun résultat</div>';
  highlight();
}

function highlight() {
  const cur = decodeURIComponent(location.hash.slice(1)).split("::")[0];
  document.querySelectorAll("#toc a").forEach(a => a.classList.toggle("active", a.dataset.path === cur));
}

function show() {
  const [path, anchor] = decodeURIComponent(location.hash.slice(1) || "README.md").split("::");
  const page = byPath[path] || byPath["README.md"];
  const el = document.getElementById("content");
  el.innerHTML = '<div class="path">' + page.path + "</div>" + marked.parse(page.md);
  el.querySelectorAll("h1,h2,h3,h4").forEach(h => {
    h.id = h.textContent.trim().toLowerCase().replace(/[^\\p{L}\\p{N}\\s-]/gu, "").replace(/\\s+/g, "-");
  });
  el.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (/^[a-z]+:/i.test(href)) { a.target = "_blank"; return; }
    if (href.startsWith("#")) { a.href = "#" + page.path + "::" + href.slice(1); return; }
    const [file, frag] = href.split("#");
    const target = resolve(page.path, file);
    if (byPath[target]) a.href = "#" + target + (frag ? "::" + frag : "");
  });
  document.title = page.title + " — Dragon";
  highlight();
  const t = anchor && document.getElementById(anchor);
  t ? t.scrollIntoView() : window.scrollTo(0, 0);
}

document.getElementById("q").addEventListener("input", e => renderToc(e.target.value));
window.addEventListener("hashchange", show);
renderToc();
show();
</script>
</body>
</html>
`;

mkdirSync(join(root, "site"), { recursive: true });
writeFileSync(join(root, "site", "index.html"), html);
console.log(`site/index.html généré (${pages.length} pages)`);
