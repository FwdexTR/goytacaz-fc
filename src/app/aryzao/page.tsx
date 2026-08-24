import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Counter from "@/components/ui/Counter";
import { estadio } from "@/data/stadium";
import { fotos } from "@/data/photos";
import { SITE_URL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Aryzão",
  description:
    "O Estádio Ary de Oliveira e Souza, o Aryzão: inaugurado em 9 de janeiro de 1938 na Rua dos Goytacazes, casa do Goytacaz Futebol Clube em Campos dos Goytacazes.",
  alternates: { canonical: "/aryzao" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "StadiumOrArena",
  name: estadio.nome,
  alternateName: estadio.apelido,
  url: `${SITE_URL}/aryzao`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua dos Goytacazes, 331",
    addressLocality: "Campos dos Goytacazes",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: estadio.geo.lat,
    longitude: estadio.geo.lng,
  },
};

export default function AryzaoPage() {
  return (
    <>
      <PageHero
        indice="05"
        secao="A casa"
        titulo="Aryzão"
        intro={estadio.intro}
      />

      {/* Composição em tela cheia */}
      <section aria-label="O estádio" className="relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden grain">
          <Image
            src={fotos.aryzaoNoite.src}
            alt={fotos.aryzaoNoite.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anil-950 via-anil-950/15 to-anil-950/25" />
        </div>

        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <dl className="grid gap-y-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4 md:py-20">
            {estadio.fatos.map((f, i) => (
              <Reveal key={f.rotulo} index={i} as="div" className="lg:pr-8">
                <dt className="t-mono text-anil-300">{f.rotulo}</dt>
                <dd>
                  <p className="font-display mt-3 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none">
                    {f.valor}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-branco/60">{f.texto}</p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Recorde de público */}
      <section className="py-24 md:py-32" aria-labelledby="recorde-titulo">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <div className="grid items-center gap-x-16 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <Label indice="—">Recorde</Label>
              <p className="font-display t-monumental mt-6 leading-[0.82] tabular-nums">
                <Counter to={14996} milhar duracao={2400} />
              </p>
              <h2 id="recorde-titulo" className="font-display t-md mt-4">
                pessoas no Aryzão
              </h2>
              <p className="lede mt-6 max-w-lg">
                {estadio.recorde.jogo}, em {estadio.recorde.ano}, pelo Campeonato
                Brasileiro. O maior público da história do estádio — no mesmo ano em que
                o clube conquistou o Campeonato Fluminense.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <Plate
                src="/images/acervo/torcida-arquivo.webp"
                alt="Torcedores do Goytacaz reunidos diante de um ônibus, com surdo e camisas do clube, em fotografia antiga"
                legenda="Torcida do Goytacaz em fotografia de arquivo, sem data registrada"
                ratio="4 / 5"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galeria do estádio */}
      <section className="border-y border-white/10 py-24 md:py-32" aria-labelledby="galeria-estadio">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="—">Acervo</Label>
          <h2 id="galeria-estadio" className="font-display t-xl mt-6">
            A casa por dentro
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {estadio.galeria.map((g, i) => (
              <Plate
                key={g.src}
                src={g.src}
                alt={g.alt}
                legenda={g.legenda}
                ratio={i === 1 ? "3 / 4" : "4 / 5"}
                parallax={30}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Localização + notas de arquivo */}
      <section className="py-24 md:py-32" aria-labelledby="local-titulo">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Label indice="—">Onde fica</Label>
              <h2 id="local-titulo" className="font-display t-lg mt-6">
                {estadio.nome}
              </h2>
              <address className="lede mt-6 not-italic">{estadio.endereco}</address>
              <p className="t-mono mt-4 text-fumaca">{estadio.gramado}</p>

              <a
                href={`https://www.openstreetmap.org/?mlat=${estadio.geo.lat}&mlon=${estadio.geo.lng}#map=16/${estadio.geo.lat}/${estadio.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="t-mono group mt-8 inline-flex items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                Ver no mapa
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Label indice="—">Notas de arquivo</Label>
              <ul className="mt-6 space-y-6">
                {estadio.notas.map((n) => (
                  <li key={n} className="border-l border-anil-500/60 pl-5">
                    <p className="text-sm leading-relaxed text-branco/60">{n}</p>
                  </li>
                ))}
              </ul>
              <p className="t-mono mt-8 text-fumaca">
                Preferimos registrar a divergência a publicar um número sem lastro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
