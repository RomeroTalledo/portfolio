/* Portafolio Dallin Romero — lógica */
"use strict";
const ACCENT = "#0E7C5B";

/* ---------- STACK ---------- */
const SKILLS = [
  {
    tag: "Frontend",
    title: "Interfaces claras y responsive",
    desc: "HTML semántico, CSS moderno y JavaScript: sitios rápidos, accesibles y adaptables.",
    tech: "HTML · CSS · JavaScript",
    pct: 85,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  },
  {
    tag: "Backend",
    title: "Node.js + Express",
    desc: "Rutas, controladores y vistas dinámicas con EJS en aplicaciones full-stack.",
    tech: "Node.js · Express · EJS",
    pct: 75,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>`,
  },
  {
    tag: "Bases de datos",
    title: "SQL y modelado relacional",
    desc: "Diseño de esquemas normalizados, consultas con joins, CRUD y buenas prácticas aplicadas en proyectos.",
    tech: "SQL · Modelado",
    pct: 70,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>`,
  },
  {
    tag: "Python · C#",
    title: "POO y algoritmos",
    desc: "Python aplicado a scripting, lógica y POO; C# con estructuras de datos y análisis de complejidad.",
    tech: "Python · C# · POO",
    pct: 70,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    tag: "Git & GitHub",
    title: "Versionado profesional",
    desc: "Ramas, commits descriptivos y flujo colaborativo. Mi trabajo vive en GitHub.",
    tech: "Git · GitHub · VS Code",
    pct: 80,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-5 3.5-8 5"/></svg>`,
  },
  {
    tag: "Base IT",
    title: "Sistemas y redes",
    desc: "Diagnóstico HW/SW, redes Wi-Fi y Windows: un dev que entiende la máquina completa.",
    tech: "Hardware · Wi-Fi · Windows",
    pct: 90,
    svg: `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="${ACCENT}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8"/></svg>`,
  },
];

/* ---------- FUTUROS PROYECTOS (espacio reservado) ---------- */
const PROJECTS = [
  {
    emoji: "🚀",
    bg: "linear-gradient(135deg,#0E7C5B,#083B2C)",
    lang: "Próximamente",
    title: "Nuevo proyecto en camino",
    desc: "Actualmente construyendo algo nuevo. Vuelve pronto para verlo aquí.",
    tags: ["En desarrollo"],
    url: "https://github.com/RomeroTalledo?tab=repositories",
    linkText: "Mi GitHub →",
  },
  {
    emoji: "💡",
    bg: "linear-gradient(135deg,#3a352c,#211E1A)",
    lang: "Tu idea",
    title: "¿Tienes un proyecto en mente?",
    desc: "Este espacio puede ser para tu idea. Conversemos y la hacemos realidad.",
    tags: ["Colaboremos"],
    url: "#contacto",
    linkText: "Contáctame →",
  },
  {
    emoji: "🛠️",
    bg: "linear-gradient(135deg,#8A8580,#4a463f)",
    lang: "En evolución",
    title: "Portafolio en crecimiento",
    desc: "Cada proyecto que construya vivirá aquí, con código abierto en GitHub.",
    tags: ["Próximamente"],
    url: "https://github.com/RomeroTalledo",
    linkText: "Seguir mi trabajo →",
  },
];

/* ---------- RENDER: skills ---------- */
document.getElementById("skillsGrid").innerHTML = SKILLS.map(
  (s) => `
  <article class="skill reveal">
    <div class="skill__head"><span class="skill__icon">${s.svg}</span>
      <div><span class="skill__tag">${s.tag}</span><h3>${s.title}</h3></div>
    </div>
    <p>${s.desc}</p>
    <div class="bar" role="progressbar" aria-valuenow="${s.pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.title}"><i data-w="${s.pct}"></i></div>
    <span class="skill__pct">${s.tech} · ${s.pct}%</span>
  </article>`,
).join("");

/* ---------- RENDER: proyectos ---------- */
const track = document.getElementById("carTrack");
track.innerHTML = PROJECTS.map(
  (p) => `
  <article class="proj">
    <div class="proj__top" style="background:${p.bg}"><span>${p.emoji}</span><small>${p.lang}</small></div>
    <div class="proj__body">
      <h3>${p.title}</h3><p>${p.desc}</p>
      <div class="proj__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <a class="proj__link" href="${p.url}" ${p.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${p.linkText || "Ver en GitHub →"}</a>
    </div>
  </article>`,
).join("");

/* ---------- CARRUSEL ---------- */
const viewport = document.getElementById("carViewport");
const dotsBox = document.getElementById("carDots");
let index = 0,
  autoTimer = null;
const perView = () =>
  window.innerWidth <= 600 ? 1 : window.innerWidth <= 960 ? 2 : 3;
const maxIndex = () => PROJECTS.length - perView();
const cardStep = () => {
  const c = track.querySelector(".proj");
  return c ? c.getBoundingClientRect().width + 20 : 0;
};
function renderDots() {
  dotsBox.innerHTML = "";
  for (let i = 0; i <= maxIndex(); i++) {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Ir a la página " + (i + 1));
    if (i === index) b.classList.add("active");
    b.addEventListener("click", () => {
      goTo(i);
      restartAuto();
    });
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
document.getElementById("carNext").addEventListener("click", () => {
  next();
  restartAuto();
});
document.getElementById("carPrev").addEventListener("click", () => {
  prev();
  restartAuto();
});
function restartAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(next, 8000);
}
let startX = 0,
  dragging = false;
viewport.addEventListener("pointerdown", (e) => {
  dragging = true;
  startX = e.clientX;
  clearInterval(autoTimer);
});
window.addEventListener("pointerup", (e) => {
  if (!dragging) return;
  dragging = false;
  const dx = e.clientX - startX;
  if (dx < -40) next();
  else if (dx > 40) prev();
  restartAuto();
});
window.addEventListener("resize", () => goTo(index));
goTo(0);
restartAuto();

/* ---------- VENTANA DE CÓDIGO ANIMADA (hero derecha) ---------- */
const CODE_LINES = [
  `<span class="k">const</span> <span class="v">dev</span> = {`,
  `  name: <span class="s">'Dallin Romero'</span>,`,
  `  role: <span class="s">'Software Developer'</span>,`,
  `  stack: [<span class="s">'JS'</span>, <span class="s">'Node'</span>, <span class="s">'Python'</span>, <span class="s">'C#'</span>],`,
  `  remote: <span class="k">true</span>`,
  `};`,
  ``,
  `<span class="c">// construyendo mi futuro, commit a commit</span>`,
  `<span class="f">dev</span>.<span class="f">buildFuture</span>(); <span class="c">▌</span>`,
];
const codeBody = document.getElementById("codeBody");
codeBody.innerHTML = CODE_LINES.map(
  (l) => `<div class="code-line">${l || "&nbsp;"}</div>`,
).join("");
const codeLines = [...codeBody.querySelectorAll(".code-line")];
(function playCode() {
  let i = 0;
  codeLines.forEach((l) => l.classList.remove("on"));
  const t = setInterval(() => {
    if (i < codeLines.length) {
      codeLines[i].classList.add("on");
      i++;
    } else {
      clearInterval(t);
      setTimeout(playCode, 4500);
    }
  }, 650);
})();

/* ---------- MÁQUINA DE ESCRIBIR (hero izquierda) ---------- */
const lines = [
  "git commit -m 'enfocado en dev'",
  "npm run dev  →  construyendo portafolio",
  "SELECT * FROM devs WHERE name = 'dallin';",
];
const typingEl = document.getElementById("typing");
let li = 0,
  ci = 0,
  deleting = false;
(function type() {
  const line = lines[li];
  typingEl.textContent = line.slice(0, ci);
  if (!deleting && ci < line.length) {
    ci++;
    setTimeout(type, 85);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 2600);
  } else if (ci > 0) {
    ci--;
    setTimeout(type, 40);
  } else {
    deleting = false;
    li = (li + 1) % lines.length;
    setTimeout(type, 500);
  }
})();

/* ---------- REVEAL + barras + contadores ---------- */
const barIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w + "%";
        barIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 },
);
document.querySelectorAll(".bar i").forEach((b) => barIO.observe(b));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const cIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target,
        target = +el.dataset.count;
      let cur = 0;
      const t = setInterval(() => {
        cur++;
        el.textContent = cur;
        if (cur >= target) clearInterval(t);
      }, 260);
      cIO.unobserve(el);
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll("[data-count]").forEach((el) => cIO.observe(el));

/* ---------- NAV ---------- */
const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => nav.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true },
);
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

/* ---------- CANVAS: red sutil terracota ---------- */
(function () {
  const cv = document.getElementById("techCanvas");
  const ctx = cv.getContext("2d");
  const COLORS = ["14,124,91", "138,133,128", "60,55,48"];
  let pts = [],
    W = 0,
    H = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  function size() {
    const r = cv.parentElement.getBoundingClientRect();
    W = cv.width = r.width;
    H = cv.height = r.height;
    const n = Math.min(60, Math.floor((W * H) / 26000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      c: COLORS[Math.floor(Math.random() * 3)],
      r: Math.random() * 2 + 1.2,
    }));
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = `rgba(${p.c},.8)`;
      ctx.fill();
    }
    for (let i = 0; i < pts.length; i++)
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x,
          dy = pts[i].y - pts[j].y,
          d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(14,124,91,${(1 - d / 130) * 0.3})`;
          ctx.stroke();
        }
      }
    if (!reduced) requestAnimationFrame(frame);
  }
  size();
  window.addEventListener("resize", size);
  frame();
})();
