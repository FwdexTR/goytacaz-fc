/**
 * Importa o acervo enviado pelo clube/torcedor (arquivo .docx) para
 * /public/images/acervo, em WebP.
 *
 * Algumas imagens foram capturadas de tela e trazem a interface do Instagram
 * (setas de carrossel e pontinhos). O recorte abaixo remove essa moldura —
 * é limpeza visual, não resolve licença: os créditos continuam pendentes.
 */
import sharp from "sharp";
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const ORIGEM =
  "C:/Users/Sistemas/AppData/Local/Temp/claude/C--Users-Sistemas-Desktop-Obsidian/ec7b84d5-8a2c-490d-8be2-96bacab03812/scratchpad/docx/word/media";
const DEST = fileURLToPath(new URL("../public/images/acervo/", import.meta.url));
mkdirSync(DEST, { recursive: true });

/** recorte em fração da largura/altura: [esq, dir, baixo, topo] */
const SEM_CORTE = [0, 0, 0, 0];
const UI_INSTAGRAM = [0.08, 0.08, 0.06, 0];

const itens = [
  { origem: "image1.png", slug: "torcida-arquivo", corte: SEM_CORTE },
  { origem: "image2.png", slug: "torcida-fumaca-01", corte: SEM_CORTE },
  { origem: "image3.png", slug: "torcida-arquibancada-01", corte: SEM_CORTE },
  { origem: "image4.png", slug: "torcida-fumaca-02", corte: SEM_CORTE },
  { origem: "image5.png", slug: "camisas-encontro", corte: SEM_CORTE },
  { origem: "image6.png", slug: "comemoracao-gol", corte: SEM_CORTE },
  { origem: "image7.png", slug: "camisa-retro", corte: SEM_CORTE },
  { origem: "image8.png", slug: "torcida-alambrado", corte: UI_INSTAGRAM },
  { origem: "image9.png", slug: "torcida-noite-bandeira", corte: UI_INSTAGRAM },
  { origem: "image10.png", slug: "elenco-noite-torcida", corte: UI_INSTAGRAM },
  { origem: "image11.png", slug: "elenco-aplaude", corte: UI_INSTAGRAM },
  { origem: "image12.png", slug: "jogador-aplaude", corte: [0.07, 0.07, 0.02, 0] },
];

const saida = [];

for (const item of itens) {
  const caminho = join(ORIGEM, item.origem);
  const buf = readFileSync(caminho);
  const md = await sharp(buf).metadata();

  const [e, d, b, t] = item.corte;
  const left = Math.round(md.width * e);
  const top = Math.round(md.height * t);
  const width = Math.round(md.width * (1 - e - d));
  const height = Math.round(md.height * (1 - t - b));

  const destino = join(DEST, `${item.slug}.webp`);
  await sharp(buf)
    .extract({ left, top, width, height })
    .webp({ quality: 82, effort: 6 })
    .toFile(destino);

  const final = await sharp(destino).metadata();
  saida.push({
    slug: item.slug,
    src: `/images/acervo/${item.slug}.webp`,
    largura: final.width,
    altura: final.height,
    razao: +(final.width / final.height).toFixed(3),
    kb: Math.round(statSync(destino).size / 1024),
    origem: item.origem,
  });
  console.log(
    item.slug.padEnd(26),
    `${md.width}x${md.height} -> ${final.width}x${final.height}`,
    `${Math.round(statSync(destino).size / 1024)}KB`,
  );
}

console.log("\nTotal:", saida.length);
console.log(JSON.stringify(saida, null, 1));
