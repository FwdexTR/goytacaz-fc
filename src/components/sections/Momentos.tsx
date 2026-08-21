"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMotionOK from "@/lib/useMotionOK";
import Label from "@/components/ui/Label";
import { momentos } from "@/data/moments";
import { EASE } from "@/lib/motion";

/**
 * Lista editorial de momentos históricos.
 * No desktop, passar o cursor sobre a linha revela a imagem em um painel fixo.
 * No mobile (e por toque/teclado), a mesma linha expande a imagem no fluxo —
 * o hover nunca é o único caminho para o conteúdo.
 */
export default function Momentos() {
  const [ativo, setAtivo] = useState<string | null>(null);
  const [aberto, setAberto] = useState<string | null>(null);
  const ok = useMotionOK();
  const atual = momentos.find((m) => m.id === ativo);

  return (
    <section className="relative py-24 md:py-36" aria-labelledby="momentos-titulo">
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <Label indice="06">Momentos</Label>
        <h2 id="momentos-titulo" className="font-display t-xl mt-6 max-w-3xl">
          Momentos que fizeram história
        </h2>

        <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-16">
          <ul className="border-t border-white/12 lg:col-span-7">
            {momentos.map((m) => {
              const expandido = aberto === m.id;
              return (
                <li key={m.id} className="border-b border-white/12">
                  <button
                    type="button"
                    onMouseEnter={() => setAtivo(m.id)}
                    onMouseLeave={() => setAtivo(null)}
                    onFocus={() => setAtivo(m.id)}
                    onBlur={() => setAtivo(null)}
                    onClick={() => setAberto(expandido ? null : m.id)}
                    aria-expanded={expandido}
                    className="group flex w-full items-baseline gap-5 py-6 text-left md:gap-8 md:py-8"
                  >
                    <span className="font-display shrink-0 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none text-anil-300">
                      {m.ano}
                    </span>
                    <span className="flex-1">
                      <span className="font-display block text-[clamp(1.5rem,3.4vw,3rem)] leading-[1.02] transition-transform duration-500 md:group-hover:translate-x-3">
                        {m.titulo}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-relaxed text-branco/60 lg:hidden">
                        {m.texto}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-anil-300 transition-transform duration-500 lg:hidden ${
                        expandido ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Caminho por toque/teclado: a imagem entra no fluxo. */}
                  <AnimatePresence initial={false}>
                    {expandido && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: ok ? 0.5 : 0, ease: EASE }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="relative mb-7 aspect-[16/10] w-full overflow-hidden grain">
                          <Image
                            src={m.imagem.src}
                            alt={m.imagem.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Painel de imagem — só no desktop, acompanhando o hover/foco. */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden bg-anil-900 grain">
                <AnimatePresence mode="wait">
                  {atual ? (
                    <motion.div
                      key={atual.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: ok ? 1.06 : 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: ok ? 0.6 : 0, ease: EASE }}
                    >
                      <Image
                        src={atual.imagem.src}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="40vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ) : (
                    <motion.p
                      key="vazio"
                      className="t-mono absolute inset-0 flex items-center justify-center text-center text-fumaca"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Percorra a lista
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <p className="mt-4 min-h-[3.5rem] max-w-sm text-sm leading-relaxed text-branco/60">
                {atual?.texto ?? ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
