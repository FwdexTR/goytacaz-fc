/**
 * gallery.ts — Acervo visual.
 *
 * O acervo é misto, e a diferença importa:
 *
 * - /images/photos/*.webp são FOTOGRAFIAS REAIS do Goytacaz, vindas do Wikimedia
 *   Commons em domínio público ou Creative Commons. Todas trazem `creditos`, e a
 *   licença CC BY-SA exige que essa atribuição continue visível.
 * - Os arquivos .svg são COMPOSIÇÕES GRÁFICAS geradas para este projeto. Ocupam
 *   o lugar do acervo histórico nas décadas sem registro fotográfico livre.
 *
 * Ao receber o acervo oficial do clube, substitua os .svg mantendo a proporção.
 * Formato recomendado: .webp (ou .avif).
 */

export const categorias = [
  "Todas",
  "História",
  "Torcida",
  "Estádio",
  "Jogadores",
  "Jogos",
  "Momentos",
] as const;

export type Categoria = (typeof categorias)[number];

export type Foto = {
  id: string;
  src: string;
  alt: string;
  legenda: string;
  ano?: string;
  categoria: Exclude<Categoria, "Todas">;
  /** Proporção usada no masonry — define a altura relativa do card. */
  formato: "retrato" | "paisagem" | "quadrado" | "panorama";
  creditos?: string;
};

export const fotos: Foto[] = [
  // --- Fotografias reais (Wikimedia Commons, licença livre) ---
  {
    id: "p1",
    src: "/images/photos/goyta-cano.webp",
    alt: "Vista aérea noturna do Aryzão lotado, com os refletores acesos durante um Goyta-Cano",
    legenda: "Aryzão cheio num Goyta-Cano",
    categoria: "Torcida",
    formato: "paisagem",
    creditos: "Leonardo Berenger · CC BY-SA 4.0",
  },
  {
    id: "p2",
    src: "/images/photos/aryzao-04.webp",
    alt: "Fachada azul e branca da sede do Goytacaz com as letras GOYTACAZ F.C. em relevo",
    legenda: "A fachada na Rua dos Goytacazes",
    categoria: "Estádio",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p3",
    src: "/images/photos/aryzao-03.webp",
    alt: "Fachada do clube em perspectiva, com portões azuis e as letras no topo",
    legenda: "Os portões azuis",
    categoria: "Estádio",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p4",
    src: "/images/photos/aryzao-01.webp",
    alt: "Estrutura de concreto da arquibancada do Aryzão vista da calçada",
    legenda: "A arquibancada vista da rua",
    categoria: "Estádio",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p5",
    src: "/images/photos/aryzao-05.webp",
    alt: "A arquibancada do Aryzão vista por entre as copas das árvores",
    legenda: "Entre as árvores",
    categoria: "Estádio",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p6",
    src: "/images/photos/aryzao-02.webp",
    alt: "O prédio azul e branco do clube ao longo da rua, entre árvores",
    legenda: "Azul e branco na rua",
    categoria: "Estádio",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p7",
    src: "/images/photos/elenco-2014.webp",
    alt: "Time do Goytacaz perfilado no gramado com o uniforme azul, em 2014",
    legenda: "O time em 2014",
    ano: "2014",
    categoria: "Jogadores",
    formato: "paisagem",
    creditos: "Junius · Domínio público",
  },
  {
    id: "p8",
    src: "/images/photos/elenco-2011.webp",
    alt: "Elenco do Goytacaz perfilado em campo, em 2011",
    legenda: "O elenco de 2011",
    ano: "2011",
    categoria: "Jogadores",
    formato: "paisagem",
    creditos: "Junius · Domínio público",
  },
  {
    id: "p9",
    src: "/images/photos/elenco-2018.webp",
    alt: "Elenco do Goytacaz que conquistou o acesso à Série A do Carioca de 2018",
    legenda: "O acesso à Série A",
    ano: "2018",
    categoria: "Momentos",
    formato: "panorama",
    creditos: "Rogério Nunes · CC BY-SA 4.0",
  },
  {
    id: "p10",
    src: "/images/photos/elenco-2007.webp",
    alt: "Elenco profissional do Goytacaz perfilado em campo, em 2007",
    legenda: "Profissional, 2007",
    ano: "2007",
    categoria: "Jogadores",
    formato: "paisagem",
    creditos: "Junius · Domínio público",
  },
  {
    id: "p11",
    src: "/images/photos/goyta-2012.webp",
    alt: "Time do Goytacaz em campo, em 2012",
    legenda: "Em campo, 2012",
    ano: "2012",
    categoria: "Jogos",
    formato: "paisagem",
    creditos: "Rodolfo18 · CC BY-SA 3.0",
  },
  {
    id: "p12",
    src: "/images/photos/campos-1941.webp",
    alt: "Fotografia em preto e branco de 1941 às margens da Lagoa de Cima, em Campos dos Goytacazes",
    legenda: "Campos dos Goytacazes em 1941",
    ano: "1941",
    categoria: "História",
    formato: "paisagem",
    creditos: "Halleypo · CC BY-SA 3.0",
  },
  {
    id: "p13",
    src: "/images/photos/campos-santo-antonio.webp",
    alt: "Fachada da Capela de Santo Antônio, em Guarus, Campos dos Goytacazes",
    legenda: "A capela de Santo Antônio, em Guarus",
    categoria: "História",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p14",
    src: "/images/photos/campos-lapa.webp",
    alt: "Igreja de Nossa Senhora da Lapa, em Campos dos Goytacazes",
    legenda: "A Lapa, bairro do campo da Rua do Gás",
    categoria: "História",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p15",
    src: "/images/photos/maracana.webp",
    alt: "Fachada do Estádio do Maracanã, no Rio de Janeiro",
    legenda: "O Maracanã",
    categoria: "Jogos",
    formato: "paisagem",
    creditos: "Mark Scott Johnson · CC BY 2.0",
  },
  {
    id: "p16",
    src: "/images/photos/campos-centro.webp",
    alt: "Paisagem do centro de Campos dos Goytacazes",
    legenda: "O centro de Campos",
    categoria: "História",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p17",
    src: "/images/photos/campos-mercado.webp",
    alt: "Mercado Municipal de Campos dos Goytacazes",
    legenda: "O Mercado Municipal",
    categoria: "História",
    formato: "paisagem",
    creditos: "Rafael Deminicis · CC BY-SA 4.0",
  },
  {
    id: "p18",
    src: "/images/photos/bebeto.webp",
    alt: "Retrato de Bebeto, atacante campeão do mundo em 1994",
    legenda: "Bebeto",
    categoria: "Jogadores",
    formato: "retrato",
    creditos: "Marcello Casal Jr. / Agência Brasil · CC BY 3.0 BR",
  },
  {
    id: "p19",
    src: "/images/photos/lucho-nizzo-2020.webp",
    alt: "O jogador Lucho Nizzo com a camisa do Goytacaz, em 2020",
    legenda: "Lucho Nizzo",
    ano: "2020",
    categoria: "Jogadores",
    formato: "retrato",
    creditos: "Wellington Orlando Pereira Ramos · CC BY-SA 4.0",
  },
  {
    id: "g1",
    src: "/images/history/1912-fundacao.svg",
    alt: "Composição gráfica evocando a fundação do clube em 1912",
    legenda: "A fundação",
    ano: "1912",
    categoria: "História",
    formato: "retrato",
  },
  {
    id: "g2",
    src: "/images/stadium/aryzao-1938.svg",
    alt: "Composição gráfica da inauguração do Aryzão",
    legenda: "Inauguração do Aryzão",
    ano: "1938",
    categoria: "Estádio",
    formato: "panorama",
  },
  {
    id: "g3",
    src: "/images/fans/1978-recorde.svg",
    alt: "Composição gráfica do recorde de público",
    legenda: "14.996 no Aryzão",
    ano: "1978",
    categoria: "Torcida",
    formato: "paisagem",
  },
  {
    id: "g4",
    src: "/images/history/1955-invicto.svg",
    alt: "Composição gráfica da campanha invicta",
    legenda: "O ano invicto",
    ano: "1955",
    categoria: "Momentos",
    formato: "quadrado",
  },
  {
    id: "g5",
    src: "/images/team/elenco-classico.svg",
    alt: "Composição gráfica de elenco histórico do Goytacaz",
    legenda: "Elenco histórico",
    categoria: "Jogadores",
    formato: "paisagem",
  },
  {
    id: "g6",
    src: "/images/history/1963-maracana.svg",
    alt: "Composição gráfica da estreia no Maracanã",
    legenda: "Estreia no Maracanã",
    ano: "1963",
    categoria: "Jogos",
    formato: "retrato",
  },
  {
    id: "g7",
    src: "/images/stadium/aryzao-arquibancada.svg",
    alt: "Composição gráfica das arquibancadas do Aryzão",
    legenda: "Arquibancada",
    categoria: "Estádio",
    formato: "quadrado",
  },
  {
    id: "g8",
    src: "/images/fans/torcida-azul.svg",
    alt: "Composição gráfica da torcida alvi-anil",
    legenda: "O azul do povo",
    categoria: "Torcida",
    formato: "paisagem",
  },
  {
    id: "g9",
    src: "/images/history/1930-iluminacao.svg",
    alt: "Composição gráfica da chegada da iluminação elétrica",
    legenda: "A luz da Rua do Gás",
    ano: "1930",
    categoria: "História",
    formato: "retrato",
  },
  {
    id: "g10",
    src: "/images/stadium/aryzao-noite.svg",
    alt: "Composição gráfica do estádio à noite",
    legenda: "Aryzão à noite",
    categoria: "Estádio",
    formato: "panorama",
  },
  {
    id: "g11",
    src: "/images/team/camisa.svg",
    alt: "Composição gráfica da camisa azul e branca",
    legenda: "Azul e branco",
    categoria: "Jogadores",
    formato: "quadrado",
  },
  {
    id: "g12",
    src: "/images/history/1977-brasileirao.svg",
    alt: "Composição gráfica da campanha no Campeonato Brasileiro",
    legenda: "Campos contra o Brasil",
    ano: "1977",
    categoria: "Jogos",
    formato: "paisagem",
  },
  {
    id: "g13",
    src: "/images/history/1940-tetra.svg",
    alt: "Composição gráfica do tetracampeonato campista",
    legenda: "Tetracampeão",
    ano: "1940",
    categoria: "Momentos",
    formato: "retrato",
  },
  {
    id: "g14",
    src: "/images/history/2017-acesso.svg",
    alt: "Composição gráfica do acesso de 2017",
    legenda: "De volta à elite",
    ano: "2017",
    categoria: "Momentos",
    formato: "quadrado",
  },
];
