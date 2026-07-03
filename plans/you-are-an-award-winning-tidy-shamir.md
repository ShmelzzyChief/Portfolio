# Plan: Premium Personal Portfolio — Зырянов Елисей

## Context

The user wants a premium personal portfolio website for a Product Designer. The design should communicate maturity, editorial sensibility, and product thinking rather than flashy visuals. A Figma import (`КриптоКейс-1`) provides a crypto case study that should be referenced as one of the 4 featured works. The site runs on React + Tailwind CSS v4 + Motion (already installed).

**Color palette:** `#151515` bg · `#F8F8F6` text · `#3B82F6` accent (interactions only)  
**No @make-kits packages installed** — use existing shadcn UI components from `src/app/components/ui/` + custom components.

---

## Architecture

```
src/app/
├── App.tsx                          — main layout, scroll container, font import
└── components/
    ├── ui/                          — existing shadcn components (reuse as-is)
    ├── figma/ImageWithFallback.tsx  — existing, use for all images
    ├── Navigation.tsx               — minimal sticky nav
    ├── Hero.tsx                     — large name, tagline, 3 CTA buttons, stagger anim
    ├── About.tsx                    — bio + career timeline
    ├── CaseStudies.tsx              — 4 featured project cards section
    ├── CaseStudyCard.tsx            — reusable card (image, meta, hover effect)
    ├── Skills.tsx                   — skills grid with categories
    ├── Contact.tsx                  — large CTA with Telegram/Email/CV buttons
    ├── Footer.tsx                   — minimal footer
    ├── MagneticButton.tsx           — magnetic hover effect (mouse tracking)
    └── ScrollReveal.tsx             — fade-in/stagger wrapper using IntersectionObserver + Motion
```

---

## Typography

Add to `src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
```

- Headings: `DM Serif Display` — editorial, confident
- Body/UI: `Inter` — clean, precise
- Large display text: `clamp(4rem, 10vw, 8rem)` for hero name

---

## Sections

### Navigation
- Fixed top bar, `backdrop-blur` with slight bg tint on scroll
- Logo (initials) left, links right: About / Work / Contact
- Animated underline on active/hover links

### Hero
- Full viewport height
- Large display: "Зырянов Елисей" in DM Serif Display
- Subtitle: "Product Designer"
- Tagline: "Designing products that people enjoy using and businesses love scaling."
- Three buttons: CV · TG · Blog — magnetic hover effect, border-only style, fills on hover
- Subtle scroll indicator bottom-center
- Motion: text stagger reveal (each word fades up with delay cascade)

### About
- Left: short bio paragraph (4+ years, mentions product design, UX/UI, design systems, research, analytics, prototyping)
- Right: vertical timeline
  - 2020 — Junior Product Designer, Startup X
  - 2021 — Mid Product Designer, Agency Y
  - 2022 — Senior Product Designer, Fintech Z
  - 2024 — Lead Product Designer, FinTech / Web3
- Timeline items animate in staggered on scroll

### Case Studies (4 cards)
Full-width section, 2-column grid on desktop, 1-column mobile.

Card data:
1. **Crypto Exchange Platform** — Web3 / Fintech · Lead Designer · 2023–2024 · +68% conversion, 2M+ users — uses Figma import images (`imgBanner`, `imgBg`) via `figma:asset` scheme
2. **Analytics Dashboard** — B2B SaaS · Product Designer · 2022–2023 · NPS +28, 40% task time reduction
3. **Mobile Banking App** — Fintech · Senior Designer · 2021–2022 · 4.8★ App Store, 500K+ downloads
4. **Design System** — Internal Platform · Design Lead · 2022–2024 · 3 products, 80+ components

Cards display: cover image (16:9) → product name → industry badge → description → role + timeline row → metrics chips → "View case →" link  
Hover: `scale(1.02)` + subtle shadow lift + image zoom `scale(1.05)` via Motion

Use Unsplash MCP for cards 2–4 cover images (search "dashboard analytics dark", "mobile banking app", "design system components").

### Skills
Grid of 3 columns: Product Design / Research & Analytics / Tools & Systems  
Each column: category title + list of skills  
Subtle stagger on scroll

### Contact
Centered, full-width  
Large heading: "Let's build products people love."  
Three magnetic buttons: Telegram · Email · CV  
Email: elisey@example.com (placeholder)

### Footer
Single line: "Зырянов Елисей · 2024" centered

---

## Animations (Motion)

**ScrollReveal component:** uses IntersectionObserver + `motion.div` with `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}` with configurable delay/stagger.

**MagneticButton component:** tracks mousemove with `useRef`, applies `transform: translate(x, y)` with spring physics via `useSpring` from Motion. Resets on mouse leave.

**Hero text stagger:** wrap each word in `motion.span`, stagger `delay = index * 0.04s`.

**Card hover:** `whileHover={{ scale: 1.02 }}` on card, inner image uses `whileHover={{ scale: 1.06 }}` on the image wrapper.

**Navigation underline:** CSS pseudo-element `::after` animated via `scaleX` on hover.

---

## Critical Files

- `src/app/App.tsx` — assemble all sections, set `background: #151515`
- `src/styles/fonts.css` — add Google Fonts import
- `src/styles/theme.css` — add portfolio-specific CSS variables for bg/text/accent
- `src/imports/КриптоКейс-1/*.png` — use `figma:asset/[hash].png` for crypto case study cover

---

## Image sourcing

- Case study 1 (Crypto): use `figma:asset/a0dda637b64977f7755958c86d55484732aa596f.png` (imgBanner from Figma import)
- Cases 2–4: source via `mcp__plugin_make_unsplash__search_photos` during implementation
- All rendered via `<ImageWithFallback>` from `src/app/components/figma/ImageWithFallback.tsx`

---

## Verification

1. Preview loads with dark background (#151515) and correct typography
2. Hero text stagger animation plays on load
3. Scroll triggers fade-in on About, Case Studies, Skills, Contact
4. Case study cards show hover scale animation
5. Magnetic buttons respond to mouse hover movement
6. Layout is responsive: desktop 1280px max, tablet 768px, mobile 375px
7. No console errors about missing assets
