"use client";

import { trackEvent } from "@/lib/analytics";

export function ToolDetailActions() {
  return (
    <div className="mt-6 flex gap-3">
      <button
        className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white"
        onClick={() => trackEvent("purchase_click", { cta_name: "mua_cong_cu", placement: "tool_detail" })}
      >
        Mua công cụ
      </button>
      <button
        className="rounded-xl border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-700"
        onClick={() => trackEvent("cta_click", { cta_name: "nhan_zalo_tu_van", placement: "tool_detail" })}
      >
        Nhắn Zalo tư vấn
      </button>
    </div>
  );
}
