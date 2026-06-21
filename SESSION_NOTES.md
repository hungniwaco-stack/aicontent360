# Session Notes (2026-05-30)

> Read first next time: go to `Memory Refresh (2026-06-21) - Read First Next Time` at the bottom of this file. Older GitHub Pages/DNS notes are historical and are superseded by the Vercel/custom-domain notes from 2026-06-21.

## Project
- Repo local: `D:\Hungniwaco\Claude Code\ChatBot`
- GitHub repo: `https://github.com/hungniwaco-stack/aicontent360.git`
- Default branch: `main`

## Deployment (GitHub Pages)
- Deploy workflow: `.github/workflows/deploy-pages.yml`
- Static export enabled in `next.config.mjs`:
  - `output: "export"`
  - `trailingSlash: true`
  - `images.unoptimized: true`
- Custom domain file: `public/CNAME` with value `aicontent360.shop`

## Domain / DNS
- Active domain: `https://aicontent360.shop/`
- DNS target for apex (`@`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www` CNAME:
  - `www -> hungniwaco-stack.github.io`

## GitHub Pages status learned
- Pages API should show:
  - `cname: aicontent360.shop`
  - `https_enforced: true`
  - certificate state `approved`
- `www` may briefly return `404` during edge/cache propagation after DNS/domain changes.

## Build/CI fixes applied
- Added compatible ESLint dependency for Next 15 CI.
- `app/sitemap.ts` set static export compatible:
  - `export const dynamic = "force-static"`
- `app/robots.ts` set static export compatible:
  - `export const dynamic = "force-static"`

## Operational notes
- If `git push` fails with `src refspec main does not match any`:
  - create initial commit first.
- If `EADDRINUSE` on port `3000`, run dev on `3001`.
- If `.git/index.lock` blocks commit, remove stale lock then retry.


## Session Update (2026-05-30)

### Working rules confirmed
- Sau mỗi lần `git push`: luôn kiểm tra workflow deploy GitHub Pages đến khi `success`, rồi mới báo hoàn tất.
- Nếu deploy fail: đọc log, tự sửa và push lại đến khi `success`.

### Domain and link policy
- Domain production chính: `https://aicontent360.shop/`.
- Route GitHub Pages path (`/aicontent360`) không còn là URL ưu tiên.
- Rule link đã chốt:
  - Nội dung trang `Tăng View & Viral`: dùng `https://hungniwaco.shop`.
  - Link CTA ở trang chi tiết công cụ: dùng link theo từng công cụ (`productUrl`); nếu thiếu thì fallback `https://hungniwaco.vn`.

### Tool detail behavior
- Đã bỏ phần `Giá bán` trên trang chi tiết công cụ.
- Đã bỏ cụm nút cũ `Mua công cụ` + `Nhắn Zalo tư vấn`.
- CTA hiện tại: một nút outbound theo `productUrl`.
- Mục `Demo đầu ra` không để URL sản phẩm, chỉ giữ nội dung mô tả demo.

### Health goal catalog
- Trong bộ lọc `Mục tiêu -> Sức khỏe`:
  - Đã bỏ 2 nội dung cũ:
    - `Phễu Vạn Đơn Sức Khỏe`
    - `Chatbot Sức Khỏe Làm Đẹp`
  - Đã thêm danh mục công cụ sức khỏe mới theo bảng công ty gửi (7 mục).

### Tracking implementation
- Đã thêm tracking nền tảng:
  - `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`
  - Component loader: `components/AnalyticsScripts.tsx`
  - Helper event: `lib/analytics.ts`
- Event chính đang bắn:
  - `cta_click`
  - `lead_submit_click`
  - `purchase_click` (legacy name, giữ để tương thích cũ)

### SEO/production updates completed
- Đã thêm JSON-LD:
  - `WebSite`, `Organization` (layout)
  - `Article` (blog detail)
  - `SoftwareApplication/Offer` (tool detail)
- Đã hoàn thiện production checklist:
  - `PRODUCTION_CHECKLIST.md`
- Quality gate hiện dùng:
  - `npm run check` (typecheck + lint)

### Latest important commits (today)
- `4a3089d` Remove product links from tool demo content
- `3192937` Use per-tool outbound links for tool detail CTA
- `09e7988` Replace and expand Health goal tools with updated catalog
- `dc13ba9` Set tool detail CTA domain to hungniwaco.vn

## Session Update (2026-06-19) - Codex handoff

### Project location
- Main project analyzed today: `D:\Hungniwaco\CODEX\Aicontent360`.
- Current production domain: `https://aicontent360.shop/`.
- Stack confirmed: Next.js 15.3.3 + React 19.1.0 + TypeScript + Tailwind CSS, static export for GitHub Pages.

### Quality checks run
- `npm.cmd run check` passed: TypeScript + ESLint clean.
- `npm.cmd run build` passed: static export generated 53 pages.
- On Windows, plain `npm run ...` may fail because `npm.ps1` is blocked by Execution Policy; use `npm.cmd run ...`.
- `git` was not available in the PowerShell PATH during this session.

### Design skills installed
- Installed from `anthropics/skills` into `C:\Users\thinh\.codex\skills`:
  - `frontend-design`
  - `theme-factory`
  - `brand-guidelines`
  - `canvas-design`
- Installed `ui-ux-pro-max` for this project with:
  - `npx.cmd uipro-cli init --ai codex`
- UI/UX Pro Max files are in:
  - `D:\Hungniwaco\CODEX\Aicontent360\.codex\skills\ui-ux-pro-max`
- Restart Codex after install so these skills are picked up automatically in later sessions.

### Design direction chosen
- Recommended direction: `AI Tool Directory đáng tin cậy cho creator Việt`.
- Treat the site as a curated AI tools directory/marketplace with trust and conversion, not as a flashy generic AI landing page.
- UI/UX Pro Max matched the product best to:
  - Pattern: `Marketplace / Directory`
  - Style: `Trust & Authority`
- Avoid:
  - AI purple/pink gradients as the dominant look
  - playful/kids typography
  - OLED/dark futuristic style
  - generic SaaS hero with abstract blobs
- Recommended visual system:
  - Ink: `#101828`
  - Surface: `#F8FAFC`
  - Card: `#FFFFFF`
  - Primary: `#1E40AF`
  - Primary 2: `#2563EB`
  - Growth: `#059669`
  - Signal: `#F59E0B`
  - Border: `#E2E8F0`
  - Muted text: `#475569`
- Recommended typography: `Plus Jakarta Sans` for the whole site. Alternative: `Space Grotesk` headings + `DM Sans` body.
- UX priority: homepage and `/cong-cu-ai` should make search/filter the hero action. Copy angle: `Bạn muốn AI giúp gì hôm nay?`

### Product/content understanding
- Site purpose: distribute/introduce practical AI tools for content creation, viral growth, storytelling, affiliate, and creator monetization.
- Main routes:
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
- Tool data lives in `data/tools.ts`.
- Blog data lives in `data/blogPosts.ts` and shared template rendering is in `data/blogTemplates.tsx`.

### Important issues found
- `components/Breadcrumb.tsx` uses `https://example.com` in Breadcrumb JSON-LD. Replace with `siteConfig.url`.
- `app/sitemap.ts` only lists top-level static URLs. It should include tool detail pages, blog detail pages, and blog category pages.
- `components/ContactForm.tsx` only tracks `lead_submit_click`; it does not submit data.
- `app/lien-he/page.tsx` still has placeholder contact info: `0900 000 000`, `fb.com/aicontenthub`, `hello@aicontenthub.vn`.
- Legal pages are placeholders only:
  - `app/chinh-sach-bao-mat/page.tsx`
  - `app/dieu-khoan-su-dung/page.tsx`
  - `app/chinh-sach-thanh-toan/page.tsx`
- Some `relatedToolSlugs` in `data/blogPosts.ts` reference old/deleted slugs, but current template does not use them yet.
- Blog detail content is still generic/template-heavy: `BlogDetail` mainly uses `post.content[0]`, while process sections are shared text.

### Suggested next implementation order
1. Fix SEO correctness: Breadcrumb JSON-LD and full dynamic sitemap.
2. Redesign homepage and `/cong-cu-ai` around directory/search/filter behavior.
3. Redesign tool cards and tool detail CTA for trust/conversion.
4. Replace placeholder contact/legal content.
5. Expand blog detail content to be unique per article.
6. Clean stale `relatedToolSlugs` or wire them properly into related-tool logic.

## Session Update (2026-06-20)

### Completed today
- SEO correctness:
  - Replaced Breadcrumb JSON-LD `https://example.com` with `siteConfig.url`.
  - Expanded sitemap to include static pages, all tool detail pages, all blog detail pages, and all blog category pages.
- Directory UX first pass:
  - Redesigned homepage hero around search and goal chips.
  - Reworked homepage content around goal shortcuts, featured tools, trust metrics, latest posts, and CTA.
  - Reworked `/cong-cu-ai` page header with catalog stats.
  - Improved `ToolFilter` with sidebar filters, reset button, broader text search, result summary, and empty state.
  - Improved `ToolCard` scanability with price, status, goal tags, platform tags, and stable CTA layout.
  - Updated brand color token away from purple and added Plus Jakarta Sans via `next/font/google`.

### Verification
- `npm.cmd run build` passed.
- `npm.cmd run check` passed after build completed.
- Generated `out/sitemap.xml` contains 45 URLs.
- Attempted in-app browser visual verification, but browser runtime failed with an environment EPERM issue under `C:\Users\thinh\AppData`.

### Remaining next priorities
1. Redesign tool detail CTA for stronger trust/conversion.
2. Replace placeholder contact/legal content.
3. Expand blog detail content to be unique per article.
4. Clean stale `relatedToolSlugs` or wire them into related-tool logic.

## Session Update (2026-06-20) - Continued

### Completed
- Redesigned tool detail conversion area:
  - `ToolDetailActions` now includes free/paid status, price range, featured status, platform/output summary, trust bullets, primary outbound CTA, and secondary consultation CTA.
  - Tool detail pages now use a cleaner two-column hero/detail layout and separate cards for value, audience, expected outputs, and demo.
  - Consultation CTA tracks `lead_submit_click` and carries the selected tool slug in the `/lien-he?tool=<slug>` URL.

### Verification
- `npm.cmd run check` passed.
- `npm.cmd run build` passed and exported 53 pages.
- Confirmed generated static HTML contains the new CTA block for `chatbot-tao-video-suc-khoe`.
- Foreground dev server works with `npm.cmd run dev -- --port 3001`; background server start attempts were not retained by this sandbox.

### Remaining next priorities
1. Replace placeholder contact/legal content.
2. Decide and implement real lead submission behavior for `ContactForm`.
3. Expand blog detail content to be unique per article.
4. Clean stale `relatedToolSlugs` or wire them into related-tool logic.

## Session Update (2026-06-20) - GitHub/Vercel

### Completed
- Restored GitHub CLI authentication for `hungniwaco-stack`.
- Installed Git for Windows 2.54.0 and configured GitHub CLI as Git credential helper.
- Confirmed local remote: `https://github.com/hungniwaco-stack/aicontent360.git`.
- Created and linked Vercel project `hungs-projects-fdde2488/aicontent360`.
- Added `vercel.json` to deploy Next static export from `out`.
- Upgraded `next` and `eslint-config-next` to `15.5.19` after Vercel blocked `15.3.3` as vulnerable.
- Production Vercel deploy succeeded at `https://aicontent360.vercel.app`.

### Verification
- `npm.cmd run check` passed.
- `npm.cmd run build` passed.
- Vercel checks returned 200 for homepage, `cong-cu-ai/kinh-di-dien-anh`, and `sitemap.xml`.

### Quick resume memory
- Use project root `D:\Hungniwaco\CODEX\Aicontent360`.
- Current stack is Next.js `15.5.19`, React `19.1.0`, static export.
- GitHub remote is already connected: `https://github.com/hungniwaco-stack/aicontent360.git`.
- If this shell does not see `git`, call `C:\Program Files\Git\cmd\git.exe` directly or refresh PATH.
- Vercel project is already linked: `hungs-projects-fdde2488/aicontent360`.
- Vercel live URL is `https://aicontent360.vercel.app`.
- Keep `vercel.json`; it points Vercel at `out` so static export does not deploy as 404.
- Do not revert the directory/search-first redesign. Continue from remaining priorities: contact/legal placeholders, real lead submission, unique blog content, stale related tool slugs.

## Session Update (2026-06-20) - Contact and Legal Cleanup

### Completed
- Replaced placeholder contact page content:
  - Removed fake Zalo/Facebook/email values.
  - Added configurable contact email via `NEXT_PUBLIC_CONTACT_EMAIL`, defaulting to `hello@aicontent360.shop`.
  - Reworked `/lien-he` into a clearer consultation page with response-time and better intake guidance.
- Implemented practical static-site lead behavior:
  - `ContactForm` is now a real controlled form.
  - Submit opens a prefilled `mailto:` email and tracks `lead_submit_click`.
  - `/lien-he?tool=<slug>` pre-fills the selected tool in the request text.
  - `ContactSideCta` now anchors to the form instead of being a tracking-only button.
- Replaced empty legal placeholder pages:
  - `/chinh-sach-bao-mat`
  - `/dieu-khoan-su-dung`
  - `/chinh-sach-thanh-toan`
- Cleaned stale `relatedToolSlugs` in `data/blogPosts.ts`; there are no related tool slugs pointing to missing tools after the check.

### Verification
- `npm.cmd run check` passed.
- `npm.cmd run build` passed and exported 53 pages.

### Remaining next priorities
1. Expand blog detail content so each article is meaningfully unique.
2. Wire `relatedToolSlugs` into blog detail related-tool UI if desired.
3. Confirm the real support email/Zalo/Facebook with the owner before final launch, then update `NEXT_PUBLIC_CONTACT_EMAIL` or site config.

## Session Update (2026-06-20) - Current Production Baseline

This section supersedes older UI and product-direction notes when they conflict.

### User working preferences
- Communicate in Vietnamese and implement directly when the request is clear.
- Do not ask the user to repeat design, content, preview, or deployment preferences already recorded here.
- After each website adjustment:
  1. Run `npm.cmd run build`.
  2. Run `npm.cmd run check` after the build finishes. Do not run them in parallel because `.next/types` can race.
  3. Start a local Next.js preview on the next available port.
  4. Open and visually verify the result in the in-app browser, including responsive behavior when relevant.
  5. Deploy production with `npx.cmd vercel --prod --yes`.
  6. Verify the production URL returns successfully and leave the browser on the deployed page.
- The in-app browser worked reliably during the latest session. Prefer real visual verification over source-only inspection.
- The user expects changes to be deployed, not left only in the local workspace.

### Project and deployment
- Workspace: `D:\Hungniwaco\CODEX\Aicontent360`
- Stack: Next.js `15.5.19`, React `19.1.0`, TypeScript, Tailwind CSS, static export.
- Vercel project: `hungs-projects-fdde2488/aicontent360`
- Production alias: `https://aicontent360.vercel.app`
- GitHub repository: `https://github.com/hungniwaco-stack/aicontent360.git`
- Keep `vercel.json`; Vercel must deploy the generated `out` directory.
- Hidden local preview pattern:
  `Start-Process -WindowStyle Hidden -FilePath 'C:\Program Files\nodejs\node.exe' -ArgumentList 'node_modules\next\dist\bin\next','dev','--port','<port>' -WorkingDirectory 'D:\Hungniwaco\CODEX\Aicontent360'`
- Ports through `3021` were used during this session. Try `3022` next if those processes remain.

### Product and visual direction
- AIContent360 is primarily a curated AI tool introduction directory for Vietnamese creators.
- Visitors who need a tool should be sent to its main/source page, where its video guide and detailed resources live.
- Core visual system: Plus Jakarta Sans, navy `#101828`, primary blue, emerald, amber, white, and slate.
- Keep the main site practical, compact, trustworthy, easy to scan, and directory-first.
- Avoid dominant purple/pink gradients, decorative blobs, generic futuristic AI styling, and unnecessary nested cards.
- Viral Scanner follows the same restrained directory styling as the rest of the site; its former bespoke marketing layout was removed.

### Current homepage
- Route: `/`
- The hero is a dark navy rounded two-column block.
- Left side contains:
  - Heading `Bạn muốn AI giúp gì hôm nay?`
  - Search field and goal chips
  - Current catalog statistics
- Right side contains a highlighted Viral Scanner panel with key stats and its detail-page link.
- Viral Scanner is excluded from the homepage `Công cụ AI nổi bật` grid to avoid duplication.
- Homepage vertical spacing was tightened with `space-y-12` and `py-10`.
- Mobile navigation can scroll horizontally, but the page itself must not create horizontal overflow.

### Current AI tools directory
- Route: `/cong-cu-ai`
- The old search/filter sidebar and platform filter UI were intentionally removed.
- The page is a fixed curated directory with a standalone `Công cụ nổi bật` block above the category groups.
- `Công Cụ Tìm Video Viral` occupies its own expanded featured block and is not repeated inside `Viral & storytelling`.
- The expanded block contains its full directory summary, suitable audience, supported outputs, source-page note, and one external link to `https://hungniwaco.shop/`.
- It does not use `ToolCard`, does not show `Xem chi tiết`, and does not link to the internal Viral Scanner detail route.
- Current groups:
  - `Sức khỏe & làm đẹp`
  - `Viral & storytelling`
  - `Giáo dục & kiếm tiền`
  - `Công cụ miễn phí`
- The bottom CTA text must be exactly:
  `Khám phá hơn 60 Công cụ tại hungniwaco.vn`
- Bottom CTA URL: `https://hungniwaco.vn`
- `Content AI` was removed from the header/navigation.
- Tool cards were simplified. Do not restore price, goal, or platform chips unless explicitly requested.
- Current card content is category, optional featured badge, name, short description, and `Xem chi tiết`.

### Tool detail page rules
- Consultation CTAs, contact forms, and consultation-oriented copy were intentionally removed from the current tool discovery flow.
- `Công cụ liên quan` was intentionally removed from all tool detail pages.
- Generic detail pages should show:
  - Tool introduction
  - `Phù hợp với`
  - What the tool helps create
  - A short source-page guidance note
  - One primary CTA: `Xem hướng dẫn trên trang chính`
- The CTA uses the tool's `productUrl`, falling back to `https://hungniwaco.vn`.
- Do not restore consultation CTAs or related tools unless the user explicitly changes direction.

### Viral Scanner summary page
- Slug: `cong-cu-tim-video-viral`
- Display name: `Công Cụ Tìm Video Viral`
- Product URL: `https://hungniwaco.shop/`
- Detail route: `/cong-cu-ai/cong-cu-tim-video-viral/`
- This page is intentionally a short, neutral overview because the official website already contains the detailed product presentation.
- Keep only the category, name, general description, suitable audience, supported outputs, source-page note, and one CTA to the official website.
- Do not restore the old bespoke landing page, scan-results mockup, feature section, three-step workflow, repeated CTAs, or sales-heavy copy.
- Desktop and mobile were verified without horizontal overflow.

### Important tool records and links
- `co-may-viral-affiliate-my-pham`
  - `https://hungniwaco.vn/chatbot-prompt/tro-ly-tao-prompt-co-may-viral-affiliate-my-pham/`
- `kinh-di-dien-anh`
  - `https://hungniwaco.vn/chatbot-prompt/tro-ly-chatbot-tao-prompt-kinh-di-phien-ban-dien-anh-sieu-vip/`
- `nhan-hoa-dong-thuc-vat`
  - `https://hungniwaco.vn/chatbot-prompt/chatbot-tao-video-nhan-hoa-trai-cay-rau-cu/`
- `chatbot-tao-video-day-tieng-anh-cho-be-dang-cay-coi-hoi-dap`
  - `https://hungniwaco.vn/chatbot-prompt/chatbot-tao-video-day-tieng-anh-cho-be-dang-cay-coi-hoi-dap-voi-be/`
- `chu-de-suc-khoe-nhan-hoa-noi-dau-phong-dai-thi-giac`
  - `https://hungniwaco.vn/chatbot-prompt/tro-ly-chatbot-tao-prompt-suc-khoe-nhan-hoa-noi-dau-phong-dai-thi-giac/`
- `lich-su-nguoi-ke-chuyen`
  - Name: `Trợ Lý Chatbot Tạo Prompt Chủ Đề Lịch Sử | Lời Kể Người Kể Chuyện`
  - `https://hungniwaco.vn/chatbot-prompt/tro-ly-chatbot-tao-prompt-chu-de-lich-su-loi-ke-nguoi-ke-chuyen/`

### Current free tools section
The `Công cụ miễn phí` group contains exactly these six representative cards:
1. `chatbot-tao-video-tu-van-kinh-te-tai-chinh`
2. `con-trung-tao-cr7-sieu-dinh`
3. `tro-ly-tao-prompt-xay-dung-ky-quan`
4. `tro-ly-affiliate-am-thuc-3d-viral`
5. `tro-ly-chatbot-nau-an-hai-huoc-3-chang-dau-bep`
6. `chu-de-suc-khoe-nhan-hoa-tieng-noi-vi-khuan`

### Do not regress
- Do not restore the removed directory filters or platform selector.
- Do not restore crowded price, objective, platform, or affiliate chips on cards.
- Do not restore consultation CTA blocks, consultation forms, or related-tool sections.
- Do not move Viral Scanner back into the storytelling grid or duplicate it on the homepage featured grid.
- Do not replace the current restrained site palette with a purple/pink AI gradient.
- Do not restore the former marketing-style Viral Scanner detail page; keep it as a simple directory summary.
- Preserve user changes in the dirty worktree; never revert unrelated files.

## Final State Snapshot (2026-06-20)

Read this snapshot first in the next session. It confirms the latest state after the final production deployment.

### Latest completed change
- On `/cong-cu-ai`, `Công Cụ Tìm Video Viral` is no longer a small `ToolCard` with `Xem chi tiết`.
- It is now a full-width inline summary block containing:
  - Category and featured state
  - Tool name
  - Short and general descriptions
  - Suitable audience
  - Supported content/results
  - A note that detailed instructions live on the official website
  - One external CTA: `Xem tại website chính thức`
- Official CTA destination: `https://hungniwaco.shop/`
- The block has no internal link to `/cong-cu-ai/cong-cu-tim-video-viral/`.
- The internal detail route remains available for direct/SEO access but is not the primary directory flow.

### Verification state
- Latest local checks passed:
  - `npm.cmd run build`
  - `npm.cmd run check`
- Desktop and mobile checks passed without horizontal overflow.
- Production deployment succeeded and was verified at:
  `https://aicontent360.vercel.app/cong-cu-ai/`
- The in-app browser was left on the production tools directory page.

### Next-session behavior
- Do not ask whether the Viral Scanner should use a separate landing page; the answer is no.
- Do not add `Xem chi tiết` back to its featured directory block.
- Keep AIContent360 as the concise overview/catalog layer and send users to official source websites for full instructions.
- Continue the established workflow automatically after UI edits: build, check, local visual QA, production deploy, production verification.

## Session Update (2026-06-21) - Custom Domain Connected

### Completed
- Connected both custom domains to Vercel project `hungs-projects-fdde2488/aicontent360`:
  - `https://aicontent360.shop`
  - `https://www.aicontent360.shop`
- Removed an incorrect previous Vercel project assignment and re-added both hostnames to the correct `aicontent360` project.
- Hostinger DNS now uses:
  - `A @ -> 76.76.21.21`
  - `A www -> 76.76.21.21`
- Removed the former GitHub Pages DNS targets:
  - Apex `185.199.108.153` through `185.199.111.153`
  - `www CNAME -> hungniwaco-stack.github.io`
- Redeployed production so the latest deployment received the custom aliases.
- Issued one Vercel certificate covering both `aicontent360.shop` and `www.aicontent360.shop`.

### Verification
- Google Public DNS returns `76.76.21.21` for both hostnames.
- Direct HTTPS checks against the Vercel IP return `200`, server `Vercel`, with valid certificates for both hostnames.
- Latest production deployment includes aliases for:
  - `aicontent360.shop`
  - `www.aicontent360.shop`
  - `aicontent360.vercel.app`
- Some local/upstream DNS resolvers may temporarily retain the former GitHub IPs because the old TTL was about four hours. This is propagation cache, not a configuration error.

### Domain source of truth
- Primary public domain: `https://aicontent360.shop`
- `www` is also active and valid.
- Vercel alias remains available as a fallback: `https://aicontent360.vercel.app`

## Session Update (2026-06-21) - Removed Old GitHub Pages Site

### Completed
- Disabled GitHub Pages for `hungniwaco-stack/aicontent360` via GitHub API.
- GitHub Pages API now returns `404 Not Found`, confirming the Pages site is no longer configured.
- Removed local GitHub Pages artifacts so they do not get re-enabled later:
  - `CNAME`
  - `public/CNAME`
  - `.github/workflows/deploy-pages.yml`
- Ran `npm.cmd run build` and `npm.cmd run check`; both passed.
- Redeployed Vercel production after removing the Pages artifacts.
- Reassigned both custom aliases to the latest Vercel deployment:
  - `https://aicontent360.shop`
  - `https://www.aicontent360.shop`

### Verification
- Latest Vercel deployment includes both custom aliases and is `Ready`.
- Forced HTTPS checks against Vercel IP `76.76.21.21` return `200` and server `Vercel` for both hostnames.
- Local/upstream DNS that still caches old GitHub IPs now receives GitHub `404`, not the old website content. This cache should disappear when the old TTL expires.

## Memory Refresh (2026-06-21) - Read First Next Time

### What to remember immediately
- The user's current priority is a clean, compact AI tool catalog, not a long sales landing page.
- Primary domain is now `https://aicontent360.shop`; Vercel is the only intended production host.
- `https://www.aicontent360.shop` and `https://aicontent360.vercel.app` are valid aliases.
- GitHub Pages was disabled and its CNAME/workflow files were removed to prevent old content from appearing again.
- If `aicontent360.shop` looks stale from one device, assume DNS/browser cache first; verify against Vercel IP `76.76.21.21` before changing code.
- After UI/content edits, follow the user's established workflow: build, check, local/browser verify, deploy Vercel, verify production.

### Product rules to preserve
- Keep `/cong-cu-ai` as a curated directory with no filter sidebar.
- Keep `Công Cụ Tìm Video Viral` as an expanded inline summary block with one official link to `https://hungniwaco.shop/`.
- Do not restore consultation CTAs, contact forms, related-tool sections, crowded metadata chips, or the old Viral Scanner marketing layout unless explicitly requested.
- Bottom CTA on `/cong-cu-ai` remains: `Khám phá hơn 60 Công cụ tại hungniwaco.vn`.
- External tool CTAs should send visitors to the official/source page where the full guide and video live.
