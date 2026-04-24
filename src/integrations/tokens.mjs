/**
 * Tenerife tokens — Astro integration.
 *
 * - Runs Style Dictionary once on `astro:config:setup` (both dev + build) so
 *   fresh clones and CI always produce a fresh `tokens.css` before Astro reads
 *   any styles.
 * - During `astro dev`, watches `tokens/**` for JSON changes and rebuilds,
 *   then fires a full-reload over the Vite HMR socket so the browser picks
 *   up the regenerated CSS.
 *
 * Pair with `"prebuild": "npm run tokens:build"` in package.json as a safety
 * net for production — redundant with the integration, but cheap insurance.
 */

import path from 'node:path';
import { pathToFileURL } from 'node:url';
import StyleDictionary from 'style-dictionary';

const CONFIG_PATH = path.resolve('style-dictionary.config.js');
const TOKENS_DIR = path.resolve('tokens');

async function runBuild() {
  // Cache-bust the config import so the `readFileSync` at the top of
  // `style-dictionary.config.js` re-reads tokens.json on every rebuild.
  const url = `${pathToFileURL(CONFIG_PATH).href}?t=${Date.now()}`;
  const mod = await import(url);
  const sd = new StyleDictionary(mod.default, { verbosity: 'silent' });
  await sd.buildAllPlatforms();
}

/** @returns {import('astro').AstroIntegration} */
export default function tenerifeTokens() {
  return {
    name: 'tenerife-tokens',
    hooks: {
      'astro:config:setup': async ({ command, updateConfig, logger }) => {
        try {
          await runBuild();
          logger.info('tokens built');
        } catch (err) {
          logger.error(`token build failed: ${err instanceof Error ? err.message : err}`);
        }

        if (command !== 'dev') return;

        updateConfig({
          vite: {
            plugins: [
              {
                name: 'tenerife-tokens-watch',
                configureServer(server) {
                  server.watcher.add(TOKENS_DIR);
                  server.watcher.on('change', async (file) => {
                    if (!file.startsWith(TOKENS_DIR)) return;
                    if (!file.endsWith('.json')) return;

                    const rel = path.relative(process.cwd(), file);
                    logger.info(`tokens changed (${rel}), rebuilding…`);
                    try {
                      await runBuild();
                      logger.info('tokens rebuilt');
                      server.ws.send({ type: 'full-reload' });
                    } catch (err) {
                      logger.error(
                        `token rebuild failed: ${err instanceof Error ? err.message : err}`,
                      );
                    }
                  });
                },
              },
            ],
          },
        });
      },
    },
  };
}
