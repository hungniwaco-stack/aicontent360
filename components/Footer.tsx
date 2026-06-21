import Link from "next/link";

const links = [
  { href: "/gioi-thieu", label: "Về chúng tôi" },
  { href: "/cong-cu-ai", label: "Thư viện công cụ AI" },
  { href: "/mien-phi", label: "Tài nguyên miễn phí" },
  { href: "/blog", label: "Blog" },
  { href: "/xu-huong-ai", label: "Xu hướng AI" },
  { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
  { href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
  { href: "/chinh-sach-thanh-toan", label: "Chính sách thanh toán" },
  { href: "/lien-he", label: "Liên hệ" }
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-brand-700">
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
