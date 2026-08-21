import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import Counter from "@/components/ui/Counter";
import { conquistas, feitos, totalTitulos } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Conquistas",
  description:
    "O palmarés do Goytacaz Futebol Clube: Campeonato Fluminense, os vinte títulos campistas, as divisões do Campeonato Carioca e os feitos históricos do clube.",
  alternates: { canonical: "/conquistas" },
};

const escopos = ["Estadual", "Municipal", "Regional", "Base"] as const;

export default function ConquistasPage() {
  return (
    <>
      <PageHero
        indice="04"
        secao="Conquistas"
        titulo="Taças que ficaram na cidade"
        intro="Do primeiro Campeonato Campista da história, em 1914, à campanha invicta de 1955 e ao retorno à elite carioca em 2017. Todos os títulos listados aqui têm registro público — nenhum foi acrescentado sem fonte."
      >
        <Reveal index={3} className="mt-14 flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <p className="font-display text-[clamp(3rem,7vw,6rem)] leading-none">
              <Counter to={totalTitulos} />
            </p>
            <p className="t-mono mt-3 text-anil-300">Títulos registrados</p>
          </div>
          <div>
            <p className="font-display text-[clamp(3rem,7vw,6rem)] leading-none">
              <Counter to={conquistas.length} />
            </p>
            <p className="t-mono mt-3 text-anil-300">Competições diferentes</p>
          </div>
        </Reveal>
      </PageHero>

      {escopos.map((escopo, bloco) => {
        const lista = conquistas.filter((c) => c.escopo === escopo);
        if (!lista.length) return null;

        return (
          <section
            key={escopo}
            className="border-b border-white/10 py-20 md:py-28"
            aria-labelledby={`escopo-${escopo}`}
          >
            <div className="mx-auto max-w-[110rem] px-5 md:px-10">
              <Label indice={String(bloco + 1).padStart(2, "0")}>{escopo}</Label>
              <h2 id={`escopo-${escopo}`} className="sr-only">
                Títulos de âmbito {escopo.toLowerCase()}
              </h2>

              <ul className="mt-12 border-t border-white/12">
                {lista.map((c, i) => (
                  <li key={c.id} className="border-b border-white/12">
                    <Reveal index={i} className="grid gap-4 py-9 md:grid-cols-12 md:gap-8">
                      <p className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.85] text-anil-300 md:col-span-2">
                        {c.total}
                        <span className="sr-only"> título{c.total > 1 ? "s" : ""}</span>
                      </p>

                      <div className="md:col-span-6">
                        <h3 className="font-display text-[clamp(1.3rem,2.3vw,1.9rem)] leading-tight">
                          {c.competicao}
                        </h3>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {c.anos.map((a) => (
                            <li
                              key={a}
                              className="t-mono border border-white/20 px-2.5 py-1 text-branco/75"
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {c.contexto ? (
                        <p className="text-sm leading-relaxed text-branco/60 md:col-span-4">
                          {c.contexto}
                        </p>
                      ) : null}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Feitos que não são títulos */}
      <section className="py-24 md:py-32" aria-labelledby="feitos-titulo">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="05">Feitos</Label>
          <h2 id="feitos-titulo" className="font-display t-xl mt-6 max-w-3xl">
            Nem tudo que fica na história é taça
          </h2>

          <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {feitos.map((f, i) => (
              <li key={f.ano + f.titulo} className="bg-anil-950">
                <Reveal index={i} className="flex h-full flex-col p-7 md:p-8">
                  <p className="font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-none text-anil-300">
                    {f.ano}
                  </p>
                  <h3 className="mt-4 text-base font-medium leading-snug">{f.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-branco/60">{f.texto}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <p className="t-mono mt-12 max-w-2xl text-fumaca">
            Fontes: registros da Federação de Futebol do Estado do Rio de Janeiro,
            enciclopédias de futebol e imprensa de Campos dos Goytacazes.
          </p>
        </div>
      </section>
    </>
  );
}
