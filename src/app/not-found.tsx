import Link from "next/link";
import Crest from "@/components/ui/Crest";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-5 text-center grain">
      <Crest size={80} decorativo />
      <p className="font-display t-monumental mt-8 leading-[0.82]">404</p>
      <h1 className="font-display t-lg mt-4">Essa página saiu de campo</h1>
      <p className="lede mt-5 max-w-md">
        O endereço não existe — mas a história continua alguns cliques adiante.
      </p>
      <Link
        href="/"
        className="t-mono group mt-10 inline-flex items-center gap-3 bg-branco px-8 py-4 text-anil-950 transition-colors hover:bg-anil-300"
      >
        Voltar ao início
        <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </section>
  );
}
