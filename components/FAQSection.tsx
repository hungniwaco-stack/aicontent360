export function FAQSection({ faqs, withSchema = true }: { faqs: { question: string; answer: string }[]; withSchema?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-bold">FAQ</h2>
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer font-semibold">{faq.question}</summary>
          <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
        </details>
      ))}
      {withSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
    </section>
  );
}
