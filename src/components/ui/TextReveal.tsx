"use client";

import { motion } from "motion/react";
import type { ElementType } from "react";
import { EASE } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Escalonamento entre palavras. */
  step?: number;
  id?: string;
};

/**
 * Revelação palavra a palavra: cada palavra sobe de dentro de uma faixa
 * recortada. O HTML entregue pelo servidor é a frase inteira, em texto puro —
 * a divisão em palavras só existe quando há animação para justificá-la.
 */
export default function TextReveal({
  text,
  as = "span",
  className,
  delay = 0,
  step = 0.045,
  id,
}: Props) {
  const ok = useMotionOK();
  const Tag = as as ElementType;

  if (!ok) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    );
  }

  const palavras = text.split(" ");

  return (
    <Tag id={id} className={className} aria-label={text}>
      {palavras.map((p, i) => (
        /*
         * O gatilho de viewport fica na MOLDURA, nunca na palavra.
         *
         * A palavra parte deslocada 110% para baixo — ou seja, fora da caixa com
         * `overflow-hidden`. Como o IntersectionObserver recorta a interseção
         * pelo overflow dos ancestrais, um observador preso à palavra reportaria
         * 0% de visibilidade para sempre, e a revelação nunca começaria. A
         * moldura não é recortada por ninguém, então ela enxerga a tela.
         */
        <motion.span
          key={`${p}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em" }}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            className="inline-block"
            variants={{ oculto: { y: "110%" }, visivel: { y: "0%" } }}
            transition={{ duration: 0.85, ease: EASE, delay: delay + i * step }}
          >
            {p}
            {i < palavras.length - 1 ? " " : ""}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
