type Row = {
  role: string;
  product: string;
  price: string;
  situation: string;
  line: string;
  href: string;
};

const rows: Row[] = [
  {
    role: "tìm ngách",
    product: "HSHOP",
    price: "dùng thử 39k",
    situation: "Chưa biết làm chủ đề gì, hoặc làm video mãi mà tịt view.",
    line: "Tìm ngách YouTube còn cơ hội (chưa bão hoà) trước khi đổ công sản xuất.",
    href: "https://hungniwaco.shop"
  },
  {
    role: "viết kịch bản",
    product: "Chatbot AI theo ngách",
    price: "từ 139k",
    situation: "Đã có chủ đề nhưng ngồi viết kịch bản quá lâu.",
    line: "Ra kịch bản, hook, CTA đúng giọng ngách trong vài phút — không cần giỏi prompt.",
    href: "https://hungniwaco.vn"
  },
  {
    role: "tự động hoá YouTube",
    product: "Bộ AI Agent YouTube Kit",
    price: "179k · vĩnh viễn",
    situation: "Làm kênh YouTube nghiêm túc, muốn cả hệ thống A→Z trong một chỗ.",
    line: "33 skills + 9 agents + Google Sheets: nghiên cứu → kịch bản → hình ảnh/video → xuất bản.",
    href: "https://lamyoutubetudong.com"
  },
  {
    role: "prompt đa lĩnh vực",
    product: "1000 Prompt Chuyên Gia",
    price: "combo 199k",
    situation: "Dùng AI cho công việc & kinh doanh nói chung — không chỉ riêng video.",
    line: "1000 prompt viết sẵn cho kinh doanh, marketing, bán hàng, tài chính, năng suất…",
    href: "https://1000promptchuyengia.shop"
  }
];

export function ProductGuide() {
  return (
    <section className="bg-paper">
      <div className="container-shell pt-12">
        <p className="eyebrow">{"// chọn đúng công cụ"}</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-900">Nên mua cái nào?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
          Đừng mua cho đủ bộ. Mỗi sản phẩm giải một việc khác nhau — chọn theo đúng chỗ bạn đang kẹt:
        </p>

        <div className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-lg border border-ink/12 bg-white shadow-[0_2px_14px_-8px_rgba(33,28,21,0.16)]">
          {rows.map((r) => (
            <div key={r.product} className="grid gap-3 p-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_auto] sm:items-center sm:gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-brand-700">{r.role}</p>
                <p className="mt-1 font-bold leading-snug text-brand-900">{r.product}</p>
                <p className="font-mono text-xs text-ink/55">{r.price}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">
                  <span className="text-ink/55">Chọn khi: </span>
                  {r.situation}
                </p>
                <p className="mt-1 text-sm leading-6 text-ink/65">{r.line}</p>
              </div>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-ink/25 px-5 text-sm font-bold text-ink transition-colors hover:border-brand-700 hover:bg-brand-700 hover:text-paper sm:min-w-[120px]"
              >
                Xem →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
