import { readFileSync } from 'node:fs';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

// Discover theme modes dynamically from the tokens file.
// Priority: `theme.$extensions.com.designsystembuilder.modes` — falls back to
// any non-metadata child keys of `theme`. First mode in the list becomes the
// default applied to `:root`.
const tokens = JSON.parse(readFileSync('./tokens/tenerife/tokens.json', 'utf8'));
const themeTokens = tokens.theme ?? {};
const declaredModes =
  themeTokens?.$extensions?.['com.designsystembuilder']?.modes;
const modes =
  declaredModes ??
  Object.keys(themeTokens).filter((k) => !k.startsWith('$'));
const defaultMode = modes[0];

// Map DTCG composite typography sub-keys to CSS property names.
const typographyCssProps = {
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  letterSpacing: 'letter-spacing',
  lineHeight: 'line-height',
};

// Convert a DTCG reference string like `{core.color.orange.500}` into a
// `var(--...)` reference, using the same namespace stripping as `name/kebab-tenerife`.
const refToVar = (ref) => {
  if (
    typeof ref !== 'string' ||
    !ref.startsWith('{') ||
    !ref.endsWith('}')
  )
    return ref;
  const parts = ref.slice(1, -1).split('.');
  let p = parts;
  if (p[0] === 'core') p = p.slice(1);
  else if (p[0] === 'semantic') p = p.slice(1);
  else if (p[0] === 'theme' && p.length > 1) p = p.slice(2);
  return `var(--${p.join('-')})`;
};

/** @type {import('style-dictionary/types').Config} */
export default {
  source: ['tokens/tenerife/tokens.json'],
  hooks: {
    transforms: {
      // Strip namespace prefixes from the CSS var name:
      //   core.color.orange.500            -> --color-orange-500
      //   semantic.section-inline-padding  -> --section-inline-padding
      //   theme.orange.primary             -> --primary
      'name/kebab-tenerife': {
        type: 'name',
        transform: (token) => {
          let p = token.path;
          if (p[0] === 'core') p = p.slice(1);
          else if (p[0] === 'semantic') p = p.slice(1);
          else if (p[0] === 'theme' && p.length > 1) p = p.slice(2);
          return p.join('-');
        },
      },
    },
    formats: {
      // Composes a single tokens.css with four sections:
      //   :root                             — primitives + flat semantic tokens
      //   .font-<name>                      — typography utility classes (composite)
      //   :root, [data-theme="<default>"]   — default mode semantics
      //   [data-theme="<mode>"]             — one block per additional mode
      'css/tenerife-tokens': async ({ dictionary, file }) => {
        const header = await fileHeader({ file });

        const renderVarBlock = (selector, subset) => {
          if (!subset.length) return '';
          const vars = formattedVariables({
            format: 'css',
            dictionary: { ...dictionary, allTokens: subset },
            outputReferences: true,
            usesDtcg: true,
          });
          return `${selector} {\n${vars}\n}\n`;
        };

        const renderTypographyUtilities = (typographyTokens) => {
          if (!typographyTokens.length) return '';
          return (
            typographyTokens
              .map((t) => {
                // path is e.g. ['semantic', 'font', 'body'] -> `.font-body`
                const className = t.path.slice(1).join('-');
                const orig = t.original.$value;
                const lines = Object.entries(orig)
                  .filter(([k]) => typographyCssProps[k])
                  .map(
                    ([k, v]) =>
                      `  ${typographyCssProps[k]}: ${refToVar(v)};`,
                  );
                return `.${className} {\n${lines.join('\n')}\n}`;
              })
              .join('\n\n') + '\n'
          );
        };

        // Skip self-referencing primitive tokens. These are declared
        // in the source so the design-system graph can point to them
        // (e.g. `semantic.font.body -> {core.font.inter-tight}`), but
        // their `$value` is a literal `var(--<sameName>)` — a
        // declaration-level alias to a CSS var that's defined
        // elsewhere (Astro Fonts API for `--font-inter-tight`, our
        // `tenerife-camp-v2.css` for `--font-neue-corp`). Emitting
        // them here would produce `--font-inter-tight: var(--font-inter-tight);`
        // which the browser detects as a circular reference and
        // resolves to empty, breaking the whole font chain.
        const isSelfRefVar = (t) => {
          const v = t.original?.$value;
          return typeof v === 'string' && v === `var(--${t.name})`;
        };

        const core = dictionary.allTokens.filter(
          (t) => t.path[0] === 'core' && !isSelfRefVar(t),
        );
        const semanticFlat = dictionary.allTokens.filter(
          (t) => t.path[0] === 'semantic' && t.path[1] !== 'font',
        );
        const typography = dictionary.allTokens.filter(
          (t) => t.path[0] === 'semantic' && t.path[1] === 'font',
        );

        const blocks = [];
        blocks.push(renderVarBlock(':root', [...core, ...semanticFlat]));
        blocks.push(renderTypographyUtilities(typography));

        for (const mode of modes) {
          const modeTokens = dictionary.allTokens.filter(
            (t) => t.path[0] === 'theme' && t.path[1] === mode,
          );
          const selector =
            mode === defaultMode
              ? `:root, [data-theme="${mode}"]`
              : `[data-theme="${mode}"]`;
          blocks.push(renderVarBlock(selector, modeTokens));
        }

        return header + blocks.filter(Boolean).join('\n');
      },
    },
  },
  platforms: {
    css: {
      // Same as the default "css" transform group with:
      //  - `name/kebab` swapped for our namespace-stripping variant
      //  - `size/rem` dropped (chokes on `clamp(...)` dimension values)
      //  - `typography/css/shorthand` dropped (we emit utility classes instead)
      transforms: [
        'attribute/cti',
        'name/kebab-tenerife',
        'time/seconds',
        'html/icon',
        'color/css',
        'asset/url',
        'fontFamily/css',
        'cubicBezier/css',
        'strokeStyle/css/shorthand',
        'border/css/shorthand',
        'transition/css/shorthand',
        'shadow/css/shorthand',
      ],
      buildPath: 'src/styles/tenerife/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/tenerife-tokens',
        },
      ],
    },
  },
};
