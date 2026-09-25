/* Portafolio Dallin Romero — lógica */
"use strict";

/* ---------- HABILIDADES ---------- */
const SKILLS = [
  {
    tag: "Frontend", icon: "🎨", title: "Interfaces que enamoran",
    desc: "HTML semántico, CSS moderno (flex, grid, animaciones) y JavaScript para experiencias rápidas y accesibles.",
    tech: "HTML · CSS · JavaScript", pct: 85,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
  },
  {
    tag: "Backend", icon: "⚙️", title: "Lógica del lado del servidor",
    desc: "Aplicaciones con Node.js y Express, vistas dinámicas con EJS y programación orientada a objetos.",
    tech: "Node.js · Express · EJS", pct: 75,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>'
  },
  {
    tag: "Bases de datos", icon: "🗄️", title: "Datos bien organizados",
    desc: "Fundamentos de SQL y modelado de datos del programa BYU-Idaho; creciendo hacia diseños robustos.",
    tech: "SQL · Modelado · En formación", pct: 55,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>'
  },
  {
    tag: "Lenguajes", icon: "🐍", title: "Python & C#",
    desc: "Python para fundamentos y automatización; C# con POO, estructuras de datos y algoritmos.",
    tech: "Python · C# · POO", pct: 70,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    tag: "Herramientas", icon: "🌿", title: "Git & GitHub",
    desc: "Control de versiones profesional: ramas, commits descriptivos y flujo de trabajo colaborativo.",
    tech: "Git · GitHub · VS Code", pct: 80,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-5 3.5-8 5"/></svg>'
  },
  {
    tag: "IT & Redes", icon: "🌐", title: "Soporte y redes",
    desc: "Diagnóstico HW/SW, redes Wi-Fi y Windows — mi base que me hace un dev que entiende sistemas.",
    tech: "Hardware · Wi-Fi · Windows", pct: 90,
    svg: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#C2B280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8"/></svg>'
  }
];

/* ---------- PROYECTOS (repos reales) ---------- */
const PROJECTS = [
  { emoji: "🛒", bg: "linear-gradient(135deg,#E35336,#92290f)", lang: "JavaScript", title: "CSE 340 · Tienda Full-Stack",
    desc: "Aplicación web completa con Node.js, Express y vistas EJS: rutas, controladores y base de datos.",
    tags: ["Node.js", "Express", "EJS"], url: "https://github.com/RomeroTalledo/cse340-course-repo" },
  { emoji: "🌐", bg: "linear-gradient(135deg,#272757,#5a5aa8)", lang: "HTML", title: "WDD 231 · Frontend Interactivo",
    desc: "Sitio frontend con HTML, CSS y JavaScript: diseño responsive y consumo dinámico de datos.",
    tags: ["HTML", "CSS", "JavaScript"], url: "https://github.com/RomeroTalledo/wdd231" },
  { emoji: "🧮", bg: "linear-gradient(135deg,#98A869,#55663a)", lang: "C#", title: "CSE 212 · Estructuras de Datos",
    desc: "Implementación de pilas, colas, listas y árboles en C# con análisis de complejidad.",
    tags: ["C#", "Algoritmos"], url: "https://github.com/RomeroTalledo/cse212-hw" },
  { emoji: "🧱", bg: "linear-gradient(135deg,#C2B280,#7d6c3c)", lang: "C#", title: "CSE 210 · POO en C#",
    desc: "Proyectos de programación orientada a objetos: clases, herencia y encapsulamiento.",
    tags: ["C#", "POO"], url: "https://github.com/RomeroTalledo/cse210-hwo" },
  { emoji: "📱", bg: "linear-gradient(135deg,#E35336,#C2B280)", lang: "HTML", title: "WDD 131 · Sitios Dinámicos",
    desc: "Páginas web dinámicas con JavaScript: DOM, eventos y formularios interactivos.",
    tags: ["HTML", "CSS", "JavaScript"], url: "https://github.com/RomeroTalledo/wdd131" },
  { emoji: "🎨", bg: "linear-gradient(135deg,#272757,#98A869)", lang: "HTML", title: "WDD 130 · Fundamentos Web",
    desc: "Primeros sitios publicados: maquetación, estilos y despliegue con GitHub Pages.",
    tags: ["HTML", "CSS"], url: "https://github.com/RomeroTalledo/wdd130" },
  { emoji: "💡", bg: "linear-gradient(135deg,#5a5aa8,#E35336)", lang: "HTML", title: "Web Funda · Fundamentos",
    desc: "Ejercicios y bases del desarrollo web: estructura, estilo y buenas prácticas.",
    tags: ["HTML", "CSS"], url: "https://github.com/RomeroTalledo/web-funda" }
];

/* ---------- RENDER: skills ---------- */
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map(s => `
  <article class="skill reveal">
    <div class="skill__head"><span class="skill__icon">${s.svg}</span>
      <div><span class="skill__tag">${s.tag} ${s.icon}</span><h3>${s.title}</h3></div>
    </div>
    <p>${s.desc}</p>
    <div class="bar" role="progressbar" aria-valuenow="${s.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.title}"><i data-w="${s.pct}"></i></div>
    <span class="skill__pct">${s.tech} · ${s.pct}%</span>
  </article>`).join("");

/* ---------- RENDER: proyectos ---------- */
const track = document.getElementById("carTrack");
track.innerHTML = PROJECTS.map(p => `
  <article class="proj">
    <div class="proj__top" style="background:${p.bg}"><span>${p.emoji}</span><small>${p.lang}</small></div>
    <div class="proj__body">
      <h3>${p.title}</h3><p>${p.desc}</p>
      <div class="proj__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <a class="proj__link" href="${p.url}" target="_blank" rel="noopener">Ver en GitHub →</a>
    </div>
  </article>`).join("");

/* ---------- CARRUSEL: 3 visibles, giro horizontal ---------- */
const viewport = document.getElementById("carViewport");
const dotsBox = document.getElementById("carDots");
let index = 0, autoTimer = null;

const perView = () => (window.innerWidth <= 600 ? 1 : window.innerWidth <= 960 ? 2 : 3);
const maxIndex = () => PROJECTS.length - perView();

function cardStep() {
  const card = track.querySelector(".proj");
  return card ? card.getBoundingClientRect().width + 20 : 0;
}
function renderDots() {
  dotsBox.innerHTML = "";
  for (let i = 0; i <= maxIndex(); i++) {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Ir a la página " + (i + 1));
    if (i === index) b.classList.add("active");
    b.addEventListener("click", () => { goTo(i); restartAuto(); });
    dotsBox.appendChild(b);
  }
}
function goTo(i) {
  index = (i + PROJECTS.length) % PROJECTS.length;
  if (index > maxIndex()) index = 0;
  track.style.transform = `translateX(${-index * cardStep()}px)`;
  renderDots();
}
const next = () => goTo(index >= maxIndex() ? 0 : index + 1);
const prev = () => goTo(index <= 0 ? maxIndex() : index - 1);
document.getElementById("carNext").addEventListener("click", () => { next(); restartAuto(); });
document.getElementById("carPrev").addEventListener("click", () => { prev(); restartAuto(); });
function restartAuto() { clearInterval(autoTimer); autoTimer = setInterval(next, 4500); }

/* arrastre táctil / mouse */
let startX = 0, dragging = false;
viewport.addEventListener("pointerdown", e => { dragging = true; startX = e.clientX; clearInterval(autoTimer); });
window.addEventListener("pointerup", e => {
  if (!dragging) return; dragging = false;
  const dx = e.clientX - startX;
  if (dx < -40) next(); else if (dx > 40) prev();
  restartAuto();
});
window.addEventListener("resize", () => goTo(index));
goTo(0); restartAuto();

/* ---------- REVEAL + barras + contadores ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("visible");
    e.target.querySelectorAll(".bar i").forEach(b => { b.style.width = b.dataset.w + "%"; });
    if (e.target.classList.contains("bar")) e.target.querySelector("i").style.width = e.target.querySelector("i").dataset.w + "%";
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
/* las barras están dentro de .skill.reveal: se animan cuando la tarjeta aparece */
const barIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + "%"; barIO.unobserve(e.target); } });
}, { threshold: 0.4 });
document.querySelectorAll(".bar i").forEach(b => barIO.observe(b));

/* contadores del hero */
const cIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count; let cur = 0;
    const t = setInterval(() => { cur++; el.textContent = cur; if (cur >= target) clearInterval(t); }, 120);
    cIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach(el => cIO.observe(el));

/* ---------- NAV ---------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---------- EFECTO MÁQUINA DE ESCRIBIR ---------- */
const lines = [
  "git commit -m 'construyendo mi futuro'",
  "npm run dev  →  portafolio en marcha ⚡",
  "SELECT * FROM oportunidades WHERE dev = 'dallin';"
];
const typingEl = document.getElementById("typing");
let li = 0, ci = 0, deleting = false;
(function type() {
  const line = lines[li];
  typingEl.textContent = line.slice(0, ci);
  if (!deleting && ci < line.length) { ci++; setTimeout(type, 55); }
  else if (!deleting) { deleting = true; setTimeout(type, 1800); }
  else if (ci > 0) { ci--; setTimeout(type, 25); }
  else { deleting = false; li = (li + 1) % lines.length; setTimeout(type, 400); }
})();

/* ---------- CANVAS: red tecnológica ---------- */
(function () {
  const cv = document.getElementById("techCanvas");
  const ctx = cv.getContext("2d");
  const COLORS = ["194,178,128", "227,83,54", "152,168,105"];
  let pts = [], W = 0, H = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  function size() {
    const r = cv.parentElement.getBoundingClientRect();
    W = cv.width = r.width; H = cv.height = r.height;
    const n = Math.min(70, Math.floor(W * H / 22000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      c: COLORS[Math.floor(Math.random() * 3)], r: Math.random() * 2 + 1.2
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = `rgba(${p.c},.9)`; ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
      if (d < 130) {
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(194,178,128,${(1 - d / 130) * 0.35})`; ctx.stroke();
      }
    }
    if (!reduced) requestAnimationFrame(frame);
  }
  size(); window.addEventListener("resize", size); frame();
})();
