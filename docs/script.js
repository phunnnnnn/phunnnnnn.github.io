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
    "certs.c1Tag": "Course",
    "certs.c1Title": "Certificate title",
    "certs.c1Issuer": "Issuer · Year",
    "certs.c1Link": "View credential →",
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
    "certs.c1Tag": "คอร์ส",
    "certs.c1Title": "ชื่อใบรับรอง",
    "certs.c1Issuer": "ผู้ออก · ปี",
    "certs.c1Link": "ดูใบรับรอง →",
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
