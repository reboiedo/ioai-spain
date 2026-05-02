// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tunnel from "astro-tunnel";

import icon from "astro-icon";

import tenerifeTokens from "./src/integrations/tokens.mjs";

// https://astro.build/config
export default defineConfig({
  // Production origin. Lighthouse SEO requires `rel=canonical` to be
  // an absolute URL; with `site` set, `Astro.url.href` resolves to
  // the full origin + pathname during build, so the canonical /
  // og:url / twitter:url tags rendered by Head.astro all ship as
  // absolute URLs without any per-page wiring.
  site: 'https://ioai-spain.org',

  // Inline scoped component CSS into the HTML rather than emitting
  // shared external stylesheets. Astro's default ('auto') bundled
  // ~22 components' scoped styles into a single 71 KB single-line
  // CSS chunk (`SectionTestimonials.<hash>.css`) which Cloudflare
  // Pages was 500-ing on, even though the file existed and other
  // <30 KB CSS files served fine. Inlining sidesteps the issue
  // entirely AND removes one render-blocking external request,
  // which improves FCP. Tradeoff: HTML is slightly larger and not
  // cached separately, but HTML is `must-revalidate` regardless. */
  build: {
    inlineStylesheets: 'always',
  },

  // Hide Astro's floating dev toolbar (the icon at the bottom of the
  // viewport during `astro dev`). astro-tunnel is unaffected — this
  // only disables the in-page toolbar overlay.
  devToolbar: { enabled: false },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    // routing: {
    //   prefixDefaultLocale: true,
    // },
  },

  // Tenerife Camp v2 fonts — loaded via Astro's stable Fonts API. The
  // CSS variables here are referenced from `tokens/tenerife/tokens.json`
  // (core.font.*), which chain through to the generated typography
  // utility classes (.font-h1, .font-body, etc.). The display font
  // (PP Neue Corp Condensed Ultrabold) is self-hosted via @font-face
  // in `src/styles/tenerife-camp-v2.css` — not routed through this API.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter Tight",
      cssVariable: "--font-inter-tight",
      weights: [400, 500, 700, 800],
    },
    {
      // Handwritten script used for the polaroid captions in the
      // Activities scene. Tokens reference `--font-rock-salt` from
      // `core.font.rock-salt`; the cssVariable here matches.
      provider: fontProviders.google(),
      name: "Rock Salt",
      cssVariable: "--font-rock-salt",
      weights: [400],
    },
  ],

  // Sharp service config — sane per-format quality defaults so the
  // <Picture> output across the page emits AVIF and WebP variants
  // tuned to a reasonable size/quality trade. No `image.layout` /
  // `image.responsiveStyles` here on purpose: those knobs inject
  // global responsive styles that fight per-component CSS (and
  // were what caused the prod-blank regression last time we tried
  // to turn them on). Per-image `widths` + `sizes` on every
  // <Picture> call site already drive responsive selection.
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        avif: { quality: 50 },
        webp: { quality: 75 },
        jpeg: { quality: 82, mozjpeg: true, progressive: true },
        png: { compressionLevel: 9 },
      },
    },
  },

  // Force Vite to pre-bundle `@mux/mux-player` during `astro dev`
  // so the dynamic `import('@mux/mux-player')` inside SectionStory
  // resolves immediately instead of triggering an "Outdated Optimize
  // Dep" 504 the first time the user clicks the video poster (which
  // would leave the player un-upgraded and unable to play).
  vite: {
    optimizeDeps: {
      include: ['@mux/mux-player'],
    },
  },

  integrations: [tenerifeTokens(), tunnel(), icon()],
});
