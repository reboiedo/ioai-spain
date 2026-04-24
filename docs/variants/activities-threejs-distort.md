# Activities section — Three.js variant with edge distortion

**Status:** reference / archived — not currently used on `/tenerife-camp`.

Saved on pause. Kept here so we can revive or remix the approach if we later
want to add 3D effects on top of the horizontal-scroll activities section.

## What it did

- Full-viewport `<canvas>` inside the activities section.
- Each activity rendered as a **Three.js Plane mesh** with a canvas-generated
  texture: gradient background + title + description **baked into the texture**
  (no separate HTML text rail — the whole card transformed as one 3D object).
- Cards laid out along the X axis in a `Group`. Scroll progress drove the
  group's `position.x`.
- Per-frame **edge distortion**: each card's distance from the camera centre
  produced a quadratic-eased scale-down, Y-axis tilt away from camera, and
  Z-axis pushback. Result was a "fisheye carousel" feel — front card flat and
  big, side cards progressively compressed and tilted.

## Why we paused it

The compressed edge cards felt visually noisy. Decision was to revert to a
plain HTML horizontal-scroll rail; keep Three.js available for future effects
(particles, a shader background, scroll-linked transitions, etc.).

## Markup (inside the activities wrapper)

```astro
<section class="activities scene__layer--tilt" data-theme="blue">
  <canvas class="activities__canvas"></canvas>

  <div class="activities__overlay">
    <header class="activities__header container-full">
      <p class="font-caption">Beyond lectures</p>
      <h2 class="font-h1">Extracurriculars</h2>
    </header>
  </div>

  <!-- Card data in hidden template; JS reads dataset attrs. -->
  <template id="activity-data">
    <div data-color="#0ea5e9" data-title="Kayaking"
         data-desc="Guided coastal paddle…"></div>
    <div data-color="#f97316" data-title="Stargazing at Teide"
         data-desc="Teide National Park is a dark-sky reserve…"></div>
    …
  </template>
</section>
```

## CSS

```css
.activities__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.activities__overlay {
  position: relative;
  padding: var(--section-block) var(--section-inline);
  z-index: 1;
  pointer-events: none;
}
```

## TypeScript (init + distortion render loop)

```ts
import * as THREE from 'three';

function initActivities() {
  cleanupActivities();

  const section = document.querySelector<HTMLElement>('[data-activities]');
  if (!section) return;
  const canvas = section.querySelector<HTMLCanvasElement>('.activities__canvas');
  const template = section.querySelector<HTMLTemplateElement>('#activity-data');
  if (!canvas || !template) return;

  const cardData = Array.from(template.content.children).map((el) => ({
    color: (el as HTMLElement).dataset.color || '#888',
    title: (el as HTMLElement).dataset.title || '',
    desc:  (el as HTMLElement).dataset.desc  || '',
  }));
  if (!cardData.length) return;
  const N = cardData.length;

  // ── Three.js setup ──
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, -0.15, 5);

  const scene3d = new THREE.Scene();

  // ── Flat horizontal rail ──
  const planeGroup = new THREE.Group();
  scene3d.add(planeGroup);

  const planeW = 2;
  const planeH = 2.8;
  const gap = 0.4;
  const pitch = planeW + gap;
  const totalTravel = (N - 1) * pitch;

  const planes: THREE.Mesh[] = [];
  cardData.forEach((card, i) => {
    const tex = makeCardTexture(card.color, card.title, card.desc);
    const geo = new THREE.PlaneGeometry(planeW, planeH, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.x = i * pitch;
    planeGroup.add(mesh);
    planes.push(mesh);
  });

  function onResize() {
    const w = section!.clientWidth;
    const h = section!.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  onResize();
  window.addEventListener('resize', onResize);

  // ── ScrollTrigger: pin + scrub ──
  const trigger = ScrollTrigger.create({
    trigger: section,
    pin: true,
    pinSpacing: false,
    start: 'top top',
    end: '+=200%',
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      // Horizontal scroll completes at 40% of pin. Buffer 40–50%.
      // Venue covers 50–100%.
      const hp = Math.min(self.progress * 2.5, 1);
      planeGroup.position.x = -hp * totalTravel;
    },
  });

  // ── Render loop with edge distortion ──
  function render() {
    const halfFov = (camera.fov / 2) * Math.PI / 180;
    const visibleHalfW = Math.tan(halfFov) * camera.position.z * camera.aspect;

    for (const plane of planes) {
      const worldX = plane.position.x + planeGroup.position.x;
      // t: 0 at centre, 1 at viewport edge, can exceed 1 off-screen.
      const t = Math.min(Math.abs(worldX) / visibleHalfW, 1.5);
      // Quadratic ease — gentle near centre, aggressive at edges.
      const ease = t * t;

      // Scale: 1 → 0.55
      const s = 1 - ease * 0.45;
      plane.scale.set(s, s, 1);

      // Y-rotation: tilt away from camera (sign follows direction)
      plane.rotation.y = Math.sign(worldX) * ease * 0.6;

      // Z-offset: push back for depth separation
      plane.position.z = -ease * 1.5;
    }

    renderer.render(scene3d, camera);
  }
  gsap.ticker.add(render);
}
```

## Card-texture helper

```ts
function makeCardTexture(color: string, title: string, desc: string) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 680;
  const ctx = c.getContext('2d')!;

  // Gradient bg
  const grad = ctx.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, color);
  grad.addColorStop(1, shade(color, -50));
  ctx.fillStyle = grad;
  roundRect(ctx, 0, 0, c.width, c.height, 20);
  ctx.fill();

  // Subtle noise
  const img = ctx.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 10;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);

  // Title (large bold) in lower third
  ctx.fillStyle = 'rgba(255,255,255,0.95)';
  ctx.font = 'bold 42px Inter, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  wrapText(ctx, title, 32, c.height - 200, c.width - 64, 48);

  // Description (smaller) under title
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '22px Inter, system-ui, sans-serif';
  wrapText(ctx, desc, 32, c.height - 140, c.width - 64, 28);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = ''; let curY = y;
  for (const word of words) {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, curY);
      line = word + ' '; curY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line.trim()) ctx.fillText(line.trim(), x, curY);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
```

## Tunables

| Knob | Default | Effect |
|---|---|---|
| scale reduction | `0.45` | Shrink factor at edge. 0 = no shrink, 1 = disappears. |
| Y rotation | `0.6` rad (~34°) | How far edge cards tilt away from camera. |
| Z pushback | `1.5` units | How far edge cards recede into space. |
| ease curve | `t * t` (quadratic) | Distortion onset. `t` = linear, `t*t*t` = more aggressive. |
| FOV | `45°` | Wider FOV → more dramatic perspective at edges. |
| camera z | `5` | Closer = larger centre card. |
| `planeW` × `planeH` | `2 × 2.8` | Card aspect and size in world units. |
| `pitch` | `2.4` | Centre-to-centre spacing. Larger = more gap between cards. |
| hp mapping | `progress * 2.5` | Horizontal scroll completes at 40% of pin window. |

## When to bring it back

- The whole page gets more visually ambitious (imagery, video, shaders) and a
  flat HTML rail starts looking underbuilt relative to the rest.
- You want scroll-linked shader effects (liquid metal, chromatic aberration,
  parallax layers) on the cards — Three.js plane + ShaderMaterial is the
  natural home for that.
- You specifically want the "physical" carousel feel rather than a rail.

## Also worth exploring from this foundation

- Cylinder layout (cards on a vertical axis wheel) — we had this briefly;
  gave too many edge-on cards at the chosen radius but could work with larger
  radius + tighter angular spacing.
- ShaderMaterial with UV distortion (barrel / wave / liquid) instead of
  transform-based distortion — would give truer warping rather than rigid-body
  transforms.
- Image textures (real photos of activities) instead of the generated
  gradient placeholders — the distortion reads much better with photo content.
