// ===== Current year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Translations (EN / TH) =====
const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Hi there, I'm",
    "hero.name": "Phunn",
    "hero.role": 'Developer &amp; Creator of <span class="accent">AutoBlox</span>',
    "hero.bio": "I build tools and automation that make things easier — one project at a time. Welcome to my corner of the web.",
    "hero.cta1": "View my work",
    "hero.cta2": "Get in touch",
    "about.kicker": "01 / About",
    "about.title": "A little about me",
    "about.p1": "I'm Phunn — a developer who loves building automation tools and turning repetitive tasks into something that just runs on its own.",
    "about.p2": "My main project is AutoBlox. I'm always exploring new ideas and happy to take on freelance work. Feel free to reach out anytime.",
    "about.factName": "Name",
    "about.factNameVal": "Pannatat Chaikaew",
    "about.factNick": "Nickname",
    "about.factNickVal": "Phunn",
    "about.factFocus": "Focus",
    "about.factFocusVal": "Automation & Development",
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
    "skills.focus": "Focus Areas",
    "skills.chipAuto": "Automation",
    "skills.chipBots": "Bots",
    "skills.chipTools": "Tooling",
    "skills.tools": "Tools",
    "contact.kicker": "04 / Contact",
    "contact.title": "Let's connect",
    "contact.lead": "Want to hire me or just chat about a project? Reach out through any of these — I'm always happy to hear from you.",
    "contact.hire": "Hire me on Fastwork",
  },
  th: {
    "nav.about": "เกี่ยวกับ",
    "nav.projects": "ผลงาน",
    "nav.skills": "ทักษะ",
    "nav.contact": "ติดต่อ",
    "hero.eyebrow": "สวัสดีครับ ผมชื่อ 👋",
    "hero.name": "ปุณณ์",
    "hero.role": 'นักพัฒนา &amp; ผู้สร้าง <span class="accent">AutoBlox</span>',
    "hero.bio": "ผมสร้างเครื่องมือและระบบอัตโนมัติที่ช่วยให้ทุกอย่างง่ายขึ้น ทีละโปรเจกต์ ยินดีต้อนรับสู่พื้นที่ของผมบนเว็บครับ",
    "hero.cta1": "ดูผลงานของผม",
    "hero.cta2": "ติดต่อผม",
    "about.kicker": "01 / เกี่ยวกับ",
    "about.title": "เกี่ยวกับผม",
    "about.p1": "ผมชื่อปุณณ์ เป็นนักพัฒนาที่ชอบสร้างเครื่องมืออัตโนมัติ และเปลี่ยนงานที่ต้องทำซ้ำ ๆ ให้กลายเป็นสิ่งที่ทำงานได้เองโดยอัตโนมัติ",
    "about.p2": "โปรเจกต์หลักของผมคือ AutoBlox ผมชอบมองหาไอเดียใหม่ ๆ อยู่เสมอ และยินดีรับงานฟรีแลนซ์ ทักมาคุยกันได้ทุกเมื่อครับ",
    "about.factName": "ชื่อ",
    "about.factNameVal": "ปัณณทัต ไชยแก้ว",
    "about.factNick": "ชื่อเล่น",
    "about.factNickVal": "ปุณณ์",
    "about.factFocus": "ความถนัด",
    "about.factFocusVal": "ระบบอัตโนมัติ & การพัฒนา",
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
    "skills.focus": "สิ่งที่ถนัด",
    "skills.chipAuto": "ระบบอัตโนมัติ",
    "skills.chipBots": "บอท",
    "skills.chipTools": "เครื่องมือ",
    "skills.tools": "เครื่องมือ",
    "contact.kicker": "04 / ติดต่อ",
    "contact.title": "มาเชื่อมต่อกัน",
    "contact.lead": "อยากจ้างงานหรือแค่อยากคุยเรื่องโปรเจกต์? ติดต่อผมได้ทุกช่องทางเลยครับ ผมยินดีเสมอ",
    "contact.hire": "จ้างผมผ่าน Fastwork",
  },
};

const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
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
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));
