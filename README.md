# AI Content Hub

Website Next.js App Router + TypeScript + Tailwind CSS cho dự án AI Content Hub.

## Cài đặt

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Kiểm tra chất lượng trước deploy

```bash
npm run check
```

## Cấu trúc dữ liệu

- `data/tools.ts`: dữ liệu thư viện công cụ AI.
- `data/blogPosts.ts`: dữ liệu bài viết mẫu.

## URL chính

- `/`
- `/tao-content-bang-ai`
- `/tang-view-viral`
- `/kiem-tien-bang-ai`
- `/cong-cu-ai`
- `/cong-cu-ai/[slug]`
- `/case-study`
- `/mien-phi`
- `/xu-huong-ai`
- `/blog`
- `/blog/[slug]`
- `/gioi-thieu`
- `/lien-he`

## Checklist production

- Xem file [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md)


## Analytics tracking (GA4/GTM)

1. Sao chép .env.example thành .env.local.
2. Điền mã: NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_GA4_ID.
3. Restart 
pm run dev.
4. Kiểm tra event trong GA4/GTM Preview: cta_click, lead_submit_click, purchase_click.

