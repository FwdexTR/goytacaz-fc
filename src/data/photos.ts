/**
 * photos.ts — Fotografias reais do Goytacaz, de licença livre.
 *
 * Todas vêm do Wikimedia Commons, em domínio público ou Creative Commons.
 * A licença CC BY-SA exige atribuição: o crédito de cada foto aparece na
 * legenda da galeria e na página de créditos. Não remova a atribuição.
 *
 * REGRA: a legenda nunca pode sugerir uma data que a foto não tem. Fotos
 * recentes do estádio não ilustram capítulos históricos — para as décadas sem
 * registro fotográfico livre, o site usa composições gráficas.
 */

export type Foto = {
  src: string;
  alt: string;
  /** Proporção original largura/altura — evita salto de layout. */
  razao: number;
  autor: string;
  licenca: string;
  fonte: string;
  /** Anotação exibida quando a foto pede contexto de data. */
  aviso?: string;
};

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const fotos = {
  aryzaoNoite: {
    src: "/images/photos/goyta-cano.webp",
    alt:
      "Vista aérea noturna do Estádio Ary de Oliveira e Souza lotado, com os refletores acesos durante um Goyta-Cano",
    razao: 1.477,
    autor: "Leonardo Berenger",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Aryz%C3%A3o_Goyta-Cano.jpg`,
    aviso:
      "A imagem traz marca d'água de terceiros (Olhos de Águia Produções). Confirmar a autorização antes de publicar.",
  },
  fachadaFrontal: {
    src: "/images/photos/aryzao-04.webp",
    alt:
      "Fachada azul e branca da sede do Goytacaz na Rua dos Goytacazes, com as letras GOYTACAZ F.C. em relevo no alto do prédio",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Est%C3%A1dio_Ary_de_Oliveira_e_Souza_Est%C3%A1dio_do_Goytacaz_F_C_Campos_dos_Goytacazes4.jpg`,
  },
  fachadaAngulo: {
    src: "/images/photos/aryzao-03.webp",
    alt:
      "Fachada do Goytacaz Futebol Clube vista em perspectiva, com portões azuis e as letras do clube no topo",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Est%C3%A1dio_Ary_de_Oliveira_e_Souza_Est%C3%A1dio_do_Goytacaz_F_C_Campos_dos_Goytacazes3.jpg`,
  },
  fachadaRua: {
    src: "/images/photos/aryzao-02.webp",
    alt:
      "O prédio azul e branco do clube ao longo da rua, entre árvores, em Campos dos Goytacazes",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Est%C3%A1dio_Ary_de_Oliveira_e_Souza_Est%C3%A1dio_do_Goytacaz_F_C_Campos_dos_Goytacazes2.jpg`,
  },
  arquibancadaExterna: {
    src: "/images/photos/aryzao-01.webp",
    alt:
      "Estrutura de concreto da arquibancada do Aryzão vista da calçada, entre árvores e fiação",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Est%C3%A1dio_Ary_de_Oliveira_e_Souza_Est%C3%A1dio_do_Goytacaz_F_C_Campos_dos_Goytacazes1.jpg`,
  },
  arquibancadaArvores: {
    src: "/images/photos/aryzao-05.webp",
    alt:
      "A arquibancada do Aryzão vista por entre as copas das árvores da Rua dos Goytacazes",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Est%C3%A1dio_Ary_de_Oliveira_e_Souza_Est%C3%A1dio_do_Goytacaz_F_C_Campos_dos_Goytacazes5.jpg`,
  },
  elenco2007: {
    src: "/images/photos/elenco-2007.webp",
    alt: "Elenco profissional do Goytacaz perfilado em campo, em 2007",
    razao: 1.333,
    autor: "Junius",
    licenca: "Domínio público",
    fonte: `${COMMONS}Goytacaz_Profissional_2007.jpg`,
  },
  elenco2011: {
    src: "/images/photos/elenco-2011.webp",
    alt: "Elenco do Goytacaz perfilado em campo, em 2011",
    razao: 1.333,
    autor: "Junius",
    licenca: "Domínio público",
    fonte: `${COMMONS}Goytacaz_em_2011.jpg`,
  },
  elenco2012: {
    src: "/images/photos/goyta-2012.webp",
    alt: "Time do Goytacaz em campo, em 2012",
    razao: 1.333,
    autor: "Rodolfo18",
    licenca: "CC BY-SA 3.0",
    fonte: `${COMMONS}Goyta_2012.jpg`,
  },
  elenco2014: {
    src: "/images/photos/elenco-2014.webp",
    alt:
      "Time do Goytacaz perfilado no gramado com o uniforme azul, em 2014, antes de uma partida",
    razao: 1.333,
    autor: "Junius",
    licenca: "Domínio público",
    fonte: `${COMMONS}Time_do_Goytacaz_em_2014.JPG`,
  },
  elenco2018: {
    src: "/images/photos/elenco-2018.webp",
    alt:
      "Elenco do Goytacaz que conquistou o acesso à Série A do Campeonato Carioca de 2018",
    razao: 1.766,
    autor: "Rogério Nunes",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Elenco_do_Goytacaz_que_conquistou_o_acesso_a_S%C3%A9rie_A_de_2018.jpg`,
  },
  bebeto: {
    src: "/images/photos/bebeto.webp",
    alt: "Retrato de Bebeto, atacante campeão do mundo em 1994",
    razao: 0.743,
    autor: "Marcello Casal Jr. / Agência Brasil",
    licenca: "CC BY 3.0 BR",
    fonte: `${COMMONS}Bebeto_cropped.jpg`,
  },

  /* --- Campos dos Goytacazes: os lugares da história do clube --- */

  santoAntonio: {
    src: "/images/photos/campos-santo-antonio.webp",
    alt:
      "Fachada da Capela de Santo Antônio, em Guarus, Campos dos Goytacazes, com muro de arcos e portão de grade",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Capela_de_Santo_Ant%C3%B4nio_Campo_dos_Goytacazes1.jpg`,
    aviso: "Fotografia atual. O campo de 1912 ficava defronte a esta capela.",
  },
  lapa: {
    src: "/images/photos/campos-lapa.webp",
    alt:
      "Igreja de Nossa Senhora da Lapa, no bairro da Lapa, em Campos dos Goytacazes",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Igreja_Nossa_Senhora_da_Lapa_-_Campos_dos_Goytacazes4.jpg`,
    aviso: "Fotografia atual. O campo da Rua do Gás ficava neste bairro.",
  },
  campos1941: {
    src: "/images/photos/campos-1941.webp",
    alt:
      "Fotografia em preto e branco de 1941: pessoas e um animal de carga às margens da Lagoa de Cima, em Campos dos Goytacazes, com a serra ao fundo",
    razao: 1.619,
    autor: "Halleypo",
    licenca: "CC BY-SA 3.0",
    fonte: `${COMMONS}Lagoa_cima_campos_rj_1941.jpg`,
  },
  camposCentro: {
    src: "/images/photos/campos-centro.webp",
    alt: "Paisagem do centro de Campos dos Goytacazes",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Paisagem_do_Centro_de_Campos_dos_Goytacazes1.jpg`,
  },
  camposMercado: {
    src: "/images/photos/campos-mercado.webp",
    alt: "Mercado Municipal de Campos dos Goytacazes",
    razao: 1.333,
    autor: "Rafael Deminicis",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Mercado_Municipal_de_Campos_dos_Goytacazes8.jpg`,
  },
  maracana: {
    src: "/images/photos/maracana.webp",
    alt: "Fachada do Estádio do Maracanã, no Rio de Janeiro",
    razao: 1.333,
    autor: "Mark Scott Johnson",
    licenca: "CC BY 2.0",
    fonte: `${COMMONS}Fachada_Est%C3%A1dio_do_Maracan%C3%A3.jpg`,
    aviso: "Fotografia atual do Maracanã, não do jogo de 1963.",
  },
  luchoNizzo: {
    src: "/images/photos/lucho-nizzo-2020.webp",
    alt: "O jogador Lucho Nizzo com a camisa do Goytacaz, em 2020",
    razao: 0.75,
    autor: "Wellington Orlando Pereira Ramos",
    licenca: "CC BY-SA 4.0",
    fonte: `${COMMONS}Lucho_Nizzo_2020.jpg`,
  },
} as const satisfies Record<string, Foto>;

export type ChaveFoto = keyof typeof fotos;

/** Lista para a página de créditos. */
export const creditos: Foto[] = Object.values(fotos);
