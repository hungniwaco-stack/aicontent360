import { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Kiếm Tiền bằng AI: affiliate, TikTok Shop, YouTube Automation, sản phẩm số",
  description:
    "Lộ trình thực chiến dùng AI để kiếm tiền online qua affiliate, bán hàng, TikTok Shop, YouTube Automation và kinh doanh sản phẩm số.",
  alternates: { canonical: "/kiem-tien-bang-ai" },
  openGraph: {
    title: "Kiếm Tiền bằng AI",
    description:
      "Lộ trình thực chiến dùng AI để kiếm tiền online qua affiliate, bán hàng, TikTok Shop, YouTube Automation và kinh doanh sản phẩm số.",
    url: `${siteConfig.url}/kiem-tien-bang-ai`,
    type: "website"
  }
};

export default function Page() {
  const faqs = [
    {
      question: "Người mới nên bắt đầu kiếm tiền bằng AI từ mô hình nào?",
      answer: "Nên bắt đầu từ affiliate ngách hẹp vì chi phí thấp, dễ đo hiệu quả và tối ưu nhanh theo dữ liệu."
    },
    {
      question: "Cần bao lâu để có kết quả đầu tiên?",
      answer: "Nếu triển khai đều 4-6 tuần với workflow rõ ràng, bạn có thể có tín hiệu view, lead và đơn đầu tiên."
    },
    {
      question: "AI có thay thế hoàn toàn người làm kinh doanh không?",
      answer: "Không. AI tăng tốc triển khai, còn chiến lược sản phẩm và định vị vẫn cần quyết định từ con người."
    }
  ];

  return (
    <div className="container-shell space-y-8 py-12">
      <section>
        <h1 className="text-3xl font-bold">Kiếm Tiền bằng AI</h1>
        <p className="mt-4 text-slate-700">
          AI giúp bạn rút ngắn thời gian từ ý tưởng đến triển khai: nghiên cứu thị trường, viết nội dung bán hàng, tối ưu kịch bản video và theo dõi hiệu quả.
          Với quy trình đúng, bạn có thể tăng tốc doanh thu mà không cần mở rộng đội ngũ quá sớm.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">6 mô hình kiếm tiền trọng tâm</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Affiliate Marketing: tạo nội dung chuyển đổi theo insight người mua.</li>
          <li>Bán hàng online: tăng tốc viết nội dung, kịch bản tư vấn, tối ưu đơn hàng.</li>
          <li>TikTok Shop: xây video ngắn có hook mạnh và CTA đúng thời điểm.</li>
          <li>YouTube Automation: chuẩn hóa quy trình nghiên cứu, script, thumbnail.</li>
          <li>Kinh doanh sản phẩm số: đóng gói template, prompt, workflow có giá trị.</li>
          <li>Thương hiệu cá nhân: xây niềm tin dài hạn để tăng giá trị vòng đời khách hàng.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">Lộ trình 30 ngày gợi ý</h2>
        <h3 className="mt-4 text-lg font-semibold">Tuần 1: Chọn ngách và chân dung khách hàng</h3>
        <p className="mt-2 text-slate-700">Xác định 1 ngách chính, 1 sản phẩm chủ lực và tiêu chí thành công rõ ràng.</p>
        <h3 className="mt-4 text-lg font-semibold">Tuần 2: Xây kho nội dung AI</h3>
        <p className="mt-2 text-slate-700">Tạo hàng loạt script video, bài viết và CTA theo từng giai đoạn phễu.</p>
        <h3 className="mt-4 text-lg font-semibold">Tuần 3: Đăng đều và đo chỉ số</h3>
        <p className="mt-2 text-slate-700">Theo dõi view, retention, CTR, số lead và tỷ lệ chốt để tối ưu tuần kế tiếp.</p>
        <h3 className="mt-4 text-lg font-semibold">Tuần 4: Nhân rộng biến thể thắng</h3>
        <p className="mt-2 text-slate-700">Đẩy mạnh format có hiệu quả, cắt bỏ nội dung kém và mở rộng sang kênh phụ.</p>
      </section>

      <section className="rounded-2xl bg-brand-900 p-6 text-white">
        <h2 className="text-2xl font-bold">CTA triển khai ngay</h2>
        <p className="mt-2 text-slate-200">Bắt đầu với công cụ phù hợp để giảm thử-sai và tăng tốc kết quả trong 30 ngày đầu.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/cong-cu-ai" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-900">Khám phá công cụ AI</Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
