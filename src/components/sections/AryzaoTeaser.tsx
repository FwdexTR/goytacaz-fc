"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import useMotionOK from "@/lib/useMotionOK";
import { useRef } from "react";
import Label from "@/components/ui/Label";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { estadio } from "@/data/stadium";
import { fotos } from "@/data/photos";

/** Bloco de tela cheia dedicado ao estádio, com parallax profundo. */
export default function AryzaoTeaser() {
  const ref = useRef<HTMLElement>(null);
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yTexto = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] items-end overflow-hidden grain"
      aria-labelledby="aryzao-titulo"
    >
      <motion.div
        className="absolute inset-x-0 -inset-y-[14%] -z-10"
        style={ok ? { y } : undefined}
      >
        <Image
          src={fotos.fachadaFrontal.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-anil-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-anil-950 via-anil-950/60 to-anil-950/75" />
      </motion.div>

      <motion.div
        style={ok ? { y: yTexto } : undefined}
        className="mx-auto w-full max-w-[110rem] px-5 pb-20 pt-32 md:px-10 md:pb-28"
      >
        <Label indice="05">A casa</Label>

        <h2 id="aryzao-titulo" className="font-display t-monumental mt-6 leading-[0.82]">
          Aryzão
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6 lg:col-span-5">
            <p className="lede">{estadio.intro}</p>
            <p className="t-mono mt-6 text-fumaca">{estadio.nome}</p>
          </Reveal>

          <div className="md:col-span-6 md:col-start-8">
            <dl className="grid grid-cols-2 gap-y-8">
              {estadio.fatos.slice(0, 4).map((f, i) => (
                <Reveal key={f.rotulo} index={i} as="div">
                  <dt className="t-mono text-anil-300">{f.rotulo}</dt>
                  <dd className="font-display mt-2 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-none">
                    {f.valor}
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal index={4} className="mt-10">
              <Magnetic
                href="/aryzao"
                className="t-mono group inline-flex items-center gap-3 border border-white/25 px-6 py-4 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                Visitar o Aryzão
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
