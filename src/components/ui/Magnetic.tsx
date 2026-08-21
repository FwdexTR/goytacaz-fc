"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import useMotionOK from "@/lib/useMotionOK";
import type { ReactNode, MouseEvent } from "react";

/** Link do Next animável — preserva prefetch e navegação client-side. */
const MotionLink = motion.create(Link);

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Deslocamento máximo em pixels. */
  forca?: number;
  ariaLabel?: string;
};

/**
 * Link com atração magnética sutil ao cursor.
 * Sob prefers-reduced-motion (e em toque, onde não há mousemove) é um link comum.
 */
export default function Magnetic({
  href,
  children,
  className = "",
  forca = 10,
  ariaLabel,
}: Props) {
  const ok = useMotionOK();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function mover(e: MouseEvent<HTMLAnchorElement>) {
    if (!ok) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * forca * 2);
    y.set(((e.clientY - r.top) / r.height - 0.5) * forca * 2);
  }

  return (
    <MotionLink
      href={href}
      aria-label={ariaLabel}
      onMouseMove={mover}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </MotionLink>
  );
}
