import type { ReactNode } from "react";
import Label from "@/components/ui/Label";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";

type Props = {
  indice: string;
  secao: string;
  titulo: string;
  intro?: string;
  children?: ReactNode;
};

/** Abertura padrão das páginas internas — mesma cadência em todo o site. */
export default function PageHero({ indice, secao, titulo, intro, children }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 pb-16 pt-[calc(var(--header-h)+5rem)] md:pb-24 md:pt-[calc(var(--header-h)+8rem)] grain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_60%_at_20%_0%,var(--color-anil-800)_0%,transparent_70%)] opacity-70"
      />
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <Label indice={indice}>{secao}</Label>
        <TextReveal as="h1" className="font-display t-hero mt-6 max-w-[18ch]" text={titulo} />
        {intro ? (
          <Reveal index={2}>
            <p className="lede mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </header>
  );
}
