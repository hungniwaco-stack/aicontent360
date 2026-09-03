import { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/data/siteConfig";

const faqs = [
  {
    question: "Kiếm tiền bằng AI có phải kiếm tiền nhanh không?",
    answer:
      "Không. AI giúp rút ngắn phần lặp lại (nghiên cứu, viết nội dung) chứ không tự tạo ra doanh thu. Vẫn cần chọn đúng sản phẩm/ngách, làm nội dung đều và giữ niềm tin với người xem."
  },
  {
    question: "Affiliate và bán sản phẩm số, cái nào nên làm trước?",
    answer:
      "Affiliate dễ bắt đầu hơn vì không cần tạo sản phẩm — chỉ cần nội dung tốt và chọn đúng sản phẩm phù hợp khán giả. Bán sản phẩm số phù hợp hơn khi đã có một lượng người theo dõi tin tưởng."
  },
  {
    question: "Làm sao để không bị coi là 'bán hàng lộ liễu'?",
    answer:
      "Giữ tỉ lệ phần lớn nội dung là giá trị thật, chỉ một phần nhỏ nhắc sản phẩm, và luôn minh bạch khi có link affiliate. Người xem tha thứ việc bán hàng, nhưng không tha thứ việc bị lừa."
  }
];

export const metadata: Metadata = {
  title: "Kiếm Tiền bằng AI: affiliate và bán hàng qua content bền vững",
  description:
    "Cách tiếp cận kiếm tiền từ content theo hướng bền vững — cho giá trị trước, bán sau, và luôn trung thực.",
  alternates: { canonical: "/kiem-tien-bang-ai" },
  openGraph: {
    title: "Kiếm Tiền bằng AI",
    description:
      "Cách tiếp cận kiếm tiền từ content theo hướng bền vững — cho giá trị trước, bán sau, và luôn trung thực.",
    url: `${siteConfig.url}/kiem-tien-bang-ai`,
    type: "website"
  }
};

export default function Page() {
  const relatedTools = tools.filter((t) => t.goal.includes("Kiếm tiền") || t.goal.includes("Affiliate")).slice(0, 6);
  const relatedPosts = blogPosts.filter((p) => p.category === "Kiếm tiền bằng AI").slice(0, 3);
  return (
    <div className="container-shell space-y-8 py-12">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900">Kiếm Tiền bằng AI</h1>
        <p className="mt-3 text-ink/80">
          Làm content để kiếm tiền — qua affiliate, bán sản phẩm hay dịch vụ — là một chuỗi việc lặp đi lặp lại: tìm
          ngách, chọn sản phẩm, làm nội dung, đăng đều, đo hiệu quả. AI gánh được phần lặp lại để bạn tập trung vào thứ
          cần con người: niềm tin và trải nghiệm thật.
        </p>
        <p className="mt-3 text-ink/80">
          Ở chuyên mục này, mình chia sẻ cách kiếm tiền từ content theo hướng bền vững — cho giá trị trước, bán sau, và
          luôn trung thực — thay vì bán gấp rồi mất niềm tin. Mình nói thật: mình vẫn đang thử nghiệm và chưa có con số
          doanh thu lớn để khoe; sẽ cập nhật khi có kết quả thật ở mục{" "}
          <Link href="/case-study" className="font-medium text-brand-700 underline">Case Study</Link>.
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
          <li><strong>1. Chọn một ngách và một sản phẩm cụ thể.</strong> Đừng ôm nhiều ngách cùng lúc — thuật toán và người xem đều khó nhận diện bạn là ai.</li>
          <li><strong>2. Làm nội dung giá trị trước, nhắc sản phẩm sau.</strong> Phần lớn video nên giải quyết một vấn đề thật của người xem.</li>
          <li><strong>3. Đo đúng chỉ số:</strong> không nhìn view tổng, nhìn tỉ lệ click vào link/bio và số người thực sự hỏi mua.</li>
        </ol>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
