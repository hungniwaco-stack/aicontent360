import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Thông tin liên hệ AIContent360."
};

export default function Page() {
  return (
    <div className="container-shell py-12">
      <div className="max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Liên hệ</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">AIContent360</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Cần hỗ trợ về công cụ, thanh toán hoặc nội dung trên website, bạn có thể gửi email trực tiếp tới:
        </p>
        <a href={`mailto:${siteConfig.contact.email}`} className="mt-4 inline-flex rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900">
          {siteConfig.contact.email}
        </a>
      </div>
    </div>
  );
}
