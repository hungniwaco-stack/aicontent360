import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

const description = "Liên hệ AIContent360 qua Zalo hoặc email để được tư vấn công cụ AI phù hợp.";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description,
  alternates: { canonical: "/lien-he" },
  openGraph: {
    title: "Liên Hệ | AIContent360",
    description,
    url: `${siteConfig.url}/lien-he`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

export default function Page() {
  return (
    <div className="container-shell py-12">
      <div className="max-w-2xl rounded-lg border border-ink/12 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Liên hệ</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-900">AIContent360</h1>
        <p className="mt-4 text-sm leading-7 text-ink/70">
          Bạn có câu hỏi về công cụ AI, phân vân chọn công cụ nào, hay muốn trao đổi về việc làm content? Cứ nhắn cho
          mình — mình trả lời thật trong khả năng của mình.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://zalo.me/0944851719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#0068FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0055d4]"
          >
            Nhắn Zalo: 0944 851719
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <p className="mt-5 text-sm leading-7 text-ink/55">
          Mình không phải tổng đài nên có thể không trả lời ngay tức thì, nhưng mình đọc hết và phản hồi sớm nhất có thể.
        </p>
      </div>
    </div>
  );
}
