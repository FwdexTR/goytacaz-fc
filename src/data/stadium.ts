/**
 * stadium.ts — Estádio Ary de Oliveira e Souza ("Aryzão").
 * Fontes: Wikipédia (pt), ogol, imprensa de Campos.
 */

export const estadio = {
  nome: "Estádio Ary de Oliveira e Souza",
  apelido: "Aryzão",
  inauguracao: "1938-01-09",
  inauguracaoExtenso: "9 de janeiro de 1938",
  endereco: "Rua dos Goytacazes, 331 — Campos dos Goytacazes / RJ",
  gramado: "105 × 68 m — grama natural",
  geo: { lat: -21.7545, lng: -41.3255 },
  recorde: {
    publico: "14.996",
    jogo: "Goytacaz × Flamengo",
    ano: "1978",
  },
  intro:
    "Antes do Aryzão, o Goytacaz jogou em Guarus, na Praça da República e perto do Liceu, até fincar raízes na Rua do Gás. Em 1938 o clube deixou de ser hóspede da própria cidade: passou a ter endereço.",
  fatos: [
    {
      rotulo: "Inauguração",
      valor: "09.01.1938",
      texto:
        "Primeiro gol da história do estádio marcado por Otto Nogueira, um dos nomes da fundação do clube.",
    },
    {
      rotulo: "Recorde de público",
      valor: "14.996",
      texto: "Goytacaz × Flamengo, em 1978, pelo Campeonato Brasileiro.",
    },
    {
      rotulo: "Gramado",
      valor: "105 × 68 m",
      texto: "Medidas oficiais, grama natural, na Rua dos Goytacazes.",
    },
    {
      rotulo: "Iluminação",
      valor: "1960",
      texto:
        "O Goytacaz foi o primeiro clube do interior fluminense a iluminar seu estádio.",
    },
  ],
  notas: [
    "As fontes divergem sobre a capacidade atual do estádio — os números publicados variam entre cerca de 10 mil e 18 mil lugares. Por isso, este site apresenta apenas o recorde de público, que é documentado.",
    "Há registros conflitantes sobre o jogo inaugural: Goytacaz 2 x 1 Internacional e Goytacaz 3 x 1 Americano.",
  ],
  galeria: [
    {
      src: "/images/photos/aryzao-01.webp",
      alt:
        "Estrutura de concreto da arquibancada do Aryzão vista da calçada, entre árvores e fiação",
      legenda: "A arquibancada vista da rua — Rafael Deminicis (CC BY-SA 4.0)",
    },
    {
      src: "/images/photos/aryzao-03.webp",
      alt:
        "Fachada do Goytacaz Futebol Clube vista em perspectiva, com portões azuis e as letras do clube no topo",
      legenda: "A fachada e os portões — Rafael Deminicis (CC BY-SA 4.0)",
    },
    {
      src: "/images/photos/aryzao-05.webp",
      alt:
        "A arquibancada do Aryzão vista por entre as copas das árvores da Rua dos Goytacazes",
      legenda: "Entre as árvores da Rua dos Goytacazes — Rafael Deminicis (CC BY-SA 4.0)",
    },
  ],
} as const;
