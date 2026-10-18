// ===== Clean URLs: show phunn.me/info instead of /info.html =====
if (/\.html$/.test(location.pathname)) {
  history.replaceState(null, "", location.pathname.replace(/(index)?\.html$/, "") + location.search + location.hash);
}

// ===== Current year in footer =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Shuffle / scramble text effect =====
// Any element with class "shuffle-text" scrambles each character through
// random glyphs until it settles on the real text. Runs on load and whenever
// the text changes (e.g. language switch).
const SHUFFLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789!<>-_/[]{}=+*^?#";

function scrambleText(el, newText) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = newText;
    return;
  }
  if (el._shuffleRaf) cancelAnimationFrame(el._shuffleRaf);
  const oldText = el.dataset.shuffleFinal || el.textContent || "";
  el.dataset.shuffleFinal = newText;
  const chars = Array.from(newText);
  const oldChars = Array.from(oldText);
  const length = Math.max(oldChars.length, chars.length);
  const queue = [];
  for (let i = 0; i < length; i++) {
    const start = Math.floor(Math.random() * 20);
    const end = start + 15 + Math.floor(Math.random() * 25);
    queue.push({ from: oldChars[i] || "", to: chars[i] || "", start, end, char: "" });
  }
  let frame = 0;
  const run = () => {
    let out = "";
    let done = 0;
    for (const q of queue) {
      if (frame >= q.end) {
        done++;
        out += q.to;
      } else if (frame >= q.start && q.to) {
        if (!q.char || Math.random() < 0.28) {
          q.char = SHUFFLE_CHARS[Math.floor(Math.random() * SHUFFLE_CHARS.length)];
        }
        out += '<span class="shuffle-char">' + q.char + "</span>";
      } else {
        out += q.from;
      }
    }
    el.innerHTML = out;
    if (done === queue.length) {
      el.textContent = newText;
      el._shuffleRaf = null;
      return;
    }
    frame++;
    el._shuffleRaf = requestAnimationFrame(run);
  };
  run();
}

// Escape user-facing strings before injecting into markup.
function escHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

const certTrack = document.getElementById("certTrack");
const certTagEl = document.getElementById("certTag");
const certTitleEl = document.getElementById("certTitle");
const certMetaEl = document.getElementById("certMeta");
const certCounterEl = document.getElementById("certCounter");
let certIndex = 0;

function currentLang() {
  return document.documentElement.getAttribute("data-lang") || "en";
}

function certBadge(cert, lang) {
  if (!cert.badge) return "";
  return `<span class="cert-badge cert-badge--${cert.badge.kind}">${escHtml(cert.badge[lang])}</span>`;
}

// Coverflow: the current cert sits in the middle; the others are placed by
// their looped distance from it (-1 = left, +1 = right) and shrink/fade.
function showCert(i) {
  const n = certData.length;
  certIndex = ((i % n) + n) % n;
  const lang = currentLang();
  const c = certData[certIndex];

  certTrack.querySelectorAll(".cert-slide").forEach((slide, k) => {
    let o = k - certIndex;
    if (o > n / 2) o -= n;
    if (o < -n / 2) o += n;
    const abs = Math.abs(o);
    slide.style.setProperty("--o", o);
    slide.style.setProperty("--abs", Math.min(abs, 3));
    slide.dataset.pos = abs > 2 ? "hidden" : String(o);
    slide.setAttribute("aria-hidden", String(abs > 1));
    slide.tabIndex = abs === 0 ? 0 : -1;
    // Load the full image only for slides that are (nearly) on screen.
    const img = slide.querySelector("img");
    if (abs <= 2 && !img.src.includes("/full/")) img.src = `assets/certs/full/${certData[k].file}.jpg`;
  });

  certTagEl.textContent = c.tag ? c.tag[lang] : "";
  certTagEl.hidden = !c.tag;
  certTagEl.dataset.kind = c.tag ? c.tag.en.toLowerCase().replace(/\s+/g, "-") : "";
  certTitleEl.textContent = c.title[lang];
  certMetaEl.textContent = c.meta[lang];
  certCounterEl.textContent = `${certIndex + 1} / ${n}`;
}

function renderCerts(lang) {
  if (!certTrack) return;
  certTrack.innerHTML = certData
    .map((c, i) => `
      <button class="cert-slide" type="button" data-index="${i}" aria-label="${escHtml(c.title[lang])}">
        ${certBadge(c, lang)}
        <img src="assets/certs/thumb/${c.file}.jpg" alt="" draggable="false" />
      </button>`)
    .join("");
  showCert(certIndex);
}

if (certTrack) {
  let startX = null;
  let swiped = false;
  certTrack.addEventListener("pointerdown", (e) => { startX = e.clientX; swiped = false; });
  certTrack.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) {
      swiped = true;
      showCert(certIndex + (dx < 0 ? 1 : -1));
    }
  });
  // Click a side cert to bring it to the middle; click the middle one to zoom.
  certTrack.addEventListener("click", (e) => {
    if (swiped) { swiped = false; return; }
    const slide = e.target.closest(".cert-slide");
    if (!slide) return;
    const i = Number(slide.dataset.index);
    if (i !== certIndex) return showCert(i);
    const c = certData[i];
    const lang = currentLang();
    openLightbox(`assets/certs/full/${c.file}.jpg`, c.title[lang] + " · " + c.meta[lang]);
  });
  document.getElementById("certPrev").addEventListener("click", () => showCert(certIndex - 1));
  document.getElementById("certNext").addEventListener("click", () => showCert(certIndex + 1));
  document.getElementById("certViewer").addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showCert(certIndex - 1);
    else if (e.key === "ArrowRight") showCert(certIndex + 1);
  });
}

const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] === undefined) return;
    if (el.classList.contains("shuffle-text")) scrambleText(el, dict[key]);
    else el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
  renderCerts(lang); // after data-lang, since showCert reads it
  // Button shows the language you'll switch TO
  langToggle.textContent = lang === "en" ? "TH" : "EN";
  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "en";
applyLanguage(savedLang);

// Scramble any shuffle-text elements that aren't handled by applyLanguage
document.querySelectorAll(".shuffle-text:not([data-i18n])").forEach((el) => {
  scrambleText(el, el.textContent.trim());
});

langToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-lang") || "en";
  applyLanguage(current === "en" ? "th" : "en");
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".section__title, .section .box");
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("shuffle-text")) {
          // Replay the scramble every time the title scrolls back into view
          scrambleText(entry.target, entry.target.dataset.shuffleFinal || entry.target.textContent);
        } else {
          // Non-shuffle elements only need to reveal once
          observer.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// ===== Certificate lightbox =====
// Click (or press Enter/Space on) any certificate to open it full size.
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(full, caption) {
  lightboxImg.setAttribute("src", full);
  lightboxImg.setAttribute("alt", caption);
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  // Release the (large) image so it isn't kept in memory while hidden.
  lightboxImg.setAttribute("src", "");
}

if (lightbox) {
  lightboxClose.addEventListener("click", closeLightbox);
  // Click the backdrop (but not the image/caption) to close.
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox__figure")) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });
}
