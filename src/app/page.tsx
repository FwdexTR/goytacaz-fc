import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Numeros from "@/components/sections/Numeros";
import HistoriaTeaser from "@/components/sections/HistoriaTeaser";
import AryzaoTeaser from "@/components/sections/AryzaoTeaser";
import Momentos from "@/components/sections/Momentos";
import ConquistasTeaser from "@/components/sections/ConquistasTeaser";
import Chamado from "@/components/sections/Chamado";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Numeros />
      <HistoriaTeaser />
      <AryzaoTeaser />
      <Momentos />
      <ConquistasTeaser />
      <Chamado />
    </>
  );
}
