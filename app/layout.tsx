import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZaloButton } from "@/components/ZaloButton";
import { siteConfig } from "@/data/siteConfig";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AIContent360",
    template: "%s | AIContent360"
  },
  description: "Nền tảng ứng dụng AI để tạo content, tăng view và kiếm tiền online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AIContent360",
    description: "Khám phá công cụ AI thực chiến để tạo content, tăng view và kiếm tiền online.",
    url: siteConfig.url,
    siteName: "AIContent360",
    locale: "vi_VN",
    type: "website",
    images: [siteConfig.defaultOgImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "AIContent360",
    description: "Khám phá công cụ AI thực chiến để tạo content, tăng view và kiếm tiền online.",
    images: ["/og-default.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "vi-VN",
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/cong-cu-ai?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };

  return (
    <html lang="vi">
      <body className={`${sans.variable} ${mono.variable}`}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <AnalyticsScripts />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ZaloButton />
      </body>
    </html>
  );
}
