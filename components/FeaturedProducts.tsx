import Link from "next/link";

type Product = {
  role: string;
  tag: string;
  title: string;
  desc: string;
  specs: [string, string][];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const products: Product[] = [
  {
    role: "chatbot · theo ngách",
    tag: "trả phí",
    title: "Chatbot AI Tạo Content Theo Ngách",
    desc: "Bộ chatbot huấn luyện sẵn theo từng ngách. Đưa chủ đề, nhận kịch bản, hook và CTA — thay vì ngồi nhìn màn hình trắng.",
    specs: [
      ["Ngách", "Sức khoẻ · kể chuyện · affiliate"],
      ["Đầu ra", "Kịch bản · hook · CTA"],
      ["Tốc độ", "Bản nháp trong vài phút"]
    ],
    primary: { label: "Xem bộ Chatbot", href: "https://hungniwaco.vn" },
    secondary: { label: "Duyệt thư viện", href: "/cong-cu-ai" }
  },
  {
    role: "scanner · tìm ngách",
    tag: "dùng thử 39k",
    title: "Tìm Video Viral Trước Khi Đối Thủ Biết",
    desc: "Quét hàng triệu video, tìm ngách chưa bão hoà và phân tích chiến lược nội dung — biết chủ đề còn cơ hội hay đã muộn trước khi đổ công.",
    specs: [
      ["Traffic", "Cao"],
      ["Cạnh tranh", "Thấp"],
      ["Phân tích", "~60 giây"]
    ],
    primary: { label: "Khám phá HSHOP", href: "https://hungniwaco.shop" },
    secondary: { label: "Xem chi tiết", href: "/cong-cu-ai/cong-cu-tim-video-viral" }
  },
  {
    role: "kit · tự động hoá",
    tag: "179k · vĩnh viễn",
    title: "Bộ AI Agent YouTube Kit",
    desc: "Tự động hoá toàn bộ quy trình làm YouTube — từ nghiên cứu, kịch bản đến hình ảnh/video và xuất bản, quản lý quanh Google Sheets.",
    specs: [
      ["Skills", "33"],
      ["Agents", "9"],
      ["Pipeline", "Google Sheets 10 tab"]
    ],
    primary: { label: "Khám phá YouTube Kit", href: "https://lamyoutubetudong.com" },
    secondary: { label: "Xem chi tiết", href: "/cong-cu-ai/bo-ai-agent-youtube-kit" }
  },
  {
    role: "prompts · 10 lĩnh vực",
    tag: "combo 199k",
    title: "1000 Prompt Chuyên Gia",
    desc: "Bộ 1000 prompt AI viết sẵn theo cấu trúc, chia 10 lĩnh vực kinh doanh, marketing, tài chính… Điền thông tin là dùng ngay với ChatGPT, Gemini, Claude.",
    specs: [
      ["Số lượng", "1000 prompt"],
      ["Lĩnh vực", "10 file Word"],
      ["Giao hàng", "Email vài phút"]
    ],
    primary: { label: "Xem bộ Prompt", href: "https://1000promptchuyengia.shop" },
    secondary: { label: "Xem chi tiết", href: "/cong-cu-ai/1000-prompt-chuyen-gia" }
  }
];

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function FeaturedProducts() {
  return (
    <section className="bg-paper">
      <div className="container-shell pt-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{"// bộ công cụ chủ lực"}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-900">4 sản phẩm, 4 việc cần làm</h2>
          </div>
          <Link href="/cong-cu-ai" className="shrink-0 font-mono text-xs font-medium uppercase tracking-wider text-brand-700 hover:underline">
            Xem toàn bộ →
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((p) => (
            <article key={p.title} className="flex flex-col rounded-lg border border-ink/15 bg-white p-6 text-ink shadow-[0_4px_20px_-8px_rgba(33,28,21,0.18)] transition-shadow hover:shadow-[0_8px_28px_-8px_rgba(33,28,21,0.24)] sm:p-7">
              <div className="flex items-center justify-between gap-3 font-mono text-xs">
                <span className="font-medium text-brand-700">{p.role}</span>
                <span className="rounded-sm bg-ink/[0.06] px-2 py-1 uppercase tracking-wider text-ink/60">{p.tag}</span>
              </div>

              <h3 className="mt-4 text-xl font-extrabold leading-tight text-brand-900 sm:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{p.desc}</p>

              <dl className="mt-5 space-y-2 border-t border-ink/12 pt-4 font-mono text-xs">
                {p.specs.map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4">
                    <dt className="text-ink/50">{k}</dt>
                    <dd className="text-right font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <a
                  href={p.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-900"
                >
                  {p.primary.label}
                </a>
                {isExternal(p.secondary.href) ? (
                  <a
                    href={p.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                  >
                    {p.secondary.label}
                  </a>
                ) : (
                  <Link
                    href={p.secondary.href}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-ink/25 px-5 py-3 text-sm font-bold text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                  >
                    {p.secondary.label}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
