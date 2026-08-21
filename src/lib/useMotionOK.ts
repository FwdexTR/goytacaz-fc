"use client";

/**
 * Ponto de entrada historico do hook de movimento.
 *
 * A logica agora vive em `MotionPreference.tsx`, que soma a preferencia do
 * sistema operacional a escolha explicita do visitante. Este arquivo continua
 * existindo para que os componentes animados nao precisem saber disso.
 */
export { default } from "./MotionPreference";
