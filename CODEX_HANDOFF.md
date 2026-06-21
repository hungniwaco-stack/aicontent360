# Codex Handoff - AIContent360

Last updated: 2026-06-21

## Quick Memory For Next Session
- Read the `Latest Production Baseline` section below before acting. It supersedes older notes when they conflict.
- Do not ask the user to restate the established design, content, preview, or deployment workflow.
- Work directly in `D:\Hungniwaco\CODEX\Aicontent360`.
- Use `npm.cmd run check` and `npm.cmd run build` on Windows; plain `npm run ...` can be blocked by PowerShell Execution Policy.
- Current framework version is Next.js `15.5.19`; do not downgrade to `15.3.3` because Vercel blocks that vulnerable version.
- GitHub is connected as `hungniwaco-stack`; repo remote is `https://github.com/hungniwaco-stack/aicontent360.git`.
- Vercel is connected to project `hungs-projects-fdde2488/aicontent360`; primary domain is `https://aicontent360.shop`.
- Custom production domains are connected and SSL-valid: `https://aicontent360.shop` and `https://www.aicontent360.shop`. Fallback alias: `https://aicontent360.vercel.app`.
- GitHub Pages has been disabled and its workflow/CNAME files were removed. Vercel is now the only intended production host.
- Vercel deploy uses `vercel.json` with `outputDirectory: "out"` because this app is a Next static export.
- Git for Windows 2.54.0 is installed. If `git` is not found in the current shell, use `C:\Program Files\Git\cmd\git.exe` or refresh PATH.
- For local preview, start Next.js on the next unused port; ports through `3021` were used in the latest session.
- Design direction is already decided: `AI Tool Directory đáng tin cậy cho creator Việt`.
- Keep the site practical, trustworthy, and directory/search-first. Do not ask again whether it should be a flashy AI landing page.
- Use the visual system in `design-system/MASTER.md`: Plus Jakarta Sans, ink `#101828`, surface `#F8FAFC`, primary blue `#1E40AF`, growth green `#059669`, signal amber `#F59E0B`.
- Avoid dominant purple/pink AI gradients, dark futuristic styling, decorative blobs/orbs, playful/kids typography, and generic SaaS hero layouts.
- Homepage and `/cong-cu-ai` now have the current production layout. Preserve that baseline and make requested changes incrementally.
- SEO basics fixed today: Breadcrumb JSON-LD uses `siteConfig.url`, and sitemap includes static routes, tools, blog posts, and blog categories.
- The in-app browser worked in the latest session. Use it after each UI change and verify the deployed production page.

## Working Directory
Use this project directly next time:

`D:\Hungniwaco\CODEX\Aicontent360`

## Project Summary
AIContent360 is a Next.js static-export website for `https://aicontent360.shop/`.

The site presents and distributes practical AI tools for Vietnamese creators, especially around:

- AI content creation
- Viral growth and view optimization
- Storytelling
- Affiliate and creator monetization
- Health/beauty prompt tools

## Tech Stack
- Next.js 15.5.19
- React 19.1.0
- TypeScript
- Tailwind CSS
- Static export deployed on Vercel
- Primary production domain: `https://aicontent360.shop/`
- Additional aliases: `https://www.aicontent360.shop`, `https://aicontent360.vercel.app`

Important config:

- `next.config.mjs` uses `output: "export"`, `trailingSlash: true`, and unoptimized images.
- `vercel.json` uses `buildCommand: "npm run build"` and `outputDirectory: "out"`.
- GitHub Pages workflow and CNAME files were intentionally removed on 2026-06-21.

## Checks Already Run
Use `npm.cmd` on Windows because `npm.ps1` may be blocked by Execution Policy.

Passed:

```powershell
npm.cmd run check
npm.cmd run build
```

Result:

- TypeScript passed.
- ESLint passed with no warnings/errors.
- Production build passed.
- Static export generated 53 pages.

Note: Git for Windows is installed, but an already-open PowerShell/Codex shell may not have refreshed PATH. Use `C:\Program Files\Git\cmd\git.exe` directly if needed.

## Skills Installed
From `anthropics/skills`, installed globally into:

`C:\Users\thinh\.codex\skills`

Installed skills:

- `frontend-design`
- `theme-factory`
- `brand-guidelines`
- `canvas-design`

From `nextlevelbuilder/ui-ux-pro-max-skill`, installed project-local with:

```powershell
npx.cmd uipro-cli init --ai codex
```

Installed to:

`D:\Hungniwaco\CODEX\Aicontent360\.codex\skills\ui-ux-pro-max`

Restart Codex after installation so the new skills are loaded automatically.

## Design Direction Chosen
Recommended direction:

`AI Tool Directory đáng tin cậy cho creator Việt`

Treat the website as a curated AI tools directory/marketplace with trust and conversion, not as a flashy futuristic AI landing page.

UI/UX Pro Max matched the product best to:

- Pattern: `Marketplace / Directory`
- Style: `Trust & Authority`

Avoid:

- Dominant AI purple/pink gradients
- Playful/kids typography
- OLED/dark futuristic style
- Generic SaaS hero with blobs/orbs
- Over-decorated template-like landing page sections

## Recommended Visual System
See `design-system/MASTER.md` for the source of truth.

Short version:

- Font: `Plus Jakarta Sans`
- Ink: `#101828`
- Surface: `#F8FAFC`
- Card: `#FFFFFF`
- Primary: `#1E40AF`
- Primary 2: `#2563EB`
- Growth: `#059669`
- Signal: `#F59E0B`
- Border: `#E2E8F0`
- Muted text: `#475569`

Hero/search copy angle:

`Bạn muốn AI giúp gì hôm nay?`

## Main Content Files
- `data/tools.ts`: AI tool catalog.
- `data/blogPosts.ts`: blog post data.
- `data/blogTemplates.tsx`: shared blog rendering template.
- `data/siteConfig.ts`: site metadata and nav.
- `types/index.ts`: Tool and BlogPost types.

## Main Routes
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
- `/blog/chuyen-muc/[category]`
- `/gioi-thieu`
- `/lien-he`

## Issues Found
Prioritize these when continuing work:

1. `components/ContactForm.tsx` only tracks `lead_submit_click`; it does not submit data.
2. `app/lien-he/page.tsx` has placeholder contact info: `0900 000 000`, `fb.com/aicontenthub`, `hello@aicontenthub.vn`.
3. Legal pages are placeholders only:
   - `app/chinh-sach-bao-mat/page.tsx`
   - `app/dieu-khoan-su-dung/page.tsx`
   - `app/chinh-sach-thanh-toan/page.tsx`
4. Some `relatedToolSlugs` in `data/blogPosts.ts` reference old/deleted tool slugs.
5. Blog detail pages are still generic/template-heavy. `BlogDetail` mostly uses `post.content[0]`, while core sections are shared text.
6. Tool detail CTA/trust section can be improved for stronger conversion.

## Suggested Next Work Order
1. Replace placeholder contact/legal content.
2. Decide how `ContactForm` should submit leads, then implement it.
3. Expand blog detail content so each article is meaningfully unique.
4. Clean stale `relatedToolSlugs` or wire them into related-tool logic.
5. Commit/push the completed design, GitHub, and Vercel changes when the user asks.

## Operational Memory From 2026-06-20
- GitHub auth issue solved by logging out of the broken keyring token and logging in with `gh auth login -h github.com -p https -w --insecure-storage`; this made `gh auth token`, `gh api user`, and `gh repo view` work.
- If `gh auth status` says logged in but `gh api user` returns 401, check `gh auth token`. If it says no token found, the keyring token is not usable in Codex.
- Vercel initially created the project with Framework Preset `Other`; without `vercel.json`, deploy completed but `https://aicontent360.vercel.app` returned 404 because output was not pointed at `out`.
- Vercel blocked deployment on Next.js `15.3.3` with `Vulnerable version of Next.js detected`; upgrading `next` and `eslint-config-next` to `15.5.19` fixed it.
- `npx.cmd`/`npm.cmd` may hit EPERM in npm cache inside sandbox; rerun important registry/Vercel commands with escalation if needed.

## Notes For Next Codex Session
Start by reading:

1. `CODEX_HANDOFF.md`
2. `SESSION_NOTES.md`
3. `design-system/MASTER.md`

Then continue directly in `D:\Hungniwaco\CODEX\Aicontent360`.

## Latest Production Baseline

This section is the current source of truth and supersedes older handoff notes when they conflict.

### How the user wants work handled
- Communicate in Vietnamese and implement directly when the request is clear.
- After every website change: build, check, start a local preview, inspect it in the in-app browser, deploy to Vercel, verify production, and leave the browser on the deployed result.
- Run `npm.cmd run build` and `npm.cmd run check` sequentially, not in parallel.
- Deploy with `npx.cmd vercel --prod --yes`.
- Do not stop after describing a plan or after local-only verification.

### Current product direction
- AIContent360 is a compact, trustworthy AI tool directory for Vietnamese creators.
- The website introduces tools; detailed instructions and videos live on each external source page.
- Use Plus Jakarta Sans with navy, blue, emerald, amber, white, and slate.
- Avoid purple/pink AI gradients, decorative blobs, crowded metadata chips, and unnecessary consultation messaging.

### Current page behavior
- Homepage `/` has a navy two-column hero. Search and catalog stats are on the left; Viral Scanner is highlighted on the right.
- `/cong-cu-ai` has no filter sidebar. It uses fixed curated groups and a standalone featured Viral Scanner block.
- The featured Viral Scanner block is expanded inline with all summary content and one official-site link; it must not show `Xem chi tiết` or navigate to the internal detail page.
- Viral Scanner must not be duplicated in the homepage featured grid or the `Viral & storytelling` group.
- Tool cards only show category, optional featured badge, name, description, and `Xem chi tiết`.
- Generic tool details have one outbound CTA: `Xem hướng dẫn trên trang chính`.
- Consultation CTAs/forms and `Công cụ liên quan` were intentionally removed. Do not restore them without a new explicit request.
- The directory CTA is exactly `Khám phá hơn 60 Công cụ tại hungniwaco.vn` and links to `https://hungniwaco.vn`.

### Viral Scanner
- Slug: `cong-cu-tim-video-viral`
- Route: `/cong-cu-ai/cong-cu-tim-video-viral/`
- Product URL: `https://hungniwaco.shop/`
- Display name: `Công Cụ Tìm Video Viral`.
- Its detail page is intentionally a short, neutral summary with one outbound CTA because the official website already contains the full product presentation.
- Do not restore the former bespoke hero, scan mockup, feature blocks, workflow, or repeated sales CTAs.

### Operational details
- Primary production: `https://aicontent360.shop`
- Additional aliases: `https://www.aicontent360.shop`, `https://aicontent360.vercel.app`
- Vercel project: `hungs-projects-fdde2488/aicontent360`
- Keep `vercel.json` pointing to static export directory `out`.
- Ports through `3021` were used for local previews; try `3022` next.
- The worktree can contain many user changes. Never revert unrelated modifications.
- Full tool-link records, free-tool membership, and detailed do-not-regress rules are recorded in the final section of `SESSION_NOTES.md`.

### Final state to resume from
- Latest production page: `https://aicontent360.vercel.app/cong-cu-ai/`
- Viral Scanner is expanded inline on that page with all summary content and one external CTA to `https://hungniwaco.shop/`.
- There is no `Xem chi tiết` or internal detail-page link in the featured block.
- Build, check, desktop/mobile QA, Vercel deploy, and production verification all passed after this change.
- Read the final `Final State Snapshot (2026-06-20)` section in `SESSION_NOTES.md` before making the next change.
- Custom-domain setup was completed on 2026-06-21. Hostinger DNS for both `@` and `www` points to `76.76.21.21`, and one Vercel certificate covers both hostnames.
- Old GitHub Pages content was removed on 2026-06-21. If a local resolver still points `aicontent360.shop` at GitHub IPs during DNS cache expiry, GitHub returns `404` instead of the old content.

## Update 2026-06-20
- Completed SEO correctness pass:
  - `components/Breadcrumb.tsx` now uses `siteConfig.url` instead of `https://example.com`.
  - `app/sitemap.ts` now includes static routes, tool detail pages, blog detail pages, and blog category pages.
- Completed first directory UX pass:
  - Homepage hero is now search-led with goal chips and catalog stats.
  - Homepage sections now emphasize goal shortcuts, featured tools, trust metrics, and latest blog posts.
  - `/cong-cu-ai` now has a stronger catalog header and data-backed stats.
  - `ToolFilter` now has sidebar filters, reset behavior, richer search, result summary, and empty state.
  - `ToolCard` now exposes price, featured/new state, goal tags, platform tags, and a steadier CTA layout.
  - Site font changed to Plus Jakarta Sans via `next/font/google`.
- Verification:
  - `npm.cmd run build` passed.
  - `npm.cmd run check` passed after build completed.
- Browser visual verification was attempted, but the in-app browser runtime failed to initialize due an environment EPERM error under `C:\Users\thinh\AppData`.

## Update 2026-06-20 - Tool Detail Conversion
- Completed the next priority from the handoff: redesigned the tool detail CTA/trust area.
  - `components/ToolDetailActions.tsx` now shows price/free status, featured status, platform/output summary, trust bullets, outbound CTA, and consultation CTA.
  - `app/cong-cu-ai/[slug]/page.tsx` now uses a clearer two-column detail layout with scannable goal/platform tags and separate content cards for value, audience, outputs, and demo.
  - Consultation CTA routes to `/lien-he?tool=<slug>` and tracks `lead_submit_click`.
- Verification:
  - `npm.cmd run check` passed.
  - `npm.cmd run build` passed and exported 53 pages.
  - Static output inspection confirmed the new CTA appears in `out/cong-cu-ai/chatbot-tao-video-suc-khoe/index.html`.
- Dev server note:
  - Foreground `npm.cmd run dev -- --port 3001` starts successfully.
  - Background `Start-Process` attempts did not leave a reachable server in this sandbox, so use foreground dev server if visual QA is needed.

## Update 2026-06-20 - GitHub and Vercel Connection
- GitHub connection restored:
  - GitHub CLI is authenticated as `hungniwaco-stack`.
  - Local remote remains `https://github.com/hungniwaco-stack/aicontent360.git`.
  - Git for Windows 2.54.0 was installed; current Codex shell may still need direct path `C:\Program Files\Git\cmd\git.exe` until PATH refresh.
  - `gh auth setup-git` was run successfully after temporarily adding Git to PATH.
- Vercel connection completed:
  - Created Vercel project `hungs-projects-fdde2488/aicontent360`.
  - Linked local directory, generating `.vercel/project.json` with project ID `prj_gou8NriqlN0ytxzAsOtKPwD7HA24`.
  - Added `vercel.json` so Vercel deploys the static export from `out`.
  - Upgraded `next` and `eslint-config-next` from `15.3.3` to `15.5.19` because Vercel blocked deployment for a vulnerable Next.js version.
  - Production deploy succeeded and was aliased to `https://aicontent360.vercel.app`.
- Verification:
  - `npm.cmd run check` passed.
  - `npm.cmd run build` passed with Next.js 15.5.19.
- Vercel alias checks returned 200 for `/`, `/cong-cu-ai/kinh-di-dien-anh/`, and `/sitemap.xml`.

## Update 2026-06-20 - Contact and Legal Cleanup
- Completed the next priority from the handoff: contact/legal placeholders.
  - `/lien-he` no longer shows fake Zalo/Facebook/email values.
  - `data/siteConfig.ts` now has `contact.email`, configurable with `NEXT_PUBLIC_CONTACT_EMAIL` and defaulting to `hello@aicontent360.shop`.
  - `components/ContactForm.tsx` now works as a controlled static-site lead form: submit opens a prefilled `mailto:` email and tracks `lead_submit_click`.
  - `/lien-he?tool=<slug>` pre-fills the selected tool name into the request field.
  - `ContactSideCta` now anchors to the form instead of being a tracking-only button.
  - `/chinh-sach-bao-mat`, `/dieu-khoan-su-dung`, and `/chinh-sach-thanh-toan` now contain practical policy content.
  - Stale `relatedToolSlugs` in `data/blogPosts.ts` were mapped to current tool slugs; a quick slug check found no missing related tools.
- Verification:
  - `npm.cmd run check` passed.
  - `npm.cmd run build` passed and exported 53 pages.
- Remaining next priorities:
  1. Expand blog detail content so each article is meaningfully unique.
  2. Wire `relatedToolSlugs` into blog detail related-tool UI if desired.
  3. Confirm the real support channels before final launch.
