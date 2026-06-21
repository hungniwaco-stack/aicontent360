"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { blogPosts } from "@/data/blogPosts";
import { tools } from "@/data/tools";

const popularGoals = ["Tạo content", "Tăng view", "Affiliate", "Sức khỏe", "Storytelling"];
const goalCount = new Set(tools.flatMap((tool) => tool.goal)).size;

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    trackEvent("cta_click", { cta_name: "hero_search_tools", placement: "hero" });
    router.push(`/cong-cu-ai${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-shell py-8 sm:py-12">
        <div className="overflow-hidden rounded-2xl bg-brand-900 text-white shadow-xl">
          <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,.8fr)] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-bold text-emerald-300">Danh mục công cụ AI cho creator Việt</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
                Bạn muốn AI giúp gì
                <span className="block text-amber-300">hôm nay?</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
                Tìm đúng công cụ để lên ý tưởng, viết kịch bản, tăng view, xây kênh affiliate hoặc sản xuất nội dung theo ngách.
              </p>
              <form onSubmit={handleSubmit} className="mt-7 flex max-w-3xl flex-col gap-2 rounded-lg bg-white p-2 shadow-lg sm:flex-row">
              <label htmlFor="hero-tool-search" className="sr-only">Tìm công cụ AI</label>
              <input
                id="hero-tool-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nhập mục tiêu, ngách hoặc tên công cụ..."
                className="min-h-12 flex-1 rounded-md border border-transparent px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="min-h-12 rounded-md bg-red-600 px-6 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Tìm công cụ
              </button>
            </form>
            <div className="mt-4 flex flex-wrap gap-2">
              {popularGoals.map((goal) => (
                <Link
                  key={goal}
                  href={{ pathname: "/cong-cu-ai", query: { goal } }}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:bg-white/20"
                  onClick={() => trackEvent("cta_click", { cta_name: "hero_goal_chip", placement: "hero", goal })}
                >
                  {goal}
                </Link>
              ))}
            </div>
              <div className="mt-6 grid max-w-xl grid-cols-3 gap-3 border-t border-white/15 pt-5">
                <div>
                  <p className="text-2xl font-black">{tools.length}</p>
                  <p className="mt-1 text-xs text-slate-300">công cụ</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-emerald-300">{goalCount}</p>
                  <p className="mt-1 text-xs text-slate-300">mục tiêu</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-amber-300">{blogPosts.length}</p>
                  <p className="mt-1 text-xs text-slate-300">bài hướng dẫn</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase">Công cụ nổi bật</span>
                <span className="text-xs font-bold text-emerald-300">Miễn phí</span>
              </div>
              <h2 className="mt-5 text-2xl font-black leading-tight">
                Tìm Video Viral
                <span className="block text-amber-300">Trước Khi Đối Thủ Biết</span>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Quét hàng triệu video, tìm ngách chưa bão hòa và phân tích chiến lược nội dung bằng AI.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-black text-emerald-300">Cao</p>
                  <p className="mt-1 text-xs text-slate-300">traffic</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-black text-amber-300">Thấp</p>
                  <p className="mt-1 text-xs text-slate-300">cạnh tranh</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-lg font-black text-red-300">60s</p>
                  <p className="mt-1 text-xs text-slate-300">phân tích</p>
                </div>
              </div>
              <Link
                href="/cong-cu-ai/cong-cu-tim-video-viral"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Khám phá Viral Scanner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
