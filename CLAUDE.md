# Project CLAUDE.md: techgeek-design

The design the three TechGeek sites share, so they read as one family:
TechGeek.dev (`../tech-geek-dev`, z4nta0's portfolio), TechGeek.cards
(`../tech-geek-cards`), and TechGeek.support (`../tech-geek-support`). Every
rule in the user-level CLAUDE.md applies here; this file records only what's
specific to this package. Created 2026-10-14 as step 14 of TechGeek.dev's
cleanup plan, built from that site's own code, which it then switched to.

## What it is
Decided by the user 2026-10-13. A package each site installs as a GitHub
dependency (`github:z4nta0/techgeek-design#<tag>`), holding:
- **Tokens** (`src/styles/tokens.css`), in layers:
  - the scales (core design numbers, rhythm, type, spacing, durations,
    easing, radii, borders, and shadows), shared and never overridden;
  - the color and font roles, shared defaults a site may override;
  - the layout values (the content cap, side padding, hero gap, and bar
    height), defaults each site overrides;
  - the breakpoints, which can't be custom properties, listed as
    commented-out tokens in a region of their own, each with its value and
    what it switches. Every site keeps the same ones, since the bar and
    footer switch at 768px.
- **Fonts and base styles**: the self-hosted fonts' `@font-face` rules
  (`src/styles/fonts.css`), and the base element styles and shared keyframes
  (`src/styles/base.css`).
- **The bar and footer** (`src/ui/`), taking props for what differs between
  sites: the wordmark ending, page links, tagline, menu extras, and
  sister-site links.
- **The brand artwork**: the hexagon mark and favicon, and the script that
  draws a site's favicon set from them.

Each site keeps its own theme (TechGeek.dev's geometric motif stays there),
its own pages, and its own layout widths and caps, on the same scales.

## How sites use it
- **Source, not a build**: the package ships its TypeScript, CSS modules, and
  fonts as they are, and each site's Vite compiles them, so there's no build
  step here. `package.json`'s `exports` maps `techgeek-design/<path>` to
  `src/<path>`, and every import names the real file
  (`techgeek-design/ui/nav.tsx`), since the rules allow no barrel files.
- **React and React Router are the site's own**: they're peer dependencies,
  so a site never loads a second copy.
- **Versions**: every change a site should pick up is released as a tag
  (`v0.1.0`), and each site's `package.json` names the tag it uses, so a
  change reaches a site only when that site moves to the new tag.
- **Local work**: while the package and a site change together, the site can
  install this folder directly (`npm install ../techgeek-design`) and switch
  back to the tag once the package is released.

## Checks
`npm run lint` and `npm run typecheck` check the package itself. What the bar,
the footer, and the styles look like and how they behave is checked by each
site's own Playwright suites, in all three engines, since only a site renders
them; a change here is checked through TechGeek.dev's suites before it's
released.
