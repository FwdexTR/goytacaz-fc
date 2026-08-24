/**
 * history.ts — Linha do tempo do Goytacaz Futebol Clube.
 *
 * REGRA EDITORIAL: nada aqui é inventado. Cada capítulo se apoia em registro
 * público (Wikipédia pt, FERJ/FFERJ, Esquadrões de Futebol, imprensa campista).
 * Onde as fontes divergem, o conflito está anotado em `nota` — e não escondido.
 *
 * Para adicionar um capítulo: basta acrescentar um objeto ao array.
 * A interface (timeline, ano fixo, scroll) se adapta sozinha.
 */

export type Capitulo = {
  id: string;
  ano: string;
  /** Rótulo da era, exibido no marcador fixo durante o scroll. */
  era: string;
  titulo: string;
  resumo: string;
  /** Texto expansível — aprofundamento opcional. */
  detalhe?: string;
  imagem?: { src: string; alt: string; legenda?: string };
  destaques?: { valor: string; rotulo: string }[];
  nota?: string;
};

export const capitulos: Capitulo[] = [
  {
    id: "fundacao",
    ano: "1912",
    era: "A origem",
    titulo: "Um barco negado, um clube fundado",
    resumo:
      "Remadores do Natação e Regatas Campista pedem uma embarcação para descer o Paraíba do Sul. O pedido é negado. Em 20 de agosto de 1912, o grupo funda o Goytacaz Futebol Clube.",
    detalhe:
      "A primeira diretoria teve Luiz Carlos Cabral na presidência, Roberto Melo como vice e Otto Nogueira como primeiro tesoureiro. A sede provisória funcionou na casa de Otto Nogueira, na Rua 21 de Abril, nº 14. O nome escolhido homenageia os goytacazes, povo indígena que ocupava a região muito antes da fundação da cidade.",
    imagem: {
      src: "/images/acervo/torcida-arquivo.webp",
      alt:
        "Torcedores do Goytacaz reunidos diante de um ônibus, com surdo e camisas do clube, em fotografia antiga",
      legenda: "Torcida do Goytacaz em fotografia de arquivo, sem data registrada",
    },
    destaques: [
      { valor: "20 AGO", rotulo: "Data de fundação" },
      { valor: "1912", rotulo: "Ano zero" },
    ],
    nota:
      "A data de 20 de agosto de 1912 é a registrada pelo clube e pela FERJ. Um registro histórico alternativo cita 6 de agosto.",
  },
  {
    id: "primeiro-jogo",
    ano: "1912",
    era: "A origem",
    titulo: "Cinco dias depois, a primeira vitória",
    resumo:
      "Em 25 de agosto de 1912 o Goytacaz entra em campo pela primeira vez, contra o Internacional, e vence por 2 a 1. O clube tinha cinco dias de vida.",
    detalhe:
      "O primeiro campo ficava defronte à igreja de Santo Antônio, em Guarus. Antes de fixar-se na Rua do Gás, o clube ainda passaria pela Praça da República e por um terreno próximo ao Liceu de Humanidades.",
    imagem: {
      src: "/images/photos/campos-santo-antonio.webp",
      alt:
        "Fachada da Capela de Santo Antônio, em Guarus, Campos dos Goytacazes",
      legenda:
        "A capela de Santo Antônio, em Guarus, hoje — o primeiro campo do clube ficava defronte a ela. Foto de Rafael Deminicis (CC BY-SA 4.0)",
    },
    destaques: [{ valor: "2 × 1", rotulo: "Primeiro resultado" }],
  },
  {
    id: "1914",
    ano: "1914",
    era: "Os primeiros anos",
    titulo: "O primeiro campeão de Campos",
    resumo:
      "Dois anos após a fundação, o Goytacaz conquista o Campeonato Campista de 1914. É o primeiro campeão da história do futebol da cidade.",
    imagem: {
      src: "/images/acervo/camisa-retro.webp",
      alt:
        "Camisa retrô azul e branca do Goytacaz com cordão na gola, ao lado de uma bola de couro antiga e da etiqueta Goytacaz desde 1912",
      legenda: "Camisa retrô do clube, em homenagem ao uniforme dos primeiros anos",
    },
    destaques: [{ valor: "1º", rotulo: "Campeão da cidade" }],
  },
  {
    id: "1930",
    ano: "1930",
    era: "Pioneirismo",
    titulo: "A luz acesa na Rua do Gás",
    resumo:
      "Em 5 de junho de 1930, o campo da Rua do Gás, na Lapa, recebe iluminação elétrica. O Goytacaz passa a jogar à noite quando quase nenhum clube do interior podia.",
    detalhe:
      "A Rua do Gás — hoje Rua dos Goytacazes — se tornaria o endereço definitivo do clube. Dali veio um dos apelidos mais antigos da torcida: o Azul da Rua do Gás.",
    imagem: {
      src: "/images/photos/campos-lapa.webp",
      alt:
        "Igreja de Nossa Senhora da Lapa, no bairro da Lapa, em Campos dos Goytacazes",
      legenda:
        "A Lapa, hoje — bairro do campo da Rua do Gás. Foto de Rafael Deminicis (CC BY-SA 4.0)",
    },
  },
  {
    id: "aryzao",
    ano: "1938",
    era: "A casa",
    titulo: "Nasce o Aryzão",
    resumo:
      "Em 9 de janeiro de 1938 é inaugurado o Estádio Ary de Oliveira e Souza. O clube ganha um endereço permanente — e a cidade ganha um monumento.",
    detalhe:
      "A presidência era de Augusto Alexandre de Faria. O primeiro gol da história do estádio foi marcado por Otto Nogueira, um dos nomes ligados à fundação do clube. O gramado tem medidas oficiais de 105 × 68 metros.",
    imagem: {
      src: "/images/photos/aryzao-04.webp",
      alt:
        "Fachada azul e branca da sede do Goytacaz, com as letras GOYTACAZ F.C. em relevo no alto do prédio",
      legenda: "A fachada na Rua dos Goytacazes, hoje — foto de Rafael Deminicis (CC BY-SA 4.0)",
    },
    destaques: [
      { valor: "1938", rotulo: "Inauguração" },
      { valor: "105 × 68", rotulo: "Metros de gramado" },
    ],
    nota:
      "As fontes divergem sobre o jogo inaugural: há registros de vitória por 2 a 1 sobre o Internacional e outros de 3 a 1 sobre o Americano.",
  },
  {
    id: "tetra",
    ano: "1940",
    era: "A era de ouro",
    titulo: "O primeiro tetracampeonato",
    resumo:
      "Entre 1940 e 1943 o Goytacaz vence quatro Campeonatos Campistas seguidos. É o primeiro tetracampeão da história do futebol de Campos.",
    imagem: {
      src: "/images/photos/campos-1941.webp",
      alt:
        "Fotografia em preto e branco de 1941: pessoas às margens da Lagoa de Cima, em Campos dos Goytacazes, com a serra ao fundo",
      legenda:
        "Campos dos Goytacazes em 1941, no meio do tetracampeonato — foto de Halleypo (CC BY-SA 3.0)",
    },
    destaques: [{ valor: "4×", rotulo: "Títulos seguidos" }],
  },
  {
    id: "1955",
    ano: "1955",
    era: "A era de ouro",
    titulo: "Invicto",
    resumo:
      "O Supercampeonato de 1955 é conquistado sem uma única derrota. É o ponto mais alto de uma década em que o clube dominou o futebol da região.",
    detalhe:
      "Os anos 1950 concentram a maior sequência vitoriosa da história do clube: títulos campistas em 1951, 1953, 1954, 1955, 1956, 1959 e 1960, além de uma sequência de Torneios Início entre 1952 e 1956.",
    imagem: {
      src: "/images/acervo/comemoracao-gol.webp",
      alt:
        "Jogadores do Goytacaz se abraçam para comemorar diante da arquibancada lotada",
      legenda: "Comemoração diante da arquibancada — fotografia recente",
    },
    destaques: [{ valor: "0", rotulo: "Derrotas" }],
  },
  {
    id: "maracana",
    ano: "1963",
    era: "Além de Campos",
    titulo: "O primeiro do interior no Maracanã",
    resumo:
      "Em novembro de 1963, o Goytacaz se torna o primeiro clube do antigo Estado do Rio a jogar no Maracanã. Empate em 2 a 2 com o Madureira.",
    detalhe:
      "O mesmo ano marca o início do período mais forte do clube no Campeonato Fluminense, com títulos em 1963, 1966 e 1967.",
    imagem: {
      src: "/images/photos/maracana.webp",
      alt: "Fachada do Estádio do Maracanã, no Rio de Janeiro",
      legenda:
        "O Maracanã, hoje — em novembro de 1963 o Goytacaz foi o primeiro clube do interior a jogar ali. Foto de Mark Scott Johnson (CC BY 2.0)",
    },
    destaques: [{ valor: "1º", rotulo: "Clube do interior no Maracanã" }],
  },
  {
    id: "brasileirao",
    ano: "1977",
    era: "O clube nacional",
    titulo: "Campos contra o Brasil inteiro",
    resumo:
      "O Goytacaz disputa a primeira divisão do Campeonato Brasileiro. Palmeiras, Santos e Flamengo desembarcam em Campos — e o Aryzão lota.",
    detalhe:
      "Em 4 de dezembro de 1977, 12.923 pagantes viram Goytacaz e Palmeiras. Em 14 de dezembro, 11.489 acompanharam o jogo contra o Santos. A melhor campanha nacional viria em 1978: 30º lugar entre 74 participantes.",
    imagem: {
      src: "/images/acervo/torcida-alambrado.webp",
      alt: "Torcedores no alambrado, de braços erguidos, durante a partida",
      legenda: "A torcida no alambrado do Aryzão — fotografia recente",
    },
    destaques: [
      { valor: "30º", rotulo: "Melhor posição nacional (1978)" },
      { valor: "74", rotulo: "Clubes na competição" },
    ],
  },
  {
    id: "recorde",
    ano: "1978",
    era: "O clube nacional",
    titulo: "14.996",
    resumo:
      "O maior público da história do Aryzão. Goytacaz e Flamengo, em 1978, diante de quase quinze mil pagantes. No mesmo ano, o clube conquista o Campeonato Fluminense.",
    imagem: {
      src: "/images/acervo/torcida-fumaca-01.webp",
      alt:
        "Arquibancada do Aryzão tomada por fumaça azul e serpentinas, com faixa de torcida organizada",
      legenda: "A arquibancada do Aryzão em dia de jogo — fotografia recente",
    },
    destaques: [{ valor: "14.996", rotulo: "Pagantes — recorde do estádio" }],
    nota:
      "As fontes divergem quanto à data exata do recorde: 9 de abril ou 1º de setembro de 1978.",
  },
  {
    id: "1985",
    ano: "1985",
    era: "Resistência",
    titulo: "Vice-campeão da Taça de Prata",
    resumo:
      "Depois do título da Segunda Divisão carioca em 1982, o clube chega ao vice-campeonato da Taça de Prata — a segunda divisão nacional — em 1985.",
    detalhe:
      "Foi também no gramado do Aryzão que Bebeto marcou seu primeiro gol como profissional, em 1983.",
    imagem: {
      src: "/images/acervo/elenco-aplaude.webp",
      alt: "Jogadores do Goytacaz aplaudem a torcida no fim da partida",
      legenda: "Jogadores aplaudem a arquibancada — fotografia recente",
    },
  },
  {
    id: "2011",
    ano: "2011",
    era: "Retomada",
    titulo: "Campeão da Terceira, de volta ao caminho",
    resumo:
      "O Goytacaz vence a Terceira Divisão do Campeonato Carioca e retoma a escalada dentro do futebol do estado.",
    imagem: {
      src: "/images/photos/elenco-2011.webp",
      alt: "Elenco do Goytacaz perfilado em campo, em 2011",
      legenda: "O elenco de 2011 — foto de Junius (domínio público)",
    },
  },
  {
    id: "2017",
    ano: "2017",
    era: "Retomada",
    titulo: "O retorno à elite carioca",
    resumo:
      "Título da Série B1 e da Taça Santos Dumont. Depois de mais de duas décadas, o Goytacaz volta à primeira divisão do Campeonato Carioca.",
    detalhe:
      "Na decisão da Taça Santos Dumont, o clube superou o Audax Rio nos pênaltis. Na final da Série B1, contra o América, venceu por 1 a 0 e empatou em 1 a 1.",
    imagem: {
      src: "/images/photos/elenco-2018.webp",
      alt:
        "Elenco do Goytacaz que conquistou o acesso à Série A do Campeonato Carioca de 2018",
      legenda:
        "O elenco do acesso à Série A de 2018 — foto de Rogério Nunes (CC BY-SA 4.0)",
    },
    destaques: [{ valor: "2×", rotulo: "Títulos no ano" }],
  },
  {
    id: "reconstrucao",
    ano: "2024",
    era: "Reconstrução",
    titulo: "A torcida contra o fim",
    resumo:
      "Pela primeira vez em 112 anos, a diretoria encerra as atividades do clube e anuncia a venda do Aryzão. A torcida se revolta — e não deixa acontecer.",
    detalhe:
      "A mobilização alvi-anil foi decisiva para a proteção do patrimônio do clube no momento mais difícil de sua história. Em 14 de junho de 2024 começa o processo de reconstrução, e logo na primeira competição da retomada o Goytacaz é campeão da Série B2 do Campeonato Carioca, com gol de Yuri. O episódio virou documentário: “Goytacaz: O Filme”, de Leo Puglia.",
    imagem: {
      src: "/images/photos/aryzao-03.webp",
      alt:
        "Fachada do Goytacaz Futebol Clube vista em perspectiva, com portões azuis e as letras do clube no topo",
      legenda: "A sede na Rua dos Goytacazes — foto de Rafael Deminicis (CC BY-SA 4.0)",
    },
    destaques: [
      { valor: "112", rotulo: "Anos até a primeira paralisação" },
      { valor: "B2", rotulo: "Campeão já na volta" },
    ],
  },
  {
    id: "hoje",
    ano: "2026",
    era: "Presente",
    titulo: "114 anos, e a bola segue rolando",
    resumo:
      "Em 20 de agosto de 2026 o Goytacaz completou 114 anos — no mesmo dia em que “Goytacaz: O Filme” estreou, de graça, no YouTube.",
    detalhe:
      "O clube se prepara para a Série B1 do Campeonato Carioca, que começa em 5 de setembro de 2026, com um elenco formado majoritariamente por jogadores de Campos. Em março, uma parceria inédita cedeu o Aryzão ao Americano, o maior rival: em 1º de agosto, com ingressos esgotados, foi ali que o Cano conquistou o acesso à elite. A história continua sendo escrita — e este site foi construído para receber os próximos capítulos.",
    imagem: {
      src: "/images/photos/goyta-cano.webp",
      alt:
        "Vista aérea noturna do Aryzão lotado, com os refletores acesos durante um Goyta-Cano",
      legenda: "O Aryzão cheio num Goyta-Cano — foto de Leonardo Berenger (CC BY-SA 4.0)",
    },
    destaques: [
      { valor: "114", rotulo: "Anos de história" },
      { valor: "05 SET", rotulo: "Estreia na Série B1" },
    ],
    nota:
      "Apurado em 20 de agosto de 2026, em Folha da Manhã, GF Esporte e ge.globo.",
  },
];

/** Marcadores de era usados pelo indicador fixo da página História. */
export const eras: string[] = Array.from(new Set(capitulos.map((c) => c.era)));
