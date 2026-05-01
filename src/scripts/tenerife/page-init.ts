/**
 * Tenerife camp v2 — page-level GSAP / Lenis bootstrap.
 *
 * Identical for both `/tenerife-camp/` (en) and `/es/tenerife-camp/`
 * (es). Extracted into a shared module so the page entries stay
 * thin wrappers around `<TenerifeCampV2Layout>` and the two locales
 * cannot drift apart over time.
 *
 * The exported `initTenerifeCampPage()` registers itself against
 * Astro's page-load events; page entries call it once at module
 * scope and the script bundler dedupes the work across pages.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let tiltTweens: gsap.core.Tween[] = [];
let displayAssetTweens: gsap.core.Tween[] = [];
let stickBottomObservers: ResizeObserver[] = [];
let lenis: Lenis | null = null;

function initLenis() {
  if (lenis) return;
  lenis = new Lenis({
    // Higher lerp = snappier, less momentum tail. Default is 0.1;
    // we ran 0.075 (softer) initially but the smoothing read as
    // sluggish at scroll-direction changes — bumped to 0.14 so the
    // page tracks the wheel/trackpad more directly while keeping
    // just enough easing to mask sub-pixel scroll jitter.
    lerp: 0.14,
  });

  // Expose to other component scripts so modal overlays can stop
  // smooth-scroll while open. Lenis intercepts wheel/touch events
  // even when CSS `overflow: hidden` is set on html/body, so a
  // simple CSS scroll lock alone wouldn't work — we have to call
  // `lenis.stop()` to truly freeze background scroll. Components
  // can listen for `tenerife:lock-scroll` / `tenerife:unlock-scroll`
  // events instead of reaching for the global directly.
  (window as any).__tenerifeLenis = lenis;

  window.addEventListener('tenerife:lock-scroll', () => {
    lenis?.stop();
  });
  window.addEventListener('tenerife:unlock-scroll', () => {
    lenis?.start();
  });

  // Drive ScrollTrigger updates from Lenis's scroll event so pins
  // and scroll progress stay in sync with smooth-scrolled position.
  lenis.on('scroll', ScrollTrigger.update);

  // Run Lenis's RAF from GSAP's ticker so both share one animation
  // loop. Multiplied by 1000 because GSAP ticker is in seconds,
  // Lenis expects ms.
  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  // Disable GSAP's lag smoothing — it rounds timing in ways that
  // fight Lenis's interpolation and produce visible stutter.
  gsap.ticker.lagSmoothing(0);
}

/**
 * initStickBottom
 *
 * Every sticky scene uses the bottom-anchored formula
 * `top: calc(100vh - var(--h))` (see `tenerife/utilities.css`) so
 * tall content-driven sections scroll naturally through the viewport
 * before docking flush at the bottom. This observer measures each
 * sticky scene's outer height and writes it to its own `--h`.
 *
 * Sections that match `[data-flow]` (or contain a `<details>` /
 * `[data-flow]`) opt out of sticky entirely and don't need a
 * measurement — they're skipped via the selector.
 *
 * Updates on resize, font swap, drawer toggle, image decode — any
 * layout change that affects the measured height. No global
 * ScrollTrigger.refresh() needed (which would visibly re-flash the
 * scroll-scrubbed tilts).
 */
function initStickBottom() {
  stickBottomObservers.forEach((o) => o.disconnect());
  stickBottomObservers = [];

  // All [data-scene] sections are sticky-stack now. Native sticky
  // keeps drawer-bearing sections in flow, so the old `data-flow`
  // opt-out is no longer needed.
  for (const el of document.querySelectorAll<HTMLElement>('[data-scene]')) {
    const ro = new ResizeObserver(([entry]) => {
      const h = entry.borderBoxSize?.[0]?.blockSize ?? el.offsetHeight;
      el.style.setProperty('--h', `${h}px`);
    });
    ro.observe(el);
    stickBottomObservers.push(ro);
  }
}

function initTilts() {
  tiltTweens.forEach((t) => t.scrollTrigger?.kill());
  tiltTweens.forEach((t) => t.kill());
  tiltTweens = [];

  const tiltLayers = gsap.utils.toArray<HTMLElement>('.scene__layer--tilt');

  tiltLayers.forEach((layer) => {
    // Scroll-scrubbed "entry tilt" matching follow.art: each section
    // arrives at (15°, responsive xPercent) below the fold, and
    // scrubs to (0°, 0%) as it scrolls up into place. Once flat, it
    // stays flat — follow.art does NOT re-tilt sections as the next
    // one covers them (verified by live-scrubbing their DOM).
    //
    // Trigger window: `top bottom` (section's top at viewport
    // bottom — first frame it appears) to `top top` (section's top
    // at viewport top — native sticky engages). That's the full
    // entry. The window ends exactly when sticky takes over, so the
    // tilt finishes against the unpinned (in-flow) position and
    // doesn't overlap the stuck phase.
    //
    // `xPercent` is a % of the element's own width. follow.art uses
    // +8.61% on desktop and −12.82% on mobile — different magnitudes
    // AND opposite signs. The sign flip is deliberate: with origin
    // `0 0` a 15° rotation swings the bottom-left corner leftward by
    // ~26% of element height; desktop can afford to pull the section
    // rightward (+8.61%) to keep the top-right inside viewport,
    // while mobile's narrower viewport can't — it lets the bottom
    // corner overflow further left (−12.82%) instead so the
    // top-right doesn't shoot past the right edge.
    //
    // transform-origin is set in CSS (`.scene__layer--tilt`) to
    // `0 0` — top-left corner pivot.
    //
    // `fromTo` + `immediateRender: true` pre-stages every layer at
    // its 15° starting pose, so sections below the fold sit tilted
    // waiting to be scrolled into.
    const tween = gsap.fromTo(
      layer,
      {
        rotation: 15,
        xPercent: () => (window.innerWidth >= 768 ? 8.61 : -12.82),
      },
      {
        rotation: 0,
        xPercent: 0,
        // `power2.out` (quadratic ease-out). Reverse-engineered
        // from follow.art's live DOM. Feel: section straightens
        // quickly off the bottom, then decelerates as it lands at
        // the top. With bidirectional `scrub: true`, scroll-up
        // mirrors this — section enters the top flat, gradually
        // tilts to 15° as it descends to the bottom.
        ease: 'power2.out',
        immediateRender: true,
        scrollTrigger: {
          trigger: layer,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
    tiltTweens.push(tween);
  });

  // One final refresh so newly-created tilt triggers recalculate
  // their start/end against current document layout (late image
  // decodes / font swaps can shift natural section positions).
  ScrollTrigger.refresh();
}

/**
 * initDisplayAssets
 *
 * For each `[data-display-asset]` element inside a `.display-block`,
 * create a scroll-scrubbed animation that brings the asset in over
 * the title as the user scrolls through the block.
 *
 * The asset is positioned by CSS (absolute + centred via its
 * `.display-block__asset-slot` parent). GSAP owns the transform of
 * the inner element — starts translated down + scaled down +
 * transparent, ends at natural position + full scale + opaque. Exact
 * motion is placeholder-level; later this can be replaced with a
 * Three.js canvas + shader for proper distortion.
 *
 * Trigger window: display-block top enters vp bottom → display-block
 * reaches the middle of the viewport. That gives the animation ~1.5
 * viewports of scroll to play out, feeling unhurried.
 */
function initDisplayAssets() {
  displayAssetTweens.forEach((t) => t.scrollTrigger?.kill());
  displayAssetTweens.forEach((t) => t.kill());
  displayAssetTweens = [];

  const assets = gsap.utils.toArray<HTMLElement>('[data-display-asset]');

  assets.forEach((asset) => {
    const block = asset.closest('.display-block');
    if (!block) return;

    // Parallax-style reveal: the asset passes continuously through
    // the viewport from bottom to top as the user scrolls through
    // the display-block. No scale, no opacity fade — just movement.
    //
    // The trigger window spans 'top bottom' → 'bottom top' (~200svh
    // of scroll), and we translate across a range slightly larger
    // than the natural centring (~±60vh). Net effect: the asset
    // moves FASTER than the page, so it feels foreground-parallax
    // rather than landing-in-place.
    //
    // `y` values are computed as functions so they re-evaluate on
    // resize refresh (vh changes → new travel distance).
    // Asymmetric parallax: asset enters gently from below, exits
    // aggressively toward the top. The end value is much larger
    // than the start so the upward motion is visibly faster than
    // the downward entry. Tune the `1.6` multiplier if you want
    // even more exit speed.
    const tween = gsap.fromTo(
      asset,
      { y: () => window.innerHeight * 0.6 },
      {
        y: () => -window.innerHeight * 1.6,
        ease: 'none',
        immediateRender: true,
        scrollTrigger: {
          trigger: block,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
    displayAssetTweens.push(tween);
  });
}

function cleanup() {
  tiltTweens.forEach((t) => t.scrollTrigger?.kill());
  tiltTweens.forEach((t) => t.kill());
  tiltTweens = [];
  displayAssetTweens.forEach((t) => t.scrollTrigger?.kill());
  displayAssetTweens.forEach((t) => t.kill());
  displayAssetTweens = [];
  stickBottomObservers.forEach((o) => o.disconnect());
  stickBottomObservers = [];
  lenis?.destroy();
  lenis = null;
}

function init() {
  initLenis();
  initStickBottom();
  initTilts();
  initDisplayAssets();
}

export function initTenerifeCampPage() {
  // Scroll restoration is already disabled by an inline head script
  // in each page entry. Force scroll to top as a belt-and-braces
  // fallback in case any restoration slipped through.
  window.scrollTo(0, 0);

  // iOS Safari address-bar show/hide triggers viewport resizes that
  // cause ScrollTrigger to refresh and visibly jump pins. Suppress
  // those minor resizes.
  ScrollTrigger.config({ ignoreMobileResize: true });

  init();
  document.addEventListener('astro:page-load', init);
  document.addEventListener('astro:before-swap', cleanup);
}
