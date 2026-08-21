/**
 * achievements.ts — Palmarés do Goytacaz Futebol Clube.
 * Fontes: Wikipédia (pt), FERJ/FFERJ, registros de imprensa de Campos.
 * Nenhum título foi acrescentado sem registro público.
 */

export type Conquista = {
  id: string;
  competicao: string;
  escopo: "Estadual" | "Municipal" | "Regional" | "Base";
  anos: string[];
  total: number;
  contexto?: string;
  destaque?: boolean;
};

export const conquistas: Conquista[] = [
  {
    id: "campeonato-fluminense",
    competicao: "Campeonato Fluminense",
    escopo: "Estadual",
    anos: ["1955", "1963", "1966", "1967", "1978"],
    total: 5,
    contexto:
      "O principal campeonato do antigo Estado do Rio de Janeiro. O título de 1955 veio em campanha invicta; o de 1978 coincidiu com o ano do recorde de público do Aryzão.",
    destaque: true,
  },
  {
    id: "campeonato-campista",
    competicao: "Campeonato Campista",
    escopo: "Municipal",
    anos: [
      "1914",
      "1920",
      "1926",
      "1932",
      "1933",
      "1940",
      "1941",
      "1942",
      "1943",
      "1945",
      "1948",
      "1951",
      "1953",
      "1954",
      "1955",
      "1956",
      "1959",
      "1960",
      "1966",
      "1977",
    ],
    total: 20,
    contexto:
      "Vinte títulos da cidade — do primeiro campeonato campista da história, em 1914, ao tetracampeonato inédito entre 1940 e 1943.",
    destaque: true,
  },
  {
    id: "carioca-serie-b",
    competicao: "Campeonato Carioca — Segunda Divisão",
    escopo: "Estadual",
    anos: ["1982", "2017"],
    total: 2,
    contexto:
      "O título de 2017 devolveu o clube à elite do futebol carioca depois de mais de duas décadas.",
    destaque: true,
  },
  {
    id: "carioca-serie-c",
    competicao: "Campeonato Carioca — Terceira Divisão",
    escopo: "Estadual",
    anos: ["2011"],
    total: 1,
    contexto: "Título e acesso conquistados na retomada do início da década de 2010.",
  },
  {
    id: "carioca-b2",
    competicao: "Campeonato Carioca — Série B2",
    escopo: "Estadual",
    anos: ["2025"],
    total: 1,
    contexto:
      "A conquista mais recente: veio logo na primeira competição depois do início da reconstrução do clube, com gol de Yuri na decisão.",
  },
  {
    id: "taca-santos-dumont",
    competicao: "Taça Santos Dumont",
    escopo: "Regional",
    anos: ["2017"],
    total: 1,
    contexto: "Decidida nos pênaltis diante do Audax Rio, no ano do retorno à elite.",
  },
  {
    id: "taca-cidade-de-campos",
    competicao: "Taça Cidade de Campos",
    escopo: "Municipal",
    anos: ["1970", "1976", "1978"],
    total: 3,
  },
  {
    id: "torneio-inicio",
    competicao: "Torneio Início",
    escopo: "Municipal",
    anos: [
      "1952",
      "1953",
      "1954",
      "1955",
      "1956",
      "1959",
      "1960",
      "1966",
      "1968",
      "1969",
      "1972",
    ],
    total: 11,
  },
  {
    id: "copa-juventude-sub15",
    competicao: "Copa Juventude Sub-15",
    escopo: "Base",
    anos: ["2015"],
    total: 1,
  },
  {
    id: "copa-nacional-guri-sub17",
    competicao: "Copa Nacional Guri Sub-17",
    escopo: "Base",
    anos: ["2016"],
    total: 1,
  },
];

export const totalTitulos = conquistas.reduce((s, c) => s + c.total, 0);

/** Feitos que não são títulos, mas são história. */
export const feitos = [
  {
    ano: "1914",
    titulo: "Primeiro campeão de Campos",
    texto: "O Goytacaz venceu o primeiro Campeonato Campista da história.",
  },
  {
    ano: "1930",
    titulo: "Pioneiro na iluminação",
    texto:
      "Campo da Rua do Gás iluminado em 5 de junho de 1930 — futebol noturno no interior fluminense.",
  },
  {
    ano: "1963",
    titulo: "Primeiro do interior no Maracanã",
    texto:
      "Primeiro clube do antigo Estado do Rio a atuar no Maracanã: 2 a 2 com o Madureira.",
  },
  {
    ano: "1978",
    titulo: "30º do Brasil",
    texto:
      "Melhor campanha nacional do clube na primeira divisão: 30º lugar entre 74 participantes.",
  },
  {
    ano: "1985",
    titulo: "Vice-campeão da Taça de Prata",
    texto: "Vice-campeonato da segunda divisão nacional.",
  },
];
