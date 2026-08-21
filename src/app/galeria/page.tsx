import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Label from "@/components/ui/Label";
import { creditos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "O acervo visual do Goytacaz Futebol Clube: o Aryzão, a torcida, os elencos e os momentos marcantes do azul e branco de Campos dos Goytacazes.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        indice="06"
        secao="Galeria"
        titulo="O acervo do azul e branco"
        intro="Fotografias do Aryzão, dos elencos e da torcida, ao lado de composições gráficas para as décadas sem registro fotográfico livre. Amplie qualquer registro e use as setas do teclado para percorrer a coleção."
      />

      <section className="py-16 md:py-24" aria-label="Acervo de imagens">
        <GalleryGrid />
      </section>

      {/* Créditos — exigência das licenças CC BY-SA e boa prática com o acervo */}
      <section
        className="border-t border-white/10 py-20 md:py-28"
        aria-labelledby="creditos-titulo"
      >
        <div className="mx-auto max-w-[110rem] px-5 md:px-10">
          <Label indice="—">Créditos</Label>
          <h2 id="creditos-titulo" className="font-display t-lg mt-6 max-w-2xl">
            De onde vêm estas imagens
          </h2>

          <div className="mt-8 grid gap-x-16 gap-y-10 md:grid-cols-12">
            <div className="prosa md:col-span-5">
              <p>
                As fotografias deste site vêm do Wikimedia Commons, em domínio
                público ou sob licença Creative Commons. A atribuição abaixo é
                condição de uso das licenças CC BY-SA — mantenha-a visível.
              </p>
              <p>
                As peças em SVG são composições gráficas criadas para este projeto.
                Elas ocupam o lugar do acervo histórico nas décadas em que não há
                registro fotográfico de licença livre, e podem ser substituídas
                pelo material do clube sem mudança de interface.
              </p>
            </div>

            <ul className="md:col-span-7">
              {creditos.map((c) => (
                <li
                  key={c.src}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-white/12 py-4"
                >
                  <span className="text-sm text-branco/80">{c.autor}</span>
                  <span className="flex items-baseline gap-4">
                    <span className="t-mono text-fumaca">{c.licenca}</span>
                    <a
                      href={c.fonte}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-mono text-anil-300 underline-offset-4 transition-colors hover:text-branco hover:underline"
                    >
                      Ver no Commons ↗
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
