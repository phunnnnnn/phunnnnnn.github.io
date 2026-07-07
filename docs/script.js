// ===== Current year in footer =====
document.getElementById("year").textContent = new Date().getFullYear();

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
