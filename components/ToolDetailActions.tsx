"use client";

import { trackEvent } from "@/lib/analytics";
import { Tool } from "@/types";

export function ToolDetailActions({ href, tool }: { href: string; tool: Tool }) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-normal text-emerald-700">Giới thiệu công cụ</p>
      <h2 className="mt-3 text-xl font-bold leading-snug text-brand-900">{tool.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.longDescription}</p>

      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Phù hợp với</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
            {tool.suitableFor.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Công cụ hỗ trợ tạo</h3>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
            {tool.outputs.slice(0, 3).map((output) => (
              <li key={output} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
        Trang chính có video hướng dẫn, mô tả chi tiết và tài nguyên đi kèm cho công cụ này.
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        onClick={() => trackEvent("cta_click", { cta_name: "tool_outbound_link", placement: "tool_detail", destination: href })}
      >
        Xem hướng dẫn trên trang chính
      </a>
    </aside>
  );
}
