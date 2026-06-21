"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function CTASection() {
  return (
    <section className="rounded-2xl bg-brand-900 p-8 text-white">
      <h2 className="text-2xl font-bold">Chọn công cụ và xem hướng dẫn triển khai</h2>
      <p className="mt-2 text-slate-200">Mỗi công cụ có trang giới thiệu riêng để bạn xem công dụng, đầu ra mẫu và link hướng dẫn chi tiết.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/cong-cu-ai"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-900"
          onClick={() => trackEvent("cta_click", { cta_name: "xem_thu_vien_cong_cu", placement: "cta_section" })}
        >
          Xem thư viện công cụ
        </Link>
      </div>
    </section>
  );
}
