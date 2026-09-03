import Link from "next/link";
import { Tool } from "@/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-ink/12 bg-white p-5 shadow-[0_2px_14px_-8px_rgba(33,28,21,0.16)] transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_8px_24px_-10px_rgba(33,28,21,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-wider text-brand-700">{tool.category}</p>
        {tool.isFeatured ? <span className="shrink-0 rounded-sm bg-brand-50 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-brand-700">Nổi bật</span> : null}
      </div>
      <h3 className="mt-3 text-lg font-bold leading-snug text-brand-900">{tool.name}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{tool.shortDescription}</p>
      <Link
        href={`/cong-cu-ai/${tool.slug}`}
        className="mt-auto inline-flex min-h-10 items-center pt-6 font-mono text-xs font-semibold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Xem chi tiết →
      </Link>
    </article>
  );
}
