import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";
import { getNoticias } from "@/data/news";

export const metadata: Metadata = {
  title: "Notícias",
  description:
    "Registros e comunicados do Goytacaz Futebol Clube. Espaço preparado para a redação oficial do clube.",
  alternates: { canonical: "/noticias" },
};

const formatador = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <>
      <PageHero
        indice="07"
        secao="Notícias"
        titulo="O que está acontecendo"
        intro="Cobertura do que o Goytacaz vive agora, apurada na imprensa de Campos dos Goytacazes e no ge.globo. Cada item traz o veículo de origem — e os registros históricos vêm marcados como arquivo."
      />

      <section className="py-16 md:py-24" aria-labelledby="lista-noticias">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <h2 id="lista-noticias" className="sr-only">
            Lista de publicações
          </h2>

          <ul className="border-t border-white/12">
            {noticias.map((n, i) => (
              <li key={n.slug} className="border-b border-white/12">
                <Reveal index={i} className="grid gap-4 py-9 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <time dateTime={n.data} className="t-mono block text-anil-300">
                      {formatador.format(new Date(n.data))}
                    </time>
                    <p className="t-mono mt-2 text-fumaca">{n.categoria}</p>
                  </div>

                  <div className="md:col-span-9">
                    {n.arquivo ? (
                      <p className="t-mono mb-3 inline-block border border-anil-500/70 px-2.5 py-1 text-anil-300">
                        Registro de arquivo
                      </p>
                    ) : n.destaque ? (
                      <p className="t-mono mb-3 inline-block bg-branco px-2.5 py-1 text-anil-950">
                        Destaque
                      </p>
                    ) : null}

                    <h3
                      className={`font-display leading-tight ${
                        n.destaque
                          ? "text-[clamp(1.75rem,3.4vw,2.9rem)]"
                          : "text-[clamp(1.35rem,2.4vw,2rem)]"
                      }`}
                    >
                      {n.titulo}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-branco/65">
                      {n.resumo}
                    </p>

                    <p className="t-mono mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-fumaca">
                      {n.fonte ? <span>Fonte: {n.fonte}</span> : null}
                      {n.url ? (
                        <a
                          href={n.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="-my-2 inline-flex min-h-11 items-center py-2 text-anil-300 underline-offset-4 transition-colors hover:text-branco hover:underline"
                        >
                          Ler a matéria ↗
                        </a>
                      ) : null}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="—">Nota editorial</Label>
          <div className="prosa mt-6 max-w-2xl">
            <p>
              Nenhuma notícia foi inventada para preencher esta página. Cada item
              corresponde a uma publicação real, com o veículo de origem declarado.
              Última apuração: 20 de agosto de 2026, em Folha da Manhã, GF Esporte e
              ge.globo.
            </p>
            <p>
              A camada de dados desta seção já expõe a função <code>getNoticias()</code>{" "}
              como ponto único de leitura. Substituí-la por uma chamada a um CMS ou a
              uma API não exige nenhuma mudança na interface.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
