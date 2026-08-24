"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { EASE } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";

type Props = {
  src: string;
  alt: string;
  legenda?: string;
  /** Proporção do enquadramento. */
  ratio?: string;
  className?: string;
  /** Intensidade do parallax interno, em pixels. 0 desliga. */
  parallax?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * "Chapa": o enquadramento padrão de imagem do site.
 * Revelação por máscara + parallax interno + legenda de arquivo.
 */
export default function Plate({
  src,
  alt,
  legenda,
  ratio = "4 / 5",
  className = "",
  parallax = 60,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);
  const movendo = ok && parallax > 0;

  return (
    <figure className={className}>
      {/*
        A moldura não esconde mais a fotografia.

        Antes a revelação era uma máscara que partia de `inset(0 0 100% 0)`:
        a foto começava recortada a zero e só existia se a animação de entrada
        disparasse. Quando não disparava — e não disparava —, ficava um vão
        vazio com a legenda órfã embaixo, que foi exatamente o defeito relatado.

        O movimento agora parte de um estado JÁ VISÍVEL: a imagem entra com uma
        aproximação leve e assenta. Se a animação falhar por qualquer motivo, o
        pior caso é uma foto 6% mais aproximada — nunca uma foto ausente.
      */}
      <div
        ref={ref}
        className="relative overflow-hidden bg-anil-900 grain"
        style={{ aspectRatio: ratio }}
      >
        <motion.div
          key={ok ? "on" : "off"}
          className="absolute -inset-y-[12%] inset-x-0"
          style={movendo ? { y } : undefined}
          initial={ok ? { scale: 1.06 } : undefined}
          whileInView={ok ? { scale: 1 } : undefined}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            /*
             * Carregamento imediato, não preguiçoso.
             *
             * Estas são as fotografias que contam a história — não são enfeite
             * que pode chegar atrasado. Com `lazy`, a foto depende de uma
             * heurística do navegador que falha em situações comuns (aba aberta
             * em segundo plano, rolagem rápida, aba restaurada): a moldura
             * aparece vazia e a legenda fica órfã. O acervo inteiro do site pesa
             * pouco, então garantir que a imagem chegue vale mais do que
             * economizar requisições.
             */
            loading={priority ? undefined : "eager"}
            className="object-cover"
          />
        </motion.div>
      </div>

      {legenda ? (
        <figcaption className="t-mono mt-3 text-fumaca">{legenda}</figcaption>
      ) : null}
    </figure>
  );
}
