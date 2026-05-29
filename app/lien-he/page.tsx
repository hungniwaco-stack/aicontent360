import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Liên Hệ", description: "Liên hệ tư vấn công cụ AI phù hợp theo mục tiêu content và kiếm tiền." };

export default function Page() {
  return <div className="container-shell space-y-6 py-12"><h1 className="text-3xl font-bold">Liên Hệ</h1><div className="grid gap-6 lg:grid-cols-2"><ContactForm /><div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700"><p>Zalo: 0900 000 000</p><p className="mt-2">Facebook: fb.com/aicontenthub</p><p className="mt-2">Email: hello@aicontenthub.vn</p><button className="mt-5 rounded-xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white">Nhận tư vấn công cụ phù hợp</button></div></div></div>;
}
