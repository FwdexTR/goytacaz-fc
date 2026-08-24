"use client";

import { useMotionPreference, type Preferencia } from "@/lib/MotionPreference";

const OPCOES: { valor: Preferencia; rotulo: string; descricao: string }[] = [
  { valor: "auto", rotulo: "Auto", descricao: "Seguir a preferência do sistema" },
  { valor: "on", rotulo: "Ligado", descricao: "Ativar as animações do site" },
  { valor: "off", rotulo: "Desligado", descricao: "Desativar as animações do site" },
];

/**
 * Controle de movimento.
 *
 * Existe porque `prefers-reduced-motion` é uma configuração do sistema inteiro:
 * quem a liga por causa de outro aplicativo acaba perdendo a experiência aqui
 * sem saber o motivo. Este controle devolve a escolha ao visitante, sem tirar
 * o padrão acessível de quem realmente precisa dele.
 */
export default function MotionToggle({ className = "" }: { className?: string }) {
  const { preferencia, sistemaReduzido, definir } = useMotionPreference();

  return (
    <div className={className}>
      <fieldset>
        <legend className="t-mono text-fumaca">Movimento</legend>

        <div
          role="radiogroup"
          aria-label="Preferência de animações"
          className="mt-3 inline-flex border border-white/20"
        >
          {OPCOES.map((o) => {
            const ativo = preferencia === o.valor;
            return (
              <button
                key={o.valor}
                type="button"
                role="radio"
                aria-checked={ativo}
                title={o.descricao}
                onClick={() => definir(o.valor)}
                className={`t-mono min-h-11 px-4 py-3 transition-colors ${
                  ativo
                    ? "bg-branco text-anil-950"
                    : "text-branco/70 hover:bg-anil-800/50 hover:text-branco"
                }`}
              >
                {o.rotulo}
                <span className="sr-only"> — {o.descricao}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {sistemaReduzido && preferencia === "auto" ? (
        <p className="mt-3 max-w-xs text-xs leading-relaxed text-branco/55">
          Seu sistema pede movimento reduzido, então as animações estão
          desligadas. Escolha <strong className="font-medium text-branco/80">Ligado</strong>{" "}
          para vê-las mesmo assim.
        </p>
      ) : null}
    </div>
  );
}
