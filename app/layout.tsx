import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import { site } from "@/content/portfolio";

// Fontes autohospedadas via @fontsource — evita chamada externa a
// fonts.googleapis.com em tempo de build e melhora performance (sem
// requisição de rede extra no carregamento da página).
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const siteUrl = "https://giovannicrescenzi.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Giovanni Crescenzi Bogner — Cliente, Produto e Tecnologia",
    template: "%s — Giovanni Crescenzi Bogner",
  },
  description:
    "Portfólio de Giovanni Crescenzi Bogner: Customer Success, suporte técnico, desenvolvimento, automação e projetos digitais construídos a partir de problemas reais.",
  openGraph: {
    title: "Giovanni Crescenzi Bogner — Cliente, Produto e Tecnologia",
    description:
      "Portfólio de Giovanni Crescenzi Bogner: Customer Success, suporte técnico, desenvolvimento, automação e projetos digitais construídos a partir de problemas reais.",
    url: siteUrl,
    siteName: "Giovanni Crescenzi Bogner",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovanni Crescenzi Bogner — Cliente, Produto e Tecnologia",
    description:
      "Customer Success, produto, suporte técnico e desenvolvimento aplicados a soluções que precisam funcionar no mundo real.",
  },
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  jobTitle: "Customer Success & Tecnologia",
  worksFor: {
    "@type": "Organization",
    name: "Nola ERP",
  },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <ReadingProgress />
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
