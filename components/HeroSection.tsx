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

  const stats = [
    { value: tools.length, label: "công cụ" },
    { value: goalCount, label: "mục tiêu" },
    { value: blogPosts.length, label: "bài hướng dẫn" }
  ];

  return (
    <section className="border-b-2 border-ink/10 bg-paper">
      <div className="container-shell py-8 sm:py-12">
        <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-[#F4EDDF] text-ink shadow-[0_12px_36px_-14px_rgba(33,28,21,0.22)]">
          <span className="absolute left-0 top-0 h-full w-1.5 bg-brand-700" aria-hidden />
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="eyebrow text-brand-700">{"// danh mục công cụ ai cho creator việt"}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
              Bạn muốn AI giúp gì
              <span className="block text-brand-700">hôm nay?</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">
              Tìm đúng công cụ để lên ý tưởng, viết kịch bản, tăng view, xây kênh affiliate hoặc sản xuất nội dung theo ngách.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex max-w-2xl flex-col gap-1.5 rounded-lg border-2 border-ink/15 bg-white p-1.5 shadow-sm sm:flex-row">
              <label htmlFor="hero-tool-search" className="sr-only">Tìm công cụ AI</label>
              <input
                id="hero-tool-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nhập mục tiêu, ngách hoặc tên công cụ..."
                className="min-h-12 flex-1 rounded-md border border-transparent bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-brand-500"
              />
              <button
                type="submit"
                className="min-h-12 rounded-md bg-brand-700 px-6 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900"
              >
                Tìm công cụ
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-2">
              {popularGoals.map((goal) => (
                <Link
                  key={goal}
                  href={{ pathname: "/cong-cu-ai", query: { goal } }}
                  className="rounded-md border border-ink/20 px-3 py-1.5 font-mono text-xs text-ink/70 transition-colors hover:border-brand-700 hover:text-brand-700"
                  onClick={() => trackEvent("cta_click", { cta_name: "hero_goal_chip", placement: "hero", goal })}
                >
                  {goal}
                </Link>
              ))}
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink/12 pt-6 font-mono">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-bold text-brand-700">{s.value}</dd>
                  <dd className="text-xs uppercase tracking-wider text-ink/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
