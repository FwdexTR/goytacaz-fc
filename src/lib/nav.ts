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

export const SITE_URL = "https://goytacazfc.com.br";
