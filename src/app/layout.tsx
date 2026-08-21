import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SmoothScroll from "@/lib/SmoothScroll";
import { MotionProvider } from "@/lib/MotionPreference";
import { SITE_URL } from "@/lib/nav";
import { club, contato } from "@/data/club";
import { estadio } from "@/data/stadium";

/** Display monumental — anos, títulos, assinatura tipográfica. */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

/** Voz editorial — citações e destaques narrativos. */
const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

/** Texto corrente e interface. */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Goytacaz Futebol Clube | Campos dos Goytacazes",
    template: "%s | Goytacaz Futebol Clube",
  },
  description:
    "Fundado em 20 de agosto de 1912, o Goytacaz Futebol Clube é o clube mais querido de Campos dos Goytacazes. História, conquistas, o Aryzão e o acervo do azul e branco.",
  applicationName: club.nome,
  keywords: [
    "Goytacaz Futebol Clube",
    "Goytacaz FC",
    "Campos dos Goytacazes",
    "Aryzão",
    "Estádio Ary de Oliveira e Souza",
    "futebol carioca",
    "1912",
  ],
  authors: [{ name: club.nome }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: club.nome,
    title: "Goytacaz Futebol Clube | Campos dos Goytacazes",
    description:
      "Desde 1912, o azul e branco de Campos dos Goytacazes. Uma história que atravessa gerações.",
    images: [
      {
        url: "/images/photos/goyta-cano.webp",
        width: 1500,
        height: 1016,
        alt: "O Aryzão lotado numa noite de Goyta-Cano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goytacaz Futebol Clube | Campos dos Goytacazes",
    description: "Desde 1912. Uma história que atravessa gerações.",
    images: ["/images/photos/goyta-cano.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04102e",
  colorScheme: "dark",
};

/** Dados estruturados: organização esportiva + local do estádio. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: club.nome,
  alternateName: club.apelidos,
  sport: "Futebol",
  foundingDate: club.fundacao,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/escudo.webp`,
  foundingLocation: {
    "@type": "Place",
    name: `${club.cidade}, ${club.estado}, Brasil`,
  },
  location: {
    "@type": "StadiumOrArena",
    name: estadio.nome,
    alternateName: estadio.apelido,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua dos Goytacazes, 331",
      addressLocality: club.cidade,
      addressRegion: club.estado,
      addressCountry: "BR",
    },
  },
  sameAs: contato.redes.map((r) => r.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${instrument.variable} ${inter.variable}`}>
      <body>
        <MotionProvider>
          <SmoothScroll />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </MotionProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
