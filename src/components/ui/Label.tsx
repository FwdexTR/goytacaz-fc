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
      {/* opacity-80 e não menos: abaixo disso o número cai de 4,5:1 e reprova
          o contraste mínimo, porque o texto é pequeno (11px). */}
      {indice ? <span className="tabular-nums opacity-80">{indice}</span> : null}
      <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}
