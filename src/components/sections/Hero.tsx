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

  /**
   * Entrada por viewport, não por montagem.
   *
   * O hero é remontado assim que a preferência de movimento é resolvida, e a
   * animação de montagem se perde nesse ciclo — os elementos ficam parados no
   * estado inicial, invisíveis. O gatilho de viewport dispara depois, quando o
   * elemento já existe de verdade, e o hero está sempre em tela no carregamento,
   * então o efeito é o mesmo: começa sozinho, na hora.
   */
  const entra = (delay: number, y = 12) =>
    ok
      ? {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0 },
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
          /*
           * O gramado sob os refletores é verde-limão: em cima dele, texto
           * branco some. Em vez de cobrir a foto com preto — o que apagava o
           * estádio inteiro —, a imagem é tratada como chapa editorial:
           * dessaturada e escurecida, ela entra na paleta azul do site e o
           * título ganha contraste sem esconder a arquibancada.
           */
          style={{ filter: "saturate(0.38) brightness(0.46) contrast(1.08)" }}
          className={`object-cover ${ok ? "animate-[respiro_28s_ease-in-out_infinite_alternate]" : ""}`}
        />
        {/*
          O véu escurece onde o texto pousa e abre onde não pousa.
          Empilhado uniformemente ele apagava a fotografia: o título fica à
          esquerda, então é lá que o azul pesa; à direita o Aryzão aparece.
        */}
        {/*
          Um véu só, e leve. O filtro acima já garante o contraste: sobre a
          parte mais clara do gramado, o texto branco fica em 6,4:1. Este
          gradiente existe para dois trabalhos pontuais — escurecer o topo, onde
          fica o menu, e fundir a base da imagem com o azul da página.
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-anil-950/45 via-transparent to-anil-950" />
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
            whileInView={ok ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
            viewport={{ once: true, amount: 0 }}
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
                  <motion.span
                    key={linha}
                    aria-hidden="true"
                    // Folga no topo para não decepar acentos das maiúsculas.
                    className="block overflow-hidden pb-[0.16em] pt-[0.2em] -mt-[0.2em] -mb-[0.16em]"
                    initial="oculto"
                    whileInView="visivel"
                    viewport={{ once: true, amount: 0 }}
                  >
                    <motion.span
                      className="block"
                      variants={{ oculto: { y: "135%" }, visivel: { y: "0%" } }}
                      transition={{ duration: 1.1, ease: EASE, delay: 0.35 + i * 0.12 }}
                    >
                      {linha}
                    </motion.span>
                  </motion.span>
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
          whileInView={ok ? { opacity: 1 } : undefined}
          viewport={{ once: true, amount: 0 }}
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
              className="t-mono group -my-2 flex min-h-11 items-center gap-3 py-2 text-anil-300 transition-colors hover:text-branco"
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
