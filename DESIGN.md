# DESIGN.md: manasr.dev → Update Guide for 0xpriyanshu.me

## Source
- URL: https://manasr.dev
- Capture date: 2026-09-11
- Evidence: rendered page content + metadata for the homepage and one project detail page (`/projects/nap`), fetched directly.
- **Note on method:** this environment has no Firecrawl API key and no network access to the Firecrawl or `manasr.dev` domains from the sandbox, so the usual `branding` + `images` + full-page-screenshot scrape couldn't run. Everything below is inferred from the page's rendered markdown, metadata (`theme-color`, OG tags), and known conventions for this exact stack (Next.js + Tailwind + Vercel-style dark portfolios). Open https://manasr.dev directly alongside this file for the real visual reference — treat color/spacing values here as best-effort, not measured.

## Design Summary
A single-page, dark, engineering-first portfolio. No color accents, no marketing copy — just a hero, a project grid with live status pills, a plain experience list, a flat skills chip row, one blog link, and a closing pull-quote as a personal signature. The tone comes entirely from content density and restraint, not decoration.

## Design Tokens

### Colors (inferred)
| Role | Value | Confidence |
|---|---|---|
| Background | `#09090b` (Tailwind `zinc-950`) | Observed (`meta-theme-color`) |
| Text primary | near-white, likely `zinc-50`/`zinc-100` | Inferred |
| Text secondary/muted | `zinc-400`/`zinc-500` | Inferred |
| Borders/dividers | `zinc-800`/`zinc-900` | Inferred |
| Accent | none — no brand color detected; relies on white-on-black contrast only | Inferred |

### Typography (inferred)
- Body/UI: system sans-serif stack (Inter-class geometric grotesque — standard for this Next.js/Tailwind/Vercel-adjacent stack).
- Name/H1: large, heavy weight, tight tracking.
- Role label ("AI Engineer"): small, likely uppercase or muted-color subtitle directly under the name.
- Tag/skill chips and stack pills: small size, medium weight, pill-shaped containers.
- Closing quote: larger, quieter weight (italic or serif-adjacent) to read as a signature rather than body copy — this is the one moment of typographic contrast on the page.

### Spacing & Layout (inferred)
- Single centered column, generous max-width container, no sidebar.
- Heavy vertical rhythm between sections (Hero → Projects → Experience → Skills → Blogs → Quote) — no dense grid packing.
- Project cards: 2-up grid, each card = background image/video + title + status pill + one-line description + "View Details" link.
- Rounded corners throughout (cards, avatar, pills) — soft-radius, no sharp edges.

## Components
- **Hero:** rounded avatar, name, role, one dense paragraph of bio (not bullets), two CTA links side by side (`Book a call` / `Send an email`), then a plain text social row (Github / LinkedIn / Medium).
- **Project card:** live media thumbnail (image or looping video), title, `Live` status pill, single-line pitch, `View Details` link. Section ends with a plain `View all` link — no "load more" UI.
- **Project detail page:** full-width looping demo video at top, then Github / Visit Live / Post links, then 2–3 paragraphs of dense technical prose (architecture, failure handling, concrete throughput numbers), then a `Stack used` chip row at the bottom.
- **Experience row:** small square logo, company name, role, employment type, date range, location — flat list, no timeline graphic.
- **Skills:** one flat wrapped row of icon+label chips, no categories.
- **Blog link:** title, date, and stack tags inline, single list item (only one post currently).
- **Closing quote:** centered pull-quote (Feynman quote) with attribution — the page's only "voice" moment, doubling as a personal brand signature.

## Page Patterns
Order: Hero → Projects grid → Experience → Skills & Technology → Blogs → Closing quote. No nav bar, no footer utility links, no theme toggle, no command palette — the entire site is this one scroll plus per-project detail pages.

## Content Style
- First-person, terse, technical — reads like an engineering log, not a marketing bio ("I enjoy solving complex engineering problems... clean architecture, exceptional developer experience...").
- Project write-ups are spec/postmortem style with hard numbers ("a k6 ramp to 100 concurrent turns across nine pods finished 2,310 turns with zero sequence gaps").
- No adjectives-as-decoration ("world-class", "passionate") — credibility comes from specificity.

---

## Applying This to 0xpriyanshu.me

0xpriyanshu.me is currently a **richer, more feature-complete** site than manasr.dev — it already has Overview, categorized Stack, Testimonials, GitHub contribution heatmap, Experience, Projects (with periods), Awards, Certifications, Bookmarks, a Brand/colophon section, a Cmd+K command palette, and analytics (OpenPanel/PostHog), on a **light theme** (`theme-color: #ffffff`). manasr.dev is the opposite: one dark page, almost no chrome, all impact from writing density. Don't strip 0xpriyanshu.me down to match — borrow its *voice and signature moments*, not its minimalism, since the extra sections (awards, bookmarks, testimonials) are genuine advantages manasr.dev doesn't have.

Concrete changes, roughly in priority order:

1. **Rewrite the hero bio as one dense paragraph, not a bullet list.** Replace the three `Hello` bullets with a single flowing paragraph in manasr's register — first-person, specific, no bullets. Keep the bullets only for scannable facts (roles/links) elsewhere on the page.

2. **Add explicit hero CTAs.** manasr.dev puts `Book a call` and `Send an email` right under the bio as the two primary actions. 0xpriyanshu.me currently only surfaces social icons here — add a `Book a call` (Cal.com or similar) + `Email me` button pair directly under the name/role block.

3. **Give each project card a one-line pitch + status pill.** manasr's cards read at a glance: title, `Live` pill, one punchy sentence, `View Details`. Trim the project section on the homepage to that shape; move the fuller tag lists (Blockchain/Python/AI/Full-Stack) to the project detail page.

4. **Rewrite project detail copy in spec/postmortem style.** Swap generic one-liners (e.g. Ayurchain's current description) for 2–3 paragraphs that name the concrete architecture and at least one real number (latency, throughput, users, uptime) — mirroring how `nap`'s page justifies itself with the k6 load-test result. This is the single highest-leverage content change; it's what makes manasr's site feel credible rather than templated.

5. **Add a closing signature moment.** manasr closes on a pull-quote. Give 0xpriyanshu.me an equivalent low-decoration, high-personality closing block after the Bookmarks/Brand sections — a quote, a short personal statement, or a "how this site is built" colophon line, set in a distinct type treatment from the rest of the page.

6. **Optional dark-mode pass.** If a moodier feel is wanted for evening/portfolio-browsing traffic, add a `zinc-950` dark theme variant (toggle, not replacement — the light theme suits the data-dense sections here better than it would suit manasr's sparse layout).

7. **Leave the data-rich sections alone.** Testimonials, GitHub contributions, Awards, Certifications, and Bookmarks have no equivalent on manasr.dev and are working in 0xpriyanshu.me's favor for a full-stack/leadership-heavy profile — don't cut these to chase manasr's minimalism.

## Rerun Inputs
```txt
workflow: firecrawl-website-design-clone (adapted — no Firecrawl access in this environment)
source_url: https://manasr.dev
comparison_url: https://0xpriyanshu.me
output: DESIGN.md
```
