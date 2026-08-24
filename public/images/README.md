# Acervo de imagens

O acervo é **misto**, e a diferença importa para a licença e para a honestidade
das legendas.

```
/images
  /brand     escudo oficial do clube (domínio público)
  /photos    fotografias do Wikimedia Commons, licença livre
  /acervo    fotografias entregues pelo clube/torcedor, autoria a confirmar
```

O site é **inteiramente fotográfico**. As composições gráficas que ocupavam o
lugar do acervo foram removidas quando as fotos chegaram.

## 1. Fotografias reais — `/photos`

Dezenove fotografias obtidas no **Wikimedia Commons**, em domínio público ou sob
Creative Commons. Os créditos ficam em [`src/data/photos.ts`](../../src/data/photos.ts)
e aparecem na galeria, no lightbox e na seção de créditos de `/galeria`.

| Autor | Licença | Assunto |
| --- | --- | --- |
| Rafael Deminicis | CC BY-SA 4.0 | Fachada e arquibancada do Aryzão (5), capela de Santo Antônio, igreja da Lapa, centro e Mercado Municipal |
| Leonardo Berenger | CC BY-SA 4.0 | Aryzão lotado à noite, num Goyta-Cano |
| Junius | Domínio público | Elencos de 2007, 2011 e 2014 |
| Rogério Nunes | CC BY-SA 4.0 | Elenco do acesso à Série A de 2018 |
| Rodolfo18 | CC BY-SA 3.0 | Time em campo, 2012 |
| Halleypo | CC BY-SA 3.0 | **Campos dos Goytacazes em 1941** (Lagoa de Cima) |
| Marcello Casal Jr. / Agência Brasil | CC BY 3.0 BR | Retrato de Bebeto |
| Mark Scott Johnson | CC BY 2.0 | Fachada do Maracanã |
| Wellington O. P. Ramos | CC BY-SA 4.0 | Lucho Nizzo com a camisa do Goytacaz, 2020 |

### Lugares que a história cita

Três fotos foram escolhidas porque o texto do site fala exatamente delas:

- **Capela de Santo Antônio, em Guarus** — o primeiro campo do clube, em 1912,
  ficava defronte a ela
- **Igreja de Nossa Senhora da Lapa** — a Rua do Gás, do campo iluminado em 1930,
  fica nesse bairro
- **Lagoa de Cima em 1941** — a única fotografia de época disponível, usada no
  capítulo do tetracampeonato (1940–1943)

**CC BY-SA exige atribuição.** Não remova os créditos da interface.

⚠️ **Verificar antes de publicar:** `goyta-cano.webp` — usada no hero da Home —
traz marca d'água de "Olhos de Águia Produções", nome diferente do creditado no
Commons. A licença declarada lá é CC BY-SA 4.0, mas vale confirmar a autorização
com o clube ou com o fotógrafo antes de ir a produção.

### Regra de legenda

Todas as fotos livres disponíveis são de 2007 em diante. Uma foto recente **nunca**
pode ilustrar um capítulo histórico sem que a legenda diga a data real. Por isso a
fachada de hoje aparece no capítulo de 1938 com a legenda "A fachada na Rua dos
Goytacazes, **hoje**" — e o recorde de público de 1978 continua ilustrado por
composição gráfica, porque não existe foto livre daquele jogo.

## 2. Acervo enviado — `/acervo`

Doze fotografias entregues fora do Commons (via documento .docx): torcida com
surdo em foto antiga, arquibancada com fumaça azul, jogadores agradecendo à
torcida, camisa retrô.

⚠️ **A autoria destas fotos não está confirmada.** Cinco delas chegaram como
captura de tela do Instagram — a moldura da interface foi recortada na
importação (`scripts/import-acervo.mjs`), mas recortar não resolve licença.
Elas estão publicadas com o crédito declarado como pendente na galeria.

Antes de tratar o site como definitivo: levantar quem fotografou cada uma,
registrar em `src/data/photos.ts` e substituir o texto "Acervo enviado —
autoria a confirmar" em `src/data/gallery.ts`.

Limitação técnica: o Word recomprimiu as imagens na inserção, então nenhuma
passa de ~600 px de largura. Servem bem como cartão de galeria e bloco médio,
mas não como imagem de tela cheia. Os originais, se existirem, valem a pena.

## 3. Substituindo uma imagem

1. Exporte em **WebP** (ou AVIF), respeitando a proporção do arquivo atual.
2. Salve em `/photos` (licença livre) ou `/acervo` (material do clube).
3. Aponte o `src` no arquivo de dados correspondente (`src/data/history.ts`,
   `gallery.ts`, `stadium.ts`, `photos.ts`) e acrescente o crédito.

`next/image` cuida de `srcset`, dimensionamento responsivo e lazy loading.
Mantenha cada arquivo abaixo de ~600 KB.

## 4. Escudo — `/brand/escudo.webp`

Escudo **oficial** do Goytacaz Futebol Clube, em domínio público, obtido no
Wikimedia Commons (`File:Goytacaz_Futebol_Clube.png`). Gera também o favicon
(`src/app/icon.png`) e o ícone de toque (`public/apple-icon.png`).

O componente [`Crest`](../../src/components/ui/Crest.tsx) nunca recorta, deforma
ou recolore o escudo — apenas escala.

## Direitos

Fotografias jornalísticas e imagens de terceiros que **não** estejam sob licença
livre exigem autorização do detentor dos direitos antes da publicação. Não
adicione imagens obtidas em buscadores sem verificar a licença na fonte original.
