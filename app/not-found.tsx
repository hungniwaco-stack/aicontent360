import { Metadata } from "next";

export const metadata: Metadata = { title: "Không tìm thấy", description: "Trang bạn tìm không tồn tại." };

export default function NotFound() {
  return <div className="container-shell py-20"><h1 className="text-3xl font-bold">404</h1><p>Trang không tồn tại.</p></div>;
}
