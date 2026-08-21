"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Crest from "@/components/ui/Crest";
import Counter from "@/components/ui/Counter";
import { EASE } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";
import { fotos } from "@/data/photos";

const ANO_FUNDACAO = 1912;
const LINHAS = ["O mais querido", "de Campos"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ok = useMotionOK();
  const anoAtual = new Date().getFullYear();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // As faixas são constantes: trocar o intervalo de saída de um `useTransform`
  // depois da montagem não reprocessa o valor atual, e a camada fica congelada.
  // O movimento é ligado/desligado na aplicação do `style`, não na faixa.
  const yFundo = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const escala = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacidade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /** Props de entrada — inertes quando o movimento está desligado. */
  const entra = (delay: number, y = 12) =>
    ok
      ? {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        }
      : {};

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[var(--header-h)] grain"
      aria-labelledby="hero-titulo"
    >
      {/* Camada de imagem — zoom lentíssimo + parallax na saída */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={ok ? { y: yFundo, scale: escala } : undefined}
      >
        <Image
          src={fotos.aryzaoNoite.src}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className={`object-cover ${ok ? "animate-[respiro_28s_ease-in-out_infinite_alternate]" : ""}`}
        />
        {/* Véu duplo: o texto precisa de contraste sobre a fotografia clara do
            gramado iluminado, e o azul profundo devolve a imagem à paleta. */}
        <div className="absolute inset-0 bg-anil-950/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-anil-950/85 via-anil-950/55 to-anil-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-anil-950/80 via-anil-950/20 to-transparent" />
      </motion.div>

      <motion.div
        key={ok ? "on" : "off"}
        style={ok ? { opacity: opacidade } : undefined}
        className="flex flex-1 flex-col justify-between"
      >
        {/* Topo */}
        <div className="mx-auto flex w-full max-w-[110rem] items-start justify-between px-5 pt-8 md:px-10 md:pt-12">
          <motion.p className="t-mono max-w-[16rem] text-anil-300 md:max-w-none" {...entra(0.15)}>
            Fundado em 20.08.1912
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Campos dos Goytacazes / RJ
          </motion.p>

          <motion.div
            initial={ok ? { opacity: 0, scale: 0.8, rotate: -8 } : undefined}
            animate={ok ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
            transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
          >
            <Crest size={64} decorativo />
          </motion.div>
        </div>

        {/* Título */}
        <div className="mx-auto w-full max-w-[110rem] px-5 md:px-10">
          <h1 id="hero-titulo" className="font-display t-hero">
            {/* O nome acessível é sempre a frase inteira; as linhas visíveis são
                apenas a diagramação dela. */}
            <span className="sr-only">
              Goytacaz Futebol Clube — o mais querido de Campos, desde 1912.
            </span>
            {ok ? (
              <>
                {LINHAS.map((linha, i) => (
                  <span
                    key={linha}
                    aria-hidden="true"
                    className="block overflow-hidden pb-[0.06em]"
                  >
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 1.1, ease: EASE, delay: 0.35 + i * 0.12 }}
                    >
                      {linha}
                    </motion.span>
                  </span>
                ))}
              </>
            ) : (
              LINHAS.map((linha) => (
                <span key={linha} aria-hidden="true" className="block">
                  {linha}
                </span>
              ))
            )}
          </h1>

          <motion.p
            className="font-editorial mt-6 max-w-xl text-[clamp(1.15rem,2vw,1.6rem)] leading-snug text-branco/75 italic"
            {...entra(0.75, 16)}
          >
            Há histórias que começam num campo. Esta começou numa recusa — e virou o
            time de uma cidade inteira.
          </motion.p>
        </div>

        {/* Base: contador de longevidade */}
        <motion.div
          className="mx-auto w-full max-w-[110rem] px-5 pb-8 md:px-10 md:pb-12"
          initial={ok ? { opacity: 0 } : undefined}
          animate={ok ? { opacity: 1 } : undefined}
          transition={{ duration: 1, ease: EASE, delay: 0.95 }}
        >
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6">
            <p className="font-display flex items-baseline gap-3 text-[clamp(2rem,5vw,4.5rem)] leading-none">
              <span>{ANO_FUNDACAO}</span>
              <span aria-hidden="true" className="mx-1 h-px w-8 self-center bg-anil-300 md:w-20" />
              <Counter to={anoAtual} from={ANO_FUNDACAO} duracao={2600} />
            </p>

            <p className="t-mono text-fumaca">
              <Counter to={anoAtual - ANO_FUNDACAO} duracao={2600} /> anos de história
            </p>

            <a
              href="#o-clube"
              className="t-mono group flex items-center gap-3 text-anil-300 transition-colors hover:text-branco"
            >
              Role para entrar
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-500 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes respiro {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
