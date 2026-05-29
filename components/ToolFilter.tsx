"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

const goalOptions = ["Tạo content", "Tăng view", "Kiếm tiền", "Storytelling", "Affiliate", "Sức khỏe", "Giáo dục", "Miễn phí"];
const platformOptions = ["TikTok", "YouTube", "Facebook", "Website", "Affiliate"];
const priceOptions = ["Miễn phí", "Dưới 100K", "100K-300K", "Trên 300K"];

function toggleCsv(current: string, value: string) {
  const set = new Set(current ? current.split(",") : []);
  if (set.has(value)) set.delete(value);
  else set.add(value);
  return Array.from(set).join(",");
}

export function ToolFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const q = searchParams.get("q") ?? "";
  const goalCsv = searchParams.get("goal") ?? "";
  const platformCsv = searchParams.get("platform") ?? "";
  const price = searchParams.get("price") ?? "";

  const goals = goalCsv ? goalCsv.split(",") : [];
  const platforms = platformCsv ? platformCsv.split(",") : [];

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const filtered = useMemo(
    () =>
      tools.filter((t) => {
        const matchQ = t.name.toLowerCase().includes(q.toLowerCase());
        const matchGoal = goals.length === 0 || goals.some((g) => t.goal.includes(g as never));
        const matchPlatform = platforms.length === 0 || platforms.some((p) => t.platform.includes(p as never));
        const matchPrice = !price || t.price === price;
        return matchQ && matchGoal && matchPlatform && matchPrice;
      }),
    [q, goals, platforms, price]
  );

  return (
    <div>
      <div className="mb-4 grid gap-3 md:grid-cols-2">
        <input value={q} onChange={(e) => setParam("q", e.target.value)} placeholder="Tìm theo tên công cụ..." className="w-full rounded-xl border border-slate-300 p-3" />
        <select value={price} onChange={(e) => setParam("price", e.target.value)} className="w-full rounded-xl border border-slate-300 p-3">
          <option value="">Mức giá</option>
          {priceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className="mb-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-sm font-semibold">Mục tiêu</p>
          <div className="flex flex-wrap gap-2">
            {goalOptions.map((o) => {
              const active = goals.includes(o);
              return <button type="button" key={o} onClick={() => setParam("goal", toggleCsv(goalCsv, o))} className={`rounded-full px-3 py-1 text-xs ${active ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700"}`}>{o}</button>;
            })}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-sm font-semibold">Nền tảng</p>
          <div className="flex flex-wrap gap-2">
            {platformOptions.map((o) => {
              const active = platforms.includes(o);
              return <button type="button" key={o} onClick={() => setParam("platform", toggleCsv(platformCsv, o))} className={`rounded-full px-3 py-1 text-xs ${active ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700"}`}>{o}</button>;
            })}
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-slate-500">Tìm thấy {filtered.length} công cụ phù hợp.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
      </div>
    </div>
  );
}
