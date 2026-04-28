/**
 * Shared wave source — single source of truth for the hero
 * wave-carousel + the HeroTitle letter displacement.
 *
 * One rAF loop runs centrally; subscribers are notified each frame
 * with the current wave state. Both the Three.js material (via
 * uniforms) and the per-letter CSS variable updates pull from the
 * same store, so the strip and the letters stay locked in step.
 *
 *   import { wave } from '@/components/tenerife/wave';
 *
 *   const off = wave.subscribe((state) => {
 *     // state.time, state.amp, state.freq, state.phase, etc.
 *     // call wave.sample(worldX) → y for any x.
 *   });
 *
 *   // Cleanup:
 *   off();
 *
 * `worldX` is in pixels relative to the viewport (clientX-style).
 * The wave function is `y = amp * sin(worldX * freq + phase + time * speed)`
 * and returns a value in roughly the [-amp, amp] range.
 */

export interface WaveState {
  /** Monotonic seconds since module load (or last reset). */
  time: number;
  /** Peak vertical displacement, in normalized units (~px-equivalent). */
  amp: number;
  /** Spatial frequency — radians per pixel along the x axis. */
  freq: number;
  /** Constant phase offset (mouse-x driven). */
  phase: number;
  /** Time scaling — how fast the wave travels. */
  speed: number;
  /** Smoothed cursor position (-1..1 each axis), 0 = centred. */
  mouseX: number;
  mouseY: number;
}

type Subscriber = (state: Readonly<WaveState>) => void;

/**
 * Internal mutable state. `amp` and `freq` are computed each frame
 * from a "rest" baseline plus mouse modulation, so subscribers can
 * read the live values without doing the math themselves.
 */
const state: WaveState = {
  time: 0,
  amp: 8,    // resting amplitude (px)
  freq: 0.006, // resting spatial frequency (rad/px) — period ≈ 1000px
  phase: 0,
  speed: 0.6, // wave travels left at ~0.6 rad/sec
  mouseX: 0,
  mouseY: 0,
};

const REST_AMP = 8;        // px — baseline undulation always present
const MAX_EXTRA_AMP = 32;  // px — added when cursor sits near top
const REST_FREQ = 0.006;   // rad/px — baseline period
const MAX_EXTRA_FREQ = 0.004; // wider range when cursor goes right
const MOUSE_LERP = 0.08;   // smoothing for cursor → state

let targetMouseX = 0;
let targetMouseY = 0;

const subscribers = new Set<Subscriber>();
let rafId: number | null = null;
let lastTimestamp = 0;
let started = false;

function tick(now: number) {
  rafId = requestAnimationFrame(tick);

  const dt = lastTimestamp === 0 ? 0 : (now - lastTimestamp) / 1000;
  lastTimestamp = now;
  state.time += dt;

  // Smooth cursor toward latest target.
  state.mouseX += (targetMouseX - state.mouseX) * MOUSE_LERP;
  state.mouseY += (targetMouseY - state.mouseY) * MOUSE_LERP;

  // Cursor near TOP (mouseY → -1) => bigger amp.
  // Cursor near BOTTOM (mouseY → 1)  => calmer.
  // Map y from -1..1 to amp factor 1..0 (top-heavy).
  const yInfluence = Math.max(0, -state.mouseY); // 0 when below centre, 1 when at top
  state.amp = REST_AMP + MAX_EXTRA_AMP * yInfluence;

  // Cursor right (mouseX → 1) => tighter waves.
  state.freq = REST_FREQ + MAX_EXTRA_FREQ * Math.max(0, state.mouseX);

  // Cursor x also nudges the phase a touch so movement reads as
  // immediate even when amp/freq changes are subtle.
  state.phase = state.mouseX * Math.PI * 0.25;

  for (const fn of subscribers) fn(state);
}

function ensureRunning() {
  if (started) return;
  started = true;
  lastTimestamp = 0;
  rafId = requestAnimationFrame(tick);
  attachPointerListener();
}

function attachPointerListener() {
  if (typeof window === 'undefined') return;
  // Window-wide so the wave responds anywhere on the page, not just
  // when hovering the canvas.
  window.addEventListener('pointermove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  // Decay back to centre on leave.
  window.addEventListener('pointerleave', () => {
    targetMouseX = 0;
    targetMouseY = 0;
  });
}

/**
 * Sample the wave at a given world-x (clientX-style px). Returns a
 * y displacement in pixels in the range roughly [-amp, amp].
 */
function sample(worldX: number): number {
  return state.amp * Math.sin(worldX * state.freq + state.phase + state.time * state.speed);
}

export const wave = {
  subscribe(fn: Subscriber): () => void {
    subscribers.add(fn);
    ensureRunning();
    return () => {
      subscribers.delete(fn);
    };
  },
  sample,
  /** Live read-only access to the current state. */
  get state(): Readonly<WaveState> {
    return state;
  },
};
