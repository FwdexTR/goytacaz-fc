/**
 * gallery.ts — Acervo visual.
 *
 * O acervo é misto, e a diferença importa:
 *
 * - /images/photos/*.webp são FOTOGRAFIAS REAIS do Goytacaz, vindas do Wikimedia
 *   Commons em domínio público ou Creative Commons. Todas trazem `creditos`, e a
 *   licença CC BY-SA exige que essa atribuição continue visível.
 * - /images/acervo/*.webp são fotografias entregues pelo torcedor/clube, com
 *   autoria ainda em levantamento — o crédito pendente aparece na interface.
 *
 * O acervo é inteiramente fotográfico: não há mais composição gráfica em uso.
 */

export const categorias = [
  "Todas",
  "História",
  "Clube",
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
  // --- Acervo enviado (autoria a confirmar antes de uso definitivo) ---
  {
    id: "a1",
    src: "/images/acervo/torcida-arquivo.webp",
    alt: "Torcedores do Goytacaz reunidos diante de um ônibus, com surdo e camisas do clube, em fotografia antiga",
    legenda: "Torcida, foto de arquivo",
    categoria: "Torcida",
    formato: "quadrado",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a2",
    src: "/images/acervo/torcida-fumaca-01.webp",
    alt: "Arquibancada do Aryzão tomada por fumaça azul e serpentinas, com faixa de torcida organizada",
    legenda: "Fumaça azul na arquibancada",
    categoria: "Torcida",
    formato: "retrato",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a3",
    src: "/images/acervo/torcida-arquibancada-01.webp",
    alt: "Arquibancada lotada de torcedores do Goytacaz em dia de jogo",
    legenda: "Arquibancada cheia",
    categoria: "Torcida",
    formato: "retrato",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a4",
    src: "/images/acervo/torcida-fumaca-02.webp",
    alt: "Fumaça azul subindo da arquibancada do Aryzão vista de dentro do campo",
    legenda: "Recepção ao time",
    categoria: "Torcida",
    formato: "retrato",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a5",
    src: "/images/acervo/camisas-encontro.webp",
    alt: "Duas pessoas seguram camisas do Goytacaz em um ambiente fechado",
    legenda: "Camisas do Goytacaz",
    categoria: "Clube",
    formato: "retrato",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a6",
    src: "/images/acervo/comemoracao-gol.webp",
    alt: "Jogadores do Goytacaz se abraçam para comemorar diante da arquibancada lotada",
    legenda: "Comemoração diante da torcida",
    categoria: "Momentos",
    formato: "panorama",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a7",
    src: "/images/acervo/camisa-retro.webp",
    alt: "Camisa retrô azul e branca do Goytacaz com cordão na gola, ao lado de uma bola de couro antiga e de uma etiqueta escrita Goytacaz desde 1912",
    legenda: "Camisa retrô e bola de couro",
    categoria: "Clube",
    formato: "quadrado",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a8",
    src: "/images/acervo/torcida-alambrado.webp",
    alt: "Torcedores no alambrado, de braços erguidos, durante a partida",
    legenda: "No alambrado",
    categoria: "Torcida",
    formato: "paisagem",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a9",
    src: "/images/acervo/torcida-noite-bandeira.webp",
    alt: "Torcedor gira uma bandeira azul e branca na arquibancada, à noite",
    legenda: "Bandeira na noite",
    categoria: "Torcida",
    formato: "quadrado",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a10",
    src: "/images/acervo/elenco-noite-torcida.webp",
    alt: "Jogadores do Goytacaz agradecem à torcida atrás do gol, à noite",
    legenda: "O time e a torcida",
    categoria: "Momentos",
    formato: "paisagem",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a11",
    src: "/images/acervo/elenco-aplaude.webp",
    alt: "Jogadores do Goytacaz aplaudem a torcida no fim da partida",
    legenda: "Aplauso à arquibancada",
    categoria: "Jogadores",
    formato: "paisagem",
    creditos: "Acervo enviado — autoria a confirmar",
  },
  {
    id: "a12",
    src: "/images/acervo/jogador-aplaude.webp",
    alt: "Jogador do Goytacaz, de costas e com a camisa no ombro, aplaude a arquibancada lotada",
    legenda: "O agradecimento",
    categoria: "Momentos",
    formato: "retrato",
    creditos: "Acervo enviado — autoria a confirmar",
  },

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
];
