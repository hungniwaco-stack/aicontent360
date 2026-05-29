import { Metadata } from "next";
import { Suspense } from "react";
import { ToolFilter } from "@/components/ToolFilter";

export const metadata: Metadata = { title: "Thư Viện Công Cụ AI", description: "Kho công cụ AI thực chiến theo mục tiêu tạo content, tăng view và kiếm tiền." };

export default function ToolsPage() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Thư Viện Công Cụ AI</h1><p className="mt-2 text-slate-600">Lọc theo mục tiêu, nền tảng và mức giá để chọn công cụ phù hợp.</p><div className="mt-6"><Suspense fallback={<p className="text-sm text-slate-500">Đang tải bộ lọc...</p>}><ToolFilter /></Suspense></div></div>;
}
