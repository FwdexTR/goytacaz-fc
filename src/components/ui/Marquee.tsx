"use client";

import useMotionOK from "@/lib/useMotionOK";

type Props = {
  itens: string[];
  /** Segundos por volta completa. */
  velocidade?: number;
  className?: string;
  separador?: string;
};

/**
 * Faixa em movimento contínuo — CSS puro, sem custo de JS por frame.
 * Sob prefers-reduced-motion vira uma faixa estática, ainda legível.
 */
export default function Marquee({
  itens,
  velocidade = 38,
  className = "",
  separador = "✦",
}: Props) {
  const ok = useMotionOK();
  const linha = [...itens, ...itens];

  return (
    <div
      className={`relative overflow-hidden py-6 ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={
          ok
            ? {
                animation: `marquee ${velocidade}s linear infinite`,
              }
            : undefined
        }
      >
        {linha.map((t, i) => (
          <span key={i} className="font-display t-lg flex items-center px-6">
            {t}
            <span className="text-anil-400 px-6 text-[0.4em] align-middle">
              {separador}
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }
      `}</style>
    </div>
  );
}
