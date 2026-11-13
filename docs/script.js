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
const certDots = document.getElementById("certDots");
let certIndex = 0;
let certAuto = () => {}; // restarts the auto slide (set up with the carousel below)

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

// Auto slide: calls next() every 6 seconds. Holds still while the mouse is over the viewer,
// a keyboard user is in it, it's scrolled off screen, or a certificate is open full size.
// Off when the visitor asked for less motion. Returns the restart function: call it on
// every slide change, so a manual change gets the full 6 seconds too; restart.stop() pauses it.
const canHover = matchMedia("(hover: hover)").matches; // mouse, not touch
function autoAdvance(viewer, next) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return Object.assign(() => {}, { stop() {} });
  let timer = null;
  let hovered = false;
  let focused = false;
  let onScreen = true;
  if (canHover) {
    viewer.addEventListener("mouseenter", () => (hovered = true));
    viewer.addEventListener("mouseleave", () => (hovered = false));
  }
  viewer.addEventListener("focusin", () => (focused = true));
  viewer.addEventListener("focusout", () => (focused = false));
  new IntersectionObserver(([e]) => (onScreen = e.isIntersecting)).observe(viewer);
  const restart = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const held = hovered || focused || !onScreen || document.querySelector(".lightbox.open");
      held ? restart() : next();
    }, 6000);
  };
  restart.stop = () => clearTimeout(timer);
  return restart;
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
  certDots.querySelectorAll("button").forEach((d, k) => d.setAttribute("aria-current", String(k === certIndex)));
  certAuto();
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
  // Dots under the carousel, like the projects: show which one you're on, click to jump
  certDots.innerHTML = certData
    .map((c, i) => `<button type="button" data-index="${i}" aria-label="${escHtml(c.title[lang].replace(/\n/g, " "))}"></button>`)
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
  certDots.addEventListener("click", (e) => {
    const dot = e.target.closest("button");
    if (dot) showCert(Number(dot.dataset.index));
  });
  const certViewer = document.getElementById("certViewer");
  certViewer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showCert(certIndex - 1);
    else if (e.key === "ArrowRight") showCert(certIndex + 1);
  });
  certAuto = autoAdvance(certViewer, () => showCert(certIndex + 1));
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
  return `<div class="project__visual project__visual--plain">${coverHtml(p)}</div>`;
}

// Cover for a card: the cover picture, or (no image: / youtube: yet) a plain cover with the
// name on it, tinted with the project's status colour.
function coverHtml(p, imgAttrs = "") {
  const src = coverSrc(p);
  if (src) return `<img src="${src}" alt=""${imgAttrs} />`;
  return `<div class="cover-ph cover-ph--${filterOf(p)}">
      <span class="cover-ph__title">${escHtml(p.title)}</span>
      ${p.meta ? `<span class="cover-ph__meta">${escHtml(p.meta)}</span>` : ""}
    </div>`;
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
const homeProjects = projectData.filter((p) => p.home !== false); // home: false = games page only
let projIndex = 0;
let projAuto = () => {}; // restarts the auto slide (set up with the carousel below)

// Status tag (Released / In development / ...), coloured by the project's filter:
// released green, dev yellow, prototype cyan, etc pink (see .tag--status in styles.css).
const filterOf = (p) => p.filter || "etc";
const statusTag = (p, t) => (p.status ? `<span class="tag tag--status tag--${filterOf(p)}">${t(p.status)}</span>` : "");

function steamCard(p, i, lang) {
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  return `
    <a class="box steam-card" href="/${p.page}" data-index="${i}" draggable="false">
      <div class="steam-card__media">${coverHtml(p, ' draggable="false"')}</div>
      <div class="steam-card__info">
        <h3 class="steam-card__title">${escHtml(p.title)}</h3>
        <p class="steam-card__desc">${t(p.desc)}</p>
        ${p.tech ? `<ul class="tech">${p.tech.map((n) => techTag(n, false)).join("")}</ul>` : ""}
        <div class="steam-card__foot">
          ${statusTag(p, t)}
          ${p.meta ? `<span class="project__meta">${escHtml(p.meta)}</span>` : ""}
        </div>
      </div>
    </a>`;
}

// Hover preview: the project's gif: picture (a short gameplay clip) plays over its cover
// (a .steam-card__media box, used by the home carousel and the games page tiles).
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
  const n = homeProjects.length;
  projIndex = ((i % n) + n) % n;
  projTrack.querySelectorAll(".steam-card").forEach((card, k) => {
    const on = k === projIndex;
    card.classList.toggle("is-active", on);
    card.inert = !on; // hidden cards can't be tabbed to or read out
    if (!on) stopPreview(card);
  });
  // Grey side games show the previous / next project
  [["prev", -1, "Previous"], ["next", 1, "Next"]].forEach(([side, d, label]) => {
    const p = homeProjects[(projIndex + d + n) % n];
    const btn = projTrack.querySelector(`.steam-side--${side}`);
    btn.querySelector("img").src = coverSrc(p);
    btn.setAttribute("aria-label", `${label} project: ${p.title}`);
  });
  projAuto();
  projDots.querySelectorAll("button").forEach((d, k) => d.setAttribute("aria-current", String(k === projIndex)));
}

function renderProjects(lang) {
  if (!projTrack) return;
  projTrack.innerHTML =
    `<button class="steam-side steam-side--prev" type="button" data-step="-1"><img alt="" draggable="false" /></button>
     <button class="steam-side steam-side--next" type="button" data-step="1"><img alt="" draggable="false" /></button>` +
    homeProjects.map((p, i) => steamCard(p, i, lang)).join("");
  projDots.innerHTML = homeProjects
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
  // Mouse only: hover a card to play its clip (the auto slide holds still meanwhile).
  if (canHover) {
    projTrack.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".steam-card.is-active");
      if (card) playPreview(card.querySelector(".steam-card__media"), homeProjects[card.dataset.index]);
    });
    viewer.addEventListener("mouseleave", () => projTrack.querySelectorAll(".steam-card").forEach(stopPreview));
  }
  projAuto = autoAdvance(viewer, () => showProject(projIndex + 1));
}

// ===== Games page (games.html): every project as a tile, with filter buttons =====
const gameGrid = document.getElementById("gameGrid");
const gameFilters = document.getElementById("gameFilters");
const gameEmpty = document.getElementById("gameEmpty");
const FILTERS = ["all", "released", "dev", "prototype", "etc"]; // labels: games.filter.* in content.js
// /games#released opens with that filter chosen (the game pages' breadcrumb links there)
let gameFilter = FILTERS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "all";

function renderGames(lang) {
  if (!gameGrid) return;
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  const tr = translations[lang];
  // Filter buttons, each with how many projects it shows
  gameFilters.setAttribute("aria-label", tr["games.filter"]);
  gameFilters.innerHTML = FILTERS.map((f) => {
    const n = f === "all" ? projectData.length : projectData.filter((p) => filterOf(p) === f).length;
    return `<button type="button" data-filter="${f}">${tr["games.filter." + f]}<span class="filter-pill__count">${n}</span></button>`;
  }).join("");
  gameGrid.innerHTML = projectData
    .map((p, i) => `
      <a class="box game-tile" href="/${p.page}" data-index="${i}" data-filter="${filterOf(p)}">
        <div class="steam-card__media">${coverHtml(p, ' loading="lazy"')}</div>
        <div class="game-tile__info">
          <h2 class="game-tile__title">${escHtml(p.title)}</h2>
          <p class="game-tile__desc">${t(p.short || p.desc)}</p>
          <div class="game-tile__foot">
            ${statusTag(p, t)}
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
  applyGameFilter();
}

// Show only the tiles of the chosen filter (all of them for "all")
function applyGameFilter() {
  gameFilters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === gameFilter)));
  let shown = 0;
  gameGrid.querySelectorAll(".game-tile").forEach((tile) => {
    tile.hidden = gameFilter !== "all" && tile.dataset.filter !== gameFilter;
    if (!tile.hidden) shown++;
  });
  gameEmpty.hidden = shown > 0;
}

if (gameFilters) {
  gameFilters.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    gameFilter = b.dataset.filter;
    history.replaceState(null, "", location.pathname + (gameFilter === "all" ? "" : "#" + gameFilter));
    applyGameFilter();
  });
}

// ===== Game page (help-your-waifu.html, lost-dept.html, ...): Steam-style store page =====
// Every game page is the same empty shell; the file name says which project from
// projectData (its page: field) to show. Layout, top to bottom:
//   breadcrumb + title
//   gallery (big viewer + thumbnail strip) | info box (cover, description, Roblox stats, facts, tags)
//   play bar
//   story sections (About / What I did / What I learned / Devlog) | sidebar (highlights, built with)
// Each story section shows its short text from content.js; "Read more" fetches the rest from
// story/<page>/<section>.<lang>.md only when pressed, so the page itself stays small.
const gameRoot = document.getElementById("game");
const gamePage = location.pathname.split("/").pop().replace(/\.html$/, "");
const STORY = ["about", "did", "learned", "devlog"]; // section order; titles: game.story.* in content.js
const storyOpen = new Set(); // sections the visitor expanded (re-opened after a language switch)
const storyCache = new Map(); // "section.lang" -> rendered HTML
let statsPromise = null; // stats.json, fetched once and only on pages of Roblox games

// A GitHub repo link (repo: in content.js), labelled with the repo's name
const repoLink = (url) =>
  `<a href="${escHtml(url)}" target="_blank" rel="noopener"><img src="assets/logo/GitHub_Invertocat_Logo.svg" alt="" />${escHtml(url.replace(/\/+$/, "").split("/").pop())} ↗</a>`;

// ----- Gallery carousel (Steam-style) -----
// The video plays first, muted and on its own (browsers only autoplay without sound); when it
// ends, the pictures slide by every 6 seconds. Arrows, thumbnails, swipe and ←/→ move it by
// hand, and picking the video yourself plays it with sound. Holds still on hover and while
// off screen (autoAdvance). Built once per page, so a language switch never restarts the video.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let galleryIndex = 0;
let galleryAuto = () => {}; // restarts the picture timer (set up in startGallery)
let gallerySwiped = () => false; // true once for the click a swipe ends with
let ytPlayer = null;
let ytApi = null;

// Gallery items: media: from content.js, or else the one video / picture the project has
function galleryOf(p) {
  if (p.media) return p.media;
  if (p.youtube) return [{ youtube: p.youtube, playlist: p.playlist }];
  if (p.image) return [{ image: p.image }];
  return [];
}
const thumbOf = (m) => m.thumb || (m.youtube ? `https://i.ytimg.com/vi/${m.youtube}/mqdefault.jpg` : m.image);
// A picture, or a video's cover with a play button
const galleryView = (p, m) =>
  m ? projectMedia({ title: p.title, youtube: m.youtube, playlist: m.playlist, image: m.image || m.cover }) : projectMedia(p);

function galleryHtml(p) {
  const items = galleryOf(p);
  const many = items.length > 1;
  return `<div class="gallery">
      <div class="gallery__stage">
        <div class="gallery__view">${galleryView(p, items[0])}</div>
        ${many ? `<button class="gallery__nav gallery__nav--prev" type="button" data-step="-1"></button>
        <button class="gallery__nav gallery__nav--next" type="button" data-step="1"></button>` : ""}
      </div>
      ${many ? `<div class="gallery__strip">${items.map((m, i) => `
        <button class="gallery__thumb" type="button" data-media="${i}" aria-current="${i === 0}" aria-label="${escHtml(p.title)} ${i + 1} / ${items.length}">
          <img src="${thumbOf(m)}" alt="" loading="lazy" draggable="false" />${m.youtube ? `<span class="gallery__play" aria-hidden="true"></span>` : ""}
        </button>`).join("")}</div>` : ""}
    </div>`;
}

// YouTube's player API (only to know when the video ends), loaded the first time it's needed
function loadYouTubeApi() {
  ytApi ||= new Promise((resolve, reject) => {
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return ytApi;
}

// Show item i. play: "muted" (page entry) or true (the visitor picked it) starts a video.
function showMedia(p, i, play = false) {
  const items = galleryOf(p);
  const view = gameRoot.querySelector(".gallery__view");
  if (!items.length || !view) return;
  galleryIndex = (i + items.length) % items.length;
  const m = items[galleryIndex];
  ytPlayer?.destroy();
  ytPlayer = null;
  gameRoot.querySelectorAll("[data-media]").forEach((b, k) => {
    b.setAttribute("aria-current", String(k === galleryIndex));
    if (k === galleryIndex) { // keep the current thumbnail in view, centred in the strip
      const strip = b.parentElement;
      strip.scrollTo({ left: b.offsetLeft - strip.offsetLeft - (strip.clientWidth - b.offsetWidth) / 2, behavior: "smooth" });
    }
  });
  if (m.youtube && play) {
    galleryAuto.stop?.(); // a playing video moves on when it ends, not on the timer
    view.innerHTML = `<div class="project__visual"><div id="ytPlayer"></div></div>`;
    loadYouTubeApi()
      .then((YT) => {
        if (items[galleryIndex] !== m || !document.getElementById("ytPlayer")) return; // moved on meanwhile
        ytPlayer = new YT.Player("ytPlayer", {
          host: "https://www.youtube-nocookie.com",
          videoId: m.youtube,
          playerVars: { autoplay: 1, mute: play === "muted" ? 1 : 0, playsinline: 1, rel: 0, ...(m.playlist ? { listType: "playlist", list: m.playlist } : {}) },
          events: { onStateChange: (e) => e.data === YT.PlayerState.ENDED && showMedia(p, galleryIndex + 1) },
        });
      })
      .catch(() => { // YouTube blocked: its cover with a play button instead
        view.innerHTML = galleryView(p, m);
        galleryAuto();
      });
    return;
  }
  view.innerHTML = galleryView(p, m);
  if (items.length > 1) {
    galleryAuto();
    const next = items[(galleryIndex + 1) % items.length];
    if (next.image) new Image().src = next.image; // fetched ahead, so it shows at once
  }
}

function startGallery(p) {
  const gallery = gameRoot.querySelector(".gallery");
  if (galleryOf(p).length > 1) {
    galleryAuto = autoAdvance(gallery, () => showMedia(p, galleryIndex + 1));
    gallerySwiped = addSwipe(gallery.querySelector(".gallery__view"), (d) => showMedia(p, galleryIndex + d, true));
    gallery.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") showMedia(p, galleryIndex - 1, true);
      else if (e.key === "ArrowRight") showMedia(p, galleryIndex + 1, true);
    });
  }
  showMedia(p, 0, reduceMotion ? false : "muted");
}

// Roblox stats (visits, likes, favourites) from stats.json, refreshed by tools/update_stats.py.
// The Roblox API can't be read from another website, so the numbers are a dated snapshot.
const isRoblox = (p) => /roblox\.com\/games\//.test(p.link?.url || "");
function loadStats() {
  statsPromise ||= fetch("stats.json", { cache: "no-cache" }).then((r) => (r.ok ? r.json() : null)).catch(() => null);
  return statsPromise;
}
// Thumb icon (Material Icons "thumb_up", Apache 2.0); the thumbs-down one is it turned upside down
const THUMB = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>`;

function statsHtml(p, s, stats, lang) {
  const tr = translations[lang];
  const locale = lang === "th" ? "th-TH" : "en-US";
  const num = (n) => Number(n).toLocaleString(locale);
  const date = (d) => new Date(d + "T00:00:00").toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
  const votes = s.upVotes + s.downVotes;
  const pct = votes ? Math.round((s.upVotes / votes) * 100) : null;
  // Roblox-style like / dislike buttons; they open the game on Roblox, where the vote really counts
  const thumb = (dir, n, key) => `
    <a class="rating__btn rating__btn--${dir}" href="${p.link.url}" target="_blank" rel="noopener" title="${tr["game.rateOn"]}" aria-label="${tr[key].replace("{n}", num(n))} · ${tr["game.rateOn"]}">
      ${THUMB}<span>${num(n)}</span>
    </a>`;
  const row = (k, v) => `<div><dt class="label">${tr[k]}</dt><dd>${v}</dd></div>`;
  return `<div class="rating">
      ${thumb("up", s.upVotes, "game.likes")}${thumb("down", s.downVotes, "game.dislikes")}
      <div class="rating__bar" aria-hidden="true"><span style="width: ${pct ?? 0}%"></span></div>
      <p class="rating__pct">${pct === null ? tr["game.noVotes"] : tr["game.liked"].replace("{pct}", pct)}</p>
    </div>
    <dl class="game__facts">
      ${row("game.visits", num(s.visits))}${row("game.favorites", num(s.favorites))}${row("game.updated", date(s.updated))}
    </dl>
    <p class="game__note">${tr["game.statsNote"].replace("{date}", date(stats.updated))}</p>`;
}

// Tiny Markdown → HTML for the story files: # / ## / ### subheadings, paragraphs, - / 1. lists, > quotes,
// ``` code blocks, **bold**, *italic*, `code`, [links](url) and ![pictures](src).
function renderMarkdown(md) {
  const safe = (u) => /^(https?:\/\/|\/|assets\/|story\/|#)/.test(u);
  const inline = (s) => escHtml(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, src) => (safe(src) ? `<img src="${src}" alt="${alt}" loading="lazy" />` : ""))
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, txt, href) => (safe(href) ? `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${txt}</a>` : txt))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  const out = [];
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  for (let i = 0; i < lines.length; ) {
    const line = lines[i];
    if (/^```/.test(line)) { // code block, kept as typed
      const code = [];
      for (i++; i < lines.length && !/^```/.test(lines[i]); i++) code.push(lines[i]);
      i++;
      out.push(`<pre><code>${escHtml(code.join("\n"))}</code></pre>`);
    } else if (/^#{1,3}\s/.test(line)) { // any heading is a subheading of its section
      out.push(`<h3>${inline(line.replace(/^#+\s*/, ""))}</h3>`);
      i++;
    } else if (/^\s*([-*]|\d+\.)\s/.test(line)) {
      const ordered = /^\s*\d+\./.test(line);
      const items = [];
      for (; i < lines.length && /^\s*([-*]|\d+\.)\s/.test(lines[i]); i++) items.push(`<li>${inline(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ""))}</li>`);
      out.push(ordered ? `<ol>${items.join("")}</ol>` : `<ul>${items.join("")}</ul>`);
    } else if (/^>\s?/.test(line)) {
      const quote = [];
      for (; i < lines.length && /^>\s?/.test(lines[i]); i++) quote.push(lines[i].replace(/^>\s?/, ""));
      out.push(`<blockquote>${inline(quote.join(" "))}</blockquote>`);
    } else if (!line.trim()) {
      i++;
    } else {
      const para = [];
      for (; i < lines.length && lines[i].trim() && !/^(```|#{1,3}\s|\s*([-*]|\d+\.)\s|>)/.test(lines[i]); i++) para.push(lines[i]);
      out.push(`<p>${inline(para.join(" "))}</p>`);
    }
  }
  return out.join("\n");
}

async function loadStory(id, lang) {
  const key = `${id}.${lang}`;
  if (!storyCache.has(key)) {
    let res = await fetch(`story/${gamePage}/${id}.${lang}.md`);
    if (!res.ok && lang !== "en") res = await fetch(`story/${gamePage}/${id}.en.md`); // no Thai file yet
    if (!res.ok) throw new Error(`story ${id}: ${res.status}`);
    storyCache.set(key, renderMarkdown(await res.text()));
  }
  return storyCache.get(key);
}

// Read more / Show less for one story section
async function setStory(id, open) {
  const lang = currentLang();
  const tr = translations[lang];
  const box = document.getElementById(`more-${id}`);
  const btn = gameRoot.querySelector(`[data-story="${id}"]`);
  if (!box || !btn) return;
  if (!open) {
    storyOpen.delete(id);
    box.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = tr["game.more"];
    const section = btn.closest(".story");
    if (section.getBoundingClientRect().top < 0) section.scrollIntoView({ block: "start" }); // back to its heading
    return;
  }
  storyOpen.add(id);
  btn.disabled = true;
  btn.textContent = tr["game.loading"];
  try {
    box.innerHTML = await loadStory(id, lang);
    box.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.textContent = tr["game.less"];
  } catch {
    storyOpen.delete(id);
    btn.textContent = tr["game.loadFail"];
  }
  btn.disabled = false;
}

function storyHtml(p, lang) {
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  const tr = translations[lang];
  return STORY.filter((id) => p.story[id]).map((id) => `
    <section class="story" id="story-${id}">
      <h2 class="game__heading">${tr["game.story." + id]}</h2>
      <p class="story__intro">${t(p.story[id])}</p>
      ${p.story[id].more ? `
      <div class="story__more md" id="more-${id}" hidden></div>
      <button class="story__toggle" type="button" data-story="${id}" aria-expanded="false" aria-controls="more-${id}">${tr["game.more"]}</button>` : ""}
    </section>`).join("");
}

function renderGame(lang) {
  if (!gameRoot) return;
  const p = projectData.find((x) => x.page === gamePage);
  if (!p) return location.replace("/");
  const t = (o) => escHtml(o ? o[lang] || o.en : "");
  const tr = translations[lang];
  const f = filterOf(p);
  const cover = coverSrc(p);
  const highlights = p.story && p.points; // with story sections, the points become a sidebar list
  document.title = `${p.title} | Phunn`;
  // The page shell and gallery are built once (a language switch must not restart the
  // video); the parts with text are filled in again for each language.
  if (!gameRoot.firstElementChild) {
    gameRoot.innerHTML = `
      <div class="container">
        <nav class="game__crumbs" aria-label="Breadcrumb" data-part="crumbs"></nav>
        <h1 class="game__title">${escHtml(p.title)}</h1>
        <div class="game__top">
          ${galleryHtml(p)}
          <aside class="box game__side" data-part="side"></aside>
        </div>
        <div data-part="play"></div>
        <div class="game__body" data-part="body"></div>
      </div>`;
    startGallery(p);
  }
  const part = (name, html) => (gameRoot.querySelector(`[data-part="${name}"]`).innerHTML = html);
  part("crumbs", `<a href="/games">${tr["game.back"]}</a><span aria-hidden="true">›</span><a href="/games#${f}">${tr["games.filter." + f]}</a>`);
  part("side", `
    ${cover && p.media ? `<img class="game__capsule" src="${cover}" alt="" draggable="false" />` : ""}
    <p class="game__desc">${t(p.desc)}</p>
    ${isRoblox(p) ? `<div id="gameStats" hidden></div>` : ""}
    <dl class="game__facts">
      ${p.status ? `<div><dt class="label">${tr["game.status"]}</dt><dd>${statusTag(p, t)}</dd></div>` : ""}
      ${p.meta ? `<div><dt class="label">${tr["game.platform"]}</dt><dd>${escHtml(p.meta)}</dd></div>` : ""}
      ${p.team ? `<div><dt class="label">${tr["game.team"]}</dt><dd>${t(p.team)}</dd></div>` : ""}
      ${p.repo ? `<div><dt class="label">${tr["game.code"]}</dt><dd class="game__repos">${[].concat(p.repo).map(repoLink).join("")}</dd></div>` : ""}
    </dl>
    ${p.tags ? `<ul class="game__tags">${p.tags.map((x) => `<li>${escHtml(x)}</li>`).join("")}</ul>` : ""}`);
  part("play", p.link ? `
    <div class="box game__play">
      <h2>${tr["game.play"]} ${escHtml(p.title)}</h2>
      <a class="btn btn--primary" href="${p.link.url}" target="_blank" rel="noopener">${t(p.link.label)} ↗</a>
    </div>` : "");
  part("body", `
    <div class="game__main">
      ${p.story ? storyHtml(p, lang) : `
      <section class="story">
        <h2 class="game__heading">${tr["game.about"]}</h2>
        ${p.role ? `<p class="project__role">${t(p.role)}</p>` : ""}
        ${p.points ? `<ul class="project__points">${p.points.map((x) => `<li>${t(x)}</li>`).join("")}</ul>` : ""}
      </section>`}
    </div>
    <aside class="game__aside">
      ${highlights ? `
      <div class="box game__panel">
        <h2 class="label">${tr["game.highlights"]}</h2>
        <ul class="project__points">${p.points.map((x) => `<li>${t(x)}</li>`).join("")}</ul>
      </div>` : ""}
      ${p.tech ? `
      <div class="box game__panel">
        <h2 class="label">${tr["game.builtWith"]}</h2>
        <ul class="tech">${p.tech.map((n) => techTag(n, true)).join("")}</ul>
      </div>` : ""}
    </aside>`);
  gameRoot.querySelectorAll(".gallery__nav").forEach((b) => b.setAttribute("aria-label", tr[b.dataset.step === "-1" ? "game.prev" : "game.next"]));
  if (isRoblox(p)) {
    loadStats().then((stats) => {
      const s = stats?.games?.[p.page];
      const box = document.getElementById("gameStats");
      if (!s || !box || currentLang() !== lang) return;
      box.innerHTML = statsHtml(p, s, stats, lang);
      box.hidden = false;
    });
  }
  storyOpen.forEach((id) => setStory(id, true)); // keep what was open, now in the new language
}

if (gameRoot) {
  gameRoot.addEventListener("click", (e) => {
    const p = projectData.find((x) => x.page === gamePage);
    const thumb = e.target.closest("[data-media]");
    if (thumb) return showMedia(p, Number(thumb.dataset.media), true);
    const nav = e.target.closest(".gallery__nav");
    if (nav) return showMedia(p, galleryIndex + Number(nav.dataset.step), true);
    const cover = e.target.closest(".gallery [data-yt]");
    if (cover) { // the gallery plays its video itself (so it can move on when it ends)
      e.stopPropagation();
      if (!gallerySwiped()) showMedia(p, galleryIndex, true);
      return;
    }
    const btn = e.target.closest("[data-story]");
    if (btn && !btn.disabled) setStory(btn.dataset.story, btn.getAttribute("aria-expanded") !== "true");
  });
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
