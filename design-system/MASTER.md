# AIContent360 Design System

## Direction
`AI Tool Directory đáng tin cậy cho creator Việt`

The site should feel like a practical, credible, curated directory of AI tools for Vietnamese creators and affiliate operators. It should help users quickly answer: which AI tool fits my current goal?

## Positioning
Not a generic AI landing page. Not a dark futuristic demo. Not a playful education app.

Use trust, clarity, utility, and measurable outcomes as the visual language.

## Product Pattern
Marketplace / Directory

Primary UX job:

- Help users search/filter by goal, platform, and price.
- Surface featured tools clearly.
- Build enough trust to click into tool detail or outbound CTA.

## Layout Principles
Homepage should prioritize:

1. Search/filter-oriented hero
2. Goal shortcuts: Tạo content, Tăng view, Kiếm tiền, Sức khỏe, Affiliate
3. Featured tools
4. Proof/case metrics
5. Free resources
6. Blog/education
7. CTA tư vấn

`/cong-cu-ai` should behave like the core product page, not a secondary blog page.

Tool cards should make these scannable:

- Tool name
- Goal tags
- Platform tags
- Free/paid status
- One-line outcome
- Primary action

## Palette
Use a bright, trustworthy palette with restrained accents.

```text
Ink:        #101828
Surface:    #F8FAFC
Card:       #FFFFFF
Primary:    #1E40AF
Primary 2:  #2563EB
Growth:     #059669
Signal:     #F59E0B
Border:     #E2E8F0
Muted text: #475569
Soft blue:  #EFF6FF
Soft green: #ECFDF5
Soft amber: #FFFBEB
```

Avoid making the site read as one-note blue. Use green for growth/proof and amber for highlight badges.

## Typography
Preferred: `Plus Jakarta Sans` for heading/body/UI.

Alternative:

- Heading: `Space Grotesk`
- Body: `DM Sans`

Use `next/font/google` instead of external CSS imports.

## Component Direction
### Header
- Clean, utility-first.
- Brand visible.
- Desktop nav can remain full; mobile needs a proper menu if redesigned.
- Primary CTA can be `Khám phá công cụ` or `Nhận tư vấn`.

### Hero
Core line:

`Bạn muốn AI giúp gì hôm nay?`

Support copy should explain practical outcomes, not hype.

Hero should include either:

- Search bar with popular goal chips, or
- Goal selector cards that route/filter into `/cong-cu-ai`.

### Cards
- Radius: 8-12px max, not oversized pill/card-heavy decoration.
- Clear hover state without layout shift.
- Use badges for goal/platform/price.
- Use icons only if using a consistent set, preferably lucide.

### Filters
- Make filters feel like the primary tool.
- Keep query params behavior.
- Add clear/reset action later.
- Maintain keyboard/focus visibility.

### Trust Signals
Use concrete proof:

- Case study metrics
- Tool count
- Free resources count
- Updated catalog
- Clear contact/support information

Avoid fake testimonials unless real names/logos exist.

## Motion
Subtle only:

- 150-250ms color/shadow transitions
- No layout-shifting hover scale
- Respect `prefers-reduced-motion`

## Accessibility Checklist
- Text contrast at least WCAG AA.
- Visible `focus-visible` states.
- Form inputs need labels.
- Do not use color as the only state indicator.
- No horizontal scroll at mobile widths.
- Test 375px, 768px, 1024px, 1440px.

## Anti-Patterns To Avoid
- Dominant purple/pink AI gradients.
- Dark OLED futuristic look.
- Floating decorative orbs/blobs.
- Emoji icons as UI controls.
- Generic SaaS hero with abstract cards and vague value props.
- Thin blog cards without clear user outcome.
