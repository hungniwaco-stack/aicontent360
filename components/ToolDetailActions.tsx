"use client";

import { trackEvent } from "@/lib/analytics";

export function ToolDetailActions() {
  return (
    <div className="mt-6">
      <a
        href="https://hungniwaco.shop"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white"
        onClick={() => trackEvent("cta_click", { cta_name: "hungniwaco_shop_tool_link", placement: "tool_detail" })}
      >
        Xem tại hungniwaco.shop
      </a>
    </div>
  );
}
