import { siteConfig } from "@/config/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" className="section bg-white" aria-labelledby="faq-heading">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4">Common questions</p>
          <h2 id="faq-heading" className="h2">AI automation consultancy, explained clearly</h2>
          <p className="lead mt-5">Direct answers about what ElvaMind builds, how projects work, and who we help.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {siteConfig.faq.map((item) => (
            <details key={item.question} className="card group p-6 open:border-purple/30">
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold marker:hidden">{item.question}</summary>
              <p className="mt-4 border-t border-slate-100 pt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </section>
  );
}

