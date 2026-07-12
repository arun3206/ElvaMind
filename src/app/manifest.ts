import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.brand.name} — ${siteConfig.brand.descriptor}`,
    short_name: siteConfig.brand.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#0A192F",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

