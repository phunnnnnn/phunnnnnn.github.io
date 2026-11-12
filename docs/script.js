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
}

function renderCerts(lang) {
  if (!certTrack) return;
  // Each cert carries its own tag / title / place, shown over its bottom fade when it's in the middle.
  const tag = (c) => c.tag
    ? `<span class="card__tag" data-kind="${c.tag.en.toLowerCase().replace(/\s+/g, "-")}">${escHtml(c.tag[lang])}</span>`
    : "";
  certTrack.innerHTML = certData
    .map((c, i) => `
      <button class="cert-slide" type="button" data-index="${i}">
        ${certBadge(c, lang)}
        <img src="assets/certs/thumb/${c.file}.jpg" alt="" draggable="false" />
        <span class="cert-slide__info">
          ${tag(c)}
          <span class="cert-slide__title">${escHtml(c.title[lang])}</span>
          <span class="cert-slide__meta">${escHtml(c.meta[lang])}</span>
          <span class="cert-slide__count">${i + 1} / ${certData.length}</span>
        </span>
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
  document.getElementById("certViewer").addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showCert(certIndex - 1);
    else if (e.key === "ArrowRight") showCert(certIndex + 1);
  });
}

// ===== Projects =====
// Cover picture: the image: field, or the YouTube video's thumbnail.
function coverSrc(p) {
  return p.image || (p.youtube ? `https://i.ytimg.com/vi/${p.youtube}/maxresdefault.jpg` : "");
}

// Video thumbnail with a play button (game page); the player loads on click.
function projectMedia(p) {
  if (p.youtube) {
    return `<button class="project__visual" type="button" data-yt="${p.youtube}" data-list="${p.playlist || ""}" aria-label="${escHtml(p.title)} video">
        <img src="${coverSrc(p)}" alt="" loading="lazy" draggable="false" />
        <span class="yt__play" aria-hidden="true"></span>
      </button>`;
  }
  if (p.image) return `<div class="project__visual"><img src="${p.image}" alt="${escHtml(p.title)}" loading="lazy" draggable="false" /></div>`;
  return "";
}

document.addEventListener("click", (e) => {
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

// Tech tags that start with one of these names get a logo (file in assets/logo/)
// and/or a link. wordmark: the logo already spells the name, so no text next to it.
const techInfo = {
  "Roblox Studio": { logo: "Roblox_Studio_icon_2025.svg.webp", url: "https://create.roblox.com/" },
  Godot: { logo: "Godot_icon.svg.webp", url: "https://godotengine.org/" },
  Git: { logo: "GitHub_Invertocat_Logo.svg", url: "https://github.com/" },
  Rojo: { logo: "logo.png", url: "https://rojo.space/", wordmark: true },
  ProfileStore: { url: "https://madstudioroblox.github.io/ProfileStore/" },
};

// linked: false inside the project cards, which are links themselves.
function techTag(name, linked) {
  const key = Object.keys(techInfo).find((k) => name.startsWith(k));
  const info = techInfo[key] || {};
  const img = info.logo ? `<img src="assets/logo/${info.logo}" alt="${info.wordmark ? escHtml(name) : ""}" draggable="false"${info.wordmark ? ' class="tech__wordmark"' : ""} />` : "";
  const inner = img + (info.wordmark ? "" : escHtml(name));
  return info.url && linked ? `<li><a href="${info.url}" target="_blank" rel="noopener">${inner}</a></li>` : `<li>${inner}</li>`;
}

// ===== Projects carousel (home page): Steam-style, one card at a time =====
// Each card is a link to the project's own page (/<page>).
const projTrack = document.getElementById("projTrack");
const projDots = document.getElementById("projDots");
let projIndex = 0;

function steamCard(p, i, lang) {
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  return `
    <a class="box steam-card" href="/${p.page}" data-index="${i}" draggable="false">
      <div class="steam-card__media"><img src="${coverSrc(p)}" alt="" draggable="false" /></div>
      <div class="steam-card__info">
        <h3 class="steam-card__title">${escHtml(p.title)}</h3>
        <p class="steam-card__desc">${t(p.desc)}</p>
        ${p.tech ? `<ul class="tech">${p.tech.map((n) => techTag(n, false)).join("")}</ul>` : ""}
        <div class="steam-card__foot">
          ${p.status ? `<span class="tag tag--live">${t(p.status)}</span>` : ""}
          ${p.meta ? `<span class="project__meta">${escHtml(p.meta)}</span>` : ""}
        </div>
      </div>
    </a>`;
}

// Hover preview: the project's gif: picture (a short gameplay clip) plays over its cover
// (a .steam-card__media box, used by the home carousel and the games page tiles).
const canHover = matchMedia("(hover: hover)").matches; // mouse, not touch
function playPreview(media, p) {
  if (!p.gif || media.querySelector(".steam-card__preview")) return;
  const img = document.createElement("img");
  img.className = "steam-card__preview";
  img.alt = "";
  img.onload = () => img.classList.add("is-ready"); // the cover stays until the clip has loaded
  img.src = p.gif;
  media.appendChild(img);
}
const stopPreview = (el) => el.querySelector(".steam-card__preview")?.remove();

function showProject(i) {
  const n = projectData.length;
  projIndex = ((i % n) + n) % n;
  projTrack.querySelectorAll(".steam-card").forEach((card, k) => {
    const on = k === projIndex;
    card.classList.toggle("is-active", on);
    card.inert = !on; // hidden cards can't be tabbed to or read out
    if (!on) stopPreview(card);
  });
  // Grey side games show the previous / next project
  [["prev", -1, "Previous"], ["next", 1, "Next"]].forEach(([side, d, label]) => {
    const p = projectData[(projIndex + d + n) % n];
    const btn = projTrack.querySelector(`.steam-side--${side}`);
    btn.querySelector("img").src = coverSrc(p);
    btn.setAttribute("aria-label", `${label} project: ${p.title}`);
  });
  scheduleAuto();
  projDots.querySelectorAll("button").forEach((d, k) => d.setAttribute("aria-current", String(k === projIndex)));
}

function renderProjects(lang) {
  if (!projTrack) return;
  projTrack.innerHTML =
    `<button class="steam-side steam-side--prev" type="button" data-step="-1"><img alt="" draggable="false" /></button>
     <button class="steam-side steam-side--next" type="button" data-step="1"><img alt="" draggable="false" /></button>` +
    projectData.map((p, i) => steamCard(p, i, lang)).join("");
  projDots.innerHTML = projectData
    .map((p, i) => `<button type="button" data-index="${i}" aria-label="${escHtml(p.title)}"></button>`)
    .join("");
  showProject(projIndex);
}

if (projTrack) {
  const wasSwipe = addSwipe(projTrack, (d) => showProject(projIndex + d));
  projTrack.addEventListener("click", (e) => {
    if (wasSwipe()) return e.preventDefault(); // a swipe isn't a click on the card
    const side = e.target.closest(".steam-side");
    if (side) showProject(projIndex + Number(side.dataset.step));
  });
  projDots.addEventListener("click", (e) => {
    const dot = e.target.closest("button");
    if (dot) showProject(Number(dot.dataset.index));
  });
  const viewer = document.getElementById("projViewer");
  // Mouse only: hover a card to play its clip; the carousel holds still meanwhile.
  if (canHover) {
    projTrack.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".steam-card.is-active");
      if (card) playPreview(card.querySelector(".steam-card__media"), projectData[card.dataset.index]);
    });
    viewer.addEventListener("mouseenter", () => (autoPaused = true));
    viewer.addEventListener("mouseleave", () => {
      autoPaused = false;
      projTrack.querySelectorAll(".steam-card").forEach(stopPreview);
    });
  }
  // Also hold still while a keyboard user is in the carousel.
  viewer.addEventListener("focusin", () => (autoPaused = true));
  viewer.addEventListener("focusout", () => (autoPaused = false));
}

// Auto slide to the next game every 6 seconds (off when the visitor asked for less motion).
let autoTimer = null;
let autoPaused = false;
const autoSlide = !matchMedia("(prefers-reduced-motion: reduce)").matches;
function scheduleAuto() {
  clearTimeout(autoTimer);
  if (autoSlide) autoTimer = setTimeout(() => (autoPaused ? scheduleAuto() : showProject(projIndex + 1)), 6000);
}

// ===== Games page (games.html): every project as a tile =====
const gameGrid = document.getElementById("gameGrid");

function renderGames(lang) {
  if (!gameGrid) return;
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  gameGrid.innerHTML = projectData
    .map((p, i) => `
      <a class="box game-tile" href="/${p.page}" data-index="${i}">
        <div class="steam-card__media"><img src="${coverSrc(p)}" alt="" loading="lazy" /></div>
        <div class="game-tile__info">
          <h2 class="game-tile__title">${escHtml(p.title)}</h2>
          <p class="game-tile__desc">${t(p.desc)}</p>
          <div class="game-tile__foot">
            ${p.status ? `<span class="tag tag--live">${t(p.status)}</span>` : ""}
            ${p.meta ? `<span class="project__meta">${escHtml(p.meta)}</span>` : ""}
          </div>
        </div>
      </a>`)
    .join("");
  if (canHover) {
    gameGrid.querySelectorAll(".game-tile").forEach((tile) => {
      tile.addEventListener("mouseenter", () => playPreview(tile.querySelector(".steam-card__media"), projectData[tile.dataset.index]));
      tile.addEventListener("mouseleave", () => stopPreview(tile));
    });
  }
}

// ===== Game page (help-your-waifu.html, lost-dept.html, ...) =====
// Every game page is the same empty shell; the file name says which project
// from projectData (its page: field) to show.
const gameRoot = document.getElementById("game");

function renderGame(lang) {
  if (!gameRoot) return;
  const page = location.pathname.split("/").pop().replace(/\.html$/, "");
  const p = projectData.find((x) => x.page === page);
  if (!p) return location.replace("/");
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  const tr = translations[lang];
  document.title = `${p.title} | Phunn`;
  gameRoot.innerHTML = `
    <div class="container">
      <a class="game__back" href="/games">← ${tr["game.back"]}</a>
      <h1 class="game__title">${escHtml(p.title)}</h1>
      <div class="game__top">
        <div>${projectMedia(p)}</div>
        <aside class="box game__side">
          <p class="game__desc">${t(p.desc)}</p>
          <dl class="game__facts">
            ${p.status ? `<div><dt class="label">${tr["game.status"]}</dt><dd><span class="tag tag--live">${t(p.status)}</span></dd></div>` : ""}
            ${p.meta ? `<div><dt class="label">${tr["game.platform"]}</dt><dd>${escHtml(p.meta)}</dd></div>` : ""}
          </dl>
          ${p.tech ? `<ul class="tech">${p.tech.map((n) => techTag(n, true)).join("")}</ul>` : ""}
        </aside>
      </div>
      ${p.link ? `
      <div class="box game__play">
        <h2>${tr["game.play"]} ${escHtml(p.title)}</h2>
        <a class="btn btn--primary" href="${p.link.url}" target="_blank" rel="noopener">${t(p.link.label)} ↗</a>
      </div>` : ""}
      <section class="game__about">
        <h2 class="game__heading">${tr["game.about"]}</h2>
        ${p.role ? `<p class="project__role">${t(p.role)}</p>` : ""}
        ${p.points ? `<ul class="project__points">${p.points.map((x) => `<li>${t(x)}</li>`).join("")}</ul>` : ""}
      </section>
    </div>`;
}

const langButtons = document.querySelectorAll("[data-lang-btn]");

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
  renderGames(lang);
  renderGame(lang);
  // The selected side of the TH | ENG pill is filled
  langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang)));
}

// First visit: follow the browser/phone language (Thai → th, anything else → en).
// After the visitor presses the TH/EN button, their choice is remembered instead.
const browserLang = (navigator.languages || [navigator.language]).some((l) => /^th\b/i.test(l)) ? "th" : "en";
applyLanguage(localStorage.getItem("langChoice") || browserLang);

// Scramble any shuffle-text elements that aren't handled by applyLanguage
document.querySelectorAll(".shuffle-text:not([data-i18n])").forEach((el) => {
  scrambleText(el, el.textContent.trim());
});

langButtons.forEach((b) => b.addEventListener("click", () => {
  if (b.dataset.langBtn === currentLang()) return;
  applyLanguage(b.dataset.langBtn);
  localStorage.setItem("langChoice", b.dataset.langBtn);
}));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".section__title, .section .box:not(.steam-card)");
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
