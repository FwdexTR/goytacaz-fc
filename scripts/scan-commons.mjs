/**
 * Varre categorias do Wikimedia Commons e lista os arquivos com licença livre.
 * Só relata — não baixa nada. Use para decidir o que entra no acervo.
 */
const UA = { "User-Agent": "GoytacazFC-Site/1.0 (institutional site build)" };
const pausa = (ms) => new Promise((r) => setTimeout(r, ms));

const categorias = [
  "Category:Goytacaz Futebol Clube",
  "Category:Estádio Ary de Oliveira e Souza",
  "Category:Amarildo",
  "Category:Bebeto",
  "Category:Campos dos Goytacazes",
  "Category:Estádio do Maracanã",
];

async function api(params) {
  const url =
    "https://commons.wikimedia.org/w/api.php?format=json&origin=*&" +
    new URLSearchParams(params).toString();
  for (let i = 0; i < 5; i++) {
    const r = await fetch(url, { headers: UA });
    if (r.ok) return r.json();
    await pausa(4000 * (i + 1));
  }
  return null;
}

async function membros(cat) {
  const j = await api({
    action: "query",
    list: "categorymembers",
    cmtitle: cat,
    cmtype: "file",
    cmlimit: "60",
  });
  return j?.query?.categorymembers?.map((m) => m.title) ?? [];
}

async function licencas(titulos) {
  if (!titulos.length) return [];
  const j = await api({
    action: "query",
    prop: "imageinfo",
    iiprop: "url|extmetadata|size",
    titles: titulos.join("|"),
  });
  return Object.values(j?.query?.pages ?? {}).map((p) => {
    const ii = p.imageinfo?.[0];
    const m = ii?.extmetadata ?? {};
    const limpo = (s) => (s ? String(s.value).replace(/<[^>]+>/g, "").trim() : null);
    return {
      titulo: p.title,
      licenca: limpo(m.LicenseShortName),
      autor: limpo(m.Artist)?.slice(0, 45),
      dim: ii ? `${ii.width}x${ii.height}` : null,
      descricao: limpo(m.ImageDescription)?.slice(0, 70),
    };
  });
}

/** Licenças aceitáveis para publicar com atribuição. */
const LIVRE = /public domain|domínio|cc0|cc by|cc-by|attribution/i;

for (const cat of categorias) {
  const titulos = await membros(cat);
  await pausa(1200);
  const infos = await licencas(titulos.slice(0, 50));
  await pausa(1200);

  const livres = infos.filter((i) => i.licenca && LIVRE.test(i.licenca));
  console.log(`\n=== ${cat} — ${titulos.length} arquivos, ${livres.length} livres ===`);
  for (const i of livres) {
    console.log(
      `  ${i.titulo.replace(/^File:/, "").slice(0, 58)} | ${i.dim} | ${i.licenca} | ${i.autor ?? "?"}`,
    );
  }
}
