import type { Variants } from "motion/react";

/** Curva assinatura do projeto — saída longa, entrada quase instantânea. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.07 },
  }),
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, ease: EASE, delay: i * 0.07 },
  }),
};

/**
 * Aproximação que assenta — substitui a antiga revelação por máscara.
 *
 * A máscara partia de `clip-path: inset(0 0 100% 0)`: quando a interpolação do
 * recorte não acontecia, o elemento ficava invisível para sempre. Aqui o estado
 * inicial já é visível, então falhar custa no máximo um enquadramento levemente
 * mais fechado.
 */
export const aproxima: Variants = {
  hidden: { scale: 1.06 },
  show: { scale: 1, transition: { duration: 1.25, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

/** Palavra a palavra, para títulos editoriais. */
export const wordUp: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.85, ease: EASE } },
};

export const VIEWPORT = { once: true, amount: 0.25 } as const;
