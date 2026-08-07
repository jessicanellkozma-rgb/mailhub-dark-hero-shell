# Mailhub Dark Hero Shell

Build a single reusable React component called HeroShell for Mailhub, a B2B ecommerce shipping software platform. This is the most-used component in the system, it appears on every single page template (Homepage, Platform, API, Integration, AI, and variants within each), so it needs to flex significantly while staying instantly recognizable as Mailhub.

BRAND FEEL:

Mailhub is infrastructure. Structured, dependable, quietly confident. The hero is the one place the brand is allowed to feel a little more visual and confident than the flatter components (Definition Block, Table), this is the "we know what we're doing" moment.

COLORS (exact hex, per Sean's wireframe doc the homepage hero uses a dark background):

- Background: dark, use Carbon Black #282520 (consistent with the CTA band decision, don't introduce a new unlisted dark like #020111)

- Heading (H1): White or White Smoke #F4F4F2

- Sub-line: White Smoke at reduced emphasis, not full white

- Primary CTA button: Cornflower Blue #768FEC fill

- Secondary CTA button: outline/ghost style, White Smoke border and text, no fill

TYPOGRAPHY (exact classes from brand guide):

- H1: Libre Franklin Bold, display-1 or heading h1 class (44px or 36px depending on page density, test both)

- Sub-line: Mulish Regular, text-base or text-sm

- Buttons: Libre Franklin Bold, button-lg class

STRUCTURE (per Sean's spec):

Desktop: two columns side by side. Left: H1, sub-line, one or two CTA buttons, left-aligned within its column (this component is the one exception to center-alignment, Sean's doc specifies left-aligned text with a right-side visual, don't center this one). Right: either a product screenshot, a code snippet block, or (for AI/MCP pages) a small mcp.json config snippet.

Mobile: stacks vertically, text first, then the visual, and text becomes centered on mobile since there's no side-by-side space.

PROPS / REUSABILITY, must support three visual variants on the right side:

1. `screenshot` — an image (Homepage: product dashboard screenshot)

2. `codeSnippet` — a styled code block (API pages: curl example)

3. `mcpConfig` — a styled config snippet (AI/MCP page only)

4. `none` — hero with no right-side visual at all, just centered text (some Integration pages may not need a visual)

Accept `h1`, `subline`, `primaryCta` {label, action}, `secondaryCta` {label, action} (optional), and `visualType` + `visualContent` as props.

REAL COPY TO TEST WITH (Homepage variant):

H1: "Shipping Software for Ecommerce"

Sub-line: "AI-powered rate comparison, label printing and tracking, without the subscription. Or integrate via our Shipping API, MCP-ready for AI agents."

Primary CTA: "Start Shipping Free"

Secondary CTA: "How It Works"

Visual: screenshot placeholder (product dashboard with an order table showing carrier rates, use a simple placeholder graphic for now, real screenshot comes later)

ON THE ILLUSTRATION STYLE:

Mailhub has an existing isometric illustration style (shipping containers in Egyptian Blue/Cornflower Blue duotone, clean geometric forms, generous negative space) used in marketing graphics. This hero component should be BUILT to accommodate that style as a future visual option (e.g. an `illustration` variant alongside screenshot/codeSnippet/mcpConfig), but for this build pass, focus on getting the screenshot and code-snippet variants solid first, don't attempt to build the illustration itself in this pass.

IMAGE PERFORMANCE (Hebronsoft's request):

Whatever visual asset renders here, keep the component built to accept compressed/optimized image formats (WebP where possible), Hebronsoft's dev flagged this as a hard requirement for meeting performance KPIs.

WHAT TO AVOID:

No gradients, shadows, or glow effects, brand guideline is explicit. Left-align this component's text (the one deliberate exception to center-alignment across the system), don't default it to centered like the other components. Don't stack more than two CTA buttons.

Build this as an isolated, testable component first, showing the Homepage variant with the screenshot slot. I'll test the code-snippet and mcpConfig variants separately once the base layout is confirmed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bdece03e-67af-418e-90e4-31beac936207).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
