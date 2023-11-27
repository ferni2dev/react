import { useState, useEffect, useRef } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    console.log('serach-> ' + search)
    if (isFirstInput.current) {
      isFirstInput.current = false
      return
    }
    if (search === '') {
      setError('Introduce algo en el cuadro de texto para buscar')
      return
    }
    if (search.length < 3) {
      setError('Introduce más de tres letras para buscar')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}