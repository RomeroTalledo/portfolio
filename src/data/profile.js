// Datos de contenido del portafolio (textos, habilidades, trayectoria).
// Separar los datos del diseño facilita editar textos sin tocar componentes.

export const TYPING_LINES = [
  "git commit -m 'enfocado en dev'",
  'npm run dev  →  construyendo portafolio',
  "SELECT * FROM devs WHERE name = 'dallin';",
]

// Cada línea de la ventana dev.js es una lista de [claseCSS, texto].
// Las clases .k .s .v .c .f ya existen en el CSS (colores de sintaxis).
export const CODE_LINES = [
  [['k', 'const '], ['v', 'dev'], ['t', ' = {']],
  [['t', "  name: "], ['s', "'Dallin Romero'"], ['t', ',']],
  [['t', "  role: "], ['s', "'Software Developer'"], ['t', ',']],
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
  [['c', '// construyendo mi futuro, commit a commit']],
  [['f', 'dev'], ['f', '.'], ['f', 'buildFuture'], ['t', '(); '], ['c', '▌']],
]

export const SKILLS = [
  {
    tag: 'Frontend',
    title: 'Interfaces claras y responsive',
    desc: 'HTML semántico, CSS moderno y JavaScript: sitios rápidos, accesibles y adaptables.',
    tech: 'HTML · CSS · JavaScript',
    pct: 85,
    icon: 'layout',
  },
  {
    tag: 'Backend',
    title: 'Node.js + Express',
    desc: 'Rutas, controladores y vistas dinámicas con EJS en aplicaciones full-stack.',
    tech: 'Node.js · Express · EJS',
    pct: 75,
    icon: 'server',
  },
  {
    tag: 'Bases de datos',
    title: 'SQL y modelado relacional',
    desc: 'Diseño de esquemas normalizados, consultas con joins, CRUD y buenas prácticas aplicadas en proyectos.',
    tech: 'SQL · Modelado',
    pct: 70,
    icon: 'db',
  },
  {
    tag: 'Python · C#',
    title: 'POO y algoritmos',
    desc: 'Python aplicado a scripting, lógica y POO; C# con estructuras de datos y análisis de complejidad.',
    tech: 'Python · C# · POO',
    pct: 70,
    icon: 'code',
  },
  {
    tag: 'Git & GitHub',
    title: 'Versionado profesional',
    desc: 'Ramas, commits descriptivos y flujo colaborativo. Mi trabajo vive en GitHub.',
    tech: 'Git · GitHub · VS Code',
    pct: 80,
    icon: 'git',
  },
  {
    tag: 'Base IT',
    title: 'Sistemas y redes',
    desc: 'Diagnóstico HW/SW, redes Wi-Fi y Windows: un dev que entiende la máquina completa.',
    tech: 'Hardware · Wi-Fi · Windows',
    pct: 90,
    icon: 'wifi',
  },
]

export const EXPERIENCE = [
  {
    title: 'Asistente de Soporte Postventa',
    place: 'Inversiones Titania Perú · 2026',
    desc: '100+ casos: diagnóstico de SO, drivers y software; mantenimiento de hardware y coordinación técnica.',
  },
  {
    title: 'Especialista de Soporte Técnico',
    place: 'First System Technology · 2020–2021',
    desc: 'Resolución de incidencias HW/SW y capacitación a usuarios.',
  },
]

export const EDUCATION = [
  {
    title: 'B.S. Software Development',
    place: 'BYU-Idaho · 2025–2027',
    desc: 'Frontend, backend, POO y estructuras de datos (JS, Python, C#).',
  },
  {
    title: 'Technical Support Engineer',
    place: 'Ensign College · 2023–2024',
    desc: 'Base en sistemas, redes y troubleshooting.',
  },
  {
    title: 'PC Pro · Hardware y Windows 11',
    place: 'TestOut · 2023–2024',
    desc: 'Certificación técnica.',
  },
]

export const EMAIL = 'dallinromero2002@gmail.com'
export const GITHUB_URL = 'https://github.com/RomeroTalledo'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dallin-e-romero'
export const PHONE = '+51 934 674 893'
