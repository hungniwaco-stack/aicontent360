import { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Tăng View & Viral bằng AI: tìm trend sớm, phân tích đối thủ, tối ưu thuật toán",
  description:
    "Hướng dẫn thực chiến dùng AI để tìm video viral, phân tích đối thủ, bắt trend đúng ngách và tăng tốc tăng trưởng TikTok/YouTube.",
  alternates: { canonical: "/tang-view-viral" },
  openGraph: {
    title: "Tăng View & Viral bằng AI",
    description:
      "Hướng dẫn thực chiến dùng AI để tìm video viral, phân tích đối thủ, bắt trend đúng ngách và tăng tốc tăng trưởng TikTok/YouTube.",
    url: `${siteConfig.url}/tang-view-viral`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

export default function Page() {
  const faqs = [
    {
      question: "Bao lâu nên cập nhật danh sách video viral?",
      answer: "Nên cập nhật 2-3 lần/ngày với ngách cạnh tranh cao để bắt trend trước đối thủ."
    },
    {
      question: "Có cần sao chép y nguyên video đang viral không?",
      answer: "Không. Bạn nên giữ cấu trúc thắng cuộc nhưng đổi góc nhìn, hook và CTA theo thương hiệu của mình."
    },
    {
      question: "Người mới có thể dùng workflow này không?",
      answer: "Có. Bắt đầu từ 1 nền tảng chính, 1 ngách cụ thể và đo chỉ số theo tuần."
    }
  ];

  return (
    <div className="container-shell space-y-8 py-12">
      <section>
        <h1 className="text-3xl font-bold">Tăng View & Viral</h1>
        <p className="mt-4 text-slate-700">
          Muốn tăng view bền vững, bạn cần hệ thống phát hiện trend sớm, phân tích đối thủ đúng cách và triển khai nội dung theo quy trình.
          AI giúp rút ngắn thời gian nghiên cứu, tăng tốc thử nghiệm và nâng tỷ lệ giữ chân người xem.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">Quy trình tăng view bằng AI</h2>
        <h3 className="mt-4 text-lg font-semibold">1) Tìm video viral theo ngách</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          <li>Lọc theo từ khóa, định dạng video, tốc độ tăng tương tác.</li>
          <li>Ưu tiên video có hook mạnh trong 3 giây đầu.</li>
          <li>
            Dùng công cụ tìm ngách tại{" "}
            <a href="https://hungniwaco.shop" className="font-semibold text-brand-700 underline">
              hungniwaco.shop
            </a>{" "}
            để rút ngắn thời gian nghiên cứu.
          </li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold">2) Phân tích đối thủ và mẫu thắng cuộc</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          <li>Phân rã nội dung thành: hook, nhịp dựng, điểm cao trào, CTA.</li>
          <li>Tạo 3 biến thể để test nhanh trong 24-48 giờ.</li>
        </ul>
        <h3 className="mt-4 text-lg font-semibold">3) Bắt trend đúng thời điểm</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          <li>Đăng theo khung giờ đã có dữ liệu hiệu quả của kênh.</li>
          <li>Tối ưu caption, hashtag, thumbnail theo từng nền tảng.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold">Những lỗi thường gặp khi chạy viral</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Chạy theo trend quá rộng, không gắn với ngách cốt lõi.</li>
          <li>Không test nhiều biến thể hook nên kết luận sai về nội dung.</li>
          <li>Tập trung view nhưng quên CTA chuyển đổi hoặc điều hướng.</li>
        </ul>
      </section>

      <section className="rounded-2xl bg-brand-900 p-6 text-white">
        <h2 className="text-2xl font-bold">Công cụ đề xuất để triển khai ngay</h2>
        <p className="mt-2 text-slate-200">Dùng công cụ tìm video viral để rút ngắn thời gian nghiên cứu và ra quyết định nội dung nhanh hơn.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://hungniwaco.shop" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-900">
            Dùng công cụ tìm video viral tại hungniwaco.shop
          </a>
          <Link href="/cong-cu-ai/cong-cu-tim-video-viral" className="rounded-xl border border-white px-4 py-3 text-sm font-semibold">
            Xem chi tiết công cụ
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
