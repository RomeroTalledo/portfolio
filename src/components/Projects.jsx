import { useMemo, useState } from 'react'
import { categorizeRepo } from '../lib/github.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Reveal from './Reveal.jsx'

const FILTERS = ['Todos', 'Frontend', 'Backend', 'SQL']

// Projects: recibe { repos, loading, error } desde App (un solo fetch).
// Filtra por categoría y abre el modal de detalle al elegir tarjeta.
export default function Projects({ repos, loading, error }) {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)

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
          <p className="kicker">Proyectos</p>
        </Reveal>
        <Reveal>
          <h2 className="section__title">Mis proyectos</h2>
        </Reveal>
        <Reveal>
          <p className="section__sub">Traídos automáticamente desde mi GitHub.</p>
        </Reveal>

        <div className="filters" role="group" aria-label="Filtrar proyectos por categoría">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn${filter === f ? ' active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f} <span className="filter-count">{loading ? '…' : countFor(f)}</span>
            </button>
          ))}
        </div>

        {loading && <p className="state-msg" role="status">Cargando proyectos desde GitHub…</p>}

        {!loading && error && (
          <p className="state-msg state-msg--error" role="alert">
            ⚠️ No se pudieron cargar los proyectos ({error}).{' '}
            <a href="https://github.com/RomeroTalledo?tab=repositories" target="_blank" rel="noopener">
              Verlos en GitHub →
            </a>
          </p>
        )}

        {!loading && !error && visible.length === 0 && (
          <p className="state-msg">
            {filter === 'Todos'
              ? 'Aún no hay proyectos publicados — están en camino. 🚧'
              : `Aún no hay proyectos ${filter} publicados — están en camino. 🚧`}
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
