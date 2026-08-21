import Link from "next/link";
import Crest from "@/components/ui/Crest";
import MotionToggle from "@/components/ui/MotionToggle";
import { rotas } from "@/lib/nav";
import { club, contato } from "@/data/club";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-anil-950 grain">
      <div className="mx-auto max-w-[110rem] px-5 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Crest size={72} />
            <p className="lede mt-8 max-w-sm">
              {club.nome}. Fundado em {club.fundacaoExtenso}, em{" "}
              {club.cidade} — {club.estado}.
            </p>
            <p className="t-mono mt-6 text-anil-300">{club.frase}</p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <h2 className="t-mono text-fumaca">Navegação</h2>
            <ul className="mt-5 space-y-2.5">
              {rotas.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-branco/70 transition-colors hover:text-branco"
                  >
                    {r.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="t-mono text-fumaca">Contato</h2>
            <address className="mt-5 space-y-2.5 not-italic text-branco/70">
              <p>{contato.endereco}</p>
            </address>

            <MotionToggle className="mt-8" />

            <h2 className="t-mono mt-8 text-fumaca">Redes</h2>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {contato.redes.map((r) => (
                <li key={r.nome}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-branco/70 underline-offset-4 transition-colors hover:text-branco hover:underline"
                  >
                    {r.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Assinatura tipográfica: a palavra ocupa a largura da página. */}
        <p
          aria-hidden="true"
          className="font-display mt-20 w-full select-none text-center leading-[0.78] text-branco/[0.13]"
          style={{ fontSize: "clamp(4rem, 20.5vw, 22rem)" }}
        >
          Goytacaz
        </p>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-fumaca sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {club.nome}. Todos os direitos reservados.
          </p>
          <p className="max-w-2xl">{contato.naoOficial}</p>
        </div>
      </div>
    </footer>
  );
}
