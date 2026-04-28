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

  integrations: [tenerifeTokens(), tunnel(), icon()],
});
