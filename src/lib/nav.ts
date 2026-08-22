export type Rota = { href: string; nome: string; indice: string };

export const rotas: Rota[] = [
  { href: "/", nome: "Início", indice: "01" },
  { href: "/clube", nome: "O Clube", indice: "02" },
  { href: "/historia", nome: "História", indice: "03" },
  { href: "/conquistas", nome: "Conquistas", indice: "04" },
  { href: "/aryzao", nome: "Aryzão", indice: "05" },
  { href: "/galeria", nome: "Galeria", indice: "06" },
  { href: "/noticias", nome: "Notícias", indice: "07" },
  { href: "/contato", nome: "Contato", indice: "08" },
];

/**
 * Endereço público do site.
 *
 * É daqui que saem as URLs canônicas, o sitemap e — o que mais importa na
 * prática — o endereço absoluto da imagem de preview. Um domínio fixo que ainda
 * não existe faria o WhatsApp e o Twitter buscarem a prévia num lugar vazio, e
 * o link seria compartilhado sem imagem nenhuma.
 *
 * Ordem: variável explícita → domínio de produção da Vercel → deploy atual →
 * desenvolvimento. Para apontar a um domínio próprio, basta definir
 * NEXT_PUBLIC_SITE_URL; nada mais no código precisa mudar.
 */
function resolverSiteUrl(): string {
  const explicito = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicito) return explicito.replace(/\/$/, "");

  const producao = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (producao) return `https://${producao}`;

  const deploy = process.env.VERCEL_URL;
  if (deploy) return `https://${deploy}`;

  return "http://localhost:3210";
}

export const SITE_URL = resolverSiteUrl();
