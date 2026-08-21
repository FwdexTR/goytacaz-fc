"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMotionOK, { useMotionPreference } from "@/lib/MotionPreference";
import Crest from "@/components/ui/Crest";
import { rotas } from "@/lib/nav";
import { EASE } from "@/lib/motion";

export default function Header() {
  const caminho = usePathname();
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const ok = useMotionOK();
  const { preferencia, sistemaReduzido, definir } = useMotionPreference();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Fecha ao navegar — ajustado durante a renderização, não num efeito, para
  // que o menu já saia fechado no primeiro quadro da nova rota.
  const [rotaAnterior, setRotaAnterior] = useState(caminho);
  if (caminho !== rotaAnterior) {
    setRotaAnterior(caminho);
    setAberto(false);
  }

  // Trava o scroll e permite fechar com Esc enquanto o menu está aberto.
  useEffect(() => {
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  const links = rotas.filter((r) => r.href !== "/");

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-branco focus:px-4 focus:py-2 focus:text-anil-950"
      >
        Pular para o conteúdo
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
          rolou || aberto
            ? "border-b border-white/10 bg-anil-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-[110rem] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Goytacaz Futebol Clube — início"
          >
            <Crest size={30} decorativo className="transition-transform duration-500 group-hover:-rotate-6" />
            <span className="font-display text-[1.35rem] leading-none tracking-tight">
              Goytacaz
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((r) => {
                const ativo = caminho === r.href;
                return (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      aria-current={ativo ? "page" : undefined}
                      className={`relative block px-4 py-2 text-sm transition-colors duration-300 ${
                        ativo ? "text-branco" : "text-fumaca hover:text-branco"
                      }`}
                    >
                      {r.nome}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-4 bottom-1 h-px origin-left bg-anil-300 transition-transform duration-500 ${
                          ativo ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            {sistemaReduzido && preferencia === "auto" ? (
              <button
                type="button"
                onClick={() => definir("on")}
                className="t-mono hidden border border-anil-400/60 px-3.5 py-2 text-anil-300 transition-colors hover:bg-anil-800/50 hover:text-branco sm:block"
              >
                Ativar animações
                <span className="sr-only">
                  {" "}— seu sistema pede movimento reduzido; isto liga as animações só neste site
                </span>
              </button>
            ) : null}

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center"
          >
            <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-branco transition-transform duration-400 ${
                  aberto ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-branco transition-transform duration-400 ${
                  aberto ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {aberto && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-anil-950 px-6 pt-[var(--header-h)] lg:hidden grain"
            initial={ok ? { clipPath: "inset(0 0 100% 0)" } : { opacity: 0 }}
            animate={ok ? { clipPath: "inset(0 0 0% 0)" } : { opacity: 1 }}
            exit={ok ? { clipPath: "inset(0 0 100% 0)" } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Navegação principal (mobile)">
              <ul>
                {rotas.map((r, i) => (
                  <motion.li
                    key={r.href}
                    initial={ok ? { opacity: 0, y: 24 } : undefined}
                    animate={ok ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.12 + i * 0.05 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={r.href}
                      aria-current={caminho === r.href ? "page" : undefined}
                      className="flex items-baseline gap-4 py-4"
                    >
                      <span className="t-mono text-anil-400">{r.indice}</span>
                      <span
                        className={`font-display text-[2.4rem] leading-none ${
                          caminho === r.href ? "text-branco" : "text-branco/70"
                        }`}
                      >
                        {r.nome}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="t-mono mt-10 text-fumaca">
              Campos dos Goytacazes — RJ · desde 1912
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
