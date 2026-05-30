import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolDetailActions } from "@/components/ToolDetailActions";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

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
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();
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
      <section className="rounded-2xl border border-slate-200 bg-white p-6"><h1 className="text-3xl font-bold">{tool.name}</h1><p className="mt-3 text-slate-600">{tool.shortDescription}</p><h2 className="mt-6 text-xl font-semibold">Công cụ này giúp gì?</h2><p className="mt-2">{tool.longDescription}</p><h3 className="mt-6 text-lg font-semibold">Ai nên dùng?</h3><ul className="list-disc pl-5">{tool.suitableFor.map((i)=> <li key={i}>{i}</li>)}</ul><h3 className="mt-6 text-lg font-semibold">Kết quả nhận được</h3><ul className="list-disc pl-5">{tool.outputs.map((o)=> <li key={o}>{o}</li>)}</ul><h3 className="mt-6 text-lg font-semibold">Demo đầu ra</h3><p>{tool.demo}</p><h3 className="mt-6 text-lg font-semibold">Giá bán</h3><p>{tool.price}</p><ToolDetailActions /></section>
      <FAQSection faqs={tool.faqs} />
      <RelatedTools currentSlug={tool.slug} />
    </div>
  );
}
