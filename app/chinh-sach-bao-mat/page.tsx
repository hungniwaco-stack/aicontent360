import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: "Cách AIContent360 thu thập, sử dụng và bảo vệ thông tin cá nhân khi bạn dùng website."
};

const sections = [
  {
    title: "1. Thông tin chúng tôi có thể thu thập",
    body: [
      "Khi bạn gửi email hỗ trợ, chúng tôi có thể nhận tên, email và nội dung nhu cầu sử dụng công cụ AI mà bạn tự cung cấp.",
      "Website có thể dùng công cụ phân tích như Google Analytics hoặc Google Tag Manager để ghi nhận dữ liệu kỹ thuật tổng hợp, ví dụ trang đã xem, nguồn truy cập và sự kiện nhấp CTA."
    ]
  },
  {
    title: "2. Mục đích sử dụng",
    body: [
      "Thông tin được dùng để phản hồi email hỗ trợ, xử lý giao dịch sản phẩm số và cải thiện trải nghiệm nội dung trên website.",
      "Chúng tôi không bán thông tin cá nhân của bạn cho bên thứ ba."
    ]
  },
  {
    title: "3. Chia sẻ dữ liệu",
    body: [
      "Dữ liệu có thể được xử lý qua các nền tảng cần thiết để vận hành website, phân tích truy cập, gửi email hoặc xử lý thanh toán.",
      "Trong trường hợp pháp luật yêu cầu, chúng tôi có thể cung cấp thông tin theo đúng phạm vi yêu cầu hợp lệ của cơ quan có thẩm quyền."
    ]
  },
  {
    title: "4. Lưu trữ và bảo vệ",
    body: [
      "AIContent360 áp dụng các biện pháp hợp lý để hạn chế truy cập trái phép, thất lạc hoặc sử dụng sai mục đích thông tin bạn gửi.",
      "Vì website hiện là static export, trang liên hệ chỉ hiển thị email hỗ trợ và không tự lưu nội dung liên hệ vào cơ sở dữ liệu của website."
    ]
  },
  {
    title: "5. Quyền của bạn",
    body: [
      "Bạn có thể yêu cầu kiểm tra, chỉnh sửa hoặc xóa thông tin cá nhân đã gửi cho chúng tôi bằng cách liên hệ qua email hỗ trợ.",
      "Bạn có thể tắt hoặc giới hạn cookie/analytics trong trình duyệt, tuy nhiên một số thống kê trải nghiệm có thể không còn chính xác."
    ]
  }
];

export default function Page() {
  return (
    <main className="container-shell py-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Cập nhật: 20/06/2026</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Chính sách bảo mật</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Chính sách này giải thích cách {siteConfig.contact.businessName} xử lý thông tin khi bạn truy cập website, gửi email hỗ trợ
          hoặc mua/sử dụng sản phẩm số được giới thiệu trên hệ sinh thái AIContent360.
        </p>
        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          Nội dung này được xây dựng theo định hướng tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và không thay thế tư vấn
          pháp lý chuyên nghiệp. Liên hệ:{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline">
            {siteConfig.contact.email}
          </a>
          .
        </div>
      </article>
    </main>
  );
}
