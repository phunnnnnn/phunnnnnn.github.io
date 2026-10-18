// ===== Current year in footer =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Translations (EN / TH) =====
const translations = {
  en: {
    "nav.work": "Work",
    "nav.info": "Info",
    "nav.role": "Game Developer",
    "hero.headline": 'I build games, systems &amp; <em class="serif">worlds.</em>',
    "about.kicker": "01 / About",
    "about.title": "A little about me",
    "about.p1": "I'm Phunn — a freelance game developer, currently focused on the Roblox platform.",
    "about.p2": "The project I'm working on right now is AutoBlox — a game inspired by\nRiot's TFT.\nI'm always exploring new ideas and happy to take on freelance work.",
    "about.factName": "Name",
    "about.factNameVal": "Pannatat Chaikaew",
    "about.factNick": "Nickname",
    "about.factNickVal": "Phunn",
    "about.factWork": "Freelance",
    "about.factWorkVal": "Available for hire",
    "projects.title": "Things I've built",
    "projects.autobloxTag": "In development",
    "projects.autobloxDesc": "An auto-battler game inspired by Riot's TFT. Build your team, place it on the board, and watch the fight play out.",
    "certs.title": "Certificates",
    "certs.lead": "Highlights from competitions, camps, and workshops. Use the arrows or swipe. Click the middle one to view it full size.",
    "contact.title": 'Let\'s build <em class="serif">something.</em>',
    "contact.lead": "Want to hire me or just chat about a project? Reach out through any of these — I'm always happy to hear from you.",
    "contact.hire": "Hire me on Fastwork",
  },
  th: {
    "nav.work": "ผลงาน",
    "nav.info": "ข้อมูล",
    "nav.role": "นักพัฒนาเกม",
    "hero.headline": 'ผมสร้างเกม ระบบ และ <em class="serif">โลก</em> ของมัน',
    "about.kicker": "01 / เกี่ยวกับ",
    "about.title": "เกี่ยวกับผม",
    "about.p1": "ผมชื่อปุณณ์ เป็นฟรีแลนส์สายสร้างเกม โดยตอนนี้แน่นไปที่แพลตฟอร์ม Roblox ",
    "about.p2": "โปรเจกต์ที่ผมกำลังทำตอนนี้คือ AutoBlox เป็นเกมที่ได้รับแรงบันดาลใจมาจาก\nTFT ของ riot ครับ \nผมชอบมองหาไอเดียใหม่ ๆ อยู่เสมอ และยินดีรับงานฟรีแลนซ์",
    "about.factName": "ชื่อ",
    "about.factNameVal": "ปัณณทัต ไชยแก้ว",
    "about.factNick": "ชื่อเล่น",
    "about.factNickVal": "ปุณณ์",
    "about.factWork": "ฟรีแลนซ์",
    "about.factWorkVal": "รับงาน",
    "projects.title": "สิ่งที่ผมสร้าง",
    "projects.autobloxTag": "กำลังพัฒนา",
    "projects.autobloxDesc": "เกมแนว auto-battler ที่ได้แรงบันดาลใจจาก TFT ของ Riot จัดทีม วางตัวบนกระดาน แล้วดูการต่อสู้",
    "certs.title": "เกียรติบัตร",
    "certs.lead": "ผลงานจากการแข่งขัน ค่าย และการอบรม กดลูกศรหรือปัดได้เลย คลิกภาพตรงกลางเพื่อดูขนาดเต็มครับ",
    "contact.title": 'มาสร้าง <em class="serif">อะไรสักอย่าง</em> กัน',
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์ ?ติดต่อผมได้ทุกช่องทางเลยครับผมยินดีเสมอ",
    "contact.hire": "จ้างผมผ่าน Fastwork",
  },
};

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

// ===== Certificates data =====
// Shown in this order. Images live in assets/certs/{thumb,full}/<file>.jpg;
// `tag`/`title`/`meta` are bilingual, `badge` (optional) shows a medal ribbon.
const certData = [
  {
    file: "posn-camp2",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 2", th: "สอวน. คอมพิวเตอร์ — ค่าย 2" },
    meta: { en: "Faculty of Science, CMU · Mar–Apr 2026", th: "คณะวิทยาศาสตร์ ม.เชียงใหม่ · มี.ค.–เม.ย. 2569" },
  },
  {
    file: "posn-camp1",
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 1", th: "สอวน. คอมพิวเตอร์ — ค่าย 1" },
    meta: { en: "Yupparaj Wittayalai Center · Oct 2024", th: "ศูนย์ ร.ร.ยุพราชวิทยาลัย · ต.ค. 2567" },
  },
  {
    file: "camt-gamedev-2026",
    tag: { en: "Game Dev", th: "พัฒนาเกม" },
    title: { en: "Game Development with Unreal Engine", th: "การพัฒนาเกมด้วย Unreal Engine" },
    meta: { en: "CAMT Summer Course 2026, CMU · May 2026", th: "CAMT Summer Course 2026, ม.เชียงใหม่ · พ.ค. 2569" },
  },
  {
    file: "gold-programming-2025",
    badge: { kind: "gold", en: "🥇 1st Place", th: "🥇 ชนะเลิศ" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Computer Programming — Gold Medal, 1st Place", th: "การเขียนโปรแกรมคอมพิวเตอร์ — เหรียญทอง ชนะเลิศ" },
    meta: { en: "73rd Regional Academic Fair, Chiang Rai · Sep 2025", th: "ศิลปหัตถกรรมฯ ครั้งที่ 73 ระดับเขต เชียงราย · ก.ย. 2568" },
  },
  {
    file: "mfu-hackathon-honorable",
    tag: { en: "Hackathon", th: "แฮกกาธอน" },
    title: { en: "Hackathon (Team) — Honorable Mention", th: "แฮกกาธอน (ทีม) — รางวัลชมเชย" },
    meta: { en: "ADT Open Space 2025, MFU · 2025", th: "ADT Open Space 2025, ม.แม่ฟ้าหลวง · 2568" },
  },
  {
    file: "boardgame-instructor-2025",
    tag: { en: "Instructor", th: "วิทยากร" },
    title: { en: "Science Day Board Game — Station Instructor", th: "วันวิทยาศาสตร์ บอร์ดเกม — วิทยากรประจำฐาน" },
    meta: { en: "Damrongratsongkroh School · Aug 2025", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · ส.ค. 2568" },
  },
  {
    file: "ccru-esport-2024",
    tag: { en: "Workshop", th: "อบรม" },
    title: { en: "e-Sport (VALORANT) Workshop", th: "อบรม e-Sport (VALORANT)" },
    meta: { en: "Innovation Day 2024, CRRU · Jul 2024", th: "Innovation Day 2024, ม.ราชภัฏเชียงราย · ก.ค. 2567" },
  },
];

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
