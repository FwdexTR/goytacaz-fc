import Marquee from "@/components/ui/Marquee";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import Crest from "@/components/ui/Crest";
import { club } from "@/data/club";

/** Fechamento da Home: faixa de apelidos + convite à história. */
export default function Chamado() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="chamado-titulo">
      <Marquee
        itens={[...club.apelidos, "Desde 1912"]}
        className="border-y border-white/10 text-branco/50"
      />

      <div className="mx-auto max-w-[110rem] px-5 pt-24 text-center md:px-10">
        <Reveal className="flex justify-center">
          <Crest size={96} decorativo />
        </Reveal>

        <Reveal index={1}>
          <h2 id="chamado-titulo" className="font-display t-xl mx-auto mt-10 max-w-4xl">
            A história continua sendo escrita
          </h2>
        </Reveal>

        <Reveal index={2}>
          <p className="lede mx-auto mt-6 max-w-xl">
            Cada temporada acrescenta uma linha. Cada arquibancada cheia, um parágrafo.
            Entre na história do {club.nome}.
          </p>
        </Reveal>

        <Reveal index={3} className="mt-12 flex flex-wrap justify-center gap-4">
          <Magnetic
            href="/historia"
            className="t-mono group inline-flex items-center gap-3 bg-branco px-8 py-4 text-anil-950 transition-colors hover:bg-anil-300"
          >
            Percorrer a história
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Magnetic>
          <Magnetic
            href="/galeria"
            className="t-mono inline-flex items-center gap-3 border border-white/25 px-8 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
          >
            Ver o acervo
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
