// Datos de contenido del portafolio (textos, habilidades, trayectoria).
// Separar los datos del diseño facilita editar textos sin tocar componentes.
// Cada texto existe en `en` y `es`; los datos "técnicos" (iconos, %, lugar)
// son comunes a ambos idiomas.

export const TYPING_LINES = {
  en: [
    "git commit -m 'focused on dev'",
    'npm run dev  →  building portfolio',
    "SELECT * FROM devs WHERE name = 'dallin';",
  ],
  es: [
    "git commit -m 'enfocado en dev'",
    'npm run dev  →  construyendo portafolio',
    "SELECT * FROM devs WHERE name = 'dallin';",
  ],
}

// Líneas de código compartidas entre idiomas (el código es código).
// Cada línea es una lista de [claseCSS, texto].
// Las clases .k .s .v .c .f ya existen en el CSS (colores de sintaxis).
const CODE_HEAD = [
  [['k', 'const '], ['v', 'dev'], ['t', ' = {']],
  [['t', '  name: '], ['s', "'Dallin Romero'"], ['t', ',']],
  [['t', '  role: '], ['s', "'Software Developer'"], ['t', ',']],
  [
    ['t', '  stack: ['],
    ['s', "'JS'"],
    ['t', ', '],
    ['s', "'Node'"],
    ['t', ', '],
    ['s', "'Python'"],
    ['t', ', '],
    ['s', "'C#'"],
    ['t', '],'],
  ],
  [['t', '  remote: '], ['k', 'true']],
  [['t', '};']],
  [],
]

// El único comentario traducible de la ventana.
const CODE_COMMENT = {
  en: '// building my future, one commit at a time',
  es: '// construyendo mi futuro, commit a commit',
}

const CODE_TAIL = [
  [['f', 'dev'], ['f', '.'], ['f', 'buildFuture'], ['t', '(); '], ['c', '▌']],
]

// Líneas completas de la ventana dev.js según el idioma.
export function codeLinesFor(lang) {
  return [...CODE_HEAD, [['c', CODE_COMMENT[lang]]], ...CODE_TAIL]
}

// Cada habilidad: `icon` y `pct` son comunes; el texto va por idioma.
export const SKILLS = [
  {
    icon: 'layout',
    pct: 85,
    en: {
      tag: 'Frontend',
      title: 'Clear, responsive interfaces',
      desc: 'Semantic HTML, modern CSS and JavaScript: fast, accessible and adaptable sites.',
      tech: 'HTML · CSS · JavaScript',
    },
    es: {
      tag: 'Frontend',
      title: 'Interfaces claras y responsive',
      desc: 'HTML semántico, CSS moderno y JavaScript: sitios rápidos, accesibles y adaptables.',
      tech: 'HTML · CSS · JavaScript',
    },
  },
  {
    icon: 'server',
    pct: 75,
    en: {
      tag: 'Backend',
      title: 'Node.js + Express',
      desc: 'Routes, controllers and dynamic EJS views in full-stack applications.',
      tech: 'Node.js · Express · EJS',
    },
    es: {
      tag: 'Backend',
      title: 'Node.js + Express',
      desc: 'Rutas, controladores y vistas dinámicas con EJS en aplicaciones full-stack.',
      tech: 'Node.js · Express · EJS',
    },
  },
  {
    icon: 'db',
    pct: 70,
    en: {
      tag: 'Databases',
      title: 'SQL and relational modeling',
      desc: 'Design of normalized schemas, joins, CRUD and good practices applied in real projects.',
      tech: 'SQL · Modeling',
    },
    es: {
      tag: 'Bases de datos',
      title: 'SQL y modelado relacional',
      desc: 'Diseño de esquemas normalizados, consultas con joins, CRUD y buenas prácticas aplicadas en proyectos.',
      tech: 'SQL · Modelado',
    },
  },
  {
    icon: 'code',
    pct: 70,
    en: {
      tag: 'Python · C#',
      title: 'OOP and algorithms',
      desc: 'Python applied to scripting, logic and OOP; C# with data structures and complexity analysis.',
      tech: 'Python · C# · OOP',
    },
    es: {
      tag: 'Python · C#',
      title: 'POO y algoritmos',
      desc: 'Python aplicado a scripting, lógica y POO; C# con estructuras de datos y análisis de complejidad.',
      tech: 'Python · C# · POO',
    },
  },
  {
    icon: 'git',
    pct: 80,
    en: {
      tag: 'Git & GitHub',
      title: 'Professional versioning',
      desc: 'Branches, descriptive commits and a collaborative workflow. My work lives on GitHub.',
      tech: 'Git · GitHub · VS Code',
    },
    es: {
      tag: 'Git & GitHub',
      title: 'Versionado profesional',
      desc: 'Ramas, commits descriptivos y flujo colaborativo. Mi trabajo vive en GitHub.',
      tech: 'Git · GitHub · VS Code',
    },
  },
  {
    icon: 'wifi',
    pct: 90,
    en: {
      tag: 'IT base',
      title: 'Systems and networks',
      desc: 'HW/SW diagnostics, Wi-Fi networks and Windows: a dev who understands the whole machine.',
      tech: 'Hardware · Wi-Fi · Windows',
    },
    es: {
      tag: 'Base IT',
      title: 'Sistemas y redes',
      desc: 'Diagnóstico HW/SW, redes Wi-Fi y Windows: un dev que entiende la máquina completa.',
      tech: 'Hardware · Wi-Fi · Windows',
    },
  },
]

// `place` es común (nombre de empresa + años); el resto va por idioma.
export const EXPERIENCE = [
  {
    place: 'Inversiones Titania Perú · 2026',
    en: {
      title: 'Post-sale Support Assistant',
      desc: '100+ cases: OS, driver and software diagnosis; hardware maintenance and technical coordination.',
    },
    es: {
      title: 'Asistente de Soporte Postventa',
      desc: '100+ casos: diagnóstico de SO, drivers y software; mantenimiento de hardware y coordinación técnica.',
    },
  },
  {
    place: 'First System Technology · 2020–2021',
    en: {
      title: 'Technical Support Specialist',
      desc: 'HW/SW incident resolution and user training.',
    },
    es: {
      title: 'Especialista de Soporte Técnico',
      desc: 'Resolución de incidencias HW/SW y capacitación a usuarios.',
    },
  },
]

export const EDUCATION = [
  {
    place: 'BYU-Idaho · 2025–2027',
    en: {
      title: 'B.S. Software Development',
      desc: 'Frontend, backend, OOP and data structures (JS, Python, C#).',
    },
    es: {
      title: 'B.S. Software Development',
      desc: 'Frontend, backend, POO y estructuras de datos (JS, Python, C#).',
    },
  },
  {
    place: 'Ensign College · 2023–2024',
    en: {
      title: 'Technical Support Engineer',
      desc: 'Grounding in systems, networks and troubleshooting.',
    },
    es: {
      title: 'Technical Support Engineer',
      desc: 'Base en sistemas, redes y troubleshooting.',
    },
  },
  {
    place: 'TestOut · 2023–2024',
    en: {
      title: 'PC Pro · Hardware & Windows 11',
      desc: 'Technical certification.',
    },
    es: {
      title: 'PC Pro · Hardware y Windows 11',
      desc: 'Certificación técnica.',
    },
  },
]

export const EMAIL = 'dallinromero2002@gmail.com'
export const GITHUB_URL = 'https://github.com/RomeroTalledo'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dallin-e-romero'
export const PHONE = '+51 934 674 893'
