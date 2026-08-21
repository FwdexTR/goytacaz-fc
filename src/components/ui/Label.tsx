import type { ReactNode } from "react";

/**
 * Rótulo de seção — o "carimbo de arquivo" que abre cada bloco do site.
 * Número de índice + traço + nome, em versalete espaçado.
 */
export default function Label({
  indice,
  children,
  className = "",
}: {
  indice?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`t-mono flex items-center gap-4 text-anil-300 ${className}`}>
      {indice ? <span className="tabular-nums opacity-70">{indice}</span> : null}
      <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}
