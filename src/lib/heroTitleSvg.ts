/**
 * Server-side SVG generation for HeroTitle.
 *
 * Mirrors the runtime opentype.js pipeline that lived in
 * `HeroTitle.astro`'s `<script>`, but runs at build time so the
 * inlined SVG ships with the HTML — no font load, no flash, no
 * layout shift on first paint.
 *
 * Per-letter scaleY data attributes are computed deterministically
 * from the same sine + jitter formula the runtime used, so the
 * client script (now reduced to ScrollTrigger + mouse wiring) can
 * pick the values up unchanged.
 */

import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';
// @ts-expect-error — no types published.
import svgPathBounds from 'svg-path-bounds';

const FONT_PATH = path.resolve(
  process.cwd(),
  'public/fonts/PPNeueCorp-CondensedUltrabold.woff',
);

let fontCache: opentype.Font | null = null;

function loadFont(): opentype.Font {
  if (fontCache) return fontCache;
  const buf = fs.readFileSync(FONT_PATH);
  fontCache = opentype.parse(
    buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength),
  );
  return fontCache;
}

export interface BuildOptions {
  text: string;
  /** When true, skip per-letter scroll stretch (uniform glyph height). */
  noStretch?: boolean;
  /** Stretch amplitude multiplier — same semantics as the runtime prop. */
  stretchScale?: number;
}

/**
 * Build the inline SVG markup string for a single HeroTitle line.
 * Mirrors `buildTitleSvg()` from the previous client script + the
 * post-render `getBBox()` viewBox tighten step, but runs entirely
 * in node.
 */
export function buildHeroTitleSvg({
  text,
  noStretch = false,
  stretchScale = 1,
}: BuildOptions): string {
  const font = loadFont();
  const fontSize = 100;
  const unitsPerEm = font.unitsPerEm;
  const ascender = (font.ascender / unitsPerEm) * fontSize;

  let cursor = 0;
  const charPaths: Array<{ d: string; char: string; topY: number }> = [];
  // Tight visual bbox accumulated across all glyphs via svg-path-bounds.
  let tightMinX = Infinity;
  let tightMinY = Infinity;
  let tightMaxX = -Infinity;
  let tightMaxY = -Infinity;

  for (const char of text) {
    const glyph = font.charToGlyph(char);
    const p = glyph.getPath(cursor, ascender, fontSize);
    const d = p.toPathData(3);
    let topY = 0;
    if (d) {
      const [x1, y1, x2, y2] = svgPathBounds(d) as [number, number, number, number];
      if (x1 < tightMinX) tightMinX = x1;
      if (y1 < tightMinY) tightMinY = y1;
      if (x2 > tightMaxX) tightMaxX = x2;
      if (y2 > tightMaxY) tightMaxY = y2;
      topY = y1;
    }
    const advance = (glyph.advanceWidth / unitsPerEm) * fontSize;
    charPaths.push({ d, char, topY });
    cursor += advance;
  }

  const finite =
    Number.isFinite(tightMinX) &&
    Number.isFinite(tightMinY) &&
    Number.isFinite(tightMaxX) &&
    Number.isFinite(tightMaxY);
  const vbX = finite ? tightMinX : 0;
  const vbY = finite ? tightMinY : 0;
  const vbW = finite ? tightMaxX - tightMinX : cursor;
  const vbH = finite ? tightMaxY - tightMinY : ascender;

  // Per-letter end scaleY — every letter ends strictly >= 1 so the
  // reveal is grow-only. Both the sine wave and the jitter are
  // remapped into the positive half ([0,1]) before scaling, so no
  // contribution can pull a letter below its natural height.
  const count = charPaths.length;
  const endScales = charPaths.map((_, i) => {
    const t = count > 1 ? i / (count - 1) : 0.5;
    const wave = (Math.sin(t * Math.PI * 2.2) * 0.5 + 0.5) * 0.3 * stretchScale;
    const jitterRaw = (Math.sin(i * 12.9898) * 43758.5453) % 1; // [-1, 1)
    const jitter = (jitterRaw * 0.5 + 0.5) * 0.1 * stretchScale; // [0, 0.1*ss]
    return 1 + wave + jitter;
  });

  // Reserve enough viewBox height to fit the worst-case stretched
  // glyph entirely inside the SVG box. Without this, scaled paths
  // paint outside the box (overflow: visible) and some browsers
  // include the overflow in subsequent layout passes — which is
  // exactly the few-pixel layout shift we want to avoid.
  const maxEnd = noStretch ? 1 : endScales.length ? Math.max(...endScales, 1) : 1;
  const stretchPad = (maxEnd - 1) * vbH;
  const totalVbH = vbH + stretchPad;

  const pathEls = charPaths
    .map((cp, i) => {
      const zPick = (Math.sin(i * 17.913) * 43758.5453) % 1;
      const zIndex = zPick > 0 ? 3 : 1;
      const endAttr = noStretch ? '' : ` data-end-scale-y="${endScales[i].toFixed(3)}"`;
      // Pre-translate each glyph upward by (pathTopY − vbY) so its
      // visible top coincides exactly with the line's cap-line
      // (vbY). The CSS rule then applies the translate FIRST and
      // scaleY SECOND, anchored at the shared origin (vbY), so:
      //   - every letter's top stays welded to the cap-line
      //   - per-letter scaleY only varies the BOTTOMS (sine wave)
      // Without this pre-shift, letters whose ink top sits below
      // vbY (flat-top caps when an A-apex defines vbY) would
      // visibly drift down as scaleY grows.
      const yShift = -(cp.topY - vbY);
      const shiftStyle = `--y-shift: ${yShift.toFixed(3)}px;`;
      return `<path d="${cp.d}" data-char="${escapeAttr(cp.char)}"${endAttr} style="z-index:${zIndex};${shiftStyle}"/>`;
    })
    .join('');

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${totalVbH}" role="img" aria-label="${escapeAttr(text)}">` +
    pathEls +
    `</svg>`
  );
}

/**
 * Tight visual width of a HeroTitle line in the same coordinate
 * space as `buildHeroTitleSvg`'s viewBox. Use to compute relative
 * widths between stacked lines so glyph height matches.
 */
export function measureHeroTitleWidth(text: string): number {
  if (!text) return 0;
  const font = loadFont();
  const fontSize = 100;
  const unitsPerEm = font.unitsPerEm;
  const ascender = (font.ascender / unitsPerEm) * fontSize;

  let cursor = 0;
  let minX = Infinity;
  let maxX = -Infinity;
  for (const char of text) {
    const glyph = font.charToGlyph(char);
    const p = glyph.getPath(cursor, ascender, fontSize);
    const d = p.toPathData(3);
    if (d) {
      const [x1, , x2] = svgPathBounds(d) as [number, number, number, number];
      if (x1 < minX) minX = x1;
      if (x2 > maxX) maxX = x2;
    }
    cursor += (glyph.advanceWidth / unitsPerEm) * fontSize;
  }
  return Number.isFinite(minX) && Number.isFinite(maxX) ? maxX - minX : cursor;
}

function escapeAttr(v: string): string {
  return v
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
