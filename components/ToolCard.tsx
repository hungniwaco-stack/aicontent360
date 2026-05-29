import Link from "next/link";
import { Tool } from "@/types";
import { PricingBadge } from "@/components/PricingBadge";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs text-brand-700">{tool.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{tool.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{tool.shortDescription}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <PricingBadge tool={tool} />
        {tool.isFeatured && <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-700">Nổi bật</span>}
        {tool.isNew && <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">Mới cập nhật</span>}
      </div>
      <Link href={`/cong-cu-ai/${tool.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700">Xem chi tiết</Link>
    </article>
  );
}
