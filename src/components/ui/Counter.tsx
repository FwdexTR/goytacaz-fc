"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import useMotionOK from "@/lib/useMotionOK";

type Props = {
  /** Valor final. Aceita separador de milhar já formatado no `sufixo`. */
  to: number;
  from?: number;
  duracao?: number;
  prefixo?: string;
  sufixo?: string;
  className?: string;
  /** Formata com separador de milhar pt-BR. */
  milhar?: boolean;
};

/** Contagem que dispara ao entrar na viewport. Uma vez só. */
export default function Counter({
  to,
  from = 0,
  duracao = 1800,
  prefixo = "",
  sufixo = "",
  className,
  milhar = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, amount: 0.6 });
  const ok = useMotionOK();
  // O valor final é o que o servidor entrega: sem JS, o número correto já está
  // na página. A contagem só recua ao ponto de partida quando há animação.
  const [valor, setValor] = useState(to);

  // Ajuste durante a renderização (padrão do React para "estado derivado de
  // props"): quando o movimento é liberado, o número recua ao ponto de partida
  // antes de qualquer pintura — sem efeito, sem salto visível.
  const [okAnterior, setOkAnterior] = useState(ok);
  if (ok !== okAnterior) {
    setOkAnterior(ok);
    if (ok) setValor(from);
  }

  useEffect(() => {
    if (!visivel || !ok) return;
    let frame = 0;
    const inicio = performance.now();
    const tick = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValor(Math.round(from + (to - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visivel, ok, from, to, duracao]);

  const texto = milhar ? valor.toLocaleString("pt-BR") : String(valor);

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {texto}
      {sufixo}
    </span>
  );
}
