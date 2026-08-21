"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Preferencia = "auto" | "on" | "off";

const CHAVE = "goytacaz:movimento";
const CONSULTA = "(prefers-reduced-motion: reduce)";

/**
 * Estado do movimento como uma "loja externa".
 *
 * A preferência mora em dois lugares fora do React — `localStorage` e a media
 * query do sistema — então ela é lida com `useSyncExternalStore` em vez de ser
 * copiada para dentro de um estado por um efeito.
 *
 * O instantâneo do servidor é sempre "desligado". Assim a marcação hidratada é
 * idêntica à do servidor, o HTML entregue já é a versão estática e legível, e a
 * animação entra como uma camada aplicada depois — nunca como pré-requisito do
 * conteúdo.
 */
const ouvintes = new Set<() => void>();
let cachePreferencia: Preferencia | null = null;
let mq: MediaQueryList | null = null;

function avisar() {
  for (const o of ouvintes) o();
}

function lerPreferencia(): Preferencia {
  if (cachePreferencia) return cachePreferencia;
  try {
    const salva = window.localStorage.getItem(CHAVE);
    cachePreferencia =
      salva === "on" || salva === "off" || salva === "auto" ? salva : "auto";
  } catch {
    cachePreferencia = "auto"; // localStorage indisponível
  }
  return cachePreferencia;
}

function assinar(callback: () => void) {
  if (!mq) {
    mq = window.matchMedia(CONSULTA);
    mq.addEventListener("change", avisar);
  }
  ouvintes.add(callback);
  return () => {
    ouvintes.delete(callback);
  };
}

/** Instantâneo comparável por valor: "preferência|sistemaReduzido". */
function instantaneo(): string {
  const sistema = (mq ?? window.matchMedia(CONSULTA)).matches ? "1" : "0";
  return `${lerPreferencia()}|${sistema}`;
}

function instantaneoServidor(): string {
  return "auto|servidor";
}

function definirPreferencia(p: Preferencia) {
  cachePreferencia = p;
  try {
    window.localStorage.setItem(CHAVE, p);
  } catch {
    /* sem persistência, mas a sessão atual funciona */
  }
  avisar();
}

type Contexto = {
  /** O movimento deve rodar agora? Falso no servidor e no primeiro quadro. */
  ok: boolean;
  /** Escolha do visitante. "auto" segue o sistema operacional. */
  preferencia: Preferencia;
  /** O sistema operacional pede movimento reduzido? */
  sistemaReduzido: boolean;
  definir: (p: Preferencia) => void;
};

const Ctx = createContext<Contexto>({
  ok: false,
  preferencia: "auto",
  sistemaReduzido: false,
  definir: () => {},
});

/**
 * Por padrão respeita `prefers-reduced-motion` do sistema — mas o visitante
 * pode sobrepor essa decisão. Quem tem "reduzir animações" ligado no Windows
 * por causa de outros aplicativos continua podendo ver a experiência completa
 * sem mexer em configuração nenhuma do sistema.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const estado = useSyncExternalStore(assinar, instantaneo, instantaneoServidor);

  const valor = useMemo<Contexto>(() => {
    const [pref, sistema] = estado.split("|");
    const noServidor = sistema === "servidor";
    const preferencia = pref as Preferencia;
    const sistemaReduzido = sistema === "1";
    const permitido =
      preferencia === "on" ? true : preferencia === "off" ? false : !sistemaReduzido;

    return {
      ok: !noServidor && permitido,
      preferencia,
      sistemaReduzido,
      definir: definirPreferencia,
    };
  }, [estado]);

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

/** "O movimento está liberado?" — usado por todo componente animado. */
export default function useMotionOK(): boolean {
  return useContext(Ctx).ok;
}

/** Acesso completo à preferência — para o controle na interface. */
export function useMotionPreference(): Contexto {
  return useContext(Ctx);
}
