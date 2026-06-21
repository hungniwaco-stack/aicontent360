"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

const goalOptions = ["Tạo content", "Tăng view", "Kiếm tiền", "Storytelling", "Affiliate", "Sức khỏe", "Giáo dục", "Miễn phí"];
const priceOptions = ["Miễn phí", "Dưới 100K", "100K-300K", "Trên 300K"];

export function ToolFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = searchParams.get("q") ?? "";
  const selectedGoal = searchParams.get("goal") ?? "";
  const price = searchParams.get("price") ?? "";

  const hasFilters = Boolean(q || selectedGoal || price);

  useEffect(() => {
    if (!searchParams.has("platform")) return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete("platform");
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname);
  }, [pathname, router, searchParams]);

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("platform");
    if (value) params.set(key, value);
    else params.delete(key);
    const nextQuery = params.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname);
  };

  const clearFilters = () => {
    router.replace(pathname);
  };

  const getSingleFilterHref = (key: string, current: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("platform");
    if (current === value) params.delete(key);
    else params.set(key, value);
    const nextQuery = params.toString();
    return nextQuery ? `${pathname}?${nextQuery}` : pathname;
  };

  const filtered = useMemo(
    () =>
      tools.filter((tool) => {
        const normalizedQuery = q.trim().toLowerCase();
        const searchableText = [tool.name, tool.category, tool.shortDescription, tool.longDescription].join(" ").toLowerCase();
        const matchQ = !normalizedQuery || searchableText.includes(normalizedQuery);
        const matchGoal = !selectedGoal || tool.goal.includes(selectedGoal as never);
        const matchPrice = !price || tool.price === price;
        return matchQ && matchGoal && matchPrice;
      }),
    [q, selectedGoal, price]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-brand-900">Bộ lọc</h2>
          {hasFilters ? (
            <button type="button" onClick={clearFilters} className="text-sm font-semibold text-brand-700 hover:text-brand-900">
              Xóa lọc
            </button>
          ) : null}
        </div>

        <div className="mt-4 space-y-5">
          <div>
            <label htmlFor="tool-search" className="text-sm font-semibold text-slate-700">Tìm kiếm</label>
            <input
              id="tool-search"
              value={q}
              onChange={(event) => setParam("q", event.target.value)}
              placeholder="Tên, ngách, mục tiêu..."
              className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="tool-price" className="text-sm font-semibold text-slate-700">Mức giá</label>
            <select
              id="tool-price"
              value={price}
              onChange={(event) => setParam("price", event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">Tất cả mức giá</option>
              {priceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-slate-700">Mục tiêu</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {goalOptions.map((option) => {
                const active = selectedGoal === option;
                return (
                  <Link
                    key={option}
                    aria-pressed={active}
                    href={getSingleFilterHref("goal", selectedGoal, option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      active ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-brand-700"
                    }`}
                  >
                    {option}
                  </Link>
                );
              })}
            </div>
          </fieldset>

        </div>
      </aside>

      <section>
        <div className="mb-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-900">Tìm thấy {filtered.length} công cụ phù hợp</p>
            <p className="mt-1 text-sm text-slate-600">Ưu tiên công cụ có đầu ra cụ thể và mô tả dễ chọn nhanh.</p>
          </div>
          <p className="text-sm text-slate-500">{tools.length} công cụ trong thư viện</p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-brand-900">Chưa có công cụ khớp bộ lọc</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">Thử bỏ bớt một mục tiêu, đổi mức giá hoặc tìm bằng từ khóa rộng hơn.</p>
            <button type="button" onClick={clearFilters} className="mt-4 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-900">
              Xem lại toàn bộ thư viện
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
