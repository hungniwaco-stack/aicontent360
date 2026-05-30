# Production Checklist

## 1) Repo & Branch
- `main` protected (khuyến nghị bật rules trên GitHub).
- Không commit `node_modules`, `.next`, file secrets.
- Remote đúng: `https://github.com/hungniwaco-stack/aicontent360.git`.

## 2) Build & Quality Gate
- Chạy local trước khi push:
  - `npm install`
  - `npm run check`
  - `npm run build`
- CI workflow phải pass:
  - Lint pass
  - Typecheck pass
  - Build static export pass

## 3) GitHub Pages
- `Settings -> Pages -> Source`: `GitHub Actions`.
- `Custom domain`: `aicontent360.shop`.
- `Enforce HTTPS`: bật.
- Workflow `Deploy Next.js to GitHub Pages` ở trạng thái `success`.

## 4) DNS (Hostinger)
- A records cho `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- CNAME cho `www`:
  - `www -> hungniwaco-stack.github.io`
- Sau thay đổi DNS: chờ propagation rồi kiểm tra lại.

## 5) SEO/GEO Baseline
- `metadataBase` trỏ đúng `https://aicontent360.shop`.
- JSON-LD toàn site:
  - `WebSite`
  - `Organization`
- `sitemap.xml` và `robots.txt` xuất tĩnh, truy cập được.
- Canonical hoạt động cho trang động:
  - `/blog/[slug]`
  - `/cong-cu-ai/[slug]`
  - `/blog/chuyen-muc/[category]`

## 6) Functional QA
- Kiểm tra desktop/mobile các URL chính:
  - `/`
  - `/cong-cu-ai`
  - `/blog`
  - `/lien-he`
- Kiểm tra filter công cụ hoạt động với query params.
- Kiểm tra link nội bộ không lỗi 404.

## 7) Post-Deploy Smoke Test
- `https://aicontent360.shop` mở được và có style đầy đủ.
- `https://www.aicontent360.shop` redirect về domain chính.
- Kiểm tra nhanh HTTP headers và redirect.

