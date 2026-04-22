# KiBar Calculator — Design & Handoff Spec (v3 Final)
> Pass this doc + `kibar-calculator-v3-final.html` to Claude Code. The HTML is the living reference — build to match it exactly. Port into Astro, do not reinvent.

---

## Project Overview

Standalone KiBar calorie calculator landing page for KKM (Kementerian Kesihatan Malaysia). Hosted on Cloudflare Pages, linked from the KKM Nutritionist portal via sticky CTA button (new tab redirect). No backend — all logic is client-side.

**Stack:** Astro + vanilla JS, Cloudflare Pages, no framework, no backend.

---

## Design Direction

**Aesthetic:** Refined health-luxury. Premium wellness app credibility meets Malaysian government trust. Deep teal authority, warm off-white body, gold accent. Editorial DM Serif Display headlines, clean DM Sans body. Feels like MyDoc or KPJ digital — not a government form.

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

| Role | Font | Notes |
|---|---|---|
| Headlines | DM Serif Display 400 | Use italic `<em>` for teal accent word in hero h1 |
| Body / UI | DM Sans 300/400/500/600 | All other text |

---

## Colour Tokens

```css
--teal-900: #003d35;
--teal-800: #005547;
--teal-700: #006B5E;
--teal-600: #008a78;
--teal-400: #4db8a8;
--teal-100: #e0f2ef;
--teal-50:  #f0faf8;
--warm-white: #faf9f7;
--warm-100:   #f2efe9;
--warm-200:   #e8e3db;
--ink:    #0d1f1c;
--ink-60: #4a6360;
--ink-40: #7a9693;
--ink-20: #b8cecc;
--gold:       #c9a84c;
--gold-light: rgba(201,168,76,0.12);
```

**BMI status colours:**
| Category | Pill background |
|---|---|
| Underweight | `rgba(37,99,235,0.15)` |
| Normal | `rgba(22,163,74,0.15)` |
| Overweight | `rgba(217,119,6,0.15)` |
| Obese | `rgba(220,38,38,0.15)` |

**Meal quality notice colours:**
| Tier | Background | Border |
|---|---|---|
| clean | `rgba(22,163,74,0.06)` | `rgba(22,163,74,0.2)` |
| balanced | `rgba(0,107,94,0.06)` | `rgba(0,107,94,0.2)` |
| indulgent | `rgba(201,168,76,0.08)` | `rgba(201,168,76,0.25)` |

---

## Shadows & Radius

```css
--radius: 16px;
--radius-sm: 10px;
--shadow-sm: 0 1px 3px rgba(0,61,53,0.08), 0 1px 2px rgba(0,61,53,0.04);
--shadow-md: 0 4px 16px rgba(0,61,53,0.10), 0 2px 6px rgba(0,61,53,0.06);
--shadow-lg: 0 12px 40px rgba(0,61,53,0.14), 0 4px 12px rgba(0,61,53,0.08);
```

---

## Page Layout

Max content width: `640px`, centred. Page bg: `--warm-white`.

### Hero Section
Full-width `--teal-900`, padding `3rem 1.5rem 5rem`. Three background layers:
1. Base `--teal-900`
2. `::before` — radial gradient mesh (teal glow top-right + gold hint bottom-left)
3. `::after` — 40px grid texture at 3% white opacity

Top bar (flex, space-between): KKM frosted glass logo box + brand name left / language toggle pill right.

KiBar eyebrow: gold dot + "PROGRAM KIBAR" uppercase gold text on `--gold-light` bg pill.

H1: DM Serif Display, `clamp(2rem, 5vw, 2.75rem)`, white, italic `<em>` word in `--teal-400`.

Subheading: 15px, DM Sans 300, 55% white, max-width 440px.

### Form Card
White, `--shadow-lg`, `--radius`, `margin-top: -2.5rem` (overlaps hero), `z-index: 10`. Four sections separated by `1px --warm-100` borders.

**Section A — Personal Info**
Two-column grid. Inputs: 52px tall, 20px font, unit label (kg/cm) absolutely positioned inside right edge. Focus: `--teal-700` border + 3px teal box-shadow. Hide number spinners.

**Section B — Activity Level**
Three-column card grid. Selected: 2px `--teal-700` border + `--teal-50` gradient overlay + `✓` top-right. Hover: `--teal-400` border + overlay.

**Section C — Meal Timing**
Three-column grid of `<select>` dropdowns: Sarapan / Makan Tengahari / Makan Malam. Each labelled with emoji + meal name. Custom chevron via SVG `background-image` on select. Snack times are NOT user-selected — they are auto-calculated as midpoints (see logic below). Dropdown option text switches language on lang toggle.

**Section D — CTA**
`--warm-white` bg section. 54px button, `--teal-700` → `--teal-800` gradient, 4px teal shadow. Hover: float up + deeper shadow.

---

## Results Section

Hidden until calculate() fires. `animation: fadeUp 0.4s ease` on reveal.

### Metrics Card
`--teal-900` + mesh + grid (same as hero). Three glassmorphism tiles. Value font: DM Serif Display 2rem white. Values animate with `countUp` on update.

Below tiles: status pill — dynamic BMI background colour, emoji icon, status name + desc.

### Quality Tier Notice
Coloured notice box (clean / balanced / indulgent) between metrics and meal card. Icon + bold title + description. Colour variant from meal plan tier.

### Meal Plan Card
White, `--shadow-md`. Header: eyebrow + DM Serif title + kcal badge top-right + subtitle.

Slot header row: emoji + slot name + **time badge** (auto-calculated, shown in `--warm-200` pill) + kcal badge right. Items: 4px `--teal-400` bullet dots + 13px `--ink-60` text.

Slot emojis: `['🌅', '🍎', '☀️', '🫐', '🌙']`

Footer: outlined download/print button.

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
| `normal` | 18.5 – 22.99 |
| `ow` | 23.0 – 27.49 |
| `ob` | ≥ 27.5 |

### Calorie Factor Table
| BMI | Sedentary | Moderate | Active |
|---|---|---|---|
| uw | 35 | 40 | 45 |
| normal | 30 | 35 | 40 |
| ow | 22.5 | 27.5 | 32.5 |
| ob | 22.5 | 27.5 | 32.5 |

---

## Meal Plan Selection (2-Dimension)

### Step 1 — kcal bucket
`low` < 1,400 / `mid` 1,400–1,799 / `high` 1,800–2,199 / `vhigh` ≥ 2,200

### Step 2 — quality tier
| BMI | Activity | Tier |
|---|---|---|
| `ob` | any | `clean` |
| `ow` | any | `clean` |
| `uw` | any | `balanced` |
| `normal` | sedentary or moderate | `balanced` |
| `normal` | active + bucket high or vhigh | `indulgent` |
| bucket = `low` | always | override to `clean` |

### Step 3 — plan key
```js
const key = `${bucket}-${tier}`
// fallback: `${bucket}-balanced` if key not found
```

### Available plan keys
`low-clean`, `mid-clean`, `mid-balanced`, `high-clean`, `high-balanced`, `high-indulgent`, `vhigh-clean`, `vhigh-balanced`, `vhigh-indulgent`

### Quality tier messaging
| Tier | Intent |
|---|---|
| `clean` | Low sat fat, low sodium, high fibre. For ob/ow. No high-santan dishes. |
| `balanced` | Healthy home-cook + local faves. Nasi lemak separuh OK with guardrails. |
| `indulgent` | Active normals can enjoy nasi lemak rendang, roti canai etc. with portion control. Includes notice about long-term balance. |

---

## Meal Timing Logic

```js
// Convert "HH:MM" to minutes from midnight
const toMins = t => { const [h,m] = t.split(':').map(Number); return h*60+m }

// Snack times = midpoint, rounded to nearest 30min
snack1 = Math.round((breakfastMins + lunchMins) / 2 / 30) * 30
snack2 = Math.round((lunchMins + dinnerMins) / 2 / 30) * 30
```

Format for display: `"7:00 pagi"` (BM) / `"7:00 am"` (EN). Shown as pill badge on each slot header.

---

## i18n

Two languages: `bm` (default) and `en`. Toggle in hero top-right. All strings, meal items, dropdown labels, quality notice copy, status text switch on toggle. If results visible, recalculate + re-render on switch. Full string data in the reference HTML.

---

## Animations

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## Responsive (max-width: 520px)
- Hero: smaller padding, h1 1.75rem, hide brand name text
- field-row, activity-grid, timing-grid, metrics-grid → 1 column
- meal-header-top → column direction

## Print
```css
@media print {
  .lang-toggle, .calc-btn, .print-btn, .cta-section { display: none !important; }
  .main { margin-top: 0; }
  boxes { box-shadow: none !important; }
}
```

---

## Astro File Structure

```
src/
  pages/
    index.astro
  components/
    Hero.astro
    CalculatorForm.astro      ← inputs + activity + meal timing + CTA
    Results.astro             ← metrics card + quality notice + meal card
  data/
    translations.ts           ← all i18n strings (bm + en)
    mealPlans.ts              ← plan data keyed by 'bucket-tier'
    calculator.ts             ← pure functions: getBmiCat, getCalorieFactor, getMealPlanKey, getSnackTimes, formatTime
  styles/
    global.css                ← CSS variables + resets
```

All calculator logic in pure `.ts` functions. No React, no Vue. Vanilla JS via `<script>` in Astro components.

---

## Assets Pending from Client

| Asset | Current | Action |
|---|---|---|
| KKM logo | "KKM" text placeholder | Replace with SVG/PNG |
| KiBar campaign logo | Gold pill text | Replace with campaign asset |
| Meal plan content | Placeholder meals | **Must be validated by KKM nutritionist before go-live** |

---

## Deployment

- Host: Cloudflare Pages
- Domain: TBD (e.g. `kibar.healthmetrics.com`)
- Portal integration: sticky CTA button → `target="_blank"` redirect (no iframe needed)
- No cookies, no analytics by default (add GA4 only if KKM requests)
- All client-side → **PDPA compliant, no data leaves the browser**
