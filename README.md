# Goytacaz Futebol Clube — site institucional

Site institucional do Goytacaz Futebol Clube, de Campos dos Goytacazes (RJ),
fundado em 20 de agosto de 1912.

A proposta não é um site de time: é uma **experiência editorial** sobre a
história de um clube — tipografia monumental, ritmo de exposição, narrativa em
linha do tempo e um acervo visual navegável.

## Stack

- **Next.js 16** (App Router, Turbopack) — todas as rotas são estáticas
- **React 19** + **TypeScript**
- **Tailwind CSS 4** com tokens em `@theme`
- **Motion** para animação e valores ligados ao scroll
- **Lenis** para rolagem suave — carregada sob demanda, só em ponteiro fino

## Rodando

```bash
npm run dev
```

```bash
npm run build
```

## Arquitetura

```
src/
  app/            rotas (uma pasta por página) + sitemap, robots, 404
  components/
    ui/           primitivos: Reveal, TextReveal, Plate, Counter, Crest, …
    navigation/   Header (menu fullscreen no mobile) e Footer
    sections/     blocos da Home
    history/      Timeline da página História
    gallery/      grid masonry + lightbox
  data/           TODO o conteúdo, tipado
  lib/            movimento, rolagem suave, rotas, SEO
public/images/    acervo visual (ver images/README.md)
```

### Conteúdo separado da interface

Nenhum texto histórico mora dentro de um componente. Tudo vive em `src/data`:

| Arquivo           | Conteúdo                          |
| ----------------- | --------------------------------- |
| `club.ts`         | identidade, pilares, contato       |
| `history.ts`      | capítulos da linha do tempo        |
| `achievements.ts` | palmarés e feitos                  |
| `stadium.ts`      | Estádio Ary de Oliveira e Souza    |
| `moments.ts`      | momentos, ídolos, clássicos        |
| `gallery.ts`      | acervo visual                      |
| `news.ts`         | notícias (com `getNoticias()`)     |

Acrescentar um capítulo à história é acrescentar um objeto ao array — a
interface se adapta sozinha. Migrar para um CMS é trocar a origem dos dados,
sem tocar em nenhum componente.

## Regras editoriais adotadas

1. **Nada foi inventado.** Cada data, placar e título tem lastro em registro
   público (Wikipédia, FERJ/FFERJ, enciclopédias de futebol, imprensa de Campos).
2. **Divergência de fontes é publicada, não escondida.** Onde os registros
   conflitam — a data do recorde de público, o jogo inaugural do Aryzão, a
   capacidade atual do estádio — o site exibe uma *nota de arquivo*.
3. **Não há notícias fictícias.** A página de Notícias publica apenas registros
   históricos, marcados como "Registro de arquivo".

## Movimento e acessibilidade

O hook `useMotionOK()` (`src/lib/useMotionOK.ts`) é a peça central: retorna
`false` no servidor **e na primeira renderização do cliente**, sempre. Isso
garante que o HTML entregue seja a versão estática e legível — a animação é uma
camada aplicada depois, nunca um pré-requisito do conteúdo — e elimina qualquer
divergência de hidratação para quem usa `prefers-reduced-motion`.

Também garantido:

- navegação completa por teclado, incluindo o lightbox (setas, `Esc`, foco devolvido)
- `hover` nunca é o único caminho: todo conteúdo revelado por cursor tem equivalente por toque
- contraste auditado contra WCAG AA em todas as páginas
- link "pular para o conteúdo", `aria-current`, marcos semânticos e headings em ordem

## SEO

Metadados por rota, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` e
dados estruturados JSON-LD (`SportsTeam` no layout, `StadiumOrArena` no Aryzão).

## Preferência de movimento

`prefers-reduced-motion` é uma configuração do sistema inteiro: quem a liga por
causa de outro aplicativo perderia a experiência aqui sem entender o motivo. Por
isso o site tem um controle próprio — **Auto / Ligado / Desligado** no rodapé,
mais um botão "Ativar animações" que aparece no cabeçalho **apenas** quando o
sistema pediu movimento reduzido. A escolha fica em `localStorage`; o padrão
continua respeitando o sistema.

## Imagens

Acervo **misto**, documentado em [`public/images/README.md`](public/images/README.md):

- **11 fotografias reais** do Goytacaz, do Wikimedia Commons, em domínio público
  ou Creative Commons — o Aryzão lotado à noite, a fachada com as letras do clube
  na Rua dos Goytacazes, elencos de 2007 a 2018. Créditos em
  [`src/data/photos.ts`](src/data/photos.ts), visíveis na galeria, no lightbox e
  na seção de créditos. **CC BY-SA exige que a atribuição continue visível.**
- **Composições gráficas em SVG** para as décadas sem registro fotográfico livre.
  Uma foto recente nunca ilustra um capítulo antigo sem que a legenda diga a data
  real — por isso o recorde de 1978 segue ilustrado por composição.
- **Escudo oficial** em domínio público (`brand/escudo.webp`), que também gera o
  favicon e o ícone de toque.

⚠️ Antes de publicar: a foto do hero (`goyta-cano.webp`) traz marca d'água de
terceiros. Ver a nota em `public/images/README.md`.
