// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tunnel from "astro-tunnel";

import icon from "astro-icon";

import tenerifeTokens from "./src/integrations/tokens.mjs";

// https://astro.build/config
export default defineConfig({
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

  // Image pipeline.
  //
  // - `layout: 'constrained'` makes <Image> / <Picture> responsive by
  //   default: photos scale to their container, Astro auto-generates a
  //   `srcset` from `image.breakpoints`. Per-component `widths` / `sizes`
  //   still take precedence on every existing call site.
  // - `responsiveStyles: true` injects the tiny global stylesheet
  //   that makes the constrained layout behave correctly without
  //   per-component CSS.
  // - Sharp service config sets sane per-format quality defaults.
  //   AVIF at 50 ≈ JPG 80 visually at a fraction of the bytes;
  //   WebP at 75 ≈ JPG 85; the JPG fallback uses mozjpeg + progressive
  //   so the source-format leg stays crisp on older browsers.
  //   Per-image `quality` props on <Picture> still override these.
  image: {
    layout: 'constrained',
    responsiveStyles: true,
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

  integrations: [tenerifeTokens(), tunnel(), icon()],
});
