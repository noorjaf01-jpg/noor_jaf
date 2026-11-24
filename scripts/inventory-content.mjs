import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf8');
const main = fs.readFileSync('js/main.js', 'utf8');
const cfg = fs.readFileSync('js/config.js', 'utf8');

function extractArray(src, name) {
  const start = src.indexOf(`const ${name} =`);
  if (start < 0) return null;
  let i = src.indexOf('[', start);
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '[') depth++;
    if (src[j] === ']') {
      depth--;
      if (depth === 0) return src.slice(i, j + 1);
    }
  }
  return null;
}

const stripTags = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

const text = stripTags(html)
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map((l) => l.replace(/\s+/g, ' ').trim())
  .filter(Boolean);

const inventory = {
  textLines: text,
  resumeHrefs: [...html.matchAll(/href="(assets\/[^"]+)"/g)].map((m) => m[1]),
  downloadAttrs: [...html.matchAll(/download="([^"]+)"/g)].map((m) => m[1]),
  dataLinks: [...html.matchAll(/data-link="([^"]+)"/g)].map((m) => m[1]),
  sectionIds: [...html.matchAll(/id="(home|about|skills|experience|projects|certificates|contact)"/g)].map(
    (m) => m[1]
  ),
  profile: cfg,
  skillsBlock: extractArray(main, 'skills'),
  experienceBlock: extractArray(main, 'experience'),
  projectsBlock: extractArray(main, 'projects'),
  skillHighlights: extractArray(main, 'SKILL_HIGHLIGHTS')
};

const out = process.argv[2] || '_content_before.json';
fs.writeFileSync(out, JSON.stringify(inventory, null, 2));
console.log('Wrote', out, 'lines=', text.length);
