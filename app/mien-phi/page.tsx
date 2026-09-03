import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const description = "Checklist, bộ prompt và workflow miễn phí giúp bạn bắt đầu làm content bằng AI nhanh hơn.";

export const metadata: Metadata = {
  title: "Tài Nguyên Miễn Phí",
  description,
  alternates: { canonical: "/mien-phi" },
  openGraph: {
    title: "Tài Nguyên Miễn Phí | AIContent360",
    description,
    url: `${siteConfig.url}/mien-phi`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

const resources = [
  {
    icon: "📋",
    title: "Checklist: 10 bước ra video đầu tiên bằng AI",
    desc: "Quy trình từ 'chưa biết làm gì' đến 'đã đăng video' mà không kẹt giữa chừng. In ra, tick từng bước.",
    keyword: "CHECKLIST"
  },
  {
    icon: "✍️",
    title: "Bộ 15 prompt tạo ý tưởng & kịch bản",
    desc: "15 prompt dùng thường xuyên nhất để sinh ý tưởng, viết hook và dựng kịch bản. Copy, dán vào AI, đổi chủ đề là chạy.",
    keyword: "PROMPT"
  },
  {
    icon: "🎯",
    title: "Workflow sản xuất content theo tuần",
    desc: "Sơ đồ một trang: gom việc làm theo lô để đăng đều mà không kiệt sức.",
    keyword: "WORKFLOW"
  }
];

export default function Page() {
  return (
    <div className="container-shell space-y-8 py-12">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900">Tài Nguyên Miễn Phí</h1>
        <p className="mt-3 text-ink/80">
          Mới bắt đầu làm content bằng AI? Đây là những thứ mình tự dùng, gói lại miễn phí để bạn khỏi mất thời gian lần
          mò như mình. Không cần trả phí — chỉ cần bắt tay làm.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {resources.map((r) => (
          <article key={r.keyword} className="flex flex-col rounded-lg border border-ink/12 bg-white p-6">
            <div className="text-3xl">{r.icon}</div>
            <h2 className="mt-3 text-lg font-bold text-brand-900">{r.title}</h2>
            <p className="mt-2 flex-1 text-sm text-ink/70">{r.desc}</p>
            <a
              href="https://zalo.me/0944851719"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#0068FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0055d4]"
            >
              Nhắn Zalo &quot;{r.keyword}&quot; để nhận
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-lg bg-paper p-6 text-ink/80">
        <h2 className="text-xl font-bold text-brand-900">Cách nhận tài nguyên</h2>
        <p className="mt-2 text-sm">
          Bấm nút tương ứng, nhắn Zalo cho mình từ khoá (ví dụ &quot;CHECKLIST&quot;), mình gửi bạn tài nguyên ngay. Tiện
          thể, nếu bạn đang kẹt ở đâu trong việc làm content, cứ nhắn — mình trả lời thật trong khả năng của mình.
        </p>
      </section>

      <section className="text-ink/80">
        <h2 className="text-xl font-bold text-brand-900">Sau khi có tài nguyên, làm gì tiếp?</h2>
        <p className="mt-2">
          Muốn biết nên làm chủ đề gì để không phí công →{" "}
          <a href="https://hungniwaco.shop" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            HSHOP — dùng thử 39.000đ/7 ngày
          </a>
          . Muốn viết kịch bản nhanh hơn →{" "}
          <a href="https://hungniwaco.vn" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            bộ Chatbot AI tạo content theo ngách
          </a>
          . Hoặc đọc thêm ở{" "}
          <Link href="/blog" className="font-medium text-brand-700 underline">Blog</Link>.
        </p>
      </section>
    </div>
  );
}
