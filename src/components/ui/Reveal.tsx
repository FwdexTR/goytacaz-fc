"use client";

import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { EASE, VIEWPORT } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Atraso em passos de ~70ms — para escalonar itens de uma lista. */
  index?: number;
  y?: number;
  amount?: number;
};

/**
 * Aparição discreta ao entrar na viewport.
 * A marcação é a mesma com ou sem animação — só os props de movimento mudam.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  index = 0,
  y = 28,
  amount = VIEWPORT.amount,
}: Props) {
  const ok = useMotionOK();
  const M = (motion[as as keyof typeof motion] ?? motion.div) as typeof motion.div;

  return (
    <M
      key={ok ? "on" : "off"}
      className={className}
      initial={ok ? { opacity: 0, y } : undefined}
      whileInView={ok ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: EASE, delay: index * 0.07 }}
    >
      {children}
    </M>
  );
}
