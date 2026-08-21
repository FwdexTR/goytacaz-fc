import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Crest from "@/components/ui/Crest";
import { club, contato } from "@/data/club";
import { estadio } from "@/data/stadium";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Goytacaz Futebol Clube. Endereço, canais oficiais e redes sociais do clube em Campos dos Goytacazes.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        indice="08"
        secao="Contato"
        titulo="Fale com o clube"
        intro="Sede e estádio ficam no mesmo endereço, na Rua dos Goytacazes. Para imprensa, sócios, patrocínio ou categorias de base, use os canais abaixo."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <div className="grid gap-x-16 gap-y-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Label indice="—">Endereço</Label>
              <address className="mt-6 not-italic">
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight">
                  {estadio.nome}
                </p>
                <p className="lede mt-4">{contato.endereco}</p>
                <p className="t-mono mt-2 text-fumaca">CEP {contato.cep}</p>
              </address>

              <a
                href={`https://www.openstreetmap.org/?mlat=${estadio.geo.lat}&mlon=${estadio.geo.lng}#map=16/${estadio.geo.lat}/${estadio.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="t-mono group mt-8 inline-flex items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                Abrir no mapa
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Label indice="—">Canais</Label>

              <dl className="mt-6 border-t border-white/12">
                {contato.redes.map((r, i) => (
                  <Reveal
                    key={r.nome}
                    index={i}
                    className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/12 py-6"
                  >
                    <dt className="t-mono text-fumaca">
                      {r.nome}
                      {r.detalhe ? (
                        <span className="ml-3 normal-case tracking-normal text-branco/45">
                          {r.detalhe}
                        </span>
                      ) : null}
                    </dt>
                    <dd>
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-[clamp(1.15rem,2vw,1.6rem)] underline-offset-4 transition-colors hover:text-anil-300 hover:underline"
                      >
                        Abrir perfil ↗
                      </a>
                    </dd>
                  </Reveal>
                ))}
              </dl>

              <p className="t-mono mt-8 max-w-lg text-fumaca">{contato.aviso}</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-branco/55">
                {contato.naoOficial}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 text-center md:py-32">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Reveal className="flex justify-center">
            <Crest size={80} decorativo />
          </Reveal>
          <p className="font-editorial mx-auto mt-8 max-w-xl text-[clamp(1.25rem,2.4vw,1.9rem)] leading-snug italic text-branco/80">
            {club.frase}
          </p>
          <p className="t-mono mt-6 text-fumaca">
            {club.cidade} — {club.estado} · desde {club.fundacaoExtenso}
          </p>
        </div>
      </section>
    </>
  );
}
