import movies_found from '../mocks/movies_found.json'

export function UseMovies() {
  const movies = movies_found.Search

  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,

  }))

  return { movies: mappedMovies }
}