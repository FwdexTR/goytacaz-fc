"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categorias, fotos, type Categoria } from "@/data/gallery";
import { EASE } from "@/lib/motion";
import useMotionOK from "@/lib/useMotionOK";

/** Altura relativa de cada formato dentro do masonry. */
const ALTURA: Record<string, string> = {
  retrato: "aspect-[3/4]",
  paisagem: "aspect-[4/3]",
  quadrado: "aspect-square",
  panorama: "aspect-[16/9]",
};

export default function GalleryGrid() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");
  const [abertoEm, setAbertoEm] = useState<number | null>(null);
  const ok = useMotionOK();
  const gatilho = useRef<HTMLButtonElement | null>(null);
  const fechar = useRef<HTMLButtonElement>(null);

  const visiveis = useMemo(
    () => (filtro === "Todas" ? fotos : fotos.filter((f) => f.categoria === filtro)),
    [filtro],
  );

  const navegar = useCallback(
    (passo: number) =>
      setAbertoEm((i) =>
        i === null ? null : (i + passo + visiveis.length) % visiveis.length,
      ),
    [visiveis.length],
  );

  // Teclado no lightbox: Esc fecha, setas navegam.
  useEffect(() => {
    if (abertoEm === null) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fechar.current?.focus();

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbertoEm(null);
      if (e.key === "ArrowRight") navegar(1);
      if (e.key === "ArrowLeft") navegar(-1);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", aoTeclar);
      gatilho.current?.focus();
    };
  }, [abertoEm, navegar]);

  const foto = abertoEm === null ? null : visiveis[abertoEm];

  return (
    <>
      {/* Filtros */}
      <div className="mx-auto max-w-[110rem] px-5 md:px-10">
        <ul role="list" className="flex flex-wrap gap-2 border-b border-white/10 pb-8">
          {categorias.map((c) => {
            const ativo = filtro === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setFiltro(c)}
                  aria-pressed={ativo}
                  className={`t-mono border px-4 py-2.5 transition-colors ${
                    ativo
                      ? "border-branco bg-branco text-anil-950"
                      : "border-white/20 text-branco/70 hover:border-anil-300 hover:text-branco"
                  }`}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>

        <p aria-live="polite" className="t-mono mt-6 text-fumaca">
          {visiveis.length} {visiveis.length === 1 ? "registro" : "registros"}
        </p>

        {/* Masonry por colunas CSS — proporções variadas, sem saltos de layout */}
        <div className="mt-10 gap-6 [column-count:1] sm:[column-count:2] lg:[column-count:3] [&>*]:mb-6 [&>*]:break-inside-avoid">
          {visiveis.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={(e) => {
                gatilho.current = e.currentTarget;
                setAbertoEm(i);
              }}
              className="group block w-full text-left"
              aria-label={`Ampliar: ${f.legenda}${f.ano ? `, ${f.ano}` : ""}`}
            >
              <span className={`relative block w-full overflow-hidden bg-anil-900 grain ${ALTURA[f.formato]}`}>
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 z-20 bg-anil-950/0 transition-colors duration-500 group-hover:bg-anil-950/25" />
              </span>

              <span className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm text-branco/80">{f.legenda}</span>
                <span className="t-mono shrink-0 text-fumaca">
                  {f.creditos ? "Foto" : f.ano ?? f.categoria}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {foto && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${foto.legenda}${foto.ano ? `, ${foto.ano}` : ""}`}
            className="fixed inset-0 z-[60] flex flex-col bg-anil-950/97 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ok ? 0.3 : 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setAbertoEm(null);
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10">
              <p className="t-mono text-fumaca">
                {(abertoEm ?? 0) + 1} / {visiveis.length}
              </p>
              <button
                ref={fechar}
                type="button"
                onClick={() => setAbertoEm(null)}
                className="t-mono px-3 py-2 text-branco/80 transition-colors hover:text-branco"
              >
                Fechar ✕
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-5 pb-6 md:px-16">
              <motion.figure
                key={foto.id}
                className="flex max-h-full w-full max-w-5xl flex-col"
                initial={ok ? { opacity: 0, scale: 0.98 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: ok ? 0.4 : 0, ease: EASE }}
              >
                <div className="relative max-h-[70svh] w-full flex-1 grain">
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="mx-auto max-h-[70svh] w-auto object-contain"
                  />
                </div>
                <figcaption className="mt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="font-display text-xl">{foto.legenda}</span>
                    <span className="t-mono text-fumaca">
                      {foto.categoria}
                      {foto.ano ? ` · ${foto.ano}` : ""}
                    </span>
                  </div>
                  {/* Atribuição exigida pelas licenças CC BY-SA. */}
                  {foto.creditos ? (
                    <p className="t-mono mt-2 text-anil-300">Foto: {foto.creditos}</p>
                  ) : (
                    <p className="t-mono mt-2 text-fumaca">
                      Composição gráfica do projeto
                    </p>
                  )}
                </figcaption>
              </motion.figure>
            </div>

            <div className="flex items-center justify-center gap-4 px-5 pb-8">
              <button
                type="button"
                onClick={() => navegar(-1)}
                className="t-mono border border-white/25 px-6 py-3 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() => navegar(1)}
                className="t-mono border border-white/25 px-6 py-3 transition-colors hover:border-anil-300 hover:bg-anil-800/40"
              >
                Próxima →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
