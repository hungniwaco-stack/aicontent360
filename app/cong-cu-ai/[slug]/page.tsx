import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { ToolDetailActions } from "@/components/ToolDetailActions";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: "Công cụ không tồn tại",
      description: siteConfig.description,
      alternates: { canonical: "/cong-cu-ai" }
    };
  }

  const canonical = `/cong-cu-ai/${tool.slug}`;
  return {
    title: tool.name,
    description: tool.shortDescription,
    alternates: { canonical },
    openGraph: {
      title: tool.name,
      description: tool.shortDescription,
      url: `${siteConfig.url}${canonical}`,
      type: "website"
    }
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);
  if (!tool) return notFound();

  const outboundUrl = tool.productUrl || "https://hungniwaco.vn";
  const isViralScanner = tool.slug === "cong-cu-tim-video-viral";
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.shortDescription,
    applicationCategory: tool.category,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      ...(tool.isFree ? { price: "0", priceCurrency: "VND" } : {}),
      availability: "https://schema.org/InStock",
      category: tool.price,
      url: `https://aicontent360.shop/cong-cu-ai/${tool.slug}`
    }
  };

  return (
    <div className="container-shell space-y-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Công cụ AI", href: "/cong-cu-ai" }, { label: tool.name }]} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div className="rounded-xl border border-ink/12 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-brand-700">
              {tool.category}
            </span>
            {tool.isNew ? (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Mới cập nhật
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-brand-900 md:text-4xl">{tool.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">{tool.shortDescription}</p>

          {!isViralScanner ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {tool.goal.map((goal) => (
                <span key={goal} className="rounded-full bg-ink/[0.05] px-3 py-1 text-sm font-medium text-ink/80">
                  {goal}
                </span>
              ))}
              {tool.platform.map((platform) => (
                <span key={platform} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-ink/80 ring-1 ring-ink/12">
                  {platform}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <ToolDetailActions href={outboundUrl} tool={tool} />
      </section>

      {!isViralScanner ? (
        <>
          <section className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-ink/12 bg-white p-5 shadow-sm lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-normal text-brand-700">Công cụ này giúp gì?</p>
              <p className="mt-3 text-base leading-7 text-ink/80">{tool.longDescription}</p>
            </article>

            <article className="rounded-xl border border-ink/12 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">Ai nên dùng?</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/80">
                {tool.suitableFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-ink/12 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">Kết quả nhận được</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/80">
                {tool.outputs.map((output) => (
                  <li key={output} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-700" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-brand-50 bg-brand-50 p-5 shadow-sm">
              <h2 className="text-lg font-bold text-brand-900">Demo đầu ra</h2>
              <p className="mt-4 text-sm leading-6 text-ink/80">{tool.demo}</p>
            </article>
          </section>

          <FAQSection faqs={tool.faqs} />
        </>
      ) : null}
    </div>
  );
}
