import { Fragment } from 'react'

// Bold: convierte **texto** del diccionario en <strong>texto</strong>.
// Así podemos guardar párrafos con negritas como strings simples
// (los diccionarios son datos, no JSX).
//   'Soy **Dallin Romero**, dev'  →  Soy <strong>Dallin Romero</strong>, dev
export default function Bold({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part && part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
