import Image from "next/image";

/** Proporção do escudo (247 × 349 no original do Wikimedia Commons). */
const RAZAO = 247 / 349;

type Props = {
  size?: number;
  className?: string;
  /** Marca d'água: sem nome acessível, puramente decorativa. */
  decorativo?: boolean;
};

/**
 * Escudo do Goytacaz Futebol Clube.
 *
 * Arquivo em domínio público, obtido no Wikimedia Commons
 * (File:Goytacaz_Futebol_Clube.png). O componente nunca deforma o escudo:
 * proporção preservada, sem recorte e sem alteração de cor — só a escala muda.
 */
export default function Crest({ size = 40, className = "", decorativo = false }: Props) {
  return (
    <Image
      src="/images/brand/escudo.webp"
      alt={decorativo ? "" : "Escudo do Goytacaz Futebol Clube"}
      aria-hidden={decorativo || undefined}
      width={Math.round(size * RAZAO)}
      height={size}
      className={className}
      priority={size > 80}
    />
  );
}
