import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/portfolio";

const base = "https://giovannicrescenzi.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sobre", "/contato"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${base}/projetos/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseRoutes];
}
