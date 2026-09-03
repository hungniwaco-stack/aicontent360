import { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { siteConfig } from "@/data/siteConfig";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Công cụ AI nổi bật cho creator và affiliate",
  description:
    "Khám phá các nhóm công cụ AI đại diện cho nội dung sức khỏe, viral storytelling và affiliate. Xem thêm bộ công cụ đầy đủ tại hungniwaco.vn.",
  alternates: { canonical: "/cong-cu-ai" },
  openGraph: {
    title: "Công cụ AI nổi bật",
    description:
      "Các nhóm công cụ AI đại diện cho creator, affiliate và người làm nội dung video ngắn.",
    url: `${siteConfig.url}/cong-cu-ai`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

const toolGroups = [
  {
    title: "Sức khỏe & làm đẹp",
    description: "Công cụ tạo video sức khỏe, nội dung mẹ và bé, nhân vật hóa chủ đề y tế và làm đẹp.",
    slugs: [
      "chu-de-suc-khoe-nhan-hoa-noi-dau-phong-dai-thi-giac",
      "chatbot-tao-video-suc-khoe-3d-hai-huoc-de-thuong",
      "chu-de-suc-khoe-nhan-hoa-tieng-noi-vi-khuan"
    ]
  },
  {
    title: "Viral & storytelling",
    description: "Công cụ kể chuyện lịch sử, review, sáng tạo nhân vật và xây dựng series giữ chân người xem.",
    slugs: ["lich-su-nguoi-ke-chuyen", "kinh-di-dien-anh", "nhan-hoa-dong-thuc-vat"]
  },
  {
    title: "Giáo dục & kiếm tiền",
    description: "Công cụ hỗ trợ video giáo dục, concept bán hàng và nội dung chuyển đổi cho sản phẩm số.",
    slugs: [
      "co-may-viral-affiliate-my-pham",
      "chatbot-tao-video-day-tieng-anh-cho-be-dang-cay-coi-hoi-dap",
      "tro-ly-tao-prompt-co-quan-noi-tang-len-tieng-kem-san-pham-cuoi-video-lam-affiliate"
    ]
  },
  {
    title: "Công cụ miễn phí",
    description: "Bộ công cụ miễn phí để thử nhanh các chủ đề tài chính, kiến trúc, ẩm thực, affiliate và sức khỏe.",
    slugs: [
      "chatbot-tao-video-tu-van-kinh-te-tai-chinh",
      "con-trung-tao-cr7-sieu-dinh",
      "tro-ly-tao-prompt-xay-dung-ky-quan",
      "tro-ly-affiliate-am-thuc-3d-viral",
      "tro-ly-chatbot-nau-an-hai-huoc-3-chang-dau-bep",
      "chu-de-suc-khoe-nhan-hoa-tieng-noi-vi-khuan"
    ]
  }
];

function getToolsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is (typeof tools)[number] => Boolean(tool));
}

function getAllToolsByCategory() {
  const excludedSlugs = new Set(["cong-cu-tim-video-viral"]);
  const byCategory = new Map<string, typeof tools>();

  for (const tool of tools) {
    if (excludedSlugs.has(tool.slug)) continue;
    const existing = byCategory.get(tool.category);
    if (existing) {
      existing.push(tool);
    } else {
      byCategory.set(tool.category, [tool]);
    }
  }

  return Array.from(byCategory.entries())
    .sort((a, b) => b[1].length - a[1].length)
    .map(([category, categoryTools]) => ({ category, tools: categoryTools }));
}

export default function ToolsPage() {
  const featuredTool = tools.find((tool) => tool.slug === "cong-cu-tim-video-viral");
  const allToolGroups = getAllToolsByCategory();

  return (
    <div className="container-shell py-12">
      <section className="rounded-lg border border-ink/12 bg-white p-6">
        <p className="text-sm font-semibold text-brand-700">Công cụ AI tiêu biểu</p>
        <div className="mt-3 max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight text-brand-900 sm:text-4xl">Chọn nhanh nhóm công cụ phù hợp</h1>
          <p className="mt-3 text-base leading-7 text-ink/70">
            Trang này chỉ hiển thị các công cụ đại diện để bạn nắm nhanh từng nhóm ứng dụng. Khi cần xem đầy đủ video hướng dẫn và bộ công cụ chi tiết,
            hãy truy cập trang chính.
          </p>
        </div>
      </section>

      {featuredTool ? (
        <section id="cong-cu-tim-video-viral" className="mt-8 scroll-mt-24">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-brand-900">Công cụ nổi bật</h2>
          </div>
          <article className="overflow-hidden rounded-lg border border-ink/12 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-normal text-brand-700">{featuredTool.category}</p>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">Nổi bật</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-brand-900 sm:text-3xl">{featuredTool.name}</h3>
                <p className="mt-4 text-base leading-7 text-ink/80">{featuredTool.shortDescription}</p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70">{featuredTool.longDescription}</p>
              </div>

              <div className="border-t border-ink/12 bg-paper p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-brand-900">Phù hợp với</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
                      {featuredTool.suitableFor.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-900">Công cụ hỗ trợ</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
                      {featuredTool.outputs.map((output) => (
                        <li key={output} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-6 border-t border-ink/12 pt-5 text-sm leading-6 text-ink/70">
                  Video hướng dẫn và thông tin chi tiết được cung cấp tại website chính thức của công cụ.
                </p>
                <a
                  href={featuredTool.productUrl || "https://hungniwaco.shop/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  Xem tại website chính thức
                </a>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <div className="mt-10 space-y-10">
        {toolGroups.map((group) => {
          const groupTools = getToolsBySlugs(group.slugs);

          return (
            <section key={group.title}>
              <div className="mb-4 max-w-3xl">
                <h2 className="text-2xl font-bold text-brand-900">{group.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">{group.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {groupTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-14">
        <div className="mb-4 max-w-3xl border-t border-ink/12 pt-10">
          <p className="text-sm font-semibold text-brand-700">Danh mục đầy đủ</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-900">Toàn bộ thư viện công cụ</h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Tất cả {tools.length - 1} công cụ hiện có trên AIContent360, nhóm theo chủ đề, để bạn dễ tìm đúng thứ cần mà không phải đoán mò.
          </p>
        </div>
        <div className="space-y-10">
          {allToolGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-bold text-brand-900">{group.category}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {group.tools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <a
        href="https://hungniwaco.vn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 block rounded-lg border border-brand-700 bg-brand-700 px-6 py-5 text-center text-lg font-bold text-white shadow-sm transition hover:bg-brand-900"
      >
        Khám phá hơn 60 Công cụ tại hungniwaco.vn
      </a>
    </div>
  );
}
