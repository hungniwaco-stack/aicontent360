import { Metadata } from "next";
import { Suspense } from "react";
import { ToolFilter } from "@/components/ToolFilter";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Thư viện công cụ AI thực chiến cho content, view và affiliate",
  description:
    "Lọc và khám phá công cụ AI theo mục tiêu tạo content, tăng view, storytelling, affiliate, nền tảng và mức giá.",
  alternates: { canonical: "/cong-cu-ai" },
  openGraph: {
    title: "Thư viện công cụ AI thực chiến",
    description:
      "Lọc và khám phá công cụ AI theo mục tiêu tạo content, tăng view, storytelling, affiliate, nền tảng và mức giá.",
    url: `${siteConfig.url}/cong-cu-ai`,
    type: "website"
  }
};

export default function ToolsPage() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Thư Viện Công Cụ AI</h1><p className="mt-2 text-slate-600">Lọc theo mục tiêu, nền tảng và mức giá để chọn công cụ phù hợp.</p><div className="mt-6"><Suspense fallback={<p className="text-sm text-slate-500">Đang tải bộ lọc...</p>}><ToolFilter /></Suspense></div></div>;
}
