import { Metadata } from "next";

export const metadata: Metadata = { title: "Tăng View & Viral", description: "Tìm video viral, phân tích đối thủ, bắt trend và xây kênh từ số 0 bằng AI." };

export default function Page() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Tăng View & Viral</h1><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700"><li>Tìm video viral</li><li>Phân tích đối thủ</li><li>Bắt trend</li><li>Nghiên cứu ngách</li><li>Xây kênh từ số 0</li><li>Thuật toán TikTok/YouTube</li></ul><a href="https://hungniwaco.shop" className="mt-5 inline-block rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white">Dùng công cụ tìm video viral tại hungniwaco.shop</a></div>;
}
