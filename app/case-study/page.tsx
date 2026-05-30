import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Case Study AI Content Hub: Kết quả thực chiến tăng view và doanh thu",
  description:
    "Các case study thực tế về tăng view, xây kênh và kiếm tiền bằng AI với chỉ số đo lường rõ ràng và bài học triển khai.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study AI Content Hub",
    description:
      "Các case study thực tế về tăng view, xây kênh và kiếm tiền bằng AI với chỉ số đo lường rõ ràng và bài học triển khai.",
    url: `${siteConfig.url}/case-study`,
    type: "website"
  }
};

const cases = [
  {
    title: "Từ 0 đến 100.000 view bằng AI",
    timeline: "30 ngày",
    metrics: ["100.000+ views", "3.2x tỷ lệ giữ chân 3 giây", "2.1x số video đạt trên 10k view"],
    summary: "Chuẩn hóa quy trình tìm trend và test 3 biến thể hook/video giúp tăng tốc độ ra nội dung lẫn chất lượng retention.",
    lesson: "Kết quả đến từ nhịp test nhanh và vòng lặp tối ưu mỗi tuần, không phải từ một video may mắn."
  },
  {
    title: "Cách làm kênh kể chuyện bằng AI",
    timeline: "45 ngày",
    metrics: ["Tăng 4.5x watch time", "Series 12 tập liên tục", "CTR thumbnail tăng 38%"],
    summary: "Ứng dụng AI vào dàn ý kể chuyện, điểm cao trào và CTA cuối video để giữ người xem quay lại chuỗi nội dung.",
    lesson: "Storytelling mạnh cần cấu trúc cảm xúc nhất quán, không chỉ nội dung giật gân."
  },
  {
    title: "Cách làm affiliate sức khỏe bằng video ngắn",
    timeline: "60 ngày",
    metrics: ["Tăng 2.8x lead đủ điều kiện", "Giảm 31% chi phí test nội dung", "Tăng tỷ lệ chuyển đổi từ inbox"],
    summary: "Tập trung vào pain point rõ ràng, script ngắn theo hành trình người mua và CTA mềm theo từng nhóm khách hàng.",
    lesson: "Không chạy theo view đơn thuần, cần cân bằng giữa reach và tín hiệu chuyển đổi."
  },
  {
    title: "Cách dùng công cụ viral để tìm ý tưởng video",
    timeline: "14 ngày",
    metrics: ["Rút 70% thời gian nghiên cứu", "30 ý tưởng mới mỗi ngày", "Tăng tốc độ xuất bản 2x"],
    summary: "Dùng công cụ lọc trend theo ngách giúp đội nội dung ra quyết định nhanh và giảm tình trạng bí ý tưởng.",
    lesson: "Ý tưởng nhiều chỉ có giá trị khi có quy trình ưu tiên và triển khai đúng lịch."
  }
];

export default function Page() {
  return (
    <div className="container-shell space-y-8 py-12">
      <section>
        <h1 className="text-3xl font-bold">Case Study</h1>
        <p className="mt-3 text-slate-700">
          Dưới đây là các tình huống triển khai thực tế, có chỉ số đo lường rõ ràng để bạn tham khảo khi xây hệ thống content và kiếm tiền bằng AI.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {cases.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-1 text-sm text-brand-700">Timeline: {item.timeline}</p>
            <p className="mt-3 text-slate-700">{item.summary}</p>
            <h3 className="mt-4 font-semibold">Kết quả chính</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
              {item.metrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
              <span className="font-semibold">Bài học:</span> {item.lesson}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl bg-brand-900 p-6 text-white">
        <h2 className="text-2xl font-bold">Bạn muốn áp dụng mô hình nào trước?</h2>
        <p className="mt-2 text-slate-200">Chọn công cụ phù hợp theo mục tiêu hiện tại để triển khai nhanh và đo hiệu quả theo tuần.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/cong-cu-ai" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-900">Khám phá công cụ AI</Link>
          <Link href="/lien-he" className="rounded-xl border border-white px-4 py-3 text-sm font-semibold">Nhận tư vấn công cụ phù hợp</Link>
        </div>
      </section>
    </div>
  );
}
