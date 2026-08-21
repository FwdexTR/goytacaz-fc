"use client";

import { useEffect } from "react";
import useMotionOK from "@/lib/MotionPreference";

/**
 * Rolagem suave (Lenis) — carregada sob demanda, apenas em ponteiro fino e
 * quando o movimento está liberado. Em toque, o scroll nativo do sistema é
 * melhor (e mais leve) do que qualquer emulação.
 */
export default function SmoothScroll() {
  const ok = useMotionOK();

  useEffect(() => {
    if (!ok) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    let destruir: (() => void) | undefined;
    let cancelado = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelado) return;
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destruir = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });

    return () => {
      cancelado = true;
      destruir?.();
    };
  }, [ok]);

  return null;
}
