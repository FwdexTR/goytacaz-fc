/**
 * Baixa fotos de licença livre do Wikimedia Commons e gera versões otimizadas
 * em WebP para /public/images/photos.
 */
import sharp from "sharp";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { fileURLToPath } from "node:url";

const DEST = fileURLToPath(new URL("../public/images/photos/", import.meta.url));
mkdirSync(DEST, { recursive: true });

const UA = { "User-Agent": "GoytacazFC-Site/1.0 (institutional site build)" };
const pausa = (ms) => new Promise((r) => setTimeout(r, ms));

/** slug -> { commons, largura de saída } */
const itens = [
  { slug: "aryzao-01", file: "Estádio Ary de Oliveira e Souza Estádio do Goytacaz F C Campos dos Goytacazes1.jpg", w: 2200, q: 68 },
  { slug: "aryzao-02", file: "Estádio Ary de Oliveira e Souza Estádio do Goytacaz F C Campos dos Goytacazes2.jpg", w: 1700, q: 68 },
  { slug: "aryzao-03", file: "Estádio Ary de Oliveira e Souza Estádio do Goytacaz F C Campos dos Goytacazes3.jpg", w: 1700, q: 68 },
  { slug: "aryzao-04", file: "Estádio Ary de Oliveira e Souza Estádio do Goytacaz F C Campos dos Goytacazes4.jpg", w: 1700, q: 68 },
  { slug: "aryzao-05", file: "Estádio Ary de Oliveira e Souza Estádio do Goytacaz F C Campos dos Goytacazes5.jpg", w: 1700, q: 68 },
  { slug: "goyta-cano", file: "Aryzão Goyta-Cano.jpg", w: 1500, q: 72 },
  { slug: "elenco-2014", file: "Time do Goytacaz em 2014.JPG", w: 1700, q: 68 },
  { slug: "elenco-2007", file: "Goytacaz Profissional 2007.jpg", w: 1300, q: 74 },
  { slug: "elenco-2011", file: "Goytacaz em 2011.jpg", w: 1700, q: 68 },
  { slug: "elenco-2018", file: "Elenco do Goytacaz que conquistou o acesso a Série A de 2018.jpg", w: 1500, q: 72 },
  { slug: "goyta-2012", file: "Goyta 2012.jpg", w: 1200, q: 76 },
  { slug: "bebeto", file: "Bebeto cropped.jpg", w: 900, q: 80 },
  { slug: "campos-santo-antonio", file: "Capela de Santo Antônio Campo dos Goytacazes1.jpg", w: 1500, q: 70 },
  { slug: "campos-lapa", file: "Igreja Nossa Senhora da Lapa - Campos dos Goytacazes4.jpg", w: 1500, q: 70 },
  { slug: "campos-1941", file: "Lagoa cima campos rj 1941.jpg", w: 1700, q: 72 },
  { slug: "campos-centro", file: "Paisagem do Centro de Campos dos Goytacazes1.jpg", w: 1700, q: 68 },
  { slug: "campos-mercado", file: "Mercado Municipal de Campos dos Goytacazes8.jpg", w: 1500, q: 70 },
  { slug: "maracana", file: "Fachada Estádio do Maracanã.jpg", w: 1700, q: 72 },
  { slug: "lucho-nizzo-2020", file: "Lucho Nizzo 2020.jpg", w: 1200, q: 76 },
];

async function infos(files) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=3000&titles=" +
    encodeURIComponent(files.map((f) => "File:" + f).join("|"));
  const j = await (await fetch(url, { headers: UA })).json();
  const mapa = {};
  for (const p of Object.values(j.query.pages)) {
    const ii = p.imageinfo?.[0];
    if (!ii) continue;
    const m = ii.extmetadata || {};
    const limpo = (s) => (s ? String(s.value).replace(/<[^>]+>/g, "").trim() : null);
    mapa[p.title.replace(/^File:/, "")] = {
      src: ii.thumburl || ii.url,
      original: ii.url,
      pagina: ii.descriptionurl,
      licenca: limpo(m.LicenseShortName),
      autor: limpo(m.Artist),
      licencaUrl: m.LicenseUrl?.value ?? null,
    };
  }
  return mapa;
}

const meta = await infos(itens.map((i) => i.file));
const creditos = [];

for (const item of itens) {
  const info = meta[item.file];
  if (!info) {
    console.error("sem info:", item.file);
    continue;
  }
  const saidaPrevia = join(DEST, item.slug + ".webp");
  if (existsSync(saidaPrevia)) {
    const md = await sharp(saidaPrevia).metadata();
    creditos.push({ slug: item.slug, src: `/images/photos/${item.slug}.webp`, razao: +(md.width / md.height).toFixed(3), autor: info.autor, licenca: info.licenca, licencaUrl: info.licencaUrl, pagina: info.pagina });
    console.log("mantido", item.slug);
    continue;
  }

  // O Commons limita rajadas: espaçamos os pedidos e tentamos de novo.
  let buf = null;
  externo: for (let tentativa = 0; tentativa < 6 && !buf; tentativa++) {
    if (tentativa) await pausa(6000 * tentativa);
    for (const candidata of [info.src, info.original]) {
      if (!candidata) continue;
      try {
        const r = await fetch(candidata.split("?")[0], { headers: UA });
        if (!r.ok) continue;
        const b = Buffer.from(await r.arrayBuffer());
        await sharp(b).metadata();
        buf = b;
        break externo;
      } catch {
        /* tenta a próxima */
      }
    }
  }
  if (!buf) {
    console.error("falhou:", item.slug);
    continue;
  }

  const { width, height } = await sharp(buf).metadata();

  const saida = join(DEST, `${item.slug}.webp`);
  await sharp(buf)
    .rotate()
    .resize({ width: item.w, withoutEnlargement: true })
    .webp({ quality: item.q ?? 72, effort: 6 })
    .toFile(saida);

  const razao = +(width / height).toFixed(3);
  creditos.push({
    slug: item.slug,
    src: `/images/photos/${item.slug}.webp`,
    razao,
    autor: info.autor,
    licenca: info.licenca,
    licencaUrl: info.licencaUrl,
    pagina: info.pagina,
  });
  await pausa(1200);
  console.log(item.slug, `${width}x${height}`, "->", razao);
}

writeFileSync(
  join(DEST, "_creditos.json"),
  JSON.stringify(creditos, null, 2),
  "utf8",
);
console.log("\nTotal:", creditos.length);
