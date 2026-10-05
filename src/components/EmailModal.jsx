import { useEffect, useState } from 'react'
import { EMAIL } from '../data/profile.js'

// EmailModal: ventanita para copiar el correo.
// Props: open (bool) + onClose(). La abre Hero y Contact vía App.
export default function EmailModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    setCopied(false)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="modal-backdrop open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="emailModalTitle">
        <button className="modal__close" onClick={onClose} aria-label="Cerrar" autoFocus>
          ×
        </button>
        <h3 id="emailModalTitle">Mi correo</h3>
        <p className="modal__mail">{EMAIL}</p>
        <div className="modal__actions">
          <button type="button" className="btn btn--primary btn--small" onClick={copy}>
            {copied ? '¡Copiado! ✓' : 'Copiar'}
          </button>
          <a className="btn btn--ghost btn--small" href={`mailto:${EMAIL}`}>
            Escribir
          </a>
        </div>
      </div>
    </div>
  )
}
