"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/ui/Reveal";
import { capitulos } from "@/data/history";
import { EASE } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";

/**
 * Linha do tempo narrativa.
 *
 * O ano e a era ficam fixos na coluna da esquerda e trocam conforme o capítulo
 * em foco entra na tela — a sensação é de uma exposição em que a placa muda
 * enquanto você caminha. No mobile, o mesmo indicador vira uma barra fixa no
 * topo, sem ocupar a largura da leitura.
 */
export default function Timeline() {
  const [atual, setAtual] = useState(0);
  const [expandido, setExpandido] = useState<string | null>(null);
  const itens = useRef<(HTMLElement | null)[]>([]);
  const ok = useMotionOK();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        // O capítulo "em foco" é o mais próximo do centro da tela.
        const visiveis = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visiveis.length) return;
        const i = itens.current.indexOf(visiveis[0].target as HTMLElement);
        if (i >= 0) setAtual(i);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
    );
    itens.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const capitulo = capitulos[atual];

  return (
    <div className="relative">
      {/* Indicador fixo — mobile */}
      <div className="sticky top-[var(--header-h)] z-30 border-b border-white/10 bg-anil-950/85 backdrop-blur-lg lg:hidden">
        <div className="flex items-baseline gap-4 px-5 py-3">
          <span className="font-display text-3xl leading-none text-anil-300">
            {capitulo.ano}
          </span>
          <span className="t-mono text-fumaca">{capitulo.era}</span>
        </div>
        <div
          aria-hidden="true"
          className="h-px w-full origin-left bg-anil-500 transition-transform duration-500"
          style={{ transform: `scaleX(${(atual + 1) / capitulos.length})` }}
        />
      </div>

      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Indicador fixo — desktop */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-[calc(var(--header-h)+4rem)] py-24">
              <p className="t-mono text-fumaca">Capítulo {atual + 1} de {capitulos.length}</p>

              <div className="relative mt-6 h-[9rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={capitulo.id + "-ano"}
                    className="font-display text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.85] tabular-nums"
                    initial={ok ? { y: 40, opacity: 0 } : false}
                    animate={{ y: 0, opacity: 1 }}
                    exit={ok ? { y: -40, opacity: 0 } : undefined}
                    transition={{ duration: ok ? 0.5 : 0, ease: EASE }}
                  >
                    {capitulo.ano}
                  </motion.p>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={capitulo.id + "-era"}
                  className="t-mono text-anil-300"
                  initial={ok ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={ok ? { opacity: 0 } : undefined}
                  transition={{ duration: ok ? 0.35 : 0 }}
                >
                  {capitulo.era}
                </motion.p>
              </AnimatePresence>

              {/* Régua de progresso da narrativa */}
              <ol className="mt-10 space-y-2.5">
                {capitulos.map((c, i) => (
                  <li key={c.id} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`block h-px transition-all duration-500 ${
                        i === atual ? "w-10 bg-anil-300" : "w-4 bg-white/25"
                      }`}
                    />
                    <a
                      href={`#${c.id}`}
                      className={`text-xs transition-colors ${
                        i === atual ? "text-branco" : "text-fumaca hover:text-branco"
                      }`}
                    >
                      {c.ano} — {c.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Capítulos */}
          <div className="lg:col-span-8">
            <ol>
              {capitulos.map((c, i) => {
                const aberto = expandido === c.id;
                return (
                  <li
                    key={c.id}
                    id={c.id}
                    ref={(el) => {
                      itens.current[i] = el;
                    }}
                    className="scroll-mt-32 border-b border-white/10 py-20 first:pt-14 md:py-28"
                  >
                    <article>
                      <div className="flex items-baseline gap-4">
                        <p className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-anil-300 lg:hidden">
                          {c.ano}
                        </p>
                        <p className="t-mono hidden text-fumaca lg:block">
                          {String(i + 1).padStart(2, "0")} · {c.era}
                        </p>
                      </div>

                      <h2 className="font-display mt-4 text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.02]">
                        {c.titulo}
                      </h2>

                      <p className="lede mt-6 max-w-2xl">{c.resumo}</p>

                      {c.destaques?.length ? (
                        <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5">
                          {c.destaques.map((d) => (
                            <div key={d.rotulo}>
                              <dt className="t-mono text-fumaca">{d.rotulo}</dt>
                              <dd className="font-display mt-1.5 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none">
                                {d.valor}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      ) : null}

                      {c.imagem ? (
                        <Plate
                          className="mt-10"
                          src={c.imagem.src}
                          alt={c.imagem.alt}
                          legenda={c.imagem.legenda}
                          ratio="16 / 10"
                          parallax={40}
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      ) : null}

                      {c.detalhe ? (
                        <div className="mt-8">
                          <button
                            type="button"
                            onClick={() => setExpandido(aberto ? null : c.id)}
                            aria-expanded={aberto}
                            aria-controls={`detalhe-${c.id}`}
                            className="t-mono group -my-2 inline-flex min-h-11 items-center gap-3 py-2 text-anil-300 transition-colors hover:text-branco"
                          >
                            {aberto ? "Fechar" : "Ler mais"}
                            <span
                              aria-hidden="true"
                              className={`transition-transform duration-500 ${aberto ? "rotate-45" : ""}`}
                            >
                              +
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {aberto && (
                              <motion.div
                                id={`detalhe-${c.id}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: ok ? 0.5 : 0, ease: EASE }}
                                className="overflow-hidden"
                              >
                                <div className="prosa max-w-2xl pt-6">
                                  <p>{c.detalhe}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : null}

                      {c.nota ? (
                        <Reveal className="mt-8 max-w-2xl border-l border-anil-500/60 pl-5">
                          <p className="t-mono text-anil-300">Nota de arquivo</p>
                          <p className="mt-2 text-sm leading-relaxed text-branco/55">{c.nota}</p>
                        </Reveal>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
