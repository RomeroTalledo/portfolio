// Todo lo relacionado con la API pública de GitHub.
// https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user

export const GITHUB_USER = 'RomeroTalledo'

// Repos de cursos BYU: NO se muestran (ese espacio es para proyectos propios).
// Quita un nombre de esta lista si algún día quieres volver a mostrarlo.
const EXCLUDED_REPOS = new Set([
  'cse340-course-repo',
  'cse212-hw',
  'cse210-hwo',
  'wdd231',
  'wdd131',
  'wdd130',
  'web-funda',
])

// Trae los repos públicos del usuario, ordenados por última actualización.
export async function fetchRepos(signal) {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
    { signal },
  )
  if (!res.ok) {
    throw new Error(`GitHub respondió ${res.status}. Inténtalo más tarde.`)
  }
  const data = await res.json()
  // Ocultamos este mismo portafolio para no listarnos a nosotros mismos.
  return data.filter(
    (r) => !r.fork && r.name !== 'portfolio' && !EXCLUDED_REPOS.has(r.name),
  )
}

const FRONTEND_LANGS = new Set(['HTML', 'CSS', 'SCSS', 'Vue', 'TypeScript'])
const BACKEND_LANGS = new Set([
  'C#',
  'Python',
  'Java',
  'Go',
  'PHP',
  'Ruby',
  'JavaScript',
  'EJS',
])
const SQL_LANGS = new Set(['SQL', 'PLpgSQL', 'TSQL'])

// Clasifica un repo en Frontend / Backend / SQL según su lenguaje principal.
// JavaScript es ambiguo: si el nombre huele a web estática (wdd/web) va a
// Frontend; si no, se asume backend (Node). Ajusta la regla a tu gusto.
export function categorizeRepo(repo) {
  const lang = repo.language || ''
  const topics = (repo.topics || []).map((t) => t.toLowerCase())
  if (topics.some((t) => t.includes('sql') || t.includes('database')))
    return 'SQL'
  if (SQL_LANGS.has(lang)) return 'SQL'
  if (FRONTEND_LANGS.has(lang)) return 'Frontend'
  if (BACKEND_LANGS.has(lang)) {
    if (lang === 'JavaScript' && /^(wdd|web)-/i.test(repo.name))
      return 'Frontend'
    return 'Backend'
  }
  return 'Backend'
}

// Enlace "demo": la homepage del repo, o su GitHub Pages si está activo.
export function demoUrlFor(repo) {
  if (repo.homepage) return repo.homepage
  if (repo.has_pages)
    return `https://${GITHUB_USER.toLowerCase()}.github.io/${repo.name}/`
  return null
}

// Etiquetas de tecnología: lenguaje + topics (máx. 3 topics).
export function techTagsFor(repo) {
  const tags = []
  if (repo.language) tags.push(repo.language)
  for (const t of repo.topics || []) {
    if (tags.length >= 4) break
    if (!tags.includes(t)) tags.push(t)
  }
  return tags.length ? tags : ['Código']
}

// Título legible: "cse340-course-repo" → "Cse340 Course Repo".
export function prettyName(name) {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
