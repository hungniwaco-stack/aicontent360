import { Metadata } from "next";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/data/siteConfig";

const faqs = [
  {
    question: "Tăng view có phải chỉ cần đăng nhiều hơn không?",
    answer:
      "Không. Đăng nhiều chủ đề đã bão hoà thường tốn công mà view vẫn thấp. Việc đáng làm trước là kiểm tra chủ đề còn cơ hội hay không, rồi mới quyết định tần suất đăng."
  },
  {
    question: "Làm sao biết một chủ đề đã bão hoà hay còn cơ hội?",
    answer:
      "Nhìn hai tín hiệu: tốc độ tăng của từ khoá/số video mới, và view trung bình của các kênh nhỏ trong chủ đề đó. Nếu kênh nhỏ vẫn đạt view tốt, chủ đề còn cửa. Xem thêm cách làm cụ thể trong blog bên dưới."
  },
  {
    question: "Phân tích đối thủ để làm gì nếu mình không muốn copy?",
    answer:
      "Để học cấu trúc thắng cuộc (hook, nhịp kể, độ dài) chứ không sao chép nội dung. Giữ nguyên khung, đổi góc nhìn và ví dụ là đủ để khác biệt mà vẫn tận dụng được công thức đã kiểm chứng."
  }
];

export const metadata: Metadata = {
  title: "Tăng View & Viral: tìm trend, phân tích đối thủ, viết hook",
  description:
    "Đọc tín hiệu tăng trưởng để vào ngách trước khi bão hoà, phân tích đối thủ và viết hook giữ chân người xem.",
  alternates: { canonical: "/tang-view-viral" },
  openGraph: {
    title: "Tăng View & Viral",
    description:
      "Đọc tín hiệu tăng trưởng để vào ngách trước khi bão hoà, phân tích đối thủ và viết hook giữ chân người xem.",
    url: `${siteConfig.url}/tang-view-viral`,
    type: "website"
  }
};

export default function Page() {
  const relatedTools = tools.filter((t) => t.goal.includes("Tăng view")).slice(0, 6);
  const relatedPosts = blogPosts.filter((p) => p.category === "Tăng view & viral").slice(0, 3);
  return (
    <div className="container-shell space-y-8 py-12">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900">Tăng View &amp; Viral</h1>
        <p className="mt-3 text-ink/80">
          Phần lớn người làm video đuổi theo trend khi nó đã lên đỉnh — và đến lúc đó thì đã muộn. Tăng view không phải
          chuyện may rủi: nó bắt đầu từ việc chọn đúng chủ đề, đúng thời điểm, rồi giữ chân người xem ngay 3 giây đầu.
        </p>
        <p className="mt-3 text-ink/80">
          Ở chuyên mục này, mình chia sẻ cách đọc tín hiệu tăng trưởng để vào ngách trước khi bão hoà, phân tích đối thủ
          để học công thức thắng, và viết hook khiến người ta không lướt qua. Hay đổ công vào chủ đề rồi nhận view thấp?
          Vấn đề thường ở khâu chọn chủ đề →{" "}
          <a href="https://hungniwaco.shop" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            thử HSHOP 39.000đ/7 ngày
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
          <li><strong>1. Kiểm tra chủ đề trước khi quay.</strong> Xem tốc độ tăng trưởng và mức độ cạnh tranh của chủ đề, đừng đoán bằng cảm giác.</li>
          <li><strong>2. Soi 2-3 video thắng cuộc gần nhất trong chủ đề đó.</strong> Ghi lại cấu trúc hook, nhịp kể — không copy, chỉ học khung.</li>
          <li><strong>3. Viết hook theo một trong các mẫu đã kiểm chứng</strong>, đăng, rồi theo dõi tỉ lệ giữ chân 3 giây đầu để biết hook có ăn không.</li>
        </ol>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
