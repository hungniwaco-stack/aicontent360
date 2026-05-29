import Link from "next/link";

export function CTASection() {
  return (
    <section className="rounded-2xl bg-brand-900 p-8 text-white">
      <h2 className="text-2xl font-bold">Sẵn sàng tăng tốc với AI?</h2>
      <p className="mt-2 text-slate-200">Chọn đúng công cụ, đúng workflow và triển khai ngay trong tuần này.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/cong-cu-ai" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-900">Xem công cụ phù hợp</Link>
        <Link href="/lien-he" className="rounded-xl border border-white px-4 py-2 text-sm font-semibold">Nhắn Zalo tư vấn</Link>
      </div>
    </section>
  );
}
