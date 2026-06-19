---
name: Say No
description: Generate a polite (or absurd) reason to decline.
colors:
  canvas: "#fdfcfc"
  ink: "#201d1d"
  ink-deep: "#0f0000"
  body: "#424245"
  mute: "#646262"
  hairline: "#0f00001e"
  hairline-strong: "#646262"
  surface-soft: "#f8f7f7"
  surface-card: "#f1eeee"
  surface-dark: "#201d1d"
  surface-dark-elevated: "#302c2c"
  on-dark: "#fdfcfc"
  ash: "#9a9898"
  danger: "#ff3b30"
typography:
  display:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "38px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  title:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  body:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "JetBrains Mono, IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "32px"
  4xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 20px"
  button-primary-active:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 20px"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 20px"
  filter-chip:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 16px"
  filter-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 16px"
  output-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "32px"
  locale-select:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 12px"
---

# Design System: Say No

## 1. Overview

**Creative North Star: "The Friendly Terminal"**

Say No reads like a helpful little console that happens to dispense rejections. The entire interface is set in a single monospaced face, sits on a warm cream canvas, and relies on ASCII bracket glyphs instead of icons. The aesthetic is deadpan but warm: the joke lives in the generated words, not in decoration.

The system rejects corporate sincerity and generic SaaS polish. There are no hero metrics, no gradients, no celebratory motion, no cream-by-default warmth carried by the body background for its own sake. The warmth is in the cream paper and the friendly copy; the structure is utilitarian.

**Key Characteristics:**
- 100% JetBrains Mono across every text role — no proportional display or body font anywhere.
- Warm cream canvas (`#fdfcfc`) in light mode; near-black (`#201d1d`) in dark mode.
- Flat, shadowless surfaces at rest; depth is conveyed by the dark output card and tonal neutral layers.
- ASCII bracket markers (`[+]`, `[-]`, `[x]`, `[ ]`, `[v]`) function as the only iconography and state labels.
- 4px radius on every interactive element; 0px radius on containers and the output card.
- A single saturated accent, reserved for errors: `#ff3b30`.

## 2. Colors

The palette is intentionally monochrome with one semantic exception. Near-black ink and warm cream paper do almost all the work; a ladder of warm grays handles metadata, disabled text, and subtle backgrounds. The dark output card is the only full value inversion.

### Primary
- **Warm Ink** (`{colors.ink}` — `#201d1d`): primary text, primary button fill, selected filter chips, headings, and the header wordmark. Chosen over pure black to keep type readable on the warm cream canvas.
- **Deep Ink** (`{colors.ink-deep}` — `#0f0000`): active/pressed state for primary buttons and any deeply-pressed ink surface.

### Neutral
- **Cream Canvas** (`{colors.canvas}` — `#fdfcfc`): page background, secondary button fill, on-dark text, and the light-mode baseline surface.
- **Soft Surface** (`{colors.surface-soft}` — `#f8f7f7`): subtle hover backgrounds and alternating tints.
- **Card Surface** (`{colors.surface-card}` — `#f1eeee`): unselected filter chips, the locale select field, and slightly-elevated neutral rows.
- **Body Gray** (`{colors.body}` — `#424245`): default paragraph and secondary text.
- **Muted Gray** (`{colors.mute}` — `#646262`): footer links, metadata, and low-emphasis labels.
- **Ash** (`{colors.ash}` — `#9a9898`): disabled text and the quiet secondary color inside the dark output card.
- **Hairline** (`{colors.hairline}` — `rgba(15, 0, 0, 0.12)`): section dividers and chip borders. The translucent warm tint matches the canvas undertone.
- **Strong Hairline** (`{colors.hairline-strong}` — `#646262`): stronger inline dividers and secondary button borders.

### Dark Surfaces
- **Dark Surface** (`{colors.surface-dark}` — `#201d1d`): the output card background in light mode and the page background in dark mode.
- **Dark Surface Elevated** (`{colors.surface-dark-elevated}` — `#302c2c`): the category badge and command-line pill inside the output card.
- **On Dark** (`{colors.on-dark}` — `#fdfcfc`): text and primary button fills on dark surfaces.

### Semantic
- **Danger** (`{colors.danger}` — `#ff3b30`): error text only. The only saturated hue in the system.

**The One Accent Rule.** Only the danger color is saturated. Everything else stays inside the warm ink/canvas/ash family. If a new accent is needed, it must earn its place and cannot become decorative noise.

## 3. Typography

**Display Font:** JetBrains Mono (with IBM Plex Mono → SF Mono → Menlo → Monaco → Consolas → Liberation Mono → Courier New fallback)
**Body Font:** JetBrains Mono (same stack)
**Label/Mono Font:** JetBrains Mono (same stack)

**Character:** The single-font decision is the identity. The page reads like a manpage or a friendly README: even, measured, and a little deadpan. Weight and size contrast carry the hierarchy; there is no italic or display face.

### Hierarchy
- **Display** (700, 38px / 1.5, -0.025em letter-spacing): hero headline on the home page (`Generate a polite (or absurd) reason to decline.`) and the 404 page number.
- **Title** (700, 16px / 1.5, -0.025em letter-spacing): section labels like `[~] Category` and `[=] output`. The same weight as body-strong, distinguished by context and the bracket prefix.
- **Body** (400, 16px / 1.5, normal letter-spacing): generated excuse body copy, descriptions, footer links. Capped at roughly 65–75ch for comfortable reading.
- **Label** (500, 16px / 1.5, normal letter-spacing): button labels, filter chip text, selected tab labels, and inline emphasis.
- **Caption** (400, 14px / 1.5, normal letter-spacing): footer metadata, small badges, and the locale select.

**The Mono-Everywhere Rule.** Every text role — display, body, label, caption, link, button — is rendered in JetBrains Mono. No sans-serif fallback is used, even for the legal/footer line.

## 4. Elevation

Surfaces are flat at rest. Depth is communicated through tonal inversion (the dark output card against the cream canvas) and a strict neutral layering system, not through drop shadows. On state changes, a very subtle shadow may appear to confirm interaction, but it never becomes decoration.

### Shadow Vocabulary
- **State Shadow** (`box-shadow: 0 1px 2px rgba(15, 0, 0, 0.08)`): optional hover/focus shadow on raised controls. Used sparingly and only as feedback.

**The Flat-By-Default Rule.** If an element is not currently being hovered, focused, or actively pressed, it casts no shadow. The system's only default "elevation" is the dark output card, and that is a tonal inversion, not a lift.

## 5. Components

### Buttons
- **Shape:** 4px radius (`{rounded.sm}`), medium weight label (`{typography.label}`), height approximately 36px.
- **Primary:** filled `{colors.ink}` background, `{colors.canvas}` text, 4px 20px padding, no border.
- **Secondary:** `{colors.canvas}` background, `{colors.ink}` text, 1px solid `{colors.hairline-strong}` border, 4px 20px padding.
- **Active / Pressed:** primary drops to `{colors.ink-deep}`; secondary remains canvas with ink text and hairline-strong border.
- **Disabled:** uses `{colors.ash}` text on `{colors.surface-card}` background.

### Filter Chips
- **Shape:** 4px radius, medium weight label, 4px 16px padding.
- **Unselected:** `{colors.surface-card}` background, `{colors.ink}` text, 1px solid `{colors.hairline}` border.
- **Selected:** `{colors.ink}` background, `{colors.canvas}` text, 1px solid `{colors.ink}` border.
- **State marker:** each chip is prefixed with `[ ]` when unselected and `[x]` when selected.

### Output Card
- **Container:** 0px radius, `{colors.surface-dark}` background, 32px padding, full width within the content column.
- **Command pill:** sits at the top in `{colors.surface-dark-elevated}` with `{colors.ash}` text, showing the generation parameters.
- **Quote:** rendered at 24px / medium weight in `{colors.on-dark}`.
- **Category badge:** `{colors.surface-dark-elevated}` pill with `{colors.on-dark}` text.
- **Loading state:** `[*] Generating excuse...` in `{colors.ash}`.
- **Error state:** `[x] Failed to load excuse.` in `{colors.danger}`, with a retry button filled `{colors.on-dark}` on `{colors.surface-dark}`.

### Locale Select
- **Shape:** 4px radius, 4px 12px padding, uppercase tracking, 14px caption size.
- **Surface:** `{colors.surface-card}` background, `{colors.ink}` text, 1px solid `{colors.hairline}` border.

### Header / Primary Nav
- **Layout:** flex row, space-between, centered items, 16px gap.
- **Wordmark:** `[say-no]` in `{colors.ink}`, 16px bold, tight tracking.
- **Divider:** 1px solid `{colors.hairline}` below the header.
- **Controls:** theme toggle and locale switcher sit at the right edge.

## 6. Do's and Don'ts

### Do:
- Render every text role in JetBrains Mono.
- Use 4px radius on buttons, selects, and filter chips.
- Keep the output card as the single dark inversion on the page.
- Use ASCII brackets for icons, bullets, and selection state (`[+]`, `[-]`, `[x]`, `[ ]`, `[v]`).
- Pair the warm cream canvas with near-black ink; let that contrast do the work.
- Honor `prefers-reduced-motion` by keeping motion functional and providing instant fallbacks.
- Reserve `{colors.danger}` for error text only.

### Don't:
- Introduce a second font, display face, or italic style.
- Use side-stripe borders greater than 1px as colored accents.
- Use gradient text or glassmorphism.
- Add celebratory confetti, bounce, or elastic motion.
- Default to generic SaaS cream/blue landing-page aesthetics.
- Adopt a corporate / earnest self-help tone in visuals or copy.
- Use shadows as decoration; shadows are state feedback only.
- Put saturated accent colors on CTAs or marketing chrome.
