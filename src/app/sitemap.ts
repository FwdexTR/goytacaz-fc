import type { MetadataRoute } from "next";
import { rotas, SITE_URL } from "@/lib/nav";

/** Prioridade por profundidade: a Home e a História puxam a navegação. */
const prioridade: Record<string, number> = {
  "/": 1,
  "/historia": 0.9,
  "/clube": 0.8,
  "/conquistas": 0.8,
  "/aryzao": 0.8,
  "/galeria": 0.7,
  "/noticias": 0.6,
  "/contato": 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  return rotas.map((r) => ({
    url: `${SITE_URL}${r.href === "/" ? "" : r.href}`,
    lastModified: agora,
    changeFrequency: r.href === "/noticias" ? "weekly" : "monthly",
    priority: prioridade[r.href] ?? 0.5,
  }));
}
