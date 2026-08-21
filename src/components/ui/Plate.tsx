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
      <motion.div
        key={ok ? "on" : "off"}
        ref={ref}
        className="relative overflow-hidden bg-anil-900 grain"
        style={{ aspectRatio: ratio }}
        initial={ok ? { clipPath: "inset(0 0 100% 0)" } : undefined}
        whileInView={ok ? { clipPath: "inset(0 0 0% 0)" } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <motion.div
          className="absolute -inset-y-[12%] inset-x-0"
          style={movendo ? { y } : undefined}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {legenda ? (
        <figcaption className="t-mono mt-3 text-fumaca">{legenda}</figcaption>
      ) : null}
    </figure>
  );
}
