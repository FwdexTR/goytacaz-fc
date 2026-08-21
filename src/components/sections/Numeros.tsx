"use client";

import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Label from "@/components/ui/Label";

const ANO_FUNDACAO = 1912;

type Numero = {
  valor: React.ReactNode;
  rotulo: string;
  nota?: string;
};

export default function Numeros() {
  const anos = new Date().getFullYear() - ANO_FUNDACAO;

  const numeros: Numero[] = [
    {
      valor: <Counter to={anos} sufixo="" />,
      rotulo: "Anos de história",
      nota: "Desde 20 de agosto de 1912",
    },
    { valor: "1912", rotulo: "Fundação", nota: "Campos dos Goytacazes / RJ" },
    {
      valor: <Counter to={20} />,
      rotulo: "Campeonatos campistas",
      nota: "O primeiro em 1914",
    },
    {
      valor: <Counter to={14996} milhar />,
      rotulo: "Recorde de público",
      nota: "Goytacaz × Flamengo, 1978",
    },
  ];

  return (
    <section
      className="relative border-y border-white/10 bg-anil-900/40 py-20 md:py-28"
      aria-labelledby="numeros-titulo"
    >
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <Label indice="03">Os números do clube</Label>
        <h2 id="numeros-titulo" className="sr-only">
          Os números do Goytacaz Futebol Clube
        </h2>

        <dl className="mt-12 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map((n, i) => (
            <Reveal key={n.rotulo} index={i} as="div" className="lg:pr-8">
              <dt className="sr-only">{n.rotulo}</dt>
              <dd>
                <p className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tabular-nums">
                  {n.valor}
                </p>
                <p className="t-mono mt-4 text-anil-300">{n.rotulo}</p>
                {n.nota ? (
                  <p className="mt-1.5 text-sm text-branco/50">{n.nota}</p>
                ) : null}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
