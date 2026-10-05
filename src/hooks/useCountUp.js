import { useEffect, useState } from 'react'

// useCountUp: cuenta de 0 hasta `target` cuando `start` es true.
export function useCountUp(target, start, stepMs = 200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    if (target === 0) return
    let current = 0
    const t = setInterval(() => {
      current += 1
      setValue(current)
      if (current >= target) clearInterval(t)
    }, stepMs)
    return () => clearInterval(t)
  }, [target, start, stepMs])

  return value
}
