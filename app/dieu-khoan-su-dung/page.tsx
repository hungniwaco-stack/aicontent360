import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

const description =
  "Điều khoản khi truy cập AIContent360 và sử dụng các tài nguyên, công cụ AI, nội dung số được giới thiệu trên website.";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng",
  description,
  alternates: { canonical: "/dieu-khoan-su-dung" },
  openGraph: {
    title: "Điều khoản sử dụng | AI Content Hub",
    description,
    url: `${siteConfig.url}/dieu-khoan-su-dung`,
    type: "website"
  }
};

const terms = [
  {
    title: "1. Phạm vi áp dụng",
    body: "Điều khoản này áp dụng khi bạn truy cập website, đọc nội dung, tải tài nguyên miễn phí, gửi email hỗ trợ hoặc mua sản phẩm số được AIContent360 giới thiệu."
  },
  {
    title: "2. Nội dung và tài nguyên",
    body: "Tài nguyên, prompt, template, hướng dẫn và bài viết trên website được cung cấp nhằm hỗ trợ học tập, sáng tạo nội dung và vận hành kênh số. Bạn chịu trách nhiệm kiểm tra tính phù hợp trước khi áp dụng vào ngành nghề, nền tảng hoặc chiến dịch cụ thể."
  },
  {
    title: "3. Quyền sử dụng sản phẩm số",
    body: "Trừ khi trang sản phẩm ghi khác, bạn được sử dụng tài nguyên đã mua cho công việc cá nhân hoặc nội bộ đội nhóm của mình. Bạn không được sao chép, bán lại, chia sẻ công khai file gốc hoặc đóng gói lại thành sản phẩm cạnh tranh."
  },
  {
    title: "4. Cam kết của người dùng",
    body: "Bạn không sử dụng website hoặc tài nguyên để tạo nội dung vi phạm pháp luật, xâm phạm quyền sở hữu trí tuệ, gây hiểu nhầm nghiêm trọng, lừa đảo, spam hoặc gây hại cho cá nhân/tổ chức khác."
  },
  {
    title: "5. Liên kết bên thứ ba",
    body: "Một số nút mua hàng hoặc dùng công cụ có thể dẫn tới nền tảng bên thứ ba. Khi rời khỏi AIContent360, bạn cần đọc điều khoản, chính sách riêng của nền tảng đó trước khi giao dịch."
  },
  {
    title: "6. Thay đổi điều khoản",
    body: "AIContent360 có thể cập nhật điều khoản để phản ánh thay đổi sản phẩm, vận hành hoặc yêu cầu pháp lý. Phiên bản mới có hiệu lực khi được đăng trên website."
  }
];

export default function Page() {
  return (
    <main className="container-shell py-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Cập nhật: 20/06/2026</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">Điều khoản sử dụng</h1>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Khi tiếp tục sử dụng website, bạn đồng ý với các điều khoản dưới đây. Nếu không đồng ý, vui lòng ngừng sử dụng website và liên
          hệ chúng tôi để được hỗ trợ.
        </p>
        <div className="mt-8 space-y-5">
          {terms.map((term) => (
            <section key={term.title} className="rounded-lg border border-ink/12 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-brand-900">{term.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/70">{term.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-ink/12 bg-paper p-5 text-sm leading-7 text-ink/70">
          Cần làm rõ quyền sử dụng hoặc phạm vi áp dụng cho một sản phẩm cụ thể? Gửi email tới{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-brand-700 underline">
            {siteConfig.contact.email}
          </a>
          .
        </div>
      </article>
    </main>
  );
}
