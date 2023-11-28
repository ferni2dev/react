import { useCallback } from "react"
import { getMovies } from '../services/movies'

export function useMovies({ setMovies }) {
  const foundMovies = useCallback(async ({ search }) => {
    const newMovies = await getMovies({ search })
    setMovies(newMovies)
  }, [setMovies])

  return { foundMovies }
}