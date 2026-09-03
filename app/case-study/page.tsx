import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Case Study AIContent360: Nhật ký thực chiến trung thực",
  description:
    "Những thí nghiệm thật đang diễn ra khi dùng AI làm content — chia sẻ trung thực cách làm và quan sát, không số liệu thổi phồng.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    title: "Case Study AIContent360",
    description:
      "Những thí nghiệm thật đang diễn ra khi dùng AI làm content — chia sẻ trung thực cách làm và quan sát, không số liệu thổi phồng.",
    url: `${siteConfig.url}/case-study`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

type Experiment = {
  title: string;
  status: string;
  tool: { label: string; href: string } | null;
  summary: string;
  observations: string[];
  lesson: string;
  link?: { label: string; href: string };
};

const experiments: Experiment[] = [
  {
    title: "Thí nghiệm #1: Dùng HSHOP để tìm ngách trước khi sản xuất",
    status: "Đang chạy",
    tool: { label: "HSHOP YouTube Analytics", href: "https://hungniwaco.shop" },
    summary:
      "Trước mỗi đợt content, mình dùng HSHOP để xem chủ đề con nào đang tăng trưởng mà chưa bão hoà, loại bớt chủ đề đã đỏ lửa, rồi mới viết kịch bản.",
    observations: [
      "Tiết kiệm thời gian rõ rệt — không còn mở từng kênh ước lượng view bằng tay.",
      "Tránh được những tuần đổ công vào sai chủ đề.",
      "Chưa khẳng định được tác động cuối lên doanh thu (vẫn đang dùng để định hướng)."
    ],
    lesson:
      "Chọn đúng chủ đề từ đầu quan trọng không kém việc làm nội dung hay. Định hướng trước, sản xuất sau.",
    link: { label: "Đọc nhật ký đầy đủ về HSHOP", href: "https://hungniwaco.shop" }
  },
  {
    title: "Thí nghiệm #2: Quy trình sản xuất content đều đặn không cạn ý",
    status: "Đang áp dụng",
    tool: { label: "Chatbot AI tạo content", href: "https://hungniwaco.vn" },
    summary:
      "Định hướng chủ đề trước bằng dữ liệu, lên ý tưởng theo ma trận, rồi dùng chatbot ngách ra kịch bản nháp, cuối cùng tự thêm chất riêng.",
    observations: [
      "Từ khi có quy trình, mình đăng đều hơn hẳn so với lúc làm theo hứng.",
      "Tính đều đặn là tiền đề bắt buộc của mọi kết quả về sau.",
      "Chưa gọi đây là 'thành công' — mới là bước đi đúng hướng."
    ],
    lesson:
      "Người làm content một mình thua không phải vì thiếu nỗ lực, mà vì thiếu quy trình.",
    link: {
      label: "Xem quy trình chi tiết",
      href: "/blog/quy-trinh-tao-content-tu-y-tuong-den-dang-video"
    }
  },
  {
    title: "Thí nghiệm #3: Làm affiliate theo hướng cho giá trị trước",
    status: "Đang thử",
    tool: null,
    summary:
      "Thử cách làm affiliate bền vững thay vì bán gấp: phần lớn nội dung giải quyết vấn đề thật, chỉ một phần nhỏ nhắc sản phẩm, luôn minh bạch link affiliate.",
    observations: [
      "Chưa có con số doanh thu để khoe ở mục này.",
      "Chia sẻ cách tiếp cận vì tin nó đúng hướng về niềm tin.",
      "Sẽ cập nhật khi có dữ liệu thật."
    ],
    lesson: "Cho giá trị trước, bán sau. Niềm tin cần thời gian tích luỹ.",
    link: {
      label: "Xem cách tiếp cận affiliate",
      href: "/blog/cach-lam-affiliate-suc-khoe-bang-video-ngan"
    }
  }
];

export default function Page() {
  return (
    <div className="container-shell space-y-8 py-12">
      <section>
        <h1 className="text-3xl font-bold">Case Study — Nhật ký thực chiến</h1>
        <p className="mt-3 text-ink/80">
          Hầu hết trang &quot;case study&quot; cho bạn xem những con số đẹp. Trang này thì khác. Mình không trưng thành tích
          vì vẫn đang trên đường — thứ chia sẻ ở đây là những thí nghiệm thật đang chạy: dùng công cụ gì, làm thế nào,
          quan sát được gì, cả những chỗ chưa hiệu quả. Khi có kết quả rõ ràng, mình cập nhật bằng số thật.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {experiments.map((item) => (
          <article key={item.title} className="rounded-lg border border-ink/12 bg-white p-6">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-1 text-sm text-brand-700">
              Trạng thái: {item.status}
              {item.tool ? (
                <>
                  {" · "}
                  <a href={item.tool.href} className="underline" target="_blank" rel="noopener noreferrer">
                    {item.tool.label}
                  </a>
                </>
              ) : null}
            </p>
            <p className="mt-3 text-ink/80">{item.summary}</p>
            <h3 className="mt-4 font-semibold">Điều mình quan sát được</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-ink/80">
              {item.observations.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-ink/[0.05] p-3 text-sm text-ink/80">
              <span className="font-semibold">Bài học:</span> {item.lesson}
            </p>
            {item.link ? (
              <p className="mt-3 text-sm">
                <Link href={item.link.href} className="font-semibold text-brand-700">
                  {item.link.label} →
                </Link>
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-ink/12 bg-white p-6">
        <h2 className="text-2xl font-bold">Vì sao trang này không có &quot;số liệu khủng&quot;?</h2>
        <p className="mt-3 text-ink/80">Vì mình không muốn bịa.</p>
        <p className="mt-3 text-ink/80">
          Rất dễ viết &quot;100.000 view trong 30 ngày&quot; để trang trông ấn tượng. Nhưng nếu bạn tin rồi làm theo mà
          không ra kết quả như vậy, mình đã lừa bạn — và tự phá uy tín của chính mình. Mình chọn cách khó hơn: ghi lại
          thật những gì đang diễn ra, kể cả khi còn dang dở. Khi mình đạt cột mốc thật, bạn sẽ là người đầu tiên thấy con
          số — và nó sẽ là con số thật.
        </p>
      </section>

      <section className="rounded-lg bg-brand-900 p-6 text-white">
        <h2 className="text-2xl font-bold">Bạn muốn bắt đầu từ đâu?</h2>
        <p className="mt-2 text-paper/80">
          Hay đổ công vào chủ đề rồi nhận view thấp? Vấn đề thường ở khâu chọn chủ đề. Kẹt ở viết kịch bản? Thử công cụ
          viết theo ngách.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://hungniwaco.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-900"
          >
            Thử HSHOP tìm ngách
          </a>
          <a
            href="https://hungniwaco.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white px-4 py-3 text-sm font-semibold text-white"
          >
            Xem Chatbot tạo content
          </a>
        </div>
      </section>
    </div>
  );
}
