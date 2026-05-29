import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Content Hub",
    template: "%s | AI Content Hub"
  },
  description: "Nền tảng ứng dụng AI để tạo content, tăng view và kiếm tiền online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Content Hub",
    description: "Khám phá công cụ AI thực chiến để tạo content, tăng view và kiếm tiền online.",
    url: siteConfig.url,
    siteName: "AI Content Hub",
    locale: "vi_VN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
