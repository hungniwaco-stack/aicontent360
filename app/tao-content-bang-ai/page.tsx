import { Metadata } from "next";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/data/siteConfig";

const faqs = [
  {
    question: "Dùng AI viết kịch bản có làm nội dung mất chất riêng không?",
    answer:
      "Có, nếu dùng nguyên bản đầu tiên AI đưa ra. Cách mình dùng: để AI ra bản nháp (hook, cấu trúc, ý chính), rồi tự viết lại bằng giọng của mình và thêm ví dụ/trải nghiệm thật."
  },
  {
    question: "Chatbot huấn luyện theo ngách khác gì so với ChatGPT thường?",
    answer:
      "Chatbot theo ngách đã được định hướng sẵn giọng văn và mô-típ của một chủ đề cụ thể (sức khỏe, kể chuyện, affiliate...), nên bản nháp đầu ra sát với ngách hơn ChatGPT thông thường, đỡ phải viết lại prompt mỗi lần."
  },
  {
    question: "Nên viết kịch bản dài bao nhiêu cho video ngắn?",
    answer:
      "Với TikTok/Shorts, 40-60 giây (khoảng 100-150 từ khi đọc) là điểm hợp lý cho nội dung hướng dẫn. Nội dung giải trí thuần có thể ngắn hơn."
  }
];

export const metadata: Metadata = {
  title: "Tạo Content bằng AI: Storytelling, kịch bản video, content viral",
  description:
    "Hướng dẫn ứng dụng AI để tạo nội dung nhanh hơn: storytelling, kịch bản video, content chuyên ngành và kịch bản bán hàng.",
  alternates: { canonical: "/tao-content-bang-ai" },
  openGraph: {
    title: "Tạo Content bằng AI",
    description:
      "Hướng dẫn ứng dụng AI để tạo nội dung nhanh hơn: storytelling, kịch bản video, content chuyên ngành và kịch bản bán hàng.",
    url: `${siteConfig.url}/tao-content-bang-ai`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

export default function Page() {
  const relatedTools = tools.filter((t) => t.goal.includes("Tạo content") || t.goal.includes("Storytelling")).slice(0, 6);
  const relatedPosts = blogPosts
    .filter((p) => p.category === "Tạo content bằng AI" || p.category === "Storytelling AI")
    .slice(0, 3);
  return (
    <div className="container-shell space-y-8 py-12">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900">Tạo Content bằng AI</h1>
        <p className="mt-3 text-ink/80">
          Khâu tốn thời gian nhất của người làm content không phải quay hay dựng — mà là ngồi nghĩ nên viết gì và viết
          thế nào. AI không thay bạn sáng tạo, nhưng nó xoá được nỗi sợ màn hình trắng: thay vì bắt đầu từ con số 0, bạn
          bắt đầu từ một bản nháp rồi chỉnh.
        </p>
        <p className="mt-3 text-ink/80">
          Ở chuyên mục này, mình chia sẻ cách dùng AI để viết kịch bản video, hook và nội dung theo từng ngách — nhanh
          hơn mà vẫn giữ được chất riêng. Muốn chatbot đã huấn luyện sẵn theo ngách để khỏi viết prompt mỗi lần →{" "}
          <a href="https://hungniwaco.vn" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            xem bộ Chatbot AI tạo content
          </a>
          .
        </p>
      </section>
      {relatedTools.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedTools.map((t) => <ToolCard key={t.id} tool={t} />)}
        </section>
      ) : null}
      {relatedPosts.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((p) => <BlogCard key={p.id} post={p} />)}
        </section>
      ) : null}

      <section className="max-w-3xl rounded-lg border border-ink/12 bg-white p-6">
        <h2 className="text-xl font-bold text-brand-900">Bắt đầu thế nào — 3 bước</h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-ink/80">
          <li><strong>1. Cho AI biết rõ đối tượng và mục tiêu</strong> — &quot;người mới làm content&quot; và &quot;chủ shop mỹ phẩm&quot; cần giọng khác hẳn nhau.</li>
          <li><strong>2. Lấy bản nháp làm điểm bắt đầu, không phải điểm kết thúc.</strong> Luôn chỉnh hook và thêm chi tiết thật của riêng bạn.</li>
          <li><strong>3. Đọc to kịch bản trước khi quay.</strong> Nếu nghe như đang đọc bài, viết lại cho giống đang nói chuyện.</li>
        </ol>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
