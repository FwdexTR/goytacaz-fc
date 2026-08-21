/**
 * club.ts — Identidade institucional do Goytacaz Futebol Clube.
 * Fonte-base: Wikipédia (pt), FERJ/FFERJ, Esquadrões de Futebol, imprensa de Campos.
 * Estrutura pensada para migração futura a CMS (mesmo shape de payload).
 */

export const club = {
  nome: "Goytacaz Futebol Clube",
  sigla: "GFC",
  fundacao: "1912-08-20",
  fundacaoExtenso: "20 de agosto de 1912",
  cidade: "Campos dos Goytacazes",
  estado: "RJ",
  pais: "Brasil",
  cores: ["Azul", "Branco"],
  mascote: "O índio goytacá",
  estadio: "Estádio Ary de Oliveira e Souza",
  estadioApelido: "Aryzão",
  apelidos: [
    "O Mais Querido de Campos",
    "Alvi-Anil",
    "Azul da Rua do Gás",
    "Goyta",
  ],
  frase: "Uma história que atravessa gerações.",
  manifesto:
    "Há clubes que nascem de uma vontade. O Goytacaz nasceu de uma recusa — e virou o time de uma cidade inteira.",
} as const;

/** Blocos editoriais da página "O Clube". Texto curto, cadência de manifesto. */
export const pilares = [
  {
    marca: "Desde 1912",
    titulo: "Nascido de uma recusa",
    texto:
      "Um grupo de remadores do Natação e Regatas Campista teve negado o pedido de um barco para descer o Paraíba do Sul. Inconformados, saíram. Em 20 de agosto de 1912 fundaram um clube de futebol. O que começou como um desentendimento virou o clube mais querido de Campos dos Goytacazes.",
  },
  {
    marca: "Azul e branco",
    titulo: "As cores da cidade",
    texto:
      "Azul e branco desde o primeiro dia. Cores que o campista reconhece de longe, na arquibancada do Aryzão, na camisa guardada no armário do avô, no escudo pintado no muro da esquina. Não são apenas cores de um time. São um endereço.",
  },
  {
    marca: "Goytacazes",
    titulo: "O nome vem da terra",
    texto:
      "O clube leva o nome dos goytacazes, povo indígena que habitava estas planícies muito antes da cana, do porto e do futebol. Escolher esse nome foi uma declaração: este clube pertence a este chão. Campos e Goytacaz compartilham a mesma raiz.",
  },
  {
    marca: "Torcida",
    titulo: "O mais querido de Campos",
    texto:
      "Em 1972, levantamentos apontavam o Goytacaz como a quinta maior torcida do estado do Rio — atrás apenas dos quatro grandes — concentrando a maioria esmagadora dos torcedores da cidade. Mais de um século depois, a arquibancada continua sendo a instituição mais fiel do clube.",
  },
] as const;

export const contato = {
  endereco: "Rua dos Goytacazes, 331 — Campos dos Goytacazes / RJ",
  cep: "28010-000",
  /**
   * Não há e-mail nem telefone públicos aqui de propósito: publicar um endereço
   * inventado faria torcedor mandar mensagem para o vazio. Enquanto o clube não
   * fornecer os canais oficiais, a página aponta para as redes, que existem.
   */
  email: null,
  telefone: null,
  /**
   * Canais oficiais confirmados em 20/08/2026. O clube não mantém site próprio
   * ativo — hoje as redes são o canal institucional de fato.
   */
  redes: [
    {
      nome: "Instagram",
      href: "https://www.instagram.com/goytacazfc/",
      detalhe: "@goytacazfc · perfil oficial",
    },
    {
      nome: "Facebook",
      href: "https://www.facebook.com/goytacazfutebolclube",
      detalhe: "Página oficial",
    },
  ],
  /** Coordenadas aproximadas do Aryzão — usadas no bloco de localização. */
  geo: { lat: -21.7545, lng: -41.3255 },
  aviso:
    "As redes sociais acima são as oficiais do clube, confirmadas em agosto de 2026. Para falar com o Goytacaz, use uma delas.",
  /**
   * Aviso de origem. O clube não mantém site oficial — sem isto, um visitante
   * pode confundir este projeto com um canal do próprio Goytacaz.
   */
  naoOficial:
    "Projeto independente, feito por torcedor, sem vínculo com a diretoria do clube. Conteúdo histórico apurado em fontes públicas.",
} as const;
