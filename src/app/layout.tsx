import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

const domain = siteConfig.brand.domain;
const socialLinks = Object.values(siteConfig.social).filter((url) => url.startsWith("http"));

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.founder.name, url: siteConfig.founder.linkedin }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.brand.name,
  category: "technology",
  applicationName: siteConfig.brand.name,
  alternates: { canonical: "/", languages: { "en-IN": "/" } },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.brand.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ElvaMind AI automation consultancy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${domain}/#organization`,
      name: siteConfig.brand.name,
      url: domain,
      description: siteConfig.seo.description,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      logo: `${domain}/favicon.svg`,
      image: `${domain}${siteConfig.founder.photo}`,
      founder: { "@id": `${domain}/#founder` },
      sameAs: socialLinks,
      areaServed: siteConfig.seo.serviceArea,
      knowsAbout: [...siteConfig.seo.keywords],
    },
    {
      "@type": "Person",
      "@id": `${domain}/#founder`,
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
      description: siteConfig.founder.bio,
      image: `${domain}${siteConfig.founder.photo}`,
      url: siteConfig.founder.linkedin,
      worksFor: { "@id": `${domain}/#organization` },
      sameAs: [siteConfig.founder.linkedin],
      knowsAbout: ["AI automation", "software engineering", "system integration", "AI agents", "custom software"],
    },
    {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      url: domain,
      name: siteConfig.brand.name,
      description: siteConfig.brand.tagline,
      publisher: { "@id": `${domain}/#organization` },
      inLanguage: siteConfig.seo.language,
    },
    {
      "@type": "ItemList",
      "@id": `${domain}/#services`,
      name: "ElvaMind services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${domain}/#organization` },
          areaServed: siteConfig.seo.serviceArea,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

