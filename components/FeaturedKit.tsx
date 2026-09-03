import Link from "next/link";

export function FeaturedKit() {
  return (
    <section className="bg-white">
      <div className="container-shell pt-2 sm:pt-4">
        <div className="overflow-hidden rounded-lg bg-brand-900 text-white shadow-xl">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,.9fr)] lg:items-center lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-700 px-3 py-1.5 text-xs font-bold uppercase">Sản phẩm nổi bật</span>
                <span className="rounded-full bg-brand-500/20 px-3 py-1.5 text-xs font-bold text-brand-500">Mới</span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                Bộ AI Agent YouTube Kit
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-paper/80">
                33 Skills AI + 9 Agents + Google Sheets pipeline tự động hoá toàn bộ quy trình làm YouTube — từ nghiên cứu, kịch bản đến hình ảnh/video và xuất bản. Mua một lần, dùng vĩnh viễn.
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-black text-brand-500">179.000đ</span>
                <span className="text-sm text-ink/45 line-through">999.000đ</span>
                <span className="rounded-full bg-brand-700/20 px-2.5 py-1 text-xs font-bold text-brand-500">-82%</span>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://lamyoutubetudong.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Khám phá Bộ YouTube Kit
                </a>
                <Link
                  href="/cong-cu-ai/bo-ai-agent-youtube-kit"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-brand-500">33</p>
                <p className="mt-1 text-xs text-paper/70">Skills AI</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-brand-500">9</p>
                <p className="mt-1 text-xs text-paper/70">AI Agents</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-brand-500">10</p>
                <p className="mt-1 text-xs text-paper/70">Sheets Tabs</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-white">∞</p>
                <p className="mt-1 text-xs text-paper/70">Dùng vĩnh viễn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
