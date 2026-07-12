import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the ElvaMind website and enquiries about AI automation services.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return <LegalPage title="Terms of Service" updated={siteConfig.legal.termsUpdated}><p>These placeholder terms describe the general conditions for using the ElvaMind website and engaging with its services.</p><h2>Website use</h2><p>You may use this website for lawful business enquiries. You must not misuse the site or interfere with its operation.</p><h2>Services and proposals</h2><p>Website content is general information, not a binding offer. Consultancy work will be governed by a separate written agreement.</p><h2>Liability</h2><p>To the extent permitted by law, ElvaMind is not liable for losses arising solely from reliance on general website content.</p><h2>Contact</h2><p>Questions may be sent to <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p></LegalPage>;
}
