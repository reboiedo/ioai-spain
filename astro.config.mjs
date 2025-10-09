// @ts-check
import { defineConfig } from "astro/config";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    // routing: {
    //   prefixDefaultLocale: true,
    // },
  },

  integrations: [tunnel()],
});