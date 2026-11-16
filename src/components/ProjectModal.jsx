import { useEffect } from 'react'
import { categorizeRepo, demoUrlFor, prettyName, techTagsFor } from '../lib/github.js'
import { useLang } from '../context/LangContext.jsx'

// ProjectModal: ventana de detalle al hacer clic en un proyecto.
// Se cierra con ×, clic fuera o tecla Escape. Lleva el foco al abrir.
export default function ProjectModal({ repo, onClose }) {
  // useLang va ANTES del return temprano: los hooks no pueden condicionarse.
  const { T, lang } = useLang()

  // Cerrar con Escape (con limpieza al desmontar).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // bloquea el scroll de fondo
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!repo) return null
  const demo = demoUrlFor(repo)
  const tags = techTagsFor(repo, [T.projects.codeTag])
  // La fecha se formatea según el idioma activo.
  const updated = new Date(repo.updated_at).toLocaleDateString(
    lang === 'es' ? 'es-PE' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' },
  )

  return (
    <div
      className="modal-backdrop open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal modal--wide" role="dialog" aria-modal="true" aria-labelledby="projTitle">
        <button className="modal__close" onClick={onClose} aria-label={T.projects.closeDetails} autoFocus>
          ×
        </button>
        <p className="kicker">{categorizeRepo(repo)}</p>
        <h3 id="projTitle">{prettyName(repo.name)}</h3>
        <p className="modal__desc">{repo.description || T.projects.repoFallback}</p>
        <div className="proj__tags modal__tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <p className="modal__meta">
          ⭐ {repo.stargazers_count} &nbsp;·&nbsp; 🍴 {repo.forks_count} &nbsp;·&nbsp; 🕒 {updated}
        </p>
        <div className="modal__actions">
          {demo && (
            <a className="btn btn--primary btn--small" href={demo} target="_blank" rel="noopener">
              {T.projects.modalDemo}
            </a>
          )}
          <a className="btn btn--ghost btn--small" href={repo.html_url} target="_blank" rel="noopener">
            {T.projects.modalRepo}
          </a>
        </div>
      </div>
    </div>
  )
}
