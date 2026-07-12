// ===== Current year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Translations (EN / TH) =====
const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.certs": "Certificates",
    "nav.contact": "Contact",
    "hero.eyebrow": "Hi there, I'm",
    "hero.name": "Phunn",
    "hero.role": 'Freelance <span class="accent">Game</span> Developer',
    "hero.bio": "I create and develop games.\nSomeday I hope to stand on my own with this craft.\nWelcome to my portfolio website.",
    "hero.cta1": "View my work",
    "hero.cta2": "Get in touch",
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
    "projects.kicker": "02 / Projects",
    "projects.title": "Things I've built",
    "projects.autobloxTag": "Automation",
    "projects.autobloxDesc": "My flagship project — an automation tool built to streamline workflows and take the manual effort out of everyday tasks.",
    "projects.autobloxLink": "Learn more →",
    "skills.kicker": "03 / Skills",
    "skills.title": "Tools & technologies",
    "skills.langs": "Languages",
    "skills.tools": "Tools",
    "certs.kicker": "04 / Certificates",
    "certs.title": "Certificates",
    "certs.lead": "A few highlights from competitions, camps, and workshops. Click any certificate to view it full size.",
    "certs.moreTitle": "More certificates",
    "certs.view": "View certificate →",
    "certs.moreTag": "More",
    "certs.moreCardTitle": "View more certificates",
    "certs.moreCount": "+{n} more",
    "certs.moreCta": "See all →",
    "contact.kicker": "05 / Contact",
    "contact.title": "Let's connect",
    "contact.lead": "Want to hire me or just chat about a project? Reach out through any of these — I'm always happy to hear from you.",
    "contact.hire": "Hire me on Fastwork",
  },
  th: {
    "nav.about": "เกี่ยวกับ",
    "nav.projects": "ผลงาน",
    "nav.skills": "ทักษะ",
    "nav.certs": "ใบรับรอง",
    "nav.contact": "ช่องทางติดต่อ",
    "hero.eyebrow": "สวัสดีครับ ผมชื่อ",
    "hero.name": "ปุณณ์",
    "hero.role": 'ฟรีแลนส์สายสร้าง <span class="accent">เกม</span>',
  "hero.bio": "ผมสร้างและพัฒนาเกม\nซักวันอยากยืนได้ด้วยขาตัวเองด้วยอาชีพนี้ครับ\nยินดีต้อนรับเข้าสู่เว็บพอร์ตฟอลิโอของผมครับ",
    "hero.cta1": "ดูผลงานของผม",
    "hero.cta2": "ติดต่อผม",
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
    "projects.kicker": "02 / ผลงาน",
    "projects.title": "สิ่งที่ผมสร้าง",
    "projects.autobloxTag": "ระบบอัตโนมัติ",
    "projects.autobloxDesc": "โปรเจกต์หลักของผม — เครื่องมืออัตโนมัติที่สร้างขึ้นเพื่อทำให้ขั้นตอนการทำงานราบรื่น และลดงานที่ต้องทำเองในทุกวัน",
    "projects.autobloxLink": "ดูเพิ่มเติม →",
    "skills.kicker": "03 / ทักษะ",
    "skills.title": "เครื่องมือ & เทคโนโลยี",
    "skills.langs": "ภาษาโปรแกรม",
    "skills.tools": "เครื่องมือ",
    "certs.kicker": "04 / ใบรับรอง",
    "certs.title": "ใบรับรอง",
    "certs.lead": "ตัวอย่างผลงานจากการแข่งขัน ค่าย และการอบรม คลิกที่ใบรับรองเพื่อดูภาพขนาดเต็มได้เลยครับ",
    "certs.moreTitle": "ใบรับรองอื่น ๆ",
    "certs.view": "ดูใบรับรอง →",
    "certs.moreTag": "เพิ่มเติม",
    "certs.moreCardTitle": "ดูใบรับรองเพิ่มเติม",
    "certs.moreCount": "อีก {n} รายการ",
    "certs.moreCta": "ดูทั้งหมด →",
    "contact.kicker": "05 / ติดต่อ",
    "contact.title": "ติดต่อ & จ้างงาน",
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์? ติดต่อผมได้ทุกช่องทางเลยครับ ผมยินดีเสมอ",
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
// Each entry points at an optimized image in assets/certs/{thumb,full}/<file>.jpg.
// `tag`/`title`/`meta` are bilingual; `badge` (optional) shows a medal ribbon.
const certData = [
  // ---- Featured (shown as large cards) ----
  {
    file: "posn-camp1",
    featured: true,
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 1", th: "สอวน. คอมพิวเตอร์ — ค่าย 1" },
    meta: { en: "Yupparaj Wittayalai Center · Oct 2024", th: "ศูนย์ ร.ร.ยุพราชวิทยาลัย · ต.ค. 2567" },
  },
  {
    file: "posn-camp2",
    featured: true,
    tag: { en: "Olympiad", th: "โอลิมปิกวิชาการ" },
    title: { en: "POSN Computer Science — Camp 2", th: "สอวน. คอมพิวเตอร์ — ค่าย 2" },
    meta: { en: "Faculty of Science, CMU · Mar–Apr 2026", th: "คณะวิทยาศาสตร์ ม.เชียงใหม่ · มี.ค.–เม.ย. 2569" },
  },
  {
    file: "camt-gamedev-2026",
    featured: true,
    tag: { en: "Game Dev", th: "พัฒนาเกม" },
    title: { en: "Game Development with Unreal Engine", th: "การพัฒนาเกมด้วย Unreal Engine" },
    meta: { en: "CAMT Summer Course 2026, CMU · May 2026", th: "CAMT Summer Course 2026, ม.เชียงใหม่ · พ.ค. 2569" },
  },
  {
    file: "gold-programming-2025",
    featured: true,
    badge: { kind: "gold", en: "🥇 1st Place", th: "🥇 ชนะเลิศ" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Computer Programming — Gold Medal, 1st Place", th: "การเขียนโปรแกรมคอมพิวเตอร์ — เหรียญทอง ชนะเลิศ" },
    meta: { en: "73rd Regional Academic Fair, Chiang Rai · Sep 2025", th: "ศิลปหัตถกรรมฯ ครั้งที่ 73 ระดับเขต เชียงราย · ก.ย. 2568" },
  },
  {
    file: "gold-robotics-2024",
    featured: true,
    badge: { kind: "gold", en: "🥇 Gold", th: "🥇 ทอง" },
    tag: { en: "Gold Medal", th: "เหรียญทอง" },
    title: { en: "Robotics (Intermediate) — Gold Medal", th: "การแข่งขันหุ่นยนต์ระดับกลาง — เหรียญทอง" },
    meta: { en: "72nd Regional Academic Fair · 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต · 2567" },
  },
  // ---- Gallery (remaining certificates) ----
  {
    file: "silver-programming-2024",
    badge: { kind: "silver", en: "🥈 Silver", th: "🥈 เงิน" },
    title: { en: "Computer Programming — Silver Medal", th: "การเขียนโปรแกรมคอมพิวเตอร์ — เหรียญเงิน" },
    meta: { en: "72nd Regional Academic Fair · 2024", th: "ศิลปหัตถกรรมฯ ครั้งที่ 72 ระดับเขต · 2567" },
  },
  {
    file: "mfu-hackathon-honorable",
    title: { en: "Hackathon (Team) — Honorable Mention", th: "แฮกกาธอน (ทีม) — รางวัลชมเชย" },
    meta: { en: "ADT Open Space 2025, MFU · 2025", th: "ADT Open Space 2025, ม.แม่ฟ้าหลวง · 2568" },
  },
  {
    file: "mfu-hackathon-participant",
    title: { en: "Hackathon (Team) — Participant", th: "แฮกกาธอน (ทีม) — เข้าร่วม" },
    meta: { en: "ADT Open Space 2025, MFU · 2025", th: "ADT Open Space 2025, ม.แม่ฟ้าหลวง · 2568" },
  },
  {
    file: "stem-robotics-trainer-2024",
    title: { en: "STEM Robotics Camp — Trainer", th: "ค่าย STEM Robotics — วิทยากร" },
    meta: { en: "Damrongratsongkroh School · Dec 2024", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · ธ.ค. 2567" },
  },
  {
    file: "boardgame-instructor-2025",
    title: { en: "Science Day Board Game — Station Instructor", th: "วันวิทยาศาสตร์ บอร์ดเกม — วิทยากรประจำฐาน" },
    meta: { en: "Damrongratsongkroh School · Aug 2025", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · ส.ค. 2568" },
  },
  {
    file: "ai-coding-innovation-2025",
    title: { en: "AI & Coding Innovation Workshop", th: "อบรม AI & Coding Innovation" },
    meta: { en: "Sci–Math–Computer Program · Jun 2025", th: "ห้องเรียนพิเศษ วิทย์–คณิต–คอม · มิ.ย. 2568" },
  },
  {
    file: "coding-course-2024",
    title: { en: "Coding Course Workshop", th: "อบรม Coding Course" },
    meta: { en: "Sci–Math–Computer Program · Dec 2024", th: "ห้องเรียนพิเศษ วิทย์–คณิต–คอม · ธ.ค. 2567" },
  },
  {
    file: "coding-basic-2025",
    title: { en: "Basic Coding for Beginners", th: "อบรม Basic Coding for Beginners" },
    meta: { en: "ICT Talent Program · Aug 2025", th: "ส่งเสริมศักยภาพด้าน ICT · ส.ค. 2568" },
  },
  {
    file: "coding-basic-2024",
    title: { en: "Basic Coding for Beginners", th: "อบรม Basic Coding for Beginners" },
    meta: { en: "ICT Talent Program · Aug 2024", th: "ส่งเสริมศักยภาพด้าน ICT · ส.ค. 2567" },
  },
  {
    file: "scientist-cosplay-2024",
    title: { en: "Scientist Cosplay — 2nd Runner-up", th: "คอสเพลย์นักวิทยาศาสตร์ — รองชนะเลิศอันดับ 2" },
    meta: { en: "Science Day · Aug 2024", th: "วันวิทยาศาสตร์ · ส.ค. 2567" },
  },
  {
    file: "sports-committee-2024",
    title: { en: "Internal Sports — Organizing Committee", th: "กีฬาภายใน — คณะกรรมการ" },
    meta: { en: "Damrongratsongkroh School · Nov 2024", th: "ร.ร.ดำรงราษฎร์สงเคราะห์ · พ.ย. 2567" },
  },
  {
    file: "ccru-esport-2024",
    title: { en: "e-Sport (VALORANT) Workshop", th: "อบรม e-Sport (VALORANT)" },
    meta: { en: "Innovation Day 2024, CRRU · Jul 2024", th: "Innovation Day 2024, ม.ราชภัฏเชียงราย · ก.ค. 2567" },
  },
  {
    file: "military-cadet-cmd-2026",
    title: { en: "Territorial Defense — Commanding Cadet", th: "นักศึกษาวิชาทหาร — ผู้บังคับบัญชา" },
    meta: { en: "Field Training, Military Circle 37 · Feb 2026", th: "ฝึกภาคสนาม มทบ.37 · ก.พ. 2569" },
  },
  {
    file: "military-tower-2025",
    title: { en: "Territorial Defense — 34ft Tower Jump", th: "นักศึกษาวิชาทหาร — กระโดดหอสูง 34 ฟุต" },
    meta: { en: "Royal Thai Army · Sep 2025", th: "กองทัพบก · ก.ย. 2568" },
  },
];

// Escape user-facing strings before injecting into markup.
function escHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

const certsFeaturedEl = document.getElementById("certsFeatured");
const certsGalleryEl = document.getElementById("certsGallery");
const certsMoreEl = document.getElementById("certsMore");

function certBadge(cert, lang) {
  if (!cert.badge) return "";
  return `<span class="cert-badge cert-badge--${cert.badge.kind}">${escHtml(cert.badge[lang])}</span>`;
}

function renderCerts(lang) {
  if (!certsFeaturedEl || !certsGalleryEl) return;
  const viewLabel = translations[lang]["certs.view"];

  // The first five featured certs fill the large slots; the final slot is a
  // "view more" tile that reveals the rest of the gallery.
  const featured = certData.filter((c) => c.featured).slice(0, 5);
  const gallery = certData.filter((c) => !c.featured);

  const featuredCards = featured
    .map((c) => {
      const title = escHtml(c.title[lang]);
      const meta = escHtml(c.meta[lang]);
      const caption = escHtml(c.title[lang] + " · " + c.meta[lang]);
      return `
      <article class="card card--cert" role="button" tabindex="0"
               data-cert-full="assets/certs/full/${c.file}.jpg" data-cert-caption="${caption}">
        <div class="cert-thumb-wrap">
          ${certBadge(c, lang)}
          <img src="assets/certs/thumb/${c.file}.jpg" alt="${title}" loading="lazy" />
        </div>
        <div class="card__body">
          <span class="card__tag">${escHtml(c.tag[lang])}</span>
          <h3 class="card__title">${title}</h3>
          <p class="card__desc">${meta}</p>
          <span class="card__view">${escHtml(viewLabel)}</span>
        </div>
      </article>`;
    })
    .join("");

  // Fifth slot: reveals the remaining certificates when clicked.
  const dict = translations[lang];
  const moreTag = escHtml(dict["certs.moreTag"]);
  const moreTitle = escHtml(dict["certs.moreCardTitle"]);
  const moreCount = escHtml(dict["certs.moreCount"].replace("{n}", gallery.length));
  const moreCta = escHtml(dict["certs.moreCta"]);
  const moreCard = `
      <button class="card card--cert card--cert-more" type="button" id="certsMoreToggle"
              aria-controls="certsMore" aria-expanded="false">
        <div class="cert-thumb-wrap cert-thumb-wrap--more">
          <span class="cert-more__plus">+${gallery.length}</span>
        </div>
        <div class="card__body">
          <span class="card__tag">${moreTag}</span>
          <h3 class="card__title">${moreTitle}</h3>
          <p class="card__desc">${moreCount}</p>
          <span class="card__view">${moreCta}</span>
        </div>
      </button>`;

  certsFeaturedEl.innerHTML = featuredCards + moreCard;

  certsGalleryEl.innerHTML = gallery
    .map((c) => {
      const title = escHtml(c.title[lang]);
      const meta = escHtml(c.meta[lang]);
      const caption = escHtml(c.title[lang] + " · " + c.meta[lang]);
      return `
      <button class="cert-item" type="button"
              data-cert-full="assets/certs/full/${c.file}.jpg" data-cert-caption="${caption}">
        <div class="cert-thumb-wrap">
          ${certBadge(c, lang)}
          <img src="assets/certs/thumb/${c.file}.jpg" alt="${title}" loading="lazy" />
        </div>
        <span class="cert-item__cap">
          <span class="cert-item__title">${title}</span>
          <span class="cert-item__meta">${meta}</span>
        </span>
      </button>`;
    })
    .join("");

  // Re-render recreates the toggle button, so restore its expanded state.
  const toggle = document.getElementById("certsMoreToggle");
  if (toggle) toggle.setAttribute("aria-expanded", String(certsExpanded));
}

// Whether the extra certificates are revealed. Clicking the fifth slot toggles
// it; state is preserved across language re-renders.
let certsExpanded = false;
if (certsFeaturedEl && certsMoreEl) {
  certsFeaturedEl.addEventListener("click", (e) => {
    const toggle = e.target.closest("#certsMoreToggle");
    if (!toggle) return;
    certsExpanded = !certsExpanded;
    certsMoreEl.hidden = !certsExpanded;
    toggle.setAttribute("aria-expanded", String(certsExpanded));
    if (certsExpanded) {
      certsMoreEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
  renderCerts(lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
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

// ===== Theme toggle (persists in localStorage) =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initial = savedTheme || (prefersDark ? "dark" : "light");
root.setAttribute("data-theme", initial);
themeToggle.textContent = initial === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});

// ===== Sticky nav shadow on scroll =====
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// ===== Mobile menu =====
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(
  ".section__title, .about, .card, .skill-group, .contact__lead, .contact__actions"
);
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

// Also replay the hero name scramble when it scrolls back into view
// (observed without the reveal fade so it stays visible on load)
const heroName = document.querySelector(".hero__name.shuffle-text");
if (heroName) observer.observe(heroName);

// ===== Skill mastery tooltips =====
// Hover (or click/tap) a chip in the Skills section to see how well I know it.
// EDIT the text below to describe your real proficiency for each skill.
const skillInfo = {
  en: {
    c: "Beginner — comfortable with the basics of C.",
    cpp: "Intermediate — my go-to for Unreal Engine gameplay code.",
    lua: "Advanced — my main language for building Roblox games.",
    gdscript: "Intermediate — learning it while exploring Godot.",
    git: "Comfortable — I use it for version control every day.",
    github: "Comfortable — hosting, releases, and collaboration.",
    vscode: "Daily driver — my main code editor.",
    robloxstudio: "Advanced — my primary tool for making games.",
    godot: "Learning — building small projects to level up.",
    unreal: "Exploring — trying it out for bigger 3D projects.",
  },
  th: {
    c: "มือใหม่ — เข้าใจพื้นฐานของภาษา C",
    cpp: "ระดับกลาง — ใช้เขียนเกมเพลย์ใน Unreal Engine เป็นหลัก",
    lua: "ระดับสูง — ภาษาหลักที่ใช้สร้างเกมบน Roblox",
    gdscript: "ระดับกลาง — กำลังเรียนรู้ควบคู่กับการลองใช้ Godot",
    git: "ใช้งานคล่อง — ใช้จัดการเวอร์ชันทุกวัน",
    github: "ใช้งานคล่อง — เก็บโค้ด ปล่อยรีลีส และทำงานร่วมกับผู้อื่น",
    vscode: "ใช้ประจำ — โปรแกรมแก้โค้ดหลักของผม",
    robloxstudio: "ระดับสูง — เครื่องมือหลักในการสร้างเกม",
    godot: "กำลังเรียนรู้ — ทำโปรเจกต์เล็ก ๆ เพื่อฝึกฝน",
    unreal: "กำลังลองใช้ — สำหรับโปรเจกต์ 3D ที่ใหญ่ขึ้น",
  },
};

// One shared tooltip element, moved to whichever chip is active.
const skillTip = document.createElement("div");
skillTip.className = "skill-tip";
skillTip.setAttribute("role", "tooltip");
document.body.appendChild(skillTip);

let pinnedChip = null; // chip kept open by a click

function currentLang() {
  return document.documentElement.getAttribute("data-lang") || "en";
}

function showSkillTip(chip) {
  const key = chip.dataset.skill;
  const dict = skillInfo[currentLang()] || skillInfo.en;
  const text = dict[key] || skillInfo.en[key];
  if (!text) return;
  skillTip.textContent = text;
  skillTip.classList.add("visible");
  // Position centered above the chip, clamped to the viewport.
  const r = chip.getBoundingClientRect();
  const tipRect = skillTip.getBoundingClientRect();
  let left = r.left + r.width / 2 - tipRect.width / 2;
  left = Math.max(10, Math.min(left, window.innerWidth - tipRect.width - 10));
  let top = r.top - tipRect.height - 10;
  if (top < 10) top = r.bottom + 10; // flip below if no room above
  skillTip.style.left = left + window.scrollX + "px";
  skillTip.style.top = top + window.scrollY + "px";
}

function hideSkillTip() {
  skillTip.classList.remove("visible");
}

document.querySelectorAll(".chips li[data-skill]").forEach((chip) => {
  chip.addEventListener("mouseenter", () => {
    if (!pinnedChip) showSkillTip(chip);
  });
  chip.addEventListener("mouseleave", () => {
    if (!pinnedChip) hideSkillTip();
  });
  // Click / tap toggles a "pinned" tooltip (useful on touch devices).
  chip.addEventListener("click", (e) => {
    e.stopPropagation();
    if (pinnedChip === chip) {
      pinnedChip = null;
      hideSkillTip();
    } else {
      pinnedChip = chip;
      showSkillTip(chip);
    }
  });
  // Keyboard accessibility.
  chip.addEventListener("focus", () => showSkillTip(chip));
  chip.addEventListener("blur", () => {
    if (!pinnedChip) hideSkillTip();
  });
});

// Clicking anywhere else, or scrolling, dismisses a pinned tooltip.
document.addEventListener("click", () => {
  pinnedChip = null;
  hideSkillTip();
});
window.addEventListener("scroll", () => {
  pinnedChip = null;
  hideSkillTip();
});

// ===== Certificate lightbox =====
// Click (or press Enter/Space on) any certificate to open it full size.
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const certsSection = document.getElementById("certs");

function openLightbox(trigger) {
  const full = trigger.getAttribute("data-cert-full");
  const caption = trigger.getAttribute("data-cert-caption") || "";
  if (!full) return;
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

if (certsSection && lightbox) {
  certsSection.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-full]");
    if (trigger) openLightbox(trigger);
  });
  // Enter / Space on the role="button" featured cards.
  certsSection.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const trigger = e.target.closest(".card--cert[data-cert-full]");
    if (trigger) {
      e.preventDefault();
      openLightbox(trigger);
    }
  });

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
