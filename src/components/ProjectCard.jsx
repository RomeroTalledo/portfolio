import { categorizeRepo, demoUrlFor, prettyName, techTagsFor } from '../lib/github.js'
import { useLang } from '../context/LangContext.jsx'

// ProjectCard: tarjeta reutilizable de proyecto.
// Es un <button> para que sea clicable por teclado (accesibilidad).
// Props: repo (objeto de la API) + onSelect(repo) al hacer clic.
export default function ProjectCard({ repo, onSelect }) {
  const { T } = useLang()
  const category = categorizeRepo(repo)
  // Si el repo no trae lenguaje ni topics, usamos la etiqueta traducida.
  const tags = techTagsFor(repo, [T.projects.codeTag])
  const demo = demoUrlFor(repo)

  return (
    <button type="button" className="proj proj--btn" onClick={() => onSelect(repo)}>
      <span className="proj__top proj__top--auto">
        <span aria-hidden="true">{category === 'Frontend' ? '🌐' : category === 'SQL' ? '🗄️' : '⚙️'}</span>
        <small>{repo.language || category}</small>
      </span>
      <span className="proj__body">
        <h3>{prettyName(repo.name)}</h3>
        <p>{repo.description || T.projects.repoFallback}</p>
        <span className="proj__tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>
        <span className="proj__link">
          {demo ? T.projects.viewDemo : T.projects.viewRepo}
        </span>
      </span>
    </button>
  )
}
