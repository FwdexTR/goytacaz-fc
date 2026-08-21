import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Magnetic from "@/components/ui/Magnetic";
import Crest from "@/components/ui/Crest";
import { club, pilares } from "@/data/club";
import { idolos, classicos } from "@/data/moments";
import { fotos, acervoEnviado } from "@/data/photos";

export const metadata: Metadata = {
  title: "O Clube",
  description:
    "Quem é o Goytacaz Futebol Clube: origem, identidade, cores, o nome que vem da terra e a relação com Campos dos Goytacazes.",
  alternates: { canonical: "/clube" },
};

export default function ClubePage() {
  return (
    <>
      <PageHero
        indice="02"
        secao="O Clube"
        titulo="O clube que a cidade fundou"
        intro={club.manifesto}
      />

      {/* Quatro tempos, em composição editorial alternada */}
      <section className="py-20 md:py-28" aria-label="Identidade do clube">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          {pilares.map((p, i) => (
            <article
              key={p.marca}
              className={`grid items-center gap-x-16 gap-y-8 border-b border-white/10 py-16 md:grid-cols-12 md:py-24 ${
                i % 2 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={`md:col-span-6 ${i % 2 ? "md:[direction:ltr]" : ""}`}>
                <p className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.9] text-anil-300">
                  {p.marca}
                </p>
                <h2 className="font-display mt-5 text-[clamp(1.5rem,2.8vw,2.25rem)] leading-tight">
                  {p.titulo}
                </h2>
                <Reveal className="prosa mt-6 max-w-xl">
                  <p>{p.texto}</p>
                </Reveal>
              </div>

              <div className={`md:col-span-5 md:col-start-8 ${i % 2 ? "md:[direction:ltr] md:col-start-1" : ""}`}>
                <Plate
                  src={
                    [
                      fotos.fachadaAngulo,
                      acervoEnviado.camisaRetro,
                      fotos.camposCentro,
                      fotos.aryzaoNoite,
                    ][i].src
                  }
                  alt={
                    [
                      fotos.fachadaAngulo,
                      acervoEnviado.camisaRetro,
                      fotos.camposCentro,
                      fotos.aryzaoNoite,
                    ][i].alt
                  }
                  ratio={i % 2 ? "4 / 5" : "3 / 4"}
                  parallax={40}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ídolos */}
      <section className="border-y border-white/10 bg-anil-900/30 py-24 md:py-32" aria-labelledby="idolos-titulo">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="—">Ídolos</Label>
          <h2 id="idolos-titulo" className="font-display t-xl mt-6 max-w-3xl">
            Nomes que saíram daqui
          </h2>

          <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {idolos.map((p, i) => (
              <li key={p.nome} className="bg-anil-950">
                <Reveal index={i} className="flex h-full flex-col p-8 md:p-10">
                  <p className="t-mono text-fumaca">{p.periodo}</p>
                  <h3 className="font-display mt-4 text-[clamp(1.6rem,2.6vw,2.25rem)] leading-none">
                    {p.nome}
                  </h3>
                  <p className="font-editorial mt-2 text-lg text-anil-300 italic">
                    {p.epiteto}
                  </p>

                  {/* Retrato só existe para quem tem imagem de licença livre. */}
                  {p.foto ? (
                    <figure className="mt-6">
                      <div className="relative aspect-[3/4] w-full max-w-[13rem] overflow-hidden bg-anil-900 grain">
                        <Image
                          src={p.foto.src}
                          alt={p.foto.alt}
                          fill
                          sizes="(max-width: 768px) 60vw, 14rem"
                          className="object-cover object-top"
                        />
                      </div>
                      <figcaption className="t-mono mt-2 text-fumaca">
                        Foto: {p.foto.credito}
                      </figcaption>
                    </figure>
                  ) : null}

                  <p className="mt-5 text-sm leading-relaxed text-branco/65">{p.texto}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clássicos */}
      <section className="py-24 md:py-32" aria-labelledby="classicos-titulo">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="—">Clássicos</Label>
          <h2 id="classicos-titulo" className="font-display t-xl mt-6 max-w-3xl">
            Rivalidades que movem a cidade
          </h2>

          <dl className="mt-14 border-t border-white/12">
            {classicos.map((c, i) => (
              <div key={c.nome} className="border-b border-white/12">
                <Reveal index={i} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                  <dt className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight md:col-span-5">
                    {c.nome}
                  </dt>
                  <dd className="md:col-span-7">
                    <p className="t-mono text-anil-300">{c.rival}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-branco/60">
                      {c.texto}
                    </p>
                  </dd>
                </Reveal>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 text-center md:py-32">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Reveal className="flex justify-center">
            <Crest size={88} decorativo />
          </Reveal>
          <h2 className="font-display t-lg mx-auto mt-10 max-w-2xl">
            A história inteira, capítulo por capítulo
          </h2>
          <div className="mt-10 flex justify-center">
            <Magnetic
              href="/historia"
              className="t-mono group inline-flex items-center gap-3 bg-branco px-8 py-4 text-anil-950 transition-colors hover:bg-anil-300"
            >
              Percorrer a história
              <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
