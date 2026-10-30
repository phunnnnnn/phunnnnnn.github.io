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

// ===== Carousel helpers (projects + certificates) =====
// Signed looped distance of slide k from the current one (-1 = left, +1 = right).
function loopOffset(k, cur, n) {
  let o = k - cur;
  if (o > n / 2) o -= n;
  if (o < -n / 2) o += n;
  return o;
}

// Swipe left/right on el calls step(+1 / -1). Returns a check that is true
// once for the click a swipe ends with, so that click can be ignored.
function addSwipe(el, step) {
  let startX = null;
  let swiped = false;
  el.addEventListener("pointerdown", (e) => { startX = e.clientX; swiped = false; });
  el.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) {
      swiped = true;
      step(dx < 0 ? 1 : -1);
    }
  });
  return () => {
    const s = swiped;
    swiped = false;
    return s;
  };
}

// Coverflow: the current cert sits in the middle; the others are placed by
// their looped distance from it (-1 = left, +1 = right) and shrink/fade.
function showCert(i) {
  const n = certData.length;
  certIndex = ((i % n) + n) % n;
  const lang = currentLang();
  const c = certData[certIndex];

  certTrack.querySelectorAll(".cert-slide").forEach((slide, k) => {
    const o = loopOffset(k, certIndex, n);
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
  const wasSwipe = addSwipe(certTrack, (d) => showCert(certIndex + d));
  // Click a side cert to bring it to the middle; click the middle one to zoom.
  certTrack.addEventListener("click", (e) => {
    if (wasSwipe()) return;
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

// ===== Projects carousel =====
// Same coverflow idea as the certificates, but each slide is a full project card.
const projTrack = document.getElementById("projTrack");
let projIndex = 0;

function projectMedia(p, lang) {
  if (p.youtube) {
    return `<button class="project__visual" type="button" data-yt="${p.youtube}" data-list="${p.playlist || ""}" aria-label="${escHtml(p.title)} video">
        <img src="${p.image || `https://i.ytimg.com/vi/${p.youtube}/maxresdefault.jpg`}" alt="" loading="lazy" draggable="false" />
        <span class="yt__play" aria-hidden="true"></span>
      </button>`;
  }
  if (p.image) return `<div class="project__visual"><img src="${p.image}" alt="${escHtml(p.title)}" loading="lazy" draggable="false" /></div>`;
  return "";
}

function projectCard(p, i, lang) {
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  const link = p.link
    ? `<a class="btn btn--ghost project__link" href="${p.link.url}" target="_blank" rel="noopener">${t(p.link.label)} ↗</a>`
    : "";
  return `
    <article class="box project proj-slide" data-index="${i}">
      <div class="project__title-row">
        <h3 class="project__title">${escHtml(p.title)}</h3>
        ${p.status ? `<span class="tag tag--live">${t(p.status)}</span>` : ""}
        ${p.meta ? `<span class="project__meta">${escHtml(p.meta)}</span>` : ""}
      </div>
      <div class="project__media">${projectMedia(p, lang)}</div>
      <div class="project__body">
        <p class="project__desc">${t(p.desc)}</p>
        ${p.role ? `<p class="project__role">${t(p.role)}</p>` : ""}
        ${p.points ? `<ul class="project__points">${p.points.map((x) => `<li>${t(x)}</li>`).join("")}</ul>` : ""}
        ${p.tech ? `<ul class="tech">${p.tech.map((x) => `<li>${escHtml(x)}</li>`).join("")}</ul>` : ""}
        ${link}
      </div>
    </article>`;
}

function showProject(i) {
  const n = projectData.length;
  projIndex = ((i % n) + n) % n;
  const lang = currentLang();
  projTrack.querySelectorAll(".proj-slide").forEach((slide, k) => {
    const o = loopOffset(k, projIndex, n);
    const abs = Math.abs(o);
    slide.style.setProperty("--o", o);
    slide.style.setProperty("--abs", Math.min(abs, 2));
    slide.dataset.pos = abs > 1 ? "hidden" : String(o);
    slide.setAttribute("aria-hidden", String(abs !== 0)); // side cards: click to focus, not to use
    // Stop a video that slid out of the middle.
    const media = slide.querySelector(".project__media");
    if (abs !== 0 && media.querySelector("iframe")) media.innerHTML = projectMedia(projectData[k], lang);
  });
  document.getElementById("projCounter").textContent = `${projIndex + 1} / ${n}`;
  document.getElementById("projNav").hidden = n < 2;
}

function renderProjects(lang) {
  if (!projTrack) return;
  projTrack.innerHTML = projectData.map((p, i) => projectCard(p, i, lang)).join("");
  showProject(projIndex);
}

if (projTrack) {
  const wasSwipe = addSwipe(projTrack, (d) => showProject(projIndex + d));
  projTrack.addEventListener("click", (e) => {
    if (wasSwipe()) return;
    const slide = e.target.closest(".proj-slide");
    if (!slide) return;
    const i = Number(slide.dataset.index);
    if (i !== projIndex) return showProject(i);
    // Load the YouTube player only when the thumbnail is clicked.
    const btn = e.target.closest("[data-yt]");
    if (!btn) return;
    const frame = document.createElement("iframe");
    const list = btn.dataset.list ? `&list=${btn.dataset.list}` : ""; // playlist: player shows all its videos
    frame.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&rel=0${list}`;
    frame.title = btn.getAttribute("aria-label");
    frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    const box = document.createElement("div");
    box.className = "project__visual";
    box.appendChild(frame);
    btn.replaceWith(box);
  });
  document.getElementById("projPrev").addEventListener("click", () => showProject(projIndex - 1));
  document.getElementById("projNext").addEventListener("click", () => showProject(projIndex + 1));
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
  renderProjects(lang); // after data-lang, since the show* functions read it
  renderCerts(lang);
  // Button shows the language you'll switch TO
  langToggle.textContent = lang === "en" ? "TH" : "EN";
}

// First visit: follow the browser/phone language (Thai → th, anything else → en).
// After the visitor presses the TH/EN button, their choice is remembered instead.
const browserLang = (navigator.languages || [navigator.language]).some((l) => /^th\b/i.test(l)) ? "th" : "en";
applyLanguage(localStorage.getItem("langChoice") || browserLang);

// Scramble any shuffle-text elements that aren't handled by applyLanguage
document.querySelectorAll(".shuffle-text:not([data-i18n])").forEach((el) => {
  scrambleText(el, el.textContent.trim());
});

langToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-lang") || "en";
  const next = current === "en" ? "th" : "en";
  applyLanguage(next);
  localStorage.setItem("langChoice", next);
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".section__title, .section .box:not(.proj-slide)");
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
