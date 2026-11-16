import { useEffect, useMemo, useState } from 'react'
import { codeLinesFor } from '../data/profile.js'
import { useLang } from '../context/LangContext.jsx'

// CodeWindow: la ventana dev.js que "se escribe" línea por línea, en bucle.
// `visible` = cuántas líneas ya se mostraron.
export default function CodeWindow() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(0)
  // useMemo: sin él, `lines` sería un array nuevo en cada render y el
  // efecto de abajo se reiniciaría sin parar (la ventana nunca avanzaría).
  const lines = useMemo(() => codeLinesFor(lang), [lang])

  useEffect(() => {
    if (visible < lines.length) {
      const t = setTimeout(() => setVisible((v) => v + 1), 650)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisible(0), 4500) // pausa y reinicia
    return () => clearTimeout(t)
  }, [visible, lines])

  return (
    <div className="codewin" aria-hidden="true">
      <div className="codewin__bar">
        <span className="dot d--r" />
        <span className="dot d--y" />
        <span className="dot d--g" />
        <span className="codewin__tab">dev.js</span>
      </div>
      <div className="codewin__body">
        {lines.map((tokens, i) => (
          <div key={i} className={`code-line${i < visible ? ' on' : ''}`}>
            {tokens.length === 0 ? (
              <>&nbsp;</>
            ) : (
              tokens.map(([cls, text], j) => (
                <span key={j} className={cls}>
                  {text}
                </span>
              ))
            )}
          </div>
        ))}
      </div>
      <div className="codewin__status">
        <span>● live</span>
        <span>JS · UTF-8</span>
      </div>
    </div>
  )
}
