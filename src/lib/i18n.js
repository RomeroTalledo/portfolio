// Diccionario de TODOS los textos de la página, en inglés y español.
// Regla de oro: cada clave que exista en `en` debe existir también en `es`.
// Así, cambiar de idioma es solo mirar otro objeto: no se toca ningún componente.

export const DEFAULT_LANG = 'en' // inglés primero, como pediste
export const LANGS = ['en', 'es']

export const TEXT = {
  en: {
    nav: {
      home: 'Home',
      ariaMain: 'Main navigation',
      links: [
        { href: '#sobre-mi', label: 'About' },
        { href: '#habilidades', label: 'Stack' },
        { href: '#trayectoria', label: 'Journey' },
        { href: '#proyectos', label: 'Projects' },
      ],
      contact: 'Contact me',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'Switch language to Spanish',
    },

    hero: {
      eyebrow: 'Lima, Peru · Remote work',
      role: 'Software Developer · Frontend + Backend',
      cta: 'See projects',
      copyEmail: 'View and copy email',
      scrollHint: 'Scroll to About me',
      stats: {
        projects: 'published projects',
        tech: 'technologies',
        roles: 'IT roles',
        studies: 'tech studies',
      },
    },

    about: {
      kicker: 'About me',
      title: 'Software developer with an IT background',
      p1: 'I am **Dallin Romero**, a software developer: I build for the web with **JavaScript, Node.js, Python and C#** — clear interfaces on the frontend and tidy logic on the backend, with well-modeled relational databases.',
      p2: 'My edge: years of **IT support** — diagnosing systems, networks and hardware — so I debug with a method and understand what happens under the hood. Trained in **Software Development (BYU-Idaho)**.',
      facts: [
        { label: '💻 Focus', value: 'Frontend · Backend · SQL' },
        { label: '📍 Based in', value: 'Lima, Peru · remote' },
        { label: '🎓 Education', value: 'BYU-Idaho · Ensign College · TestOut' },
        { label: '💬 Languages', value: 'Native Spanish · Professional English' },
      ],
    },

    skills: {
      kicker: 'Stack',
      title: 'My toolbox',
    },

    path: {
      kicker: 'Journey',
      title: 'IT experience + software development',
      experience: '💼 IT experience',
      education: '🎓 Tech education',
    },

    projects: {
      kicker: 'Projects',
      title: 'My projects',
      sub: 'Automatically pulled from my GitHub.',
      all: 'All',
      filterAria: 'Filter projects by category',
      loading: 'Loading projects from GitHub…',
      error: '⚠️ Could not load the projects ({error}).',
      errorLink: 'See them on GitHub →',
      emptyAll: 'No projects published yet — they are on the way. 🚧',
      emptyOne: 'No {cat} projects published yet — they are on the way. 🚧',
      repoFallback: 'Code repository on GitHub — see the README for details.',
      codeTag: 'Code',
      viewDemo: 'View demo →',
      viewRepo: 'View on GitHub →',
      modalDemo: 'View demo',
      modalRepo: 'Repository',
      close: 'Close',
      closeDetails: 'Close details',
    },

    contact: {
      kicker: 'Contact',
      title: "Let's talk?",
      sub: 'Have a project in mind? I reply fast.',
      phone: 'Phone',
    },

    email: {
      title: 'My email',
      copy: 'Copy',
      copied: 'Copied! ✓',
      write: 'Write to me',
      close: 'Close',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      ariaMain: 'Navegación principal',
      links: [
        { href: '#sobre-mi', label: 'Sobre mí' },
        { href: '#habilidades', label: 'Stack' },
        { href: '#trayectoria', label: 'Trayectoria' },
        { href: '#proyectos', label: 'Proyectos' },
      ],
      contact: 'Contáctame',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      switchLang: 'Cambiar idioma a inglés',
    },

    hero: {
      eyebrow: 'Lima, Perú · Trabajo remoto',
      role: 'Software Developer · Frontend + Backend',
      cta: 'Ver proyectos',
      copyEmail: 'Ver y copiar email',
      scrollHint: 'Bajar a Sobre mí',
      stats: {
        projects: 'proyectos publicados',
        tech: 'tecnologías',
        roles: 'roles en IT',
        studies: 'estudios tech',
      },
    },

    about: {
      kicker: 'Sobre mí',
      title: 'Desarrollador de software con base en IT',
      p1: 'Soy **Dallin Romero**, desarrollador de software: construyo para la web con **JavaScript, Node.js, Python y C#** — interfaces claras en el frontend y lógica ordenada en el backend, con bases de datos relacionales bien modeladas.',
      p2: 'Mi diferencial: años de **soporte IT** — diagnóstico de sistemas, redes y hardware —, así que debuggeo con método y entiendo lo que pasa bajo el capó. Formación en **Software Development (BYU-Idaho)**.',
      facts: [
        { label: '💻 Enfoque', value: 'Frontend · Backend · SQL' },
        { label: '📍 Base', value: 'Lima, Perú · remoto' },
        { label: '🎓 Estudios', value: 'BYU-Idaho · Ensign College · TestOut' },
        { label: '💬 Idiomas', value: 'Español nativo · Inglés profesional' },
      ],
    },

    skills: {
      kicker: 'Stack',
      title: 'Mi caja de herramientas',
    },

    path: {
      kicker: 'Trayectoria',
      title: 'Experiencia IT + desarrollo de software',
      experience: '💼 Experiencia IT',
      education: '🎓 Educación tech',
    },

    projects: {
      kicker: 'Proyectos',
      title: 'Mis proyectos',
      sub: 'Traídos automáticamente desde mi GitHub.',
      all: 'Todos',
      filterAria: 'Filtrar proyectos por categoría',
      loading: 'Cargando proyectos desde GitHub…',
      error: '⚠️ No se pudieron cargar los proyectos ({error}).',
      errorLink: 'Verlos en GitHub →',
      emptyAll: 'Aún no hay proyectos publicados — están en camino. 🚧',
      emptyOne: 'Aún no hay proyectos {cat} publicados — están en camino. 🚧',
      repoFallback: 'Repositorio de código en GitHub — ver README para más detalles.',
      codeTag: 'Código',
      viewDemo: 'Ver demo →',
      viewRepo: 'Ver en GitHub →',
      modalDemo: 'Ver demo',
      modalRepo: 'Repositorio',
      close: 'Cerrar',
      closeDetails: 'Cerrar detalle',
    },

    contact: {
      kicker: 'Contacto',
      title: '¿Hablamos?',
      sub: '¿Tienes un proyecto en mente? Respondo rápido.',
      phone: 'Teléfono',
    },

    email: {
      title: 'Mi correo',
      copy: 'Copiar',
      copied: '¡Copiado! ✓',
      write: 'Escribir',
      close: 'Cerrar',
    },
  },
}
