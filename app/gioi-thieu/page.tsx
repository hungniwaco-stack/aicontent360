import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const description =
  "Mình là người đang làm content và ghi lại thật những công cụ, quy trình AI mình dùng — không lý thuyết bóng bẩy, không số liệu tô vẽ.";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description,
  alternates: { canonical: "/gioi-thieu" },
  openGraph: {
    title: "Giới Thiệu | AIContent360",
    description,
    url: `${siteConfig.url}/gioi-thieu`,
    type: "profile",
    images: [siteConfig.defaultOgImage]
  }
};

export default function Page() {
  return (
    <div className="container-shell py-12">
      <article className="mx-auto max-w-3xl space-y-5 text-ink/80">
        <h1 className="text-3xl font-bold text-brand-900">
          Mình đang học cách để AI làm phần lớn công việc thay mình
        </h1>

        <p>Mình không phải chuyên gia AI. Mình không có 100.000 subscriber hay triệu view mỗi tháng.</p>
        <p>
          Mình là người đang làm content — và thú thật, có lúc cũng mệt vì cứ loay hoay mãi với câu hỏi:{" "}
          <em>&quot;Hôm nay đăng gì? Ngách này còn ăn không? Sao video của mình view thấp thế?&quot;</em> Rồi mình bắt đầu
          thử nghiệm AI. Không phải vì tin quảng cáo — mà vì tò mò.
        </p>

        <h2 className="pt-2 text-2xl font-bold text-brand-900">Vì sao mình lập ra aicontent360.shop?</h2>
        <p>
          Khi tìm hiểu công cụ AI cho content, mình nhận ra có quá nhiều thứ, quá nhiều &quot;giải pháp thần kỳ&quot;,
          quá nhiều người bán khoá học mà chưa chứng minh được gì ngoài việc bán khoá học. Mình không muốn làm vậy.
        </p>
        <p>
          Mình muốn có một chỗ để <strong>ghi lại những gì mình thực sự thử</strong> — tool nào đang dùng, dùng ra sao,
          kết quả thật thế nào (kể cả khi chưa hoàn hảo). Rồi nếu có gì hữu ích, chia sẻ lại để người khác khỏi mất thời
          gian lần mò như mình. Đó là lý do aicontent360.shop tồn tại.
        </p>

        <h2 className="pt-2 text-2xl font-bold text-brand-900">Mình đang dùng và thử nghiệm gì?</h2>
        <p>
          <a href="https://hungniwaco.shop" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            HSHOP YouTube Analytics
          </a>{" "}
          — công cụ phân tích YouTube giúp tìm ngách chưa bão hoà và theo dõi tốc độ tăng trưởng của từng từ khoá. Mình
          dùng nó để trả lời: <em>&quot;Chủ đề này còn cơ hội không, hay đã muộn rồi?&quot;</em>
        </p>
        <p>
          <a href="https://hungniwaco.vn" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            Chatbot AI tạo content
          </a>{" "}
          — bộ chatbot huấn luyện sẵn theo từng ngách (sức khoẻ, kể chuyện, affiliate mỹ phẩm…) giúp tạo kịch bản, hook,
          CTA nhanh hơn. Thay vì nhìn màn hình trắng 30 phút, mình có draft đầu tiên trong 5 phút rồi chỉnh từ đó.
        </p>
        <p>
          Mình không hứa hai công cụ này là &quot;tốt nhất thị trường&quot;. Mình chỉ nói:{" "}
          <strong>mình đang dùng, đang quan sát, và sẽ chia sẻ thật những gì mình thấy.</strong>
        </p>

        <h2 className="pt-2 text-2xl font-bold text-brand-900">Bạn sẽ tìm thấy gì ở đây?</h2>
        <p>
          <strong>Hướng dẫn thực chiến</strong> — không lý thuyết dài, không copy-paste từ ChatGPT. Mỗi bài là thứ mình đã
          tự làm hoặc đang làm. <strong>Review công cụ AI trung thực</strong> — mình thử, ghi lại, nói thật, kể cả điểm
          yếu. <strong>Workflow tiết kiệm thời gian</strong> — vì AI không phải để thay thế bạn, mà giúp bạn làm được
          nhiều hơn trong cùng khoảng thời gian.
        </p>

        <h2 className="pt-2 text-2xl font-bold text-brand-900">Mình không hứa gì quá lớn</h2>
        <p>
          Nhiều trang sẽ nói: <em>&quot;Dùng AI làm content — kiếm 100 triệu/tháng!&quot;</em> Mình không nói vậy, vì mình
          chưa đến đó. Thứ mình hứa được: chia sẻ đúng những gì mình đang làm — cả điều hiệu quả lẫn chưa hiệu quả — và
          cập nhật liên tục khi có kết quả mới. Nếu bạn thích học từ kinh nghiệm thật hơn là lý thuyết bóng bẩy, đây là
          chỗ dành cho bạn.
        </p>

        <h2 className="pt-2 text-2xl font-bold text-brand-900">Bắt đầu từ đâu?</h2>
        <p>
          Muốn dùng AI để <strong>tìm ngách YouTube nhanh hơn</strong> →{" "}
          <a href="https://hungniwaco.shop" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            xem HSHOP Analytics
          </a>
          . Muốn <strong>viết kịch bản, hook, CTA bằng chatbot</strong> →{" "}
          <a href="https://hungniwaco.vn" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            thử Chatbot AI tạo content
          </a>
          . Hoặc đọc thêm ở{" "}
          <Link href="/blog" className="font-medium text-brand-700 underline">
            Blog
          </Link>{" "}
          — mình viết thường xuyên về những gì học được.
        </p>

        <p className="pt-2 text-ink/55">Cảm ơn bạn đã ghé. Hy vọng bạn tìm thấy thứ gì đó hữu ích ở đây. — Hùng</p>
      </article>
    </div>
  );
}
