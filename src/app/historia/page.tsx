import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/history/Timeline";
import Marquee from "@/components/ui/Marquee";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { eras } from "@/data/history";

export const metadata: Metadata = {
  title: "História",
  description:
    "De 20 de agosto de 1912 aos dias de hoje: a linha do tempo do Goytacaz Futebol Clube, capítulo por capítulo — fundação, o Aryzão, os títulos, o Maracanã e o Campeonato Brasileiro.",
  alternates: { canonical: "/historia" },
};

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        indice="03"
        secao="História"
        titulo="Uma história que atravessa gerações"
        intro="Há histórias que começam num campo. Esta começou numa recusa, num pedido de barco negado às margens do Paraíba do Sul. O que veio depois foram mais de cem anos de futebol azul e branco em Campos dos Goytacazes."
      >
        <Reveal index={3} className="mt-12">
          <p className="t-mono text-fumaca">Eras percorridas</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {eras.map((e) => (
              <li key={e} className="font-display text-[clamp(1.1rem,1.8vw,1.5rem)] text-branco/75">
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      <Timeline />

      <section className="py-24 text-center md:py-32">
        <Marquee itens={["1912", "Campos dos Goytacazes", "Azul e branco"]} className="border-y border-white/10 text-branco/50" />
        <div className="mx-auto max-w-[110rem] px-5 pt-20 md:px-10">
          <h2 className="font-display t-lg mx-auto max-w-3xl">
            O próximo capítulo ainda não foi escrito
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">
            Esta linha do tempo foi construída para crescer. Novos capítulos, documentos
            e fotografias entram sem que a interface precise ser refeita.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic
              href="/conquistas"
              className="t-mono inline-flex items-center gap-3 border border-white/25 px-8 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
            >
              Ver as conquistas
            </Magnetic>
            <Magnetic
              href="/aryzao"
              className="t-mono inline-flex items-center gap-3 border border-white/25 px-8 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
            >
              Conhecer o Aryzão
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  );
}
