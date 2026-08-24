/**
 * moments.ts — "Momentos que fizeram história" + ídolos.
 * Todos os registros têm lastro em fonte pública.
 */

export type Momento = {
  id: string;
  ano: string;
  titulo: string;
  texto: string;
  imagem: { src: string; alt: string };
};

export const momentos: Momento[] = [
  {
    id: "primeiro-jogo",
    ano: "1912",
    titulo: "A estreia",
    texto:
      "Cinco dias após a fundação, o Goytacaz venceu o Internacional por 2 a 1. A primeira página de tudo.",
    imagem: {
      src: "/images/photos/campos-santo-antonio.webp",
      alt: "Fachada da Capela de Santo Antônio, em Guarus, Campos dos Goytacazes",
    },
  },
  {
    id: "luz",
    ano: "1930",
    titulo: "A luz da Rua do Gás",
    texto:
      "5 de junho de 1930: o campo ganha iluminação elétrica e o interior fluminense descobre o futebol noturno.",
    imagem: {
      src: "/images/photos/campos-lapa.webp",
      alt: "Igreja de Nossa Senhora da Lapa, em Campos dos Goytacazes",
    },
  },
  {
    id: "aryzao",
    ano: "1938",
    titulo: "A inauguração do Aryzão",
    texto:
      "O clube deixa de jogar emprestado e passa a ter casa própria na Rua dos Goytacazes.",
    imagem: {
      src: "/images/photos/aryzao-04.webp",
      alt: "Fachada azul e branca da sede do Goytacaz, com as letras GOYTACAZ F.C. em relevo",
    },
  },
  {
    id: "invicto",
    ano: "1955",
    titulo: "O ano sem derrotas",
    texto:
      "Supercampeonato conquistado invicto — o auge de uma década de domínio no futebol da região.",
    imagem: {
      src: "/images/acervo/comemoracao-gol.webp",
      alt: "Jogadores do Goytacaz se abraçam para comemorar diante da arquibancada lotada",
    },
  },
  {
    id: "maracana",
    ano: "1963",
    titulo: "O interior entra no Maracanã",
    texto:
      "Primeiro clube do antigo Estado do Rio a pisar no gramado do Maracanã. Empate em 2 a 2 com o Madureira.",
    imagem: {
      src: "/images/photos/maracana.webp",
      alt: "Fachada do Estádio do Maracanã, no Rio de Janeiro",
    },
  },
  {
    id: "recorde",
    ano: "1978",
    titulo: "14.996 pessoas",
    texto:
      "O maior público da história do Aryzão, em Goytacaz × Flamengo, no ano do título fluminense.",
    imagem: {
      src: "/images/acervo/torcida-fumaca-01.webp",
      alt: "Arquibancada do Aryzão tomada por fumaça azul e serpentinas",
    },
  },
];

export type Idolo = {
  nome: string;
  epiteto: string;
  texto: string;
  periodo: string;
  /** Retrato, quando existe imagem de licença livre. */
  foto?: { src: string; alt: string; credito: string };
};

export const idolos: Idolo[] = [
  {
    nome: "Amaro da Silveira",
    epiteto: "O primeiro",
    periodo: "Anos 1920",
    texto:
      "Primeiro jogador campista a vestir a camisa da Seleção Brasileira, titular no Sul-Americano de 1923.",
  },
  {
    nome: "Amarildo",
    epiteto: "O Possesso",
    periodo: "Anos 1950—60",
    texto:
      "Revelado pelo Goytacaz, filho de Amaro. Campeão do mundo com a Seleção Brasileira em 1962, no Chile.",
  },
  {
    nome: "Bebeto",
    epiteto: "Primeiro gol no Aryzão",
    periodo: "1983",
    texto:
      "Marcou seu primeiro gol como profissional no gramado do Estádio Ary de Oliveira e Souza.",
    foto: {
      src: "/images/photos/bebeto.webp",
      alt: "Retrato de Bebeto, atacante campeão do mundo em 1994",
      credito: "Marcello Casal Jr. / Agência Brasil · CC BY 3.0 BR",
    },
  },
];

/** Clássicos e rivalidades registradas. */
export const classicos = [
  {
    nome: "Goyta-Cano",
    rival: "Americano Futebol Clube",
    texto:
      "O maior clássico do interior fluminense. Foi disputado até na primeira divisão do Campeonato Brasileiro, em 1977 e 1978.",
  },
  {
    nome: "Clássico Vovô de Campos",
    rival: "Campos Atlético Associação",
    texto: "Um dos confrontos mais antigos do futebol da cidade.",
  },
  {
    nome: "Goytacaz × Rio Branco",
    rival: "Rio Branco",
    texto: "Rivalidade tradicional dentro de Campos dos Goytacazes.",
  },
];
