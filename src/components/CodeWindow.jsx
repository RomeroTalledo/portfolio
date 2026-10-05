import { useEffect, useState } from 'react'
import { CODE_LINES } from '../data/profile.js'

// CodeWindow: la ventana dev.js que "se escribe" línea por línea, en bucle.
// `visible` = cuántas líneas ya se mostraron.
export default function CodeWindow() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible < CODE_LINES.length) {
      const t = setTimeout(() => setVisible((v) => v + 1), 650)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisible(0), 4500) // pausa y reinicia
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="codewin" aria-hidden="true">
      <div className="codewin__bar">
        <span className="dot d--r" />
        <span className="dot d--y" />
        <span className="dot d--g" />
        <span className="codewin__tab">dev.js</span>
      </div>
      <div className="codewin__body">
        {CODE_LINES.map((tokens, i) => (
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
