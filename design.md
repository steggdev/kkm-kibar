# KiBar Calculator — Design & Handoff Spec (Premium Final)
> Pass this file + `kibar-calculator-final.html` to Claude Code. The HTML is the pixel-perfect reference — build to match exactly. Port into Astro, do not reinvent the design.

---

## Project Overview

Standalone KiBar calorie calculator landing page for KKM (Kementerian Kesihatan Malaysia). Hosted on Cloudflare Pages, linked from the KKM Nutritionist portal via sticky CTA button (redirects to new tab). No backend — all logic client-side. PDPA-compliant by design.

**Stack:** Astro + vanilla JS, Cloudflare Pages, no framework, no backend.

---

## Design Direction

**Aesthetic:** Refined editorial luxury. Premium wellness magazine meets Malaysian government credibility. Deep teal authority, cream body, aged gold accents. Fraunces serif for editorial weight, Inter Tight for modern precision. Feels like a considered publication — not a form, not a SaaS dashboard.

**Reference mood:** Hermès health campaign, NY Times editorial layouts, high-end spa booking flows.

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Role | Font | Usage |
|---|---|---|
| Display / Editorial | **Instrument Serif** regular + italic | Hero headline, metric values, slot names, meal title, italic eyebrows, input labels, section numbers, disclaimer |
| UI / Body | **Inter Tight** 300–700 | All functional UI, buttons, badges, body copy, meta info |

Instrument Serif is a static font (no variable axes) — do not use `font-variation-settings`. The italic is a true italic cut, subtle and refined. Pairs cleanly with Inter Tight without competing for attention.

---

## Colour System

```css
/* Teal ramp */
--teal-950: #00241F;  /* hero/metrics card deep bg */
--teal-900: #003d35;  /* CTA button, kcal badge */
--teal-800: #005547;
--teal-700: #006B5E;  /* primary accent */
--teal-600: #008a78;
--teal-500: #1fa491;
--teal-400: #4db8a8;  /* bullet marks, hover borders */
--teal-300: #86d0c5;  /* hero h1 italic em */
--teal-100: #e0f2ef;
--teal-50:  #f0faf8;

/* Warm cream (warmer than before) */
--cream:     #faf7f2;  /* page bg */
--cream-100: #f4efe6;  /* card borders, section dividers */
--cream-200: #ebe4d6;  /* input borders */
--cream-300: #d6cdbc;  /* disclaimer mark, divider lines */

/* Ink */
--ink:    #0d1f1c;
--ink-80: #283835;
--ink-60: #4a6360;
--ink-40: #7a9693;
--ink-20: #b8cecc;

/* Gold (aged, sophisticated) */
--gold:        #b8924a;   /* NOT #c9a84c — more sophisticated */
--gold-light:  rgba(184,146,74,0.14);
--gold-border: rgba(184,146,74,0.32);
```

### BMI Status colours
| Category | Icon char | Background | Border |
|---|---|---|---|
| `uw` | ↓ | `rgba(134,208,197,0.12)` | `rgba(134,208,197,0.2)` |
| `normal` | ✓ | `rgba(134,208,197,0.14)` | `rgba(134,208,197,0.22)` |
| `ow` | ! | `rgba(201,168,76,0.12)` | `rgba(201,168,76,0.22)` |
| `ob` | ● | `rgba(220,38,38,0.10)` | `rgba(220,38,38,0.2)` |

Icons are symbolic typographic characters, NOT emoji. Keeps the editorial tone.

### Quality Notice tier colours
| Tier | Symbol | Background | Border |
|---|---|---|---|
| `clean` | ◆ | `rgba(22,163,74,0.03)` | `rgba(22,163,74,0.18)` |
| `balanced` | ◇ | `rgba(0,107,94,0.03)` | `rgba(0,107,94,0.18)` |
| `indulgent` | ✦ | `rgba(184,146,74,0.04)` | `rgba(184,146,74,0.25)` |

---

## Radius & Shadow Scale

```css
--r-sm: 8px;
--r:    14px;    /* default — inputs, buttons, slots */
--r-lg: 20px;    /* cards */

--sh-1: 0 1px 2px rgba(0,36,31,0.04), 0 1px 3px rgba(0,36,31,0.06);
--sh-2: 0 4px 12px rgba(0,36,31,0.06), 0 2px 6px rgba(0,36,31,0.04);
--sh-3: 0 18px 48px -12px rgba(0,36,31,0.18), 0 8px 20px -8px rgba(0,36,31,0.10);
--sh-4: 0 32px 64px -16px rgba(0,36,31,0.22), 0 12px 28px -10px rgba(0,36,31,0.14);
```

Shadows use `rgba(0,36,31,...)` (teal-tinted), never pure black — matches the cream background and keeps everything warm.

## Easing

```css
--ease:      cubic-bezier(0.22, 1, 0.36, 1);   /* default — organic, slow-finish */
--ease-soft: cubic-bezier(0.4, 0, 0.2, 1);     /* for gentle loops (orb float) */
```

Use `--ease` for 90% of transitions. Do NOT use `ease`, `ease-in-out`, or linear — they look cheap.

---

## Page Layout

Max content width: `680px` (slightly wider than v3 for more breathing room).

### Hero Section
Full-width `--teal-950` (deeper than v3), padding `3.5rem 1.5rem 6rem`.

**Four background layers (z-indexed):**
1. Base `--teal-950`
2. `::before` — animated floating orb (teal glow, top-right), blurred 20px, 20s slow float animation
3. `::after` — static gold whisper, bottom-left, blurred 24px
4. `.hero-grid` div — 48px grid with radial mask so it fades at the edges

**Hero top bar:**
Left: KKM mark (44×44 frosted glass with inner gradient highlight + Fraunces "KKM") + brand meta (italic "Malaysia" in Fraunces + "Kementerian Kesihatan" in Inter Tight).

Right: Language toggle pill (frosted glass).

**KiBar eyebrow pill:**
Gold dot with pulsing glow + "Program KiBar" in uppercase gold.

**H1:**
Fraunces 300-weight, `clamp(2.25rem, 5.5vw, 3.25rem)`, white, italic `<em>` in `--teal-300` with `opsz: 144` variation.

**Subheading:**
Inter Tight 300, 15px, 60% white, max-width 480px.

**Hero meta strip (new — premium detail):**
Three meta items with italic Fraunces labels + Inter Tight values:
- "Berdasarkan / Based on" → "Garis Panduan KKM / KKM Guidelines"
- "Tempoh kiraan / Calculation time" → "± 30 saat / ± 30 seconds"
- "Privasi / Privacy" → "Data tidak disimpan / No data stored"

Separated from hero by thin 1px border-top (8% white).

**Staggered entry animation** on hero: top bar (no delay), eyebrow (100ms), h1 (200ms), subtitle (300ms), meta strip (400ms).

---

### Form Card
Cream floating card with `--sh-4` (the deepest shadow). Border: `1px rgba(0,36,31,0.03)` for a subtle edge. `margin-top: -3rem`, `z-index: 10`.

**Sections are introduced with an editorial header:**
```
[i.] [SECTION LABEL UPPERCASE] ────────
```
- Section number: Fraunces italic roman numeral (i., ii., iii.) in `--teal-700`
- Label: 10px uppercase, 2px letter-spacing, `--ink-40`
- Trailing fade line: linear gradient `--cream-200` → transparent

**Section A — Personal Info:**
Two-column grid. Input labels are Fraunces italic lowercase. Inputs are 56px, Fraunces 24px for the number, cream background → white on focus with 4px teal glow. Unit labels (kg/cm) are Fraunces italic 13px inside the input right edge.

**Section B — Activity:**
Three cards. Selected state: teal border + cream bg + 3px teal box-shadow glow + animated circular checkmark (top-right, scales in with `--ease`). Hover: translateY(-1px) + gradient overlay.

**Section C — Meal Timing:**
Three timing-slot columns. Label is Fraunces italic ("sarapan" / "makan tengahari" / "makan malam"). Custom select with chevron SVG.

**Section D — CTA:**
Gradient background fade from transparent to cream. Button: `--teal-900` solid, 58px, uppercase 14px Inter Tight, arrow icon that translates on hover, hover darkens to gradient + lifts 2px with deeper shadow.

---

## Results Section

**Results divider** — when results appear, an italic "Keputusan / Results" mark appears between the form card and metrics, flanked by fade lines. Sets a chapter-break feel.

Results stagger in via `fadeInUp` with delays: divider (100ms), metrics (300ms), quality notice (500ms), meal card (700ms).

### Metrics Card
`--teal-950` background with the same floating orb treatment as hero (but stronger top-right).

**Metrics head strip:** italic Fraunces "Profil tenaga" eyebrow + fade line + "Ringkasan" uppercase label.

**Metrics grid:**
Three columns with NO background separator boxes. Instead, 1px `rgba(255,255,255,0.1)` vertical dividers at 20%–80% height between each metric.
- Label: Fraunces italic 11px
- Value: **Fraunces 300 at 2.5rem** (huge, editorial — was 2rem)
- Unit: uppercase 10px Inter Tight

Values animate with `countUp` that uses opacity + translateY + **blur(4px → 0)** — the blur is the key premium detail.

**Status pill:** frosted glass `rgba(255,255,255,0.04)` bg + 1px border + 40×40 icon box with its own border. Symbol characters (↓ ✓ ! ●) instead of emoji.

### Quality Tier Notice
Coloured card between metrics and meal plan. 36×36 icon box with symbol (◆ ◇ ✦). Title in Fraunces 15px 500-weight. Description in Inter Tight 12.5px.

### Meal Plan Card
White card with subtle gradient header (cream → white).

**Meal header:**
- Top row: fade-line + italic Fraunces eyebrow ("Cadangan pemakanan") + 2rem Fraunces title + dark teal-900 kcal badge top-right
- Subtitle: italic-free Inter Tight, longer more narrative tone

**Meal slots — THIS IS THE BIG UPGRADE:**
Editorial menu layout, inspired by restaurant tasting menus.

Each slot has ONE header row with **dotted leader line** connecting the slot name + time to the kcal figure on the right:

```
🌅  Sarapan Pagi   7:00 pagi ·················· ~400 kcal
        – Nasi lemak separuh...
        – Teh O ais kurang manis
```

- Slot emoji 16px (saturate 0.85 for muted feel)
- Slot name: Fraunces 17px
- Time: Fraunces italic 12px `--ink-40`
- Dotted leader: 4px dotted CSS gradient pattern in `--cream-300`
- Kcal: Fraunces italic 12px `--teal-700`
- Items: indented 26px, each item has a small em-dash bullet (6×1px `--teal-400` line, not a dot), Inter Tight 13.5px

Slots are separated by 1px `--cream-100` borders. No boxed backgrounds — just editorial typography.

**Meal footer:** Print button, cream bg → teal-900 on hover with colour inversion.

### Disclaimer
Centred Fraunces italic 11px, preceded by a large `§` section mark in `--cream-300`.

---

## Animations (all use `--ease`)

```css
@keyframes fadeInUp { from { opacity: 0; translateY(20px); } to { opacity: 1; translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; translateY(-12px); } to { opacity: 1; translateY(0); } }
@keyframes countUp { from { opacity: 0; translateY(8px); filter: blur(4px); } to { opacity: 1; translateY(0); filter: blur(0); } }
@keyframes orbFloat { 0% { translate/scale (base); } 100% { translate(-3%, 2%) scale(1.05); } }
@keyframes pulse { 0%,100% { opacity: 1; scale: 1; } 50% { opacity: 0.6; scale: 1.3; } }
```

- `orbFloat` — 20s infinite alternate on hero `::before`
- `pulse` — 2.5s infinite on kibar-dot
- `countUp` — triggered on metric updates via `.updated` class toggle (force reflow with `void el.offsetWidth`)

---

## Calculator Logic

### Formulas
```js
const h = heightCm / 100
const bmi = weight / (h * h)
const idealWeight = 22.0 * h * h

// Use idealWeight when uw or ob
const calcWeight = (bmiCat === 'uw' || bmiCat === 'ob') ? idealWeight : weight
const kcal = Math.round(calcWeight * calorieFactor)
```

### BMI Categories (Asian cutoffs)
| Key | Range |
|---|---|
| `uw` | < 18.5 |
| `normal` | 18.5–22.99 |
| `ow` | 23.0–27.49 |
| `ob` | ≥ 27.5 |

### Calorie Factor
| BMI | Sedentary | Moderate | Active |
|---|---|---|---|
| uw | 35 | 40 | 45 |
| normal | 30 | 35 | 40 |
| ow | 22.5 | 27.5 | 32.5 |
| ob | 22.5 | 27.5 | 32.5 |

---

## Meal Plan Selection (2-Dimension)

### Step 1 — kcal bucket
`low` < 1,400 · `mid` 1,400–1,799 · `high` 1,800–2,199 · `vhigh` ≥ 2,200

### Step 2 — quality tier
| BMI | Activity | Tier |
|---|---|---|
| `ob` or `ow` | any | `clean` |
| `uw` | any | `balanced` |
| `normal` | sedentary or moderate | `balanced` |
| `normal` | active + (high or vhigh bucket) | `indulgent` |
| bucket = `low` | always | override to `clean` |

### Step 3 — plan key
```js
const key = `${bucket}-${tier}`  // e.g. 'high-indulgent'
// fallback: `${bucket}-balanced` if key not found
```

Available plan keys: `low-clean`, `mid-clean`, `mid-balanced`, `high-clean`, `high-balanced`, `high-indulgent`, `vhigh-clean`, `vhigh-balanced`, `vhigh-indulgent`.

### Meal timing
```js
snack1 = Math.round((breakfastMins + lunchMins) / 2 / 30) * 30   // round to 30min
snack2 = Math.round((lunchMins + dinnerMins) / 2 / 30) * 30
```

Format: `"7:00 pagi"` (BM) / `"7:00 am"` (EN).

---

## i18n

Two languages: `bm` (default, `<html lang="ms">`) and `en`. Toggle in hero. All strings, meal items, dropdown options, quality notice copy, metadata labels, section numbers, and status text switch. If results visible, recalculate on switch.

All data lives in the reference HTML `t` object and `mealPlans` object.

---

## Responsive (max-width: 560px)

- Hero: smaller padding, h1 1.9rem, **hide brand-meta** (keep logo)
- Meta strip: 1.5rem gap, 1.5rem top padding
- Field-row, activity-grid, timing-grid → 1 column
- Activity options become horizontal rows (icon left, text right)
- Metrics grid → 1 column with bottom-border dividers instead of vertical
- Meal header-top: column direction

---

## Print Styles

When printing, hero becomes white/ink, metrics card becomes white, form card is hidden entirely, results divider hidden. Preserves the brand headline, metrics, meal plan, and disclaimer in a printable editorial format.

---

## Astro File Structure

```
src/
  pages/
    index.astro
  components/
    Hero.astro
    CalculatorForm.astro
    Results.astro
    MetricsCard.astro          ← extract the dark card
    QualityNotice.astro
    MealPlanCard.astro
  data/
    translations.ts            ← the `t` object
    mealPlans.ts               ← all 9 plan keys + slots
    calculator.ts              ← pure functions
  styles/
    global.css                 ← CSS vars + reset + fonts
```

All calculator logic in pure `.ts` — `getBmiCat`, `getCalorieFactor`, `getMealPlanKey`, `getSnackTimes`, `formatTime`. No React, no Vue. Vanilla JS via `<script>` in Astro components.

---

## Assets Pending from Client

| Asset | Current | Action |
|---|---|---|
| KKM official logo | Fraunces "KKM" placeholder in frosted box | Replace with SVG |
| KiBar campaign logo | Gold pill text | Replace with campaign SVG |
| Meal plan content | Draft placeholder meals | **Must be validated by KKM nutritionist team before go-live** |
| Font licensing | Google Fonts (free) | No action needed — Fraunces & Inter Tight are both OFL-licensed |

---

## Deployment

- Host: **Cloudflare Pages**
- Domain: TBD (`kibar.healthmetrics.com` or `kibar.moh.gov.my` if KKM provides)
- Portal integration: sticky CTA on KKM portal → `target="_blank"` redirect
- Zero cookies, zero analytics by default. Add GA4 only if KKM requests.
- **PDPA compliant** — all processing client-side, no data leaves the browser

---

## Build notes for Claude Code

1. **Read this file and the reference HTML first before writing anything.**
2. Scaffold Astro with `npm create astro@latest` — use minimal, typescript strict, no UI framework.
3. Port the CSS variables to `src/styles/global.css`.
4. Extract the `t` object and `mealPlans` into typed data files.
5. Build components one section at a time — test visual parity against the reference HTML before moving on.
6. Calculator logic goes into pure functions in `calculator.ts`. DOM binding stays in the component `<script>` block.
7. Deploy to Cloudflare Pages with a `wrangler.toml` committed to the repo.
8. Final visual check: open reference HTML + your build side by side. Pixel-perfect is the target.
