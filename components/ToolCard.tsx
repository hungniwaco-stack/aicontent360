import Link from "next/link";
import { Tool } from "@/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-brand-500">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-normal text-brand-700">{tool.category}</p>
        {tool.isFeatured ? <span className="shrink-0 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">Nổi bật</span> : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-brand-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.shortDescription}</p>
      <Link
        href={`/cong-cu-ai/${tool.slug}`}
        className="mt-auto inline-flex min-h-10 items-center pt-6 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Xem chi tiết
      </Link>
    </article>
  );
}
