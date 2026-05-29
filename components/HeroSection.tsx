import Link from "next/link";

export function HeroSection() {
  return (
    <section className="gradient-bg border-b border-slate-200">
      <div className="container-shell py-16 sm:py-20">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-brand-900 sm:text-5xl">Ứng dụng AI để tạo content, tăng view và kiếm tiền online</h1>
        <p className="mt-4 max-w-3xl text-slate-700">Khám phá hệ sinh thái công cụ AI giúp bạn tìm ý tưởng viral, viết kịch bản, xây kênh nội dung và triển khai affiliate hiệu quả hơn.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/cong-cu-ai" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white">Khám phá công cụ AI</Link>
          <Link href="/blog" className="rounded-xl border border-brand-700 px-5 py-3 text-sm font-semibold text-brand-700">Xem bài viết mới nhất</Link>
        </div>
      </div>
    </section>
  );
}
