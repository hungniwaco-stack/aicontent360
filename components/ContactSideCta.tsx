"use client";

import { trackEvent } from "@/lib/analytics";

export function ContactSideCta() {
  return (
    <button
      className="mt-5 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white"
      onClick={() => trackEvent("lead_submit_click", { cta_name: "nhan_tu_van_cong_cu_phu_hop", placement: "contact_side" })}
    >
      Nhận tư vấn công cụ phù hợp
    </button>
  );
}
