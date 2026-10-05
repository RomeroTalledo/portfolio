import { useEffect, useState } from 'react'

// useTypewriter: escribe las líneas letra por letra, en bucle.
// Devuelve el texto visible actual. Úsalo dentro de un <span>.
export function useTypewriter(lines, typeMs = 85, holdMs = 2600, eraseMs = 40) {
  const [text, setText] = useState('')
  const [line, setLine] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = lines[line % lines.length]
    let delay
    if (!deleting && text.length < current.length) {
      delay = typeMs // escribiendo
    } else if (!deleting) {
      delay = holdMs // línea completa: pausa
    } else if (text.length > 0) {
      delay = eraseMs // borrando
    } else {
      delay = 500 // línea vacía: pasa a la siguiente
    }

    const t = setTimeout(() => {
      if (!deleting && text.length < current.length) {
        setText(current.slice(0, text.length + 1))
      } else if (!deleting) {
        setDeleting(true)
      } else if (text.length > 0) {
        setText(current.slice(0, text.length - 1))
      } else {
        setDeleting(false)
        setLine((l) => (l + 1) % lines.length)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, line, deleting, lines, typeMs, holdMs, eraseMs])

  return text
}
