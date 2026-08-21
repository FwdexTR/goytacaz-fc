"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import useMotionOK from "@/lib/useMotionOK";
import Label from "@/components/ui/Label";
import Magnetic from "@/components/ui/Magnetic";
import { capitulos } from "@/data/history";

/**
 * Faixa horizontal de eras, controlada pela rolagem vertical.
 * Em telas pequenas e sob movimento reduzido vira um carrossel por arraste
 * nativo — sem sequestrar o scroll de ninguém.
 */
export default function HistoriaTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useMotionOK();
  const cartoes = capitulos.filter((c) => c.imagem).slice(0, 8);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  const Cartao = ({ c, i }: { c: (typeof cartoes)[number]; i: number }) => (
    <article className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]">
      <div className="relative aspect-[4/5] overflow-hidden bg-anil-900 grain">
        <Image
          src={c.imagem!.src}
          alt={c.imagem!.alt}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover"
        />
        <p className="font-display absolute bottom-4 left-5 z-20 text-[clamp(2.5rem,4vw,4rem)] leading-none mix-blend-difference">
          {c.ano}
        </p>
      </div>
      <p className="t-mono mt-4 text-anil-300">{c.era}</p>
      <h3 className="mt-2 text-lg leading-snug">{c.titulo}</h3>
      <span className="sr-only">Capítulo {i + 1}</span>
    </article>
  );

  return (
    <section className="relative" aria-labelledby="historia-teaser-titulo">
      <div className="mx-auto max-w-[110rem] px-5 pt-24 md:px-10 md:pt-36">
        <Label indice="04">História</Label>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="historia-teaser-titulo" className="font-display t-xl max-w-2xl">
            Cento e treze anos, capítulo por capítulo
          </h2>
          <Magnetic
            href="/historia"
            className="t-mono group inline-flex shrink-0 items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
          >
            Ver a linha do tempo
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Magnetic>
        </div>
      </div>

      {!ok ? (
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 md:px-10">
          {cartoes.map((c, i) => (
            <div key={c.id} className="snap-start">
              <Cartao c={c} i={i} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Desktop: trilho controlado pela rolagem. */}
          <div ref={ref} className="relative hidden h-[280vh] lg:block">
            <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
              <motion.div style={{ x }} className="flex gap-8 pl-10 pr-[30vw]">
                {cartoes.map((c, i) => (
                  <Cartao key={c.id} c={c} i={i} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Mobile/tablet: arraste nativo com snap. */}
          <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-8 md:px-10 lg:hidden">
            {cartoes.map((c, i) => (
              <div key={c.id} className="snap-start">
                <Cartao c={c} i={i} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
