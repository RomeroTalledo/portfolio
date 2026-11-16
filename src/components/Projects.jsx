import { useMemo, useState } from 'react'
import { categorizeRepo } from '../lib/github.js'
import { useLang } from '../context/LangContext.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Reveal from './Reveal.jsx'

// Claves internas de filtro (NUNCA se traducen: se comparan con
// categorizeRepo, que devuelve 'Frontend' | 'Backend' | 'SQL').
const FILTERS = ['Todos', 'Frontend', 'Backend', 'SQL']

// Projects: recibe { repos, loading, error } desde App (un solo fetch).
// Filtra por categoría y abre el modal de detalle al elegir tarjeta.
export default function Projects({ repos, loading, error }) {
  const { T } = useLang()
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)

  // Etiqueta visible de una clave de filtro (solo 'Todos' cambia de idioma).
  const labelFor = (f) => (f === 'Todos' ? T.projects.all : f)

  // useMemo: recalcula la lista solo si cambian repos o filter.
  const visible = useMemo(() => {
    if (filter === 'Todos') return repos
    return repos.filter((r) => categorizeRepo(r) === filter)
  }, [repos, filter])

  const countFor = (f) =>
    f === 'Todos' ? repos.length : repos.filter((r) => categorizeRepo(r) === f).length

  return (
    <section className="section projects" id="proyectos">
      <div className="wrap">
        <Reveal>
          <p className="kicker">{T.projects.kicker}</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">{T.projects.title}</h2>
        </Reveal>
        <Reveal>
          <p className="section__sub">{T.projects.sub}</p>
        </Reveal>

        <div className="filters" role="group" aria-label={T.projects.filterAria}>
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn${filter === f ? ' active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {labelFor(f)} <span className="filter-count">{loading ? '…' : countFor(f)}</span>
            </button>
          ))}
        </div>

        {loading && (
          <p className="state-msg" role="status">
            {T.projects.loading}
          </p>
        )}

        {!loading && error && (
          <p className="state-msg state-msg--error" role="alert">
            {T.projects.error.replace('{error}', error)}{' '}
            <a href="https://github.com/RomeroTalledo?tab=repositories" target="_blank" rel="noopener">
              {T.projects.errorLink}
            </a>
          </p>
        )}

        {!loading && !error && visible.length === 0 && (
          <p className="state-msg">
            {filter === 'Todos'
              ? T.projects.emptyAll
              : T.projects.emptyOne.replace('{cat}', labelFor(filter))}
          </p>
        )}

        {!loading && !error && visible.length > 0 && (
          <div className="proj-grid">
            {visible.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

      {selected && <ProjectModal repo={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
