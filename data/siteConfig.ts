export const siteConfig = {
  name: "AI Content Hub",
  description:
    "Nền tảng ứng dụng AI để tạo content, tăng view và kiếm tiền online hiệu quả.",
  url: "https://aicontent360.shop",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@aicontent360.shop",
    responseTime: "Trong 24 giờ làm việc",
    businessName: "AIContent360"
  },
  nav: [
    { href: "/", label: "Trang chủ" },
    { href: "/tang-view-viral", label: "Tăng View & Viral" },
    { href: "/kiem-tien-bang-ai", label: "Kiếm Tiền bằng AI" },
    { href: "/cong-cu-ai", label: "Thư Viện Công Cụ AI" },
    { href: "/case-study", label: "Case Study" },
    { href: "/mien-phi", label: "Tài Nguyên Miễn Phí" },
    { href: "/xu-huong-ai", label: "Xu Hướng AI" },
    { href: "/gioi-thieu", label: "Giới Thiệu" },
    { href: "/lien-he", label: "Liên Hệ" }
  ]
};
