import { Metadata } from "next";

export const metadata: Metadata = { title: "Giới Thiệu", description: "Đại lý/cộng tác viên phân phối công cụ AI thực chiến cho content và kinh doanh online." };

export default function Page() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Giới Thiệu</h1><p className="mt-3 text-slate-700">Chúng tôi là đại lý/cộng tác viên phân phối công cụ AI, giúp người dùng ứng dụng AI thực tế vào content và kinh doanh online.</p><p className="mt-3 text-slate-700">Sứ mệnh: hướng dẫn dễ hiểu, công cụ thực chiến, cập nhật liên tục.</p></div>;
}
