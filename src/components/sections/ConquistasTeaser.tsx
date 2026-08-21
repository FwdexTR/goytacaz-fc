import Label from "@/components/ui/Label";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { conquistas } from "@/data/achievements";

export default function ConquistasTeaser() {
  const destaques = conquistas.filter((c) => c.destaque);

  return (
    <section
      className="relative border-y border-white/10 py-24 md:py-36"
      aria-labelledby="conquistas-teaser-titulo"
    >
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <Label indice="07">Conquistas</Label>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="conquistas-teaser-titulo" className="font-display t-xl max-w-2xl">
            Taças que ficaram na cidade
          </h2>
          <Magnetic
            href="/conquistas"
            className="t-mono group inline-flex shrink-0 items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
          >
            Palmarés completo
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Magnetic>
        </div>

        <ul className="mt-16 space-y-0 border-t border-white/12">
          {destaques.map((c, i) => (
            <li key={c.id} className="border-b border-white/12">
              <Reveal
                index={i}
                className="group grid items-baseline gap-3 py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.85] text-anil-300 md:col-span-2">
                  {c.total}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-display text-[clamp(1.35rem,2.4vw,2rem)] leading-tight">
                    {c.competicao}
                  </h3>
                  <p className="t-mono mt-3 text-fumaca">
                    {c.anos.slice(0, 8).join(" · ")}
                    {c.anos.length > 8 ? " · …" : ""}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-branco/60 md:col-span-4">
                  {c.contexto}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
