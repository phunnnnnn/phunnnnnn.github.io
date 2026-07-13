// ===== LetterGlitch — animated background of scrambling letters =====
// Vanilla-JS port of the React Bits <LetterGlitch /> component, adapted for
// this static, no-build site. It paints a canvas full of monospace glyphs that
// endlessly scramble their character and colour. Here it runs as a faint layer
// behind the hero; its palette is read from the site's accent tokens so it
// follows the light/dark theme automatically, and it pauses whenever it can't
// be seen (tab hidden / scrolled away) or the visitor prefers reduced motion.
//
// Reference component: https://www.reactbits.dev/  (LetterGlitch)

(function () {
  "use strict";

  // ---- Colour helpers -------------------------------------------------------
  function hexToRgb(hex) {
    if (!hex) return null;
    hex = hex.trim().replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => r + r + g + g + b + b
    );
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m
      ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
      : null;
  }

  function lerpRgb(a, b, t) {
    return {
      r: Math.round(a.r + (b.r - a.r) * t),
      g: Math.round(a.g + (b.g - a.g) * t),
      b: Math.round(a.b + (b.b - a.b) * t),
    };
  }

  const rgbStr = (c) => `rgb(${c.r}, ${c.g}, ${c.b})`;

  function toHex(c) {
    const h = (n) => n.toString(16).padStart(2, "0");
    return `#${h(c.r)}${h(c.g)}${h(c.b)}`;
  }

  function mixHex(a, b, t) {
    const ra = hexToRgb(a);
    const rb = hexToRgb(b);
    if (!ra || !rb) return a || b;
    return toHex(lerpRgb(ra, rb, t));
  }

  // ---- The effect -----------------------------------------------------------
  class LetterGlitch {
    constructor(container, options) {
      const opts = options || {};
      this.container = container;
      this.glitchSpeed = opts.glitchSpeed != null ? opts.glitchSpeed : 50;
      this.smooth = opts.smooth !== false;
      this.symbols = Array.from(
        opts.characters ||
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
      );
      this.maxDpr = opts.maxDpr || 2;
      this.setColors(opts.glitchColors || ["#2b4539", "#61dca3", "#61b3dc"]);

      this.fontSize = 16;
      this.charWidth = 10;
      this.charHeight = 20;

      this.letters = [];
      this.columns = 0;
      this.rows = 0;
      this.rafId = null;
      this.running = false;
      this.lastGlitch = 0;
      this._dirty = []; // indices touched since the last paint (for partial redraws)

      this.canvas = document.createElement("canvas");
      this.canvas.style.display = "block";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      container.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");

      this._animate = this._animate.bind(this);

      // Re-fit to the container whenever it changes size (initial layout, font
      // load, viewport resize, …). Debounced so drag-resizing doesn't reseed
      // the grid on every pixel.
      this._resizeTimer = null;
      this._ro = new ResizeObserver(() => {
        clearTimeout(this._resizeTimer);
        this._resizeTimer = setTimeout(() => this.resize(), 100);
      });
      this._ro.observe(container);

      this.resize();
    }

    // Accepts an array of hex strings; parses to rgb once so the hot path never
    // touches strings. While animating, existing letters ease toward the new
    // palette so a theme switch reads as a colour glitch rather than a hard cut.
    // While paused (reduced motion / off-screen / hidden tab) the tween loop
    // won't run, so we snap straight to the new palette and repaint one static
    // frame — otherwise the frozen frame would keep the previous theme's colours.
    setColors(hexColors) {
      const parsed = (hexColors || []).map(hexToRgb).filter(Boolean);
      this.colors = parsed.length ? parsed : [{ r: 97, g: 220, b: 163 }];
      if (!this.letters || !this.letters.length) return;
      const eased = this.smooth && this.running;
      for (const l of this.letters) {
        l.target = this._randColor();
        if (eased) {
          l.start = l.color;
          l.progress = 0;
        } else {
          l.color = l.target;
          l.css = rgbStr(l.color);
          l.start = l.target;
          l.progress = 1;
        }
      }
      // Whenever we snapped (paused, or running-but-not-smooth) the tween won't
      // repaint these cells, so force one full redraw. Only the eased path
      // (running && smooth) defers to _tween marking cells dirty per frame.
      if (!eased) this.draw();
    }

    _randChar() {
      return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    }

    _randColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    resize() {
      const rect = this.container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);
      this.canvas.width = Math.floor(rect.width * dpr);
      this.canvas.height = Math.floor(rect.height * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      this.columns = Math.ceil(rect.width / this.charWidth);
      this.rows = Math.ceil(rect.height / this.charHeight);
      const total = this.columns * this.rows;
      this.letters = new Array(total);
      for (let i = 0; i < total; i++) {
        const c = this._randColor();
        this.letters[i] = { char: this._randChar(), color: c, start: c, target: c, progress: 1, css: rgbStr(c) };
      }
      this.draw();
    }

    // Full repaint of every cell — used for the initial frame, resizes, and
    // static (paused) theme swaps. The animation loop uses _drawDirty instead.
    draw() {
      const ctx = this.ctx;
      if (!ctx || !this.letters.length) return;
      const rect = this.canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.font = `${this.fontSize}px monospace`;
      ctx.textBaseline = "top";
      const cols = this.columns;
      for (let i = 0; i < this.letters.length; i++) {
        const l = this.letters[i];
        ctx.fillStyle = l.css;
        ctx.fillText(l.char, (i % cols) * this.charWidth, Math.floor(i / cols) * this.charHeight);
      }
      this._dirty.length = 0; // the full repaint supersedes any pending cells
    }

    // Repaint only the cells changed since the last frame. Clearing each cell's
    // own box is safe because monospace glyphs stay within their advance width,
    // so neighbours never bleed in. Keeps per-frame work proportional to the
    // ~5% scrambled + in-flight tweens instead of the whole (viewport-sized) grid.
    _drawDirty() {
      const ctx = this.ctx;
      const cols = this.columns;
      const cw = this.charWidth;
      const ch = this.charHeight;
      ctx.font = `${this.fontSize}px monospace`;
      ctx.textBaseline = "top";
      const d = this._dirty;
      for (let k = 0; k < d.length; k++) {
        const i = d[k];
        const l = this.letters[i];
        if (!l) continue;
        const x = (i % cols) * cw;
        const y = Math.floor(i / cols) * ch;
        ctx.clearRect(x, y, cw, ch);
        ctx.fillStyle = l.css;
        ctx.fillText(l.char, x, y);
      }
      d.length = 0;
    }

    // Scramble a small random share of the grid (character + target colour).
    _scramble() {
      const n = this.letters.length;
      if (!n) return;
      const count = Math.max(1, Math.floor(n * 0.05));
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * n);
        const l = this.letters[idx];
        if (!l) continue;
        l.char = this._randChar();
        l.target = this._randColor();
        if (this.smooth) {
          l.start = l.color; // colour eases toward target over the next frames
          l.progress = 0;
        } else {
          l.color = l.target;
          l.css = rgbStr(l.color);
          l.start = l.target;
          l.progress = 1;
        }
        this._dirty.push(idx);
      }
    }

    // Advance in-flight colour transitions, marking each moved cell dirty.
    // (The React original lerped from an already-stringified colour, which
    // silently froze the fade after one step; keeping start/target as parsed
    // rgb makes `smooth` actually ease the whole way.)
    _tween() {
      const letters = this.letters;
      const dirty = this._dirty;
      for (let i = 0; i < letters.length; i++) {
        const l = letters[i];
        if (l.progress < 1) {
          l.progress = Math.min(1, l.progress + 0.05);
          l.color = lerpRgb(l.start, l.target, l.progress);
          l.css = rgbStr(l.color);
          dirty.push(i);
        }
      }
    }

    _animate(now) {
      if (now - this.lastGlitch >= this.glitchSpeed) {
        this._scramble();
        this.lastGlitch = now;
      }
      if (this.smooth) this._tween();
      if (this._dirty.length) this._drawDirty();
      this.rafId = requestAnimationFrame(this._animate);
    }

    start() {
      if (this.running) return;
      this.running = true;
      this.lastGlitch = -Infinity; // force a scramble on the first frame
      this.rafId = requestAnimationFrame(this._animate);
    }

    stop() {
      this.running = false;
      if (this.rafId != null) cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    destroy() {
      this.stop();
      this._ro.disconnect();
      clearTimeout(this._resizeTimer);
      if (this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas);
    }
  }

  // ---- Mount as the hero background -----------------------------------------
  function init() {
    const mount = document.getElementById("heroGlitch");
    if (!mount || typeof ResizeObserver === "undefined") return;

    const root = document.documentElement;

    // Pull the palette straight from the theme tokens so we never duplicate the
    // brand colours — and so a theme switch is a single re-read.
    const palette = () => {
      const cs = getComputedStyle(root);
      const a = cs.getPropertyValue("--accent").trim();
      const b = cs.getPropertyValue("--accent-2").trim();
      const list = [a, b].filter(Boolean);
      if (a && b) list.push(mixHex(a, b, 0.5)); // a blended third tone for variety
      return list;
    };

    const initial = palette();
    const glitch = new LetterGlitch(mount, {
      glitchColors: initial.length ? initial : undefined,
      glitchSpeed: 50,
      smooth: true,
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let onScreen = true;

    // Only animate when it's actually visible and motion is welcome; otherwise
    // leave the single static frame the constructor already painted.
    function sync() {
      if (reduce.matches || !onScreen || document.hidden) glitch.stop();
      else glitch.start();
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        (entries) => {
          onScreen = entries[0].isIntersecting;
          sync();
        },
        { threshold: 0 }
      ).observe(mount);
    }
    document.addEventListener("visibilitychange", sync);
    if (reduce.addEventListener) reduce.addEventListener("change", sync);

    // Follow the light/dark theme: recolour when data-theme flips.
    new MutationObserver(() => glitch.setColors(palette())).observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for reuse / debugging.
  window.LetterGlitch = LetterGlitch;
})();
