import { useEffect, useState } from 'react'
import { fetchRepos } from '../lib/github.js'

// useRepos: trae los repos de GitHub una sola vez (al montar).
// Devuelve { repos, loading, error } para pintar cada estado.
export function useRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController() // para cancelar si se desmonta
    fetchRepos(controller.signal)
      .then(setRepos)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))
    return () => controller.abort() // limpieza del efecto
  }, []) // [] = solo al montar el componente

  return { repos, loading, error }
}
