import { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { RelatedTools } from "@/components/RelatedTools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return {
      title: "Cong cu khong ton tai",
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

  return (
    <div className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: "Trang chu", href: "/" }, { label: "Cong cu AI", href: "/cong-cu-ai" }, { label: tool.name }]} />
      <section className="rounded-2xl border border-slate-200 bg-white p-6"><h1 className="text-3xl font-bold">{tool.name}</h1><p className="mt-3 text-slate-600">{tool.shortDescription}</p><h2 className="mt-6 text-xl font-semibold">Cong cu nay giup gi?</h2><p className="mt-2">{tool.longDescription}</p><h3 className="mt-6 text-lg font-semibold">Ai nen dung?</h3><ul className="list-disc pl-5">{tool.suitableFor.map((i)=> <li key={i}>{i}</li>)}</ul><h3 className="mt-6 text-lg font-semibold">Ket qua nhan duoc</h3><ul className="list-disc pl-5">{tool.outputs.map((o)=> <li key={o}>{o}</li>)}</ul><h3 className="mt-6 text-lg font-semibold">Demo dau ra</h3><p>{tool.demo}</p><h3 className="mt-6 text-lg font-semibold">Gia ban</h3><p>{tool.price}</p><div className="mt-6 flex gap-3"><button className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white">Mua cong cu</button><button className="rounded-xl border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-700">Nhan Zalo tu van</button></div></section>
      <FAQSection faqs={tool.faqs} />
      <RelatedTools currentSlug={tool.slug} />
    </div>
  );
}
