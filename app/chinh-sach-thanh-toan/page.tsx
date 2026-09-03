import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

const description = "Thông tin về thanh toán, giao sản phẩm số, hỗ trợ đổi trả và hoàn tiền trên AIContent360.";

export const metadata: Metadata = {
  title: "Chính sách thanh toán",
  description,
  alternates: { canonical: "/chinh-sach-thanh-toan" },
  openGraph: {
    title: "Chính sách thanh toán | AIContent360",
    description,
    url: `${siteConfig.url}/chinh-sach-thanh-toan`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

const policies = [
  {
    title: "1. Hình thức thanh toán",
    body: "Tùy từng sản phẩm, thanh toán có thể được thực hiện qua nền tảng bán hàng, cổng thanh toán, chuyển khoản hoặc kênh đối tác được liên kết từ trang chi tiết công cụ."
  },
  {
    title: "2. Giao sản phẩm số",
    body: "Với sản phẩm số như prompt, template, tài liệu hoặc chatbot, quyền truy cập hoặc file tải về thường được cung cấp sau khi thanh toán thành công theo hướng dẫn tại trang sản phẩm."
  },
  {
    title: "3. Kiểm tra trước khi mua",
    body: "Bạn nên đọc kỹ mô tả sản phẩm, đầu ra mẫu, nền tảng hỗ trợ, điều kiện sử dụng và mức giá tại trang bán hàng trước khi thanh toán."
  },
  {
    title: "4. Hỗ trợ sau thanh toán",
    body: "Nếu đã thanh toán nhưng chưa nhận được quyền truy cập, hãy gửi email kèm thông tin đơn hàng, thời gian thanh toán và kênh thanh toán để chúng tôi kiểm tra."
  },
  {
    title: "5. Đổi trả và hoàn tiền",
    body: "Do đặc thù sản phẩm số có thể được truy cập ngay sau thanh toán, yêu cầu hoàn tiền sẽ được xem xét theo từng trường hợp, đặc biệt khi có lỗi kỹ thuật, giao nhầm sản phẩm hoặc mô tả sản phẩm sai lệch đáng kể."
  },
  {
    title: "6. Giao dịch qua bên thứ ba",
    body: "Nếu giao dịch diễn ra trên nền tảng bên thứ ba, chính sách thanh toán, hóa đơn, hoàn tiền và giải quyết tranh chấp của nền tảng đó cũng có thể được áp dụng."
  }
];

export default function Page() {
  return (
    <main className="container-shell py-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Cập nhật: 20/06/2026</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Chính sách thanh toán</h1>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Chính sách này giúp bạn hiểu cách AIContent360 xử lý thanh toán và hỗ trợ đối với sản phẩm số, tài nguyên AI và công cụ được
          giới thiệu trên website.
        </p>
        <div className="mt-8 space-y-5">
          {policies.map((policy) => (
            <section key={policy.title} className="rounded-lg border border-ink/12 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-brand-900">{policy.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">{policy.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-brand-500 bg-brand-50 p-5 text-sm leading-7 text-brand-900">
          Cần hỗ trợ giao dịch? Gửi thông tin đơn hàng tới{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline">
            {siteConfig.contact.email}
          </a>
          . Chúng tôi ưu tiên các yêu cầu có mã đơn, ảnh giao dịch và đường dẫn sản phẩm.
        </div>
      </article>
    </main>
  );
}
