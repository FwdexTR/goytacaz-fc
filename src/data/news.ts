/**
 * news.ts — Notícias.
 *
 * REGRA: nada aqui é inventado. Cada item corresponde a uma publicação real,
 * com veículo e data de origem registrados em `fonte`. Itens marcados com
 * `arquivo: true` são registros históricos, não cobertura corrente.
 *
 * Quando houver redação ou CMS, basta trocar `getNoticias()` por um fetch — o
 * shape de `Noticia` já é o contrato esperado pela interface.
 *
 * Última apuração: 20 de agosto de 2026.
 */

export type Noticia = {
  slug: string;
  titulo: string;
  resumo: string;
  data: string; // ISO
  categoria: "Clube" | "História" | "Estádio" | "Base" | "Competição";
  /** true = registro histórico do acervo, não notícia corrente. */
  arquivo: boolean;
  fonte?: string;
  /** Link para a publicação de origem, quando houver. */
  url?: string;
  /** Marca a notícia principal, exibida em destaque. */
  destaque?: boolean;
};

export const noticias: Noticia[] = [
  {
    slug: "114-anos-e-estreia-do-filme",
    titulo: "Goytacaz completa 114 anos e ganha um filme",
    resumo:
      "O clube chegou aos 114 anos em 20 de agosto de 2026 com a estreia de “Goytacaz: O Filme”, disponibilizado gratuitamente no YouTube. A data encontrou o alvianil em processo de reconstrução, com a torcida mobilizada em defesa da história e do Aryzão. O Goytacaz é a quinta maior torcida do estado do Rio.",
    data: "2026-08-20",
    categoria: "Clube",
    arquivo: false,
    fonte: "Folha da Manhã / GF Esporte",
    url:
      "https://www.gfesporte.com.br/noticias/futebol/goytacaz-completa-114-anos-com-torcida-em-festa-e-estreia-de-filme-sobre-o-clube-nesta-quinta/29014/",
    destaque: true,
  },
  {
    slug: "goytacaz-o-filme",
    titulo: "“Goytacaz: O Filme” está no ar, completo e de graça",
    resumo:
      "Documentário de Leo Puglia, com 1h52, sobre o momento em que a diretoria encerrou as atividades pela primeira vez em 112 anos e anunciou a venda do Aryzão — e sobre a revolta da torcida que impediu o fim do clube. Estreou em 20 de agosto de 2026, no aniversário de 114 anos.",
    data: "2026-08-20",
    categoria: "História",
    arquivo: false,
    fonte: "Leo Puglia / YouTube",
    url: "https://www.youtube.com/watch?v=W7fXKvo2y50",
  },
  {
    slug: "serie-b1-2026",
    titulo: "O Goytacaz volta a campo na Série B1 em setembro",
    resumo:
      "A disputa da Série B1 do Campeonato Carioca começa em 5 de setembro de 2026. Segundo o presidente Sérgio Alves, o elenco é formado majoritariamente por jogadores de Campos dos Goytacazes.",
    data: "2026-08-20",
    categoria: "Competição",
    arquivo: false,
    fonte: "Folha da Manhã / GF Esporte",
    url:
      "https://www.gfesporte.com.br/noticias/futebol/goytacaz-completa-114-anos-com-torcida-em-festa-e-estreia-de-filme-sobre-o-clube-nesta-quinta/29014/",
  },
  {
    slug: "lukinha-nacional-de-patos",
    titulo: "Revelado na base, Lukinha acerta com o Nacional de Patos",
    resumo:
      "Formado nas categorias de base do Goytacaz e natural de Campos dos Goytacazes, o atacante Lukinha foi anunciado pelo Nacional de Patos para a sequência da temporada de 2026.",
    data: "2026-08-19",
    categoria: "Base",
    arquivo: false,
    fonte: "globoesporte.com",
  },
  {
    slug: "aryzao-recebe-final-da-serie-a2",
    titulo: "O Aryzão recebeu a decisão da Série A2 — e o rival levantou a taça",
    resumo:
      "Fruto de uma parceria selada em março de 2026 entre Goytacaz e Americano, o Estádio Ary de Oliveira e Souza recebeu os jogos do maior rival campista. Em 1º de agosto, diante de ingressos esgotados, o Americano venceu o Resende nos pênaltis e garantiu o acesso à elite carioca. Um marco na relação de dois clubes que se enfrentam desde sempre.",
    data: "2026-08-01",
    categoria: "Estádio",
    arquivo: false,
    fonte: "globoesporte.com",
  },
  {
    slug: "titulo-b2",
    titulo: "Campeão da B2 logo na primeira competição da reconstrução",
    resumo:
      "Iniciada em 14 de junho de 2024, a reconstrução do clube teve seu primeiro resultado dentro de campo com o título da Série B2 do Campeonato Carioca, decidido com gol de Yuri.",
    data: "2025-12-01",
    categoria: "Competição",
    arquivo: true,
    fonte: "Folha da Manhã / GF Esporte",
  },
  {
    slug: "aryzao-volta-a-receber-jogos",
    titulo: "O Aryzão volta a receber jogos profissionais",
    resumo:
      "Depois de mais de 500 dias sem futebol profissional, o Estádio Ary de Oliveira e Souza voltou a abrir os portões em 2025.",
    data: "2025-06-08",
    categoria: "Estádio",
    arquivo: true,
    fonte: "Imprensa de Campos dos Goytacazes",
  },
];

/**
 * Ponto de troca para CMS/API. Hoje lê o array local.
 * Ordena por data decrescente; em caso de empate, o destaque vem primeiro.
 */
export async function getNoticias(): Promise<Noticia[]> {
  return noticias.slice().sort((a, b) => {
    if (a.data !== b.data) return a.data < b.data ? 1 : -1;
    return Number(b.destaque ?? false) - Number(a.destaque ?? false);
  });
}
