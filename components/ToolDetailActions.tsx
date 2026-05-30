"use client";

import { trackEvent } from "@/lib/analytics";

export function ToolDetailActions({ href }: { href: string }) {
  return (
    <div className="mt-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white"
        onClick={() => trackEvent("cta_click", { cta_name: "tool_outbound_link", placement: "tool_detail", destination: href })}
      >
        Xem link công cụ
      </a>
    </div>
  );
}
