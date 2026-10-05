import { categorizeRepo, demoUrlFor, prettyName, techTagsFor } from '../lib/github.js'

// ProjectCard: tarjeta reutilizable de proyecto.
// Es un <button> para que sea clicable por teclado (accesibilidad).
// Props: repo (objeto de la API) + onSelect(repo) al hacer clic.
export default function ProjectCard({ repo, onSelect }) {
  const category = categorizeRepo(repo)
  const tags = techTagsFor(repo)
  const demo = demoUrlFor(repo)

  return (
    <button type="button" className="proj proj--btn" onClick={() => onSelect(repo)}>
      <span className="proj__top proj__top--auto">
        <span aria-hidden="true">{category === 'Frontend' ? '🌐' : category === 'SQL' ? '🗄️' : '⚙️'}</span>
        <small>{repo.language || category}</small>
      </span>
      <span className="proj__body">
        <h3>{prettyName(repo.name)}</h3>
        <p>{repo.description || 'Repositorio de código en GitHub — ver README para más detalles.'}</p>
        <span className="proj__tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </span>
        <span className="proj__link">
          {demo ? 'Ver demo →' : 'Ver en GitHub →'}
        </span>
      </span>
    </button>
  )
}
