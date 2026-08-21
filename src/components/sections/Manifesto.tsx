import Label from "@/components/ui/Label";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Plate from "@/components/ui/Plate";
import Magnetic from "@/components/ui/Magnetic";
import { pilares } from "@/data/club";
import { fotos } from "@/data/photos";

/** Bloco "O Clube" da Home — composição editorial em quatro tempos. */
export default function Manifesto() {
  return (
    <section id="o-clube" className="relative py-24 md:py-36" aria-labelledby="clube-titulo">
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <Label indice="02">O Clube</Label>

        <div className="mt-10 grid gap-x-16 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <TextReveal
              as="h2"
              id="clube-titulo"
              className="font-display t-xl"
              text="Azul e branco, de Campos para o Brasil"
            />
            <Reveal className="prosa mt-8 max-w-xl" index={1}>
              <p>
                O Goytacaz Futebol Clube não é um clube que a cidade adotou. É um clube
                que a cidade fundou, nomeou com o nome do próprio chão e carregou por
                mais de um século — em campeonatos campistas, no Maracanã, na primeira
                divisão do Campeonato Brasileiro e nas tardes comuns do Aryzão.
              </p>
              <p>
                Esta seção reúne o que o clube é. A História, com todos os capítulos,
                está logo adiante.
              </p>
            </Reveal>

            <Reveal index={2} className="mt-10">
              <Magnetic
                href="/clube"
                className="t-mono group inline-flex items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                Conhecer o clube
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Magnetic>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Plate
              src={fotos.elenco2014.src}
              alt={fotos.elenco2014.alt}
              legenda="O time perfilado no gramado, em 2014"
              ratio="4 / 3"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Quatro tempos do manifesto */}
        <ul className="mt-24 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((p, i) => (
            <li key={p.marca} className="bg-anil-950">
              <Reveal index={i} className="flex h-full flex-col p-7 md:p-9">
                <p className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] text-anil-300">
                  {p.marca}
                </p>
                <h3 className="mt-4 text-lg font-medium">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-branco/65">{p.texto}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
